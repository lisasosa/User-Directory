(this["webpackJsonpuser-directory"]=this["webpackJsonpuser-directory"]||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(3),c=a.n(l),o=(a(13),a(4)),s=a(5),u=a(7),i=a(6),m=a(1);var h=function(e){return r.a.createElement("div",{className:"People"},r.a.createElement("table",null,r.a.createElement("tbody",null,e.results.map((function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("td",null,r.a.createElement("img",{src:e.picture.thumbnail,alt:"person-pic"})),r.a.createElement("td",null,e.name.first," ",e.name.last),r.a.createElement("td",null,e.cell),r.a.createElement("td",null,e.email),r.a.createElement("td",null,m(e.dob.date).format("l")))})))))},d=(a(15),function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).search=function(e){console.log(e.target.value),n.setState({searchValue:e.target.value})},n.state={searchValue:"",results:[]},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://randomuser.me/api/?results=50").then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({results:t.results})}))}},{key:"render",value:function(){var e=this.state.results,t=this.state.searchValue.toLowerCase();return t&&(e=e.filter((function(e){return(e.name.first+" "+e.name.last).toLowerCase().includes(t)}))),r.a.createElement("div",{className:"App"},r.a.createElement("label",{htmlFor:"search"},"Search by Name:"),r.a.createElement("input",{onKeyUp:this.search}),r.a.createElement(h,{results:e}))}}]),a}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports=a(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.a524586d.chunk.js.map