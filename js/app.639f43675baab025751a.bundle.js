(self.webpackChunk=self.webpackChunk||[]).push([[524],{44:(e,t,o)=>{const s=o(89),{lightningChart:n,PointShape:a,ColorCSS:l,SolidLine:i,SolidFill:r,Themes:d}=s,c=n().ChartXY({theme:d[new URLSearchParams(window.location.search).get("theme")||"darkGold"]||void 0}).setTitle(""),h=c.addPointSeries({pointShape:a.Square}).setPointSize(1).setCursorEnabled(!1).setName("Scatter series"),S=c.addPolygonSeries().setCursorEnabled(!1);fetch(new URL(document.head.baseURI).origin+new URL(document.head.baseURI).pathname+"examples/assets/0016/data-largeScatterChartXY.json").then((e=>e.json())).then((e=>{console.log(e);const{scatterPoints:t,confidenceEllipsePolygonCoords:o}=e;c.setTitle(`Scatter chart (${(e.scatterPoints.length/10**6).toFixed(1)} million points) + confidence Ellipse`),h.add(t),S.add(o).setFillStyle(new r({color:l("gray").setA(30)})).setStrokeStyle(new i({thickness:1,fillStyle:new r({color:l("white")})}))}))}},e=>{e.O(0,[502],(()=>(44,e(e.s=44)))),e.O()}]);