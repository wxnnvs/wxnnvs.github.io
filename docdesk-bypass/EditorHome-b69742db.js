import {
  r as m,
  f as J,
  c as D,
  g as R,
  a as V,
  b as y,
  d as i,
  j as e,
  s as k,
  t as X,
  h as j,
  _ as Z,
  i as Q,
  k as $,
  X as A,
  l as I,
  R as ee,
  m as te,
  T as H,
  n as oe,
  A as ie,
  o as se,
  p as ne,
  q as re,
  v as ae,
  w as le,
  x as de,
  P as U,
  y as P,
  z as ce,
  H as F,
  O as he,
  B as ge,
  D as pe,
  E as fe,
  F as ue,
  U as xe,
  G as me,
  J as we,
  K as be,
  M as ye,
  N as ve,
  Q as Ce,
  u as Re,
  V as Se,
  W as ke,
  Y as G,
  Z as Ie,
  $ as De,
  a0 as Be,
  a1 as Ne,
  a2 as ze,
  a3 as Le,
  I as Ae,
  a4 as Ee,
  a5 as Te,
} from "https://app.docdesk.co/build/assets/index-3a7d1995.js";
/* empty css              */ const Oe = ({ openChangeName: o }, s) => {
    const { getDesignRef: r, getDesignPageIndex: n } = J(),
      t = D(),
      { actions: h } = R(),
      u = V(),
      x = y((l) => l.designs.curDesignName),
      b = y(
        (l) =>
          l.auth.authUser && l.auth.authUser.active && !l.auth.authUser.ended
      );
    return i("div", {
      ref: s,
      css: {
        background: "#ddd",
        padding: "12px 32px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "nowrap",
        gap: "10px",
        "@media (max-width: 900px)": {
          flexWrap: "wrap",
          flexDirection: "column",
          textAlign: "center",
          padding: "12px 16px",
        },
      },
      children: [
        e("div", {
          className: "w-full",
          css: {
            color: "#3d8eff",
            fontSize: "24px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexGrow: 1,
            "@media (max-width: 600px)": { fontSize: "20px" },
          },
          children: i("div", {
            css: { color: "black", display: "flex", alignItems: "center" },
            children: [
              e("div", { className: "text-lg", children: x }),
              e("div", {
                className: "w-6 h-6 ml-2 hover:cursor-pointer",
                onClick: o,
                children: e("img", {
                  className: "w-4 h-4",
                  src: "/assets/icons/icon_edit.png",
                  alt: "Edit",
                }),
              }),
            ],
          }),
        }),
        i("div", {
          css: {
            display: "flex",
            alignItems: "center",
            gap: "20px",
            flexGrow: 1,
            justifyContent: "flex-end",
          },
          children: [
            !b &&
              // e("button", {
              //   className:
              //     "px-5 py-2 text-white bg-green-600 rounded-lg hover:bg-green-700",
              //   css: {
              //     cursor: "pointer",
              //     fontWeight: 700,
              //     minWidth: "120px",
              //     textAlign: "center",
              //   },
              //   onClick: () => {
              //     u("/user/go-pro");
              //   },
              //   children: "Go PRO",
              // }),
            i("button", {
              className:
                "px-3 py-2 text-black border border-gray-400 rounded-lg",
              css: {
                cursor: "pointer",
                fontWeight: 700,
                minWidth: "120px",
                textAlign: "center",
              },
              onClick: async () => {
                // if (!b) {
                //   alert(
                //     "Sorry, this feature is only available to PRO users. GO PRO to upgrade!"
                //   );
                //   return;
                // }
                if (r())
                  try {
                    const l = await X(r()),
                      d = document.createElement("a");
                    (d.download = `design-id-page-${n() + 1}.png`),
                      (d.href = l),
                      d.click();
                  } catch (l) {
                    window.alert("Cannot download: " + l.message);
                  }
              },
              children: [
                e("i", { className: "fa fa-cloud-download mr-2" }),
                "Download",
              ],
            }),
            e("button", {
              className:
                "px-3 py-2 text-white bg-blue-700 rounded-lg hover:bg-blue-800",
              css: { cursor: "pointer", fontWeight: 700 },
              onClick: () => {
                t(k(!0));
                const l = String(Date.now());
                h.saveDesign(l);
              },
              children: "Save",
            }),
          ],
        }),
      ],
    });
  },
  je = m.forwardRef(Oe),
  He = ({ tabs: o, active: s, onChange: r }) => {
    const n = o.findIndex((t) => t.name === s);
    return e("div", {
      css: {
        color: "#5E6278",
        borderRight: "1px solid rgba(217, 219, 228, 0.6)",
        "@media (max-width: 900px)": {
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          background: "#fff",
          display: "flex",
          justifyContent: "center",
        },
      },
      children: i("div", {
        css: {
          overflow: "hidden",
          position: "relative",
          "@media (max-width: 900px)": { display: "flex" },
        },
        children: [
          n >= 0 &&
            i("div", {
              css: {
                background: "#fff",
                width: 72,
                height: 72,
                position: "absolute",
                left: 0,
                top: 0,
                transform: `translateY(${n * 100}%)`,
                "@media (max-width: 900px)": { display: "none" },
              },
              children: [
                e("div", {
                  css: {
                    position: "absolute",
                    height: 8,
                    width: 8,
                    right: 0,
                    top: -8,
                    background:
                      "radial-gradient(circle closest-side,transparent 0,transparent 50%,#fff 0) 200% 200% /400% 400%",
                  },
                }),
                e("div", {
                  css: {
                    position: "absolute",
                    height: 8,
                    width: 8,
                    right: 0,
                    bottom: -8,
                    transform: "scaleY(-1)",
                    background:
                      "radial-gradient(circle closest-side,transparent 0,transparent 50%,#fff 0) 200% 200% /400% 400%",
                  },
                }),
              ],
            }),
          o.map((t, h) =>
            i(
              "div",
              {
                css: {
                  color: h === n ? "#009ef7" : void 0,
                  borderBottomRightRadius: h === n - 1 ? 8 : 0,
                  borderTopRightRadius: h === n + 1 ? 8 : 0,
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "0 2px",
                  height: 72,
                  width: 72,
                  cursor: "pointer",
                  ":hover": { color: "#009ef7" },
                },
                onClick: (u) => r(u, t.name),
                children: [
                  e("div", { css: { fontSize: 24 }, children: t.icon }),
                  e("span", {
                    css: { fontSize: 10, lineHeight: 1.6, fontWeight: 600 },
                    children: t.name,
                  }),
                ],
              },
              h
            )
          ),
        ],
      }),
    });
  },
  Ue = (o) => {
    const s = o.split("/"),
      r = s.pop(),
      n = r == null ? void 0 : r.split("."),
      t = n == null ? void 0 : n.pop(),
      h = n == null ? void 0 : n.join(".");
    return `${s.join("/")}/${h}m.${t}`;
  },
  Pe = {
    rootId: "f2d33316-8857-4496-a0c7-3dcc9c4ff981",
    layers: {
      "f2d33316-8857-4496-a0c7-3dcc9c4ff981": {
        type: { resolvedName: "TextLayer" },
        props: {
          text: '<p style="text-align: center;font-family: Roboto;font-size: 68px;color: rgb(0, 0, 0);line-height: 1.4;letter-spacing: 0em;"><strong><span style="color: rgb(0, 0, 0);">Add a heading</span></strong></p>',
          position: { x: 525.12102340009, y: 261.582179409994 },
          boxSize: {
            width: 536.3009995574356,
            height: 95,
            x: 523.1390728476821,
            y: 259.9867549668875,
          },
          scale: 1,
          rotate: 0,
          fonts: [
            {
              name: "Roboto",
              fonts: [
                {
                  style: "Bold",
                  urls: ["/assets/fonts/Roboto/Roboto-Bold.woff2"],
                },
                {
                  style: "Bold_Italic",
                  urls: ["/assets/fonts/Roboto/Roboto-BoldItalic.ttf"],
                },
                {
                  style: "Bold",
                  urls: ["/assets/fonts/Roboto/Roboto-Bold.woff2"],
                },
                { urls: ["/assets/fonts/Roboto/Roboto-Bold.woff2"] },
                {
                  style: "Italic",
                  urls: ["/assets/fonts/Roboto/Roboto-Italic.ttf"],
                },
                { urls: ["/assets/fonts/Roboto/Roboto-Bold.woff2"] },
              ],
            },
          ],
          colors: ["rgb(0, 0, 0)"],
          fontSizes: [68],
        },
        locked: !1,
        child: [],
        parent: "ROOT",
      },
    },
  },
  Fe = {
    rootId: "9cc89a8c-49d5-4f90-9964-f65bbe90db92",
    layers: {
      "9cc89a8c-49d5-4f90-9964-f65bbe90db92": {
        type: { resolvedName: "TextLayer" },
        props: {
          text: '<p style="text-align: center;font-family: Roboto;font-size: 38px;color: rgb(0, 0, 0);line-height: 1.4;letter-spacing: 0em;"><strong><span style="color: rgb(0, 0, 0);">Add a subheading</span></strong></p>',
          position: { x: 519.12102340009, y: 365.582179409994 },
          boxSize: {
            width: 536.3009995574356,
            height: 53,
            x: 523.1390728476821,
            y: 259.9867549668875,
          },
          scale: 1,
          rotate: 0,
          fonts: [
            {
              name: "Roboto",
              fonts: [
                {
                  style: "Bold",
                  urls: ["/assets/fonts/Roboto/Roboto-Bold.woff2"],
                },
                {
                  style: "Bold_Italic",
                  urls: ["/assets/fonts/Roboto/Roboto-BoldItalic.ttf"],
                },
                {
                  style: "Bold",
                  urls: ["/assets/fonts/Roboto/Roboto-Bold.woff2"],
                },
                { urls: ["/assets/fonts/Roboto/Roboto-Bold.woff2"] },
                {
                  style: "Italic",
                  urls: ["/assets/fonts/Roboto/Roboto-Italic.ttf"],
                },
                { urls: ["/assets/fonts/Roboto/Roboto-Bold.woff2"] },
              ],
            },
          ],
          colors: ["rgb(0, 0, 0)"],
          fontSizes: [38],
        },
        locked: !1,
        child: [],
        parent: "ROOT",
      },
    },
  },
  Ge = {
    rootId: "3cace409-216f-4e0e-9449-9248901c8c94",
    layers: {
      "3cace409-216f-4e0e-9449-9248901c8c94": {
        type: { resolvedName: "TextLayer" },
        props: {
          text: '<p style="text-align: center;font-family: Roboto;font-size: 26px;color: rgb(0, 0, 0);line-height: 1.4;letter-spacing: 0em;"><span style="color: rgb(0, 0, 0);">Add a little bit of body text</span></p>',
          position: { x: 508.99988653474736, y: 434.903672486454 },
          boxSize: {
            width: 536.3009995574356,
            height: 36,
            x: 523.1390728476821,
            y: 259.9867549668875,
          },
          scale: 1,
          rotate: 0,
          fonts: [
            {
              name: "Roboto",
              fonts: [
                {
                  style: "Bold",
                  urls: ["/assets/fonts/Roboto/Roboto-Bold.woff2"],
                },
                {
                  style: "Bold_Italic",
                  urls: ["/assets/fonts/Roboto/Roboto-BoldItalic.ttf"],
                },
                {
                  style: "Bold",
                  urls: ["/assets/fonts/Roboto/Roboto-Bold.woff2"],
                },
                { urls: ["/assets/fonts/Roboto/Roboto-Bold.woff2"] },
                {
                  style: "Italic",
                  urls: ["/assets/fonts/Roboto/Roboto-Italic.ttf"],
                },
                { urls: ["/assets/fonts/Roboto/Roboto-Bold.woff2"] },
              ],
            },
          ],
          colors: ["rgb(0, 0, 0)"],
          fontSizes: [26],
        },
        locked: !1,
        child: [],
        parent: "ROOT",
      },
    },
  };
