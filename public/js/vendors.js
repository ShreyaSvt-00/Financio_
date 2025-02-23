if (function(t, e) {
        "use strict";
        "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
            if (!t.document) throw new Error("jQuery requires a window with a document");
            return e(t)
        } : e(t)
    }("undefined" != typeof window ? window : this, function(t, e) {
        "use strict";

        function n(t, e, n) {
            n = n || wt;
            var i, o, r = n.createElement("script");
            if (r.text = t, e)
                for (i in Tt)(o = e[i] || e.getAttribute && e.getAttribute(i)) && r.setAttribute(i, o);
            n.head.appendChild(r).parentNode.removeChild(r)
        }

        function i(t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? pt[ht.call(t)] || "object" : typeof t
        }

        function o(t) {
            var e = !!t && "length" in t && t.length,
                n = i(t);
            return !bt(t) && !xt(t) && ("array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
        }

        function r(t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        }

        function s(t, e, n) {
            return bt(e) ? Ct.grep(t, function(t, i) {
                return !!e.call(t, i, t) !== n
            }) : e.nodeType ? Ct.grep(t, function(t) {
                return t === e !== n
            }) : "string" != typeof e ? Ct.grep(t, function(t) {
                return dt.call(e, t) > -1 !== n
            }) : Ct.filter(e, t, n)
        }

        function a(t, e) {
            for (;
                (t = t[e]) && 1 !== t.nodeType;);
            return t
        }

        function l(t) {
            var e = {};
            return Ct.each(t.match(Ot) || [], function(t, n) {
                e[n] = !0
            }), e
        }

        function u(t) {
            return t
        }

        function c(t) {
            throw t
        }

        function f(t, e, n, i) {
            var o;
            try {
                t && bt(o = t.promise) ? o.call(t).done(e).fail(n) : t && bt(o = t.then) ? o.call(t, e, n) : e.apply(void 0, [t].slice(i))
            } catch (t) {
                n.apply(void 0, [t])
            }
        }

        function d() {
            wt.removeEventListener("DOMContentLoaded", d), t.removeEventListener("load", d), Ct.ready()
        }

        function p(t, e) {
            return e.toUpperCase()
        }

        function h(t) {
            return t.replace(Ht, "ms-").replace(Pt, p)
        }

        function g() {
            this.expando = Ct.expando + g.uid++
        }

        function m(t) {
            return "true" === t || "false" !== t && ("null" === t ? null : t === +t + "" ? +t : Bt.test(t) ? JSON.parse(t) : t)
        }

        function v(t, e, n) {
            var i;
            if (void 0 === n && 1 === t.nodeType)
                if (i = "data-" + e.replace(Ut, "-$&").toLowerCase(), "string" == typeof(n = t.getAttribute(i))) {
                    try {
                        n = m(n)
                    } catch (t) {}
                    Wt.set(t, e, n)
                } else n = void 0;
            return n
        }

        function y(t, e, n, i) {
            var o, r, s = 20,
                a = i ? function() {
                    return i.cur()
                } : function() {
                    return Ct.css(t, e, "")
                },
                l = a(),
                u = n && n[3] || (Ct.cssNumber[e] ? "" : "px"),
                c = t.nodeType && (Ct.cssNumber[e] || "px" !== u && +l) && zt.exec(Ct.css(t, e));
            if (c && c[3] !== u) {
                for (l /= 2, u = u || c[3], c = +l || 1; s--;) Ct.style(t, e, c + u), (1 - r) * (1 - (r = a() / l || .5)) <= 0 && (s = 0), c /= r;
                c *= 2, Ct.style(t, e, c + u), n = n || []
            }
            return n && (c = +c || +l || 0, o = n[1] ? c + (n[1] + 1) * n[2] : +n[2], i && (i.unit = u, i.start = c, i.end = o)), o
        }

        function b(t) {
            var e, n = t.ownerDocument,
                i = t.nodeName,
                o = Jt[i];
            return o || (e = n.body.appendChild(n.createElement(i)), o = Ct.css(e, "display"), e.parentNode.removeChild(e), "none" === o && (o = "block"), Jt[i] = o, o)
        }

        function x(t, e) {
            for (var n, i, o = [], r = 0, s = t.length; r < s; r++) i = t[r], i.style && (n = i.style.display, e ? ("none" === n && (o[r] = Ft.get(i, "display") || null, o[r] || (i.style.display = "")), "" === i.style.display && Yt(i) && (o[r] = b(i))) : "none" !== n && (o[r] = "none", Ft.set(i, "display", n)));
            for (r = 0; r < s; r++) null != o[r] && (t[r].style.display = o[r]);
            return t
        }

        function w(t, e) {
            var n;
            return n = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [], void 0 === e || e && r(t, e) ? Ct.merge([t], n) : n
        }

        function T(t, e) {
            for (var n = 0, i = t.length; n < i; n++) Ft.set(t[n], "globalEval", !e || Ft.get(e[n], "globalEval"))
        }

        function C(t, e, n, o, r) {
            for (var s, a, l, u, c, f, d = e.createDocumentFragment(), p = [], h = 0, g = t.length; h < g; h++)
                if ((s = t[h]) || 0 === s)
                    if ("object" === i(s)) Ct.merge(p, s.nodeType ? [s] : s);
                    else if (ne.test(s)) {
                for (a = a || d.appendChild(e.createElement("div")), l = (Zt.exec(s) || ["", ""])[1].toLowerCase(), u = ee[l] || ee._default, a.innerHTML = u[1] + Ct.htmlPrefilter(s) + u[2], f = u[0]; f--;) a = a.lastChild;
                Ct.merge(p, a.childNodes), a = d.firstChild, a.textContent = ""
            } else p.push(e.createTextNode(s));
            for (d.textContent = "", h = 0; s = p[h++];)
                if (o && Ct.inArray(s, o) > -1) r && r.push(s);
                else if (c = Xt(s), a = w(d.appendChild(s), "script"), c && T(a), n)
                for (f = 0; s = a[f++];) te.test(s.type || "") && n.push(s);
            return d
        }

        function E() {
            return !0
        }

        function S() {
            return !1
        }

        function $(t, e) {
            return t === k() == ("focus" === e)
        }

        function k() {
            try {
                return wt.activeElement
            } catch (t) {}
        }

        function A(t, e, n, i, o, r) {
            var s, a;
            if ("object" == typeof e) {
                "string" != typeof n && (i = i || n, n = void 0);
                for (a in e) A(t, a, n, i, e[a], r);
                return t
            }
            if (null == i && null == o ? (o = n, i = n = void 0) : null == o && ("string" == typeof n ? (o = i, i = void 0) : (o = i, i = n, n = void 0)), !1 === o) o = S;
            else if (!o) return t;
            return 1 === r && (s = o, o = function(t) {
                return Ct().off(t), s.apply(this, arguments)
            }, o.guid = s.guid || (s.guid = Ct.guid++)), t.each(function() {
                Ct.event.add(this, e, o, i, n)
            })
        }

        function D(t, e, n) {
            if (!n) return void(void 0 === Ft.get(t, e) && Ct.event.add(t, e, E));
            Ft.set(t, e, !1), Ct.event.add(t, e, {
                namespace: !1,
                handler: function(t) {
                    var i, o, r = Ft.get(this, e);
                    if (1 & t.isTrigger && this[e]) {
                        if (r.length)(Ct.event.special[e] || {}).delegateType && t.stopPropagation();
                        else if (r = ut.call(arguments), Ft.set(this, e, r), i = n(this, e), this[e](), o = Ft.get(this, e), r !== o || i ? Ft.set(this, e, !1) : o = {}, r !== o) return t.stopImmediatePropagation(), t.preventDefault(), o && o.value
                    } else r.length && (Ft.set(this, e, {
                        value: Ct.event.trigger(Ct.extend(r[0], Ct.Event.prototype), r.slice(1), this)
                    }), t.stopImmediatePropagation())
                }
            })
        }

        function N(t, e) {
            return r(t, "table") && r(11 !== e.nodeType ? e : e.firstChild, "tr") ? Ct(t).children("tbody")[0] || t : t
        }

        function j(t) {
            return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
        }

        function I(t) {
            return "true/" === (t.type || "").slice(0, 5) ? t.type = t.type.slice(5) : t.removeAttribute("type"), t
        }

        function O(t, e) {
            var n, i, o, r, s, a, l;
            if (1 === e.nodeType) {
                if (Ft.hasData(t) && (r = Ft.get(t), l = r.events)) {
                    Ft.remove(e, "handle events");
                    for (o in l)
                        for (n = 0, i = l[o].length; n < i; n++) Ct.event.add(e, o, l[o][n])
                }
                Wt.hasData(t) && (s = Wt.access(t), a = Ct.extend({}, s), Wt.set(e, a))
            }
        }

        function L(t, e) {
            var n = e.nodeName.toLowerCase();
            "input" === n && Kt.test(t.type) ? e.checked = t.checked : "input" !== n && "textarea" !== n || (e.defaultValue = t.defaultValue)
        }

        function R(t, e, i, o) {
            e = ct(e);
            var r, s, a, l, u, c, f = 0,
                d = t.length,
                p = d - 1,
                h = e[0],
                g = bt(h);
            if (g || d > 1 && "string" == typeof h && !yt.checkClone && re.test(h)) return t.each(function(n) {
                var r = t.eq(n);
                g && (e[0] = h.call(this, n, r.html())), R(r, e, i, o)
            });
            if (d && (r = C(e, t[0].ownerDocument, !1, t, o), s = r.firstChild, 1 === r.childNodes.length && (r = s), s || o)) {
                for (a = Ct.map(w(r, "script"), j), l = a.length; f < d; f++) u = r, f !== p && (u = Ct.clone(u, !0, !0), l && Ct.merge(a, w(u, "script"))), i.call(t[f], u, f);
                if (l)
                    for (c = a[a.length - 1].ownerDocument, Ct.map(a, I), f = 0; f < l; f++) u = a[f], te.test(u.type || "") && !Ft.access(u, "globalEval") && Ct.contains(c, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? Ct._evalUrl && !u.noModule && Ct._evalUrl(u.src, {
                        nonce: u.nonce || u.getAttribute("nonce")
                    }, c) : n(u.textContent.replace(se, ""), u, c))
            }
            return t
        }

        function q(t, e, n) {
            for (var i, o = e ? Ct.filter(e, t) : t, r = 0; null != (i = o[r]); r++) n || 1 !== i.nodeType || Ct.cleanData(w(i)), i.parentNode && (n && Xt(i) && T(w(i, "script")), i.parentNode.removeChild(i));
            return t
        }

        function H(t, e, n) {
            var i, o, r, s, a = t.style;
            return n = n || le(t), n && (s = n.getPropertyValue(e) || n[e], "" !== s || Xt(t) || (s = Ct.style(t, e)), !yt.pixelBoxStyles() && ae.test(s) && ce.test(e) && (i = a.width, o = a.minWidth, r = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = o, a.maxWidth = r)), void 0 !== s ? s + "" : s
        }

        function P(t, e) {
            return {
                get: function() {
                    return t() ? void delete this.get : (this.get = e).apply(this, arguments)
                }
            }
        }

        function M(t) {
            for (var e = t[0].toUpperCase() + t.slice(1), n = fe.length; n--;)
                if ((t = fe[n] + e) in de) return t
        }

        function F(t) {
            var e = Ct.cssProps[t] || pe[t];
            return e || (t in de ? t : pe[t] = M(t) || t)
        }

        function W(t, e, n) {
            var i = zt.exec(e);
            return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : e
        }

        function B(t, e, n, i, o, r) {
            var s = "width" === e ? 1 : 0,
                a = 0,
                l = 0;
            if (n === (i ? "border" : "content")) return 0;
            for (; s < 4; s += 2) "margin" === n && (l += Ct.css(t, n + Vt[s], !0, o)), i ? ("content" === n && (l -= Ct.css(t, "padding" + Vt[s], !0, o)), "margin" !== n && (l -= Ct.css(t, "border" + Vt[s] + "Width", !0, o))) : (l += Ct.css(t, "padding" + Vt[s], !0, o), "padding" !== n ? l += Ct.css(t, "border" + Vt[s] + "Width", !0, o) : a += Ct.css(t, "border" + Vt[s] + "Width", !0, o));
            return !i && r >= 0 && (l += Math.max(0, Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - r - l - a - .5)) || 0), l
        }

        function U(t, e, n) {
            var i = le(t),
                o = !yt.boxSizingReliable() || n,
                s = o && "border-box" === Ct.css(t, "boxSizing", !1, i),
                a = s,
                l = H(t, e, i),
                u = "offset" + e[0].toUpperCase() + e.slice(1);
            if (ae.test(l)) {
                if (!n) return l;
                l = "auto"
            }
            return (!yt.boxSizingReliable() && s || !yt.reliableTrDimensions() && r(t, "tr") || "auto" === l || !parseFloat(l) && "inline" === Ct.css(t, "display", !1, i)) && t.getClientRects().length && (s = "border-box" === Ct.css(t, "boxSizing", !1, i), (a = u in t) && (l = t[u])), (l = parseFloat(l) || 0) + B(t, e, n || (s ? "border" : "content"), a, i, l) + "px"
        }

        function _(t, e, n, i, o) {
            return new _.prototype.init(t, e, n, i, o)
        }

        function z() {
            be && (!1 === wt.hidden && t.requestAnimationFrame ? t.requestAnimationFrame(z) : t.setTimeout(z, Ct.fx.interval), Ct.fx.tick())
        }

        function V() {
            return t.setTimeout(function() {
                ye = void 0
            }), ye = Date.now()
        }

        function Q(t, e) {
            var n, i = 0,
                o = {
                    height: t
                };
            for (e = e ? 1 : 0; i < 4; i += 2 - e) n = Vt[i], o["margin" + n] = o["padding" + n] = t;
            return e && (o.opacity = o.width = t), o
        }

        function X(t, e, n) {
            for (var i, o = (J.tweeners[e] || []).concat(J.tweeners["*"]), r = 0, s = o.length; r < s; r++)
                if (i = o[r].call(n, e, t)) return i
        }

        function G(t, e, n) {
            var i, o, r, s, a, l, u, c, f = "width" in e || "height" in e,
                d = this,
                p = {},
                h = t.style,
                g = t.nodeType && Yt(t),
                m = Ft.get(t, "fxshow");
            n.queue || (s = Ct._queueHooks(t, "fx"), null == s.unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function() {
                s.unqueued || a()
            }), s.unqueued++, d.always(function() {
                d.always(function() {
                    s.unqueued--, Ct.queue(t, "fx").length || s.empty.fire()
                })
            }));
            for (i in e)
                if (o = e[i], xe.test(o)) {
                    if (delete e[i], r = r || "toggle" === o, o === (g ? "hide" : "show")) {
                        if ("show" !== o || !m || void 0 === m[i]) continue;
                        g = !0
                    }
                    p[i] = m && m[i] || Ct.style(t, i)
                }
            if ((l = !Ct.isEmptyObject(e)) || !Ct.isEmptyObject(p)) {
                f && 1 === t.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], u = m && m.display, null == u && (u = Ft.get(t, "display")), c = Ct.css(t, "display"), "none" === c && (u ? c = u : (x([t], !0), u = t.style.display || u, c = Ct.css(t, "display"), x([t]))), ("inline" === c || "inline-block" === c && null != u) && "none" === Ct.css(t, "float") && (l || (d.done(function() {
                    h.display = u
                }), null == u && (c = h.display, u = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", d.always(function() {
                    h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
                })), l = !1;
                for (i in p) l || (m ? "hidden" in m && (g = m.hidden) : m = Ft.access(t, "fxshow", {
                    display: u
                }), r && (m.hidden = !g), g && x([t], !0), d.done(function() {
                    g || x([t]), Ft.remove(t, "fxshow");
                    for (i in p) Ct.style(t, i, p[i])
                })), l = X(g ? m[i] : 0, i, d), i in m || (m[i] = l.start, g && (l.end = l.start, l.start = 0))
            }
        }

        function Y(t, e) {
            var n, i, o, r, s;
            for (n in t)
                if (i = h(n), o = e[i], r = t[n], Array.isArray(r) && (o = r[1], r = t[n] = r[0]), n !== i && (t[i] = r, delete t[n]), (s = Ct.cssHooks[i]) && "expand" in s) {
                    r = s.expand(r), delete t[i];
                    for (n in r) n in t || (t[n] = r[n], e[n] = o)
                } else e[i] = o
        }

        function J(t, e, n) {
            var i, o, r = 0,
                s = J.prefilters.length,
                a = Ct.Deferred().always(function() {
                    delete l.elem
                }),
                l = function() {
                    if (o) return !1;
                    for (var e = ye || V(), n = Math.max(0, u.startTime + u.duration - e), i = n / u.duration || 0, r = 1 - i, s = 0, l = u.tweens.length; s < l; s++) u.tweens[s].run(r);
                    return a.notifyWith(t, [u, r, n]), r < 1 && l ? n : (l || a.notifyWith(t, [u, 1, 0]), a.resolveWith(t, [u]), !1)
                },
                u = a.promise({
                    elem: t,
                    props: Ct.extend({}, e),
                    opts: Ct.extend(!0, {
                        specialEasing: {},
                        easing: Ct.easing._default
                    }, n),
                    originalProperties: e,
                    originalOptions: n,
                    startTime: ye || V(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function(e, n) {
                        var i = Ct.Tween(t, u.opts, e, n, u.opts.specialEasing[e] || u.opts.easing);
                        return u.tweens.push(i), i
                    },
                    stop: function(e) {
                        var n = 0,
                            i = e ? u.tweens.length : 0;
                        if (o) return this;
                        for (o = !0; n < i; n++) u.tweens[n].run(1);
                        return e ? (a.notifyWith(t, [u, 1, 0]), a.resolveWith(t, [u, e])) : a.rejectWith(t, [u, e]), this
                    }
                }),
                c = u.props;
            for (Y(c, u.opts.specialEasing); r < s; r++)
                if (i = J.prefilters[r].call(u, t, c, u.opts)) return bt(i.stop) && (Ct._queueHooks(u.elem, u.opts.queue).stop = i.stop.bind(i)), i;
            return Ct.map(c, X, u), bt(u.opts.start) && u.opts.start.call(t, u), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always), Ct.fx.timer(Ct.extend(l, {
                elem: t,
                anim: u,
                queue: u.opts.queue
            })), u
        }

        function K(t) {
            return (t.match(Ot) || []).join(" ")
        }

        function Z(t) {
            return t.getAttribute && t.getAttribute("class") || ""
        }

        function tt(t) {
            return Array.isArray(t) ? t : "string" == typeof t ? t.match(Ot) || [] : []
        }

        function et(t, e, n, o) {
            var r;
            if (Array.isArray(e)) Ct.each(e, function(e, i) {
                n || Ie.test(t) ? o(t, i) : et(t + "[" + ("object" == typeof i && null != i ? e : "") + "]", i, n, o)
            });
            else if (n || "object" !== i(e)) o(t, e);
            else
                for (r in e) et(t + "[" + r + "]", e[r], n, o)
        }

        function nt(t) {
            return function(e, n) {
                "string" != typeof e && (n = e, e = "*");
                var i, o = 0,
                    r = e.toLowerCase().match(Ot) || [];
                if (bt(n))
                    for (; i = r[o++];) "+" === i[0] ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
            }
        }

        function it(t, e, n, i) {
            function o(a) {
                var l;
                return r[a] = !0, Ct.each(t[a] || [], function(t, a) {
                    var u = a(e, n, i);
                    return "string" != typeof u || s || r[u] ? s ? !(l = u) : void 0 : (e.dataTypes.unshift(u), o(u), !1)
                }), l
            }
            var r = {},
                s = t === _e;
            return o(e.dataTypes[0]) || !r["*"] && o("*")
        }

        function ot(t, e) {
            var n, i, o = Ct.ajaxSettings.flatOptions || {};
            for (n in e) void 0 !== e[n] && ((o[n] ? t : i || (i = {}))[n] = e[n]);
            return i && Ct.extend(!0, t, i), t
        }

        function rt(t, e, n) {
            for (var i, o, r, s, a = t.contents, l = t.dataTypes;
                "*" === l[0];) l.shift(), void 0 === i && (i = t.mimeType || e.getResponseHeader("Content-Type"));
            if (i)
                for (o in a)
                    if (a[o] && a[o].test(i)) {
                        l.unshift(o);
                        break
                    }
            if (l[0] in n) r = l[0];
            else {
                for (o in n) {
                    if (!l[0] || t.converters[o + " " + l[0]]) {
                        r = o;
                        break
                    }
                    s || (s = o)
                }
                r = r || s
            }
            if (r) return r !== l[0] && l.unshift(r), n[r]
        }

        function st(t, e, n, i) {
            var o, r, s, a, l, u = {},
                c = t.dataTypes.slice();
            if (c[1])
                for (s in t.converters) u[s.toLowerCase()] = t.converters[s];
            for (r = c.shift(); r;)
                if (t.responseFields[r] && (n[t.responseFields[r]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = r, r = c.shift())
                    if ("*" === r) r = l;
                    else if ("*" !== l && l !== r) {
                if (!(s = u[l + " " + r] || u["* " + r]))
                    for (o in u)
                        if (a = o.split(" "), a[1] === r && (s = u[l + " " + a[0]] || u["* " + a[0]])) {
                            !0 === s ? s = u[o] : !0 !== u[o] && (r = a[0], c.unshift(a[1]));
                            break
                        }
                if (!0 !== s)
                    if (s && t.throws) e = s(e);
                    else try {
                        e = s(e)
                    } catch (t) {
                        return {
                            state: "parsererror",
                            error: s ? t : "No conversion from " + l + " to " + r
                        }
                    }
            }
            return {
                state: "success",
                data: e
            }
        }
        var at = [],
            lt = Object.getPrototypeOf,
            ut = at.slice,
            ct = at.flat ? function(t) {
                return at.flat.call(t)
            } : function(t) {
                return at.concat.apply([], t)
            },
            ft = at.push,
            dt = at.indexOf,
            pt = {},
            ht = pt.toString,
            gt = pt.hasOwnProperty,
            mt = gt.toString,
            vt = mt.call(Object),
            yt = {},
            bt = function(t) {
                return "function" == typeof t && "number" != typeof t.nodeType && "function" != typeof t.item
            },
            xt = function(t) {
                return null != t && t === t.window
            },
            wt = t.document,
            Tt = {
                type: !0,
                src: !0,
                nonce: !0,
                noModule: !0
            },
            Ct = function(t, e) {
                return new Ct.fn.init(t, e)
            };
        Ct.fn = Ct.prototype = {
            jquery: "3.6.0",
            constructor: Ct,
            length: 0,
            toArray: function() {
                return ut.call(this)
            },
            get: function(t) {
                return null == t ? ut.call(this) : t < 0 ? this[t + this.length] : this[t]
            },
            pushStack: function(t) {
                var e = Ct.merge(this.constructor(), t);
                return e.prevObject = this, e
            },
            each: function(t) {
                return Ct.each(this, t)
            },
            map: function(t) {
                return this.pushStack(Ct.map(this, function(e, n) {
                    return t.call(e, n, e)
                }))
            },
            slice: function() {
                return this.pushStack(ut.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            even: function() {
                return this.pushStack(Ct.grep(this, function(t, e) {
                    return (e + 1) % 2
                }))
            },
            odd: function() {
                return this.pushStack(Ct.grep(this, function(t, e) {
                    return e % 2
                }))
            },
            eq: function(t) {
                var e = this.length,
                    n = +t + (t < 0 ? e : 0);
                return this.pushStack(n >= 0 && n < e ? [this[n]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor()
            },
            push: ft,
            sort: at.sort,
            splice: at.splice
        }, Ct.extend = Ct.fn.extend = function() {
            var t, e, n, i, o, r, s = arguments[0] || {},
                a = 1,
                l = arguments.length,
                u = !1;
            for ("boolean" == typeof s && (u = s, s = arguments[a] || {}, a++), "object" == typeof s || bt(s) || (s = {}), a === l && (s = this, a--); a < l; a++)
                if (null != (t = arguments[a]))
                    for (e in t) i = t[e], "__proto__" !== e && s !== i && (u && i && (Ct.isPlainObject(i) || (o = Array.isArray(i))) ? (n = s[e], r = o && !Array.isArray(n) ? [] : o || Ct.isPlainObject(n) ? n : {}, o = !1, s[e] = Ct.extend(u, r, i)) : void 0 !== i && (s[e] = i));
            return s
        }, Ct.extend({
            expando: "jQuery" + ("3.6.0" + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(t) {
                throw new Error(t)
            },
            noop: function() {},
            isPlainObject: function(t) {
                var e, n;
                return !(!t || "[object Object]" !== ht.call(t)) && (!(e = lt(t)) || "function" == typeof(n = gt.call(e, "constructor") && e.constructor) && mt.call(n) === vt)
            },
            isEmptyObject: function(t) {
                var e;
                for (e in t) return !1;
                return !0
            },
            globalEval: function(t, e, i) {
                n(t, {
                    nonce: e && e.nonce
                }, i)
            },
            each: function(t, e) {
                var n, i = 0;
                if (o(t))
                    for (n = t.length; i < n && !1 !== e.call(t[i], i, t[i]); i++);
                else
                    for (i in t)
                        if (!1 === e.call(t[i], i, t[i])) break;
                return t
            },
            makeArray: function(t, e) {
                var n = e || [];
                return null != t && (o(Object(t)) ? Ct.merge(n, "string" == typeof t ? [t] : t) : ft.call(n, t)), n
            },
            inArray: function(t, e, n) {
                return null == e ? -1 : dt.call(e, t, n)
            },
            merge: function(t, e) {
                for (var n = +e.length, i = 0, o = t.length; i < n; i++) t[o++] = e[i];
                return t.length = o, t
            },
            grep: function(t, e, n) {
                for (var i = [], o = 0, r = t.length, s = !n; o < r; o++) !e(t[o], o) !== s && i.push(t[o]);
                return i
            },
            map: function(t, e, n) {
                var i, r, s = 0,
                    a = [];
                if (o(t))
                    for (i = t.length; s < i; s++) null != (r = e(t[s], s, n)) && a.push(r);
                else
                    for (s in t) null != (r = e(t[s], s, n)) && a.push(r);
                return ct(a)
            },
            guid: 1,
            support: yt
        }), "function" == typeof Symbol && (Ct.fn[Symbol.iterator] = at[Symbol.iterator]), Ct.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(t, e) {
            pt["[object " + e + "]"] = e.toLowerCase()
        });
        var Et = function(t) {
            function e(t, e, n, i) {
                var o, r, s, a, l, c, d, p = e && e.ownerDocument,
                    h = e ? e.nodeType : 9;
                if (n = n || [], "string" != typeof t || !t || 1 !== h && 9 !== h && 11 !== h) return n;
                if (!i && (N(e), e = e || j, O)) {
                    if (11 !== h && (l = vt.exec(t)))
                        if (o = l[1]) {
                            if (9 === h) {
                                if (!(s = e.getElementById(o))) return n;
                                if (s.id === o) return n.push(s), n
                            } else if (p && (s = p.getElementById(o)) && H(e, s) && s.id === o) return n.push(s), n
                        } else {
                            if (l[2]) return J.apply(n, e.getElementsByTagName(t)), n;
                            if ((o = l[3]) && x.getElementsByClassName && e.getElementsByClassName) return J.apply(n, e.getElementsByClassName(o)), n
                        }
                    if (x.qsa && !z[t + " "] && (!L || !L.test(t)) && (1 !== h || "object" !== e.nodeName.toLowerCase())) {
                        if (d = t, p = e, 1 === h && (ut.test(t) || lt.test(t))) {
                            for (p = yt.test(t) && u(e.parentNode) || e, p === e && x.scope || ((a = e.getAttribute("id")) ? a = a.replace(wt, Tt) : e.setAttribute("id", a = P)), c = E(t), r = c.length; r--;) c[r] = (a ? "#" + a : ":scope") + " " + f(c[r]);
                            d = c.join(",")
                        }
                        try {
                            return J.apply(n, p.querySelectorAll(d)), n
                        } catch (e) {
                            z(t, !0)
                        } finally {
                            a === P && e.removeAttribute("id")
                        }
                    }
                }
                return $(t.replace(st, "$1"), e, n, i)
            }

            function n() {
                function t(n, i) {
                    return e.push(n + " ") > w.cacheLength && delete t[e.shift()], t[n + " "] = i
                }
                var e = [];
                return t
            }

            function i(t) {
                return t[P] = !0, t
            }

            function o(t) {
                var e = j.createElement("fieldset");
                try {
                    return !!t(e)
                } catch (t) {
                    return !1
                } finally {
                    e.parentNode && e.parentNode.removeChild(e), e = null
                }
            }

            function r(t, e) {
                for (var n = t.split("|"), i = n.length; i--;) w.attrHandle[n[i]] = e
            }

            function s(t, e) {
                var n = e && t,
                    i = n && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
                if (i) return i;
                if (n)
                    for (; n = n.nextSibling;)
                        if (n === e) return -1;
                return t ? 1 : -1
            }

            function a(t) {
                return function(e) {
                    return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && Et(e) === t : e.disabled === t : "label" in e && e.disabled === t
                }
            }

            function l(t) {
                return i(function(e) {
                    return e = +e, i(function(n, i) {
                        for (var o, r = t([], n.length, e), s = r.length; s--;) n[o = r[s]] && (n[o] = !(i[o] = n[o]))
                    })
                })
            }

            function u(t) {
                return t && void 0 !== t.getElementsByTagName && t
            }

            function c() {}

            function f(t) {
                for (var e = 0, n = t.length, i = ""; e < n; e++) i += t[e].value;
                return i
            }

            function d(t, e, n) {
                var i = e.dir,
                    o = e.next,
                    r = o || i,
                    s = n && "parentNode" === r,
                    a = W++;
                return e.first ? function(e, n, o) {
                    for (; e = e[i];)
                        if (1 === e.nodeType || s) return t(e, n, o);
                    return !1
                } : function(e, n, l) {
                    var u, c, f, d = [F, a];
                    if (l) {
                        for (; e = e[i];)
                            if ((1 === e.nodeType || s) && t(e, n, l)) return !0
                    } else
                        for (; e = e[i];)
                            if (1 === e.nodeType || s)
                                if (f = e[P] || (e[P] = {}), c = f[e.uniqueID] || (f[e.uniqueID] = {}), o && o === e.nodeName.toLowerCase()) e = e[i] || e;
                                else {
                                    if ((u = c[r]) && u[0] === F && u[1] === a) return d[2] = u[2];
                                    if (c[r] = d, d[2] = t(e, n, l)) return !0
                                } return !1
                }
            }

            function p(t) {
                return t.length > 1 ? function(e, n, i) {
                    for (var o = t.length; o--;)
                        if (!t[o](e, n, i)) return !1;
                    return !0
                } : t[0]
            }

            function h(t, n, i) {
                for (var o = 0, r = n.length; o < r; o++) e(t, n[o], i);
                return i
            }

            function g(t, e, n, i, o) {
                for (var r, s = [], a = 0, l = t.length, u = null != e; a < l; a++)(r = t[a]) && (n && !n(r, i, o) || (s.push(r), u && e.push(a)));
                return s
            }

            function m(t, e, n, o, r, s) {
                return o && !o[P] && (o = m(o)), r && !r[P] && (r = m(r, s)), i(function(i, s, a, l) {
                    var u, c, f, d = [],
                        p = [],
                        m = s.length,
                        v = i || h(e || "*", a.nodeType ? [a] : a, []),
                        y = !t || !i && e ? v : g(v, d, t, a, l),
                        b = n ? r || (i ? t : m || o) ? [] : s : y;
                    if (n && n(y, b, a, l), o)
                        for (u = g(b, p), o(u, [], a, l), c = u.length; c--;)(f = u[c]) && (b[p[c]] = !(y[p[c]] = f));
                    if (i) {
                        if (r || t) {
                            if (r) {
                                for (u = [], c = b.length; c--;)(f = b[c]) && u.push(y[c] = f);
                                r(null, b = [], u, l)
                            }
                            for (c = b.length; c--;)(f = b[c]) && (u = r ? Z(i, f) : d[c]) > -1 && (i[u] = !(s[u] = f))
                        }
                    } else b = g(b === s ? b.splice(m, b.length) : b), r ? r(null, s, b, l) : J.apply(s, b)
                })
            }

            function v(t) {
                for (var e, n, i, o = t.length, r = w.relative[t[0].type], s = r || w.relative[" "], a = r ? 1 : 0, l = d(function(t) {
                        return t === e
                    }, s, !0), u = d(function(t) {
                        return Z(e, t) > -1
                    }, s, !0), c = [function(t, n, i) {
                        var o = !r && (i || n !== k) || ((e = n).nodeType ? l(t, n, i) : u(t, n, i));
                        return e = null, o
                    }]; a < o; a++)
                    if (n = w.relative[t[a].type]) c = [d(p(c), n)];
                    else {
                        if (n = w.filter[t[a].type].apply(null, t[a].matches), n[P]) {
                            for (i = ++a; i < o && !w.relative[t[i].type]; i++);
                            return m(a > 1 && p(c), a > 1 && f(t.slice(0, a - 1).concat({
                                value: " " === t[a - 2].type ? "*" : ""
                            })).replace(st, "$1"), n, a < i && v(t.slice(a, i)), i < o && v(t = t.slice(i)), i < o && f(t))
                        }
                        c.push(n)
                    }
                return p(c)
            }

            function y(t, n) {
                var o = n.length > 0,
                    r = t.length > 0,
                    s = function(i, s, a, l, u) {
                        var c, f, d, p = 0,
                            h = "0",
                            m = i && [],
                            v = [],
                            y = k,
                            b = i || r && w.find.TAG("*", u),
                            x = F += null == y ? 1 : Math.random() || .1,
                            T = b.length;
                        for (u && (k = s == j || s || u); h !== T && null != (c = b[h]); h++) {
                            if (r && c) {
                                for (f = 0, s || c.ownerDocument == j || (N(c), a = !O); d = t[f++];)
                                    if (d(c, s || j, a)) {
                                        l.push(c);
                                        break
                                    }
                                u && (F = x)
                            }
                            o && ((c = !d && c) && p--, i && m.push(c))
                        }
                        if (p += h, o && h !== p) {
                            for (f = 0; d = n[f++];) d(m, v, s, a);
                            if (i) {
                                if (p > 0)
                                    for (; h--;) m[h] || v[h] || (v[h] = G.call(l));
                                v = g(v)
                            }
                            J.apply(l, v), u && !i && v.length > 0 && p + n.length > 1 && e.uniqueSort(l)
                        }
                        return u && (F = x, k = y), m
                    };
                return o ? i(s) : s
            }
            var b, x, w, T, C, E, S, $, k, A, D, N, j, I, O, L, R, q, H, P = "sizzle" + 1 * new Date,
                M = t.document,
                F = 0,
                W = 0,
                B = n(),
                U = n(),
                _ = n(),
                z = n(),
                V = function(t, e) {
                    return t === e && (D = !0), 0
                },
                Q = {}.hasOwnProperty,
                X = [],
                G = X.pop,
                Y = X.push,
                J = X.push,
                K = X.slice,
                Z = function(t, e) {
                    for (var n = 0, i = t.length; n < i; n++)
                        if (t[n] === e) return n;
                    return -1
                },
                tt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                et = "[\\x20\\t\\r\\n\\f]",
                nt = "(?:\\\\[\\da-fA-F]{1,6}" + et + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
                it = "\\[" + et + "*(" + nt + ")(?:" + et + "*([*^$|!~]?=)" + et + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + nt + "))|)" + et + "*\\]",
                ot = ":(" + nt + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + it + ")*)|.*)\\)|)",
                rt = new RegExp(et + "+", "g"),
                st = new RegExp("^" + et + "+|((?:^|[^\\\\])(?:\\\\.)*)" + et + "+$", "g"),
                at = new RegExp("^" + et + "*," + et + "*"),
                lt = new RegExp("^" + et + "*([>+~]|" + et + ")" + et + "*"),
                ut = new RegExp(et + "|>"),
                ct = new RegExp(ot),
                ft = new RegExp("^" + nt + "$"),
                dt = {
                    ID: new RegExp("^#(" + nt + ")"),
                    CLASS: new RegExp("^\\.(" + nt + ")"),
                    TAG: new RegExp("^(" + nt + "|[*])"),
                    ATTR: new RegExp("^" + it),
                    PSEUDO: new RegExp("^" + ot),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + et + "*(even|odd|(([+-]|)(\\d*)n|)" + et + "*(?:([+-]|)" + et + "*(\\d+)|))" + et + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + tt + ")$", "i"),
                    needsContext: new RegExp("^" + et + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + et + "*((?:-\\d)?\\d*)" + et + "*\\)|)(?=[^-]|$)", "i")
                },
                pt = /HTML$/i,
                ht = /^(?:input|select|textarea|button)$/i,
                gt = /^h\d$/i,
                mt = /^[^{]+\{\s*\[native \w/,
                vt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                yt = /[+~]/,
                bt = new RegExp("\\\\[\\da-fA-F]{1,6}" + et + "?|\\\\([^\\r\\n\\f])", "g"),
                xt = function(t, e) {
                    var n = "0x" + t.slice(1) - 65536;
                    return e || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
                },
                wt = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                Tt = function(t, e) {
                    return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
                },
                Ct = function() {
                    N()
                },
                Et = d(function(t) {
                    return !0 === t.disabled && "fieldset" === t.nodeName.toLowerCase()
                }, {
                    dir: "parentNode",
                    next: "legend"
                });
            try {
                J.apply(X = K.call(M.childNodes), M.childNodes), X[M.childNodes.length].nodeType
            } catch (t) {
                J = {
                    apply: X.length ? function(t, e) {
                        Y.apply(t, K.call(e))
                    } : function(t, e) {
                        for (var n = t.length, i = 0; t[n++] = e[i++];);
                        t.length = n - 1
                    }
                }
            }
            x = e.support = {}, C = e.isXML = function(t) {
                var e = t && t.namespaceURI,
                    n = t && (t.ownerDocument || t).documentElement;
                return !pt.test(e || n && n.nodeName || "HTML")
            }, N = e.setDocument = function(t) {
                var e, n, i = t ? t.ownerDocument || t : M;
                return i != j && 9 === i.nodeType && i.documentElement ? (j = i, I = j.documentElement, O = !C(j), M != j && (n = j.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Ct, !1) : n.attachEvent && n.attachEvent("onunload", Ct)), x.scope = o(function(t) {
                    return I.appendChild(t).appendChild(j.createElement("div")), void 0 !== t.querySelectorAll && !t.querySelectorAll(":scope fieldset div").length
                }), x.attributes = o(function(t) {
                    return t.className = "i", !t.getAttribute("className")
                }), x.getElementsByTagName = o(function(t) {
                    return t.appendChild(j.createComment("")), !t.getElementsByTagName("*").length
                }), x.getElementsByClassName = mt.test(j.getElementsByClassName), x.getById = o(function(t) {
                    return I.appendChild(t).id = P, !j.getElementsByName || !j.getElementsByName(P).length
                }), x.getById ? (w.filter.ID = function(t) {
                    var e = t.replace(bt, xt);
                    return function(t) {
                        return t.getAttribute("id") === e
                    }
                }, w.find.ID = function(t, e) {
                    if (void 0 !== e.getElementById && O) {
                        var n = e.getElementById(t);
                        return n ? [n] : []
                    }
                }) : (w.filter.ID = function(t) {
                    var e = t.replace(bt, xt);
                    return function(t) {
                        var n = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                        return n && n.value === e
                    }
                }, w.find.ID = function(t, e) {
                    if (void 0 !== e.getElementById && O) {
                        var n, i, o, r = e.getElementById(t);
                        if (r) {
                            if ((n = r.getAttributeNode("id")) && n.value === t) return [r];
                            for (o = e.getElementsByName(t), i = 0; r = o[i++];)
                                if ((n = r.getAttributeNode("id")) && n.value === t) return [r]
                        }
                        return []
                    }
                }), w.find.TAG = x.getElementsByTagName ? function(t, e) {
                    return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : x.qsa ? e.querySelectorAll(t) : void 0
                } : function(t, e) {
                    var n, i = [],
                        o = 0,
                        r = e.getElementsByTagName(t);
                    if ("*" === t) {
                        for (; n = r[o++];) 1 === n.nodeType && i.push(n);
                        return i
                    }
                    return r
                }, w.find.CLASS = x.getElementsByClassName && function(t, e) {
                    if (void 0 !== e.getElementsByClassName && O) return e.getElementsByClassName(t)
                }, R = [], L = [], (x.qsa = mt.test(j.querySelectorAll)) && (o(function(t) {
                    var e;
                    I.appendChild(t).innerHTML = "<a id='" + P + "'></a><select id='" + P + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && L.push("[*^$]=" + et + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || L.push("\\[" + et + "*(?:value|" + tt + ")"), t.querySelectorAll("[id~=" + P + "-]").length || L.push("~="), e = j.createElement("input"), e.setAttribute("name", ""), t.appendChild(e), t.querySelectorAll("[name='']").length || L.push("\\[" + et + "*name" + et + "*=" + et + "*(?:''|\"\")"), t.querySelectorAll(":checked").length || L.push(":checked"), t.querySelectorAll("a#" + P + "+*").length || L.push(".#.+[+~]"), t.querySelectorAll("\\\f"), L.push("[\\r\\n\\f]")
                }), o(function(t) {
                    t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var e = j.createElement("input");
                    e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && L.push("name" + et + "*[*^$|!~]?="), 2 !== t.querySelectorAll(":enabled").length && L.push(":enabled", ":disabled"), I.appendChild(t).disabled = !0, 2 !== t.querySelectorAll(":disabled").length && L.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), L.push(",.*:")
                })), (x.matchesSelector = mt.test(q = I.matches || I.webkitMatchesSelector || I.mozMatchesSelector || I.oMatchesSelector || I.msMatchesSelector)) && o(function(t) {
                    x.disconnectedMatch = q.call(t, "*"), q.call(t, "[s!='']:x"), R.push("!=", ot)
                }), L = L.length && new RegExp(L.join("|")), R = R.length && new RegExp(R.join("|")), e = mt.test(I.compareDocumentPosition), H = e || mt.test(I.contains) ? function(t, e) {
                    var n = 9 === t.nodeType ? t.documentElement : t,
                        i = e && e.parentNode;
                    return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
                } : function(t, e) {
                    if (e)
                        for (; e = e.parentNode;)
                            if (e === t) return !0;
                    return !1
                }, V = e ? function(t, e) {
                    if (t === e) return D = !0, 0;
                    var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                    return n || (n = (t.ownerDocument || t) == (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & n || !x.sortDetached && e.compareDocumentPosition(t) === n ? t == j || t.ownerDocument == M && H(M, t) ? -1 : e == j || e.ownerDocument == M && H(M, e) ? 1 : A ? Z(A, t) - Z(A, e) : 0 : 4 & n ? -1 : 1)
                } : function(t, e) {
                    if (t === e) return D = !0, 0;
                    var n, i = 0,
                        o = t.parentNode,
                        r = e.parentNode,
                        a = [t],
                        l = [e];
                    if (!o || !r) return t == j ? -1 : e == j ? 1 : o ? -1 : r ? 1 : A ? Z(A, t) - Z(A, e) : 0;
                    if (o === r) return s(t, e);
                    for (n = t; n = n.parentNode;) a.unshift(n);
                    for (n = e; n = n.parentNode;) l.unshift(n);
                    for (; a[i] === l[i];) i++;
                    return i ? s(a[i], l[i]) : a[i] == M ? -1 : l[i] == M ? 1 : 0
                }, j) : j
            }, e.matches = function(t, n) {
                return e(t, null, null, n)
            }, e.matchesSelector = function(t, n) {
                if (N(t), x.matchesSelector && O && !z[n + " "] && (!R || !R.test(n)) && (!L || !L.test(n))) try {
                    var i = q.call(t, n);
                    if (i || x.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i
                } catch (t) {
                    z(n, !0)
                }
                return e(n, j, null, [t]).length > 0
            }, e.contains = function(t, e) {
                return (t.ownerDocument || t) != j && N(t), H(t, e)
            }, e.attr = function(t, e) {
                (t.ownerDocument || t) != j && N(t);
                var n = w.attrHandle[e.toLowerCase()],
                    i = n && Q.call(w.attrHandle, e.toLowerCase()) ? n(t, e, !O) : void 0;
                return void 0 !== i ? i : x.attributes || !O ? t.getAttribute(e) : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
            }, e.escape = function(t) {
                return (t + "").replace(wt, Tt)
            }, e.error = function(t) {
                throw new Error("Syntax error, unrecognized expression: " + t)
            }, e.uniqueSort = function(t) {
                var e, n = [],
                    i = 0,
                    o = 0;
                if (D = !x.detectDuplicates, A = !x.sortStable && t.slice(0), t.sort(V), D) {
                    for (; e = t[o++];) e === t[o] && (i = n.push(o));
                    for (; i--;) t.splice(n[i], 1)
                }
                return A = null, t
            }, T = e.getText = function(t) {
                var e, n = "",
                    i = 0,
                    o = t.nodeType;
                if (o) {
                    if (1 === o || 9 === o || 11 === o) {
                        if ("string" == typeof t.textContent) return t.textContent;
                        for (t = t.firstChild; t; t = t.nextSibling) n += T(t)
                    } else if (3 === o || 4 === o) return t.nodeValue
                } else
                    for (; e = t[i++];) n += T(e);
                return n
            }, w = e.selectors = {
                cacheLength: 50,
                createPseudo: i,
                match: dt,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(t) {
                        return t[1] = t[1].replace(bt, xt), t[3] = (t[3] || t[4] || t[5] || "").replace(bt, xt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                    },
                    CHILD: function(t) {
                        return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                    },
                    PSEUDO: function(t) {
                        var e, n = !t[6] && t[2];
                        return dt.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && ct.test(n) && (e = E(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(t) {
                        var e = t.replace(bt, xt).toLowerCase();
                        return "*" === t ? function() {
                            return !0
                        } : function(t) {
                            return t.nodeName && t.nodeName.toLowerCase() === e
                        }
                    },
                    CLASS: function(t) {
                        var e = B[t + " "];
                        return e || (e = new RegExp("(^|" + et + ")" + t + "(" + et + "|$)")) && B(t, function(t) {
                            return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(t, n, i) {
                        return function(o) {
                            var r = e.attr(o, t);
                            return null == r ? "!=" === n : !n || (r += "", "=" === n ? r === i : "!=" === n ? r !== i : "^=" === n ? i && 0 === r.indexOf(i) : "*=" === n ? i && r.indexOf(i) > -1 : "$=" === n ? i && r.slice(-i.length) === i : "~=" === n ? (" " + r.replace(rt, " ") + " ").indexOf(i) > -1 : "|=" === n && (r === i || r.slice(0, i.length + 1) === i + "-"))
                        }
                    },
                    CHILD: function(t, e, n, i, o) {
                        var r = "nth" !== t.slice(0, 3),
                            s = "last" !== t.slice(-4),
                            a = "of-type" === e;
                        return 1 === i && 0 === o ? function(t) {
                            return !!t.parentNode
                        } : function(e, n, l) {
                            var u, c, f, d, p, h, g = r !== s ? "nextSibling" : "previousSibling",
                                m = e.parentNode,
                                v = a && e.nodeName.toLowerCase(),
                                y = !l && !a,
                                b = !1;
                            if (m) {
                                if (r) {
                                    for (; g;) {
                                        for (d = e; d = d[g];)
                                            if (a ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                        h = g = "only" === t && !h && "nextSibling"
                                    }
                                    return !0
                                }
                                if (h = [s ? m.firstChild : m.lastChild], s && y) {
                                    for (d = m, f = d[P] || (d[P] = {}), c = f[d.uniqueID] || (f[d.uniqueID] = {}), u = c[t] || [], p = u[0] === F && u[1], b = p && u[2], d = p && m.childNodes[p]; d = ++p && d && d[g] || (b = p = 0) || h.pop();)
                                        if (1 === d.nodeType && ++b && d === e) {
                                            c[t] = [F, p, b];
                                            break
                                        }
                                } else if (y && (d = e, f = d[P] || (d[P] = {}), c = f[d.uniqueID] || (f[d.uniqueID] = {}), u = c[t] || [], p = u[0] === F && u[1], b = p), !1 === b)
                                    for (;
                                        (d = ++p && d && d[g] || (b = p = 0) || h.pop()) && ((a ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++b || (y && (f = d[P] || (d[P] = {}), c = f[d.uniqueID] || (f[d.uniqueID] = {}), c[t] = [F, b]), d !== e)););
                                return (b -= o) === i || b % i == 0 && b / i >= 0
                            }
                        }
                    },
                    PSEUDO: function(t, n) {
                        var o, r = w.pseudos[t] || w.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                        return r[P] ? r(n) : r.length > 1 ? (o = [t, t, "", n], w.setFilters.hasOwnProperty(t.toLowerCase()) ? i(function(t, e) {
                            for (var i, o = r(t, n), s = o.length; s--;) i = Z(t, o[s]), t[i] = !(e[i] = o[s])
                        }) : function(t) {
                            return r(t, 0, o)
                        }) : r
                    }
                },
                pseudos: {
                    not: i(function(t) {
                        var e = [],
                            n = [],
                            o = S(t.replace(st, "$1"));
                        return o[P] ? i(function(t, e, n, i) {
                            for (var r, s = o(t, null, i, []), a = t.length; a--;)(r = s[a]) && (t[a] = !(e[a] = r))
                        }) : function(t, i, r) {
                            return e[0] = t, o(e, null, r, n), e[0] = null, !n.pop()
                        }
                    }),
                    has: i(function(t) {
                        return function(n) {
                            return e(t, n).length > 0
                        }
                    }),
                    contains: i(function(t) {
                        return t = t.replace(bt, xt),
                            function(e) {
                                return (e.textContent || T(e)).indexOf(t) > -1
                            }
                    }),
                    lang: i(function(t) {
                        return ft.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(bt, xt).toLowerCase(),
                            function(e) {
                                var n;
                                do {
                                    if (n = O ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (n = n.toLowerCase()) === t || 0 === n.indexOf(t + "-")
                                } while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function(e) {
                        var n = t.location && t.location.hash;
                        return n && n.slice(1) === e.id
                    },
                    root: function(t) {
                        return t === I
                    },
                    focus: function(t) {
                        return t === j.activeElement && (!j.hasFocus || j.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                    },
                    enabled: a(!1),
                    disabled: a(!0),
                    checked: function(t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && !!t.checked || "option" === e && !!t.selected
                    },
                    selected: function(t) {
                        return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
                    },
                    empty: function(t) {
                        for (t = t.firstChild; t; t = t.nextSibling)
                            if (t.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(t) {
                        return !w.pseudos.empty(t)
                    },
                    header: function(t) {
                        return gt.test(t.nodeName)
                    },
                    input: function(t) {
                        return ht.test(t.nodeName)
                    },
                    button: function(t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && "button" === t.type || "button" === e
                    },
                    text: function(t) {
                        var e;
                        return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                    },
                    first: l(function() {
                        return [0]
                    }),
                    last: l(function(t, e) {
                        return [e - 1]
                    }),
                    eq: l(function(t, e, n) {
                        return [n < 0 ? n + e : n]
                    }),
                    even: l(function(t, e) {
                        for (var n = 0; n < e; n += 2) t.push(n);
                        return t
                    }),
                    odd: l(function(t, e) {
                        for (var n = 1; n < e; n += 2) t.push(n);
                        return t
                    }),
                    lt: l(function(t, e, n) {
                        for (var i = n < 0 ? n + e : n > e ? e : n; --i >= 0;) t.push(i);
                        return t
                    }),
                    gt: l(function(t, e, n) {
                        for (var i = n < 0 ? n + e : n; ++i < e;) t.push(i);
                        return t
                    })
                }
            }, w.pseudos.nth = w.pseudos.eq;
            for (b in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) w.pseudos[b] = function(t) {
                return function(e) {
                    return "input" === e.nodeName.toLowerCase() && e.type === t
                }
            }(b);
            for (b in {
                    submit: !0,
                    reset: !0
                }) w.pseudos[b] = function(t) {
                return function(e) {
                    var n = e.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && e.type === t
                }
            }(b);
            return c.prototype = w.filters = w.pseudos, w.setFilters = new c, E = e.tokenize = function(t, n) {
                var i, o, r, s, a, l, u, c = U[t + " "];
                if (c) return n ? 0 : c.slice(0);
                for (a = t, l = [], u = w.preFilter; a;) {
                    i && !(o = at.exec(a)) || (o && (a = a.slice(o[0].length) || a), l.push(r = [])), i = !1, (o = lt.exec(a)) && (i = o.shift(), r.push({
                        value: i,
                        type: o[0].replace(st, " ")
                    }), a = a.slice(i.length));
                    for (s in w.filter) !(o = dt[s].exec(a)) || u[s] && !(o = u[s](o)) || (i = o.shift(), r.push({
                        value: i,
                        type: s,
                        matches: o
                    }), a = a.slice(i.length));
                    if (!i) break
                }
                return n ? a.length : a ? e.error(t) : U(t, l).slice(0)
            }, S = e.compile = function(t, e) {
                var n, i = [],
                    o = [],
                    r = _[t + " "];
                if (!r) {
                    for (e || (e = E(t)), n = e.length; n--;) r = v(e[n]), r[P] ? i.push(r) : o.push(r);
                    r = _(t, y(o, i)), r.selector = t
                }
                return r
            }, $ = e.select = function(t, e, n, i) {
                var o, r, s, a, l, c = "function" == typeof t && t,
                    d = !i && E(t = c.selector || t);
                if (n = n || [], 1 === d.length) {
                    if (r = d[0] = d[0].slice(0), r.length > 2 && "ID" === (s = r[0]).type && 9 === e.nodeType && O && w.relative[r[1].type]) {
                        if (!(e = (w.find.ID(s.matches[0].replace(bt, xt), e) || [])[0])) return n;
                        c && (e = e.parentNode), t = t.slice(r.shift().value.length)
                    }
                    for (o = dt.needsContext.test(t) ? 0 : r.length; o-- && (s = r[o], !w.relative[a = s.type]);)
                        if ((l = w.find[a]) && (i = l(s.matches[0].replace(bt, xt), yt.test(r[0].type) && u(e.parentNode) || e))) {
                            if (r.splice(o, 1), !(t = i.length && f(r))) return J.apply(n, i), n;
                            break
                        }
                }
                return (c || S(t, d))(i, e, !O, n, !e || yt.test(t) && u(e.parentNode) || e), n
            }, x.sortStable = P.split("").sort(V).join("") === P, x.detectDuplicates = !!D, N(), x.sortDetached = o(function(t) {
                return 1 & t.compareDocumentPosition(j.createElement("fieldset"))
            }), o(function(t) {
                return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
            }) || r("type|href|height|width", function(t, e, n) {
                if (!n) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
            }), x.attributes && o(function(t) {
                return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
            }) || r("value", function(t, e, n) {
                if (!n && "input" === t.nodeName.toLowerCase()) return t.defaultValue
            }), o(function(t) {
                return null == t.getAttribute("disabled")
            }) || r(tt, function(t, e, n) {
                var i;
                if (!n) return !0 === t[e] ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
            }), e
        }(t);
        Ct.find = Et, Ct.expr = Et.selectors, Ct.expr[":"] = Ct.expr.pseudos, Ct.uniqueSort = Ct.unique = Et.uniqueSort, Ct.text = Et.getText, Ct.isXMLDoc = Et.isXML, Ct.contains = Et.contains, Ct.escapeSelector = Et.escape;
        var St = function(t, e, n) {
                for (var i = [], o = void 0 !== n;
                    (t = t[e]) && 9 !== t.nodeType;)
                    if (1 === t.nodeType) {
                        if (o && Ct(t).is(n)) break;
                        i.push(t)
                    }
                return i
            },
            $t = function(t, e) {
                for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
                return n
            },
            kt = Ct.expr.match.needsContext,
            At = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
        Ct.filter = function(t, e, n) {
            var i = e[0];
            return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? Ct.find.matchesSelector(i, t) ? [i] : [] : Ct.find.matches(t, Ct.grep(e, function(t) {
                return 1 === t.nodeType
            }))
        }, Ct.fn.extend({
            find: function(t) {
                var e, n, i = this.length,
                    o = this;
                if ("string" != typeof t) return this.pushStack(Ct(t).filter(function() {
                    for (e = 0; e < i; e++)
                        if (Ct.contains(o[e], this)) return !0
                }));
                for (n = this.pushStack([]), e = 0; e < i; e++) Ct.find(t, o[e], n);
                return i > 1 ? Ct.uniqueSort(n) : n
            },
            filter: function(t) {
                return this.pushStack(s(this, t || [], !1))
            },
            not: function(t) {
                return this.pushStack(s(this, t || [], !0))
            },
            is: function(t) {
                return !!s(this, "string" == typeof t && kt.test(t) ? Ct(t) : t || [], !1).length
            }
        });
        var Dt, Nt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
        (Ct.fn.init = function(t, e, n) {
            var i, o;
            if (!t) return this;
            if (n = n || Dt, "string" == typeof t) {
                if (!(i = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : Nt.exec(t)) || !i[1] && e) return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
                if (i[1]) {
                    if (e = e instanceof Ct ? e[0] : e, Ct.merge(this, Ct.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : wt, !0)), At.test(i[1]) && Ct.isPlainObject(e))
                        for (i in e) bt(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
                    return this
                }
                return o = wt.getElementById(i[2]), o && (this[0] = o, this.length = 1), this
            }
            return t.nodeType ? (this[0] = t, this.length = 1, this) : bt(t) ? void 0 !== n.ready ? n.ready(t) : t(Ct) : Ct.makeArray(t, this)
        }).prototype = Ct.fn, Dt = Ct(wt);
        var jt = /^(?:parents|prev(?:Until|All))/,
            It = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        Ct.fn.extend({
            has: function(t) {
                var e = Ct(t, this),
                    n = e.length;
                return this.filter(function() {
                    for (var t = 0; t < n; t++)
                        if (Ct.contains(this, e[t])) return !0
                })
            },
            closest: function(t, e) {
                var n, i = 0,
                    o = this.length,
                    r = [],
                    s = "string" != typeof t && Ct(t);
                if (!kt.test(t))
                    for (; i < o; i++)
                        for (n = this[i]; n && n !== e; n = n.parentNode)
                            if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && Ct.find.matchesSelector(n, t))) {
                                r.push(n);
                                break
                            }
                return this.pushStack(r.length > 1 ? Ct.uniqueSort(r) : r)
            },
            index: function(t) {
                return t ? "string" == typeof t ? dt.call(Ct(t), this[0]) : dt.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(t, e) {
                return this.pushStack(Ct.uniqueSort(Ct.merge(this.get(), Ct(t, e))))
            },
            addBack: function(t) {
                return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
            }
        }), Ct.each({
            parent: function(t) {
                var e = t.parentNode;
                return e && 11 !== e.nodeType ? e : null
            },
            parents: function(t) {
                return St(t, "parentNode")
            },
            parentsUntil: function(t, e, n) {
                return St(t, "parentNode", n)
            },
            next: function(t) {
                return a(t, "nextSibling")
            },
            prev: function(t) {
                return a(t, "previousSibling")
            },
            nextAll: function(t) {
                return St(t, "nextSibling")
            },
            prevAll: function(t) {
                return St(t, "previousSibling")
            },
            nextUntil: function(t, e, n) {
                return St(t, "nextSibling", n)
            },
            prevUntil: function(t, e, n) {
                return St(t, "previousSibling", n)
            },
            siblings: function(t) {
                return $t((t.parentNode || {}).firstChild, t)
            },
            children: function(t) {
                return $t(t.firstChild)
            },
            contents: function(t) {
                return null != t.contentDocument && lt(t.contentDocument) ? t.contentDocument : (r(t, "template") && (t = t.content || t), Ct.merge([], t.childNodes))
            }
        }, function(t, e) {
            Ct.fn[t] = function(n, i) {
                var o = Ct.map(this, e, n);
                return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (o = Ct.filter(i, o)), this.length > 1 && (It[t] || Ct.uniqueSort(o), jt.test(t) && o.reverse()), this.pushStack(o)
            }
        });
        var Ot = /[^\x20\t\r\n\f]+/g;
        Ct.Callbacks = function(t) {
            t = "string" == typeof t ? l(t) : Ct.extend({}, t);
            var e, n, o, r, s = [],
                a = [],
                u = -1,
                c = function() {
                    for (r = r || t.once, o = e = !0; a.length; u = -1)
                        for (n = a.shift(); ++u < s.length;) !1 === s[u].apply(n[0], n[1]) && t.stopOnFalse && (u = s.length, n = !1);
                    t.memory || (n = !1), e = !1, r && (s = n ? [] : "")
                },
                f = {
                    add: function() {
                        return s && (n && !e && (u = s.length - 1, a.push(n)), function e(n) {
                            Ct.each(n, function(n, o) {
                                bt(o) ? t.unique && f.has(o) || s.push(o) : o && o.length && "string" !== i(o) && e(o)
                            })
                        }(arguments), n && !e && c()), this
                    },
                    remove: function() {
                        return Ct.each(arguments, function(t, e) {
                            for (var n;
                                (n = Ct.inArray(e, s, n)) > -1;) s.splice(n, 1), n <= u && u--
                        }), this
                    },
                    has: function(t) {
                        return t ? Ct.inArray(t, s) > -1 : s.length > 0
                    },
                    empty: function() {
                        return s && (s = []), this
                    },
                    disable: function() {
                        return r = a = [], s = n = "", this
                    },
                    disabled: function() {
                        return !s
                    },
                    lock: function() {
                        return r = a = [], n || e || (s = n = ""), this
                    },
                    locked: function() {
                        return !!r
                    },
                    fireWith: function(t, n) {
                        return r || (n = n || [], n = [t, n.slice ? n.slice() : n], a.push(n), e || c()), this
                    },
                    fire: function() {
                        return f.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!o
                    }
                };
            return f
        }, Ct.extend({
            Deferred: function(e) {
                var n = [
                        ["notify", "progress", Ct.Callbacks("memory"), Ct.Callbacks("memory"), 2],
                        ["resolve", "done", Ct.Callbacks("once memory"), Ct.Callbacks("once memory"), 0, "resolved"],
                        ["reject", "fail", Ct.Callbacks("once memory"), Ct.Callbacks("once memory"), 1, "rejected"]
                    ],
                    i = "pending",
                    o = {
                        state: function() {
                            return i
                        },
                        always: function() {
                            return r.done(arguments).fail(arguments), this
                        },
                        catch: function(t) {
                            return o.then(null, t)
                        },
                        pipe: function() {
                            var t = arguments;
                            return Ct.Deferred(function(e) {
                                Ct.each(n, function(n, i) {
                                    var o = bt(t[i[4]]) && t[i[4]];
                                    r[i[1]](function() {
                                        var t = o && o.apply(this, arguments);
                                        t && bt(t.promise) ? t.promise().progress(e.notify).done(e.resolve).fail(e.reject) : e[i[0] + "With"](this, o ? [t] : arguments)
                                    })
                                }), t = null
                            }).promise()
                        },
                        then: function(e, i, o) {
                            function r(e, n, i, o) {
                                return function() {
                                    var a = this,
                                        l = arguments,
                                        f = function() {
                                            var t, f;
                                            if (!(e < s)) {
                                                if ((t = i.apply(a, l)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                                f = t && ("object" == typeof t || "function" == typeof t) && t.then, bt(f) ? o ? f.call(t, r(s, n, u, o), r(s, n, c, o)) : (s++, f.call(t, r(s, n, u, o), r(s, n, c, o), r(s, n, u, n.notifyWith))) : (i !== u && (a = void 0, l = [t]), (o || n.resolveWith)(a, l))
                                            }
                                        },
                                        d = o ? f : function() {
                                            try {
                                                f()
                                            } catch (t) {
                                                Ct.Deferred.exceptionHook && Ct.Deferred.exceptionHook(t, d.stackTrace), e + 1 >= s && (i !== c && (a = void 0, l = [t]), n.rejectWith(a, l))
                                            }
                                        };
                                    e ? d() : (Ct.Deferred.getStackHook && (d.stackTrace = Ct.Deferred.getStackHook()), t.setTimeout(d))
                                }
                            }
                            var s = 0;
                            return Ct.Deferred(function(t) {
                                n[0][3].add(r(0, t, bt(o) ? o : u, t.notifyWith)), n[1][3].add(r(0, t, bt(e) ? e : u)), n[2][3].add(r(0, t, bt(i) ? i : c))
                            }).promise()
                        },
                        promise: function(t) {
                            return null != t ? Ct.extend(t, o) : o
                        }
                    },
                    r = {};
                return Ct.each(n, function(t, e) {
                    var s = e[2],
                        a = e[5];
                    o[e[1]] = s.add, a && s.add(function() {
                        i = a
                    }, n[3 - t][2].disable, n[3 - t][3].disable, n[0][2].lock, n[0][3].lock), s.add(e[3].fire), r[e[0]] = function() {
                        return r[e[0] + "With"](this === r ? void 0 : this, arguments), this
                    }, r[e[0] + "With"] = s.fireWith
                }), o.promise(r), e && e.call(r, r), r
            },
            when: function(t) {
                var e = arguments.length,
                    n = e,
                    i = Array(n),
                    o = ut.call(arguments),
                    r = Ct.Deferred(),
                    s = function(t) {
                        return function(n) {
                            i[t] = this, o[t] = arguments.length > 1 ? ut.call(arguments) : n, --e || r.resolveWith(i, o)
                        }
                    };
                if (e <= 1 && (f(t, r.done(s(n)).resolve, r.reject, !e), "pending" === r.state() || bt(o[n] && o[n].then))) return r.then();
                for (; n--;) f(o[n], s(n), r.reject);
                return r.promise()
            }
        });
        var Lt = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        Ct.Deferred.exceptionHook = function(e, n) {
            t.console && t.console.warn && e && Lt.test(e.name) && t.console.warn("jQuery.Deferred exception: " + e.message, e.stack, n)
        }, Ct.readyException = function(e) {
            t.setTimeout(function() {
                throw e
            })
        };
        var Rt = Ct.Deferred();
        Ct.fn.ready = function(t) {
            return Rt.then(t).catch(function(t) {
                Ct.readyException(t)
            }), this
        }, Ct.extend({
            isReady: !1,
            readyWait: 1,
            ready: function(t) {
                (!0 === t ? --Ct.readyWait : Ct.isReady) || (Ct.isReady = !0, !0 !== t && --Ct.readyWait > 0 || Rt.resolveWith(wt, [Ct]))
            }
        }), Ct.ready.then = Rt.then, "complete" === wt.readyState || "loading" !== wt.readyState && !wt.documentElement.doScroll ? t.setTimeout(Ct.ready) : (wt.addEventListener("DOMContentLoaded", d), t.addEventListener("load", d));
        var qt = function(t, e, n, o, r, s, a) {
                var l = 0,
                    u = t.length,
                    c = null == n;
                if ("object" === i(n)) {
                    r = !0;
                    for (l in n) qt(t, e, l, n[l], !0, s, a)
                } else if (void 0 !== o && (r = !0, bt(o) || (a = !0), c && (a ? (e.call(t, o), e = null) : (c = e, e = function(t, e, n) {
                        return c.call(Ct(t), n)
                    })), e))
                    for (; l < u; l++) e(t[l], n, a ? o : o.call(t[l], l, e(t[l], n)));
                return r ? t : c ? e.call(t) : u ? e(t[0], n) : s
            },
            Ht = /^-ms-/,
            Pt = /-([a-z])/g,
            Mt = function(t) {
                return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
            };
        g.uid = 1, g.prototype = {
            cache: function(t) {
                var e = t[this.expando];
                return e || (e = {}, Mt(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                    value: e,
                    configurable: !0
                }))), e
            },
            set: function(t, e, n) {
                var i, o = this.cache(t);
                if ("string" == typeof e) o[h(e)] = n;
                else
                    for (i in e) o[h(i)] = e[i];
                return o
            },
            get: function(t, e) {
                return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][h(e)]
            },
            access: function(t, e, n) {
                return void 0 === e || e && "string" == typeof e && void 0 === n ? this.get(t, e) : (this.set(t, e, n), void 0 !== n ? n : e)
            },
            remove: function(t, e) {
                var n, i = t[this.expando];
                if (void 0 !== i) {
                    if (void 0 !== e) {
                        Array.isArray(e) ? e = e.map(h) : (e = h(e), e = e in i ? [e] : e.match(Ot) || []), n = e.length;
                        for (; n--;) delete i[e[n]]
                    }(void 0 === e || Ct.isEmptyObject(i)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
                }
            },
            hasData: function(t) {
                var e = t[this.expando];
                return void 0 !== e && !Ct.isEmptyObject(e)
            }
        };
        var Ft = new g,
            Wt = new g,
            Bt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            Ut = /[A-Z]/g;
        Ct.extend({
            hasData: function(t) {
                return Wt.hasData(t) || Ft.hasData(t)
            },
            data: function(t, e, n) {
                return Wt.access(t, e, n)
            },
            removeData: function(t, e) {
                Wt.remove(t, e)
            },
            _data: function(t, e, n) {
                return Ft.access(t, e, n)
            },
            _removeData: function(t, e) {
                Ft.remove(t, e)
            }
        }), Ct.fn.extend({
            data: function(t, e) {
                var n, i, o, r = this[0],
                    s = r && r.attributes;
                if (void 0 === t) {
                    if (this.length && (o = Wt.get(r), 1 === r.nodeType && !Ft.get(r, "hasDataAttrs"))) {
                        for (n = s.length; n--;) s[n] && (i = s[n].name, 0 === i.indexOf("data-") && (i = h(i.slice(5)), v(r, i, o[i])));
                        Ft.set(r, "hasDataAttrs", !0)
                    }
                    return o
                }
                return "object" == typeof t ? this.each(function() {
                    Wt.set(this, t)
                }) : qt(this, function(e) {
                    var n;
                    if (r && void 0 === e) {
                        if (void 0 !== (n = Wt.get(r, t))) return n;
                        if (void 0 !== (n = v(r, t))) return n
                    } else this.each(function() {
                        Wt.set(this, t, e)
                    })
                }, null, e, arguments.length > 1, null, !0)
            },
            removeData: function(t) {
                return this.each(function() {
                    Wt.remove(this, t)
                })
            }
        }), Ct.extend({
            queue: function(t, e, n) {
                var i;
                if (t) return e = (e || "fx") + "queue", i = Ft.get(t, e), n && (!i || Array.isArray(n) ? i = Ft.access(t, e, Ct.makeArray(n)) : i.push(n)), i || []
            },
            dequeue: function(t, e) {
                e = e || "fx";
                var n = Ct.queue(t, e),
                    i = n.length,
                    o = n.shift(),
                    r = Ct._queueHooks(t, e),
                    s = function() {
                        Ct.dequeue(t, e)
                    };
                "inprogress" === o && (o = n.shift(), i--), o && ("fx" === e && n.unshift("inprogress"), delete r.stop, o.call(t, s, r)), !i && r && r.empty.fire()
            },
            _queueHooks: function(t, e) {
                var n = e + "queueHooks";
                return Ft.get(t, n) || Ft.access(t, n, {
                    empty: Ct.Callbacks("once memory").add(function() {
                        Ft.remove(t, [e + "queue", n])
                    })
                })
            }
        }), Ct.fn.extend({
            queue: function(t, e) {
                var n = 2;
                return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? Ct.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                    var n = Ct.queue(this, t, e);
                    Ct._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && Ct.dequeue(this, t)
                })
            },
            dequeue: function(t) {
                return this.each(function() {
                    Ct.dequeue(this, t)
                })
            },
            clearQueue: function(t) {
                return this.queue(t || "fx", [])
            },
            promise: function(t, e) {
                var n, i = 1,
                    o = Ct.Deferred(),
                    r = this,
                    s = this.length,
                    a = function() {
                        --i || o.resolveWith(r, [r])
                    };
                for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; s--;)(n = Ft.get(r[s], t + "queueHooks")) && n.empty && (i++, n.empty.add(a));
                return a(), o.promise(e)
            }
        });
        var _t = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            zt = new RegExp("^(?:([+-])=|)(" + _t + ")([a-z%]*)$", "i"),
            Vt = ["Top", "Right", "Bottom", "Left"],
            Qt = wt.documentElement,
            Xt = function(t) {
                return Ct.contains(t.ownerDocument, t)
            },
            Gt = {
                composed: !0
            };
        Qt.getRootNode && (Xt = function(t) {
            return Ct.contains(t.ownerDocument, t) || t.getRootNode(Gt) === t.ownerDocument
        });
        var Yt = function(t, e) {
                return t = e || t, "none" === t.style.display || "" === t.style.display && Xt(t) && "none" === Ct.css(t, "display")
            },
            Jt = {};
        Ct.fn.extend({
            show: function() {
                return x(this, !0)
            },
            hide: function() {
                return x(this)
            },
            toggle: function(t) {
                return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                    Yt(this) ? Ct(this).show() : Ct(this).hide()
                })
            }
        });
        var Kt = /^(?:checkbox|radio)$/i,
            Zt = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
            te = /^$|^module$|\/(?:java|ecma)script/i;
        ! function() {
            var t = wt.createDocumentFragment(),
                e = t.appendChild(wt.createElement("div")),
                n = wt.createElement("input");
            n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), e.appendChild(n), yt.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", yt.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue, e.innerHTML = "<option></option>", yt.option = !!e.lastChild
        }();
        var ee = {
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
        ee.tbody = ee.tfoot = ee.colgroup = ee.caption = ee.thead, ee.th = ee.td, yt.option || (ee.optgroup = ee.option = [1, "<select multiple='multiple'>", "</select>"]);
        var ne = /<|&#?\w+;/,
            ie = /^([^.]*)(?:\.(.+)|)/;
        Ct.event = {
            global: {},
            add: function(t, e, n, i, o) {
                var r, s, a, l, u, c, f, d, p, h, g, m = Ft.get(t);
                if (Mt(t))
                    for (n.handler && (r = n, n = r.handler, o = r.selector), o && Ct.find.matchesSelector(Qt, o), n.guid || (n.guid = Ct.guid++), (l = m.events) || (l = m.events = Object.create(null)), (s = m.handle) || (s = m.handle = function(e) {
                            return void 0 !== Ct && Ct.event.triggered !== e.type ? Ct.event.dispatch.apply(t, arguments) : void 0
                        }), e = (e || "").match(Ot) || [""], u = e.length; u--;) a = ie.exec(e[u]) || [], p = g = a[1], h = (a[2] || "").split(".").sort(), p && (f = Ct.event.special[p] || {}, p = (o ? f.delegateType : f.bindType) || p, f = Ct.event.special[p] || {}, c = Ct.extend({
                        type: p,
                        origType: g,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: o,
                        needsContext: o && Ct.expr.match.needsContext.test(o),
                        namespace: h.join(".")
                    }, r), (d = l[p]) || (d = l[p] = [], d.delegateCount = 0, f.setup && !1 !== f.setup.call(t, i, h, s) || t.addEventListener && t.addEventListener(p, s)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), o ? d.splice(d.delegateCount++, 0, c) : d.push(c), Ct.event.global[p] = !0)
            },
            remove: function(t, e, n, i, o) {
                var r, s, a, l, u, c, f, d, p, h, g, m = Ft.hasData(t) && Ft.get(t);
                if (m && (l = m.events)) {
                    for (e = (e || "").match(Ot) || [""], u = e.length; u--;)
                        if (a = ie.exec(e[u]) || [], p = g = a[1], h = (a[2] || "").split(".").sort(), p) {
                            for (f = Ct.event.special[p] || {}, p = (i ? f.delegateType : f.bindType) || p, d = l[p] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = r = d.length; r--;) c = d[r], !o && g !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (d.splice(r, 1), c.selector && d.delegateCount--, f.remove && f.remove.call(t, c));
                            s && !d.length && (f.teardown && !1 !== f.teardown.call(t, h, m.handle) || Ct.removeEvent(t, p, m.handle), delete l[p])
                        } else
                            for (p in l) Ct.event.remove(t, p + e[u], n, i, !0);
                    Ct.isEmptyObject(l) && Ft.remove(t, "handle events")
                }
            },
            dispatch: function(t) {
                var e, n, i, o, r, s, a = new Array(arguments.length),
                    l = Ct.event.fix(t),
                    u = (Ft.get(this, "events") || Object.create(null))[l.type] || [],
                    c = Ct.event.special[l.type] || {};
                for (a[0] = l, e = 1; e < arguments.length; e++) a[e] = arguments[e];
                if (l.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, l)) {
                    for (s = Ct.event.handlers.call(this, l, u), e = 0;
                        (o = s[e++]) && !l.isPropagationStopped();)
                        for (l.currentTarget = o.elem, n = 0;
                            (r = o.handlers[n++]) && !l.isImmediatePropagationStopped();) l.rnamespace && !1 !== r.namespace && !l.rnamespace.test(r.namespace) || (l.handleObj = r, l.data = r.data, void 0 !== (i = ((Ct.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, a)) && !1 === (l.result = i) && (l.preventDefault(), l.stopPropagation()));
                    return c.postDispatch && c.postDispatch.call(this, l), l.result
                }
            },
            handlers: function(t, e) {
                var n, i, o, r, s, a = [],
                    l = e.delegateCount,
                    u = t.target;
                if (l && u.nodeType && !("click" === t.type && t.button >= 1))
                    for (; u !== this; u = u.parentNode || this)
                        if (1 === u.nodeType && ("click" !== t.type || !0 !== u.disabled)) {
                            for (r = [], s = {}, n = 0; n < l; n++) i = e[n], o = i.selector + " ", void 0 === s[o] && (s[o] = i.needsContext ? Ct(o, this).index(u) > -1 : Ct.find(o, this, null, [u]).length), s[o] && r.push(i);
                            r.length && a.push({
                                elem: u,
                                handlers: r
                            })
                        }
                return u = this, l < e.length && a.push({
                    elem: u,
                    handlers: e.slice(l)
                }), a
            },
            addProp: function(t, e) {
                Object.defineProperty(Ct.Event.prototype, t, {
                    enumerable: !0,
                    configurable: !0,
                    get: bt(e) ? function() {
                        if (this.originalEvent) return e(this.originalEvent)
                    } : function() {
                        if (this.originalEvent) return this.originalEvent[t]
                    },
                    set: function(e) {
                        Object.defineProperty(this, t, {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: e
                        })
                    }
                })
            },
            fix: function(t) {
                return t[Ct.expando] ? t : new Ct.Event(t)
            },
            special: {
                load: {
                    noBubble: !0
                },
                click: {
                    setup: function(t) {
                        var e = this || t;
                        return Kt.test(e.type) && e.click && r(e, "input") && D(e, "click", E), !1
                    },
                    trigger: function(t) {
                        var e = this || t;
                        return Kt.test(e.type) && e.click && r(e, "input") && D(e, "click"), !0
                    },
                    _default: function(t) {
                        var e = t.target;
                        return Kt.test(e.type) && e.click && r(e, "input") && Ft.get(e, "click") || r(e, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(t) {
                        void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                    }
                }
            }
        }, Ct.removeEvent = function(t, e, n) {
            t.removeEventListener && t.removeEventListener(e, n)
        }, Ct.Event = function(t, e) {
            if (!(this instanceof Ct.Event)) return new Ct.Event(t, e);
            t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? E : S, this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget) : this.type = t, e && Ct.extend(this, e), this.timeStamp = t && t.timeStamp || Date.now(), this[Ct.expando] = !0
        }, Ct.Event.prototype = {
            constructor: Ct.Event,
            isDefaultPrevented: S,
            isPropagationStopped: S,
            isImmediatePropagationStopped: S,
            isSimulated: !1,
            preventDefault: function() {
                var t = this.originalEvent;
                this.isDefaultPrevented = E, t && !this.isSimulated && t.preventDefault()
            },
            stopPropagation: function() {
                var t = this.originalEvent;
                this.isPropagationStopped = E, t && !this.isSimulated && t.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var t = this.originalEvent;
                this.isImmediatePropagationStopped = E, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation()
            }
        }, Ct.each({
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            code: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: !0
        }, Ct.event.addProp), Ct.each({
            focus: "focusin",
            blur: "focusout"
        }, function(t, e) {
            Ct.event.special[t] = {
                setup: function() {
                    return D(this, t, $), !1
                },
                trigger: function() {
                    return D(this, t), !0
                },
                _default: function() {
                    return !0
                },
                delegateType: e
            }
        }), Ct.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(t, e) {
            Ct.event.special[t] = {
                delegateType: e,
                bindType: e,
                handle: function(t) {
                    var n, i = this,
                        o = t.relatedTarget,
                        r = t.handleObj;
                    return o && (o === i || Ct.contains(i, o)) || (t.type = r.origType, n = r.handler.apply(this, arguments), t.type = e), n
                }
            }
        }), Ct.fn.extend({
            on: function(t, e, n, i) {
                return A(this, t, e, n, i)
            },
            one: function(t, e, n, i) {
                return A(this, t, e, n, i, 1)
            },
            off: function(t, e, n) {
                var i, o;
                if (t && t.preventDefault && t.handleObj) return i = t.handleObj, Ct(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                if ("object" == typeof t) {
                    for (o in t) this.off(o, e, t[o]);
                    return this
                }
                return !1 !== e && "function" != typeof e || (n = e, e = void 0), !1 === n && (n = S), this.each(function() {
                    Ct.event.remove(this, t, n, e)
                })
            }
        });
        var oe = /<script|<style|<link/i,
            re = /checked\s*(?:[^=]|=\s*.checked.)/i,
            se = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
        Ct.extend({
            htmlPrefilter: function(t) {
                return t
            },
            clone: function(t, e, n) {
                var i, o, r, s, a = t.cloneNode(!0),
                    l = Xt(t);
                if (!(yt.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || Ct.isXMLDoc(t)))
                    for (s = w(a), r = w(t), i = 0, o = r.length; i < o; i++) L(r[i], s[i]);
                if (e)
                    if (n)
                        for (r = r || w(t), s = s || w(a), i = 0, o = r.length; i < o; i++) O(r[i], s[i]);
                    else O(t, a);
                return s = w(a, "script"), s.length > 0 && T(s, !l && w(t, "script")), a
            },
            cleanData: function(t) {
                for (var e, n, i, o = Ct.event.special, r = 0; void 0 !== (n = t[r]); r++)
                    if (Mt(n)) {
                        if (e = n[Ft.expando]) {
                            if (e.events)
                                for (i in e.events) o[i] ? Ct.event.remove(n, i) : Ct.removeEvent(n, i, e.handle);
                            n[Ft.expando] = void 0
                        }
                        n[Wt.expando] && (n[Wt.expando] = void 0)
                    }
            }
        }), Ct.fn.extend({
            detach: function(t) {
                return q(this, t, !0)
            },
            remove: function(t) {
                return q(this, t)
            },
            text: function(t) {
                return qt(this, function(t) {
                    return void 0 === t ? Ct.text(this) : this.empty().each(function() {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                    })
                }, null, t, arguments.length)
            },
            append: function() {
                return R(this, arguments, function(t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        N(this, t).appendChild(t)
                    }
                })
            },
            prepend: function() {
                return R(this, arguments, function(t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = N(this, t);
                        e.insertBefore(t, e.firstChild)
                    }
                })
            },
            before: function() {
                return R(this, arguments, function(t) {
                    this.parentNode && this.parentNode.insertBefore(t, this)
                })
            },
            after: function() {
                return R(this, arguments, function(t) {
                    this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
                })
            },
            empty: function() {
                for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (Ct.cleanData(w(t, !1)), t.textContent = "");
                return this
            },
            clone: function(t, e) {
                return t = null != t && t, e = null == e ? t : e, this.map(function() {
                    return Ct.clone(this, t, e)
                })
            },
            html: function(t) {
                return qt(this, function(t) {
                    var e = this[0] || {},
                        n = 0,
                        i = this.length;
                    if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                    if ("string" == typeof t && !oe.test(t) && !ee[(Zt.exec(t) || ["", ""])[1].toLowerCase()]) {
                        t = Ct.htmlPrefilter(t);
                        try {
                            for (; n < i; n++) e = this[n] || {}, 1 === e.nodeType && (Ct.cleanData(w(e, !1)), e.innerHTML = t);
                            e = 0
                        } catch (t) {}
                    }
                    e && this.empty().append(t)
                }, null, t, arguments.length)
            },
            replaceWith: function() {
                var t = [];
                return R(this, arguments, function(e) {
                    var n = this.parentNode;
                    Ct.inArray(this, t) < 0 && (Ct.cleanData(w(this)), n && n.replaceChild(e, this))
                }, t)
            }
        }), Ct.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(t, e) {
            Ct.fn[t] = function(t) {
                for (var n, i = [], o = Ct(t), r = o.length - 1, s = 0; s <= r; s++) n = s === r ? this : this.clone(!0), Ct(o[s])[e](n), ft.apply(i, n.get());
                return this.pushStack(i)
            }
        });
        var ae = new RegExp("^(" + _t + ")(?!px)[a-z%]+$", "i"),
            le = function(e) {
                var n = e.ownerDocument.defaultView;
                return n && n.opener || (n = t), n.getComputedStyle(e)
            },
            ue = function(t, e, n) {
                var i, o, r = {};
                for (o in e) r[o] = t.style[o], t.style[o] = e[o];
                i = n.call(t);
                for (o in e) t.style[o] = r[o];
                return i
            },
            ce = new RegExp(Vt.join("|"), "i");
        ! function() {
            function e() {
                if (c) {
                    u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", Qt.appendChild(u).appendChild(c);
                    var e = t.getComputedStyle(c);
                    i = "1%" !== e.top, l = 12 === n(e.marginLeft), c.style.right = "60%", s = 36 === n(e.right), o = 36 === n(e.width), c.style.position = "absolute", r = 12 === n(c.offsetWidth / 3), Qt.removeChild(u), c = null
                }
            }

            function n(t) {
                return Math.round(parseFloat(t))
            }
            var i, o, r, s, a, l, u = wt.createElement("div"),
                c = wt.createElement("div");
            c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", yt.clearCloneStyle = "content-box" === c.style.backgroundClip, Ct.extend(yt, {
                boxSizingReliable: function() {
                    return e(), o
                },
                pixelBoxStyles: function() {
                    return e(), s
                },
                pixelPosition: function() {
                    return e(), i
                },
                reliableMarginLeft: function() {
                    return e(), l
                },
                scrollboxSize: function() {
                    return e(), r
                },
                reliableTrDimensions: function() {
                    var e, n, i, o;
                    return null == a && (e = wt.createElement("table"), n = wt.createElement("tr"), i = wt.createElement("div"), e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", n.style.cssText = "border:1px solid", n.style.height = "1px", i.style.height = "9px", i.style.display = "block", Qt.appendChild(e).appendChild(n).appendChild(i), o = t.getComputedStyle(n), a = parseInt(o.height, 10) + parseInt(o.borderTopWidth, 10) + parseInt(o.borderBottomWidth, 10) === n.offsetHeight, Qt.removeChild(e)), a
                }
            }))
        }();
        var fe = ["Webkit", "Moz", "ms"],
            de = wt.createElement("div").style,
            pe = {},
            he = /^(none|table(?!-c[ea]).+)/,
            ge = /^--/,
            me = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            ve = {
                letterSpacing: "0",
                fontWeight: "400"
            };
        Ct.extend({
            cssHooks: {
                opacity: {
                    get: function(t, e) {
                        if (e) {
                            var n = H(t, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                gridArea: !0,
                gridColumn: !0,
                gridColumnEnd: !0,
                gridColumnStart: !0,
                gridRow: !0,
                gridRowEnd: !0,
                gridRowStart: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {},
            style: function(t, e, n, i) {
                if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                    var o, r, s, a = h(e),
                        l = ge.test(e),
                        u = t.style;
                    if (l || (e = F(a)), s = Ct.cssHooks[e] || Ct.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (o = s.get(t, !1, i)) ? o : u[e];
                    r = typeof n, "string" === r && (o = zt.exec(n)) && o[1] && (n = y(t, e, o), r = "number"), null != n && n === n && ("number" !== r || l || (n += o && o[3] || (Ct.cssNumber[a] ? "" : "px")), yt.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (u[e] = "inherit"), s && "set" in s && void 0 === (n = s.set(t, n, i)) || (l ? u.setProperty(e, n) : u[e] = n))
                }
            },
            css: function(t, e, n, i) {
                var o, r, s, a = h(e);
                return ge.test(e) || (e = F(a)), s = Ct.cssHooks[e] || Ct.cssHooks[a], s && "get" in s && (o = s.get(t, !0, n)), void 0 === o && (o = H(t, e, i)), "normal" === o && e in ve && (o = ve[e]), "" === n || n ? (r = parseFloat(o), !0 === n || isFinite(r) ? r || 0 : o) : o
            }
        }), Ct.each(["height", "width"], function(t, e) {
            Ct.cssHooks[e] = {
                get: function(t, n, i) {
                    if (n) return !he.test(Ct.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? U(t, e, i) : ue(t, me, function() {
                        return U(t, e, i)
                    })
                },
                set: function(t, n, i) {
                    var o, r = le(t),
                        s = !yt.scrollboxSize() && "absolute" === r.position,
                        a = s || i,
                        l = a && "border-box" === Ct.css(t, "boxSizing", !1, r),
                        u = i ? B(t, e, i, l, r) : 0;
                    return l && s && (u -= Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - parseFloat(r[e]) - B(t, e, "border", !1, r) - .5)), u && (o = zt.exec(n)) && "px" !== (o[3] || "px") && (t.style[e] = n, n = Ct.css(t, e)), W(t, n, u)
                }
            }
        }), Ct.cssHooks.marginLeft = P(yt.reliableMarginLeft, function(t, e) {
            if (e) return (parseFloat(H(t, "marginLeft")) || t.getBoundingClientRect().left - ue(t, {
                marginLeft: 0
            }, function() {
                return t.getBoundingClientRect().left
            })) + "px"
        }), Ct.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(t, e) {
            Ct.cssHooks[t + e] = {
                expand: function(n) {
                    for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) o[t + Vt[i] + e] = r[i] || r[i - 2] || r[0];
                    return o
                }
            }, "margin" !== t && (Ct.cssHooks[t + e].set = W)
        }), Ct.fn.extend({
            css: function(t, e) {
                return qt(this, function(t, e, n) {
                    var i, o, r = {},
                        s = 0;
                    if (Array.isArray(e)) {
                        for (i = le(t), o = e.length; s < o; s++) r[e[s]] = Ct.css(t, e[s], !1, i);
                        return r
                    }
                    return void 0 !== n ? Ct.style(t, e, n) : Ct.css(t, e)
                }, t, e, arguments.length > 1)
            }
        }), Ct.Tween = _, _.prototype = {
            constructor: _,
            init: function(t, e, n, i, o, r) {
                this.elem = t, this.prop = n, this.easing = o || Ct.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = r || (Ct.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var t = _.propHooks[this.prop];
                return t && t.get ? t.get(this) : _.propHooks._default.get(this)
            },
            run: function(t) {
                var e, n = _.propHooks[this.prop];
                return this.options.duration ? this.pos = e = Ct.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : _.propHooks._default.set(this), this
            }
        }, _.prototype.init.prototype = _.prototype, _.propHooks = {
            _default: {
                get: function(t) {
                    var e;
                    return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = Ct.css(t.elem, t.prop, ""),
                        e && "auto" !== e ? e : 0)
                },
                set: function(t) {
                    Ct.fx.step[t.prop] ? Ct.fx.step[t.prop](t) : 1 !== t.elem.nodeType || !Ct.cssHooks[t.prop] && null == t.elem.style[F(t.prop)] ? t.elem[t.prop] = t.now : Ct.style(t.elem, t.prop, t.now + t.unit)
                }
            }
        }, _.propHooks.scrollTop = _.propHooks.scrollLeft = {
            set: function(t) {
                t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
            }
        }, Ct.easing = {
            linear: function(t) {
                return t
            },
            swing: function(t) {
                return .5 - Math.cos(t * Math.PI) / 2
            },
            _default: "swing"
        }, Ct.fx = _.prototype.init, Ct.fx.step = {};
        var ye, be, xe = /^(?:toggle|show|hide)$/,
            we = /queueHooks$/;
        Ct.Animation = Ct.extend(J, {
                tweeners: {
                    "*": [function(t, e) {
                        var n = this.createTween(t, e);
                        return y(n.elem, t, zt.exec(e), n), n
                    }]
                },
                tweener: function(t, e) {
                    bt(t) ? (e = t, t = ["*"]) : t = t.match(Ot);
                    for (var n, i = 0, o = t.length; i < o; i++) n = t[i], J.tweeners[n] = J.tweeners[n] || [], J.tweeners[n].unshift(e)
                },
                prefilters: [G],
                prefilter: function(t, e) {
                    e ? J.prefilters.unshift(t) : J.prefilters.push(t)
                }
            }), Ct.speed = function(t, e, n) {
                var i = t && "object" == typeof t ? Ct.extend({}, t) : {
                    complete: n || !n && e || bt(t) && t,
                    duration: t,
                    easing: n && e || e && !bt(e) && e
                };
                return Ct.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in Ct.fx.speeds ? i.duration = Ct.fx.speeds[i.duration] : i.duration = Ct.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                    bt(i.old) && i.old.call(this), i.queue && Ct.dequeue(this, i.queue)
                }, i
            }, Ct.fn.extend({
                fadeTo: function(t, e, n, i) {
                    return this.filter(Yt).css("opacity", 0).show().end().animate({
                        opacity: e
                    }, t, n, i)
                },
                animate: function(t, e, n, i) {
                    var o = Ct.isEmptyObject(t),
                        r = Ct.speed(e, n, i),
                        s = function() {
                            var e = J(this, Ct.extend({}, t), r);
                            (o || Ft.get(this, "finish")) && e.stop(!0)
                        };
                    return s.finish = s, o || !1 === r.queue ? this.each(s) : this.queue(r.queue, s)
                },
                stop: function(t, e, n) {
                    var i = function(t) {
                        var e = t.stop;
                        delete t.stop, e(n)
                    };
                    return "string" != typeof t && (n = e, e = t, t = void 0), e && this.queue(t || "fx", []), this.each(function() {
                        var e = !0,
                            o = null != t && t + "queueHooks",
                            r = Ct.timers,
                            s = Ft.get(this);
                        if (o) s[o] && s[o].stop && i(s[o]);
                        else
                            for (o in s) s[o] && s[o].stop && we.test(o) && i(s[o]);
                        for (o = r.length; o--;) r[o].elem !== this || null != t && r[o].queue !== t || (r[o].anim.stop(n), e = !1, r.splice(o, 1));
                        !e && n || Ct.dequeue(this, t)
                    })
                },
                finish: function(t) {
                    return !1 !== t && (t = t || "fx"), this.each(function() {
                        var e, n = Ft.get(this),
                            i = n[t + "queue"],
                            o = n[t + "queueHooks"],
                            r = Ct.timers,
                            s = i ? i.length : 0;
                        for (n.finish = !0, Ct.queue(this, t, []), o && o.stop && o.stop.call(this, !0), e = r.length; e--;) r[e].elem === this && r[e].queue === t && (r[e].anim.stop(!0), r.splice(e, 1));
                        for (e = 0; e < s; e++) i[e] && i[e].finish && i[e].finish.call(this);
                        delete n.finish
                    })
                }
            }), Ct.each(["toggle", "show", "hide"], function(t, e) {
                var n = Ct.fn[e];
                Ct.fn[e] = function(t, i, o) {
                    return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(Q(e, !0), t, i, o)
                }
            }), Ct.each({
                slideDown: Q("show"),
                slideUp: Q("hide"),
                slideToggle: Q("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function(t, e) {
                Ct.fn[t] = function(t, n, i) {
                    return this.animate(e, t, n, i)
                }
            }), Ct.timers = [], Ct.fx.tick = function() {
                var t, e = 0,
                    n = Ct.timers;
                for (ye = Date.now(); e < n.length; e++)(t = n[e])() || n[e] !== t || n.splice(e--, 1);
                n.length || Ct.fx.stop(), ye = void 0
            }, Ct.fx.timer = function(t) {
                Ct.timers.push(t), Ct.fx.start()
            }, Ct.fx.interval = 13, Ct.fx.start = function() {
                be || (be = !0, z())
            }, Ct.fx.stop = function() {
                be = null
            }, Ct.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, Ct.fn.delay = function(e, n) {
                return e = Ct.fx ? Ct.fx.speeds[e] || e : e, n = n || "fx", this.queue(n, function(n, i) {
                    var o = t.setTimeout(n, e);
                    i.stop = function() {
                        t.clearTimeout(o)
                    }
                })
            },
            function() {
                var t = wt.createElement("input"),
                    e = wt.createElement("select"),
                    n = e.appendChild(wt.createElement("option"));
                t.type = "checkbox", yt.checkOn = "" !== t.value, yt.optSelected = n.selected, t = wt.createElement("input"), t.value = "t", t.type = "radio", yt.radioValue = "t" === t.value
            }();
        var Te, Ce = Ct.expr.attrHandle;
        Ct.fn.extend({
            attr: function(t, e) {
                return qt(this, Ct.attr, t, e, arguments.length > 1)
            },
            removeAttr: function(t) {
                return this.each(function() {
                    Ct.removeAttr(this, t)
                })
            }
        }), Ct.extend({
            attr: function(t, e, n) {
                var i, o, r = t.nodeType;
                if (3 !== r && 8 !== r && 2 !== r) return void 0 === t.getAttribute ? Ct.prop(t, e, n) : (1 === r && Ct.isXMLDoc(t) || (o = Ct.attrHooks[e.toLowerCase()] || (Ct.expr.match.bool.test(e) ? Te : void 0)), void 0 !== n ? null === n ? void Ct.removeAttr(t, e) : o && "set" in o && void 0 !== (i = o.set(t, n, e)) ? i : (t.setAttribute(e, n + ""), n) : o && "get" in o && null !== (i = o.get(t, e)) ? i : (i = Ct.find.attr(t, e), null == i ? void 0 : i))
            },
            attrHooks: {
                type: {
                    set: function(t, e) {
                        if (!yt.radioValue && "radio" === e && r(t, "input")) {
                            var n = t.value;
                            return t.setAttribute("type", e), n && (t.value = n), e
                        }
                    }
                }
            },
            removeAttr: function(t, e) {
                var n, i = 0,
                    o = e && e.match(Ot);
                if (o && 1 === t.nodeType)
                    for (; n = o[i++];) t.removeAttribute(n)
            }
        }), Te = {
            set: function(t, e, n) {
                return !1 === e ? Ct.removeAttr(t, n) : t.setAttribute(n, n), n
            }
        }, Ct.each(Ct.expr.match.bool.source.match(/\w+/g), function(t, e) {
            var n = Ce[e] || Ct.find.attr;
            Ce[e] = function(t, e, i) {
                var o, r, s = e.toLowerCase();
                return i || (r = Ce[s], Ce[s] = o, o = null != n(t, e, i) ? s : null, Ce[s] = r), o
            }
        });
        var Ee = /^(?:input|select|textarea|button)$/i,
            Se = /^(?:a|area)$/i;
        Ct.fn.extend({
            prop: function(t, e) {
                return qt(this, Ct.prop, t, e, arguments.length > 1)
            },
            removeProp: function(t) {
                return this.each(function() {
                    delete this[Ct.propFix[t] || t]
                })
            }
        }), Ct.extend({
            prop: function(t, e, n) {
                var i, o, r = t.nodeType;
                if (3 !== r && 8 !== r && 2 !== r) return 1 === r && Ct.isXMLDoc(t) || (e = Ct.propFix[e] || e, o = Ct.propHooks[e]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(t, n, e)) ? i : t[e] = n : o && "get" in o && null !== (i = o.get(t, e)) ? i : t[e]
            },
            propHooks: {
                tabIndex: {
                    get: function(t) {
                        var e = Ct.find.attr(t, "tabindex");
                        return e ? parseInt(e, 10) : Ee.test(t.nodeName) || Se.test(t.nodeName) && t.href ? 0 : -1
                    }
                }
            },
            propFix: {
                for: "htmlFor",
                class: "className"
            }
        }), yt.optSelected || (Ct.propHooks.selected = {
            get: function(t) {
                var e = t.parentNode;
                return e && e.parentNode && e.parentNode.selectedIndex, null
            },
            set: function(t) {
                var e = t.parentNode;
                e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
            }
        }), Ct.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            Ct.propFix[this.toLowerCase()] = this
        }), Ct.fn.extend({
            addClass: function(t) {
                var e, n, i, o, r, s, a, l = 0;
                if (bt(t)) return this.each(function(e) {
                    Ct(this).addClass(t.call(this, e, Z(this)))
                });
                if (e = tt(t), e.length)
                    for (; n = this[l++];)
                        if (o = Z(n), i = 1 === n.nodeType && " " + K(o) + " ") {
                            for (s = 0; r = e[s++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                            a = K(i), o !== a && n.setAttribute("class", a)
                        }
                return this
            },
            removeClass: function(t) {
                var e, n, i, o, r, s, a, l = 0;
                if (bt(t)) return this.each(function(e) {
                    Ct(this).removeClass(t.call(this, e, Z(this)))
                });
                if (!arguments.length) return this.attr("class", "");
                if (e = tt(t), e.length)
                    for (; n = this[l++];)
                        if (o = Z(n), i = 1 === n.nodeType && " " + K(o) + " ") {
                            for (s = 0; r = e[s++];)
                                for (; i.indexOf(" " + r + " ") > -1;) i = i.replace(" " + r + " ", " ");
                            a = K(i), o !== a && n.setAttribute("class", a)
                        }
                return this
            },
            toggleClass: function(t, e) {
                var n = typeof t,
                    i = "string" === n || Array.isArray(t);
                return "boolean" == typeof e && i ? e ? this.addClass(t) : this.removeClass(t) : bt(t) ? this.each(function(n) {
                    Ct(this).toggleClass(t.call(this, n, Z(this), e), e)
                }) : this.each(function() {
                    var e, o, r, s;
                    if (i)
                        for (o = 0, r = Ct(this), s = tt(t); e = s[o++];) r.hasClass(e) ? r.removeClass(e) : r.addClass(e);
                    else void 0 !== t && "boolean" !== n || (e = Z(this), e && Ft.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === t ? "" : Ft.get(this, "__className__") || ""))
                })
            },
            hasClass: function(t) {
                var e, n, i = 0;
                for (e = " " + t + " "; n = this[i++];)
                    if (1 === n.nodeType && (" " + K(Z(n)) + " ").indexOf(e) > -1) return !0;
                return !1
            }
        });
        var $e = /\r/g;
        Ct.fn.extend({
            val: function(t) {
                var e, n, i, o = this[0]; {
                    if (arguments.length) return i = bt(t), this.each(function(n) {
                        var o;
                        1 === this.nodeType && (o = i ? t.call(this, n, Ct(this).val()) : t, null == o ? o = "" : "number" == typeof o ? o += "" : Array.isArray(o) && (o = Ct.map(o, function(t) {
                            return null == t ? "" : t + ""
                        })), (e = Ct.valHooks[this.type] || Ct.valHooks[this.nodeName.toLowerCase()]) && "set" in e && void 0 !== e.set(this, o, "value") || (this.value = o))
                    });
                    if (o) return (e = Ct.valHooks[o.type] || Ct.valHooks[o.nodeName.toLowerCase()]) && "get" in e && void 0 !== (n = e.get(o, "value")) ? n : (n = o.value, "string" == typeof n ? n.replace($e, "") : null == n ? "" : n)
                }
            }
        }), Ct.extend({
            valHooks: {
                option: {
                    get: function(t) {
                        var e = Ct.find.attr(t, "value");
                        return null != e ? e : K(Ct.text(t))
                    }
                },
                select: {
                    get: function(t) {
                        var e, n, i, o = t.options,
                            s = t.selectedIndex,
                            a = "select-one" === t.type,
                            l = a ? null : [],
                            u = a ? s + 1 : o.length;
                        for (i = s < 0 ? u : a ? s : 0; i < u; i++)
                            if (n = o[i], (n.selected || i === s) && !n.disabled && (!n.parentNode.disabled || !r(n.parentNode, "optgroup"))) {
                                if (e = Ct(n).val(), a) return e;
                                l.push(e)
                            }
                        return l
                    },
                    set: function(t, e) {
                        for (var n, i, o = t.options, r = Ct.makeArray(e), s = o.length; s--;) i = o[s], (i.selected = Ct.inArray(Ct.valHooks.option.get(i), r) > -1) && (n = !0);
                        return n || (t.selectedIndex = -1), r
                    }
                }
            }
        }), Ct.each(["radio", "checkbox"], function() {
            Ct.valHooks[this] = {
                set: function(t, e) {
                    if (Array.isArray(e)) return t.checked = Ct.inArray(Ct(t).val(), e) > -1
                }
            }, yt.checkOn || (Ct.valHooks[this].get = function(t) {
                return null === t.getAttribute("value") ? "on" : t.value
            })
        }), yt.focusin = "onfocusin" in t;
        var ke = /^(?:focusinfocus|focusoutblur)$/,
            Ae = function(t) {
                t.stopPropagation()
            };
        Ct.extend(Ct.event, {
            trigger: function(e, n, i, o) {
                var r, s, a, l, u, c, f, d, p = [i || wt],
                    h = gt.call(e, "type") ? e.type : e,
                    g = gt.call(e, "namespace") ? e.namespace.split(".") : [];
                if (s = d = a = i = i || wt, 3 !== i.nodeType && 8 !== i.nodeType && !ke.test(h + Ct.event.triggered) && (h.indexOf(".") > -1 && (g = h.split("."), h = g.shift(), g.sort()), u = h.indexOf(":") < 0 && "on" + h, e = e[Ct.expando] ? e : new Ct.Event(h, "object" == typeof e && e), e.isTrigger = o ? 2 : 3, e.namespace = g.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = i), n = null == n ? [e] : Ct.makeArray(n, [e]), f = Ct.event.special[h] || {}, o || !f.trigger || !1 !== f.trigger.apply(i, n))) {
                    if (!o && !f.noBubble && !xt(i)) {
                        for (l = f.delegateType || h, ke.test(l + h) || (s = s.parentNode); s; s = s.parentNode) p.push(s), a = s;
                        a === (i.ownerDocument || wt) && p.push(a.defaultView || a.parentWindow || t)
                    }
                    for (r = 0;
                        (s = p[r++]) && !e.isPropagationStopped();) d = s, e.type = r > 1 ? l : f.bindType || h, c = (Ft.get(s, "events") || Object.create(null))[e.type] && Ft.get(s, "handle"), c && c.apply(s, n), (c = u && s[u]) && c.apply && Mt(s) && (e.result = c.apply(s, n), !1 === e.result && e.preventDefault());
                    return e.type = h, o || e.isDefaultPrevented() || f._default && !1 !== f._default.apply(p.pop(), n) || !Mt(i) || u && bt(i[h]) && !xt(i) && (a = i[u], a && (i[u] = null), Ct.event.triggered = h, e.isPropagationStopped() && d.addEventListener(h, Ae), i[h](), e.isPropagationStopped() && d.removeEventListener(h, Ae), Ct.event.triggered = void 0, a && (i[u] = a)), e.result
                }
            },
            simulate: function(t, e, n) {
                var i = Ct.extend(new Ct.Event, n, {
                    type: t,
                    isSimulated: !0
                });
                Ct.event.trigger(i, null, e)
            }
        }), Ct.fn.extend({
            trigger: function(t, e) {
                return this.each(function() {
                    Ct.event.trigger(t, e, this)
                })
            },
            triggerHandler: function(t, e) {
                var n = this[0];
                if (n) return Ct.event.trigger(t, e, n, !0)
            }
        }), yt.focusin || Ct.each({
            focus: "focusin",
            blur: "focusout"
        }, function(t, e) {
            var n = function(t) {
                Ct.event.simulate(e, t.target, Ct.event.fix(t))
            };
            Ct.event.special[e] = {
                setup: function() {
                    var i = this.ownerDocument || this.document || this,
                        o = Ft.access(i, e);
                    o || i.addEventListener(t, n, !0), Ft.access(i, e, (o || 0) + 1)
                },
                teardown: function() {
                    var i = this.ownerDocument || this.document || this,
                        o = Ft.access(i, e) - 1;
                    o ? Ft.access(i, e, o) : (i.removeEventListener(t, n, !0), Ft.remove(i, e))
                }
            }
        });
        var De = t.location,
            Ne = {
                guid: Date.now()
            },
            je = /\?/;
        Ct.parseXML = function(e) {
            var n, i;
            if (!e || "string" != typeof e) return null;
            try {
                n = (new t.DOMParser).parseFromString(e, "text/xml")
            } catch (t) {}
            return i = n && n.getElementsByTagName("parsererror")[0], n && !i || Ct.error("Invalid XML: " + (i ? Ct.map(i.childNodes, function(t) {
                return t.textContent
            }).join("\n") : e)), n
        };
        var Ie = /\[\]$/,
            Oe = /\r?\n/g,
            Le = /^(?:submit|button|image|reset|file)$/i,
            Re = /^(?:input|select|textarea|keygen)/i;
        Ct.param = function(t, e) {
            var n, i = [],
                o = function(t, e) {
                    var n = bt(e) ? e() : e;
                    i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == n ? "" : n)
                };
            if (null == t) return "";
            if (Array.isArray(t) || t.jquery && !Ct.isPlainObject(t)) Ct.each(t, function() {
                o(this.name, this.value)
            });
            else
                for (n in t) et(n, t[n], e, o);
            return i.join("&")
        }, Ct.fn.extend({
            serialize: function() {
                return Ct.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var t = Ct.prop(this, "elements");
                    return t ? Ct.makeArray(t) : this
                }).filter(function() {
                    var t = this.type;
                    return this.name && !Ct(this).is(":disabled") && Re.test(this.nodeName) && !Le.test(t) && (this.checked || !Kt.test(t))
                }).map(function(t, e) {
                    var n = Ct(this).val();
                    return null == n ? null : Array.isArray(n) ? Ct.map(n, function(t) {
                        return {
                            name: e.name,
                            value: t.replace(Oe, "\r\n")
                        }
                    }) : {
                        name: e.name,
                        value: n.replace(Oe, "\r\n")
                    }
                }).get()
            }
        });
        var qe = /%20/g,
            He = /#.*$/,
            Pe = /([?&])_=[^&]*/,
            Me = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            Fe = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            We = /^(?:GET|HEAD)$/,
            Be = /^\/\//,
            Ue = {},
            _e = {},
            ze = "*/".concat("*"),
            Ve = wt.createElement("a");
        Ve.href = De.href, Ct.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: De.href,
                type: "GET",
                isLocal: Fe.test(De.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": ze,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": JSON.parse,
                    "text xml": Ct.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(t, e) {
                return e ? ot(ot(t, Ct.ajaxSettings), e) : ot(Ct.ajaxSettings, t)
            },
            ajaxPrefilter: nt(Ue),
            ajaxTransport: nt(_e),
            ajax: function(e, n) {
                function i(e, n, i, a) {
                    var u, d, p, x, w, T = n;
                    c || (c = !0, l && t.clearTimeout(l), o = void 0, s = a || "", C.readyState = e > 0 ? 4 : 0, u = e >= 200 && e < 300 || 304 === e, i && (x = rt(h, C, i)), !u && Ct.inArray("script", h.dataTypes) > -1 && Ct.inArray("json", h.dataTypes) < 0 && (h.converters["text script"] = function() {}), x = st(h, x, C, u), u ? (h.ifModified && (w = C.getResponseHeader("Last-Modified"), w && (Ct.lastModified[r] = w), (w = C.getResponseHeader("etag")) && (Ct.etag[r] = w)), 204 === e || "HEAD" === h.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = x.state, d = x.data, p = x.error, u = !p)) : (p = T, !e && T || (T = "error", e < 0 && (e = 0))), C.status = e, C.statusText = (n || T) + "", u ? v.resolveWith(g, [d, T, C]) : v.rejectWith(g, [C, T, p]), C.statusCode(b), b = void 0, f && m.trigger(u ? "ajaxSuccess" : "ajaxError", [C, h, u ? d : p]), y.fireWith(g, [C, T]), f && (m.trigger("ajaxComplete", [C, h]), --Ct.active || Ct.event.trigger("ajaxStop")))
                }
                "object" == typeof e && (n = e, e = void 0), n = n || {};
                var o, r, s, a, l, u, c, f, d, p, h = Ct.ajaxSetup({}, n),
                    g = h.context || h,
                    m = h.context && (g.nodeType || g.jquery) ? Ct(g) : Ct.event,
                    v = Ct.Deferred(),
                    y = Ct.Callbacks("once memory"),
                    b = h.statusCode || {},
                    x = {},
                    w = {},
                    T = "canceled",
                    C = {
                        readyState: 0,
                        getResponseHeader: function(t) {
                            var e;
                            if (c) {
                                if (!a)
                                    for (a = {}; e = Me.exec(s);) a[e[1].toLowerCase() + " "] = (a[e[1].toLowerCase() + " "] || []).concat(e[2]);
                                e = a[t.toLowerCase() + " "]
                            }
                            return null == e ? null : e.join(", ")
                        },
                        getAllResponseHeaders: function() {
                            return c ? s : null
                        },
                        setRequestHeader: function(t, e) {
                            return null == c && (t = w[t.toLowerCase()] = w[t.toLowerCase()] || t, x[t] = e), this
                        },
                        overrideMimeType: function(t) {
                            return null == c && (h.mimeType = t), this
                        },
                        statusCode: function(t) {
                            var e;
                            if (t)
                                if (c) C.always(t[C.status]);
                                else
                                    for (e in t) b[e] = [b[e], t[e]];
                            return this
                        },
                        abort: function(t) {
                            var e = t || T;
                            return o && o.abort(e), i(0, e), this
                        }
                    };
                if (v.promise(C), h.url = ((e || h.url || De.href) + "").replace(Be, De.protocol + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(Ot) || [""], null == h.crossDomain) {
                    u = wt.createElement("a");
                    try {
                        u.href = h.url, u.href = u.href, h.crossDomain = Ve.protocol + "//" + Ve.host != u.protocol + "//" + u.host
                    } catch (t) {
                        h.crossDomain = !0
                    }
                }
                if (h.data && h.processData && "string" != typeof h.data && (h.data = Ct.param(h.data, h.traditional)), it(Ue, h, n, C), c) return C;
                f = Ct.event && h.global, f && 0 == Ct.active++ && Ct.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !We.test(h.type), r = h.url.replace(He, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(qe, "+")) : (p = h.url.slice(r.length), h.data && (h.processData || "string" == typeof h.data) && (r += (je.test(r) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (r = r.replace(Pe, "$1"), p = (je.test(r) ? "&" : "?") + "_=" + Ne.guid++ + p), h.url = r + p), h.ifModified && (Ct.lastModified[r] && C.setRequestHeader("If-Modified-Since", Ct.lastModified[r]), Ct.etag[r] && C.setRequestHeader("If-None-Match", Ct.etag[r])), (h.data && h.hasContent && !1 !== h.contentType || n.contentType) && C.setRequestHeader("Content-Type", h.contentType), C.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + ze + "; q=0.01" : "") : h.accepts["*"]);
                for (d in h.headers) C.setRequestHeader(d, h.headers[d]);
                if (h.beforeSend && (!1 === h.beforeSend.call(g, C, h) || c)) return C.abort();
                if (T = "abort", y.add(h.complete), C.done(h.success), C.fail(h.error), o = it(_e, h, n, C)) {
                    if (C.readyState = 1, f && m.trigger("ajaxSend", [C, h]), c) return C;
                    h.async && h.timeout > 0 && (l = t.setTimeout(function() {
                        C.abort("timeout")
                    }, h.timeout));
                    try {
                        c = !1, o.send(x, i)
                    } catch (t) {
                        if (c) throw t;
                        i(-1, t)
                    }
                } else i(-1, "No Transport");
                return C
            },
            getJSON: function(t, e, n) {
                return Ct.get(t, e, n, "json")
            },
            getScript: function(t, e) {
                return Ct.get(t, void 0, e, "script")
            }
        }), Ct.each(["get", "post"], function(t, e) {
            Ct[e] = function(t, n, i, o) {
                return bt(n) && (o = o || i, i = n, n = void 0), Ct.ajax(Ct.extend({
                    url: t,
                    type: e,
                    dataType: o,
                    data: n,
                    success: i
                }, Ct.isPlainObject(t) && t))
            }
        }), Ct.ajaxPrefilter(function(t) {
            var e;
            for (e in t.headers) "content-type" === e.toLowerCase() && (t.contentType = t.headers[e] || "")
        }), Ct._evalUrl = function(t, e, n) {
            return Ct.ajax({
                url: t,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                converters: {
                    "text script": function() {}
                },
                dataFilter: function(t) {
                    Ct.globalEval(t, e, n)
                }
            })
        }, Ct.fn.extend({
            wrapAll: function(t) {
                var e;
                return this[0] && (bt(t) && (t = t.call(this[0])), e = Ct(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                    for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                    return t
                }).append(this)), this
            },
            wrapInner: function(t) {
                return bt(t) ? this.each(function(e) {
                    Ct(this).wrapInner(t.call(this, e))
                }) : this.each(function() {
                    var e = Ct(this),
                        n = e.contents();
                    n.length ? n.wrapAll(t) : e.append(t)
                })
            },
            wrap: function(t) {
                var e = bt(t);
                return this.each(function(n) {
                    Ct(this).wrapAll(e ? t.call(this, n) : t)
                })
            },
            unwrap: function(t) {
                return this.parent(t).not("body").each(function() {
                    Ct(this).replaceWith(this.childNodes)
                }), this
            }
        }), Ct.expr.pseudos.hidden = function(t) {
            return !Ct.expr.pseudos.visible(t)
        }, Ct.expr.pseudos.visible = function(t) {
            return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
        }, Ct.ajaxSettings.xhr = function() {
            try {
                return new t.XMLHttpRequest
            } catch (t) {}
        };
        var Qe = {
                0: 200,
                1223: 204
            },
            Xe = Ct.ajaxSettings.xhr();
        yt.cors = !!Xe && "withCredentials" in Xe, yt.ajax = Xe = !!Xe, Ct.ajaxTransport(function(e) {
            var n, i;
            if (yt.cors || Xe && !e.crossDomain) return {
                send: function(o, r) {
                    var s, a = e.xhr();
                    if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                        for (s in e.xhrFields) a[s] = e.xhrFields[s];
                    e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest");
                    for (s in o) a.setRequestHeader(s, o[s]);
                    n = function(t) {
                        return function() {
                            n && (n = i = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null, "abort" === t ? a.abort() : "error" === t ? "number" != typeof a.status ? r(0, "error") : r(a.status, a.statusText) : r(Qe[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                                binary: a.response
                            } : {
                                text: a.responseText
                            }, a.getAllResponseHeaders()))
                        }
                    }, a.onload = n(), i = a.onerror = a.ontimeout = n("error"), void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function() {
                        4 === a.readyState && t.setTimeout(function() {
                            n && i()
                        })
                    }, n = n("abort");
                    try {
                        a.send(e.hasContent && e.data || null)
                    } catch (t) {
                        if (n) throw t
                    }
                },
                abort: function() {
                    n && n()
                }
            }
        }), Ct.ajaxPrefilter(function(t) {
            t.crossDomain && (t.contents.script = !1)
        }), Ct.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(t) {
                    return Ct.globalEval(t), t
                }
            }
        }), Ct.ajaxPrefilter("script", function(t) {
            void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
        }), Ct.ajaxTransport("script", function(t) {
            if (t.crossDomain || t.scriptAttrs) {
                var e, n;
                return {
                    send: function(i, o) {
                        e = Ct("<script>").attr(t.scriptAttrs || {}).prop({
                            charset: t.scriptCharset,
                            src: t.url
                        }).on("load error", n = function(t) {
                            e.remove(), n = null, t && o("error" === t.type ? 404 : 200, t.type)
                        }), wt.head.appendChild(e[0])
                    },
                    abort: function() {
                        n && n()
                    }
                }
            }
        });
        var Ge = [],
            Ye = /(=)\?(?=&|$)|\?\?/;
        Ct.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var t = Ge.pop() || Ct.expando + "_" + Ne.guid++;
                return this[t] = !0, t
            }
        }), Ct.ajaxPrefilter("json jsonp", function(e, n, i) {
            var o, r, s, a = !1 !== e.jsonp && (Ye.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Ye.test(e.data) && "data");
            if (a || "jsonp" === e.dataTypes[0]) return o = e.jsonpCallback = bt(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Ye, "$1" + o) : !1 !== e.jsonp && (e.url += (je.test(e.url) ? "&" : "?") + e.jsonp + "=" + o), e.converters["script json"] = function() {
                return s || Ct.error(o + " was not called"), s[0]
            }, e.dataTypes[0] = "json", r = t[o], t[o] = function() {
                s = arguments
            }, i.always(function() {
                void 0 === r ? Ct(t).removeProp(o) : t[o] = r, e[o] && (e.jsonpCallback = n.jsonpCallback, Ge.push(o)), s && bt(r) && r(s[0]), s = r = void 0
            }), "script"
        }), yt.createHTMLDocument = function() {
            var t = wt.implementation.createHTMLDocument("").body;
            return t.innerHTML = "<form></form><form></form>", 2 === t.childNodes.length
        }(), Ct.parseHTML = function(t, e, n) {
            if ("string" != typeof t) return [];
            "boolean" == typeof e && (n = e, e = !1);
            var i, o, r;
            return e || (yt.createHTMLDocument ? (e = wt.implementation.createHTMLDocument(""), i = e.createElement("base"), i.href = wt.location.href, e.head.appendChild(i)) : e = wt), o = At.exec(t), r = !n && [], o ? [e.createElement(o[1])] : (o = C([t], e, r), r && r.length && Ct(r).remove(), Ct.merge([], o.childNodes))
        }, Ct.fn.load = function(t, e, n) {
            var i, o, r, s = this,
                a = t.indexOf(" ");
            return a > -1 && (i = K(t.slice(a)), t = t.slice(0, a)), bt(e) ? (n = e, e = void 0) : e && "object" == typeof e && (o = "POST"), s.length > 0 && Ct.ajax({
                url: t,
                type: o || "GET",
                dataType: "html",
                data: e
            }).done(function(t) {
                r = arguments, s.html(i ? Ct("<div>").append(Ct.parseHTML(t)).find(i) : t)
            }).always(n && function(t, e) {
                s.each(function() {
                    n.apply(this, r || [t.responseText, e, t])
                })
            }), this
        }, Ct.expr.pseudos.animated = function(t) {
            return Ct.grep(Ct.timers, function(e) {
                return t === e.elem
            }).length
        }, Ct.offset = {
            setOffset: function(t, e, n) {
                var i, o, r, s, a, l, u, c = Ct.css(t, "position"),
                    f = Ct(t),
                    d = {};
                "static" === c && (t.style.position = "relative"), a = f.offset(), r = Ct.css(t, "top"), l = Ct.css(t, "left"), u = ("absolute" === c || "fixed" === c) && (r + l).indexOf("auto") > -1, u ? (i = f.position(), s = i.top, o = i.left) : (s = parseFloat(r) || 0, o = parseFloat(l) || 0), bt(e) && (e = e.call(t, n, Ct.extend({}, a))), null != e.top && (d.top = e.top - a.top + s), null != e.left && (d.left = e.left - a.left + o), "using" in e ? e.using.call(t, d) : f.css(d)
            }
        }, Ct.fn.extend({
            offset: function(t) {
                if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                    Ct.offset.setOffset(this, t, e)
                });
                var e, n, i = this[0];
                if (i) return i.getClientRects().length ? (e = i.getBoundingClientRect(), n = i.ownerDocument.defaultView, {
                    top: e.top + n.pageYOffset,
                    left: e.left + n.pageXOffset
                }) : {
                    top: 0,
                    left: 0
                }
            },
            position: function() {
                if (this[0]) {
                    var t, e, n, i = this[0],
                        o = {
                            top: 0,
                            left: 0
                        };
                    if ("fixed" === Ct.css(i, "position")) e = i.getBoundingClientRect();
                    else {
                        for (e = this.offset(), n = i.ownerDocument, t = i.offsetParent || n.documentElement; t && (t === n.body || t === n.documentElement) && "static" === Ct.css(t, "position");) t = t.parentNode;
                        t && t !== i && 1 === t.nodeType && (o = Ct(t).offset(), o.top += Ct.css(t, "borderTopWidth", !0), o.left += Ct.css(t, "borderLeftWidth", !0))
                    }
                    return {
                        top: e.top - o.top - Ct.css(i, "marginTop", !0),
                        left: e.left - o.left - Ct.css(i, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var t = this.offsetParent; t && "static" === Ct.css(t, "position");) t = t.offsetParent;
                    return t || Qt
                })
            }
        }), Ct.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(t, e) {
            var n = "pageYOffset" === e;
            Ct.fn[t] = function(i) {
                return qt(this, function(t, i, o) {
                    var r;
                    if (xt(t) ? r = t : 9 === t.nodeType && (r = t.defaultView), void 0 === o) return r ? r[e] : t[i];
                    r ? r.scrollTo(n ? r.pageXOffset : o, n ? o : r.pageYOffset) : t[i] = o
                }, t, i, arguments.length)
            }
        }), Ct.each(["top", "left"], function(t, e) {
            Ct.cssHooks[e] = P(yt.pixelPosition, function(t, n) {
                if (n) return n = H(t, e), ae.test(n) ? Ct(t).position()[e] + "px" : n
            })
        }), Ct.each({
            Height: "height",
            Width: "width"
        }, function(t, e) {
            Ct.each({
                padding: "inner" + t,
                content: e,
                "": "outer" + t
            }, function(n, i) {
                Ct.fn[i] = function(o, r) {
                    var s = arguments.length && (n || "boolean" != typeof o),
                        a = n || (!0 === o || !0 === r ? "margin" : "border");
                    return qt(this, function(e, n, o) {
                        var r;
                        return xt(e) ? 0 === i.indexOf("outer") ? e["inner" + t] : e.document.documentElement["client" + t] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + t], r["scroll" + t], e.body["offset" + t], r["offset" + t], r["client" + t])) : void 0 === o ? Ct.css(e, n, a) : Ct.style(e, n, o, a)
                    }, e, s ? o : void 0, s)
                }
            })
        }), Ct.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
            Ct.fn[e] = function(t) {
                return this.on(e, t)
            }
        }), Ct.fn.extend({
            bind: function(t, e, n) {
                return this.on(t, null, e, n)
            },
            unbind: function(t, e) {
                return this.off(t, null, e)
            },
            delegate: function(t, e, n, i) {
                return this.on(e, t, n, i)
            },
            undelegate: function(t, e, n) {
                return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
            },
            hover: function(t, e) {
                return this.mouseenter(t).mouseleave(e || t)
            }
        }), Ct.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(t, e) {
            Ct.fn[e] = function(t, n) {
                return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
            }
        });
        var Je = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        Ct.proxy = function(t, e) {
            var n, i, o;
            if ("string" == typeof e && (n = t[e], e = t, t = n), bt(t)) return i = ut.call(arguments, 2), o = function() {
                return t.apply(e || this, i.concat(ut.call(arguments)))
            }, o.guid = t.guid = t.guid || Ct.guid++, o
        }, Ct.holdReady = function(t) {
            t ? Ct.readyWait++ : Ct.ready(!0)
        }, Ct.isArray = Array.isArray, Ct.parseJSON = JSON.parse, Ct.nodeName = r, Ct.isFunction = bt, Ct.isWindow = xt, Ct.camelCase = h, Ct.type = i, Ct.now = Date.now, Ct.isNumeric = function(t) {
            var e = Ct.type(t);
            return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t))
        }, Ct.trim = function(t) {
            return null == t ? "" : (t + "").replace(Je, "")
        }, "function" == typeof define && define.amd && define("jquery", [], function() {
            return Ct
        });
        var Ke = t.jQuery,
            Ze = t.$;
        return Ct.noConflict = function(e) {
            return t.$ === Ct && (t.$ = Ze), e && t.jQuery === Ct && (t.jQuery = Ke), Ct
        }, void 0 === e && (t.jQuery = t.$ = Ct), Ct
    }), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function(t) {
    "use strict";
    var e = t.fn.jquery.split(" ")[0].split(".");
    if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1 || e[0] > 3) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")
}(jQuery),
function(t) {
    "use strict";

    function e() {
        var t = document.createElement("bootstrap"),
            e = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
        for (var n in e)
            if (void 0 !== t.style[n]) return {
                end: e[n]
            };
        return !1
    }
    t.fn.emulateTransitionEnd = function(e) {
        var n = !1,
            i = this;
        t(this).one("bsTransitionEnd", function() {
            n = !0
        });
        var o = function() {
            n || t(i).trigger(t.support.transition.end)
        };
        return setTimeout(o, e), this
    }, t(function() {
        t.support.transition = e(), t.support.transition && (t.event.special.bsTransitionEnd = {
            bindType: t.support.transition.end,
            delegateType: t.support.transition.end,
            handle: function(e) {
                if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
            }
        })
    })
}(jQuery),
function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var n = t(this),
                o = n.data("bs.alert");
            o || n.data("bs.alert", o = new i(this)), "string" == typeof e && o[e].call(n)
        })
    }
    var n = '[data-dismiss="alert"]',
        i = function(e) {
            t(e).on("click", n, this.close)
        };
    i.VERSION = "3.4.1", i.TRANSITION_DURATION = 150, i.prototype.close = function(e) {
        function n() {
            s.detach().trigger("closed.bs.alert").remove()
        }
        var o = t(this),
            r = o.attr("data-target");
        r || (r = o.attr("href"), r = r && r.replace(/.*(?=#[^\s]*$)/, "")), r = "#" === r ? [] : r;
        var s = t(document).find(r);
        e && e.preventDefault(), s.length || (s = o.closest(".alert")), s.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (s.removeClass("in"), t.support.transition && s.hasClass("fade") ? s.one("bsTransitionEnd", n).emulateTransitionEnd(i.TRANSITION_DURATION) : n())
    };
    var o = t.fn.alert;
    t.fn.alert = e, t.fn.alert.Constructor = i, t.fn.alert.noConflict = function() {
        return t.fn.alert = o, this
    }, t(document).on("click.bs.alert.data-api", n, i.prototype.close)
}(jQuery),
function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var i = t(this),
                o = i.data("bs.button"),
                r = "object" == typeof e && e;
            o || i.data("bs.button", o = new n(this, r)), "toggle" == e ? o.toggle() : e && o.setState(e)
        })
    }
    var n = function(e, i) {
        this.$element = t(e), this.options = t.extend({}, n.DEFAULTS, i), this.isLoading = !1
    };
    n.VERSION = "3.4.1", n.DEFAULTS = {
        loadingText: "loading..."
    }, n.prototype.setState = function(e) {
        var n = "disabled",
            i = this.$element,
            o = i.is("input") ? "val" : "html",
            r = i.data();
        e += "Text", null == r.resetText && i.data("resetText", i[o]()), setTimeout(t.proxy(function() {
            i[o](null == r[e] ? this.options[e] : r[e]), "loadingText" == e ? (this.isLoading = !0, i.addClass(n).attr(n, n).prop(n, !0)) : this.isLoading && (this.isLoading = !1, i.removeClass(n).removeAttr(n).prop(n, !1))
        }, this), 0)
    }, n.prototype.toggle = function() {
        var t = !0,
            e = this.$element.closest('[data-toggle="buttons"]');
        if (e.length) {
            var n = this.$element.find("input");
            "radio" == n.prop("type") ? (n.prop("checked") && (t = !1), e.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == n.prop("type") && (n.prop("checked") !== this.$element.hasClass("active") && (t = !1), this.$element.toggleClass("active")), n.prop("checked", this.$element.hasClass("active")), t && n.trigger("change")
        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
    };
    var i = t.fn.button;
    t.fn.button = e, t.fn.button.Constructor = n, t.fn.button.noConflict = function() {
        return t.fn.button = i, this
    }, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(n) {
        var i = t(n.target).closest(".btn");
        e.call(i, "toggle"), t(n.target).is('input[type="radio"], input[type="checkbox"]') || (n.preventDefault(), i.is("input,button") ? i.trigger("focus") : i.find("input:visible,button:visible").first().trigger("focus"))
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(e) {
        t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type))
    })
}(jQuery),
function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var i = t(this),
                o = i.data("bs.carousel"),
                r = t.extend({}, n.DEFAULTS, i.data(), "object" == typeof e && e),
                s = "string" == typeof e ? e : r.slide;
            o || i.data("bs.carousel", o = new n(this, r)), "number" == typeof e ? o.to(e) : s ? o[s]() : r.interval && o.pause().cycle()
        })
    }
    var n = function(e, n) {
        this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = n, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
    };
    n.VERSION = "3.4.1", n.TRANSITION_DURATION = 600, n.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    }, n.prototype.keydown = function(t) {
        if (!/input|textarea/i.test(t.target.tagName)) {
            switch (t.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            t.preventDefault()
        }
    }, n.prototype.cycle = function(e) {
        return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
    }, n.prototype.getItemIndex = function(t) {
        return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
    }, n.prototype.getItemForDirection = function(t, e) {
        var n = this.getItemIndex(e);
        if (("prev" == t && 0 === n || "next" == t && n == this.$items.length - 1) && !this.options.wrap) return e;
        var i = "prev" == t ? -1 : 1,
            o = (n + i) % this.$items.length;
        return this.$items.eq(o)
    }, n.prototype.to = function(t) {
        var e = this,
            n = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        if (!(t > this.$items.length - 1 || t < 0)) return this.sliding ? this.$element.one("slid.bs.carousel", function() {
            e.to(t)
        }) : n == t ? this.pause().cycle() : this.slide(t > n ? "next" : "prev", this.$items.eq(t))
    }, n.prototype.pause = function(e) {
        return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, n.prototype.next = function() {
        if (!this.sliding) return this.slide("next")
    }, n.prototype.prev = function() {
        if (!this.sliding) return this.slide("prev")
    }, n.prototype.slide = function(e, i) {
        var o = this.$element.find(".item.active"),
            r = i || this.getItemForDirection(e, o),
            s = this.interval,
            a = "next" == e ? "left" : "right",
            l = this;
        if (r.hasClass("active")) return this.sliding = !1;
        var u = r[0],
            c = t.Event("slide.bs.carousel", {
                relatedTarget: u,
                direction: a
            });
        if (this.$element.trigger(c), !c.isDefaultPrevented()) {
            if (this.sliding = !0, s && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var f = t(this.$indicators.children()[this.getItemIndex(r)]);
                f && f.addClass("active")
            }
            var d = t.Event("slid.bs.carousel", {
                relatedTarget: u,
                direction: a
            });
            return t.support.transition && this.$element.hasClass("slide") ? (r.addClass(e), "object" == typeof r && r.length && r[0].offsetWidth, o.addClass(a), r.addClass(a), o.one("bsTransitionEnd", function() {
                r.removeClass([e, a].join(" ")).addClass("active"), o.removeClass(["active", a].join(" ")), l.sliding = !1, setTimeout(function() {
                    l.$element.trigger(d)
                }, 0)
            }).emulateTransitionEnd(n.TRANSITION_DURATION)) : (o.removeClass("active"), r.addClass("active"), this.sliding = !1, this.$element.trigger(d)), s && this.cycle(), this
        }
    };
    var i = t.fn.carousel;
    t.fn.carousel = e, t.fn.carousel.Constructor = n, t.fn.carousel.noConflict = function() {
        return t.fn.carousel = i, this
    };
    var o = function(n) {
        var i = t(this),
            o = i.attr("href");
        o && (o = o.replace(/.*(?=#[^\s]+$)/, ""));
        var r = i.attr("data-target") || o,
            s = t(document).find(r);
        if (s.hasClass("carousel")) {
            var a = t.extend({}, s.data(), i.data()),
                l = i.attr("data-slide-to");
            l && (a.interval = !1), e.call(s, a), l && s.data("bs.carousel").to(l), n.preventDefault()
        }
    };
    t(document).on("click.bs.carousel.data-api", "[data-slide]", o).on("click.bs.carousel.data-api", "[data-slide-to]", o), t(window).on("load", function() {
        t('[data-ride="carousel"]').each(function() {
            var n = t(this);
            e.call(n, n.data())
        })
    })
}(jQuery),
function(t) {
    "use strict";

    function e(e) {
        var n, i = e.attr("data-target") || (n = e.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "");
        return t(document).find(i)
    }

    function n(e) {
        return this.each(function() {
            var n = t(this),
                o = n.data("bs.collapse"),
                r = t.extend({}, i.DEFAULTS, n.data(), "object" == typeof e && e);
            !o && r.toggle && /show|hide/.test(e) && (r.toggle = !1), o || n.data("bs.collapse", o = new i(this, r)), "string" == typeof e && o[e]()
        })
    }
    var i = function(e, n) {
        this.$element = t(e), this.options = t.extend({}, i.DEFAULTS, n), this.$trigger = t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };
    i.VERSION = "3.4.1", i.TRANSITION_DURATION = 350, i.DEFAULTS = {
        toggle: !0
    }, i.prototype.dimension = function() {
        return this.$element.hasClass("width") ? "width" : "height"
    }, i.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var e, o = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(o && o.length && (e = o.data("bs.collapse")) && e.transitioning)) {
                var r = t.Event("show.bs.collapse");
                if (this.$element.trigger(r), !r.isDefaultPrevented()) {
                    o && o.length && (n.call(o, "hide"), e || o.data("bs.collapse", null));
                    var s = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[s](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var a = function() {
                        this.$element.removeClass("collapsing").addClass("collapse in")[s](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!t.support.transition) return a.call(this);
                    var l = t.camelCase(["scroll", s].join("-"));
                    this.$element.one("bsTransitionEnd", t.proxy(a, this)).emulateTransitionEnd(i.TRANSITION_DURATION)[s](this.$element[0][l])
                }
            }
        }
    }, i.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var e = t.Event("hide.bs.collapse");
            if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                var n = this.dimension();
                this.$element[n](this.$element[n]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var o = function() {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                if (!t.support.transition) return o.call(this);
                this.$element[n](0).one("bsTransitionEnd", t.proxy(o, this)).emulateTransitionEnd(i.TRANSITION_DURATION)
            }
        }
    }, i.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, i.prototype.getParent = function() {
        return t(document).find(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function(n, i) {
            var o = t(i);
            this.addAriaAndCollapsedClass(e(o), o)
        }, this)).end()
    }, i.prototype.addAriaAndCollapsedClass = function(t, e) {
        var n = t.hasClass("in");
        t.attr("aria-expanded", n), e.toggleClass("collapsed", !n).attr("aria-expanded", n)
    };
    var o = t.fn.collapse;
    t.fn.collapse = n, t.fn.collapse.Constructor = i, t.fn.collapse.noConflict = function() {
        return t.fn.collapse = o, this
    }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(i) {
        var o = t(this);
        o.attr("data-target") || i.preventDefault();
        var r = e(o),
            s = r.data("bs.collapse"),
            a = s ? "toggle" : o.data();
        n.call(r, a)
    })
}(jQuery),
function(t) {
    "use strict";

    function e(e) {
        var n = e.attr("data-target");
        n || (n = e.attr("href"), n = n && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
        var i = "#" !== n ? t(document).find(n) : null;
        return i && i.length ? i : e.parent()
    }

    function n(n) {
        n && 3 === n.which || (t(o).remove(), t(r).each(function() {
            var i = t(this),
                o = e(i),
                r = {
                    relatedTarget: this
                };
            o.hasClass("open") && (n && "click" == n.type && /input|textarea/i.test(n.target.tagName) && t.contains(o[0], n.target) || (o.trigger(n = t.Event("hide.bs.dropdown", r)), n.isDefaultPrevented() || (i.attr("aria-expanded", "false"), o.removeClass("open").trigger(t.Event("hidden.bs.dropdown", r)))))
        }))
    }

    function i(e) {
        return this.each(function() {
            var n = t(this),
                i = n.data("bs.dropdown");
            i || n.data("bs.dropdown", i = new s(this)), "string" == typeof e && i[e].call(n)
        })
    }
    var o = ".dropdown-backdrop",
        r = '[data-toggle="dropdown"]',
        s = function(e) {
            t(e).on("click.bs.dropdown", this.toggle)
        };
    s.VERSION = "3.4.1", s.prototype.toggle = function(i) {
        var o = t(this);
        if (!o.is(".disabled, :disabled")) {
            var r = e(o),
                s = r.hasClass("open");
            if (n(), !s) {
                "ontouchstart" in document.documentElement && !r.closest(".navbar-nav").length && t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click", n);
                var a = {
                    relatedTarget: this
                };
                if (r.trigger(i = t.Event("show.bs.dropdown", a)), i.isDefaultPrevented()) return;
                o.trigger("focus").attr("aria-expanded", "true"), r.toggleClass("open").trigger(t.Event("shown.bs.dropdown", a))
            }
            return !1
        }
    }, s.prototype.keydown = function(n) {
        if (/(38|40|27|32)/.test(n.which) && !/input|textarea/i.test(n.target.tagName)) {
            var i = t(this);
            if (n.preventDefault(), n.stopPropagation(), !i.is(".disabled, :disabled")) {
                var o = e(i),
                    s = o.hasClass("open");
                if (!s && 27 != n.which || s && 27 == n.which) return 27 == n.which && o.find(r).trigger("focus"), i.trigger("click");
                var a = o.find(".dropdown-menu li:not(.disabled):visible a");
                if (a.length) {
                    var l = a.index(n.target);
                    38 == n.which && l > 0 && l--, 40 == n.which && l < a.length - 1 && l++, ~l || (l = 0), a.eq(l).trigger("focus")
                }
            }
        }
    };
    var a = t.fn.dropdown;
    t.fn.dropdown = i, t.fn.dropdown.Constructor = s, t.fn.dropdown.noConflict = function() {
        return t.fn.dropdown = a, this
    }, t(document).on("click.bs.dropdown.data-api", n).on("click.bs.dropdown.data-api", ".dropdown form", function(t) {
        t.stopPropagation()
    }).on("click.bs.dropdown.data-api", r, s.prototype.toggle).on("keydown.bs.dropdown.data-api", r, s.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", s.prototype.keydown)
}(jQuery),
function(t) {
    "use strict";

    function e(e, i) {
        return this.each(function() {
            var o = t(this),
                r = o.data("bs.modal"),
                s = t.extend({}, n.DEFAULTS, o.data(), "object" == typeof e && e);
            r || o.data("bs.modal", r = new n(this, s)), "string" == typeof e ? r[e](i) : s.show && r.show(i)
        })
    }
    var n = function(e, n) {
        this.options = n, this.$body = t(document.body), this.$element = t(e), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.fixedContent = ".navbar-fixed-top, .navbar-fixed-bottom", this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    n.VERSION = "3.4.1", n.TRANSITION_DURATION = 300, n.BACKDROP_TRANSITION_DURATION = 150, n.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, n.prototype.toggle = function(t) {
        return this.isShown ? this.hide() : this.show(t)
    }, n.prototype.show = function(e) {
        var i = this,
            o = t.Event("show.bs.modal", {
                relatedTarget: e
            });
        this.$element.trigger(o), this.isShown || o.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() {
            i.$element.one("mouseup.dismiss.bs.modal", function(e) {
                t(e.target).is(i.$element) && (i.ignoreBackdropClick = !0)
            })
        }), this.backdrop(function() {
            var o = t.support.transition && i.$element.hasClass("fade");
            i.$element.parent().length || i.$element.appendTo(i.$body), i.$element.show().scrollTop(0), i.adjustDialog(), o && i.$element[0].offsetWidth, i.$element.addClass("in"), i.enforceFocus();
            var r = t.Event("shown.bs.modal", {
                relatedTarget: e
            });
            o ? i.$dialog.one("bsTransitionEnd", function() {
                i.$element.trigger("focus").trigger(r)
            }).emulateTransitionEnd(n.TRANSITION_DURATION) : i.$element.trigger("focus").trigger(r)
        }))
    }, n.prototype.hide = function(e) {
        e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(n.TRANSITION_DURATION) : this.hideModal())
    }, n.prototype.enforceFocus = function() {
        t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function(t) {
            document === t.target || this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
        }, this))
    }, n.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function(t) {
            27 == t.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, n.prototype.resize = function() {
        this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal")
    }, n.prototype.hideModal = function() {
        var t = this;
        this.$element.hide(), this.backdrop(function() {
            t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal")
        })
    }, n.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, n.prototype.backdrop = function(e) {
        var i = this,
            o = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var r = t.support.transition && o;
            if (this.$backdrop = t(document.createElement("div")).addClass("modal-backdrop " + o).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function(t) {
                    if (this.ignoreBackdropClick) return void(this.ignoreBackdropClick = !1);
                    t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide())
                }, this)), r && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
            r ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : e()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var s = function() {
                i.removeBackdrop(), e && e()
            };
            t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", s).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : s()
        } else e && e()
    }, n.prototype.handleUpdate = function() {
        this.adjustDialog()
    }, n.prototype.adjustDialog = function() {
        var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
        })
    }, n.prototype.resetAdjustments = function() {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    }, n.prototype.checkScrollbar = function() {
        var t = window.innerWidth;
        if (!t) {
            var e = document.documentElement.getBoundingClientRect();
            t = e.right - Math.abs(e.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar()
    }, n.prototype.setScrollbar = function() {
        var e = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "";
        var n = this.scrollbarWidth;
        this.bodyIsOverflowing && (this.$body.css("padding-right", e + n), t(this.fixedContent).each(function(e, i) {
            var o = i.style.paddingRight,
                r = t(i).css("padding-right");
            t(i).data("padding-right", o).css("padding-right", parseFloat(r) + n + "px")
        }))
    }, n.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", this.originalBodyPad), t(this.fixedContent).each(function(e, n) {
            var i = t(n).data("padding-right");
            t(n).removeData("padding-right"), n.style.paddingRight = i || ""
        })
    }, n.prototype.measureScrollbar = function() {
        var t = document.createElement("div");
        t.className = "modal-scrollbar-measure", this.$body.append(t);
        var e = t.offsetWidth - t.clientWidth;
        return this.$body[0].removeChild(t), e
    };
    var i = t.fn.modal;
    t.fn.modal = e, t.fn.modal.Constructor = n, t.fn.modal.noConflict = function() {
        return t.fn.modal = i, this
    }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(n) {
        var i = t(this),
            o = i.attr("href"),
            r = i.attr("data-target") || o && o.replace(/.*(?=#[^\s]+$)/, ""),
            s = t(document).find(r),
            a = s.data("bs.modal") ? "toggle" : t.extend({
                remote: !/#/.test(o) && o
            }, s.data(), i.data());
        i.is("a") && n.preventDefault(), s.one("show.bs.modal", function(t) {
            t.isDefaultPrevented() || s.one("hidden.bs.modal", function() {
                i.is(":visible") && i.trigger("focus")
            })
        }), e.call(s, a, this)
    })
}(jQuery),
function(t) {
    "use strict";

    function e(e, n) {
        var i = e.nodeName.toLowerCase();
        if (-1 !== t.inArray(i, n)) return -1 === t.inArray(i, r) || Boolean(e.nodeValue.match(l) || e.nodeValue.match(u));
        for (var o = t(n).filter(function(t, e) {
                return e instanceof RegExp
            }), s = 0, a = o.length; s < a; s++)
            if (i.match(o[s])) return !0;
        return !1
    }

    function n(n, i, o) {
        if (0 === n.length) return n;
        if (o && "function" == typeof o) return o(n);
        if (!document.implementation || !document.implementation.createHTMLDocument) return n;
        var r = document.implementation.createHTMLDocument("sanitization");
        r.body.innerHTML = n;
        for (var s = t.map(i, function(t, e) {
                return e
            }), a = t(r.body).find("*"), l = 0, u = a.length; l < u; l++) {
            var c = a[l],
                f = c.nodeName.toLowerCase();
            if (-1 !== t.inArray(f, s))
                for (var d = t.map(c.attributes, function(t) {
                        return t
                    }), p = [].concat(i["*"] || [], i[f] || []), h = 0, g = d.length; h < g; h++) e(d[h], p) || c.removeAttribute(d[h].nodeName);
            else c.parentNode.removeChild(c)
        }
        return r.body.innerHTML
    }

    function i(e) {
        return this.each(function() {
            var n = t(this),
                i = n.data("bs.tooltip"),
                o = "object" == typeof e && e;
            !i && /destroy|hide/.test(e) || (i || n.data("bs.tooltip", i = new c(this, o)), "string" == typeof e && i[e]())
        })
    }
    var o = ["sanitize", "whiteList", "sanitizeFn"],
        r = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
        s = /^aria-[\w-]*$/i,
        a = {
            "*": ["class", "dir", "id", "lang", "role", s],
            a: ["target", "href", "title", "rel"],
            area: [],
            b: [],
            br: [],
            col: [],
            code: [],
            div: [],
            em: [],
            hr: [],
            h1: [],
            h2: [],
            h3: [],
            h4: [],
            h5: [],
            h6: [],
            i: [],
            img: ["src", "alt", "title", "width", "height"],
            li: [],
            ol: [],
            p: [],
            pre: [],
            s: [],
            small: [],
            span: [],
            sub: [],
            sup: [],
            strong: [],
            u: [],
            ul: []
        },
        l = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
        u = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i,
        c = function(t, e) {
            this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", t, e)
        };
    c.VERSION = "3.4.1", c.TRANSITION_DURATION = 150, c.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        },
        sanitize: !0,
        sanitizeFn: null,
        whiteList: a
    }, c.prototype.init = function(e, n, i) {
        if (this.enabled = !0, this.type = e, this.$element = t(n), this.options = this.getOptions(i), this.$viewport = this.options.viewport && t(document).find(t.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                click: !1,
                hover: !1,
                focus: !1
            }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var o = this.options.trigger.split(" "), r = o.length; r--;) {
            var s = o[r];
            if ("click" == s) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
            else if ("manual" != s) {
                var a = "hover" == s ? "mouseenter" : "focusin",
                    l = "hover" == s ? "mouseleave" : "focusout";
                this.$element.on(a + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = t.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, c.prototype.getDefaults = function() {
        return c.DEFAULTS
    }, c.prototype.getOptions = function(e) {
        var i = this.$element.data();
        for (var r in i) i.hasOwnProperty(r) && -1 !== t.inArray(r, o) && delete i[r];
        return e = t.extend({}, this.getDefaults(), i, e), e.delay && "number" == typeof e.delay && (e.delay = {
            show: e.delay,
            hide: e.delay
        }), e.sanitize && (e.template = n(e.template, e.whiteList, e.sanitizeFn)), e
    }, c.prototype.getDelegateOptions = function() {
        var e = {},
            n = this.getDefaults();
        return this._options && t.each(this._options, function(t, i) {
            n[t] != i && (e[t] = i)
        }), e
    }, c.prototype.enter = function(e) {
        var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n)), e instanceof t.Event && (n.inState["focusin" == e.type ? "focus" : "hover"] = !0), n.tip().hasClass("in") || "in" == n.hoverState ? void(n.hoverState = "in") : (clearTimeout(n.timeout), n.hoverState = "in", n.options.delay && n.options.delay.show ? void(n.timeout = setTimeout(function() {
            "in" == n.hoverState && n.show()
        }, n.options.delay.show)) : n.show())
    }, c.prototype.isInStateTrue = function() {
        for (var t in this.inState)
            if (this.inState[t]) return !0;
        return !1
    }, c.prototype.leave = function(e) {
        var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        if (n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n)), e instanceof t.Event && (n.inState["focusout" == e.type ? "focus" : "hover"] = !1), !n.isInStateTrue()) {
            if (clearTimeout(n.timeout), n.hoverState = "out", !n.options.delay || !n.options.delay.hide) return n.hide();
            n.timeout = setTimeout(function() {
                "out" == n.hoverState && n.hide()
            }, n.options.delay.hide)
        }
    }, c.prototype.show = function() {
        var e = t.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(e);
            var n = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (e.isDefaultPrevented() || !n) return;
            var i = this,
                o = this.tip(),
                r = this.getUID(this.type);
            this.setContent(), o.attr("id", r), this.$element.attr("aria-describedby", r), this.options.animation && o.addClass("fade");
            var s = "function" == typeof this.options.placement ? this.options.placement.call(this, o[0], this.$element[0]) : this.options.placement,
                a = /\s?auto?\s?/i,
                l = a.test(s);
            l && (s = s.replace(a, "") || "top"), o.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(s).data("bs." + this.type, this), this.options.container ? o.appendTo(t(document).find(this.options.container)) : o.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
            var u = this.getPosition(),
                f = o[0].offsetWidth,
                d = o[0].offsetHeight;
            if (l) {
                var p = s,
                    h = this.getPosition(this.$viewport);
                s = "bottom" == s && u.bottom + d > h.bottom ? "top" : "top" == s && u.top - d < h.top ? "bottom" : "right" == s && u.right + f > h.width ? "left" : "left" == s && u.left - f < h.left ? "right" : s, o.removeClass(p).addClass(s)
            }
            var g = this.getCalculatedOffset(s, u, f, d);
            this.applyPlacement(g, s);
            var m = function() {
                var t = i.hoverState;
                i.$element.trigger("shown.bs." + i.type), i.hoverState = null, "out" == t && i.leave(i)
            };
            t.support.transition && this.$tip.hasClass("fade") ? o.one("bsTransitionEnd", m).emulateTransitionEnd(c.TRANSITION_DURATION) : m()
        }
    }, c.prototype.applyPlacement = function(e, n) {
        var i = this.tip(),
            o = i[0].offsetWidth,
            r = i[0].offsetHeight,
            s = parseInt(i.css("margin-top"), 10),
            a = parseInt(i.css("margin-left"), 10);
        isNaN(s) && (s = 0), isNaN(a) && (a = 0), e.top += s, e.left += a, t.offset.setOffset(i[0], t.extend({
            using: function(t) {
                i.css({
                    top: Math.round(t.top),
                    left: Math.round(t.left)
                })
            }
        }, e), 0), i.addClass("in");
        var l = i[0].offsetWidth,
            u = i[0].offsetHeight;
        "top" == n && u != r && (e.top = e.top + r - u);
        var c = this.getViewportAdjustedDelta(n, e, l, u);
        c.left ? e.left += c.left : e.top += c.top;
        var f = /top|bottom/.test(n),
            d = f ? 2 * c.left - o + l : 2 * c.top - r + u,
            p = f ? "offsetWidth" : "offsetHeight";
        i.offset(e), this.replaceArrow(d, i[0][p], f)
    }, c.prototype.replaceArrow = function(t, e, n) {
        this.arrow().css(n ? "left" : "top", 50 * (1 - t / e) + "%").css(n ? "top" : "left", "")
    }, c.prototype.setContent = function() {
        var t = this.tip(),
            e = this.getTitle();
        this.options.html ? (this.options.sanitize && (e = n(e, this.options.whiteList, this.options.sanitizeFn)), t.find(".tooltip-inner").html(e)) : t.find(".tooltip-inner").text(e), t.removeClass("fade in top bottom left right")
    }, c.prototype.hide = function(e) {
        function n() {
            "in" != i.hoverState && o.detach(), i.$element && i.$element.removeAttr("aria-describedby").trigger("hidden.bs." + i.type), e && e()
        }
        var i = this,
            o = t(this.$tip),
            r = t.Event("hide.bs." + this.type);
        if (this.$element.trigger(r), !r.isDefaultPrevented()) return o.removeClass("in"), t.support.transition && o.hasClass("fade") ? o.one("bsTransitionEnd", n).emulateTransitionEnd(c.TRANSITION_DURATION) : n(), this.hoverState = null, this
    }, c.prototype.fixTitle = function() {
        var t = this.$element;
        (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
    }, c.prototype.hasContent = function() {
        return this.getTitle()
    }, c.prototype.getPosition = function(e) {
        e = e || this.$element;
        var n = e[0],
            i = "BODY" == n.tagName,
            o = n.getBoundingClientRect();
        null == o.width && (o = t.extend({}, o, {
            width: o.right - o.left,
            height: o.bottom - o.top
        }));
        var r = window.SVGElement && n instanceof window.SVGElement,
            s = i ? {
                top: 0,
                left: 0
            } : r ? null : e.offset(),
            a = {
                scroll: i ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()
            },
            l = i ? {
                width: t(window).width(),
                height: t(window).height()
            } : null;
        return t.extend({}, o, a, l, s)
    }, c.prototype.getCalculatedOffset = function(t, e, n, i) {
        return "bottom" == t ? {
            top: e.top + e.height,
            left: e.left + e.width / 2 - n / 2
        } : "top" == t ? {
            top: e.top - i,
            left: e.left + e.width / 2 - n / 2
        } : "left" == t ? {
            top: e.top + e.height / 2 - i / 2,
            left: e.left - n
        } : {
            top: e.top + e.height / 2 - i / 2,
            left: e.left + e.width
        }
    }, c.prototype.getViewportAdjustedDelta = function(t, e, n, i) {
        var o = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return o;
        var r = this.options.viewport && this.options.viewport.padding || 0,
            s = this.getPosition(this.$viewport);
        if (/right|left/.test(t)) {
            var a = e.top - r - s.scroll,
                l = e.top + r - s.scroll + i;
            a < s.top ? o.top = s.top - a : l > s.top + s.height && (o.top = s.top + s.height - l)
        } else {
            var u = e.left - r,
                c = e.left + r + n;
            u < s.left ? o.left = s.left - u : c > s.right && (o.left = s.left + s.width - c)
        }
        return o
    }, c.prototype.getTitle = function() {
        var t = this.$element,
            e = this.options;
        return t.attr("data-original-title") || ("function" == typeof e.title ? e.title.call(t[0]) : e.title)
    }, c.prototype.getUID = function(t) {
        do {
            t += ~~(1e6 * Math.random())
        } while (document.getElementById(t));
        return t
    }, c.prototype.tip = function() {
        if (!this.$tip && (this.$tip = t(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    }, c.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, c.prototype.enable = function() {
        this.enabled = !0
    }, c.prototype.disable = function() {
        this.enabled = !1
    }, c.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }, c.prototype.toggle = function(e) {
        var n = this;
        e && ((n = t(e.currentTarget).data("bs." + this.type)) || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n))), e ? (n.inState.click = !n.inState.click, n.isInStateTrue() ? n.enter(n) : n.leave(n)) : n.tip().hasClass("in") ? n.leave(n) : n.enter(n)
    }, c.prototype.destroy = function() {
        var t = this;
        clearTimeout(this.timeout), this.hide(function() {
            t.$element.off("." + t.type).removeData("bs." + t.type), t.$tip && t.$tip.detach(), t.$tip = null, t.$arrow = null, t.$viewport = null, t.$element = null
        })
    }, c.prototype.sanitizeHtml = function(t) {
        return n(t, this.options.whiteList, this.options.sanitizeFn)
    };
    var f = t.fn.tooltip;
    t.fn.tooltip = i, t.fn.tooltip.Constructor = c, t.fn.tooltip.noConflict = function() {
        return t.fn.tooltip = f, this
    }
}(jQuery),
function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var i = t(this),
                o = i.data("bs.popover"),
                r = "object" == typeof e && e;
            !o && /destroy|hide/.test(e) || (o || i.data("bs.popover", o = new n(this, r)), "string" == typeof e && o[e]())
        })
    }
    var n = function(t, e) {
        this.init("popover", t, e)
    };
    if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
    n.VERSION = "3.4.1", n.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), n.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), n.prototype.constructor = n, n.prototype.getDefaults = function() {
        return n.DEFAULTS
    }, n.prototype.setContent = function() {
        var t = this.tip(),
            e = this.getTitle(),
            n = this.getContent();
        if (this.options.html) {
            var i = typeof n;
            this.options.sanitize && (e = this.sanitizeHtml(e), "string" === i && (n = this.sanitizeHtml(n))), t.find(".popover-title").html(e), t.find(".popover-content").children().detach().end()["string" === i ? "html" : "append"](n)
        } else t.find(".popover-title").text(e), t.find(".popover-content").children().detach().end().text(n);
        t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
    }, n.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }, n.prototype.getContent = function() {
        var t = this.$element,
            e = this.options;
        return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
    }, n.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    var i = t.fn.popover;
    t.fn.popover = e, t.fn.popover.Constructor = n, t.fn.popover.noConflict = function() {
        return t.fn.popover = i, this
    }
}(jQuery),
function(t) {
    "use strict";

    function e(n, i) {
        this.$body = t(document.body), this.$scrollElement = t(t(n).is(document.body) ? window : n), this.options = t.extend({}, e.DEFAULTS, i), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", t.proxy(this.process, this)), this.refresh(), this.process()
    }

    function n(n) {
        return this.each(function() {
            var i = t(this),
                o = i.data("bs.scrollspy"),
                r = "object" == typeof n && n;
            o || i.data("bs.scrollspy", o = new e(this, r)), "string" == typeof n && o[n]()
        })
    }
    e.VERSION = "3.4.1", e.DEFAULTS = {
        offset: 10
    }, e.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, e.prototype.refresh = function() {
        var e = this,
            n = "offset",
            i = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), t.isWindow(this.$scrollElement[0]) || (n = "position", i = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function() {
            var e = t(this),
                o = e.data("target") || e.attr("href"),
                r = /^#./.test(o) && t(o);
            return r && r.length && r.is(":visible") && [
                [r[n]().top + i, o]
            ] || null
        }).sort(function(t, e) {
            return t[0] - e[0]
        }).each(function() {
            e.offsets.push(this[0]), e.targets.push(this[1])
        })
    }, e.prototype.process = function() {
        var t, e = this.$scrollElement.scrollTop() + this.options.offset,
            n = this.getScrollHeight(),
            i = this.options.offset + n - this.$scrollElement.height(),
            o = this.offsets,
            r = this.targets,
            s = this.activeTarget;
        if (this.scrollHeight != n && this.refresh(), e >= i) return s != (t = r[r.length - 1]) && this.activate(t);
        if (s && e < o[0]) return this.activeTarget = null, this.clear();
        for (t = o.length; t--;) s != r[t] && e >= o[t] && (void 0 === o[t + 1] || e < o[t + 1]) && this.activate(r[t])
    }, e.prototype.activate = function(e) {
        this.activeTarget = e, this.clear();
        var n = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
            i = t(n).parents("li").addClass("active");
        i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active")), i.trigger("activate.bs.scrollspy")
    }, e.prototype.clear = function() {
        t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var i = t.fn.scrollspy;
    t.fn.scrollspy = n, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function() {
        return t.fn.scrollspy = i, this
    }, t(window).on("load.bs.scrollspy.data-api", function() {
        t('[data-spy="scroll"]').each(function() {
            var e = t(this);
            n.call(e, e.data())
        })
    })
}(jQuery),
function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var i = t(this),
                o = i.data("bs.tab");
            o || i.data("bs.tab", o = new n(this)), "string" == typeof e && o[e]()
        })
    }
    var n = function(e) {
        this.element = t(e)
    };
    n.VERSION = "3.4.1", n.TRANSITION_DURATION = 150, n.prototype.show = function() {
        var e = this.element,
            n = e.closest("ul:not(.dropdown-menu)"),
            i = e.data("target");
        if (i || (i = e.attr("href"), i = i && i.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
            var o = n.find(".active:last a"),
                r = t.Event("hide.bs.tab", {
                    relatedTarget: e[0]
                }),
                s = t.Event("show.bs.tab", {
                    relatedTarget: o[0]
                });
            if (o.trigger(r), e.trigger(s), !s.isDefaultPrevented() && !r.isDefaultPrevented()) {
                var a = t(document).find(i);
                this.activate(e.closest("li"), n), this.activate(a, a.parent(), function() {
                    o.trigger({
                        type: "hidden.bs.tab",
                        relatedTarget: e[0]
                    }), e.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: o[0]
                    })
                })
            }
        }
    }, n.prototype.activate = function(e, i, o) {
        function r() {
            s.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), a ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu").length && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), o && o()
        }
        var s = i.find("> .active"),
            a = o && t.support.transition && (s.length && s.hasClass("fade") || !!i.find("> .fade").length);
        s.length && a ? s.one("bsTransitionEnd", r).emulateTransitionEnd(n.TRANSITION_DURATION) : r(), s.removeClass("in")
    };
    var i = t.fn.tab;
    t.fn.tab = e, t.fn.tab.Constructor = n, t.fn.tab.noConflict = function() {
        return t.fn.tab = i, this
    };
    var o = function(n) {
        n.preventDefault(), e.call(t(this), "show")
    };
    t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', o).on("click.bs.tab.data-api", '[data-toggle="pill"]', o)
}(jQuery),
function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var i = t(this),
                o = i.data("bs.affix"),
                r = "object" == typeof e && e;
            o || i.data("bs.affix", o = new n(this, r)), "string" == typeof e && o[e]()
        })
    }
    var n = function(e, i) {
        this.options = t.extend({}, n.DEFAULTS, i);
        var o = this.options.target === n.DEFAULTS.target ? t(this.options.target) : t(document).find(this.options.target);
        this.$target = o.on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(e), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
    };
    n.VERSION = "3.4.1", n.RESET = "affix affix-top affix-bottom", n.DEFAULTS = {
        offset: 0,
        target: window
    }, n.prototype.getState = function(t, e, n, i) {
        var o = this.$target.scrollTop(),
            r = this.$element.offset(),
            s = this.$target.height();
        if (null != n && "top" == this.affixed) return o < n && "top";
        if ("bottom" == this.affixed) return null != n ? !(o + this.unpin <= r.top) && "bottom" : !(o + s <= t - i) && "bottom";
        var a = null == this.affixed,
            l = a ? o : r.top,
            u = a ? s : e;
        return null != n && o <= n ? "top" : null != i && l + u >= t - i && "bottom"
    }, n.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(n.RESET).addClass("affix");
        var t = this.$target.scrollTop(),
            e = this.$element.offset();
        return this.pinnedOffset = e.top - t
    }, n.prototype.checkPositionWithEventLoop = function() {
        setTimeout(t.proxy(this.checkPosition, this), 1)
    }, n.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var e = this.$element.height(),
                i = this.options.offset,
                o = i.top,
                r = i.bottom,
                s = Math.max(t(document).height(), t(document.body).height());
            "object" != typeof i && (r = o = i), "function" == typeof o && (o = i.top(this.$element)), "function" == typeof r && (r = i.bottom(this.$element));
            var a = this.getState(s, e, o, r);
            if (this.affixed != a) {
                null != this.unpin && this.$element.css("top", "");
                var l = "affix" + (a ? "-" + a : ""),
                    u = t.Event(l + ".bs.affix");
                if (this.$element.trigger(u), u.isDefaultPrevented()) return;
                this.affixed = a, this.unpin = "bottom" == a ? this.getPinnedOffset() : null, this.$element.removeClass(n.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == a && this.$element.offset({
                top: s - e - r
            })
        }
    };
    var i = t.fn.affix;
    t.fn.affix = e, t.fn.affix.Constructor = n, t.fn.affix.noConflict = function() {
        return t.fn.affix = i, this
    }, t(window).on("load", function() {
        t('[data-spy="affix"]').each(function() {
            var n = t(this),
                i = n.data();
            i.offset = i.offset || {}, null != i.offsetBottom && (i.offset.bottom = i.offsetBottom), null != i.offsetTop && (i.offset.top = i.offsetTop), e.call(n, i)
        })
    })
}(jQuery),
function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.retinajs = e()
}(this, function() {
    "use strict";

    function t(t) {
        return Array.prototype.slice.call(t)
    }

    function e(t) {
        var e = parseInt(t, 10);
        return c < e ? c : e
    }

    function n(t) {
        return t.hasAttribute("data-no-resize") || (0 === t.offsetWidth && 0 === t.offsetHeight ? (t.setAttribute("width", t.naturalWidth), t.setAttribute("height", t.naturalHeight)) : (t.setAttribute("width", t.offsetWidth), t.setAttribute("height", t.offsetHeight))), t
    }

    function i(t, e) {
        var i = t.nodeName.toLowerCase(),
            o = document.createElement("img");
        o.addEventListener("load", function() {
            "img" === i ? n(t).setAttribute("src", e) : t.style.backgroundImage = "url(" + e + ")"
        }), o.setAttribute("src", e), t.setAttribute(h, !0)
    }

    function o(t, n) {
        var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
            r = e(o);
        if (n && r > 1) {
            i(t, n.replace(f, "@" + r + "x$1"))
        }
    }

    function r(t, e, n) {
        c > 1 && i(t, n)
    }

    function s(e) {
        return e ? "function" == typeof e.forEach ? e : t(e) : "undefined" != typeof document ? t(document.querySelectorAll(p)) : []
    }

    function a(t) {
        return t.style.backgroundImage.replace(d, "$2")
    }

    function l(t) {
        s(t).forEach(function(t) {
            if (!t.getAttribute(h)) {
                var e = "img" === t.nodeName.toLowerCase(),
                    n = e ? t.getAttribute("src") : a(t),
                    i = t.getAttribute("data-rjs"),
                    s = !isNaN(parseInt(i, 10));
                if (null === i) return;
                s ? o(t, n, i) : r(t, n, i)
            }
        })
    }
    var u = "undefined" != typeof window,
        c = Math.round(u ? window.devicePixelRatio || 1 : 1),
        f = /(\.[A-z]{3,4}\/?(\?.*)?)$/,
        d = /url\(('|")?([^)'"]+)('|")?\)/i,
        p = "[data-rjs]",
        h = "data-rjs-processed";
    return u && (window.addEventListener("load", function() {
        l()
    }), window.retinajs = l), l
});