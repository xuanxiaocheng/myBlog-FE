import{l as w}from"./Loading.6fbf4c71.js";import{_ as y}from"./index.70029ee0.js";import{r as D,o as n,c as d,a as i,w as T,h as e,p as I,i as P,k as B,n as z,s as S,q as f,z as A,A as U,t as V,C as E,E as q,G as F,H as x,x as H,_ as M}from"./vendor.cad15719.js";/* empty css              */const J={},K=t=>(I("data-v-42224b1e"),t=t(),P(),t),O={class:"topContainer"},R=K(()=>e("p",{class:"websiteName"},"StarPavilion",-1)),W={class:"menuLinks"},X=B("\u65E5\u5FD7Develop"),Y=B("\u5173\u4E8EAbout");function Z(t,r){const c=D("router-link");return n(),d("div",O,[i(c,{class:"link",to:"/"},{default:T(()=>[R]),_:1}),e("div",W,[i(c,{class:"link",to:"/recommend"},{default:T(()=>[X]),_:1}),i(c,{class:"link",to:"/about"},{default:T(()=>[Y]),_:1})])])}var L=y(J,[["render",Z],["__scopeId","data-v-42224b1e"]]);const ee=z({components:{TopTabbar:L,Loading:w},setup(t,{emit:r}){const{proxy:c}=H(),b=S({isloading:!0}),p=f(null),h=f(null),u=f(null),_=f(null);function g(s){U(()=>{s.target.id=="goodText"&&(_.value.className="rightCard moblieUnDisplay",u.value.className="leftCard",h.value.className="mobileNavTitle active",p.value.className="mobileNavTitle"),s.target.id=="goodQuestion"&&(_.value.className="rightCard",u.value.className="leftCard moblieUnDisplay",h.value.className="mobileNavTitle",p.value.className="mobileNavTitle active")})}function C(s,v){r("showContext",s,v)}function o(){const s=S({curPage:1,goodTextDate:[]});function v(){return new Promise((N,k)=>{c.$axios.get(`/api/user/getGoodText?curPage=${s.curPage}&pageSize=5`).then(function(a){s.goodTextDate=a.data,N(a)}).catch(function(a){k(a)})})}return{getGoodTextState:s,requestGoodText:v}}function m(){const s=S({curPage:1,goodQuestionDate:[]});function v(){return new Promise((N,k)=>{c.$axios.get(`/api/user/getquestion?curPage=${s.curPage}&pageSize=10`).then(function(a){s.goodQuestionDate=a.data,N(a)}).catch(function(a){k(a)})})}return{getGoodQuestionState:s,requestGoodQuestion:v}}const{getGoodTextState:G,requestGoodText:Q}=o(),{getGoodQuestionState:j,requestGoodQuestion:$}=m();return A(()=>{Promise.all([Q(),$()]).then(()=>{b.isloading=!1})}),{state:b,getGoodTextState:G,getGoodQuestionState:j,showContext:C,requestGoodText:Q,requestGoodQuestion:$,changeTab:g,goodQuestionTab:p,goodTextTab:h,goodTextShow:u,goodQuestionShow:_}}}),l=t=>(I("data-v-2cfeb94c"),t=t(),P(),t),te={class:"articalNav"},oe={key:1},se={class:"headerNav"},ae={id:"goodText",ref:"goodTextTab",class:"mobileNavTitle active"},ne={id:"goodQuestion",ref:"goodQuestionTab",class:"mobileNavTitle"},ie={class:"mainCard"},ce={class:"leftCard",ref:"goodTextShow"},de={class:"textNav"},le=l(()=>e("div",null,"\u7CBE\u5F69\u597D\u6587",-1)),re=["onClick"],ue={class:"leftCard"},_e={class:"textTitle"},ge={class:"mainText"},ve=l(()=>e("div",{class:"timeText"},null,-1)),pe=["src"],he=l(()=>e("div",{class:"clear"},null,-1)),me={class:"rightCard moblieUnDisplay",ref:"goodQuestionShow"},Te={class:"goodQuestion"},fe={style:{"font-size":"20px",padding:"10px","margin-top":"30px"},class:"moblieUnDisplay"},xe=l(()=>e("div",null,"\u7CBE\u5F69\u95EE\u7B54",-1)),be={class:"content-box"},Ce=["onClick"],Ne={class:"indexNum"},ke={class:"goodQuestionTitle"},Se=l(()=>e("div",{class:"clear"},null,-1)),Ge=l(()=>e("footer",null,[e("a",{href:"https://beian.miit.gov.cn"},"\u7CA4ICP\u59072020077344\u53F7")],-1));function Qe(t,r,c,b,p,h){const u=w,_=L,g=M,C=D("el-skeleton");return n(),d("div",te,[t.state.isloading?(n(),V(u,{key:0})):E("",!0),t.state.isloading?E("",!0):(n(),d("span",oe,[e("header",null,[e("div",se,[i(_,{class:"TopTabbar"}),e("div",{class:"mobileNav",onClick:r[0]||(r[0]=(...o)=>t.changeTab&&t.changeTab(...o))},[e("span",ae,"\u7CBE\u5F69\u597D\u6587",512),e("span",ne,"\u7CBE\u5F69\u95EE\u7B54",512)])]),e("div",ie,[e("div",ce,[e("div",de,[le,i(g,{dashed:""})]),(n(!0),d(q,null,F(t.getGoodTextState.goodTextDate,o=>(n(),d("div",{class:"textCard",key:o.articleId},[e("span",{onClick:m=>t.showContext(o.articleId,"getGoodText")},[e("div",ue,[e("div",_e,x(o.articleTitle),1),e("div",ge,x(o.markdown),1),ve]),e("img",{class:"coverImg",src:o.coverImgSrc},null,8,pe)],8,re),he,i(g,{class:"moblieDivider",style:{margin:"2vh 0"}})]))),128))],512),e("div",me,[e("div",Te,[e("div",fe,[xe,i(g,{dashed:""})]),e("div",be,[i(C,{class:"rightCard_data",animated:"",count:3},{default:T(()=>[(n(!0),d(q,null,F(t.getGoodQuestionState.goodQuestionDate,(o,m)=>(n(),d("div",{class:"Card",key:o.articleId,onClick:G=>t.showContext(o.articleId,"getquestion")},[e("span",Ne,x(m+1),1),e("span",ke,x(o.articleTitle),1)],8,Ce))),128))]),_:1})])])],512),Se])]),Ge]))])}var Ie=y(ee,[["render",Qe],["__scopeId","data-v-2cfeb94c"]]);export{L as T,Ie as a};
