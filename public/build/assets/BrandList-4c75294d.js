import{Q as A,r as s,m as ee,j as U,o as a,c as l,e as k,f as V,a as e,d as j,p as i,v,F as w,q as C,s as F,t as u,u as z,x as te,O as S}from"./app-fcd85f0d.js";const oe={class:"p-3 sm:p-5"},re={class:"relative z-0 w-full mb-6 group"},se=e("label",{for:"floating_title",class:"peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"},"Title",-1),ae={class:"relative z-0 w-full mb-6 group"},le=e("label",{for:"floating_price",class:"peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"},"Price",-1),ne={class:"relative z-0 w-full mb-6 group"},de=e("label",{for:"floating_qty",class:"peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"},"Quantity",-1),ie=e("label",{for:"countries",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},"Select Category",-1),ue=["value"],ce=e("label",{for:"countries",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},"Select Brand",-1),pe=["value"],ge={class:"grid md:gap-6"},be={class:"relative z-0 w-full mb-6 group"},fe=e("label",{for:"message",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},"Description",-1),me={class:"grid md:gap-6"},ye={class:"relative z-0 w-full mb-6 group"},he={class:"flex flex-nowrap mb-8"},xe=["src"],ve={class:"absolute top-0 right-8 transform -translate-y-1/2 w-3.5 h-3.5 bg-red-400 border-2 border-white dark:border-gray-800 rounded-full"},_e=["onClick"],ke=e("button",{type:"submit",class:"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"},"Submit",-1),we={class:"mx-auto max-w-screen-xl px-4 lg:px-12"},Ce={class:"bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden"},Se={class:"flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4"},qe={class:"w-full md:w-1/2"},Be=e("label",{for:"simple-search",class:"sr-only"},"Search",-1),Pe={class:"relative w-full"},Ue=e("button",{type:"submit",class:"absolute inset-y-0 right-0 flex items-center px-4 font-bold text-white bg-blue-700 rounded-r-lg"},"Search",-1),Ve={class:"overflow-x-auto"},ze={class:"w-full text-sm text-left text-gray-500 dark:text-gray-400"},De=e("thead",{class:"text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"},[e("tr",null,[e("th",{scope:"col",class:"px-4 py-3"},"Brand name"),e("th",{scope:"col",class:"px-4 py-3"},"Slug"),e("th",{scope:"col",class:"px-4 py-3"},[e("span",{class:"sr-only"},"Actions")])])],-1),Le={scope:"row",class:"px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"},$e={class:"px-4 py-3"},Me={class:"px-4 py-3"},Ae={class:"px-4 py-3"},je={class:"px-4 py-3"},Fe={class:"px-4 py-3"},Te={key:0,class:"bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300"},Ee={key:1,class:"bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300"},Ie={class:"px-4 py-3"},Oe={key:0,type:"button",class:"px-3 py-2 text-xs font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"},Qe={key:1,type:"button",class:"px-3 py-2 text-xs font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"},Re={class:"px-4 py-3 flex items-center justify-end"},Ne=["id","data-dropdown-toggle"],Ye=e("svg",{class:"w-5 h-5","aria-hidden":"true",fill:"currentColor",viewbox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"})],-1),Ge=[Ye],He=["id"],Je=["aria-labelledby"],Ke=["onClick"],We={class:"py-1"},Xe=["onClick"],et={__name:"BrandList",props:{products:Array},setup(T){const E=A().props.brands,I=A().props.categories,m=s(""),D=s(!1),_=s(!1),n=s(!1),c=s([]),L=s(""),O=t=>{console.log(t),c.value.push(t)},Q=t=>{L.value=t.url,n.value=!0},R=t=>{console.log(t)},q=s(""),p=s(""),g=s(""),b=s(""),f=s(""),B=s([]);s("");const y=s(""),h=s("");s("");const N=(t,r)=>{console.log(t,r),q.value=t.id,p.value=t.title,g.value=t.price,b.value=t.quantity,f.value=t.description,h.value=t.brand_id,y.value=t.category_id,B.value=t.product_images,_.value=!0,D.value=!1,n.value=!0},Y=()=>{D.value=!0,n.value=!0,_.value=!1},G=async()=>{const t=new FormData;t.append("title",p.value),t.append("price",g.value),t.append("quantity",b.value),t.append("description",f.value),t.append("brand_id",h.value),t.append("category_id",y.value);for(const r of c.value)t.append("product_images[]",r.raw);try{await S.post("products/store",t,{onSuccess:r=>{Swal.fire({toast:!0,icon:"success",position:"top-end",showConfirmButton:!1,title:r.props.flash.success}),n.value=!1,$()}})}catch(r){console.log(r)}},$=()=>{q.value="",p.value="",g.value="",b.value="",f.value="",c.value=[],L.value=""},H=async(t,r)=>{try{await S.delete("/admin/products/image/"+t.id,{onSuccess:d=>{B.value.splice(r,1),Swal.fire({toast:!0,icon:"success",position:"top-end",showConfirmButton:!1,title:d.props.flash.success})}})}catch(d){console.log(d)}},J=async()=>{const t=new FormData;t.append("title",p.value),t.append("price",g.value),t.append("quantity",b.value),t.append("description",f.value),t.append("category_id",y.value),t.append("brand_id",h.value),t.append("_method","PUT");for(const r of c.value)t.append("product_images[]",r.raw);try{await S.put("products/update/"+q.value,t,{onSuccess:r=>{n.value=!1,$(),Swal.fire({toast:!0,icon:"success",position:"top-end",showConfirmButton:!1,title:r.props.flash.success})}})}catch(r){console.log(r)}},K=(t,r)=>{Swal.fire({title:"Delete this Product?",text:"This Action Can't be Undone!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:"Cancel",confirmButtonText:"Yes, Delete this Product."}).then(d=>{if(d.isConfirmed)try{S.delete("products/destory/"+t.id,{onSuccess:x=>{this.delete(t,r),Swal.fire({toast:!0,icon:"success",position:"top-end",showConfirmButton:!1,title:x.props.flash.success})}})}catch(x){console.log(x)}})},W=()=>{const t=new URL(window.location.href);t.searchParams.set("query",m.value),window.location.href=t.toString()},X=()=>{const t=new URL(window.location.href);t.searchParams.delete("query"),window.location.href=t.toString()};return ee(()=>{if(!m.value)return products.value;const t=m.value.toLowerCase();return products.value.filter(r=>r.title.toLowerCase().includes(t)||r.category.name.toLowerCase().includes(t)||r.brand.name.toLowerCase().includes(t))}),(t,r)=>{const d=U("el-icon"),x=U("el-upload"),Z=U("el-dialog");return a(),l("section",oe,[k(Z,{modelValue:n.value,"onUpdate:modelValue":r[8]||(r[8]=o=>n.value=o),title:_.value?"Edit product":"Add Product",width:"30%","before-close":t.handleClose},{default:V(()=>[e("form",{onSubmit:r[7]||(r[7]=j(o=>_.value?J():G(),["prevent"]))},[e("div",re,[i(e("input",{"onUpdate:modelValue":r[0]||(r[0]=o=>p.value=o),type:"text",name:"floating_title",id:"floating_title",class:"block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",placeholder:" ",required:""},null,512),[[v,p.value]]),se]),e("div",ae,[i(e("input",{type:"text",name:"floating_price",id:"floating_price",class:"block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",placeholder:" ",required:"","onUpdate:modelValue":r[1]||(r[1]=o=>g.value=o)},null,512),[[v,g.value]]),le]),e("div",ne,[i(e("input",{type:"number",name:"qty",id:"floating_qty",class:"block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",placeholder:" ",required:"","onUpdate:modelValue":r[2]||(r[2]=o=>b.value=o)},null,512),[[v,b.value]]),de]),e("div",null,[ie,i(e("select",{id:"countries","onUpdate:modelValue":r[3]||(r[3]=o=>y.value=o),class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"},[(a(!0),l(w,null,C(z(I),o=>(a(),l("option",{key:o.id,value:o.id},u(o.name),9,ue))),128))],512),[[F,y.value]])]),e("div",null,[ce,i(e("select",{id:"countries","onUpdate:modelValue":r[4]||(r[4]=o=>h.value=o),class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"},[(a(!0),l(w,null,C(z(E),o=>(a(),l("option",{key:o.id,value:o.id},u(o.name),9,pe))),128))],512),[[F,h.value]])]),e("div",ge,[e("div",be,[fe,i(e("textarea",{id:"message",rows:"4","onUpdate:modelValue":r[5]||(r[5]=o=>f.value=o),class:"block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Leave a comment..."},null,512),[[v,f.value]])])]),e("div",me,[e("div",ye,[k(x,{"file-list":c.value,"onUpdate:fileList":r[6]||(r[6]=o=>c.value=o),"list-type":"picture-card",multiple:"","on-preview":Q,"on-remove":R,"on-change":O},{default:V(()=>[k(d,null,{default:V(()=>[k(z(te))]),_:1})]),_:1},8,["file-list"])])]),e("div",he,[(a(!0),l(w,null,C(B.value,(o,P)=>(a(),l("div",{key:o.id,class:"relative w-32 h-32"},[e("img",{class:"w-24 h-20 rounded",src:`/${o.image}`,alt:""},null,8,xe),e("span",ve,[e("span",{onClick:M=>H(o,P),class:"text-white text-xs font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"},"x",8,_e)])]))),128))]),ke],32)]),_:1},8,["modelValue","title","before-close"]),e("div",we,[e("div",Ce,[e("div",Se,[e("div",qe,[e("form",{class:"flex items-center",onSubmit:j(W,["prevent"])},[Be,e("div",Pe,[i(e("input",{type:"text",id:"simple-search","onUpdate:modelValue":r[9]||(r[9]=o=>m.value=o),class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500",placeholder:"Search",required:""},null,512),[[v,m.value]]),Ue])],32)]),e("div",{class:"w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0"},[e("button",{onClick:X,class:"flex items-center justify-center text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"}," Clear Search "),e("button",{type:"button",onClick:Y,class:"flex items-center justify-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"}," Add Brand ")])]),e("div",Ve,[e("table",ze,[De,e("tbody",null,[(a(!0),l(w,null,C(T.products,(o,P)=>(a(),l("tr",{key:o.id,class:"border-b dark:border-gray-700"},[e("th",Le,u(o.title),1),e("td",$e,u(o.category.name),1),e("td",Me,u(o.brand.name),1),e("td",Ae,u(o.quantity),1),e("td",je,"$"+u(o.price),1),e("td",Fe,[o.inStock==0?(a(),l("span",Te,"inStock")):(a(),l("span",Ee,"Out of Stock"))]),e("td",Ie,[o.published==0?(a(),l("button",Oe,"Published")):(a(),l("button",Qe,"UnPublished"))]),e("td",Re,[e("button",{id:`${o.id}-button`,"data-dropdown-toggle":`${o.id}`,class:"inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100",type:"button"},Ge,8,Ne),e("div",{id:`${o.id}`,class:"hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"},[e("ul",{class:"py-1 text-sm text-gray-700 dark:text-gray-200","aria-labelledby":`${o.id}-button`},[e("li",null,[e("a",{href:"#",onClick:M=>N(o),class:"block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"},"Edit",8,Ke)])],8,Je),e("div",We,[e("a",{href:"#",onClick:M=>K(o,P),class:"block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"},"Delete",8,Xe)])],8,He)])]))),128))])])])])])])}}};export{et as default};