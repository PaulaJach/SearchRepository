(this["webpackJsonpnew-github-search"]=this["webpackJsonpnew-github-search"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(6),c=n.n(r),l=n(1),i=n(2),u=n(4),s=n(3),h=n(5),m=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(o)))).onInputChange=function(e){n.setState({keyword:e.target.value})},n.onButtonSubmit=function(e){e.preventDefault(),n.search()},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"search",value:function(){var e="https://api.github.com/search/repositories?q=".concat(this.state.keyword);console.log("state",this.state),fetch(e,{method:"GET",headers:{Accept:"application.json"}}).then((function(e){return console.log(e.json())})).catch((function(e){return console.log("Error:"+e)}))}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("form",{className:"formGroup"},o.a.createElement("input",{type:"text",placeholder:"search repository",onChange:this.onInputChange}),o.a.createElement("button",{onClick:this.onButtonSubmit},"Submit")))}}]),t}(o.a.Component),d=document.getElementById("modal"),p=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).element=document.createElement("div"),n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){d.appendChild(this.element)}},{key:"componentWillUnmount",value:function(){d.removeChild(this.element)}},{key:"render",value:function(){return Object(r.createPortal)(this.props.children,this.element)}}]),t}(o.a.Component),b=function(){return o.a.createElement("div",null,o.a.createElement("h3",null,"List"),o.a.createElement("p",null,"item"),o.a.createElement("p",null,"item"),o.a.createElement("button",null,"X"))},f=(n(13),function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).toggleModal=function(){n.setState({showModal:!n.state.showModal})},n.state={keyword:"",showModal:!1,showRepositories:[]},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state.showModal;return o.a.createElement("div",null,o.a.createElement("h1",null,"Search Repository on Github"),o.a.createElement(m,{keyword:this.state.keyword}),o.a.createElement("button",{onClick:this.toggleModal},e?"Close Modal":"Open Modal"),e?o.a.createElement(p,{className:"modal"},o.a.createElement(b,null)):null)}}]),t}(o.a.Component));c.a.render(o.a.createElement(f,null),document.getElementById("root"))},8:function(e,t,n){e.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.c43d8ed2.chunk.js.map