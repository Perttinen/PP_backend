(this.webpackJsonpppnet=this.webpackJsonpppnet||[]).push([[0],{20:function(e,t,n){},21:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var r=n(0),d=n(2),c=n.n(d),i=n(12),a=n.n(i),l=(n(20),n(14)),s=(n(21),n(13)),g=n.n(s),o=function(e){return Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:e.loadingDate}),Object(r.jsx)("td",{children:e.orderId}),Object(r.jsx)("td",{children:e.buildingSite}),Object(r.jsx)("td",{children:e.cadorKg}),Object(r.jsx)("td",{children:e.permaticKg}),Object(r.jsx)("td",{children:e.perfektKg}),Object(r.jsx)("td",{children:e.syntaxKg}),Object(r.jsx)("td",{children:e.ympyratKg}),Object(r.jsx)("td",{children:e.conceptKg}),Object(r.jsx)("td",{children:e.minisyntaxKg}),Object(r.jsx)("td",{children:e.formatKg}),Object(r.jsx)("td",{children:e.progressKg})]},e.orderId+e.loadingDate)},j=function(e,t){for(var n={Cador:null,Permatic:null,Perfekt:null,Syntax:null,"Ympyr\xe4t":null,Concept:null,MiniSyntax:null,Format:null,Progress:null},d=0;d<t.length;d++)t[d].loadingDate.includes(e)&&(n.Cador+=t[d].cadorKg,n.Permatic+=t[d].permaticKg,n.Perfekt+=t[d].perfektKg,n.Syntax+=t[d].syntaxKg,n.Ympyr\u00e4t+=t[d].ympyratKg,n.Concept+=t[d].conceptKg,n.MiniSyntax+=t[d].minisyntaxKg,n.Format+=t[d].formatKg,n.Progress+=t[d].progressKg);for(var c=0;c<Object.keys(n).length;c++)0===n[Object.keys(n)[c]]&&(n[Object.keys(n)[c]]=null);return Object(r.jsxs)("tr",{className:"sumLine",children:[Object(r.jsx)("td",{children:""}),Object(r.jsx)("td",{children:""}),Object(r.jsx)("td",{children:""}),Object(r.jsx)("td",{children:n.Cador}),Object(r.jsx)("td",{children:n.Permatic}),Object(r.jsx)("td",{children:n.Perfekt}),Object(r.jsx)("td",{children:n.Syntax}),Object(r.jsx)("td",{children:n.Ympyr\u00e4t}),Object(r.jsx)("td",{children:n.Concept}),Object(r.jsx)("td",{children:n.MiniSyntax}),Object(r.jsx)("td",{children:n.Format}),Object(r.jsx)("td",{children:n.Progress})]},e)},h=function(e){var t,n=e.data,d=[];d[0]=o(n[0]);for(var c=1;c<n.length;c++)n[c].loadingDate!==n[c-1].loadingDate&&(d=d.concat(j(n[c-1].loadingDate,n))),d=n[c].loadingDate===n[c-1].loadingDate?d.concat((t=n[c],Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:""}),Object(r.jsx)("td",{children:t.orderId}),Object(r.jsx)("td",{children:t.buildingSite}),Object(r.jsx)("td",{children:t.cadorKg}),Object(r.jsx)("td",{children:t.permaticKg}),Object(r.jsx)("td",{children:t.perfektKg}),Object(r.jsx)("td",{children:t.syntaxKg}),Object(r.jsx)("td",{children:t.ympyratKg}),Object(r.jsx)("td",{children:t.conceptKg}),Object(r.jsx)("td",{children:t.minisyntaxKg}),Object(r.jsx)("td",{children:t.formatKg}),Object(r.jsx)("td",{children:t.progressKg})]},t.orderId+t.loadingDate))):d.concat(o(n[c])),c===n.length-1&&(d=d.concat(j(n[c].loadingDate,n)));return d},u=function(e){var t=e.data;if(t.length>1){var n=x(t);return Object(r.jsxs)("table",{children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{width:"7%",children:"PVM"}),Object(r.jsx)("th",{width:"7%",children:"Tilausnro"}),Object(r.jsx)("th",{width:"15%",children:"Kohde"}),Object(r.jsx)("th",{children:"Cador"}),Object(r.jsx)("th",{children:"Tupla"}),Object(r.jsx)("th",{children:"P\xf6yt\xe4"}),Object(r.jsx)("th",{children:"Syntax"}),Object(r.jsx)("th",{children:"Ympyr\xe4t"}),Object(r.jsx)("th",{children:"Concept"}),Object(r.jsx)("th",{children:"Mini-Syntax"}),Object(r.jsx)("th",{children:"Format"}),Object(r.jsx)("th",{children:"Progress"})]})}),Object(r.jsx)("tbody",{children:Object(r.jsx)(h,{data:n})})]})}return"Ladataan..."},x=function(e){if(e.length>1){for(var t=[],n=0;n<e.length;n++)if(""!==e[n].building_site&&!e[n].order_id.includes("ai")){var r={loadingDate:e[n].loading_date,orderId:e[n].order_id,buildingSite:e[n].building_site,cadorKg:void 0===e[n].cador_kg||0===e[n].cador_kg?null:Math.round(e[n].cador_kg),conceptKg:void 0===e[n].concept_kg||0===e[n].concept_kg?null:Math.round(e[n].concept_kg),formatKg:void 0===e[n].format_kg||0===e[n].format_kg?null:Math.round(e[n].format_kg),manualShearKg:void 0===e[n].manual_shear_kg||0===e[n].manual_shear_kg?null:Math.round(e[n].manual_shear_kg),minisyntaxKg:void 0===e[n].minisyntax_kg||0===e[n].minisyntax_kg?null:Math.round(e[n].minisyntax_kg),perf2Kg:void 0===e[n].perf2_kg||0===e[n].perf2_kg?null:Math.round(e[n].perf2_kg),perfKg:void 0===e[n].perf_kg||0===e[n].perf_kg?null:Math.round(e[n].perf_kg),permaticKg:void 0===e[n].permatic_kg||0===e[n].permatic_kg?null:Math.round(e[n].permatic_kg),progressKg:void 0===e[n].progress_kg||0===e[n].progress_kg?null:Math.round(e[n].progress_kg),radiusBenderKg:void 0===e[n].radius_bender_kg||0===e[n].radius_bender_kg?null:Math.round(e[n].radius_bender_kg),spiralKg:void 0===e[n].spiral_kg||0===e[n].spiral_kg?null:Math.round(e[n].spiral_kg),syntaxKg:void 0===e[n].syntax_kg||0===e[n].syntax_kg?null:Math.round(e[n].syntax_kg),perf3Kg:void 0===e[n].perf3_kg||0===e[n].perf3_kg?null:Math.round(e[n].perf3_kg)},d=r.perfKg+r.perf2Kg+r.perf3Kg;delete r.perfKg,delete r.perf2Kg,delete r.perf3Kg,r.perfektKg=0===d?null:d;var c=r.radiusBenderKg+r.spiralKg;delete r.radiusBenderKg,delete r.spiralKg,r.ympyratKg=0===c?null:c,t.push(r)}return t=t.sort((function(e,t){return e.loadingDate.replaceAll("-","")-t.loadingDate.replaceAll("-","")}))}},b=function(){var e=Object(d.useState)([]),t=Object(l.a)(e,2),n=t[0],c=t[1];return Object(d.useEffect)((function(){setInterval((function(){g.a.get("http://s237-0075:3005/indalgo/management/optimizer/production_report.json").then((function(e){c(e.data)}))}),2e4)}),[]),Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:"STEELNET"}),Object(r.jsx)(u,{data:n})]})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,40)).then((function(t){var n=t.getCLS,r=t.getFID,d=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),d(e),c(e),i(e)}))};a.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(b,{})}),document.getElementById("root")),p()}},[[39,1,2]]]);
//# sourceMappingURL=main.58927ca4.chunk.js.map