var E = function (s) {
  return j.jsx(
    "svg",
    Z(
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 256 256",
        fill: "currentColor",
        width: "1em",
        height: "1em",
      },
      s,
      {
        children: j.jsx("path", {
          d: "M224 128a8 8 0 0 1-8 8H59.31l58.35 58.34a8 8 0 0 1-11.32 11.32l-72-72a8 8 0 0 1 0-11.32l72-72a8 8 0 0 1 11.32 11.32L59.31 120H216a8 8 0 0 1 8 8Z",
        }),
      }
    )
  );
};
const We = ({ onClose: o }) => {
    const { actions: s } = R(),
      [r, n] = m.useState([]),
      [t, h] = m.useState(!0);
    Q(async () => {
      const x = await $.get("/api/v1/texts");
      n(x.data), h(!1);
    }, []);
    const u = (x) => {
      s.addLayerTree(x), I && o();
    };
    return i("div", {
      css: {
        width: "100%",
        height: "100%",
        flexDirection: "column",
        overflowY: "auto",
        display: "flex",
      },
      children: [
        i("div", {
          css: {
            display: "flex",
            alignItems: "center",
            padding: "10px 16px",
            borderBottom: "1px solid rgba(57,76,96,.15)",
            cursor: "pointer",
          },
          onClick: o,
          children: [
            e(E, { css: { fontSize: 18, marginRight: 8 } }),
            e("span", { children: "Back" }),
          ],
        }),
        i("div", {
          css: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            height: 48,
            borderBottom: "1px solid rgba(57,76,96,.15)",
            padding: "0 20px",
          },
          children: [
            e("p", {
              css: {
                lineHeight: "48px",
                fontWeight: 600,
                color: "#181C32",
                flexGrow: 1,
              },
              children: "Text",
            }),
            e("div", {
              css: {
                fontSize: 20,
                flexShrink: 0,
                width: 32,
                height: 32,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              },
              onClick: o,
              children: e(A, {}),
            }),
          ],
        }),
        i("div", {
          css: { flexDirection: "column", overflowY: "auto", display: "flex" },
          children: [
            i("div", {
              css: {
                padding: 16,
                display: "flex",
                gap: 8,
                flexDirection: "column",
              },
              children: [
                e("div", {
                  css: {
                    fontSize: 28,
                    fontFamily: "Roboto",
                    lineHeight: 1,
                    padding: "16px 16px",
                    fontWeight: 700,
                    background: "#EBECF0",
                    borderRadius: 4,
                    cursor: "pointer",
                  },
                  onClick: () => u(Pe),
                  children: "Add a heading",
                }),
                e("div", {
                  css: {
                    fontSize: 18,
                    lineHeight: 1,
                    fontFamily: "Roboto",
                    padding: "16px",
                    fontWeight: 700,
                    background: "#EBECF0",
                    borderRadius: 4,
                    cursor: "pointer",
                  },
                  onClick: () => u(Fe),
                  children: "Add a subheading",
                }),
                e("div", {
                  css: {
                    fontSize: 12,
                    lineHeight: 1,
                    fontFamily: "Roboto",
                    padding: "16px",
                    fontWeight: 700,
                    background: "#EBECF0",
                    borderRadius: 4,
                    cursor: "pointer",
                  },
                  onClick: () => u(Ge),
                  children: "Add a little bit of body text",
                }),
              ],
            }),
            i("div", {
              css: {
                flexGrow: 1,
                overflowY: "auto",
                display: "grid",
                gridTemplateColumns: "repeat(3,minmax(0,1fr))",
                gridGap: 8,
                padding: "16px",
              },
              children: [
                t && e("div", { children: "Loading..." }),
                r.map(({ img: x, data: b }, v) =>
                  e(
                    "div",
                    {
                      css: {
                        cursor: "pointer",
                        position: "relative",
                        paddingBottom: "100%",
                        width: "100%",
                      },
                      onClick: () => u(JSON.parse(b)),
                      children: e("img", {
                        src: Ue(x),
                        css: {
                          position: "absolute",
                          top: 0,
                          left: 0,
                          height: "100%",
                          width: "100%",
                          objectFit: "cover",
                        },
                      }),
                    },
                    v
                  )
                ),
              ],
            }),
          ],
        }),
      ],
    });
  },
  $e = [
    {
      props: {
        style: "solid",
        boxSize: { height: 4 },
        color: "rgb(94, 98, 120)",
      },
      icon: e("svg", {
        fill: "currentColor",
        stroke: "currentColor",
        style: { overflow: "visible" },
        viewBox: "0 -0.5 33 1",
        xmlns: "http://www.w3.org/2000/svg",
        children: e("line", {
          fill: "none",
          strokeDasharray: "",
          strokeLinecap: "butt",
          x1: "0.5",
          x2: "32.5",
        }),
      }),
    },
    {
      props: {
        style: "shortDashes",
        boxSize: { height: 4 },
        color: "rgb(94, 98, 120)",
      },
      icon: e("svg", {
        fill: "currentColor",
        stroke: "currentColor",
        style: { overflow: "visible" },
        viewBox: "0 -0.5 33 1",
        xmlns: "http://www.w3.org/2000/svg",
        children: e("line", {
          fill: "none",
          strokeDasharray: "3,1",
          strokeLinecap: "butt",
          x1: "0.5",
          x2: "32.5",
        }),
      }),
    },
    {
      props: {
        style: "dots",
        boxSize: { height: 4 },
        color: "rgb(94, 98, 120)",
      },
      icon: e("svg", {
        fill: "currentColor",
        stroke: "currentColor",
        style: { overflow: "visible" },
        viewBox: "0 -0.5 33 1",
        xmlns: "http://www.w3.org/2000/svg",
        children: e("line", {
          fill: "none",
          strokeDasharray: "1,1",
          strokeLinecap: "butt",
          x1: "0.5",
          x2: "32.5",
        }),
      }),
    },
    {
      props: {
        style: "solid",
        arrowStart: "bar",
        arrowEnd: "bar",
        boxSize: { height: 4 },
        color: "rgb(94, 98, 120)",
      },
      icon: i("svg", {
        fill: "currentColor",
        stroke: "currentColor",
        style: { overflow: "visible" },
        viewBox: "0 -0.5 33 1",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
          e("line", {
            fill: "none",
            strokeDasharray: "",
            strokeLinecap: "butt",
            x1: "1",
            x2: "32",
          }),
          e("rect", {
            height: "4",
            rx: "0.5",
            stroke: "none",
            width: "1",
            x: "0",
            y: "-2",
          }),
          e("g", {
            transform: "translate(33)",
            children: e("rect", {
              height: "4",
              rx: "0.5",
              stroke: "none",
              width: "1",
              x: "-1",
              y: "-2",
            }),
          }),
        ],
      }),
    },
  ],
  g = ({ children: o, extraCss: s = {} }) =>
    e("div", {
      css: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        ...s,
      },
      children: o,
    }),
  Ye = [
    {
      type: "rectangle",
      width: 64,
      height: 64,
      icon: e(g, { children: e(ee, { height: "100%", width: "100%" }) }),
    },
    {
      type: "circle",
      width: 64,
      height: 64,
      icon: e(g, { children: e(te, { height: "100%", width: "100%" }) }),
    },
    {
      type: "triangle",
      width: 64,
      height: 56,
      icon: e(g, { children: e(H, { height: "100%", width: "100%" }) }),
    },
    {
      type: "triangleUpsideDown",
      width: 64,
      height: 56,
      icon: e(g, {
        extraCss: { transform: "rotate(180deg)" },
        children: e(H, { height: "100%", width: "100%" }),
      }),
    },
    {
      type: "rhombus",
      width: 64,
      height: 64,
      icon: e(g, { children: e(oe, { height: "100%", width: "100%" }) }),
    },
    {
      type: "arrowRight",
      width: 64,
      height: 64,
      icon: e(g, { children: e(ie, { height: "100%", width: "100%" }) }),
    },
    {
      type: "arrowLeft",
      width: 64,
      height: 64,
      icon: e(g, { children: e(se, { height: "100%", width: "100%" }) }),
    },
    {
      type: "arrowTop",
      width: 64,
      height: 64,
      icon: e(g, { children: e(ne, { height: "100%", width: "100%" }) }),
    },
    {
      type: "arrowBottom",
      width: 64,
      height: 64,
      icon: e(g, { children: e(re, { height: "100%", width: "100%" }) }),
    },
    {
      type: "arrowPentagon",
      width: 64,
      height: 32,
      icon: e(g, { children: e(ae, { height: "100%", width: "100%" }) }),
    },
    {
      type: "chevron",
      width: 64,
      height: 32,
      icon: e(g, { children: e(le, { height: "100%", width: "100%" }) }),
    },
    {
      type: "cross",
      width: 64,
      height: 64,
      icon: e(g, { children: e(de, { height: "100%", width: "100%" }) }),
    },
    {
      type: "parallelogram",
      width: 64,
      height: 48,
      icon: e(g, { children: e(U, { height: "100%", width: "100%" }) }),
    },
    {
      type: "parallelogramUpsideDown",
      width: 64,
      height: 48,
      icon: e(g, {
        extraCss: { transform: "scaleY(-1)" },
        children: e(U, { height: "100%", width: "100%" }),
      }),
    },
    {
      type: "trapezoid",
      width: 64,
      height: 48,
      icon: e(g, { children: e(P, { height: "100%", width: "100%" }) }),
    },
    {
      type: "trapezoidUpsideDown",
      width: 64,
      height: 48,
      icon: e(g, {
        extraCss: { transform: "rotate(180deg)" },
        children: e(P, { height: "100%", width: "100%" }),
      }),
    },
    {
      type: "pentagon",
      width: 64,
      height: 64,
      icon: e(g, { children: e(ce, { height: "100%", width: "100%" }) }),
    },
    {
      type: "hexagonVertical",
      width: 55,
      height: 64,
      icon: e(g, {
        extraCss: { transform: "rotate(90deg)" },
        children: e(F, { height: "100%", width: "100%" }),
      }),
    },
    {
      type: "hexagonHorizontal",
      width: 64,
      height: 55,
      icon: e(g, { children: e(F, { height: "100%", width: "100%" }) }),
    },
    {
      type: "octagon",
      width: 64,
      height: 64,
      icon: e(g, { children: e(he, { height: "100%", width: "100%" }) }),
    },
  ],
  Me = ({ onClose: o }) => {
    const { actions: s } = R(),
      r = (t) => {
        s.addLineLayer({ props: t });
      },
      n = (t) => {
        s.addShapeLayer({
          type: { resolvedName: "ShapeLayer" },
          props: {
            shape: t.type,
            position: { x: 0, y: 400 },
            boxSize: { width: t.width, height: t.height },
            rotate: 0,
            color: "#5E6278",
          },
        }),
          I && o();
      };
    return i("div", {
      css: {
        width: "100%",
        height: "100%",
        flexDirection: "column",
        overflowY: "auto",
        display: "flex",
      },
      children: [
        i("div", {
          css: {
            display: "flex",
            alignItems: "center",
            padding: "10px 16px",
            borderBottom: "1px solid rgba(57,76,96,.15)",
            cursor: "pointer",
          },
          onClick: o,
          children: [
            e(E, { css: { fontSize: 18, marginRight: 8 } }),
            e("span", { children: "Back" }),
          ],
        }),
        i("div", {
          css: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            height: 48,
            borderBottom: "1px solid rgba(57,76,96,.15)",
            padding: "0 20px",
          },
          children: [
            e("p", {
              css: {
                lineHeight: "48px",
                fontWeight: 600,
                color: "#181C32",
                flexGrow: 1,
              },
              children: "Shapes",
            }),
            e("div", {
              css: {
                fontSize: 20,
                flexShrink: 0,
                width: 32,
                height: 32,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              },
              onClick: o,
              children: e(A, {}),
            }),
          ],
        }),
        i("div", {
          css: { padding: "16px" },
          children: [
            e("div", {
              css: { padding: "8px 0", fontWeight: 700 },
              children: "Line",
            }),
            e("div", {
              css: {
                flexGrow: 1,
                overflowY: "auto",
                display: "grid",
                gridTemplateColumns: "repeat(4,minmax(0,1fr))",
                gridGap: 8,
              },
              children: $e.map((t, h) =>
                e(
                  "div",
                  {
                    css: {
                      width: "100%",
                      paddingBottom: "100%",
                      position: "relative",
                      cursor: "pointer",
                    },
                    onClick: () => r(t.props),
                    children: e("div", {
                      css: {
                        position: "absolute",
                        inset: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      },
                      children: t.icon,
                    }),
                  },
                  h
                )
              ),
            }),
            e("div", {
              css: { padding: "8px 0", fontWeight: 700 },
              children: "Shape",
            }),
            e("div", {
              css: {
                flexGrow: 1,
                overflowY: "auto",
                display: "grid",
                gridTemplateColumns: "repeat(4,minmax(0,1fr))",
                gridGap: 8,
              },
              children: Ye.map((t) =>
                e(
                  "div",
                  {
                    css: {
                      width: "100%",
                      paddingBottom: "100%",
                      position: "relative",
                      cursor: "pointer",
                    },
                    onClick: () => n(t),
                    children: t.icon,
                  },
                  t.type
                )
              ),
            }),
          ],
        }),
      ],
    });
  },
  _e = ({ visibility: o, onClose: s }) => {
    const r = m.useRef(null),
      { actions: n } = R(),
      [t, h] = m.useState([]),
      u = D(),
      x = async (a) => {
        const c = new Image();
        (c.onerror = (l) => window.alert(l)),
          (c.src = a),
          (c.crossOrigin = "anonymous"),
          (c.onload = () => {
            n.addImageLayer(
              { url: a, thumb: a },
              { width: c.naturalWidth, height: c.naturalHeight }
            ),
              I && s();
          });
      },
      b = async (a) => {
        var w;
        const c = await ge(a),
          l =
            ((w = c.getAttribute("viewBox")) == null ? void 0 : w.split(" ")) ||
            [],
          d = l.length === 4 ? +l[2] : +(c.getAttribute("width") || 100),
          p = l.length === 4 ? +l[3] : +(c.getAttribute("height") || 100);
        n.addSvgLayer(a, { width: d, height: p }, c), I && s();
      };
    return i("div", {
      css: {
        width: "100%",
        height: "100%",
        flexDirection: "column",
        overflowY: "auto",
        display: o ? "flex" : "none",
      },
      children: [
        i("div", {
          css: {
            display: "flex",
            alignItems: "center",
            padding: "10px 16px",
            borderBottom: "1px solid rgba(57,76,96,.15)",
            cursor: "pointer",
          },
          onClick: s,
          children: [
            e(E, { css: { fontSize: 18, marginRight: 8 } }),
            e("span", { children: "Back" }),
          ],
        }),
        i("div", {
          css: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            height: 48,
            borderBottom: "1px solid rgba(57,76,96,.15)",
            padding: "0 20px",
          },
          children: [
            e("p", {
              css: {
                lineHeight: "48px",
                fontWeight: 600,
                color: "#181C32",
                flexGrow: 1,
              },
              children: "Upload Images",
            }),
            e("div", {
              css: {
                fontSize: 20,
                flexShrink: 0,
                width: 32,
                height: 32,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              },
              onClick: s,
              children: e(A, {}),
            }),
          ],
        }),
        e("div", {
          css: {
            margin: 16,
            background: "#3a3a4c",
            borderRadius: 8,
            color: "#fff",
            padding: "8px 16px",
            cursor: "pointer",
            textAlign: "center",
          },
          onClick: () => {
            var a;
            return (a = r.current) == null ? void 0 : a.click();
          },
          children: "Upload",
        }),
        e("input", {
          ref: r,
          type: "file",
          accept: "image/*",
          css: { display: "none" },
          onChange: async (a) => {
            const c = a.target.files && a.target.files[0],
              l = 2 * 1024 * 1024;
            if (c) {
              if (c.size > l) {
                u(pe("File size exceeds 2MB. Please upload a smaller file."));
                return;
              }
              try {
                const d = new FileReader();
                (d.onloadend = () => {
                  h((p) => p.concat([{ url: d.result, type: "image" }]));
                }),
                  (d.onerror = (p) => {
                    console.error("Error reading file:", p);
                  }),
                  d.readAsDataURL(c);
              } catch (d) {
                console.error("Error resizing file:", d);
              }
            }
          },
        }),
        e("div", {
          css: { padding: "16px" },
          children: e("div", {
            css: {
              flexGrow: 1,
              overflowY: "auto",
              display: "grid",
              gridTemplateColumns: "repeat(2,minmax(0,1fr))",
              gridGap: 8,
            },
            children: t.map((a, c) =>
              i(
                "div",
                {
                  css: { cursor: "pointer", position: "relative" },
                  onClick: () => (a.type === "image" ? x(a.url) : b(a.url)),
                  children: [
                    e("div", { css: { paddingBottom: "100%", height: 0 } }),
                    e("div", {
                      css: {
                        position: "absolute",
                        inset: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      },
                      children: e("img", {
                        src: a.url,
                        loading: "lazy",
                        css: { maxHeight: "100%" },
                      }),
                    }),
                  ],
                },
                c
              )
            ),
          }),
        }),
      ],
    });
  },
  W = [
    { name: "Text", icon: e(fe, {}) },
    { name: "Shape", icon: e(ue, {}) },
    { name: "Upload", icon: e(xe, {}) },
  ],
  Ke = ({ activeTab: o, setTab: s }) => {
    const { actions: r } = R(),
      n = y((t) => t.auth.authUser && t.auth.authUser.role === "admin");
    return i("div", {
      css: {
        display: "flex",
        zIndex: 2,
        position: "relative",
        backgroundColor: "#ffffff",
        borderRight: "1px solid rgba(217, 219, 228, 0.6)",
      },
      children: [
        i("div", {
          css: { display: "flex" },
          children: [
            e(He, {
              tabs: n
                ? W
                : W.filter(
                    (t) => !["Template", "Video", "Image"].includes(t.name)
                  ),
              active: o,
              onChange: (t, h) => {
                r.setSidebar(), s(h);
              },
            }),
            o &&
              i("div", {
                css: {
                  width: 360,
                  "@media (max-width: 900px)": {
                    width: "100%",
                    position: "fixed",
                    bottom: 0,
                    left: 0,
                    top: 0,
                    background: "#fff",
                  },
                },
                children: [
                  o === "Text" &&
                    e(We, {
                      onClose: () => {
                        s(null), r.setSidebar();
                      },
                    }),
                  o === "Shape" &&
                    e(Me, {
                      onClose: () => {
                        s(null), r.setSidebar();
                      },
                    }),
                  e(_e, {
                    visibility: o === "Upload",
                    onClose: () => {
                      s(null), r.setSidebar();
                    },
                  }),
                ],
              }),
          ],
        }),
        e("div", {
          css: {
            width: 360,
            position: "absolute",
            overflow: "hidden",
            top: 0,
            left: 73,
            height: "100%",
            pointerEvents: "none",
          },
          id: "settings",
        }),
      ],
    });
  },
  qe = Ke,
  Je = (o) => {
    const { pageData: s, setTab: r } = o,
      { query: n } = R(),
      t = D(),
      h = o.id,
      u = o.designName,
      x = o.category,
      b = o.keywords,
      v = o.description,
      a = y(
        (d) =>
          d.auth.authUser && d.auth.authUser.active && !d.auth.authUser.ended
      ),
      c = m.useCallback(
        (d) => {
          // if (!a) {
          //   t(k(!1)),
          //     alert(
          //       "Sorry, this feature is only available to PRO users. GO PRO to upgrade!"
          //     );
          //   return;
          // }
          t(k(!0));
          let p = JSON.parse(JSON.stringify(n.serialize()));
          for (let w = 0; w < p.length; w++)
            Object.keys(p[w].layers).forEach((S) => {
              p[w].layers[S].waterMark &&
                (delete p[w].layers[S],
                (p[w].layers.ROOT.child = p[w].layers.ROOT.child.filter(
                  (B) => B !== S
                )));
            });
          t(me(h, u, x, b, v, d, p)).finally(() => {
            t(k(!1));
          });
        },
        [h, u, x, b, v, n]
      ),
      l = m.useMemo(() => {
        const d = s || be;
        return a ? d : we(JSON.parse(JSON.stringify(d)));
      }, [a, s]);
    return e(ye, { setTab: r, data: l, onSavedThumbnail: c });
  },
  Ve = Je,
  Xe = () => {
    const { selectedLayerIds: o } = ve();
    return e("div", {
      css: {
        background: "white",
        borderBottom: "1px solid rgba(57,76,96,.15)",
        height: 50,
        overflowX: "auto",
        flexShrink: 0,
        "@media (max-width: 900px)": {
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          background: "#fff",
          display: o.length > 0 ? "flex" : "none",
          justifyContent: "center",
          zIndex: 20,
          height: 72,
        },
      },
      children: e(Ce, {}),
    });
  },
  Ze = Xe,
  Qe = {
    designName: {
      label: "Design Name",
      placeholder: "Enter your design name.",
      rules: [{ rule: "required", message: "This field is required" }],
    },
  };
