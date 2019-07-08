(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    53: function(e, n, t) {
      e.exports = t(84);
    },
    83: function(e, n, t) {},
    84: function(e, n, t) {
      "use strict";
      t.r(n);
      var r,
        a = t(0),
        o = t.n(a),
        c = t(23),
        u = t.n(c),
        s = t(16),
        l = t(11),
        i = t(42),
        d = t(49),
        f = t(5),
        p = t(6),
        m = "CUSTOM_REASON_SET",
        b = "MOOD_SET",
        v = "REASONS_SET",
        g = "SELECTED_SEND",
        y = "SELECTED_SEND_ERROR";
      function O() {
        var e = Object(f.a)([
          "\n  background-color: #343a40;\n  border-color: #343a40;\n  color: #fff;\n  cursor: pointer;\n  margin-top: 10px;\n  padding: 10px;\n  text-transform: uppercase;\n  width: 100%;\n"
        ]);
        return (
          (O = function() {
            return e;
          }),
          e
        );
      }
      function E() {
        var e = Object(f.a)(["\n  ", "\n  \n  ", "\n  \n  ", "\n"]);
        return (
          (E = function() {
            return e;
          }),
          e
        );
      }
      function h() {
        var e = Object(f.a)(["\n  max-width: 320px;\n  padding: 30px;\n"]);
        return (
          (h = function() {
            return e;
          }),
          e
        );
      }
      function x() {
        var e = Object(f.a)([
          "\n  color: #000;\n  font-size: 24px;\n  font-weight: 700;\n  margin: 0 0 20px;\n  text-align: center;\n\n  svg {\n    vertical-align: bottom;\n    width: 28px;\n  }\n"
        ]);
        return (
          (x = function() {
            return e;
          }),
          e
        );
      }
      function w() {
        var e = Object(f.a)([
          "\n  background-color: #fff;\n  border: 1px solid transparent;\n  color: #212529;\n  cursor: pointer;\n  margin-bottom: 20px;\n  padding: 5px;\n\n  &:hover {\n    background-color: #e2e6ea;\n    border-color: #dae0e5;\n  }\n"
        ]);
        return (
          (w = function() {
            return e;
          }),
          e
        );
      }
      function S() {
        var e = Object(f.a)([
          "\n  background-color: #f8d7da;\n  border-color: #f5c6cb;\n  color: #721c24;\n  margin: 5px 0;\n  padding: 5px 2px;\n  text-align: center;\n"
        ]);
        return (
          (S = function() {
            return e;
          }),
          e
        );
      }
      !(function(e) {
        (e.NotSelected = "NotSelected"),
          (e.NotWell = "NotWell"),
          (e.OK = "OK"),
          (e.Awesome = "Awesome");
      })(r || (r = {}));
      var j = p.a.div(S()),
        R = p.a.button(w()),
        k = p.a.h2(x()),
        N = p.a.div(h()),
        C = p.a.span(
          E(),
          function(e) {
            return e.type === r.Awesome && "\n    color: #66da72;\n  ";
          },
          function(e) {
            return e.type === r.NotWell && "\n    color: #66b5da;\n  ";
          },
          function(e) {
            return e.type === r.OK && "\n    color: #c5c5c5;\n  ";
          }
        ),
        z = p.a.button(O()),
        T = function() {
          return o.a.createElement(
            N,
            null,
            o.a.createElement(k, null, "Thanks for taking the survey!")
          );
        },
        _ = t(10);
      function A() {
        return (A =
          Object.assign ||
          function(e) {
            for (var n = 1; n < arguments.length; n++) {
              var t = arguments[n];
              for (var r in t)
                Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      function P(e, n) {
        if (null == e) return {};
        var t,
          r,
          a = (function(e, n) {
            if (null == e) return {};
            var t,
              r,
              a = {},
              o = Object.keys(e);
            for (r = 0; r < o.length; r++)
              (t = o[r]), n.indexOf(t) >= 0 || (a[t] = e[t]);
            return a;
          })(e, n);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (r = 0; r < o.length; r++)
            (t = o[r]),
              n.indexOf(t) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, t) &&
                  (a[t] = e[t]));
        }
        return a;
      }
      var M = o.a.createElement("path", {
          fill: "currentColor",
          d:
            "M200.3 248c12.4-18.7 15.1-37.3 15.7-56-.5-18.7-3.3-37.3-15.7-56-8-12-25.1-11.4-32.7 0-12.4 18.7-15.1 37.3-15.7 56 .5 18.7 3.3 37.3 15.7 56 8.1 12 25.2 11.4 32.7 0zm128 0c12.4-18.7 15.1-37.3 15.7-56-.5-18.7-3.3-37.3-15.7-56-8-12-25.1-11.4-32.7 0-12.4 18.7-15.1 37.3-15.7 56 .5 18.7 3.3 37.3 15.7 56 8.1 12 25.2 11.4 32.7 0zM248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200zm105.6-151.4c-25.9 8.3-64.4 13.1-105.6 13.1s-79.6-4.8-105.6-13.1c-9.9-3.1-19.4 5.3-17.7 15.3 7.9 47.2 71.3 80 123.3 80s115.3-32.9 123.3-80c1.6-9.8-7.7-18.4-17.7-15.3z"
        }),
        W = function(e) {
          var n = e.svgRef,
            t = P(e, ["svgRef"]);
          return o.a.createElement(
            "svg",
            A(
              {
                "aria-hidden": "true",
                focusable: "false",
                "data-prefix": "far",
                "data-icon": "grin-alt",
                className: "svg-inline--fa fa-grin-alt fa-w-16",
                role: "img",
                viewBox: "0 0 496 512",
                ref: n
              },
              t
            ),
            M
          );
        },
        I = o.a.forwardRef(function(e, n) {
          return o.a.createElement(W, A({ svgRef: n }, e));
        });
      t.p;
      function B() {
        return (B =
          Object.assign ||
          function(e) {
            for (var n = 1; n < arguments.length; n++) {
              var t = arguments[n];
              for (var r in t)
                Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      function F(e, n) {
        if (null == e) return {};
        var t,
          r,
          a = (function(e, n) {
            if (null == e) return {};
            var t,
              r,
              a = {},
              o = Object.keys(e);
            for (r = 0; r < o.length; r++)
              (t = o[r]), n.indexOf(t) >= 0 || (a[t] = e[t]);
            return a;
          })(e, n);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (r = 0; r < o.length; r++)
            (t = o[r]),
              n.indexOf(t) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, t) &&
                  (a[t] = e[t]));
        }
        return a;
      }
      var H = o.a.createElement("path", {
          fill: "currentColor",
          d:
            "M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200zm-48-248c0-17.7-14.3-32-32-32s-32 14.3-32 32 14.3 32 32 32 32-14.3 32-32zm128-32c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm-80 112c-35.6 0-88.8 21.3-95.8 61.2-2 11.8 9 21.5 20.5 18.1 31.2-9.6 59.4-15.3 75.3-15.3s44.1 5.7 75.3 15.3c11.4 3.5 22.5-6.3 20.5-18.1-7-39.9-60.2-61.2-95.8-61.2z"
        }),
        U = function(e) {
          var n = e.svgRef,
            t = F(e, ["svgRef"]);
          return o.a.createElement(
            "svg",
            B(
              {
                "aria-hidden": "true",
                focusable: "false",
                "data-prefix": "far",
                "data-icon": "frown-open",
                className: "svg-inline--fa fa-frown-open fa-w-16",
                role: "img",
                viewBox: "0 0 496 512",
                ref: n
              },
              t
            ),
            H
          );
        },
        D = o.a.forwardRef(function(e, n) {
          return o.a.createElement(U, B({ svgRef: n }, e));
        });
      t.p;
      function K() {
        return (K =
          Object.assign ||
          function(e) {
            for (var n = 1; n < arguments.length; n++) {
              var t = arguments[n];
              for (var r in t)
                Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      function V(e, n) {
        if (null == e) return {};
        var t,
          r,
          a = (function(e, n) {
            if (null == e) return {};
            var t,
              r,
              a = {},
              o = Object.keys(e);
            for (r = 0; r < o.length; r++)
              (t = o[r]), n.indexOf(t) >= 0 || (a[t] = e[t]);
            return a;
          })(e, n);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (r = 0; r < o.length; r++)
            (t = o[r]),
              n.indexOf(t) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, t) &&
                  (a[t] = e[t]));
        }
        return a;
      }
      var L = o.a.createElement("path", {
          fill: "currentColor",
          d:
            "M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200zm-80-216c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm160-64c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm8 144H160c-13.2 0-24 10.8-24 24s10.8 24 24 24h176c13.2 0 24-10.8 24-24s-10.8-24-24-24z"
        }),
        G = function(e) {
          var n = e.svgRef,
            t = V(e, ["svgRef"]);
          return o.a.createElement(
            "svg",
            K(
              {
                "aria-hidden": "true",
                focusable: "false",
                "data-prefix": "far",
                "data-icon": "meh",
                className: "svg-inline--fa fa-meh fa-w-16",
                role: "img",
                viewBox: "0 0 496 512",
                ref: n
              },
              t
            ),
            L
          );
        },
        J = o.a.forwardRef(function(e, n) {
          return o.a.createElement(G, K({ svgRef: n }, e));
        });
      t.p;
      function X() {
        var e = Object(f.a)([
          "\n  display: inline-block;\n  position: relative;\n\n  input {\n    left: -9999px; // offscreen\n    position: absolute;\n\n    &:checked + ",
          " {\n      border: 3px solid #000;\n    }\n\n    &:focus + ",
          " {\n      outline: 3px solid rgba(0, 0, 0, 0.3);\n    }\n  }\n"
        ]);
        return (
          (X = function() {
            return e;
          }),
          e
        );
      }
      function Y() {
        var e = Object(f.a)([
          "\n  align-items: center;\n  box-sizing: border-box;\n  cursor: pointer;\n  display: inline-flex;\n  height: 70px;\n  justify-content: center;\n  margin: 0 10px;\n  width: 70px;\n  \n  ",
          "\n  \n  ",
          "\n  \n  ",
          "\n  \n  svg {\n    display: block;\n    width: 40px;\n  }\n"
        ]);
        return (
          (Y = function() {
            return e;
          }),
          e
        );
      }
      var $ = p.a.label(
          Y(),
          function(e) {
            return (
              "awesome" === e.type &&
              "\n    background-color: #66da72;\n        \n    &:hover {\n      background-color: #5EC666;\n    }\n  "
            );
          },
          function(e) {
            return (
              "notWell" === e.type &&
              "\n    background-color: #66b5da;\n        \n    &:hover {\n      background-color: #64A3C6;\n    }\n  "
            );
          },
          function(e) {
            return (
              "ok" === e.type &&
              "\n    background-color: #c5c5c5;\n        \n    &:hover {\n      background-color: #B1B1B1;\n    }\n  "
            );
          }
        ),
        q = p.a.div(X(), $, $),
        Q = function(e) {
          var n = e.icon,
            t = e.id,
            r = e.type,
            a = e.value,
            c = e.field,
            u = e.form;
          return o.a.createElement(
            q,
            null,
            o.a.createElement(
              "input",
              Object.assign({ type: "radio" }, c, {
                checked: u.values[c.name] === a,
                id: t,
                value: a
              })
            ),
            o.a.createElement($, { htmlFor: t, type: r }, n)
          );
        };
      function Z() {
        var e = Object(f.a)(["\n  margin: 0 auto;\n  max-width: 250px;\n"]);
        return (
          (Z = function() {
            return e;
          }),
          e
        );
      }
      function ee() {
        var e = Object(f.a)(["\n  margin: 0 -10px;\n  text-align: center;\n"]);
        return (
          (ee = function() {
            return e;
          }),
          e
        );
      }
      var ne,
        te = p.a.div(ee()),
        re = p.a.div(Z()),
        ae = function(e) {
          var n = { mood: e.mood };
          return o.a.createElement(
            N,
            null,
            o.a.createElement(
              k,
              null,
              "How are you feeling today, ",
              e.userName,
              "?"
            ),
            o.a.createElement(
              re,
              null,
              o.a.createElement(_.d, {
                enableReinitialize: !0,
                initialValues: n,
                validate: function(n) {
                  var t = {};
                  return (
                    n.mood === r.NotSelected &&
                      (t.mood = "Please, tell us what's your mood, ".concat(
                        e.userName
                      )),
                    t
                  );
                },
                onSubmit: function(n, t) {
                  e.mood !== n.mood && e.clearReasons(),
                    e.setMood(n.mood),
                    e.nextStep(),
                    t.setSubmitting(!1);
                },
                render: function(e) {
                  var n = e.isSubmitting;
                  return o.a.createElement(
                    _.c,
                    null,
                    o.a.createElement(_.a, {
                      name: "mood",
                      render: function(e) {
                        return o.a.createElement(j, null, e);
                      }
                    }),
                    o.a.createElement(
                      te,
                      null,
                      o.a.createElement(_.b, {
                        name: "mood",
                        render: function(e) {
                          return o.a.createElement(
                            Q,
                            Object.assign({}, e, {
                              icon: o.a.createElement(I, null),
                              id: "mood-awesome",
                              type: "awesome",
                              value: r.Awesome
                            })
                          );
                        }
                      }),
                      o.a.createElement(_.b, {
                        name: "mood",
                        render: function(e) {
                          return o.a.createElement(
                            Q,
                            Object.assign({}, e, {
                              icon: o.a.createElement(J, null),
                              id: "mood-ok",
                              type: "ok",
                              value: r.OK
                            })
                          );
                        }
                      }),
                      o.a.createElement(_.b, {
                        name: "mood",
                        render: function(e) {
                          return o.a.createElement(
                            Q,
                            Object.assign({}, e, {
                              icon: o.a.createElement(D, null),
                              id: "mood-not-well",
                              type: "notWell",
                              value: r.NotWell
                            })
                          );
                        }
                      })
                    ),
                    o.a.createElement(
                      z,
                      { type: "submit", disabled: n },
                      "Select"
                    )
                  );
                }
              })
            )
          );
        },
        oe = "FETCH_ERROR",
        ce = "INITIAL_TOGGLE",
        ue = "REASONS_FETCH",
        se = "REASONS_FETCH_SUCCESS",
        le = "STEP_NEXT",
        ie = "STEP_PREV",
        de = "USER_FETCH",
        fe = "USER_FETCH_SUCCESS",
        pe = 1,
        me = 3;
      !(function(e) {
        (e[(e.Step1 = 1)] = "Step1"),
          (e[(e.Step2 = 2)] = "Step2"),
          (e[(e.Step3 = 3)] = "Step3");
      })(ne || (ne = {}));
      var be = Object(s.b)(
          function(e) {
            return { data: e.data, selected: e.selected };
          },
          function(e) {
            return {
              clearReasons: function() {
                return e({ payload: { reasons: [] }, type: se });
              },
              nextStep: function() {
                return e({ type: le });
              },
              setMood: function(n) {
                return e(
                  (function(e) {
                    return { payload: { mood: e }, type: b };
                  })(n)
                );
              }
            };
          }
        )(function(e) {
          return o.a.createElement(ae, {
            mood: e.selected.mood,
            userName: e.data.userName,
            clearReasons: e.clearReasons,
            nextStep: e.nextStep,
            setMood: e.setMood
          });
        }),
        ve = t(48),
        ge = t.n(ve);
      function ye() {
        var e = Object(f.a)([
          "\n  background-color: #ddd;\n  cursor: pointer;\n  display: block;\n  margin: 5px 0;\n  padding: 10px 60px 10px 10px;\n  position: relative;\n\n  &:hover {\n    background-color: #ccc;\n  }\n\n  input {\n    position: absolute;\n    right: 22px;\n    top: 50%;\n    transform: translateY(-50%);\n  }\n"
        ]);
        return (
          (ye = function() {
            return e;
          }),
          e
        );
      }
      var Oe = p.a.label(ye()),
        Ee = function(e) {
          var n = e.label,
            t = e.value,
            r = e.field,
            a = e.form;
          return o.a.createElement(
            Oe,
            null,
            n,
            o.a.createElement(
              "input",
              Object.assign(
                { checked: r.value.includes(t), type: "checkbox" },
                r,
                {
                  onChange: function() {
                    if (r.value.includes(t)) {
                      var e = r.value.filter(function(e) {
                        return e !== t;
                      });
                      a.setFieldValue(r.name, e);
                    } else {
                      var n = r.value.concat(t);
                      a.setFieldValue(r.name, n);
                    }
                  }
                }
              )
            )
          );
        };
      function he() {
        var e = Object(f.a)(["\n  margin-bottom: 20px;\n"]);
        return (
          (he = function() {
            return e;
          }),
          e
        );
      }
      function xe() {
        var e = Object(f.a)([
          "\n  border: 1px solid #ccc;\n  box-sizing: border-box;\n  height: 30px;\n  margin-top: 5px;\n  padding: 0 5px;\n  width: 100%;\n"
        ]);
        return (
          (xe = function() {
            return e;
          }),
          e
        );
      }
      var we = p.a.input(xe()),
        Se = p.a.div(he()),
        je = function(e) {
          var n = {
              customReason: e.customReason,
              mood: e.mood,
              selectedReasons: e.selectedReasons
            },
            t = null;
          switch (e.mood) {
            case r.NotWell:
              t = o.a.createElement(D, null);
              break;
            case r.OK:
              t = o.a.createElement(J, null);
              break;
            case r.Awesome:
              t = o.a.createElement(I, null);
          }
          return o.a.createElement(
            N,
            null,
            o.a.createElement(
              k,
              null,
              "Why are you ",
              o.a.createElement(C, { type: e.mood }, t),
              "?"
            ),
            o.a.createElement(R, { onClick: e.prevStep }, "\xab go back"),
            o.a.createElement(_.d, {
              enableReinitialize: !0,
              initialValues: n,
              validate: function(e) {
                var n = {};
                return (
                  "" === e.customReason &&
                    0 === e.selectedReasons.length &&
                    (n.customReason =
                      "Select one of defined or write your own reason"),
                  n
                );
              },
              onSubmit: function(n, t) {
                e.setCustomReason(n.customReason),
                  e.setReasons(n.selectedReasons),
                  e.sendSelected(n.customReason, e.mood, n.selectedReasons),
                  t.setSubmitting(!1);
              },
              render: function(n) {
                var t = n.isSubmitting;
                return o.a.createElement(
                  _.c,
                  null,
                  o.a.createElement(
                    Se,
                    null,
                    "Select one of:",
                    0 === e.reasons.length &&
                      o.a.createElement(ge.a, {
                        active: !0,
                        type: "ball-clip-rotate-multiple"
                      }),
                    e.reasons.map(function(e, n) {
                      return o.a.createElement(_.b, {
                        key: n,
                        name: "selectedReasons",
                        render: function(t) {
                          return o.a.createElement(
                            Ee,
                            Object.assign({}, t, { label: e, value: n })
                          );
                        }
                      });
                    })
                  ),
                  o.a.createElement(
                    Se,
                    null,
                    "Or type your own:",
                    o.a.createElement(_.b, {
                      name: "customReason",
                      render: function(e) {
                        var n = e.field;
                        return o.a.createElement(we, n);
                      }
                    })
                  ),
                  o.a.createElement(_.a, {
                    name: "customReason",
                    render: function(e) {
                      return o.a.createElement(j, null, e);
                    }
                  }),
                  o.a.createElement(
                    z,
                    { type: "submit", disabled: t },
                    "Select"
                  )
                );
              }
            })
          );
        },
        Re = Object(s.b)(
          function(e) {
            return { data: e.data, selected: e.selected };
          },
          function(e) {
            return {
              fetchReasonsAction: function(n) {
                return e(
                  (function(e) {
                    return { payload: { mood: e }, type: ue };
                  })(n)
                );
              },
              prevStep: function() {
                return e({ type: ie });
              },
              sendSelected: function(n, t, r) {
                return e(
                  (function(e, n, t) {
                    return {
                      payload: { customReason: e, mood: n, selectedReasons: t },
                      type: g
                    };
                  })(n, t, r)
                );
              },
              setCustomReason: function(n) {
                return e(
                  (function(e) {
                    return { payload: { reason: e }, type: m };
                  })(n)
                );
              },
              setReasons: function(n) {
                return e(
                  (function(e) {
                    return { payload: { reasons: e }, type: v };
                  })(n)
                );
              }
            };
          }
        )(function(e) {
          var n = e.fetchReasonsAction;
          return (
            Object(a.useEffect)(
              function() {
                0 === e.data.reasons.length && n(e.selected.mood);
              },
              [n]
            ),
            o.a.createElement(
              je,
              Object.assign({ reasons: e.data.reasons }, e.selected, {
                prevStep: e.prevStep,
                sendSelected: e.sendSelected,
                setCustomReason: e.setCustomReason,
                setReasons: e.setReasons
              })
            )
          );
        }),
        ke = Object(s.b)(
          function(e) {
            return { data: e.data };
          },
          function(e) {
            return {
              fetchUserAction: function() {
                return e({ type: de });
              }
            };
          }
        )(function(e) {
          var n = e.fetchUserAction;
          Object(a.useEffect)(
            function() {
              n();
            },
            [n]
          );
          var t = o.a.createElement("div", null);
          if (e.data.isInitial) return t;
          switch (e.data.currentStep) {
            case ne.Step1:
              t = o.a.createElement(be, null);
              break;
            case ne.Step2:
              t = o.a.createElement(Re, null);
              break;
            case ne.Step3:
              t = o.a.createElement(T, null);
          }
          return t;
        });
      Boolean(
        "localhost" === window.location.hostname ||
          "[::1]" === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      );
      var Ne = t(13),
        Ce = { currentStep: 1, isInitial: !0, reasons: [], userName: "N/A" };
      var ze = t(50),
        Te = { customReason: "", mood: r.NotSelected, selectedReasons: [] };
      var _e = Object(l.combineReducers)({
          data: function() {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : Ce,
              n = arguments.length > 1 ? arguments[1] : void 0;
            switch (n.type) {
              case oe:
                return console.error("error", n.payload.message), e;
              case ce:
                return Object(Ne.a)({}, e, { isInitial: !1 });
              case se:
                return Object(Ne.a)({}, e, { reasons: n.payload.reasons });
              case le:
                return e.currentStep === me
                  ? e
                  : Object(Ne.a)({}, e, { currentStep: e.currentStep + 1 });
              case ie:
                return e.currentStep === pe
                  ? e
                  : Object(Ne.a)({}, e, { currentStep: e.currentStep - 1 });
              case fe:
                return Object(Ne.a)({}, e, { userName: n.payload.userName });
              default:
                return e;
            }
          },
          selected: function() {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : Te,
              n = arguments.length > 1 ? arguments[1] : void 0;
            switch (n.type) {
              case m:
                return Object(Ne.a)({}, e, { customReason: n.payload.reason });
              case b:
                return Object(Ne.a)({}, e, { mood: n.payload.mood });
              case v:
                return Object(Ne.a)({}, e, {
                  selectedReasons: Object(ze.a)(n.payload.reasons)
                });
              case y:
                return console.error("error", n.payload.message), e;
              default:
                return e;
            }
          }
        }),
        Ae = t(7),
        Pe = t.n(Ae),
        Me = t(20),
        We = t.n(Me),
        Ie = t(8),
        Be = Pe.a.mark(Ke),
        Fe = Pe.a.mark(Ve),
        He = Pe.a.mark(Le),
        Ue = Pe.a.mark(Ge),
        De = Pe.a.mark(Je);
      function Ke(e) {
        var n;
        return Pe.a.wrap(
          function(t) {
            for (;;)
              switch ((t.prev = t.next)) {
                case 0:
                  return (
                    (t.prev = 0),
                    (t.next = 3),
                    Object(Ie.b)(
                      We.a.get,
                      "http://www.mocky.io/v2/5d21afe12f0000361dc462fa?mocky-delay=1s",
                      { params: { mood: e.payload.mood } }
                    )
                  );
                case 3:
                  return (
                    (n = t.sent),
                    (t.next = 6),
                    Object(Ie.c)({
                      payload: { reasons: n.data.reasons },
                      type: se
                    })
                  );
                case 6:
                  t.next = 12;
                  break;
                case 8:
                  return (
                    (t.prev = 8),
                    (t.t0 = t.catch(0)),
                    (t.next = 12),
                    Object(Ie.c)({
                      payload: { message: t.t0.message },
                      type: oe
                    })
                  );
                case 12:
                case "end":
                  return t.stop();
              }
          },
          Be,
          null,
          [[0, 8]]
        );
      }
      function Ve() {
        var e;
        return Pe.a.wrap(
          function(n) {
            for (;;)
              switch ((n.prev = n.next)) {
                case 0:
                  return (
                    (n.prev = 0),
                    (n.next = 3),
                    Object(Ie.b)(
                      We.a.get,
                      "http://www.mocky.io/v2/5d1d2c6934000023b1b60248"
                    )
                  );
                case 3:
                  return (
                    (e = n.sent),
                    (n.next = 6),
                    Object(Ie.c)({
                      payload: { userName: e.data.name },
                      type: fe
                    })
                  );
                case 6:
                  return (n.next = 8), Object(Ie.c)({ type: ce });
                case 8:
                  n.next = 14;
                  break;
                case 10:
                  return (
                    (n.prev = 10),
                    (n.t0 = n.catch(0)),
                    (n.next = 14),
                    Object(Ie.c)({
                      payload: { message: n.t0.message },
                      type: oe
                    })
                  );
                case 14:
                case "end":
                  return n.stop();
              }
          },
          Fe,
          null,
          [[0, 10]]
        );
      }
      function Le() {
        return Pe.a.wrap(function(e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (e.next = 2), Object(Ie.d)(ue, Ke);
              case 2:
              case "end":
                return e.stop();
            }
        }, He);
      }
      function Ge() {
        return Pe.a.wrap(function(e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (e.next = 2), Object(Ie.d)(de, Ve);
              case 2:
              case "end":
                return e.stop();
            }
        }, Ue);
      }
      function Je() {
        return Pe.a.wrap(function(e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (e.next = 2), Object(Ie.a)([Le(), Ge()]);
              case 2:
              case "end":
                return e.stop();
            }
        }, De);
      }
      var Xe = Pe.a.mark(qe),
        Ye = Pe.a.mark(Qe),
        $e = Pe.a.mark(Ze);
      function qe(e) {
        return Pe.a.wrap(
          function(n) {
            for (;;)
              switch ((n.prev = n.next)) {
                case 0:
                  return (
                    (n.prev = 0),
                    (n.next = 3),
                    Object(Ie.b)(
                      We.a.post,
                      "http://www.mocky.io/v2/5d21cc6d2f00006f2cc46339",
                      e.payload
                    )
                  );
                case 3:
                  return (n.next = 5), Object(Ie.c)({ type: le });
                case 5:
                  n.next = 11;
                  break;
                case 7:
                  return (
                    (n.prev = 7),
                    (n.t0 = n.catch(0)),
                    (n.next = 11),
                    Object(Ie.c)({
                      payload: { message: n.t0.message },
                      type: y
                    })
                  );
                case 11:
                case "end":
                  return n.stop();
              }
          },
          Xe,
          null,
          [[0, 7]]
        );
      }
      function Qe() {
        return Pe.a.wrap(function(e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (e.next = 2), Object(Ie.d)(g, qe);
              case 2:
              case "end":
                return e.stop();
            }
        }, Ye);
      }
      function Ze() {
        return Pe.a.wrap(function(e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (e.next = 2), Object(Ie.a)([Qe()]);
              case 2:
              case "end":
                return e.stop();
            }
        }, $e);
      }
      t(83);
      var en = Object(d.a)(),
        nn = Object(l.createStore)(
          _e,
          Object(i.composeWithDevTools)(Object(l.applyMiddleware)(en))
        );
      en.run(Je),
        en.run(Ze),
        u.a.render(
          o.a.createElement(s.a, { store: nn }, o.a.createElement(ke, null)),
          document.getElementById("root")
        ),
        "serviceWorker" in navigator &&
          navigator.serviceWorker.ready.then(function(e) {
            e.unregister();
          });
    }
  },
  [[53, 1, 2]]
]);
//# sourceMappingURL=main.34c54e54.chunk.js.map
