!function(n){function o(o){for(var a,l,d=o[0],c=o[1],b=o[2],s=0,p=[];s<d.length;s++)l=d[s],Object.prototype.hasOwnProperty.call(r,l)&&r[l]&&p.push(r[l][0]),r[l]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(n[a]=c[a]);for(i&&i(o);p.length;)p.shift()();return e.push.apply(e,b||[]),t()}function t(){for(var n,o=0;o<e.length;o++){for(var t=e[o],a=!0,d=1;d<t.length;d++){var c=t[d];0!==r[c]&&(a=!1)}a&&(e.splice(o--,1),n=l(l.s=t[0]))}return n}var a={},r={3:0},e=[];function l(o){if(a[o])return a[o].exports;var t=a[o]={i:o,l:!1,exports:{}};return n[o].call(t.exports,t,t.exports,l),t.l=!0,t.exports}l.m=n,l.c=a,l.d=function(n,o,t){l.o(n,o)||Object.defineProperty(n,o,{enumerable:!0,get:t})},l.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},l.t=function(n,o){if(1&o&&(n=l(n)),8&o)return n;if(4&o&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(l.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&o&&"string"!=typeof n)for(var a in n)l.d(t,a,function(o){return n[o]}.bind(null,a));return t},l.n=function(n){var o=n&&n.__esModule?function(){return n.default}:function(){return n};return l.d(o,"a",o),o},l.o=function(n,o){return Object.prototype.hasOwnProperty.call(n,o)},l.p="";var d=window.webpackJsonp=window.webpackJsonp||[],c=d.push.bind(d);d.push=o,d=d.slice();for(var b=0;b<d.length;b++)o(d[b]);var i=c;e.push([62,0]),t()}({22:function(n,o,t){"use strict";var a=t(27),r=t(28),e=t(7),l={demoStore:new(function(){function n(){Object(a.a)(this,n),this.list=[],Object(e.l)(this)}return Object(r.a)(n,[{key:"setList",value:function(n){this.list=n}}]),n}())};o.a=l},56:function(n,o,t){var a=t(57);"string"==typeof a&&(a=[[n.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};t(26)(a,r);a.locals&&(n.exports=a.locals)},57:function(n,o,t){(o=t(25)(!1)).push([n.i,".theme-mode-light {\n  --bodyBg: #f7f7f7;\n  --mainBg: #fff;\n  --sidebarBg: rgba(255, 255, 255, 0.8);\n  --blurBg: rgba(255, 255, 255, 0.9);\n  --customBlockBg: #f1f1f1;\n  --primary-text-color: rgba(0, 0, 0, 0.75);\n  --secondary-text-color: rgba(0, 0, 0, 0.55);\n  --three-text-color: rgba(0, 0, 0, 0.3);\n  --textLightenColor: #0085AD;\n  --borderColor: #f0f0f0;\n  --upColor: #f00;\n  --downColor: #090;\n  --shadowColor: rgba(0, 0, 0, 0.1);\n  --separator-color: #f0f0f0;\n  --icon-btn-fill-color: rgba(0, 0, 0, 0.65);\n  --input-bg-color: rgba(0, 0, 0, 0);\n  --input-border-color: #d9d9d9;\n  --hover-color: #f5f5f5;\n  --btn-disable-text-color: rgba(0, 0, 0, 0.25);\n  --btn-disable-bg-color: #f5f5f5;\n  --striped-color: #fafafa;\n}\n.theme-mode-dark {\n  --bodyBg: #18191b;\n  --mainBg: #292a2d;\n  --sidebarBg: rgba(30, 30, 34, 0.8);\n  --blurBg: rgba(30, 30, 34, 0.8);\n  --customBlockBg: #27272b;\n  --secondary-text-color: #9b9baa;\n  --three-text-color: rgba(155, 155, 170, 0.5);\n  --primary-text-color: #d5d5d5;\n  --separator-color: rgba(255, 255, 255, 0.1);\n  --textLightenColor: #0085AD;\n  --borderColor: #303030;\n  --upColor: rgba(255, 0, 0, 0.8);\n  --downColor: rgba(0, 153, 0, 0.9);\n  --shadowColor: rgba(0, 0, 0, 0.4);\n  --icon-btn-fill-color: #9aa0a6;\n  --input-bg-color: rgba(0, 0, 0, 0.22);\n  --input-border-color: #434343;\n  --hover-color: #165996;\n  --btn-disable-text-color: rgba(255, 255, 255, 0.3);\n  --btn-disable-bg-color: #555;\n}\n.up {\n  color: var(--upColor) !important;\n}\n.down {\n  color: var(--downColor) !important;\n}\n.norm {\n  color: var(--secondary-text-color) !important;\n}\n.theme-mode-dark .ant-tag-blue {\n  color: #177ddc;\n  background: #111d2c;\n  border-color: #15395b;\n}\n.theme-mode-dark .ant-select-multiple .ant-select-selection-item {\n  background: rgba(255, 255, 255, 0.08);\n  border: 1px solid #303030;\n}\n.theme-mode-dark .ant-select-item-option-selected:not(.ant-select-item-option-disabled) {\n  color: rgba(255, 255, 255, 0.65);\n  font-weight: 600;\n  background-color: #111b26;\n}\n.theme-mode-dark .header .anticon:not(.anticon-account-book) {\n  color: var(--icon-btn-fill-color);\n}\n.theme-mode-dark .anticon-close-circle,\n.theme-mode-dark .anticon-close {\n  color: var(--icon-btn-fill-color);\n}\nbody {\n  background: var(--bodyBg);\n}\nbody .ant-tabs {\n  color: var(--secondary-text-color);\n}\nbody .ant-tabs:not(.stock-tab) h1,\nbody .ant-tabs:not(.stock-tab) h2,\nbody .ant-tabs:not(.stock-tab) h3,\nbody .ant-tabs:not(.stock-tab) h4,\nbody .ant-tabs:not(.stock-tab) h5,\nbody .ant-tabs:not(.stock-tab) label,\nbody .ant-tabs:not(.stock-tab) span,\nbody .ant-tabs:not(.stock-tab) div,\nbody .ant-tabs:not(.stock-tab) label {\n  color: var(--secondary-text-color);\n}\nbody .ant-tabs .ant-tabs-nav::before {\n  border-bottom-color: var(--separator-color);\n}\nbody .ant-card {\n  background: var(--mainBg);\n  color: var(--secondary-text-color) !important;\n  border: 1px solid var(--borderColor);\n}\nbody .ant-modal .ant-modal-content {\n  background: var(--mainBg);\n  color: var(--secondary-text-color);\n}\nbody .ant-modal .ant-modal-content .up {\n  color: var(--upColor);\n}\nbody .ant-modal .ant-modal-content .down {\n  color: var(--downColor);\n}\nbody .ant-modal .ant-modal-content .norm {\n  color: var(--secondary-text-color) !important;\n}\nbody .ant-modal .ant-modal-content label {\n  background: var(--mainBg);\n  color: var(--secondary-text-color);\n}\nbody .ant-modal .ant-modal-content .fund-name {\n  color: var(--secondary-text-color);\n}\nbody .ant-modal .ant-modal-content .ant-modal-confirm-title {\n  color: var(--secondary-text-color);\n}\nbody .ant-modal .ant-modal-content .ant-modal-header {\n  background: var(--mainBg);\n  color: var(--secondary-text-color);\n  border-bottom-color: var(--separator-color);\n}\nbody .ant-modal .ant-modal-content .ant-modal-header .ant-modal-title {\n  color: var(--primary-text-color);\n}\nbody .ant-modal .ant-modal-content .ant-modal-footer {\n  border-top-color: var(--separator-color);\n}\nbody .ant-modal .ant-modal-content .ant-select-selector {\n  color: var(--secondary-text-color);\n  background: var(--input-bg-color);\n  border-color: var(--borderColor);\n}\nbody .ant-modal .ant-modal-content .ant-timeline {\n  color: var(--secondary-text-color);\n}\nbody .ant-statistic .text {\n  color: var(--secondary-text-color);\n}\nbody .ant-statistic .text h3 {\n  color: var(--secondary-text-color);\n}\nbody .ant-statistic .ant-row {\n  color: var(--secondary-text-color);\n}\nbody .ant-message .ant-message-notice-content {\n  background-color: var(--mainBg);\n  color: var(--secondary-text-color);\n}\nbody .ant-popover-inner {\n  background: var(--mainBg);\n  box-shadow: var(--shadowColor) 0px 3px 6px -4px, var(--shadowColor) 0px 6px 16px 0px, var(--shadowColor) 0px 9px 28px;\n}\nbody .ant-popover-inner .ant-form-item {\n  margin-bottom: 0 !important;\n}\nbody .ant-popover-inner label {\n  color: var(--secondary-text-color);\n}\nbody .ant-popover-arrow {\n  border-color: var(--mainBg) !important;\n}\nbody .ant-popover-inner .ant-input-affix-wrapper,\nbody .ant-modal .ant-input-affix-wrapper,\nbody .ant-popover-inner .ant-select-selector,\nbody .ant-modal .ant-select-selector {\n  border-color: var(--borderColor);\n  background: var(--input-bg-color);\n}\nbody .ant-popover-inner .ant-input-affix-wrapper input,\nbody .ant-modal .ant-input-affix-wrapper input,\nbody .ant-popover-inner .ant-select-selector input,\nbody .ant-modal .ant-select-selector input {\n  color: var(--secondary-text-color);\n  background: var(--input-bg-color);\n}\nbody .ant-popover-inner .ant-popover-message-title,\nbody .ant-modal .ant-popover-message-title {\n  color: var(--secondary-text-color);\n}\nbody .ant-popover-inner .ant-popover-message-title input,\nbody .ant-modal .ant-popover-message-title input {\n  background: var(--input-bg-color);\n  color: var(--secondary-text-color);\n}\nbody .ant-popover-inner .ant-btn,\nbody .ant-modal .ant-btn {\n  background: var(--mainBg);\n  color: var(--secondary-text-color);\n}\nbody .ant-popover-inner .ant-btn-primary,\nbody .ant-modal .ant-btn-primary {\n  color: #fff;\n  background: #1890ff;\n  border-color: #1890ff;\n}\nbody .ant-popover-inner .ant-btn-primary span,\nbody .ant-modal .ant-btn-primary span {\n  color: #fff;\n}\nbody .ant-popover-inner .ant-btn-primary[disabled],\nbody .ant-modal .ant-btn-primary[disabled] {\n  color: var(--btn-disable-text-color);\n  background: var(--btn-disable-bg-color);\n  border-color: var(--input-border-color);\n  text-shadow: none;\n  box-shadow: none;\n}\nbody .ant-popover-inner .ant-btn-primary[disabled] span,\nbody .ant-modal .ant-btn-primary[disabled] span {\n  color: var(--btn-disable-text-color);\n}\nbody .ant-select-dropdown {\n  background: var(--mainBg);\n}\nbody .ant-select-dropdown .ant-select-item {\n  color: var(--secondary-text-color);\n}\nbody .ant-select-dropdown .ant-select-item-option-active:not(.ant-select-item-option-disabled) {\n  background: var(--bodyBg);\n}\nbody {\n  display: flex;\n  overflow-y: scroll;\n  min-width: 600px;\n  color: var(--secondary-text-color);\n  background: var(--bodyBg);\n  font-size: 1rem;\n  line-height: 1.3rem;\n  justify-content: center;\n}\nbody .options {\n  padding: 10px;\n}\nbody .options .ant-tabs {\n  color: var(--secondary-text-color);\n}\nbody .options .ant-tabs h1,\nbody .options .ant-tabs h2,\nbody .options .ant-tabs h3,\nbody .options .ant-tabs h4,\nbody .options .ant-tabs h5,\nbody .options .ant-tabs label,\nbody .options .ant-tabs span {\n  color: var(--secondary-text-color);\n}\nbody .options .ant-tabs .ant-tabs-content-holder {\n  width: 500px;\n  border: 1px solid #f0f0f0;\n}\nbody .options .ant-tabs .ant-tabs-content-holder .ant-tabs-tabpane {\n  padding: 24px 0 24px 24px;\n}\nbody .options .ant-tabs .ant-tabs-content-holder .ant-divider {\n  border-color: var(--separator-color);\n}\nbody .options .ant-tabs .ant-tabs-content-holder .setting-title {\n  padding-top: 10px;\n  font-size: 2.5rem;\n  font-weight: 300;\n}\n.theme-mode-light .options .ant-tabs .ant-tabs-content-holder {\n  background: #fff;\n}\n",""]),n.exports=o},62:function(n,o,t){"use strict";t.r(o);var a=t(0),r=t.n(a),e=t(11),l=t.n(e),d=t(34),c=t(22),b=(t(51),t(35));t(56);var i=function(){return r.a.createElement("div",{className:"options"},r.a.createElement(b.a,{tabPosition:"left",type:"card"},r.a.createElement(b.a.TabPane,{tab:"系统",key:"1"},"系统配置"),r.a.createElement(b.a.TabPane,{tab:"帮助",key:"3"},"帮助联系")))};l.a.render(r.a.createElement(d.a,{store:c.a},r.a.createElement(i,null)),document.getElementById("root"))}});