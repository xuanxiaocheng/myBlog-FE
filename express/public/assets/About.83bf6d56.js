import{l}from"./Loading.6fbf4c71.js";import{n as g,q as v,r as _,c as f,T as p,U as r,a as c,h as e,w as h,p as m,i as x,J as b,o as w}from"./vendor.cad15719.js";import{_ as C}from"./index.70029ee0.js";const E=g({components:{Loading:l},setup(){let t=v(!0);const o=["http://xuanxiaocheng.top/img/me.png","http://xuanxiaocheng.top/img/git.png","http://xuanxiaocheng.top/img/sifou.png"];let a=0;for(let s of o){let i=new Image;console.log(s),i.src=s,i.onload=function(){a++,console.log(a),a==o.length&&setTimeout(()=>{t.value=!1},500)}}return{isLoading:t}}}),n=t=>(m("data-v-f18a5ec8"),t=t(),x(),t),k={class:"about"},B={class:"tabbar"},y=n(()=>e("div",{class:"tabbarName"},"Star",-1)),A={class:"link"},L=n(()=>e("div",{class:"linkUrl"},"Home",-1)),S=n(()=>e("div",{class:"linkUrl"},"Recommend",-1)),I=b('<div class="photoBox" data-v-f18a5ec8><div class="photoCell" style="height:500px;width:1260px;" data-v-f18a5ec8><img class="photo" src="http://xuanxiaocheng.top/img/me.png" data-v-f18a5ec8><div class="bottomCell" data-v-f18a5ec8>\u4E2A\u4EBA\u7B80\u4ECB</div></div><div class="photoCell" style="height:360px;width:900px;" data-v-f18a5ec8><a target="_blank" href="https://gitee.com/cr231" data-v-f18a5ec8><img class="photo" src="http://xuanxiaocheng.top/img/git.png" data-v-f18a5ec8><div class="bottomCell" data-v-f18a5ec8>Git\u4ED3\u5E93 | \u7801\u4E91Gitee</div></a></div><div class="photoCell" style="height:360px;width:360px;" data-v-f18a5ec8><a target="_blank" href="https://segmentfault.com/u/cr_5fb500e16f8fd" data-v-f18a5ec8><img class="photo" src="http://xuanxiaocheng.top/img/sifou.png" data-v-f18a5ec8><div class="bottomCell" data-v-f18a5ec8>\u601D\u5426segmentfault | \u4E2A\u4EBA\u4E3B\u9875</div></a></div></div>',1);function N(t,o,a,s,i,$){const u=l,d=_("router-link");return w(),f("div",k,[p(c(u,{style:{width:"100vw",height:"100vh"}},null,512),[[r,t.isLoading]]),p(e("div",null,[e("div",B,[y,e("div",A,[c(d,{to:"/"},{default:h(()=>[L]),_:1}),c(d,{to:"/recommend"},{default:h(()=>[S]),_:1})])]),I],512),[[r,!t.isLoading]])])}var V=C(E,[["render",N],["__scopeId","data-v-f18a5ec8"]]);export{V as default};
