import{o as r,k as p,f as i,a as t,c as o,B as c,C as n,P as _,t as s,F as d}from"./app-7a809f7a.js";import u from"./UserLayouts-616dc4e4.js";import"./index-60fdaba9.js";import"./Header-f41443ff.js";import"./Footer-9bdb7353.js";import"./_plugin-vue_export-helper-c27b6911.js";/* empty css                                                             */const x={class:"relative max-w-screen-xl py-24 mx-auto overflow-x-auto"},m={class:"text-xs text-gray-700 uppercase dark:bg-gray-700 dark:text-gray-400"},y={scope:"col",class:"px-6 py-3"},h={scope:"row",class:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"},g={class:"px-6 py-4"},k={class:"px-6 py-4"},b={class:"px-6 py-4"},A={__name:"Dashboard",props:{orders:Array},setup(l){return(f,w)=>(r(),p(u,null,{default:i(()=>[t("div",x,[(r(!0),o(d,null,c(l.orders,a=>n((r(),o("table",{key:a.id,class:"w-full text-sm text-left text-gray-500 dark:text-gray-400 mb-5"},[t("thead",m,[t("tr",null,[t("th",y," Order ID # "+s(a.id),1)])]),t("tbody",null,[(r(!0),o(d,null,c(a.order_items,e=>(r(),o("tr",{key:e.id,class:"bg-white border-b dark:bg-gray-800 dark:border-gray-700"},[t("th",h,s(e.product.title),1),t("td",g,s(e.product.brand.name),1),t("td",k,s(e.product.category.name),1),t("td",b," $"+s(e.product.price),1)]))),128))])])),[[_,a.order_items.length>0]])),128))])]),_:1}))}};export{A as default};