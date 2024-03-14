import{Q as u,x as m,o as n,c as l,a as e,e as s,f as o,u as t,k as f,b as g,t as h,i as a,g as d}from"./app-eca1849b.js";const x={class:"bg-gradient-to-br from-purple-900 to-rose-600 border-gray-200 dark:bg-gray-900 fixed top-0 w-full z-20"},k={class:"max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"},y=e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:""})],-1),w=e("span",{class:"self-center text-4xl font-semibold whitespace-nowrap text-white"},"PC-Nubbies",-1),v={key:0,class:"flex items-center md:order-2"},_={class:"mr-4"},j=e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"})],-1),B=e("span",{class:"sr-only"},"cart",-1),M={class:"absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900"},z={key:0,type:"button",class:"flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600",id:"user-menu-button","aria-expanded":"false","data-dropdown-toggle":"user-dropdown","data-dropdown-placement":"bottom"},C=e("span",{class:"sr-only"},"Open user menu",-1),N=e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",class:"w-8 h-8 rounded-full bg-white",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"})],-1),V=[C,N],S={key:1},H={key:2,class:"z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600",id:"user-dropdown"},L={class:"px-4 py-3"},O={class:"block text-sm text-gray-900 dark:text-white"},R={class:"block text-sm text-gray-500 truncate dark:text-gray-400"},A={class:"py-2","aria-labelledby":"user-menu-button"},P=e("button",{"data-collapse-toggle":"navbar-user",type:"button",class:"inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600","aria-controls":"navbar-user","aria-expanded":"false"},[e("span",{class:"sr-only"},"Open main menu"),e("svg",{class:"w-5 h-5","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 17 14"},[e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M1 1h15M1 7h15M1 13h15"})])],-1),D={class:"items-center justify-between hidden w-full md:flex md:w-auto md:order-1 bg-transparent to-rose-600",id:"navbar-user"},E={class:"flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-500 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700"},q={__name:"Header",setup(G){const c=u().props.canLogin,b=u().props.canRegister,i=u().props.auth,p=m(()=>u().props.cart);return(r,Q)=>(n(),l("nav",x,[e("div",k,[s(t(a),{href:r.route("home"),class:"flex items-center"},{default:o(()=>[y,w]),_:1},8,["href"]),t(c)?(n(),l("div",v,[e("div",_,[s(t(a),{href:r.route("cart.view"),class:"relative inline-flex items-center p-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"},{default:o(()=>[j,B,e("div",M,h(p.value.data.count),1)]),_:1},8,["href"])]),t(i).user?(n(),l("button",z,V)):(n(),l("div",S,[s(t(a),{href:r.route("login"),type:"button",class:"text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"},{default:o(()=>[d(" Login")]),_:1},8,["href"]),t(b)?(n(),f(t(a),{key:0,href:r.route("register"),type:"button",class:"text-white bg-gradient-to-br from-blue-500 to-purple-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"},{default:o(()=>[d(" Register")]),_:1},8,["href"])):g("",!0)])),t(i).user?(n(),l("div",H,[e("div",L,[e("span",O,h(t(i).user.name),1),e("span",R,h(t(i).user.email),1)]),e("ul",A,[e("li",null,[s(t(a),{href:r.route("dashboard"),class:"block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"},{default:o(()=>[d(" My Orders")]),_:1},8,["href"])]),e("li",null,[s(t(a),{href:r.route("profile.edit"),class:"block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"},{default:o(()=>[d(" Profile Settings")]),_:1},8,["href"])]),e("li",null,[s(t(a),{href:r.route("logout"),method:"post",class:"block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"},{default:o(()=>[d(" Sign out")]),_:1},8,["href"])])])])):g("",!0),P])):g("",!0),e("div",D,[e("ul",E,[e("li",null,[s(t(a),{href:r.route("home"),class:"block py-2 pl-3 pr-4 text-lg text-white text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700","aria-current":"page"},{default:o(()=>[d("Home")]),_:1},8,["href"])]),e("li",null,[s(t(a),{href:r.route("guide"),class:"block py-2 pl-3 pr-4 text-lg text-white text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"},{default:o(()=>[d("Guides")]),_:1},8,["href"])]),e("li",null,[s(t(a),{href:r.route("products.index"),class:"block py-2 pl-3 pr-4 text-white text-lg text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-rose-900 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"},{default:o(()=>[d("Shop")]),_:1},8,["href"])])])])])]))}};export{q as default};