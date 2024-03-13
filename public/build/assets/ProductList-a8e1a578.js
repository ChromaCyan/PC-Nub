import{r as a,Q as A,m as ee,j as U,o as s,c as l,e as _,f as V,a as e,d as j,p as i,v,F as k,q as C,s as F,t as c,u as z,x as te,O as S}from"./app-fcd85f0d.js";const oe={class:"p-3 sm:p-5"},re={class:"relative z-0 w-full mb-6 group"},ae=e("label",{for:"floating_title",class:"peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"},"Title",-1),se={class:"relative z-0 w-full mb-6 group"},le=e("label",{for:"floating_price",class:"peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"},"Price",-1),ne={class:"relative z-0 w-full mb-6 group"},de=e("label",{for:"floating_qty",class:"peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"},"Quantity",-1),ie=e("label",{for:"countries",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},"Select Category",-1),ce=["value"],ue=e("label",{for:"countries",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},"Select Brand",-1),pe=["value"],ge={class:"grid md:gap-6"},fe={class:"relative z-0 w-full mb-6 group"},be=e("label",{for:"message",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},"Description",-1),ye={class:"grid md:gap-6"},me={class:"relative z-0 w-full mb-6 group"},he={class:"flex flex-nowrap mb-8"},xe=["src"],ve={class:"absolute top-0 right-8 transform -translate-y-1/2 w-3.5 h-3.5 bg-red-400 border-2 border-white dark:border-gray-800 rounded-full"},we=["onClick"],_e=e("button",{type:"submit",class:"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"},"Submit",-1),ke={class:"mx-auto max-w-screen-xl px-4 lg:px-12"},Ce={class:"bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden"},Se={class:"flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4"},qe={class:"w-full md:w-1/2"},Pe=e("label",{for:"simple-search",class:"sr-only"},"Search",-1),Be={class:"relative w-full"},Ue=e("button",{type:"submit",class:"absolute inset-y-0 right-0 flex items-center px-4 font-bold text-white bg-blue-700 rounded-r-lg"},"Search",-1),Ve={class:"overflow-x-auto"},ze={class:"w-full text-sm text-left text-gray-500 dark:text-gray-400"},Le=e("thead",{class:"text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"},[e("tr",null,[e("th",{scope:"col",class:"px-4 py-3"},"Product name"),e("th",{scope:"col",class:"px-4 py-3"},"Category"),e("th",{scope:"col",class:"px-4 py-3"},"Brand"),e("th",{scope:"col",class:"px-4 py-3"},"Quantity"),e("th",{scope:"col",class:"px-4 py-3"},"Price"),e("th",{scope:"col",class:"px-4 py-3"},[e("span",{class:"sr-only"},"Actions")])])],-1),$e={scope:"row",class:"px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"},De={class:"px-4 py-3"},Me={class:"px-4 py-3"},Ae={class:"px-4 py-3"},je={class:"px-4 py-3"},Fe={class:"px-4 py-3 flex items-center justify-end"},Te=["id","data-dropdown-toggle"],Ee=e("svg",{class:"w-5 h-5","aria-hidden":"true",fill:"currentColor",viewbox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"})],-1),Qe=[Ee],Ie=["id"],Re=["aria-labelledby"],Ne=["onClick"],Oe={class:"py-1"},Ge=["onClick"],Je={__name:"ProductList",props:{products:Array},setup(T){const y=a(""),E=A().props.brands,Q=A().props.categories,L=a(!1),w=a(!1),n=a(!1),u=a([]),$=a(""),I=t=>{console.log(t),u.value.push(t)},R=t=>{$.value=t.url,n.value=!0},N=t=>{console.log(t)},q=a(""),p=a(""),g=a(""),f=a(""),b=a(""),P=a([]);a("");const m=a(""),h=a("");a("");const O=(t,r)=>{console.log(t,r),q.value=t.id,p.value=t.title,g.value=t.price,f.value=t.quantity,b.value=t.description,h.value=t.brand_id,m.value=t.category_id,P.value=t.product_images,w.value=!0,L.value=!1,n.value=!0},G=()=>{L.value=!0,n.value=!0,w.value=!1},H=async()=>{const t=new FormData;t.append("title",p.value),t.append("price",g.value),t.append("quantity",f.value),t.append("description",b.value),t.append("brand_id",h.value),t.append("category_id",m.value);for(const r of u.value)t.append("product_images[]",r.raw);try{await S.post("products/store",t,{onSuccess:r=>{Swal.fire({toast:!0,icon:"success",position:"top-end",showConfirmButton:!1,title:r.props.flash.success}),n.value=!1,D()}})}catch(r){console.log(r)}},D=()=>{q.value="",p.value="",g.value="",f.value="",b.value="",u.value=[],$.value=""},J=async(t,r)=>{try{await S.delete("/admin/products/image/"+t.id,{onSuccess:d=>{P.value.splice(r,1),Swal.fire({toast:!0,icon:"success",position:"top-end",showConfirmButton:!1,title:d.props.flash.success})}})}catch(d){console.log(d)}},K=async()=>{const t=new FormData;t.append("title",p.value),t.append("price",g.value),t.append("quantity",f.value),t.append("description",b.value),t.append("category_id",m.value),t.append("brand_id",h.value),t.append("_method","PUT");for(const r of u.value)t.append("product_images[]",r.raw);try{await S.post("products/update/"+q.value,t,{onSuccess:r=>{n.value=!1,D(),Swal.fire({toast:!0,icon:"success",position:"top-end",showConfirmButton:!1,title:r.props.flash.success})}})}catch(r){console.log(r)}},W=(t,r)=>{Swal.fire({title:"Are you Sure",text:"This actions cannot undo!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:"no",confirmButtonText:"yes, delete!"}).then(d=>{if(d.isConfirmed)try{S.delete("products/destory/"+t.id,{onSuccess:x=>{this.delete(t,r),Swal.fire({toast:!0,icon:"success",position:"top-end",showConfirmButton:!1,title:x.props.flash.success})}})}catch(x){console.log(x)}})},X=()=>{const t=new URL(window.location.href);t.searchParams.set("query",y.value),window.location.href=t.toString()},Y=()=>{const t=new URL(window.location.href);t.searchParams.delete("query"),window.location.href=t.toString()};return ee(()=>{if(!y.value)return products.value;const t=y.value.toLowerCase();return products.value.filter(r=>r.title.toLowerCase().includes(t)||r.category.name.toLowerCase().includes(t)||r.brand.name.toLowerCase().includes(t))}),(t,r)=>{const d=U("el-icon"),x=U("el-upload"),Z=U("el-dialog");return s(),l("section",oe,[_(Z,{modelValue:n.value,"onUpdate:modelValue":r[8]||(r[8]=o=>n.value=o),title:w.value?"Edit product":"Add Product",width:"30%","before-close":t.handleClose},{default:V(()=>[e("form",{onSubmit:r[7]||(r[7]=j(o=>w.value?K():H(),["prevent"]))},[e("div",re,[i(e("input",{"onUpdate:modelValue":r[0]||(r[0]=o=>p.value=o),type:"text",name:"floating_title",id:"floating_title",class:"block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",placeholder:" ",required:""},null,512),[[v,p.value]]),ae]),e("div",se,[i(e("input",{type:"text",name:"floating_price",id:"floating_price",class:"block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",placeholder:" ",required:"","onUpdate:modelValue":r[1]||(r[1]=o=>g.value=o)},null,512),[[v,g.value]]),le]),e("div",ne,[i(e("input",{type:"number",name:"qty",id:"floating_qty",class:"block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",placeholder:" ",required:"","onUpdate:modelValue":r[2]||(r[2]=o=>f.value=o)},null,512),[[v,f.value]]),de]),e("div",null,[ie,i(e("select",{id:"countries","onUpdate:modelValue":r[3]||(r[3]=o=>m.value=o),class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"},[(s(!0),l(k,null,C(z(Q),o=>(s(),l("option",{key:o.id,value:o.id},c(o.name),9,ce))),128))],512),[[F,m.value]])]),e("div",null,[ue,i(e("select",{id:"countries","onUpdate:modelValue":r[4]||(r[4]=o=>h.value=o),class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"},[(s(!0),l(k,null,C(z(E),o=>(s(),l("option",{key:o.id,value:o.id},c(o.name),9,pe))),128))],512),[[F,h.value]])]),e("div",ge,[e("div",fe,[be,i(e("textarea",{id:"message",rows:"4","onUpdate:modelValue":r[5]||(r[5]=o=>b.value=o),class:"block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Leave a comment..."},null,512),[[v,b.value]])])]),e("div",ye,[e("div",me,[_(x,{"file-list":u.value,"onUpdate:fileList":r[6]||(r[6]=o=>u.value=o),"list-type":"picture-card",multiple:"","on-preview":R,"on-remove":N,"on-change":I},{default:V(()=>[_(d,null,{default:V(()=>[_(z(te))]),_:1})]),_:1},8,["file-list"])])]),e("div",he,[(s(!0),l(k,null,C(P.value,(o,B)=>(s(),l("div",{key:o.id,class:"relative w-32 h-32"},[e("img",{class:"w-24 h-20 rounded",src:`/${o.image}`,alt:""},null,8,xe),e("span",ve,[e("span",{onClick:M=>J(o,B),class:"text-white text-xs font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"},"x",8,we)])]))),128))]),_e],32)]),_:1},8,["modelValue","title","before-close"]),e("div",ke,[e("div",Ce,[e("div",Se,[e("div",qe,[e("form",{class:"flex items-center",onSubmit:j(X,["prevent"])},[Pe,e("div",Be,[i(e("input",{type:"text",id:"simple-search","onUpdate:modelValue":r[9]||(r[9]=o=>y.value=o),class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500",placeholder:"Search",required:""},null,512),[[v,y.value]]),Ue])],32)]),e("div",{class:"w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0"},[e("button",{onClick:Y,class:"flex items-center justify-center text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"}," Clear Search "),e("button",{type:"button",onClick:G,class:"flex items-center justify-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"}," Add product ")])]),e("div",Ve,[e("table",ze,[Le,e("tbody",null,[(s(!0),l(k,null,C(T.products,(o,B)=>(s(),l("tr",{key:o.id,class:"border-b dark:border-gray-700"},[e("th",$e,c(o.title),1),e("td",De,c(o.category.name),1),e("td",Me,c(o.brand.name),1),e("td",Ae,c(o.quantity),1),e("td",je,"$"+c(o.price),1),e("td",Fe,[e("button",{id:`${o.id}-button`,"data-dropdown-toggle":`${o.id}`,class:"inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100",type:"button"},Qe,8,Te),e("div",{id:`${o.id}`,class:"hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"},[e("ul",{class:"py-1 text-sm text-gray-700 dark:text-gray-200","aria-labelledby":`${o.id}-button`},[e("li",null,[e("a",{href:"#",onClick:M=>O(o),class:"block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"},"Edit",8,Ne)])],8,Re),e("div",Oe,[e("a",{href:"#",onClick:M=>W(o,B),class:"block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"},"Delete",8,Ge)])],8,Ie)])]))),128))])])])])])])}}};export{Je as default};