function ot() {
  const o = m.useRef(null),
    [s, r] = m.useState(!1),
    n = Re(Qe),
    t = Se(),
    [h, u] = m.useState(null),
    {
      state: {
        pageData: x,
        curDesignId: b,
        curDesignName: v,
        curCategory: a,
        curKeywords: c,
        curDescription: l,
      },
    } = t;
  m.useEffect(() => {
    C(ke(b)), C(G(v)), C(Ie(a)), C(De(c)), C(Be(l));
  }, []);
  const d = y((f) => f.designs.curDesignId),
    p = y((f) => f.designs.curDesignName),
    w = y((f) => f.designs.curCategory),
    S = y((f) => f.designs.curKeywords),
    B = y((f) => f.designs.curDescription),
    C = D(),
    Y = m.useCallback((f) => {
      const K = (N) => {
        const z = new URLSearchParams();
        return (
          Object.entries(N).forEach(([O, L]) => {
            Te.isArray(L) ? L.forEach((q) => z.append(O, q)) : z.append(O, L);
          }),
          z
        );
      };
      return $.get(`/api/v1/fonts?${K(f)}`).then((N) => N.data);
    }, []),
    [T, M] = m.useState();
  m.useEffect(() => {
    const f = () => {
      M(window.innerHeight - 80);
    };
    return (
      window.addEventListener("resize", f),
      f(),
      () => {
        window.removeEventListener("resize", f);
      }
    );
  }, []);
  const _ = (f) => {
    f.preventDefault(), C(G(n.getField("designName").getValue())), r(!1);
  };
  return e(Ee, {
    children: i("div", {
      className: "block relative",
      children: [
        e(Ne, {
          config: {
            assetPath: "/assets",
            frame: {
              defaultImage: {
                url: "/assets/images/frame-placeholder.png",
                width: 1200,
                height: 800,
              },
            },
          },
          getFonts: Y,
          children: i("div", {
            css: {
              display: "flex",
              flexDirection: "column",
              width: "100vw",
              height: "100vh",
              maxHeight: T ? `${T}px` : "auto",
            },
            children: [
              e(je, {
                curDesignName: p,
                openChangeName: () => {
                  n.getField("designName").setValue(p), r(!0);
                },
              }),
              i("div", {
                css: {
                  display: "flex",
                  flexDirection: "row",
                  flex: "auto",
                  overflow: "auto",
                  background: "#EBECF0",
                  "@media (max-width: 900px)": {
                    flexDirection: "column-reverse",
                  },
                },
                children: [
                  e("div", {
                    ref: o,
                    css: { display: "flex", background: "white" },
                    children: e(qe, { activeTab: h, setTab: u }),
                  }),
                  i("div", {
                    css: {
                      flexGrow: 1,
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      overflow: "auto",
                    },
                    children: [
                      e(Ze, {}),
                      e("div", {
                        css: {
                          flexGrow: 1,
                          overflow: "auto",
                          display: "flex",
                          flexDirection: "column",
                        },
                        children: e(Ve, {
                          id: d,
                          pageData: x,
                          designName: p,
                          category: w,
                          keywords: S,
                          description: B,
                          setTab: u,
                        }),
                      }),
                      e("div", {
                        css: {
                          height: 40,
                          background: "#fff",
                          borderTop: "1px solid rgba(57,76,96,.15)",
                          display: "grid",
                          alignItems: "center",
                          flexShrink: 0,
                          "@media (max-width: 900px)": { display: "none" },
                        },
                        children: e(ze, {}),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
        e(Le, {
          open: s,
          onClosed: r,
          children: i("div", {
            className: "px-6 py-6 lg:px-8",
            children: [
              e("h3", {
                className:
                  "mb-4 text-xl font-medium text-gray-900 dark:text-white",
                children: "Change Design Name",
              }),
              i("form", {
                className: "space-y-6",
                action: "#",
                children: [
                  e("div", {
                    children: e(
                      Ae,
                      {
                        extra: "mb-3",
                        field: n.getField("designName"),
                        showLabel: !0,
                      },
                      "designName"
                    ),
                  }),
                  e("button", {
                    onClick: _,
                    className:
                      "w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center",
                    children: "Change",
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    }),
  });
}
export { ot as default };
