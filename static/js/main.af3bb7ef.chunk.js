(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{14:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__3GUDF",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__29qd4"}},15:function(e,t,a){e.exports={Overlay:"Modal_Overlay__5Owj1",Modal:"Modal_Modal__3rxuH"}},26:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__gUMwJ"}},28:function(e,t,a){e.exports={Button:"Button_Button__3MqSI"}},33:function(e,t,a){},35:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(10),o=a.n(c),l=(a(33),a(8)),s=a.n(l),u=a(17),i=a(11),m=a(4),h=a(5),d=a(7),p=a(6),b=(a(35),a(9)),j=a.n(b),g=a(0),f=function(e){var t=e.onClick;return Object(g.jsx)("header",{className:j.a.Searchbar,children:Object(g.jsxs)("form",{className:j.a.SearchForm,onSubmit:function(e){e.preventDefault(),t(e.target.elements.request.value)},children:[Object(g.jsx)("button",{type:"submit",className:j.a.SearchFormButton,children:Object(g.jsx)("span",{className:j.a.SearchFormButtonLabel,children:"Search"})}),Object(g.jsx)("input",{className:j.a.SearchFormInput,name:"request",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})},S=a(26),O=a.n(S),y=a(14),v=a.n(y),I=function(e){var t=e.data,a=e.onSelect;return Object(g.jsx)(g.Fragment,{children:t.map((function(e){return Object(g.jsx)("li",{className:v.a.ImageGalleryItem,children:Object(g.jsx)("img",{onClick:function(){return a(e.webformatURL)},src:e.largeImageURL,alt:e.tags,className:v.a.ImageGalleryItemImage})},e.id)}))})},x=function(e){var t=e.data,a=e.onSelect;return Object(g.jsx)("ul",{className:O.a.ImageGallery,children:Object(g.jsx)(I,{data:t,onSelect:a})})},_=a(15),k=a.n(_),w=document.querySelector("#modal-root"),q=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&(console.log("\u041d\u0430\u0436\u0430\u043b\u0438 ESC, \u043d\u0443\u0436\u043d\u043e \u0437\u0430\u043a\u0440\u044b\u0442\u044c \u043c\u043e\u0434\u0430\u043b\u043a\u0443"),e.props.modalToggle(null))},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.modalToggle(null)},e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(c.createPortal)(Object(g.jsx)("div",{className:k.a.Overlay,onClick:this.handleBackdropClick,children:Object(g.jsx)("div",{className:k.a.Modal,children:Object(g.jsx)("img",{src:this.props.link,alt:""})})}),w)}}]),a}(n.Component),F=a(27),B=a.n(F),C=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){return Object(g.jsx)(B.a,{type:"ThreeDots",color:"#999999",height:100,width:100})}}]),a}(n.Component),G=a(28),N=a.n(G),M=function(e){var t=e.onClick;return Object(g.jsx)("button",{type:"button",className:N.a.Button,onClick:t,children:"Load more"})},L=a(16),D=a.n(L);D.a.defaults.baseURL="https://pixabay.com/api/";var U=function(){var e=Object(i.a)(s.a.mark((function e(t,a){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.a.get("?key=".concat("16347216-fb50075837ded8f23f3479d31","&q=").concat(t,"&page=").concat(a));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),E=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={allImages:[],selectedImage:null,reqStatus:null,request:"",page:1},e.handleSelectImage=function(t){e.setState({selectedImage:t})},e.handleSubmit=function(t){e.setState({allImages:[],request:t})},e.loadMore=function(){e.setState((function(e){return{page:e.page+1}})),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})},e}return Object(h.a)(a,[{key:"componentDidUpdate",value:function(){var e=Object(i.a)(s.a.mark((function e(t,a){var n,r,c,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=this.state,r=n.request,c=n.page,a.request===r&&a.page===c){e.next=8;break}return this.setState({reqStatus:"loading"}),e.next=5,U(r,c);case 5:o=e.sent,this.setState((function(e){return{allImages:[].concat(Object(u.a)(e.allImages),Object(u.a)(o.hits))}})),this.setState({reqStatus:null});case 8:case"end":return e.stop()}}),e,this)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.allImages,a=e.selectedImage,n=e.reqStatus,r=Boolean(t.length);return Object(g.jsxs)("div",{className:"App",children:[Object(g.jsx)(f,{onClick:this.handleSubmit}),Object(g.jsx)(x,{data:t,onSelect:this.handleSelectImage}),a&&Object(g.jsx)(q,{link:a,modalToggle:this.handleSelectImage}),r&&!n&&Object(g.jsx)(M,{onClick:this.loadMore}),n&&Object(g.jsx)(C,{})]})}}]),a}(n.Component),T=E;o.a.render(Object(g.jsx)(r.a.StrictMode,{children:Object(g.jsx)(T,{})}),document.getElementById("root"))},9:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__2HVqv",SearchForm:"Searchbar_SearchForm__nN4gd",SearchFormButton:"Searchbar_SearchFormButton__2r3xm",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__2yVSG",SearchFormInput:"Searchbar_SearchFormInput__1Ruv0"}}},[[76,1,2]]]);
//# sourceMappingURL=main.af3bb7ef.chunk.js.map