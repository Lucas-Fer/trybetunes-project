(this["webpackJsonptrybetunes-project"]=this["webpackJsonptrybetunes-project"]||[]).push([[0],{31:function(t,e,n){},39:function(t,e,n){"use strict";n.r(e);var a=n(1),i=n.n(a),r=n(23),c=n.n(r),s=(n(31),n(2)),o=n(3),u=n(5),l=n(4),d=n(11),j=n(6),b=n(14),h=n(0),p=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(h.jsx)("div",{children:"Carregando..."})}}]),n}(a.Component),m=n(12),f="user",O=function(t){return localStorage.setItem(f,JSON.stringify(t))},v=function(t){return function(e){setTimeout((function(){e(t)}),1500)}},g=function(){return new Promise((function(t){var e=JSON.parse(localStorage.getItem(f));null===e&&(e={}),v(e)(t)}))},x=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;return Object(s.a)(this,n),(t=e.call(this)).handleUserApi=function(){var e=t.state.user;t.setState({loading:!0},(function(){(function(t){return new Promise((function(e){O(Object(m.a)(Object(m.a)({},{name:"",email:"",image:"",description:""}),t)),v("OK")(e)}))})(e).then((function(){return t.setState({loading:!1,userLogin:!0})}))}))},t.state={user:{name:""},buttonLoginDisable:!0,loading:!1,userLogin:!1},t.handleInputValue=t.handleInputValue.bind(Object(b.a)(t)),t}return Object(o.a)(n,[{key:"handleInputValue",value:function(t){var e=this,n=t.target.value;this.setState((function(){return{user:{name:n}}}),(function(){return n.length>=3?e.setState({buttonLoginDisable:!1}):e.setState({buttonLoginDisable:!0})}))}},{key:"render",value:function(){var t=this.state,e=t.user.name,n=t.buttonLoginDisable,a=t.loading,i=t.userLogin,r=this.handleInputValue,c=this.handleUserApi;return Object(h.jsxs)("form",{"data-testid":"page-login",children:[a&&Object(h.jsx)(p,{}),i&&Object(h.jsx)(j.a,{to:"/search"}),Object(h.jsxs)("div",{children:[Object(h.jsx)("label",{htmlFor:"login-name-input",children:Object(h.jsx)("input",{"data-testid":"login-name-input",type:"text",name:"inputText",id:"inputText",onChange:r,value:e})}),Object(h.jsx)("button",{"data-testid":"login-submit-button",name:"inputButton",id:"inputButton",type:"button",disabled:n,onClick:c,children:"Entrar"})]})]})}}]),n}(a.Component),k=n(15),S=n.n(k),y=n(18),D=function(){var t=Object(y.a)(S.a.mark((function t(e){var n,a,i,r,c,s;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=encodeURI(e).replaceAll("%20","+"),a="https://itunes.apple.com/search?entity=album&term=".concat(n,"&attribute=allArtistTerm"),t.next=4,fetch(a);case 4:return i=t.sent,t.next=7,i.json();case 7:return r=t.sent,c=r.results,s=c.map((function(t){return{artistId:t.artistId,artistName:t.artistName,collectionId:t.collectionId,collectionName:t.collectionName,collectionPrice:t.collectionPrice,artworkUrl100:t.artworkUrl100,releaseDate:t.releaseDate,trackCount:t.trackCount}})),t.abrupt("return",s);case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),I=D,C=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var t=this.props.allData;return Object(h.jsxs)("main",{children:[Object(h.jsx)("h2",{children:"Lista de \xe1lbuns"}),t.map((function(t){var e=t.artistName,n=t.collectionId,a=t.collectionName;return Object(h.jsxs)("div",{children:[Object(h.jsx)("h4",{children:e}),Object(h.jsx)("span",{children:a}),Object(h.jsx)(d.b,{"data-testid":"link-to-album-".concat(n),to:"/album/".concat(n),children:"P\xe1gina do \xe1lbum"})]},n)}))]})}}]),n}(a.Component),N=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;return Object(s.a)(this,n),(t=e.call(this)).handleClick=function(){var e=t.state.inputValue;t.setState({loading:!0}),I(e).then((function(n){n.length?t.setState({loading:!1,allData:n,inputValue:"",messageResult:"Resultado de \xe1lbuns de: ".concat(e)}):t.setState({messageResult:"Nenhum \xe1lbum foi encontrado",loading:!1,allData:n,inputValue:""})}))},t.state={inputValue:"",isDisable:!0,messageResult:"",loading:!1,allData:[]},t.handleChange=t.handleChange.bind(Object(b.a)(t)),t}return Object(o.a)(n,[{key:"handleChange",value:function(t){var e=this,n=t.target.value;this.setState({inputValue:n},(function(){return n.length>=2?e.setState({isDisable:!1}):e.setState({isDisable:!0})}))}},{key:"render",value:function(){var t=this.state,e=t.inputValue,n=t.isDisable,a=t.messageResult,i=t.loading,r=t.allData,c=this.handleChange,s=this.handleClick;return Object(h.jsxs)("div",{children:[i?Object(h.jsx)(p,{}):Object(h.jsxs)("div",{"data-testid":"page-search",children:[Object(h.jsx)("label",{htmlFor:"inputValue",children:Object(h.jsx)("input",{"data-testid":"search-artist-input",type:"text",name:"nameArtist",id:"inputValue",onChange:c,value:e})}),Object(h.jsx)("button",{disabled:n,"data-testid":"search-artist-button",type:"button",onClick:s,children:"Pesquisar"})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("p",{children:a}),Object(h.jsx)(C,{allData:r})]})]})}}]),n}(a.Component),w=n(26),F="favorite_songs";JSON.parse(localStorage.getItem(F))||localStorage.setItem(F,JSON.stringify([]));var M=function(){return JSON.parse(localStorage.getItem(F))},P=function(t){return localStorage.setItem(F,JSON.stringify(t))},U=function(t){return function(e){setTimeout((function(){e(t)}),500)}},A=function(){return new Promise((function(t){var e=M();U(e)(t)}))},V=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;return Object(s.a)(this,n),(t=e.call(this)).getFavoriteMusic=function(e){var n=t.props.trackId;e.some((function(t){return t.trackId===n}))&&t.setState({favorite:!0})},t.handleFavoriteMusic=function(e){var n=e.target.checked,a=t.props.allData,i=t.props.handleFavoriteMusicTwo;n?t.setState({favorite:!0,loading:!0},(function(){var e;(e=a,new Promise((function(t){if(e){var n=M();P([].concat(Object(w.a)(n),[e]))}U("OK")(t)}))).then((function(){return t.setState({loading:!1},i)}))})):t.setState({favorite:!1,loading:!0},(function(){var e;(e=a,new Promise((function(t){var n=M();P(n.filter((function(t){return t.trackId!==e.trackId}))),U("OK")(t)}))).then((function(){return t.setState({loading:!1},i)}))}))},t.state={favorite:!1,loading:!1},t}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var t=this;A().then((function(e){return t.getFavoriteMusic(e)}))}},{key:"render",value:function(){var t=this.props,e=t.trackName,n=t.trackId,a=t.previewUrl,i=this.state,r=i.favorite,c=i.loading,s=this.handleFavoriteMusic;return Object(h.jsxs)("div",{children:[Object(h.jsx)("h3",{children:e}),Object(h.jsxs)("audio",{"data-testid":"audio-component",src:a,controls:!0,children:[Object(h.jsx)("track",{kind:"captions"}),"O seu navegador n\xe3o suporta o elemento"," ",Object(h.jsx)("code",{children:"audio"}),"."]}),Object(h.jsx)("label",{htmlFor:"inputFavorite-".concat(e),children:c?Object(h.jsx)(p,{}):Object(h.jsxs)(h.Fragment,{children:["Favorita",Object(h.jsx)("input",{type:"checkbox","data-testid":"checkbox-music-".concat(n),id:"inputFavorite-".concat(e),checked:r,onChange:s})]})})]})}}]),n}(a.Component),T=function(){var t=Object(y.a)(S.a.mark((function t(e){var n,a;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://itunes.apple.com/lookup?id=".concat(e,"&entity=song"));case 2:return n=t.sent,t.next=5,n.json();case 5:return a=t.sent,t.abrupt("return",a.results);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),E=T,L=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(t){var a;Object(s.a)(this,n),a=e.call(this);var i=t.match.params.id;return a.state={idAlbum:i,dataAlbum:[],albumArtistName:"",collectionName:""},a}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var t=this,e=this.state.idAlbum;E(e).then((function(e){t.setState({dataAlbum:e,albumArtistName:e[0].artistName,collectionName:e[0].collectionName})}))}},{key:"render",value:function(){var t=this.state,e=t.albumArtistName,n=t.collectionName,a=t.dataAlbum;return Object(h.jsxs)("section",{"data-testid":"page-album",children:[Object(h.jsx)("h3",{"data-testid":"artist-name",children:e}),Object(h.jsx)("p",{"data-testid":"album-name",children:n}),a.map((function(t){return t.trackName&&Object(h.jsx)(V,{trackName:t.trackName,trackId:t.trackId,previewUrl:t.previewUrl,allData:t},t.trackId)}))]})}}]),n}(a.Component),J=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;return Object(s.a)(this,n),(t=e.call(this)).handleFavoriteMusicTwo=function(){t.setState({loading:!0},(function(){A().then((function(e){return t.setState({favoriteSongData:e,loading:!1})}))}))},t.state={favoriteSongData:[],loading:!1},t}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.handleFavoriteMusicTwo()}},{key:"render",value:function(){var t=this.state,e=t.favoriteSongData,n=t.loading,a=this.handleFavoriteMusicTwo;return Object(h.jsxs)("div",{"data-testid":"page-favorites",children:[e.length>0?Object(h.jsx)("h1",{children:"Sua lista de m\xfasicas"}):Object(h.jsx)("h1",{children:"Sem m\xfasicas favoritas"}),n?Object(h.jsx)(p,{}):e.map((function(t){return t.trackName&&Object(h.jsx)(V,{trackName:t.trackName,trackId:t.trackId,previewUrl:t.previewUrl,allData:t,handleFavoriteMusicTwo:a},t.trackId)}))]})}}]),n}(a.Component),R=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;return Object(s.a)(this,n),(t=e.call(this)).getUserInfo=function(){t.setState({loading:!0},(function(){g().then((function(e){var n=e.name,a=e.email,i=e.image,r=e.description;return t.setState({userName:n,loading:!1,userEmail:a,userImage:i,userDescription:r})}))}))},t.state={userName:"",userEmail:"email@test.com",userImage:"url-to-image",userDescription:"Lorem ipsum",loading:!1},t}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.getUserInfo()}},{key:"render",value:function(){var t=this.state,e=t.loading,n=t.userName,a=t.userEmail,i=t.userDescription,r=t.userImage;return Object(h.jsxs)("div",{"data-testid":"page-profile",children:["Profile Page.",e?Object(h.jsx)(p,{}):Object(h.jsxs)("section",{children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("img",{"data-testid":"profile-image",src:r,alt:"foto-perfil"}),Object(h.jsx)(d.b,{to:"profile/edit",children:"Editar perfil"})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("span",{children:n}),Object(h.jsx)("span",{children:a}),Object(h.jsx)("span",{children:i})]})]})]})}}]),n}(a.Component),K=n(17),B=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;return Object(s.a)(this,n),(t=e.call(this)).handleUserInfo=function(){t.setState({loading:!0},(function(){g().then((function(e){return t.setState({user:e,loading:!1})}))}))},t.validation=function(){var e=t.state.user,n=e.name,a=e.email,i=e.description,r=e.image,c=[];c.push(n.length>0&&a.length>0&&i.length>0&&r.length>0),c.every((function(t){return!0===t}))?t.setState({buttonDisable:!1}):t.setState({buttonDisable:!0})},t.handleChange=function(e){var n=e.target,a=n.value,i=n.name,r=t.state.user;t.setState((function(){return{user:Object(m.a)(Object(m.a)({},r),{},Object(K.a)({},i,a))}}),(function(){return t.validation()}))},t.onSaveClick=function(e){e.preventDefault();var n,a=t.state.user;t.setState({infoSaved:!0}),n=a,new Promise((function(t){O(Object(m.a)({},n)),v("OK")(t)}))},t.state={loading:!1,buttonDisable:!1,infoSaved:!1,user:{name:"",email:"",description:"",image:""}},t}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.handleUserInfo()}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){var t=this.state,e=t.loading,n=t.buttonDisable,a=t.infoSaved,i=t.user,r=i.name,c=i.email,s=i.description,o=i.image,u=this.handleChange,l=this.onSaveClick;return Object(h.jsxs)("div",{"data-testid":"page-profile-edit",children:["Profile Edit Page",a&&Object(h.jsx)(j.a,{to:"/profile"}),e?Object(h.jsx)(p,{}):Object(h.jsxs)("form",{children:[Object(h.jsx)("div",{children:Object(h.jsx)("input",{value:o,type:"text","data-testid":"edit-input-image",onChange:u,name:"image"})}),Object(h.jsx)("label",{htmlFor:"inputName",children:Object(h.jsx)("input",{value:r,"data-testid":"edit-input-name",type:"text",id:"inputName",onChange:u,name:"name"})}),Object(h.jsx)("label",{htmlFor:"inputEmail",children:Object(h.jsx)("input",{value:c,"data-testid":"edit-input-email",type:"email",id:"inputEmail",onChange:u,name:"email"})}),Object(h.jsx)("label",{htmlFor:"inputDescription",children:Object(h.jsx)("input",{value:s,"data-testid":"edit-input-description",type:"text",id:"inputDescription",onChange:u,name:"description"})}),Object(h.jsx)("button",{"data-testid":"edit-button-save",type:"submit",disabled:n,onClick:l,children:"Salvar"})]})]})}}]),n}(a.Component),q=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(h.jsx)("div",{"data-testid":"page-not-found",children:"Not Found Page"})}}]),n}(a.Component),W=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;return Object(s.a)(this,n),(t=e.call(this)).state={userInfo:"",loading:!0},t}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var t=this;g().then((function(e){var n=e.name;return t.setState({userInfo:n,loading:!1})}))}},{key:"render",value:function(){var t=this.state,e=t.userInfo,n=t.loading;return Object(h.jsxs)("header",{"data-testid":"header-component",children:["Sou o header",n?Object(h.jsx)(p,{}):Object(h.jsx)("span",{"data-testid":"header-user-name",children:e}),Object(h.jsx)("br",{}),Object(h.jsx)(d.b,{"data-testid":"link-to-search",to:"/search",children:"Pesquisa"}),Object(h.jsx)(d.b,{"data-testid":"link-to-favorites",to:"/favorites",children:"M\xfasicas favoritas"}),Object(h.jsx)(d.b,{"data-testid":"link-to-profile",to:"/profile",children:"Perfil"})]})}}]),n}(a.Component),_=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(h.jsxs)(d.a,{children:[Object(h.jsx)(W,{}),Object(h.jsxs)(j.d,{children:[Object(h.jsx)(j.b,{exact:!0,path:"/",component:x}),Object(h.jsx)(j.b,{exact:!0,path:"/search",component:N}),Object(h.jsx)(j.b,{exact:!0,path:"/album/:id",component:L}),Object(h.jsx)(j.b,{exact:!0,path:"/favorites",component:J}),Object(h.jsx)(j.b,{exact:!0,path:"/profile",component:R}),Object(h.jsx)(j.b,{exact:!0,path:"/profile/edit",component:B}),Object(h.jsx)(j.b,{exact:!0,path:"*",component:q})]})]})}}]),n}(i.a.Component),z=_;c.a.render(Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(z,{})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.2691b849.chunk.js.map