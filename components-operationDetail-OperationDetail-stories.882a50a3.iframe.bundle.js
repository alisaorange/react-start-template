"use strict";(self.webpackChunkreact_start_template=self.webpackChunkreact_start_template||[]).push([[319],{"./src/components/operationDetail/OperationDetail.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>OperationDetail_stories});var react=__webpack_require__("./node_modules/react/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),operationDetail=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./src/components/operationDetail/operationDetail.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default(),injectStylesIntoStyleTag_default()(operationDetail.A,options),operationDetail.A&&operationDetail.A.locals&&operationDetail.A.locals;var CartButton=__webpack_require__("./src/components/cartButton/CartButton.tsx");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}var OperationDetail=function(param){var price=param.price,imageUrl=param.imageUrl,categoryName=param.categoryName,name=param.name,description=param.description,_useState=_sliced_to_array((0,react.useState)(0),2),count=_useState[0],setCount=_useState[1];return react.createElement("div",{className:"operation-detail"},react.createElement("img",{src:imageUrl,alt:name,className:"operation-image"}),react.createElement("h2",{className:"operation-name"},name),react.createElement("h3",{className:"operation-category"},categoryName),react.createElement("p",{className:"operation-description"},description),react.createElement("p",{className:"operation-price"},"₽".concat(price.toFixed(2))),react.createElement("span",{className:"cart-button-container"},react.createElement(CartButton.l,{count:count,onAdd:function(){return setCount(1)},onIncrease:function(){return setCount(function(prevCount){return prevCount+1})},onDecrease:function(){return setCount(function(prevCount){return Math.max(prevCount-1,0)})}})))};try{OperationDetail.displayName="OperationDetail",OperationDetail.__docgenInfo={description:"",displayName:"OperationDetail",props:{price:{defaultValue:null,description:"",name:"price",required:!0,type:{name:"number"}},imageUrl:{defaultValue:null,description:"",name:"imageUrl",required:!0,type:{name:"string"}},categoryName:{defaultValue:null,description:"",name:"categoryName",required:!0,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/operationDetail/OperationDetail.tsx#OperationDetail"]={docgenInfo:OperationDetail.__docgenInfo,name:"OperationDetail",path:"src/components/operationDetail/OperationDetail.tsx#OperationDetail"})}catch(__react_docgen_typescript_loader_error){}var image1=__webpack_require__("./src/shared/images/image1.jpg");let OperationDetail_stories={title:"Components/OperationDetail",component:OperationDetail,argTypes:{price:{control:"number",defaultValue:5e3},imageUrl:{control:"text",defaultValue:image1},categoryName:{control:"text",defaultValue:"Покупка"},name:{control:"text",defaultValue:"Кроссовки Nike Air Max"},description:{control:"text",defaultValue:"Легкие и удобные кроссовки для бега."}}};var Default=(function(args){return react.createElement(OperationDetail,args)}).bind({});Default.args={price:5e3,categoryName:"Покупка",imageUrl:image1,name:"Кроссовки Nike Air Max",description:"Легкие и удобные кроссовки для бега."},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <OperationDetail {...args} />",...Default.parameters?.docs?.source}}};let __namedExportsOrder=["Default"]},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./src/components/operationDetail/operationDetail.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,`.operation-detail {
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 16px;
    text-align: center;
    max-width: 400px;
    margin: 10px;
}

.operation-image {
    max-width: 100%;
    height: auto;
    border-radius: 4px;
}

.operation-name {
    font-size: 22px;
    margin: 10px 0;
}

.operation-category {
    font-size: 18px;
    color: #777;
    margin: 5px 0;
}

.operation-description {
    font-size: 16px;
    color: #333;
    margin: 10px 0;
}

.operation-price {
    font-size: 18px;
    font-weight: bold;
    margin: 10px 0;
}

.cart-button-container {
    display: flex;
    align-items: center;
}
`,"",{version:3,sources:["webpack://./src/components/operationDetail/operationDetail.css"],names:[],mappings:"AAAA;IACI,sBAAsB;IACtB,kBAAkB;IAClB,aAAa;IACb,kBAAkB;IAClB,gBAAgB;IAChB,YAAY;AAChB;;AAEA;IACI,eAAe;IACf,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,cAAc;AAClB;;AAEA;IACI,eAAe;IACf,WAAW;IACX,aAAa;AACjB;;AAEA;IACI,eAAe;IACf,WAAW;IACX,cAAc;AAClB;;AAEA;IACI,eAAe;IACf,iBAAiB;IACjB,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,mBAAmB;AACvB",sourcesContent:[".operation-detail {\n    border: 1px solid #ddd;\n    border-radius: 8px;\n    padding: 16px;\n    text-align: center;\n    max-width: 400px;\n    margin: 10px;\n}\n\n.operation-image {\n    max-width: 100%;\n    height: auto;\n    border-radius: 4px;\n}\n\n.operation-name {\n    font-size: 22px;\n    margin: 10px 0;\n}\n\n.operation-category {\n    font-size: 18px;\n    color: #777;\n    margin: 5px 0;\n}\n\n.operation-description {\n    font-size: 16px;\n    color: #333;\n    margin: 10px 0;\n}\n\n.operation-price {\n    font-size: 18px;\n    font-weight: bold;\n    margin: 10px 0;\n}\n\n.cart-button-container {\n    display: flex;\n    align-items: center;\n}\n"],sourceRoot:""}]);let __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/shared/images/image1.jpg":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"static/media/image1.24e4fff1.jpg"}}]);
//# sourceMappingURL=components-operationDetail-OperationDetail-stories.882a50a3.iframe.bundle.js.map