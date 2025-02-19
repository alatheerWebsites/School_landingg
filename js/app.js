/*!
  * Bootstrap v5.0.0-beta1 (https://getbootstrap.com/)
  * Copyright 2011-2020 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
!function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).bootstrap = e()
}(this, (function() {
    "use strict";
    function t(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(t, n.key, n)
        }
    }
    function e(e, i, n) {
        return i && t(e.prototype, i),
        n && t(e, n),
        e
    }
    function i() {
        return (i = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var i = arguments[e];
                for (var n in i)
                    Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n])
            }
            return t
        }
        ).apply(this, arguments)
    }
    function n(t, e) {
        t.prototype = Object.create(e.prototype),
        t.prototype.constructor = t,
        t.__proto__ = e
    }
    var s, o, r = function(t) {
        do {
            t += Math.floor(1e6 * Math.random())
        } while (document.getElementById(t));
        return t
    }, a = function(t) {
        var e = t.getAttribute("data-bs-target");
        if (!e || "#" === e) {
            var i = t.getAttribute("href");
            e = i && "#" !== i ? i.trim() : null
        }
        return e
    }, l = function(t) {
        var e = a(t);
        return e && document.querySelector(e) ? e : null
    }, c = function(t) {
        var e = a(t);
        return e ? document.querySelector(e) : null
    }, h = function(t) {
        if (!t)
            return 0;
        var e = window.getComputedStyle(t)
          , i = e.transitionDuration
          , n = e.transitionDelay
          , s = Number.parseFloat(i)
          , o = Number.parseFloat(n);
        return s || o ? (i = i.split(",")[0],
        n = n.split(",")[0],
        1e3 * (Number.parseFloat(i) + Number.parseFloat(n))) : 0
    }, u = function(t) {
        t.dispatchEvent(new Event("transitionend"))
    }, d = function(t) {
        return (t[0] || t).nodeType
    }, p = function(t, e) {
        var i = !1
          , n = e + 5;
        t.addEventListener("transitionend", (function e() {
            i = !0,
            t.removeEventListener("transitionend", e)
        }
        )),
        setTimeout((function() {
            i || u(t)
        }
        ), n)
    }, f = function(t, e, i) {
        Object.keys(i).forEach((function(n) {
            var s, o = i[n], r = e[n], a = r && d(r) ? "element" : null == (s = r) ? "" + s : {}.toString.call(s).match(/\s([a-z]+)/i)[1].toLowerCase();
            if (!new RegExp(o).test(a))
                throw new Error(t.toUpperCase() + ': Option "' + n + '" provided type "' + a + '" but expected type "' + o + '".')
        }
        ))
    }, m = function(t) {
        if (!t)
            return !1;
        if (t.style && t.parentNode && t.parentNode.style) {
            var e = getComputedStyle(t)
              , i = getComputedStyle(t.parentNode);
            return "none" !== e.display && "none" !== i.display && "hidden" !== e.visibility
        }
        return !1
    }, g = function() {
        return function() {}
    }, _ = function(t) {
        return t.offsetHeight
    }, v = function() {
        var t = window.jQuery;
        return t && !document.body.hasAttribute("data-bs-no-jquery") ? t : null
    }, y = function(t) {
        "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", t) : t()
    }, b = "rtl" === document.documentElement.dir, w = (s = {},
    o = 1,
    {
        set: function(t, e, i) {
            void 0 === t.bsKey && (t.bsKey = {
                key: e,
                id: o
            },
            o++),
            s[t.bsKey.id] = i
        },
        get: function(t, e) {
            if (!t || void 0 === t.bsKey)
                return null;
            var i = t.bsKey;
            return i.key === e ? s[i.id] : null
        },
        delete: function(t, e) {
            if (void 0 !== t.bsKey) {
                var i = t.bsKey;
                i.key === e && (delete s[i.id],
                delete t.bsKey)
            }
        }
    }), T = function(t, e, i) {
        w.set(t, e, i)
    }, x = function(t, e) {
        return w.get(t, e)
    }, k = /[^.]*(?=\..*)\.|.*/, S = /\..*/, C = /::\d+$/, E = {}, O = 1, P = {
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, A = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);
    function I(t, e) {
        return e && e + "::" + O++ || t.uidEvent || O++
    }
    function D(t) {
        var e = I(t);
        return t.uidEvent = e,
        E[e] = E[e] || {},
        E[e]
    }
    function L(t, e, i) {
        void 0 === i && (i = null);
        for (var n = Object.keys(t), s = 0, o = n.length; s < o; s++) {
            var r = t[n[s]];
            if (r.originalHandler === e && r.delegationSelector === i)
                return r
        }
        return null
    }
    function M(t, e, i) {
        var n = "string" == typeof e
          , s = n ? i : e
          , o = t.replace(S, "")
          , r = P[o];
        return r && (o = r),
        A.has(o) || (o = t),
        [n, s, o]
    }
    function z(t, e, i, n, s) {
        if ("string" == typeof e && t) {
            i || (i = n,
            n = null);
            var o = M(e, i, n)
              , r = o[0]
              , a = o[1]
              , l = o[2]
              , c = D(t)
              , h = c[l] || (c[l] = {})
              , u = L(h, a, r ? i : null);
            if (u)
                u.oneOff = u.oneOff && s;
            else {
                var d = I(a, e.replace(k, ""))
                  , p = r ? function(t, e, i) {
                    return function n(s) {
                        for (var o = t.querySelectorAll(e), r = s.target; r && r !== this; r = r.parentNode)
                            for (var a = o.length; a--; )
                                if (o[a] === r)
                                    return s.delegateTarget = r,
                                    n.oneOff && j.off(t, s.type, i),
                                    i.apply(r, [s]);
                        return null
                    }
                }(t, i, n) : function(t, e) {
                    return function i(n) {
                        return n.delegateTarget = t,
                        i.oneOff && j.off(t, n.type, e),
                        e.apply(t, [n])
                    }
                }(t, i);
                p.delegationSelector = r ? i : null,
                p.originalHandler = a,
                p.oneOff = s,
                p.uidEvent = d,
                h[d] = p,
                t.addEventListener(l, p, r)
            }
        }
    }
    function R(t, e, i, n, s) {
        var o = L(e[i], n, s);
        o && (t.removeEventListener(i, o, Boolean(s)),
        delete e[i][o.uidEvent])
    }
    var j = {
        on: function(t, e, i, n) {
            z(t, e, i, n, !1)
        },
        one: function(t, e, i, n) {
            z(t, e, i, n, !0)
        },
        off: function(t, e, i, n) {
            if ("string" == typeof e && t) {
                var s = M(e, i, n)
                  , o = s[0]
                  , r = s[1]
                  , a = s[2]
                  , l = a !== e
                  , c = D(t)
                  , h = e.startsWith(".");
                if (void 0 === r) {
                    h && Object.keys(c).forEach((function(i) {
                        !function(t, e, i, n) {
                            var s = e[i] || {};
                            Object.keys(s).forEach((function(o) {
                                if (o.includes(n)) {
                                    var r = s[o];
                                    R(t, e, i, r.originalHandler, r.delegationSelector)
                                }
                            }
                            ))
                        }(t, c, i, e.slice(1))
                    }
                    ));
                    var u = c[a] || {};
                    Object.keys(u).forEach((function(i) {
                        var n = i.replace(C, "");
                        if (!l || e.includes(n)) {
                            var s = u[i];
                            R(t, c, a, s.originalHandler, s.delegationSelector)
                        }
                    }
                    ))
                } else {
                    if (!c || !c[a])
                        return;
                    R(t, c, a, r, o ? i : null)
                }
            }
        },
        trigger: function(t, e, i) {
            if ("string" != typeof e || !t)
                return null;
            var n, s = v(), o = e.replace(S, ""), r = e !== o, a = A.has(o), l = !0, c = !0, h = !1, u = null;
            return r && s && (n = s.Event(e, i),
            s(t).trigger(n),
            l = !n.isPropagationStopped(),
            c = !n.isImmediatePropagationStopped(),
            h = n.isDefaultPrevented()),
            a ? (u = document.createEvent("HTMLEvents")).initEvent(o, l, !0) : u = new CustomEvent(e,{
                bubbles: l,
                cancelable: !0
            }),
            void 0 !== i && Object.keys(i).forEach((function(t) {
                Object.defineProperty(u, t, {
                    get: function() {
                        return i[t]
                    }
                })
            }
            )),
            h && u.preventDefault(),
            c && t.dispatchEvent(u),
            u.defaultPrevented && void 0 !== n && n.preventDefault(),
            u
        }
    }
      , N = function() {
        function t(t) {
            t && (this._element = t,
            T(t, this.constructor.DATA_KEY, this))
        }
        return t.prototype.dispose = function() {
            (function(t, e) {
                w.delete(t, e)
            }
            )(this._element, this.constructor.DATA_KEY),
            this._element = null
        }
        ,
        t.getInstance = function(t) {
            return x(t, this.DATA_KEY)
        }
        ,
        e(t, null, [{
            key: "VERSION",
            get: function() {
                return "5.0.0-beta1"
            }
        }]),
        t
    }()
      , $ = "alert"
      , F = function(t) {
        function i() {
            return t.apply(this, arguments) || this
        }
        n(i, t);
        var s = i.prototype;
        return s.close = function(t) {
            var e = t ? this._getRootElement(t) : this._element
              , i = this._triggerCloseEvent(e);
            null === i || i.defaultPrevented || this._removeElement(e)
        }
        ,
        s._getRootElement = function(t) {
            return c(t) || t.closest(".alert")
        }
        ,
        s._triggerCloseEvent = function(t) {
            return j.trigger(t, "close.bs.alert")
        }
        ,
        s._removeElement = function(t) {
            var e = this;
            if (t.classList.remove("show"),
            t.classList.contains("fade")) {
                var i = h(t);
                j.one(t, "transitionend", (function() {
                    return e._destroyElement(t)
                }
                )),
                p(t, i)
            } else
                this._destroyElement(t)
        }
        ,
        s._destroyElement = function(t) {
            t.parentNode && t.parentNode.removeChild(t),
            j.trigger(t, "closed.bs.alert")
        }
        ,
        i.jQueryInterface = function(t) {
            return this.each((function() {
                var e = x(this, "bs.alert");
                e || (e = new i(this)),
                "close" === t && e[t](this)
            }
            ))
        }
        ,
        i.handleDismiss = function(t) {
            return function(e) {
                e && e.preventDefault(),
                t.close(this)
            }
        }
        ,
        e(i, null, [{
            key: "DATA_KEY",
            get: function() {
                return "bs.alert"
            }
        }]),
        i
    }(N);
    j.on(document, "click.bs.alert.data-api", '[data-bs-dismiss="alert"]', F.handleDismiss(new F)),
    y((function() {
        var t = v();
        if (t) {
            var e = t.fn[$];
            t.fn[$] = F.jQueryInterface,
            t.fn[$].Constructor = F,
            t.fn[$].noConflict = function() {
                return t.fn[$] = e,
                F.jQueryInterface
            }
        }
    }
    ));
    var W = function(t) {
        function i() {
            return t.apply(this, arguments) || this
        }
        return n(i, t),
        i.prototype.toggle = function() {
            this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"))
        }
        ,
        i.jQueryInterface = function(t) {
            return this.each((function() {
                var e = x(this, "bs.button");
                e || (e = new i(this)),
                "toggle" === t && e[t]()
            }
            ))
        }
        ,
        e(i, null, [{
            key: "DATA_KEY",
            get: function() {
                return "bs.button"
            }
        }]),
        i
    }(N);
    function H(t) {
        return "true" === t || "false" !== t && (t === Number(t).toString() ? Number(t) : "" === t || "null" === t ? null : t)
    }
    function B(t) {
        return t.replace(/[A-Z]/g, (function(t) {
            return "-" + t.toLowerCase()
        }
        ))
    }
    j.on(document, "click.bs.button.data-api", '[data-bs-toggle="button"]', (function(t) {
        t.preventDefault();
        var e = t.target.closest('[data-bs-toggle="button"]')
          , i = x(e, "bs.button");
        i || (i = new W(e)),
        i.toggle()
    }
    )),
    y((function() {
        var t = v();
        if (t) {
            var e = t.fn.button;
            t.fn.button = W.jQueryInterface,
            t.fn.button.Constructor = W,
            t.fn.button.noConflict = function() {
                return t.fn.button = e,
                W.jQueryInterface
            }
        }
    }
    ));
    var q = {
        setDataAttribute: function(t, e, i) {
            t.setAttribute("data-bs-" + B(e), i)
        },
        removeDataAttribute: function(t, e) {
            t.removeAttribute("data-bs-" + B(e))
        },
        getDataAttributes: function(t) {
            if (!t)
                return {};
            var e = {};
            return Object.keys(t.dataset).filter((function(t) {
                return t.startsWith("bs")
            }
            )).forEach((function(i) {
                var n = i.replace(/^bs/, "");
                n = n.charAt(0).toLowerCase() + n.slice(1, n.length),
                e[n] = H(t.dataset[i])
            }
            )),
            e
        },
        getDataAttribute: function(t, e) {
            return H(t.getAttribute("data-bs-" + B(e)))
        },
        offset: function(t) {
            var e = t.getBoundingClientRect();
            return {
                top: e.top + document.body.scrollTop,
                left: e.left + document.body.scrollLeft
            }
        },
        position: function(t) {
            return {
                top: t.offsetTop,
                left: t.offsetLeft
            }
        }
    }
      , Y = {
        matches: function(t, e) {
            return t.matches(e)
        },
        find: function(t, e) {
            var i;
            return void 0 === e && (e = document.documentElement),
            (i = []).concat.apply(i, Element.prototype.querySelectorAll.call(e, t))
        },
        findOne: function(t, e) {
            return void 0 === e && (e = document.documentElement),
            Element.prototype.querySelector.call(e, t)
        },
        children: function(t, e) {
            var i;
            return (i = []).concat.apply(i, t.children).filter((function(t) {
                return t.matches(e)
            }
            ))
        },
        parents: function(t, e) {
            for (var i = [], n = t.parentNode; n && n.nodeType === Node.ELEMENT_NODE && 3 !== n.nodeType; )
                this.matches(n, e) && i.push(n),
                n = n.parentNode;
            return i
        },
        prev: function(t, e) {
            for (var i = t.previousElementSibling; i; ) {
                if (i.matches(e))
                    return [i];
                i = i.previousElementSibling
            }
            return []
        },
        next: function(t, e) {
            for (var i = t.nextElementSibling; i; ) {
                if (this.matches(i, e))
                    return [i];
                i = i.nextElementSibling
            }
            return []
        }
    }
      , X = "carousel"
      , U = {
        interval: 5e3,
        keyboard: !0,
        slide: !1,
        pause: "hover",
        wrap: !0,
        touch: !0
    }
      , V = {
        interval: "(number|boolean)",
        keyboard: "boolean",
        slide: "(boolean|string)",
        pause: "(string|boolean)",
        wrap: "boolean",
        touch: "boolean"
    }
      , Q = {
        TOUCH: "touch",
        PEN: "pen"
    }
      , K = function(t) {
        function s(e, i) {
            var n;
            return (n = t.call(this, e) || this)._items = null,
            n._interval = null,
            n._activeElement = null,
            n._isPaused = !1,
            n._isSliding = !1,
            n.touchTimeout = null,
            n.touchStartX = 0,
            n.touchDeltaX = 0,
            n._config = n._getConfig(i),
            n._indicatorsElement = Y.findOne(".carousel-indicators", n._element),
            n._touchSupported = "ontouchstart"in document.documentElement || navigator.maxTouchPoints > 0,
            n._pointerEvent = Boolean(window.PointerEvent),
            n._addEventListeners(),
            n
        }
        n(s, t);
        var o = s.prototype;
        return o.next = function() {
            this._isSliding || this._slide("next")
        }
        ,
        o.nextWhenVisible = function() {
            !document.hidden && m(this._element) && this.next()
        }
        ,
        o.prev = function() {
            this._isSliding || this._slide("prev")
        }
        ,
        o.pause = function(t) {
            t || (this._isPaused = !0),
            Y.findOne(".carousel-item-next, .carousel-item-prev", this._element) && (u(this._element),
            this.cycle(!0)),
            clearInterval(this._interval),
            this._interval = null
        }
        ,
        o.cycle = function(t) {
            t || (this._isPaused = !1),
            this._interval && (clearInterval(this._interval),
            this._interval = null),
            this._config && this._config.interval && !this._isPaused && (this._updateInterval(),
            this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
        }
        ,
        o.to = function(t) {
            var e = this;
            this._activeElement = Y.findOne(".active.carousel-item", this._element);
            var i = this._getItemIndex(this._activeElement);
            if (!(t > this._items.length - 1 || t < 0))
                if (this._isSliding)
                    j.one(this._element, "slid.bs.carousel", (function() {
                        return e.to(t)
                    }
                    ));
                else {
                    if (i === t)
                        return this.pause(),
                        void this.cycle();
                    var n = t > i ? "next" : "prev";
                    this._slide(n, this._items[t])
                }
        }
        ,
        o.dispose = function() {
            t.prototype.dispose.call(this),
            j.off(this._element, ".bs.carousel"),
            this._items = null,
            this._config = null,
            this._interval = null,
            this._isPaused = null,
            this._isSliding = null,
            this._activeElement = null,
            this._indicatorsElement = null
        }
        ,
        o._getConfig = function(t) {
            return t = i({}, U, t),
            f(X, t, V),
            t
        }
        ,
        o._handleSwipe = function() {
            var t = Math.abs(this.touchDeltaX);
            if (!(t <= 40)) {
                var e = t / this.touchDeltaX;
                this.touchDeltaX = 0,
                e > 0 && this.prev(),
                e < 0 && this.next()
            }
        }
        ,
        o._addEventListeners = function() {
            var t = this;
            this._config.keyboard && j.on(this._element, "keydown.bs.carousel", (function(e) {
                return t._keydown(e)
            }
            )),
            "hover" === this._config.pause && (j.on(this._element, "mouseenter.bs.carousel", (function(e) {
                return t.pause(e)
            }
            )),
            j.on(this._element, "mouseleave.bs.carousel", (function(e) {
                return t.cycle(e)
            }
            ))),
            this._config.touch && this._touchSupported && this._addTouchEventListeners()
        }
        ,
        o._addTouchEventListeners = function() {
            var t = this
              , e = function(e) {
                t._pointerEvent && Q[e.pointerType.toUpperCase()] ? t.touchStartX = e.clientX : t._pointerEvent || (t.touchStartX = e.touches[0].clientX)
            }
              , i = function(e) {
                t._pointerEvent && Q[e.pointerType.toUpperCase()] && (t.touchDeltaX = e.clientX - t.touchStartX),
                t._handleSwipe(),
                "hover" === t._config.pause && (t.pause(),
                t.touchTimeout && clearTimeout(t.touchTimeout),
                t.touchTimeout = setTimeout((function(e) {
                    return t.cycle(e)
                }
                ), 500 + t._config.interval))
            };
            Y.find(".carousel-item img", this._element).forEach((function(t) {
                j.on(t, "dragstart.bs.carousel", (function(t) {
                    return t.preventDefault()
                }
                ))
            }
            )),
            this._pointerEvent ? (j.on(this._element, "pointerdown.bs.carousel", (function(t) {
                return e(t)
            }
            )),
            j.on(this._element, "pointerup.bs.carousel", (function(t) {
                return i(t)
            }
            )),
            this._element.classList.add("pointer-event")) : (j.on(this._element, "touchstart.bs.carousel", (function(t) {
                return e(t)
            }
            )),
            j.on(this._element, "touchmove.bs.carousel", (function(e) {
                return function(e) {
                    e.touches && e.touches.length > 1 ? t.touchDeltaX = 0 : t.touchDeltaX = e.touches[0].clientX - t.touchStartX
                }(e)
            }
            )),
            j.on(this._element, "touchend.bs.carousel", (function(t) {
                return i(t)
            }
            )))
        }
        ,
        o._keydown = function(t) {
            if (!/input|textarea/i.test(t.target.tagName))
                switch (t.key) {
                case "ArrowLeft":
                    t.preventDefault(),
                    this.prev();
                    break;
                case "ArrowRight":
                    t.preventDefault(),
                    this.next()
                }
        }
        ,
        o._getItemIndex = function(t) {
            return this._items = t && t.parentNode ? Y.find(".carousel-item", t.parentNode) : [],
            this._items.indexOf(t)
        }
        ,
        o._getItemByDirection = function(t, e) {
            var i = "next" === t
              , n = "prev" === t
              , s = this._getItemIndex(e)
              , o = this._items.length - 1;
            if ((n && 0 === s || i && s === o) && !this._config.wrap)
                return e;
            var r = (s + ("prev" === t ? -1 : 1)) % this._items.length;
            return -1 === r ? this._items[this._items.length - 1] : this._items[r]
        }
        ,
        o._triggerSlideEvent = function(t, e) {
            var i = this._getItemIndex(t)
              , n = this._getItemIndex(Y.findOne(".active.carousel-item", this._element));
            return j.trigger(this._element, "slide.bs.carousel", {
                relatedTarget: t,
                direction: e,
                from: n,
                to: i
            })
        }
        ,
        o._setActiveIndicatorElement = function(t) {
            if (this._indicatorsElement) {
                for (var e = Y.find(".active", this._indicatorsElement), i = 0; i < e.length; i++)
                    e[i].classList.remove("active");
                var n = this._indicatorsElement.children[this._getItemIndex(t)];
                n && n.classList.add("active")
            }
        }
        ,
        o._updateInterval = function() {
            var t = this._activeElement || Y.findOne(".active.carousel-item", this._element);
            if (t) {
                var e = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
                e ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval,
                this._config.interval = e) : this._config.interval = this._config.defaultInterval || this._config.interval
            }
        }
        ,
        o._slide = function(t, e) {
            var i, n, s, o = this, r = Y.findOne(".active.carousel-item", this._element), a = this._getItemIndex(r), l = e || r && this._getItemByDirection(t, r), c = this._getItemIndex(l), u = Boolean(this._interval);
            if ("next" === t ? (i = "carousel-item-start",
            n = "carousel-item-next",
            s = "left") : (i = "carousel-item-end",
            n = "carousel-item-prev",
            s = "right"),
            l && l.classList.contains("active"))
                this._isSliding = !1;
            else if (!this._triggerSlideEvent(l, s).defaultPrevented && r && l) {
                if (this._isSliding = !0,
                u && this.pause(),
                this._setActiveIndicatorElement(l),
                this._activeElement = l,
                this._element.classList.contains("slide")) {
                    l.classList.add(n),
                    _(l),
                    r.classList.add(i),
                    l.classList.add(i);
                    var d = h(r);
                    j.one(r, "transitionend", (function() {
                        l.classList.remove(i, n),
                        l.classList.add("active"),
                        r.classList.remove("active", n, i),
                        o._isSliding = !1,
                        setTimeout((function() {
                            j.trigger(o._element, "slid.bs.carousel", {
                                relatedTarget: l,
                                direction: s,
                                from: a,
                                to: c
                            })
                        }
                        ), 0)
                    }
                    )),
                    p(r, d)
                } else
                    r.classList.remove("active"),
                    l.classList.add("active"),
                    this._isSliding = !1,
                    j.trigger(this._element, "slid.bs.carousel", {
                        relatedTarget: l,
                        direction: s,
                        from: a,
                        to: c
                    });
                u && this.cycle()
            }
        }
        ,
        s.carouselInterface = function(t, e) {
            var n = x(t, "bs.carousel")
              , o = i({}, U, q.getDataAttributes(t));
            "object" == typeof e && (o = i({}, o, e));
            var r = "string" == typeof e ? e : o.slide;
            if (n || (n = new s(t,o)),
            "number" == typeof e)
                n.to(e);
            else if ("string" == typeof r) {
                if (void 0 === n[r])
                    throw new TypeError('No method named "' + r + '"');
                n[r]()
            } else
                o.interval && o.ride && (n.pause(),
                n.cycle())
        }
        ,
        s.jQueryInterface = function(t) {
            return this.each((function() {
                s.carouselInterface(this, t)
            }
            ))
        }
        ,
        s.dataApiClickHandler = function(t) {
            var e = c(this);
            if (e && e.classList.contains("carousel")) {
                var n = i({}, q.getDataAttributes(e), q.getDataAttributes(this))
                  , o = this.getAttribute("data-bs-slide-to");
                o && (n.interval = !1),
                s.carouselInterface(e, n),
                o && x(e, "bs.carousel").to(o),
                t.preventDefault()
            }
        }
        ,
        e(s, null, [{
            key: "Default",
            get: function() {
                return U
            }
        }, {
            key: "DATA_KEY",
            get: function() {
                return "bs.carousel"
            }
        }]),
        s
    }(N);
    j.on(document, "click.bs.carousel.data-api", "[data-bs-slide], [data-bs-slide-to]", K.dataApiClickHandler),
    j.on(window, "load.bs.carousel.data-api", (function() {
        for (var t = Y.find('[data-bs-ride="carousel"]'), e = 0, i = t.length; e < i; e++)
            K.carouselInterface(t[e], x(t[e], "bs.carousel"))
    }
    )),
    y((function() {
        var t = v();
        if (t) {
            var e = t.fn[X];
            t.fn[X] = K.jQueryInterface,
            t.fn[X].Constructor = K,
            t.fn[X].noConflict = function() {
                return t.fn[X] = e,
                K.jQueryInterface
            }
        }
    }
    ));
    var G = "collapse"
      , Z = {
        toggle: !0,
        parent: ""
    }
      , J = {
        toggle: "boolean",
        parent: "(string|element)"
    }
      , tt = function(t) {
        function s(e, i) {
            var n;
            (n = t.call(this, e) || this)._isTransitioning = !1,
            n._config = n._getConfig(i),
            n._triggerArray = Y.find('[data-bs-toggle="collapse"][href="#' + e.id + '"],[data-bs-toggle="collapse"][data-bs-target="#' + e.id + '"]');
            for (var s = Y.find('[data-bs-toggle="collapse"]'), o = 0, r = s.length; o < r; o++) {
                var a = s[o]
                  , c = l(a)
                  , h = Y.find(c).filter((function(t) {
                    return t === e
                }
                ));
                null !== c && h.length && (n._selector = c,
                n._triggerArray.push(a))
            }
            return n._parent = n._config.parent ? n._getParent() : null,
            n._config.parent || n._addAriaAndCollapsedClass(n._element, n._triggerArray),
            n._config.toggle && n.toggle(),
            n
        }
        n(s, t);
        var o = s.prototype;
        return o.toggle = function() {
            this._element.classList.contains("show") ? this.hide() : this.show()
        }
        ,
        o.show = function() {
            var t = this;
            if (!this._isTransitioning && !this._element.classList.contains("show")) {
                var e, i;
                this._parent && 0 === (e = Y.find(".show, .collapsing", this._parent).filter((function(e) {
                    return "string" == typeof t._config.parent ? e.getAttribute("data-bs-parent") === t._config.parent : e.classList.contains("collapse")
                }
                ))).length && (e = null);
                var n = Y.findOne(this._selector);
                if (e) {
                    var o = e.find((function(t) {
                        return n !== t
                    }
                    ));
                    if ((i = o ? x(o, "bs.collapse") : null) && i._isTransitioning)
                        return
                }
                if (!j.trigger(this._element, "show.bs.collapse").defaultPrevented) {
                    e && e.forEach((function(t) {
                        n !== t && s.collapseInterface(t, "hide"),
                        i || T(t, "bs.collapse", null)
                    }
                    ));
                    var r = this._getDimension();
                    this._element.classList.remove("collapse"),
                    this._element.classList.add("collapsing"),
                    this._element.style[r] = 0,
                    this._triggerArray.length && this._triggerArray.forEach((function(t) {
                        t.classList.remove("collapsed"),
                        t.setAttribute("aria-expanded", !0)
                    }
                    )),
                    this.setTransitioning(!0);
                    var a = "scroll" + (r[0].toUpperCase() + r.slice(1))
                      , l = h(this._element);
                    j.one(this._element, "transitionend", (function() {
                        t._element.classList.remove("collapsing"),
                        t._element.classList.add("collapse", "show"),
                        t._element.style[r] = "",
                        t.setTransitioning(!1),
                        j.trigger(t._element, "shown.bs.collapse")
                    }
                    )),
                    p(this._element, l),
                    this._element.style[r] = this._element[a] + "px"
                }
            }
        }
        ,
        o.hide = function() {
            var t = this;
            if (!this._isTransitioning && this._element.classList.contains("show") && !j.trigger(this._element, "hide.bs.collapse").defaultPrevented) {
                var e = this._getDimension();
                this._element.style[e] = this._element.getBoundingClientRect()[e] + "px",
                _(this._element),
                this._element.classList.add("collapsing"),
                this._element.classList.remove("collapse", "show");
                var i = this._triggerArray.length;
                if (i > 0)
                    for (var n = 0; n < i; n++) {
                        var s = this._triggerArray[n]
                          , o = c(s);
                        o && !o.classList.contains("show") && (s.classList.add("collapsed"),
                        s.setAttribute("aria-expanded", !1))
                    }
                this.setTransitioning(!0),
                this._element.style[e] = "";
                var r = h(this._element);
                j.one(this._element, "transitionend", (function() {
                    t.setTransitioning(!1),
                    t._element.classList.remove("collapsing"),
                    t._element.classList.add("collapse"),
                    j.trigger(t._element, "hidden.bs.collapse")
                }
                )),
                p(this._element, r)
            }
        }
        ,
        o.setTransitioning = function(t) {
            this._isTransitioning = t
        }
        ,
        o.dispose = function() {
            t.prototype.dispose.call(this),
            this._config = null,
            this._parent = null,
            this._triggerArray = null,
            this._isTransitioning = null
        }
        ,
        o._getConfig = function(t) {
            return (t = i({}, Z, t)).toggle = Boolean(t.toggle),
            f(G, t, J),
            t
        }
        ,
        o._getDimension = function() {
            return this._element.classList.contains("width") ? "width" : "height"
        }
        ,
        o._getParent = function() {
            var t = this
              , e = this._config.parent;
            d(e) ? void 0 === e.jquery && void 0 === e[0] || (e = e[0]) : e = Y.findOne(e);
            var i = '[data-bs-toggle="collapse"][data-bs-parent="' + e + '"]';
            return Y.find(i, e).forEach((function(e) {
                var i = c(e);
                t._addAriaAndCollapsedClass(i, [e])
            }
            )),
            e
        }
        ,
        o._addAriaAndCollapsedClass = function(t, e) {
            if (t && e.length) {
                var i = t.classList.contains("show");
                e.forEach((function(t) {
                    i ? t.classList.remove("collapsed") : t.classList.add("collapsed"),
                    t.setAttribute("aria-expanded", i)
                }
                ))
            }
        }
        ,
        s.collapseInterface = function(t, e) {
            var n = x(t, "bs.collapse")
              , o = i({}, Z, q.getDataAttributes(t), "object" == typeof e && e ? e : {});
            if (!n && o.toggle && "string" == typeof e && /show|hide/.test(e) && (o.toggle = !1),
            n || (n = new s(t,o)),
            "string" == typeof e) {
                if (void 0 === n[e])
                    throw new TypeError('No method named "' + e + '"');
                n[e]()
            }
        }
        ,
        s.jQueryInterface = function(t) {
            return this.each((function() {
                s.collapseInterface(this, t)
            }
            ))
        }
        ,
        e(s, null, [{
            key: "Default",
            get: function() {
                return Z
            }
        }, {
            key: "DATA_KEY",
            get: function() {
                return "bs.collapse"
            }
        }]),
        s
    }(N);
    j.on(document, "click.bs.collapse.data-api", '[data-bs-toggle="collapse"]', (function(t) {
        "A" === t.target.tagName && t.preventDefault();
        var e = q.getDataAttributes(this)
          , i = l(this);
        Y.find(i).forEach((function(t) {
            var i, n = x(t, "bs.collapse");
            n ? (null === n._parent && "string" == typeof e.parent && (n._config.parent = e.parent,
            n._parent = n._getParent()),
            i = "toggle") : i = e,
            tt.collapseInterface(t, i)
        }
        ))
    }
    )),
    y((function() {
        var t = v();
        if (t) {
            var e = t.fn[G];
            t.fn[G] = tt.jQueryInterface,
            t.fn[G].Constructor = tt,
            t.fn[G].noConflict = function() {
                return t.fn[G] = e,
                tt.jQueryInterface
            }
        }
    }
    ));
    var et = "top"
      , it = "bottom"
      , nt = "right"
      , st = "left"
      , ot = [et, it, nt, st]
      , rt = ot.reduce((function(t, e) {
        return t.concat([e + "-start", e + "-end"])
    }
    ), [])
      , at = [].concat(ot, ["auto"]).reduce((function(t, e) {
        return t.concat([e, e + "-start", e + "-end"])
    }
    ), [])
      , lt = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];
    function ct(t) {
        return t ? (t.nodeName || "").toLowerCase() : null
    }
    function ht(t) {
        if ("[object Window]" !== t.toString()) {
            var e = t.ownerDocument;
            return e && e.defaultView || window
        }
        return t
    }
    function ut(t) {
        return t instanceof ht(t).Element || t instanceof Element
    }
    function dt(t) {
        return t instanceof ht(t).HTMLElement || t instanceof HTMLElement
    }
    var pt = {
        name: "applyStyles",
        enabled: !0,
        phase: "write",
        fn: function(t) {
            var e = t.state;
            Object.keys(e.elements).forEach((function(t) {
                var i = e.styles[t] || {}
                  , n = e.attributes[t] || {}
                  , s = e.elements[t];
                dt(s) && ct(s) && (Object.assign(s.style, i),
                Object.keys(n).forEach((function(t) {
                    var e = n[t];
                    !1 === e ? s.removeAttribute(t) : s.setAttribute(t, !0 === e ? "" : e)
                }
                )))
            }
            ))
        },
        effect: function(t) {
            var e = t.state
              , i = {
                popper: {
                    position: e.options.strategy,
                    left: "0",
                    top: "0",
                    margin: "0"
                },
                arrow: {
                    position: "absolute"
                },
                reference: {}
            };
            return Object.assign(e.elements.popper.style, i.popper),
            e.elements.arrow && Object.assign(e.elements.arrow.style, i.arrow),
            function() {
                Object.keys(e.elements).forEach((function(t) {
                    var n = e.elements[t]
                      , s = e.attributes[t] || {}
                      , o = Object.keys(e.styles.hasOwnProperty(t) ? e.styles[t] : i[t]).reduce((function(t, e) {
                        return t[e] = "",
                        t
                    }
                    ), {});
                    dt(n) && ct(n) && (Object.assign(n.style, o),
                    Object.keys(s).forEach((function(t) {
                        n.removeAttribute(t)
                    }
                    )))
                }
                ))
            }
        },
        requires: ["computeStyles"]
    };
    function ft(t) {
        return t.split("-")[0]
    }
    function mt(t) {
        return {
            x: t.offsetLeft,
            y: t.offsetTop,
            width: t.offsetWidth,
            height: t.offsetHeight
        }
    }
    function gt(t, e) {
        var i, n = e.getRootNode && e.getRootNode();
        if (t.contains(e))
            return !0;
        if (n && ((i = n)instanceof ht(i).ShadowRoot || i instanceof ShadowRoot)) {
            var s = e;
            do {
                if (s && t.isSameNode(s))
                    return !0;
                s = s.parentNode || s.host
            } while (s)
        }
        return !1
    }
    function _t(t) {
        return ht(t).getComputedStyle(t)
    }
    function vt(t) {
        return ["table", "td", "th"].indexOf(ct(t)) >= 0
    }
    function yt(t) {
        return ((ut(t) ? t.ownerDocument : t.document) || window.document).documentElement
    }
    function bt(t) {
        return "html" === ct(t) ? t : t.assignedSlot || t.parentNode || t.host || yt(t)
    }
    function wt(t) {
        if (!dt(t) || "fixed" === _t(t).position)
            return null;
        var e = t.offsetParent;
        if (e) {
            var i = yt(e);
            if ("body" === ct(e) && "static" === _t(e).position && "static" !== _t(i).position)
                return i
        }
        return e
    }
    function Tt(t) {
        for (var e = ht(t), i = wt(t); i && vt(i) && "static" === _t(i).position; )
            i = wt(i);
        return i && "body" === ct(i) && "static" === _t(i).position ? e : i || function(t) {
            for (var e = bt(t); dt(e) && ["html", "body"].indexOf(ct(e)) < 0; ) {
                var i = _t(e);
                if ("none" !== i.transform || "none" !== i.perspective || i.willChange && "auto" !== i.willChange)
                    return e;
                e = e.parentNode
            }
            return null
        }(t) || e
    }
    function xt(t) {
        return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y"
    }
    function kt(t, e, i) {
        return Math.max(t, Math.min(e, i))
    }
    function St(t) {
        return Object.assign(Object.assign({}, {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        }), t)
    }
    function Ct(t, e) {
        return e.reduce((function(e, i) {
            return e[i] = t,
            e
        }
        ), {})
    }
    var Et = {
        name: "arrow",
        enabled: !0,
        phase: "main",
        fn: function(t) {
            var e, i = t.state, n = t.name, s = i.elements.arrow, o = i.modifiersData.popperOffsets, r = ft(i.placement), a = xt(r), l = [st, nt].indexOf(r) >= 0 ? "height" : "width";
            if (s && o) {
                var c = i.modifiersData[n + "#persistent"].padding
                  , h = mt(s)
                  , u = "y" === a ? et : st
                  , d = "y" === a ? it : nt
                  , p = i.rects.reference[l] + i.rects.reference[a] - o[a] - i.rects.popper[l]
                  , f = o[a] - i.rects.reference[a]
                  , m = Tt(s)
                  , g = m ? "y" === a ? m.clientHeight || 0 : m.clientWidth || 0 : 0
                  , _ = p / 2 - f / 2
                  , v = c[u]
                  , y = g - h[l] - c[d]
                  , b = g / 2 - h[l] / 2 + _
                  , w = kt(v, b, y)
                  , T = a;
                i.modifiersData[n] = ((e = {})[T] = w,
                e.centerOffset = w - b,
                e)
            }
        },
        effect: function(t) {
            var e = t.state
              , i = t.options
              , n = t.name
              , s = i.element
              , o = void 0 === s ? "[data-popper-arrow]" : s
              , r = i.padding
              , a = void 0 === r ? 0 : r;
            null != o && ("string" != typeof o || (o = e.elements.popper.querySelector(o))) && gt(e.elements.popper, o) && (e.elements.arrow = o,
            e.modifiersData[n + "#persistent"] = {
                padding: St("number" != typeof a ? a : Ct(a, ot))
            })
        },
        requires: ["popperOffsets"],
        requiresIfExists: ["preventOverflow"]
    }
      , Ot = {
        top: "auto",
        right: "auto",
        bottom: "auto",
        left: "auto"
    };
    function Pt(t) {
        var e, i = t.popper, n = t.popperRect, s = t.placement, o = t.offsets, r = t.position, a = t.gpuAcceleration, l = t.adaptive, c = function(t) {
            var e = t.x
              , i = t.y
              , n = window.devicePixelRatio || 1;
            return {
                x: Math.round(e * n) / n || 0,
                y: Math.round(i * n) / n || 0
            }
        }(o), h = c.x, u = c.y, d = o.hasOwnProperty("x"), p = o.hasOwnProperty("y"), f = st, m = et, g = window;
        if (l) {
            var _ = Tt(i);
            _ === ht(i) && (_ = yt(i)),
            s === et && (m = it,
            u -= _.clientHeight - n.height,
            u *= a ? 1 : -1),
            s === st && (f = nt,
            h -= _.clientWidth - n.width,
            h *= a ? 1 : -1)
        }
        var v, y = Object.assign({
            position: r
        }, l && Ot);
        return a ? Object.assign(Object.assign({}, y), {}, ((v = {})[m] = p ? "0" : "",
        v[f] = d ? "0" : "",
        v.transform = (g.devicePixelRatio || 1) < 2 ? "translate(" + h + "px, " + u + "px)" : "translate3d(" + h + "px, " + u + "px, 0)",
        v)) : Object.assign(Object.assign({}, y), {}, ((e = {})[m] = p ? u + "px" : "",
        e[f] = d ? h + "px" : "",
        e.transform = "",
        e))
    }
    var At = {
        name: "computeStyles",
        enabled: !0,
        phase: "beforeWrite",
        fn: function(t) {
            var e = t.state
              , i = t.options
              , n = i.gpuAcceleration
              , s = void 0 === n || n
              , o = i.adaptive
              , r = void 0 === o || o
              , a = {
                placement: ft(e.placement),
                popper: e.elements.popper,
                popperRect: e.rects.popper,
                gpuAcceleration: s
            };
            null != e.modifiersData.popperOffsets && (e.styles.popper = Object.assign(Object.assign({}, e.styles.popper), Pt(Object.assign(Object.assign({}, a), {}, {
                offsets: e.modifiersData.popperOffsets,
                position: e.options.strategy,
                adaptive: r
            })))),
            null != e.modifiersData.arrow && (e.styles.arrow = Object.assign(Object.assign({}, e.styles.arrow), Pt(Object.assign(Object.assign({}, a), {}, {
                offsets: e.modifiersData.arrow,
                position: "absolute",
                adaptive: !1
            })))),
            e.attributes.popper = Object.assign(Object.assign({}, e.attributes.popper), {}, {
                "data-popper-placement": e.placement
            })
        },
        data: {}
    }
      , It = {
        passive: !0
    }
      , Dt = {
        name: "eventListeners",
        enabled: !0,
        phase: "write",
        fn: function() {},
        effect: function(t) {
            var e = t.state
              , i = t.instance
              , n = t.options
              , s = n.scroll
              , o = void 0 === s || s
              , r = n.resize
              , a = void 0 === r || r
              , l = ht(e.elements.popper)
              , c = [].concat(e.scrollParents.reference, e.scrollParents.popper);
            return o && c.forEach((function(t) {
                t.addEventListener("scroll", i.update, It)
            }
            )),
            a && l.addEventListener("resize", i.update, It),
            function() {
                o && c.forEach((function(t) {
                    t.removeEventListener("scroll", i.update, It)
                }
                )),
                a && l.removeEventListener("resize", i.update, It)
            }
        },
        data: {}
    }
      , Lt = {
        left: "right",
        right: "left",
        bottom: "top",
        top: "bottom"
    };
    function Mt(t) {
        return t.replace(/left|right|bottom|top/g, (function(t) {
            return Lt[t]
        }
        ))
    }
    var zt = {
        start: "end",
        end: "start"
    };
    function Rt(t) {
        return t.replace(/start|end/g, (function(t) {
            return zt[t]
        }
        ))
    }
    function jt(t) {
        var e = t.getBoundingClientRect();
        return {
            width: e.width,
            height: e.height,
            top: e.top,
            right: e.right,
            bottom: e.bottom,
            left: e.left,
            x: e.left,
            y: e.top
        }
    }
    function Nt(t) {
        var e = ht(t);
        return {
            scrollLeft: e.pageXOffset,
            scrollTop: e.pageYOffset
        }
    }
    function $t(t) {
        return jt(yt(t)).left + Nt(t).scrollLeft
    }
    function Ft(t) {
        var e = _t(t)
          , i = e.overflow
          , n = e.overflowX
          , s = e.overflowY;
        return /auto|scroll|overlay|hidden/.test(i + s + n)
    }
    function Wt(t, e) {
        void 0 === e && (e = []);
        var i = function t(e) {
            return ["html", "body", "#document"].indexOf(ct(e)) >= 0 ? e.ownerDocument.body : dt(e) && Ft(e) ? e : t(bt(e))
        }(t)
          , n = "body" === ct(i)
          , s = ht(i)
          , o = n ? [s].concat(s.visualViewport || [], Ft(i) ? i : []) : i
          , r = e.concat(o);
        return n ? r : r.concat(Wt(bt(o)))
    }
    function Ht(t) {
        return Object.assign(Object.assign({}, t), {}, {
            left: t.x,
            top: t.y,
            right: t.x + t.width,
            bottom: t.y + t.height
        })
    }
    function Bt(t, e) {
        return "viewport" === e ? Ht(function(t) {
            var e = ht(t)
              , i = yt(t)
              , n = e.visualViewport
              , s = i.clientWidth
              , o = i.clientHeight
              , r = 0
              , a = 0;
            return n && (s = n.width,
            o = n.height,
            /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (r = n.offsetLeft,
            a = n.offsetTop)),
            {
                width: s,
                height: o,
                x: r + $t(t),
                y: a
            }
        }(t)) : dt(e) ? function(t) {
            var e = jt(t);
            return e.top = e.top + t.clientTop,
            e.left = e.left + t.clientLeft,
            e.bottom = e.top + t.clientHeight,
            e.right = e.left + t.clientWidth,
            e.width = t.clientWidth,
            e.height = t.clientHeight,
            e.x = e.left,
            e.y = e.top,
            e
        }(e) : Ht(function(t) {
            var e = yt(t)
              , i = Nt(t)
              , n = t.ownerDocument.body
              , s = Math.max(e.scrollWidth, e.clientWidth, n ? n.scrollWidth : 0, n ? n.clientWidth : 0)
              , o = Math.max(e.scrollHeight, e.clientHeight, n ? n.scrollHeight : 0, n ? n.clientHeight : 0)
              , r = -i.scrollLeft + $t(t)
              , a = -i.scrollTop;
            return "rtl" === _t(n || e).direction && (r += Math.max(e.clientWidth, n ? n.clientWidth : 0) - s),
            {
                width: s,
                height: o,
                x: r,
                y: a
            }
        }(yt(t)))
    }
    function qt(t) {
        return t.split("-")[1]
    }
    function Yt(t) {
        var e, i = t.reference, n = t.element, s = t.placement, o = s ? ft(s) : null, r = s ? qt(s) : null, a = i.x + i.width / 2 - n.width / 2, l = i.y + i.height / 2 - n.height / 2;
        switch (o) {
        case et:
            e = {
                x: a,
                y: i.y - n.height
            };
            break;
        case it:
            e = {
                x: a,
                y: i.y + i.height
            };
            break;
        case nt:
            e = {
                x: i.x + i.width,
                y: l
            };
            break;
        case st:
            e = {
                x: i.x - n.width,
                y: l
            };
            break;
        default:
            e = {
                x: i.x,
                y: i.y
            }
        }
        var c = o ? xt(o) : null;
        if (null != c) {
            var h = "y" === c ? "height" : "width";
            switch (r) {
            case "start":
                e[c] = Math.floor(e[c]) - Math.floor(i[h] / 2 - n[h] / 2);
                break;
            case "end":
                e[c] = Math.floor(e[c]) + Math.ceil(i[h] / 2 - n[h] / 2)
            }
        }
        return e
    }
    function Xt(t, e) {
        void 0 === e && (e = {});
        var i = e
          , n = i.placement
          , s = void 0 === n ? t.placement : n
          , o = i.boundary
          , r = void 0 === o ? "clippingParents" : o
          , a = i.rootBoundary
          , l = void 0 === a ? "viewport" : a
          , c = i.elementContext
          , h = void 0 === c ? "popper" : c
          , u = i.altBoundary
          , d = void 0 !== u && u
          , p = i.padding
          , f = void 0 === p ? 0 : p
          , m = St("number" != typeof f ? f : Ct(f, ot))
          , g = "popper" === h ? "reference" : "popper"
          , _ = t.elements.reference
          , v = t.rects.popper
          , y = t.elements[d ? g : h]
          , b = function(t, e, i) {
            var n = "clippingParents" === e ? function(t) {
                var e = Wt(bt(t))
                  , i = ["absolute", "fixed"].indexOf(_t(t).position) >= 0 && dt(t) ? Tt(t) : t;
                return ut(i) ? e.filter((function(t) {
                    return ut(t) && gt(t, i) && "body" !== ct(t)
                }
                )) : []
            }(t) : [].concat(e)
              , s = [].concat(n, [i])
              , o = s[0]
              , r = s.reduce((function(e, i) {
                var n = Bt(t, i);
                return e.top = Math.max(n.top, e.top),
                e.right = Math.min(n.right, e.right),
                e.bottom = Math.min(n.bottom, e.bottom),
                e.left = Math.max(n.left, e.left),
                e
            }
            ), Bt(t, o));
            return r.width = r.right - r.left,
            r.height = r.bottom - r.top,
            r.x = r.left,
            r.y = r.top,
            r
        }(ut(y) ? y : y.contextElement || yt(t.elements.popper), r, l)
          , w = jt(_)
          , T = Yt({
            reference: w,
            element: v,
            strategy: "absolute",
            placement: s
        })
          , x = Ht(Object.assign(Object.assign({}, v), T))
          , k = "popper" === h ? x : w
          , S = {
            top: b.top - k.top + m.top,
            bottom: k.bottom - b.bottom + m.bottom,
            left: b.left - k.left + m.left,
            right: k.right - b.right + m.right
        }
          , C = t.modifiersData.offset;
        if ("popper" === h && C) {
            var E = C[s];
            Object.keys(S).forEach((function(t) {
                var e = [nt, it].indexOf(t) >= 0 ? 1 : -1
                  , i = [et, it].indexOf(t) >= 0 ? "y" : "x";
                S[t] += E[i] * e
            }
            ))
        }
        return S
    }
    var Ut = {
        name: "flip",
        enabled: !0,
        phase: "main",
        fn: function(t) {
            var e = t.state
              , i = t.options
              , n = t.name;
            if (!e.modifiersData[n]._skip) {
                for (var s = i.mainAxis, o = void 0 === s || s, r = i.altAxis, a = void 0 === r || r, l = i.fallbackPlacements, c = i.padding, h = i.boundary, u = i.rootBoundary, d = i.altBoundary, p = i.flipVariations, f = void 0 === p || p, m = i.allowedAutoPlacements, g = e.options.placement, _ = ft(g), v = l || (_ !== g && f ? function(t) {
                    if ("auto" === ft(t))
                        return [];
                    var e = Mt(t);
                    return [Rt(t), e, Rt(e)]
                }(g) : [Mt(g)]), y = [g].concat(v).reduce((function(t, i) {
                    return t.concat("auto" === ft(i) ? function(t, e) {
                        void 0 === e && (e = {});
                        var i = e
                          , n = i.placement
                          , s = i.boundary
                          , o = i.rootBoundary
                          , r = i.padding
                          , a = i.flipVariations
                          , l = i.allowedAutoPlacements
                          , c = void 0 === l ? at : l
                          , h = qt(n)
                          , u = h ? a ? rt : rt.filter((function(t) {
                            return qt(t) === h
                        }
                        )) : ot
                          , d = u.filter((function(t) {
                            return c.indexOf(t) >= 0
                        }
                        ));
                        0 === d.length && (d = u);
                        var p = d.reduce((function(e, i) {
                            return e[i] = Xt(t, {
                                placement: i,
                                boundary: s,
                                rootBoundary: o,
                                padding: r
                            })[ft(i)],
                            e
                        }
                        ), {});
                        return Object.keys(p).sort((function(t, e) {
                            return p[t] - p[e]
                        }
                        ))
                    }(e, {
                        placement: i,
                        boundary: h,
                        rootBoundary: u,
                        padding: c,
                        flipVariations: f,
                        allowedAutoPlacements: m
                    }) : i)
                }
                ), []), b = e.rects.reference, w = e.rects.popper, T = new Map, x = !0, k = y[0], S = 0; S < y.length; S++) {
                    var C = y[S]
                      , E = ft(C)
                      , O = "start" === qt(C)
                      , P = [et, it].indexOf(E) >= 0
                      , A = P ? "width" : "height"
                      , I = Xt(e, {
                        placement: C,
                        boundary: h,
                        rootBoundary: u,
                        altBoundary: d,
                        padding: c
                    })
                      , D = P ? O ? nt : st : O ? it : et;
                    b[A] > w[A] && (D = Mt(D));
                    var L = Mt(D)
                      , M = [];
                    if (o && M.push(I[E] <= 0),
                    a && M.push(I[D] <= 0, I[L] <= 0),
                    M.every((function(t) {
                        return t
                    }
                    ))) {
                        k = C,
                        x = !1;
                        break
                    }
                    T.set(C, M)
                }
                if (x)
                    for (var z = function(t) {
                        var e = y.find((function(e) {
                            var i = T.get(e);
                            if (i)
                                return i.slice(0, t).every((function(t) {
                                    return t
                                }
                                ))
                        }
                        ));
                        if (e)
                            return k = e,
                            "break"
                    }, R = f ? 3 : 1; R > 0 && "break" !== z(R); R--)
                        ;
                e.placement !== k && (e.modifiersData[n]._skip = !0,
                e.placement = k,
                e.reset = !0)
            }
        },
        requiresIfExists: ["offset"],
        data: {
            _skip: !1
        }
    };
    function Vt(t, e, i) {
        return void 0 === i && (i = {
            x: 0,
            y: 0
        }),
        {
            top: t.top - e.height - i.y,
            right: t.right - e.width + i.x,
            bottom: t.bottom - e.height + i.y,
            left: t.left - e.width - i.x
        }
    }
    function Qt(t) {
        return [et, nt, it, st].some((function(e) {
            return t[e] >= 0
        }
        ))
    }
    var Kt = {
        name: "hide",
        enabled: !0,
        phase: "main",
        requiresIfExists: ["preventOverflow"],
        fn: function(t) {
            var e = t.state
              , i = t.name
              , n = e.rects.reference
              , s = e.rects.popper
              , o = e.modifiersData.preventOverflow
              , r = Xt(e, {
                elementContext: "reference"
            })
              , a = Xt(e, {
                altBoundary: !0
            })
              , l = Vt(r, n)
              , c = Vt(a, s, o)
              , h = Qt(l)
              , u = Qt(c);
            e.modifiersData[i] = {
                referenceClippingOffsets: l,
                popperEscapeOffsets: c,
                isReferenceHidden: h,
                hasPopperEscaped: u
            },
            e.attributes.popper = Object.assign(Object.assign({}, e.attributes.popper), {}, {
                "data-popper-reference-hidden": h,
                "data-popper-escaped": u
            })
        }
    }
      , Gt = {
        name: "offset",
        enabled: !0,
        phase: "main",
        requires: ["popperOffsets"],
        fn: function(t) {
            var e = t.state
              , i = t.options
              , n = t.name
              , s = i.offset
              , o = void 0 === s ? [0, 0] : s
              , r = at.reduce((function(t, i) {
                return t[i] = function(t, e, i) {
                    var n = ft(t)
                      , s = [st, et].indexOf(n) >= 0 ? -1 : 1
                      , o = "function" == typeof i ? i(Object.assign(Object.assign({}, e), {}, {
                        placement: t
                    })) : i
                      , r = o[0]
                      , a = o[1];
                    return r = r || 0,
                    a = (a || 0) * s,
                    [st, nt].indexOf(n) >= 0 ? {
                        x: a,
                        y: r
                    } : {
                        x: r,
                        y: a
                    }
                }(i, e.rects, o),
                t
            }
            ), {})
              , a = r[e.placement]
              , l = a.x
              , c = a.y;
            null != e.modifiersData.popperOffsets && (e.modifiersData.popperOffsets.x += l,
            e.modifiersData.popperOffsets.y += c),
            e.modifiersData[n] = r
        }
    }
      , Zt = {
        name: "popperOffsets",
        enabled: !0,
        phase: "read",
        fn: function(t) {
            var e = t.state
              , i = t.name;
            e.modifiersData[i] = Yt({
                reference: e.rects.reference,
                element: e.rects.popper,
                strategy: "absolute",
                placement: e.placement
            })
        },
        data: {}
    }
      , Jt = {
        name: "preventOverflow",
        enabled: !0,
        phase: "main",
        fn: function(t) {
            var e = t.state
              , i = t.options
              , n = t.name
              , s = i.mainAxis
              , o = void 0 === s || s
              , r = i.altAxis
              , a = void 0 !== r && r
              , l = i.boundary
              , c = i.rootBoundary
              , h = i.altBoundary
              , u = i.padding
              , d = i.tether
              , p = void 0 === d || d
              , f = i.tetherOffset
              , m = void 0 === f ? 0 : f
              , g = Xt(e, {
                boundary: l,
                rootBoundary: c,
                padding: u,
                altBoundary: h
            })
              , _ = ft(e.placement)
              , v = qt(e.placement)
              , y = !v
              , b = xt(_)
              , w = "x" === b ? "y" : "x"
              , T = e.modifiersData.popperOffsets
              , x = e.rects.reference
              , k = e.rects.popper
              , S = "function" == typeof m ? m(Object.assign(Object.assign({}, e.rects), {}, {
                placement: e.placement
            })) : m
              , C = {
                x: 0,
                y: 0
            };
            if (T) {
                if (o) {
                    var E = "y" === b ? et : st
                      , O = "y" === b ? it : nt
                      , P = "y" === b ? "height" : "width"
                      , A = T[b]
                      , I = T[b] + g[E]
                      , D = T[b] - g[O]
                      , L = p ? -k[P] / 2 : 0
                      , M = "start" === v ? x[P] : k[P]
                      , z = "start" === v ? -k[P] : -x[P]
                      , R = e.elements.arrow
                      , j = p && R ? mt(R) : {
                        width: 0,
                        height: 0
                    }
                      , N = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0
                    }
                      , $ = N[E]
                      , F = N[O]
                      , W = kt(0, x[P], j[P])
                      , H = y ? x[P] / 2 - L - W - $ - S : M - W - $ - S
                      , B = y ? -x[P] / 2 + L + W + F + S : z + W + F + S
                      , q = e.elements.arrow && Tt(e.elements.arrow)
                      , Y = q ? "y" === b ? q.clientTop || 0 : q.clientLeft || 0 : 0
                      , X = e.modifiersData.offset ? e.modifiersData.offset[e.placement][b] : 0
                      , U = T[b] + H - X - Y
                      , V = T[b] + B - X
                      , Q = kt(p ? Math.min(I, U) : I, A, p ? Math.max(D, V) : D);
                    T[b] = Q,
                    C[b] = Q - A
                }
                if (a) {
                    var K = "x" === b ? et : st
                      , G = "x" === b ? it : nt
                      , Z = T[w]
                      , J = kt(Z + g[K], Z, Z - g[G]);
                    T[w] = J,
                    C[w] = J - Z
                }
                e.modifiersData[n] = C
            }
        },
        requiresIfExists: ["offset"]
    };
    function te(t, e, i) {
        void 0 === i && (i = !1);
        var n, s, o = yt(e), r = jt(t), a = dt(e), l = {
            scrollLeft: 0,
            scrollTop: 0
        }, c = {
            x: 0,
            y: 0
        };
        return (a || !a && !i) && (("body" !== ct(e) || Ft(o)) && (l = (n = e) !== ht(n) && dt(n) ? {
            scrollLeft: (s = n).scrollLeft,
            scrollTop: s.scrollTop
        } : Nt(n)),
        dt(e) ? ((c = jt(e)).x += e.clientLeft,
        c.y += e.clientTop) : o && (c.x = $t(o))),
        {
            x: r.left + l.scrollLeft - c.x,
            y: r.top + l.scrollTop - c.y,
            width: r.width,
            height: r.height
        }
    }
    var ee = {
        placement: "bottom",
        modifiers: [],
        strategy: "absolute"
    };
    function ie() {
        for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
            e[i] = arguments[i];
        return !e.some((function(t) {
            return !(t && "function" == typeof t.getBoundingClientRect)
        }
        ))
    }
    function ne(t) {
        void 0 === t && (t = {});
        var e = t
          , i = e.defaultModifiers
          , n = void 0 === i ? [] : i
          , s = e.defaultOptions
          , o = void 0 === s ? ee : s;
        return function(t, e, i) {
            void 0 === i && (i = o);
            var s, r, a = {
                placement: "bottom",
                orderedModifiers: [],
                options: Object.assign(Object.assign({}, ee), o),
                modifiersData: {},
                elements: {
                    reference: t,
                    popper: e
                },
                attributes: {},
                styles: {}
            }, l = [], c = !1, h = {
                state: a,
                setOptions: function(i) {
                    u(),
                    a.options = Object.assign(Object.assign(Object.assign({}, o), a.options), i),
                    a.scrollParents = {
                        reference: ut(t) ? Wt(t) : t.contextElement ? Wt(t.contextElement) : [],
                        popper: Wt(e)
                    };
                    var s, r, c = function(t) {
                        var e = function(t) {
                            var e = new Map
                              , i = new Set
                              , n = [];
                            return t.forEach((function(t) {
                                e.set(t.name, t)
                            }
                            )),
                            t.forEach((function(t) {
                                i.has(t.name) || function t(s) {
                                    i.add(s.name),
                                    [].concat(s.requires || [], s.requiresIfExists || []).forEach((function(n) {
                                        if (!i.has(n)) {
                                            var s = e.get(n);
                                            s && t(s)
                                        }
                                    }
                                    )),
                                    n.push(s)
                                }(t)
                            }
                            )),
                            n
                        }(t);
                        return lt.reduce((function(t, i) {
                            return t.concat(e.filter((function(t) {
                                return t.phase === i
                            }
                            )))
                        }
                        ), [])
                    }((s = [].concat(n, a.options.modifiers),
                    r = s.reduce((function(t, e) {
                        var i = t[e.name];
                        return t[e.name] = i ? Object.assign(Object.assign(Object.assign({}, i), e), {}, {
                            options: Object.assign(Object.assign({}, i.options), e.options),
                            data: Object.assign(Object.assign({}, i.data), e.data)
                        }) : e,
                        t
                    }
                    ), {}),
                    Object.keys(r).map((function(t) {
                        return r[t]
                    }
                    ))));
                    return a.orderedModifiers = c.filter((function(t) {
                        return t.enabled
                    }
                    )),
                    a.orderedModifiers.forEach((function(t) {
                        var e = t.name
                          , i = t.options
                          , n = void 0 === i ? {} : i
                          , s = t.effect;
                        if ("function" == typeof s) {
                            var o = s({
                                state: a,
                                name: e,
                                instance: h,
                                options: n
                            });
                            l.push(o || function() {}
                            )
                        }
                    }
                    )),
                    h.update()
                },
                forceUpdate: function() {
                    if (!c) {
                        var t = a.elements
                          , e = t.reference
                          , i = t.popper;
                        if (ie(e, i)) {
                            a.rects = {
                                reference: te(e, Tt(i), "fixed" === a.options.strategy),
                                popper: mt(i)
                            },
                            a.reset = !1,
                            a.placement = a.options.placement,
                            a.orderedModifiers.forEach((function(t) {
                                return a.modifiersData[t.name] = Object.assign({}, t.data)
                            }
                            ));
                            for (var n = 0; n < a.orderedModifiers.length; n++)
                                if (!0 !== a.reset) {
                                    var s = a.orderedModifiers[n]
                                      , o = s.fn
                                      , r = s.options
                                      , l = void 0 === r ? {} : r
                                      , u = s.name;
                                    "function" == typeof o && (a = o({
                                        state: a,
                                        options: l,
                                        name: u,
                                        instance: h
                                    }) || a)
                                } else
                                    a.reset = !1,
                                    n = -1
                        }
                    }
                },
                update: (s = function() {
                    return new Promise((function(t) {
                        h.forceUpdate(),
                        t(a)
                    }
                    ))
                }
                ,
                function() {
                    return r || (r = new Promise((function(t) {
                        Promise.resolve().then((function() {
                            r = void 0,
                            t(s())
                        }
                        ))
                    }
                    ))),
                    r
                }
                ),
                destroy: function() {
                    u(),
                    c = !0
                }
            };
            if (!ie(t, e))
                return h;
            function u() {
                l.forEach((function(t) {
                    return t()
                }
                )),
                l = []
            }
            return h.setOptions(i).then((function(t) {
                !c && i.onFirstUpdate && i.onFirstUpdate(t)
            }
            )),
            h
        }
    }
    var se = ne()
      , oe = ne({
        defaultModifiers: [Dt, Zt, At, pt]
    })
      , re = ne({
        defaultModifiers: [Dt, Zt, At, pt, Gt, Ut, Jt, Et, Kt]
    })
      , ae = Object.freeze({
        __proto__: null,
        popperGenerator: ne,
        detectOverflow: Xt,
        createPopperBase: se,
        createPopper: re,
        createPopperLite: oe,
        top: et,
        bottom: it,
        right: nt,
        left: st,
        auto: "auto",
        basePlacements: ot,
        start: "start",
        end: "end",
        clippingParents: "clippingParents",
        viewport: "viewport",
        popper: "popper",
        reference: "reference",
        variationPlacements: rt,
        placements: at,
        beforeRead: "beforeRead",
        read: "read",
        afterRead: "afterRead",
        beforeMain: "beforeMain",
        main: "main",
        afterMain: "afterMain",
        beforeWrite: "beforeWrite",
        write: "write",
        afterWrite: "afterWrite",
        modifierPhases: lt,
        applyStyles: pt,
        arrow: Et,
        computeStyles: At,
        eventListeners: Dt,
        flip: Ut,
        hide: Kt,
        offset: Gt,
        popperOffsets: Zt,
        preventOverflow: Jt
    })
      , le = "dropdown"
      , ce = new RegExp("ArrowUp|ArrowDown|Escape")
      , he = b ? "top-end" : "top-start"
      , ue = b ? "top-start" : "top-end"
      , de = b ? "bottom-end" : "bottom-start"
      , pe = b ? "bottom-start" : "bottom-end"
      , fe = b ? "left-start" : "right-start"
      , me = b ? "right-start" : "left-start"
      , ge = {
        offset: 0,
        flip: !0,
        boundary: "clippingParents",
        reference: "toggle",
        display: "dynamic",
        popperConfig: null
    }
      , _e = {
        offset: "(number|string|function)",
        flip: "boolean",
        boundary: "(string|element)",
        reference: "(string|element)",
        display: "string",
        popperConfig: "(null|object)"
    }
      , ve = function(t) {
        function s(e, i) {
            var n;
            return (n = t.call(this, e) || this)._popper = null,
            n._config = n._getConfig(i),
            n._menu = n._getMenuElement(),
            n._inNavbar = n._detectNavbar(),
            n._addEventListeners(),
            n
        }
        n(s, t);
        var o = s.prototype;
        return o.toggle = function() {
            if (!this._element.disabled && !this._element.classList.contains("disabled")) {
                var t = this._element.classList.contains("show");
                s.clearMenus(),
                t || this.show()
            }
        }
        ,
        o.show = function() {
            if (!(this._element.disabled || this._element.classList.contains("disabled") || this._menu.classList.contains("show"))) {
                var t = s.getParentFromElement(this._element)
                  , e = {
                    relatedTarget: this._element
                };
                if (!j.trigger(this._element, "show.bs.dropdown", e).defaultPrevented) {
                    if (!this._inNavbar) {
                        if (void 0 === ae)
                            throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
                        var i = this._element;
                        "parent" === this._config.reference ? i = t : d(this._config.reference) && (i = this._config.reference,
                        void 0 !== this._config.reference.jquery && (i = this._config.reference[0])),
                        this._popper = re(i, this._menu, this._getPopperConfig())
                    }
                    var n;
                    "ontouchstart"in document.documentElement && !t.closest(".navbar-nav") && (n = []).concat.apply(n, document.body.children).forEach((function(t) {
                        return j.on(t, "mouseover", null, (function() {}
                        ))
                    }
                    )),
                    this._element.focus(),
                    this._element.setAttribute("aria-expanded", !0),
                    this._menu.classList.toggle("show"),
                    this._element.classList.toggle("show"),
                    j.trigger(t, "shown.bs.dropdown", e)
                }
            }
        }
        ,
        o.hide = function() {
            if (!this._element.disabled && !this._element.classList.contains("disabled") && this._menu.classList.contains("show")) {
                var t = s.getParentFromElement(this._element)
                  , e = {
                    relatedTarget: this._element
                };
                j.trigger(t, "hide.bs.dropdown", e).defaultPrevented || (this._popper && this._popper.destroy(),
                this._menu.classList.toggle("show"),
                this._element.classList.toggle("show"),
                j.trigger(t, "hidden.bs.dropdown", e))
            }
        }
        ,
        o.dispose = function() {
            t.prototype.dispose.call(this),
            j.off(this._element, ".bs.dropdown"),
            this._menu = null,
            this._popper && (this._popper.destroy(),
            this._popper = null)
        }
        ,
        o.update = function() {
            this._inNavbar = this._detectNavbar(),
            this._popper && this._popper.update()
        }
        ,
        o._addEventListeners = function() {
            var t = this;
            j.on(this._element, "click.bs.dropdown", (function(e) {
                e.preventDefault(),
                e.stopPropagation(),
                t.toggle()
            }
            ))
        }
        ,
        o._getConfig = function(t) {
            return t = i({}, this.constructor.Default, q.getDataAttributes(this._element), t),
            f(le, t, this.constructor.DefaultType),
            t
        }
        ,
        o._getMenuElement = function() {
            return Y.next(this._element, ".dropdown-menu")[0]
        }
        ,
        o._getPlacement = function() {
            var t = this._element.parentNode;
            if (t.classList.contains("dropend"))
                return fe;
            if (t.classList.contains("dropstart"))
                return me;
            var e = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
            return t.classList.contains("dropup") ? e ? ue : he : e ? pe : de
        }
        ,
        o._detectNavbar = function() {
            return null !== this._element.closest(".navbar")
        }
        ,
        o._getPopperConfig = function() {
            var t = {
                placement: this._getPlacement(),
                modifiers: [{
                    name: "preventOverflow",
                    options: {
                        altBoundary: this._config.flip,
                        rootBoundary: this._config.boundary
                    }
                }]
            };
            return "static" === this._config.display && (t.modifiers = [{
                name: "applyStyles",
                enabled: !1
            }]),
            i({}, t, this._config.popperConfig)
        }
        ,
        s.dropdownInterface = function(t, e) {
            var i = x(t, "bs.dropdown");
            if (i || (i = new s(t,"object" == typeof e ? e : null)),
            "string" == typeof e) {
                if (void 0 === i[e])
                    throw new TypeError('No method named "' + e + '"');
                i[e]()
            }
        }
        ,
        s.jQueryInterface = function(t) {
            return this.each((function() {
                s.dropdownInterface(this, t)
            }
            ))
        }
        ,
        s.clearMenus = function(t) {
            if (!t || 2 !== t.button && ("keyup" !== t.type || "Tab" === t.key))
                for (var e = Y.find('[data-bs-toggle="dropdown"]'), i = 0, n = e.length; i < n; i++) {
                    var o = s.getParentFromElement(e[i])
                      , r = x(e[i], "bs.dropdown")
                      , a = {
                        relatedTarget: e[i]
                    };
                    if (t && "click" === t.type && (a.clickEvent = t),
                    r) {
                        var l, c = r._menu;
                        if (e[i].classList.contains("show") && !(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && "Tab" === t.key) && c.contains(t.target) || j.trigger(o, "hide.bs.dropdown", a).defaultPrevented))
                            "ontouchstart"in document.documentElement && (l = []).concat.apply(l, document.body.children).forEach((function(t) {
                                return j.off(t, "mouseover", null, (function() {}
                                ))
                            }
                            )),
                            e[i].setAttribute("aria-expanded", "false"),
                            r._popper && r._popper.destroy(),
                            c.classList.remove("show"),
                            e[i].classList.remove("show"),
                            j.trigger(o, "hidden.bs.dropdown", a)
                    }
                }
        }
        ,
        s.getParentFromElement = function(t) {
            return c(t) || t.parentNode
        }
        ,
        s.dataApiKeydownHandler = function(t) {
            if (!(/input|textarea/i.test(t.target.tagName) ? "Space" === t.key || "Escape" !== t.key && ("ArrowDown" !== t.key && "ArrowUp" !== t.key || t.target.closest(".dropdown-menu")) : !ce.test(t.key)) && (t.preventDefault(),
            t.stopPropagation(),
            !this.disabled && !this.classList.contains("disabled"))) {
                var e = s.getParentFromElement(this)
                  , i = this.classList.contains("show");
                if ("Escape" === t.key)
                    return (this.matches('[data-bs-toggle="dropdown"]') ? this : Y.prev(this, '[data-bs-toggle="dropdown"]')[0]).focus(),
                    void s.clearMenus();
                if (i && "Space" !== t.key) {
                    var n = Y.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", e).filter(m);
                    if (n.length) {
                        var o = n.indexOf(t.target);
                        "ArrowUp" === t.key && o > 0 && o--,
                        "ArrowDown" === t.key && o < n.length - 1 && o++,
                        n[o = -1 === o ? 0 : o].focus()
                    }
                } else
                    s.clearMenus()
            }
        }
        ,
        e(s, null, [{
            key: "Default",
            get: function() {
                return ge
            }
        }, {
            key: "DefaultType",
            get: function() {
                return _e
            }
        }, {
            key: "DATA_KEY",
            get: function() {
                return "bs.dropdown"
            }
        }]),
        s
    }(N);
    j.on(document, "keydown.bs.dropdown.data-api", '[data-bs-toggle="dropdown"]', ve.dataApiKeydownHandler),
    j.on(document, "keydown.bs.dropdown.data-api", ".dropdown-menu", ve.dataApiKeydownHandler),
    j.on(document, "click.bs.dropdown.data-api", ve.clearMenus),
    j.on(document, "keyup.bs.dropdown.data-api", ve.clearMenus),
    j.on(document, "click.bs.dropdown.data-api", '[data-bs-toggle="dropdown"]', (function(t) {
        t.preventDefault(),
        t.stopPropagation(),
        ve.dropdownInterface(this, "toggle")
    }
    )),
    j.on(document, "click.bs.dropdown.data-api", ".dropdown form", (function(t) {
        return t.stopPropagation()
    }
    )),
    y((function() {
        var t = v();
        if (t) {
            var e = t.fn[le];
            t.fn[le] = ve.jQueryInterface,
            t.fn[le].Constructor = ve,
            t.fn[le].noConflict = function() {
                return t.fn[le] = e,
                ve.jQueryInterface
            }
        }
    }
    ));
    var ye = {
        backdrop: !0,
        keyboard: !0,
        focus: !0
    }
      , be = {
        backdrop: "(boolean|string)",
        keyboard: "boolean",
        focus: "boolean"
    }
      , we = function(t) {
        function s(e, i) {
            var n;
            return (n = t.call(this, e) || this)._config = n._getConfig(i),
            n._dialog = Y.findOne(".modal-dialog", e),
            n._backdrop = null,
            n._isShown = !1,
            n._isBodyOverflowing = !1,
            n._ignoreBackdropClick = !1,
            n._isTransitioning = !1,
            n._scrollbarWidth = 0,
            n
        }
        n(s, t);
        var o = s.prototype;
        return o.toggle = function(t) {
            return this._isShown ? this.hide() : this.show(t)
        }
        ,
        o.show = function(t) {
            var e = this;
            if (!this._isShown && !this._isTransitioning) {
                this._element.classList.contains("fade") && (this._isTransitioning = !0);
                var i = j.trigger(this._element, "show.bs.modal", {
                    relatedTarget: t
                });
                this._isShown || i.defaultPrevented || (this._isShown = !0,
                this._checkScrollbar(),
                this._setScrollbar(),
                this._adjustDialog(),
                this._setEscapeEvent(),
                this._setResizeEvent(),
                j.on(this._element, "click.dismiss.bs.modal", '[data-bs-dismiss="modal"]', (function(t) {
                    return e.hide(t)
                }
                )),
                j.on(this._dialog, "mousedown.dismiss.bs.modal", (function() {
                    j.one(e._element, "mouseup.dismiss.bs.modal", (function(t) {
                        t.target === e._element && (e._ignoreBackdropClick = !0)
                    }
                    ))
                }
                )),
                this._showBackdrop((function() {
                    return e._showElement(t)
                }
                )))
            }
        }
        ,
        o.hide = function(t) {
            var e = this;
            if (t && t.preventDefault(),
            this._isShown && !this._isTransitioning && !j.trigger(this._element, "hide.bs.modal").defaultPrevented) {
                this._isShown = !1;
                var i = this._element.classList.contains("fade");
                if (i && (this._isTransitioning = !0),
                this._setEscapeEvent(),
                this._setResizeEvent(),
                j.off(document, "focusin.bs.modal"),
                this._element.classList.remove("show"),
                j.off(this._element, "click.dismiss.bs.modal"),
                j.off(this._dialog, "mousedown.dismiss.bs.modal"),
                i) {
                    var n = h(this._element);
                    j.one(this._element, "transitionend", (function(t) {
                        return e._hideModal(t)
                    }
                    )),
                    p(this._element, n)
                } else
                    this._hideModal()
            }
        }
        ,
        o.dispose = function() {
            [window, this._element, this._dialog].forEach((function(t) {
                return j.off(t, ".bs.modal")
            }
            )),
            t.prototype.dispose.call(this),
            j.off(document, "focusin.bs.modal"),
            this._config = null,
            this._dialog = null,
            this._backdrop = null,
            this._isShown = null,
            this._isBodyOverflowing = null,
            this._ignoreBackdropClick = null,
            this._isTransitioning = null,
            this._scrollbarWidth = null
        }
        ,
        o.handleUpdate = function() {
            this._adjustDialog()
        }
        ,
        o._getConfig = function(t) {
            return t = i({}, ye, t),
            f("modal", t, be),
            t
        }
        ,
        o._showElement = function(t) {
            var e = this
              , i = this._element.classList.contains("fade")
              , n = Y.findOne(".modal-body", this._dialog);
            this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element),
            this._element.style.display = "block",
            this._element.removeAttribute("aria-hidden"),
            this._element.setAttribute("aria-modal", !0),
            this._element.setAttribute("role", "dialog"),
            this._element.scrollTop = 0,
            n && (n.scrollTop = 0),
            i && _(this._element),
            this._element.classList.add("show"),
            this._config.focus && this._enforceFocus();
            var s = function() {
                e._config.focus && e._element.focus(),
                e._isTransitioning = !1,
                j.trigger(e._element, "shown.bs.modal", {
                    relatedTarget: t
                })
            };
            if (i) {
                var o = h(this._dialog);
                j.one(this._dialog, "transitionend", s),
                p(this._dialog, o)
            } else
                s()
        }
        ,
        o._enforceFocus = function() {
            var t = this;
            j.off(document, "focusin.bs.modal"),
            j.on(document, "focusin.bs.modal", (function(e) {
                document === e.target || t._element === e.target || t._element.contains(e.target) || t._element.focus()
            }
            ))
        }
        ,
        o._setEscapeEvent = function() {
            var t = this;
            this._isShown ? j.on(this._element, "keydown.dismiss.bs.modal", (function(e) {
                t._config.keyboard && "Escape" === e.key ? (e.preventDefault(),
                t.hide()) : t._config.keyboard || "Escape" !== e.key || t._triggerBackdropTransition()
            }
            )) : j.off(this._element, "keydown.dismiss.bs.modal")
        }
        ,
        o._setResizeEvent = function() {
            var t = this;
            this._isShown ? j.on(window, "resize.bs.modal", (function() {
                return t._adjustDialog()
            }
            )) : j.off(window, "resize.bs.modal")
        }
        ,
        o._hideModal = function() {
            var t = this;
            this._element.style.display = "none",
            this._element.setAttribute("aria-hidden", !0),
            this._element.removeAttribute("aria-modal"),
            this._element.removeAttribute("role"),
            this._isTransitioning = !1,
            this._showBackdrop((function() {
                document.body.classList.remove("modal-open"),
                t._resetAdjustments(),
                t._resetScrollbar(),
                j.trigger(t._element, "hidden.bs.modal")
            }
            ))
        }
        ,
        o._removeBackdrop = function() {
            this._backdrop.parentNode.removeChild(this._backdrop),
            this._backdrop = null
        }
        ,
        o._showBackdrop = function(t) {
            var e = this
              , i = this._element.classList.contains("fade") ? "fade" : "";
            if (this._isShown && this._config.backdrop) {
                if (this._backdrop = document.createElement("div"),
                this._backdrop.className = "modal-backdrop",
                i && this._backdrop.classList.add(i),
                document.body.appendChild(this._backdrop),
                j.on(this._element, "click.dismiss.bs.modal", (function(t) {
                    e._ignoreBackdropClick ? e._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === e._config.backdrop ? e._triggerBackdropTransition() : e.hide())
                }
                )),
                i && _(this._backdrop),
                this._backdrop.classList.add("show"),
                !i)
                    return void t();
                var n = h(this._backdrop);
                j.one(this._backdrop, "transitionend", t),
                p(this._backdrop, n)
            } else if (!this._isShown && this._backdrop) {
                this._backdrop.classList.remove("show");
                var s = function() {
                    e._removeBackdrop(),
                    t()
                };
                if (this._element.classList.contains("fade")) {
                    var o = h(this._backdrop);
                    j.one(this._backdrop, "transitionend", s),
                    p(this._backdrop, o)
                } else
                    s()
            } else
                t()
        }
        ,
        o._triggerBackdropTransition = function() {
            var t = this;
            if (!j.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented) {
                var e = this._element.scrollHeight > document.documentElement.clientHeight;
                e || (this._element.style.overflowY = "hidden"),
                this._element.classList.add("modal-static");
                var i = h(this._dialog);
                j.off(this._element, "transitionend"),
                j.one(this._element, "transitionend", (function() {
                    t._element.classList.remove("modal-static"),
                    e || (j.one(t._element, "transitionend", (function() {
                        t._element.style.overflowY = ""
                    }
                    )),
                    p(t._element, i))
                }
                )),
                p(this._element, i),
                this._element.focus()
            }
        }
        ,
        o._adjustDialog = function() {
            var t = this._element.scrollHeight > document.documentElement.clientHeight;
            (!this._isBodyOverflowing && t && !b || this._isBodyOverflowing && !t && b) && (this._element.style.paddingLeft = this._scrollbarWidth + "px"),
            (this._isBodyOverflowing && !t && !b || !this._isBodyOverflowing && t && b) && (this._element.style.paddingRight = this._scrollbarWidth + "px")
        }
        ,
        o._resetAdjustments = function() {
            this._element.style.paddingLeft = "",
            this._element.style.paddingRight = ""
        }
        ,
        o._checkScrollbar = function() {
            var t = document.body.getBoundingClientRect();
            this._isBodyOverflowing = Math.round(t.left + t.right) < window.innerWidth,
            this._scrollbarWidth = this._getScrollbarWidth()
        }
        ,
        o._setScrollbar = function() {
            var t = this;
            if (this._isBodyOverflowing) {
                Y.find(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top").forEach((function(e) {
                    var i = e.style.paddingRight
                      , n = window.getComputedStyle(e)["padding-right"];
                    q.setDataAttribute(e, "padding-right", i),
                    e.style.paddingRight = Number.parseFloat(n) + t._scrollbarWidth + "px"
                }
                )),
                Y.find(".sticky-top").forEach((function(e) {
                    var i = e.style.marginRight
                      , n = window.getComputedStyle(e)["margin-right"];
                    q.setDataAttribute(e, "margin-right", i),
                    e.style.marginRight = Number.parseFloat(n) - t._scrollbarWidth + "px"
                }
                ));
                var e = document.body.style.paddingRight
                  , i = window.getComputedStyle(document.body)["padding-right"];
                q.setDataAttribute(document.body, "padding-right", e),
                document.body.style.paddingRight = Number.parseFloat(i) + this._scrollbarWidth + "px"
            }
            document.body.classList.add("modal-open")
        }
        ,
        o._resetScrollbar = function() {
            Y.find(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top").forEach((function(t) {
                var e = q.getDataAttribute(t, "padding-right");
                void 0 !== e && (q.removeDataAttribute(t, "padding-right"),
                t.style.paddingRight = e)
            }
            )),
            Y.find(".sticky-top").forEach((function(t) {
                var e = q.getDataAttribute(t, "margin-right");
                void 0 !== e && (q.removeDataAttribute(t, "margin-right"),
                t.style.marginRight = e)
            }
            ));
            var t = q.getDataAttribute(document.body, "padding-right");
            void 0 === t ? document.body.style.paddingRight = "" : (q.removeDataAttribute(document.body, "padding-right"),
            document.body.style.paddingRight = t)
        }
        ,
        o._getScrollbarWidth = function() {
            var t = document.createElement("div");
            t.className = "modal-scrollbar-measure",
            document.body.appendChild(t);
            var e = t.getBoundingClientRect().width - t.clientWidth;
            return document.body.removeChild(t),
            e
        }
        ,
        s.jQueryInterface = function(t, e) {
            return this.each((function() {
                var n = x(this, "bs.modal")
                  , o = i({}, ye, q.getDataAttributes(this), "object" == typeof t && t ? t : {});
                if (n || (n = new s(this,o)),
                "string" == typeof t) {
                    if (void 0 === n[t])
                        throw new TypeError('No method named "' + t + '"');
                    n[t](e)
                }
            }
            ))
        }
        ,
        e(s, null, [{
            key: "Default",
            get: function() {
                return ye
            }
        }, {
            key: "DATA_KEY",
            get: function() {
                return "bs.modal"
            }
        }]),
        s
    }(N);
    j.on(document, "click.bs.modal.data-api", '[data-bs-toggle="modal"]', (function(t) {
        var e = this
          , n = c(this);
        "A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault(),
        j.one(n, "show.bs.modal", (function(t) {
            t.defaultPrevented || j.one(n, "hidden.bs.modal", (function() {
                m(e) && e.focus()
            }
            ))
        }
        ));
        var s = x(n, "bs.modal");
        if (!s) {
            var o = i({}, q.getDataAttributes(n), q.getDataAttributes(this));
            s = new we(n,o)
        }
        s.show(this)
    }
    )),
    y((function() {
        var t = v();
        if (t) {
            var e = t.fn.modal;
            t.fn.modal = we.jQueryInterface,
            t.fn.modal.Constructor = we,
            t.fn.modal.noConflict = function() {
                return t.fn.modal = e,
                we.jQueryInterface
            }
        }
    }
    ));
    var Te = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"])
      , xe = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi
      , ke = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;
    function Se(t, e, i) {
        var n;
        if (!t.length)
            return t;
        if (i && "function" == typeof i)
            return i(t);
        for (var s = (new window.DOMParser).parseFromString(t, "text/html"), o = Object.keys(e), r = (n = []).concat.apply(n, s.body.querySelectorAll("*")), a = function(t, i) {
            var n, s = r[t], a = s.nodeName.toLowerCase();
            if (!o.includes(a))
                return s.parentNode.removeChild(s),
                "continue";
            var l = (n = []).concat.apply(n, s.attributes)
              , c = [].concat(e["*"] || [], e[a] || []);
            l.forEach((function(t) {
                (function(t, e) {
                    var i = t.nodeName.toLowerCase();
                    if (e.includes(i))
                        return !Te.has(i) || Boolean(t.nodeValue.match(xe) || t.nodeValue.match(ke));
                    for (var n = e.filter((function(t) {
                        return t instanceof RegExp
                    }
                    )), s = 0, o = n.length; s < o; s++)
                        if (i.match(n[s]))
                            return !0;
                    return !1
                }
                )(t, c) || s.removeAttribute(t.nodeName)
            }
            ))
        }, l = 0, c = r.length; l < c; l++)
            a(l);
        return s.body.innerHTML
    }
    var Ce = "tooltip"
      , Ee = new RegExp("(^|\\s)bs-tooltip\\S+","g")
      , Oe = new Set(["sanitize", "allowList", "sanitizeFn"])
      , Pe = {
        animation: "boolean",
        template: "string",
        title: "(string|element|function)",
        trigger: "string",
        delay: "(number|object)",
        html: "boolean",
        selector: "(string|boolean)",
        placement: "(string|function)",
        container: "(string|element|boolean)",
        fallbackPlacements: "(null|array)",
        boundary: "(string|element)",
        customClass: "(string|function)",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        allowList: "object",
        popperConfig: "(null|object)"
    }
      , Ae = {
        AUTO: "auto",
        TOP: "top",
        RIGHT: b ? "left" : "right",
        BOTTOM: "bottom",
        LEFT: b ? "right" : "left"
    }
      , Ie = {
        animation: !0,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        selector: !1,
        placement: "top",
        container: !1,
        fallbackPlacements: null,
        boundary: "clippingParents",
        customClass: "",
        sanitize: !0,
        sanitizeFn: null,
        allowList: {
            "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
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
            img: ["src", "srcset", "alt", "title", "width", "height"],
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
        popperConfig: null
    }
      , De = {
        HIDE: "hide.bs.tooltip",
        HIDDEN: "hidden.bs.tooltip",
        SHOW: "show.bs.tooltip",
        SHOWN: "shown.bs.tooltip",
        INSERTED: "inserted.bs.tooltip",
        CLICK: "click.bs.tooltip",
        FOCUSIN: "focusin.bs.tooltip",
        FOCUSOUT: "focusout.bs.tooltip",
        MOUSEENTER: "mouseenter.bs.tooltip",
        MOUSELEAVE: "mouseleave.bs.tooltip"
    }
      , Le = function(t) {
        function s(e, i) {
            var n;
            if (void 0 === ae)
                throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
            return (n = t.call(this, e) || this)._isEnabled = !0,
            n._timeout = 0,
            n._hoverState = "",
            n._activeTrigger = {},
            n._popper = null,
            n.config = n._getConfig(i),
            n.tip = null,
            n._setListeners(),
            n
        }
        n(s, t);
        var o = s.prototype;
        return o.enable = function() {
            this._isEnabled = !0
        }
        ,
        o.disable = function() {
            this._isEnabled = !1
        }
        ,
        o.toggleEnabled = function() {
            this._isEnabled = !this._isEnabled
        }
        ,
        o.toggle = function(t) {
            if (this._isEnabled)
                if (t) {
                    var e = this.constructor.DATA_KEY
                      , i = x(t.delegateTarget, e);
                    i || (i = new this.constructor(t.delegateTarget,this._getDelegateConfig()),
                    T(t.delegateTarget, e, i)),
                    i._activeTrigger.click = !i._activeTrigger.click,
                    i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i)
                } else {
                    if (this.getTipElement().classList.contains("show"))
                        return void this._leave(null, this);
                    this._enter(null, this)
                }
        }
        ,
        o.dispose = function() {
            clearTimeout(this._timeout),
            j.off(this._element, this.constructor.EVENT_KEY),
            j.off(this._element.closest(".modal"), "hide.bs.modal", this._hideModalHandler),
            this.tip && this.tip.parentNode.removeChild(this.tip),
            this._isEnabled = null,
            this._timeout = null,
            this._hoverState = null,
            this._activeTrigger = null,
            this._popper && this._popper.destroy(),
            this._popper = null,
            this.config = null,
            this.tip = null,
            t.prototype.dispose.call(this)
        }
        ,
        o.show = function() {
            var t = this;
            if ("none" === this._element.style.display)
                throw new Error("Please use show on visible elements");
            if (this.isWithContent() && this._isEnabled) {
                var e = j.trigger(this._element, this.constructor.Event.SHOW)
                  , i = function t(e) {
                    if (!document.documentElement.attachShadow)
                        return null;
                    if ("function" == typeof e.getRootNode) {
                        var i = e.getRootNode();
                        return i instanceof ShadowRoot ? i : null
                    }
                    return e instanceof ShadowRoot ? e : e.parentNode ? t(e.parentNode) : null
                }(this._element)
                  , n = null === i ? this._element.ownerDocument.documentElement.contains(this._element) : i.contains(this._element);
                if (e.defaultPrevented || !n)
                    return;
                var s = this.getTipElement()
                  , o = r(this.constructor.NAME);
                s.setAttribute("id", o),
                this._element.setAttribute("aria-describedby", o),
                this.setContent(),
                this.config.animation && s.classList.add("fade");
                var a = "function" == typeof this.config.placement ? this.config.placement.call(this, s, this._element) : this.config.placement
                  , l = this._getAttachment(a);
                this._addAttachmentClass(l);
                var c = this._getContainer();
                T(s, this.constructor.DATA_KEY, this),
                this._element.ownerDocument.documentElement.contains(this.tip) || c.appendChild(s),
                j.trigger(this._element, this.constructor.Event.INSERTED),
                this._popper = re(this._element, s, this._getPopperConfig(l)),
                s.classList.add("show");
                var u, d, f = "function" == typeof this.config.customClass ? this.config.customClass() : this.config.customClass;
                f && (u = s.classList).add.apply(u, f.split(" ")),
                "ontouchstart"in document.documentElement && (d = []).concat.apply(d, document.body.children).forEach((function(t) {
                    j.on(t, "mouseover", (function() {}
                    ))
                }
                ));
                var m = function() {
                    var e = t._hoverState;
                    t._hoverState = null,
                    j.trigger(t._element, t.constructor.Event.SHOWN),
                    "out" === e && t._leave(null, t)
                };
                if (this.tip.classList.contains("fade")) {
                    var g = h(this.tip);
                    j.one(this.tip, "transitionend", m),
                    p(this.tip, g)
                } else
                    m()
            }
        }
        ,
        o.hide = function() {
            var t = this;
            if (this._popper) {
                var e = this.getTipElement()
                  , i = function() {
                    "show" !== t._hoverState && e.parentNode && e.parentNode.removeChild(e),
                    t._cleanTipClass(),
                    t._element.removeAttribute("aria-describedby"),
                    j.trigger(t._element, t.constructor.Event.HIDDEN),
                    t._popper && (t._popper.destroy(),
                    t._popper = null)
                };
                if (!j.trigger(this._element, this.constructor.Event.HIDE).defaultPrevented) {
                    var n;
                    if (e.classList.remove("show"),
                    "ontouchstart"in document.documentElement && (n = []).concat.apply(n, document.body.children).forEach((function(t) {
                        return j.off(t, "mouseover", g)
                    }
                    )),
                    this._activeTrigger.click = !1,
                    this._activeTrigger.focus = !1,
                    this._activeTrigger.hover = !1,
                    this.tip.classList.contains("fade")) {
                        var s = h(e);
                        j.one(e, "transitionend", i),
                        p(e, s)
                    } else
                        i();
                    this._hoverState = ""
                }
            }
        }
        ,
        o.update = function() {
            null !== this._popper && this._popper.update()
        }
        ,
        o.isWithContent = function() {
            return Boolean(this.getTitle())
        }
        ,
        o.getTipElement = function() {
            if (this.tip)
                return this.tip;
            var t = document.createElement("div");
            return t.innerHTML = this.config.template,
            this.tip = t.children[0],
            this.tip
        }
        ,
        o.setContent = function() {
            var t = this.getTipElement();
            this.setElementContent(Y.findOne(".tooltip-inner", t), this.getTitle()),
            t.classList.remove("fade", "show")
        }
        ,
        o.setElementContent = function(t, e) {
            if (null !== t)
                return "object" == typeof e && d(e) ? (e.jquery && (e = e[0]),
                void (this.config.html ? e.parentNode !== t && (t.innerHTML = "",
                t.appendChild(e)) : t.textContent = e.textContent)) : void (this.config.html ? (this.config.sanitize && (e = Se(e, this.config.allowList, this.config.sanitizeFn)),
                t.innerHTML = e) : t.textContent = e)
        }
        ,
        o.getTitle = function() {
            var t = this._element.getAttribute("data-bs-original-title");
            return t || (t = "function" == typeof this.config.title ? this.config.title.call(this._element) : this.config.title),
            t
        }
        ,
        o.updateAttachment = function(t) {
            return "right" === t ? "end" : "left" === t ? "start" : t
        }
        ,
        o._getPopperConfig = function(t) {
            var e = this
              , n = {
                name: "flip",
                options: {
                    altBoundary: !0
                }
            };
            return this.config.fallbackPlacements && (n.options.fallbackPlacements = this.config.fallbackPlacements),
            i({}, {
                placement: t,
                modifiers: [n, {
                    name: "preventOverflow",
                    options: {
                        rootBoundary: this.config.boundary
                    }
                }, {
                    name: "arrow",
                    options: {
                        element: "." + this.constructor.NAME + "-arrow"
                    }
                }, {
                    name: "onChange",
                    enabled: !0,
                    phase: "afterWrite",
                    fn: function(t) {
                        return e._handlePopperPlacementChange(t)
                    }
                }],
                onFirstUpdate: function(t) {
                    t.options.placement !== t.placement && e._handlePopperPlacementChange(t)
                }
            }, this.config.popperConfig)
        }
        ,
        o._addAttachmentClass = function(t) {
            this.getTipElement().classList.add("bs-tooltip-" + this.updateAttachment(t))
        }
        ,
        o._getContainer = function() {
            return !1 === this.config.container ? document.body : d(this.config.container) ? this.config.container : Y.findOne(this.config.container)
        }
        ,
        o._getAttachment = function(t) {
            return Ae[t.toUpperCase()]
        }
        ,
        o._setListeners = function() {
            var t = this;
            this.config.trigger.split(" ").forEach((function(e) {
                if ("click" === e)
                    j.on(t._element, t.constructor.Event.CLICK, t.config.selector, (function(e) {
                        return t.toggle(e)
                    }
                    ));
                else if ("manual" !== e) {
                    var i = "hover" === e ? t.constructor.Event.MOUSEENTER : t.constructor.Event.FOCUSIN
                      , n = "hover" === e ? t.constructor.Event.MOUSELEAVE : t.constructor.Event.FOCUSOUT;
                    j.on(t._element, i, t.config.selector, (function(e) {
                        return t._enter(e)
                    }
                    )),
                    j.on(t._element, n, t.config.selector, (function(e) {
                        return t._leave(e)
                    }
                    ))
                }
            }
            )),
            this._hideModalHandler = function() {
                t._element && t.hide()
            }
            ,
            j.on(this._element.closest(".modal"), "hide.bs.modal", this._hideModalHandler),
            this.config.selector ? this.config = i({}, this.config, {
                trigger: "manual",
                selector: ""
            }) : this._fixTitle()
        }
        ,
        o._fixTitle = function() {
            var t = this._element.getAttribute("title")
              , e = typeof this._element.getAttribute("data-bs-original-title");
            (t || "string" !== e) && (this._element.setAttribute("data-bs-original-title", t || ""),
            !t || this._element.getAttribute("aria-label") || this._element.textContent || this._element.setAttribute("aria-label", t),
            this._element.setAttribute("title", ""))
        }
        ,
        o._enter = function(t, e) {
            var i = this.constructor.DATA_KEY;
            (e = e || x(t.delegateTarget, i)) || (e = new this.constructor(t.delegateTarget,this._getDelegateConfig()),
            T(t.delegateTarget, i, e)),
            t && (e._activeTrigger["focusin" === t.type ? "focus" : "hover"] = !0),
            e.getTipElement().classList.contains("show") || "show" === e._hoverState ? e._hoverState = "show" : (clearTimeout(e._timeout),
            e._hoverState = "show",
            e.config.delay && e.config.delay.show ? e._timeout = setTimeout((function() {
                "show" === e._hoverState && e.show()
            }
            ), e.config.delay.show) : e.show())
        }
        ,
        o._leave = function(t, e) {
            var i = this.constructor.DATA_KEY;
            (e = e || x(t.delegateTarget, i)) || (e = new this.constructor(t.delegateTarget,this._getDelegateConfig()),
            T(t.delegateTarget, i, e)),
            t && (e._activeTrigger["focusout" === t.type ? "focus" : "hover"] = !1),
            e._isWithActiveTrigger() || (clearTimeout(e._timeout),
            e._hoverState = "out",
            e.config.delay && e.config.delay.hide ? e._timeout = setTimeout((function() {
                "out" === e._hoverState && e.hide()
            }
            ), e.config.delay.hide) : e.hide())
        }
        ,
        o._isWithActiveTrigger = function() {
            for (var t in this._activeTrigger)
                if (this._activeTrigger[t])
                    return !0;
            return !1
        }
        ,
        o._getConfig = function(t) {
            var e = q.getDataAttributes(this._element);
            return Object.keys(e).forEach((function(t) {
                Oe.has(t) && delete e[t]
            }
            )),
            t && "object" == typeof t.container && t.container.jquery && (t.container = t.container[0]),
            "number" == typeof (t = i({}, this.constructor.Default, e, "object" == typeof t && t ? t : {})).delay && (t.delay = {
                show: t.delay,
                hide: t.delay
            }),
            "number" == typeof t.title && (t.title = t.title.toString()),
            "number" == typeof t.content && (t.content = t.content.toString()),
            f(Ce, t, this.constructor.DefaultType),
            t.sanitize && (t.template = Se(t.template, t.allowList, t.sanitizeFn)),
            t
        }
        ,
        o._getDelegateConfig = function() {
            var t = {};
            if (this.config)
                for (var e in this.config)
                    this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
            return t
        }
        ,
        o._cleanTipClass = function() {
            var t = this.getTipElement()
              , e = t.getAttribute("class").match(Ee);
            null !== e && e.length > 0 && e.map((function(t) {
                return t.trim()
            }
            )).forEach((function(e) {
                return t.classList.remove(e)
            }
            ))
        }
        ,
        o._handlePopperPlacementChange = function(t) {
            var e = t.state;
            e && (this.tip = e.elements.popper,
            this._cleanTipClass(),
            this._addAttachmentClass(this._getAttachment(e.placement)))
        }
        ,
        s.jQueryInterface = function(t) {
            return this.each((function() {
                var e = x(this, "bs.tooltip")
                  , i = "object" == typeof t && t;
                if ((e || !/dispose|hide/.test(t)) && (e || (e = new s(this,i)),
                "string" == typeof t)) {
                    if (void 0 === e[t])
                        throw new TypeError('No method named "' + t + '"');
                    e[t]()
                }
            }
            ))
        }
        ,
        e(s, null, [{
            key: "Default",
            get: function() {
                return Ie
            }
        }, {
            key: "NAME",
            get: function() {
                return Ce
            }
        }, {
            key: "DATA_KEY",
            get: function() {
                return "bs.tooltip"
            }
        }, {
            key: "Event",
            get: function() {
                return De
            }
        }, {
            key: "EVENT_KEY",
            get: function() {
                return ".bs.tooltip"
            }
        }, {
            key: "DefaultType",
            get: function() {
                return Pe
            }
        }]),
        s
    }(N);
    y((function() {
        var t = v();
        if (t) {
            var e = t.fn[Ce];
            t.fn[Ce] = Le.jQueryInterface,
            t.fn[Ce].Constructor = Le,
            t.fn[Ce].noConflict = function() {
                return t.fn[Ce] = e,
                Le.jQueryInterface
            }
        }
    }
    ));
    var Me = "popover"
      , ze = new RegExp("(^|\\s)bs-popover\\S+","g")
      , Re = i({}, Le.Default, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
    })
      , je = i({}, Le.DefaultType, {
        content: "(string|element|function)"
    })
      , Ne = {
        HIDE: "hide.bs.popover",
        HIDDEN: "hidden.bs.popover",
        SHOW: "show.bs.popover",
        SHOWN: "shown.bs.popover",
        INSERTED: "inserted.bs.popover",
        CLICK: "click.bs.popover",
        FOCUSIN: "focusin.bs.popover",
        FOCUSOUT: "focusout.bs.popover",
        MOUSEENTER: "mouseenter.bs.popover",
        MOUSELEAVE: "mouseleave.bs.popover"
    }
      , $e = function(t) {
        function i() {
            return t.apply(this, arguments) || this
        }
        n(i, t);
        var s = i.prototype;
        return s.isWithContent = function() {
            return this.getTitle() || this._getContent()
        }
        ,
        s.setContent = function() {
            var t = this.getTipElement();
            this.setElementContent(Y.findOne(".popover-header", t), this.getTitle());
            var e = this._getContent();
            "function" == typeof e && (e = e.call(this._element)),
            this.setElementContent(Y.findOne(".popover-body", t), e),
            t.classList.remove("fade", "show")
        }
        ,
        s._addAttachmentClass = function(t) {
            this.getTipElement().classList.add("bs-popover-" + this.updateAttachment(t))
        }
        ,
        s._getContent = function() {
            return this._element.getAttribute("data-bs-content") || this.config.content
        }
        ,
        s._cleanTipClass = function() {
            var t = this.getTipElement()
              , e = t.getAttribute("class").match(ze);
            null !== e && e.length > 0 && e.map((function(t) {
                return t.trim()
            }
            )).forEach((function(e) {
                return t.classList.remove(e)
            }
            ))
        }
        ,
        i.jQueryInterface = function(t) {
            return this.each((function() {
                var e = x(this, "bs.popover")
                  , n = "object" == typeof t ? t : null;
                if ((e || !/dispose|hide/.test(t)) && (e || (e = new i(this,n),
                T(this, "bs.popover", e)),
                "string" == typeof t)) {
                    if (void 0 === e[t])
                        throw new TypeError('No method named "' + t + '"');
                    e[t]()
                }
            }
            ))
        }
        ,
        e(i, null, [{
            key: "Default",
            get: function() {
                return Re
            }
        }, {
            key: "NAME",
            get: function() {
                return Me
            }
        }, {
            key: "DATA_KEY",
            get: function() {
                return "bs.popover"
            }
        }, {
            key: "Event",
            get: function() {
                return Ne
            }
        }, {
            key: "EVENT_KEY",
            get: function() {
                return ".bs.popover"
            }
        }, {
            key: "DefaultType",
            get: function() {
                return je
            }
        }]),
        i
    }(Le);
    y((function() {
        var t = v();
        if (t) {
            var e = t.fn[Me];
            t.fn[Me] = $e.jQueryInterface,
            t.fn[Me].Constructor = $e,
            t.fn[Me].noConflict = function() {
                return t.fn[Me] = e,
                $e.jQueryInterface
            }
        }
    }
    ));
    var Fe = "scrollspy"
      , We = {
        offset: 10,
        method: "auto",
        target: ""
    }
      , He = {
        offset: "number",
        method: "string",
        target: "(string|element)"
    }
      , Be = function(t) {
        function s(e, i) {
            var n;
            return (n = t.call(this, e) || this)._scrollElement = "BODY" === e.tagName ? window : e,
            n._config = n._getConfig(i),
            n._selector = n._config.target + " .nav-link, " + n._config.target + " .list-group-item, " + n._config.target + " .dropdown-item",
            n._offsets = [],
            n._targets = [],
            n._activeTarget = null,
            n._scrollHeight = 0,
            j.on(n._scrollElement, "scroll.bs.scrollspy", (function(t) {
                return n._process(t)
            }
            )),
            n.refresh(),
            n._process(),
            n
        }
        n(s, t);
        var o = s.prototype;
        return o.refresh = function() {
            var t = this
              , e = this._scrollElement === this._scrollElement.window ? "offset" : "position"
              , i = "auto" === this._config.method ? e : this._config.method
              , n = "position" === i ? this._getScrollTop() : 0;
            this._offsets = [],
            this._targets = [],
            this._scrollHeight = this._getScrollHeight(),
            Y.find(this._selector).map((function(t) {
                var e = l(t)
                  , s = e ? Y.findOne(e) : null;
                if (s) {
                    var o = s.getBoundingClientRect();
                    if (o.width || o.height)
                        return [q[i](s).top + n, e]
                }
                return null
            }
            )).filter((function(t) {
                return t
            }
            )).sort((function(t, e) {
                return t[0] - e[0]
            }
            )).forEach((function(e) {
                t._offsets.push(e[0]),
                t._targets.push(e[1])
            }
            ))
        }
        ,
        o.dispose = function() {
            t.prototype.dispose.call(this),
            j.off(this._scrollElement, ".bs.scrollspy"),
            this._scrollElement = null,
            this._config = null,
            this._selector = null,
            this._offsets = null,
            this._targets = null,
            this._activeTarget = null,
            this._scrollHeight = null
        }
        ,
        o._getConfig = function(t) {
            if ("string" != typeof (t = i({}, We, "object" == typeof t && t ? t : {})).target && d(t.target)) {
                var e = t.target.id;
                e || (e = r(Fe),
                t.target.id = e),
                t.target = "#" + e
            }
            return f(Fe, t, He),
            t
        }
        ,
        o._getScrollTop = function() {
            return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
        }
        ,
        o._getScrollHeight = function() {
            return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
        }
        ,
        o._getOffsetHeight = function() {
            return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
        }
        ,
        o._process = function() {
            var t = this._getScrollTop() + this._config.offset
              , e = this._getScrollHeight()
              , i = this._config.offset + e - this._getOffsetHeight();
            if (this._scrollHeight !== e && this.refresh(),
            t >= i) {
                var n = this._targets[this._targets.length - 1];
                this._activeTarget !== n && this._activate(n)
            } else {
                if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0)
                    return this._activeTarget = null,
                    void this._clear();
                for (var s = this._offsets.length; s--; )
                    this._activeTarget !== this._targets[s] && t >= this._offsets[s] && (void 0 === this._offsets[s + 1] || t < this._offsets[s + 1]) && this._activate(this._targets[s])
            }
        }
        ,
        o._activate = function(t) {
            this._activeTarget = t,
            this._clear();
            var e = this._selector.split(",").map((function(e) {
                return e + '[data-bs-target="' + t + '"],' + e + '[href="' + t + '"]'
            }
            ))
              , i = Y.findOne(e.join(","));
            i.classList.contains("dropdown-item") ? (Y.findOne(".dropdown-toggle", i.closest(".dropdown")).classList.add("active"),
            i.classList.add("active")) : (i.classList.add("active"),
            Y.parents(i, ".nav, .list-group").forEach((function(t) {
                Y.prev(t, ".nav-link, .list-group-item").forEach((function(t) {
                    return t.classList.add("active")
                }
                )),
                Y.prev(t, ".nav-item").forEach((function(t) {
                    Y.children(t, ".nav-link").forEach((function(t) {
                        return t.classList.add("active")
                    }
                    ))
                }
                ))
            }
            ))),
            j.trigger(this._scrollElement, "activate.bs.scrollspy", {
                relatedTarget: t
            })
        }
        ,
        o._clear = function() {
            Y.find(this._selector).filter((function(t) {
                return t.classList.contains("active")
            }
            )).forEach((function(t) {
                return t.classList.remove("active")
            }
            ))
        }
        ,
        s.jQueryInterface = function(t) {
            return this.each((function() {
                var e = x(this, "bs.scrollspy");
                if (e || (e = new s(this,"object" == typeof t && t)),
                "string" == typeof t) {
                    if (void 0 === e[t])
                        throw new TypeError('No method named "' + t + '"');
                    e[t]()
                }
            }
            ))
        }
        ,
        e(s, null, [{
            key: "Default",
            get: function() {
                return We
            }
        }, {
            key: "DATA_KEY",
            get: function() {
                return "bs.scrollspy"
            }
        }]),
        s
    }(N);
    j.on(window, "load.bs.scrollspy.data-api", (function() {
        Y.find('[data-bs-spy="scroll"]').forEach((function(t) {
            return new Be(t,q.getDataAttributes(t))
        }
        ))
    }
    )),
    y((function() {
        var t = v();
        if (t) {
            var e = t.fn[Fe];
            t.fn[Fe] = Be.jQueryInterface,
            t.fn[Fe].Constructor = Be,
            t.fn[Fe].noConflict = function() {
                return t.fn[Fe] = e,
                Be.jQueryInterface
            }
        }
    }
    ));
    var qe = function(t) {
        function i() {
            return t.apply(this, arguments) || this
        }
        n(i, t);
        var s = i.prototype;
        return s.show = function() {
            var t = this;
            if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.classList.contains("active") || this._element.classList.contains("disabled"))) {
                var e, i = c(this._element), n = this._element.closest(".nav, .list-group");
                if (n) {
                    var s = "UL" === n.nodeName || "OL" === n.nodeName ? ":scope > li > .active" : ".active";
                    e = (e = Y.find(s, n))[e.length - 1]
                }
                var o = null;
                if (e && (o = j.trigger(e, "hide.bs.tab", {
                    relatedTarget: this._element
                })),
                !(j.trigger(this._element, "show.bs.tab", {
                    relatedTarget: e
                }).defaultPrevented || null !== o && o.defaultPrevented)) {
                    this._activate(this._element, n);
                    var r = function() {
                        j.trigger(e, "hidden.bs.tab", {
                            relatedTarget: t._element
                        }),
                        j.trigger(t._element, "shown.bs.tab", {
                            relatedTarget: e
                        })
                    };
                    i ? this._activate(i, i.parentNode, r) : r()
                }
            }
        }
        ,
        s._activate = function(t, e, i) {
            var n = this
              , s = (!e || "UL" !== e.nodeName && "OL" !== e.nodeName ? Y.children(e, ".active") : Y.find(":scope > li > .active", e))[0]
              , o = i && s && s.classList.contains("fade")
              , r = function() {
                return n._transitionComplete(t, s, i)
            };
            if (s && o) {
                var a = h(s);
                s.classList.remove("show"),
                j.one(s, "transitionend", r),
                p(s, a)
            } else
                r()
        }
        ,
        s._transitionComplete = function(t, e, i) {
            if (e) {
                e.classList.remove("active");
                var n = Y.findOne(":scope > .dropdown-menu .active", e.parentNode);
                n && n.classList.remove("active"),
                "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1)
            }
            t.classList.add("active"),
            "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0),
            _(t),
            t.classList.contains("fade") && t.classList.add("show"),
            t.parentNode && t.parentNode.classList.contains("dropdown-menu") && (t.closest(".dropdown") && Y.find(".dropdown-toggle").forEach((function(t) {
                return t.classList.add("active")
            }
            )),
            t.setAttribute("aria-expanded", !0)),
            i && i()
        }
        ,
        i.jQueryInterface = function(t) {
            return this.each((function() {
                var e = x(this, "bs.tab") || new i(this);
                if ("string" == typeof t) {
                    if (void 0 === e[t])
                        throw new TypeError('No method named "' + t + '"');
                    e[t]()
                }
            }
            ))
        }
        ,
        e(i, null, [{
            key: "DATA_KEY",
            get: function() {
                return "bs.tab"
            }
        }]),
        i
    }(N);
    j.on(document, "click.bs.tab.data-api", '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', (function(t) {
        t.preventDefault(),
        (x(this, "bs.tab") || new qe(this)).show()
    }
    )),
    y((function() {
        var t = v();
        if (t) {
            var e = t.fn.tab;
            t.fn.tab = qe.jQueryInterface,
            t.fn.tab.Constructor = qe,
            t.fn.tab.noConflict = function() {
                return t.fn.tab = e,
                qe.jQueryInterface
            }
        }
    }
    ));
    var Ye = {
        animation: "boolean",
        autohide: "boolean",
        delay: "number"
    }
      , Xe = {
        animation: !0,
        autohide: !0,
        delay: 5e3
    }
      , Ue = function(t) {
        function s(e, i) {
            var n;
            return (n = t.call(this, e) || this)._config = n._getConfig(i),
            n._timeout = null,
            n._setListeners(),
            n
        }
        n(s, t);
        var o = s.prototype;
        return o.show = function() {
            var t = this;
            if (!j.trigger(this._element, "show.bs.toast").defaultPrevented) {
                this._clearTimeout(),
                this._config.animation && this._element.classList.add("fade");
                var e = function() {
                    t._element.classList.remove("showing"),
                    t._element.classList.add("show"),
                    j.trigger(t._element, "shown.bs.toast"),
                    t._config.autohide && (t._timeout = setTimeout((function() {
                        t.hide()
                    }
                    ), t._config.delay))
                };
                if (this._element.classList.remove("hide"),
                _(this._element),
                this._element.classList.add("showing"),
                this._config.animation) {
                    var i = h(this._element);
                    j.one(this._element, "transitionend", e),
                    p(this._element, i)
                } else
                    e()
            }
        }
        ,
        o.hide = function() {
            var t = this;
            if (this._element.classList.contains("show") && !j.trigger(this._element, "hide.bs.toast").defaultPrevented) {
                var e = function() {
                    t._element.classList.add("hide"),
                    j.trigger(t._element, "hidden.bs.toast")
                };
                if (this._element.classList.remove("show"),
                this._config.animation) {
                    var i = h(this._element);
                    j.one(this._element, "transitionend", e),
                    p(this._element, i)
                } else
                    e()
            }
        }
        ,
        o.dispose = function() {
            this._clearTimeout(),
            this._element.classList.contains("show") && this._element.classList.remove("show"),
            j.off(this._element, "click.dismiss.bs.toast"),
            t.prototype.dispose.call(this),
            this._config = null
        }
        ,
        o._getConfig = function(t) {
            return t = i({}, Xe, q.getDataAttributes(this._element), "object" == typeof t && t ? t : {}),
            f("toast", t, this.constructor.DefaultType),
            t
        }
        ,
        o._setListeners = function() {
            var t = this;
            j.on(this._element, "click.dismiss.bs.toast", '[data-bs-dismiss="toast"]', (function() {
                return t.hide()
            }
            ))
        }
        ,
        o._clearTimeout = function() {
            clearTimeout(this._timeout),
            this._timeout = null
        }
        ,
        s.jQueryInterface = function(t) {
            return this.each((function() {
                var e = x(this, "bs.toast");
                if (e || (e = new s(this,"object" == typeof t && t)),
                "string" == typeof t) {
                    if (void 0 === e[t])
                        throw new TypeError('No method named "' + t + '"');
                    e[t](this)
                }
            }
            ))
        }
        ,
        e(s, null, [{
            key: "DefaultType",
            get: function() {
                return Ye
            }
        }, {
            key: "Default",
            get: function() {
                return Xe
            }
        }, {
            key: "DATA_KEY",
            get: function() {
                return "bs.toast"
            }
        }]),
        s
    }(N);
    return y((function() {
        var t = v();
        if (t) {
            var e = t.fn.toast;
            t.fn.toast = Ue.jQueryInterface,
            t.fn.toast.Constructor = Ue,
            t.fn.toast.noConflict = function() {
                return t.fn.toast = e,
                Ue.jQueryInterface
            }
        }
    }
    )),
    {
        Alert: F,
        Button: W,
        Carousel: K,
        Collapse: tt,
        Dropdown: ve,
        Modal: we,
        Popover: $e,
        ScrollSpy: Be,
        Tab: qe,
        Toast: Ue,
        Tooltip: Le
    }
}
)),
function(t) {
    if ("function" == typeof define && define.amd)
        define(["jquery"], t);
    else if ("object" == typeof module && module.exports) {
        var e = require("jquery");
        t(e),
        module.exports = e
    } else
        t(jQuery)
}((function(t) {
    function e(t) {
        this.init(t)
    }
    e.prototype = {
        value: 0,
        size: 100,
        startAngle: -Math.PI,
        thickness: "auto",
        fill: {
            gradient: ["#3aeabb", "#fdd250"]
        },
        emptyFill: "rgba(0, 0, 0, .1)",
        animation: {
            duration: 1200,
            easing: "circleProgressEasing"
        },
        animationStartValue: 0,
        reverse: !1,
        lineCap: "butt",
        insertMode: "prepend",
        constructor: e,
        el: null,
        canvas: null,
        ctx: null,
        radius: 0,
        arcFill: null,
        lastFrameValue: 0,
        init: function(e) {
            t.extend(this, e),
            this.radius = this.size / 2,
            this.initWidget(),
            this.initFill(),
            this.draw(),
            this.el.trigger("circle-inited")
        },
        initWidget: function() {
            this.canvas || (this.canvas = t("<canvas>")["prepend" == this.insertMode ? "prependTo" : "appendTo"](this.el)[0]);
            var e = this.canvas;
            if (e.width = this.size,
            e.height = this.size,
            this.ctx = e.getContext("2d"),
            window.devicePixelRatio > 1) {
                var i = window.devicePixelRatio;
                e.style.width = e.style.height = this.size + "px",
                e.width = e.height = this.size * i,
                this.ctx.scale(i, i)
            }
        },
        initFill: function() {
            var e, i = this, n = this.fill, s = this.ctx, o = this.size;
            if (!n)
                throw Error("The fill is not specified!");
            if ("string" == typeof n && (n = {
                color: n
            }),
            n.color && (this.arcFill = n.color),
            n.gradient) {
                var r = n.gradient;
                if (1 == r.length)
                    this.arcFill = r[0];
                else if (r.length > 1) {
                    for (var a = n.gradientAngle || 0, l = n.gradientDirection || [o / 2 * (1 - Math.cos(a)), o / 2 * (1 + Math.sin(a)), o / 2 * (1 + Math.cos(a)), o / 2 * (1 - Math.sin(a))], c = s.createLinearGradient.apply(s, l), h = 0; h < r.length; h++) {
                        var u = r[h]
                          , d = h / (r.length - 1);
                        t.isArray(u) && (d = u[1],
                        u = u[0]),
                        c.addColorStop(d, u)
                    }
                    this.arcFill = c
                }
            }
            function p() {
                var n = t("<canvas>")[0];
                n.width = i.size,
                n.height = i.size,
                n.getContext("2d").drawImage(e, 0, 0, o, o),
                i.arcFill = i.ctx.createPattern(n, "no-repeat"),
                i.drawFrame(i.lastFrameValue)
            }
            n.image && (n.image instanceof Image ? e = n.image : (e = new Image).src = n.image,
            e.complete ? p() : e.onload = p)
        },
        draw: function() {
            this.animation ? this.drawAnimated(this.value) : this.drawFrame(this.value)
        },
        drawFrame: function(t) {
            this.lastFrameValue = t,
            this.ctx.clearRect(0, 0, this.size, this.size),
            this.drawEmptyArc(t),
            this.drawArc(t)
        },
        drawArc: function(t) {
            if (0 !== t) {
                var e = this.ctx
                  , i = this.radius
                  , n = this.getThickness()
                  , s = this.startAngle;
                e.save(),
                e.beginPath(),
                this.reverse ? e.arc(i, i, i - n / 2, s - 2 * Math.PI * t, s) : e.arc(i, i, i - n / 2, s, s + 2 * Math.PI * t),
                e.lineWidth = n,
                e.lineCap = this.lineCap,
                e.strokeStyle = this.arcFill,
                e.stroke(),
                e.restore()
            }
        },
        drawEmptyArc: function(t) {
            var e = this.ctx
              , i = this.radius
              , n = this.getThickness()
              , s = this.startAngle;
            t < 1 && (e.save(),
            e.beginPath(),
            t <= 0 ? e.arc(i, i, i - n / 2, 0, 2 * Math.PI) : this.reverse ? e.arc(i, i, i - n / 2, s, s - 2 * Math.PI * t) : e.arc(i, i, i - n / 2, s + 2 * Math.PI * t, s),
            e.lineWidth = n,
            e.strokeStyle = this.emptyFill,
            e.stroke(),
            e.restore())
        },
        drawAnimated: function(e) {
            var i = this
              , n = this.el
              , s = t(this.canvas);
            s.stop(!0, !1),
            n.trigger("circle-animation-start"),
            s.css({
                animationProgress: 0
            }).animate({
                animationProgress: 1
            }, t.extend({}, this.animation, {
                step: function(t) {
                    var s = i.animationStartValue * (1 - t) + e * t;
                    i.drawFrame(s),
                    n.trigger("circle-animation-progress", [t, s])
                }
            })).promise().always((function() {
                n.trigger("circle-animation-end")
            }
            ))
        },
        getThickness: function() {
            return t.isNumeric(this.thickness) ? this.thickness : this.size / 14
        },
        getValue: function() {
            return this.value
        },
        setValue: function(t) {
            this.animation && (this.animationStartValue = this.lastFrameValue),
            this.value = t,
            this.draw()
        }
    },
    t.circleProgress = {
        defaults: e.prototype
    },
    t.easing.circleProgressEasing = function(t) {
        return t < .5 ? .5 * (t *= 2) * t * t : 1 - .5 * (t = 2 - 2 * t) * t * t
    }
    ,
    t.fn.circleProgress = function(i, n) {
        var s = "circle-progress"
          , o = this.data(s);
        if ("widget" == i) {
            if (!o)
                throw Error('Calling "widget" method on not initialized instance is forbidden');
            return o.canvas
        }
        if ("value" == i) {
            if (!o)
                throw Error('Calling "value" method on not initialized instance is forbidden');
            if (void 0 === n)
                return o.getValue();
            var r = arguments[1];
            return this.each((function() {
                t(this).data(s).setValue(r)
            }
            ))
        }
        return this.each((function() {
            var n = t(this)
              , o = n.data(s)
              , r = t.isPlainObject(i) ? i : {};
            if (o)
                o.init(r);
            else {
                var a = t.extend({}, n.data());
                "string" == typeof a.fill && (a.fill = JSON.parse(a.fill)),
                "string" == typeof a.animation && (a.animation = JSON.parse(a.animation)),
                (r = t.extend(a, r)).el = n,
                o = new e(r),
                n.data(s, o)
            }
        }
        ))
    }
}
)),
function(t, e) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
}("undefined" != typeof window ? window : this, (function() {
    function t() {}
    var e = t.prototype;
    return e.on = function(t, e) {
        if (t && e) {
            var i = this._events = this._events || {}
              , n = i[t] = i[t] || [];
            return -1 == n.indexOf(e) && n.push(e),
            this
        }
    }
    ,
    e.once = function(t, e) {
        if (t && e) {
            this.on(t, e);
            var i = this._onceEvents = this._onceEvents || {};
            return (i[t] = i[t] || {})[e] = !0,
            this
        }
    }
    ,
    e.off = function(t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            var n = i.indexOf(e);
            return -1 != n && i.splice(n, 1),
            this
        }
    }
    ,
    e.emitEvent = function(t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            i = i.slice(0),
            e = e || [];
            for (var n = this._onceEvents && this._onceEvents[t], s = 0; s < i.length; s++) {
                var o = i[s];
                n && n[o] && (this.off(t, o),
                delete n[o]),
                o.apply(this, e)
            }
            return this
        }
    }
    ,
    e.allOff = function() {
        delete this._events,
        delete this._onceEvents
    }
    ,
    t
}
)),
function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["ev-emitter/ev-emitter"], (function(i) {
        return e(t, i)
    }
    )) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter")) : t.imagesLoaded = e(t, t.EvEmitter)
}("undefined" != typeof window ? window : this, (function(t, e) {
    function i(t, e) {
        for (var i in e)
            t[i] = e[i];
        return t
    }
    function n(t, e, s) {
        if (!(this instanceof n))
            return new n(t,e,s);
        var o, c = t;
        return "string" == typeof t && (c = document.querySelectorAll(t)),
        c ? (this.elements = (o = c,
        Array.isArray(o) ? o : "object" == typeof o && "number" == typeof o.length ? l.call(o) : [o]),
        this.options = i({}, this.options),
        "function" == typeof e ? s = e : i(this.options, e),
        s && this.on("always", s),
        this.getImages(),
        r && (this.jqDeferred = new r.Deferred),
        void setTimeout(this.check.bind(this))) : void a.error("Bad element for imagesLoaded " + (c || t))
    }
    function s(t) {
        this.img = t
    }
    function o(t, e) {
        this.url = t,
        this.element = e,
        this.img = new Image
    }
    var r = t.jQuery
      , a = t.console
      , l = Array.prototype.slice;
    (n.prototype = Object.create(e.prototype)).options = {},
    n.prototype.getImages = function() {
        this.images = [],
        this.elements.forEach(this.addElementImages, this)
    }
    ,
    n.prototype.addElementImages = function(t) {
        "IMG" == t.nodeName && this.addImage(t),
        !0 === this.options.background && this.addElementBackgroundImages(t);
        var e = t.nodeType;
        if (e && c[e]) {
            for (var i = t.querySelectorAll("img"), n = 0; n < i.length; n++) {
                var s = i[n];
                this.addImage(s)
            }
            if ("string" == typeof this.options.background) {
                var o = t.querySelectorAll(this.options.background);
                for (n = 0; n < o.length; n++) {
                    var r = o[n];
                    this.addElementBackgroundImages(r)
                }
            }
        }
    }
    ;
    var c = {
        1: !0,
        9: !0,
        11: !0
    };
    return n.prototype.addElementBackgroundImages = function(t) {
        var e = getComputedStyle(t);
        if (e)
            for (var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(e.backgroundImage); null !== n; ) {
                var s = n && n[2];
                s && this.addBackground(s, t),
                n = i.exec(e.backgroundImage)
            }
    }
    ,
    n.prototype.addImage = function(t) {
        var e = new s(t);
        this.images.push(e)
    }
    ,
    n.prototype.addBackground = function(t, e) {
        var i = new o(t,e);
        this.images.push(i)
    }
    ,
    n.prototype.check = function() {
        function t(t, i, n) {
            setTimeout((function() {
                e.progress(t, i, n)
            }
            ))
        }
        var e = this;
        return this.progressedCount = 0,
        this.hasAnyBroken = !1,
        this.images.length ? void this.images.forEach((function(e) {
            e.once("progress", t),
            e.check()
        }
        )) : void this.complete()
    }
    ,
    n.prototype.progress = function(t, e, i) {
        this.progressedCount++,
        this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded,
        this.emitEvent("progress", [this, t, e]),
        this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, t),
        this.progressedCount == this.images.length && this.complete(),
        this.options.debug && a && a.log("progress: " + i, t, e)
    }
    ,
    n.prototype.complete = function() {
        var t = this.hasAnyBroken ? "fail" : "done";
        if (this.isComplete = !0,
        this.emitEvent(t, [this]),
        this.emitEvent("always", [this]),
        this.jqDeferred) {
            var e = this.hasAnyBroken ? "reject" : "resolve";
            this.jqDeferred[e](this)
        }
    }
    ,
    (s.prototype = Object.create(e.prototype)).check = function() {
        return this.getIsImageComplete() ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image,
        this.proxyImage.addEventListener("load", this),
        this.proxyImage.addEventListener("error", this),
        this.img.addEventListener("load", this),
        this.img.addEventListener("error", this),
        void (this.proxyImage.src = this.img.src))
    }
    ,
    s.prototype.getIsImageComplete = function() {
        return this.img.complete && this.img.naturalWidth
    }
    ,
    s.prototype.confirm = function(t, e) {
        this.isLoaded = t,
        this.emitEvent("progress", [this, this.img, e])
    }
    ,
    s.prototype.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }
    ,
    s.prototype.onload = function() {
        this.confirm(!0, "onload"),
        this.unbindEvents()
    }
    ,
    s.prototype.onerror = function() {
        this.confirm(!1, "onerror"),
        this.unbindEvents()
    }
    ,
    s.prototype.unbindEvents = function() {
        this.proxyImage.removeEventListener("load", this),
        this.proxyImage.removeEventListener("error", this),
        this.img.removeEventListener("load", this),
        this.img.removeEventListener("error", this)
    }
    ,
    (o.prototype = Object.create(s.prototype)).check = function() {
        this.img.addEventListener("load", this),
        this.img.addEventListener("error", this),
        this.img.src = this.url,
        this.getIsImageComplete() && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"),
        this.unbindEvents())
    }
    ,
    o.prototype.unbindEvents = function() {
        this.img.removeEventListener("load", this),
        this.img.removeEventListener("error", this)
    }
    ,
    o.prototype.confirm = function(t, e) {
        this.isLoaded = t,
        this.emitEvent("progress", [this, this.element, e])
    }
    ,
    n.makeJQueryPlugin = function(e) {
        (e = e || t.jQuery) && ((r = e).fn.imagesLoaded = function(t, e) {
            return new n(this,t,e).jqDeferred.promise(r(this))
        }
        )
    }
    ,
    n.makeJQueryPlugin(),
    n
}
)),
function(t, e) {
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], (function(i) {
        return e(t, i)
    }
    )) : "object" == typeof module && module.exports ? module.exports = e(t, require("jquery")) : t.jQueryBridget = e(t, t.jQuery)
}(window, (function(t, e) {
    "use strict";
    function i(i, o, a) {
        (a = a || e || t.jQuery) && (o.prototype.option || (o.prototype.option = function(t) {
            a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t))
        }
        ),
        a.fn[i] = function(t) {
            if ("string" != typeof t)
                return u = t,
                this.each((function(t, e) {
                    var n = a.data(e, i);
                    n ? (n.option(u),
                    n._init()) : (n = new o(e,u),
                    a.data(e, i, n))
                }
                )),
                this;
            var e, n, l, c, h, u, d = s.call(arguments, 1);
            return l = d,
            h = "$()." + i + '("' + (n = t) + '")',
            (e = this).each((function(t, e) {
                var s = a.data(e, i);
                if (s) {
                    var o = s[n];
                    if (o && "_" != n.charAt(0)) {
                        var u = o.apply(s, l);
                        c = void 0 === c ? u : c
                    } else
                        r(h + " is not a valid method")
                } else
                    r(i + " not initialized. Cannot call methods, i.e. " + h)
            }
            )),
            void 0 !== c ? c : e
        }
        ,
        n(a))
    }
    function n(t) {
        !t || t && t.bridget || (t.bridget = i)
    }
    var s = Array.prototype.slice
      , o = t.console
      , r = void 0 === o ? function() {}
    : function(t) {
        o.error(t)
    }
    ;
    return n(e || t.jQuery),
    i
}
)),
function(t, e) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
}("undefined" != typeof window ? window : this, (function() {
    function t() {}
    var e = t.prototype;
    return e.on = function(t, e) {
        if (t && e) {
            var i = this._events = this._events || {}
              , n = i[t] = i[t] || [];
            return -1 == n.indexOf(e) && n.push(e),
            this
        }
    }
    ,
    e.once = function(t, e) {
        if (t && e) {
            this.on(t, e);
            var i = this._onceEvents = this._onceEvents || {};
            return (i[t] = i[t] || {})[e] = !0,
            this
        }
    }
    ,
    e.off = function(t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            var n = i.indexOf(e);
            return -1 != n && i.splice(n, 1),
            this
        }
    }
    ,
    e.emitEvent = function(t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            i = i.slice(0),
            e = e || [];
            for (var n = this._onceEvents && this._onceEvents[t], s = 0; s < i.length; s++) {
                var o = i[s];
                n && n[o] && (this.off(t, o),
                delete n[o]),
                o.apply(this, e)
            }
            return this
        }
    }
    ,
    e.allOff = function() {
        delete this._events,
        delete this._onceEvents
    }
    ,
    t
}
)),
function(t, e) {
    "function" == typeof define && define.amd ? define("get-size/get-size", e) : "object" == typeof module && module.exports ? module.exports = e() : t.getSize = e()
}(window, (function() {
    "use strict";
    function t(t) {
        var e = parseFloat(t);
        return -1 == t.indexOf("%") && !isNaN(e) && e
    }
    function e(t) {
        var e = getComputedStyle(t);
        return e || n("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"),
        e
    }
    var i, n = "undefined" == typeof console ? function() {}
    : function(t) {
        console.error(t)
    }
    , s = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"], o = s.length, r = !1;
    return function n(a) {
        if (function() {
            if (!r) {
                r = !0;
                var s = document.createElement("div");
                s.style.width = "200px",
                s.style.padding = "1px 2px 3px 4px",
                s.style.borderStyle = "solid",
                s.style.borderWidth = "1px 2px 3px 4px",
                s.style.boxSizing = "border-box";
                var o = document.body || document.documentElement;
                o.appendChild(s);
                var a = e(s);
                i = 200 == Math.round(t(a.width)),
                n.isBoxSizeOuter = i,
                o.removeChild(s)
            }
        }(),
        "string" == typeof a && (a = document.querySelector(a)),
        a && "object" == typeof a && a.nodeType) {
            var l = e(a);
            if ("none" == l.display)
                return function() {
                    for (var t = {
                        width: 0,
                        height: 0,
                        innerWidth: 0,
                        innerHeight: 0,
                        outerWidth: 0,
                        outerHeight: 0
                    }, e = 0; e < o; e++)
                        t[s[e]] = 0;
                    return t
                }();
            var c = {};
            c.width = a.offsetWidth,
            c.height = a.offsetHeight;
            for (var h = c.isBorderBox = "border-box" == l.boxSizing, u = 0; u < o; u++) {
                var d = s[u]
                  , p = l[d]
                  , f = parseFloat(p);
                c[d] = isNaN(f) ? 0 : f
            }
            var m = c.paddingLeft + c.paddingRight
              , g = c.paddingTop + c.paddingBottom
              , _ = c.marginLeft + c.marginRight
              , v = c.marginTop + c.marginBottom
              , y = c.borderLeftWidth + c.borderRightWidth
              , b = c.borderTopWidth + c.borderBottomWidth
              , w = h && i
              , T = t(l.width);
            !1 !== T && (c.width = T + (w ? 0 : m + y));
            var x = t(l.height);
            return !1 !== x && (c.height = x + (w ? 0 : g + b)),
            c.innerWidth = c.width - (m + y),
            c.innerHeight = c.height - (g + b),
            c.outerWidth = c.width + _,
            c.outerHeight = c.height + v,
            c
        }
    }
}
)),
function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e()
}(window, (function() {
    "use strict";
    var t = function() {
        var t = window.Element.prototype;
        if (t.matches)
            return "matches";
        if (t.matchesSelector)
            return "matchesSelector";
        for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
            var n = e[i] + "MatchesSelector";
            if (t[n])
                return n
        }
    }();
    return function(e, i) {
        return e[t](i)
    }
}
)),
function(t, e) {
    "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], (function(i) {
        return e(t, i)
    }
    )) : "object" == typeof module && module.exports ? module.exports = e(t, require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.matchesSelector)
}(window, (function(t, e) {
    var i = {
        extend: function(t, e) {
            for (var i in e)
                t[i] = e[i];
            return t
        },
        modulo: function(t, e) {
            return (t % e + e) % e
        }
    }
      , n = Array.prototype.slice;
    i.makeArray = function(t) {
        return Array.isArray(t) ? t : null == t ? [] : "object" == typeof t && "number" == typeof t.length ? n.call(t) : [t]
    }
    ,
    i.removeFrom = function(t, e) {
        var i = t.indexOf(e);
        -1 != i && t.splice(i, 1)
    }
    ,
    i.getParent = function(t, i) {
        for (; t.parentNode && t != document.body; )
            if (t = t.parentNode,
            e(t, i))
                return t
    }
    ,
    i.getQueryElement = function(t) {
        return "string" == typeof t ? document.querySelector(t) : t
    }
    ,
    i.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }
    ,
    i.filterFindElements = function(t, n) {
        t = i.makeArray(t);
        var s = [];
        return t.forEach((function(t) {
            if (t instanceof HTMLElement) {
                if (!n)
                    return void s.push(t);
                e(t, n) && s.push(t);
                for (var i = t.querySelectorAll(n), o = 0; o < i.length; o++)
                    s.push(i[o])
            }
        }
        )),
        s
    }
    ,
    i.debounceMethod = function(t, e, i) {
        i = i || 100;
        var n = t.prototype[e]
          , s = e + "Timeout";
        t.prototype[e] = function() {
            var t = this[s];
            clearTimeout(t);
            var e = arguments
              , o = this;
            this[s] = setTimeout((function() {
                n.apply(o, e),
                delete o[s]
            }
            ), i)
        }
    }
    ,
    i.docReady = function(t) {
        var e = document.readyState;
        "complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t)
    }
    ,
    i.toDashed = function(t) {
        return t.replace(/(.)([A-Z])/g, (function(t, e, i) {
            return e + "-" + i
        }
        )).toLowerCase()
    }
    ;
    var s = t.console;
    return i.htmlInit = function(e, n) {
        i.docReady((function() {
            var o = i.toDashed(n)
              , r = "data-" + o
              , a = document.querySelectorAll("[" + r + "]")
              , l = document.querySelectorAll(".js-" + o)
              , c = i.makeArray(a).concat(i.makeArray(l))
              , h = r + "-options"
              , u = t.jQuery;
            c.forEach((function(t) {
                var i, o = t.getAttribute(r) || t.getAttribute(h);
                try {
                    i = o && JSON.parse(o)
                } catch (i) {
                    return void (s && s.error("Error parsing " + r + " on " + t.className + ": " + i))
                }
                var a = new e(t,i);
                u && u.data(t, n, a)
            }
            ))
        }
        ))
    }
    ,
    i
}
)),
function(t, e) {
    "function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("ev-emitter"), require("get-size")) : (t.Outlayer = {},
    t.Outlayer.Item = e(t.EvEmitter, t.getSize))
}(window, (function(t, e) {
    "use strict";
    function i(t, e) {
        t && (this.element = t,
        this.layout = e,
        this.position = {
            x: 0,
            y: 0
        },
        this._create())
    }
    var n = document.documentElement.style
      , s = "string" == typeof n.transition ? "transition" : "WebkitTransition"
      , o = "string" == typeof n.transform ? "transform" : "WebkitTransform"
      , r = {
        WebkitTransition: "webkitTransitionEnd",
        transition: "transitionend"
    }[s]
      , a = {
        transform: o,
        transition: s,
        transitionDuration: s + "Duration",
        transitionProperty: s + "Property",
        transitionDelay: s + "Delay"
    }
      , l = i.prototype = Object.create(t.prototype);
    l.constructor = i,
    l._create = function() {
        this._transn = {
            ingProperties: {},
            clean: {},
            onEnd: {}
        },
        this.css({
            position: "absolute"
        })
    }
    ,
    l.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }
    ,
    l.getSize = function() {
        this.size = e(this.element)
    }
    ,
    l.css = function(t) {
        var e = this.element.style;
        for (var i in t)
            e[a[i] || i] = t[i]
    }
    ,
    l.getPosition = function() {
        var t = getComputedStyle(this.element)
          , e = this.layout._getOption("originLeft")
          , i = this.layout._getOption("originTop")
          , n = t[e ? "left" : "right"]
          , s = t[i ? "top" : "bottom"]
          , o = parseFloat(n)
          , r = parseFloat(s)
          , a = this.layout.size;
        -1 != n.indexOf("%") && (o = o / 100 * a.width),
        -1 != s.indexOf("%") && (r = r / 100 * a.height),
        o = isNaN(o) ? 0 : o,
        r = isNaN(r) ? 0 : r,
        o -= e ? a.paddingLeft : a.paddingRight,
        r -= i ? a.paddingTop : a.paddingBottom,
        this.position.x = o,
        this.position.y = r
    }
    ,
    l.layoutPosition = function() {
        var t = this.layout.size
          , e = {}
          , i = this.layout._getOption("originLeft")
          , n = this.layout._getOption("originTop")
          , s = i ? "paddingLeft" : "paddingRight"
          , o = i ? "left" : "right"
          , r = i ? "right" : "left"
          , a = this.position.x + t[s];
        e[o] = this.getXValue(a),
        e[r] = "";
        var l = n ? "paddingTop" : "paddingBottom"
          , c = n ? "top" : "bottom"
          , h = n ? "bottom" : "top"
          , u = this.position.y + t[l];
        e[c] = this.getYValue(u),
        e[h] = "",
        this.css(e),
        this.emitEvent("layout", [this])
    }
    ,
    l.getXValue = function(t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px"
    }
    ,
    l.getYValue = function(t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px"
    }
    ,
    l._transitionTo = function(t, e) {
        this.getPosition();
        var i = this.position.x
          , n = this.position.y
          , s = t == this.position.x && e == this.position.y;
        if (this.setPosition(t, e),
        !s || this.isTransitioning) {
            var o = t - i
              , r = e - n
              , a = {};
            a.transform = this.getTranslate(o, r),
            this.transition({
                to: a,
                onTransitionEnd: {
                    transform: this.layoutPosition
                },
                isCleaning: !0
            })
        } else
            this.layoutPosition()
    }
    ,
    l.getTranslate = function(t, e) {
        return "translate3d(" + (t = this.layout._getOption("originLeft") ? t : -t) + "px, " + (e = this.layout._getOption("originTop") ? e : -e) + "px, 0)"
    }
    ,
    l.goTo = function(t, e) {
        this.setPosition(t, e),
        this.layoutPosition()
    }
    ,
    l.moveTo = l._transitionTo,
    l.setPosition = function(t, e) {
        this.position.x = parseFloat(t),
        this.position.y = parseFloat(e)
    }
    ,
    l._nonTransition = function(t) {
        for (var e in this.css(t.to),
        t.isCleaning && this._removeStyles(t.to),
        t.onTransitionEnd)
            t.onTransitionEnd[e].call(this)
    }
    ,
    l.transition = function(t) {
        if (parseFloat(this.layout.options.transitionDuration)) {
            var e = this._transn;
            for (var i in t.onTransitionEnd)
                e.onEnd[i] = t.onTransitionEnd[i];
            for (i in t.to)
                e.ingProperties[i] = !0,
                t.isCleaning && (e.clean[i] = !0);
            t.from && (this.css(t.from),
            this.element.offsetHeight),
            this.enableTransition(t.to),
            this.css(t.to),
            this.isTransitioning = !0
        } else
            this._nonTransition(t)
    }
    ;
    var c = "opacity," + o.replace(/([A-Z])/g, (function(t) {
        return "-" + t.toLowerCase()
    }
    ));
    l.enableTransition = function() {
        if (!this.isTransitioning) {
            var t = this.layout.options.transitionDuration;
            t = "number" == typeof t ? t + "ms" : t,
            this.css({
                transitionProperty: c,
                transitionDuration: t,
                transitionDelay: this.staggerDelay || 0
            }),
            this.element.addEventListener(r, this, !1)
        }
    }
    ,
    l.onwebkitTransitionEnd = function(t) {
        this.ontransitionend(t)
    }
    ,
    l.onotransitionend = function(t) {
        this.ontransitionend(t)
    }
    ;
    var h = {
        "-webkit-transform": "transform"
    };
    l.ontransitionend = function(t) {
        if (t.target === this.element) {
            var e = this._transn
              , i = h[t.propertyName] || t.propertyName;
            delete e.ingProperties[i],
            function(t) {
                for (var e in t)
                    return !1;
                return !0
            }(e.ingProperties) && this.disableTransition(),
            i in e.clean && (this.element.style[t.propertyName] = "",
            delete e.clean[i]),
            i in e.onEnd && (e.onEnd[i].call(this),
            delete e.onEnd[i]),
            this.emitEvent("transitionEnd", [this])
        }
    }
    ,
    l.disableTransition = function() {
        this.removeTransitionStyles(),
        this.element.removeEventListener(r, this, !1),
        this.isTransitioning = !1
    }
    ,
    l._removeStyles = function(t) {
        var e = {};
        for (var i in t)
            e[i] = "";
        this.css(e)
    }
    ;
    var u = {
        transitionProperty: "",
        transitionDuration: "",
        transitionDelay: ""
    };
    return l.removeTransitionStyles = function() {
        this.css(u)
    }
    ,
    l.stagger = function(t) {
        t = isNaN(t) ? 0 : t,
        this.staggerDelay = t + "ms"
    }
    ,
    l.removeElem = function() {
        this.element.parentNode.removeChild(this.element),
        this.css({
            display: ""
        }),
        this.emitEvent("remove", [this])
    }
    ,
    l.remove = function() {
        return s && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", (function() {
            this.removeElem()
        }
        )),
        void this.hide()) : void this.removeElem()
    }
    ,
    l.reveal = function() {
        delete this.isHidden,
        this.css({
            display: ""
        });
        var t = this.layout.options
          , e = {};
        e[this.getHideRevealTransitionEndProperty("visibleStyle")] = this.onRevealTransitionEnd,
        this.transition({
            from: t.hiddenStyle,
            to: t.visibleStyle,
            isCleaning: !0,
            onTransitionEnd: e
        })
    }
    ,
    l.onRevealTransitionEnd = function() {
        this.isHidden || this.emitEvent("reveal")
    }
    ,
    l.getHideRevealTransitionEndProperty = function(t) {
        var e = this.layout.options[t];
        if (e.opacity)
            return "opacity";
        for (var i in e)
            return i
    }
    ,
    l.hide = function() {
        this.isHidden = !0,
        this.css({
            display: ""
        });
        var t = this.layout.options
          , e = {};
        e[this.getHideRevealTransitionEndProperty("hiddenStyle")] = this.onHideTransitionEnd,
        this.transition({
            from: t.visibleStyle,
            to: t.hiddenStyle,
            isCleaning: !0,
            onTransitionEnd: e
        })
    }
    ,
    l.onHideTransitionEnd = function() {
        this.isHidden && (this.css({
            display: "none"
        }),
        this.emitEvent("hide"))
    }
    ,
    l.destroy = function() {
        this.css({
            position: "",
            left: "",
            right: "",
            top: "",
            bottom: "",
            transition: "",
            transform: ""
        })
    }
    ,
    i
}
)),
function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], (function(i, n, s, o) {
        return e(t, i, n, s, o)
    }
    )) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : t.Outlayer = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item)
}(window, (function(t, e, i, n, s) {
    "use strict";
    function o(t, e) {
        var i = n.getQueryElement(t);
        if (i) {
            this.element = i,
            l && (this.$element = l(this.element)),
            this.options = n.extend({}, this.constructor.defaults),
            this.option(e);
            var s = ++h;
            this.element.outlayerGUID = s,
            (u[s] = this)._create(),
            this._getOption("initLayout") && this.layout()
        } else
            a && a.error("Bad element for " + this.constructor.namespace + ": " + (i || t))
    }
    function r(t) {
        function e() {
            t.apply(this, arguments)
        }
        return (e.prototype = Object.create(t.prototype)).constructor = e
    }
    var a = t.console
      , l = t.jQuery
      , c = function() {}
      , h = 0
      , u = {};
    o.namespace = "outlayer",
    o.Item = s,
    o.defaults = {
        containerStyle: {
            position: "relative"
        },
        initLayout: !0,
        originLeft: !0,
        originTop: !0,
        resize: !0,
        resizeContainer: !0,
        transitionDuration: "0.4s",
        hiddenStyle: {
            opacity: 0,
            transform: "scale(0.001)"
        },
        visibleStyle: {
            opacity: 1,
            transform: "scale(1)"
        }
    };
    var d = o.prototype;
    n.extend(d, e.prototype),
    d.option = function(t) {
        n.extend(this.options, t)
    }
    ,
    d._getOption = function(t) {
        var e = this.constructor.compatOptions[t];
        return e && void 0 !== this.options[e] ? this.options[e] : this.options[t]
    }
    ,
    o.compatOptions = {
        initLayout: "isInitLayout",
        horizontal: "isHorizontal",
        layoutInstant: "isLayoutInstant",
        originLeft: "isOriginLeft",
        originTop: "isOriginTop",
        resize: "isResizeBound",
        resizeContainer: "isResizingContainer"
    },
    d._create = function() {
        this.reloadItems(),
        this.stamps = [],
        this.stamp(this.options.stamp),
        n.extend(this.element.style, this.options.containerStyle),
        this._getOption("resize") && this.bindResize()
    }
    ,
    d.reloadItems = function() {
        this.items = this._itemize(this.element.children)
    }
    ,
    d._itemize = function(t) {
        for (var e = this._filterFindItemElements(t), i = this.constructor.Item, n = [], s = 0; s < e.length; s++) {
            var o = new i(e[s],this);
            n.push(o)
        }
        return n
    }
    ,
    d._filterFindItemElements = function(t) {
        return n.filterFindElements(t, this.options.itemSelector)
    }
    ,
    d.getItemElements = function() {
        return this.items.map((function(t) {
            return t.element
        }
        ))
    }
    ,
    d.layout = function() {
        this._resetLayout(),
        this._manageStamps();
        var t = this._getOption("layoutInstant")
          , e = void 0 !== t ? t : !this._isLayoutInited;
        this.layoutItems(this.items, e),
        this._isLayoutInited = !0
    }
    ,
    d._init = d.layout,
    d._resetLayout = function() {
        this.getSize()
    }
    ,
    d.getSize = function() {
        this.size = i(this.element)
    }
    ,
    d._getMeasurement = function(t, e) {
        var n, s = this.options[t];
        s ? ("string" == typeof s ? n = this.element.querySelector(s) : s instanceof HTMLElement && (n = s),
        this[t] = n ? i(n)[e] : s) : this[t] = 0
    }
    ,
    d.layoutItems = function(t, e) {
        t = this._getItemsForLayout(t),
        this._layoutItems(t, e),
        this._postLayout()
    }
    ,
    d._getItemsForLayout = function(t) {
        return t.filter((function(t) {
            return !t.isIgnored
        }
        ))
    }
    ,
    d._layoutItems = function(t, e) {
        if (this._emitCompleteOnItems("layout", t),
        t && t.length) {
            var i = [];
            t.forEach((function(t) {
                var n = this._getItemLayoutPosition(t);
                n.item = t,
                n.isInstant = e || t.isLayoutInstant,
                i.push(n)
            }
            ), this),
            this._processLayoutQueue(i)
        }
    }
    ,
    d._getItemLayoutPosition = function() {
        return {
            x: 0,
            y: 0
        }
    }
    ,
    d._processLayoutQueue = function(t) {
        this.updateStagger(),
        t.forEach((function(t, e) {
            this._positionItem(t.item, t.x, t.y, t.isInstant, e)
        }
        ), this)
    }
    ,
    d.updateStagger = function() {
        var t = this.options.stagger;
        return null == t ? void (this.stagger = 0) : (this.stagger = function(t) {
            if ("number" == typeof t)
                return t;
            var e = t.match(/(^\d*\.?\d*)(\w*)/)
              , i = e && e[1]
              , n = e && e[2];
            return i.length ? (i = parseFloat(i)) * (p[n] || 1) : 0
        }(t),
        this.stagger)
    }
    ,
    d._positionItem = function(t, e, i, n, s) {
        n ? t.goTo(e, i) : (t.stagger(s * this.stagger),
        t.moveTo(e, i))
    }
    ,
    d._postLayout = function() {
        this.resizeContainer()
    }
    ,
    d.resizeContainer = function() {
        if (this._getOption("resizeContainer")) {
            var t = this._getContainerSize();
            t && (this._setContainerMeasure(t.width, !0),
            this._setContainerMeasure(t.height, !1))
        }
    }
    ,
    d._getContainerSize = c,
    d._setContainerMeasure = function(t, e) {
        if (void 0 !== t) {
            var i = this.size;
            i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth),
            t = Math.max(t, 0),
            this.element.style[e ? "width" : "height"] = t + "px"
        }
    }
    ,
    d._emitCompleteOnItems = function(t, e) {
        function i() {
            s.dispatchEvent(t + "Complete", null, [e])
        }
        function n() {
            ++r == o && i()
        }
        var s = this
          , o = e.length;
        if (e && o) {
            var r = 0;
            e.forEach((function(e) {
                e.once(t, n)
            }
            ))
        } else
            i()
    }
    ,
    d.dispatchEvent = function(t, e, i) {
        var n = e ? [e].concat(i) : i;
        if (this.emitEvent(t, n),
        l)
            if (this.$element = this.$element || l(this.element),
            e) {
                var s = l.Event(e);
                s.type = t,
                this.$element.trigger(s, i)
            } else
                this.$element.trigger(t, i)
    }
    ,
    d.ignore = function(t) {
        var e = this.getItem(t);
        e && (e.isIgnored = !0)
    }
    ,
    d.unignore = function(t) {
        var e = this.getItem(t);
        e && delete e.isIgnored
    }
    ,
    d.stamp = function(t) {
        (t = this._find(t)) && (this.stamps = this.stamps.concat(t),
        t.forEach(this.ignore, this))
    }
    ,
    d.unstamp = function(t) {
        (t = this._find(t)) && t.forEach((function(t) {
            n.removeFrom(this.stamps, t),
            this.unignore(t)
        }
        ), this)
    }
    ,
    d._find = function(t) {
        if (t)
            return "string" == typeof t && (t = this.element.querySelectorAll(t)),
            n.makeArray(t)
    }
    ,
    d._manageStamps = function() {
        this.stamps && this.stamps.length && (this._getBoundingRect(),
        this.stamps.forEach(this._manageStamp, this))
    }
    ,
    d._getBoundingRect = function() {
        var t = this.element.getBoundingClientRect()
          , e = this.size;
        this._boundingRect = {
            left: t.left + e.paddingLeft + e.borderLeftWidth,
            top: t.top + e.paddingTop + e.borderTopWidth,
            right: t.right - (e.paddingRight + e.borderRightWidth),
            bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
        }
    }
    ,
    d._manageStamp = c,
    d._getElementOffset = function(t) {
        var e = t.getBoundingClientRect()
          , n = this._boundingRect
          , s = i(t);
        return {
            left: e.left - n.left - s.marginLeft,
            top: e.top - n.top - s.marginTop,
            right: n.right - e.right - s.marginRight,
            bottom: n.bottom - e.bottom - s.marginBottom
        }
    }
    ,
    d.handleEvent = n.handleEvent,
    d.bindResize = function() {
        t.addEventListener("resize", this),
        this.isResizeBound = !0
    }
    ,
    d.unbindResize = function() {
        t.removeEventListener("resize", this),
        this.isResizeBound = !1
    }
    ,
    d.onresize = function() {
        this.resize()
    }
    ,
    n.debounceMethod(o, "onresize", 100),
    d.resize = function() {
        this.isResizeBound && this.needsResizeLayout() && this.layout()
    }
    ,
    d.needsResizeLayout = function() {
        var t = i(this.element);
        return this.size && t && t.innerWidth !== this.size.innerWidth
    }
    ,
    d.addItems = function(t) {
        var e = this._itemize(t);
        return e.length && (this.items = this.items.concat(e)),
        e
    }
    ,
    d.appended = function(t) {
        var e = this.addItems(t);
        e.length && (this.layoutItems(e, !0),
        this.reveal(e))
    }
    ,
    d.prepended = function(t) {
        var e = this._itemize(t);
        if (e.length) {
            var i = this.items.slice(0);
            this.items = e.concat(i),
            this._resetLayout(),
            this._manageStamps(),
            this.layoutItems(e, !0),
            this.reveal(e),
            this.layoutItems(i)
        }
    }
    ,
    d.reveal = function(t) {
        if (this._emitCompleteOnItems("reveal", t),
        t && t.length) {
            var e = this.updateStagger();
            t.forEach((function(t, i) {
                t.stagger(i * e),
                t.reveal()
            }
            ))
        }
    }
    ,
    d.hide = function(t) {
        if (this._emitCompleteOnItems("hide", t),
        t && t.length) {
            var e = this.updateStagger();
            t.forEach((function(t, i) {
                t.stagger(i * e),
                t.hide()
            }
            ))
        }
    }
    ,
    d.revealItemElements = function(t) {
        var e = this.getItems(t);
        this.reveal(e)
    }
    ,
    d.hideItemElements = function(t) {
        var e = this.getItems(t);
        this.hide(e)
    }
    ,
    d.getItem = function(t) {
        for (var e = 0; e < this.items.length; e++) {
            var i = this.items[e];
            if (i.element == t)
                return i
        }
    }
    ,
    d.getItems = function(t) {
        t = n.makeArray(t);
        var e = [];
        return t.forEach((function(t) {
            var i = this.getItem(t);
            i && e.push(i)
        }
        ), this),
        e
    }
    ,
    d.remove = function(t) {
        var e = this.getItems(t);
        this._emitCompleteOnItems("remove", e),
        e && e.length && e.forEach((function(t) {
            t.remove(),
            n.removeFrom(this.items, t)
        }
        ), this)
    }
    ,
    d.destroy = function() {
        var t = this.element.style;
        t.height = "",
        t.position = "",
        t.width = "",
        this.items.forEach((function(t) {
            t.destroy()
        }
        )),
        this.unbindResize();
        var e = this.element.outlayerGUID;
        delete u[e],
        delete this.element.outlayerGUID,
        l && l.removeData(this.element, this.constructor.namespace)
    }
    ,
    o.data = function(t) {
        var e = (t = n.getQueryElement(t)) && t.outlayerGUID;
        return e && u[e]
    }
    ,
    o.create = function(t, e) {
        var i = r(o);
        return i.defaults = n.extend({}, o.defaults),
        n.extend(i.defaults, e),
        i.compatOptions = n.extend({}, o.compatOptions),
        i.namespace = t,
        i.data = o.data,
        i.Item = r(s),
        n.htmlInit(i, t),
        l && l.bridget && l.bridget(t, i),
        i
    }
    ;
    var p = {
        ms: 1,
        s: 1e3
    };
    return o.Item = s,
    o
}
)),
function(t, e) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/item", ["outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer")) : (t.Isotope = t.Isotope || {},
    t.Isotope.Item = e(t.Outlayer))
}(window, (function(t) {
    "use strict";
    function e() {
        t.Item.apply(this, arguments)
    }
    var i = e.prototype = Object.create(t.Item.prototype)
      , n = i._create;
    i._create = function() {
        this.id = this.layout.itemGUID++,
        n.call(this),
        this.sortData = {}
    }
    ,
    i.updateSortData = function() {
        if (!this.isIgnored) {
            this.sortData.id = this.id,
            this.sortData["original-order"] = this.id,
            this.sortData.random = Math.random();
            var t = this.layout.options.getSortData
              , e = this.layout._sorters;
            for (var i in t) {
                var n = e[i];
                this.sortData[i] = n(this.element, this)
            }
        }
    }
    ;
    var s = i.destroy;
    return i.destroy = function() {
        s.apply(this, arguments),
        this.css({
            display: ""
        })
    }
    ,
    e
}
)),
function(t, e) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("get-size"), require("outlayer")) : (t.Isotope = t.Isotope || {},
    t.Isotope.LayoutMode = e(t.getSize, t.Outlayer))
}(window, (function(t, e) {
    "use strict";
    function i(t) {
        (this.isotope = t) && (this.options = t.options[this.namespace],
        this.element = t.element,
        this.items = t.filteredItems,
        this.size = t.size)
    }
    var n = i.prototype;
    return ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout", "_getOption"].forEach((function(t) {
        n[t] = function() {
            return e.prototype[t].apply(this.isotope, arguments)
        }
    }
    )),
    n.needsVerticalResizeLayout = function() {
        var e = t(this.isotope.element);
        return this.isotope.size && e && e.innerHeight != this.isotope.size.innerHeight
    }
    ,
    n._getMeasurement = function() {
        this.isotope._getMeasurement.apply(this, arguments)
    }
    ,
    n.getColumnWidth = function() {
        this.getSegmentSize("column", "Width")
    }
    ,
    n.getRowHeight = function() {
        this.getSegmentSize("row", "Height")
    }
    ,
    n.getSegmentSize = function(t, e) {
        var i = t + e
          , n = "outer" + e;
        if (this._getMeasurement(i, n),
        !this[i]) {
            var s = this.getFirstItemSize();
            this[i] = s && s[n] || this.isotope.size["inner" + e]
        }
    }
    ,
    n.getFirstItemSize = function() {
        var e = this.isotope.filteredItems[0];
        return e && e.element && t(e.element)
    }
    ,
    n.layout = function() {
        this.isotope.layout.apply(this.isotope, arguments)
    }
    ,
    n.getSize = function() {
        this.isotope.getSize(),
        this.size = this.isotope.size
    }
    ,
    i.modes = {},
    i.create = function(t, e) {
        function s() {
            i.apply(this, arguments)
        }
        return (s.prototype = Object.create(n)).constructor = s,
        e && (s.options = e),
        i.modes[s.prototype.namespace = t] = s
    }
    ,
    i
}
)),
function(t, e) {
    "function" == typeof define && define.amd ? define("masonry-layout/masonry", ["outlayer/outlayer", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer"), require("get-size")) : t.Masonry = e(t.Outlayer, t.getSize)
}(window, (function(t, e) {
    var i = t.create("masonry");
    i.compatOptions.fitWidth = "isFitWidth";
    var n = i.prototype;
    return n._resetLayout = function() {
        this.getSize(),
        this._getMeasurement("columnWidth", "outerWidth"),
        this._getMeasurement("gutter", "outerWidth"),
        this.measureColumns(),
        this.colYs = [];
        for (var t = 0; t < this.cols; t++)
            this.colYs.push(0);
        this.maxY = 0,
        this.horizontalColIndex = 0
    }
    ,
    n.measureColumns = function() {
        if (this.getContainerWidth(),
        !this.columnWidth) {
            var t = this.items[0]
              , i = t && t.element;
            this.columnWidth = i && e(i).outerWidth || this.containerWidth
        }
        var n = this.columnWidth += this.gutter
          , s = this.containerWidth + this.gutter
          , o = s / n
          , r = n - s % n;
        o = Math[r && r < 1 ? "round" : "floor"](o),
        this.cols = Math.max(o, 1)
    }
    ,
    n.getContainerWidth = function() {
        var t = this._getOption("fitWidth") ? this.element.parentNode : this.element
          , i = e(t);
        this.containerWidth = i && i.innerWidth
    }
    ,
    n._getItemLayoutPosition = function(t) {
        t.getSize();
        var e = t.size.outerWidth % this.columnWidth
          , i = Math[e && e < 1 ? "round" : "ceil"](t.size.outerWidth / this.columnWidth);
        i = Math.min(i, this.cols);
        for (var n = this[this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition"](i, t), s = {
            x: this.columnWidth * n.col,
            y: n.y
        }, o = n.y + t.size.outerHeight, r = i + n.col, a = n.col; a < r; a++)
            this.colYs[a] = o;
        return s
    }
    ,
    n._getTopColPosition = function(t) {
        var e = this._getTopColGroup(t)
          , i = Math.min.apply(Math, e);
        return {
            col: e.indexOf(i),
            y: i
        }
    }
    ,
    n._getTopColGroup = function(t) {
        if (t < 2)
            return this.colYs;
        for (var e = [], i = this.cols + 1 - t, n = 0; n < i; n++)
            e[n] = this._getColGroupY(n, t);
        return e
    }
    ,
    n._getColGroupY = function(t, e) {
        if (e < 2)
            return this.colYs[t];
        var i = this.colYs.slice(t, t + e);
        return Math.max.apply(Math, i)
    }
    ,
    n._getHorizontalColPosition = function(t, e) {
        var i = this.horizontalColIndex % this.cols;
        i = 1 < t && i + t > this.cols ? 0 : i;
        var n = e.size.outerWidth && e.size.outerHeight;
        return this.horizontalColIndex = n ? i + t : this.horizontalColIndex,
        {
            col: i,
            y: this._getColGroupY(i, t)
        }
    }
    ,
    n._manageStamp = function(t) {
        var i = e(t)
          , n = this._getElementOffset(t)
          , s = this._getOption("originLeft") ? n.left : n.right
          , o = s + i.outerWidth
          , r = Math.floor(s / this.columnWidth);
        r = Math.max(0, r);
        var a = Math.floor(o / this.columnWidth);
        a -= o % this.columnWidth ? 0 : 1,
        a = Math.min(this.cols - 1, a);
        for (var l = (this._getOption("originTop") ? n.top : n.bottom) + i.outerHeight, c = r; c <= a; c++)
            this.colYs[c] = Math.max(l, this.colYs[c])
    }
    ,
    n._getContainerSize = function() {
        this.maxY = Math.max.apply(Math, this.colYs);
        var t = {
            height: this.maxY
        };
        return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()),
        t
    }
    ,
    n._getContainerFitWidth = function() {
        for (var t = 0, e = this.cols; --e && 0 === this.colYs[e]; )
            t++;
        return (this.cols - t) * this.columnWidth - this.gutter
    }
    ,
    n.needsResizeLayout = function() {
        var t = this.containerWidth;
        return this.getContainerWidth(),
        t != this.containerWidth
    }
    ,
    i
}
)),
function(t, e) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/masonry", ["../layout-mode", "masonry-layout/masonry"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode"), require("masonry-layout")) : e(t.Isotope.LayoutMode, t.Masonry)
}(window, (function(t, e) {
    "use strict";
    var i = t.create("masonry")
      , n = i.prototype
      , s = {
        _getElementOffset: !0,
        layout: !0,
        _getMeasurement: !0
    };
    for (var o in e.prototype)
        s[o] || (n[o] = e.prototype[o]);
    var r = n.measureColumns;
    n.measureColumns = function() {
        this.items = this.isotope.filteredItems,
        r.call(this)
    }
    ;
    var a = n._getOption;
    return n._getOption = function(t) {
        return "fitWidth" == t ? void 0 !== this.options.isFitWidth ? this.options.isFitWidth : this.options.fitWidth : a.apply(this.isotope, arguments)
    }
    ,
    i
}
)),
function(t, e) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/fit-rows", ["../layout-mode"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
}(window, (function(t) {
    "use strict";
    var e = t.create("fitRows")
      , i = e.prototype;
    return i._resetLayout = function() {
        this.x = 0,
        this.y = 0,
        this.maxY = 0,
        this._getMeasurement("gutter", "outerWidth")
    }
    ,
    i._getItemLayoutPosition = function(t) {
        t.getSize();
        var e = t.size.outerWidth + this.gutter
          , i = this.isotope.size.innerWidth + this.gutter;
        0 !== this.x && e + this.x > i && (this.x = 0,
        this.y = this.maxY);
        var n = {
            x: this.x,
            y: this.y
        };
        return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight),
        this.x += e,
        n
    }
    ,
    i._getContainerSize = function() {
        return {
            height: this.maxY
        }
    }
    ,
    e
}
)),
function(t, e) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/vertical", ["../layout-mode"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
}(window, (function(t) {
    "use strict";
    var e = t.create("vertical", {
        horizontalAlignment: 0
    })
      , i = e.prototype;
    return i._resetLayout = function() {
        this.y = 0
    }
    ,
    i._getItemLayoutPosition = function(t) {
        t.getSize();
        var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment
          , i = this.y;
        return this.y += t.size.outerHeight,
        {
            x: e,
            y: i
        }
    }
    ,
    i._getContainerSize = function() {
        return {
            height: this.y
        }
    }
    ,
    e
}
)),
function(t, e) {
    "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "desandro-matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope-layout/js/item", "isotope-layout/js/layout-mode", "isotope-layout/js/layout-modes/masonry", "isotope-layout/js/layout-modes/fit-rows", "isotope-layout/js/layout-modes/vertical"], (function(i, n, s, o, r, a) {
        return e(t, i, n, s, o, r, a)
    }
    )) : "object" == typeof module && module.exports ? module.exports = e(t, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("isotope-layout/js/item"), require("isotope-layout/js/layout-mode"), require("isotope-layout/js/layout-modes/masonry"), require("isotope-layout/js/layout-modes/fit-rows"), require("isotope-layout/js/layout-modes/vertical")) : t.Isotope = e(t, t.Outlayer, t.getSize, t.matchesSelector, t.fizzyUIUtils, t.Isotope.Item, t.Isotope.LayoutMode)
}(window, (function(t, e, i, n, s, o, r) {
    var a = t.jQuery
      , l = String.prototype.trim ? function(t) {
        return t.trim()
    }
    : function(t) {
        return t.replace(/^\s+|\s+$/g, "")
    }
      , c = e.create("isotope", {
        layoutMode: "masonry",
        isJQueryFiltering: !0,
        sortAscending: !0
    });
    c.Item = o,
    c.LayoutMode = r;
    var h = c.prototype;
    h._create = function() {
        for (var t in this.itemGUID = 0,
        this._sorters = {},
        this._getSorters(),
        e.prototype._create.call(this),
        this.modes = {},
        this.filteredItems = this.items,
        this.sortHistory = ["original-order"],
        r.modes)
            this._initLayoutMode(t)
    }
    ,
    h.reloadItems = function() {
        this.itemGUID = 0,
        e.prototype.reloadItems.call(this)
    }
    ,
    h._itemize = function() {
        for (var t = e.prototype._itemize.apply(this, arguments), i = 0; i < t.length; i++)
            t[i].id = this.itemGUID++;
        return this._updateItemsSortData(t),
        t
    }
    ,
    h._initLayoutMode = function(t) {
        var e = r.modes[t]
          , i = this.options[t] || {};
        this.options[t] = e.options ? s.extend(e.options, i) : i,
        this.modes[t] = new e(this)
    }
    ,
    h.layout = function() {
        return !this._isLayoutInited && this._getOption("initLayout") ? void this.arrange() : void this._layout()
    }
    ,
    h._layout = function() {
        var t = this._getIsInstant();
        this._resetLayout(),
        this._manageStamps(),
        this.layoutItems(this.filteredItems, t),
        this._isLayoutInited = !0
    }
    ,
    h.arrange = function(t) {
        this.option(t),
        this._getIsInstant();
        var e = this._filter(this.items);
        this.filteredItems = e.matches,
        this._bindArrangeComplete(),
        this._isInstant ? this._noTransition(this._hideReveal, [e]) : this._hideReveal(e),
        this._sort(),
        this._layout()
    }
    ,
    h._init = h.arrange,
    h._hideReveal = function(t) {
        this.reveal(t.needReveal),
        this.hide(t.needHide)
    }
    ,
    h._getIsInstant = function() {
        var t = this._getOption("layoutInstant")
          , e = void 0 !== t ? t : !this._isLayoutInited;
        return this._isInstant = e
    }
    ,
    h._bindArrangeComplete = function() {
        function t() {
            e && i && n && s.dispatchEvent("arrangeComplete", null, [s.filteredItems])
        }
        var e, i, n, s = this;
        this.once("layoutComplete", (function() {
            e = !0,
            t()
        }
        )),
        this.once("hideComplete", (function() {
            i = !0,
            t()
        }
        )),
        this.once("revealComplete", (function() {
            n = !0,
            t()
        }
        ))
    }
    ,
    h._filter = function(t) {
        var e = this.options.filter;
        e = e || "*";
        for (var i = [], n = [], s = [], o = this._getFilterTest(e), r = 0; r < t.length; r++) {
            var a = t[r];
            if (!a.isIgnored) {
                var l = o(a);
                l && i.push(a),
                l && a.isHidden ? n.push(a) : l || a.isHidden || s.push(a)
            }
        }
        return {
            matches: i,
            needReveal: n,
            needHide: s
        }
    }
    ,
    h._getFilterTest = function(t) {
        return a && this.options.isJQueryFiltering ? function(e) {
            return a(e.element).is(t)
        }
        : "function" == typeof t ? function(e) {
            return t(e.element)
        }
        : function(e) {
            return n(e.element, t)
        }
    }
    ,
    h.updateSortData = function(t) {
        var e;
        e = t ? (t = s.makeArray(t),
        this.getItems(t)) : this.items,
        this._getSorters(),
        this._updateItemsSortData(e)
    }
    ,
    h._getSorters = function() {
        var t = this.options.getSortData;
        for (var e in t) {
            var i = t[e];
            this._sorters[e] = u(i)
        }
    }
    ,
    h._updateItemsSortData = function(t) {
        for (var e = t && t.length, i = 0; e && i < e; i++)
            t[i].updateSortData()
    }
    ;
    var u = function(t) {
        if ("string" != typeof t)
            return t;
        var e, i, n = l(t).split(" "), s = n[0], o = s.match(/^\[(.+)\]$/), r = o && o[1], a = (i = s,
        (e = r) ? function(t) {
            return t.getAttribute(e)
        }
        : function(t) {
            var e = t.querySelector(i);
            return e && e.textContent
        }
        ), h = c.sortDataParsers[n[1]];
        return h ? function(t) {
            return t && h(a(t))
        }
        : function(t) {
            return t && a(t)
        }
    };
    c.sortDataParsers = {
        parseInt: function(t) {
            return parseInt(t, 10)
        },
        parseFloat: function(t) {
            return parseFloat(t)
        }
    },
    h._sort = function() {
        if (this.options.sortBy) {
            var t = s.makeArray(this.options.sortBy);
            this._getIsSameSortBy(t) || (this.sortHistory = t.concat(this.sortHistory));
            var e = (i = this.sortHistory,
            n = this.options.sortAscending,
            function(t, e) {
                for (var s = 0; s < i.length; s++) {
                    var o = i[s]
                      , r = t.sortData[o]
                      , a = e.sortData[o];
                    if (a < r || r < a)
                        return (a < r ? 1 : -1) * ((void 0 !== n[o] ? n[o] : n) ? 1 : -1)
                }
                return 0
            }
            );
            this.filteredItems.sort(e)
        }
        var i, n
    }
    ,
    h._getIsSameSortBy = function(t) {
        for (var e = 0; e < t.length; e++)
            if (t[e] != this.sortHistory[e])
                return !1;
        return !0
    }
    ,
    h._mode = function() {
        var t = this.options.layoutMode
          , e = this.modes[t];
        if (!e)
            throw new Error("No layout mode: " + t);
        return e.options = this.options[t],
        e
    }
    ,
    h._resetLayout = function() {
        e.prototype._resetLayout.call(this),
        this._mode()._resetLayout()
    }
    ,
    h._getItemLayoutPosition = function(t) {
        return this._mode()._getItemLayoutPosition(t)
    }
    ,
    h._manageStamp = function(t) {
        this._mode()._manageStamp(t)
    }
    ,
    h._getContainerSize = function() {
        return this._mode()._getContainerSize()
    }
    ,
    h.needsResizeLayout = function() {
        return this._mode().needsResizeLayout()
    }
    ,
    h.appended = function(t) {
        var e = this.addItems(t);
        if (e.length) {
            var i = this._filterRevealAdded(e);
            this.filteredItems = this.filteredItems.concat(i)
        }
    }
    ,
    h.prepended = function(t) {
        var e = this._itemize(t);
        if (e.length) {
            this._resetLayout(),
            this._manageStamps();
            var i = this._filterRevealAdded(e);
            this.layoutItems(this.filteredItems),
            this.filteredItems = i.concat(this.filteredItems),
            this.items = e.concat(this.items)
        }
    }
    ,
    h._filterRevealAdded = function(t) {
        var e = this._filter(t);
        return this.hide(e.needHide),
        this.reveal(e.matches),
        this.layoutItems(e.matches, !0),
        e.matches
    }
    ,
    h.insert = function(t) {
        var e = this.addItems(t);
        if (e.length) {
            var i, n, s = e.length;
            for (i = 0; i < s; i++)
                n = e[i],
                this.element.appendChild(n.element);
            var o = this._filter(e).matches;
            for (i = 0; i < s; i++)
                e[i].isLayoutInstant = !0;
            for (this.arrange(),
            i = 0; i < s; i++)
                delete e[i].isLayoutInstant;
            this.reveal(o)
        }
    }
    ;
    var d = h.remove;
    return h.remove = function(t) {
        t = s.makeArray(t);
        var e = this.getItems(t);
        d.call(this, t);
        for (var i = e && e.length, n = 0; i && n < i; n++) {
            var o = e[n];
            s.removeFrom(this.filteredItems, o)
        }
    }
    ,
    h.shuffle = function() {
        for (var t = 0; t < this.items.length; t++)
            this.items[t].sortData.random = Math.random();
        this.options.sortBy = "random",
        this._sort(),
        this._layout()
    }
    ,
    h._noTransition = function(t, e) {
        var i = this.options.transitionDuration;
        this.options.transitionDuration = 0;
        var n = t.apply(this, e);
        return this.options.transitionDuration = i,
        n
    }
    ,
    h.getFilteredItemElements = function() {
        return this.filteredItems.map((function(t) {
            return t.element
        }
        ))
    }
    ,
    c
}
)),
function(t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
}((function(t) {
    t.ui = t.ui || {},
    t.ui.version = "1.12.1";
    var e, i = 0, n = Array.prototype.slice;
    t.cleanData = (e = t.cleanData,
    function(i) {
        for (var n, s, o = 0; null != (s = i[o]); o++)
            try {
                (n = t._data(s, "events")) && n.remove && t(s).triggerHandler("remove")
            } catch (i) {}
        e(i)
    }
    ),
    t.widget = function(e, i, n) {
        var s, o, r, a = {}, l = e.split(".")[0], c = l + "-" + (e = e.split(".")[1]);
        return n || (n = i,
        i = t.Widget),
        t.isArray(n) && (n = t.extend.apply(null, [{}].concat(n))),
        t.expr[":"][c.toLowerCase()] = function(e) {
            return !!t.data(e, c)
        }
        ,
        t[l] = t[l] || {},
        s = t[l][e],
        o = t[l][e] = function(t, e) {
            if (!this._createWidget)
                return new o(t,e);
            arguments.length && this._createWidget(t, e)
        }
        ,
        t.extend(o, s, {
            version: n.version,
            _proto: t.extend({}, n),
            _childConstructors: []
        }),
        (r = new i).options = t.widget.extend({}, r.options),
        t.each(n, (function(e, n) {
            function s() {
                return i.prototype[e].apply(this, arguments)
            }
            function o(t) {
                return i.prototype[e].apply(this, t)
            }
            t.isFunction(n) ? a[e] = function() {
                var t, e = this._super, i = this._superApply;
                return this._super = s,
                this._superApply = o,
                t = n.apply(this, arguments),
                this._super = e,
                this._superApply = i,
                t
            }
            : a[e] = n
        }
        )),
        o.prototype = t.widget.extend(r, {
            widgetEventPrefix: s && r.widgetEventPrefix || e
        }, a, {
            constructor: o,
            namespace: l,
            widgetName: e,
            widgetFullName: c
        }),
        s ? (t.each(s._childConstructors, (function(e, i) {
            var n = i.prototype;
            t.widget(n.namespace + "." + n.widgetName, o, i._proto)
        }
        )),
        delete s._childConstructors) : i._childConstructors.push(o),
        t.widget.bridge(e, o),
        o
    }
    ,
    t.widget.extend = function(e) {
        for (var i, s, o = n.call(arguments, 1), r = 0, a = o.length; r < a; r++)
            for (i in o[r])
                s = o[r][i],
                o[r].hasOwnProperty(i) && void 0 !== s && (t.isPlainObject(s) ? e[i] = t.isPlainObject(e[i]) ? t.widget.extend({}, e[i], s) : t.widget.extend({}, s) : e[i] = s);
        return e
    }
    ,
    t.widget.bridge = function(e, i) {
        var s = i.prototype.widgetFullName || e;
        t.fn[e] = function(o) {
            var r = "string" == typeof o
              , a = n.call(arguments, 1)
              , l = this;
            return r ? this.length || "instance" !== o ? this.each((function() {
                var i, n = t.data(this, s);
                return "instance" === o ? (l = n,
                !1) : n ? t.isFunction(n[o]) && "_" !== o.charAt(0) ? (i = n[o].apply(n, a)) !== n && void 0 !== i ? (l = i && i.jquery ? l.pushStack(i.get()) : i,
                !1) : void 0 : t.error("no such method '" + o + "' for " + e + " widget instance") : t.error("cannot call methods on " + e + " prior to initialization; attempted to call method '" + o + "'")
            }
            )) : l = void 0 : (a.length && (o = t.widget.extend.apply(null, [o].concat(a))),
            this.each((function() {
                var e = t.data(this, s);
                e ? (e.option(o || {}),
                e._init && e._init()) : t.data(this, s, new i(o,this))
            }
            ))),
            l
        }
    }
    ,
    t.Widget = function() {}
    ,
    t.Widget._childConstructors = [],
    t.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            classes: {},
            disabled: !1,
            create: null
        },
        _createWidget: function(e, n) {
            n = t(n || this.defaultElement || this)[0],
            this.element = t(n),
            this.uuid = i++,
            this.eventNamespace = "." + this.widgetName + this.uuid,
            this.bindings = t(),
            this.hoverable = t(),
            this.focusable = t(),
            this.classesElementLookup = {},
            n !== this && (t.data(n, this.widgetFullName, this),
            this._on(!0, this.element, {
                remove: function(t) {
                    t.target === n && this.destroy()
                }
            }),
            this.document = t(n.style ? n.ownerDocument : n.document || n),
            this.window = t(this.document[0].defaultView || this.document[0].parentWindow)),
            this.options = t.widget.extend({}, this.options, this._getCreateOptions(), e),
            this._create(),
            this.options.disabled && this._setOptionDisabled(this.options.disabled),
            this._trigger("create", null, this._getCreateEventData()),
            this._init()
        },
        _getCreateOptions: function() {
            return {}
        },
        _getCreateEventData: t.noop,
        _create: t.noop,
        _init: t.noop,
        destroy: function() {
            var e = this;
            this._destroy(),
            t.each(this.classesElementLookup, (function(t, i) {
                e._removeClass(i, t)
            }
            )),
            this.element.off(this.eventNamespace).removeData(this.widgetFullName),
            this.widget().off(this.eventNamespace).removeAttr("aria-disabled"),
            this.bindings.off(this.eventNamespace)
        },
        _destroy: t.noop,
        widget: function() {
            return this.element
        },
        option: function(e, i) {
            var n, s, o, r = e;
            if (0 === arguments.length)
                return t.widget.extend({}, this.options);
            if ("string" == typeof e)
                if (r = {},
                e = (n = e.split(".")).shift(),
                n.length) {
                    for (s = r[e] = t.widget.extend({}, this.options[e]),
                    o = 0; o < n.length - 1; o++)
                        s[n[o]] = s[n[o]] || {},
                        s = s[n[o]];
                    if (e = n.pop(),
                    1 === arguments.length)
                        return void 0 === s[e] ? null : s[e];
                    s[e] = i
                } else {
                    if (1 === arguments.length)
                        return void 0 === this.options[e] ? null : this.options[e];
                    r[e] = i
                }
            return this._setOptions(r),
            this
        },
        _setOptions: function(t) {
            for (var e in t)
                this._setOption(e, t[e]);
            return this
        },
        _setOption: function(t, e) {
            return "classes" === t && this._setOptionClasses(e),
            this.options[t] = e,
            "disabled" === t && this._setOptionDisabled(e),
            this
        },
        _setOptionClasses: function(e) {
            var i, n, s;
            for (i in e)
                s = this.classesElementLookup[i],
                e[i] !== this.options.classes[i] && s && s.length && (n = t(s.get()),
                this._removeClass(s, i),
                n.addClass(this._classes({
                    element: n,
                    keys: i,
                    classes: e,
                    add: !0
                })))
        },
        _setOptionDisabled: function(t) {
            this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!t),
            t && (this._removeClass(this.hoverable, null, "ui-state-hover"),
            this._removeClass(this.focusable, null, "ui-state-focus"))
        },
        enable: function() {
            return this._setOptions({
                disabled: !1
            })
        },
        disable: function() {
            return this._setOptions({
                disabled: !0
            })
        },
        _classes: function(e) {
            var i = []
              , n = this;
            function s(s, o) {
                for (var r, a = 0; a < s.length; a++)
                    r = n.classesElementLookup[s[a]] || t(),
                    r = e.add ? t(t.unique(r.get().concat(e.element.get()))) : t(r.not(e.element).get()),
                    n.classesElementLookup[s[a]] = r,
                    i.push(s[a]),
                    o && e.classes[s[a]] && i.push(e.classes[s[a]])
            }
            return e = t.extend({
                element: this.element,
                classes: this.options.classes || {}
            }, e),
            this._on(e.element, {
                remove: "_untrackClassesElement"
            }),
            e.keys && s(e.keys.match(/\S+/g) || [], !0),
            e.extra && s(e.extra.match(/\S+/g) || []),
            i.join(" ")
        },
        _untrackClassesElement: function(e) {
            var i = this;
            t.each(i.classesElementLookup, (function(n, s) {
                -1 !== t.inArray(e.target, s) && (i.classesElementLookup[n] = t(s.not(e.target).get()))
            }
            ))
        },
        _removeClass: function(t, e, i) {
            return this._toggleClass(t, e, i, !1)
        },
        _addClass: function(t, e, i) {
            return this._toggleClass(t, e, i, !0)
        },
        _toggleClass: function(t, e, i, n) {
            n = "boolean" == typeof n ? n : i;
            var s = "string" == typeof t || null === t;
            return (t = {
                extra: s ? e : i,
                keys: s ? t : e,
                element: s ? this.element : t,
                add: n
            }).element.toggleClass(this._classes(t), n),
            this
        },
        _on: function(e, i, n) {
            var s, o = this;
            "boolean" != typeof e && (n = i,
            i = e,
            e = !1),
            n ? (i = s = t(i),
            this.bindings = this.bindings.add(i)) : (n = i,
            i = this.element,
            s = this.widget()),
            t.each(n, (function(n, r) {
                function a() {
                    if (e || !0 !== o.options.disabled && !t(this).hasClass("ui-state-disabled"))
                        return ("string" == typeof r ? o[r] : r).apply(o, arguments)
                }
                var l;
                "string" != typeof r && (a.guid = r.guid = r.guid || a.guid || t.guid++),
                n = (l = n.match(/^([\w:-]*)\s*(.*)$/))[1] + o.eventNamespace,
                (l = l[2]) ? s.on(n, l, a) : i.on(n, a)
            }
            ))
        },
        _off: function(e, i) {
            i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace,
            e.off(i).off(i),
            this.bindings = t(this.bindings.not(e).get()),
            this.focusable = t(this.focusable.not(e).get()),
            this.hoverable = t(this.hoverable.not(e).get())
        },
        _delay: function(t, e) {
            var i = this;
            return setTimeout((function() {
                return ("string" == typeof t ? i[t] : t).apply(i, arguments)
            }
            ), e || 0)
        },
        _hoverable: function(e) {
            this.hoverable = this.hoverable.add(e),
            this._on(e, {
                mouseenter: function(e) {
                    this._addClass(t(e.currentTarget), null, "ui-state-hover")
                },
                mouseleave: function(e) {
                    this._removeClass(t(e.currentTarget), null, "ui-state-hover")
                }
            })
        },
        _focusable: function(e) {
            this.focusable = this.focusable.add(e),
            this._on(e, {
                focusin: function(e) {
                    this._addClass(t(e.currentTarget), null, "ui-state-focus")
                },
                focusout: function(e) {
                    this._removeClass(t(e.currentTarget), null, "ui-state-focus")
                }
            })
        },
        _trigger: function(e, i, n) {
            var s, o, r = this.options[e];
            if (n = n || {},
            (i = t.Event(i)).type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(),
            i.target = this.element[0],
            o = i.originalEvent)
                for (s in o)
                    s in i || (i[s] = o[s]);
            return this.element.trigger(i, n),
            !(t.isFunction(r) && !1 === r.apply(this.element[0], [i].concat(n)) || i.isDefaultPrevented())
        }
    },
    t.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, (function(e, i) {
        t.Widget.prototype["_" + e] = function(n, s, o) {
            var r;
            "string" == typeof s && (s = {
                effect: s
            });
            var a = s ? !0 !== s && "number" != typeof s && s.effect || i : e;
            "number" == typeof (s = s || {}) && (s = {
                duration: s
            }),
            r = !t.isEmptyObject(s),
            s.complete = o,
            s.delay && n.delay(s.delay),
            r && t.effects && t.effects.effect[a] ? n[e](s) : a !== e && n[a] ? n[a](s.duration, s.easing, o) : n.queue((function(i) {
                t(this)[e](),
                o && o.call(n[0]),
                i()
            }
            ))
        }
    }
    )),
    t.widget,
    t.ui.keyCode = {
        BACKSPACE: 8,
        COMMA: 188,
        DELETE: 46,
        DOWN: 40,
        END: 35,
        ENTER: 13,
        ESCAPE: 27,
        HOME: 36,
        LEFT: 37,
        PAGE_DOWN: 34,
        PAGE_UP: 33,
        PERIOD: 190,
        RIGHT: 39,
        SPACE: 32,
        TAB: 9,
        UP: 38
    },
    t.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
    var s = !1;
    t(document).on("mouseup", (function() {
        s = !1
    }
    )),
    t.widget("ui.mouse", {
        version: "1.12.1",
        options: {
            cancel: "input, textarea, button, select, option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function() {
            var e = this;
            this.element.on("mousedown." + this.widgetName, (function(t) {
                return e._mouseDown(t)
            }
            )).on("click." + this.widgetName, (function(i) {
                if (!0 === t.data(i.target, e.widgetName + ".preventClickEvent"))
                    return t.removeData(i.target, e.widgetName + ".preventClickEvent"),
                    i.stopImmediatePropagation(),
                    !1
            }
            )),
            this.started = !1
        },
        _mouseDestroy: function() {
            this.element.off("." + this.widgetName),
            this._mouseMoveDelegate && this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate)
        },
        _mouseDown: function(e) {
            if (!s) {
                this._mouseMoved = !1,
                this._mouseStarted && this._mouseUp(e),
                this._mouseDownEvent = e;
                var i = this
                  , n = 1 === e.which
                  , o = !("string" != typeof this.options.cancel || !e.target.nodeName) && t(e.target).closest(this.options.cancel).length;
                return !(n && !o && this._mouseCapture(e)) || (this.mouseDelayMet = !this.options.delay,
                this.mouseDelayMet || (this._mouseDelayTimer = setTimeout((function() {
                    i.mouseDelayMet = !0
                }
                ), this.options.delay)),
                this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = !1 !== this._mouseStart(e),
                !this._mouseStarted) ? (e.preventDefault(),
                !0) : (!0 === t.data(e.target, this.widgetName + ".preventClickEvent") && t.removeData(e.target, this.widgetName + ".preventClickEvent"),
                this._mouseMoveDelegate = function(t) {
                    return i._mouseMove(t)
                }
                ,
                this._mouseUpDelegate = function(t) {
                    return i._mouseUp(t)
                }
                ,
                this.document.on("mousemove." + this.widgetName, this._mouseMoveDelegate).on("mouseup." + this.widgetName, this._mouseUpDelegate),
                e.preventDefault(),
                s = !0))
            }
        },
        _mouseMove: function(e) {
            if (this._mouseMoved) {
                if (t.ui.ie && (!document.documentMode || document.documentMode < 9) && !e.button)
                    return this._mouseUp(e);
                if (!e.which)
                    if (e.originalEvent.altKey || e.originalEvent.ctrlKey || e.originalEvent.metaKey || e.originalEvent.shiftKey)
                        this.ignoreMissingWhich = !0;
                    else if (!this.ignoreMissingWhich)
                        return this._mouseUp(e)
            }
            return (e.which || e.button) && (this._mouseMoved = !0),
            this._mouseStarted ? (this._mouseDrag(e),
            e.preventDefault()) : (this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = !1 !== this._mouseStart(this._mouseDownEvent, e),
            this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)),
            !this._mouseStarted)
        },
        _mouseUp: function(e) {
            this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate),
            this._mouseStarted && (this._mouseStarted = !1,
            e.target === this._mouseDownEvent.target && t.data(e.target, this.widgetName + ".preventClickEvent", !0),
            this._mouseStop(e)),
            this._mouseDelayTimer && (clearTimeout(this._mouseDelayTimer),
            delete this._mouseDelayTimer),
            this.ignoreMissingWhich = !1,
            s = !1,
            e.preventDefault()
        },
        _mouseDistanceMet: function(t) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX), Math.abs(this._mouseDownEvent.pageY - t.pageY)) >= this.options.distance
        },
        _mouseDelayMet: function() {
            return this.mouseDelayMet
        },
        _mouseStart: function() {},
        _mouseDrag: function() {},
        _mouseStop: function() {},
        _mouseCapture: function() {
            return !0
        }
    }),
    t.widget("ui.slider", t.ui.mouse, {
        version: "1.12.1",
        widgetEventPrefix: "slide",
        options: {
            animate: !1,
            classes: {
                "ui-slider": "ui-corner-all",
                "ui-slider-handle": "ui-corner-all",
                "ui-slider-range": "ui-corner-all ui-widget-header"
            },
            distance: 0,
            max: 100,
            min: 0,
            orientation: "horizontal",
            range: !1,
            step: 1,
            value: 0,
            values: null,
            change: null,
            slide: null,
            start: null,
            stop: null
        },
        numPages: 5,
        _create: function() {
            this._keySliding = !1,
            this._mouseSliding = !1,
            this._animateOff = !0,
            this._handleIndex = null,
            this._detectOrientation(),
            this._mouseInit(),
            this._calculateNewMax(),
            this._addClass("ui-slider ui-slider-" + this.orientation, "ui-widget ui-widget-content"),
            this._refresh(),
            this._animateOff = !1
        },
        _refresh: function() {
            this._createRange(),
            this._createHandles(),
            this._setupEvents(),
            this._refreshValue()
        },
        _createHandles: function() {
            var e, i = this.options, n = this.element.find(".ui-slider-handle"), s = [], o = i.values && i.values.length || 1;
            for (n.length > o && (n.slice(o).remove(),
            n = n.slice(0, o)),
            e = n.length; e < o; e++)
                s.push("<span tabindex='0'></span>");
            this.handles = n.add(t(s.join("")).appendTo(this.element)),
            this._addClass(this.handles, "ui-slider-handle", "ui-state-default"),
            this.handle = this.handles.eq(0),
            this.handles.each((function(e) {
                t(this).data("ui-slider-handle-index", e).attr("tabIndex", 0)
            }
            ))
        },
        _createRange: function() {
            var e = this.options;
            e.range ? (!0 === e.range && (e.values ? e.values.length && 2 !== e.values.length ? e.values = [e.values[0], e.values[0]] : t.isArray(e.values) && (e.values = e.values.slice(0)) : e.values = [this._valueMin(), this._valueMin()]),
            this.range && this.range.length ? (this._removeClass(this.range, "ui-slider-range-min ui-slider-range-max"),
            this.range.css({
                left: "",
                bottom: ""
            })) : (this.range = t("<div>").appendTo(this.element),
            this._addClass(this.range, "ui-slider-range")),
            "min" !== e.range && "max" !== e.range || this._addClass(this.range, "ui-slider-range-" + e.range)) : (this.range && this.range.remove(),
            this.range = null)
        },
        _setupEvents: function() {
            this._off(this.handles),
            this._on(this.handles, this._handleEvents),
            this._hoverable(this.handles),
            this._focusable(this.handles)
        },
        _destroy: function() {
            this.handles.remove(),
            this.range && this.range.remove(),
            this._mouseDestroy()
        },
        _mouseCapture: function(e) {
            var i, n, s, o, r, a, l = this, c = this.options;
            return !c.disabled && (this.elementSize = {
                width: this.element.outerWidth(),
                height: this.element.outerHeight()
            },
            this.elementOffset = this.element.offset(),
            a = {
                x: e.pageX,
                y: e.pageY
            },
            i = this._normValueFromMouse(a),
            n = this._valueMax() - this._valueMin() + 1,
            this.handles.each((function(e) {
                var r = Math.abs(i - l.values(e));
                (r < n || n === r && (e === l._lastChangedValue || l.values(e) === c.min)) && (n = r,
                s = t(this),
                o = e)
            }
            )),
            !1 !== this._start(e, o) && (this._mouseSliding = !0,
            this._handleIndex = o,
            this._addClass(s, null, "ui-state-active"),
            s.trigger("focus"),
            r = s.offset(),
            a = !t(e.target).parents().addBack().is(".ui-slider-handle"),
            this._clickOffset = a ? {
                left: 0,
                top: 0
            } : {
                left: e.pageX - r.left - s.width() / 2,
                top: e.pageY - r.top - s.height() / 2 - (parseInt(s.css("borderTopWidth"), 10) || 0) - (parseInt(s.css("borderBottomWidth"), 10) || 0) + (parseInt(s.css("marginTop"), 10) || 0)
            },
            this.handles.hasClass("ui-state-hover") || this._slide(e, o, i),
            this._animateOff = !0))
        },
        _mouseStart: function() {
            return !0
        },
        _mouseDrag: function(t) {
            var e = {
                x: t.pageX,
                y: t.pageY
            };
            return e = this._normValueFromMouse(e),
            this._slide(t, this._handleIndex, e),
            !1
        },
        _mouseStop: function(t) {
            return this._removeClass(this.handles, null, "ui-state-active"),
            this._mouseSliding = !1,
            this._stop(t, this._handleIndex),
            this._change(t, this._handleIndex),
            this._handleIndex = null,
            this._clickOffset = null,
            this._animateOff = !1
        },
        _detectOrientation: function() {
            this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
        },
        _normValueFromMouse: function(t) {
            var e;
            return 1 < (t = (t = "horizontal" === this.orientation ? (e = this.elementSize.width,
            t.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (e = this.elementSize.height,
            t.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0))) / e) && (t = 1),
            t < 0 && (t = 0),
            "vertical" === this.orientation && (t = 1 - t),
            e = this._valueMax() - this._valueMin(),
            e = this._valueMin() + t * e,
            this._trimAlignValue(e)
        },
        _uiHash: function(t, e, i) {
            var n = {
                handle: this.handles[t],
                handleIndex: t,
                value: void 0 !== e ? e : this.value()
            };
            return this._hasMultipleValues() && (n.value = void 0 !== e ? e : this.values(t),
            n.values = i || this.values()),
            n
        },
        _hasMultipleValues: function() {
            return this.options.values && this.options.values.length
        },
        _start: function(t, e) {
            return this._trigger("start", t, this._uiHash(e))
        },
        _slide: function(t, e, i) {
            var n, s = this.value(), o = this.values();
            this._hasMultipleValues() && (n = this.values(e ? 0 : 1),
            s = this.values(e),
            2 === this.options.values.length && !0 === this.options.range && (i = 0 === e ? Math.min(n, i) : Math.max(n, i)),
            o[e] = i),
            i !== s && !1 !== this._trigger("slide", t, this._uiHash(e, i, o)) && (this._hasMultipleValues() ? this.values(e, i) : this.value(i))
        },
        _stop: function(t, e) {
            this._trigger("stop", t, this._uiHash(e))
        },
        _change: function(t, e) {
            this._keySliding || this._mouseSliding || (this._lastChangedValue = e,
            this._trigger("change", t, this._uiHash(e)))
        },
        value: function(t) {
            return arguments.length ? (this.options.value = this._trimAlignValue(t),
            this._refreshValue(),
            void this._change(null, 0)) : this._value()
        },
        values: function(e, i) {
            var n, s, o;
            if (1 < arguments.length)
                return this.options.values[e] = this._trimAlignValue(i),
                this._refreshValue(),
                void this._change(null, e);
            if (!arguments.length)
                return this._values();
            if (!t.isArray(e))
                return this._hasMultipleValues() ? this._values(e) : this.value();
            for (n = this.options.values,
            s = e,
            o = 0; o < n.length; o += 1)
                n[o] = this._trimAlignValue(s[o]),
                this._change(null, o);
            this._refreshValue()
        },
        _setOption: function(e, i) {
            var n, s = 0;
            switch ("range" === e && !0 === this.options.range && ("min" === i ? (this.options.value = this._values(0),
            this.options.values = null) : "max" === i && (this.options.value = this._values(this.options.values.length - 1),
            this.options.values = null)),
            t.isArray(this.options.values) && (s = this.options.values.length),
            this._super(e, i),
            e) {
            case "orientation":
                this._detectOrientation(),
                this._removeClass("ui-slider-horizontal ui-slider-vertical")._addClass("ui-slider-" + this.orientation),
                this._refreshValue(),
                this.options.range && this._refreshRange(i),
                this.handles.css("horizontal" === i ? "bottom" : "left", "");
                break;
            case "value":
                this._animateOff = !0,
                this._refreshValue(),
                this._change(null, 0),
                this._animateOff = !1;
                break;
            case "values":
                for (this._animateOff = !0,
                this._refreshValue(),
                n = s - 1; 0 <= n; n--)
                    this._change(null, n);
                this._animateOff = !1;
                break;
            case "step":
            case "min":
            case "max":
                this._animateOff = !0,
                this._calculateNewMax(),
                this._refreshValue(),
                this._animateOff = !1;
                break;
            case "range":
                this._animateOff = !0,
                this._refresh(),
                this._animateOff = !1
            }
        },
        _setOptionDisabled: function(t) {
            this._super(t),
            this._toggleClass(null, "ui-state-disabled", !!t)
        },
        _value: function() {
            var t = this.options.value;
            return this._trimAlignValue(t)
        },
        _values: function(t) {
            var e, i, n;
            if (arguments.length)
                return e = this.options.values[t],
                this._trimAlignValue(e);
            if (this._hasMultipleValues()) {
                for (i = this.options.values.slice(),
                n = 0; n < i.length; n += 1)
                    i[n] = this._trimAlignValue(i[n]);
                return i
            }
            return []
        },
        _trimAlignValue: function(t) {
            if (t <= this._valueMin())
                return this._valueMin();
            if (t >= this._valueMax())
                return this._valueMax();
            var e = 0 < this.options.step ? this.options.step : 1
              , i = (t - this._valueMin()) % e;
            return t -= i,
            2 * Math.abs(i) >= e && (t += 0 < i ? e : -e),
            parseFloat(t.toFixed(5))
        },
        _calculateNewMax: function() {
            var t = this.options.max
              , e = this._valueMin()
              , i = this.options.step;
            (t = Math.round((t - e) / i) * i + e) > this.options.max && (t -= i),
            this.max = parseFloat(t.toFixed(this._precision()))
        },
        _precision: function() {
            var t = this._precisionOf(this.options.step);
            return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))),
            t
        },
        _precisionOf: function(t) {
            var e = t.toString();
            return -1 === (t = e.indexOf(".")) ? 0 : e.length - t - 1
        },
        _valueMin: function() {
            return this.options.min
        },
        _valueMax: function() {
            return this.max
        },
        _refreshRange: function(t) {
            "vertical" === t && this.range.css({
                width: "",
                left: ""
            }),
            "horizontal" === t && this.range.css({
                height: "",
                bottom: ""
            })
        },
        _refreshValue: function() {
            var e, i, n, s, o, r = this.options.range, a = this.options, l = this, c = !this._animateOff && a.animate, h = {};
            this._hasMultipleValues() ? this.handles.each((function(n) {
                i = (l.values(n) - l._valueMin()) / (l._valueMax() - l._valueMin()) * 100,
                h["horizontal" === l.orientation ? "left" : "bottom"] = i + "%",
                t(this).stop(1, 1)[c ? "animate" : "css"](h, a.animate),
                !0 === l.options.range && ("horizontal" === l.orientation ? (0 === n && l.range.stop(1, 1)[c ? "animate" : "css"]({
                    left: i + "%"
                }, a.animate),
                1 === n && l.range[c ? "animate" : "css"]({
                    width: i - e + "%"
                }, {
                    queue: !1,
                    duration: a.animate
                })) : (0 === n && l.range.stop(1, 1)[c ? "animate" : "css"]({
                    bottom: i + "%"
                }, a.animate),
                1 === n && l.range[c ? "animate" : "css"]({
                    height: i - e + "%"
                }, {
                    queue: !1,
                    duration: a.animate
                }))),
                e = i
            }
            )) : (n = this.value(),
            s = this._valueMin(),
            o = this._valueMax(),
            i = o !== s ? (n - s) / (o - s) * 100 : 0,
            h["horizontal" === this.orientation ? "left" : "bottom"] = i + "%",
            this.handle.stop(1, 1)[c ? "animate" : "css"](h, a.animate),
            "min" === r && "horizontal" === this.orientation && this.range.stop(1, 1)[c ? "animate" : "css"]({
                width: i + "%"
            }, a.animate),
            "max" === r && "horizontal" === this.orientation && this.range.stop(1, 1)[c ? "animate" : "css"]({
                width: 100 - i + "%"
            }, a.animate),
            "min" === r && "vertical" === this.orientation && this.range.stop(1, 1)[c ? "animate" : "css"]({
                height: i + "%"
            }, a.animate),
            "max" === r && "vertical" === this.orientation && this.range.stop(1, 1)[c ? "animate" : "css"]({
                height: 100 - i + "%"
            }, a.animate))
        },
        _handleEvents: {
            keydown: function(e) {
                var i, n, s, o = t(e.target).data("ui-slider-handle-index");
                switch (e.keyCode) {
                case t.ui.keyCode.HOME:
                case t.ui.keyCode.END:
                case t.ui.keyCode.PAGE_UP:
                case t.ui.keyCode.PAGE_DOWN:
                case t.ui.keyCode.UP:
                case t.ui.keyCode.RIGHT:
                case t.ui.keyCode.DOWN:
                case t.ui.keyCode.LEFT:
                    if (e.preventDefault(),
                    !this._keySliding && (this._keySliding = !0,
                    this._addClass(t(e.target), null, "ui-state-active"),
                    !1 === this._start(e, o)))
                        return
                }
                switch (s = this.options.step,
                i = n = this._hasMultipleValues() ? this.values(o) : this.value(),
                e.keyCode) {
                case t.ui.keyCode.HOME:
                    n = this._valueMin();
                    break;
                case t.ui.keyCode.END:
                    n = this._valueMax();
                    break;
                case t.ui.keyCode.PAGE_UP:
                    n = this._trimAlignValue(i + (this._valueMax() - this._valueMin()) / this.numPages);
                    break;
                case t.ui.keyCode.PAGE_DOWN:
                    n = this._trimAlignValue(i - (this._valueMax() - this._valueMin()) / this.numPages);
                    break;
                case t.ui.keyCode.UP:
                case t.ui.keyCode.RIGHT:
                    if (i === this._valueMax())
                        return;
                    n = this._trimAlignValue(i + s);
                    break;
                case t.ui.keyCode.DOWN:
                case t.ui.keyCode.LEFT:
                    if (i === this._valueMin())
                        return;
                    n = this._trimAlignValue(i - s)
                }
                this._slide(e, o, n)
            },
            keyup: function(e) {
                var i = t(e.target).data("ui-slider-handle-index");
                this._keySliding && (this._keySliding = !1,
                this._stop(e, i),
                this._change(e, i),
                this._removeClass(t(e.target), null, "ui-state-active"))
            }
        }
    })
}
)),
function() {
    "use strict";
    function t(n) {
        if (!n)
            throw new Error("No options passed to Waypoint constructor");
        if (!n.element)
            throw new Error("No element option passed to Waypoint constructor");
        if (!n.handler)
            throw new Error("No handler option passed to Waypoint constructor");
        this.key = "waypoint-" + e,
        this.options = t.Adapter.extend({}, t.defaults, n),
        this.element = this.options.element,
        this.adapter = new t.Adapter(this.element),
        this.callback = n.handler,
        this.axis = this.options.horizontal ? "horizontal" : "vertical",
        this.enabled = this.options.enabled,
        this.triggerPoint = null,
        this.group = t.Group.findOrCreate({
            name: this.options.group,
            axis: this.axis
        }),
        this.context = t.Context.findOrCreateByElement(this.options.context),
        t.offsetAliases[this.options.offset] && (this.options.offset = t.offsetAliases[this.options.offset]),
        this.group.add(this),
        this.context.add(this),
        i[this.key] = this,
        e += 1
    }
    var e = 0
      , i = {};
    t.prototype.queueTrigger = function(t) {
        this.group.queueTrigger(this, t)
    }
    ,
    t.prototype.trigger = function(t) {
        this.enabled && this.callback && this.callback.apply(this, t)
    }
    ,
    t.prototype.destroy = function() {
        this.context.remove(this),
        this.group.remove(this),
        delete i[this.key]
    }
    ,
    t.prototype.disable = function() {
        return this.enabled = !1,
        this
    }
    ,
    t.prototype.enable = function() {
        return this.context.refresh(),
        this.enabled = !0,
        this
    }
    ,
    t.prototype.next = function() {
        return this.group.next(this)
    }
    ,
    t.prototype.previous = function() {
        return this.group.previous(this)
    }
    ,
    t.invokeAll = function(t) {
        var e = [];
        for (var n in i)
            e.push(i[n]);
        for (var s = 0, o = e.length; o > s; s++)
            e[s][t]()
    }
    ,
    t.destroyAll = function() {
        t.invokeAll("destroy")
    }
    ,
    t.disableAll = function() {
        t.invokeAll("disable")
    }
    ,
    t.enableAll = function() {
        t.invokeAll("enable")
    }
    ,
    t.refreshAll = function() {
        t.Context.refreshAll()
    }
    ,
    t.viewportHeight = function() {
        return window.innerHeight || document.documentElement.clientHeight
    }
    ,
    t.viewportWidth = function() {
        return document.documentElement.clientWidth
    }
    ,
    t.adapters = [],
    t.defaults = {
        context: window,
        continuous: !0,
        enabled: !0,
        group: "default",
        horizontal: !1,
        offset: 0
    },
    t.offsetAliases = {
        "bottom-in-view": function() {
            return this.context.innerHeight() - this.adapter.outerHeight()
        },
        "right-in-view": function() {
            return this.context.innerWidth() - this.adapter.outerWidth()
        }
    },
    window.Waypoint = t
}(),
function() {
    "use strict";
    function t(t) {
        window.setTimeout(t, 1e3 / 60)
    }
    function e(t) {
        this.element = t,
        this.Adapter = s.Adapter,
        this.adapter = new this.Adapter(t),
        this.key = "waypoint-context-" + i,
        this.didScroll = !1,
        this.didResize = !1,
        this.oldScroll = {
            x: this.adapter.scrollLeft(),
            y: this.adapter.scrollTop()
        },
        this.waypoints = {
            vertical: {},
            horizontal: {}
        },
        t.waypointContextKey = this.key,
        n[t.waypointContextKey] = this,
        i += 1,
        this.createThrottledScrollHandler(),
        this.createThrottledResizeHandler()
    }
    var i = 0
      , n = {}
      , s = window.Waypoint
      , o = window.onload;
    e.prototype.add = function(t) {
        var e = t.options.horizontal ? "horizontal" : "vertical";
        this.waypoints[e][t.key] = t,
        this.refresh()
    }
    ,
    e.prototype.checkEmpty = function() {
        var t = this.Adapter.isEmptyObject(this.waypoints.horizontal)
          , e = this.Adapter.isEmptyObject(this.waypoints.vertical);
        t && e && (this.adapter.off(".waypoints"),
        delete n[this.key])
    }
    ,
    e.prototype.createThrottledResizeHandler = function() {
        function t() {
            e.handleResize(),
            e.didResize = !1
        }
        var e = this;
        this.adapter.on("resize.waypoints", (function() {
            e.didResize || (e.didResize = !0,
            s.requestAnimationFrame(t))
        }
        ))
    }
    ,
    e.prototype.createThrottledScrollHandler = function() {
        function t() {
            e.handleScroll(),
            e.didScroll = !1
        }
        var e = this;
        this.adapter.on("scroll.waypoints", (function() {
            (!e.didScroll || s.isTouch) && (e.didScroll = !0,
            s.requestAnimationFrame(t))
        }
        ))
    }
    ,
    e.prototype.handleResize = function() {
        s.Context.refreshAll()
    }
    ,
    e.prototype.handleScroll = function() {
        var t = {}
          , e = {
            horizontal: {
                newScroll: this.adapter.scrollLeft(),
                oldScroll: this.oldScroll.x,
                forward: "right",
                backward: "left"
            },
            vertical: {
                newScroll: this.adapter.scrollTop(),
                oldScroll: this.oldScroll.y,
                forward: "down",
                backward: "up"
            }
        };
        for (var i in e) {
            var n = e[i]
              , s = n.newScroll > n.oldScroll ? n.forward : n.backward;
            for (var o in this.waypoints[i]) {
                var r = this.waypoints[i][o]
                  , a = n.oldScroll < r.triggerPoint
                  , l = n.newScroll >= r.triggerPoint;
                (a && l || !a && !l) && (r.queueTrigger(s),
                t[r.group.id] = r.group)
            }
        }
        for (var c in t)
            t[c].flushTriggers();
        this.oldScroll = {
            x: e.horizontal.newScroll,
            y: e.vertical.newScroll
        }
    }
    ,
    e.prototype.innerHeight = function() {
        return this.element == this.element.window ? s.viewportHeight() : this.adapter.innerHeight()
    }
    ,
    e.prototype.remove = function(t) {
        delete this.waypoints[t.axis][t.key],
        this.checkEmpty()
    }
    ,
    e.prototype.innerWidth = function() {
        return this.element == this.element.window ? s.viewportWidth() : this.adapter.innerWidth()
    }
    ,
    e.prototype.destroy = function() {
        var t = [];
        for (var e in this.waypoints)
            for (var i in this.waypoints[e])
                t.push(this.waypoints[e][i]);
        for (var n = 0, s = t.length; s > n; n++)
            t[n].destroy()
    }
    ,
    e.prototype.refresh = function() {
        var t, e = this.element == this.element.window, i = e ? void 0 : this.adapter.offset(), n = {};
        for (var o in this.handleScroll(),
        t = {
            horizontal: {
                contextOffset: e ? 0 : i.left,
                contextScroll: e ? 0 : this.oldScroll.x,
                contextDimension: this.innerWidth(),
                oldScroll: this.oldScroll.x,
                forward: "right",
                backward: "left",
                offsetProp: "left"
            },
            vertical: {
                contextOffset: e ? 0 : i.top,
                contextScroll: e ? 0 : this.oldScroll.y,
                contextDimension: this.innerHeight(),
                oldScroll: this.oldScroll.y,
                forward: "down",
                backward: "up",
                offsetProp: "top"
            }
        }) {
            var r = t[o];
            for (var a in this.waypoints[o]) {
                var l, c, h, u, d = this.waypoints[o][a], p = d.options.offset, f = d.triggerPoint, m = 0, g = null == f;
                d.element !== d.element.window && (m = d.adapter.offset()[r.offsetProp]),
                "function" == typeof p ? p = p.apply(d) : "string" == typeof p && (p = parseFloat(p),
                d.options.offset.indexOf("%") > -1 && (p = Math.ceil(r.contextDimension * p / 100))),
                l = r.contextScroll - r.contextOffset,
                d.triggerPoint = m + l - p,
                c = f < r.oldScroll,
                h = d.triggerPoint >= r.oldScroll,
                u = !c && !h,
                !g && (c && h) ? (d.queueTrigger(r.backward),
                n[d.group.id] = d.group) : (!g && u || g && r.oldScroll >= d.triggerPoint) && (d.queueTrigger(r.forward),
                n[d.group.id] = d.group)
            }
        }
        return s.requestAnimationFrame((function() {
            for (var t in n)
                n[t].flushTriggers()
        }
        )),
        this
    }
    ,
    e.findOrCreateByElement = function(t) {
        return e.findByElement(t) || new e(t)
    }
    ,
    e.refreshAll = function() {
        for (var t in n)
            n[t].refresh()
    }
    ,
    e.findByElement = function(t) {
        return n[t.waypointContextKey]
    }
    ,
    window.onload = function() {
        o && o(),
        e.refreshAll()
    }
    ,
    s.requestAnimationFrame = function(e) {
        (window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || t).call(window, e)
    }
    ,
    s.Context = e
}(),
function() {
    "use strict";
    function t(t, e) {
        return t.triggerPoint - e.triggerPoint
    }
    function e(t, e) {
        return e.triggerPoint - t.triggerPoint
    }
    function i(t) {
        this.name = t.name,
        this.axis = t.axis,
        this.id = this.name + "-" + this.axis,
        this.waypoints = [],
        this.clearTriggerQueues(),
        n[this.axis][this.name] = this
    }
    var n = {
        vertical: {},
        horizontal: {}
    }
      , s = window.Waypoint;
    i.prototype.add = function(t) {
        this.waypoints.push(t)
    }
    ,
    i.prototype.clearTriggerQueues = function() {
        this.triggerQueues = {
            up: [],
            down: [],
            left: [],
            right: []
        }
    }
    ,
    i.prototype.flushTriggers = function() {
        for (var i in this.triggerQueues) {
            var n = this.triggerQueues[i]
              , s = "up" === i || "left" === i;
            n.sort(s ? e : t);
            for (var o = 0, r = n.length; r > o; o += 1) {
                var a = n[o];
                (a.options.continuous || o === n.length - 1) && a.trigger([i])
            }
        }
        this.clearTriggerQueues()
    }
    ,
    i.prototype.next = function(e) {
        this.waypoints.sort(t);
        var i = s.Adapter.inArray(e, this.waypoints);
        return i === this.waypoints.length - 1 ? null : this.waypoints[i + 1]
    }
    ,
    i.prototype.previous = function(e) {
        this.waypoints.sort(t);
        var i = s.Adapter.inArray(e, this.waypoints);
        return i ? this.waypoints[i - 1] : null
    }
    ,
    i.prototype.queueTrigger = function(t, e) {
        this.triggerQueues[e].push(t)
    }
    ,
    i.prototype.remove = function(t) {
        var e = s.Adapter.inArray(t, this.waypoints);
        e > -1 && this.waypoints.splice(e, 1)
    }
    ,
    i.prototype.first = function() {
        return this.waypoints[0]
    }
    ,
    i.prototype.last = function() {
        return this.waypoints[this.waypoints.length - 1]
    }
    ,
    i.findOrCreate = function(t) {
        return n[t.axis][t.name] || new i(t)
    }
    ,
    s.Group = i
}(),
function() {
    "use strict";
    function t(t) {
        this.$element = e(t)
    }
    var e = window.jQuery
      , i = window.Waypoint;
    e.each(["innerHeight", "innerWidth", "off", "offset", "on", "outerHeight", "outerWidth", "scrollLeft", "scrollTop"], (function(e, i) {
        t.prototype[i] = function() {
            var t = Array.prototype.slice.call(arguments);
            return this.$element[i].apply(this.$element, t)
        }
    }
    )),
    e.each(["extend", "inArray", "isEmptyObject"], (function(i, n) {
        t[n] = e[n]
    }
    )),
    i.adapters.push({
        name: "jquery",
        Adapter: t
    }),
    i.Adapter = t
}(),
function() {
    "use strict";
    function t(t) {
        return function() {
            var i = []
              , n = arguments[0];
            return t.isFunction(arguments[0]) && ((n = t.extend({}, arguments[1])).handler = arguments[0]),
            this.each((function() {
                var s = t.extend({}, n, {
                    element: this
                });
                "string" == typeof s.context && (s.context = t(this).closest(s.context)[0]),
                i.push(new e(s))
            }
            )),
            i
        }
    }
    var e = window.Waypoint;
    window.jQuery && (window.jQuery.fn.waypoint = t(window.jQuery)),
    window.Zepto && (window.Zepto.fn.waypoint = t(window.Zepto))
}(),
/*!
* jquery.counterup.js 1.0
*
* Copyright 2013, Benjamin Intal http://gambit.ph @bfintal
* Released under the GPL v2 License
*
* Date: Nov 26, 2013
*/
function(t) {
    "use strict";
    t.fn.counterUp = function(e) {
        var i, n = t.extend({
            time: 400,
            delay: 10,
            offset: 100,
            beginAt: 0,
            formatter: !1,
            context: "window",
            callback: function() {}
        }, e);
        return this.each((function() {
            var e = t(this)
              , s = {
                time: t(this).data("counterup-time") || n.time,
                delay: t(this).data("counterup-delay") || n.delay,
                offset: t(this).data("counterup-offset") || n.offset,
                beginAt: t(this).data("counterup-beginat") || n.beginAt,
                context: t(this).data("counterup-context") || n.context
            };
            e.waypoint((function(o) {
                !function() {
                    var o = []
                      , r = s.time / s.delay
                      , a = t(this).attr("data-num") ? t(this).attr("data-num") : e.text()
                      , l = /[0-9]+,[0-9]+/.test(a)
                      , c = ((a = a.replace(/,/g, "")).split(".")[1] || []).length;
                    s.beginAt > a && (s.beginAt = a);
                    var h = /[0-9]+:[0-9]+:[0-9]+/.test(a);
                    if (h) {
                        var u = a.split(":")
                          , d = 1;
                        for (i = 0; u.length > 0; )
                            i += d * parseInt(u.pop(), 10),
                            d *= 60
                    }
                    for (var p = r; p >= s.beginAt / a * r; p--) {
                        var f = parseFloat(a / r * p).toFixed(c);
                        if (h) {
                            f = parseInt(i / r * p);
                            var m = parseInt(f / 3600) % 24
                              , g = parseInt(f / 60) % 60
                              , _ = parseInt(f % 60, 10);
                            f = (m < 10 ? "0" + m : m) + ":" + (g < 10 ? "0" + g : g) + ":" + (_ < 10 ? "0" + _ : _)
                        }
                        if (l)
                            for (; /(\d+)(\d{3})/.test(f.toString()); )
                                f = f.toString().replace(/(\d+)(\d{3})/, "$1,$2");
                        n.formatter && (f = n.formatter.call(this, f)),
                        o.unshift(f)
                    }
                    e.data("counterup-nums", o),
                    e.text(s.beginAt);
                    e.data("counterup-func", (function() {
                        e.data("counterup-nums") ? (e.html(e.data("counterup-nums").shift()),
                        e.data("counterup-nums").length ? setTimeout(e.data("counterup-func"), s.delay) : (e.data("counterup-nums", null),
                        e.data("counterup-func", null),
                        n.callback.call(this))) : n.callback.call(this)
                    }
                    )),
                    setTimeout(e.data("counterup-func"), s.delay)
                }(),
                this.destroy()
            }
            ), {
                offset: s.offset + "%",
                context: s.context
            })
        }
        ))
    }
}(jQuery),
function(t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : t("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto)
}((function(t) {
    var e, i, n, s, o, r, a = "Close", l = "BeforeClose", c = "MarkupParse", h = "Open", u = "Change", d = "mfp", p = ".mfp", f = "mfp-ready", m = "mfp-removing", g = "mfp-prevent-close", _ = function() {}, v = !!window.jQuery, y = t(window), b = function(t, i) {
        e.ev.on(d + t + p, i)
    }, w = function(e, i, n, s) {
        var o = document.createElement("div");
        return o.className = "mfp-" + e,
        n && (o.innerHTML = n),
        s ? i && i.appendChild(o) : (o = t(o),
        i && o.appendTo(i)),
        o
    }, T = function(i, n) {
        e.ev.triggerHandler(d + i, n),
        e.st.callbacks && (i = i.charAt(0).toLowerCase() + i.slice(1),
        e.st.callbacks[i] && e.st.callbacks[i].apply(e, t.isArray(n) ? n : [n]))
    }, x = function(i) {
        return i === r && e.currTemplate.closeBtn || (e.currTemplate.closeBtn = t(e.st.closeMarkup.replace("%title%", e.st.tClose)),
        r = i),
        e.currTemplate.closeBtn
    }, k = function() {
        t.magnificPopup.instance || ((e = new _).init(),
        t.magnificPopup.instance = e)
    };
    _.prototype = {
        constructor: _,
        init: function() {
            var i = navigator.appVersion;
            e.isLowIE = e.isIE8 = document.all && !document.addEventListener,
            e.isAndroid = /android/gi.test(i),
            e.isIOS = /iphone|ipad|ipod/gi.test(i),
            e.supportsTransition = function() {
                var t = document.createElement("p").style
                  , e = ["ms", "O", "Moz", "Webkit"];
                if (void 0 !== t.transition)
                    return !0;
                for (; e.length; )
                    if (e.pop() + "Transition"in t)
                        return !0;
                return !1
            }(),
            e.probablyMobile = e.isAndroid || e.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),
            n = t(document),
            e.popupsCache = {}
        },
        open: function(i) {
            var s;
            if (!1 === i.isObj) {
                e.items = i.items.toArray(),
                e.index = 0;
                var r, a = i.items;
                for (s = 0; s < a.length; s++)
                    if ((r = a[s]).parsed && (r = r.el[0]),
                    r === i.el[0]) {
                        e.index = s;
                        break
                    }
            } else
                e.items = t.isArray(i.items) ? i.items : [i.items],
                e.index = i.index || 0;
            if (!e.isOpen) {
                e.types = [],
                o = "",
                i.mainEl && i.mainEl.length ? e.ev = i.mainEl.eq(0) : e.ev = n,
                i.key ? (e.popupsCache[i.key] || (e.popupsCache[i.key] = {}),
                e.currTemplate = e.popupsCache[i.key]) : e.currTemplate = {},
                e.st = t.extend(!0, {}, t.magnificPopup.defaults, i),
                e.fixedContentPos = "auto" === e.st.fixedContentPos ? !e.probablyMobile : e.st.fixedContentPos,
                e.st.modal && (e.st.closeOnContentClick = !1,
                e.st.closeOnBgClick = !1,
                e.st.showCloseBtn = !1,
                e.st.enableEscapeKey = !1),
                e.bgOverlay || (e.bgOverlay = w("bg").on("click" + p, (function() {
                    e.close()
                }
                )),
                e.wrap = w("wrap").attr("tabindex", -1).on("click" + p, (function(t) {
                    e._checkIfClose(t.target) && e.close()
                }
                )),
                e.container = w("container", e.wrap)),
                e.contentContainer = w("content"),
                e.st.preloader && (e.preloader = w("preloader", e.container, e.st.tLoading));
                var l = t.magnificPopup.modules;
                for (s = 0; s < l.length; s++) {
                    var u = l[s];
                    u = u.charAt(0).toUpperCase() + u.slice(1),
                    e["init" + u].call(e)
                }
                T("BeforeOpen"),
                e.st.showCloseBtn && (e.st.closeBtnInside ? (b(c, (function(t, e, i, n) {
                    i.close_replaceWith = x(n.type)
                }
                )),
                o += " mfp-close-btn-in") : e.wrap.append(x())),
                e.st.alignTop && (o += " mfp-align-top"),
                e.fixedContentPos ? e.wrap.css({
                    overflow: e.st.overflowY,
                    overflowX: "hidden",
                    overflowY: e.st.overflowY
                }) : e.wrap.css({
                    top: y.scrollTop(),
                    position: "absolute"
                }),
                (!1 === e.st.fixedBgPos || "auto" === e.st.fixedBgPos && !e.fixedContentPos) && e.bgOverlay.css({
                    height: n.height(),
                    position: "absolute"
                }),
                e.st.enableEscapeKey && n.on("keyup" + p, (function(t) {
                    27 === t.keyCode && e.close()
                }
                )),
                y.on("resize" + p, (function() {
                    e.updateSize()
                }
                )),
                e.st.closeOnContentClick || (o += " mfp-auto-cursor"),
                o && e.wrap.addClass(o);
                var d = e.wH = y.height()
                  , m = {};
                if (e.fixedContentPos && e._hasScrollBar(d)) {
                    var g = e._getScrollbarSize();
                    g && (m.marginRight = g)
                }
                e.fixedContentPos && (e.isIE7 ? t("body, html").css("overflow", "hidden") : m.overflow = "hidden");
                var _ = e.st.mainClass;
                return e.isIE7 && (_ += " mfp-ie7"),
                _ && e._addClassToMFP(_),
                e.updateItemHTML(),
                T("BuildControls"),
                t("html").css(m),
                e.bgOverlay.add(e.wrap).prependTo(e.st.prependTo || t(document.body)),
                e._lastFocusedEl = document.activeElement,
                setTimeout((function() {
                    e.content ? (e._addClassToMFP(f),
                    e._setFocus()) : e.bgOverlay.addClass(f),
                    n.on("focusin" + p, e._onFocusIn)
                }
                ), 16),
                e.isOpen = !0,
                e.updateSize(d),
                T(h),
                i
            }
            e.updateItemHTML()
        },
        close: function() {
            e.isOpen && (T(l),
            e.isOpen = !1,
            e.st.removalDelay && !e.isLowIE && e.supportsTransition ? (e._addClassToMFP(m),
            setTimeout((function() {
                e._close()
            }
            ), e.st.removalDelay)) : e._close())
        },
        _close: function() {
            T(a);
            var i = m + " " + f + " ";
            if (e.bgOverlay.detach(),
            e.wrap.detach(),
            e.container.empty(),
            e.st.mainClass && (i += e.st.mainClass + " "),
            e._removeClassFromMFP(i),
            e.fixedContentPos) {
                var s = {
                    marginRight: ""
                };
                e.isIE7 ? t("body, html").css("overflow", "") : s.overflow = "",
                t("html").css(s)
            }
            n.off("keyup.mfp focusin" + p),
            e.ev.off(p),
            e.wrap.attr("class", "mfp-wrap").removeAttr("style"),
            e.bgOverlay.attr("class", "mfp-bg"),
            e.container.attr("class", "mfp-container"),
            !e.st.showCloseBtn || e.st.closeBtnInside && !0 !== e.currTemplate[e.currItem.type] || e.currTemplate.closeBtn && e.currTemplate.closeBtn.detach(),
            e.st.autoFocusLast && e._lastFocusedEl && t(e._lastFocusedEl).focus(),
            e.currItem = null,
            e.content = null,
            e.currTemplate = null,
            e.prevHeight = 0,
            T("AfterClose")
        },
        updateSize: function(t) {
            if (e.isIOS) {
                var i = document.documentElement.clientWidth / window.innerWidth
                  , n = window.innerHeight * i;
                e.wrap.css("height", n),
                e.wH = n
            } else
                e.wH = t || y.height();
            e.fixedContentPos || e.wrap.css("height", e.wH),
            T("Resize")
        },
        updateItemHTML: function() {
            var i = e.items[e.index];
            e.contentContainer.detach(),
            e.content && e.content.detach(),
            i.parsed || (i = e.parseEl(e.index));
            var n = i.type;
            if (T("BeforeChange", [e.currItem ? e.currItem.type : "", n]),
            e.currItem = i,
            !e.currTemplate[n]) {
                var o = !!e.st[n] && e.st[n].markup;
                T("FirstMarkupParse", o),
                e.currTemplate[n] = !o || t(o)
            }
            s && s !== i.type && e.container.removeClass("mfp-" + s + "-holder");
            var r = e["get" + n.charAt(0).toUpperCase() + n.slice(1)](i, e.currTemplate[n]);
            e.appendContent(r, n),
            i.preloaded = !0,
            T(u, i),
            s = i.type,
            e.container.prepend(e.contentContainer),
            T("AfterChange")
        },
        appendContent: function(t, i) {
            e.content = t,
            t ? e.st.showCloseBtn && e.st.closeBtnInside && !0 === e.currTemplate[i] ? e.content.find(".mfp-close").length || e.content.append(x()) : e.content = t : e.content = "",
            T("BeforeAppend"),
            e.container.addClass("mfp-" + i + "-holder"),
            e.contentContainer.append(e.content)
        },
        parseEl: function(i) {
            var n, s = e.items[i];
            if (s.tagName ? s = {
                el: t(s)
            } : (n = s.type,
            s = {
                data: s,
                src: s.src
            }),
            s.el) {
                for (var o = e.types, r = 0; r < o.length; r++)
                    if (s.el.hasClass("mfp-" + o[r])) {
                        n = o[r];
                        break
                    }
                s.src = s.el.attr("data-mfp-src"),
                s.src || (s.src = s.el.attr("href"))
            }
            return s.type = n || e.st.type || "inline",
            s.index = i,
            s.parsed = !0,
            e.items[i] = s,
            T("ElementParse", s),
            e.items[i]
        },
        addGroup: function(t, i) {
            var n = function(n) {
                n.mfpEl = this,
                e._openClick(n, t, i)
            };
            i || (i = {});
            var s = "click.magnificPopup";
            i.mainEl = t,
            i.items ? (i.isObj = !0,
            t.off(s).on(s, n)) : (i.isObj = !1,
            i.delegate ? t.off(s).on(s, i.delegate, n) : (i.items = t,
            t.off(s).on(s, n)))
        },
        _openClick: function(i, n, s) {
            if ((void 0 !== s.midClick ? s.midClick : t.magnificPopup.defaults.midClick) || !(2 === i.which || i.ctrlKey || i.metaKey || i.altKey || i.shiftKey)) {
                var o = void 0 !== s.disableOn ? s.disableOn : t.magnificPopup.defaults.disableOn;
                if (o)
                    if (t.isFunction(o)) {
                        if (!o.call(e))
                            return !0
                    } else if (y.width() < o)
                        return !0;
                i.type && (i.preventDefault(),
                e.isOpen && i.stopPropagation()),
                s.el = t(i.mfpEl),
                s.delegate && (s.items = n.find(s.delegate)),
                e.open(s)
            }
        },
        updateStatus: function(t, n) {
            if (e.preloader) {
                i !== t && e.container.removeClass("mfp-s-" + i),
                n || "loading" !== t || (n = e.st.tLoading);
                var s = {
                    status: t,
                    text: n
                };
                T("UpdateStatus", s),
                t = s.status,
                n = s.text,
                e.preloader.html(n),
                e.preloader.find("a").on("click", (function(t) {
                    t.stopImmediatePropagation()
                }
                )),
                e.container.addClass("mfp-s-" + t),
                i = t
            }
        },
        _checkIfClose: function(i) {
            if (!t(i).hasClass(g)) {
                var n = e.st.closeOnContentClick
                  , s = e.st.closeOnBgClick;
                if (n && s)
                    return !0;
                if (!e.content || t(i).hasClass("mfp-close") || e.preloader && i === e.preloader[0])
                    return !0;
                if (i === e.content[0] || t.contains(e.content[0], i)) {
                    if (n)
                        return !0
                } else if (s && t.contains(document, i))
                    return !0;
                return !1
            }
        },
        _addClassToMFP: function(t) {
            e.bgOverlay.addClass(t),
            e.wrap.addClass(t)
        },
        _removeClassFromMFP: function(t) {
            this.bgOverlay.removeClass(t),
            e.wrap.removeClass(t)
        },
        _hasScrollBar: function(t) {
            return (e.isIE7 ? n.height() : document.body.scrollHeight) > (t || y.height())
        },
        _setFocus: function() {
            (e.st.focus ? e.content.find(e.st.focus).eq(0) : e.wrap).focus()
        },
        _onFocusIn: function(i) {
            return i.target === e.wrap[0] || t.contains(e.wrap[0], i.target) ? void 0 : (e._setFocus(),
            !1)
        },
        _parseMarkup: function(e, i, n) {
            var s;
            n.data && (i = t.extend(n.data, i)),
            T(c, [e, i, n]),
            t.each(i, (function(i, n) {
                if (void 0 === n || !1 === n)
                    return !0;
                if ((s = i.split("_")).length > 1) {
                    var o = e.find(p + "-" + s[0]);
                    if (o.length > 0) {
                        var r = s[1];
                        "replaceWith" === r ? o[0] !== n[0] && o.replaceWith(n) : "img" === r ? o.is("img") ? o.attr("src", n) : o.replaceWith(t("<img>").attr("src", n).attr("class", o.attr("class"))) : o.attr(s[1], n)
                    }
                } else
                    e.find(p + "-" + i).html(n)
            }
            ))
        },
        _getScrollbarSize: function() {
            if (void 0 === e.scrollbarSize) {
                var t = document.createElement("div");
                t.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",
                document.body.appendChild(t),
                e.scrollbarSize = t.offsetWidth - t.clientWidth,
                document.body.removeChild(t)
            }
            return e.scrollbarSize
        }
    },
    t.magnificPopup = {
        instance: null,
        proto: _.prototype,
        modules: [],
        open: function(e, i) {
            return k(),
            (e = e ? t.extend(!0, {}, e) : {}).isObj = !0,
            e.index = i || 0,
            this.instance.open(e)
        },
        close: function() {
            return t.magnificPopup.instance && t.magnificPopup.instance.close()
        },
        registerModule: function(e, i) {
            i.options && (t.magnificPopup.defaults[e] = i.options),
            t.extend(this.proto, i.proto),
            this.modules.push(e)
        },
        defaults: {
            disableOn: 0,
            key: null,
            midClick: !1,
            mainClass: "",
            preloader: !0,
            focus: "",
            closeOnContentClick: !1,
            closeOnBgClick: !0,
            closeBtnInside: !0,
            showCloseBtn: !0,
            enableEscapeKey: !0,
            modal: !1,
            alignTop: !1,
            removalDelay: 0,
            prependTo: null,
            fixedContentPos: "auto",
            fixedBgPos: "auto",
            overflowY: "auto",
            closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
            tClose: "Close (Esc)",
            tLoading: "Loading...",
            autoFocusLast: !0
        }
    },
    t.fn.magnificPopup = function(i) {
        k();
        var n = t(this);
        if ("string" == typeof i)
            if ("open" === i) {
                var s, o = v ? n.data("magnificPopup") : n[0].magnificPopup, r = parseInt(arguments[1], 10) || 0;
                o.items ? s = o.items[r] : (s = n,
                o.delegate && (s = s.find(o.delegate)),
                s = s.eq(r)),
                e._openClick({
                    mfpEl: s
                }, n, o)
            } else
                e.isOpen && e[i].apply(e, Array.prototype.slice.call(arguments, 1));
        else
            i = t.extend(!0, {}, i),
            v ? n.data("magnificPopup", i) : n[0].magnificPopup = i,
            e.addGroup(n, i);
        return n
    }
    ;
    var S, C, E, O = "inline", P = function() {
        E && (C.after(E.addClass(S)).detach(),
        E = null)
    };
    t.magnificPopup.registerModule(O, {
        options: {
            hiddenClass: "hide",
            markup: "",
            tNotFound: "Content not found"
        },
        proto: {
            initInline: function() {
                e.types.push(O),
                b(a + "." + O, (function() {
                    P()
                }
                ))
            },
            getInline: function(i, n) {
                if (P(),
                i.src) {
                    var s = e.st.inline
                      , o = t(i.src);
                    if (o.length) {
                        var r = o[0].parentNode;
                        r && r.tagName && (C || (S = s.hiddenClass,
                        C = w(S),
                        S = "mfp-" + S),
                        E = o.after(C).detach().removeClass(S)),
                        e.updateStatus("ready")
                    } else
                        e.updateStatus("error", s.tNotFound),
                        o = t("<div>");
                    return i.inlineElement = o,
                    o
                }
                return e.updateStatus("ready"),
                e._parseMarkup(n, {}, i),
                n
            }
        }
    });
    var A, I = "ajax", D = function() {
        A && t(document.body).removeClass(A)
    }, L = function() {
        D(),
        e.req && e.req.abort()
    };
    t.magnificPopup.registerModule(I, {
        options: {
            settings: null,
            cursor: "mfp-ajax-cur",
            tError: '<a href="%url%">The content</a> could not be loaded.'
        },
        proto: {
            initAjax: function() {
                e.types.push(I),
                A = e.st.ajax.cursor,
                b(a + "." + I, L),
                b("BeforeChange." + I, L)
            },
            getAjax: function(i) {
                A && t(document.body).addClass(A),
                e.updateStatus("loading");
                var n = t.extend({
                    url: i.src,
                    success: function(n, s, o) {
                        var r = {
                            data: n,
                            xhr: o
                        };
                        T("ParseAjax", r),
                        e.appendContent(t(r.data), I),
                        i.finished = !0,
                        D(),
                        e._setFocus(),
                        setTimeout((function() {
                            e.wrap.addClass(f)
                        }
                        ), 16),
                        e.updateStatus("ready"),
                        T("AjaxContentAdded")
                    },
                    error: function() {
                        D(),
                        i.finished = i.loadError = !0,
                        e.updateStatus("error", e.st.ajax.tError.replace("%url%", i.src))
                    }
                }, e.st.ajax.settings);
                return e.req = t.ajax(n),
                ""
            }
        }
    });
    var M, z = function(i) {
        if (i.data && void 0 !== i.data.title)
            return i.data.title;
        var n = e.st.image.titleSrc;
        if (n) {
            if (t.isFunction(n))
                return n.call(e, i);
            if (i.el)
                return i.el.attr(n) || ""
        }
        return ""
    };
    t.magnificPopup.registerModule("image", {
        options: {
            markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
            cursor: "mfp-zoom-out-cur",
            titleSrc: "title",
            verticalFit: !0,
            tError: '<a href="%url%">The image</a> could not be loaded.'
        },
        proto: {
            initImage: function() {
                var i = e.st.image
                  , n = ".image";
                e.types.push("image"),
                b(h + n, (function() {
                    "image" === e.currItem.type && i.cursor && t(document.body).addClass(i.cursor)
                }
                )),
                b(a + n, (function() {
                    i.cursor && t(document.body).removeClass(i.cursor),
                    y.off("resize" + p)
                }
                )),
                b("Resize" + n, e.resizeImage),
                e.isLowIE && b("AfterChange", e.resizeImage)
            },
            resizeImage: function() {
                var t = e.currItem;
                if (t && t.img && e.st.image.verticalFit) {
                    var i = 0;
                    e.isLowIE && (i = parseInt(t.img.css("padding-top"), 10) + parseInt(t.img.css("padding-bottom"), 10)),
                    t.img.css("max-height", e.wH - i)
                }
            },
            _onImageHasSize: function(t) {
                t.img && (t.hasSize = !0,
                M && clearInterval(M),
                t.isCheckingImgSize = !1,
                T("ImageHasSize", t),
                t.imgHidden && (e.content && e.content.removeClass("mfp-loading"),
                t.imgHidden = !1))
            },
            findImageSize: function(t) {
                var i = 0
                  , n = t.img[0]
                  , s = function(o) {
                    M && clearInterval(M),
                    M = setInterval((function() {
                        return n.naturalWidth > 0 ? void e._onImageHasSize(t) : (i > 200 && clearInterval(M),
                        void (3 === ++i ? s(10) : 40 === i ? s(50) : 100 === i && s(500)))
                    }
                    ), o)
                };
                s(1)
            },
            getImage: function(i, n) {
                var s = 0
                  , o = function() {
                    i && (i.img[0].complete ? (i.img.off(".mfploader"),
                    i === e.currItem && (e._onImageHasSize(i),
                    e.updateStatus("ready")),
                    i.hasSize = !0,
                    i.loaded = !0,
                    T("ImageLoadComplete")) : 200 > ++s ? setTimeout(o, 100) : r())
                }
                  , r = function() {
                    i && (i.img.off(".mfploader"),
                    i === e.currItem && (e._onImageHasSize(i),
                    e.updateStatus("error", a.tError.replace("%url%", i.src))),
                    i.hasSize = !0,
                    i.loaded = !0,
                    i.loadError = !0)
                }
                  , a = e.st.image
                  , l = n.find(".mfp-img");
                if (l.length) {
                    var c = document.createElement("img");
                    c.className = "mfp-img",
                    i.el && i.el.find("img").length && (c.alt = i.el.find("img").attr("alt")),
                    i.img = t(c).on("load.mfploader", o).on("error.mfploader", r),
                    c.src = i.src,
                    l.is("img") && (i.img = i.img.clone()),
                    (c = i.img[0]).naturalWidth > 0 ? i.hasSize = !0 : c.width || (i.hasSize = !1)
                }
                return e._parseMarkup(n, {
                    title: z(i),
                    img_replaceWith: i.img
                }, i),
                e.resizeImage(),
                i.hasSize ? (M && clearInterval(M),
                i.loadError ? (n.addClass("mfp-loading"),
                e.updateStatus("error", a.tError.replace("%url%", i.src))) : (n.removeClass("mfp-loading"),
                e.updateStatus("ready")),
                n) : (e.updateStatus("loading"),
                i.loading = !0,
                i.hasSize || (i.imgHidden = !0,
                n.addClass("mfp-loading"),
                e.findImageSize(i)),
                n)
            }
        }
    });
    var R;
    t.magnificPopup.registerModule("zoom", {
        options: {
            enabled: !1,
            easing: "ease-in-out",
            duration: 300,
            opener: function(t) {
                return t.is("img") ? t : t.find("img")
            }
        },
        proto: {
            initZoom: function() {
                var t, i = e.st.zoom, n = ".zoom";
                if (i.enabled && e.supportsTransition) {
                    var s, o, r = i.duration, c = function(t) {
                        var e = t.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image")
                          , n = "all " + i.duration / 1e3 + "s " + i.easing
                          , s = {
                            position: "fixed",
                            zIndex: 9999,
                            left: 0,
                            top: 0,
                            "-webkit-backface-visibility": "hidden"
                        }
                          , o = "transition";
                        return s["-webkit-" + o] = s["-moz-" + o] = s["-o-" + o] = s[o] = n,
                        e.css(s),
                        e
                    }, h = function() {
                        e.content.css("visibility", "visible")
                    };
                    b("BuildControls" + n, (function() {
                        if (e._allowZoom()) {
                            if (clearTimeout(s),
                            e.content.css("visibility", "hidden"),
                            !(t = e._getItemToZoom()))
                                return void h();
                            (o = c(t)).css(e._getOffset()),
                            e.wrap.append(o),
                            s = setTimeout((function() {
                                o.css(e._getOffset(!0)),
                                s = setTimeout((function() {
                                    h(),
                                    setTimeout((function() {
                                        o.remove(),
                                        t = o = null,
                                        T("ZoomAnimationEnded")
                                    }
                                    ), 16)
                                }
                                ), r)
                            }
                            ), 16)
                        }
                    }
                    )),
                    b(l + n, (function() {
                        if (e._allowZoom()) {
                            if (clearTimeout(s),
                            e.st.removalDelay = r,
                            !t) {
                                if (!(t = e._getItemToZoom()))
                                    return;
                                o = c(t)
                            }
                            o.css(e._getOffset(!0)),
                            e.wrap.append(o),
                            e.content.css("visibility", "hidden"),
                            setTimeout((function() {
                                o.css(e._getOffset())
                            }
                            ), 16)
                        }
                    }
                    )),
                    b(a + n, (function() {
                        e._allowZoom() && (h(),
                        o && o.remove(),
                        t = null)
                    }
                    ))
                }
            },
            _allowZoom: function() {
                return "image" === e.currItem.type
            },
            _getItemToZoom: function() {
                return !!e.currItem.hasSize && e.currItem.img
            },
            _getOffset: function(i) {
                var n, s = (n = i ? e.currItem.img : e.st.zoom.opener(e.currItem.el || e.currItem)).offset(), o = parseInt(n.css("padding-top"), 10), r = parseInt(n.css("padding-bottom"), 10);
                s.top -= t(window).scrollTop() - o;
                var a = {
                    width: n.width(),
                    height: (v ? n.innerHeight() : n[0].offsetHeight) - r - o
                };
                return void 0 === R && (R = void 0 !== document.createElement("p").style.MozTransform),
                R ? a["-moz-transform"] = a.transform = "translate(" + s.left + "px," + s.top + "px)" : (a.left = s.left,
                a.top = s.top),
                a
            }
        }
    });
    var j = "iframe"
      , N = function(t) {
        if (e.currTemplate[j]) {
            var i = e.currTemplate[j].find("iframe");
            i.length && (t || (i[0].src = "//about:blank"),
            e.isIE8 && i.css("display", t ? "block" : "none"))
        }
    };
    t.magnificPopup.registerModule(j, {
        options: {
            markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
            srcAction: "iframe_src",
            patterns: {
                youtube: {
                    index: "youtube.com",
                    id: "v=",
                    src: "//www.youtube.com/embed/%id%?autoplay=1"
                },
                vimeo: {
                    index: "vimeo.com/",
                    id: "/",
                    src: "//player.vimeo.com/video/%id%?autoplay=1"
                },
                gmaps: {
                    index: "//maps.google.",
                    src: "%id%&output=embed"
                }
            }
        },
        proto: {
            initIframe: function() {
                e.types.push(j),
                b("BeforeChange", (function(t, e, i) {
                    e !== i && (e === j ? N() : i === j && N(!0))
                }
                )),
                b(a + "." + j, (function() {
                    N()
                }
                ))
            },
            getIframe: function(i, n) {
                var s = i.src
                  , o = e.st.iframe;
                t.each(o.patterns, (function() {
                    return s.indexOf(this.index) > -1 ? (this.id && (s = "string" == typeof this.id ? s.substr(s.lastIndexOf(this.id) + this.id.length, s.length) : this.id.call(this, s)),
                    s = this.src.replace("%id%", s),
                    !1) : void 0
                }
                ));
                var r = {};
                return o.srcAction && (r[o.srcAction] = s),
                e._parseMarkup(n, r, i),
                e.updateStatus("ready"),
                n
            }
        }
    });
    var $ = function(t) {
        var i = e.items.length;
        return t > i - 1 ? t - i : 0 > t ? i + t : t
    }
      , F = function(t, e, i) {
        return t.replace(/%curr%/gi, e + 1).replace(/%total%/gi, i)
    };
    t.magnificPopup.registerModule("gallery", {
        options: {
            enabled: !1,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
            preload: [0, 2],
            navigateByImgClick: !0,
            arrows: !0,
            tPrev: "Previous (Left arrow key)",
            tNext: "Next (Right arrow key)",
            tCounter: "%curr% of %total%"
        },
        proto: {
            initGallery: function() {
                var i = e.st.gallery
                  , s = ".mfp-gallery";
                return e.direction = !0,
                !(!i || !i.enabled) && (o += " mfp-gallery",
                b(h + s, (function() {
                    i.navigateByImgClick && e.wrap.on("click" + s, ".mfp-img", (function() {
                        return e.items.length > 1 ? (e.next(),
                        !1) : void 0
                    }
                    )),
                    n.on("keydown" + s, (function(t) {
                        37 === t.keyCode ? e.prev() : 39 === t.keyCode && e.next()
                    }
                    ))
                }
                )),
                b("UpdateStatus" + s, (function(t, i) {
                    i.text && (i.text = F(i.text, e.currItem.index, e.items.length))
                }
                )),
                b(c + s, (function(t, n, s, o) {
                    var r = e.items.length;
                    s.counter = r > 1 ? F(i.tCounter, o.index, r) : ""
                }
                )),
                b("BuildControls" + s, (function() {
                    if (e.items.length > 1 && i.arrows && !e.arrowLeft) {
                        var n = i.arrowMarkup
                          , s = e.arrowLeft = t(n.replace(/%title%/gi, i.tPrev).replace(/%dir%/gi, "left")).addClass(g)
                          , o = e.arrowRight = t(n.replace(/%title%/gi, i.tNext).replace(/%dir%/gi, "right")).addClass(g);
                        s.click((function() {
                            e.prev()
                        }
                        )),
                        o.click((function() {
                            e.next()
                        }
                        )),
                        e.container.append(s.add(o))
                    }
                }
                )),
                b(u + s, (function() {
                    e._preloadTimeout && clearTimeout(e._preloadTimeout),
                    e._preloadTimeout = setTimeout((function() {
                        e.preloadNearbyImages(),
                        e._preloadTimeout = null
                    }
                    ), 16)
                }
                )),
                void b(a + s, (function() {
                    n.off(s),
                    e.wrap.off("click" + s),
                    e.arrowRight = e.arrowLeft = null
                }
                )))
            },
            next: function() {
                e.direction = !0,
                e.index = $(e.index + 1),
                e.updateItemHTML()
            },
            prev: function() {
                e.direction = !1,
                e.index = $(e.index - 1),
                e.updateItemHTML()
            },
            goTo: function(t) {
                e.direction = t >= e.index,
                e.index = t,
                e.updateItemHTML()
            },
            preloadNearbyImages: function() {
                var t, i = e.st.gallery.preload, n = Math.min(i[0], e.items.length), s = Math.min(i[1], e.items.length);
                for (t = 1; t <= (e.direction ? s : n); t++)
                    e._preloadItem(e.index + t);
                for (t = 1; t <= (e.direction ? n : s); t++)
                    e._preloadItem(e.index - t)
            },
            _preloadItem: function(i) {
                if (i = $(i),
                !e.items[i].preloaded) {
                    var n = e.items[i];
                    n.parsed || (n = e.parseEl(i)),
                    T("LazyLoad", n),
                    "image" === n.type && (n.img = t('<img class="mfp-img" />').on("load.mfploader", (function() {
                        n.hasSize = !0
                    }
                    )).on("error.mfploader", (function() {
                        n.hasSize = !0,
                        n.loadError = !0,
                        T("LazyLoadError", n)
                    }
                    )).attr("src", n.src)),
                    n.preloaded = !0
                }
            }
        }
    });
    var W = "retina";
    t.magnificPopup.registerModule(W, {
        options: {
            replaceSrc: function(t) {
                return t.src.replace(/\.\w+$/, (function(t) {
                    return "@2x" + t
                }
                ))
            },
            ratio: 1
        },
        proto: {
            initRetina: function() {
                if (window.devicePixelRatio > 1) {
                    var t = e.st.retina
                      , i = t.ratio;
                    (i = isNaN(i) ? i() : i) > 1 && (b("ImageHasSize." + W, (function(t, e) {
                        e.img.css({
                            "max-width": e.img[0].naturalWidth / i,
                            width: "100%"
                        })
                    }
                    )),
                    b("ElementParse." + W, (function(e, n) {
                        n.src = t.replaceSrc(n, i)
                    }
                    )))
                }
            }
        }
    }),
    k()
}
)),
function(t) {
    t.fn.niceSelect = function(e) {
        function i(e) {
            e.after(t("<div></div>").addClass("nice-select").addClass(e.attr("class") || "").addClass(e.attr("disabled") ? "disabled" : "").attr("tabindex", e.attr("disabled") ? null : "0").html('<span class="current"></span><ul class="list"></ul>'));
            var i = e.next()
              , n = e.find("option")
              , s = e.find("option:selected");
            i.find(".current").html(s.data("display") || s.text()),
            n.each((function(e) {
                var n = t(this)
                  , s = n.data("display");
                i.find("ul").append(t("<li></li>").attr("data-value", n.val()).attr("data-display", s || null).addClass("option" + (n.is(":selected") ? " selected" : "") + (n.is(":disabled") ? " disabled" : "")).html(n.text()))
            }
            ))
        }
        if ("string" == typeof e)
            return "update" == e ? this.each((function() {
                var e = t(this)
                  , n = t(this).next(".nice-select")
                  , s = n.hasClass("open");
                n.length && (n.remove(),
                i(e),
                s && e.next().trigger("click"))
            }
            )) : "destroy" == e ? (this.each((function() {
                var e = t(this)
                  , i = t(this).next(".nice-select");
                i.length && (i.remove(),
                e.css("display", ""))
            }
            )),
            0 == t(".nice-select").length && t(document).off(".nice_select")) : console.log('Method "' + e + '" does not exist.'),
            this;
        this.hide(),
        this.each((function() {
            var e = t(this);
            e.next().hasClass("nice-select") || i(e)
        }
        )),
        t(document).off(".nice_select"),
        t(document).on("click.nice_select", ".nice-select", (function(e) {
            var i = t(this);
            t(".nice-select").not(i).removeClass("open"),
            i.toggleClass("open"),
            i.hasClass("open") ? (i.find(".option"),
            i.find(".focus").removeClass("focus"),
            i.find(".selected").addClass("focus")) : i.focus()
        }
        )),
        t(document).on("click.nice_select", (function(e) {
            0 === t(e.target).closest(".nice-select").length && t(".nice-select").removeClass("open").find(".option")
        }
        )),
        t(document).on("click.nice_select", ".nice-select .option:not(.disabled)", (function(e) {
            var i = t(this)
              , n = i.closest(".nice-select");
            n.find(".selected").removeClass("selected"),
            i.addClass("selected");
            var s = i.data("display") || i.text();
            n.find(".current").text(s),
            n.prev("select").val(i.data("value")).trigger("change")
        }
        )),
        t(document).on("keydown.nice_select", ".nice-select", (function(e) {
            var i = t(this)
              , n = t(i.find(".focus") || i.find(".list .option.selected"));
            if (32 == e.keyCode || 13 == e.keyCode)
                return i.hasClass("open") ? n.trigger("click") : i.trigger("click"),
                !1;
            if (40 == e.keyCode) {
                if (i.hasClass("open")) {
                    var s = n.nextAll(".option:not(.disabled)").first();
                    s.length > 0 && (i.find(".focus").removeClass("focus"),
                    s.addClass("focus"))
                } else
                    i.trigger("click");
                return !1
            }
            if (38 == e.keyCode) {
                if (i.hasClass("open")) {
                    var o = n.prevAll(".option:not(.disabled)").first();
                    o.length > 0 && (i.find(".focus").removeClass("focus"),
                    o.addClass("focus"))
                } else
                    i.trigger("click");
                return !1
            }
            if (27 == e.keyCode)
                i.hasClass("open") && i.trigger("click");
            else if (9 == e.keyCode && i.hasClass("open"))
                return !1
        }
        ));
        var n = document.createElement("a").style;
        return n.cssText = "pointer-events:auto",
        "auto" !== n.pointerEvents && t("html").addClass("no-csspointerevents"),
        this
    }
}(jQuery),
function(t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], t) : "undefined" != typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
}((function(t) {
    "use strict";
    var e = window.Slick || {};
    (e = function() {
        var e = 0;
        return function(i, n) {
            var s, o = this;
            o.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: t(i),
                appendDots: t(i),
                arrows: !0,
                asNavFor: null,
                prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function(e, i) {
                    return t('<button type="button" />').text(i + 1)
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: .35,
                fade: !1,
                focusOnSelect: !1,
                focusOnChange: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: "ondemand",
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnFocus: !0,
                pauseOnDotsHover: !1,
                respondTo: "window",
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: "",
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                useTransform: !0,
                variableWidth: !1,
                vertical: !1,
                verticalSwiping: !1,
                waitForAnimate: !0,
                zIndex: 1e3
            },
            o.initials = {
                animating: !1,
                dragging: !1,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                scrolling: !1,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: !1,
                slideOffset: 0,
                swipeLeft: null,
                swiping: !1,
                $list: null,
                touchObject: {},
                transformsEnabled: !1,
                unslicked: !1
            },
            t.extend(o, o.initials),
            o.activeBreakpoint = null,
            o.animType = null,
            o.animProp = null,
            o.breakpoints = [],
            o.breakpointSettings = [],
            o.cssTransitions = !1,
            o.focussed = !1,
            o.interrupted = !1,
            o.hidden = "hidden",
            o.paused = !0,
            o.positionProp = null,
            o.respondTo = null,
            o.rowCount = 1,
            o.shouldClick = !0,
            o.$slider = t(i),
            o.$slidesCache = null,
            o.transformType = null,
            o.transitionType = null,
            o.visibilityChange = "visibilitychange",
            o.windowWidth = 0,
            o.windowTimer = null,
            s = t(i).data("slick") || {},
            o.options = t.extend({}, o.defaults, n, s),
            o.currentSlide = o.options.initialSlide,
            o.originalSettings = o.options,
            void 0 !== document.mozHidden ? (o.hidden = "mozHidden",
            o.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (o.hidden = "webkitHidden",
            o.visibilityChange = "webkitvisibilitychange"),
            o.autoPlay = t.proxy(o.autoPlay, o),
            o.autoPlayClear = t.proxy(o.autoPlayClear, o),
            o.autoPlayIterator = t.proxy(o.autoPlayIterator, o),
            o.changeSlide = t.proxy(o.changeSlide, o),
            o.clickHandler = t.proxy(o.clickHandler, o),
            o.selectHandler = t.proxy(o.selectHandler, o),
            o.setPosition = t.proxy(o.setPosition, o),
            o.swipeHandler = t.proxy(o.swipeHandler, o),
            o.dragHandler = t.proxy(o.dragHandler, o),
            o.keyHandler = t.proxy(o.keyHandler, o),
            o.instanceUid = e++,
            o.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/,
            o.registerBreakpoints(),
            o.init(!0)
        }
    }()).prototype.activateADA = function() {
        this.$slideTrack.find(".slick-active").attr({
            "aria-hidden": "false"
        }).find("a, input, button, select").attr({
            tabindex: "0"
        })
    }
    ,
    e.prototype.addSlide = e.prototype.slickAdd = function(e, i, n) {
        var s = this;
        if ("boolean" == typeof i)
            n = i,
            i = null;
        else if (i < 0 || i >= s.slideCount)
            return !1;
        s.unload(),
        "number" == typeof i ? 0 === i && 0 === s.$slides.length ? t(e).appendTo(s.$slideTrack) : n ? t(e).insertBefore(s.$slides.eq(i)) : t(e).insertAfter(s.$slides.eq(i)) : !0 === n ? t(e).prependTo(s.$slideTrack) : t(e).appendTo(s.$slideTrack),
        s.$slides = s.$slideTrack.children(this.options.slide),
        s.$slideTrack.children(this.options.slide).detach(),
        s.$slideTrack.append(s.$slides),
        s.$slides.each((function(e, i) {
            t(i).attr("data-slick-index", e)
        }
        )),
        s.$slidesCache = s.$slides,
        s.reinit()
    }
    ,
    e.prototype.animateHeight = function() {
        var t = this;
        if (1 === t.options.slidesToShow && !0 === t.options.adaptiveHeight && !1 === t.options.vertical) {
            var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
            t.$list.animate({
                height: e
            }, t.options.speed)
        }
    }
    ,
    e.prototype.animateSlide = function(e, i) {
        var n = {}
          , s = this;
        s.animateHeight(),
        !0 === s.options.rtl && !1 === s.options.vertical && (e = -e),
        !1 === s.transformsEnabled ? !1 === s.options.vertical ? s.$slideTrack.animate({
            left: e
        }, s.options.speed, s.options.easing, i) : s.$slideTrack.animate({
            top: e
        }, s.options.speed, s.options.easing, i) : !1 === s.cssTransitions ? (!0 === s.options.rtl && (s.currentLeft = -s.currentLeft),
        t({
            animStart: s.currentLeft
        }).animate({
            animStart: e
        }, {
            duration: s.options.speed,
            easing: s.options.easing,
            step: function(t) {
                t = Math.ceil(t),
                !1 === s.options.vertical ? (n[s.animType] = "translate(" + t + "px, 0px)",
                s.$slideTrack.css(n)) : (n[s.animType] = "translate(0px," + t + "px)",
                s.$slideTrack.css(n))
            },
            complete: function() {
                i && i.call()
            }
        })) : (s.applyTransition(),
        e = Math.ceil(e),
        !1 === s.options.vertical ? n[s.animType] = "translate3d(" + e + "px, 0px, 0px)" : n[s.animType] = "translate3d(0px," + e + "px, 0px)",
        s.$slideTrack.css(n),
        i && setTimeout((function() {
            s.disableTransition(),
            i.call()
        }
        ), s.options.speed))
    }
    ,
    e.prototype.getNavTarget = function() {
        var e = this.options.asNavFor;
        return e && null !== e && (e = t(e).not(this.$slider)),
        e
    }
    ,
    e.prototype.asNavFor = function(e) {
        var i = this.getNavTarget();
        null !== i && "object" == typeof i && i.each((function() {
            var i = t(this).slick("getSlick");
            i.unslicked || i.slideHandler(e, !0)
        }
        ))
    }
    ,
    e.prototype.applyTransition = function(t) {
        var e = this
          , i = {};
        !1 === e.options.fade ? i[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : i[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase,
        !1 === e.options.fade ? e.$slideTrack.css(i) : e.$slides.eq(t).css(i)
    }
    ,
    e.prototype.autoPlay = function() {
        var t = this;
        t.autoPlayClear(),
        t.slideCount > t.options.slidesToShow && (t.autoPlayTimer = setInterval(t.autoPlayIterator, t.options.autoplaySpeed))
    }
    ,
    e.prototype.autoPlayClear = function() {
        this.autoPlayTimer && clearInterval(this.autoPlayTimer)
    }
    ,
    e.prototype.autoPlayIterator = function() {
        var t = this
          , e = t.currentSlide + t.options.slidesToScroll;
        t.paused || t.interrupted || t.focussed || (!1 === t.options.infinite && (1 === t.direction && t.currentSlide + 1 === t.slideCount - 1 ? t.direction = 0 : 0 === t.direction && (e = t.currentSlide - t.options.slidesToScroll,
        t.currentSlide - 1 == 0 && (t.direction = 1))),
        t.slideHandler(e))
    }
    ,
    e.prototype.buildArrows = function() {
        var e = this;
        !0 === e.options.arrows && (e.$prevArrow = t(e.options.prevArrow).addClass("slick-arrow"),
        e.$nextArrow = t(e.options.nextArrow).addClass("slick-arrow"),
        e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
        e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
        e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows),
        e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows),
        !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            tabindex: "-1"
        }))
    }
    ,
    e.prototype.buildDots = function() {
        var e, i, n = this;
        if (!0 === n.options.dots) {
            for (n.$slider.addClass("slick-dotted"),
            i = t("<ul />").addClass(n.options.dotsClass),
            e = 0; e <= n.getDotCount(); e += 1)
                i.append(t("<li />").append(n.options.customPaging.call(this, n, e)));
            n.$dots = i.appendTo(n.options.appendDots),
            n.$dots.find("li").first().addClass("slick-active")
        }
    }
    ,
    e.prototype.buildOut = function() {
        var e = this;
        e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"),
        e.slideCount = e.$slides.length,
        e.$slides.each((function(e, i) {
            t(i).attr("data-slick-index", e).data("originalStyling", t(i).attr("style") || "")
        }
        )),
        e.$slider.addClass("slick-slider"),
        e.$slideTrack = 0 === e.slideCount ? t('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(),
        e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent(),
        e.$slideTrack.css("opacity", 0),
        !0 !== e.options.centerMode && !0 !== e.options.swipeToSlide || (e.options.slidesToScroll = 1),
        t("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"),
        e.setupInfinite(),
        e.buildArrows(),
        e.buildDots(),
        e.updateDots(),
        e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0),
        !0 === e.options.draggable && e.$list.addClass("draggable")
    }
    ,
    e.prototype.buildRows = function() {
        var t, e, i, n, s, o, r, a = this;
        if (n = document.createDocumentFragment(),
        o = a.$slider.children(),
        a.options.rows > 1) {
            for (r = a.options.slidesPerRow * a.options.rows,
            s = Math.ceil(o.length / r),
            t = 0; t < s; t++) {
                var l = document.createElement("div");
                for (e = 0; e < a.options.rows; e++) {
                    var c = document.createElement("div");
                    for (i = 0; i < a.options.slidesPerRow; i++) {
                        var h = t * r + (e * a.options.slidesPerRow + i);
                        o.get(h) && c.appendChild(o.get(h))
                    }
                    l.appendChild(c)
                }
                n.appendChild(l)
            }
            a.$slider.empty().append(n),
            a.$slider.children().children().children().css({
                width: 100 / a.options.slidesPerRow + "%",
                display: "inline-block"
            })
        }
    }
    ,
    e.prototype.checkResponsive = function(e, i) {
        var n, s, o, r = this, a = !1, l = r.$slider.width(), c = window.innerWidth || t(window).width();
        if ("window" === r.respondTo ? o = c : "slider" === r.respondTo ? o = l : "min" === r.respondTo && (o = Math.min(c, l)),
        r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
            for (n in s = null,
            r.breakpoints)
                r.breakpoints.hasOwnProperty(n) && (!1 === r.originalSettings.mobileFirst ? o < r.breakpoints[n] && (s = r.breakpoints[n]) : o > r.breakpoints[n] && (s = r.breakpoints[n]));
            null !== s ? null !== r.activeBreakpoint ? (s !== r.activeBreakpoint || i) && (r.activeBreakpoint = s,
            "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = t.extend({}, r.originalSettings, r.breakpointSettings[s]),
            !0 === e && (r.currentSlide = r.options.initialSlide),
            r.refresh(e)),
            a = s) : (r.activeBreakpoint = s,
            "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = t.extend({}, r.originalSettings, r.breakpointSettings[s]),
            !0 === e && (r.currentSlide = r.options.initialSlide),
            r.refresh(e)),
            a = s) : null !== r.activeBreakpoint && (r.activeBreakpoint = null,
            r.options = r.originalSettings,
            !0 === e && (r.currentSlide = r.options.initialSlide),
            r.refresh(e),
            a = s),
            e || !1 === a || r.$slider.trigger("breakpoint", [r, a])
        }
    }
    ,
    e.prototype.changeSlide = function(e, i) {
        var n, s, o = this, r = t(e.currentTarget);
        switch (r.is("a") && e.preventDefault(),
        r.is("li") || (r = r.closest("li")),
        n = o.slideCount % o.options.slidesToScroll != 0 ? 0 : (o.slideCount - o.currentSlide) % o.options.slidesToScroll,
        e.data.message) {
        case "previous":
            s = 0 === n ? o.options.slidesToScroll : o.options.slidesToShow - n,
            o.slideCount > o.options.slidesToShow && o.slideHandler(o.currentSlide - s, !1, i);
            break;
        case "next":
            s = 0 === n ? o.options.slidesToScroll : n,
            o.slideCount > o.options.slidesToShow && o.slideHandler(o.currentSlide + s, !1, i);
            break;
        case "index":
            var a = 0 === e.data.index ? 0 : e.data.index || r.index() * o.options.slidesToScroll;
            o.slideHandler(o.checkNavigable(a), !1, i),
            r.children().trigger("focus");
            break;
        default:
            return
        }
    }
    ,
    e.prototype.checkNavigable = function(t) {
        var e, i;
        if (i = 0,
        t > (e = this.getNavigableIndexes())[e.length - 1])
            t = e[e.length - 1];
        else
            for (var n in e) {
                if (t < e[n]) {
                    t = i;
                    break
                }
                i = e[n]
            }
        return t
    }
    ,
    e.prototype.cleanUpEvents = function() {
        var e = this;
        e.options.dots && null !== e.$dots && (t("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", t.proxy(e.interrupt, e, !0)).off("mouseleave.slick", t.proxy(e.interrupt, e, !1)),
        !0 === e.options.accessibility && e.$dots.off("keydown.slick", e.keyHandler)),
        e.$slider.off("focus.slick blur.slick"),
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide),
        e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide),
        !0 === e.options.accessibility && (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler),
        e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))),
        e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler),
        e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler),
        e.$list.off("touchend.slick mouseup.slick", e.swipeHandler),
        e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler),
        e.$list.off("click.slick", e.clickHandler),
        t(document).off(e.visibilityChange, e.visibility),
        e.cleanUpSlideEvents(),
        !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler),
        !0 === e.options.focusOnSelect && t(e.$slideTrack).children().off("click.slick", e.selectHandler),
        t(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange),
        t(window).off("resize.slick.slick-" + e.instanceUid, e.resize),
        t("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault),
        t(window).off("load.slick.slick-" + e.instanceUid, e.setPosition)
    }
    ,
    e.prototype.cleanUpSlideEvents = function() {
        var e = this;
        e.$list.off("mouseenter.slick", t.proxy(e.interrupt, e, !0)),
        e.$list.off("mouseleave.slick", t.proxy(e.interrupt, e, !1))
    }
    ,
    e.prototype.cleanUpRows = function() {
        var t, e = this;
        e.options.rows > 1 && ((t = e.$slides.children().children()).removeAttr("style"),
        e.$slider.empty().append(t))
    }
    ,
    e.prototype.clickHandler = function(t) {
        !1 === this.shouldClick && (t.stopImmediatePropagation(),
        t.stopPropagation(),
        t.preventDefault())
    }
    ,
    e.prototype.destroy = function(e) {
        var i = this;
        i.autoPlayClear(),
        i.touchObject = {},
        i.cleanUpEvents(),
        t(".slick-cloned", i.$slider).detach(),
        i.$dots && i.$dots.remove(),
        i.$prevArrow && i.$prevArrow.length && (i.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""),
        i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.remove()),
        i.$nextArrow && i.$nextArrow.length && (i.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""),
        i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.remove()),
        i.$slides && (i.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each((function() {
            t(this).attr("style", t(this).data("originalStyling"))
        }
        )),
        i.$slideTrack.children(this.options.slide).detach(),
        i.$slideTrack.detach(),
        i.$list.detach(),
        i.$slider.append(i.$slides)),
        i.cleanUpRows(),
        i.$slider.removeClass("slick-slider"),
        i.$slider.removeClass("slick-initialized"),
        i.$slider.removeClass("slick-dotted"),
        i.unslicked = !0,
        e || i.$slider.trigger("destroy", [i])
    }
    ,
    e.prototype.disableTransition = function(t) {
        var e = this
          , i = {};
        i[e.transitionType] = "",
        !1 === e.options.fade ? e.$slideTrack.css(i) : e.$slides.eq(t).css(i)
    }
    ,
    e.prototype.fadeSlide = function(t, e) {
        var i = this;
        !1 === i.cssTransitions ? (i.$slides.eq(t).css({
            zIndex: i.options.zIndex
        }),
        i.$slides.eq(t).animate({
            opacity: 1
        }, i.options.speed, i.options.easing, e)) : (i.applyTransition(t),
        i.$slides.eq(t).css({
            opacity: 1,
            zIndex: i.options.zIndex
        }),
        e && setTimeout((function() {
            i.disableTransition(t),
            e.call()
        }
        ), i.options.speed))
    }
    ,
    e.prototype.fadeSlideOut = function(t) {
        var e = this;
        !1 === e.cssTransitions ? e.$slides.eq(t).animate({
            opacity: 0,
            zIndex: e.options.zIndex - 2
        }, e.options.speed, e.options.easing) : (e.applyTransition(t),
        e.$slides.eq(t).css({
            opacity: 0,
            zIndex: e.options.zIndex - 2
        }))
    }
    ,
    e.prototype.filterSlides = e.prototype.slickFilter = function(t) {
        var e = this;
        null !== t && (e.$slidesCache = e.$slides,
        e.unload(),
        e.$slideTrack.children(this.options.slide).detach(),
        e.$slidesCache.filter(t).appendTo(e.$slideTrack),
        e.reinit())
    }
    ,
    e.prototype.focusHandler = function() {
        var e = this;
        e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", (function(i) {
            i.stopImmediatePropagation();
            var n = t(this);
            setTimeout((function() {
                e.options.pauseOnFocus && (e.focussed = n.is(":focus"),
                e.autoPlay())
            }
            ), 0)
        }
        ))
    }
    ,
    e.prototype.getCurrent = e.prototype.slickCurrentSlide = function() {
        return this.currentSlide
    }
    ,
    e.prototype.getDotCount = function() {
        var t = this
          , e = 0
          , i = 0
          , n = 0;
        if (!0 === t.options.infinite)
            if (t.slideCount <= t.options.slidesToShow)
                ++n;
            else
                for (; e < t.slideCount; )
                    ++n,
                    e = i + t.options.slidesToScroll,
                    i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
        else if (!0 === t.options.centerMode)
            n = t.slideCount;
        else if (t.options.asNavFor)
            for (; e < t.slideCount; )
                ++n,
                e = i + t.options.slidesToScroll,
                i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
        else
            n = 1 + Math.ceil((t.slideCount - t.options.slidesToShow) / t.options.slidesToScroll);
        return n - 1
    }
    ,
    e.prototype.getLeft = function(t) {
        var e, i, n, s, o = this, r = 0;
        return o.slideOffset = 0,
        i = o.$slides.first().outerHeight(!0),
        !0 === o.options.infinite ? (o.slideCount > o.options.slidesToShow && (o.slideOffset = o.slideWidth * o.options.slidesToShow * -1,
        s = -1,
        !0 === o.options.vertical && !0 === o.options.centerMode && (2 === o.options.slidesToShow ? s = -1.5 : 1 === o.options.slidesToShow && (s = -2)),
        r = i * o.options.slidesToShow * s),
        o.slideCount % o.options.slidesToScroll != 0 && t + o.options.slidesToScroll > o.slideCount && o.slideCount > o.options.slidesToShow && (t > o.slideCount ? (o.slideOffset = (o.options.slidesToShow - (t - o.slideCount)) * o.slideWidth * -1,
        r = (o.options.slidesToShow - (t - o.slideCount)) * i * -1) : (o.slideOffset = o.slideCount % o.options.slidesToScroll * o.slideWidth * -1,
        r = o.slideCount % o.options.slidesToScroll * i * -1))) : t + o.options.slidesToShow > o.slideCount && (o.slideOffset = (t + o.options.slidesToShow - o.slideCount) * o.slideWidth,
        r = (t + o.options.slidesToShow - o.slideCount) * i),
        o.slideCount <= o.options.slidesToShow && (o.slideOffset = 0,
        r = 0),
        !0 === o.options.centerMode && o.slideCount <= o.options.slidesToShow ? o.slideOffset = o.slideWidth * Math.floor(o.options.slidesToShow) / 2 - o.slideWidth * o.slideCount / 2 : !0 === o.options.centerMode && !0 === o.options.infinite ? o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2) - o.slideWidth : !0 === o.options.centerMode && (o.slideOffset = 0,
        o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2)),
        e = !1 === o.options.vertical ? t * o.slideWidth * -1 + o.slideOffset : t * i * -1 + r,
        !0 === o.options.variableWidth && (n = o.slideCount <= o.options.slidesToShow || !1 === o.options.infinite ? o.$slideTrack.children(".slick-slide").eq(t) : o.$slideTrack.children(".slick-slide").eq(t + o.options.slidesToShow),
        e = !0 === o.options.rtl ? n[0] ? -1 * (o.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0,
        !0 === o.options.centerMode && (n = o.slideCount <= o.options.slidesToShow || !1 === o.options.infinite ? o.$slideTrack.children(".slick-slide").eq(t) : o.$slideTrack.children(".slick-slide").eq(t + o.options.slidesToShow + 1),
        e = !0 === o.options.rtl ? n[0] ? -1 * (o.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0,
        e += (o.$list.width() - n.outerWidth()) / 2)),
        e
    }
    ,
    e.prototype.getOption = e.prototype.slickGetOption = function(t) {
        return this.options[t]
    }
    ,
    e.prototype.getNavigableIndexes = function() {
        var t, e = this, i = 0, n = 0, s = [];
        for (!1 === e.options.infinite ? t = e.slideCount : (i = -1 * e.options.slidesToScroll,
        n = -1 * e.options.slidesToScroll,
        t = 2 * e.slideCount); i < t; )
            s.push(i),
            i = n + e.options.slidesToScroll,
            n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        return s
    }
    ,
    e.prototype.getSlick = function() {
        return this
    }
    ,
    e.prototype.getSlideCount = function() {
        var e, i, n = this;
        return i = !0 === n.options.centerMode ? n.slideWidth * Math.floor(n.options.slidesToShow / 2) : 0,
        !0 === n.options.swipeToSlide ? (n.$slideTrack.find(".slick-slide").each((function(s, o) {
            if (o.offsetLeft - i + t(o).outerWidth() / 2 > -1 * n.swipeLeft)
                return e = o,
                !1
        }
        )),
        Math.abs(t(e).attr("data-slick-index") - n.currentSlide) || 1) : n.options.slidesToScroll
    }
    ,
    e.prototype.goTo = e.prototype.slickGoTo = function(t, e) {
        this.changeSlide({
            data: {
                message: "index",
                index: parseInt(t)
            }
        }, e)
    }
    ,
    e.prototype.init = function(e) {
        var i = this;
        t(i.$slider).hasClass("slick-initialized") || (t(i.$slider).addClass("slick-initialized"),
        i.buildRows(),
        i.buildOut(),
        i.setProps(),
        i.startLoad(),
        i.loadSlider(),
        i.initializeEvents(),
        i.updateArrows(),
        i.updateDots(),
        i.checkResponsive(!0),
        i.focusHandler()),
        e && i.$slider.trigger("init", [i]),
        !0 === i.options.accessibility && i.initADA(),
        i.options.autoplay && (i.paused = !1,
        i.autoPlay())
    }
    ,
    e.prototype.initADA = function() {
        var e = this
          , i = Math.ceil(e.slideCount / e.options.slidesToShow)
          , n = e.getNavigableIndexes().filter((function(t) {
            return t >= 0 && t < e.slideCount
        }
        ));
        e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({
            "aria-hidden": "true",
            tabindex: "-1"
        }).find("a, input, button, select").attr({
            tabindex: "-1"
        }),
        null !== e.$dots && (e.$slides.not(e.$slideTrack.find(".slick-cloned")).each((function(i) {
            var s = n.indexOf(i);
            t(this).attr({
                role: "tabpanel",
                id: "slick-slide" + e.instanceUid + i,
                tabindex: -1
            }),
            -1 !== s && t(this).attr({
                "aria-describedby": "slick-slide-control" + e.instanceUid + s
            })
        }
        )),
        e.$dots.attr("role", "tablist").find("li").each((function(s) {
            var o = n[s];
            t(this).attr({
                role: "presentation"
            }),
            t(this).find("button").first().attr({
                role: "tab",
                id: "slick-slide-control" + e.instanceUid + s,
                "aria-controls": "slick-slide" + e.instanceUid + o,
                "aria-label": s + 1 + " of " + i,
                "aria-selected": null,
                tabindex: "-1"
            })
        }
        )).eq(e.currentSlide).find("button").attr({
            "aria-selected": "true",
            tabindex: "0"
        }).end());
        for (var s = e.currentSlide, o = s + e.options.slidesToShow; s < o; s++)
            e.$slides.eq(s).attr("tabindex", 0);
        e.activateADA()
    }
    ,
    e.prototype.initArrowEvents = function() {
        var t = this;
        !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.off("click.slick").on("click.slick", {
            message: "previous"
        }, t.changeSlide),
        t.$nextArrow.off("click.slick").on("click.slick", {
            message: "next"
        }, t.changeSlide),
        !0 === t.options.accessibility && (t.$prevArrow.on("keydown.slick", t.keyHandler),
        t.$nextArrow.on("keydown.slick", t.keyHandler)))
    }
    ,
    e.prototype.initDotEvents = function() {
        var e = this;
        !0 === e.options.dots && (t("li", e.$dots).on("click.slick", {
            message: "index"
        }, e.changeSlide),
        !0 === e.options.accessibility && e.$dots.on("keydown.slick", e.keyHandler)),
        !0 === e.options.dots && !0 === e.options.pauseOnDotsHover && t("li", e.$dots).on("mouseenter.slick", t.proxy(e.interrupt, e, !0)).on("mouseleave.slick", t.proxy(e.interrupt, e, !1))
    }
    ,
    e.prototype.initSlideEvents = function() {
        var e = this;
        e.options.pauseOnHover && (e.$list.on("mouseenter.slick", t.proxy(e.interrupt, e, !0)),
        e.$list.on("mouseleave.slick", t.proxy(e.interrupt, e, !1)))
    }
    ,
    e.prototype.initializeEvents = function() {
        var e = this;
        e.initArrowEvents(),
        e.initDotEvents(),
        e.initSlideEvents(),
        e.$list.on("touchstart.slick mousedown.slick", {
            action: "start"
        }, e.swipeHandler),
        e.$list.on("touchmove.slick mousemove.slick", {
            action: "move"
        }, e.swipeHandler),
        e.$list.on("touchend.slick mouseup.slick", {
            action: "end"
        }, e.swipeHandler),
        e.$list.on("touchcancel.slick mouseleave.slick", {
            action: "end"
        }, e.swipeHandler),
        e.$list.on("click.slick", e.clickHandler),
        t(document).on(e.visibilityChange, t.proxy(e.visibility, e)),
        !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler),
        !0 === e.options.focusOnSelect && t(e.$slideTrack).children().on("click.slick", e.selectHandler),
        t(window).on("orientationchange.slick.slick-" + e.instanceUid, t.proxy(e.orientationChange, e)),
        t(window).on("resize.slick.slick-" + e.instanceUid, t.proxy(e.resize, e)),
        t("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault),
        t(window).on("load.slick.slick-" + e.instanceUid, e.setPosition),
        t(e.setPosition)
    }
    ,
    e.prototype.initUI = function() {
        var t = this;
        !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.show(),
        t.$nextArrow.show()),
        !0 === t.options.dots && t.slideCount > t.options.slidesToShow && t.$dots.show()
    }
    ,
    e.prototype.keyHandler = function(t) {
        var e = this;
        t.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === t.keyCode && !0 === e.options.accessibility ? e.changeSlide({
            data: {
                message: !0 === e.options.rtl ? "next" : "previous"
            }
        }) : 39 === t.keyCode && !0 === e.options.accessibility && e.changeSlide({
            data: {
                message: !0 === e.options.rtl ? "previous" : "next"
            }
        }))
    }
    ,
    e.prototype.lazyLoad = function() {
        function e(e) {
            t("img[data-lazy]", e).each((function() {
                var e = t(this)
                  , i = t(this).attr("data-lazy")
                  , n = t(this).attr("data-srcset")
                  , s = t(this).attr("data-sizes") || o.$slider.attr("data-sizes")
                  , r = document.createElement("img");
                r.onload = function() {
                    e.animate({
                        opacity: 0
                    }, 100, (function() {
                        n && (e.attr("srcset", n),
                        s && e.attr("sizes", s)),
                        e.attr("src", i).animate({
                            opacity: 1
                        }, 200, (function() {
                            e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
                        }
                        )),
                        o.$slider.trigger("lazyLoaded", [o, e, i])
                    }
                    ))
                }
                ,
                r.onerror = function() {
                    e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),
                    o.$slider.trigger("lazyLoadError", [o, e, i])
                }
                ,
                r.src = i
            }
            ))
        }
        var i, n, s, o = this;
        if (!0 === o.options.centerMode ? !0 === o.options.infinite ? s = (n = o.currentSlide + (o.options.slidesToShow / 2 + 1)) + o.options.slidesToShow + 2 : (n = Math.max(0, o.currentSlide - (o.options.slidesToShow / 2 + 1)),
        s = o.options.slidesToShow / 2 + 1 + 2 + o.currentSlide) : (n = o.options.infinite ? o.options.slidesToShow + o.currentSlide : o.currentSlide,
        s = Math.ceil(n + o.options.slidesToShow),
        !0 === o.options.fade && (n > 0 && n--,
        s <= o.slideCount && s++)),
        i = o.$slider.find(".slick-slide").slice(n, s),
        "anticipated" === o.options.lazyLoad)
            for (var r = n - 1, a = s, l = o.$slider.find(".slick-slide"), c = 0; c < o.options.slidesToScroll; c++)
                r < 0 && (r = o.slideCount - 1),
                i = (i = i.add(l.eq(r))).add(l.eq(a)),
                r--,
                a++;
        e(i),
        o.slideCount <= o.options.slidesToShow ? e(o.$slider.find(".slick-slide")) : o.currentSlide >= o.slideCount - o.options.slidesToShow ? e(o.$slider.find(".slick-cloned").slice(0, o.options.slidesToShow)) : 0 === o.currentSlide && e(o.$slider.find(".slick-cloned").slice(-1 * o.options.slidesToShow))
    }
    ,
    e.prototype.loadSlider = function() {
        var t = this;
        t.setPosition(),
        t.$slideTrack.css({
            opacity: 1
        }),
        t.$slider.removeClass("slick-loading"),
        t.initUI(),
        "progressive" === t.options.lazyLoad && t.progressiveLazyLoad()
    }
    ,
    e.prototype.next = e.prototype.slickNext = function() {
        this.changeSlide({
            data: {
                message: "next"
            }
        })
    }
    ,
    e.prototype.orientationChange = function() {
        this.checkResponsive(),
        this.setPosition()
    }
    ,
    e.prototype.pause = e.prototype.slickPause = function() {
        this.autoPlayClear(),
        this.paused = !0
    }
    ,
    e.prototype.play = e.prototype.slickPlay = function() {
        var t = this;
        t.autoPlay(),
        t.options.autoplay = !0,
        t.paused = !1,
        t.focussed = !1,
        t.interrupted = !1
    }
    ,
    e.prototype.postSlide = function(e) {
        var i = this;
        i.unslicked || (i.$slider.trigger("afterChange", [i, e]),
        i.animating = !1,
        i.slideCount > i.options.slidesToShow && i.setPosition(),
        i.swipeLeft = null,
        i.options.autoplay && i.autoPlay(),
        !0 === i.options.accessibility && (i.initADA(),
        i.options.focusOnChange && t(i.$slides.get(i.currentSlide)).attr("tabindex", 0).focus()))
    }
    ,
    e.prototype.prev = e.prototype.slickPrev = function() {
        this.changeSlide({
            data: {
                message: "previous"
            }
        })
    }
    ,
    e.prototype.preventDefault = function(t) {
        t.preventDefault()
    }
    ,
    e.prototype.progressiveLazyLoad = function(e) {
        e = e || 1;
        var i, n, s, o, r, a = this, l = t("img[data-lazy]", a.$slider);
        l.length ? (i = l.first(),
        n = i.attr("data-lazy"),
        s = i.attr("data-srcset"),
        o = i.attr("data-sizes") || a.$slider.attr("data-sizes"),
        (r = document.createElement("img")).onload = function() {
            s && (i.attr("srcset", s),
            o && i.attr("sizes", o)),
            i.attr("src", n).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),
            !0 === a.options.adaptiveHeight && a.setPosition(),
            a.$slider.trigger("lazyLoaded", [a, i, n]),
            a.progressiveLazyLoad()
        }
        ,
        r.onerror = function() {
            e < 3 ? setTimeout((function() {
                a.progressiveLazyLoad(e + 1)
            }
            ), 500) : (i.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),
            a.$slider.trigger("lazyLoadError", [a, i, n]),
            a.progressiveLazyLoad())
        }
        ,
        r.src = n) : a.$slider.trigger("allImagesLoaded", [a])
    }
    ,
    e.prototype.refresh = function(e) {
        var i, n, s = this;
        n = s.slideCount - s.options.slidesToShow,
        !s.options.infinite && s.currentSlide > n && (s.currentSlide = n),
        s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0),
        i = s.currentSlide,
        s.destroy(!0),
        t.extend(s, s.initials, {
            currentSlide: i
        }),
        s.init(),
        e || s.changeSlide({
            data: {
                message: "index",
                index: i
            }
        }, !1)
    }
    ,
    e.prototype.registerBreakpoints = function() {
        var e, i, n, s = this, o = s.options.responsive || null;
        if ("array" === t.type(o) && o.length) {
            for (e in s.respondTo = s.options.respondTo || "window",
            o)
                if (n = s.breakpoints.length - 1,
                o.hasOwnProperty(e)) {
                    for (i = o[e].breakpoint; n >= 0; )
                        s.breakpoints[n] && s.breakpoints[n] === i && s.breakpoints.splice(n, 1),
                        n--;
                    s.breakpoints.push(i),
                    s.breakpointSettings[i] = o[e].settings
                }
            s.breakpoints.sort((function(t, e) {
                return s.options.mobileFirst ? t - e : e - t
            }
            ))
        }
    }
    ,
    e.prototype.reinit = function() {
        var e = this;
        e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"),
        e.slideCount = e.$slides.length,
        e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll),
        e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0),
        e.registerBreakpoints(),
        e.setProps(),
        e.setupInfinite(),
        e.buildArrows(),
        e.updateArrows(),
        e.initArrowEvents(),
        e.buildDots(),
        e.updateDots(),
        e.initDotEvents(),
        e.cleanUpSlideEvents(),
        e.initSlideEvents(),
        e.checkResponsive(!1, !0),
        !0 === e.options.focusOnSelect && t(e.$slideTrack).children().on("click.slick", e.selectHandler),
        e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0),
        e.setPosition(),
        e.focusHandler(),
        e.paused = !e.options.autoplay,
        e.autoPlay(),
        e.$slider.trigger("reInit", [e])
    }
    ,
    e.prototype.resize = function() {
        var e = this;
        t(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay),
        e.windowDelay = window.setTimeout((function() {
            e.windowWidth = t(window).width(),
            e.checkResponsive(),
            e.unslicked || e.setPosition()
        }
        ), 50))
    }
    ,
    e.prototype.removeSlide = e.prototype.slickRemove = function(t, e, i) {
        var n = this;
        if (t = "boolean" == typeof t ? !0 === (e = t) ? 0 : n.slideCount - 1 : !0 === e ? --t : t,
        n.slideCount < 1 || t < 0 || t > n.slideCount - 1)
            return !1;
        n.unload(),
        !0 === i ? n.$slideTrack.children().remove() : n.$slideTrack.children(this.options.slide).eq(t).remove(),
        n.$slides = n.$slideTrack.children(this.options.slide),
        n.$slideTrack.children(this.options.slide).detach(),
        n.$slideTrack.append(n.$slides),
        n.$slidesCache = n.$slides,
        n.reinit()
    }
    ,
    e.prototype.setCSS = function(t) {
        var e, i, n = this, s = {};
        !0 === n.options.rtl && (t = -t),
        e = "left" == n.positionProp ? Math.ceil(t) + "px" : "0px",
        i = "top" == n.positionProp ? Math.ceil(t) + "px" : "0px",
        s[n.positionProp] = t,
        !1 === n.transformsEnabled ? n.$slideTrack.css(s) : (s = {},
        !1 === n.cssTransitions ? (s[n.animType] = "translate(" + e + ", " + i + ")",
        n.$slideTrack.css(s)) : (s[n.animType] = "translate3d(" + e + ", " + i + ", 0px)",
        n.$slideTrack.css(s)))
    }
    ,
    e.prototype.setDimensions = function() {
        var t = this;
        !1 === t.options.vertical ? !0 === t.options.centerMode && t.$list.css({
            padding: "0px " + t.options.centerPadding
        }) : (t.$list.height(t.$slides.first().outerHeight(!0) * t.options.slidesToShow),
        !0 === t.options.centerMode && t.$list.css({
            padding: t.options.centerPadding + " 0px"
        })),
        t.listWidth = t.$list.width(),
        t.listHeight = t.$list.height(),
        !1 === t.options.vertical && !1 === t.options.variableWidth ? (t.slideWidth = Math.ceil(t.listWidth / t.options.slidesToShow),
        t.$slideTrack.width(Math.ceil(t.slideWidth * t.$slideTrack.children(".slick-slide").length))) : !0 === t.options.variableWidth ? t.$slideTrack.width(5e3 * t.slideCount) : (t.slideWidth = Math.ceil(t.listWidth),
        t.$slideTrack.height(Math.ceil(t.$slides.first().outerHeight(!0) * t.$slideTrack.children(".slick-slide").length)));
        var e = t.$slides.first().outerWidth(!0) - t.$slides.first().width();
        !1 === t.options.variableWidth && t.$slideTrack.children(".slick-slide").width(t.slideWidth - e)
    }
    ,
    e.prototype.setFade = function() {
        var e, i = this;
        i.$slides.each((function(n, s) {
            e = i.slideWidth * n * -1,
            !0 === i.options.rtl ? t(s).css({
                position: "relative",
                right: e,
                top: 0,
                zIndex: i.options.zIndex - 2,
                opacity: 0
            }) : t(s).css({
                position: "relative",
                left: e,
                top: 0,
                zIndex: i.options.zIndex - 2,
                opacity: 0
            })
        }
        )),
        i.$slides.eq(i.currentSlide).css({
            zIndex: i.options.zIndex - 1,
            opacity: 1
        })
    }
    ,
    e.prototype.setHeight = function() {
        var t = this;
        if (1 === t.options.slidesToShow && !0 === t.options.adaptiveHeight && !1 === t.options.vertical) {
            var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
            t.$list.css("height", e)
        }
    }
    ,
    e.prototype.setOption = e.prototype.slickSetOption = function() {
        var e, i, n, s, o, r = this, a = !1;
        if ("object" === t.type(arguments[0]) ? (n = arguments[0],
        a = arguments[1],
        o = "multiple") : "string" === t.type(arguments[0]) && (n = arguments[0],
        s = arguments[1],
        a = arguments[2],
        "responsive" === arguments[0] && "array" === t.type(arguments[1]) ? o = "responsive" : void 0 !== arguments[1] && (o = "single")),
        "single" === o)
            r.options[n] = s;
        else if ("multiple" === o)
            t.each(n, (function(t, e) {
                r.options[t] = e
            }
            ));
        else if ("responsive" === o)
            for (i in s)
                if ("array" !== t.type(r.options.responsive))
                    r.options.responsive = [s[i]];
                else {
                    for (e = r.options.responsive.length - 1; e >= 0; )
                        r.options.responsive[e].breakpoint === s[i].breakpoint && r.options.responsive.splice(e, 1),
                        e--;
                    r.options.responsive.push(s[i])
                }
        a && (r.unload(),
        r.reinit())
    }
    ,
    e.prototype.setPosition = function() {
        var t = this;
        t.setDimensions(),
        t.setHeight(),
        !1 === t.options.fade ? t.setCSS(t.getLeft(t.currentSlide)) : t.setFade(),
        t.$slider.trigger("setPosition", [t])
    }
    ,
    e.prototype.setProps = function() {
        var t = this
          , e = document.body.style;
        t.positionProp = !0 === t.options.vertical ? "top" : "left",
        "top" === t.positionProp ? t.$slider.addClass("slick-vertical") : t.$slider.removeClass("slick-vertical"),
        void 0 === e.WebkitTransition && void 0 === e.MozTransition && void 0 === e.msTransition || !0 === t.options.useCSS && (t.cssTransitions = !0),
        t.options.fade && ("number" == typeof t.options.zIndex ? t.options.zIndex < 3 && (t.options.zIndex = 3) : t.options.zIndex = t.defaults.zIndex),
        void 0 !== e.OTransform && (t.animType = "OTransform",
        t.transformType = "-o-transform",
        t.transitionType = "OTransition",
        void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)),
        void 0 !== e.MozTransform && (t.animType = "MozTransform",
        t.transformType = "-moz-transform",
        t.transitionType = "MozTransition",
        void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (t.animType = !1)),
        void 0 !== e.webkitTransform && (t.animType = "webkitTransform",
        t.transformType = "-webkit-transform",
        t.transitionType = "webkitTransition",
        void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)),
        void 0 !== e.msTransform && (t.animType = "msTransform",
        t.transformType = "-ms-transform",
        t.transitionType = "msTransition",
        void 0 === e.msTransform && (t.animType = !1)),
        void 0 !== e.transform && !1 !== t.animType && (t.animType = "transform",
        t.transformType = "transform",
        t.transitionType = "transition"),
        t.transformsEnabled = t.options.useTransform && null !== t.animType && !1 !== t.animType
    }
    ,
    e.prototype.setSlideClasses = function(t) {
        var e, i, n, s, o = this;
        if (i = o.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"),
        o.$slides.eq(t).addClass("slick-current"),
        !0 === o.options.centerMode) {
            var r = o.options.slidesToShow % 2 == 0 ? 1 : 0;
            e = Math.floor(o.options.slidesToShow / 2),
            !0 === o.options.infinite && (t >= e && t <= o.slideCount - 1 - e ? o.$slides.slice(t - e + r, t + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (n = o.options.slidesToShow + t,
            i.slice(n - e + 1 + r, n + e + 2).addClass("slick-active").attr("aria-hidden", "false")),
            0 === t ? i.eq(i.length - 1 - o.options.slidesToShow).addClass("slick-center") : t === o.slideCount - 1 && i.eq(o.options.slidesToShow).addClass("slick-center")),
            o.$slides.eq(t).addClass("slick-center")
        } else
            t >= 0 && t <= o.slideCount - o.options.slidesToShow ? o.$slides.slice(t, t + o.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : i.length <= o.options.slidesToShow ? i.addClass("slick-active").attr("aria-hidden", "false") : (s = o.slideCount % o.options.slidesToShow,
            n = !0 === o.options.infinite ? o.options.slidesToShow + t : t,
            o.options.slidesToShow == o.options.slidesToScroll && o.slideCount - t < o.options.slidesToShow ? i.slice(n - (o.options.slidesToShow - s), n + s).addClass("slick-active").attr("aria-hidden", "false") : i.slice(n, n + o.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
        "ondemand" !== o.options.lazyLoad && "anticipated" !== o.options.lazyLoad || o.lazyLoad()
    }
    ,
    e.prototype.setupInfinite = function() {
        var e, i, n, s = this;
        if (!0 === s.options.fade && (s.options.centerMode = !1),
        !0 === s.options.infinite && !1 === s.options.fade && (i = null,
        s.slideCount > s.options.slidesToShow)) {
            for (n = !0 === s.options.centerMode ? s.options.slidesToShow + 1 : s.options.slidesToShow,
            e = s.slideCount; e > s.slideCount - n; e -= 1)
                i = e - 1,
                t(s.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i - s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");
            for (e = 0; e < n + s.slideCount; e += 1)
                i = e,
                t(s.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i + s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");
            s.$slideTrack.find(".slick-cloned").find("[id]").each((function() {
                t(this).attr("id", "")
            }
            ))
        }
    }
    ,
    e.prototype.interrupt = function(t) {
        t || this.autoPlay(),
        this.interrupted = t
    }
    ,
    e.prototype.selectHandler = function(e) {
        var i = this
          , n = t(e.target).is(".slick-slide") ? t(e.target) : t(e.target).parents(".slick-slide")
          , s = parseInt(n.attr("data-slick-index"));
        s || (s = 0),
        i.slideCount <= i.options.slidesToShow ? i.slideHandler(s, !1, !0) : i.slideHandler(s)
    }
    ,
    e.prototype.slideHandler = function(t, e, i) {
        var n, s, o, r, a, l = null, c = this;
        if (e = e || !1,
        !(!0 === c.animating && !0 === c.options.waitForAnimate || !0 === c.options.fade && c.currentSlide === t))
            if (!1 === e && c.asNavFor(t),
            n = t,
            l = c.getLeft(n),
            r = c.getLeft(c.currentSlide),
            c.currentLeft = null === c.swipeLeft ? r : c.swipeLeft,
            !1 === c.options.infinite && !1 === c.options.centerMode && (t < 0 || t > c.getDotCount() * c.options.slidesToScroll))
                !1 === c.options.fade && (n = c.currentSlide,
                !0 !== i ? c.animateSlide(r, (function() {
                    c.postSlide(n)
                }
                )) : c.postSlide(n));
            else if (!1 === c.options.infinite && !0 === c.options.centerMode && (t < 0 || t > c.slideCount - c.options.slidesToScroll))
                !1 === c.options.fade && (n = c.currentSlide,
                !0 !== i ? c.animateSlide(r, (function() {
                    c.postSlide(n)
                }
                )) : c.postSlide(n));
            else {
                if (c.options.autoplay && clearInterval(c.autoPlayTimer),
                s = n < 0 ? c.slideCount % c.options.slidesToScroll != 0 ? c.slideCount - c.slideCount % c.options.slidesToScroll : c.slideCount + n : n >= c.slideCount ? c.slideCount % c.options.slidesToScroll != 0 ? 0 : n - c.slideCount : n,
                c.animating = !0,
                c.$slider.trigger("beforeChange", [c, c.currentSlide, s]),
                o = c.currentSlide,
                c.currentSlide = s,
                c.setSlideClasses(c.currentSlide),
                c.options.asNavFor && (a = (a = c.getNavTarget()).slick("getSlick")).slideCount <= a.options.slidesToShow && a.setSlideClasses(c.currentSlide),
                c.updateDots(),
                c.updateArrows(),
                !0 === c.options.fade)
                    return !0 !== i ? (c.fadeSlideOut(o),
                    c.fadeSlide(s, (function() {
                        c.postSlide(s)
                    }
                    ))) : c.postSlide(s),
                    void c.animateHeight();
                !0 !== i ? c.animateSlide(l, (function() {
                    c.postSlide(s)
                }
                )) : c.postSlide(s)
            }
    }
    ,
    e.prototype.startLoad = function() {
        var t = this;
        !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.hide(),
        t.$nextArrow.hide()),
        !0 === t.options.dots && t.slideCount > t.options.slidesToShow && t.$dots.hide(),
        t.$slider.addClass("slick-loading")
    }
    ,
    e.prototype.swipeDirection = function() {
        var t, e, i, n, s = this;
        return t = s.touchObject.startX - s.touchObject.curX,
        e = s.touchObject.startY - s.touchObject.curY,
        i = Math.atan2(e, t),
        (n = Math.round(180 * i / Math.PI)) < 0 && (n = 360 - Math.abs(n)),
        n <= 45 && n >= 0 || n <= 360 && n >= 315 ? !1 === s.options.rtl ? "left" : "right" : n >= 135 && n <= 225 ? !1 === s.options.rtl ? "right" : "left" : !0 === s.options.verticalSwiping ? n >= 35 && n <= 135 ? "down" : "up" : "vertical"
    }
    ,
    e.prototype.swipeEnd = function(t) {
        var e, i, n = this;
        if (n.dragging = !1,
        n.swiping = !1,
        n.scrolling)
            return n.scrolling = !1,
            !1;
        if (n.interrupted = !1,
        n.shouldClick = !(n.touchObject.swipeLength > 10),
        void 0 === n.touchObject.curX)
            return !1;
        if (!0 === n.touchObject.edgeHit && n.$slider.trigger("edge", [n, n.swipeDirection()]),
        n.touchObject.swipeLength >= n.touchObject.minSwipe) {
            switch (i = n.swipeDirection()) {
            case "left":
            case "down":
                e = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide + n.getSlideCount()) : n.currentSlide + n.getSlideCount(),
                n.currentDirection = 0;
                break;
            case "right":
            case "up":
                e = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide - n.getSlideCount()) : n.currentSlide - n.getSlideCount(),
                n.currentDirection = 1
            }
            "vertical" != i && (n.slideHandler(e),
            n.touchObject = {},
            n.$slider.trigger("swipe", [n, i]))
        } else
            n.touchObject.startX !== n.touchObject.curX && (n.slideHandler(n.currentSlide),
            n.touchObject = {})
    }
    ,
    e.prototype.swipeHandler = function(t) {
        var e = this;
        if (!(!1 === e.options.swipe || "ontouchend"in document && !1 === e.options.swipe || !1 === e.options.draggable && -1 !== t.type.indexOf("mouse")))
            switch (e.touchObject.fingerCount = t.originalEvent && void 0 !== t.originalEvent.touches ? t.originalEvent.touches.length : 1,
            e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold,
            !0 === e.options.verticalSwiping && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold),
            t.data.action) {
            case "start":
                e.swipeStart(t);
                break;
            case "move":
                e.swipeMove(t);
                break;
            case "end":
                e.swipeEnd(t)
            }
    }
    ,
    e.prototype.swipeMove = function(t) {
        var e, i, n, s, o, r, a = this;
        return o = void 0 !== t.originalEvent ? t.originalEvent.touches : null,
        !(!a.dragging || a.scrolling || o && 1 !== o.length) && (e = a.getLeft(a.currentSlide),
        a.touchObject.curX = void 0 !== o ? o[0].pageX : t.clientX,
        a.touchObject.curY = void 0 !== o ? o[0].pageY : t.clientY,
        a.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(a.touchObject.curX - a.touchObject.startX, 2))),
        r = Math.round(Math.sqrt(Math.pow(a.touchObject.curY - a.touchObject.startY, 2))),
        !a.options.verticalSwiping && !a.swiping && r > 4 ? (a.scrolling = !0,
        !1) : (!0 === a.options.verticalSwiping && (a.touchObject.swipeLength = r),
        i = a.swipeDirection(),
        void 0 !== t.originalEvent && a.touchObject.swipeLength > 4 && (a.swiping = !0,
        t.preventDefault()),
        s = (!1 === a.options.rtl ? 1 : -1) * (a.touchObject.curX > a.touchObject.startX ? 1 : -1),
        !0 === a.options.verticalSwiping && (s = a.touchObject.curY > a.touchObject.startY ? 1 : -1),
        n = a.touchObject.swipeLength,
        a.touchObject.edgeHit = !1,
        !1 === a.options.infinite && (0 === a.currentSlide && "right" === i || a.currentSlide >= a.getDotCount() && "left" === i) && (n = a.touchObject.swipeLength * a.options.edgeFriction,
        a.touchObject.edgeHit = !0),
        !1 === a.options.vertical ? a.swipeLeft = e + n * s : a.swipeLeft = e + n * (a.$list.height() / a.listWidth) * s,
        !0 === a.options.verticalSwiping && (a.swipeLeft = e + n * s),
        !0 !== a.options.fade && !1 !== a.options.touchMove && (!0 === a.animating ? (a.swipeLeft = null,
        !1) : void a.setCSS(a.swipeLeft))))
    }
    ,
    e.prototype.swipeStart = function(t) {
        var e, i = this;
        if (i.interrupted = !0,
        1 !== i.touchObject.fingerCount || i.slideCount <= i.options.slidesToShow)
            return i.touchObject = {},
            !1;
        void 0 !== t.originalEvent && void 0 !== t.originalEvent.touches && (e = t.originalEvent.touches[0]),
        i.touchObject.startX = i.touchObject.curX = void 0 !== e ? e.pageX : t.clientX,
        i.touchObject.startY = i.touchObject.curY = void 0 !== e ? e.pageY : t.clientY,
        i.dragging = !0
    }
    ,
    e.prototype.unfilterSlides = e.prototype.slickUnfilter = function() {
        var t = this;
        null !== t.$slidesCache && (t.unload(),
        t.$slideTrack.children(this.options.slide).detach(),
        t.$slidesCache.appendTo(t.$slideTrack),
        t.reinit())
    }
    ,
    e.prototype.unload = function() {
        var e = this;
        t(".slick-cloned", e.$slider).remove(),
        e.$dots && e.$dots.remove(),
        e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(),
        e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(),
        e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    }
    ,
    e.prototype.unslick = function(t) {
        var e = this;
        e.$slider.trigger("unslick", [e, t]),
        e.destroy()
    }
    ,
    e.prototype.updateArrows = function() {
        var t = this;
        Math.floor(t.options.slidesToShow / 2),
        !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && !t.options.infinite && (t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
        t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
        0 === t.currentSlide ? (t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
        t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : (t.currentSlide >= t.slideCount - t.options.slidesToShow && !1 === t.options.centerMode || t.currentSlide >= t.slideCount - 1 && !0 === t.options.centerMode) && (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
        t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    }
    ,
    e.prototype.updateDots = function() {
        var t = this;
        null !== t.$dots && (t.$dots.find("li").removeClass("slick-active").end(),
        t.$dots.find("li").eq(Math.floor(t.currentSlide / t.options.slidesToScroll)).addClass("slick-active"))
    }
    ,
    e.prototype.visibility = function() {
        var t = this;
        t.options.autoplay && (document[t.hidden] ? t.interrupted = !0 : t.interrupted = !1)
    }
    ,
    t.fn.slick = function() {
        var t, i, n = this, s = arguments[0], o = Array.prototype.slice.call(arguments, 1), r = n.length;
        for (t = 0; t < r; t++)
            if ("object" == typeof s || void 0 === s ? n[t].slick = new e(n[t],s) : i = n[t].slick[s].apply(n[t].slick, o),
            void 0 !== i)
                return i;
        return n
    }
}
));
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t
}
: function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
}
;
!function(t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : "object" === ("undefined" == typeof module ? "undefined" : _typeof(module)) && module.exports ? module.exports = function(e, i) {
        return void 0 === i && (i = "undefined" != typeof window ? require("jquery") : require("jquery")(e)),
        t(i),
        i
    }
    : t(jQuery)
}((function(t) {
    return t.fn.tilt = function(e) {
        var i = function() {
            this.ticking || (requestAnimationFrame(h.bind(this)),
            this.ticking = !0)
        }
          , n = function() {
            t(this).on("mousemove", a),
            t(this).on("mouseenter", o),
            this.settings.reset && t(this).on("mouseleave", l),
            this.settings.glare && t(window).on("resize", d.bind(this))
        }
          , s = function() {
            var e = this;
            void 0 !== this.timeout && clearTimeout(this.timeout),
            t(this).css({
                transition: this.settings.speed + "ms " + this.settings.easing
            }),
            this.settings.glare && this.glareElement.css({
                transition: "opacity " + this.settings.speed + "ms " + this.settings.easing
            }),
            this.timeout = setTimeout((function() {
                t(e).css({
                    transition: ""
                }),
                e.settings.glare && e.glareElement.css({
                    transition: ""
                })
            }
            ), this.settings.speed)
        }
          , o = function(e) {
            this.ticking = !1,
            t(this).css({
                "will-change": "transform"
            }),
            s.call(this),
            t(this).trigger("tilt.mouseEnter")
        }
          , r = function(e) {
            return void 0 === e && (e = {
                pageX: t(this).offset().left + t(this).outerWidth() / 2,
                pageY: t(this).offset().top + t(this).outerHeight() / 2
            }),
            {
                x: e.pageX,
                y: e.pageY
            }
        }
          , a = function(t) {
            this.mousePositions = r(t),
            i.call(this)
        }
          , l = function() {
            s.call(this),
            this.reset = !0,
            i.call(this),
            t(this).trigger("tilt.mouseLeave")
        }
          , c = function() {
            var e = t(this).outerWidth()
              , i = t(this).outerHeight()
              , n = t(this).offset().left
              , s = t(this).offset().top
              , o = (this.mousePositions.x - n) / e
              , r = (this.mousePositions.y - s) / i;
            return {
                tiltX: (this.settings.maxTilt / 2 - o * this.settings.maxTilt).toFixed(2),
                tiltY: (r * this.settings.maxTilt - this.settings.maxTilt / 2).toFixed(2),
                percentageX: 100 * o,
                percentageY: 100 * r,
                angle: Math.atan2(this.mousePositions.x - (n + e / 2), -(this.mousePositions.y - (s + i / 2))) * (180 / Math.PI)
            }
        }
          , h = function() {
            return this.transforms = c.call(this),
            this.reset ? (this.reset = !1,
            t(this).css("transform", "perspective(" + this.settings.perspective + "px) rotateX(0deg) rotateY(0deg)"),
            void (this.settings.glare && (this.glareElement.css("transform", "rotate(180deg) translate(-50%, -50%)"),
            this.glareElement.css("opacity", "0")))) : (t(this).css("transform", "perspective(" + this.settings.perspective + "px) rotateX(" + ("x" === this.settings.disableAxis ? 0 : this.transforms.tiltY) + "deg) rotateY(" + ("y" === this.settings.disableAxis ? 0 : this.transforms.tiltX) + "deg) scale3d(" + this.settings.scale + "," + this.settings.scale + "," + this.settings.scale + ")"),
            this.settings.glare && (this.glareElement.css("transform", "rotate(" + this.transforms.angle + "deg) translate(-50%, -50%)"),
            this.glareElement.css("opacity", "" + this.transforms.percentageY * this.settings.maxGlare / 100)),
            t(this).trigger("change", [this.transforms]),
            void (this.ticking = !1))
        }
          , u = function() {
            var e = this.settings.glarePrerender;
            if (e || t(this).append('<div class="js-tilt-glare"><div class="js-tilt-glare-inner"></div></div>'),
            this.glareElementWrapper = t(this).find(".js-tilt-glare"),
            this.glareElement = t(this).find(".js-tilt-glare-inner"),
            !e) {
                this.glareElementWrapper.css({
                    position: "absolute",
                    top: "0",
                    left: "0",
                    width: "100%",
                    height: "100%"
                }).css({
                    overflow: "hidden",
                    "pointer-events": "none"
                }),
                this.glareElement.css({
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    "background-image": "linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)",
                    width: "" + 2 * t(this).outerWidth(),
                    height: "" + 2 * t(this).outerWidth(),
                    transform: "rotate(180deg) translate(-50%, -50%)",
                    "transform-origin": "0% 0%",
                    opacity: "0"
                })
            }
        }
          , d = function() {
            this.glareElement.css({
                width: "" + 2 * t(this).outerWidth(),
                height: "" + 2 * t(this).outerWidth()
            })
        };
        return t.fn.tilt.destroy = function() {
            t(this).each((function() {
                t(this).find(".js-tilt-glare").remove(),
                t(this).css({
                    "will-change": "",
                    transform: ""
                }),
                t(this).off("mousemove mouseenter mouseleave")
            }
            ))
        }
        ,
        t.fn.tilt.getValues = function() {
            var e = [];
            return t(this).each((function() {
                this.mousePositions = r.call(this),
                e.push(c.call(this))
            }
            )),
            e
        }
        ,
        t.fn.tilt.reset = function() {
            t(this).each((function() {
                var e = this;
                this.mousePositions = r.call(this),
                this.settings = t(this).data("settings"),
                l.call(this),
                setTimeout((function() {
                    e.reset = !1
                }
                ), this.settings.transition)
            }
            ))
        }
        ,
        this.each((function() {
            var i = this;
            this.settings = t.extend({
                maxTilt: t(this).is("[data-tilt-max]") ? t(this).data("tilt-max") : 20,
                perspective: t(this).is("[data-tilt-perspective]") ? t(this).data("tilt-perspective") : 300,
                easing: t(this).is("[data-tilt-easing]") ? t(this).data("tilt-easing") : "cubic-bezier(.03,.98,.52,.99)",
                scale: t(this).is("[data-tilt-scale]") ? t(this).data("tilt-scale") : "1",
                speed: t(this).is("[data-tilt-speed]") ? t(this).data("tilt-speed") : "400",
                transition: !t(this).is("[data-tilt-transition]") || t(this).data("tilt-transition"),
                disableAxis: t(this).is("[data-tilt-disable-axis]") ? t(this).data("tilt-disable-axis") : null,
                axis: t(this).is("[data-tilt-axis]") ? t(this).data("tilt-axis") : null,
                reset: !t(this).is("[data-tilt-reset]") || t(this).data("tilt-reset"),
                glare: !!t(this).is("[data-tilt-glare]") && t(this).data("tilt-glare"),
                maxGlare: t(this).is("[data-tilt-maxglare]") ? t(this).data("tilt-maxglare") : 1
            }, e),
            null !== this.settings.axis && (console.warn("Tilt.js: the axis setting has been renamed to disableAxis. See https://github.com/gijsroge/tilt.js/pull/26 for more information"),
            this.settings.disableAxis = this.settings.axis),
            this.init = function() {
                t(i).data("settings", i.settings),
                i.settings.glare && u.call(i),
                n.call(i)
            }
            ,
            this.init()
        }
        ))
    }
    ,
    t("[data-tilt]").tilt(),
    !0
}
));
/*!
 * VERSION: 1.18.0
 * DATE: 2015-09-05
 * UPDATES AND DOCS AT: http://greensock.com
 * 
 * Includes all of the following: TweenLite, TweenMax, TimelineLite, TimelineMax, EasePack, CSSPlugin, RoundPropsPlugin, BezierPlugin, AttrPlugin, DirectionalRotationPlugin
 *
 * @license Copyright (c) 2008-2015, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push((function() {
    "use strict";
    var t, e, i, n, s, o, r, a, l, c, h, u, d, p, f, m;
    _gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], (function(t, e, i) {
        var n = function(t) {
            var e, i = [], n = t.length;
            for (e = 0; e !== n; i.push(t[e++]))
                ;
            return i
        }
          , s = function(t, e, i) {
            var n, s, o = t.cycle;
            for (n in o)
                s = o[n],
                t[n] = "function" == typeof s ? s.call(e[i], i) : s[i % s.length];
            delete t.cycle
        }
          , o = function(t, e, n) {
            i.call(this, t, e, n),
            this._cycle = 0,
            this._yoyo = !0 === this.vars.yoyo,
            this._repeat = this.vars.repeat || 0,
            this._repeatDelay = this.vars.repeatDelay || 0,
            this._dirty = !0,
            this.render = o.prototype.render
        }
          , r = 1e-10
          , a = i._internals
          , l = a.isSelector
          , c = a.isArray
          , h = o.prototype = i.to({}, .1, {})
          , u = [];
        o.version = "1.18.0",
        h.constructor = o,
        h.kill()._gc = !1,
        o.killTweensOf = o.killDelayedCallsTo = i.killTweensOf,
        o.getTweensOf = i.getTweensOf,
        o.lagSmoothing = i.lagSmoothing,
        o.ticker = i.ticker,
        o.render = i.render,
        h.invalidate = function() {
            return this._yoyo = !0 === this.vars.yoyo,
            this._repeat = this.vars.repeat || 0,
            this._repeatDelay = this.vars.repeatDelay || 0,
            this._uncache(!0),
            i.prototype.invalidate.call(this)
        }
        ,
        h.updateTo = function(t, e) {
            var n, s = this.ratio, o = this.vars.immediateRender || t.immediateRender;
            for (n in e && this._startTime < this._timeline._time && (this._startTime = this._timeline._time,
            this._uncache(!1),
            this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay)),
            t)
                this.vars[n] = t[n];
            if (this._initted || o)
                if (e)
                    this._initted = !1,
                    o && this.render(0, !0, !0);
                else if (this._gc && this._enabled(!0, !1),
                this._notifyPluginsOfEnabled && this._firstPT && i._onPluginEvent("_onDisable", this),
                this._time / this._duration > .998) {
                    var r = this._time;
                    this.render(0, !0, !1),
                    this._initted = !1,
                    this.render(r, !0, !1)
                } else if (this._time > 0 || o) {
                    this._initted = !1,
                    this._init();
                    for (var a, l = 1 / (1 - s), c = this._firstPT; c; )
                        a = c.s + c.c,
                        c.c *= l,
                        c.s = a - c.c,
                        c = c._next
                }
            return this
        }
        ,
        h.render = function(t, e, i) {
            this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
            var n, s, o, l, c, h, u, d, p = this._dirty ? this.totalDuration() : this._totalDuration, f = this._time, m = this._totalTime, g = this._cycle, _ = this._duration, v = this._rawPrevTime;
            if (t >= p ? (this._totalTime = p,
            this._cycle = this._repeat,
            this._yoyo && 0 != (1 & this._cycle) ? (this._time = 0,
            this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = _,
            this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1),
            this._reversed || (n = !0,
            s = "onComplete",
            i = i || this._timeline.autoRemoveChildren),
            0 === _ && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0),
            (0 === t || 0 > v || v === r) && v !== t && (i = !0,
            v > r && (s = "onReverseComplete")),
            this._rawPrevTime = d = !e || t || v === t ? t : r)) : 1e-7 > t ? (this._totalTime = this._time = this._cycle = 0,
            this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0,
            (0 !== m || 0 === _ && v > 0) && (s = "onReverseComplete",
            n = this._reversed),
            0 > t && (this._active = !1,
            0 === _ && (this._initted || !this.vars.lazy || i) && (v >= 0 && (i = !0),
            this._rawPrevTime = d = !e || t || v === t ? t : r)),
            this._initted || (i = !0)) : (this._totalTime = this._time = t,
            0 !== this._repeat && (l = _ + this._repeatDelay,
            this._cycle = this._totalTime / l >> 0,
            0 !== this._cycle && this._cycle === this._totalTime / l && this._cycle--,
            this._time = this._totalTime - this._cycle * l,
            this._yoyo && 0 != (1 & this._cycle) && (this._time = _ - this._time),
            this._time > _ ? this._time = _ : 0 > this._time && (this._time = 0)),
            this._easeType ? (c = this._time / _,
            (1 === (h = this._easeType) || 3 === h && c >= .5) && (c = 1 - c),
            3 === h && (c *= 2),
            1 === (u = this._easePower) ? c *= c : 2 === u ? c *= c * c : 3 === u ? c *= c * c * c : 4 === u && (c *= c * c * c * c),
            this.ratio = 1 === h ? 1 - c : 2 === h ? c : .5 > this._time / _ ? c / 2 : 1 - c / 2) : this.ratio = this._ease.getRatio(this._time / _)),
            f !== this._time || i || g !== this._cycle) {
                if (!this._initted) {
                    if (this._init(),
                    !this._initted || this._gc)
                        return;
                    if (!i && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration))
                        return this._time = f,
                        this._totalTime = m,
                        this._rawPrevTime = v,
                        this._cycle = g,
                        a.lazyTweens.push(this),
                        void (this._lazy = [t, e]);
                    this._time && !n ? this.ratio = this._ease.getRatio(this._time / _) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                }
                for (!1 !== this._lazy && (this._lazy = !1),
                this._active || !this._paused && this._time !== f && t >= 0 && (this._active = !0),
                0 === m && (2 === this._initted && t > 0 && this._init(),
                this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : s || (s = "_dummyGS")),
                this.vars.onStart && (0 !== this._totalTime || 0 === _) && (e || this._callback("onStart"))),
                o = this._firstPT; o; )
                    o.f ? o.t[o.p](o.c * this.ratio + o.s) : o.t[o.p] = o.c * this.ratio + o.s,
                    o = o._next;
                this._onUpdate && (0 > t && this._startAt && this._startTime && this._startAt.render(t, e, i),
                e || (this._totalTime !== m || n) && this._callback("onUpdate")),
                this._cycle !== g && (e || this._gc || this.vars.onRepeat && this._callback("onRepeat")),
                s && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, e, i),
                n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1),
                this._active = !1),
                !e && this.vars[s] && this._callback(s),
                0 === _ && this._rawPrevTime === r && d !== r && (this._rawPrevTime = 0))
            } else
                m !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate"))
        }
        ,
        o.to = function(t, e, i) {
            return new o(t,e,i)
        }
        ,
        o.from = function(t, e, i) {
            return i.runBackwards = !0,
            i.immediateRender = 0 != i.immediateRender,
            new o(t,e,i)
        }
        ,
        o.fromTo = function(t, e, i, n) {
            return n.startAt = i,
            n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender,
            new o(t,e,n)
        }
        ,
        o.staggerTo = o.allTo = function(t, e, r, a, h, d, p) {
            a = a || 0;
            var f, m, g, _, v = r.delay || 0, y = [], b = function() {
                r.onComplete && r.onComplete.apply(r.onCompleteScope || this, arguments),
                h.apply(p || r.callbackScope || this, d || u)
            }, w = r.cycle, T = r.startAt && r.startAt.cycle;
            for (c(t) || ("string" == typeof t && (t = i.selector(t) || t),
            l(t) && (t = n(t))),
            t = t || [],
            0 > a && ((t = n(t)).reverse(),
            a *= -1),
            f = t.length - 1,
            g = 0; f >= g; g++) {
                for (_ in m = {},
                r)
                    m[_] = r[_];
                if (w && s(m, t, g),
                T) {
                    for (_ in T = m.startAt = {},
                    r.startAt)
                        T[_] = r.startAt[_];
                    s(m.startAt, t, g)
                }
                m.delay = v,
                g === f && h && (m.onComplete = b),
                y[g] = new o(t[g],e,m),
                v += a
            }
            return y
        }
        ,
        o.staggerFrom = o.allFrom = function(t, e, i, n, s, r, a) {
            return i.runBackwards = !0,
            i.immediateRender = 0 != i.immediateRender,
            o.staggerTo(t, e, i, n, s, r, a)
        }
        ,
        o.staggerFromTo = o.allFromTo = function(t, e, i, n, s, r, a, l) {
            return n.startAt = i,
            n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender,
            o.staggerTo(t, e, n, s, r, a, l)
        }
        ,
        o.delayedCall = function(t, e, i, n, s) {
            return new o(e,0,{
                delay: t,
                onComplete: e,
                onCompleteParams: i,
                callbackScope: n,
                onReverseComplete: e,
                onReverseCompleteParams: i,
                immediateRender: !1,
                useFrames: s,
                overwrite: 0
            })
        }
        ,
        o.set = function(t, e) {
            return new o(t,0,e)
        }
        ,
        o.isTweening = function(t) {
            return i.getTweensOf(t, !0).length > 0
        }
        ;
        var d = function(t, e) {
            for (var n = [], s = 0, o = t._first; o; )
                o instanceof i ? n[s++] = o : (e && (n[s++] = o),
                s = (n = n.concat(d(o, e))).length),
                o = o._next;
            return n
        }
          , p = o.getAllTweens = function(e) {
            return d(t._rootTimeline, e).concat(d(t._rootFramesTimeline, e))
        }
        ;
        o.killAll = function(t, i, n, s) {
            null == i && (i = !0),
            null == n && (n = !0);
            var o, r, a, l = p(0 != s), c = l.length, h = i && n && s;
            for (a = 0; c > a; a++)
                r = l[a],
                (h || r instanceof e || (o = r.target === r.vars.onComplete) && n || i && !o) && (t ? r.totalTime(r._reversed ? 0 : r.totalDuration()) : r._enabled(!1, !1))
        }
        ,
        o.killChildTweensOf = function(t, e) {
            if (null != t) {
                var s, r, h, u, d, p = a.tweenLookup;
                if ("string" == typeof t && (t = i.selector(t) || t),
                l(t) && (t = n(t)),
                c(t))
                    for (u = t.length; --u > -1; )
                        o.killChildTweensOf(t[u], e);
                else {
                    for (h in s = [],
                    p)
                        for (r = p[h].target.parentNode; r; )
                            r === t && (s = s.concat(p[h].tweens)),
                            r = r.parentNode;
                    for (d = s.length,
                    u = 0; d > u; u++)
                        e && s[u].totalTime(s[u].totalDuration()),
                        s[u]._enabled(!1, !1)
                }
            }
        }
        ;
        var f = function(t, i, n, s) {
            i = !1 !== i,
            n = !1 !== n;
            for (var o, r, a = p(s = !1 !== s), l = i && n && s, c = a.length; --c > -1; )
                r = a[c],
                (l || r instanceof e || (o = r.target === r.vars.onComplete) && n || i && !o) && r.paused(t)
        };
        return o.pauseAll = function(t, e, i) {
            f(!0, t, e, i)
        }
        ,
        o.resumeAll = function(t, e, i) {
            f(!1, t, e, i)
        }
        ,
        o.globalTimeScale = function(e) {
            var n = t._rootTimeline
              , s = i.ticker.time;
            return arguments.length ? (e = e || r,
            n._startTime = s - (s - n._startTime) * n._timeScale / e,
            n = t._rootFramesTimeline,
            s = i.ticker.frame,
            n._startTime = s - (s - n._startTime) * n._timeScale / e,
            n._timeScale = t._rootTimeline._timeScale = e,
            e) : n._timeScale
        }
        ,
        h.progress = function(t) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), !1) : this._time / this.duration()
        }
        ,
        h.totalProgress = function(t) {
            return arguments.length ? this.totalTime(this.totalDuration() * t, !1) : this._totalTime / this.totalDuration()
        }
        ,
        h.time = function(t, e) {
            return arguments.length ? (this._dirty && this.totalDuration(),
            t > this._duration && (t = this._duration),
            this._yoyo && 0 != (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)),
            this.totalTime(t, e)) : this._time
        }
        ,
        h.duration = function(e) {
            return arguments.length ? t.prototype.duration.call(this, e) : this._duration
        }
        ,
        h.totalDuration = function(t) {
            return arguments.length ? -1 === this._repeat ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat,
            this._dirty = !1),
            this._totalDuration)
        }
        ,
        h.repeat = function(t) {
            return arguments.length ? (this._repeat = t,
            this._uncache(!0)) : this._repeat
        }
        ,
        h.repeatDelay = function(t) {
            return arguments.length ? (this._repeatDelay = t,
            this._uncache(!0)) : this._repeatDelay
        }
        ,
        h.yoyo = function(t) {
            return arguments.length ? (this._yoyo = t,
            this) : this._yoyo
        }
        ,
        o
    }
    ), !0),
    _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], (function(t, e, i) {
        var n = function(t) {
            e.call(this, t),
            this._labels = {},
            this.autoRemoveChildren = !0 === this.vars.autoRemoveChildren,
            this.smoothChildTiming = !0 === this.vars.smoothChildTiming,
            this._sortChildren = !0,
            this._onUpdate = this.vars.onUpdate;
            var i, n, s = this.vars;
            for (n in s)
                i = s[n],
                l(i) && -1 !== i.join("").indexOf("{self}") && (s[n] = this._swapSelfInParams(i));
            l(s.tweens) && this.add(s.tweens, 0, s.align, s.stagger)
        }
          , s = 1e-10
          , o = i._internals
          , r = n._internals = {}
          , a = o.isSelector
          , l = o.isArray
          , c = o.lazyTweens
          , h = o.lazyRender
          , u = _gsScope._gsDefine.globals
          , d = function(t) {
            var e, i = {};
            for (e in t)
                i[e] = t[e];
            return i
        }
          , p = function(t, e, i) {
            var n, s, o = t.cycle;
            for (n in o)
                s = o[n],
                t[n] = "function" == typeof s ? s.call(e[i], i) : s[i % s.length];
            delete t.cycle
        }
          , f = r.pauseCallback = function() {}
          , m = function(t) {
            var e, i = [], n = t.length;
            for (e = 0; e !== n; i.push(t[e++]))
                ;
            return i
        }
          , g = n.prototype = new e;
        return n.version = "1.18.0",
        g.constructor = n,
        g.kill()._gc = g._forcingPlayhead = g._hasPause = !1,
        g.to = function(t, e, n, s) {
            var o = n.repeat && u.TweenMax || i;
            return e ? this.add(new o(t,e,n), s) : this.set(t, n, s)
        }
        ,
        g.from = function(t, e, n, s) {
            return this.add((n.repeat && u.TweenMax || i).from(t, e, n), s)
        }
        ,
        g.fromTo = function(t, e, n, s, o) {
            var r = s.repeat && u.TweenMax || i;
            return e ? this.add(r.fromTo(t, e, n, s), o) : this.set(t, s, o)
        }
        ,
        g.staggerTo = function(t, e, s, o, r, l, c, h) {
            var u, f, g = new n({
                onComplete: l,
                onCompleteParams: c,
                callbackScope: h,
                smoothChildTiming: this.smoothChildTiming
            }), _ = s.cycle;
            for ("string" == typeof t && (t = i.selector(t) || t),
            a(t = t || []) && (t = m(t)),
            0 > (o = o || 0) && ((t = m(t)).reverse(),
            o *= -1),
            f = 0; t.length > f; f++)
                (u = d(s)).startAt && (u.startAt = d(u.startAt),
                u.startAt.cycle && p(u.startAt, t, f)),
                _ && p(u, t, f),
                g.to(t[f], e, u, f * o);
            return this.add(g, r)
        }
        ,
        g.staggerFrom = function(t, e, i, n, s, o, r, a) {
            return i.immediateRender = 0 != i.immediateRender,
            i.runBackwards = !0,
            this.staggerTo(t, e, i, n, s, o, r, a)
        }
        ,
        g.staggerFromTo = function(t, e, i, n, s, o, r, a, l) {
            return n.startAt = i,
            n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender,
            this.staggerTo(t, e, n, s, o, r, a, l)
        }
        ,
        g.call = function(t, e, n, s) {
            return this.add(i.delayedCall(0, t, e, n), s)
        }
        ,
        g.set = function(t, e, n) {
            return n = this._parseTimeOrLabel(n, 0, !0),
            null == e.immediateRender && (e.immediateRender = n === this._time && !this._paused),
            this.add(new i(t,0,e), n)
        }
        ,
        n.exportRoot = function(t, e) {
            null == (t = t || {}).smoothChildTiming && (t.smoothChildTiming = !0);
            var s, o, r = new n(t), a = r._timeline;
            for (null == e && (e = !0),
            a._remove(r, !0),
            r._startTime = 0,
            r._rawPrevTime = r._time = r._totalTime = a._time,
            s = a._first; s; )
                o = s._next,
                e && s instanceof i && s.target === s.vars.onComplete || r.add(s, s._startTime - s._delay),
                s = o;
            return a.add(r, 0),
            r
        }
        ,
        g.add = function(s, o, r, a) {
            var c, h, u, d, p, f;
            if ("number" != typeof o && (o = this._parseTimeOrLabel(o, 0, !0, s)),
            !(s instanceof t)) {
                if (s instanceof Array || s && s.push && l(s)) {
                    for (r = r || "normal",
                    a = a || 0,
                    c = o,
                    h = s.length,
                    u = 0; h > u; u++)
                        l(d = s[u]) && (d = new n({
                            tweens: d
                        })),
                        this.add(d, c),
                        "string" != typeof d && "function" != typeof d && ("sequence" === r ? c = d._startTime + d.totalDuration() / d._timeScale : "start" === r && (d._startTime -= d.delay())),
                        c += a;
                    return this._uncache(!0)
                }
                if ("string" == typeof s)
                    return this.addLabel(s, o);
                if ("function" != typeof s)
                    throw "Cannot add " + s + " into the timeline; it is not a tween, timeline, function, or string.";
                s = i.delayedCall(0, s)
            }
            if (e.prototype.add.call(this, s, o),
            (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
                for (f = (p = this).rawTime() > s._startTime; p._timeline; )
                    f && p._timeline.smoothChildTiming ? p.totalTime(p._totalTime, !0) : p._gc && p._enabled(!0, !1),
                    p = p._timeline;
            return this
        }
        ,
        g.remove = function(e) {
            if (e instanceof t) {
                this._remove(e, !1);
                var i = e._timeline = e.vars.useFrames ? t._rootFramesTimeline : t._rootTimeline;
                return e._startTime = (e._paused ? e._pauseTime : i._time) - (e._reversed ? e.totalDuration() - e._totalTime : e._totalTime) / e._timeScale,
                this
            }
            if (e instanceof Array || e && e.push && l(e)) {
                for (var n = e.length; --n > -1; )
                    this.remove(e[n]);
                return this
            }
            return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e)
        }
        ,
        g._remove = function(t, i) {
            e.prototype._remove.call(this, t, i);
            var n = this._last;
            return n ? this._time > n._startTime + n._totalDuration / n._timeScale && (this._time = this.duration(),
            this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0,
            this
        }
        ,
        g.append = function(t, e) {
            return this.add(t, this._parseTimeOrLabel(null, e, !0, t))
        }
        ,
        g.insert = g.insertMultiple = function(t, e, i, n) {
            return this.add(t, e || 0, i, n)
        }
        ,
        g.appendMultiple = function(t, e, i, n) {
            return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, n)
        }
        ,
        g.addLabel = function(t, e) {
            return this._labels[t] = this._parseTimeOrLabel(e),
            this
        }
        ,
        g.addPause = function(t, e, n, s) {
            var o = i.delayedCall(0, f, n, s || this);
            return o.vars.onComplete = o.vars.onReverseComplete = e,
            o.data = "isPause",
            this._hasPause = !0,
            this.add(o, t)
        }
        ,
        g.removeLabel = function(t) {
            return delete this._labels[t],
            this
        }
        ,
        g.getLabelTime = function(t) {
            return null != this._labels[t] ? this._labels[t] : -1
        }
        ,
        g._parseTimeOrLabel = function(e, i, n, s) {
            var o;
            if (s instanceof t && s.timeline === this)
                this.remove(s);
            else if (s && (s instanceof Array || s.push && l(s)))
                for (o = s.length; --o > -1; )
                    s[o]instanceof t && s[o].timeline === this && this.remove(s[o]);
            if ("string" == typeof i)
                return this._parseTimeOrLabel(i, n && "number" == typeof e && null == this._labels[i] ? e - this.duration() : 0, n);
            if (i = i || 0,
            "string" != typeof e || !isNaN(e) && null == this._labels[e])
                null == e && (e = this.duration());
            else {
                if (-1 === (o = e.indexOf("=")))
                    return null == this._labels[e] ? n ? this._labels[e] = this.duration() + i : i : this._labels[e] + i;
                i = parseInt(e.charAt(o - 1) + "1", 10) * Number(e.substr(o + 1)),
                e = o > 1 ? this._parseTimeOrLabel(e.substr(0, o - 1), 0, n) : this.duration()
            }
            return Number(e) + i
        }
        ,
        g.seek = function(t, e) {
            return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), !1 !== e)
        }
        ,
        g.stop = function() {
            return this.paused(!0)
        }
        ,
        g.gotoAndPlay = function(t, e) {
            return this.play(t, e)
        }
        ,
        g.gotoAndStop = function(t, e) {
            return this.pause(t, e)
        }
        ,
        g.render = function(t, e, i) {
            this._gc && this._enabled(!0, !1);
            var n, o, r, a, l, u, d = this._dirty ? this.totalDuration() : this._totalDuration, p = this._time, f = this._startTime, m = this._timeScale, g = this._paused;
            if (t >= d)
                this._totalTime = this._time = d,
                this._reversed || this._hasPausedChild() || (o = !0,
                a = "onComplete",
                l = !!this._timeline.autoRemoveChildren,
                0 === this._duration && (0 === t || 0 > this._rawPrevTime || this._rawPrevTime === s) && this._rawPrevTime !== t && this._first && (l = !0,
                this._rawPrevTime > s && (a = "onReverseComplete"))),
                this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : s,
                t = d + 1e-4;
            else if (1e-7 > t)
                if (this._totalTime = this._time = 0,
                (0 !== p || 0 === this._duration && this._rawPrevTime !== s && (this._rawPrevTime > 0 || 0 > t && this._rawPrevTime >= 0)) && (a = "onReverseComplete",
                o = this._reversed),
                0 > t)
                    this._active = !1,
                    this._timeline.autoRemoveChildren && this._reversed ? (l = o = !0,
                    a = "onReverseComplete") : this._rawPrevTime >= 0 && this._first && (l = !0),
                    this._rawPrevTime = t;
                else {
                    if (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : s,
                    0 === t && o)
                        for (n = this._first; n && 0 === n._startTime; )
                            n._duration || (o = !1),
                            n = n._next;
                    t = 0,
                    this._initted || (l = !0)
                }
            else {
                if (this._hasPause && !this._forcingPlayhead && !e) {
                    if (t >= p)
                        for (n = this._first; n && t >= n._startTime && !u; )
                            n._duration || "isPause" !== n.data || n.ratio || 0 === n._startTime && 0 === this._rawPrevTime || (u = n),
                            n = n._next;
                    else
                        for (n = this._last; n && n._startTime >= t && !u; )
                            n._duration || "isPause" === n.data && n._rawPrevTime > 0 && (u = n),
                            n = n._prev;
                    u && (this._time = t = u._startTime,
                    this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
                }
                this._totalTime = this._time = this._rawPrevTime = t
            }
            if (this._time !== p && this._first || i || l || u) {
                if (this._initted || (this._initted = !0),
                this._active || !this._paused && this._time !== p && t > 0 && (this._active = !0),
                0 === p && this.vars.onStart && 0 !== this._time && (e || this._callback("onStart")),
                this._time >= p)
                    for (n = this._first; n && (r = n._next,
                    !this._paused || g); )
                        (n._active || n._startTime <= this._time && !n._paused && !n._gc) && (u === n && this.pause(),
                        n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)),
                        n = r;
                else
                    for (n = this._last; n && (r = n._prev,
                    !this._paused || g); ) {
                        if (n._active || p >= n._startTime && !n._paused && !n._gc) {
                            if (u === n) {
                                for (u = n._prev; u && u.endTime() > this._time; )
                                    u.render(u._reversed ? u.totalDuration() - (t - u._startTime) * u._timeScale : (t - u._startTime) * u._timeScale, e, i),
                                    u = u._prev;
                                u = null,
                                this.pause()
                            }
                            n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)
                        }
                        n = r
                    }
                this._onUpdate && (e || (c.length && h(),
                this._callback("onUpdate"))),
                a && (this._gc || (f === this._startTime || m !== this._timeScale) && (0 === this._time || d >= this.totalDuration()) && (o && (c.length && h(),
                this._timeline.autoRemoveChildren && this._enabled(!1, !1),
                this._active = !1),
                !e && this.vars[a] && this._callback(a)))
            }
        }
        ,
        g._hasPausedChild = function() {
            for (var t = this._first; t; ) {
                if (t._paused || t instanceof n && t._hasPausedChild())
                    return !0;
                t = t._next
            }
            return !1
        }
        ,
        g.getChildren = function(t, e, n, s) {
            s = s || -9999999999;
            for (var o = [], r = this._first, a = 0; r; )
                s > r._startTime || (r instanceof i ? !1 !== e && (o[a++] = r) : (!1 !== n && (o[a++] = r),
                !1 !== t && (a = (o = o.concat(r.getChildren(!0, e, n))).length))),
                r = r._next;
            return o
        }
        ,
        g.getTweensOf = function(t, e) {
            var n, s, o = this._gc, r = [], a = 0;
            for (o && this._enabled(!0, !0),
            s = (n = i.getTweensOf(t)).length; --s > -1; )
                (n[s].timeline === this || e && this._contains(n[s])) && (r[a++] = n[s]);
            return o && this._enabled(!1, !0),
            r
        }
        ,
        g.recent = function() {
            return this._recent
        }
        ,
        g._contains = function(t) {
            for (var e = t.timeline; e; ) {
                if (e === this)
                    return !0;
                e = e.timeline
            }
            return !1
        }
        ,
        g.shiftChildren = function(t, e, i) {
            i = i || 0;
            for (var n, s = this._first, o = this._labels; s; )
                s._startTime >= i && (s._startTime += t),
                s = s._next;
            if (e)
                for (n in o)
                    o[n] >= i && (o[n] += t);
            return this._uncache(!0)
        }
        ,
        g._kill = function(t, e) {
            if (!t && !e)
                return this._enabled(!1, !1);
            for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), n = i.length, s = !1; --n > -1; )
                i[n]._kill(t, e) && (s = !0);
            return s
        }
        ,
        g.clear = function(t) {
            var e = this.getChildren(!1, !0, !0)
              , i = e.length;
            for (this._time = this._totalTime = 0; --i > -1; )
                e[i]._enabled(!1, !1);
            return !1 !== t && (this._labels = {}),
            this._uncache(!0)
        }
        ,
        g.invalidate = function() {
            for (var e = this._first; e; )
                e.invalidate(),
                e = e._next;
            return t.prototype.invalidate.call(this)
        }
        ,
        g._enabled = function(t, i) {
            if (t === this._gc)
                for (var n = this._first; n; )
                    n._enabled(t, !0),
                    n = n._next;
            return e.prototype._enabled.call(this, t, i)
        }
        ,
        g.totalTime = function() {
            this._forcingPlayhead = !0;
            var e = t.prototype.totalTime.apply(this, arguments);
            return this._forcingPlayhead = !1,
            e
        }
        ,
        g.duration = function(t) {
            return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t),
            this) : (this._dirty && this.totalDuration(),
            this._duration)
        }
        ,
        g.totalDuration = function(t) {
            if (!arguments.length) {
                if (this._dirty) {
                    for (var e, i, n = 0, s = this._last, o = 999999999999; s; )
                        e = s._prev,
                        s._dirty && s.totalDuration(),
                        s._startTime > o && this._sortChildren && !s._paused ? this.add(s, s._startTime - s._delay) : o = s._startTime,
                        0 > s._startTime && !s._paused && (n -= s._startTime,
                        this._timeline.smoothChildTiming && (this._startTime += s._startTime / this._timeScale),
                        this.shiftChildren(-s._startTime, !1, -9999999999),
                        o = 0),
                        (i = s._startTime + s._totalDuration / s._timeScale) > n && (n = i),
                        s = e;
                    this._duration = this._totalDuration = n,
                    this._dirty = !1
                }
                return this._totalDuration
            }
            return 0 !== this.totalDuration() && 0 !== t && this.timeScale(this._totalDuration / t),
            this
        }
        ,
        g.paused = function(e) {
            if (!e)
                for (var i = this._first, n = this._time; i; )
                    i._startTime === n && "isPause" === i.data && (i._rawPrevTime = 0),
                    i = i._next;
            return t.prototype.paused.apply(this, arguments)
        }
        ,
        g.usesFrames = function() {
            for (var e = this._timeline; e._timeline; )
                e = e._timeline;
            return e === t._rootFramesTimeline
        }
        ,
        g.rawTime = function() {
            return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale
        }
        ,
        n
    }
    ), !0),
    _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], (function(t, e, i) {
        var n = function(e) {
            t.call(this, e),
            this._repeat = this.vars.repeat || 0,
            this._repeatDelay = this.vars.repeatDelay || 0,
            this._cycle = 0,
            this._yoyo = !0 === this.vars.yoyo,
            this._dirty = !0
        }
          , s = 1e-10
          , o = e._internals
          , r = o.lazyTweens
          , a = o.lazyRender
          , l = new i(null,null,1,0)
          , c = n.prototype = new t;
        return c.constructor = n,
        c.kill()._gc = !1,
        n.version = "1.18.0",
        c.invalidate = function() {
            return this._yoyo = !0 === this.vars.yoyo,
            this._repeat = this.vars.repeat || 0,
            this._repeatDelay = this.vars.repeatDelay || 0,
            this._uncache(!0),
            t.prototype.invalidate.call(this)
        }
        ,
        c.addCallback = function(t, i, n, s) {
            return this.add(e.delayedCall(0, t, n, s), i)
        }
        ,
        c.removeCallback = function(t, e) {
            if (t)
                if (null == e)
                    this._kill(null, t);
                else
                    for (var i = this.getTweensOf(t, !1), n = i.length, s = this._parseTimeOrLabel(e); --n > -1; )
                        i[n]._startTime === s && i[n]._enabled(!1, !1);
            return this
        }
        ,
        c.removePause = function(e) {
            return this.removeCallback(t._internals.pauseCallback, e)
        }
        ,
        c.tweenTo = function(t, i) {
            i = i || {};
            var n, s, o, r = {
                ease: l,
                useFrames: this.usesFrames(),
                immediateRender: !1
            };
            for (s in i)
                r[s] = i[s];
            return r.time = this._parseTimeOrLabel(t),
            n = Math.abs(Number(r.time) - this._time) / this._timeScale || .001,
            o = new e(this,n,r),
            r.onStart = function() {
                o.target.paused(!0),
                o.vars.time !== o.target.time() && n === o.duration() && o.duration(Math.abs(o.vars.time - o.target.time()) / o.target._timeScale),
                i.onStart && o._callback("onStart")
            }
            ,
            o
        }
        ,
        c.tweenFromTo = function(t, e, i) {
            i = i || {},
            t = this._parseTimeOrLabel(t),
            i.startAt = {
                onComplete: this.seek,
                onCompleteParams: [t],
                callbackScope: this
            },
            i.immediateRender = !1 !== i.immediateRender;
            var n = this.tweenTo(e, i);
            return n.duration(Math.abs(n.vars.time - t) / this._timeScale || .001)
        }
        ,
        c.render = function(t, e, i) {
            this._gc && this._enabled(!0, !1);
            var n, o, l, c, h, u, d, p = this._dirty ? this.totalDuration() : this._totalDuration, f = this._duration, m = this._time, g = this._totalTime, _ = this._startTime, v = this._timeScale, y = this._rawPrevTime, b = this._paused, w = this._cycle;
            if (t >= p)
                this._locked || (this._totalTime = p,
                this._cycle = this._repeat),
                this._reversed || this._hasPausedChild() || (o = !0,
                c = "onComplete",
                h = !!this._timeline.autoRemoveChildren,
                0 === this._duration && (0 === t || 0 > y || y === s) && y !== t && this._first && (h = !0,
                y > s && (c = "onReverseComplete"))),
                this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : s,
                this._yoyo && 0 != (1 & this._cycle) ? this._time = t = 0 : (this._time = f,
                t = f + 1e-4);
            else if (1e-7 > t)
                if (this._locked || (this._totalTime = this._cycle = 0),
                this._time = 0,
                (0 !== m || 0 === f && y !== s && (y > 0 || 0 > t && y >= 0) && !this._locked) && (c = "onReverseComplete",
                o = this._reversed),
                0 > t)
                    this._active = !1,
                    this._timeline.autoRemoveChildren && this._reversed ? (h = o = !0,
                    c = "onReverseComplete") : y >= 0 && this._first && (h = !0),
                    this._rawPrevTime = t;
                else {
                    if (this._rawPrevTime = f || !e || t || this._rawPrevTime === t ? t : s,
                    0 === t && o)
                        for (n = this._first; n && 0 === n._startTime; )
                            n._duration || (o = !1),
                            n = n._next;
                    t = 0,
                    this._initted || (h = !0)
                }
            else if (0 === f && 0 > y && (h = !0),
            this._time = this._rawPrevTime = t,
            this._locked || (this._totalTime = t,
            0 !== this._repeat && (u = f + this._repeatDelay,
            this._cycle = this._totalTime / u >> 0,
            0 !== this._cycle && this._cycle === this._totalTime / u && this._cycle--,
            this._time = this._totalTime - this._cycle * u,
            this._yoyo && 0 != (1 & this._cycle) && (this._time = f - this._time),
            this._time > f ? (this._time = f,
            t = f + 1e-4) : 0 > this._time ? this._time = t = 0 : t = this._time)),
            this._hasPause && !this._forcingPlayhead && !e) {
                if ((t = this._time) >= m)
                    for (n = this._first; n && t >= n._startTime && !d; )
                        n._duration || "isPause" !== n.data || n.ratio || 0 === n._startTime && 0 === this._rawPrevTime || (d = n),
                        n = n._next;
                else
                    for (n = this._last; n && n._startTime >= t && !d; )
                        n._duration || "isPause" === n.data && n._rawPrevTime > 0 && (d = n),
                        n = n._prev;
                d && (this._time = t = d._startTime,
                this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
            }
            if (this._cycle !== w && !this._locked) {
                var T = this._yoyo && 0 != (1 & w)
                  , x = T === (this._yoyo && 0 != (1 & this._cycle))
                  , k = this._totalTime
                  , S = this._cycle
                  , C = this._rawPrevTime
                  , E = this._time;
                if (this._totalTime = w * f,
                w > this._cycle ? T = !T : this._totalTime += f,
                this._time = m,
                this._rawPrevTime = 0 === f ? y - 1e-4 : y,
                this._cycle = w,
                this._locked = !0,
                m = T ? 0 : f,
                this.render(m, e, 0 === f),
                e || this._gc || this.vars.onRepeat && this._callback("onRepeat"),
                x && (m = T ? f + 1e-4 : -1e-4,
                this.render(m, !0, !1)),
                this._locked = !1,
                this._paused && !b)
                    return;
                this._time = E,
                this._totalTime = k,
                this._cycle = S,
                this._rawPrevTime = C
            }
            if (this._time !== m && this._first || i || h || d) {
                if (this._initted || (this._initted = !0),
                this._active || !this._paused && this._totalTime !== g && t > 0 && (this._active = !0),
                0 === g && this.vars.onStart && 0 !== this._totalTime && (e || this._callback("onStart")),
                this._time >= m)
                    for (n = this._first; n && (l = n._next,
                    !this._paused || b); )
                        (n._active || n._startTime <= this._time && !n._paused && !n._gc) && (d === n && this.pause(),
                        n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)),
                        n = l;
                else
                    for (n = this._last; n && (l = n._prev,
                    !this._paused || b); ) {
                        if (n._active || m >= n._startTime && !n._paused && !n._gc) {
                            if (d === n) {
                                for (d = n._prev; d && d.endTime() > this._time; )
                                    d.render(d._reversed ? d.totalDuration() - (t - d._startTime) * d._timeScale : (t - d._startTime) * d._timeScale, e, i),
                                    d = d._prev;
                                d = null,
                                this.pause()
                            }
                            n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)
                        }
                        n = l
                    }
                this._onUpdate && (e || (r.length && a(),
                this._callback("onUpdate"))),
                c && (this._locked || this._gc || (_ === this._startTime || v !== this._timeScale) && (0 === this._time || p >= this.totalDuration()) && (o && (r.length && a(),
                this._timeline.autoRemoveChildren && this._enabled(!1, !1),
                this._active = !1),
                !e && this.vars[c] && this._callback(c)))
            } else
                g !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate"))
        }
        ,
        c.getActive = function(t, e, i) {
            null == t && (t = !0),
            null == e && (e = !0),
            null == i && (i = !1);
            var n, s, o = [], r = this.getChildren(t, e, i), a = 0, l = r.length;
            for (n = 0; l > n; n++)
                (s = r[n]).isActive() && (o[a++] = s);
            return o
        }
        ,
        c.getLabelAfter = function(t) {
            t || 0 !== t && (t = this._time);
            var e, i = this.getLabelsArray(), n = i.length;
            for (e = 0; n > e; e++)
                if (i[e].time > t)
                    return i[e].name;
            return null
        }
        ,
        c.getLabelBefore = function(t) {
            null == t && (t = this._time);
            for (var e = this.getLabelsArray(), i = e.length; --i > -1; )
                if (t > e[i].time)
                    return e[i].name;
            return null
        }
        ,
        c.getLabelsArray = function() {
            var t, e = [], i = 0;
            for (t in this._labels)
                e[i++] = {
                    time: this._labels[t],
                    name: t
                };
            return e.sort((function(t, e) {
                return t.time - e.time
            }
            )),
            e
        }
        ,
        c.progress = function(t, e) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration()
        }
        ,
        c.totalProgress = function(t, e) {
            return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration()
        }
        ,
        c.totalDuration = function(e) {
            return arguments.length ? -1 === this._repeat ? this : this.duration((e - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (t.prototype.totalDuration.call(this),
            this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat),
            this._totalDuration)
        }
        ,
        c.time = function(t, e) {
            return arguments.length ? (this._dirty && this.totalDuration(),
            t > this._duration && (t = this._duration),
            this._yoyo && 0 != (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)),
            this.totalTime(t, e)) : this._time
        }
        ,
        c.repeat = function(t) {
            return arguments.length ? (this._repeat = t,
            this._uncache(!0)) : this._repeat
        }
        ,
        c.repeatDelay = function(t) {
            return arguments.length ? (this._repeatDelay = t,
            this._uncache(!0)) : this._repeatDelay
        }
        ,
        c.yoyo = function(t) {
            return arguments.length ? (this._yoyo = t,
            this) : this._yoyo
        }
        ,
        c.currentLabel = function(t) {
            return arguments.length ? this.seek(t, !0) : this.getLabelBefore(this._time + 1e-8)
        }
        ,
        n
    }
    ), !0),
    t = 180 / Math.PI,
    e = [],
    i = [],
    n = [],
    s = {},
    o = _gsScope._gsDefine.globals,
    r = function(t, e, i, n) {
        this.a = t,
        this.b = e,
        this.c = i,
        this.d = n,
        this.da = n - t,
        this.ca = i - t,
        this.ba = e - t
    }
    ,
    a = function(t, e, i, n) {
        var s = {
            a: t
        }
          , o = {}
          , r = {}
          , a = {
            c: n
        }
          , l = (t + e) / 2
          , c = (e + i) / 2
          , h = (i + n) / 2
          , u = (l + c) / 2
          , d = (c + h) / 2
          , p = (d - u) / 8;
        return s.b = l + (t - l) / 4,
        o.b = u + p,
        s.c = o.a = (s.b + o.b) / 2,
        o.c = r.a = (u + d) / 2,
        r.b = d - p,
        a.b = h + (n - h) / 4,
        r.c = a.a = (r.b + a.b) / 2,
        [s, o, r, a]
    }
    ,
    l = function(t, s, o, r, l) {
        var c, h, u, d, p, f, m, g, _, v, y, b, w, T = t.length - 1, x = 0, k = t[0].a;
        for (c = 0; T > c; c++)
            h = (p = t[x]).a,
            u = p.d,
            d = t[x + 1].d,
            l ? (y = e[c],
            w = .25 * ((b = i[c]) + y) * s / (r ? .5 : n[c] || .5),
            g = u - ((f = u - (u - h) * (r ? .5 * s : 0 !== y ? w / y : 0)) + (((m = u + (d - u) * (r ? .5 * s : 0 !== b ? w / b : 0)) - f) * (3 * y / (y + b) + .5) / 4 || 0))) : g = u - ((f = u - .5 * (u - h) * s) + (m = u + .5 * (d - u) * s)) / 2,
            f += g,
            m += g,
            p.c = _ = f,
            p.b = 0 !== c ? k : k = p.a + .6 * (p.c - p.a),
            p.da = u - h,
            p.ca = _ - h,
            p.ba = k - h,
            o ? (v = a(h, k, _, u),
            t.splice(x, 1, v[0], v[1], v[2], v[3]),
            x += 4) : x++,
            k = m;
        (p = t[x]).b = k,
        p.c = k + .4 * (p.d - k),
        p.da = p.d - p.a,
        p.ca = p.c - p.a,
        p.ba = k - p.a,
        o && (v = a(p.a, k, p.c, p.d),
        t.splice(x, 1, v[0], v[1], v[2], v[3]))
    }
    ,
    c = function(t, n, s, o) {
        var a, l, c, h, u, d, p = [];
        if (o)
            for (l = (t = [o].concat(t)).length; --l > -1; )
                "string" == typeof (d = t[l][n]) && "=" === d.charAt(1) && (t[l][n] = o[n] + Number(d.charAt(0) + d.substr(2)));
        if (0 > (a = t.length - 2))
            return p[0] = new r(t[0][n],0,0,t[-1 > a ? 0 : 1][n]),
            p;
        for (l = 0; a > l; l++)
            c = t[l][n],
            h = t[l + 1][n],
            p[l] = new r(c,0,0,h),
            s && (u = t[l + 2][n],
            e[l] = (e[l] || 0) + (h - c) * (h - c),
            i[l] = (i[l] || 0) + (u - h) * (u - h));
        return p[l] = new r(t[l][n],0,0,t[l + 1][n]),
        p
    }
    ,
    h = function(t, o, r, a, h, u) {
        var d, p, f, m, g, _, v, y, b = {}, w = [], T = u || t[0];
        for (p in h = "string" == typeof h ? "," + h + "," : ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
        null == o && (o = 1),
        t[0])
            w.push(p);
        if (t.length > 1) {
            for (y = t[t.length - 1],
            v = !0,
            d = w.length; --d > -1; )
                if (p = w[d],
                Math.abs(T[p] - y[p]) > .05) {
                    v = !1;
                    break
                }
            v && (t = t.concat(),
            u && t.unshift(u),
            t.push(t[1]),
            u = t[t.length - 3])
        }
        for (e.length = i.length = n.length = 0,
        d = w.length; --d > -1; )
            p = w[d],
            s[p] = -1 !== h.indexOf("," + p + ","),
            b[p] = c(t, p, s[p], u);
        for (d = e.length; --d > -1; )
            e[d] = Math.sqrt(e[d]),
            i[d] = Math.sqrt(i[d]);
        if (!a) {
            for (d = w.length; --d > -1; )
                if (s[p])
                    for (_ = (f = b[w[d]]).length - 1,
                    m = 0; _ > m; m++)
                        g = f[m + 1].da / i[m] + f[m].da / e[m],
                        n[m] = (n[m] || 0) + g * g;
            for (d = n.length; --d > -1; )
                n[d] = Math.sqrt(n[d])
        }
        for (d = w.length,
        m = r ? 4 : 1; --d > -1; )
            f = b[p = w[d]],
            l(f, o, r, a, s[p]),
            v && (f.splice(0, m),
            f.splice(f.length - m, m));
        return b
    }
    ,
    u = function(t, e, i) {
        var n, s, o, a, l, c, h, u, d, p, f, m = {}, g = "cubic" === (e = e || "soft") ? 3 : 2, _ = "soft" === e, v = [];
        if (_ && i && (t = [i].concat(t)),
        null == t || g + 1 > t.length)
            throw "invalid Bezier data";
        for (d in t[0])
            v.push(d);
        for (c = v.length; --c > -1; ) {
            for (m[d = v[c]] = l = [],
            p = 0,
            u = t.length,
            h = 0; u > h; h++)
                n = null == i ? t[h][d] : "string" == typeof (f = t[h][d]) && "=" === f.charAt(1) ? i[d] + Number(f.charAt(0) + f.substr(2)) : Number(f),
                _ && h > 1 && u - 1 > h && (l[p++] = (n + l[p - 2]) / 2),
                l[p++] = n;
            for (u = p - g + 1,
            p = 0,
            h = 0; u > h; h += g)
                n = l[h],
                s = l[h + 1],
                o = l[h + 2],
                a = 2 === g ? 0 : l[h + 3],
                l[p++] = f = 3 === g ? new r(n,s,o,a) : new r(n,(2 * s + n) / 3,(2 * s + o) / 3,o);
            l.length = p
        }
        return m
    }
    ,
    d = function(t, e, i) {
        for (var n, s, o, r, a, l, c, h, u, d, p, f = 1 / i, m = t.length; --m > -1; )
            for (o = (d = t[m]).a,
            r = d.d - o,
            a = d.c - o,
            l = d.b - o,
            n = s = 0,
            h = 1; i >= h; h++)
                n = s - (s = ((c = f * h) * c * r + 3 * (u = 1 - c) * (c * a + u * l)) * c),
                e[p = m * i + h - 1] = (e[p] || 0) + n * n
    }
    ,
    p = function(t, e) {
        var i, n, s, o, r = [], a = [], l = 0, c = 0, h = (e = e >> 0 || 6) - 1, u = [], p = [];
        for (i in t)
            d(t[i], r, e);
        for (s = r.length,
        n = 0; s > n; n++)
            l += Math.sqrt(r[n]),
            p[o = n % e] = l,
            o === h && (c += l,
            u[o = n / e >> 0] = p,
            a[o] = c,
            l = 0,
            p = []);
        return {
            length: c,
            lengths: a,
            segments: u
        }
    }
    ,
    f = _gsScope._gsDefine.plugin({
        propName: "bezier",
        priority: -1,
        version: "1.3.4",
        API: 2,
        global: !0,
        init: function(t, e, i) {
            this._target = t,
            e instanceof Array && (e = {
                values: e
            }),
            this._func = {},
            this._round = {},
            this._props = [],
            this._timeRes = null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10);
            var n, s, o, r, a, l = e.values || [], c = {}, d = l[0], f = e.autoRotate || i.vars.orientToBezier;
            for (n in this._autoRotate = f ? f instanceof Array ? f : [["x", "y", "rotation", !0 === f ? 0 : Number(f) || 0]] : null,
            d)
                this._props.push(n);
            for (o = this._props.length; --o > -1; )
                n = this._props[o],
                this._overwriteProps.push(n),
                s = this._func[n] = "function" == typeof t[n],
                c[n] = s ? t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)]() : parseFloat(t[n]),
                a || c[n] !== l[0][n] && (a = c);
            if (this._beziers = "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type ? h(l, isNaN(e.curviness) ? 1 : e.curviness, !1, "thruBasic" === e.type, e.correlate, a) : u(l, e.type, c),
            this._segCount = this._beziers[n].length,
            this._timeRes) {
                var m = p(this._beziers, this._timeRes);
                this._length = m.length,
                this._lengths = m.lengths,
                this._segments = m.segments,
                this._l1 = this._li = this._s1 = this._si = 0,
                this._l2 = this._lengths[0],
                this._curSeg = this._segments[0],
                this._s2 = this._curSeg[0],
                this._prec = 1 / this._curSeg.length
            }
            if (f = this._autoRotate)
                for (this._initialRotations = [],
                f[0]instanceof Array || (this._autoRotate = f = [f]),
                o = f.length; --o > -1; ) {
                    for (r = 0; 3 > r; r++)
                        n = f[o][r],
                        this._func[n] = "function" == typeof t[n] && t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)];
                    n = f[o][2],
                    this._initialRotations[o] = this._func[n] ? this._func[n].call(this._target) : this._target[n]
                }
            return this._startRatio = i.vars.runBackwards ? 1 : 0,
            !0
        },
        set: function(e) {
            var i, n, s, o, r, a, l, c, h, u, d = this._segCount, p = this._func, f = this._target, m = e !== this._startRatio;
            if (this._timeRes) {
                if (h = this._lengths,
                u = this._curSeg,
                e *= this._length,
                s = this._li,
                e > this._l2 && d - 1 > s) {
                    for (c = d - 1; c > s && e >= (this._l2 = h[++s]); )
                        ;
                    this._l1 = h[s - 1],
                    this._li = s,
                    this._curSeg = u = this._segments[s],
                    this._s2 = u[this._s1 = this._si = 0]
                } else if (this._l1 > e && s > 0) {
                    for (; s > 0 && (this._l1 = h[--s]) >= e; )
                        ;
                    0 === s && this._l1 > e ? this._l1 = 0 : s++,
                    this._l2 = h[s],
                    this._li = s,
                    this._curSeg = u = this._segments[s],
                    this._s1 = u[(this._si = u.length - 1) - 1] || 0,
                    this._s2 = u[this._si]
                }
                if (i = s,
                e -= this._l1,
                s = this._si,
                e > this._s2 && u.length - 1 > s) {
                    for (c = u.length - 1; c > s && e >= (this._s2 = u[++s]); )
                        ;
                    this._s1 = u[s - 1],
                    this._si = s
                } else if (this._s1 > e && s > 0) {
                    for (; s > 0 && (this._s1 = u[--s]) >= e; )
                        ;
                    0 === s && this._s1 > e ? this._s1 = 0 : s++,
                    this._s2 = u[s],
                    this._si = s
                }
                a = (s + (e - this._s1) / (this._s2 - this._s1)) * this._prec
            } else
                a = (e - (i = 0 > e ? 0 : e >= 1 ? d - 1 : d * e >> 0) * (1 / d)) * d;
            for (n = 1 - a,
            s = this._props.length; --s > -1; )
                o = this._props[s],
                l = (a * a * (r = this._beziers[o][i]).da + 3 * n * (a * r.ca + n * r.ba)) * a + r.a,
                this._round[o] && (l = Math.round(l)),
                p[o] ? f[o](l) : f[o] = l;
            if (this._autoRotate) {
                var g, _, v, y, b, w, T, x = this._autoRotate;
                for (s = x.length; --s > -1; )
                    o = x[s][2],
                    w = x[s][3] || 0,
                    T = !0 === x[s][4] ? 1 : t,
                    r = this._beziers[x[s][0]],
                    g = this._beziers[x[s][1]],
                    r && g && (r = r[i],
                    g = g[i],
                    _ = r.a + (r.b - r.a) * a,
                    _ += ((y = r.b + (r.c - r.b) * a) - _) * a,
                    y += (r.c + (r.d - r.c) * a - y) * a,
                    v = g.a + (g.b - g.a) * a,
                    v += ((b = g.b + (g.c - g.b) * a) - v) * a,
                    b += (g.c + (g.d - g.c) * a - b) * a,
                    l = m ? Math.atan2(b - v, y - _) * T + w : this._initialRotations[s],
                    p[o] ? f[o](l) : f[o] = l)
            }
        }
    }),
    m = f.prototype,
    f.bezierThrough = h,
    f.cubicToQuadratic = a,
    f._autoCSS = !0,
    f.quadraticToCubic = function(t, e, i) {
        return new r(t,(2 * e + t) / 3,(2 * e + i) / 3,i)
    }
    ,
    f._cssRegister = function() {
        var t = o.CSSPlugin;
        if (t) {
            var e = t._internals
              , i = e._parseToProxy
              , n = e._setPluginRatio
              , s = e.CSSPropTween;
            e._registerComplexSpecialProp("bezier", {
                parser: function(t, e, o, r, a, l) {
                    e instanceof Array && (e = {
                        values: e
                    }),
                    l = new f;
                    var c, h, u, d = e.values, p = d.length - 1, m = [], g = {};
                    if (0 > p)
                        return a;
                    for (c = 0; p >= c; c++)
                        u = i(t, d[c], r, a, l, p !== c),
                        m[c] = u.end;
                    for (h in e)
                        g[h] = e[h];
                    return g.values = m,
                    (a = new s(t,"bezier",0,0,u.pt,2)).data = u,
                    a.plugin = l,
                    a.setRatio = n,
                    0 === g.autoRotate && (g.autoRotate = !0),
                    !g.autoRotate || g.autoRotate instanceof Array || (c = !0 === g.autoRotate ? 0 : Number(g.autoRotate),
                    g.autoRotate = null != u.end.left ? [["left", "top", "rotation", c, !1]] : null != u.end.x && [["x", "y", "rotation", c, !1]]),
                    g.autoRotate && (r._transform || r._enableTransforms(!1),
                    u.autoRotate = r._target._gsTransform),
                    l._onInitTween(u.proxy, g, r._tween),
                    a
                }
            })
        }
    }
    ,
    m._roundProps = function(t, e) {
        for (var i = this._overwriteProps, n = i.length; --n > -1; )
            (t[i[n]] || t.bezier || t.bezierThrough) && (this._round[i[n]] = e)
    }
    ,
    m._kill = function(t) {
        var e, i, n = this._props;
        for (e in this._beziers)
            if (e in t)
                for (delete this._beziers[e],
                delete this._func[e],
                i = n.length; --i > -1; )
                    n[i] === e && n.splice(i, 1);
        return this._super._kill.call(this, t)
    }
    ,
    _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], (function(t, e) {
        var i, n, s, o, r = function() {
            t.call(this, "css"),
            this._overwriteProps.length = 0,
            this.setRatio = r.prototype.setRatio
        }, a = _gsScope._gsDefine.globals, l = {}, c = r.prototype = new t("css");
        c.constructor = r,
        r.version = "1.18.0",
        r.API = 2,
        r.defaultTransformPerspective = 0,
        r.defaultSkewType = "compensated",
        r.defaultSmoothOrigin = !0,
        c = "px",
        r.suffixMap = {
            top: c,
            right: c,
            bottom: c,
            left: c,
            width: c,
            height: c,
            fontSize: c,
            padding: c,
            margin: c,
            perspective: c,
            lineHeight: ""
        };
        var h, u, d, p, f, m, g = /(?:\d|\-\d|\.\d|\-\.\d)+/g, _ = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g, v = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi, y = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g, b = /(?:\d|\-|\+|=|#|\.)*/g, w = /opacity *= *([^)]*)/i, T = /opacity:([^;]*)/i, x = /alpha\(opacity *=.+?\)/i, k = /^(rgb|hsl)/, S = /([A-Z])/g, C = /-([a-z])/gi, E = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi, O = function(t, e) {
            return e.toUpperCase()
        }, P = /(?:Left|Right|Width)/i, A = /(M11|M12|M21|M22)=[\d\-\.e]+/gi, I = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i, D = /,(?=[^\)]*(?:\(|$))/gi, L = Math.PI / 180, M = 180 / Math.PI, z = {}, R = document, j = function(t) {
            return R.createElementNS ? R.createElementNS("http://www.w3.org/1999/xhtml", t) : R.createElement(t)
        }, N = j("div"), $ = j("img"), F = r._internals = {
            _specialProps: l
        }, W = navigator.userAgent, H = function() {
            var t = W.indexOf("Android")
              , e = j("a");
            return d = -1 !== W.indexOf("Safari") && -1 === W.indexOf("Chrome") && (-1 === t || Number(W.substr(t + 8, 1)) > 3),
            f = d && 6 > Number(W.substr(W.indexOf("Version/") + 8, 1)),
            p = -1 !== W.indexOf("Firefox"),
            (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(W) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(W)) && (m = parseFloat(RegExp.$1)),
            !!e && (e.style.cssText = "top:1px;opacity:.55;",
            /^0.55/.test(e.style.opacity))
        }(), B = function(t) {
            return w.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
        }, q = function(t) {
            window.console && console.log(t)
        }, Y = "", X = "", U = function(t, e) {
            var i, n, s = (e = e || N).style;
            if (void 0 !== s[t])
                return t;
            for (t = t.charAt(0).toUpperCase() + t.substr(1),
            i = ["O", "Moz", "ms", "Ms", "Webkit"],
            n = 5; --n > -1 && void 0 === s[i[n] + t]; )
                ;
            return n >= 0 ? (Y = "-" + (X = 3 === n ? "ms" : i[n]).toLowerCase() + "-",
            X + t) : null
        }, V = R.defaultView ? R.defaultView.getComputedStyle : function() {}
        , Q = r.getStyle = function(t, e, i, n, s) {
            var o;
            return H || "opacity" !== e ? (!n && t.style[e] ? o = t.style[e] : (i = i || V(t)) ? o = i[e] || i.getPropertyValue(e) || i.getPropertyValue(e.replace(S, "-$1").toLowerCase()) : t.currentStyle && (o = t.currentStyle[e]),
            null == s || o && "none" !== o && "auto" !== o && "auto auto" !== o ? o : s) : B(t)
        }
        , K = F.convertToPixels = function(t, i, n, s, o) {
            if ("px" === s || !s)
                return n;
            if ("auto" === s || !n)
                return 0;
            var a, l, c, h = P.test(i), u = t, d = N.style, p = 0 > n;
            if (p && (n = -n),
            "%" === s && -1 !== i.indexOf("border"))
                a = n / 100 * (h ? t.clientWidth : t.clientHeight);
            else {
                if (d.cssText = "border:0 solid red;position:" + Q(t, "position") + ";line-height:0;",
                "%" !== s && u.appendChild && "v" !== s.charAt(0) && "rem" !== s)
                    d[h ? "borderLeftWidth" : "borderTopWidth"] = n + s;
                else {
                    if (l = (u = t.parentNode || R.body)._gsCache,
                    c = e.ticker.frame,
                    l && h && l.time === c)
                        return l.width * n / 100;
                    d[h ? "width" : "height"] = n + s
                }
                u.appendChild(N),
                a = parseFloat(N[h ? "offsetWidth" : "offsetHeight"]),
                u.removeChild(N),
                h && "%" === s && !1 !== r.cacheWidths && ((l = u._gsCache = u._gsCache || {}).time = c,
                l.width = a / n * 100),
                0 !== a || o || (a = K(t, i, n, s, !0))
            }
            return p ? -a : a
        }
        , G = F.calculateOffset = function(t, e, i) {
            if ("absolute" !== Q(t, "position", i))
                return 0;
            var n = "left" === e ? "Left" : "Top"
              , s = Q(t, "margin" + n, i);
            return t["offset" + n] - (K(t, e, parseFloat(s), s.replace(b, "")) || 0)
        }
        , Z = function(t, e) {
            var i, n, s, o = {};
            if (e = e || V(t, null))
                if (i = e.length)
                    for (; --i > -1; )
                        (-1 === (s = e[i]).indexOf("-transform") || St === s) && (o[s.replace(C, O)] = e.getPropertyValue(s));
                else
                    for (i in e)
                        (-1 === i.indexOf("Transform") || kt === i) && (o[i] = e[i]);
            else if (e = t.currentStyle || t.style)
                for (i in e)
                    "string" == typeof i && void 0 === o[i] && (o[i.replace(C, O)] = e[i]);
            return H || (o.opacity = B(t)),
            n = jt(t, e, !1),
            o.rotation = n.rotation,
            o.skewX = n.skewX,
            o.scaleX = n.scaleX,
            o.scaleY = n.scaleY,
            o.x = n.x,
            o.y = n.y,
            Et && (o.z = n.z,
            o.rotationX = n.rotationX,
            o.rotationY = n.rotationY,
            o.scaleZ = n.scaleZ),
            o.filters && delete o.filters,
            o
        }, J = function(t, e, i, n, s) {
            var o, r, a, l = {}, c = t.style;
            for (r in i)
                "cssText" !== r && "length" !== r && isNaN(r) && (e[r] !== (o = i[r]) || s && s[r]) && -1 === r.indexOf("Origin") && ("number" == typeof o || "string" == typeof o) && (l[r] = "auto" !== o || "left" !== r && "top" !== r ? "" !== o && "auto" !== o && "none" !== o || "string" != typeof e[r] || "" === e[r].replace(y, "") ? o : 0 : G(t, r),
                void 0 !== c[r] && (a = new ft(c,r,c[r],a)));
            if (n)
                for (r in n)
                    "className" !== r && (l[r] = n[r]);
            return {
                difs: l,
                firstMPT: a
            }
        }, tt = {
            width: ["Left", "Right"],
            height: ["Top", "Bottom"]
        }, et = ["marginLeft", "marginRight", "marginTop", "marginBottom"], it = function(t, e, i) {
            var n = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight)
              , s = tt[e]
              , o = s.length;
            for (i = i || V(t, null); --o > -1; )
                n -= parseFloat(Q(t, "padding" + s[o], i, !0)) || 0,
                n -= parseFloat(Q(t, "border" + s[o] + "Width", i, !0)) || 0;
            return n
        }, nt = function(t, e) {
            if ("contain" === t || "auto" === t || "auto auto" === t)
                return t + " ";
            (null == t || "" === t) && (t = "0 0");
            var i = t.split(" ")
              , n = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : i[0]
              , s = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : i[1];
            return null == s ? s = "center" === n ? "50%" : "0" : "center" === s && (s = "50%"),
            ("center" === n || isNaN(parseFloat(n)) && -1 === (n + "").indexOf("=")) && (n = "50%"),
            t = n + " " + s + (i.length > 2 ? " " + i[2] : ""),
            e && (e.oxp = -1 !== n.indexOf("%"),
            e.oyp = -1 !== s.indexOf("%"),
            e.oxr = "=" === n.charAt(1),
            e.oyr = "=" === s.charAt(1),
            e.ox = parseFloat(n.replace(y, "")),
            e.oy = parseFloat(s.replace(y, "")),
            e.v = t),
            e || t
        }, st = function(t, e) {
            return "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e)
        }, ot = function(t, e) {
            return null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t)
        }, rt = function(t, e, i, n) {
            var s, o, r, a, l, c = 1e-6;
            return null == t ? a = e : "number" == typeof t ? a = t : (s = 360,
            o = t.split("_"),
            r = ((l = "=" === t.charAt(1)) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(o[0].substr(2)) : parseFloat(o[0])) * (-1 === t.indexOf("rad") ? 1 : M) - (l ? 0 : e),
            o.length && (n && (n[i] = e + r),
            -1 !== t.indexOf("short") && ((r %= s) !== r % 180 && (r = 0 > r ? r + s : r - s)),
            -1 !== t.indexOf("_cw") && 0 > r ? r = (r + 3599999999640) % s - (0 | r / s) * s : -1 !== t.indexOf("ccw") && r > 0 && (r = (r - 3599999999640) % s - (0 | r / s) * s)),
            a = e + r),
            c > a && a > -c && (a = 0),
            a
        }, at = {
            aqua: [0, 255, 255],
            lime: [0, 255, 0],
            silver: [192, 192, 192],
            black: [0, 0, 0],
            maroon: [128, 0, 0],
            teal: [0, 128, 128],
            blue: [0, 0, 255],
            navy: [0, 0, 128],
            white: [255, 255, 255],
            fuchsia: [255, 0, 255],
            olive: [128, 128, 0],
            yellow: [255, 255, 0],
            orange: [255, 165, 0],
            gray: [128, 128, 128],
            purple: [128, 0, 128],
            green: [0, 128, 0],
            red: [255, 0, 0],
            pink: [255, 192, 203],
            cyan: [0, 255, 255],
            transparent: [255, 255, 255, 0]
        }, lt = function(t, e, i) {
            return 0 | 255 * (1 > 6 * (t = 0 > t ? t + 1 : t > 1 ? t - 1 : t) ? e + 6 * (i - e) * t : .5 > t ? i : 2 > 3 * t ? e + 6 * (i - e) * (2 / 3 - t) : e) + .5
        }, ct = r.parseColor = function(t, e) {
            var i, n, s, o, r, a, l, c, h, u, d;
            if (t)
                if ("number" == typeof t)
                    i = [t >> 16, 255 & t >> 8, 255 & t];
                else {
                    if ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)),
                    at[t])
                        i = at[t];
                    else if ("#" === t.charAt(0))
                        4 === t.length && (n = t.charAt(1),
                        s = t.charAt(2),
                        o = t.charAt(3),
                        t = "#" + n + n + s + s + o + o),
                        i = [(t = parseInt(t.substr(1), 16)) >> 16, 255 & t >> 8, 255 & t];
                    else if ("hsl" === t.substr(0, 3))
                        if (i = d = t.match(g),
                        e) {
                            if (-1 !== t.indexOf("="))
                                return t.match(_)
                        } else
                            r = Number(i[0]) % 360 / 360,
                            a = Number(i[1]) / 100,
                            n = 2 * (l = Number(i[2]) / 100) - (s = .5 >= l ? l * (a + 1) : l + a - l * a),
                            i.length > 3 && (i[3] = Number(t[3])),
                            i[0] = lt(r + 1 / 3, n, s),
                            i[1] = lt(r, n, s),
                            i[2] = lt(r - 1 / 3, n, s);
                    else
                        i = t.match(g) || at.transparent;
                    i[0] = Number(i[0]),
                    i[1] = Number(i[1]),
                    i[2] = Number(i[2]),
                    i.length > 3 && (i[3] = Number(i[3]))
                }
            else
                i = at.black;
            return e && !d && (n = i[0] / 255,
            s = i[1] / 255,
            o = i[2] / 255,
            l = ((c = Math.max(n, s, o)) + (h = Math.min(n, s, o))) / 2,
            c === h ? r = a = 0 : (u = c - h,
            a = l > .5 ? u / (2 - c - h) : u / (c + h),
            r = c === n ? (s - o) / u + (o > s ? 6 : 0) : c === s ? (o - n) / u + 2 : (n - s) / u + 4,
            r *= 60),
            i[0] = 0 | r + .5,
            i[1] = 0 | 100 * a + .5,
            i[2] = 0 | 100 * l + .5),
            i
        }
        , ht = function(t, e) {
            var i, n, s, o = t.match(ut) || [], r = 0, a = o.length ? "" : t;
            for (i = 0; o.length > i; i++)
                n = o[i],
                r += (s = t.substr(r, t.indexOf(n, r) - r)).length + n.length,
                3 === (n = ct(n, e)).length && n.push(1),
                a += s + (e ? "hsla(" + n[0] + "," + n[1] + "%," + n[2] + "%," + n[3] : "rgba(" + n.join(",")) + ")";
            return a
        }, ut = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";
        for (c in at)
            ut += "|" + c + "\\b";
        ut = RegExp(ut + ")", "gi"),
        r.colorStringFilter = function(t) {
            var e, i = t[0] + t[1];
            ut.lastIndex = 0,
            ut.test(i) && (e = -1 !== i.indexOf("hsl(") || -1 !== i.indexOf("hsla("),
            t[0] = ht(t[0], e),
            t[1] = ht(t[1], e))
        }
        ,
        e.defaultStringFilter || (e.defaultStringFilter = r.colorStringFilter);
        var dt = function(t, e, i, n) {
            if (null == t)
                return function(t) {
                    return t
                }
                ;
            var s, o = e ? (t.match(ut) || [""])[0] : "", r = t.split(o).join("").match(v) || [], a = t.substr(0, t.indexOf(r[0])), l = ")" === t.charAt(t.length - 1) ? ")" : "", c = -1 !== t.indexOf(" ") ? " " : ",", h = r.length, u = h > 0 ? r[0].replace(g, "") : "";
            return h ? s = e ? function(t) {
                var e, d, p, f;
                if ("number" == typeof t)
                    t += u;
                else if (n && D.test(t)) {
                    for (f = t.replace(D, "|").split("|"),
                    p = 0; f.length > p; p++)
                        f[p] = s(f[p]);
                    return f.join(",")
                }
                if (e = (t.match(ut) || [o])[0],
                p = (d = t.split(e).join("").match(v) || []).length,
                h > p--)
                    for (; h > ++p; )
                        d[p] = i ? d[0 | (p - 1) / 2] : r[p];
                return a + d.join(c) + c + e + l + (-1 !== t.indexOf("inset") ? " inset" : "")
            }
            : function(t) {
                var e, o, d;
                if ("number" == typeof t)
                    t += u;
                else if (n && D.test(t)) {
                    for (o = t.replace(D, "|").split("|"),
                    d = 0; o.length > d; d++)
                        o[d] = s(o[d]);
                    return o.join(",")
                }
                if (d = (e = t.match(v) || []).length,
                h > d--)
                    for (; h > ++d; )
                        e[d] = i ? e[0 | (d - 1) / 2] : r[d];
                return a + e.join(c) + l
            }
            : function(t) {
                return t
            }
        }
          , pt = function(t) {
            return t = t.split(","),
            function(e, i, n, s, o, r, a) {
                var l, c = (i + "").split(" ");
                for (a = {},
                l = 0; 4 > l; l++)
                    a[t[l]] = c[l] = c[l] || c[(l - 1) / 2 >> 0];
                return s.parse(e, a, o, r)
            }
        }
          , ft = (F._setPluginRatio = function(t) {
            this.plugin.setRatio(t);
            for (var e, i, n, s, o = this.data, r = o.proxy, a = o.firstMPT, l = 1e-6; a; )
                e = r[a.v],
                a.r ? e = Math.round(e) : l > e && e > -l && (e = 0),
                a.t[a.p] = e,
                a = a._next;
            if (o.autoRotate && (o.autoRotate.rotation = r.rotation),
            1 === t)
                for (a = o.firstMPT; a; ) {
                    if ((i = a.t).type) {
                        if (1 === i.type) {
                            for (s = i.xs0 + i.s + i.xs1,
                            n = 1; i.l > n; n++)
                                s += i["xn" + n] + i["xs" + (n + 1)];
                            i.e = s
                        }
                    } else
                        i.e = i.s + i.xs0;
                    a = a._next
                }
        }
        ,
        function(t, e, i, n, s) {
            this.t = t,
            this.p = e,
            this.v = i,
            this.r = s,
            n && (n._prev = this,
            this._next = n)
        }
        )
          , mt = (F._parseToProxy = function(t, e, i, n, s, o) {
            var r, a, l, c, h, u = n, d = {}, p = {}, f = i._transform, m = z;
            for (i._transform = null,
            z = e,
            n = h = i.parse(t, e, n, s),
            z = m,
            o && (i._transform = f,
            u && (u._prev = null,
            u._prev && (u._prev._next = null))); n && n !== u; ) {
                if (1 >= n.type && (p[a = n.p] = n.s + n.c,
                d[a] = n.s,
                o || (c = new ft(n,"s",a,c,n.r),
                n.c = 0),
                1 === n.type))
                    for (r = n.l; --r > 0; )
                        l = "xn" + r,
                        p[a = n.p + "_" + l] = n.data[l],
                        d[a] = n[l],
                        o || (c = new ft(n,l,a,c,n.rxp[l]));
                n = n._next
            }
            return {
                proxy: d,
                end: p,
                firstMPT: c,
                pt: h
            }
        }
        ,
        F.CSSPropTween = function(t, e, n, s, r, a, l, c, h, u, d) {
            this.t = t,
            this.p = e,
            this.s = n,
            this.c = s,
            this.n = l || e,
            t instanceof mt || o.push(this.n),
            this.r = c,
            this.type = a || 0,
            h && (this.pr = h,
            i = !0),
            this.b = void 0 === u ? n : u,
            this.e = void 0 === d ? n + s : d,
            r && (this._next = r,
            r._prev = this)
        }
        )
          , gt = function(t, e, i, n, s, o) {
            var r = new mt(t,e,i,n - i,s,-1,o);
            return r.b = i,
            r.e = r.xs0 = n,
            r
        }
          , _t = r.parseComplex = function(t, e, i, n, s, o, r, a, l, c) {
            r = new mt(t,e,0,0,r,c ? 2 : 1,null,!1,a,i = i || o || "",n),
            n += "";
            var u, d, p, f, m, v, y, b, w, T, x, k, S, C = i.split(", ").join(",").split(" "), E = n.split(", ").join(",").split(" "), O = C.length, P = !1 !== h;
            for ((-1 !== n.indexOf(",") || -1 !== i.indexOf(",")) && (C = C.join(" ").replace(D, ", ").split(" "),
            E = E.join(" ").replace(D, ", ").split(" "),
            O = C.length),
            O !== E.length && (O = (C = (o || "").split(" ")).length),
            r.plugin = l,
            r.setRatio = c,
            ut.lastIndex = 0,
            u = 0; O > u; u++)
                if (f = C[u],
                m = E[u],
                (b = parseFloat(f)) || 0 === b)
                    r.appendXtra("", b, st(m, b), m.replace(_, ""), P && -1 !== m.indexOf("px"), !0);
                else if (s && ut.test(f))
                    k = "," === m.charAt(m.length - 1) ? ")," : ")",
                    S = -1 !== m.indexOf("hsl") && H,
                    f = ct(f, S),
                    m = ct(m, S),
                    (w = f.length + m.length > 6) && !H && 0 === m[3] ? (r["xs" + r.l] += r.l ? " transparent" : "transparent",
                    r.e = r.e.split(E[u]).join("transparent")) : (H || (w = !1),
                    S ? r.appendXtra(w ? "hsla(" : "hsl(", f[0], st(m[0], f[0]), ",", !1, !0).appendXtra("", f[1], st(m[1], f[1]), "%,", !1).appendXtra("", f[2], st(m[2], f[2]), w ? "%," : "%" + k, !1) : r.appendXtra(w ? "rgba(" : "rgb(", f[0], m[0] - f[0], ",", !0, !0).appendXtra("", f[1], m[1] - f[1], ",", !0).appendXtra("", f[2], m[2] - f[2], w ? "," : k, !0),
                    w && (f = 4 > f.length ? 1 : f[3],
                    r.appendXtra("", f, (4 > m.length ? 1 : m[3]) - f, k, !1))),
                    ut.lastIndex = 0;
                else if (v = f.match(g)) {
                    if (!(y = m.match(_)) || y.length !== v.length)
                        return r;
                    for (p = 0,
                    d = 0; v.length > d; d++)
                        x = v[d],
                        T = f.indexOf(x, p),
                        r.appendXtra(f.substr(p, T - p), Number(x), st(y[d], x), "", P && "px" === f.substr(T + x.length, 2), 0 === d),
                        p = T + x.length;
                    r["xs" + r.l] += f.substr(p)
                } else
                    r["xs" + r.l] += r.l ? " " + f : f;
            if (-1 !== n.indexOf("=") && r.data) {
                for (k = r.xs0 + r.data.s,
                u = 1; r.l > u; u++)
                    k += r["xs" + u] + r.data["xn" + u];
                r.e = k + r["xs" + u]
            }
            return r.l || (r.type = -1,
            r.xs0 = r.e),
            r.xfirst || r
        }
          , vt = 9;
        for ((c = mt.prototype).l = c.pr = 0; --vt > 0; )
            c["xn" + vt] = 0,
            c["xs" + vt] = "";
        c.xs0 = "",
        c._next = c._prev = c.xfirst = c.data = c.plugin = c.setRatio = c.rxp = null,
        c.appendXtra = function(t, e, i, n, s, o) {
            var r = this
              , a = r.l;
            return r["xs" + a] += o && a ? " " + t : t || "",
            i || 0 === a || r.plugin ? (r.l++,
            r.type = r.setRatio ? 2 : 1,
            r["xs" + r.l] = n || "",
            a > 0 ? (r.data["xn" + a] = e + i,
            r.rxp["xn" + a] = s,
            r["xn" + a] = e,
            r.plugin || (r.xfirst = new mt(r,"xn" + a,e,i,r.xfirst || r,0,r.n,s,r.pr),
            r.xfirst.xs0 = 0),
            r) : (r.data = {
                s: e + i
            },
            r.rxp = {},
            r.s = e,
            r.c = i,
            r.r = s,
            r)) : (r["xs" + a] += e + (n || ""),
            r)
        }
        ;
        var yt = function(t, e) {
            e = e || {},
            this.p = e.prefix && U(t) || t,
            l[t] = l[this.p] = this,
            this.format = e.formatter || dt(e.defaultValue, e.color, e.collapsible, e.multi),
            e.parser && (this.parse = e.parser),
            this.clrs = e.color,
            this.multi = e.multi,
            this.keyword = e.keyword,
            this.dflt = e.defaultValue,
            this.pr = e.priority || 0
        }
          , bt = F._registerComplexSpecialProp = function(t, e, i) {
            "object" != typeof e && (e = {
                parser: i
            });
            var n, s = t.split(","), o = e.defaultValue;
            for (i = i || [o],
            n = 0; s.length > n; n++)
                e.prefix = 0 === n && e.prefix,
                e.defaultValue = i[n] || o,
                new yt(s[n],e)
        }
          , wt = function(t) {
            if (!l[t]) {
                var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                bt(t, {
                    parser: function(t, i, n, s, o, r, c) {
                        var h = a.com.greensock.plugins[e];
                        return h ? (h._cssRegister(),
                        l[n].parse(t, i, n, s, o, r, c)) : (q("Error: " + e + " js file not loaded."),
                        o)
                    }
                })
            }
        };
        (c = yt.prototype).parseComplex = function(t, e, i, n, s, o) {
            var r, a, l, c, h, u, d = this.keyword;
            if (this.multi && (D.test(i) || D.test(e) ? (a = e.replace(D, "|").split("|"),
            l = i.replace(D, "|").split("|")) : d && (a = [e],
            l = [i])),
            l) {
                for (c = l.length > a.length ? l.length : a.length,
                r = 0; c > r; r++)
                    e = a[r] = a[r] || this.dflt,
                    i = l[r] = l[r] || this.dflt,
                    d && ((h = e.indexOf(d)) !== (u = i.indexOf(d)) && (-1 === u ? a[r] = a[r].split(d).join("") : -1 === h && (a[r] += " " + d)));
                e = a.join(", "),
                i = l.join(", ")
            }
            return _t(t, this.p, e, i, this.clrs, this.dflt, n, this.pr, s, o)
        }
        ,
        c.parse = function(t, e, i, n, o, r) {
            return this.parseComplex(t.style, this.format(Q(t, this.p, s, !1, this.dflt)), this.format(e), o, r)
        }
        ,
        r.registerSpecialProp = function(t, e, i) {
            bt(t, {
                parser: function(t, n, s, o, r, a) {
                    var l = new mt(t,s,0,0,r,2,s,!1,i);
                    return l.plugin = a,
                    l.setRatio = e(t, n, o._tween, s),
                    l
                },
                priority: i
            })
        }
        ,
        r.useSVGTransformAttr = d || p;
        var Tt, xt = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","), kt = U("transform"), St = Y + "transform", Ct = U("transformOrigin"), Et = null !== U("perspective"), Ot = F.Transform = function() {
            this.perspective = parseFloat(r.defaultTransformPerspective) || 0,
            this.force3D = !(!1 === r.defaultForce3D || !Et) && (r.defaultForce3D || "auto")
        }
        , Pt = window.SVGElement, At = function(t, e, i) {
            var n, s = R.createElementNS("http://www.w3.org/2000/svg", t), o = /([a-z])([A-Z])/g;
            for (n in i)
                s.setAttributeNS(null, n.replace(o, "$1-$2").toLowerCase(), i[n]);
            return e.appendChild(s),
            s
        }, It = R.documentElement, Dt = function() {
            var t, e, i, n = m || /Android/i.test(W) && !window.chrome;
            return R.createElementNS && !n && (t = At("svg", It),
            i = (e = At("rect", t, {
                width: 100,
                height: 50,
                x: 100
            })).getBoundingClientRect().width,
            e.style[Ct] = "50% 50%",
            e.style[kt] = "scaleX(0.5)",
            n = i === e.getBoundingClientRect().width && !(p && Et),
            It.removeChild(t)),
            n
        }(), Lt = function(t, e, i, n, s) {
            var o, a, l, c, h, u, d, p, f, m, g, _, v, y, b = t._gsTransform, w = Rt(t, !0);
            b && (v = b.xOrigin,
            y = b.yOrigin),
            (!n || 2 > (o = n.split(" ")).length) && (d = t.getBBox(),
            o = [(-1 !== (e = nt(e).split(" "))[0].indexOf("%") ? parseFloat(e[0]) / 100 * d.width : parseFloat(e[0])) + d.x, (-1 !== e[1].indexOf("%") ? parseFloat(e[1]) / 100 * d.height : parseFloat(e[1])) + d.y]),
            i.xOrigin = c = parseFloat(o[0]),
            i.yOrigin = h = parseFloat(o[1]),
            n && w !== zt && (u = w[0],
            d = w[1],
            p = w[2],
            f = w[3],
            m = w[4],
            a = c * (f / (_ = u * f - d * p)) + h * (-p / _) + (p * (g = w[5]) - f * m) / _,
            l = c * (-d / _) + h * (u / _) - (u * g - d * m) / _,
            c = i.xOrigin = o[0] = a,
            h = i.yOrigin = o[1] = l),
            b && (s || !1 !== s && !1 !== r.defaultSmoothOrigin ? (a = c - v,
            l = h - y,
            b.xOffset += a * w[0] + l * w[2] - a,
            b.yOffset += a * w[1] + l * w[3] - l) : b.xOffset = b.yOffset = 0),
            t.setAttribute("data-svg-origin", o.join(" "))
        }, Mt = function(t) {
            return !!(Pt && "function" == typeof t.getBBox && t.getCTM && (!t.parentNode || t.parentNode.getBBox && t.parentNode.getCTM))
        }, zt = [1, 0, 0, 1, 0, 0], Rt = function(t, e) {
            var i, n, s, o, r, a = t._gsTransform || new Ot, l = 1e5;
            if (kt ? n = Q(t, St, null, !0) : t.currentStyle && (n = (n = t.currentStyle.filter.match(A)) && 4 === n.length ? [n[0].substr(4), Number(n[2].substr(4)), Number(n[1].substr(4)), n[3].substr(4), a.x || 0, a.y || 0].join(",") : ""),
            i = !n || "none" === n || "matrix(1, 0, 0, 1, 0, 0)" === n,
            (a.svg || t.getBBox && Mt(t)) && (i && -1 !== (t.style[kt] + "").indexOf("matrix") && (n = t.style[kt],
            i = 0),
            s = t.getAttribute("transform"),
            i && s && (-1 !== s.indexOf("matrix") ? (n = s,
            i = 0) : -1 !== s.indexOf("translate") && (n = "matrix(1,0,0,1," + s.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") + ")",
            i = 0))),
            i)
                return zt;
            for (s = (n || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [],
            vt = s.length; --vt > -1; )
                o = Number(s[vt]),
                s[vt] = (r = o - (o |= 0)) ? (0 | r * l + (0 > r ? -.5 : .5)) / l + o : o;
            return e && s.length > 6 ? [s[0], s[1], s[4], s[5], s[12], s[13]] : s
        }, jt = F.getTransform = function(t, i, n, o) {
            if (t._gsTransform && n && !o)
                return t._gsTransform;
            var a, l, c, h, u, d, p = n && t._gsTransform || new Ot, f = 0 > p.scaleX, m = 2e-5, g = 1e5, _ = Et && (parseFloat(Q(t, Ct, i, !1, "0 0 0").split(" ")[2]) || p.zOrigin) || 0, v = parseFloat(r.defaultTransformPerspective) || 0;
            if (p.svg = !(!t.getBBox || !Mt(t)),
            p.svg && (Lt(t, Q(t, Ct, s, !1, "50% 50%") + "", p, t.getAttribute("data-svg-origin")),
            Tt = r.useSVGTransformAttr || Dt),
            (a = Rt(t)) !== zt) {
                if (16 === a.length) {
                    var y, b, w, T, x, k = a[0], S = a[1], C = a[2], E = a[3], O = a[4], P = a[5], A = a[6], I = a[7], D = a[8], L = a[9], z = a[10], R = a[12], j = a[13], N = a[14], $ = a[11], F = Math.atan2(A, z);
                    p.zOrigin && (R = D * (N = -p.zOrigin) - a[12],
                    j = L * N - a[13],
                    N = z * N + p.zOrigin - a[14]),
                    p.rotationX = F * M,
                    F && (y = O * (T = Math.cos(-F)) + D * (x = Math.sin(-F)),
                    b = P * T + L * x,
                    w = A * T + z * x,
                    D = O * -x + D * T,
                    L = P * -x + L * T,
                    z = A * -x + z * T,
                    $ = I * -x + $ * T,
                    O = y,
                    P = b,
                    A = w),
                    F = Math.atan2(D, z),
                    p.rotationY = F * M,
                    F && (b = S * (T = Math.cos(-F)) - L * (x = Math.sin(-F)),
                    w = C * T - z * x,
                    L = S * x + L * T,
                    z = C * x + z * T,
                    $ = E * x + $ * T,
                    k = y = k * T - D * x,
                    S = b,
                    C = w),
                    F = Math.atan2(S, k),
                    p.rotation = F * M,
                    F && (k = k * (T = Math.cos(-F)) + O * (x = Math.sin(-F)),
                    b = S * T + P * x,
                    P = S * -x + P * T,
                    A = C * -x + A * T,
                    S = b),
                    p.rotationX && Math.abs(p.rotationX) + Math.abs(p.rotation) > 359.9 && (p.rotationX = p.rotation = 0,
                    p.rotationY += 180),
                    p.scaleX = (0 | Math.sqrt(k * k + S * S) * g + .5) / g,
                    p.scaleY = (0 | Math.sqrt(P * P + L * L) * g + .5) / g,
                    p.scaleZ = (0 | Math.sqrt(A * A + z * z) * g + .5) / g,
                    p.skewX = 0,
                    p.perspective = $ ? 1 / (0 > $ ? -$ : $) : 0,
                    p.x = R,
                    p.y = j,
                    p.z = N,
                    p.svg && (p.x -= p.xOrigin - (p.xOrigin * k - p.yOrigin * O),
                    p.y -= p.yOrigin - (p.yOrigin * S - p.xOrigin * P))
                } else if (!(Et && !o && a.length && p.x === a[4] && p.y === a[5] && (p.rotationX || p.rotationY) || void 0 !== p.x && "none" === Q(t, "display", i))) {
                    var W = a.length >= 6
                      , H = W ? a[0] : 1
                      , B = a[1] || 0
                      , q = a[2] || 0
                      , Y = W ? a[3] : 1;
                    p.x = a[4] || 0,
                    p.y = a[5] || 0,
                    c = Math.sqrt(H * H + B * B),
                    h = Math.sqrt(Y * Y + q * q),
                    u = H || B ? Math.atan2(B, H) * M : p.rotation || 0,
                    d = q || Y ? Math.atan2(q, Y) * M + u : p.skewX || 0,
                    Math.abs(d) > 90 && 270 > Math.abs(d) && (f ? (c *= -1,
                    d += 0 >= u ? 180 : -180,
                    u += 0 >= u ? 180 : -180) : (h *= -1,
                    d += 0 >= d ? 180 : -180)),
                    p.scaleX = c,
                    p.scaleY = h,
                    p.rotation = u,
                    p.skewX = d,
                    Et && (p.rotationX = p.rotationY = p.z = 0,
                    p.perspective = v,
                    p.scaleZ = 1),
                    p.svg && (p.x -= p.xOrigin - (p.xOrigin * H + p.yOrigin * q),
                    p.y -= p.yOrigin - (p.xOrigin * B + p.yOrigin * Y))
                }
                for (l in p.zOrigin = _,
                p)
                    m > p[l] && p[l] > -m && (p[l] = 0)
            }
            return n && (t._gsTransform = p,
            p.svg && (Tt && t.style[kt] ? e.delayedCall(.001, (function() {
                Wt(t.style, kt)
            }
            )) : !Tt && t.getAttribute("transform") && e.delayedCall(.001, (function() {
                t.removeAttribute("transform")
            }
            )))),
            p
        }
        , Nt = function(t) {
            var e, i, n = this.data, s = -n.rotation * L, o = s + n.skewX * L, r = 1e5, a = (0 | Math.cos(s) * n.scaleX * r) / r, l = (0 | Math.sin(s) * n.scaleX * r) / r, c = (0 | Math.sin(o) * -n.scaleY * r) / r, h = (0 | Math.cos(o) * n.scaleY * r) / r, u = this.t.style, d = this.t.currentStyle;
            if (d) {
                i = l,
                l = -c,
                c = -i,
                e = d.filter,
                u.filter = "";
                var p, f, g = this.t.offsetWidth, _ = this.t.offsetHeight, v = "absolute" !== d.position, y = "progid:DXImageTransform.Microsoft.Matrix(M11=" + a + ", M12=" + l + ", M21=" + c + ", M22=" + h, T = n.x + g * n.xPercent / 100, x = n.y + _ * n.yPercent / 100;
                if (null != n.ox && (T += (p = (n.oxp ? .01 * g * n.ox : n.ox) - g / 2) - (p * a + (f = (n.oyp ? .01 * _ * n.oy : n.oy) - _ / 2) * l),
                x += f - (p * c + f * h)),
                v ? y += ", Dx=" + ((p = g / 2) - (p * a + (f = _ / 2) * l) + T) + ", Dy=" + (f - (p * c + f * h) + x) + ")" : y += ", sizingMethod='auto expand')",
                u.filter = -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? e.replace(I, y) : y + " " + e,
                (0 === t || 1 === t) && 1 === a && 0 === l && 0 === c && 1 === h && (v && -1 === y.indexOf("Dx=0, Dy=0") || w.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf(e.indexOf("Alpha")) && u.removeAttribute("filter")),
                !v) {
                    var k, S, C, E = 8 > m ? 1 : -1;
                    for (p = n.ieOffsetX || 0,
                    f = n.ieOffsetY || 0,
                    n.ieOffsetX = Math.round((g - ((0 > a ? -a : a) * g + (0 > l ? -l : l) * _)) / 2 + T),
                    n.ieOffsetY = Math.round((_ - ((0 > h ? -h : h) * _ + (0 > c ? -c : c) * g)) / 2 + x),
                    vt = 0; 4 > vt; vt++)
                        C = (i = -1 !== (k = d[S = et[vt]]).indexOf("px") ? parseFloat(k) : K(this.t, S, parseFloat(k), k.replace(b, "")) || 0) !== n[S] ? 2 > vt ? -n.ieOffsetX : -n.ieOffsetY : 2 > vt ? p - n.ieOffsetX : f - n.ieOffsetY,
                        u[S] = (n[S] = Math.round(i - C * (0 === vt || 2 === vt ? 1 : E))) + "px"
                }
            }
        }, $t = F.set3DTransformRatio = F.setTransformRatio = function(t) {
            var e, i, n, s, o, r, a, l, c, h, u, d, f, m, g, _, v, y, b, w, T, x, k, S = this.data, C = this.t.style, E = S.rotation, O = S.rotationX, P = S.rotationY, A = S.scaleX, I = S.scaleY, D = S.scaleZ, M = S.x, z = S.y, R = S.z, j = S.svg, N = S.perspective, $ = S.force3D;
            if (!((1 !== t && 0 !== t || "auto" !== $ || this.tween._totalTime !== this.tween._totalDuration && this.tween._totalTime) && $ || R || N || P || O) || Tt && j || !Et)
                E || S.skewX || j ? (E *= L,
                x = S.skewX * L,
                k = 1e5,
                e = Math.cos(E) * A,
                s = Math.sin(E) * A,
                i = Math.sin(E - x) * -I,
                o = Math.cos(E - x) * I,
                x && "simple" === S.skewType && (v = Math.tan(x),
                i *= v = Math.sqrt(1 + v * v),
                o *= v,
                S.skewY && (e *= v,
                s *= v)),
                j && (M += S.xOrigin - (S.xOrigin * e + S.yOrigin * i) + S.xOffset,
                z += S.yOrigin - (S.xOrigin * s + S.yOrigin * o) + S.yOffset,
                Tt && (S.xPercent || S.yPercent) && (m = this.t.getBBox(),
                M += .01 * S.xPercent * m.width,
                z += .01 * S.yPercent * m.height),
                (m = 1e-6) > M && M > -m && (M = 0),
                m > z && z > -m && (z = 0)),
                b = (0 | e * k) / k + "," + (0 | s * k) / k + "," + (0 | i * k) / k + "," + (0 | o * k) / k + "," + M + "," + z + ")",
                j && Tt ? this.t.setAttribute("transform", "matrix(" + b) : C[kt] = (S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) matrix(" : "matrix(") + b) : C[kt] = (S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) matrix(" : "matrix(") + A + ",0,0," + I + "," + M + "," + z + ")";
            else {
                if (p && ((m = 1e-4) > A && A > -m && (A = D = 2e-5),
                m > I && I > -m && (I = D = 2e-5),
                !N || S.z || S.rotationX || S.rotationY || (N = 0)),
                E || S.skewX)
                    E *= L,
                    g = e = Math.cos(E),
                    _ = s = Math.sin(E),
                    S.skewX && (E -= S.skewX * L,
                    g = Math.cos(E),
                    _ = Math.sin(E),
                    "simple" === S.skewType && (v = Math.tan(S.skewX * L),
                    g *= v = Math.sqrt(1 + v * v),
                    _ *= v,
                    S.skewY && (e *= v,
                    s *= v))),
                    i = -_,
                    o = g;
                else {
                    if (!(P || O || 1 !== D || N || j))
                        return void (C[kt] = (S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) translate3d(" : "translate3d(") + M + "px," + z + "px," + R + "px)" + (1 !== A || 1 !== I ? " scale(" + A + "," + I + ")" : ""));
                    e = o = 1,
                    i = s = 0
                }
                c = 1,
                n = r = a = l = h = u = 0,
                d = N ? -1 / N : 0,
                f = S.zOrigin,
                m = 1e-6,
                w = ",",
                T = "0",
                (E = P * L) && (g = Math.cos(E),
                a = -(_ = Math.sin(E)),
                h = d * -_,
                n = e * _,
                r = s * _,
                c = g,
                d *= g,
                e *= g,
                s *= g),
                (E = O * L) && (v = i * (g = Math.cos(E)) + n * (_ = Math.sin(E)),
                y = o * g + r * _,
                l = c * _,
                u = d * _,
                n = i * -_ + n * g,
                r = o * -_ + r * g,
                c *= g,
                d *= g,
                i = v,
                o = y),
                1 !== D && (n *= D,
                r *= D,
                c *= D,
                d *= D),
                1 !== I && (i *= I,
                o *= I,
                l *= I,
                u *= I),
                1 !== A && (e *= A,
                s *= A,
                a *= A,
                h *= A),
                (f || j) && (f && (M += n * -f,
                z += r * -f,
                R += c * -f + f),
                j && (M += S.xOrigin - (S.xOrigin * e + S.yOrigin * i) + S.xOffset,
                z += S.yOrigin - (S.xOrigin * s + S.yOrigin * o) + S.yOffset),
                m > M && M > -m && (M = T),
                m > z && z > -m && (z = T),
                m > R && R > -m && (R = 0)),
                b = S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) matrix3d(" : "matrix3d(",
                b += (m > e && e > -m ? T : e) + w + (m > s && s > -m ? T : s) + w + (m > a && a > -m ? T : a),
                b += w + (m > h && h > -m ? T : h) + w + (m > i && i > -m ? T : i) + w + (m > o && o > -m ? T : o),
                O || P ? (b += w + (m > l && l > -m ? T : l) + w + (m > u && u > -m ? T : u) + w + (m > n && n > -m ? T : n),
                b += w + (m > r && r > -m ? T : r) + w + (m > c && c > -m ? T : c) + w + (m > d && d > -m ? T : d) + w) : b += ",0,0,0,0,1,0,",
                b += M + w + z + w + R + w + (N ? 1 + -R / N : 1) + ")",
                C[kt] = b
            }
        }
        ;
        (c = Ot.prototype).x = c.y = c.z = c.skewX = c.skewY = c.rotation = c.rotationX = c.rotationY = c.zOrigin = c.xPercent = c.yPercent = c.xOffset = c.yOffset = 0,
        c.scaleX = c.scaleY = c.scaleZ = 1,
        bt("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
            parser: function(t, e, i, n, o, a, l) {
                if (n._lastParsedTransform === l)
                    return o;
                n._lastParsedTransform = l;
                var c, h, u, d, p, f, m, g, _, v, y = t._gsTransform, b = t.style, w = 1e-6, T = xt.length, x = l, k = {}, S = "transformOrigin";
                if (l.display ? (d = Q(t, "display"),
                b.display = "block",
                c = jt(t, s, !0, l.parseTransform),
                b.display = d) : c = jt(t, s, !0, l.parseTransform),
                n._transform = c,
                "string" == typeof x.transform && kt)
                    (d = N.style)[kt] = x.transform,
                    d.display = "block",
                    d.position = "absolute",
                    R.body.appendChild(N),
                    h = jt(N, null, !1),
                    R.body.removeChild(N),
                    h.perspective || (h.perspective = c.perspective),
                    null != x.xPercent && (h.xPercent = ot(x.xPercent, c.xPercent)),
                    null != x.yPercent && (h.yPercent = ot(x.yPercent, c.yPercent));
                else if ("object" == typeof x) {
                    if (h = {
                        scaleX: ot(null != x.scaleX ? x.scaleX : x.scale, c.scaleX),
                        scaleY: ot(null != x.scaleY ? x.scaleY : x.scale, c.scaleY),
                        scaleZ: ot(x.scaleZ, c.scaleZ),
                        x: ot(x.x, c.x),
                        y: ot(x.y, c.y),
                        z: ot(x.z, c.z),
                        xPercent: ot(x.xPercent, c.xPercent),
                        yPercent: ot(x.yPercent, c.yPercent),
                        perspective: ot(x.transformPerspective, c.perspective)
                    },
                    null != (g = x.directionalRotation))
                        if ("object" == typeof g)
                            for (d in g)
                                x[d] = g[d];
                        else
                            x.rotation = g;
                    "string" == typeof x.x && -1 !== x.x.indexOf("%") && (h.x = 0,
                    h.xPercent = ot(x.x, c.xPercent)),
                    "string" == typeof x.y && -1 !== x.y.indexOf("%") && (h.y = 0,
                    h.yPercent = ot(x.y, c.yPercent)),
                    h.rotation = rt("rotation"in x ? x.rotation : "shortRotation"in x ? x.shortRotation + "_short" : "rotationZ"in x ? x.rotationZ : c.rotation, c.rotation, "rotation", k),
                    Et && (h.rotationX = rt("rotationX"in x ? x.rotationX : "shortRotationX"in x ? x.shortRotationX + "_short" : c.rotationX || 0, c.rotationX, "rotationX", k),
                    h.rotationY = rt("rotationY"in x ? x.rotationY : "shortRotationY"in x ? x.shortRotationY + "_short" : c.rotationY || 0, c.rotationY, "rotationY", k)),
                    h.skewX = null == x.skewX ? c.skewX : rt(x.skewX, c.skewX),
                    h.skewY = null == x.skewY ? c.skewY : rt(x.skewY, c.skewY),
                    (u = h.skewY - c.skewY) && (h.skewX += u,
                    h.rotation += u)
                }
                for (Et && null != x.force3D && (c.force3D = x.force3D,
                m = !0),
                c.skewType = x.skewType || c.skewType || r.defaultSkewType,
                (f = c.force3D || c.z || c.rotationX || c.rotationY || h.z || h.rotationX || h.rotationY || h.perspective) || null == x.scale || (h.scaleZ = 1); --T > -1; )
                    ((p = h[i = xt[T]] - c[i]) > w || -w > p || null != x[i] || null != z[i]) && (m = !0,
                    o = new mt(c,i,c[i],p,o),
                    i in k && (o.e = k[i]),
                    o.xs0 = 0,
                    o.plugin = a,
                    n._overwriteProps.push(o.n));
                return p = x.transformOrigin,
                c.svg && (p || x.svgOrigin) && (_ = c.xOffset,
                v = c.yOffset,
                Lt(t, nt(p), h, x.svgOrigin, x.smoothOrigin),
                o = gt(c, "xOrigin", (y ? c : h).xOrigin, h.xOrigin, o, S),
                o = gt(c, "yOrigin", (y ? c : h).yOrigin, h.yOrigin, o, S),
                (_ !== c.xOffset || v !== c.yOffset) && (o = gt(c, "xOffset", y ? _ : c.xOffset, c.xOffset, o, S),
                o = gt(c, "yOffset", y ? v : c.yOffset, c.yOffset, o, S)),
                p = Tt ? null : "0px 0px"),
                (p || Et && f && c.zOrigin) && (kt ? (m = !0,
                i = Ct,
                p = (p || Q(t, i, s, !1, "50% 50%")) + "",
                (o = new mt(b,i,0,0,o,-1,S)).b = b[i],
                o.plugin = a,
                Et ? (d = c.zOrigin,
                p = p.split(" "),
                c.zOrigin = (p.length > 2 && (0 === d || "0px" !== p[2]) ? parseFloat(p[2]) : d) || 0,
                o.xs0 = o.e = p[0] + " " + (p[1] || "50%") + " 0px",
                (o = new mt(c,"zOrigin",0,0,o,-1,o.n)).b = d,
                o.xs0 = o.e = c.zOrigin) : o.xs0 = o.e = p) : nt(p + "", c)),
                m && (n._transformType = c.svg && Tt || !f && 3 !== this._transformType ? 2 : 3),
                o
            },
            prefix: !0
        }),
        bt("boxShadow", {
            defaultValue: "0px 0px 0px 0px #999",
            prefix: !0,
            color: !0,
            multi: !0,
            keyword: "inset"
        }),
        bt("borderRadius", {
            defaultValue: "0px",
            parser: function(t, e, i, o, r) {
                e = this.format(e);
                var a, l, c, h, u, d, p, f, m, g, _, v, y, b, w, T, x = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"], k = t.style;
                for (m = parseFloat(t.offsetWidth),
                g = parseFloat(t.offsetHeight),
                a = e.split(" "),
                l = 0; x.length > l; l++)
                    this.p.indexOf("border") && (x[l] = U(x[l])),
                    -1 !== (u = h = Q(t, x[l], s, !1, "0px")).indexOf(" ") && (h = u.split(" "),
                    u = h[0],
                    h = h[1]),
                    d = c = a[l],
                    p = parseFloat(u),
                    v = u.substr((p + "").length),
                    (y = "=" === d.charAt(1)) ? (f = parseInt(d.charAt(0) + "1", 10),
                    d = d.substr(2),
                    f *= parseFloat(d),
                    _ = d.substr((f + "").length - (0 > f ? 1 : 0)) || "") : (f = parseFloat(d),
                    _ = d.substr((f + "").length)),
                    "" === _ && (_ = n[i] || v),
                    _ !== v && (b = K(t, "borderLeft", p, v),
                    w = K(t, "borderTop", p, v),
                    "%" === _ ? (u = b / m * 100 + "%",
                    h = w / g * 100 + "%") : "em" === _ ? (u = b / (T = K(t, "borderLeft", 1, "em")) + "em",
                    h = w / T + "em") : (u = b + "px",
                    h = w + "px"),
                    y && (d = parseFloat(u) + f + _,
                    c = parseFloat(h) + f + _)),
                    r = _t(k, x[l], u + " " + h, d + " " + c, !1, "0px", r);
                return r
            },
            prefix: !0,
            formatter: dt("0px 0px 0px 0px", !1, !0)
        }),
        bt("backgroundPosition", {
            defaultValue: "0 0",
            parser: function(t, e, i, n, o, r) {
                var a, l, c, h, u, d, p = "background-position", f = s || V(t, null), g = this.format((f ? m ? f.getPropertyValue(p + "-x") + " " + f.getPropertyValue(p + "-y") : f.getPropertyValue(p) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"), _ = this.format(e);
                if (-1 !== g.indexOf("%") != (-1 !== _.indexOf("%")) && ((d = Q(t, "backgroundImage").replace(E, "")) && "none" !== d)) {
                    for (a = g.split(" "),
                    l = _.split(" "),
                    $.setAttribute("src", d),
                    c = 2; --c > -1; )
                        (h = -1 !== (g = a[c]).indexOf("%")) !== (-1 !== l[c].indexOf("%")) && (u = 0 === c ? t.offsetWidth - $.width : t.offsetHeight - $.height,
                        a[c] = h ? parseFloat(g) / 100 * u + "px" : parseFloat(g) / u * 100 + "%");
                    g = a.join(" ")
                }
                return this.parseComplex(t.style, g, _, o, r)
            },
            formatter: nt
        }),
        bt("backgroundSize", {
            defaultValue: "0 0",
            formatter: nt
        }),
        bt("perspective", {
            defaultValue: "0px",
            prefix: !0
        }),
        bt("perspectiveOrigin", {
            defaultValue: "50% 50%",
            prefix: !0
        }),
        bt("transformStyle", {
            prefix: !0
        }),
        bt("backfaceVisibility", {
            prefix: !0
        }),
        bt("userSelect", {
            prefix: !0
        }),
        bt("margin", {
            parser: pt("marginTop,marginRight,marginBottom,marginLeft")
        }),
        bt("padding", {
            parser: pt("paddingTop,paddingRight,paddingBottom,paddingLeft")
        }),
        bt("clip", {
            defaultValue: "rect(0px,0px,0px,0px)",
            parser: function(t, e, i, n, o, r) {
                var a, l, c;
                return 9 > m ? (l = t.currentStyle,
                c = 8 > m ? " " : ",",
                a = "rect(" + l.clipTop + c + l.clipRight + c + l.clipBottom + c + l.clipLeft + ")",
                e = this.format(e).split(",").join(c)) : (a = this.format(Q(t, this.p, s, !1, this.dflt)),
                e = this.format(e)),
                this.parseComplex(t.style, a, e, o, r)
            }
        }),
        bt("textShadow", {
            defaultValue: "0px 0px 0px #999",
            color: !0,
            multi: !0
        }),
        bt("autoRound,strictUnits", {
            parser: function(t, e, i, n, s) {
                return s
            }
        }),
        bt("border", {
            defaultValue: "0px solid #000",
            parser: function(t, e, i, n, o, r) {
                return this.parseComplex(t.style, this.format(Q(t, "borderTopWidth", s, !1, "0px") + " " + Q(t, "borderTopStyle", s, !1, "solid") + " " + Q(t, "borderTopColor", s, !1, "#000")), this.format(e), o, r)
            },
            color: !0,
            formatter: function(t) {
                var e = t.split(" ");
                return e[0] + " " + (e[1] || "solid") + " " + (t.match(ut) || ["#000"])[0]
            }
        }),
        bt("borderWidth", {
            parser: pt("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
        }),
        bt("float,cssFloat,styleFloat", {
            parser: function(t, e, i, n, s) {
                var o = t.style
                  , r = "cssFloat"in o ? "cssFloat" : "styleFloat";
                return new mt(o,r,0,0,s,-1,i,!1,0,o[r],e)
            }
        });
        var Ft = function(t) {
            var e, i = this.t, n = i.filter || Q(this.data, "filter") || "", s = 0 | this.s + this.c * t;
            100 === s && (-1 === n.indexOf("atrix(") && -1 === n.indexOf("radient(") && -1 === n.indexOf("oader(") ? (i.removeAttribute("filter"),
            e = !Q(this.data, "filter")) : (i.filter = n.replace(x, ""),
            e = !0)),
            e || (this.xn1 && (i.filter = n = n || "alpha(opacity=" + s + ")"),
            -1 === n.indexOf("pacity") ? 0 === s && this.xn1 || (i.filter = n + " alpha(opacity=" + s + ")") : i.filter = n.replace(w, "opacity=" + s))
        };
        bt("opacity,alpha,autoAlpha", {
            defaultValue: "1",
            parser: function(t, e, i, n, o, r) {
                var a = parseFloat(Q(t, "opacity", s, !1, "1"))
                  , l = t.style
                  , c = "autoAlpha" === i;
                return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + a),
                c && 1 === a && "hidden" === Q(t, "visibility", s) && 0 !== e && (a = 0),
                H ? o = new mt(l,"opacity",a,e - a,o) : ((o = new mt(l,"opacity",100 * a,100 * (e - a),o)).xn1 = c ? 1 : 0,
                l.zoom = 1,
                o.type = 2,
                o.b = "alpha(opacity=" + o.s + ")",
                o.e = "alpha(opacity=" + (o.s + o.c) + ")",
                o.data = t,
                o.plugin = r,
                o.setRatio = Ft),
                c && ((o = new mt(l,"visibility",0,0,o,-1,null,!1,0,0 !== a ? "inherit" : "hidden",0 === e ? "hidden" : "inherit")).xs0 = "inherit",
                n._overwriteProps.push(o.n),
                n._overwriteProps.push(i)),
                o
            }
        });
        var Wt = function(t, e) {
            e && (t.removeProperty ? (("ms" === e.substr(0, 2) || "webkit" === e.substr(0, 6)) && (e = "-" + e),
            t.removeProperty(e.replace(S, "-$1").toLowerCase())) : t.removeAttribute(e))
        }
          , Ht = function(t) {
            if (this.t._gsClassPT = this,
            1 === t || 0 === t) {
                this.t.setAttribute("class", 0 === t ? this.b : this.e);
                for (var e = this.data, i = this.t.style; e; )
                    e.v ? i[e.p] = e.v : Wt(i, e.p),
                    e = e._next;
                1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
            } else
                this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
        };
        bt("className", {
            parser: function(t, e, n, o, r, a, l) {
                var c, h, u, d, p, f = t.getAttribute("class") || "", m = t.style.cssText;
                if ((r = o._classNamePT = new mt(t,n,0,0,r,2)).setRatio = Ht,
                r.pr = -11,
                i = !0,
                r.b = f,
                h = Z(t, s),
                u = t._gsClassPT) {
                    for (d = {},
                    p = u.data; p; )
                        d[p.p] = 1,
                        p = p._next;
                    u.setRatio(1)
                }
                return t._gsClassPT = r,
                r.e = "=" !== e.charAt(1) ? e : f.replace(RegExp("\\s*\\b" + e.substr(2) + "\\b"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""),
                t.setAttribute("class", r.e),
                c = J(t, h, Z(t), l, d),
                t.setAttribute("class", f),
                r.data = c.firstMPT,
                t.style.cssText = m,
                r.xfirst = o.parse(t, c.difs, r, a)
            }
        });
        var Bt = function(t) {
            if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                var e, i, n, s, o, r = this.t.style, a = l.transform.parse;
                if ("all" === this.e)
                    r.cssText = "",
                    s = !0;
                else
                    for (n = (e = this.e.split(" ").join("").split(",")).length; --n > -1; )
                        i = e[n],
                        l[i] && (l[i].parse === a ? s = !0 : i = "transformOrigin" === i ? Ct : l[i].p),
                        Wt(r, i);
                s && (Wt(r, kt),
                (o = this.t._gsTransform) && (o.svg && this.t.removeAttribute("data-svg-origin"),
                delete this.t._gsTransform))
            }
        };
        for (bt("clearProps", {
            parser: function(t, e, n, s, o) {
                return (o = new mt(t,n,0,0,o,2)).setRatio = Bt,
                o.e = e,
                o.pr = -10,
                o.data = s._tween,
                i = !0,
                o
            }
        }),
        c = "bezier,throwProps,physicsProps,physics2D".split(","),
        vt = c.length; vt--; )
            wt(c[vt]);
        (c = r.prototype)._firstPT = c._lastParsedTransform = c._transform = null,
        c._onInitTween = function(t, e, a) {
            if (!t.nodeType)
                return !1;
            this._target = t,
            this._tween = a,
            this._vars = e,
            h = e.autoRound,
            i = !1,
            n = e.suffixMap || r.suffixMap,
            s = V(t, ""),
            o = this._overwriteProps;
            var c, p, m, g, _, v, y, b, w, x = t.style;
            if (u && "" === x.zIndex && (("auto" === (c = Q(t, "zIndex", s)) || "" === c) && this._addLazySet(x, "zIndex", 0)),
            "string" == typeof e && (g = x.cssText,
            c = Z(t, s),
            x.cssText = g + ";" + e,
            c = J(t, c, Z(t)).difs,
            !H && T.test(e) && (c.opacity = parseFloat(RegExp.$1)),
            e = c,
            x.cssText = g),
            this._firstPT = p = e.className ? l.className.parse(t, e.className, "className", this, null, null, e) : this.parse(t, e, null),
            this._transformType) {
                for (w = 3 === this._transformType,
                kt ? d && (u = !0,
                "" === x.zIndex && (("auto" === (y = Q(t, "zIndex", s)) || "" === y) && this._addLazySet(x, "zIndex", 0)),
                f && this._addLazySet(x, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (w ? "visible" : "hidden"))) : x.zoom = 1,
                m = p; m && m._next; )
                    m = m._next;
                b = new mt(t,"transform",0,0,null,2),
                this._linkCSSP(b, null, m),
                b.setRatio = kt ? $t : Nt,
                b.data = this._transform || jt(t, s, !0),
                b.tween = a,
                b.pr = -1,
                o.pop()
            }
            if (i) {
                for (; p; ) {
                    for (v = p._next,
                    m = g; m && m.pr > p.pr; )
                        m = m._next;
                    (p._prev = m ? m._prev : _) ? p._prev._next = p : g = p,
                    (p._next = m) ? m._prev = p : _ = p,
                    p = v
                }
                this._firstPT = g
            }
            return !0
        }
        ,
        c.parse = function(t, e, i, o) {
            var r, a, c, u, d, p, f, m, g, _, v = t.style;
            for (r in e)
                p = e[r],
                (a = l[r]) ? i = a.parse(t, p, r, this, i, o, e) : (d = Q(t, r, s) + "",
                g = "string" == typeof p,
                "color" === r || "fill" === r || "stroke" === r || -1 !== r.indexOf("Color") || g && k.test(p) ? (g || (p = ((p = ct(p)).length > 3 ? "rgba(" : "rgb(") + p.join(",") + ")"),
                i = _t(v, r, d, p, !0, "transparent", i, 0, o)) : !g || -1 === p.indexOf(" ") && -1 === p.indexOf(",") ? (f = (c = parseFloat(d)) || 0 === c ? d.substr((c + "").length) : "",
                ("" === d || "auto" === d) && ("width" === r || "height" === r ? (c = it(t, r, s),
                f = "px") : "left" === r || "top" === r ? (c = G(t, r, s),
                f = "px") : (c = "opacity" !== r ? 0 : 1,
                f = "")),
                (_ = g && "=" === p.charAt(1)) ? (u = parseInt(p.charAt(0) + "1", 10),
                p = p.substr(2),
                u *= parseFloat(p),
                m = p.replace(b, "")) : (u = parseFloat(p),
                m = g ? p.replace(b, "") : ""),
                "" === m && (m = r in n ? n[r] : f),
                p = u || 0 === u ? (_ ? u + c : u) + m : e[r],
                f !== m && "" !== m && (u || 0 === u) && c && (c = K(t, r, c, f),
                "%" === m ? (c /= K(t, r, 100, "%") / 100,
                !0 !== e.strictUnits && (d = c + "%")) : "em" === m || "rem" === m ? c /= K(t, r, 1, m) : "px" !== m && (u = K(t, r, u, m),
                m = "px"),
                _ && (u || 0 === u) && (p = u + c + m)),
                _ && (u += c),
                !c && 0 !== c || !u && 0 !== u ? void 0 !== v[r] && (p || "NaN" != p + "" && null != p) ? (i = new mt(v,r,u || c || 0,0,i,-1,r,!1,0,d,p)).xs0 = "none" !== p || "display" !== r && -1 === r.indexOf("Style") ? p : d : q("invalid " + r + " tween value: " + e[r]) : (i = new mt(v,r,c,u - c,i,0,r,!1 !== h && ("px" === m || "zIndex" === r),0,d,p)).xs0 = m) : i = _t(v, r, d, p, !0, null, i, 0, o)),
                o && i && !i.plugin && (i.plugin = o);
            return i
        }
        ,
        c.setRatio = function(t) {
            var e, i, n, s = this._firstPT, o = 1e-6;
            if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || -1e-6 === this._tween._rawPrevTime)
                    for (; s; ) {
                        if (e = s.c * t + s.s,
                        s.r ? e = Math.round(e) : o > e && e > -o && (e = 0),
                        s.type)
                            if (1 === s.type)
                                if (2 === (n = s.l))
                                    s.t[s.p] = s.xs0 + e + s.xs1 + s.xn1 + s.xs2;
                                else if (3 === n)
                                    s.t[s.p] = s.xs0 + e + s.xs1 + s.xn1 + s.xs2 + s.xn2 + s.xs3;
                                else if (4 === n)
                                    s.t[s.p] = s.xs0 + e + s.xs1 + s.xn1 + s.xs2 + s.xn2 + s.xs3 + s.xn3 + s.xs4;
                                else if (5 === n)
                                    s.t[s.p] = s.xs0 + e + s.xs1 + s.xn1 + s.xs2 + s.xn2 + s.xs3 + s.xn3 + s.xs4 + s.xn4 + s.xs5;
                                else {
                                    for (i = s.xs0 + e + s.xs1,
                                    n = 1; s.l > n; n++)
                                        i += s["xn" + n] + s["xs" + (n + 1)];
                                    s.t[s.p] = i
                                }
                            else
                                -1 === s.type ? s.t[s.p] = s.xs0 : s.setRatio && s.setRatio(t);
                        else
                            s.t[s.p] = e + s.xs0;
                        s = s._next
                    }
                else
                    for (; s; )
                        2 !== s.type ? s.t[s.p] = s.b : s.setRatio(t),
                        s = s._next;
            else
                for (; s; ) {
                    if (2 !== s.type)
                        if (s.r && -1 !== s.type)
                            if (e = Math.round(s.s + s.c),
                            s.type) {
                                if (1 === s.type) {
                                    for (n = s.l,
                                    i = s.xs0 + e + s.xs1,
                                    n = 1; s.l > n; n++)
                                        i += s["xn" + n] + s["xs" + (n + 1)];
                                    s.t[s.p] = i
                                }
                            } else
                                s.t[s.p] = e + s.xs0;
                        else
                            s.t[s.p] = s.e;
                    else
                        s.setRatio(t);
                    s = s._next
                }
        }
        ,
        c._enableTransforms = function(t) {
            this._transform = this._transform || jt(this._target, s, !0),
            this._transformType = this._transform.svg && Tt || !t && 3 !== this._transformType ? 2 : 3
        }
        ;
        var qt = function() {
            this.t[this.p] = this.e,
            this.data._linkCSSP(this, this._next, null, !0)
        };
        c._addLazySet = function(t, e, i) {
            var n = this._firstPT = new mt(t,e,0,0,this._firstPT,2);
            n.e = i,
            n.setRatio = qt,
            n.data = this
        }
        ,
        c._linkCSSP = function(t, e, i, n) {
            return t && (e && (e._prev = t),
            t._next && (t._next._prev = t._prev),
            t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next,
            n = !0),
            i ? i._next = t : n || null !== this._firstPT || (this._firstPT = t),
            t._next = e,
            t._prev = i),
            t
        }
        ,
        c._kill = function(e) {
            var i, n, s, o = e;
            if (e.autoAlpha || e.alpha) {
                for (n in o = {},
                e)
                    o[n] = e[n];
                o.opacity = 1,
                o.autoAlpha && (o.visibility = 1)
            }
            return e.className && (i = this._classNamePT) && ((s = i.xfirst) && s._prev ? this._linkCSSP(s._prev, i._next, s._prev._prev) : s === this._firstPT && (this._firstPT = i._next),
            i._next && this._linkCSSP(i._next, i._next._next, s._prev),
            this._classNamePT = null),
            t.prototype._kill.call(this, o)
        }
        ;
        var Yt = function(t, e, i) {
            var n, s, o, r;
            if (t.slice)
                for (s = t.length; --s > -1; )
                    Yt(t[s], e, i);
            else
                for (s = (n = t.childNodes).length; --s > -1; )
                    r = (o = n[s]).type,
                    o.style && (e.push(Z(o)),
                    i && i.push(o)),
                    1 !== r && 9 !== r && 11 !== r || !o.childNodes.length || Yt(o, e, i)
        };
        return r.cascadeTo = function(t, i, n) {
            var s, o, r, a, l = e.to(t, i, n), c = [l], h = [], u = [], d = [], p = e._internals.reservedProps;
            for (t = l._targets || l.target,
            Yt(t, h, d),
            l.render(i, !0, !0),
            Yt(t, u),
            l.render(0, !0, !0),
            l._enabled(!0),
            s = d.length; --s > -1; )
                if ((o = J(d[s], h[s], u[s])).firstMPT) {
                    for (r in o = o.difs,
                    n)
                        p[r] && (o[r] = n[r]);
                    for (r in a = {},
                    o)
                        a[r] = h[s][r];
                    c.push(e.fromTo(d[s], i, a, o))
                }
            return c
        }
        ,
        t.activate([r]),
        r
    }
    ), !0),
    function() {
        var t = _gsScope._gsDefine.plugin({
            propName: "roundProps",
            version: "1.5",
            priority: -1,
            API: 2,
            init: function(t, e, i) {
                return this._tween = i,
                !0
            }
        })
          , e = function(t) {
            for (; t; )
                t.f || t.blob || (t.r = 1),
                t = t._next
        }
          , i = t.prototype;
        i._onInitAllProps = function() {
            for (var t, i, n, s = this._tween, o = s.vars.roundProps.join ? s.vars.roundProps : s.vars.roundProps.split(","), r = o.length, a = {}, l = s._propLookup.roundProps; --r > -1; )
                a[o[r]] = 1;
            for (r = o.length; --r > -1; )
                for (t = o[r],
                i = s._firstPT; i; )
                    n = i._next,
                    i.pg ? i.t._roundProps(a, !0) : i.n === t && (2 === i.f && i.t ? e(i.t._firstPT) : (this._add(i.t, t, i.s, i.c),
                    n && (n._prev = i._prev),
                    i._prev ? i._prev._next = n : s._firstPT === i && (s._firstPT = n),
                    i._next = i._prev = null,
                    s._propLookup[t] = l)),
                    i = n;
            return !1
        }
        ,
        i._add = function(t, e, i, n) {
            this._addTween(t, e, i, i + n, e, !0),
            this._overwriteProps.push(e)
        }
    }(),
    _gsScope._gsDefine.plugin({
        propName: "attr",
        API: 2,
        version: "0.5.0",
        init: function(t, e) {
            var i;
            if ("function" != typeof t.setAttribute)
                return !1;
            for (i in e)
                this._addTween(t, "setAttribute", t.getAttribute(i) + "", e[i] + "", i, !1, i),
                this._overwriteProps.push(i);
            return !0
        }
    }),
    _gsScope._gsDefine.plugin({
        propName: "directionalRotation",
        version: "0.2.1",
        API: 2,
        init: function(t, e) {
            "object" != typeof e && (e = {
                rotation: e
            }),
            this.finals = {};
            var i, n, s, o, r, a = !0 === e.useRadians ? 2 * Math.PI : 360, l = 1e-6;
            for (i in e)
                "useRadians" !== i && (n = (r = (e[i] + "").split("_"))[0],
                s = parseFloat("function" != typeof t[i] ? t[i] : t[i.indexOf("set") || "function" != typeof t["get" + i.substr(3)] ? i : "get" + i.substr(3)]()),
                o = (this.finals[i] = "string" == typeof n && "=" === n.charAt(1) ? s + parseInt(n.charAt(0) + "1", 10) * Number(n.substr(2)) : Number(n) || 0) - s,
                r.length && (-1 !== (n = r.join("_")).indexOf("short") && ((o %= a) !== o % (a / 2) && (o = 0 > o ? o + a : o - a)),
                -1 !== n.indexOf("_cw") && 0 > o ? o = (o + 9999999999 * a) % a - (0 | o / a) * a : -1 !== n.indexOf("ccw") && o > 0 && (o = (o - 9999999999 * a) % a - (0 | o / a) * a)),
                (o > l || -l > o) && (this._addTween(t, i, s, s + o, i),
                this._overwriteProps.push(i)));
            return !0
        },
        set: function(t) {
            var e;
            if (1 !== t)
                this._super.setRatio.call(this, t);
            else
                for (e = this._firstPT; e; )
                    e.f ? e.t[e.p](this.finals[e.p]) : e.t[e.p] = this.finals[e.p],
                    e = e._next
        }
    })._autoCSS = !0,
    _gsScope._gsDefine("easing.Back", ["easing.Ease"], (function(t) {
        var e, i, n, s = _gsScope.GreenSockGlobals || _gsScope, o = s.com.greensock, r = 2 * Math.PI, a = Math.PI / 2, l = o._class, c = function(e, i) {
            var n = l("easing." + e, (function() {}
            ), !0)
              , s = n.prototype = new t;
            return s.constructor = n,
            s.getRatio = i,
            n
        }, h = t.register || function() {}
        , u = function(t, e, i, n) {
            var s = l("easing." + t, {
                easeOut: new e,
                easeIn: new i,
                easeInOut: new n
            }, !0);
            return h(s, t),
            s
        }, d = function(t, e, i) {
            this.t = t,
            this.v = e,
            i && (this.next = i,
            i.prev = this,
            this.c = i.v - e,
            this.gap = i.t - t)
        }, p = function(e, i) {
            var n = l("easing." + e, (function(t) {
                this._p1 = t || 0 === t ? t : 1.70158,
                this._p2 = 1.525 * this._p1
            }
            ), !0)
              , s = n.prototype = new t;
            return s.constructor = n,
            s.getRatio = i,
            s.config = function(t) {
                return new n(t)
            }
            ,
            n
        }, f = u("Back", p("BackOut", (function(t) {
            return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1
        }
        )), p("BackIn", (function(t) {
            return t * t * ((this._p1 + 1) * t - this._p1)
        }
        )), p("BackInOut", (function(t) {
            return 1 > (t *= 2) ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
        }
        ))), m = l("easing.SlowMo", (function(t, e, i) {
            e = e || 0 === e ? e : .7,
            null == t ? t = .7 : t > 1 && (t = 1),
            this._p = 1 !== t ? e : 0,
            this._p1 = (1 - t) / 2,
            this._p2 = t,
            this._p3 = this._p1 + this._p2,
            this._calcEnd = !0 === i
        }
        ), !0), g = m.prototype = new t;
        return g.constructor = m,
        g.getRatio = function(t) {
            var e = t + (.5 - t) * this._p;
            return this._p1 > t ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e
        }
        ,
        m.ease = new m(.7,.7),
        g.config = m.config = function(t, e, i) {
            return new m(t,e,i)
        }
        ,
        (g = (e = l("easing.SteppedEase", (function(t) {
            t = t || 1,
            this._p1 = 1 / t,
            this._p2 = t + 1
        }
        ), !0)).prototype = new t).constructor = e,
        g.getRatio = function(t) {
            return 0 > t ? t = 0 : t >= 1 && (t = .999999999),
            (this._p2 * t >> 0) * this._p1
        }
        ,
        g.config = e.config = function(t) {
            return new e(t)
        }
        ,
        i = l("easing.RoughEase", (function(e) {
            for (var i, n, s, o, r, a, l = (e = e || {}).taper || "none", c = [], h = 0, u = 0 | (e.points || 20), p = u, f = !1 !== e.randomize, m = !0 === e.clamp, g = e.template instanceof t ? e.template : null, _ = "number" == typeof e.strength ? .4 * e.strength : .4; --p > -1; )
                i = f ? Math.random() : 1 / u * p,
                n = g ? g.getRatio(i) : i,
                "none" === l ? s = _ : "out" === l ? s = (o = 1 - i) * o * _ : "in" === l ? s = i * i * _ : .5 > i ? s = .5 * (o = 2 * i) * o * _ : s = .5 * (o = 2 * (1 - i)) * o * _,
                f ? n += Math.random() * s - .5 * s : p % 2 ? n += .5 * s : n -= .5 * s,
                m && (n > 1 ? n = 1 : 0 > n && (n = 0)),
                c[h++] = {
                    x: i,
                    y: n
                };
            for (c.sort((function(t, e) {
                return t.x - e.x
            }
            )),
            a = new d(1,1,null),
            p = u; --p > -1; )
                r = c[p],
                a = new d(r.x,r.y,a);
            this._prev = new d(0,0,0 !== a.t ? a : a.next)
        }
        ), !0),
        (g = i.prototype = new t).constructor = i,
        g.getRatio = function(t) {
            var e = this._prev;
            if (t > e.t) {
                for (; e.next && t >= e.t; )
                    e = e.next;
                e = e.prev
            } else
                for (; e.prev && e.t >= t; )
                    e = e.prev;
            return this._prev = e,
            e.v + (t - e.t) / e.gap * e.c
        }
        ,
        g.config = function(t) {
            return new i(t)
        }
        ,
        i.ease = new i,
        u("Bounce", c("BounceOut", (function(t) {
            return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
        }
        )), c("BounceIn", (function(t) {
            return 1 / 2.75 > (t = 1 - t) ? 1 - 7.5625 * t * t : 2 / 2.75 > t ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
        }
        )), c("BounceInOut", (function(t) {
            var e = .5 > t;
            return t = 1 / 2.75 > (t = e ? 1 - 2 * t : 2 * t - 1) ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375,
            e ? .5 * (1 - t) : .5 * t + .5
        }
        ))),
        u("Circ", c("CircOut", (function(t) {
            return Math.sqrt(1 - (t -= 1) * t)
        }
        )), c("CircIn", (function(t) {
            return -(Math.sqrt(1 - t * t) - 1)
        }
        )), c("CircInOut", (function(t) {
            return 1 > (t *= 2) ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
        }
        ))),
        u("Elastic", (n = function(e, i, n) {
            var s = l("easing." + e, (function(t, e) {
                this._p1 = t >= 1 ? t : 1,
                this._p2 = (e || n) / (1 > t ? t : 1),
                this._p3 = this._p2 / r * (Math.asin(1 / this._p1) || 0),
                this._p2 = r / this._p2
            }
            ), !0)
              , o = s.prototype = new t;
            return o.constructor = s,
            o.getRatio = i,
            o.config = function(t, e) {
                return new s(t,e)
            }
            ,
            s
        }
        )("ElasticOut", (function(t) {
            return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * this._p2) + 1
        }
        ), .3), n("ElasticIn", (function(t) {
            return -this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2)
        }
        ), .3), n("ElasticInOut", (function(t) {
            return 1 > (t *= 2) ? -.5 * this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) : .5 * this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) + 1
        }
        ), .45)),
        u("Expo", c("ExpoOut", (function(t) {
            return 1 - Math.pow(2, -10 * t)
        }
        )), c("ExpoIn", (function(t) {
            return Math.pow(2, 10 * (t - 1)) - .001
        }
        )), c("ExpoInOut", (function(t) {
            return 1 > (t *= 2) ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
        }
        ))),
        u("Sine", c("SineOut", (function(t) {
            return Math.sin(t * a)
        }
        )), c("SineIn", (function(t) {
            return 1 - Math.cos(t * a)
        }
        )), c("SineInOut", (function(t) {
            return -.5 * (Math.cos(Math.PI * t) - 1)
        }
        ))),
        l("easing.EaseLookup", {
            find: function(e) {
                return t.map[e]
            }
        }, !0),
        h(s.SlowMo, "SlowMo", "ease,"),
        h(i, "RoughEase", "ease,"),
        h(e, "SteppedEase", "ease,"),
        f
    }
    ), !0)
}
)),
_gsScope._gsDefine && _gsScope._gsQueue.pop()(),
function(t, e) {
    "use strict";
    var i = t.GreenSockGlobals = t.GreenSockGlobals || t;
    if (!i.TweenLite) {
        var n, s, o, r, a, l = function(t) {
            var e, n = t.split("."), s = i;
            for (e = 0; n.length > e; e++)
                s[n[e]] = s = s[n[e]] || {};
            return s
        }, c = l("com.greensock"), h = 1e-10, u = function(t) {
            var e, i = [], n = t.length;
            for (e = 0; e !== n; i.push(t[e++]))
                ;
            return i
        }, d = function() {}, p = function() {
            var t = Object.prototype.toString
              , e = t.call([]);
            return function(i) {
                return null != i && (i instanceof Array || "object" == typeof i && !!i.push && t.call(i) === e)
            }
        }(), f = {}, m = function(e, n, s, o) {
            this.sc = f[e] ? f[e].sc : [],
            f[e] = this,
            this.gsClass = null,
            this.func = s;
            var r = [];
            this.check = function(a) {
                for (var c, h, u, d, p, g = n.length, _ = g; --g > -1; )
                    (c = f[n[g]] || new m(n[g],[])).gsClass ? (r[g] = c.gsClass,
                    _--) : a && c.sc.push(this);
                if (0 === _ && s)
                    for (u = (h = ("com.greensock." + e).split(".")).pop(),
                    d = l(h.join("."))[u] = this.gsClass = s.apply(s, r),
                    o && (i[u] = d,
                    !(p = "undefined" != typeof module && module.exports) && "function" == typeof define && define.amd ? define((t.GreenSockAMDPath ? t.GreenSockAMDPath + "/" : "") + e.split(".").pop(), [], (function() {
                        return d
                    }
                    )) : "TweenMax" === e && p && (module.exports = d)),
                    g = 0; this.sc.length > g; g++)
                        this.sc[g].check()
            }
            ,
            this.check(!0)
        }, g = t._gsDefine = function(t, e, i, n) {
            return new m(t,e,i,n)
        }
        , _ = c._class = function(t, e, i) {
            return e = e || function() {}
            ,
            g(t, [], (function() {
                return e
            }
            ), i),
            e
        }
        ;
        g.globals = i;
        var v = [0, 0, 1, 1]
          , y = []
          , b = _("easing.Ease", (function(t, e, i, n) {
            this._func = t,
            this._type = i || 0,
            this._power = n || 0,
            this._params = e ? v.concat(e) : v
        }
        ), !0)
          , w = b.map = {}
          , T = b.register = function(t, e, i, n) {
            for (var s, o, r, a, l = e.split(","), h = l.length, u = (i || "easeIn,easeOut,easeInOut").split(","); --h > -1; )
                for (o = l[h],
                s = n ? _("easing." + o, null, !0) : c.easing[o] || {},
                r = u.length; --r > -1; )
                    a = u[r],
                    w[o + "." + a] = w[a + o] = s[a] = t.getRatio ? t : t[a] || new t
        }
        ;
        for ((o = b.prototype)._calcEnd = !1,
        o.getRatio = function(t) {
            if (this._func)
                return this._params[0] = t,
                this._func.apply(null, this._params);
            var e = this._type
              , i = this._power
              , n = 1 === e ? 1 - t : 2 === e ? t : .5 > t ? 2 * t : 2 * (1 - t);
            return 1 === i ? n *= n : 2 === i ? n *= n * n : 3 === i ? n *= n * n * n : 4 === i && (n *= n * n * n * n),
            1 === e ? 1 - n : 2 === e ? n : .5 > t ? n / 2 : 1 - n / 2
        }
        ,
        s = (n = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"]).length; --s > -1; )
            o = n[s] + ",Power" + s,
            T(new b(null,null,1,s), o, "easeOut", !0),
            T(new b(null,null,2,s), o, "easeIn" + (0 === s ? ",easeNone" : "")),
            T(new b(null,null,3,s), o, "easeInOut");
        w.linear = c.easing.Linear.easeIn,
        w.swing = c.easing.Quad.easeInOut;
        var x = _("events.EventDispatcher", (function(t) {
            this._listeners = {},
            this._eventTarget = t || this
        }
        ));
        (o = x.prototype).addEventListener = function(t, e, i, n, s) {
            s = s || 0;
            var o, l, c = this._listeners[t], h = 0;
            for (null == c && (this._listeners[t] = c = []),
            l = c.length; --l > -1; )
                (o = c[l]).c === e && o.s === i ? c.splice(l, 1) : 0 === h && s > o.pr && (h = l + 1);
            c.splice(h, 0, {
                c: e,
                s: i,
                up: n,
                pr: s
            }),
            this !== r || a || r.wake()
        }
        ,
        o.removeEventListener = function(t, e) {
            var i, n = this._listeners[t];
            if (n)
                for (i = n.length; --i > -1; )
                    if (n[i].c === e)
                        return void n.splice(i, 1)
        }
        ,
        o.dispatchEvent = function(t) {
            var e, i, n, s = this._listeners[t];
            if (s)
                for (e = s.length,
                i = this._eventTarget; --e > -1; )
                    (n = s[e]) && (n.up ? n.c.call(n.s || i, {
                        type: t,
                        target: i
                    }) : n.c.call(n.s || i))
        }
        ;
        var k = t.requestAnimationFrame
          , S = t.cancelAnimationFrame
          , C = Date.now || function() {
            return (new Date).getTime()
        }
          , E = C();
        for (s = (n = ["ms", "moz", "webkit", "o"]).length; --s > -1 && !k; )
            k = t[n[s] + "RequestAnimationFrame"],
            S = t[n[s] + "CancelAnimationFrame"] || t[n[s] + "CancelRequestAnimationFrame"];
        _("Ticker", (function(t, e) {
            var i, n, s, o, l, c = this, u = C(), p = !1 !== e && k, f = 500, m = 33, g = function(t) {
                var e, r, a = C() - E;
                a > f && (u += a - m),
                E += a,
                c.time = (E - u) / 1e3,
                e = c.time - l,
                (!i || e > 0 || !0 === t) && (c.frame++,
                l += e + (e >= o ? .004 : o - e),
                r = !0),
                !0 !== t && (s = n(g)),
                r && c.dispatchEvent("tick")
            };
            x.call(c),
            c.time = c.frame = 0,
            c.tick = function() {
                g(!0)
            }
            ,
            c.lagSmoothing = function(t, e) {
                f = t || 1 / h,
                m = Math.min(e, f, 0)
            }
            ,
            c.sleep = function() {
                null != s && (p && S ? S(s) : clearTimeout(s),
                n = d,
                s = null,
                c === r && (a = !1))
            }
            ,
            c.wake = function() {
                null !== s ? c.sleep() : c.frame > 10 && (E = C() - f + 5),
                n = 0 === i ? d : p && k ? k : function(t) {
                    return setTimeout(t, 0 | 1e3 * (l - c.time) + 1)
                }
                ,
                c === r && (a = !0),
                g(2)
            }
            ,
            c.fps = function(t) {
                return arguments.length ? (o = 1 / ((i = t) || 60),
                l = this.time + o,
                void c.wake()) : i
            }
            ,
            c.useRAF = function(t) {
                return arguments.length ? (c.sleep(),
                p = t,
                void c.fps(i)) : p
            }
            ,
            c.fps(t),
            setTimeout((function() {
                p && 5 > c.frame && c.useRAF(!1)
            }
            ), 1500)
        }
        )),
        (o = c.Ticker.prototype = new c.events.EventDispatcher).constructor = c.Ticker;
        var O = _("core.Animation", (function(t, e) {
            if (this.vars = e = e || {},
            this._duration = this._totalDuration = t || 0,
            this._delay = Number(e.delay) || 0,
            this._timeScale = 1,
            this._active = !0 === e.immediateRender,
            this.data = e.data,
            this._reversed = !0 === e.reversed,
            X) {
                a || r.wake();
                var i = this.vars.useFrames ? Y : X;
                i.add(this, i._time),
                this.vars.paused && this.paused(!0)
            }
        }
        ));
        r = O.ticker = new c.Ticker,
        (o = O.prototype)._dirty = o._gc = o._initted = o._paused = !1,
        o._totalTime = o._time = 0,
        o._rawPrevTime = -1,
        o._next = o._last = o._onUpdate = o._timeline = o.timeline = null,
        o._paused = !1;
        var P = function() {
            a && C() - E > 2e3 && r.wake(),
            setTimeout(P, 2e3)
        };
        P(),
        o.play = function(t, e) {
            return null != t && this.seek(t, e),
            this.reversed(!1).paused(!1)
        }
        ,
        o.pause = function(t, e) {
            return null != t && this.seek(t, e),
            this.paused(!0)
        }
        ,
        o.resume = function(t, e) {
            return null != t && this.seek(t, e),
            this.paused(!1)
        }
        ,
        o.seek = function(t, e) {
            return this.totalTime(Number(t), !1 !== e)
        }
        ,
        o.restart = function(t, e) {
            return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, !1 !== e, !0)
        }
        ,
        o.reverse = function(t, e) {
            return null != t && this.seek(t || this.totalDuration(), e),
            this.reversed(!0).paused(!1)
        }
        ,
        o.render = function() {}
        ,
        o.invalidate = function() {
            return this._time = this._totalTime = 0,
            this._initted = this._gc = !1,
            this._rawPrevTime = -1,
            (this._gc || !this.timeline) && this._enabled(!0),
            this
        }
        ,
        o.isActive = function() {
            var t, e = this._timeline, i = this._startTime;
            return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime()) >= i && i + this.totalDuration() / this._timeScale > t
        }
        ,
        o._enabled = function(t, e) {
            return a || r.wake(),
            this._gc = !t,
            this._active = this.isActive(),
            !0 !== e && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)),
            !1
        }
        ,
        o._kill = function() {
            return this._enabled(!1, !1)
        }
        ,
        o.kill = function(t, e) {
            return this._kill(t, e),
            this
        }
        ,
        o._uncache = function(t) {
            for (var e = t ? this : this.timeline; e; )
                e._dirty = !0,
                e = e.timeline;
            return this
        }
        ,
        o._swapSelfInParams = function(t) {
            for (var e = t.length, i = t.concat(); --e > -1; )
                "{self}" === t[e] && (i[e] = this);
            return i
        }
        ,
        o._callback = function(t) {
            var e = this.vars;
            e[t].apply(e[t + "Scope"] || e.callbackScope || this, e[t + "Params"] || y)
        }
        ,
        o.eventCallback = function(t, e, i, n) {
            if ("on" === (t || "").substr(0, 2)) {
                var s = this.vars;
                if (1 === arguments.length)
                    return s[t];
                null == e ? delete s[t] : (s[t] = e,
                s[t + "Params"] = p(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i,
                s[t + "Scope"] = n),
                "onUpdate" === t && (this._onUpdate = e)
            }
            return this
        }
        ,
        o.delay = function(t) {
            return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay),
            this._delay = t,
            this) : this._delay
        }
        ,
        o.duration = function(t) {
            return arguments.length ? (this._duration = this._totalDuration = t,
            this._uncache(!0),
            this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0),
            this) : (this._dirty = !1,
            this._duration)
        }
        ,
        o.totalDuration = function(t) {
            return this._dirty = !1,
            arguments.length ? this.duration(t) : this._totalDuration
        }
        ,
        o.time = function(t, e) {
            return arguments.length ? (this._dirty && this.totalDuration(),
            this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
        }
        ,
        o.totalTime = function(t, e, i) {
            if (a || r.wake(),
            !arguments.length)
                return this._totalTime;
            if (this._timeline) {
                if (0 > t && !i && (t += this.totalDuration()),
                this._timeline.smoothChildTiming) {
                    this._dirty && this.totalDuration();
                    var n = this._totalDuration
                      , s = this._timeline;
                    if (t > n && !i && (t = n),
                    this._startTime = (this._paused ? this._pauseTime : s._time) - (this._reversed ? n - t : t) / this._timeScale,
                    s._dirty || this._uncache(!1),
                    s._timeline)
                        for (; s._timeline; )
                            s._timeline._time !== (s._startTime + s._totalTime) / s._timeScale && s.totalTime(s._totalTime, !0),
                            s = s._timeline
                }
                this._gc && this._enabled(!0, !1),
                (this._totalTime !== t || 0 === this._duration) && (L.length && V(),
                this.render(t, e, !1),
                L.length && V())
            }
            return this
        }
        ,
        o.progress = o.totalProgress = function(t, e) {
            var i = this.duration();
            return arguments.length ? this.totalTime(i * t, e) : i ? this._time / i : this.ratio
        }
        ,
        o.startTime = function(t) {
            return arguments.length ? (t !== this._startTime && (this._startTime = t,
            this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)),
            this) : this._startTime
        }
        ,
        o.endTime = function(t) {
            return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale
        }
        ,
        o.timeScale = function(t) {
            if (!arguments.length)
                return this._timeScale;
            if (t = t || h,
            this._timeline && this._timeline.smoothChildTiming) {
                var e = this._pauseTime
                  , i = e || 0 === e ? e : this._timeline.totalTime();
                this._startTime = i - (i - this._startTime) * this._timeScale / t
            }
            return this._timeScale = t,
            this._uncache(!1)
        }
        ,
        o.reversed = function(t) {
            return arguments.length ? (t != this._reversed && (this._reversed = t,
            this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)),
            this) : this._reversed
        }
        ,
        o.paused = function(t) {
            if (!arguments.length)
                return this._paused;
            var e, i, n = this._timeline;
            return t != this._paused && n && (a || t || r.wake(),
            i = (e = n.rawTime()) - this._pauseTime,
            !t && n.smoothChildTiming && (this._startTime += i,
            this._uncache(!1)),
            this._pauseTime = t ? e : null,
            this._paused = t,
            this._active = this.isActive(),
            !t && 0 !== i && this._initted && this.duration() && (e = n.smoothChildTiming ? this._totalTime : (e - this._startTime) / this._timeScale,
            this.render(e, e === this._totalTime, !0))),
            this._gc && !t && this._enabled(!0, !1),
            this
        }
        ;
        var A = _("core.SimpleTimeline", (function(t) {
            O.call(this, 0, t),
            this.autoRemoveChildren = this.smoothChildTiming = !0
        }
        ));
        (o = A.prototype = new O).constructor = A,
        o.kill()._gc = !1,
        o._first = o._last = o._recent = null,
        o._sortChildren = !1,
        o.add = o.insert = function(t, e) {
            var i, n;
            if (t._startTime = Number(e || 0) + t._delay,
            t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale),
            t.timeline && t.timeline._remove(t, !0),
            t.timeline = t._timeline = this,
            t._gc && t._enabled(!0, !0),
            i = this._last,
            this._sortChildren)
                for (n = t._startTime; i && i._startTime > n; )
                    i = i._prev;
            return i ? (t._next = i._next,
            i._next = t) : (t._next = this._first,
            this._first = t),
            t._next ? t._next._prev = t : this._last = t,
            t._prev = i,
            this._recent = t,
            this._timeline && this._uncache(!0),
            this
        }
        ,
        o._remove = function(t, e) {
            return t.timeline === this && (e || t._enabled(!1, !0),
            t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next),
            t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev),
            t._next = t._prev = t.timeline = null,
            t === this._recent && (this._recent = this._last),
            this._timeline && this._uncache(!0)),
            this
        }
        ,
        o.render = function(t, e, i) {
            var n, s = this._first;
            for (this._totalTime = this._time = this._rawPrevTime = t; s; )
                n = s._next,
                (s._active || t >= s._startTime && !s._paused) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)),
                s = n
        }
        ,
        o.rawTime = function() {
            return a || r.wake(),
            this._totalTime
        }
        ;
        var I = _("TweenLite", (function(e, i, n) {
            if (O.call(this, i, n),
            this.render = I.prototype.render,
            null == e)
                throw "Cannot tween a null target.";
            this.target = e = "string" != typeof e ? e : I.selector(e) || e;
            var s, o, r, a = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType), l = this.vars.overwrite;
            if (this._overwrite = l = null == l ? q[I.defaultOverwrite] : "number" == typeof l ? l >> 0 : q[l],
            (a || e instanceof Array || e.push && p(e)) && "number" != typeof e[0])
                for (this._targets = r = u(e),
                this._propLookup = [],
                this._siblings = [],
                s = 0; r.length > s; s++)
                    (o = r[s]) ? "string" != typeof o ? o.length && o !== t && o[0] && (o[0] === t || o[0].nodeType && o[0].style && !o.nodeType) ? (r.splice(s--, 1),
                    this._targets = r = r.concat(u(o))) : (this._siblings[s] = Q(o, this, !1),
                    1 === l && this._siblings[s].length > 1 && G(o, this, null, 1, this._siblings[s])) : "string" == typeof (o = r[s--] = I.selector(o)) && r.splice(s + 1, 1) : r.splice(s--, 1);
            else
                this._propLookup = {},
                this._siblings = Q(e, this, !1),
                1 === l && this._siblings.length > 1 && G(e, this, null, 1, this._siblings);
            (this.vars.immediateRender || 0 === i && 0 === this._delay && !1 !== this.vars.immediateRender) && (this._time = -h,
            this.render(-this._delay))
        }
        ), !0)
          , D = function(e) {
            return e && e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType)
        };
        (o = I.prototype = new O).constructor = I,
        o.kill()._gc = !1,
        o.ratio = 0,
        o._firstPT = o._targets = o._overwrittenProps = o._startAt = null,
        o._notifyPluginsOfEnabled = o._lazy = !1,
        I.version = "1.18.0",
        I.defaultEase = o._ease = new b(null,null,1,1),
        I.defaultOverwrite = "auto",
        I.ticker = r,
        I.autoSleep = 120,
        I.lagSmoothing = function(t, e) {
            r.lagSmoothing(t, e)
        }
        ,
        I.selector = t.$ || t.jQuery || function(e) {
            var i = t.$ || t.jQuery;
            return i ? (I.selector = i,
            i(e)) : "undefined" == typeof document ? e : document.querySelectorAll ? document.querySelectorAll(e) : document.getElementById("#" === e.charAt(0) ? e.substr(1) : e)
        }
        ;
        var L = []
          , M = {}
          , z = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi
          , R = function(t) {
            for (var e, i = this._firstPT, n = 1e-6; i; )
                e = i.blob ? t ? this.join("") : this.start : i.c * t + i.s,
                i.r ? e = Math.round(e) : n > e && e > -n && (e = 0),
                i.f ? i.fp ? i.t[i.p](i.fp, e) : i.t[i.p](e) : i.t[i.p] = e,
                i = i._next
        }
          , j = function(t, e, i, n) {
            var s, o, r, a, l, c, h, u = [t, e], d = 0, p = "", f = 0;
            for (u.start = t,
            i && (i(u),
            t = u[0],
            e = u[1]),
            u.length = 0,
            s = t.match(z) || [],
            o = e.match(z) || [],
            n && (n._next = null,
            n.blob = 1,
            u._firstPT = n),
            l = o.length,
            a = 0; l > a; a++)
                h = o[a],
                p += (c = e.substr(d, e.indexOf(h, d) - d)) || !a ? c : ",",
                d += c.length,
                f ? f = (f + 1) % 5 : "rgba(" === c.substr(-5) && (f = 1),
                h === s[a] || a >= s.length ? p += h : (p && (u.push(p),
                p = ""),
                r = parseFloat(s[a]),
                u.push(r),
                u._firstPT = {
                    _next: u._firstPT,
                    t: u,
                    p: u.length - 1,
                    s: r,
                    c: ("=" === h.charAt(1) ? parseInt(h.charAt(0) + "1", 10) * parseFloat(h.substr(2)) : parseFloat(h) - r) || 0,
                    f: 0,
                    r: f && 4 > f
                }),
                d += h.length;
            return (p += e.substr(d)) && u.push(p),
            u.setRatio = R,
            u
        }
          , N = function(t, e, i, n, s, o, r, a) {
            var l, c = "get" === i ? t[e] : i, h = typeof t[e], u = "string" == typeof n && "=" === n.charAt(1), d = {
                t: t,
                p: e,
                s: c,
                f: "function" === h,
                pg: 0,
                n: s || e,
                r: o,
                pr: 0,
                c: u ? parseInt(n.charAt(0) + "1", 10) * parseFloat(n.substr(2)) : parseFloat(n) - c || 0
            };
            return "number" !== h && ("function" === h && "get" === i && (l = e.indexOf("set") || "function" != typeof t["get" + e.substr(3)] ? e : "get" + e.substr(3),
            d.s = c = r ? t[l](r) : t[l]()),
            "string" == typeof c && (r || isNaN(c)) ? (d.fp = r,
            d = {
                t: j(c, n, a || I.defaultStringFilter, d),
                p: "setRatio",
                s: 0,
                c: 1,
                f: 2,
                pg: 0,
                n: s || e,
                pr: 0
            }) : u || (d.c = parseFloat(n) - parseFloat(c) || 0)),
            d.c ? ((d._next = this._firstPT) && (d._next._prev = d),
            this._firstPT = d,
            d) : void 0
        }
          , $ = I._internals = {
            isArray: p,
            isSelector: D,
            lazyTweens: L,
            blobDif: j
        }
          , F = I._plugins = {}
          , W = $.tweenLookup = {}
          , H = 0
          , B = $.reservedProps = {
            ease: 1,
            delay: 1,
            overwrite: 1,
            onComplete: 1,
            onCompleteParams: 1,
            onCompleteScope: 1,
            useFrames: 1,
            runBackwards: 1,
            startAt: 1,
            onUpdate: 1,
            onUpdateParams: 1,
            onUpdateScope: 1,
            onStart: 1,
            onStartParams: 1,
            onStartScope: 1,
            onReverseComplete: 1,
            onReverseCompleteParams: 1,
            onReverseCompleteScope: 1,
            onRepeat: 1,
            onRepeatParams: 1,
            onRepeatScope: 1,
            easeParams: 1,
            yoyo: 1,
            immediateRender: 1,
            repeat: 1,
            repeatDelay: 1,
            data: 1,
            paused: 1,
            reversed: 1,
            autoCSS: 1,
            lazy: 1,
            onOverwrite: 1,
            callbackScope: 1,
            stringFilter: 1
        }
          , q = {
            none: 0,
            all: 1,
            auto: 2,
            concurrent: 3,
            allOnStart: 4,
            preexisting: 5,
            true: 1,
            false: 0
        }
          , Y = O._rootFramesTimeline = new A
          , X = O._rootTimeline = new A
          , U = 30
          , V = $.lazyRender = function() {
            var t, e = L.length;
            for (M = {}; --e > -1; )
                (t = L[e]) && !1 !== t._lazy && (t.render(t._lazy[0], t._lazy[1], !0),
                t._lazy = !1);
            L.length = 0
        }
        ;
        X._startTime = r.time,
        Y._startTime = r.frame,
        X._active = Y._active = !0,
        setTimeout(V, 1),
        O._updateRoot = I.render = function() {
            var t, e, i;
            if (L.length && V(),
            X.render((r.time - X._startTime) * X._timeScale, !1, !1),
            Y.render((r.frame - Y._startTime) * Y._timeScale, !1, !1),
            L.length && V(),
            r.frame >= U) {
                for (i in U = r.frame + (parseInt(I.autoSleep, 10) || 120),
                W) {
                    for (t = (e = W[i].tweens).length; --t > -1; )
                        e[t]._gc && e.splice(t, 1);
                    0 === e.length && delete W[i]
                }
                if ((!(i = X._first) || i._paused) && I.autoSleep && !Y._first && 1 === r._listeners.tick.length) {
                    for (; i && i._paused; )
                        i = i._next;
                    i || r.sleep()
                }
            }
        }
        ,
        r.addEventListener("tick", O._updateRoot);
        var Q = function(t, e, i) {
            var n, s, o = t._gsTweenID;
            if (W[o || (t._gsTweenID = o = "t" + H++)] || (W[o] = {
                target: t,
                tweens: []
            }),
            e && ((n = W[o].tweens)[s = n.length] = e,
            i))
                for (; --s > -1; )
                    n[s] === e && n.splice(s, 1);
            return W[o].tweens
        }
          , K = function(t, e, i, n) {
            var s, o, r = t.vars.onOverwrite;
            return r && (s = r(t, e, i, n)),
            (r = I.onOverwrite) && (o = r(t, e, i, n)),
            !1 !== s && !1 !== o
        }
          , G = function(t, e, i, n, s) {
            var o, r, a, l;
            if (1 === n || n >= 4) {
                for (l = s.length,
                o = 0; l > o; o++)
                    if ((a = s[o]) !== e)
                        a._gc || a._kill(null, t, e) && (r = !0);
                    else if (5 === n)
                        break;
                return r
            }
            var c, u = e._startTime + h, d = [], p = 0, f = 0 === e._duration;
            for (o = s.length; --o > -1; )
                (a = s[o]) === e || a._gc || a._paused || (a._timeline !== e._timeline ? (c = c || Z(e, 0, f),
                0 === Z(a, c, f) && (d[p++] = a)) : u >= a._startTime && a._startTime + a.totalDuration() / a._timeScale > u && ((f || !a._initted) && 2e-10 >= u - a._startTime || (d[p++] = a)));
            for (o = p; --o > -1; )
                if (a = d[o],
                2 === n && a._kill(i, t, e) && (r = !0),
                2 !== n || !a._firstPT && a._initted) {
                    if (2 !== n && !K(a, e))
                        continue;
                    a._enabled(!1, !1) && (r = !0)
                }
            return r
        }
          , Z = function(t, e, i) {
            for (var n = t._timeline, s = n._timeScale, o = t._startTime; n._timeline; ) {
                if (o += n._startTime,
                s *= n._timeScale,
                n._paused)
                    return -100;
                n = n._timeline
            }
            return (o /= s) > e ? o - e : i && o === e || !t._initted && 2 * h > o - e ? h : (o += t.totalDuration() / t._timeScale / s) > e + h ? 0 : o - e - h
        };
        o._init = function() {
            var t, e, i, n, s, o = this.vars, r = this._overwrittenProps, a = this._duration, l = !!o.immediateRender, c = o.ease;
            if (o.startAt) {
                for (n in this._startAt && (this._startAt.render(-1, !0),
                this._startAt.kill()),
                s = {},
                o.startAt)
                    s[n] = o.startAt[n];
                if (s.overwrite = !1,
                s.immediateRender = !0,
                s.lazy = l && !1 !== o.lazy,
                s.startAt = s.delay = null,
                this._startAt = I.to(this.target, 0, s),
                l)
                    if (this._time > 0)
                        this._startAt = null;
                    else if (0 !== a)
                        return
            } else if (o.runBackwards && 0 !== a)
                if (this._startAt)
                    this._startAt.render(-1, !0),
                    this._startAt.kill(),
                    this._startAt = null;
                else {
                    for (n in 0 !== this._time && (l = !1),
                    i = {},
                    o)
                        B[n] && "autoCSS" !== n || (i[n] = o[n]);
                    if (i.overwrite = 0,
                    i.data = "isFromStart",
                    i.lazy = l && !1 !== o.lazy,
                    i.immediateRender = l,
                    this._startAt = I.to(this.target, 0, i),
                    l) {
                        if (0 === this._time)
                            return
                    } else
                        this._startAt._init(),
                        this._startAt._enabled(!1),
                        this.vars.immediateRender && (this._startAt = null)
                }
            if (this._ease = c = c ? c instanceof b ? c : "function" == typeof c ? new b(c,o.easeParams) : w[c] || I.defaultEase : I.defaultEase,
            o.easeParams instanceof Array && c.config && (this._ease = c.config.apply(c, o.easeParams)),
            this._easeType = this._ease._type,
            this._easePower = this._ease._power,
            this._firstPT = null,
            this._targets)
                for (t = this._targets.length; --t > -1; )
                    this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], r ? r[t] : null) && (e = !0);
            else
                e = this._initProps(this.target, this._propLookup, this._siblings, r);
            if (e && I._onPluginEvent("_onInitAllProps", this),
            r && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)),
            o.runBackwards)
                for (i = this._firstPT; i; )
                    i.s += i.c,
                    i.c = -i.c,
                    i = i._next;
            this._onUpdate = o.onUpdate,
            this._initted = !0
        }
        ,
        o._initProps = function(e, i, n, s) {
            var o, r, a, l, c, h;
            if (null == e)
                return !1;
            for (o in M[e._gsTweenID] && V(),
            this.vars.css || e.style && e !== t && e.nodeType && F.css && !1 !== this.vars.autoCSS && function(t, e) {
                var i, n = {};
                for (i in t)
                    B[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!F[i] || F[i] && F[i]._autoCSS) || (n[i] = t[i],
                    delete t[i]);
                t.css = n
            }(this.vars, e),
            this.vars)
                if (h = this.vars[o],
                B[o])
                    h && (h instanceof Array || h.push && p(h)) && -1 !== h.join("").indexOf("{self}") && (this.vars[o] = h = this._swapSelfInParams(h, this));
                else if (F[o] && (l = new F[o])._onInitTween(e, this.vars[o], this)) {
                    for (this._firstPT = c = {
                        _next: this._firstPT,
                        t: l,
                        p: "setRatio",
                        s: 0,
                        c: 1,
                        f: 1,
                        n: o,
                        pg: 1,
                        pr: l._priority
                    },
                    r = l._overwriteProps.length; --r > -1; )
                        i[l._overwriteProps[r]] = this._firstPT;
                    (l._priority || l._onInitAllProps) && (a = !0),
                    (l._onDisable || l._onEnable) && (this._notifyPluginsOfEnabled = !0),
                    c._next && (c._next._prev = c)
                } else
                    i[o] = N.call(this, e, o, "get", h, o, 0, null, this.vars.stringFilter);
            return s && this._kill(s, e) ? this._initProps(e, i, n, s) : this._overwrite > 1 && this._firstPT && n.length > 1 && G(e, this, i, this._overwrite, n) ? (this._kill(i, e),
            this._initProps(e, i, n, s)) : (this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration) && (M[e._gsTweenID] = !0),
            a)
        }
        ,
        o.render = function(t, e, i) {
            var n, s, o, r, a = this._time, l = this._duration, c = this._rawPrevTime;
            if (t >= l)
                this._totalTime = this._time = l,
                this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1,
                this._reversed || (n = !0,
                s = "onComplete",
                i = i || this._timeline.autoRemoveChildren),
                0 === l && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0),
                (0 === t || 0 > c || c === h && "isPause" !== this.data) && c !== t && (i = !0,
                c > h && (s = "onReverseComplete")),
                this._rawPrevTime = r = !e || t || c === t ? t : h);
            else if (1e-7 > t)
                this._totalTime = this._time = 0,
                this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0,
                (0 !== a || 0 === l && c > 0) && (s = "onReverseComplete",
                n = this._reversed),
                0 > t && (this._active = !1,
                0 === l && (this._initted || !this.vars.lazy || i) && (c >= 0 && (c !== h || "isPause" !== this.data) && (i = !0),
                this._rawPrevTime = r = !e || t || c === t ? t : h)),
                this._initted || (i = !0);
            else if (this._totalTime = this._time = t,
            this._easeType) {
                var u = t / l
                  , d = this._easeType
                  , p = this._easePower;
                (1 === d || 3 === d && u >= .5) && (u = 1 - u),
                3 === d && (u *= 2),
                1 === p ? u *= u : 2 === p ? u *= u * u : 3 === p ? u *= u * u * u : 4 === p && (u *= u * u * u * u),
                this.ratio = 1 === d ? 1 - u : 2 === d ? u : .5 > t / l ? u / 2 : 1 - u / 2
            } else
                this.ratio = this._ease.getRatio(t / l);
            if (this._time !== a || i) {
                if (!this._initted) {
                    if (this._init(),
                    !this._initted || this._gc)
                        return;
                    if (!i && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration))
                        return this._time = this._totalTime = a,
                        this._rawPrevTime = c,
                        L.push(this),
                        void (this._lazy = [t, e]);
                    this._time && !n ? this.ratio = this._ease.getRatio(this._time / l) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                }
                for (!1 !== this._lazy && (this._lazy = !1),
                this._active || !this._paused && this._time !== a && t >= 0 && (this._active = !0),
                0 === a && (this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : s || (s = "_dummyGS")),
                this.vars.onStart && (0 !== this._time || 0 === l) && (e || this._callback("onStart"))),
                o = this._firstPT; o; )
                    o.f ? o.t[o.p](o.c * this.ratio + o.s) : o.t[o.p] = o.c * this.ratio + o.s,
                    o = o._next;
                this._onUpdate && (0 > t && this._startAt && -1e-4 !== t && this._startAt.render(t, e, i),
                e || (this._time !== a || n) && this._callback("onUpdate")),
                s && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && -1e-4 !== t && this._startAt.render(t, e, i),
                n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1),
                this._active = !1),
                !e && this.vars[s] && this._callback(s),
                0 === l && this._rawPrevTime === h && r !== h && (this._rawPrevTime = 0))
            }
        }
        ,
        o._kill = function(t, e, i) {
            if ("all" === t && (t = null),
            null == t && (null == e || e === this.target))
                return this._lazy = !1,
                this._enabled(!1, !1);
            e = "string" != typeof e ? e || this._targets || this.target : I.selector(e) || e;
            var n, s, o, r, a, l, c, h, u, d = i && this._time && i._startTime === this._startTime && this._timeline === i._timeline;
            if ((p(e) || D(e)) && "number" != typeof e[0])
                for (n = e.length; --n > -1; )
                    this._kill(t, e[n], i) && (l = !0);
            else {
                if (this._targets) {
                    for (n = this._targets.length; --n > -1; )
                        if (e === this._targets[n]) {
                            a = this._propLookup[n] || {},
                            this._overwrittenProps = this._overwrittenProps || [],
                            s = this._overwrittenProps[n] = t ? this._overwrittenProps[n] || {} : "all";
                            break
                        }
                } else {
                    if (e !== this.target)
                        return !1;
                    a = this._propLookup,
                    s = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
                }
                if (a) {
                    if (c = t || a,
                    h = t !== s && "all" !== s && t !== a && ("object" != typeof t || !t._tempKill),
                    i && (I.onOverwrite || this.vars.onOverwrite)) {
                        for (o in c)
                            a[o] && (u || (u = []),
                            u.push(o));
                        if ((u || !t) && !K(this, i, e, u))
                            return !1
                    }
                    for (o in c)
                        (r = a[o]) && (d && (r.f ? r.t[r.p](r.s) : r.t[r.p] = r.s,
                        l = !0),
                        r.pg && r.t._kill(c) && (l = !0),
                        r.pg && 0 !== r.t._overwriteProps.length || (r._prev ? r._prev._next = r._next : r === this._firstPT && (this._firstPT = r._next),
                        r._next && (r._next._prev = r._prev),
                        r._next = r._prev = null),
                        delete a[o]),
                        h && (s[o] = 1);
                    !this._firstPT && this._initted && this._enabled(!1, !1)
                }
            }
            return l
        }
        ,
        o.invalidate = function() {
            return this._notifyPluginsOfEnabled && I._onPluginEvent("_onDisable", this),
            this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null,
            this._notifyPluginsOfEnabled = this._active = this._lazy = !1,
            this._propLookup = this._targets ? {} : [],
            O.prototype.invalidate.call(this),
            this.vars.immediateRender && (this._time = -h,
            this.render(-this._delay)),
            this
        }
        ,
        o._enabled = function(t, e) {
            if (a || r.wake(),
            t && this._gc) {
                var i, n = this._targets;
                if (n)
                    for (i = n.length; --i > -1; )
                        this._siblings[i] = Q(n[i], this, !0);
                else
                    this._siblings = Q(this.target, this, !0)
            }
            return O.prototype._enabled.call(this, t, e),
            !(!this._notifyPluginsOfEnabled || !this._firstPT) && I._onPluginEvent(t ? "_onEnable" : "_onDisable", this)
        }
        ,
        I.to = function(t, e, i) {
            return new I(t,e,i)
        }
        ,
        I.from = function(t, e, i) {
            return i.runBackwards = !0,
            i.immediateRender = 0 != i.immediateRender,
            new I(t,e,i)
        }
        ,
        I.fromTo = function(t, e, i, n) {
            return n.startAt = i,
            n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender,
            new I(t,e,n)
        }
        ,
        I.delayedCall = function(t, e, i, n, s) {
            return new I(e,0,{
                delay: t,
                onComplete: e,
                onCompleteParams: i,
                callbackScope: n,
                onReverseComplete: e,
                onReverseCompleteParams: i,
                immediateRender: !1,
                lazy: !1,
                useFrames: s,
                overwrite: 0
            })
        }
        ,
        I.set = function(t, e) {
            return new I(t,0,e)
        }
        ,
        I.getTweensOf = function(t, e) {
            if (null == t)
                return [];
            var i, n, s, o;
            if (t = "string" != typeof t ? t : I.selector(t) || t,
            (p(t) || D(t)) && "number" != typeof t[0]) {
                for (i = t.length,
                n = []; --i > -1; )
                    n = n.concat(I.getTweensOf(t[i], e));
                for (i = n.length; --i > -1; )
                    for (o = n[i],
                    s = i; --s > -1; )
                        o === n[s] && n.splice(i, 1)
            } else
                for (i = (n = Q(t).concat()).length; --i > -1; )
                    (n[i]._gc || e && !n[i].isActive()) && n.splice(i, 1);
            return n
        }
        ,
        I.killTweensOf = I.killDelayedCallsTo = function(t, e, i) {
            "object" == typeof e && (i = e,
            e = !1);
            for (var n = I.getTweensOf(t, e), s = n.length; --s > -1; )
                n[s]._kill(i, t)
        }
        ;
        var J = _("plugins.TweenPlugin", (function(t, e) {
            this._overwriteProps = (t || "").split(","),
            this._propName = this._overwriteProps[0],
            this._priority = e || 0,
            this._super = J.prototype
        }
        ), !0);
        if (o = J.prototype,
        J.version = "1.18.0",
        J.API = 2,
        o._firstPT = null,
        o._addTween = N,
        o.setRatio = R,
        o._kill = function(t) {
            var e, i = this._overwriteProps, n = this._firstPT;
            if (null != t[this._propName])
                this._overwriteProps = [];
            else
                for (e = i.length; --e > -1; )
                    null != t[i[e]] && i.splice(e, 1);
            for (; n; )
                null != t[n.n] && (n._next && (n._next._prev = n._prev),
                n._prev ? (n._prev._next = n._next,
                n._prev = null) : this._firstPT === n && (this._firstPT = n._next)),
                n = n._next;
            return !1
        }
        ,
        o._roundProps = function(t, e) {
            for (var i = this._firstPT; i; )
                (t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")]) && (i.r = e),
                i = i._next
        }
        ,
        I._onPluginEvent = function(t, e) {
            var i, n, s, o, r, a = e._firstPT;
            if ("_onInitAllProps" === t) {
                for (; a; ) {
                    for (r = a._next,
                    n = s; n && n.pr > a.pr; )
                        n = n._next;
                    (a._prev = n ? n._prev : o) ? a._prev._next = a : s = a,
                    (a._next = n) ? n._prev = a : o = a,
                    a = r
                }
                a = e._firstPT = s
            }
            for (; a; )
                a.pg && "function" == typeof a.t[t] && a.t[t]() && (i = !0),
                a = a._next;
            return i
        }
        ,
        J.activate = function(t) {
            for (var e = t.length; --e > -1; )
                t[e].API === J.API && (F[(new t[e])._propName] = t[e]);
            return !0
        }
        ,
        g.plugin = function(t) {
            if (!(t && t.propName && t.init && t.API))
                throw "illegal plugin definition.";
            var e, i = t.propName, n = t.priority || 0, s = t.overwriteProps, o = {
                init: "_onInitTween",
                set: "setRatio",
                kill: "_kill",
                round: "_roundProps",
                initAll: "_onInitAllProps"
            }, r = _("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", (function() {
                J.call(this, i, n),
                this._overwriteProps = s || []
            }
            ), !0 === t.global), a = r.prototype = new J(i);
            for (e in a.constructor = r,
            r.API = t.API,
            o)
                "function" == typeof t[e] && (a[o[e]] = t[e]);
            return r.version = t.version,
            J.activate([r]),
            r
        }
        ,
        n = t._gsQueue) {
            for (s = 0; n.length > s; s++)
                n[s]();
            for (o in f)
                f[o].func || t.console.log("GSAP encountered missing dependency: com.greensock." + o)
        }
        a = !1
    }
}("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window);
