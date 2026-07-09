var My=Object.defineProperty;var Dy=(e,n,t)=>n in e?My(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;var Ce=(e,n,t)=>Dy(e,typeof n!="symbol"?n+"":n,t);(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();var $a=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function yc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var If={exports:{}},Io={},Af={exports:{}},Z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yr=Symbol.for("react.element"),Ly=Symbol.for("react.portal"),Ny=Symbol.for("react.fragment"),jy=Symbol.for("react.strict_mode"),Oy=Symbol.for("react.profiler"),Fy=Symbol.for("react.provider"),zy=Symbol.for("react.context"),By=Symbol.for("react.forward_ref"),Wy=Symbol.for("react.suspense"),Vy=Symbol.for("react.memo"),Hy=Symbol.for("react.lazy"),Gu=Symbol.iterator;function $y(e){return e===null||typeof e!="object"?null:(e=Gu&&e[Gu]||e["@@iterator"],typeof e=="function"?e:null)}var Cf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Pf=Object.assign,_f={};function Oi(e,n,t){this.props=e,this.context=n,this.refs=_f,this.updater=t||Cf}Oi.prototype.isReactComponent={};Oi.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};Oi.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ef(){}Ef.prototype=Oi.prototype;function vc(e,n,t){this.props=e,this.context=n,this.refs=_f,this.updater=t||Cf}var bc=vc.prototype=new Ef;bc.constructor=vc;Pf(bc,Oi.prototype);bc.isPureReactComponent=!0;var Ku=Array.isArray,Tf=Object.prototype.hasOwnProperty,wc={current:null},Rf={key:!0,ref:!0,__self:!0,__source:!0};function Mf(e,n,t){var i,r={},a=null,o=null;if(n!=null)for(i in n.ref!==void 0&&(o=n.ref),n.key!==void 0&&(a=""+n.key),n)Tf.call(n,i)&&!Rf.hasOwnProperty(i)&&(r[i]=n[i]);var s=arguments.length-2;if(s===1)r.children=t;else if(1<s){for(var l=Array(s),c=0;c<s;c++)l[c]=arguments[c+2];r.children=l}if(e&&e.defaultProps)for(i in s=e.defaultProps,s)r[i]===void 0&&(r[i]=s[i]);return{$$typeof:Yr,type:e,key:a,ref:o,props:r,_owner:wc.current}}function Uy(e,n){return{$$typeof:Yr,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function xc(e){return typeof e=="object"&&e!==null&&e.$$typeof===Yr}function qy(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var Qu=/\/+/g;function Xo(e,n){return typeof e=="object"&&e!==null&&e.key!=null?qy(""+e.key):n.toString(36)}function _a(e,n,t,i,r){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(a){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Yr:case Ly:o=!0}}if(o)return o=e,r=r(o),e=i===""?"."+Xo(o,0):i,Ku(r)?(t="",e!=null&&(t=e.replace(Qu,"$&/")+"/"),_a(r,n,t,"",function(c){return c})):r!=null&&(xc(r)&&(r=Uy(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Qu,"$&/")+"/")+e)),n.push(r)),1;if(o=0,i=i===""?".":i+":",Ku(e))for(var s=0;s<e.length;s++){a=e[s];var l=i+Xo(a,s);o+=_a(a,n,t,l,r)}else if(l=$y(e),typeof l=="function")for(e=l.call(e),s=0;!(a=e.next()).done;)a=a.value,l=i+Xo(a,s++),o+=_a(a,n,t,l,r);else if(a==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return o}function ia(e,n,t){if(e==null)return e;var i=[],r=0;return _a(e,i,"","",function(a){return n.call(t,a,r++)}),i}function Yy(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var qe={current:null},Ea={transition:null},Gy={ReactCurrentDispatcher:qe,ReactCurrentBatchConfig:Ea,ReactCurrentOwner:wc};function Df(){throw Error("act(...) is not supported in production builds of React.")}Z.Children={map:ia,forEach:function(e,n,t){ia(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return ia(e,function(){n++}),n},toArray:function(e){return ia(e,function(n){return n})||[]},only:function(e){if(!xc(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Z.Component=Oi;Z.Fragment=Ny;Z.Profiler=Oy;Z.PureComponent=vc;Z.StrictMode=jy;Z.Suspense=Wy;Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Gy;Z.act=Df;Z.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var i=Pf({},e.props),r=e.key,a=e.ref,o=e._owner;if(n!=null){if(n.ref!==void 0&&(a=n.ref,o=wc.current),n.key!==void 0&&(r=""+n.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in n)Tf.call(n,l)&&!Rf.hasOwnProperty(l)&&(i[l]=n[l]===void 0&&s!==void 0?s[l]:n[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){s=Array(l);for(var c=0;c<l;c++)s[c]=arguments[c+2];i.children=s}return{$$typeof:Yr,type:e.type,key:r,ref:a,props:i,_owner:o}};Z.createContext=function(e){return e={$$typeof:zy,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Fy,_context:e},e.Consumer=e};Z.createElement=Mf;Z.createFactory=function(e){var n=Mf.bind(null,e);return n.type=e,n};Z.createRef=function(){return{current:null}};Z.forwardRef=function(e){return{$$typeof:By,render:e}};Z.isValidElement=xc;Z.lazy=function(e){return{$$typeof:Hy,_payload:{_status:-1,_result:e},_init:Yy}};Z.memo=function(e,n){return{$$typeof:Vy,type:e,compare:n===void 0?null:n}};Z.startTransition=function(e){var n=Ea.transition;Ea.transition={};try{e()}finally{Ea.transition=n}};Z.unstable_act=Df;Z.useCallback=function(e,n){return qe.current.useCallback(e,n)};Z.useContext=function(e){return qe.current.useContext(e)};Z.useDebugValue=function(){};Z.useDeferredValue=function(e){return qe.current.useDeferredValue(e)};Z.useEffect=function(e,n){return qe.current.useEffect(e,n)};Z.useId=function(){return qe.current.useId()};Z.useImperativeHandle=function(e,n,t){return qe.current.useImperativeHandle(e,n,t)};Z.useInsertionEffect=function(e,n){return qe.current.useInsertionEffect(e,n)};Z.useLayoutEffect=function(e,n){return qe.current.useLayoutEffect(e,n)};Z.useMemo=function(e,n){return qe.current.useMemo(e,n)};Z.useReducer=function(e,n,t){return qe.current.useReducer(e,n,t)};Z.useRef=function(e){return qe.current.useRef(e)};Z.useState=function(e){return qe.current.useState(e)};Z.useSyncExternalStore=function(e,n,t){return qe.current.useSyncExternalStore(e,n,t)};Z.useTransition=function(){return qe.current.useTransition()};Z.version="18.3.1";Af.exports=Z;var V=Af.exports;const vi=yc(V);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ky=V,Qy=Symbol.for("react.element"),Xy=Symbol.for("react.fragment"),Jy=Object.prototype.hasOwnProperty,Zy=Ky.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ev={key:!0,ref:!0,__self:!0,__source:!0};function Lf(e,n,t){var i,r={},a=null,o=null;t!==void 0&&(a=""+t),n.key!==void 0&&(a=""+n.key),n.ref!==void 0&&(o=n.ref);for(i in n)Jy.call(n,i)&&!ev.hasOwnProperty(i)&&(r[i]=n[i]);if(e&&e.defaultProps)for(i in n=e.defaultProps,n)r[i]===void 0&&(r[i]=n[i]);return{$$typeof:Qy,type:e,key:a,ref:o,props:r,_owner:Zy.current}}Io.Fragment=Xy;Io.jsx=Lf;Io.jsxs=Lf;If.exports=Io;var h=If.exports,Ys={},Nf={exports:{}},fn={},jf={exports:{}},Of={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(M,H){var w=M.length;M.push(H);e:for(;0<w;){var B=w-1>>>1,$=M[B];if(0<r($,H))M[B]=H,M[w]=$,w=B;else break e}}function t(M){return M.length===0?null:M[0]}function i(M){if(M.length===0)return null;var H=M[0],w=M.pop();if(w!==H){M[0]=w;e:for(var B=0,$=M.length,x=$>>>1;B<x;){var oe=2*(B+1)-1,pe=M[oe],C=oe+1,be=M[C];if(0>r(pe,w))C<$&&0>r(be,pe)?(M[B]=be,M[C]=w,B=C):(M[B]=pe,M[oe]=w,B=oe);else if(C<$&&0>r(be,w))M[B]=be,M[C]=w,B=C;else break e}}return H}function r(M,H){var w=M.sortIndex-H.sortIndex;return w!==0?w:M.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var l=[],c=[],d=1,u=null,p=3,f=!1,m=!1,b=!1,A=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(M){for(var H=t(c);H!==null;){if(H.callback===null)i(c);else if(H.startTime<=M)i(c),H.sortIndex=H.expirationTime,n(l,H);else break;H=t(c)}}function I(M){if(b=!1,v(M),!m)if(t(l)!==null)m=!0,q(P);else{var H=t(c);H!==null&&ne(I,H.startTime-M)}}function P(M,H){m=!1,b&&(b=!1,y(R),R=-1),f=!0;var w=p;try{for(v(H),u=t(l);u!==null&&(!(u.expirationTime>H)||M&&!T());){var B=u.callback;if(typeof B=="function"){u.callback=null,p=u.priorityLevel;var $=B(u.expirationTime<=H);H=e.unstable_now(),typeof $=="function"?u.callback=$:u===t(l)&&i(l),v(H)}else i(l);u=t(l)}if(u!==null)var x=!0;else{var oe=t(c);oe!==null&&ne(I,oe.startTime-H),x=!1}return x}finally{u=null,p=w,f=!1}}var S=!1,_=null,R=-1,F=5,k=-1;function T(){return!(e.unstable_now()-k<F)}function z(){if(_!==null){var M=e.unstable_now();k=M;var H=!0;try{H=_(!0,M)}finally{H?G():(S=!1,_=null)}}else S=!1}var G;if(typeof g=="function")G=function(){g(z)};else if(typeof MessageChannel<"u"){var Q=new MessageChannel,N=Q.port2;Q.port1.onmessage=z,G=function(){N.postMessage(null)}}else G=function(){A(z,0)};function q(M){_=M,S||(S=!0,G())}function ne(M,H){R=A(function(){M(e.unstable_now())},H)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(M){M.callback=null},e.unstable_continueExecution=function(){m||f||(m=!0,q(P))},e.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<M?Math.floor(1e3/M):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return t(l)},e.unstable_next=function(M){switch(p){case 1:case 2:case 3:var H=3;break;default:H=p}var w=p;p=H;try{return M()}finally{p=w}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(M,H){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var w=p;p=M;try{return H()}finally{p=w}},e.unstable_scheduleCallback=function(M,H,w){var B=e.unstable_now();switch(typeof w=="object"&&w!==null?(w=w.delay,w=typeof w=="number"&&0<w?B+w:B):w=B,M){case 1:var $=-1;break;case 2:$=250;break;case 5:$=1073741823;break;case 4:$=1e4;break;default:$=5e3}return $=w+$,M={id:d++,callback:H,priorityLevel:M,startTime:w,expirationTime:$,sortIndex:-1},w>B?(M.sortIndex=w,n(c,M),t(l)===null&&M===t(c)&&(b?(y(R),R=-1):b=!0,ne(I,w-B))):(M.sortIndex=$,n(l,M),m||f||(m=!0,q(P))),M},e.unstable_shouldYield=T,e.unstable_wrapCallback=function(M){var H=p;return function(){var w=p;p=H;try{return M.apply(this,arguments)}finally{p=w}}}})(Of);jf.exports=Of;var nv=jf.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tv=V,pn=nv;function D(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ff=new Set,Sr={};function Zt(e,n){_i(e,n),_i(e+"Capture",n)}function _i(e,n){for(Sr[e]=n,e=0;e<n.length;e++)Ff.add(n[e])}var Kn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Gs=Object.prototype.hasOwnProperty,iv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Xu={},Ju={};function rv(e){return Gs.call(Ju,e)?!0:Gs.call(Xu,e)?!1:iv.test(e)?Ju[e]=!0:(Xu[e]=!0,!1)}function av(e,n,t,i){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function ov(e,n,t,i){if(n===null||typeof n>"u"||av(e,n,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function Ye(e,n,t,i,r,a,o){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=a,this.removeEmptyString=o}var De={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){De[e]=new Ye(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];De[n]=new Ye(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){De[e]=new Ye(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){De[e]=new Ye(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){De[e]=new Ye(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){De[e]=new Ye(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){De[e]=new Ye(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){De[e]=new Ye(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){De[e]=new Ye(e,5,!1,e.toLowerCase(),null,!1,!1)});var kc=/[\-:]([a-z])/g;function Sc(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(kc,Sc);De[n]=new Ye(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(kc,Sc);De[n]=new Ye(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(kc,Sc);De[n]=new Ye(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){De[e]=new Ye(e,1,!1,e.toLowerCase(),null,!1,!1)});De.xlinkHref=new Ye("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){De[e]=new Ye(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ic(e,n,t,i){var r=De.hasOwnProperty(n)?De[n]:null;(r!==null?r.type!==0:i||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(ov(n,t,r,i)&&(t=null),i||r===null?rv(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):r.mustUseProperty?e[r.propertyName]=t===null?r.type===3?!1:"":t:(n=r.attributeName,i=r.attributeNamespace,t===null?e.removeAttribute(n):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?e.setAttributeNS(i,n,t):e.setAttribute(n,t))))}var Zn=tv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ra=Symbol.for("react.element"),ai=Symbol.for("react.portal"),oi=Symbol.for("react.fragment"),Ac=Symbol.for("react.strict_mode"),Ks=Symbol.for("react.profiler"),zf=Symbol.for("react.provider"),Bf=Symbol.for("react.context"),Cc=Symbol.for("react.forward_ref"),Qs=Symbol.for("react.suspense"),Xs=Symbol.for("react.suspense_list"),Pc=Symbol.for("react.memo"),rt=Symbol.for("react.lazy"),Wf=Symbol.for("react.offscreen"),Zu=Symbol.iterator;function Ui(e){return e===null||typeof e!="object"?null:(e=Zu&&e[Zu]||e["@@iterator"],typeof e=="function"?e:null)}var ve=Object.assign,Jo;function nr(e){if(Jo===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Jo=n&&n[1]||""}return`
`+Jo+e}var Zo=!1;function es(e,n){if(!e||Zo)return"";Zo=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(c){var i=c}Reflect.construct(e,[],n)}else{try{n.call()}catch(c){i=c}e.call(n.prototype)}else{try{throw Error()}catch(c){i=c}e()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),a=i.stack.split(`
`),o=r.length-1,s=a.length-1;1<=o&&0<=s&&r[o]!==a[s];)s--;for(;1<=o&&0<=s;o--,s--)if(r[o]!==a[s]){if(o!==1||s!==1)do if(o--,s--,0>s||r[o]!==a[s]){var l=`
`+r[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=o&&0<=s);break}}}finally{Zo=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?nr(e):""}function sv(e){switch(e.tag){case 5:return nr(e.type);case 16:return nr("Lazy");case 13:return nr("Suspense");case 19:return nr("SuspenseList");case 0:case 2:case 15:return e=es(e.type,!1),e;case 11:return e=es(e.type.render,!1),e;case 1:return e=es(e.type,!0),e;default:return""}}function Js(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case oi:return"Fragment";case ai:return"Portal";case Ks:return"Profiler";case Ac:return"StrictMode";case Qs:return"Suspense";case Xs:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Bf:return(e.displayName||"Context")+".Consumer";case zf:return(e._context.displayName||"Context")+".Provider";case Cc:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Pc:return n=e.displayName||null,n!==null?n:Js(e.type)||"Memo";case rt:n=e._payload,e=e._init;try{return Js(e(n))}catch{}}return null}function lv(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Js(n);case 8:return n===Ac?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function St(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Vf(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function cv(e){var n=Vf(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),i=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,a=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,a.call(this,o)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function aa(e){e._valueTracker||(e._valueTracker=cv(e))}function Hf(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),i="";return e&&(i=Vf(e)?e.checked?"true":"false":e.value),e=i,e!==t?(n.setValue(e),!0):!1}function Ua(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Zs(e,n){var t=n.checked;return ve({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function ed(e,n){var t=n.defaultValue==null?"":n.defaultValue,i=n.checked!=null?n.checked:n.defaultChecked;t=St(n.value!=null?n.value:t),e._wrapperState={initialChecked:i,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function $f(e,n){n=n.checked,n!=null&&Ic(e,"checked",n,!1)}function el(e,n){$f(e,n);var t=St(n.value),i=n.type;if(t!=null)i==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(i==="submit"||i==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?nl(e,n.type,t):n.hasOwnProperty("defaultValue")&&nl(e,n.type,St(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function nd(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var i=n.type;if(!(i!=="submit"&&i!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function nl(e,n,t){(n!=="number"||Ua(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var tr=Array.isArray;function bi(e,n,t,i){if(e=e.options,n){n={};for(var r=0;r<t.length;r++)n["$"+t[r]]=!0;for(t=0;t<e.length;t++)r=n.hasOwnProperty("$"+e[t].value),e[t].selected!==r&&(e[t].selected=r),r&&i&&(e[t].defaultSelected=!0)}else{for(t=""+St(t),n=null,r=0;r<e.length;r++){if(e[r].value===t){e[r].selected=!0,i&&(e[r].defaultSelected=!0);return}n!==null||e[r].disabled||(n=e[r])}n!==null&&(n.selected=!0)}}function tl(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(D(91));return ve({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function td(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(D(92));if(tr(t)){if(1<t.length)throw Error(D(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:St(t)}}function Uf(e,n){var t=St(n.value),i=St(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),i!=null&&(e.defaultValue=""+i)}function id(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function qf(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function il(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?qf(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var oa,Yf=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,i,r){MSApp.execUnsafeLocalFunction(function(){return e(n,t,i,r)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(oa=oa||document.createElement("div"),oa.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=oa.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Ir(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var sr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},uv=["Webkit","ms","Moz","O"];Object.keys(sr).forEach(function(e){uv.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),sr[n]=sr[e]})});function Gf(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||sr.hasOwnProperty(e)&&sr[e]?(""+n).trim():n+"px"}function Kf(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=Gf(t,n[t],i);t==="float"&&(t="cssFloat"),i?e.setProperty(t,r):e[t]=r}}var dv=ve({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function rl(e,n){if(n){if(dv[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(D(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(D(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(D(61))}if(n.style!=null&&typeof n.style!="object")throw Error(D(62))}}function al(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ol=null;function _c(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var sl=null,wi=null,xi=null;function rd(e){if(e=Qr(e)){if(typeof sl!="function")throw Error(D(280));var n=e.stateNode;n&&(n=Eo(n),sl(e.stateNode,e.type,n))}}function Qf(e){wi?xi?xi.push(e):xi=[e]:wi=e}function Xf(){if(wi){var e=wi,n=xi;if(xi=wi=null,rd(e),n)for(e=0;e<n.length;e++)rd(n[e])}}function Jf(e,n){return e(n)}function Zf(){}var ns=!1;function eh(e,n,t){if(ns)return e(n,t);ns=!0;try{return Jf(e,n,t)}finally{ns=!1,(wi!==null||xi!==null)&&(Zf(),Xf())}}function Ar(e,n){var t=e.stateNode;if(t===null)return null;var i=Eo(t);if(i===null)return null;t=i[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(D(231,n,typeof t));return t}var ll=!1;if(Kn)try{var qi={};Object.defineProperty(qi,"passive",{get:function(){ll=!0}}),window.addEventListener("test",qi,qi),window.removeEventListener("test",qi,qi)}catch{ll=!1}function pv(e,n,t,i,r,a,o,s,l){var c=Array.prototype.slice.call(arguments,3);try{n.apply(t,c)}catch(d){this.onError(d)}}var lr=!1,qa=null,Ya=!1,cl=null,fv={onError:function(e){lr=!0,qa=e}};function hv(e,n,t,i,r,a,o,s,l){lr=!1,qa=null,pv.apply(fv,arguments)}function mv(e,n,t,i,r,a,o,s,l){if(hv.apply(this,arguments),lr){if(lr){var c=qa;lr=!1,qa=null}else throw Error(D(198));Ya||(Ya=!0,cl=c)}}function ei(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function nh(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function ad(e){if(ei(e)!==e)throw Error(D(188))}function gv(e){var n=e.alternate;if(!n){if(n=ei(e),n===null)throw Error(D(188));return n!==e?null:e}for(var t=e,i=n;;){var r=t.return;if(r===null)break;var a=r.alternate;if(a===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===a.child){for(a=r.child;a;){if(a===t)return ad(r),e;if(a===i)return ad(r),n;a=a.sibling}throw Error(D(188))}if(t.return!==i.return)t=r,i=a;else{for(var o=!1,s=r.child;s;){if(s===t){o=!0,t=r,i=a;break}if(s===i){o=!0,i=r,t=a;break}s=s.sibling}if(!o){for(s=a.child;s;){if(s===t){o=!0,t=a,i=r;break}if(s===i){o=!0,i=a,t=r;break}s=s.sibling}if(!o)throw Error(D(189))}}if(t.alternate!==i)throw Error(D(190))}if(t.tag!==3)throw Error(D(188));return t.stateNode.current===t?e:n}function th(e){return e=gv(e),e!==null?ih(e):null}function ih(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=ih(e);if(n!==null)return n;e=e.sibling}return null}var rh=pn.unstable_scheduleCallback,od=pn.unstable_cancelCallback,yv=pn.unstable_shouldYield,vv=pn.unstable_requestPaint,xe=pn.unstable_now,bv=pn.unstable_getCurrentPriorityLevel,Ec=pn.unstable_ImmediatePriority,ah=pn.unstable_UserBlockingPriority,Ga=pn.unstable_NormalPriority,wv=pn.unstable_LowPriority,oh=pn.unstable_IdlePriority,Ao=null,jn=null;function xv(e){if(jn&&typeof jn.onCommitFiberRoot=="function")try{jn.onCommitFiberRoot(Ao,e,void 0,(e.current.flags&128)===128)}catch{}}var Pn=Math.clz32?Math.clz32:Iv,kv=Math.log,Sv=Math.LN2;function Iv(e){return e>>>=0,e===0?32:31-(kv(e)/Sv|0)|0}var sa=64,la=4194304;function ir(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ka(e,n){var t=e.pendingLanes;if(t===0)return 0;var i=0,r=e.suspendedLanes,a=e.pingedLanes,o=t&268435455;if(o!==0){var s=o&~r;s!==0?i=ir(s):(a&=o,a!==0&&(i=ir(a)))}else o=t&~r,o!==0?i=ir(o):a!==0&&(i=ir(a));if(i===0)return 0;if(n!==0&&n!==i&&!(n&r)&&(r=i&-i,a=n&-n,r>=a||r===16&&(a&4194240)!==0))return n;if(i&4&&(i|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=i;0<n;)t=31-Pn(n),r=1<<t,i|=e[t],n&=~r;return i}function Av(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Cv(e,n){for(var t=e.suspendedLanes,i=e.pingedLanes,r=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-Pn(a),s=1<<o,l=r[o];l===-1?(!(s&t)||s&i)&&(r[o]=Av(s,n)):l<=n&&(e.expiredLanes|=s),a&=~s}}function ul(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function sh(){var e=sa;return sa<<=1,!(sa&4194240)&&(sa=64),e}function ts(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Gr(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Pn(n),e[n]=t}function Pv(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var i=e.eventTimes;for(e=e.expirationTimes;0<t;){var r=31-Pn(t),a=1<<r;n[r]=0,i[r]=-1,e[r]=-1,t&=~a}}function Tc(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var i=31-Pn(t),r=1<<i;r&n|e[i]&n&&(e[i]|=n),t&=~r}}var se=0;function lh(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var ch,Rc,uh,dh,ph,dl=!1,ca=[],pt=null,ft=null,ht=null,Cr=new Map,Pr=new Map,ot=[],_v="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function sd(e,n){switch(e){case"focusin":case"focusout":pt=null;break;case"dragenter":case"dragleave":ft=null;break;case"mouseover":case"mouseout":ht=null;break;case"pointerover":case"pointerout":Cr.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Pr.delete(n.pointerId)}}function Yi(e,n,t,i,r,a){return e===null||e.nativeEvent!==a?(e={blockedOn:n,domEventName:t,eventSystemFlags:i,nativeEvent:a,targetContainers:[r]},n!==null&&(n=Qr(n),n!==null&&Rc(n)),e):(e.eventSystemFlags|=i,n=e.targetContainers,r!==null&&n.indexOf(r)===-1&&n.push(r),e)}function Ev(e,n,t,i,r){switch(n){case"focusin":return pt=Yi(pt,e,n,t,i,r),!0;case"dragenter":return ft=Yi(ft,e,n,t,i,r),!0;case"mouseover":return ht=Yi(ht,e,n,t,i,r),!0;case"pointerover":var a=r.pointerId;return Cr.set(a,Yi(Cr.get(a)||null,e,n,t,i,r)),!0;case"gotpointercapture":return a=r.pointerId,Pr.set(a,Yi(Pr.get(a)||null,e,n,t,i,r)),!0}return!1}function fh(e){var n=Ft(e.target);if(n!==null){var t=ei(n);if(t!==null){if(n=t.tag,n===13){if(n=nh(t),n!==null){e.blockedOn=n,ph(e.priority,function(){uh(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ta(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=pl(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var i=new t.constructor(t.type,t);ol=i,t.target.dispatchEvent(i),ol=null}else return n=Qr(t),n!==null&&Rc(n),e.blockedOn=t,!1;n.shift()}return!0}function ld(e,n,t){Ta(e)&&t.delete(n)}function Tv(){dl=!1,pt!==null&&Ta(pt)&&(pt=null),ft!==null&&Ta(ft)&&(ft=null),ht!==null&&Ta(ht)&&(ht=null),Cr.forEach(ld),Pr.forEach(ld)}function Gi(e,n){e.blockedOn===n&&(e.blockedOn=null,dl||(dl=!0,pn.unstable_scheduleCallback(pn.unstable_NormalPriority,Tv)))}function _r(e){function n(r){return Gi(r,e)}if(0<ca.length){Gi(ca[0],e);for(var t=1;t<ca.length;t++){var i=ca[t];i.blockedOn===e&&(i.blockedOn=null)}}for(pt!==null&&Gi(pt,e),ft!==null&&Gi(ft,e),ht!==null&&Gi(ht,e),Cr.forEach(n),Pr.forEach(n),t=0;t<ot.length;t++)i=ot[t],i.blockedOn===e&&(i.blockedOn=null);for(;0<ot.length&&(t=ot[0],t.blockedOn===null);)fh(t),t.blockedOn===null&&ot.shift()}var ki=Zn.ReactCurrentBatchConfig,Qa=!0;function Rv(e,n,t,i){var r=se,a=ki.transition;ki.transition=null;try{se=1,Mc(e,n,t,i)}finally{se=r,ki.transition=a}}function Mv(e,n,t,i){var r=se,a=ki.transition;ki.transition=null;try{se=4,Mc(e,n,t,i)}finally{se=r,ki.transition=a}}function Mc(e,n,t,i){if(Qa){var r=pl(e,n,t,i);if(r===null)ps(e,n,i,Xa,t),sd(e,i);else if(Ev(r,e,n,t,i))i.stopPropagation();else if(sd(e,i),n&4&&-1<_v.indexOf(e)){for(;r!==null;){var a=Qr(r);if(a!==null&&ch(a),a=pl(e,n,t,i),a===null&&ps(e,n,i,Xa,t),a===r)break;r=a}r!==null&&i.stopPropagation()}else ps(e,n,i,null,t)}}var Xa=null;function pl(e,n,t,i){if(Xa=null,e=_c(i),e=Ft(e),e!==null)if(n=ei(e),n===null)e=null;else if(t=n.tag,t===13){if(e=nh(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Xa=e,null}function hh(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(bv()){case Ec:return 1;case ah:return 4;case Ga:case wv:return 16;case oh:return 536870912;default:return 16}default:return 16}}var lt=null,Dc=null,Ra=null;function mh(){if(Ra)return Ra;var e,n=Dc,t=n.length,i,r="value"in lt?lt.value:lt.textContent,a=r.length;for(e=0;e<t&&n[e]===r[e];e++);var o=t-e;for(i=1;i<=o&&n[t-i]===r[a-i];i++);return Ra=r.slice(e,1<i?1-i:void 0)}function Ma(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function ua(){return!0}function cd(){return!1}function hn(e){function n(t,i,r,a,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=a,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(t=e[s],this[s]=t?t(a):a[s]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?ua:cd,this.isPropagationStopped=cd,this}return ve(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=ua)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=ua)},persist:function(){},isPersistent:ua}),n}var Fi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Lc=hn(Fi),Kr=ve({},Fi,{view:0,detail:0}),Dv=hn(Kr),is,rs,Ki,Co=ve({},Kr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Nc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ki&&(Ki&&e.type==="mousemove"?(is=e.screenX-Ki.screenX,rs=e.screenY-Ki.screenY):rs=is=0,Ki=e),is)},movementY:function(e){return"movementY"in e?e.movementY:rs}}),ud=hn(Co),Lv=ve({},Co,{dataTransfer:0}),Nv=hn(Lv),jv=ve({},Kr,{relatedTarget:0}),as=hn(jv),Ov=ve({},Fi,{animationName:0,elapsedTime:0,pseudoElement:0}),Fv=hn(Ov),zv=ve({},Fi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Bv=hn(zv),Wv=ve({},Fi,{data:0}),dd=hn(Wv),Vv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Hv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},$v={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Uv(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=$v[e])?!!n[e]:!1}function Nc(){return Uv}var qv=ve({},Kr,{key:function(e){if(e.key){var n=Vv[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Ma(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Hv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Nc,charCode:function(e){return e.type==="keypress"?Ma(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ma(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Yv=hn(qv),Gv=ve({},Co,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),pd=hn(Gv),Kv=ve({},Kr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Nc}),Qv=hn(Kv),Xv=ve({},Fi,{propertyName:0,elapsedTime:0,pseudoElement:0}),Jv=hn(Xv),Zv=ve({},Co,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),eb=hn(Zv),nb=[9,13,27,32],jc=Kn&&"CompositionEvent"in window,cr=null;Kn&&"documentMode"in document&&(cr=document.documentMode);var tb=Kn&&"TextEvent"in window&&!cr,gh=Kn&&(!jc||cr&&8<cr&&11>=cr),fd=" ",hd=!1;function yh(e,n){switch(e){case"keyup":return nb.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function vh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var si=!1;function ib(e,n){switch(e){case"compositionend":return vh(n);case"keypress":return n.which!==32?null:(hd=!0,fd);case"textInput":return e=n.data,e===fd&&hd?null:e;default:return null}}function rb(e,n){if(si)return e==="compositionend"||!jc&&yh(e,n)?(e=mh(),Ra=Dc=lt=null,si=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return gh&&n.locale!=="ko"?null:n.data;default:return null}}var ab={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function md(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!ab[e.type]:n==="textarea"}function bh(e,n,t,i){Qf(i),n=Ja(n,"onChange"),0<n.length&&(t=new Lc("onChange","change",null,t,i),e.push({event:t,listeners:n}))}var ur=null,Er=null;function ob(e){Th(e,0)}function Po(e){var n=ui(e);if(Hf(n))return e}function sb(e,n){if(e==="change")return n}var wh=!1;if(Kn){var os;if(Kn){var ss="oninput"in document;if(!ss){var gd=document.createElement("div");gd.setAttribute("oninput","return;"),ss=typeof gd.oninput=="function"}os=ss}else os=!1;wh=os&&(!document.documentMode||9<document.documentMode)}function yd(){ur&&(ur.detachEvent("onpropertychange",xh),Er=ur=null)}function xh(e){if(e.propertyName==="value"&&Po(Er)){var n=[];bh(n,Er,e,_c(e)),eh(ob,n)}}function lb(e,n,t){e==="focusin"?(yd(),ur=n,Er=t,ur.attachEvent("onpropertychange",xh)):e==="focusout"&&yd()}function cb(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Po(Er)}function ub(e,n){if(e==="click")return Po(n)}function db(e,n){if(e==="input"||e==="change")return Po(n)}function pb(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Tn=typeof Object.is=="function"?Object.is:pb;function Tr(e,n){if(Tn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),i=Object.keys(n);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!Gs.call(n,r)||!Tn(e[r],n[r]))return!1}return!0}function vd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function bd(e,n){var t=vd(e);e=0;for(var i;t;){if(t.nodeType===3){if(i=e+t.textContent.length,e<=n&&i>=n)return{node:t,offset:n-e};e=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=vd(t)}}function kh(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?kh(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Sh(){for(var e=window,n=Ua();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Ua(e.document)}return n}function Oc(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function fb(e){var n=Sh(),t=e.focusedElem,i=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&kh(t.ownerDocument.documentElement,t)){if(i!==null&&Oc(t)){if(n=i.start,e=i.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var r=t.textContent.length,a=Math.min(i.start,r);i=i.end===void 0?a:Math.min(i.end,r),!e.extend&&a>i&&(r=i,i=a,a=r),r=bd(t,a);var o=bd(t,i);r&&o&&(e.rangeCount!==1||e.anchorNode!==r.node||e.anchorOffset!==r.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(n=n.createRange(),n.setStart(r.node,r.offset),e.removeAllRanges(),a>i?(e.addRange(n),e.extend(o.node,o.offset)):(n.setEnd(o.node,o.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var hb=Kn&&"documentMode"in document&&11>=document.documentMode,li=null,fl=null,dr=null,hl=!1;function wd(e,n,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;hl||li==null||li!==Ua(i)||(i=li,"selectionStart"in i&&Oc(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),dr&&Tr(dr,i)||(dr=i,i=Ja(fl,"onSelect"),0<i.length&&(n=new Lc("onSelect","select",null,n,t),e.push({event:n,listeners:i}),n.target=li)))}function da(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var ci={animationend:da("Animation","AnimationEnd"),animationiteration:da("Animation","AnimationIteration"),animationstart:da("Animation","AnimationStart"),transitionend:da("Transition","TransitionEnd")},ls={},Ih={};Kn&&(Ih=document.createElement("div").style,"AnimationEvent"in window||(delete ci.animationend.animation,delete ci.animationiteration.animation,delete ci.animationstart.animation),"TransitionEvent"in window||delete ci.transitionend.transition);function _o(e){if(ls[e])return ls[e];if(!ci[e])return e;var n=ci[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Ih)return ls[e]=n[t];return e}var Ah=_o("animationend"),Ch=_o("animationiteration"),Ph=_o("animationstart"),_h=_o("transitionend"),Eh=new Map,xd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function At(e,n){Eh.set(e,n),Zt(n,[e])}for(var cs=0;cs<xd.length;cs++){var us=xd[cs],mb=us.toLowerCase(),gb=us[0].toUpperCase()+us.slice(1);At(mb,"on"+gb)}At(Ah,"onAnimationEnd");At(Ch,"onAnimationIteration");At(Ph,"onAnimationStart");At("dblclick","onDoubleClick");At("focusin","onFocus");At("focusout","onBlur");At(_h,"onTransitionEnd");_i("onMouseEnter",["mouseout","mouseover"]);_i("onMouseLeave",["mouseout","mouseover"]);_i("onPointerEnter",["pointerout","pointerover"]);_i("onPointerLeave",["pointerout","pointerover"]);Zt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Zt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Zt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Zt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Zt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Zt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var rr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),yb=new Set("cancel close invalid load scroll toggle".split(" ").concat(rr));function kd(e,n,t){var i=e.type||"unknown-event";e.currentTarget=t,mv(i,n,void 0,e),e.currentTarget=null}function Th(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var i=e[t],r=i.event;i=i.listeners;e:{var a=void 0;if(n)for(var o=i.length-1;0<=o;o--){var s=i[o],l=s.instance,c=s.currentTarget;if(s=s.listener,l!==a&&r.isPropagationStopped())break e;kd(r,s,c),a=l}else for(o=0;o<i.length;o++){if(s=i[o],l=s.instance,c=s.currentTarget,s=s.listener,l!==a&&r.isPropagationStopped())break e;kd(r,s,c),a=l}}}if(Ya)throw e=cl,Ya=!1,cl=null,e}function fe(e,n){var t=n[bl];t===void 0&&(t=n[bl]=new Set);var i=e+"__bubble";t.has(i)||(Rh(n,e,2,!1),t.add(i))}function ds(e,n,t){var i=0;n&&(i|=4),Rh(t,e,i,n)}var pa="_reactListening"+Math.random().toString(36).slice(2);function Rr(e){if(!e[pa]){e[pa]=!0,Ff.forEach(function(t){t!=="selectionchange"&&(yb.has(t)||ds(t,!1,e),ds(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[pa]||(n[pa]=!0,ds("selectionchange",!1,n))}}function Rh(e,n,t,i){switch(hh(n)){case 1:var r=Rv;break;case 4:r=Mv;break;default:r=Mc}t=r.bind(null,n,t,e),r=void 0,!ll||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(r=!0),i?r!==void 0?e.addEventListener(n,t,{capture:!0,passive:r}):e.addEventListener(n,t,!0):r!==void 0?e.addEventListener(n,t,{passive:r}):e.addEventListener(n,t,!1)}function ps(e,n,t,i,r){var a=i;if(!(n&1)&&!(n&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var s=i.stateNode.containerInfo;if(s===r||s.nodeType===8&&s.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;s!==null;){if(o=Ft(s),o===null)return;if(l=o.tag,l===5||l===6){i=a=o;continue e}s=s.parentNode}}i=i.return}eh(function(){var c=a,d=_c(t),u=[];e:{var p=Eh.get(e);if(p!==void 0){var f=Lc,m=e;switch(e){case"keypress":if(Ma(t)===0)break e;case"keydown":case"keyup":f=Yv;break;case"focusin":m="focus",f=as;break;case"focusout":m="blur",f=as;break;case"beforeblur":case"afterblur":f=as;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":f=ud;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":f=Nv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":f=Qv;break;case Ah:case Ch:case Ph:f=Fv;break;case _h:f=Jv;break;case"scroll":f=Dv;break;case"wheel":f=eb;break;case"copy":case"cut":case"paste":f=Bv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":f=pd}var b=(n&4)!==0,A=!b&&e==="scroll",y=b?p!==null?p+"Capture":null:p;b=[];for(var g=c,v;g!==null;){v=g;var I=v.stateNode;if(v.tag===5&&I!==null&&(v=I,y!==null&&(I=Ar(g,y),I!=null&&b.push(Mr(g,I,v)))),A)break;g=g.return}0<b.length&&(p=new f(p,m,null,t,d),u.push({event:p,listeners:b}))}}if(!(n&7)){e:{if(p=e==="mouseover"||e==="pointerover",f=e==="mouseout"||e==="pointerout",p&&t!==ol&&(m=t.relatedTarget||t.fromElement)&&(Ft(m)||m[Qn]))break e;if((f||p)&&(p=d.window===d?d:(p=d.ownerDocument)?p.defaultView||p.parentWindow:window,f?(m=t.relatedTarget||t.toElement,f=c,m=m?Ft(m):null,m!==null&&(A=ei(m),m!==A||m.tag!==5&&m.tag!==6)&&(m=null)):(f=null,m=c),f!==m)){if(b=ud,I="onMouseLeave",y="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(b=pd,I="onPointerLeave",y="onPointerEnter",g="pointer"),A=f==null?p:ui(f),v=m==null?p:ui(m),p=new b(I,g+"leave",f,t,d),p.target=A,p.relatedTarget=v,I=null,Ft(d)===c&&(b=new b(y,g+"enter",m,t,d),b.target=v,b.relatedTarget=A,I=b),A=I,f&&m)n:{for(b=f,y=m,g=0,v=b;v;v=ii(v))g++;for(v=0,I=y;I;I=ii(I))v++;for(;0<g-v;)b=ii(b),g--;for(;0<v-g;)y=ii(y),v--;for(;g--;){if(b===y||y!==null&&b===y.alternate)break n;b=ii(b),y=ii(y)}b=null}else b=null;f!==null&&Sd(u,p,f,b,!1),m!==null&&A!==null&&Sd(u,A,m,b,!0)}}e:{if(p=c?ui(c):window,f=p.nodeName&&p.nodeName.toLowerCase(),f==="select"||f==="input"&&p.type==="file")var P=sb;else if(md(p))if(wh)P=db;else{P=cb;var S=lb}else(f=p.nodeName)&&f.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(P=ub);if(P&&(P=P(e,c))){bh(u,P,t,d);break e}S&&S(e,p,c),e==="focusout"&&(S=p._wrapperState)&&S.controlled&&p.type==="number"&&nl(p,"number",p.value)}switch(S=c?ui(c):window,e){case"focusin":(md(S)||S.contentEditable==="true")&&(li=S,fl=c,dr=null);break;case"focusout":dr=fl=li=null;break;case"mousedown":hl=!0;break;case"contextmenu":case"mouseup":case"dragend":hl=!1,wd(u,t,d);break;case"selectionchange":if(hb)break;case"keydown":case"keyup":wd(u,t,d)}var _;if(jc)e:{switch(e){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else si?yh(e,t)&&(R="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(R="onCompositionStart");R&&(gh&&t.locale!=="ko"&&(si||R!=="onCompositionStart"?R==="onCompositionEnd"&&si&&(_=mh()):(lt=d,Dc="value"in lt?lt.value:lt.textContent,si=!0)),S=Ja(c,R),0<S.length&&(R=new dd(R,e,null,t,d),u.push({event:R,listeners:S}),_?R.data=_:(_=vh(t),_!==null&&(R.data=_)))),(_=tb?ib(e,t):rb(e,t))&&(c=Ja(c,"onBeforeInput"),0<c.length&&(d=new dd("onBeforeInput","beforeinput",null,t,d),u.push({event:d,listeners:c}),d.data=_))}Th(u,n)})}function Mr(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Ja(e,n){for(var t=n+"Capture",i=[];e!==null;){var r=e,a=r.stateNode;r.tag===5&&a!==null&&(r=a,a=Ar(e,t),a!=null&&i.unshift(Mr(e,a,r)),a=Ar(e,n),a!=null&&i.push(Mr(e,a,r))),e=e.return}return i}function ii(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Sd(e,n,t,i,r){for(var a=n._reactName,o=[];t!==null&&t!==i;){var s=t,l=s.alternate,c=s.stateNode;if(l!==null&&l===i)break;s.tag===5&&c!==null&&(s=c,r?(l=Ar(t,a),l!=null&&o.unshift(Mr(t,l,s))):r||(l=Ar(t,a),l!=null&&o.push(Mr(t,l,s)))),t=t.return}o.length!==0&&e.push({event:n,listeners:o})}var vb=/\r\n?/g,bb=/\u0000|\uFFFD/g;function Id(e){return(typeof e=="string"?e:""+e).replace(vb,`
`).replace(bb,"")}function fa(e,n,t){if(n=Id(n),Id(e)!==n&&t)throw Error(D(425))}function Za(){}var ml=null,gl=null;function yl(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var vl=typeof setTimeout=="function"?setTimeout:void 0,wb=typeof clearTimeout=="function"?clearTimeout:void 0,Ad=typeof Promise=="function"?Promise:void 0,xb=typeof queueMicrotask=="function"?queueMicrotask:typeof Ad<"u"?function(e){return Ad.resolve(null).then(e).catch(kb)}:vl;function kb(e){setTimeout(function(){throw e})}function fs(e,n){var t=n,i=0;do{var r=t.nextSibling;if(e.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){e.removeChild(r),_r(n);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);_r(n)}function mt(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Cd(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var zi=Math.random().toString(36).slice(2),Nn="__reactFiber$"+zi,Dr="__reactProps$"+zi,Qn="__reactContainer$"+zi,bl="__reactEvents$"+zi,Sb="__reactListeners$"+zi,Ib="__reactHandles$"+zi;function Ft(e){var n=e[Nn];if(n)return n;for(var t=e.parentNode;t;){if(n=t[Qn]||t[Nn]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Cd(e);e!==null;){if(t=e[Nn])return t;e=Cd(e)}return n}e=t,t=e.parentNode}return null}function Qr(e){return e=e[Nn]||e[Qn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function ui(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(D(33))}function Eo(e){return e[Dr]||null}var wl=[],di=-1;function Ct(e){return{current:e}}function he(e){0>di||(e.current=wl[di],wl[di]=null,di--)}function de(e,n){di++,wl[di]=e.current,e.current=n}var It={},Fe=Ct(It),Ze=Ct(!1),$t=It;function Ei(e,n){var t=e.type.contextTypes;if(!t)return It;var i=e.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===n)return i.__reactInternalMemoizedMaskedChildContext;var r={},a;for(a in t)r[a]=n[a];return i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=r),r}function en(e){return e=e.childContextTypes,e!=null}function eo(){he(Ze),he(Fe)}function Pd(e,n,t){if(Fe.current!==It)throw Error(D(168));de(Fe,n),de(Ze,t)}function Mh(e,n,t){var i=e.stateNode;if(n=n.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in n))throw Error(D(108,lv(e)||"Unknown",r));return ve({},t,i)}function no(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||It,$t=Fe.current,de(Fe,e),de(Ze,Ze.current),!0}function _d(e,n,t){var i=e.stateNode;if(!i)throw Error(D(169));t?(e=Mh(e,n,$t),i.__reactInternalMemoizedMergedChildContext=e,he(Ze),he(Fe),de(Fe,e)):he(Ze),de(Ze,t)}var Vn=null,To=!1,hs=!1;function Dh(e){Vn===null?Vn=[e]:Vn.push(e)}function Ab(e){To=!0,Dh(e)}function Pt(){if(!hs&&Vn!==null){hs=!0;var e=0,n=se;try{var t=Vn;for(se=1;e<t.length;e++){var i=t[e];do i=i(!0);while(i!==null)}Vn=null,To=!1}catch(r){throw Vn!==null&&(Vn=Vn.slice(e+1)),rh(Ec,Pt),r}finally{se=n,hs=!1}}return null}var pi=[],fi=0,to=null,io=0,mn=[],gn=0,Ut=null,Hn=1,$n="";function Dt(e,n){pi[fi++]=io,pi[fi++]=to,to=e,io=n}function Lh(e,n,t){mn[gn++]=Hn,mn[gn++]=$n,mn[gn++]=Ut,Ut=e;var i=Hn;e=$n;var r=32-Pn(i)-1;i&=~(1<<r),t+=1;var a=32-Pn(n)+r;if(30<a){var o=r-r%5;a=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Hn=1<<32-Pn(n)+r|t<<r|i,$n=a+e}else Hn=1<<a|t<<r|i,$n=e}function Fc(e){e.return!==null&&(Dt(e,1),Lh(e,1,0))}function zc(e){for(;e===to;)to=pi[--fi],pi[fi]=null,io=pi[--fi],pi[fi]=null;for(;e===Ut;)Ut=mn[--gn],mn[gn]=null,$n=mn[--gn],mn[gn]=null,Hn=mn[--gn],mn[gn]=null}var cn=null,ln=null,me=!1,Cn=null;function Nh(e,n){var t=vn(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function Ed(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,cn=e,ln=mt(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,cn=e,ln=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=Ut!==null?{id:Hn,overflow:$n}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=vn(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,cn=e,ln=null,!0):!1;default:return!1}}function xl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function kl(e){if(me){var n=ln;if(n){var t=n;if(!Ed(e,n)){if(xl(e))throw Error(D(418));n=mt(t.nextSibling);var i=cn;n&&Ed(e,n)?Nh(i,t):(e.flags=e.flags&-4097|2,me=!1,cn=e)}}else{if(xl(e))throw Error(D(418));e.flags=e.flags&-4097|2,me=!1,cn=e}}}function Td(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;cn=e}function ha(e){if(e!==cn)return!1;if(!me)return Td(e),me=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!yl(e.type,e.memoizedProps)),n&&(n=ln)){if(xl(e))throw jh(),Error(D(418));for(;n;)Nh(e,n),n=mt(n.nextSibling)}if(Td(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(D(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){ln=mt(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}ln=null}}else ln=cn?mt(e.stateNode.nextSibling):null;return!0}function jh(){for(var e=ln;e;)e=mt(e.nextSibling)}function Ti(){ln=cn=null,me=!1}function Bc(e){Cn===null?Cn=[e]:Cn.push(e)}var Cb=Zn.ReactCurrentBatchConfig;function Qi(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(D(309));var i=t.stateNode}if(!i)throw Error(D(147,e));var r=i,a=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===a?n.ref:(n=function(o){var s=r.refs;o===null?delete s[a]:s[a]=o},n._stringRef=a,n)}if(typeof e!="string")throw Error(D(284));if(!t._owner)throw Error(D(290,e))}return e}function ma(e,n){throw e=Object.prototype.toString.call(n),Error(D(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Rd(e){var n=e._init;return n(e._payload)}function Oh(e){function n(y,g){if(e){var v=y.deletions;v===null?(y.deletions=[g],y.flags|=16):v.push(g)}}function t(y,g){if(!e)return null;for(;g!==null;)n(y,g),g=g.sibling;return null}function i(y,g){for(y=new Map;g!==null;)g.key!==null?y.set(g.key,g):y.set(g.index,g),g=g.sibling;return y}function r(y,g){return y=bt(y,g),y.index=0,y.sibling=null,y}function a(y,g,v){return y.index=v,e?(v=y.alternate,v!==null?(v=v.index,v<g?(y.flags|=2,g):v):(y.flags|=2,g)):(y.flags|=1048576,g)}function o(y){return e&&y.alternate===null&&(y.flags|=2),y}function s(y,g,v,I){return g===null||g.tag!==6?(g=xs(v,y.mode,I),g.return=y,g):(g=r(g,v),g.return=y,g)}function l(y,g,v,I){var P=v.type;return P===oi?d(y,g,v.props.children,I,v.key):g!==null&&(g.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===rt&&Rd(P)===g.type)?(I=r(g,v.props),I.ref=Qi(y,g,v),I.return=y,I):(I=za(v.type,v.key,v.props,null,y.mode,I),I.ref=Qi(y,g,v),I.return=y,I)}function c(y,g,v,I){return g===null||g.tag!==4||g.stateNode.containerInfo!==v.containerInfo||g.stateNode.implementation!==v.implementation?(g=ks(v,y.mode,I),g.return=y,g):(g=r(g,v.children||[]),g.return=y,g)}function d(y,g,v,I,P){return g===null||g.tag!==7?(g=Vt(v,y.mode,I,P),g.return=y,g):(g=r(g,v),g.return=y,g)}function u(y,g,v){if(typeof g=="string"&&g!==""||typeof g=="number")return g=xs(""+g,y.mode,v),g.return=y,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ra:return v=za(g.type,g.key,g.props,null,y.mode,v),v.ref=Qi(y,null,g),v.return=y,v;case ai:return g=ks(g,y.mode,v),g.return=y,g;case rt:var I=g._init;return u(y,I(g._payload),v)}if(tr(g)||Ui(g))return g=Vt(g,y.mode,v,null),g.return=y,g;ma(y,g)}return null}function p(y,g,v,I){var P=g!==null?g.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return P!==null?null:s(y,g,""+v,I);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ra:return v.key===P?l(y,g,v,I):null;case ai:return v.key===P?c(y,g,v,I):null;case rt:return P=v._init,p(y,g,P(v._payload),I)}if(tr(v)||Ui(v))return P!==null?null:d(y,g,v,I,null);ma(y,v)}return null}function f(y,g,v,I,P){if(typeof I=="string"&&I!==""||typeof I=="number")return y=y.get(v)||null,s(g,y,""+I,P);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case ra:return y=y.get(I.key===null?v:I.key)||null,l(g,y,I,P);case ai:return y=y.get(I.key===null?v:I.key)||null,c(g,y,I,P);case rt:var S=I._init;return f(y,g,v,S(I._payload),P)}if(tr(I)||Ui(I))return y=y.get(v)||null,d(g,y,I,P,null);ma(g,I)}return null}function m(y,g,v,I){for(var P=null,S=null,_=g,R=g=0,F=null;_!==null&&R<v.length;R++){_.index>R?(F=_,_=null):F=_.sibling;var k=p(y,_,v[R],I);if(k===null){_===null&&(_=F);break}e&&_&&k.alternate===null&&n(y,_),g=a(k,g,R),S===null?P=k:S.sibling=k,S=k,_=F}if(R===v.length)return t(y,_),me&&Dt(y,R),P;if(_===null){for(;R<v.length;R++)_=u(y,v[R],I),_!==null&&(g=a(_,g,R),S===null?P=_:S.sibling=_,S=_);return me&&Dt(y,R),P}for(_=i(y,_);R<v.length;R++)F=f(_,y,R,v[R],I),F!==null&&(e&&F.alternate!==null&&_.delete(F.key===null?R:F.key),g=a(F,g,R),S===null?P=F:S.sibling=F,S=F);return e&&_.forEach(function(T){return n(y,T)}),me&&Dt(y,R),P}function b(y,g,v,I){var P=Ui(v);if(typeof P!="function")throw Error(D(150));if(v=P.call(v),v==null)throw Error(D(151));for(var S=P=null,_=g,R=g=0,F=null,k=v.next();_!==null&&!k.done;R++,k=v.next()){_.index>R?(F=_,_=null):F=_.sibling;var T=p(y,_,k.value,I);if(T===null){_===null&&(_=F);break}e&&_&&T.alternate===null&&n(y,_),g=a(T,g,R),S===null?P=T:S.sibling=T,S=T,_=F}if(k.done)return t(y,_),me&&Dt(y,R),P;if(_===null){for(;!k.done;R++,k=v.next())k=u(y,k.value,I),k!==null&&(g=a(k,g,R),S===null?P=k:S.sibling=k,S=k);return me&&Dt(y,R),P}for(_=i(y,_);!k.done;R++,k=v.next())k=f(_,y,R,k.value,I),k!==null&&(e&&k.alternate!==null&&_.delete(k.key===null?R:k.key),g=a(k,g,R),S===null?P=k:S.sibling=k,S=k);return e&&_.forEach(function(z){return n(y,z)}),me&&Dt(y,R),P}function A(y,g,v,I){if(typeof v=="object"&&v!==null&&v.type===oi&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case ra:e:{for(var P=v.key,S=g;S!==null;){if(S.key===P){if(P=v.type,P===oi){if(S.tag===7){t(y,S.sibling),g=r(S,v.props.children),g.return=y,y=g;break e}}else if(S.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===rt&&Rd(P)===S.type){t(y,S.sibling),g=r(S,v.props),g.ref=Qi(y,S,v),g.return=y,y=g;break e}t(y,S);break}else n(y,S);S=S.sibling}v.type===oi?(g=Vt(v.props.children,y.mode,I,v.key),g.return=y,y=g):(I=za(v.type,v.key,v.props,null,y.mode,I),I.ref=Qi(y,g,v),I.return=y,y=I)}return o(y);case ai:e:{for(S=v.key;g!==null;){if(g.key===S)if(g.tag===4&&g.stateNode.containerInfo===v.containerInfo&&g.stateNode.implementation===v.implementation){t(y,g.sibling),g=r(g,v.children||[]),g.return=y,y=g;break e}else{t(y,g);break}else n(y,g);g=g.sibling}g=ks(v,y.mode,I),g.return=y,y=g}return o(y);case rt:return S=v._init,A(y,g,S(v._payload),I)}if(tr(v))return m(y,g,v,I);if(Ui(v))return b(y,g,v,I);ma(y,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,g!==null&&g.tag===6?(t(y,g.sibling),g=r(g,v),g.return=y,y=g):(t(y,g),g=xs(v,y.mode,I),g.return=y,y=g),o(y)):t(y,g)}return A}var Ri=Oh(!0),Fh=Oh(!1),ro=Ct(null),ao=null,hi=null,Wc=null;function Vc(){Wc=hi=ao=null}function Hc(e){var n=ro.current;he(ro),e._currentValue=n}function Sl(e,n,t){for(;e!==null;){var i=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,i!==null&&(i.childLanes|=n)):i!==null&&(i.childLanes&n)!==n&&(i.childLanes|=n),e===t)break;e=e.return}}function Si(e,n){ao=e,Wc=hi=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(Je=!0),e.firstContext=null)}function wn(e){var n=e._currentValue;if(Wc!==e)if(e={context:e,memoizedValue:n,next:null},hi===null){if(ao===null)throw Error(D(308));hi=e,ao.dependencies={lanes:0,firstContext:e}}else hi=hi.next=e;return n}var zt=null;function $c(e){zt===null?zt=[e]:zt.push(e)}function zh(e,n,t,i){var r=n.interleaved;return r===null?(t.next=t,$c(n)):(t.next=r.next,r.next=t),n.interleaved=t,Xn(e,i)}function Xn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var at=!1;function Uc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Bh(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Yn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function gt(e,n,t){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,ae&2){var r=i.pending;return r===null?n.next=n:(n.next=r.next,r.next=n),i.pending=n,Xn(e,t)}return r=i.interleaved,r===null?(n.next=n,$c(i)):(n.next=r.next,r.next=n),i.interleaved=n,Xn(e,t)}function Da(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var i=n.lanes;i&=e.pendingLanes,t|=i,n.lanes=t,Tc(e,t)}}function Md(e,n){var t=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,a=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};a===null?r=a=o:a=a.next=o,t=t.next}while(t!==null);a===null?r=a=n:a=a.next=n}else r=a=n;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:a,shared:i.shared,effects:i.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function oo(e,n,t,i){var r=e.updateQueue;at=!1;var a=r.firstBaseUpdate,o=r.lastBaseUpdate,s=r.shared.pending;if(s!==null){r.shared.pending=null;var l=s,c=l.next;l.next=null,o===null?a=c:o.next=c,o=l;var d=e.alternate;d!==null&&(d=d.updateQueue,s=d.lastBaseUpdate,s!==o&&(s===null?d.firstBaseUpdate=c:s.next=c,d.lastBaseUpdate=l))}if(a!==null){var u=r.baseState;o=0,d=c=l=null,s=a;do{var p=s.lane,f=s.eventTime;if((i&p)===p){d!==null&&(d=d.next={eventTime:f,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var m=e,b=s;switch(p=n,f=t,b.tag){case 1:if(m=b.payload,typeof m=="function"){u=m.call(f,u,p);break e}u=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=b.payload,p=typeof m=="function"?m.call(f,u,p):m,p==null)break e;u=ve({},u,p);break e;case 2:at=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,p=r.effects,p===null?r.effects=[s]:p.push(s))}else f={eventTime:f,lane:p,tag:s.tag,payload:s.payload,callback:s.callback,next:null},d===null?(c=d=f,l=u):d=d.next=f,o|=p;if(s=s.next,s===null){if(s=r.shared.pending,s===null)break;p=s,s=p.next,p.next=null,r.lastBaseUpdate=p,r.shared.pending=null}}while(!0);if(d===null&&(l=u),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=d,n=r.shared.interleaved,n!==null){r=n;do o|=r.lane,r=r.next;while(r!==n)}else a===null&&(r.shared.lanes=0);Yt|=o,e.lanes=o,e.memoizedState=u}}function Dd(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var i=e[n],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(D(191,r));r.call(i)}}}var Xr={},On=Ct(Xr),Lr=Ct(Xr),Nr=Ct(Xr);function Bt(e){if(e===Xr)throw Error(D(174));return e}function qc(e,n){switch(de(Nr,n),de(Lr,e),de(On,Xr),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:il(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=il(n,e)}he(On),de(On,n)}function Mi(){he(On),he(Lr),he(Nr)}function Wh(e){Bt(Nr.current);var n=Bt(On.current),t=il(n,e.type);n!==t&&(de(Lr,e),de(On,t))}function Yc(e){Lr.current===e&&(he(On),he(Lr))}var ge=Ct(0);function so(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ms=[];function Gc(){for(var e=0;e<ms.length;e++)ms[e]._workInProgressVersionPrimary=null;ms.length=0}var La=Zn.ReactCurrentDispatcher,gs=Zn.ReactCurrentBatchConfig,qt=0,ye=null,Ie=null,Pe=null,lo=!1,pr=!1,jr=0,Pb=0;function Le(){throw Error(D(321))}function Kc(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Tn(e[t],n[t]))return!1;return!0}function Qc(e,n,t,i,r,a){if(qt=a,ye=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,La.current=e===null||e.memoizedState===null?Rb:Mb,e=t(i,r),pr){a=0;do{if(pr=!1,jr=0,25<=a)throw Error(D(301));a+=1,Pe=Ie=null,n.updateQueue=null,La.current=Db,e=t(i,r)}while(pr)}if(La.current=co,n=Ie!==null&&Ie.next!==null,qt=0,Pe=Ie=ye=null,lo=!1,n)throw Error(D(300));return e}function Xc(){var e=jr!==0;return jr=0,e}function Dn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Pe===null?ye.memoizedState=Pe=e:Pe=Pe.next=e,Pe}function xn(){if(Ie===null){var e=ye.alternate;e=e!==null?e.memoizedState:null}else e=Ie.next;var n=Pe===null?ye.memoizedState:Pe.next;if(n!==null)Pe=n,Ie=e;else{if(e===null)throw Error(D(310));Ie=e,e={memoizedState:Ie.memoizedState,baseState:Ie.baseState,baseQueue:Ie.baseQueue,queue:Ie.queue,next:null},Pe===null?ye.memoizedState=Pe=e:Pe=Pe.next=e}return Pe}function Or(e,n){return typeof n=="function"?n(e):n}function ys(e){var n=xn(),t=n.queue;if(t===null)throw Error(D(311));t.lastRenderedReducer=e;var i=Ie,r=i.baseQueue,a=t.pending;if(a!==null){if(r!==null){var o=r.next;r.next=a.next,a.next=o}i.baseQueue=r=a,t.pending=null}if(r!==null){a=r.next,i=i.baseState;var s=o=null,l=null,c=a;do{var d=c.lane;if((qt&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:e(i,c.action);else{var u={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(s=l=u,o=i):l=l.next=u,ye.lanes|=d,Yt|=d}c=c.next}while(c!==null&&c!==a);l===null?o=i:l.next=s,Tn(i,n.memoizedState)||(Je=!0),n.memoizedState=i,n.baseState=o,n.baseQueue=l,t.lastRenderedState=i}if(e=t.interleaved,e!==null){r=e;do a=r.lane,ye.lanes|=a,Yt|=a,r=r.next;while(r!==e)}else r===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function vs(e){var n=xn(),t=n.queue;if(t===null)throw Error(D(311));t.lastRenderedReducer=e;var i=t.dispatch,r=t.pending,a=n.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do a=e(a,o.action),o=o.next;while(o!==r);Tn(a,n.memoizedState)||(Je=!0),n.memoizedState=a,n.baseQueue===null&&(n.baseState=a),t.lastRenderedState=a}return[a,i]}function Vh(){}function Hh(e,n){var t=ye,i=xn(),r=n(),a=!Tn(i.memoizedState,r);if(a&&(i.memoizedState=r,Je=!0),i=i.queue,Jc(qh.bind(null,t,i,e),[e]),i.getSnapshot!==n||a||Pe!==null&&Pe.memoizedState.tag&1){if(t.flags|=2048,Fr(9,Uh.bind(null,t,i,r,n),void 0,null),Ee===null)throw Error(D(349));qt&30||$h(t,n,r)}return r}function $h(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=ye.updateQueue,n===null?(n={lastEffect:null,stores:null},ye.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Uh(e,n,t,i){n.value=t,n.getSnapshot=i,Yh(n)&&Gh(e)}function qh(e,n,t){return t(function(){Yh(n)&&Gh(e)})}function Yh(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Tn(e,t)}catch{return!0}}function Gh(e){var n=Xn(e,1);n!==null&&_n(n,e,1,-1)}function Ld(e){var n=Dn();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Or,lastRenderedState:e},n.queue=e,e=e.dispatch=Tb.bind(null,ye,e),[n.memoizedState,e]}function Fr(e,n,t,i){return e={tag:e,create:n,destroy:t,deps:i,next:null},n=ye.updateQueue,n===null?(n={lastEffect:null,stores:null},ye.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(i=t.next,t.next=e,e.next=i,n.lastEffect=e)),e}function Kh(){return xn().memoizedState}function Na(e,n,t,i){var r=Dn();ye.flags|=e,r.memoizedState=Fr(1|n,t,void 0,i===void 0?null:i)}function Ro(e,n,t,i){var r=xn();i=i===void 0?null:i;var a=void 0;if(Ie!==null){var o=Ie.memoizedState;if(a=o.destroy,i!==null&&Kc(i,o.deps)){r.memoizedState=Fr(n,t,a,i);return}}ye.flags|=e,r.memoizedState=Fr(1|n,t,a,i)}function Nd(e,n){return Na(8390656,8,e,n)}function Jc(e,n){return Ro(2048,8,e,n)}function Qh(e,n){return Ro(4,2,e,n)}function Xh(e,n){return Ro(4,4,e,n)}function Jh(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Zh(e,n,t){return t=t!=null?t.concat([e]):null,Ro(4,4,Jh.bind(null,n,e),t)}function Zc(){}function em(e,n){var t=xn();n=n===void 0?null:n;var i=t.memoizedState;return i!==null&&n!==null&&Kc(n,i[1])?i[0]:(t.memoizedState=[e,n],e)}function nm(e,n){var t=xn();n=n===void 0?null:n;var i=t.memoizedState;return i!==null&&n!==null&&Kc(n,i[1])?i[0]:(e=e(),t.memoizedState=[e,n],e)}function tm(e,n,t){return qt&21?(Tn(t,n)||(t=sh(),ye.lanes|=t,Yt|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,Je=!0),e.memoizedState=t)}function _b(e,n){var t=se;se=t!==0&&4>t?t:4,e(!0);var i=gs.transition;gs.transition={};try{e(!1),n()}finally{se=t,gs.transition=i}}function im(){return xn().memoizedState}function Eb(e,n,t){var i=vt(e);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},rm(e))am(n,t);else if(t=zh(e,n,t,i),t!==null){var r=Ue();_n(t,e,i,r),om(t,n,i)}}function Tb(e,n,t){var i=vt(e),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(rm(e))am(n,r);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=n.lastRenderedReducer,a!==null))try{var o=n.lastRenderedState,s=a(o,t);if(r.hasEagerState=!0,r.eagerState=s,Tn(s,o)){var l=n.interleaved;l===null?(r.next=r,$c(n)):(r.next=l.next,l.next=r),n.interleaved=r;return}}catch{}finally{}t=zh(e,n,r,i),t!==null&&(r=Ue(),_n(t,e,i,r),om(t,n,i))}}function rm(e){var n=e.alternate;return e===ye||n!==null&&n===ye}function am(e,n){pr=lo=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function om(e,n,t){if(t&4194240){var i=n.lanes;i&=e.pendingLanes,t|=i,n.lanes=t,Tc(e,t)}}var co={readContext:wn,useCallback:Le,useContext:Le,useEffect:Le,useImperativeHandle:Le,useInsertionEffect:Le,useLayoutEffect:Le,useMemo:Le,useReducer:Le,useRef:Le,useState:Le,useDebugValue:Le,useDeferredValue:Le,useTransition:Le,useMutableSource:Le,useSyncExternalStore:Le,useId:Le,unstable_isNewReconciler:!1},Rb={readContext:wn,useCallback:function(e,n){return Dn().memoizedState=[e,n===void 0?null:n],e},useContext:wn,useEffect:Nd,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Na(4194308,4,Jh.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Na(4194308,4,e,n)},useInsertionEffect:function(e,n){return Na(4,2,e,n)},useMemo:function(e,n){var t=Dn();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var i=Dn();return n=t!==void 0?t(n):n,i.memoizedState=i.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},i.queue=e,e=e.dispatch=Eb.bind(null,ye,e),[i.memoizedState,e]},useRef:function(e){var n=Dn();return e={current:e},n.memoizedState=e},useState:Ld,useDebugValue:Zc,useDeferredValue:function(e){return Dn().memoizedState=e},useTransition:function(){var e=Ld(!1),n=e[0];return e=_b.bind(null,e[1]),Dn().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var i=ye,r=Dn();if(me){if(t===void 0)throw Error(D(407));t=t()}else{if(t=n(),Ee===null)throw Error(D(349));qt&30||$h(i,n,t)}r.memoizedState=t;var a={value:t,getSnapshot:n};return r.queue=a,Nd(qh.bind(null,i,a,e),[e]),i.flags|=2048,Fr(9,Uh.bind(null,i,a,t,n),void 0,null),t},useId:function(){var e=Dn(),n=Ee.identifierPrefix;if(me){var t=$n,i=Hn;t=(i&~(1<<32-Pn(i)-1)).toString(32)+t,n=":"+n+"R"+t,t=jr++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=Pb++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},Mb={readContext:wn,useCallback:em,useContext:wn,useEffect:Jc,useImperativeHandle:Zh,useInsertionEffect:Qh,useLayoutEffect:Xh,useMemo:nm,useReducer:ys,useRef:Kh,useState:function(){return ys(Or)},useDebugValue:Zc,useDeferredValue:function(e){var n=xn();return tm(n,Ie.memoizedState,e)},useTransition:function(){var e=ys(Or)[0],n=xn().memoizedState;return[e,n]},useMutableSource:Vh,useSyncExternalStore:Hh,useId:im,unstable_isNewReconciler:!1},Db={readContext:wn,useCallback:em,useContext:wn,useEffect:Jc,useImperativeHandle:Zh,useInsertionEffect:Qh,useLayoutEffect:Xh,useMemo:nm,useReducer:vs,useRef:Kh,useState:function(){return vs(Or)},useDebugValue:Zc,useDeferredValue:function(e){var n=xn();return Ie===null?n.memoizedState=e:tm(n,Ie.memoizedState,e)},useTransition:function(){var e=vs(Or)[0],n=xn().memoizedState;return[e,n]},useMutableSource:Vh,useSyncExternalStore:Hh,useId:im,unstable_isNewReconciler:!1};function In(e,n){if(e&&e.defaultProps){n=ve({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function Il(e,n,t,i){n=e.memoizedState,t=t(i,n),t=t==null?n:ve({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Mo={isMounted:function(e){return(e=e._reactInternals)?ei(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var i=Ue(),r=vt(e),a=Yn(i,r);a.payload=n,t!=null&&(a.callback=t),n=gt(e,a,r),n!==null&&(_n(n,e,r,i),Da(n,e,r))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var i=Ue(),r=vt(e),a=Yn(i,r);a.tag=1,a.payload=n,t!=null&&(a.callback=t),n=gt(e,a,r),n!==null&&(_n(n,e,r,i),Da(n,e,r))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=Ue(),i=vt(e),r=Yn(t,i);r.tag=2,n!=null&&(r.callback=n),n=gt(e,r,i),n!==null&&(_n(n,e,i,t),Da(n,e,i))}};function jd(e,n,t,i,r,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,a,o):n.prototype&&n.prototype.isPureReactComponent?!Tr(t,i)||!Tr(r,a):!0}function sm(e,n,t){var i=!1,r=It,a=n.contextType;return typeof a=="object"&&a!==null?a=wn(a):(r=en(n)?$t:Fe.current,i=n.contextTypes,a=(i=i!=null)?Ei(e,r):It),n=new n(t,a),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Mo,e.stateNode=n,n._reactInternals=e,i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=a),n}function Od(e,n,t,i){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,i),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,i),n.state!==e&&Mo.enqueueReplaceState(n,n.state,null)}function Al(e,n,t,i){var r=e.stateNode;r.props=t,r.state=e.memoizedState,r.refs={},Uc(e);var a=n.contextType;typeof a=="object"&&a!==null?r.context=wn(a):(a=en(n)?$t:Fe.current,r.context=Ei(e,a)),r.state=e.memoizedState,a=n.getDerivedStateFromProps,typeof a=="function"&&(Il(e,n,a,t),r.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(n=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),n!==r.state&&Mo.enqueueReplaceState(r,r.state,null),oo(e,t,r,i),r.state=e.memoizedState),typeof r.componentDidMount=="function"&&(e.flags|=4194308)}function Di(e,n){try{var t="",i=n;do t+=sv(i),i=i.return;while(i);var r=t}catch(a){r=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:n,stack:r,digest:null}}function bs(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function Cl(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var Lb=typeof WeakMap=="function"?WeakMap:Map;function lm(e,n,t){t=Yn(-1,t),t.tag=3,t.payload={element:null};var i=n.value;return t.callback=function(){po||(po=!0,jl=i),Cl(e,n)},t}function cm(e,n,t){t=Yn(-1,t),t.tag=3;var i=e.type.getDerivedStateFromError;if(typeof i=="function"){var r=n.value;t.payload=function(){return i(r)},t.callback=function(){Cl(e,n)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(t.callback=function(){Cl(e,n),typeof i!="function"&&(yt===null?yt=new Set([this]):yt.add(this));var o=n.stack;this.componentDidCatch(n.value,{componentStack:o!==null?o:""})}),t}function Fd(e,n,t){var i=e.pingCache;if(i===null){i=e.pingCache=new Lb;var r=new Set;i.set(n,r)}else r=i.get(n),r===void 0&&(r=new Set,i.set(n,r));r.has(t)||(r.add(t),e=Gb.bind(null,e,n,t),n.then(e,e))}function zd(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Bd(e,n,t,i,r){return e.mode&1?(e.flags|=65536,e.lanes=r,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=Yn(-1,1),n.tag=2,gt(t,n,1))),t.lanes|=1),e)}var Nb=Zn.ReactCurrentOwner,Je=!1;function Ve(e,n,t,i){n.child=e===null?Fh(n,null,t,i):Ri(n,e.child,t,i)}function Wd(e,n,t,i,r){t=t.render;var a=n.ref;return Si(n,r),i=Qc(e,n,t,i,a,r),t=Xc(),e!==null&&!Je?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~r,Jn(e,n,r)):(me&&t&&Fc(n),n.flags|=1,Ve(e,n,i,r),n.child)}function Vd(e,n,t,i,r){if(e===null){var a=t.type;return typeof a=="function"&&!su(a)&&a.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=a,um(e,n,a,i,r)):(e=za(t.type,null,i,n,n.mode,r),e.ref=n.ref,e.return=n,n.child=e)}if(a=e.child,!(e.lanes&r)){var o=a.memoizedProps;if(t=t.compare,t=t!==null?t:Tr,t(o,i)&&e.ref===n.ref)return Jn(e,n,r)}return n.flags|=1,e=bt(a,i),e.ref=n.ref,e.return=n,n.child=e}function um(e,n,t,i,r){if(e!==null){var a=e.memoizedProps;if(Tr(a,i)&&e.ref===n.ref)if(Je=!1,n.pendingProps=i=a,(e.lanes&r)!==0)e.flags&131072&&(Je=!0);else return n.lanes=e.lanes,Jn(e,n,r)}return Pl(e,n,t,i,r)}function dm(e,n,t){var i=n.pendingProps,r=i.children,a=e!==null?e.memoizedState:null;if(i.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},de(gi,on),on|=t;else{if(!(t&1073741824))return e=a!==null?a.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,de(gi,on),on|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=a!==null?a.baseLanes:t,de(gi,on),on|=i}else a!==null?(i=a.baseLanes|t,n.memoizedState=null):i=t,de(gi,on),on|=i;return Ve(e,n,r,t),n.child}function pm(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function Pl(e,n,t,i,r){var a=en(t)?$t:Fe.current;return a=Ei(n,a),Si(n,r),t=Qc(e,n,t,i,a,r),i=Xc(),e!==null&&!Je?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~r,Jn(e,n,r)):(me&&i&&Fc(n),n.flags|=1,Ve(e,n,t,r),n.child)}function Hd(e,n,t,i,r){if(en(t)){var a=!0;no(n)}else a=!1;if(Si(n,r),n.stateNode===null)ja(e,n),sm(n,t,i),Al(n,t,i,r),i=!0;else if(e===null){var o=n.stateNode,s=n.memoizedProps;o.props=s;var l=o.context,c=t.contextType;typeof c=="object"&&c!==null?c=wn(c):(c=en(t)?$t:Fe.current,c=Ei(n,c));var d=t.getDerivedStateFromProps,u=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";u||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==i||l!==c)&&Od(n,o,i,c),at=!1;var p=n.memoizedState;o.state=p,oo(n,i,o,r),l=n.memoizedState,s!==i||p!==l||Ze.current||at?(typeof d=="function"&&(Il(n,t,d,i),l=n.memoizedState),(s=at||jd(n,t,s,i,p,l,c))?(u||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(n.flags|=4194308)):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=i,n.memoizedState=l),o.props=i,o.state=l,o.context=c,i=s):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),i=!1)}else{o=n.stateNode,Bh(e,n),s=n.memoizedProps,c=n.type===n.elementType?s:In(n.type,s),o.props=c,u=n.pendingProps,p=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=wn(l):(l=en(t)?$t:Fe.current,l=Ei(n,l));var f=t.getDerivedStateFromProps;(d=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==u||p!==l)&&Od(n,o,i,l),at=!1,p=n.memoizedState,o.state=p,oo(n,i,o,r);var m=n.memoizedState;s!==u||p!==m||Ze.current||at?(typeof f=="function"&&(Il(n,t,f,i),m=n.memoizedState),(c=at||jd(n,t,c,i,p,m,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,m,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,m,l)),typeof o.componentDidUpdate=="function"&&(n.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(n.flags|=1024),n.memoizedProps=i,n.memoizedState=m),o.props=i,o.state=m,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(n.flags|=1024),i=!1)}return _l(e,n,t,i,a,r)}function _l(e,n,t,i,r,a){pm(e,n);var o=(n.flags&128)!==0;if(!i&&!o)return r&&_d(n,t,!1),Jn(e,n,a);i=n.stateNode,Nb.current=n;var s=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return n.flags|=1,e!==null&&o?(n.child=Ri(n,e.child,null,a),n.child=Ri(n,null,s,a)):Ve(e,n,s,a),n.memoizedState=i.state,r&&_d(n,t,!0),n.child}function fm(e){var n=e.stateNode;n.pendingContext?Pd(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Pd(e,n.context,!1),qc(e,n.containerInfo)}function $d(e,n,t,i,r){return Ti(),Bc(r),n.flags|=256,Ve(e,n,t,i),n.child}var El={dehydrated:null,treeContext:null,retryLane:0};function Tl(e){return{baseLanes:e,cachePool:null,transitions:null}}function hm(e,n,t){var i=n.pendingProps,r=ge.current,a=!1,o=(n.flags&128)!==0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(r&2)!==0),s?(a=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(r|=1),de(ge,r&1),e===null)return kl(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(o=i.children,e=i.fallback,a?(i=n.mode,a=n.child,o={mode:"hidden",children:o},!(i&1)&&a!==null?(a.childLanes=0,a.pendingProps=o):a=No(o,i,0,null),e=Vt(e,i,t,null),a.return=n,e.return=n,a.sibling=e,n.child=a,n.child.memoizedState=Tl(t),n.memoizedState=El,e):eu(n,o));if(r=e.memoizedState,r!==null&&(s=r.dehydrated,s!==null))return jb(e,n,o,i,s,r,t);if(a){a=i.fallback,o=n.mode,r=e.child,s=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&n.child!==r?(i=n.child,i.childLanes=0,i.pendingProps=l,n.deletions=null):(i=bt(r,l),i.subtreeFlags=r.subtreeFlags&14680064),s!==null?a=bt(s,a):(a=Vt(a,o,t,null),a.flags|=2),a.return=n,i.return=n,i.sibling=a,n.child=i,i=a,a=n.child,o=e.child.memoizedState,o=o===null?Tl(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=e.childLanes&~t,n.memoizedState=El,i}return a=e.child,e=a.sibling,i=bt(a,{mode:"visible",children:i.children}),!(n.mode&1)&&(i.lanes=t),i.return=n,i.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=i,n.memoizedState=null,i}function eu(e,n){return n=No({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function ga(e,n,t,i){return i!==null&&Bc(i),Ri(n,e.child,null,t),e=eu(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function jb(e,n,t,i,r,a,o){if(t)return n.flags&256?(n.flags&=-257,i=bs(Error(D(422))),ga(e,n,o,i)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(a=i.fallback,r=n.mode,i=No({mode:"visible",children:i.children},r,0,null),a=Vt(a,r,o,null),a.flags|=2,i.return=n,a.return=n,i.sibling=a,n.child=i,n.mode&1&&Ri(n,e.child,null,o),n.child.memoizedState=Tl(o),n.memoizedState=El,a);if(!(n.mode&1))return ga(e,n,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var s=i.dgst;return i=s,a=Error(D(419)),i=bs(a,i,void 0),ga(e,n,o,i)}if(s=(o&e.childLanes)!==0,Je||s){if(i=Ee,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==a.retryLane&&(a.retryLane=r,Xn(e,r),_n(i,e,r,-1))}return ou(),i=bs(Error(D(421))),ga(e,n,o,i)}return r.data==="$?"?(n.flags|=128,n.child=e.child,n=Kb.bind(null,e),r._reactRetry=n,null):(e=a.treeContext,ln=mt(r.nextSibling),cn=n,me=!0,Cn=null,e!==null&&(mn[gn++]=Hn,mn[gn++]=$n,mn[gn++]=Ut,Hn=e.id,$n=e.overflow,Ut=n),n=eu(n,i.children),n.flags|=4096,n)}function Ud(e,n,t){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n),Sl(e.return,n,t)}function ws(e,n,t,i,r){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(a.isBackwards=n,a.rendering=null,a.renderingStartTime=0,a.last=i,a.tail=t,a.tailMode=r)}function mm(e,n,t){var i=n.pendingProps,r=i.revealOrder,a=i.tail;if(Ve(e,n,i.children,t),i=ge.current,i&2)i=i&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ud(e,t,n);else if(e.tag===19)Ud(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}i&=1}if(de(ge,i),!(n.mode&1))n.memoizedState=null;else switch(r){case"forwards":for(t=n.child,r=null;t!==null;)e=t.alternate,e!==null&&so(e)===null&&(r=t),t=t.sibling;t=r,t===null?(r=n.child,n.child=null):(r=t.sibling,t.sibling=null),ws(n,!1,r,t,a);break;case"backwards":for(t=null,r=n.child,n.child=null;r!==null;){if(e=r.alternate,e!==null&&so(e)===null){n.child=r;break}e=r.sibling,r.sibling=t,t=r,r=e}ws(n,!0,t,null,a);break;case"together":ws(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function ja(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Jn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Yt|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(D(153));if(n.child!==null){for(e=n.child,t=bt(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=bt(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function Ob(e,n,t){switch(n.tag){case 3:fm(n),Ti();break;case 5:Wh(n);break;case 1:en(n.type)&&no(n);break;case 4:qc(n,n.stateNode.containerInfo);break;case 10:var i=n.type._context,r=n.memoizedProps.value;de(ro,i._currentValue),i._currentValue=r;break;case 13:if(i=n.memoizedState,i!==null)return i.dehydrated!==null?(de(ge,ge.current&1),n.flags|=128,null):t&n.child.childLanes?hm(e,n,t):(de(ge,ge.current&1),e=Jn(e,n,t),e!==null?e.sibling:null);de(ge,ge.current&1);break;case 19:if(i=(t&n.childLanes)!==0,e.flags&128){if(i)return mm(e,n,t);n.flags|=128}if(r=n.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),de(ge,ge.current),i)break;return null;case 22:case 23:return n.lanes=0,dm(e,n,t)}return Jn(e,n,t)}var gm,Rl,ym,vm;gm=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Rl=function(){};ym=function(e,n,t,i){var r=e.memoizedProps;if(r!==i){e=n.stateNode,Bt(On.current);var a=null;switch(t){case"input":r=Zs(e,r),i=Zs(e,i),a=[];break;case"select":r=ve({},r,{value:void 0}),i=ve({},i,{value:void 0}),a=[];break;case"textarea":r=tl(e,r),i=tl(e,i),a=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(e.onclick=Za)}rl(t,i);var o;t=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var s=r[c];for(o in s)s.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Sr.hasOwnProperty(c)?a||(a=[]):(a=a||[]).push(c,null));for(c in i){var l=i[c];if(s=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==s&&(l!=null||s!=null))if(c==="style")if(s){for(o in s)!s.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&s[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(a||(a=[]),a.push(c,t)),t=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(a=a||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(a=a||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Sr.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&fe("scroll",e),a||s===l||(a=[])):(a=a||[]).push(c,l))}t&&(a=a||[]).push("style",t);var c=a;(n.updateQueue=c)&&(n.flags|=4)}};vm=function(e,n,t,i){t!==i&&(n.flags|=4)};function Xi(e,n){if(!me)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function Ne(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,i=0;if(n)for(var r=e.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=i,e.childLanes=t,n}function Fb(e,n,t){var i=n.pendingProps;switch(zc(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ne(n),null;case 1:return en(n.type)&&eo(),Ne(n),null;case 3:return i=n.stateNode,Mi(),he(Ze),he(Fe),Gc(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(ha(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Cn!==null&&(zl(Cn),Cn=null))),Rl(e,n),Ne(n),null;case 5:Yc(n);var r=Bt(Nr.current);if(t=n.type,e!==null&&n.stateNode!=null)ym(e,n,t,i,r),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!i){if(n.stateNode===null)throw Error(D(166));return Ne(n),null}if(e=Bt(On.current),ha(n)){i=n.stateNode,t=n.type;var a=n.memoizedProps;switch(i[Nn]=n,i[Dr]=a,e=(n.mode&1)!==0,t){case"dialog":fe("cancel",i),fe("close",i);break;case"iframe":case"object":case"embed":fe("load",i);break;case"video":case"audio":for(r=0;r<rr.length;r++)fe(rr[r],i);break;case"source":fe("error",i);break;case"img":case"image":case"link":fe("error",i),fe("load",i);break;case"details":fe("toggle",i);break;case"input":ed(i,a),fe("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!a.multiple},fe("invalid",i);break;case"textarea":td(i,a),fe("invalid",i)}rl(t,a),r=null;for(var o in a)if(a.hasOwnProperty(o)){var s=a[o];o==="children"?typeof s=="string"?i.textContent!==s&&(a.suppressHydrationWarning!==!0&&fa(i.textContent,s,e),r=["children",s]):typeof s=="number"&&i.textContent!==""+s&&(a.suppressHydrationWarning!==!0&&fa(i.textContent,s,e),r=["children",""+s]):Sr.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&fe("scroll",i)}switch(t){case"input":aa(i),nd(i,a,!0);break;case"textarea":aa(i),id(i);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(i.onclick=Za)}i=r,n.updateQueue=i,i!==null&&(n.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=qf(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof i.is=="string"?e=o.createElement(t,{is:i.is}):(e=o.createElement(t),t==="select"&&(o=e,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):e=o.createElementNS(e,t),e[Nn]=n,e[Dr]=i,gm(e,n,!1,!1),n.stateNode=e;e:{switch(o=al(t,i),t){case"dialog":fe("cancel",e),fe("close",e),r=i;break;case"iframe":case"object":case"embed":fe("load",e),r=i;break;case"video":case"audio":for(r=0;r<rr.length;r++)fe(rr[r],e);r=i;break;case"source":fe("error",e),r=i;break;case"img":case"image":case"link":fe("error",e),fe("load",e),r=i;break;case"details":fe("toggle",e),r=i;break;case"input":ed(e,i),r=Zs(e,i),fe("invalid",e);break;case"option":r=i;break;case"select":e._wrapperState={wasMultiple:!!i.multiple},r=ve({},i,{value:void 0}),fe("invalid",e);break;case"textarea":td(e,i),r=tl(e,i),fe("invalid",e);break;default:r=i}rl(t,r),s=r;for(a in s)if(s.hasOwnProperty(a)){var l=s[a];a==="style"?Kf(e,l):a==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Yf(e,l)):a==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&Ir(e,l):typeof l=="number"&&Ir(e,""+l):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(Sr.hasOwnProperty(a)?l!=null&&a==="onScroll"&&fe("scroll",e):l!=null&&Ic(e,a,l,o))}switch(t){case"input":aa(e),nd(e,i,!1);break;case"textarea":aa(e),id(e);break;case"option":i.value!=null&&e.setAttribute("value",""+St(i.value));break;case"select":e.multiple=!!i.multiple,a=i.value,a!=null?bi(e,!!i.multiple,a,!1):i.defaultValue!=null&&bi(e,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(e.onclick=Za)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return Ne(n),null;case 6:if(e&&n.stateNode!=null)vm(e,n,e.memoizedProps,i);else{if(typeof i!="string"&&n.stateNode===null)throw Error(D(166));if(t=Bt(Nr.current),Bt(On.current),ha(n)){if(i=n.stateNode,t=n.memoizedProps,i[Nn]=n,(a=i.nodeValue!==t)&&(e=cn,e!==null))switch(e.tag){case 3:fa(i.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&fa(i.nodeValue,t,(e.mode&1)!==0)}a&&(n.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[Nn]=n,n.stateNode=i}return Ne(n),null;case 13:if(he(ge),i=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(me&&ln!==null&&n.mode&1&&!(n.flags&128))jh(),Ti(),n.flags|=98560,a=!1;else if(a=ha(n),i!==null&&i.dehydrated!==null){if(e===null){if(!a)throw Error(D(318));if(a=n.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(D(317));a[Nn]=n}else Ti(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;Ne(n),a=!1}else Cn!==null&&(zl(Cn),Cn=null),a=!0;if(!a)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(i=i!==null,i!==(e!==null&&e.memoizedState!==null)&&i&&(n.child.flags|=8192,n.mode&1&&(e===null||ge.current&1?Ae===0&&(Ae=3):ou())),n.updateQueue!==null&&(n.flags|=4),Ne(n),null);case 4:return Mi(),Rl(e,n),e===null&&Rr(n.stateNode.containerInfo),Ne(n),null;case 10:return Hc(n.type._context),Ne(n),null;case 17:return en(n.type)&&eo(),Ne(n),null;case 19:if(he(ge),a=n.memoizedState,a===null)return Ne(n),null;if(i=(n.flags&128)!==0,o=a.rendering,o===null)if(i)Xi(a,!1);else{if(Ae!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(o=so(e),o!==null){for(n.flags|=128,Xi(a,!1),i=o.updateQueue,i!==null&&(n.updateQueue=i,n.flags|=4),n.subtreeFlags=0,i=t,t=n.child;t!==null;)a=t,e=i,a.flags&=14680066,o=a.alternate,o===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=o.childLanes,a.lanes=o.lanes,a.child=o.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=o.memoizedProps,a.memoizedState=o.memoizedState,a.updateQueue=o.updateQueue,a.type=o.type,e=o.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return de(ge,ge.current&1|2),n.child}e=e.sibling}a.tail!==null&&xe()>Li&&(n.flags|=128,i=!0,Xi(a,!1),n.lanes=4194304)}else{if(!i)if(e=so(o),e!==null){if(n.flags|=128,i=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),Xi(a,!0),a.tail===null&&a.tailMode==="hidden"&&!o.alternate&&!me)return Ne(n),null}else 2*xe()-a.renderingStartTime>Li&&t!==1073741824&&(n.flags|=128,i=!0,Xi(a,!1),n.lanes=4194304);a.isBackwards?(o.sibling=n.child,n.child=o):(t=a.last,t!==null?t.sibling=o:n.child=o,a.last=o)}return a.tail!==null?(n=a.tail,a.rendering=n,a.tail=n.sibling,a.renderingStartTime=xe(),n.sibling=null,t=ge.current,de(ge,i?t&1|2:t&1),n):(Ne(n),null);case 22:case 23:return au(),i=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==i&&(n.flags|=8192),i&&n.mode&1?on&1073741824&&(Ne(n),n.subtreeFlags&6&&(n.flags|=8192)):Ne(n),null;case 24:return null;case 25:return null}throw Error(D(156,n.tag))}function zb(e,n){switch(zc(n),n.tag){case 1:return en(n.type)&&eo(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Mi(),he(Ze),he(Fe),Gc(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return Yc(n),null;case 13:if(he(ge),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(D(340));Ti()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return he(ge),null;case 4:return Mi(),null;case 10:return Hc(n.type._context),null;case 22:case 23:return au(),null;case 24:return null;default:return null}}var ya=!1,je=!1,Bb=typeof WeakSet=="function"?WeakSet:Set,W=null;function mi(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){we(e,n,i)}else t.current=null}function Ml(e,n,t){try{t()}catch(i){we(e,n,i)}}var qd=!1;function Wb(e,n){if(ml=Qa,e=Sh(),Oc(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,a=i.focusNode;i=i.focusOffset;try{t.nodeType,a.nodeType}catch{t=null;break e}var o=0,s=-1,l=-1,c=0,d=0,u=e,p=null;n:for(;;){for(var f;u!==t||r!==0&&u.nodeType!==3||(s=o+r),u!==a||i!==0&&u.nodeType!==3||(l=o+i),u.nodeType===3&&(o+=u.nodeValue.length),(f=u.firstChild)!==null;)p=u,u=f;for(;;){if(u===e)break n;if(p===t&&++c===r&&(s=o),p===a&&++d===i&&(l=o),(f=u.nextSibling)!==null)break;u=p,p=u.parentNode}u=f}t=s===-1||l===-1?null:{start:s,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(gl={focusedElem:e,selectionRange:t},Qa=!1,W=n;W!==null;)if(n=W,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,W=e;else for(;W!==null;){n=W;try{var m=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var b=m.memoizedProps,A=m.memoizedState,y=n.stateNode,g=y.getSnapshotBeforeUpdate(n.elementType===n.type?b:In(n.type,b),A);y.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var v=n.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(D(163))}}catch(I){we(n,n.return,I)}if(e=n.sibling,e!==null){e.return=n.return,W=e;break}W=n.return}return m=qd,qd=!1,m}function fr(e,n,t){var i=n.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&e)===e){var a=r.destroy;r.destroy=void 0,a!==void 0&&Ml(n,t,a)}r=r.next}while(r!==i)}}function Do(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var i=t.create;t.destroy=i()}t=t.next}while(t!==n)}}function Dl(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function bm(e){var n=e.alternate;n!==null&&(e.alternate=null,bm(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Nn],delete n[Dr],delete n[bl],delete n[Sb],delete n[Ib])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function wm(e){return e.tag===5||e.tag===3||e.tag===4}function Yd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||wm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ll(e,n,t){var i=e.tag;if(i===5||i===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Za));else if(i!==4&&(e=e.child,e!==null))for(Ll(e,n,t),e=e.sibling;e!==null;)Ll(e,n,t),e=e.sibling}function Nl(e,n,t){var i=e.tag;if(i===5||i===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(i!==4&&(e=e.child,e!==null))for(Nl(e,n,t),e=e.sibling;e!==null;)Nl(e,n,t),e=e.sibling}var Re=null,An=!1;function tt(e,n,t){for(t=t.child;t!==null;)xm(e,n,t),t=t.sibling}function xm(e,n,t){if(jn&&typeof jn.onCommitFiberUnmount=="function")try{jn.onCommitFiberUnmount(Ao,t)}catch{}switch(t.tag){case 5:je||mi(t,n);case 6:var i=Re,r=An;Re=null,tt(e,n,t),Re=i,An=r,Re!==null&&(An?(e=Re,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):Re.removeChild(t.stateNode));break;case 18:Re!==null&&(An?(e=Re,t=t.stateNode,e.nodeType===8?fs(e.parentNode,t):e.nodeType===1&&fs(e,t),_r(e)):fs(Re,t.stateNode));break;case 4:i=Re,r=An,Re=t.stateNode.containerInfo,An=!0,tt(e,n,t),Re=i,An=r;break;case 0:case 11:case 14:case 15:if(!je&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var a=r,o=a.destroy;a=a.tag,o!==void 0&&(a&2||a&4)&&Ml(t,n,o),r=r.next}while(r!==i)}tt(e,n,t);break;case 1:if(!je&&(mi(t,n),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(s){we(t,n,s)}tt(e,n,t);break;case 21:tt(e,n,t);break;case 22:t.mode&1?(je=(i=je)||t.memoizedState!==null,tt(e,n,t),je=i):tt(e,n,t);break;default:tt(e,n,t)}}function Gd(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new Bb),n.forEach(function(i){var r=Qb.bind(null,e,i);t.has(i)||(t.add(i),i.then(r,r))})}}function Sn(e,n){var t=n.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var a=e,o=n,s=o;e:for(;s!==null;){switch(s.tag){case 5:Re=s.stateNode,An=!1;break e;case 3:Re=s.stateNode.containerInfo,An=!0;break e;case 4:Re=s.stateNode.containerInfo,An=!0;break e}s=s.return}if(Re===null)throw Error(D(160));xm(a,o,r),Re=null,An=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){we(r,n,c)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)km(n,e),n=n.sibling}function km(e,n){var t=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Sn(n,e),Mn(e),i&4){try{fr(3,e,e.return),Do(3,e)}catch(b){we(e,e.return,b)}try{fr(5,e,e.return)}catch(b){we(e,e.return,b)}}break;case 1:Sn(n,e),Mn(e),i&512&&t!==null&&mi(t,t.return);break;case 5:if(Sn(n,e),Mn(e),i&512&&t!==null&&mi(t,t.return),e.flags&32){var r=e.stateNode;try{Ir(r,"")}catch(b){we(e,e.return,b)}}if(i&4&&(r=e.stateNode,r!=null)){var a=e.memoizedProps,o=t!==null?t.memoizedProps:a,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&a.type==="radio"&&a.name!=null&&$f(r,a),al(s,o);var c=al(s,a);for(o=0;o<l.length;o+=2){var d=l[o],u=l[o+1];d==="style"?Kf(r,u):d==="dangerouslySetInnerHTML"?Yf(r,u):d==="children"?Ir(r,u):Ic(r,d,u,c)}switch(s){case"input":el(r,a);break;case"textarea":Uf(r,a);break;case"select":var p=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!a.multiple;var f=a.value;f!=null?bi(r,!!a.multiple,f,!1):p!==!!a.multiple&&(a.defaultValue!=null?bi(r,!!a.multiple,a.defaultValue,!0):bi(r,!!a.multiple,a.multiple?[]:"",!1))}r[Dr]=a}catch(b){we(e,e.return,b)}}break;case 6:if(Sn(n,e),Mn(e),i&4){if(e.stateNode===null)throw Error(D(162));r=e.stateNode,a=e.memoizedProps;try{r.nodeValue=a}catch(b){we(e,e.return,b)}}break;case 3:if(Sn(n,e),Mn(e),i&4&&t!==null&&t.memoizedState.isDehydrated)try{_r(n.containerInfo)}catch(b){we(e,e.return,b)}break;case 4:Sn(n,e),Mn(e);break;case 13:Sn(n,e),Mn(e),r=e.child,r.flags&8192&&(a=r.memoizedState!==null,r.stateNode.isHidden=a,!a||r.alternate!==null&&r.alternate.memoizedState!==null||(iu=xe())),i&4&&Gd(e);break;case 22:if(d=t!==null&&t.memoizedState!==null,e.mode&1?(je=(c=je)||d,Sn(n,e),je=c):Sn(n,e),Mn(e),i&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!d&&e.mode&1)for(W=e,d=e.child;d!==null;){for(u=W=d;W!==null;){switch(p=W,f=p.child,p.tag){case 0:case 11:case 14:case 15:fr(4,p,p.return);break;case 1:mi(p,p.return);var m=p.stateNode;if(typeof m.componentWillUnmount=="function"){i=p,t=p.return;try{n=i,m.props=n.memoizedProps,m.state=n.memoizedState,m.componentWillUnmount()}catch(b){we(i,t,b)}}break;case 5:mi(p,p.return);break;case 22:if(p.memoizedState!==null){Qd(u);continue}}f!==null?(f.return=p,W=f):Qd(u)}d=d.sibling}e:for(d=null,u=e;;){if(u.tag===5){if(d===null){d=u;try{r=u.stateNode,c?(a=r.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(s=u.stateNode,l=u.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=Gf("display",o))}catch(b){we(e,e.return,b)}}}else if(u.tag===6){if(d===null)try{u.stateNode.nodeValue=c?"":u.memoizedProps}catch(b){we(e,e.return,b)}}else if((u.tag!==22&&u.tag!==23||u.memoizedState===null||u===e)&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===e)break e;for(;u.sibling===null;){if(u.return===null||u.return===e)break e;d===u&&(d=null),u=u.return}d===u&&(d=null),u.sibling.return=u.return,u=u.sibling}}break;case 19:Sn(n,e),Mn(e),i&4&&Gd(e);break;case 21:break;default:Sn(n,e),Mn(e)}}function Mn(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(wm(t)){var i=t;break e}t=t.return}throw Error(D(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Ir(r,""),i.flags&=-33);var a=Yd(e);Nl(e,a,r);break;case 3:case 4:var o=i.stateNode.containerInfo,s=Yd(e);Ll(e,s,o);break;default:throw Error(D(161))}}catch(l){we(e,e.return,l)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Vb(e,n,t){W=e,Sm(e)}function Sm(e,n,t){for(var i=(e.mode&1)!==0;W!==null;){var r=W,a=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||ya;if(!o){var s=r.alternate,l=s!==null&&s.memoizedState!==null||je;s=ya;var c=je;if(ya=o,(je=l)&&!c)for(W=r;W!==null;)o=W,l=o.child,o.tag===22&&o.memoizedState!==null?Xd(r):l!==null?(l.return=o,W=l):Xd(r);for(;a!==null;)W=a,Sm(a),a=a.sibling;W=r,ya=s,je=c}Kd(e)}else r.subtreeFlags&8772&&a!==null?(a.return=r,W=a):Kd(e)}}function Kd(e){for(;W!==null;){var n=W;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:je||Do(5,n);break;case 1:var i=n.stateNode;if(n.flags&4&&!je)if(t===null)i.componentDidMount();else{var r=n.elementType===n.type?t.memoizedProps:In(n.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var a=n.updateQueue;a!==null&&Dd(n,a,i);break;case 3:var o=n.updateQueue;if(o!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}Dd(n,o,t)}break;case 5:var s=n.stateNode;if(t===null&&n.flags&4){t=s;var l=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var c=n.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var u=d.dehydrated;u!==null&&_r(u)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(D(163))}je||n.flags&512&&Dl(n)}catch(p){we(n,n.return,p)}}if(n===e){W=null;break}if(t=n.sibling,t!==null){t.return=n.return,W=t;break}W=n.return}}function Qd(e){for(;W!==null;){var n=W;if(n===e){W=null;break}var t=n.sibling;if(t!==null){t.return=n.return,W=t;break}W=n.return}}function Xd(e){for(;W!==null;){var n=W;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{Do(4,n)}catch(l){we(n,t,l)}break;case 1:var i=n.stateNode;if(typeof i.componentDidMount=="function"){var r=n.return;try{i.componentDidMount()}catch(l){we(n,r,l)}}var a=n.return;try{Dl(n)}catch(l){we(n,a,l)}break;case 5:var o=n.return;try{Dl(n)}catch(l){we(n,o,l)}}}catch(l){we(n,n.return,l)}if(n===e){W=null;break}var s=n.sibling;if(s!==null){s.return=n.return,W=s;break}W=n.return}}var Hb=Math.ceil,uo=Zn.ReactCurrentDispatcher,nu=Zn.ReactCurrentOwner,bn=Zn.ReactCurrentBatchConfig,ae=0,Ee=null,Se=null,Me=0,on=0,gi=Ct(0),Ae=0,zr=null,Yt=0,Lo=0,tu=0,hr=null,Xe=null,iu=0,Li=1/0,Wn=null,po=!1,jl=null,yt=null,va=!1,ct=null,fo=0,mr=0,Ol=null,Oa=-1,Fa=0;function Ue(){return ae&6?xe():Oa!==-1?Oa:Oa=xe()}function vt(e){return e.mode&1?ae&2&&Me!==0?Me&-Me:Cb.transition!==null?(Fa===0&&(Fa=sh()),Fa):(e=se,e!==0||(e=window.event,e=e===void 0?16:hh(e.type)),e):1}function _n(e,n,t,i){if(50<mr)throw mr=0,Ol=null,Error(D(185));Gr(e,t,i),(!(ae&2)||e!==Ee)&&(e===Ee&&(!(ae&2)&&(Lo|=t),Ae===4&&st(e,Me)),nn(e,i),t===1&&ae===0&&!(n.mode&1)&&(Li=xe()+500,To&&Pt()))}function nn(e,n){var t=e.callbackNode;Cv(e,n);var i=Ka(e,e===Ee?Me:0);if(i===0)t!==null&&od(t),e.callbackNode=null,e.callbackPriority=0;else if(n=i&-i,e.callbackPriority!==n){if(t!=null&&od(t),n===1)e.tag===0?Ab(Jd.bind(null,e)):Dh(Jd.bind(null,e)),xb(function(){!(ae&6)&&Pt()}),t=null;else{switch(lh(i)){case 1:t=Ec;break;case 4:t=ah;break;case 16:t=Ga;break;case 536870912:t=oh;break;default:t=Ga}t=Rm(t,Im.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Im(e,n){if(Oa=-1,Fa=0,ae&6)throw Error(D(327));var t=e.callbackNode;if(Ii()&&e.callbackNode!==t)return null;var i=Ka(e,e===Ee?Me:0);if(i===0)return null;if(i&30||i&e.expiredLanes||n)n=ho(e,i);else{n=i;var r=ae;ae|=2;var a=Cm();(Ee!==e||Me!==n)&&(Wn=null,Li=xe()+500,Wt(e,n));do try{qb();break}catch(s){Am(e,s)}while(!0);Vc(),uo.current=a,ae=r,Se!==null?n=0:(Ee=null,Me=0,n=Ae)}if(n!==0){if(n===2&&(r=ul(e),r!==0&&(i=r,n=Fl(e,r))),n===1)throw t=zr,Wt(e,0),st(e,i),nn(e,xe()),t;if(n===6)st(e,i);else{if(r=e.current.alternate,!(i&30)&&!$b(r)&&(n=ho(e,i),n===2&&(a=ul(e),a!==0&&(i=a,n=Fl(e,a))),n===1))throw t=zr,Wt(e,0),st(e,i),nn(e,xe()),t;switch(e.finishedWork=r,e.finishedLanes=i,n){case 0:case 1:throw Error(D(345));case 2:Lt(e,Xe,Wn);break;case 3:if(st(e,i),(i&130023424)===i&&(n=iu+500-xe(),10<n)){if(Ka(e,0)!==0)break;if(r=e.suspendedLanes,(r&i)!==i){Ue(),e.pingedLanes|=e.suspendedLanes&r;break}e.timeoutHandle=vl(Lt.bind(null,e,Xe,Wn),n);break}Lt(e,Xe,Wn);break;case 4:if(st(e,i),(i&4194240)===i)break;for(n=e.eventTimes,r=-1;0<i;){var o=31-Pn(i);a=1<<o,o=n[o],o>r&&(r=o),i&=~a}if(i=r,i=xe()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Hb(i/1960))-i,10<i){e.timeoutHandle=vl(Lt.bind(null,e,Xe,Wn),i);break}Lt(e,Xe,Wn);break;case 5:Lt(e,Xe,Wn);break;default:throw Error(D(329))}}}return nn(e,xe()),e.callbackNode===t?Im.bind(null,e):null}function Fl(e,n){var t=hr;return e.current.memoizedState.isDehydrated&&(Wt(e,n).flags|=256),e=ho(e,n),e!==2&&(n=Xe,Xe=t,n!==null&&zl(n)),e}function zl(e){Xe===null?Xe=e:Xe.push.apply(Xe,e)}function $b(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],a=r.getSnapshot;r=r.value;try{if(!Tn(a(),r))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function st(e,n){for(n&=~tu,n&=~Lo,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-Pn(n),i=1<<t;e[t]=-1,n&=~i}}function Jd(e){if(ae&6)throw Error(D(327));Ii();var n=Ka(e,0);if(!(n&1))return nn(e,xe()),null;var t=ho(e,n);if(e.tag!==0&&t===2){var i=ul(e);i!==0&&(n=i,t=Fl(e,i))}if(t===1)throw t=zr,Wt(e,0),st(e,n),nn(e,xe()),t;if(t===6)throw Error(D(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,Lt(e,Xe,Wn),nn(e,xe()),null}function ru(e,n){var t=ae;ae|=1;try{return e(n)}finally{ae=t,ae===0&&(Li=xe()+500,To&&Pt())}}function Gt(e){ct!==null&&ct.tag===0&&!(ae&6)&&Ii();var n=ae;ae|=1;var t=bn.transition,i=se;try{if(bn.transition=null,se=1,e)return e()}finally{se=i,bn.transition=t,ae=n,!(ae&6)&&Pt()}}function au(){on=gi.current,he(gi)}function Wt(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,wb(t)),Se!==null)for(t=Se.return;t!==null;){var i=t;switch(zc(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&eo();break;case 3:Mi(),he(Ze),he(Fe),Gc();break;case 5:Yc(i);break;case 4:Mi();break;case 13:he(ge);break;case 19:he(ge);break;case 10:Hc(i.type._context);break;case 22:case 23:au()}t=t.return}if(Ee=e,Se=e=bt(e.current,null),Me=on=n,Ae=0,zr=null,tu=Lo=Yt=0,Xe=hr=null,zt!==null){for(n=0;n<zt.length;n++)if(t=zt[n],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,a=t.pending;if(a!==null){var o=a.next;a.next=r,i.next=o}t.pending=i}zt=null}return e}function Am(e,n){do{var t=Se;try{if(Vc(),La.current=co,lo){for(var i=ye.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}lo=!1}if(qt=0,Pe=Ie=ye=null,pr=!1,jr=0,nu.current=null,t===null||t.return===null){Ae=1,zr=n,Se=null;break}e:{var a=e,o=t.return,s=t,l=n;if(n=Me,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=s,u=d.tag;if(!(d.mode&1)&&(u===0||u===11||u===15)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var f=zd(o);if(f!==null){f.flags&=-257,Bd(f,o,s,a,n),f.mode&1&&Fd(a,c,n),n=f,l=c;var m=n.updateQueue;if(m===null){var b=new Set;b.add(l),n.updateQueue=b}else m.add(l);break e}else{if(!(n&1)){Fd(a,c,n),ou();break e}l=Error(D(426))}}else if(me&&s.mode&1){var A=zd(o);if(A!==null){!(A.flags&65536)&&(A.flags|=256),Bd(A,o,s,a,n),Bc(Di(l,s));break e}}a=l=Di(l,s),Ae!==4&&(Ae=2),hr===null?hr=[a]:hr.push(a),a=o;do{switch(a.tag){case 3:a.flags|=65536,n&=-n,a.lanes|=n;var y=lm(a,l,n);Md(a,y);break e;case 1:s=l;var g=a.type,v=a.stateNode;if(!(a.flags&128)&&(typeof g.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(yt===null||!yt.has(v)))){a.flags|=65536,n&=-n,a.lanes|=n;var I=cm(a,s,n);Md(a,I);break e}}a=a.return}while(a!==null)}_m(t)}catch(P){n=P,Se===t&&t!==null&&(Se=t=t.return);continue}break}while(!0)}function Cm(){var e=uo.current;return uo.current=co,e===null?co:e}function ou(){(Ae===0||Ae===3||Ae===2)&&(Ae=4),Ee===null||!(Yt&268435455)&&!(Lo&268435455)||st(Ee,Me)}function ho(e,n){var t=ae;ae|=2;var i=Cm();(Ee!==e||Me!==n)&&(Wn=null,Wt(e,n));do try{Ub();break}catch(r){Am(e,r)}while(!0);if(Vc(),ae=t,uo.current=i,Se!==null)throw Error(D(261));return Ee=null,Me=0,Ae}function Ub(){for(;Se!==null;)Pm(Se)}function qb(){for(;Se!==null&&!yv();)Pm(Se)}function Pm(e){var n=Tm(e.alternate,e,on);e.memoizedProps=e.pendingProps,n===null?_m(e):Se=n,nu.current=null}function _m(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=zb(t,n),t!==null){t.flags&=32767,Se=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ae=6,Se=null;return}}else if(t=Fb(t,n,on),t!==null){Se=t;return}if(n=n.sibling,n!==null){Se=n;return}Se=n=e}while(n!==null);Ae===0&&(Ae=5)}function Lt(e,n,t){var i=se,r=bn.transition;try{bn.transition=null,se=1,Yb(e,n,t,i)}finally{bn.transition=r,se=i}return null}function Yb(e,n,t,i){do Ii();while(ct!==null);if(ae&6)throw Error(D(327));t=e.finishedWork;var r=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(D(177));e.callbackNode=null,e.callbackPriority=0;var a=t.lanes|t.childLanes;if(Pv(e,a),e===Ee&&(Se=Ee=null,Me=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||va||(va=!0,Rm(Ga,function(){return Ii(),null})),a=(t.flags&15990)!==0,t.subtreeFlags&15990||a){a=bn.transition,bn.transition=null;var o=se;se=1;var s=ae;ae|=4,nu.current=null,Wb(e,t),km(t,e),fb(gl),Qa=!!ml,gl=ml=null,e.current=t,Vb(t),vv(),ae=s,se=o,bn.transition=a}else e.current=t;if(va&&(va=!1,ct=e,fo=r),a=e.pendingLanes,a===0&&(yt=null),xv(t.stateNode),nn(e,xe()),n!==null)for(i=e.onRecoverableError,t=0;t<n.length;t++)r=n[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(po)throw po=!1,e=jl,jl=null,e;return fo&1&&e.tag!==0&&Ii(),a=e.pendingLanes,a&1?e===Ol?mr++:(mr=0,Ol=e):mr=0,Pt(),null}function Ii(){if(ct!==null){var e=lh(fo),n=bn.transition,t=se;try{if(bn.transition=null,se=16>e?16:e,ct===null)var i=!1;else{if(e=ct,ct=null,fo=0,ae&6)throw Error(D(331));var r=ae;for(ae|=4,W=e.current;W!==null;){var a=W,o=a.child;if(W.flags&16){var s=a.deletions;if(s!==null){for(var l=0;l<s.length;l++){var c=s[l];for(W=c;W!==null;){var d=W;switch(d.tag){case 0:case 11:case 15:fr(8,d,a)}var u=d.child;if(u!==null)u.return=d,W=u;else for(;W!==null;){d=W;var p=d.sibling,f=d.return;if(bm(d),d===c){W=null;break}if(p!==null){p.return=f,W=p;break}W=f}}}var m=a.alternate;if(m!==null){var b=m.child;if(b!==null){m.child=null;do{var A=b.sibling;b.sibling=null,b=A}while(b!==null)}}W=a}}if(a.subtreeFlags&2064&&o!==null)o.return=a,W=o;else e:for(;W!==null;){if(a=W,a.flags&2048)switch(a.tag){case 0:case 11:case 15:fr(9,a,a.return)}var y=a.sibling;if(y!==null){y.return=a.return,W=y;break e}W=a.return}}var g=e.current;for(W=g;W!==null;){o=W;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,W=v;else e:for(o=g;W!==null;){if(s=W,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Do(9,s)}}catch(P){we(s,s.return,P)}if(s===o){W=null;break e}var I=s.sibling;if(I!==null){I.return=s.return,W=I;break e}W=s.return}}if(ae=r,Pt(),jn&&typeof jn.onPostCommitFiberRoot=="function")try{jn.onPostCommitFiberRoot(Ao,e)}catch{}i=!0}return i}finally{se=t,bn.transition=n}}return!1}function Zd(e,n,t){n=Di(t,n),n=lm(e,n,1),e=gt(e,n,1),n=Ue(),e!==null&&(Gr(e,1,n),nn(e,n))}function we(e,n,t){if(e.tag===3)Zd(e,e,t);else for(;n!==null;){if(n.tag===3){Zd(n,e,t);break}else if(n.tag===1){var i=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(yt===null||!yt.has(i))){e=Di(t,e),e=cm(n,e,1),n=gt(n,e,1),e=Ue(),n!==null&&(Gr(n,1,e),nn(n,e));break}}n=n.return}}function Gb(e,n,t){var i=e.pingCache;i!==null&&i.delete(n),n=Ue(),e.pingedLanes|=e.suspendedLanes&t,Ee===e&&(Me&t)===t&&(Ae===4||Ae===3&&(Me&130023424)===Me&&500>xe()-iu?Wt(e,0):tu|=t),nn(e,n)}function Em(e,n){n===0&&(e.mode&1?(n=la,la<<=1,!(la&130023424)&&(la=4194304)):n=1);var t=Ue();e=Xn(e,n),e!==null&&(Gr(e,n,t),nn(e,t))}function Kb(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Em(e,t)}function Qb(e,n){var t=0;switch(e.tag){case 13:var i=e.stateNode,r=e.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=e.stateNode;break;default:throw Error(D(314))}i!==null&&i.delete(n),Em(e,t)}var Tm;Tm=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||Ze.current)Je=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return Je=!1,Ob(e,n,t);Je=!!(e.flags&131072)}else Je=!1,me&&n.flags&1048576&&Lh(n,io,n.index);switch(n.lanes=0,n.tag){case 2:var i=n.type;ja(e,n),e=n.pendingProps;var r=Ei(n,Fe.current);Si(n,t),r=Qc(null,n,i,e,r,t);var a=Xc();return n.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,en(i)?(a=!0,no(n)):a=!1,n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Uc(n),r.updater=Mo,n.stateNode=r,r._reactInternals=n,Al(n,i,e,t),n=_l(null,n,i,!0,a,t)):(n.tag=0,me&&a&&Fc(n),Ve(null,n,r,t),n=n.child),n;case 16:i=n.elementType;e:{switch(ja(e,n),e=n.pendingProps,r=i._init,i=r(i._payload),n.type=i,r=n.tag=Jb(i),e=In(i,e),r){case 0:n=Pl(null,n,i,e,t);break e;case 1:n=Hd(null,n,i,e,t);break e;case 11:n=Wd(null,n,i,e,t);break e;case 14:n=Vd(null,n,i,In(i.type,e),t);break e}throw Error(D(306,i,""))}return n;case 0:return i=n.type,r=n.pendingProps,r=n.elementType===i?r:In(i,r),Pl(e,n,i,r,t);case 1:return i=n.type,r=n.pendingProps,r=n.elementType===i?r:In(i,r),Hd(e,n,i,r,t);case 3:e:{if(fm(n),e===null)throw Error(D(387));i=n.pendingProps,a=n.memoizedState,r=a.element,Bh(e,n),oo(n,i,null,t);var o=n.memoizedState;if(i=o.element,a.isDehydrated)if(a={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},n.updateQueue.baseState=a,n.memoizedState=a,n.flags&256){r=Di(Error(D(423)),n),n=$d(e,n,i,t,r);break e}else if(i!==r){r=Di(Error(D(424)),n),n=$d(e,n,i,t,r);break e}else for(ln=mt(n.stateNode.containerInfo.firstChild),cn=n,me=!0,Cn=null,t=Fh(n,null,i,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Ti(),i===r){n=Jn(e,n,t);break e}Ve(e,n,i,t)}n=n.child}return n;case 5:return Wh(n),e===null&&kl(n),i=n.type,r=n.pendingProps,a=e!==null?e.memoizedProps:null,o=r.children,yl(i,r)?o=null:a!==null&&yl(i,a)&&(n.flags|=32),pm(e,n),Ve(e,n,o,t),n.child;case 6:return e===null&&kl(n),null;case 13:return hm(e,n,t);case 4:return qc(n,n.stateNode.containerInfo),i=n.pendingProps,e===null?n.child=Ri(n,null,i,t):Ve(e,n,i,t),n.child;case 11:return i=n.type,r=n.pendingProps,r=n.elementType===i?r:In(i,r),Wd(e,n,i,r,t);case 7:return Ve(e,n,n.pendingProps,t),n.child;case 8:return Ve(e,n,n.pendingProps.children,t),n.child;case 12:return Ve(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(i=n.type._context,r=n.pendingProps,a=n.memoizedProps,o=r.value,de(ro,i._currentValue),i._currentValue=o,a!==null)if(Tn(a.value,o)){if(a.children===r.children&&!Ze.current){n=Jn(e,n,t);break e}}else for(a=n.child,a!==null&&(a.return=n);a!==null;){var s=a.dependencies;if(s!==null){o=a.child;for(var l=s.firstContext;l!==null;){if(l.context===i){if(a.tag===1){l=Yn(-1,t&-t),l.tag=2;var c=a.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}a.lanes|=t,l=a.alternate,l!==null&&(l.lanes|=t),Sl(a.return,t,n),s.lanes|=t;break}l=l.next}}else if(a.tag===10)o=a.type===n.type?null:a.child;else if(a.tag===18){if(o=a.return,o===null)throw Error(D(341));o.lanes|=t,s=o.alternate,s!==null&&(s.lanes|=t),Sl(o,t,n),o=a.sibling}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===n){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}Ve(e,n,r.children,t),n=n.child}return n;case 9:return r=n.type,i=n.pendingProps.children,Si(n,t),r=wn(r),i=i(r),n.flags|=1,Ve(e,n,i,t),n.child;case 14:return i=n.type,r=In(i,n.pendingProps),r=In(i.type,r),Vd(e,n,i,r,t);case 15:return um(e,n,n.type,n.pendingProps,t);case 17:return i=n.type,r=n.pendingProps,r=n.elementType===i?r:In(i,r),ja(e,n),n.tag=1,en(i)?(e=!0,no(n)):e=!1,Si(n,t),sm(n,i,r),Al(n,i,r,t),_l(null,n,i,!0,e,t);case 19:return mm(e,n,t);case 22:return dm(e,n,t)}throw Error(D(156,n.tag))};function Rm(e,n){return rh(e,n)}function Xb(e,n,t,i){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function vn(e,n,t,i){return new Xb(e,n,t,i)}function su(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Jb(e){if(typeof e=="function")return su(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Cc)return 11;if(e===Pc)return 14}return 2}function bt(e,n){var t=e.alternate;return t===null?(t=vn(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function za(e,n,t,i,r,a){var o=2;if(i=e,typeof e=="function")su(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case oi:return Vt(t.children,r,a,n);case Ac:o=8,r|=8;break;case Ks:return e=vn(12,t,n,r|2),e.elementType=Ks,e.lanes=a,e;case Qs:return e=vn(13,t,n,r),e.elementType=Qs,e.lanes=a,e;case Xs:return e=vn(19,t,n,r),e.elementType=Xs,e.lanes=a,e;case Wf:return No(t,r,a,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case zf:o=10;break e;case Bf:o=9;break e;case Cc:o=11;break e;case Pc:o=14;break e;case rt:o=16,i=null;break e}throw Error(D(130,e==null?e:typeof e,""))}return n=vn(o,t,n,r),n.elementType=e,n.type=i,n.lanes=a,n}function Vt(e,n,t,i){return e=vn(7,e,i,n),e.lanes=t,e}function No(e,n,t,i){return e=vn(22,e,i,n),e.elementType=Wf,e.lanes=t,e.stateNode={isHidden:!1},e}function xs(e,n,t){return e=vn(6,e,null,n),e.lanes=t,e}function ks(e,n,t){return n=vn(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Zb(e,n,t,i,r){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ts(0),this.expirationTimes=ts(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ts(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function lu(e,n,t,i,r,a,o,s,l){return e=new Zb(e,n,t,s,l),n===1?(n=1,a===!0&&(n|=8)):n=0,a=vn(3,null,null,n),e.current=a,a.stateNode=e,a.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Uc(a),e}function ew(e,n,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ai,key:i==null?null:""+i,children:e,containerInfo:n,implementation:t}}function Mm(e){if(!e)return It;e=e._reactInternals;e:{if(ei(e)!==e||e.tag!==1)throw Error(D(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(en(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(D(171))}if(e.tag===1){var t=e.type;if(en(t))return Mh(e,t,n)}return n}function Dm(e,n,t,i,r,a,o,s,l){return e=lu(t,i,!0,e,r,a,o,s,l),e.context=Mm(null),t=e.current,i=Ue(),r=vt(t),a=Yn(i,r),a.callback=n??null,gt(t,a,r),e.current.lanes=r,Gr(e,r,i),nn(e,i),e}function jo(e,n,t,i){var r=n.current,a=Ue(),o=vt(r);return t=Mm(t),n.context===null?n.context=t:n.pendingContext=t,n=Yn(a,o),n.payload={element:e},i=i===void 0?null:i,i!==null&&(n.callback=i),e=gt(r,n,o),e!==null&&(_n(e,r,o,a),Da(e,r,o)),o}function mo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ep(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function cu(e,n){ep(e,n),(e=e.alternate)&&ep(e,n)}function nw(){return null}var Lm=typeof reportError=="function"?reportError:function(e){console.error(e)};function uu(e){this._internalRoot=e}Oo.prototype.render=uu.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(D(409));jo(e,n,null,null)};Oo.prototype.unmount=uu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Gt(function(){jo(null,e,null,null)}),n[Qn]=null}};function Oo(e){this._internalRoot=e}Oo.prototype.unstable_scheduleHydration=function(e){if(e){var n=dh();e={blockedOn:null,target:e,priority:n};for(var t=0;t<ot.length&&n!==0&&n<ot[t].priority;t++);ot.splice(t,0,e),t===0&&fh(e)}};function du(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Fo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function np(){}function tw(e,n,t,i,r){if(r){if(typeof i=="function"){var a=i;i=function(){var c=mo(o);a.call(c)}}var o=Dm(n,i,e,0,null,!1,!1,"",np);return e._reactRootContainer=o,e[Qn]=o.current,Rr(e.nodeType===8?e.parentNode:e),Gt(),o}for(;r=e.lastChild;)e.removeChild(r);if(typeof i=="function"){var s=i;i=function(){var c=mo(l);s.call(c)}}var l=lu(e,0,!1,null,null,!1,!1,"",np);return e._reactRootContainer=l,e[Qn]=l.current,Rr(e.nodeType===8?e.parentNode:e),Gt(function(){jo(n,l,t,i)}),l}function zo(e,n,t,i,r){var a=t._reactRootContainer;if(a){var o=a;if(typeof r=="function"){var s=r;r=function(){var l=mo(o);s.call(l)}}jo(n,o,e,r)}else o=tw(t,n,e,r,i);return mo(o)}ch=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=ir(n.pendingLanes);t!==0&&(Tc(n,t|1),nn(n,xe()),!(ae&6)&&(Li=xe()+500,Pt()))}break;case 13:Gt(function(){var i=Xn(e,1);if(i!==null){var r=Ue();_n(i,e,1,r)}}),cu(e,1)}};Rc=function(e){if(e.tag===13){var n=Xn(e,134217728);if(n!==null){var t=Ue();_n(n,e,134217728,t)}cu(e,134217728)}};uh=function(e){if(e.tag===13){var n=vt(e),t=Xn(e,n);if(t!==null){var i=Ue();_n(t,e,n,i)}cu(e,n)}};dh=function(){return se};ph=function(e,n){var t=se;try{return se=e,n()}finally{se=t}};sl=function(e,n,t){switch(n){case"input":if(el(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var i=t[n];if(i!==e&&i.form===e.form){var r=Eo(i);if(!r)throw Error(D(90));Hf(i),el(i,r)}}}break;case"textarea":Uf(e,t);break;case"select":n=t.value,n!=null&&bi(e,!!t.multiple,n,!1)}};Jf=ru;Zf=Gt;var iw={usingClientEntryPoint:!1,Events:[Qr,ui,Eo,Qf,Xf,ru]},Ji={findFiberByHostInstance:Ft,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},rw={bundleType:Ji.bundleType,version:Ji.version,rendererPackageName:Ji.rendererPackageName,rendererConfig:Ji.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Zn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=th(e),e===null?null:e.stateNode},findFiberByHostInstance:Ji.findFiberByHostInstance||nw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ba=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ba.isDisabled&&ba.supportsFiber)try{Ao=ba.inject(rw),jn=ba}catch{}}fn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=iw;fn.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!du(n))throw Error(D(200));return ew(e,n,null,t)};fn.createRoot=function(e,n){if(!du(e))throw Error(D(299));var t=!1,i="",r=Lm;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(r=n.onRecoverableError)),n=lu(e,1,!1,null,null,t,!1,i,r),e[Qn]=n.current,Rr(e.nodeType===8?e.parentNode:e),new uu(n)};fn.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(D(188)):(e=Object.keys(e).join(","),Error(D(268,e)));return e=th(n),e=e===null?null:e.stateNode,e};fn.flushSync=function(e){return Gt(e)};fn.hydrate=function(e,n,t){if(!Fo(n))throw Error(D(200));return zo(null,e,n,!0,t)};fn.hydrateRoot=function(e,n,t){if(!du(e))throw Error(D(405));var i=t!=null&&t.hydratedSources||null,r=!1,a="",o=Lm;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),n=Dm(n,null,e,1,t??null,r,!1,a,o),e[Qn]=n.current,Rr(e),i)for(e=0;e<i.length;e++)t=i[e],r=t._getVersion,r=r(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,r]:n.mutableSourceEagerHydrationData.push(t,r);return new Oo(n)};fn.render=function(e,n,t){if(!Fo(n))throw Error(D(200));return zo(null,e,n,!1,t)};fn.unmountComponentAtNode=function(e){if(!Fo(e))throw Error(D(40));return e._reactRootContainer?(Gt(function(){zo(null,null,e,!1,function(){e._reactRootContainer=null,e[Qn]=null})}),!0):!1};fn.unstable_batchedUpdates=ru;fn.unstable_renderSubtreeIntoContainer=function(e,n,t,i){if(!Fo(t))throw Error(D(200));if(e==null||e._reactInternals===void 0)throw Error(D(38));return zo(e,n,t,!1,i)};fn.version="18.3.1-next-f1338f8080-20240426";function Nm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Nm)}catch(e){console.error(e)}}Nm(),Nf.exports=fn;var aw=Nf.exports,tp=aw;Ys.createRoot=tp.createRoot,Ys.hydrateRoot=tp.hydrateRoot;const Bl={P:{short:"P",name:"People & Place",textColor:"text-sol-orange",rowBg:"#fdf3e8"},R:{short:"R",name:"Reality",textColor:"text-sol-green",rowBg:"#f5f6e8"},I:{short:"I",name:"Intent",textColor:"text-sol-violet",rowBg:"#f3f2f8"},S:{short:"S",name:"Signal",textColor:"text-sol-cyan",rowBg:"#f3f8f8"},M:{short:"M",name:"Movement",textColor:"text-sol-magenta",rowBg:"#f8f3f6"}},Wl={who:{short:"W",name:"Who",textColor:"text-sol-orange",rowBg:"#fdf3e8"},where:{short:"WH",name:"Where",textColor:"text-sol-blue",rowBg:"#f0f5fd"},runtime:{short:"RT",name:"Runtime",textColor:"text-sol-green",rowBg:"#f5f6e8"},state:{short:"ST",name:"State",textColor:"text-sol-blue",rowBg:"#f3f6f8"},control:{short:"CT",name:"Control",textColor:"text-sol-violet",rowBg:"#f3f2f8"},operations:{short:"OP",name:"Operations",textColor:"text-sol-cyan",rowBg:"#f3f8f8"}},Vl={identity:{short:"ID",name:"Identity",textColor:"text-sol-cyan",rowBg:"#f3f8f8"},surface:{short:"SF",name:"Surface",textColor:"text-sol-orange",rowBg:"#fdf3e8"},controls:{short:"CT",name:"Controls",textColor:"text-sol-green",rowBg:"#f5f6e8"},threats:{short:"TH",name:"Threats",textColor:"text-sol-magenta",rowBg:"#f8f3f6"},posture:{short:"PO",name:"Posture",textColor:"text-sol-blue",rowBg:"#f0f5fd"}},Hl={domains:{short:"DO",name:"Domains",textColor:"text-sol-violet",rowBg:"#f3f2f8"},components:{short:"CO",name:"Components",textColor:"text-sol-green",rowBg:"#f5f6e8"},integrations:{short:"IN",name:"Integrations",textColor:"text-sol-cyan",rowBg:"#f3f8f8"},quality:{short:"QA",name:"Quality",textColor:"text-sol-orange",rowBg:"#fdf3e8"},evolution:{short:"EV",name:"Evolution",textColor:"text-sol-magenta",rowBg:"#f8f3f6"}},$l={market:{short:"MK",name:"Market",textColor:"text-sol-orange",rowBg:"#fdf3e8"},value:{short:"VA",name:"Value",textColor:"text-sol-green",rowBg:"#f5f6e8"},bets:{short:"BT",name:"Bets",textColor:"text-sol-blue",rowBg:"#f0f5fd"},hypotheses:{short:"HY",name:"Hypotheses",textColor:"text-sol-violet",rowBg:"#f3f2f8"},signals:{short:"SG",name:"Signals",textColor:"text-sol-cyan",rowBg:"#f3f8f8"}},Ul={domains:{short:"DM",name:"Domains",textColor:"text-sol-yellow",rowBg:"#fdf8e0"},flows:{short:"FL",name:"Flows",textColor:"text-sol-cyan",rowBg:"#f3f8f8"},platforms:{short:"PL",name:"Platforms",textColor:"text-sol-blue",rowBg:"#f0f5fd"},contracts:{short:"CO",name:"Contracts",textColor:"text-sol-green",rowBg:"#f5f6e8"},governance:{short:"GV",name:"Governance",textColor:"text-sol-orange",rowBg:"#fdf3e8"}},ql={models:{short:"ML",name:"Models",textColor:"text-sol-violet",rowBg:"#f3f2f8"},systems:{short:"SY",name:"Systems",textColor:"text-sol-blue",rowBg:"#f0f5fd"},lifecycle:{short:"LC",name:"Lifecycle",textColor:"text-sol-cyan",rowBg:"#f3f8f8"},trust:{short:"TR",name:"Trust",textColor:"text-sol-magenta",rowBg:"#f8f3f6"},observability:{short:"OB",name:"Observability",textColor:"text-sol-green",rowBg:"#f5f6e8"}},Yl={self:{label:"ACME Core",cardBg:"#eee8d5",stripe:"#859900",textColor:"#586e75",subColor:"#93a1a1",dot:"#859900"},internal:{label:"ACME Team",cardBg:"#eee8d5",stripe:"#268bd2",textColor:"#586e75",subColor:"#93a1a1",dot:"#268bd2"},external:{label:"External",cardBg:"#eee8d5",stripe:"#cb4b16",textColor:"#586e75",subColor:"#93a1a1",dot:"#cb4b16"}},ow={stakeholder:"Stakeholders",geography:"Geographies",environment:"Environments",capability:"Capabilities",system:"Systems",process:"Processes",driver:"Drivers",timeline:"Timelines",risk:"Risks",goal:"Goals",constraint:"Constraints",api:"APIs",event:"Events",data_contract:"Data Contracts",adoption_signal:"Adoption Signals",sentiment:"Sentiment",ethics_marker:"Ethics Markers",change_readiness:"Change Readiness",decision:"Decisions",transition_program:"Transition Programs",target:"Targets",team:"Teams",account:"Accounts",provider:"Providers",region:"Regions",network_zone:"Network Zones",cluster:"Clusters",node_pool:"Node Pools",service:"Services",job:"Jobs",function:"Functions",vm:"VMs",queue:"Queues",topic:"Topics",stream:"Streams",workflow_engine:"Workflow Engines",database:"Databases",object_store:"Object Storage",file_system:"File Systems",cache:"Caches",data_warehouse:"Data Warehouses",data_lake:"Data Lakes",search_index:"Search Indexes",backup:"Backups",vpc:"VPCs",subnet:"Subnets",peering:"Peerings",load_balancer:"Load Balancers",cdn:"CDN",service_mesh:"Service Mesh",dns:"DNS",certificate:"Certificates",iam_role:"IAM Roles",iam_policy:"IAM Policies",secret_store:"Secret Stores",firewall_rule:"Firewall Rules",pipeline:"Pipelines",registry:"Registries",infrastructure_code:"IaC",metrics:"Metrics",logging:"Logging",tracing:"Tracing",alerting:"Alerting",dashboard:"Dashboards",runbook:"Runbooks",slo:"SLOs",chaos:"Chaos Engineering",public_endpoint:"Public Endpoints",internal_endpoint:"Internal Endpoints",legacy_interface:"Legacy Interfaces",technical_control:"Technical Controls",org_control:"Org Controls",threat:"Threats",compliance:"Compliance",security_program:"Security Programs",domain:"Domains",quality_metric:"Quality Metrics",roadmap_item:"Roadmap Items",deprecation:"Deprecations",segment:"Segments",persona:"Personas",channel:"Channels",engagement_model:"Engagement Models",problem:"Problems",value_proposition:"Value Propositions",differentiator:"Differentiators",outcome:"Outcomes",bet:"Bets",exclusion:"Exclusions",alternative:"Alternatives",assumption:"Assumptions",unknown:"Unknowns",metric:"Metrics",experiment:"Experiments",result:"Results",learning:"Learnings",pivot:"Pivots",data_domain:"Data Domains",data_product:"Data Products",dataset:"Datasets",event_stream:"Event Streams",data_api:"Data APIs",feature_store:"Feature Stores",stream_platform:"Stream Platforms",data_cache:"Data Caches",lakehouse:"Lakehouses",sla:"SLAs",schema_def:"Schema Definitions",quality_rule:"Quality Rules",pii_register:"PII Registers",retention_rule:"Retention Rules",access_policy:"Access Policies",lineage_map:"Lineage Maps",compliance_control:"Compliance Controls",foundation_model:"Foundation Models",fine_tuned_model:"Fine-Tuned Models",custom_model:"Custom Models",embedding_model:"Embedding Models",explainability_layer:"Explainability Layers",ai_system:"AI Systems",rag_pipeline:"RAG Pipelines",copilot:"Copilots",classifier_service:"Classifier Services",autonomous_workflow:"Autonomous Workflows",ai_agent:"AI Agents",training_run:"Training Runs",eval_suite:"Eval Suites",deployment:"Deployments",monitoring_job:"Monitoring Jobs",guardrail:"Guardrails",bias_assessment:"Bias Assessments",red_team_finding:"Red Team Findings",alignment_control:"Alignment Controls",explainability_config:"Explainability Configs",eval_metric:"Eval Metrics",drift_detector:"Drift Detectors",alert_rule:"Alert Rules",ai_incident:"AI Incidents",trace_config:"Trace Configs"};function sw(e){const n={};for(const t of e||[]){const i=t.type||"other";n[i]||(n[i]=[]),n[i].push(t)}return Object.entries(n)}function lw(e,n){return n==="cy"?Vl[e.dimension_key]||Vl.identity:n==="app"?Hl[e.dimension_key]||Hl.domains:n==="infra"?Wl[e.dimension_key]||Wl.who:n==="mvp"?$l[e.dimension_key]||$l.market:n==="dt"?Ul[e.dimension_key]||Ul.domains:n==="ai"?ql[e.dimension_key]||ql.models:Bl[e.prism_layer]||Bl.P}function cw(e){return e==="selected"?"0 0 0 2.5px #268bd2, 0 2px 6px rgba(38,139,210,0.25)":e==="impacted"?"0 0 0 2.5px #cb4b16, 0 2px 6px rgba(203,75,22,0.25)":e==="upstream"?"0 0 0 2.5px #859900, 0 2px 6px rgba(133,153,0,0.25)":"0 1px 3px rgba(0,0,0,0.08)"}function j({children:e,bg:n,fg:t}){return h.jsx("span",{style:{fontSize:"9px",padding:"1px 5px",borderRadius:"3px",backgroundColor:n,color:t,fontWeight:700,lineHeight:"15px",whiteSpace:"nowrap",display:"inline-block"},children:e})}function uw({id:e,icon:n,label:t,sub:i,ownership:r,status:a,execution_mode:o,trigger_mode:s,system_type:l,classification:c,direction:d,data_sensitivity:u,compliance_frameworks:p,tier:f,validation_state:m,risk_level:b,assumption_type:A,result_state:y,pivot_type:g,segment_type:v,metric_type:I,bet_status:P,ai_specific:S,data_classification:_,domain_type:R,contract_state:F,lifecycle_stage:k,model_provider:T,human_in_loop:z,trust_type:G,enforcement:Q,severity:N,signal_type:q,ai_model:ne,blastState:M,anySelected:H,atRisk:w,onSelect:B}){const $=Yl[r]||Yl.self,x=a==="decommissioning"||a==="decommissioned",oe=["ai-agent","llm","agentic-workflow"].includes(l)||ne;let pe=$.cardBg;x&&(pe="#fcebd8"),oe&&(pe="#f0eef8");const C=[];oe&&C.push(h.jsx(j,{bg:"#d4d0f0",fg:"#6c71c4",children:"✦ AI"},"ai")),a==="decommissioning"&&C.push(h.jsx(j,{bg:"#f5cba7",fg:"#9a3500",children:"⚠ decomm."},"dc")),a==="decommissioned"&&C.push(h.jsx(j,{bg:"#f5c6c6",fg:"#dc322f",children:"decomm'd"},"dcd")),o==="manual"&&C.push(h.jsx(j,{bg:"#faeeb5",fg:"#7a5c00",children:"🤚 manual"},"man")),o==="semi-automatic"&&C.push(h.jsx(j,{bg:"#d4ecd4",fg:"#4a6000",children:"semi-auto"},"semi")),s==="manual"&&!o&&C.push(h.jsx(j,{bg:"#faeeb5",fg:"#7a5c00",children:"🤚 trigger"},"trig")),c==="confidential"&&C.push(h.jsx(j,{bg:"#e8e0f5",fg:"#6c71c4",children:"🔒 confid."},"conf")),c==="secret"&&C.push(h.jsx(j,{bg:"#f5e0e0",fg:"#dc322f",children:"🔐 secret"},"sec")),c==="proprietary"&&C.push(h.jsx(j,{bg:"#ddedf8",fg:"#268bd2",children:"🔑 propr."},"prop")),d==="inbound"&&C.push(h.jsx(j,{bg:"#e8f5e8",fg:"#4a6000",children:"↓ in"},"dir")),d==="outbound"&&C.push(h.jsx(j,{bg:"#f5e8e8",fg:"#9a3500",children:"↑ out"},"dir")),d==="bidirectional"&&C.push(h.jsx(j,{bg:"#e8f0f5",fg:"#268bd2",children:"⇅ bi"},"dir")),u!=null&&u.includes("spii")&&C.push(h.jsx(j,{bg:"#f8ddd8",fg:"#8a1500",children:"SPII"},"spii")),u!=null&&u.includes("pii")&&!(u!=null&&u.includes("spii"))&&C.push(h.jsx(j,{bg:"#ddf0f8",fg:"#005f8a",children:"PII"},"pii")),u!=null&&u.includes("phi")&&C.push(h.jsx(j,{bg:"#d8f0e8",fg:"#004d30",children:"PHI"},"phi")),u!=null&&u.includes("pci")&&C.push(h.jsx(j,{bg:"#f8f0d8",fg:"#704800",children:"PCI"},"pci")),(p==null?void 0:p.length)>0&&p.map(Te=>typeof Te=="string"?Te:Te.framework).slice(0,2).forEach((Te,nt)=>{C.push(h.jsx(j,{bg:"#dce8f0",fg:"#2a4a60",children:Te},`fw-${nt}`))}),w&&!M&&C.push(h.jsx(j,{bg:"#faeeb5",fg:"#7a5c00",children:"⚠ at risk"},"risk")),f==="must"&&C.push(h.jsx(j,{bg:"#d0f0e0",fg:"#004d20",children:"MUST"},"tier")),f==="should"&&C.push(h.jsx(j,{bg:"#d0e8f8",fg:"#00304d",children:"SHOULD"},"tier")),f==="could"&&C.push(h.jsx(j,{bg:"#e8e8e8",fg:"#404040",children:"COULD"},"tier")),P==="parked"&&C.push(h.jsx(j,{bg:"#ececec",fg:"#5c5c5c",children:"parked"},"bst")),S&&C.push(h.jsx(j,{bg:"#e8e0f5",fg:"#6c71c4",children:"✦ AI"},"aibet")),v==="negative"&&C.push(h.jsx(j,{bg:"#f8ddd8",fg:"#8a1500",children:"excl."},"seg")),v==="secondary"&&C.push(h.jsx(j,{bg:"#dce8f0",fg:"#2a4a60",children:"secondary"},"seg")),A==="ai-behavior"&&C.push(h.jsx(j,{bg:"#e8e0f5",fg:"#6c71c4",children:"✦ AI"},"at")),b==="critical"&&C.push(h.jsx(j,{bg:"#f8ddd8",fg:"#8a1500",children:"⚠ critical"},"rl")),b==="high"&&C.push(h.jsx(j,{bg:"#fde8d0",fg:"#7a3500",children:"↑ high"},"rl")),I==="north_star"&&C.push(h.jsx(j,{bg:"#d8f0e8",fg:"#004d30",children:"★ north star"},"mt")),I==="guardrail"&&C.push(h.jsx(j,{bg:"#fde8d0",fg:"#7a3500",children:"■ guardrail"},"mt")),I==="diagnostic"&&C.push(h.jsx(j,{bg:"#dce8f0",fg:"#2a4a60",children:"◆ diagnostic"},"mt")),m==="validated"&&C.push(h.jsx(j,{bg:"#d8f0e8",fg:"#004d30",children:"✓ valid"},"vs")),m==="invalidated"&&C.push(h.jsx(j,{bg:"#f0d8d8",fg:"#8a0000",children:"✗ invalid"},"vs")),m==="in-progress"&&C.push(h.jsx(j,{bg:"#fdf0d8",fg:"#7a4800",children:"▶ testing"},"vs")),m==="assumed"&&C.push(h.jsx(j,{bg:"#ececec",fg:"#5c5c5c",children:"? assumed"},"vs")),m==="observed"&&C.push(h.jsx(j,{bg:"#dce8f0",fg:"#2a4a60",children:"~ observed"},"vs")),y==="supports"&&C.push(h.jsx(j,{bg:"#d8f0e8",fg:"#004d30",children:"✓ supports"},"rs")),y==="refutes"&&C.push(h.jsx(j,{bg:"#f0d8d8",fg:"#8a0000",children:"✗ refutes"},"rs")),y==="inconclusive"&&C.push(h.jsx(j,{bg:"#ececec",fg:"#5c5c5c",children:"~ unclear"},"rs")),y==="pending"&&C.push(h.jsx(j,{bg:"#fdf0d8",fg:"#7a4800",children:"▶ pending"},"rs")),g&&C.push(h.jsx(j,{bg:"#dce8f0",fg:"#2a4a60",children:g},"pt")),_==="restricted"&&C.push(h.jsx(j,{bg:"#f0d8d8",fg:"#8a0000",children:"⊠ restricted"},"dc")),_==="confidential"&&C.push(h.jsx(j,{bg:"#fde8d0",fg:"#7a3500",children:"🔒 confidential"},"dc")),_==="internal"&&C.push(h.jsx(j,{bg:"#dce8f0",fg:"#2a4a60",children:"internal"},"dc")),R==="source"&&C.push(h.jsx(j,{bg:"#fdf8e0",fg:"#7a5c00",children:"source"},"dt")),R==="derived"&&C.push(h.jsx(j,{bg:"#f0f5fd",fg:"#003080",children:"derived"},"dt")),R==="aggregate"&&C.push(h.jsx(j,{bg:"#f3f8f8",fg:"#005c5c",children:"aggregate"},"dt")),R==="event"&&C.push(h.jsx(j,{bg:"#f8f3f6",fg:"#6c0050",children:"event"},"dt")),F==="enforced"&&C.push(h.jsx(j,{bg:"#d8f0e8",fg:"#004d30",children:"✓ enforced"},"cs")),F==="breached"&&C.push(h.jsx(j,{bg:"#f0d8d8",fg:"#8a0000",children:"✗ breached"},"cs")),F==="agreed"&&C.push(h.jsx(j,{bg:"#fdf0d8",fg:"#7a4800",children:"agreed"},"cs")),F==="draft"&&C.push(h.jsx(j,{bg:"#ececec",fg:"#5c5c5c",children:"draft"},"cs")),Q==="breaking"&&C.push(h.jsx(j,{bg:"#f0d8d8",fg:"#8a0000",children:"⚡ breaking"},"ef")),Q==="advisory"&&C.push(h.jsx(j,{bg:"#ececec",fg:"#5c5c5c",children:"advisory"},"ef")),k==="production"&&C.push(h.jsx(j,{bg:"#d8f0e8",fg:"#004d30",children:"✓ prod"},"ls")),k==="staging"&&C.push(h.jsx(j,{bg:"#dce8f0",fg:"#2a4a60",children:"▶ staging"},"ls")),k==="research"&&C.push(h.jsx(j,{bg:"#ececec",fg:"#5c5c5c",children:"◎ research"},"ls")),k==="deprecated"&&C.push(h.jsx(j,{bg:"#fde8d0",fg:"#7a3500",children:"⚠ deprecated"},"ls")),k==="retired"&&C.push(h.jsx(j,{bg:"#f0d8d8",fg:"#8a0000",children:"retired"},"ls")),T==="openai"&&C.push(h.jsx(j,{bg:"#d8f0e8",fg:"#004d30",children:"OpenAI"},"mp")),T==="anthropic"&&C.push(h.jsx(j,{bg:"#e8e0f5",fg:"#3c3c8a",children:"Anthropic"},"mp")),T==="google"&&C.push(h.jsx(j,{bg:"#fff0d8",fg:"#7a4800",children:"Google"},"mp")),T==="open-source"&&C.push(h.jsx(j,{bg:"#f3f8f8",fg:"#005c5c",children:"open-source"},"mp")),z&&C.push(h.jsx(j,{bg:"#faeeb5",fg:"#7a5c00",children:"🤚 HITL"},"hil")),G==="accuracy"&&C.push(h.jsx(j,{bg:"#d8f0e8",fg:"#004d30",children:"accuracy"},"tt")),G==="alignment"&&C.push(h.jsx(j,{bg:"#e8e0f5",fg:"#6c71c4",children:"alignment"},"tt")),G==="fairness"&&C.push(h.jsx(j,{bg:"#fde8d0",fg:"#7a3500",children:"fairness"},"tt")),G==="safety"&&C.push(h.jsx(j,{bg:"#f0d8d8",fg:"#8a0000",children:"safety"},"tt")),G==="explainability"&&C.push(h.jsx(j,{bg:"#dce8f0",fg:"#2a4a60",children:"explain"},"tt")),G==="privacy"&&C.push(h.jsx(j,{bg:"#f8f3f6",fg:"#6c0050",children:"privacy"},"tt")),Q==="blocking"&&C.push(h.jsx(j,{bg:"#f0d8d8",fg:"#8a0000",children:"⛔ blocking"},"enf")),Q==="soft-block"&&C.push(h.jsx(j,{bg:"#fde8d0",fg:"#7a3500",children:"⚡ soft-block"},"enf")),Q==="alerting"&&C.push(h.jsx(j,{bg:"#faeeb5",fg:"#7a5c00",children:"🔔 alerting"},"enf")),Q==="logging"&&C.push(h.jsx(j,{bg:"#ececec",fg:"#5c5c5c",children:"logging"},"enf")),N==="critical"&&G&&C.push(h.jsx(j,{bg:"#f8ddd8",fg:"#8a1500",children:"⚠ critical"},"sv")),N==="high"&&G&&C.push(h.jsx(j,{bg:"#fde8d0",fg:"#7a3500",children:"↑ high"},"sv")),N==="medium"&&G&&C.push(h.jsx(j,{bg:"#faeeb5",fg:"#7a5c00",children:"medium"},"sv")),q==="drift"&&C.push(h.jsx(j,{bg:"#fde8d0",fg:"#7a3500",children:"◈ drift"},"st")),q==="override-rate"&&C.push(h.jsx(j,{bg:"#faeeb5",fg:"#7a5c00",children:"🤚 override"},"st")),q==="accuracy"&&C.push(h.jsx(j,{bg:"#d8f0e8",fg:"#004d30",children:"◆ accuracy"},"st")),q==="latency"&&C.push(h.jsx(j,{bg:"#dce8f0",fg:"#2a4a60",children:"⚡ latency"},"st"));const be=M?cw(M):w?"0 0 0 1.5px #b58900, 0 1px 3px rgba(0,0,0,0.06)":"0 1px 3px rgba(0,0,0,0.08)";return h.jsx("div",{className:"rounded-xl px-2.5 py-2 cursor-pointer transition-all duration-150",style:{backgroundColor:pe,borderLeft:`4px solid ${$.stripe}`,borderTop:"1px solid #d4cdb8",borderRight:"1px solid #d4cdb8",borderBottom:"1px solid #d4cdb8",boxShadow:be,opacity:H&&!M&&!w?.35:1,width:"150px",flexShrink:0},onClick:()=>B(e),children:h.jsxs("div",{className:"flex items-start gap-1.5",children:[h.jsx("span",{className:"w-2 h-2 rounded-full flex-shrink-0",style:{backgroundColor:$.dot,marginTop:"3px"}}),h.jsxs("div",{style:{minWidth:0,flex:1},children:[h.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:"3px",flexWrap:"wrap"},children:[h.jsx("span",{className:"text-sm leading-none select-none",style:{color:$.textColor},children:n}),h.jsx("span",{className:"font-body font-bold text-xs leading-tight",style:{color:$.textColor,wordBreak:"break-word",flex:"1 1 0",minWidth:0},children:t})]}),h.jsx("div",{className:"text-xs leading-tight mt-0.5 font-body",style:{color:$.subColor},children:i}),C.length>0&&h.jsx("div",{style:{marginTop:"4px",display:"flex",flexWrap:"wrap",gap:"3px"},children:C})]})]})})}function dw({type:e,artifacts:n,blastMap:t,anySelected:i,atRiskSet:r,onSelect:a}){const o=ow[e]||e;return h.jsxs("div",{children:[h.jsxs("div",{className:"flex items-center gap-2 mb-1.5",children:[h.jsx("span",{className:"font-clay font-semibold text-xs uppercase tracking-wider text-sol-base1",children:o}),h.jsx("div",{className:"flex-1 h-px bg-sol-base2"})]}),h.jsx("div",{className:"flex flex-wrap gap-1.5",children:n.map(s=>h.jsx(uw,{...s,blastState:t[s.id],anySelected:i,atRisk:r.has(s.id),onSelect:a},s.id))})]})}function pw({dimension:e,profile:n,isLast:t,blastMap:i,anySelected:r,atRiskSet:a,onSelect:o}){const s=lw(e,n),l=sw(e.artifacts);return h.jsxs("div",{className:`flex items-stretch ${t?"":"border-b border-sol-base2"}`,style:{backgroundColor:s.rowBg},children:[h.jsxs("div",{className:"w-44 flex-shrink-0 px-4 py-4 flex flex-col justify-start border-r border-sol-base2",children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx("span",{className:"text-xl select-none leading-none",style:{color:"#93a1a1"},children:e.icon}),h.jsx("span",{className:"font-clay font-bold text-xl text-sol-base00 leading-tight",children:e.name})]}),h.jsx("div",{className:"text-xs font-body mt-1 pl-7 leading-tight text-sol-base1",children:e.subtitle})]}),h.jsxs("div",{className:"w-36 flex-shrink-0 px-3 py-4 border-r border-sol-base2 flex flex-col justify-start",children:[h.jsx("span",{className:`font-clay font-bold text-2xl leading-none ${s.textColor}`,children:s.short}),h.jsx("span",{className:`font-clay text-xs font-semibold leading-tight mt-0.5 opacity-80 ${s.textColor}`,children:s.name})]}),h.jsx("div",{className:"flex-1 px-4 py-3",style:{display:"grid",gridTemplateColumns:"repeat(3, minmax(0, 1fr))",gap:"12px",alignItems:"start"},children:l.map(([c,d])=>h.jsx(dw,{type:c,artifacts:d,blastMap:i,anySelected:r,atRiskSet:a,onSelect:o},c))})]})}function fw({selectedId:e,allArtifacts:n,dependsOnMap:t,dependentsMap:i,onClose:r}){var p,f,m,b,A,y;if(!e)return null;const a=n.find(g=>g.id===e);if(!a)return null;const o=(i[e]||[]).map(g=>n.find(v=>v.id===g)).filter(Boolean),s=(t[e]||[]).map(g=>n.find(v=>v.id===g)).filter(Boolean),l=s.some(g=>g.status==="decommissioning"||g.status==="decommissioned"),c=a.execution_mode==="manual",d=["ai-agent","llm","agentic-workflow"].includes(a.system_type),u={panel:{position:"fixed",bottom:0,left:0,right:0,zIndex:50,backgroundColor:"#002b36",borderTop:"2px solid #268bd2"},inner:{padding:"12px 24px",display:"flex",gap:"32px",flexWrap:"wrap",alignItems:"flex-start"},sectionHead:{fontSize:"10px",textTransform:"uppercase",letterSpacing:"0.1em",marginBottom:"4px"},artifactRow:{display:"flex",alignItems:"center",gap:"8px",marginTop:"3px"},dot:g=>({width:"8px",height:"8px",borderRadius:"50%",background:g,flexShrink:0,display:"inline-block"}),artName:{fontSize:"12px",color:"#fdf6e3"},chip:(g,v)=>({fontSize:"9px",padding:"1px 5px",borderRadius:"3px",background:g,color:v,fontWeight:700}),warn:(g,v,I)=>({fontSize:"11px",padding:"6px 10px",borderRadius:"4px",background:g,borderLeft:`3px solid ${v}`,color:I,marginTop:"4px"}),close:{color:"#657b83",fontSize:"18px",cursor:"pointer",background:"none",border:"none",padding:"0 4px",alignSelf:"flex-start",marginLeft:"auto",lineHeight:1}};return h.jsx("div",{style:u.panel,children:h.jsxs("div",{style:u.inner,children:[h.jsxs("div",{style:{minWidth:"140px"},children:[h.jsx("div",{style:{...u.sectionHead,color:"#657b83"},children:"Selected"}),h.jsxs("div",{style:{fontWeight:700,fontSize:"15px",color:"#fdf6e3"},children:[a.icon," ",a.label]}),a.sub&&h.jsx("div",{style:{fontSize:"11px",color:"#657b83",marginTop:"2px"},children:a.sub}),h.jsxs("div",{style:{display:"flex",gap:"4px",flexWrap:"wrap",marginTop:"4px"},children:[d&&h.jsx("span",{style:u.chip("#4a3f8a","#d4d0f0"),children:"✦ AI"}),a.status&&a.status!=="active"&&h.jsxs("span",{style:u.chip("#7a2b0a","#f5cba7"),children:["⚠ ",a.status]}),c&&h.jsx("span",{style:u.chip("#5a4a00","#faeeb5"),children:"🤚 manual"}),a.execution_mode==="semi-automatic"&&h.jsx("span",{style:u.chip("#1a3000","#d4ecd4"),children:"semi-auto"}),((p=a.data_sensitivity)==null?void 0:p.includes("spii"))&&h.jsx("span",{style:u.chip("#5a0a00","#f8ddd8"),children:"SPII"}),((f=a.data_sensitivity)==null?void 0:f.includes("pii"))&&!((m=a.data_sensitivity)!=null&&m.includes("spii"))&&h.jsx("span",{style:u.chip("#003050","#ddf0f8"),children:"PII"}),((b=a.data_sensitivity)==null?void 0:b.includes("phi"))&&h.jsx("span",{style:u.chip("#002a1a","#d8f0e8"),children:"PHI"}),((A=a.data_sensitivity)==null?void 0:A.includes("pci"))&&h.jsx("span",{style:u.chip("#3a2800","#f8f0d8"),children:"PCI"})]}),((y=a.compliance_frameworks)==null?void 0:y.length)>0&&h.jsxs("div",{style:{fontSize:"10px",color:"#4a6070",marginTop:"4px"},children:["Frameworks: ",a.compliance_frameworks.map(g=>typeof g=="string"?g:g.framework).join(" · ")]})]}),o.length>0&&h.jsxs("div",{children:[h.jsxs("div",{style:{...u.sectionHead,color:"#cb4b16"},children:["Blast Radius — ",o.length," impacted"]}),o.map(g=>h.jsxs("div",{style:u.artifactRow,children:[h.jsx("span",{style:u.dot("#cb4b16")}),h.jsxs("span",{style:u.artName,children:[g.icon," ",g.label]}),g.execution_mode==="manual"&&h.jsx("span",{style:u.chip("#5a4a00","#faeeb5"),children:"manual"}),(g.status==="decommissioning"||g.status==="decommissioned")&&h.jsxs("span",{style:u.chip("#7a2b0a","#f5cba7"),children:["⚠ ",g.status]})]},g.id))]}),s.length>0&&h.jsxs("div",{children:[h.jsxs("div",{style:{...u.sectionHead,color:"#859900"},children:["Depends On — ",s.length]}),s.map(g=>h.jsxs("div",{style:u.artifactRow,children:[h.jsx("span",{style:u.dot("#859900")}),h.jsxs("span",{style:u.artName,children:[g.icon," ",g.label]}),(g.status==="decommissioning"||g.status==="decommissioned")&&h.jsxs("span",{style:u.chip("#7a2b0a","#f5cba7"),children:["⚠ ",g.status]})]},g.id))]}),h.jsxs("div",{style:{flex:1,minWidth:"200px",display:"flex",flexDirection:"column",justifyContent:"center"},children:[l&&h.jsx("div",{style:u.warn("#3d1a0a","#cb4b16","#f5cba7"),children:"⚠ Depends on a system being decommissioned — review impact before shipping."}),c&&h.jsx("div",{style:u.warn("#2d2600","#b58900","#faeeb5"),children:"🤚 Manual process — automation candidate."}),o.length===0&&s.length===0&&h.jsx("div",{style:{fontSize:"11px",color:"#4a6070"},children:"No tracked dependencies for this artifact."})]}),h.jsx("button",{onClick:r,style:u.close,children:"✕"})]})})}function hw({profile:e,meta:n}){const c=e==="infra"?[["◎","Team"],["▣","Account / Env"],["⬡","Provider / VPC"],["⊞","Cluster"],["↺","Service"],["↯","Topic"],["⊙","Workflow"],["▤","Data / Storage"],["⇌","Load Balancer"],["⊘","IAM / Secret"],["▲","Pipeline"],["◆","IaC"],["◉","SLO"]]:e==="cy"?[["◑","IAM Role"],["◐","Service Account"],["⊘","Privileged Access"],["◈","Public Endpoint"],["▣","Internal Endpoint"],["▤","Legacy Interface"],["⊛","Technical Control"],["▸","Org Control"],["⚠","Threat"],["◉","Compliance"],["▲","Security Program"]]:e==="app"?[["⬡","Domain"],["↺","Service"],["⊛","AI Component"],["⇌","Adapter / API"],["↯","Event"],["▤","Data Contract"],["◉","Quality Metric"],["◈","ADR / Decision"],["▲","Migration / Program"],["⊘","Deprecation"]]:e==="mvp"?[["◎","Segment"],["⇌","Channel"],["▣","Engagement Model"],["⚠","Problem / Risk"],["◉","Value Proposition"],["◆","Differentiator"],["▸","Bet"],["⊘","Exclusion"],["↯","Alternative"],["⊛","Assumption"],["◐","Unknown"],["◈","Metric"],["↺","Experiment"],["▤","Result"],["▲","Learning"],["⬡","Pivot"]]:e==="dt"?[["⬡","Data Domain"],["◉","Data Product"],["↺","Pipeline"],["↺","Event Stream"],["↺","Data API"],["▣","Data Lake"],["▣","Data Warehouse"],["▣","Feature Store"],["▣","Stream Platform"],["▤","Data Contract"],["▤","SLA"],["⊘","PII Register"],["⊘","Access Policy"],["⊘","Retention Rule"],["⊘","Lineage Map"],["⊘","Compliance Control"]]:e==="ai"?[["⊛","Custom Model"],["⊛","Embedding Model"],["⊛","Explainability Layer"],["⊞","AI System"],["⊞","Copilot"],["⊞","RAG Pipeline"],["⊞","Classifier"],["↺","Training Run"],["↺","Eval Suite"],["↺","Deployment"],["↺","Monitoring Job"],["⊘","Guardrail"],["⊘","Bias Assessment"],["⊘","Red Team Finding"],["⊘","Alignment Control"],["◈","Eval Metric"],["◈","Drift Detector"],["◈","AI Incident"]]:[["◎","Stakeholder"],["⬡","Geography"],["▣","Environment"],["◆","Capability"],["↺","Process"],["⊞","System"],["⊛","AI System"],["▸","Driver"],["⊙","Timeline"],["⚠","Risk"],["◉","Goal"],["⊘","Constraint"],["⇌","API"],["↯","Event"],["▤","Data Contract"],["▲","Adoption"],["◈","Decision"]],d=e==="infra"?Wl:e==="cy"?Vl:e==="app"?Hl:e==="mvp"?$l:e==="dt"?Ul:e==="ai"?ql:Bl,u=e==="ea"?"PRISM Layers":"Dimensions",p={ea:"prism/examples/acme-insurance/",infra:"infrastructure/examples/acme-insurance/",cy:"cybersecurity/examples/acme-insurance/",app:"app-architecture/examples/acme-insurance/",mvp:"mvp/examples/acme-insurance/",dt:"data-architecture/examples/acme-insurance/",ai:"ai-architecture/examples/acme-insurance/"},f=(n==null?void 0:n.source)||p[e]||"";return h.jsxs("div",{className:"border-t border-sol-base2 px-8 py-6 bg-sol-base2",children:[h.jsx("h3",{className:"font-clay font-bold text-sol-base1 text-xs uppercase tracking-widest mb-5",children:"Legend"}),h.jsxs("div",{className:"flex flex-wrap gap-10",children:[h.jsxs("div",{children:[h.jsx("div",{className:"font-clay font-semibold text-sol-base1 text-xs uppercase tracking-wider mb-3",children:"Ownership"}),h.jsx("div",{className:"flex flex-col gap-3",children:Object.entries(Yl).map(([m,b])=>h.jsxs("div",{className:"flex items-start gap-2.5",children:[h.jsx("div",{className:"w-3 h-3 rounded-full flex-shrink-0 mt-0.5",style:{backgroundColor:b.dot}}),h.jsxs("div",{children:[h.jsx("span",{className:"text-xs font-body font-semibold text-sol-base00",children:b.label}),h.jsxs("span",{className:"text-xs font-body text-sol-base1 ml-1.5",children:[m==="self"&&"— owned and operated by ACME core teams",m==="internal"&&"— owned by another ACME division",m==="external"&&"— third party or regulatory authority"]})]})]},m))})]}),h.jsxs("div",{children:[h.jsx("div",{className:"font-clay font-semibold text-sol-base1 text-xs uppercase tracking-wider mb-3",children:"Blast Radius"}),h.jsxs("div",{className:"flex flex-col gap-2",children:[[["#268bd2","Selected artifact","circle"],["#cb4b16","Impacted (depends on selected)","circle"],["#859900","Upstream (selected depends on this)","circle"],["#b58900","At risk — depends on a decommissioning artifact","ring"]].map(([m,b,A])=>h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx("span",{style:{width:"10px",height:"10px",borderRadius:"50%",background:A==="ring"?"transparent":m,border:A==="ring"?`2px solid ${m}`:"none",flexShrink:0,display:"inline-block"}}),h.jsx("span",{className:"text-xs font-body text-sol-base0",children:b})]},m)),h.jsx("div",{className:"text-xs font-body text-sol-base1 mt-1",children:"Click any card to explore. Click again to deselect."})]})]}),h.jsxs("div",{children:[h.jsx("div",{className:"font-clay font-semibold text-sol-base1 text-xs uppercase tracking-wider mb-3",children:u}),h.jsx("div",{className:"flex flex-col gap-2",children:Object.entries(d).map(([m,b])=>h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx("span",{className:`font-clay font-bold text-lg w-8 leading-none ${b.textColor}`,children:b.short}),h.jsx("span",{className:"text-xs font-body text-sol-base0",children:b.name})]},m))})]}),h.jsxs("div",{children:[h.jsx("div",{className:"font-clay font-semibold text-sol-base1 text-xs uppercase tracking-wider mb-3",children:"Icons"}),h.jsx("div",{className:"grid grid-cols-2 gap-x-8 gap-y-1.5",children:c.map(([m,b])=>h.jsxs("div",{className:"flex items-center gap-1.5",children:[h.jsx("span",{className:"text-sm w-5 text-center select-none text-sol-base1",children:m}),h.jsx("span",{className:"text-xs text-sol-base0 font-body",children:b})]},m+b))})]}),h.jsxs("div",{className:"ml-auto text-right",children:[h.jsx("div",{className:"font-clay font-semibold text-sol-base1 text-xs uppercase tracking-wider mb-3",children:"Temporal Axis"}),h.jsxs("div",{className:"font-body text-xs text-sol-base0 space-y-1",children:[h.jsxs("div",{children:["◄ ",h.jsx("strong",{className:"text-sol-base00",children:"baseline"})," — current as-is state"]}),h.jsxs("div",{children:["↔ ",h.jsx("strong",{className:"text-sol-base00",children:"transition"})," — change in progress"]}),h.jsxs("div",{children:[h.jsx("strong",{className:"text-sol-base00",children:"target"})," ► — desired to-be state"]})]}),h.jsxs("div",{className:"mt-5 font-body text-xs text-sol-base1 leading-relaxed",children:[e==="ea"?"PRISM Framework v1.0":e==="infra"?"PRISM/I Framework v1.0":e==="cy"?"PRISM/CY Framework v1.0":e==="mvp"?"PRISM/MVP Framework v1.0":e==="dt"?"PRISM/D Framework v1.0":e==="ai"?"PRISM/AI Framework v1.0":"PRISM/A Framework v1.0",h.jsx("br",{}),"Source: ",f]})]})]})]})}function ip({landscape:e,profile:n,selectedId:t,onSelect:i}){const{meta:r={},dimensions:a=[]}=e||{},o=V.useMemo(()=>a.flatMap(f=>f.artifacts||[]),[a]),s=V.useMemo(()=>{var m;const f={};for(const b of o)(m=b.depends_on)!=null&&m.length&&(f[b.id]=b.depends_on);return f},[o]),l=V.useMemo(()=>{const f={};for(const[m,b]of Object.entries(s))for(const A of b)f[A]||(f[A]=[]),f[A].push(m);return f},[s]),c=V.useMemo(()=>{if(!t)return{};const f={};f[t]="selected";for(const m of l[t]||[])f[m]="impacted";for(const m of s[t]||[])f[m]="upstream";return f},[t,l,s]),d=V.useMemo(()=>{const f=new Set(o.filter(b=>b.status==="decommissioning"||b.status==="decommissioned").map(b=>b.id)),m=new Set;for(const[b,A]of Object.entries(s))A.some(y=>f.has(y))&&m.add(b);return m},[o,s]),u=!!t,p=n==="ea"?"Layer":"Dimension";return h.jsxs("div",{style:{overflowY:"auto",height:"100%"},children:[h.jsxs("div",{className:"px-8 py-2 flex items-center gap-3 flex-wrap",style:{backgroundColor:"#e8e3cc",borderBottom:"1px solid #d4cdb8"},children:[h.jsx("span",{style:{fontSize:"11px",color:"#93a1a1"},children:t?"Click another card to switch selection · click same card to deselect":"Click any artifact card to explore its blast radius and dependencies"}),h.jsx("div",{className:"ml-auto flex gap-4",style:{fontSize:"11px",color:"#93a1a1"},children:[["#268bd2","selected"],["#cb4b16","impacted"],["#859900","upstream"]].map(([f,m])=>h.jsxs("span",{style:{display:"flex",alignItems:"center",gap:"4px"},children:[h.jsx("span",{style:{display:"inline-block",width:"8px",height:"8px",borderRadius:"50%",background:f}}),m]},m))})]}),h.jsxs("div",{className:"flex border-b border-sol-base2 sticky top-0 z-10 shadow-sm",style:{backgroundColor:"#e5dfc8"},children:[h.jsx("div",{className:"w-44 flex-shrink-0 px-4 py-2 border-r border-sol-base2",children:h.jsx("span",{className:"font-clay font-semibold text-xs uppercase tracking-widest text-sol-base1",children:"Dimension"})}),h.jsx("div",{className:"w-36 flex-shrink-0 px-3 py-2 border-r border-sol-base2",children:h.jsx("span",{className:"font-clay font-semibold text-xs uppercase tracking-widest text-sol-base1",children:p})}),h.jsx("div",{className:"flex-1 px-4 py-2",children:h.jsx("span",{className:"font-clay font-semibold text-xs uppercase tracking-widest text-sol-base1",children:"Artifacts"})})]}),a.map((f,m)=>h.jsx(pw,{dimension:f,profile:n,isLast:m===a.length-1,blastMap:c,anySelected:u,atRiskSet:d,onSelect:i},f.id)),h.jsx(hw,{profile:n,meta:r}),h.jsx(fw,{selectedId:t,allArtifacts:o,dependsOnMap:s,dependentsMap:l,onClose:()=>i(null)})]})}function rp(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,i=Array(n);t<n;t++)i[t]=e[t];return i}function mw(e){if(Array.isArray(e))return e}function gw(e,n,t){return(n=Sw(n))in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function yw(e,n){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var i,r,a,o,s=[],l=!0,c=!1;try{if(a=(t=t.call(e)).next,n!==0)for(;!(l=(i=a.call(t)).done)&&(s.push(i.value),s.length!==n);l=!0);}catch(d){c=!0,r=d}finally{try{if(!l&&t.return!=null&&(o=t.return(),Object(o)!==o))return}finally{if(c)throw r}}return s}}function vw(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ap(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,i)}return t}function op(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?ap(Object(t),!0).forEach(function(i){gw(e,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ap(Object(t)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))})}return e}function bw(e,n){if(e==null)return{};var t,i,r=ww(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)===-1&&{}.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}function ww(e,n){if(e==null)return{};var t={};for(var i in e)if({}.hasOwnProperty.call(e,i)){if(n.indexOf(i)!==-1)continue;t[i]=e[i]}return t}function xw(e,n){return mw(e)||yw(e,n)||Iw(e,n)||vw()}function kw(e,n){if(typeof e!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var i=t.call(e,n);if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function Sw(e){var n=kw(e,"string");return typeof n=="symbol"?n:n+""}function Iw(e,n){if(e){if(typeof e=="string")return rp(e,n);var t={}.toString.call(e).slice(8,-1);return t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set"?Array.from(e):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?rp(e,n):void 0}}function Aw(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function sp(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,i)}return t}function lp(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?sp(Object(t),!0).forEach(function(i){Aw(e,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):sp(Object(t)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))})}return e}function Cw(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return function(i){return n.reduceRight(function(r,a){return a(r)},i)}}function ar(e){return function n(){for(var t=this,i=arguments.length,r=new Array(i),a=0;a<i;a++)r[a]=arguments[a];return r.length>=e.length?e.apply(this,r):function(){for(var o=arguments.length,s=new Array(o),l=0;l<o;l++)s[l]=arguments[l];return n.apply(t,[].concat(r,s))}}}function go(e){return{}.toString.call(e).includes("Object")}function Pw(e){return!Object.keys(e).length}function Br(e){return typeof e=="function"}function _w(e,n){return Object.prototype.hasOwnProperty.call(e,n)}function Ew(e,n){return go(n)||wt("changeType"),Object.keys(n).some(function(t){return!_w(e,t)})&&wt("changeField"),n}function Tw(e){Br(e)||wt("selectorType")}function Rw(e){Br(e)||go(e)||wt("handlerType"),go(e)&&Object.values(e).some(function(n){return!Br(n)})&&wt("handlersType")}function Mw(e){e||wt("initialIsRequired"),go(e)||wt("initialType"),Pw(e)&&wt("initialContent")}function Dw(e,n){throw new Error(e[n]||e.default)}var Lw={initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"},wt=ar(Dw)(Lw),wa={changes:Ew,selector:Tw,handler:Rw,initial:Mw};function Nw(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};wa.initial(e),wa.handler(n);var t={current:e},i=ar(Fw)(t,n),r=ar(Ow)(t),a=ar(wa.changes)(e),o=ar(jw)(t);function s(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(d){return d};return wa.selector(c),c(t.current)}function l(c){Cw(i,r,a,o)(c)}return[s,l]}function jw(e,n){return Br(n)?n(e.current):n}function Ow(e,n){return e.current=lp(lp({},e.current),n),n}function Fw(e,n,t){return Br(n)?n(e.current):Object.keys(t).forEach(function(i){var r;return(r=n[i])===null||r===void 0?void 0:r.call(n,e.current[i])}),t}var zw={create:Nw},Bw={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.55.1/min/vs"}};function Ww(e){return function n(){for(var t=this,i=arguments.length,r=new Array(i),a=0;a<i;a++)r[a]=arguments[a];return r.length>=e.length?e.apply(this,r):function(){for(var o=arguments.length,s=new Array(o),l=0;l<o;l++)s[l]=arguments[l];return n.apply(t,[].concat(r,s))}}}function Vw(e){return{}.toString.call(e).includes("Object")}function Hw(e){return e||cp("configIsRequired"),Vw(e)||cp("configType"),e.urls?($w(),{paths:{vs:e.urls.monacoBase}}):e}function $w(){console.warn(jm.deprecation)}function Uw(e,n){throw new Error(e[n]||e.default)}var jm={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:`Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `},cp=Ww(Uw)(jm),qw={config:Hw},Yw=function(){for(var n=arguments.length,t=new Array(n),i=0;i<n;i++)t[i]=arguments[i];return function(r){return t.reduceRight(function(a,o){return o(a)},r)}};function Om(e,n){return Object.keys(n).forEach(function(t){n[t]instanceof Object&&e[t]&&Object.assign(n[t],Om(e[t],n[t]))}),op(op({},e),n)}var Gw={type:"cancelation",msg:"operation is manually canceled"};function Ss(e){var n=!1,t=new Promise(function(i,r){e.then(function(a){return n?r(Gw):i(a)}),e.catch(r)});return t.cancel=function(){return n=!0},t}var Kw=["monaco"],Qw=zw.create({config:Bw,isInitialized:!1,resolve:null,reject:null,monaco:null}),Fm=xw(Qw,2),Jr=Fm[0],Bo=Fm[1];function Xw(e){var n=qw.config(e),t=n.monaco,i=bw(n,Kw);Bo(function(r){return{config:Om(r.config,i),monaco:t}})}function Jw(){var e=Jr(function(n){var t=n.monaco,i=n.isInitialized,r=n.resolve;return{monaco:t,isInitialized:i,resolve:r}});if(!e.isInitialized){if(Bo({isInitialized:!0}),e.monaco)return e.resolve(e.monaco),Ss(Is);if(window.monaco&&window.monaco.editor)return zm(window.monaco),e.resolve(window.monaco),Ss(Is);Yw(Zw,nx)(tx)}return Ss(Is)}function Zw(e){return document.body.appendChild(e)}function ex(e){var n=document.createElement("script");return e&&(n.src=e),n}function nx(e){var n=Jr(function(i){var r=i.config,a=i.reject;return{config:r,reject:a}}),t=ex("".concat(n.config.paths.vs,"/loader.js"));return t.onload=function(){return e()},t.onerror=n.reject,t}function tx(){var e=Jr(function(t){var i=t.config,r=t.resolve,a=t.reject;return{config:i,resolve:r,reject:a}}),n=window.require;n.config(e.config),n(["vs/editor/editor.main"],function(t){var i=t.m||t;zm(i),e.resolve(i)},function(t){e.reject(t)})}function zm(e){Jr().monaco||Bo({monaco:e})}function ix(){return Jr(function(e){var n=e.monaco;return n})}var Is=new Promise(function(e,n){return Bo({resolve:e,reject:n})}),Bm={config:Xw,init:Jw,__getMonacoInstance:ix},rx={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}},As=rx,ax={container:{display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}},ox=ax;function sx({children:e}){return vi.createElement("div",{style:ox.container},e)}var lx=sx,cx=lx;function ux({width:e,height:n,isEditorReady:t,loading:i,_ref:r,className:a,wrapperProps:o}){return vi.createElement("section",{style:{...As.wrapper,width:e,height:n},...o},!t&&vi.createElement(cx,null,i),vi.createElement("div",{ref:r,style:{...As.fullWidth,...!t&&As.hide},className:a}))}var dx=ux,Wm=V.memo(dx);function px(e){V.useEffect(e,[])}var Vm=px;function fx(e,n,t=!0){let i=V.useRef(!0);V.useEffect(i.current||!t?()=>{i.current=!1}:e,n)}var sn=fx;function gr(){}function yi(e,n,t,i){return hx(e,i)||mx(e,n,t,i)}function hx(e,n){return e.editor.getModel(Hm(e,n))}function mx(e,n,t,i){return e.editor.createModel(n,t,i?Hm(e,i):void 0)}function Hm(e,n){return e.Uri.parse(n)}function gx({original:e,modified:n,language:t,originalLanguage:i,modifiedLanguage:r,originalModelPath:a,modifiedModelPath:o,keepCurrentOriginalModel:s=!1,keepCurrentModifiedModel:l=!1,theme:c="light",loading:d="Loading...",options:u={},height:p="100%",width:f="100%",className:m,wrapperProps:b={},beforeMount:A=gr,onMount:y=gr}){let[g,v]=V.useState(!1),[I,P]=V.useState(!0),S=V.useRef(null),_=V.useRef(null),R=V.useRef(null),F=V.useRef(y),k=V.useRef(A),T=V.useRef(!1);Vm(()=>{let N=Bm.init();return N.then(q=>(_.current=q)&&P(!1)).catch(q=>(q==null?void 0:q.type)!=="cancelation"&&console.error("Monaco initialization: error:",q)),()=>S.current?Q():N.cancel()}),sn(()=>{if(S.current&&_.current){let N=S.current.getOriginalEditor(),q=yi(_.current,e||"",i||t||"text",a||"");q!==N.getModel()&&N.setModel(q)}},[a],g),sn(()=>{if(S.current&&_.current){let N=S.current.getModifiedEditor(),q=yi(_.current,n||"",r||t||"text",o||"");q!==N.getModel()&&N.setModel(q)}},[o],g),sn(()=>{let N=S.current.getModifiedEditor();N.getOption(_.current.editor.EditorOption.readOnly)?N.setValue(n||""):n!==N.getValue()&&(N.executeEdits("",[{range:N.getModel().getFullModelRange(),text:n||"",forceMoveMarkers:!0}]),N.pushUndoStop())},[n],g),sn(()=>{var N,q;(q=(N=S.current)==null?void 0:N.getModel())==null||q.original.setValue(e||"")},[e],g),sn(()=>{let{original:N,modified:q}=S.current.getModel();_.current.editor.setModelLanguage(N,i||t||"text"),_.current.editor.setModelLanguage(q,r||t||"text")},[t,i,r],g),sn(()=>{var N;(N=_.current)==null||N.editor.setTheme(c)},[c],g),sn(()=>{var N;(N=S.current)==null||N.updateOptions(u)},[u],g);let z=V.useCallback(()=>{var ne;if(!_.current)return;k.current(_.current);let N=yi(_.current,e||"",i||t||"text",a||""),q=yi(_.current,n||"",r||t||"text",o||"");(ne=S.current)==null||ne.setModel({original:N,modified:q})},[t,n,r,e,i,a,o]),G=V.useCallback(()=>{var N;!T.current&&R.current&&(S.current=_.current.editor.createDiffEditor(R.current,{automaticLayout:!0,...u}),z(),(N=_.current)==null||N.editor.setTheme(c),v(!0),T.current=!0)},[u,c,z]);V.useEffect(()=>{g&&F.current(S.current,_.current)},[g]),V.useEffect(()=>{!I&&!g&&G()},[I,g,G]);function Q(){var q,ne,M,H;let N=(q=S.current)==null?void 0:q.getModel();s||((ne=N==null?void 0:N.original)==null||ne.dispose()),l||((M=N==null?void 0:N.modified)==null||M.dispose()),(H=S.current)==null||H.dispose()}return vi.createElement(Wm,{width:f,height:p,isEditorReady:g,loading:d,_ref:R,className:m,wrapperProps:b})}var yx=gx;V.memo(yx);function vx(e){let n=V.useRef();return V.useEffect(()=>{n.current=e},[e]),n.current}var bx=vx,xa=new Map;function wx({defaultValue:e,defaultLanguage:n,defaultPath:t,value:i,language:r,path:a,theme:o="light",line:s,loading:l="Loading...",options:c={},overrideServices:d={},saveViewState:u=!0,keepCurrentModel:p=!1,width:f="100%",height:m="100%",className:b,wrapperProps:A={},beforeMount:y=gr,onMount:g=gr,onChange:v,onValidate:I=gr}){let[P,S]=V.useState(!1),[_,R]=V.useState(!0),F=V.useRef(null),k=V.useRef(null),T=V.useRef(null),z=V.useRef(g),G=V.useRef(y),Q=V.useRef(),N=V.useRef(i),q=bx(a),ne=V.useRef(!1),M=V.useRef(!1);Vm(()=>{let B=Bm.init();return B.then($=>(F.current=$)&&R(!1)).catch($=>($==null?void 0:$.type)!=="cancelation"&&console.error("Monaco initialization: error:",$)),()=>k.current?w():B.cancel()}),sn(()=>{var $,x,oe,pe;let B=yi(F.current,e||i||"",n||r||"",a||t||"");B!==(($=k.current)==null?void 0:$.getModel())&&(u&&xa.set(q,(x=k.current)==null?void 0:x.saveViewState()),(oe=k.current)==null||oe.setModel(B),u&&((pe=k.current)==null||pe.restoreViewState(xa.get(a))))},[a],P),sn(()=>{var B;(B=k.current)==null||B.updateOptions(c)},[c],P),sn(()=>{!k.current||i===void 0||(k.current.getOption(F.current.editor.EditorOption.readOnly)?k.current.setValue(i):i!==k.current.getValue()&&(M.current=!0,k.current.executeEdits("",[{range:k.current.getModel().getFullModelRange(),text:i,forceMoveMarkers:!0}]),k.current.pushUndoStop(),M.current=!1))},[i],P),sn(()=>{var $,x;let B=($=k.current)==null?void 0:$.getModel();B&&r&&((x=F.current)==null||x.editor.setModelLanguage(B,r))},[r],P),sn(()=>{var B;s!==void 0&&((B=k.current)==null||B.revealLine(s))},[s],P),sn(()=>{var B;(B=F.current)==null||B.editor.setTheme(o)},[o],P);let H=V.useCallback(()=>{var B;if(!(!T.current||!F.current)&&!ne.current){G.current(F.current);let $=a||t,x=yi(F.current,i||e||"",n||r||"",$||"");k.current=(B=F.current)==null?void 0:B.editor.create(T.current,{model:x,automaticLayout:!0,...c},d),u&&k.current.restoreViewState(xa.get($)),F.current.editor.setTheme(o),s!==void 0&&k.current.revealLine(s),S(!0),ne.current=!0}},[e,n,t,i,r,a,c,d,u,o,s]);V.useEffect(()=>{P&&z.current(k.current,F.current)},[P]),V.useEffect(()=>{!_&&!P&&H()},[_,P,H]),N.current=i,V.useEffect(()=>{var B,$;P&&v&&((B=Q.current)==null||B.dispose(),Q.current=($=k.current)==null?void 0:$.onDidChangeModelContent(x=>{M.current||v(k.current.getValue(),x)}))},[P,v]),V.useEffect(()=>{if(P){let B=F.current.editor.onDidChangeMarkers($=>{var oe;let x=(oe=k.current.getModel())==null?void 0:oe.uri;if(x&&$.find(pe=>pe.path===x.path)){let pe=F.current.editor.getModelMarkers({resource:x});I==null||I(pe)}});return()=>{B==null||B.dispose()}}return()=>{}},[P,I]);function w(){var B,$;(B=Q.current)==null||B.dispose(),p?u&&xa.set(a,k.current.saveViewState()):($=k.current.getModel())==null||$.dispose(),k.current.dispose()}return vi.createElement(Wm,{width:f,height:m,isEditorReady:P,loading:l,_ref:T,className:b,wrapperProps:A})}var xx=wx,kx=V.memo(xx);/*! js-yaml 5.1.0 https://github.com/nodeca/js-yaml @license MIT */var ie=Symbol("NOT_RESOLVED"),pu=Symbol("MERGE_KEY");function ze(e,n){return{tagName:e,nodeKind:"scalar",implicit:n.implicit??!1,matchByTagPrefix:n.matchByTagPrefix??!1,implicitFirstChars:n.implicitFirstChars??null,resolve:n.resolve,identify:n.identify??null,represent:n.represent??(t=>String(t)),representTagName:n.representTagName??null}}function fu(e,n){const t=n.finalize===void 0;return{tagName:e,nodeKind:"sequence",implicit:!1,matchByTagPrefix:n.matchByTagPrefix??!1,create:n.create,addItem:n.addItem,finalize:n.finalize??(i=>i),carrierIsResult:t,identify:n.identify??null,represent:n.represent??(i=>i),representTagName:n.representTagName??null}}function Wo(e,n){const t=n.finalize===void 0;return{tagName:e,nodeKind:"mapping",implicit:!1,matchByTagPrefix:n.matchByTagPrefix??!1,create:n.create,addPair:n.addPair,has:n.has,keys:n.keys,get:n.get,finalize:n.finalize??(i=>i),carrierIsResult:t,identify:n.identify??null,represent:n.represent??(i=>i),representTagName:n.representTagName??null}}var Sx=ze("tag:yaml.org,2002:str",{resolve:e=>e,identify:e=>typeof e=="string"}),Ix=["","~","null","Null","NULL"],Ax=ze("tag:yaml.org,2002:null",{implicit:!0,implicitFirstChars:["","~","n","N"],resolve:e=>Ix.indexOf(e)!==-1?null:ie,identify:e=>e===null,represent:()=>"null"}),Cx=ze("tag:yaml.org,2002:null",{implicit:!0,implicitFirstChars:["n"],resolve:(e,n)=>e==="null"||n&&e===""?null:ie,identify:e=>e===null,represent:()=>"null"}),Px=["","~","null","Null","NULL"],_x=ze("tag:yaml.org,2002:null",{implicit:!0,implicitFirstChars:["","~","n","N"],resolve:e=>Px.indexOf(e)!==-1?null:ie,identify:e=>e===null,represent:()=>"null"}),Ex=["true","True","TRUE"],Tx=["false","False","FALSE"],Rx=ze("tag:yaml.org,2002:bool",{implicit:!0,implicitFirstChars:["t","T","f","F"],resolve:e=>Ex.indexOf(e)!==-1?!0:Tx.indexOf(e)!==-1?!1:ie,identify:e=>Object.prototype.toString.call(e)==="[object Boolean]",represent:e=>e?"true":"false"}),Mx=["true"],Dx=["false"],Lx=ze("tag:yaml.org,2002:bool",{implicit:!0,implicitFirstChars:["t","f"],resolve:e=>Mx.indexOf(e)!==-1?!0:Dx.indexOf(e)!==-1?!1:ie,identify:e=>Object.prototype.toString.call(e)==="[object Boolean]",represent:e=>e?"true":"false"}),Nx=["true","True","TRUE","y","Y","yes","Yes","YES","on","On","ON"],jx=["false","False","FALSE","n","N","no","No","NO","off","Off","OFF"],Ox=ze("tag:yaml.org,2002:bool",{implicit:!0,implicitFirstChars:["y","Y","n","N","t","T","f","F","o","O"],resolve:e=>Nx.indexOf(e)!==-1?!0:jx.indexOf(e)!==-1?!1:ie,identify:e=>Object.prototype.toString.call(e)==="[object Boolean]",represent:e=>e?"true":"false"}),Fx=new RegExp("^(?:0o[0-7]+|0x[0-9a-fA-F]+|[-+]?[0-9]+)$"),zx=new RegExp("^(?:[-+]?0b[0-1]+|[-+]?0o[0-7]+|[-+]?0x[0-9a-fA-F]+|[-+]?[0-9]+)$");function Bx(e){let n=e,t=1;return(n[0]==="-"||n[0]==="+")&&(n[0]==="-"&&(t=-1),n=n.slice(1)),n.startsWith("0b")?t*parseInt(n.slice(2),2):n.startsWith("0o")?t*parseInt(n.slice(2),8):n.startsWith("0x")?t*parseInt(n.slice(2),16):t*parseInt(n,10)}function Wx(e,n){if(n){if(!zx.test(e))return ie}else if(!Fx.test(e))return ie;const t=Bx(e);return Number.isFinite(t)?t:ie}var $m=ze("tag:yaml.org,2002:int",{implicit:!0,implicitFirstChars:["-","+",..."0123456789"],resolve:Wx,identify:e=>Object.prototype.toString.call(e)==="[object Number]"&&e%1===0&&!Object.is(e,-0),represent:e=>e.toString(10)}),Vx=new RegExp("^-?(?:0|[1-9][0-9]*)$"),Hx=new RegExp("^(?:[-+]?0b[0-1]+|[-+]?0o[0-7]+|[-+]?0x[0-9a-fA-F]+|[-+]?[0-9]+)$");function $x(e){let n=e,t=1;return(n[0]==="-"||n[0]==="+")&&(n[0]==="-"&&(t=-1),n=n.slice(1)),n.startsWith("0b")?t*parseInt(n.slice(2),2):n.startsWith("0o")?t*parseInt(n.slice(2),8):n.startsWith("0x")?t*parseInt(n.slice(2),16):t*parseInt(n,10)}function Ux(e,n){if(n){if(!Hx.test(e))return ie}else if(!Vx.test(e))return ie;const t=$x(e);return Number.isFinite(t)?t:ie}var qx=ze("tag:yaml.org,2002:int",{implicit:!0,implicitFirstChars:["-",..."0123456789"],resolve:Ux,identify:e=>Object.prototype.toString.call(e)==="[object Number]"&&e%1===0&&!Object.is(e,-0),represent:e=>e.toString(10)}),Yx=new RegExp("^(?:[-+]?0b[0-1_]+|[-+]?0[0-7_]+|[-+]?0x[0-9a-fA-F_]+|[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+|[-+]?(?:0|[1-9][0-9_]*))$");function Gx(e){let n=e.replace(/_/g,""),t=1;if((n[0]==="-"||n[0]==="+")&&(n[0]==="-"&&(t=-1),n=n.slice(1)),n.startsWith("0b"))return t*parseInt(n.slice(2),2);if(n.startsWith("0x"))return t*parseInt(n.slice(2),16);if(n.includes(":")){let i=0;for(const r of n.split(":"))i=i*60+Number(r);return t*i}return n!=="0"&&n[0]==="0"?t*parseInt(n,8):t*parseInt(n,10)}function Kx(e){if(!Yx.test(e))return ie;const n=Gx(e);return Number.isFinite(n)?n:ie}var Gl=ze("tag:yaml.org,2002:int",{implicit:!0,implicitFirstChars:["-","+",..."0123456789"],resolve:Kx,identify:e=>Object.prototype.toString.call(e)==="[object Number]"&&e%1===0&&!Object.is(e,-0),represent:e=>e.toString(10)}),Qx=new RegExp("^(?:[-+]?[0-9]+(?:\\.[0-9]*)?(?:[eE][-+]?[0-9]+)?|[-+]?\\.[0-9]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"),Xx=new RegExp("^(?:[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function Jx(e){if(!Qx.test(e))return ie;let n=e.toLowerCase();const t=n[0]==="-"?-1:1;if("+-".includes(n[0])&&(n=n.slice(1)),n===".inf")return t===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY;if(n===".nan")return NaN;const i=t*parseFloat(n);return Number.isFinite(i)||Xx.test(e)?i:ie}function Zx(e){if(isNaN(e))return".nan";if(e===Number.POSITIVE_INFINITY)return".inf";if(e===Number.NEGATIVE_INFINITY)return"-.inf";if(Object.is(e,-0))return"-0.0";const n=e.toString(10);return/^[-+]?[0-9]+e/.test(n)?n.replace("e",".e"):n}var Um=ze("tag:yaml.org,2002:float",{implicit:!0,implicitFirstChars:["-","+",".",..."0123456789"],resolve:Jx,identify:e=>Object.prototype.toString.call(e)==="[object Number]"&&(e%1!==0||Object.is(e,-0)),represent:Zx}),e0=new RegExp("^-?(?:0|[1-9][0-9]*)(?:\\.[0-9]*)?(?:[eE][-+]?[0-9]+)?$"),n0=new RegExp("^(?:[-+]?[0-9]+(?:\\.[0-9]*)?(?:[eE][-+]?[0-9]+)?|[-+]?\\.[0-9]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function t0(e,n){if(n){if(!n0.test(e))return ie;let i=e.toLowerCase();const r=i[0]==="-"?-1:1;if("+-".includes(i[0])&&(i=i.slice(1)),i===".inf")return r===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY;if(i===".nan")return NaN;const a=r*parseFloat(i);return Number.isFinite(a)?a:ie}if(!e0.test(e))return ie;const t=Number(e);return Number.isFinite(t)?t:ie}function i0(e){if(isNaN(e))return".nan";if(e===Number.POSITIVE_INFINITY)return".inf";if(e===Number.NEGATIVE_INFINITY)return"-.inf";if(Object.is(e,-0))return"-0.0";const n=e.toString(10);return/^[-+]?[0-9]+e/.test(n)?n.replace("e",".e"):n}var r0=ze("tag:yaml.org,2002:float",{implicit:!0,implicitFirstChars:["-",..."0123456789"],resolve:t0,identify:e=>Object.prototype.toString.call(e)==="[object Number]"&&(e%1!==0||Object.is(e,-0)),represent:i0}),a0=new RegExp("^(?:[-+]?(?:(?:[0-9][0-9_]*)?\\.[0-9_]*)(?:[eE][-+][0-9]+)?|[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\\.[0-9_]*|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"),o0=new RegExp("^(?:[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function s0(e){if(!a0.test(e))return ie;let n=e.toLowerCase().replace(/_/g,"");const t=n[0]==="-"?-1:1;if("+-".includes(n[0])&&(n=n.slice(1)),n===".inf")return t===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY;if(n===".nan")return NaN;let i=0;if(n.includes(":")){for(const r of n.split(":"))i=i*60+Number(r);i*=t}else i=t*parseFloat(n);return Number.isFinite(i)||o0.test(e)?i:ie}function l0(e){if(isNaN(e))return".nan";if(e===Number.POSITIVE_INFINITY)return".inf";if(e===Number.NEGATIVE_INFINITY)return"-.inf";if(Object.is(e,-0))return"-0.0";const n=e.toString(10);return/^[-+]?[0-9]+e/.test(n)?n.replace("e",".e"):n}var Kl=ze("tag:yaml.org,2002:float",{implicit:!0,implicitFirstChars:["-","+",".",..."0123456789"],resolve:s0,identify:e=>Object.prototype.toString.call(e)==="[object Number]"&&(e%1!==0||Object.is(e,-0)),represent:l0}),c0=ze("tag:yaml.org,2002:merge",{implicit:!0,implicitFirstChars:["<"],resolve:(e,n)=>e==="<<"||n&&e===""?pu:ie}),u0=/^[A-Za-z0-9+/]*={0,2}$/;function d0(e){const n=e.replace(/\s/g,"");if(n.length%4!==0||!u0.test(n))return ie;const t=atob(n),i=new Uint8Array(t.length);for(let r=0;r<t.length;r++)i[r]=t.charCodeAt(r);return i}function p0(e){let n="";for(let t=0;t<e.length;t++)n+=String.fromCharCode(e[t]);return btoa(n)}var f0=ze("tag:yaml.org,2002:binary",{resolve:d0,identify:e=>Object.prototype.toString.call(e)==="[object Uint8Array]",represent:p0}),h0=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),m0=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function g0(e){let n=h0.exec(e);if(n===null&&(n=m0.exec(e)),n===null)return ie;const t=+n[1],i=+n[2]-1,r=+n[3];if(!n[4]){const d=new Date(Date.UTC(t,i,r));return d.getUTCFullYear()!==t||d.getUTCMonth()!==i||d.getUTCDate()!==r?ie:d}const a=+n[4],o=+n[5],s=+n[6];let l=0;if(a>23||o>59||s>59)return ie;if(n[7]){let d=n[7].slice(0,3);for(;d.length<3;)d+="0";l=+d}const c=new Date(Date.UTC(t,i,r,a,o,s,l));if(c.getUTCFullYear()!==t||c.getUTCMonth()!==i||c.getUTCDate()!==r)return ie;if(n[9]){const d=+n[10],u=+(n[11]||0);if(d>23||u>59)return ie;const p=(d*60+u)*6e4;c.setTime(c.getTime()-(n[9]==="-"?-p:p))}return c}var y0=ze("tag:yaml.org,2002:timestamp",{implicit:!0,implicitFirstChars:[..."0123456789"],resolve:g0,identify:e=>e instanceof Date,represent:e=>e.toISOString()}),v0=fu("tag:yaml.org,2002:seq",{create:()=>[],addItem:(e,n)=>{e.push(n)},identify:Array.isArray}),b0=fu("tag:yaml.org,2002:omap",{create:()=>[],addItem:(e,n)=>{if(Object.prototype.toString.call(n)!=="[object Object]")return"cannot resolve an ordered map item";const t=n,i=Object.keys(t);if(i.length!==1)return"cannot resolve an ordered map item";for(const r of e)if(Object.prototype.hasOwnProperty.call(r,i[0]))return"cannot resolve an ordered map item";return e.push(t),""}}),w0=fu("tag:yaml.org,2002:pairs",{create:()=>[],addItem:(e,n)=>{if(n instanceof Map)return n.size!==1?"cannot resolve a pairs item":(e.push(n.entries().next().value),"");if(Object.prototype.toString.call(n)!=="[object Object]")return"cannot resolve a pairs item";const t=n,i=Object.keys(t);return i.length!==1?"cannot resolve a pairs item":(e.push([i[0],t[i[0]]]),"")}});function hu(e){if(e===null||typeof e!="object"||Array.isArray(e))return!1;const n=Object.getPrototypeOf(e);return n===null||n===Object.prototype}function Ql(e,n){const t={};for(const i of n)e[i]!==void 0&&(t[i]=e[i]);return t}var x0=Wo("tag:yaml.org,2002:map",{create:()=>({}),identify:hu,represent:e=>{const n=new Map;for(const t of Object.keys(e))n.set(t,e[t]);return n},addPair:(e,n,t)=>{if(n!==null&&typeof n=="object")return"object-based map does not support complex keys";const i=String(n);return i==="__proto__"?Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[i]=t,""},has:(e,n)=>n!==null&&typeof n=="object"?!1:Object.prototype.hasOwnProperty.call(e,String(n)),keys:e=>Object.keys(e),get:(e,n)=>e[String(n)]}),k0=Wo("tag:yaml.org,2002:set",{create:()=>new Set,identify:e=>e instanceof Set,represent:e=>{const n=new Map;for(const t of e)n.set(t,null);return n},addPair:(e,n,t)=>t!==null?"cannot resolve a set item":(e.add(n),""),has:(e,n)=>e.has(n),keys:e=>e.keys(),get:()=>null});function S0(){return{scalar:{},sequence:{},mapping:{}}}function I0(){return{scalar:[],sequence:[],mapping:[]}}function A0(e){const n=[];for(const t of e){let i=n.length;for(let r=0;r<n.length;r++){const a=n[r];if(a.nodeKind===t.nodeKind&&a.tagName===t.tagName&&a.matchByTagPrefix===t.matchByTagPrefix){i=r;break}}n[i]=t}return n}var Vo=class qm{constructor(n){Ce(this,"tags");Ce(this,"implicitScalarTags");Ce(this,"implicitScalarByFirstChar");Ce(this,"implicitScalarAnyFirstChar");Ce(this,"defaultScalarTag");Ce(this,"defaultSequenceTag");Ce(this,"defaultMappingTag");Ce(this,"exact");Ce(this,"prefix");const t=A0(n),i=[],r=S0(),a=I0();for(const d of t){if(d.nodeKind==="scalar"&&d.implicit){if(d.matchByTagPrefix)throw new Error("Implicit scalar tags cannot match by tag prefix");i.push(d)}switch(d.nodeKind){case"scalar":d.matchByTagPrefix?a.scalar.push(d):r.scalar[d.tagName]=d;break;case"sequence":d.matchByTagPrefix?a.sequence.push(d):r.sequence[d.tagName]=d;break;case"mapping":d.matchByTagPrefix?a.mapping.push(d):r.mapping[d.tagName]=d;break}}const o=i.filter(d=>d.implicitFirstChars===null),s=new Set;for(const d of i)if(d.implicitFirstChars!==null)for(const u of d.implicitFirstChars)s.add(u);const l=new Map;for(const d of s)l.set(d,i.filter(u=>u.implicitFirstChars===null||u.implicitFirstChars.indexOf(d)!==-1));const c=r.scalar["tag:yaml.org,2002:str"];if(!c)throw new Error("schema does not define the default scalar tag (tag:yaml.org,2002:str)");this.tags=t,this.implicitScalarTags=i,this.implicitScalarByFirstChar=l,this.implicitScalarAnyFirstChar=o,this.defaultScalarTag=c,this.defaultSequenceTag=r.sequence["tag:yaml.org,2002:seq"],this.defaultMappingTag=r.mapping["tag:yaml.org,2002:map"],this.exact=r,this.prefix=a}withTags(...n){let t=[];for(const i of n)t=t.concat(i);return new qm([...this.tags,...t])}},mu=new Vo([Sx,v0,x0]);new Vo([...mu.tags,Cx,Lx,qx,r0]);var C0=new Vo([...mu.tags,Ax,Rx,$m,Um]),P0=new Vo([...mu.tags,_x,Ox,Gl,Kl,y0,c0,f0,b0,w0,k0]);Wo("tag:yaml.org,2002:map",{create:()=>new Map,addPair:(e,n,t)=>(e.set(n,t),""),has:(e,n)=>e.has(n),keys:e=>e.keys(),get:(e,n)=>e.get(n),identify:e=>e instanceof Map||hu(e),represent:e=>{if(e instanceof Map)return e;const n=new Map,t=e;for(const i of Object.keys(t))n.set(i,t[i]);return n}});function up(e){if(Array.isArray(e)){const n=Array.prototype.slice.call(e);for(let t=0;t<n.length;t++){if(Array.isArray(n[t]))return null;typeof n[t]=="object"&&Object.prototype.toString.call(n[t])==="[object Object]"&&(n[t]="[object Object]")}return String(n)}return typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"?"[object Object]":String(e)}Wo("tag:yaml.org,2002:map",{create:()=>({}),identify:hu,represent:e=>{const n=new Map;for(const t of Object.keys(e))n.set(t,e[t]);return n},addPair:(e,n,t)=>{const i=up(n);return i===null?"nested arrays are not supported inside keys":(i==="__proto__"?Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[i]=t,"")},has:(e,n)=>{const t=up(n);return t!==null&&Object.prototype.hasOwnProperty.call(e,t)},keys:e=>Object.keys(e),get:(e,n)=>e[String(n)]});var _0={maxLength:79,indent:1,linesBefore:3,linesAfter:2};function Cs(e,n,t,i,r){let a="",o="";const s=Math.floor(r/2)-1;return i-n>s&&(a=" ... ",n=i-s+a.length),t-i>s&&(o=" ...",t=i+s-o.length),{str:a+e.slice(n,t).replace(/\t/g,"→")+o,pos:i-n+a.length}}function Ps(e,n){return" ".repeat(Math.max(n-e.length,0))+e}function E0(e,n){if(!e.buffer)return null;const t={..._0,...n},i=/\r?\n|\r|\0/g,r=[0],a=[];let o,s=-1;for(;o=i.exec(e.buffer);)a.push(o.index),r.push(o.index+o[0].length),e.position<=o.index&&s<0&&(s=r.length-2);s<0&&(s=r.length-1);let l="";const c=Math.min(e.line+t.linesAfter,a.length).toString().length,d=t.maxLength-(t.indent+c+3);for(let p=1;p<=t.linesBefore&&!(s-p<0);p++){const f=Cs(e.buffer,r[s-p],a[s-p],e.position-(r[s]-r[s-p]),d);l=`${" ".repeat(t.indent)}${Ps((e.line-p+1).toString(),c)} | ${f.str}
${l}`}const u=Cs(e.buffer,r[s],a[s],e.position,d);l+=`${" ".repeat(t.indent)}${Ps((e.line+1).toString(),c)} | ${u.str}
`,l+=`${"-".repeat(t.indent+c+3+u.pos)}^
`;for(let p=1;p<=t.linesAfter&&!(s+p>=a.length);p++){const f=Cs(e.buffer,r[s+p],a[s+p],e.position-(r[s]-r[s+p]),d);l+=`${" ".repeat(t.indent)}${Ps((e.line+p+1).toString(),c)} | ${f.str}
`}return l.replace(/\n$/,"")}function dp(e,n){let t="";return e.mark?(e.mark.name&&(t+=`in "${e.mark.name}" `),t+=`(${e.mark.line+1}:${e.mark.column+1})`,!n&&e.mark.snippet&&(t+=`

${e.mark.snippet}`),`${e.reason} ${t}`):e.reason}var Wr=class extends Error{constructor(n,t){super();Ce(this,"reason");Ce(this,"mark");this.name="YAMLException",this.reason=n,this.mark=t,this.message=dp(this,!1),Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor)}toString(n){return`${this.name}: ${dp(this,n)}`}};function Ho(e,n,t,i=""){let r=0,a=0;for(let s=0;s<n;s++){const l=e.charCodeAt(s);l===10?(r++,a=s+1):l===13&&(r++,e.charCodeAt(s+1)===10&&s++,a=s+1)}const o={name:i,buffer:e,position:n,line:r,column:n-a};throw o.snippet=E0(o),new Wr(t,o)}var T0=-1;function pp(e){switch(e){case 48:return"\0";case 97:return"\x07";case 98:return"\b";case 116:return"	";case 9:return"	";case 110:return`
`;case 118:return"\v";case 102:return"\f";case 114:return"\r";case 101:return"\x1B";case 32:return" ";case 34:return'"';case 47:return"/";case 92:return"\\";case 78:return"";case 95:return" ";case 76:return"\u2028";case 80:return"\u2029";default:return""}}var Ym=new Array(256),Gm=new Array(256);for(let e=0;e<256;e++)Ym[e]=pp(e)?1:0,Gm[e]=pp(e);function R0(e){return e<=65535?String.fromCharCode(e):String.fromCharCode((e-65536>>10)+55296,(e-65536&1023)+56320)}function M0(e){return e>=48&&e<=57?e-48:(e|32)-97+10}function D0(e){return e===120?2:e===117?4:8}function yo(e,n,t){let i=0;for(;n<t;){const r=e.charCodeAt(n);if(r===10)i++,n++;else if(r===13)i++,n++,e.charCodeAt(n)===10&&n++;else if(r===32||r===9)n++;else break}return{position:n,breaks:i}}function gu(e){return e===1?" ":`
`.repeat(e-1)}function L0(e,n,t){let i="",r=n,a=n,o=n;for(;r<t;){const s=e.charCodeAt(r);if(s===10||s===13){i+=e.slice(a,o);const l=yo(e,r,t);i+=gu(l.breaks),r=a=o=l.position}else r++,s!==32&&s!==9&&(o=r)}return i+e.slice(a,o)}function N0(e,n,t){let i="",r=n,a=n,o=n;for(;r<t;){const s=e.charCodeAt(r);if(s===39)i+=e.slice(a,r)+"'",r+=2,a=o=r;else if(s===10||s===13){i+=e.slice(a,o);const l=yo(e,r,t);i+=gu(l.breaks),r=a=o=l.position}else r++,s!==32&&s!==9&&(o=r)}return i+e.slice(a,t)}function j0(e,n,t){let i="",r=n,a=n,o=n;for(;r<t;){const s=e.charCodeAt(r);if(s===92){i+=e.slice(a,r),r++;const l=e.charCodeAt(r);if(l===10||l===13)r=yo(e,r,t).position;else if(l<256&&Ym[l])i+=Gm[l],r++;else{let c=D0(l),d=0;for(;c>0;c--){r++;const u=M0(e.charCodeAt(r));d=(d<<4)+u}i+=R0(d),r++}a=o=r}else if(s===10||s===13){i+=e.slice(a,o);const l=yo(e,r,t);i+=gu(l.breaks),r=a=o=l.position}else r++,s!==32&&s!==9&&(o=r)}return i+e.slice(a,t)}function fp(e,n,t,i,r,a){const o=i<0?0:i,s=e.slice(n,t).replace(/\r\n?/g,`
`),l=s===""?[]:(s.endsWith(`
`)?s.slice(0,-1):s).split(`
`);let c="",d=!1,u=0,p=!1;for(const f of l){let m=0;for(;m<o&&f.charCodeAt(m)===32;)m++;if(i<0||m>=f.length){u++;continue}const b=f.slice(o),A=b.charCodeAt(0);a?A===32||A===9?(p=!0,c+=`
`.repeat(d?1+u:u)):p?(p=!1,c+=`
`.repeat(u+1)):u===0?d&&(c+=" "):c+=`
`.repeat(u):c+=`
`.repeat(d?1+u:u),c+=b,d=!0,u=0}return r===3?c+=`
`.repeat(d?1+u:u):r!==2&&d&&(c+=`
`),c}function O0(e,n){if(n.valueStart===T0)return"";const{valueStart:t,valueEnd:i}=n;if(n.fast)return e.slice(t,i);switch(n.style){case 2:return N0(e,t,i);case 3:return j0(e,t,i);case 4:return fp(e,t,i,n.indent,n.chomping,!1);case 5:return fp(e,t,i,n.indent,n.chomping,!0);default:return L0(e,t,i)}}var F0={"!":"!","!!":"tag:yaml.org,2002:"};function _s(e){return encodeURI(e).replace(/!/g,"%21")}function Km(e,n){if(e.startsWith("!<")&&e.endsWith(">"))return decodeURIComponent(e.slice(2,-1));const t=e.indexOf("!",1),i=t===-1?"!":e.slice(0,t+1),r=(n==null?void 0:n[i])??F0[i]??i;return decodeURIComponent(r)+decodeURIComponent(e.slice(i.length))}function Qm(e){let n=e;return n.charCodeAt(0)===33?(n=n.slice(1),`!${_s(n)}`):n.slice(0,18)==="tag:yaml.org,2002:"?`!!${_s(n.slice(18))}`:`!<${_s(n)}>`}var Ai=-1,yu={filename:"",schema:C0,json:!1,maxMergeSeqLength:20};function z0(e){return"tagStart"in e&&e.tagStart!==Ai?e.tagStart:"anchorStart"in e&&e.anchorStart!==Ai?e.anchorStart:"valueStart"in e&&e.valueStart!==Ai?e.valueStart:"start"in e?e.start:0}function un(e,n){Ho(e.source,e.position,n,e.filename)}function Xm(e,n,t,i){try{return t.finalize(i)}catch(r){if(r instanceof Wr)throw r;Ho(e.source,n,r instanceof Error?r.message:String(r),e.filename)}}function Ba(e,n,t){const i=e[t];if(i)return i;for(const r of n)if(t.startsWith(r.tagName))return r}function B0(e,n,t,i,r){const a=Ba(n,t,i);if(a)return a;un(e,`unknown ${r} tag !<${i}>`)}function W0(e,n){const t=O0(e.source,n),i=n.tagStart===Ai?"":e.source.slice(n.tagStart,n.tagEnd),r=e.schema.defaultScalarTag;if(i!==""){if(i==="!")return{value:t,tag:r};const a=Km(i,e.tagHandlers),o=Ba(e.schema.exact.scalar,e.schema.prefix.scalar,a);if(o){const l=o.resolve(t,!0,a);return l===ie&&un(e,`cannot resolve a node with !<${a}> explicit tag`),{value:l,tag:o}}const s=Ba(e.schema.exact.mapping,e.schema.prefix.mapping,a)??Ba(e.schema.exact.sequence,e.schema.prefix.sequence,a);if(s){t!==""&&un(e,`cannot resolve a node with !<${a}> explicit tag`);const l=s.create(a);return{value:s.carrierIsResult?l:Xm(e,e.position,s,l),tag:s}}un(e,`unknown scalar tag !<${a}>`)}if(n.style===1){const a=e.schema.implicitScalarByFirstChar.get(t.charAt(0))??e.schema.implicitScalarAnyFirstChar;for(const o of a){const s=o.resolve(t,!1,o.tagName);if(s!==ie)return{value:s,tag:o}}}return{value:r.resolve(t,!1,r.tagName),tag:r}}function hp(e,n,t,i,r,a){const o=n.tagStart===Ai?"":e.source.slice(n.tagStart,n.tagEnd),s=o===""||o==="!"?r:Km(o,e.tagHandlers);return{tagName:s,tag:B0(e,t,i,s,a)}}function Jm(e){return e.nodeKind==="mapping"}function mp(e,n,t,i){for(const r of i.keys(t)){if(n.tag.has(n.value,r))continue;const a=n.tag.addPair(n.value,r,i.get(t,r));a&&un(e,a),(n.overridable??(n.overridable=new Set)).add(r)}}function V0(e,n,t,i){if(e.position=n.keyPosition,Jm(i))mp(e,n,t,i);else if(i.nodeKind==="sequence"&&Array.isArray(t)){const r=new Set;for(const a of t)r.has(a)||(r.add(a),mp(e,n,a,n.tag))}else un(e,"cannot merge mappings; the provided source object is unacceptable")}function H0(e,n,t,i,r){var o,s;if(e.position=n.keyPosition,t===pu){V0(e,n,i,r);return}!e.json&&n.tag.has(n.value,t)&&!((o=n.overridable)!=null&&o.has(t))&&un(e,"duplicated mapping key");const a=n.tag.addPair(n.value,t,i);a&&un(e,a),(s=n.overridable)==null||s.delete(t)}function Es(e,n,t){const i=e.frames[e.frames.length-1];if(i.kind==="document")i.value=n,i.hasValue=!0;else if(i.kind==="sequence"){i.merge&&(Jm(t)||un(e,"cannot merge mappings; the provided source object is unacceptable"),i.index>=e.maxMergeSeqLength&&un(e,`merge sequence length exceeded maxMergeSeqLength (${e.maxMergeSeqLength})`));const r=i.tag.addItem(i.value,n,i.index++);r&&un(e,r)}else if(i.hasKey){const r=i.key;i.key=void 0,i.hasKey=!1,H0(e,i,r,n,t)}else i.key=n,i.keyPosition=e.position,i.hasKey=!0}function Ts(e,n,t,i,r){if(n.anchorStart!==Ai){const a={value:t,tag:i,isValueFinal:r};return e.anchors.set(e.source.slice(n.anchorStart,n.anchorEnd),a),a}return null}function $0(e,n){const t={...yu,...n,events:e,documents:[],eventIndex:0,position:0,frames:[],anchors:new Map,tagHandlers:Object.create(null)};for(;t.eventIndex<t.events.length;){const i=t.events[t.eventIndex++];switch(t.position=z0(i),i.type){case 1:t.anchors=new Map,t.tagHandlers=Object.create(null);for(const r of i.directives)r.kind==="tag"&&(t.tagHandlers[r.handle]=r.prefix);t.frames.push({kind:"document",position:t.position,value:void 0,hasValue:!1});break;case 4:{const{value:r,tag:a}=W0(t,i);Ts(t,i,r,a,!0),Es(t,r,a);break}case 2:{const r=hp(t,i,t.schema.exact.sequence,t.schema.prefix.sequence,"tag:yaml.org,2002:seq","sequence"),a=r.tag.create(r.tagName),o=Ts(t,i,a,r.tag,r.tag.carrierIsResult),s=t.frames[t.frames.length-1],l=s!==void 0&&s.kind==="mapping"&&s.hasKey&&s.key===pu;t.frames.push({kind:"sequence",position:t.position,value:a,tag:r.tag,anchor:o,index:0,merge:l});break}case 3:{const r=hp(t,i,t.schema.exact.mapping,t.schema.prefix.mapping,"tag:yaml.org,2002:map","mapping"),a=r.tag.create(r.tagName),o=Ts(t,i,a,r.tag,r.tag.carrierIsResult);t.frames.push({kind:"mapping",position:t.position,value:a,tag:r.tag,anchor:o,key:void 0,keyPosition:t.position,hasKey:!1,overridable:null});break}case 5:{const r=t.source.slice(i.anchorStart,i.anchorEnd),a=t.anchors.get(r);a||un(t,`unidentified alias "${r}"`),a.isValueFinal||un(t,`recursive alias "${r}" is not supported for tag ${a.tag.tagName} because it uses finalize()`),Es(t,a.value,a.tag);break}case 6:{const r=t.frames.pop();if(r.kind==="document")t.documents.push(r.value);else{const a=r.tag.carrierIsResult?r.value:Xm(t,r.position,r.tag,r.value);r.anchor&&(r.anchor.value=a,r.anchor.isValueFinal=!0),Es(t,a,r.tag)}break}}}return t.documents}var ee=-1,Zm=Object.prototype.hasOwnProperty,ut=1,Xl=2,eg=3,vo=4,U0=/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,q0=/[,\[\]{}]/,ng=/^(?:!|!!|![0-9A-Za-z-]+!)$/,Jl=String.raw`(?:%[0-9A-Fa-f]{2}|[0-9A-Za-z\-#;/?:@&=+$,_.!~*'()\[\]])`,tg=String.raw`(?:%[0-9A-Fa-f]{2}|[0-9A-Za-z\-#;/?:@&=+$.~*'()_])`,Y0=new RegExp(`^(?:${Jl})*$`),G0=new RegExp(`^(?:${tg})+$`),K0=new RegExp(`^(?:!(?:${Jl})*|${tg}(?:${Jl})*)$`),vu={filename:"",maxDepth:100};function Q0(e,n,t){e.events.push({type:1,explicitStart:n,explicitEnd:t,directives:e.directives})}function ig(e,n,t,i,r,a,o){e.events.push({type:2,start:n,anchorStart:t,anchorEnd:i,tagStart:r,tagEnd:a,style:o})}function yr(e,n,t,i,r,a,o){e.events.push({type:3,start:n,anchorStart:t,anchorEnd:i,tagStart:r,tagEnd:a,style:o})}function Bi(e,n,t,i,r,a,o,s,l=1,c=-1,d=!1){e.events.push({type:4,valueStart:n,valueEnd:t,anchorStart:i,anchorEnd:r,tagStart:a,tagEnd:o,style:s,chomping:l,indent:c,fast:d})}function X0(e,n,t){e.events.push({type:5,anchorStart:n,anchorEnd:t})}function Ci(e){e.events.push({type:6})}function Qe(e){Bi(e,ee,ee,ee,ee,ee,ee,1)}function gp(){return{anchorStart:ee,anchorEnd:ee,tagStart:ee,tagEnd:ee}}function vr(e){return{position:e.position,line:e.line,lineStart:e.lineStart,lineIndent:e.lineIndent,firstTabInLine:e.firstTabInLine,eventsLength:e.events.length}}function xt(e,n){e.position=n.position,e.line=n.line,e.lineStart=n.lineStart,e.lineIndent=n.lineIndent,e.firstTabInLine=n.firstTabInLine,e.events.length=n.eventsLength}function U(e,n){Ho(e.input.slice(0,e.length),e.position,n,e.filename)}function _e(e){return e===10||e===13}function Kt(e){return e===9||e===32}function Rn(e){return Kt(e)||_e(e)}function Un(e){return e===0||Rn(e)}function Qt(e){return e===44||e===91||e===93||e===123||e===125}function J0(e){return e>=48&&e<=57?e-48:-1}function Z0(e){if(e>=48&&e<=57)return e-48;const n=e|32;return n>=97&&n<=102?n-97+10:-1}function ek(e){return e===120?2:e===117?4:e===85?8:0}function nk(e){return e===48||e===97||e===98||e===116||e===9||e===110||e===118||e===102||e===114||e===101||e===32||e===34||e===47||e===92||e===78||e===95||e===76||e===80}function bo(e){e.input.charCodeAt(e.position)===10?e.position++:(e.position++,e.input.charCodeAt(e.position)===10&&e.position++),e.line++,e.lineStart=e.position,e.lineIndent=0,e.firstTabInLine=-1}function He(e,n){let t=0,i=e.input.charCodeAt(e.position),r=e.position===e.lineStart||Rn(e.input.charCodeAt(e.position-1));for(;i!==0;){for(;Kt(i);)r=!0,i===9&&e.firstTabInLine===-1&&(e.firstTabInLine=e.position),i=e.input.charCodeAt(++e.position);if(n&&r&&i===35)do i=e.input.charCodeAt(++e.position);while(!_e(i)&&i!==0);if(!_e(i))break;for(bo(e),t++,r=!0,i=e.input.charCodeAt(e.position);i===32;)e.lineIndent++,i=e.input.charCodeAt(++e.position)}return t}function kt(e,n=e.position){const t=e.input.charCodeAt(n);if((t===45||t===46)&&t===e.input.charCodeAt(n+1)&&t===e.input.charCodeAt(n+2)){const i=e.input.charCodeAt(n+3);return i===0||Rn(i)}return!1}function yp(e){let n=e.input.charCodeAt(e.position);for(;n!==0&&!_e(n);)n=e.input.charCodeAt(++e.position)}function rg(e,n,t){U0.test(e.input.slice(n,t))&&U(e,"the stream contains non-printable characters")}function tk(e,n,t){if(e.input.charCodeAt(e.position)!==33)return!1;n.tagStart!==ee&&U(e,"duplication of a tag property");const i=e.position;let r=!1,a=!1,o="!",s=e.input.charCodeAt(++e.position);s===60?(r=!0,s=e.input.charCodeAt(++e.position)):s===33&&(a=!0,o="!!",s=e.input.charCodeAt(++e.position));let l=e.position,c;if(r){for(;s!==0&&s!==62;)s=e.input.charCodeAt(++e.position);s!==62&&U(e,"unexpected end of the stream within a verbatim tag"),c=e.input.slice(l,e.position),e.position++}else{for(;s!==0&&!Rn(s)&&!(t&&Qt(s));)s===33&&(a?U(e,"tag suffix cannot contain exclamation marks"):(o=e.input.slice(l-1,e.position+1),ng.test(o)||U(e,"named tag handle cannot contain such characters"),a=!0,l=e.position+1)),s=e.input.charCodeAt(++e.position);c=e.input.slice(l,e.position),q0.test(c)&&U(e,"tag suffix cannot contain flow indicator characters")}return c&&!(r?Y0.test(c):G0.test(c))&&U(e,`tag name cannot contain such characters: ${c}`),!r&&o!=="!"&&o!=="!!"&&!Zm.call(e.tagHandlers,o)&&U(e,`undeclared tag handle "${o}"`),n.tagStart=i,n.tagEnd=e.position,!0}function ik(e,n){if(e.input.charCodeAt(e.position)!==38)return!1;n.anchorStart!==ee&&U(e,"duplication of an anchor property"),e.position++;const t=e.position;for(;e.input.charCodeAt(e.position)!==0&&!Rn(e.input.charCodeAt(e.position))&&!Qt(e.input.charCodeAt(e.position));)e.position++;return e.position===t&&U(e,"name of an anchor node must contain at least one character"),n.anchorStart=t,n.anchorEnd=e.position,!0}function rk(e,n){if(e.input.charCodeAt(e.position)!==42)return!1;(n.anchorStart!==ee||n.tagStart!==ee)&&U(e,"alias node should not have any properties"),e.position++;const t=e.position;for(;e.input.charCodeAt(e.position)!==0&&!Rn(e.input.charCodeAt(e.position))&&!Qt(e.input.charCodeAt(e.position));)e.position++;return e.position===t&&U(e,"name of an alias node must contain at least one character"),X0(e,t,e.position),!0}function Zl(e,n){He(e,!1),e.lineIndent<n&&U(e,"deficient indentation")}function ak(e,n,t){if(e.input.charCodeAt(e.position)!==39)return!1;e.position++;const i=e.position;let r=!0;for(;e.input.charCodeAt(e.position)!==0;){const a=e.input.charCodeAt(e.position);if(a===39){if(e.input.charCodeAt(e.position+1)===39){r=!1,e.position+=2;continue}const o=e.position;return e.position++,Bi(e,i,o,t.anchorStart,t.anchorEnd,t.tagStart,t.tagEnd,2,1,-1,r),!0}_e(a)?(r=!1,Zl(e,n)):e.position===e.lineStart&&kt(e)?U(e,"unexpected end of the document within a single quoted scalar"):a!==9&&a<32?U(e,"expected valid JSON character"):e.position++}U(e,"unexpected end of the stream within a single quoted scalar")}function ok(e,n,t){if(e.input.charCodeAt(e.position)!==34)return!1;e.position++;const i=e.position;let r=!0;for(;e.input.charCodeAt(e.position)!==0;){const a=e.input.charCodeAt(e.position);if(a===34){const o=e.position;return e.position++,Bi(e,i,o,t.anchorStart,t.anchorEnd,t.tagStart,t.tagEnd,3,1,-1,r),!0}if(a===92){r=!1;const o=e.input.charCodeAt(++e.position);if(_e(o))Zl(e,n);else if(nk(o))e.position++;else{let s=ek(o);for(s===0&&U(e,"unknown escape sequence");s-- >0;)e.position++,Z0(e.input.charCodeAt(e.position))<0&&U(e,"expected hexadecimal character");e.position++}}else _e(a)?(r=!1,Zl(e,n)):e.position===e.lineStart&&kt(e)?U(e,"unexpected end of the document within a double quoted scalar"):a!==9&&a<32?U(e,"expected valid JSON character"):e.position++}U(e,"unexpected end of the stream within a double quoted scalar")}function sk(e,n,t){const i=e.input.charCodeAt(e.position);let r=1,a=-1,o=!1;if(i!==124&&i!==62)return!1;const s=i===124?4:5;for(e.position++;e.input.charCodeAt(e.position)!==0;){const f=e.input.charCodeAt(e.position),m=J0(f);if(f===43||f===45)r!==1&&U(e,"repeat of a chomping mode identifier"),r=f===43?3:2,e.position++;else if(m>=0)m===0&&U(e,"bad explicit indentation width of a block scalar; it cannot be less than one"),o&&U(e,"repeat of an indentation width identifier"),a=n+m-1,o=!0,e.position++;else break}let l=!1;for(;Kt(e.input.charCodeAt(e.position));)l=!0,e.position++;l&&e.input.charCodeAt(e.position)===35&&yp(e),_e(e.input.charCodeAt(e.position))?bo(e):e.input.charCodeAt(e.position)!==0&&U(e,"a line break is expected");let c=o?a:-1,d=0;const u=e.position;let p=e.position;for(;e.input.charCodeAt(e.position)!==0;){const f=e.position;let m=0;for(;e.input.charCodeAt(f+m)===32;)m++;const b=e.input.charCodeAt(f+m);if(b===0){c>=0?m>c&&(p=f+m):m>0&&(p=f+m);break}if(f===e.lineStart&&kt(e,f))break;if(!o&&c===-1&&_e(b)&&(d=Math.max(d,m)),!o&&c===-1&&!_e(b)&&(b===9&&m<n&&(e.position=f+m,U(e,"tab characters must not be used in indentation")),m<d&&(e.position=f+m,U(e,"bad indentation of a mapping entry"))),c===-1&&b!==0&&!_e(b)&&m<n){e.lineIndent=m,e.position=f+m;break}!o&&b!==0&&!_e(b)&&c===-1&&(c=m);const A=c===-1?n+1:c;if(b!==0&&!_e(b)&&m<A){e.lineIndent=m,e.position=f+m;break}yp(e),p=e.position,_e(e.input.charCodeAt(e.position))&&(bo(e),p=e.position)}return rg(e,u,p),Bi(e,u,p,t.anchorStart,t.anchorEnd,t.tagStart,t.tagEnd,s,r,c),!0}function lk(e,n){const t=e.input.charCodeAt(e.position),i=n===ut;if(t===0||Rn(t)||t===35||t===38||t===42||t===33||t===124||t===62||t===39||t===34||t===37||t===64||t===96||i&&Qt(t))return!1;if(t===63||t===45){const r=e.input.charCodeAt(e.position+1);if(Un(r)||i&&Qt(r))return!1}return!0}function ck(e,n,t,i){if(!lk(e,t))return!1;const r=e.position;let a=e.position,o=e.input.charCodeAt(e.position);const s=t===ut;let l=!1;for(;o!==0&&!(e.position===e.lineStart&&kt(e));){if(o===58){const c=e.input.charCodeAt(e.position+1);if(Un(c)||s&&Qt(c))break}else if(o===35){if(Rn(e.input.charCodeAt(e.position-1)))break}else{if(s&&Qt(o))break;if(_e(o)){const c=e.position,d=e.line,u=e.lineStart,p=e.lineIndent;if(He(e,!1),e.lineIndent>=n){l=!0,o=e.input.charCodeAt(e.position);continue}e.position=c,e.line=d,e.lineStart=u,e.lineIndent=p;break}}Kt(o)||(a=e.position+1),o=e.input.charCodeAt(++e.position)}return a===r?!1:(rg(e,r,a),Bi(e,r,a,i.anchorStart,i.anchorEnd,i.tagStart,i.tagEnd,1,1,-1,!l),!0)}function Rt(e,n){const t=e.line;He(e,!0),(e.line>t&&e.lineIndent<n||e.firstTabInLine!==-1&&e.lineIndent<n)&&U(e,"deficient indentation")}function uk(e,n,t){const i=e.input.charCodeAt(e.position),r=i===123,a=e.position;let o=!0;if(i!==91&&i!==123)return!1;const s=r?125:93;for(r?yr(e,a,t.anchorStart,t.anchorEnd,t.tagStart,t.tagEnd,2):ig(e,a,t.anchorStart,t.anchorEnd,t.tagStart,t.tagEnd,2),e.position++;e.input.charCodeAt(e.position)!==0;){Rt(e,n);let l=e.input.charCodeAt(e.position);if(l===s)return e.position++,Ci(e),!0;o?l===44&&U(e,"expected the node content, but found ','"):U(e,"missed comma between flow collection entries");let c=!1,d=!1;l===63&&Rn(e.input.charCodeAt(e.position+1))&&(c=d=!0,e.position+=1,Rt(e,n));const u=e.line,p=vr(e),f=qn(e,n,ut,!1,!0);Rt(e,n),l=e.input.charCodeAt(e.position),(r||d||e.line===u)&&l===58?(c=!0,e.position++,Rt(e,n),r?f||Qe(e):(xt(e,p),yr(e,p.position,ee,ee,ee,ee,2),qn(e,n,ut,!1,!0)||Qe(e),Rt(e,n),e.position++,Rt(e,n)),qn(e,n,ut,!1,!0)||Qe(e),Rt(e,n),r||Ci(e)):r&&c?(f||Qe(e),Qe(e)):r?Qe(e):c&&(xt(e,p),yr(e,p.position,ee,ee,ee,ee,2),qn(e,n,ut,!1,!0),Qe(e),Ci(e)),l=e.input.charCodeAt(e.position),l===44?(o=!0,e.position++):o=!1}U(e,"unexpected end of the stream within a flow collection")}function vp(e,n,t){if(e.firstTabInLine!==-1||e.input.charCodeAt(e.position)!==45||!Un(e.input.charCodeAt(e.position+1)))return!1;for(ig(e,e.position,t.anchorStart,t.anchorEnd,t.tagStart,t.tagEnd,1);e.input.charCodeAt(e.position)===45&&Un(e.input.charCodeAt(e.position+1));){e.firstTabInLine!==-1&&(e.position=e.firstTabInLine,U(e,"tab characters must not be used in indentation"));const i=e.line;e.position++;const r=He(e,!0)>0;if(e.firstTabInLine!==-1&&e.input.charCodeAt(e.position)===45&&Un(e.input.charCodeAt(e.position+1))&&U(e,"bad indentation of a sequence entry"),r&&e.lineIndent<=n?Qe(e):qn(e,n,eg,!1,!0),He(e,!0),e.lineIndent<n||e.position>=e.length)break;e.lineIndent>n&&U(e,"bad indentation of a sequence entry"),e.line===i&&e.input.charCodeAt(e.position)===45&&Un(e.input.charCodeAt(e.position+1))&&U(e,"bad indentation of a sequence entry")}return Ci(e),!0}function Rs(e,n,t,i){let r=!1,a=!1,o=!1,s=!1;if(e.firstTabInLine!==-1)return!1;let l=e.input.charCodeAt(e.position);for(;l!==0;){!r&&e.firstTabInLine!==-1&&(e.position=e.firstTabInLine,U(e,"tab characters must not be used in indentation"));const c=e.input.charCodeAt(e.position+1),d=e.line;if((l===63||l===58)&&Un(c))o||(yr(e,e.position,i.anchorStart,i.anchorEnd,i.tagStart,i.tagEnd,1),o=!0),l===63?(r&&Qe(e),a=!0,r=!0):(r||(Qe(e),a=!0),r=!1),e.position+=1,s=!0;else{r&&(Qe(e),r=!1);const u=vr(e);if(!qn(e,t,Xl,!1,!0))break;if(e.line===d){for(l=e.input.charCodeAt(e.position);Kt(l);)l=e.input.charCodeAt(++e.position);if(l===58){if(l=e.input.charCodeAt(++e.position),Un(l)||U(e,"a whitespace character is expected after the key-value separator within a block mapping"),!o){for(xt(e,u),yr(e,u.position,i.anchorStart,i.anchorEnd,i.tagStart,i.tagEnd,1),o=!0,qn(e,t,Xl,!1,!0),l=e.input.charCodeAt(e.position);Kt(l);)l=e.input.charCodeAt(++e.position);e.position++}a=!0,r=!1,s=!1}else if(a)U(e,"expected ':' after a mapping key");else return i.anchorStart!==ee||i.tagStart!==ee?(xt(e,u),!1):!0}else if(a)U(e,"can not read a block mapping entry; a multiline key may not be an implicit key");else return i.anchorStart!==ee||i.tagStart!==ee?(xt(e,u),!1):!0}if(qn(e,n,vo,!0,s)&&(s=!1),r||s&&(Qe(e),s=!1),He(e,!0),l=e.input.charCodeAt(e.position),(e.line===d||e.lineIndent>n)&&l!==0)U(e,"bad indentation of a mapping entry");else if(e.lineIndent<n)break}return a?(r&&Qe(e),o&&Ci(e),!0):!1}function qn(e,n,t,i,r,a=!0){var m,b;e.depth>=e.maxDepth&&U(e,`nesting exceeded maxDepth (${e.maxDepth})`),e.depth++;let o=1,s=!1,l=!1,c=null;const d=gp();let u=t===vo||t===eg,p=u;const f=u;if(i&&He(e,!0)&&(s=!0,e.lineIndent>n?o=1:e.lineIndent===n?o=0:o=-1),e.position===e.lineStart&&kt(e))return e.depth--,!1;if(o===1)for(;;){const A=e.input.charCodeAt(e.position),y=vr(e);if(s&&o!==1&&(A===33||A===38))break;if(s&&f&&(d.tagStart!==ee||d.anchorStart!==ee)&&(A===33||A===38)){const g=vr(e),v=n+1;if(Rs(e,e.position-e.lineStart,v,d)&&((m=e.events[g.eventsLength])==null?void 0:m.type)===3)return e.depth--,!0;xt(e,g)}if(s&&(A===33&&d.tagStart!==ee||A===38&&d.anchorStart!==ee)||!tk(e,d,t===ut)&&!ik(e,d))break;c===null&&(c=y),He(e,!0)?(s=!0,p=f,e.lineIndent>n?o=1:e.lineIndent===n?o=0:o=-1):p=!1}if(p&&(p=s||r),o===1||t===vo){const A=t===ut||t===Xl?n:n+1,y=e.position-e.lineStart;if(o===1)if(p&&(vp(e,y,d)||Rs(e,y,A,d))||uk(e,A,d))l=!0;else{const g=e.input.charCodeAt(e.position);if(c!==null&&a&&f&&!p&&g!==124&&g!==62){const v=vr(e),I=c.position-c.lineStart;xt(e,c),Rs(e,I,A,gp())&&((b=e.events[v.eventsLength])==null?void 0:b.type)===3?l=!0:xt(e,v)}!l&&(u&&sk(e,A,d)||ak(e,A,d)||ok(e,A,d)||rk(e,d)||ck(e,A,t,d))&&(l=!0)}else o===0&&(l=p&&vp(e,y,d))}return u=u&&!l,!l&&(d.anchorStart!==ee||d.tagStart!==ee||u)&&(Bi(e,ee,ee,d.anchorStart,d.anchorEnd,d.tagStart,d.tagEnd,1),l=!0),e.depth--,l||d.anchorStart!==ee||d.tagStart!==ee}function dk(e){if(e.lineIndent>0||e.input.charCodeAt(e.position)!==37)return!1;e.position++;const n=e.position;for(;e.input.charCodeAt(e.position)!==0&&!Rn(e.input.charCodeAt(e.position));)e.position++;const t=e.input.slice(n,e.position),i=[];for(t.length===0&&U(e,"directive name must not be less than one character in length");e.input.charCodeAt(e.position)!==0&&!_e(e.input.charCodeAt(e.position));){for(;Kt(e.input.charCodeAt(e.position));)e.position++;if(e.input.charCodeAt(e.position)===35||_e(e.input.charCodeAt(e.position))||e.input.charCodeAt(e.position)===0)break;const r=e.position;for(;e.input.charCodeAt(e.position)!==0&&!Rn(e.input.charCodeAt(e.position));)e.position++;i.push(e.input.slice(r,e.position))}if(_e(e.input.charCodeAt(e.position))&&bo(e),t==="YAML"){e.directives.some(a=>a.kind==="yaml")&&U(e,"duplication of %YAML directive"),i.length!==1&&U(e,"YAML directive accepts exactly one argument");const r=/^([0-9]+)\.([0-9]+)$/.exec(i[0]);r===null&&U(e,"ill-formed argument of the YAML directive"),parseInt(r[1],10)!==1&&U(e,"unacceptable YAML version of the document"),e.directives.push({kind:"yaml",version:i[0]})}else if(t==="TAG"){i.length!==2&&U(e,"TAG directive accepts exactly two arguments");const[r,a]=i;ng.test(r)||U(e,"ill-formed tag handle (first argument) of the TAG directive"),Zm.call(e.tagHandlers,r)&&U(e,`there is a previously declared suffix for "${r}" tag handle`),K0.test(a)||U(e,"ill-formed tag prefix (second argument) of the TAG directive"),e.tagHandlers[r]=a,e.directives.push({kind:"tag",handle:r,prefix:a})}return!0}function pk(e){e.directives=[],e.tagHandlers=Object.create(null);let n=!1;for(He(e,!0);dk(e);)n=!0,He(e,!0);let t=!1,i=!1,r=!0;if(e.lineIndent===0&&e.input.charCodeAt(e.position)===45&&e.input.charCodeAt(e.position+1)===45&&e.input.charCodeAt(e.position+2)===45&&Un(e.input.charCodeAt(e.position+3))){t=!0;const s=e.line;e.position+=3,He(e,!0),r=e.line>s}else n&&U(e,"directives end mark is expected");const a=e.events.length;if(!t&&e.position===e.lineStart&&e.input.charCodeAt(e.position)===46&&kt(e)){e.position+=3,He(e,!0);return}if(Q0(e,t,!1),qn(e,e.lineIndent-1,vo,!1,r,r)||Qe(e),He(e,!0),e.position===e.lineStart&&kt(e)&&(i=e.input.charCodeAt(e.position)===46,i)){const s=e.line;e.position+=3,He(e,!0),e.line===s&&e.position<e.length&&U(e,"end of the stream or a document separator is expected")}const o=e.events[a];(o==null?void 0:o.type)===1&&(o.explicitEnd=i),Ci(e),!i&&e.position<e.length&&!(e.position===e.lineStart&&kt(e))&&U(e,"end of the stream or a document separator is expected")}function fk(e,n){const t=e.length,i={...vu,...n,input:`${e}\0`,length:t,position:0,line:0,lineStart:0,lineIndent:0,firstTabInLine:-1,depth:0,directives:[],tagHandlers:Object.create(null),events:[]},r=e.indexOf("\0");for(r!==-1&&Ho(e,r,"null byte is not allowed in input",i.filename),i.input.charCodeAt(i.position)===65279&&i.position++;i.position<i.length&&(He(i,!0),!(i.position>=i.length));){const a=i.position;pk(i),i.position===a&&U(i,"can not read a document")}return i.events}var hk={...vu,...yu};function mk(e,n={}){const t={...hk,...n},i=String(e),r=Object.keys(vu),a=Object.keys(yu);return $0(fk(i,Ql(t,r)),{...Ql(t,a),source:i})}function $o(e,n){const t=mk(e,n);if(t.length===0)throw new Wr("expected a document, but the input is empty");if(t.length===1)return t[0];throw new Wr("expected a single document in the stream, but found more")}var ka=class{constructor(){Ce(this,"tagged",!1);Ce(this,"flow",!1);Ce(this,"singleQuoted",!1);Ce(this,"doubleQuoted",!1);Ce(this,"literal",!1);Ce(this,"folded",!1)}},Nt=Symbol("INVALID");function gk(e){const n=new Set([e.defaultScalarTag,e.defaultSequenceTag,e.defaultMappingTag].filter(a=>a!==void 0)),t=e.implicitScalarTags,i=e.tags.filter(a=>!(a.nodeKind==="scalar"&&a.implicit)&&!n.has(a)),r=e.tags.filter(a=>n.has(a));return[...t.map(a=>({tag:a,implicitTag:!0})),...i.map(a=>({tag:a,implicitTag:!1})),...r.map(a=>({tag:a,implicitTag:!0}))]}function yk(e,n){for(let t=0,i=e.representTypes.length;t<i;t+=1){const{tag:r,implicitTag:a}=e.representTypes[t];if(r.identify&&r.identify(n)){let o;return r.matchByTagPrefix&&r.representTagName?o=r.representTagName(n):o=r.tagName,{tag:r,tagName:o,implicitTag:a}}}return null}function or(e,n){if(!e.noRefs&&n!==null&&typeof n=="object"){const d=e.refs.get(n);if(d)return d.anchor===void 0&&(d.anchor=`ref_${e.refCounter++}`),{kind:"alias",tag:"",style:new ka,anchor:d.anchor}}const t=yk(e,n);if(!t){if(n===void 0||e.skipInvalid)return Nt;throw new Wr(`unacceptable kind of an object to dump ${Object.prototype.toString.call(n)}`)}const{tag:i,tagName:r,implicitTag:a}=t,o=a?r:Qm(r);if(i.nodeKind==="scalar"){const d=new ka;return d.tagged=!a,{kind:"scalar",tag:o,style:d,value:i.represent(n)}}if(i.nodeKind==="sequence"){const d=i.represent(n),u=new ka;u.tagged=!a;const p={kind:"sequence",tag:o,style:u,items:[]};e.noRefs||e.refs.set(n,p);for(let f=0,m=d.length;f<m;f+=1){let b=or(e,d[f]);b===Nt&&d[f]===void 0&&(b=or(e,null)),b!==Nt&&p.items.push(b)}return p}const s=i.represent(n),l=new ka;l.tagged=!a;const c={kind:"mapping",tag:o,style:l,items:[]};e.noRefs||e.refs.set(n,c);for(const[d,u]of s){const p=or(e,d);if(p===Nt)continue;const f=or(e,u);f!==Nt&&c.items.push({key:p,value:f})}return c}function vk(e,n,t={}){const i=or({representTypes:gk(n),noRefs:t.noRefs??!1,skipInvalid:t.skipInvalid??!1,refs:new Map,refCounter:0},e);return[{contents:i===Nt?null:i,directives:[]}]}var bk=Symbol("visit:break"),ag=Symbol("visit:skip");function Wa(e,n,t){const i=n(e,t);if(i===bk)return!0;if(i===ag)return!1;const r=t.depth+1;switch(e.kind){case"sequence":for(const a of e.items)if(Wa(a,n,{depth:r,parent:e,isKey:!1}))return!0;break;case"mapping":for(const{key:a,value:o}of e.items)if(Wa(a,n,{depth:r,parent:e,isKey:!0})||Wa(o,n,{depth:r,parent:e,isKey:!1}))return!0;break}return!1}function wk(e,n){for(const t of e)if(t.contents&&Wa(t.contents,n,{depth:0,parent:null,isKey:!1}))return}var bu=65279,xk=9,Xt=10,og=13,kk=32,Sk=33,sg=34,ec=35,Ik=37,Ak=38,lg=39,Ck=42,cg=44,wu=45,Vr=58,Pk=61,_k=62,ug=63,Ek=64,dg=91,pg=93,Tk=96,fg=123,Rk=124,hg=125,Be={};Be[0]="\\0";Be[7]="\\a";Be[8]="\\b";Be[9]="\\t";Be[10]="\\n";Be[11]="\\v";Be[12]="\\f";Be[13]="\\r";Be[27]="\\e";Be[34]='\\"';Be[92]="\\\\";Be[133]="\\N";Be[160]="\\_";Be[8232]="\\L";Be[8233]="\\P";var xu={indent:2,seqNoIndent:!1,seqInlineFirst:!0,sortKeys:!1,lineWidth:80,flowBracketPadding:!1,flowSkipCommaSpace:!1,flowSkipColonSpace:!1,quoteFlowKeys:!1,quoteStyle:"single",forceQuotes:!1,tagBeforeAnchor:!1};function Mk(e){return e.style.tagged?e.tag:Qm(e.tag)}function Dk(e){const n={...xu,...e};return{...n,defaultScalarTagName:n.schema.defaultScalarTag.tagName,implicitResolvers:n.schema.implicitScalarTags}}function Lk(e){const n=e.toString(16).toUpperCase(),t=e<=255?"x":"u",i=e<=255?2:4;return`\\${t}${"0".repeat(i-n.length)}${n}`}function bp(e,n){const t=" ".repeat(n);let i=0,r="";const a=e.length;for(;i<a;){let o;const s=e.indexOf(`
`,i);s===-1?(o=e.slice(i),i=a):(o=e.slice(i,s+1),i=s+1),o.length&&o!==`
`&&(r+=t),r+=o}return r}function nc(e,n){return`
${" ".repeat(e.indent*n)}`}function Nk(e,n){const t=e.indent*Math.max(1,n);return{indent:t,blockIndent:n===0?e.indent+1:e.indent,lineWidth:e.lineWidth===-1?-1:Math.max(Math.min(e.lineWidth,40),e.lineWidth-t)}}function wp(e,n){for(let t=0,i=e.implicitResolvers.length;t<i;t+=1){const r=e.implicitResolvers[t];if(r.resolve(n,!1,r.tagName)!==ie)return r.tagName}return e.defaultScalarTagName}function Ni(e){return e===kk||e===xk}function jk(e){const n=e.charCodeAt(0);if(n!==wu&&n!==46||e.charCodeAt(1)!==n||e.charCodeAt(2)!==n)return!1;if(e.length===3)return!0;const t=e.charCodeAt(3);return Ni(t)||t===og||t===Xt}function Hr(e){return e>=32&&e<=126||e>=161&&e<=55295&&e!==8232&&e!==8233||e>=57344&&e<=65533&&e!==bu||e>=65536&&e<=1114111}function xp(e){return Hr(e)&&e!==bu&&e!==og&&e!==Xt}function tc(e,n,t){const i=xp(e),r=i&&!Ni(e);return(t?i:i&&e!==cg&&e!==dg&&e!==pg&&e!==fg&&e!==hg)&&e!==ec&&!(n===Vr&&!r)||xp(n)&&!Ni(n)&&e===ec||n===Vr&&r}function Ok(e){return Hr(e)&&e!==bu&&!Ni(e)&&e!==wu&&e!==ug&&e!==Vr&&e!==cg&&e!==dg&&e!==pg&&e!==fg&&e!==hg&&e!==ec&&e!==Ak&&e!==Ck&&e!==Sk&&e!==Rk&&e!==Pk&&e!==_k&&e!==lg&&e!==sg&&e!==Ik&&e!==Ek&&e!==Tk}function Fk(e,n){const t=Pi(e,0);if(Ok(t))return!0;if(e.length>1&&(t===wu||t===ug||t===Vr)){const i=Pi(e,1);return!Ni(i)&&tc(i,t,n)}return!1}function zk(e){return!Ni(e)&&e!==Vr}function Pi(e,n){const t=e.charCodeAt(n);let i;return t>=55296&&t<=56319&&n+1<e.length&&(i=e.charCodeAt(n+1),i>=56320&&i<=57343)?(t-55296)*1024+i-56320+65536:t}function mg(e){return/^\n* /.test(e)}var $r=1,br=2,ku=3,Su=4,dt=5;function Bk(e,n,t,i,r,a){const{blockIndent:o,lineWidth:s}=t;let l,c=0,d=-1,u=!1,p=!1;const f=s!==-1;let m=-1,b=!jk(n)&&Fk(n,a)&&zk(Pi(n,n.length-1));if(i||r)for(l=0;l<n.length;c>=65536?l+=2:l++){if(c=Pi(n,l),!Hr(c))return dt;b=b&&tc(c,d,a),d=c}else{for(l=0;l<n.length;c>=65536?l+=2:l++){if(c=Pi(n,l),c===Xt)u=!0,f&&(p=p||l-m-1>s&&n[m+1]!==" ",m=l);else if(!Hr(c))return dt;b=b&&tc(c,d,a),d=c}p=p||f&&l-m-1>s&&n[m+1]!==" "}return!u&&!p?b&&!r?$r:e.quoteStyle==="double"?dt:br:o>9&&mg(n)?dt:p?Su:ku}function Wk(e,n,t){const{indent:i,blockIndent:r,lineWidth:a}=t;switch(n){case $r:return Sp(e,i);case br:return`'${Sp(e,i).replace(/'/g,"''")}'`;case ku:return"|"+kp(e,r)+Ip(bp(e,i));case Su:return">"+kp(e,r)+Ip(bp(Hk(e,a),i));case dt:return`"${$k(e)}"`}}function Vk(e,n,t,i,r){const a=i||!r;if(n.style.singleQuoted)return br;if(n.style.doubleQuoted)return dt;if(!a){if(n.style.literal)return ku;if(n.style.folded)return Su}const o=n.value;if(o.length===0)return n.style.tagged||wp(e,o)===n.tag?$r:e.quoteStyle==="double"?dt:br;const s=Bk(e,o,t,a,e.forceQuotes&&!i,r);return s===$r&&!n.style.tagged&&wp(e,o)!==n.tag?e.quoteStyle==="double"?dt:br:s}function kp(e,n){const t=mg(e)?String(n):"",i=e[e.length-1]===`
`;return`${t}${i&&(e[e.length-2]===`
`||e===`
`)?"+":i?"":"-"}
`}function Sp(e,n){let t=e.indexOf(`
`);if(t===-1)return e;const i=" ".repeat(n);let r=e.slice(0,t);const a=/(\n+)([^\n]*)/g;a.lastIndex=t;let o;for(;o=a.exec(e);){const s=o[1].length,l=o[2];r+=`
`.repeat(s+1)+i+l}return r}function Ip(e){return e[e.length-1]===`
`?e.slice(0,-1):e}function Hk(e,n){const t=/(\n+)([^\n]*)/g;let i=e.indexOf(`
`);i===-1&&(i=e.length),t.lastIndex=i;let r=Ap(e.slice(0,i),n),a=e[0]===`
`||e[0]===" ",o,s;for(;s=t.exec(e);){const l=s[1],c=s[2];o=c[0]===" ",r+=l+(!a&&!o&&c!==""?`
`:"")+Ap(c,n),a=o}return r}function Ap(e,n){if(e===""||e[0]===" ")return e;const t=/ [^ ]/g;let i,r=0,a,o=0,s=0,l="";for(;i=t.exec(e);)s=i.index,s-r>n&&(a=o>r?o:s,l+=`
${e.slice(r,a)}`,r=a+1),o=s;return l+=`
`,e.length-r>n&&o>r?l+=`${e.slice(r,o)}
${e.slice(o+1)}`:l+=e.slice(r),l.slice(1)}function $k(e){let n="",t=0;for(let i=0;i<e.length;t>=65536?i+=2:i++){t=Pi(e,i);const r=Be[t];if(r){n+=r;continue}if(Hr(t)){n+=e[i],t>=65536&&(n+=e[i+1]);continue}n+=Lk(t)}return n}function Uk(e,n,t){let i="";for(let a=0,o=t.items.length;a<o;a+=1){const s=Gn(e,n,t.items[a],{});i!==""&&(i+=`,${e.flowSkipCommaSpace?"":" "}`),i+=s}const r=e.flowBracketPadding&&i!==""?" ":"";return`[${r}${i}${r}]`}function Cp(e,n,t,i){let r="";for(let a=0,o=t.items.length;a<o;a+=1){const s=Gn(e,n+1,t.items[a],{block:!0,compact:e.seqInlineFirst,isblockseq:!0});(!i||r!=="")&&(r+=nc(e,n)),s===""||Xt===s.charCodeAt(0)?r+="-":r+="- ",r+=s}return r}function qk(e,n,t){let i="";const r=gg(e,t.items);for(const{key:o,value:s}of r){let l="";i!==""&&(l+=`,${e.flowSkipCommaSpace?"":" "}`);const c=Gn(e,n,o,{iskey:!0}),d=c.length>1024;d?l+="? ":e.quoteFlowKeys&&(l+='"');const u=Gn(e,n,s,{}),p=e.flowSkipColonSpace||u===""?"":" ";l+=`${c}${e.quoteFlowKeys&&!d?'"':""}:${p}${u}`,i+=l}const a=e.flowBracketPadding&&i!==""?" ":"";return`{${a}${i}${a}}`}function Sa(e){return e.kind==="scalar"?e.value:e}function gg(e,n){if(!e.sortKeys)return n;const t=n.slice();if(e.sortKeys===!0)t.sort((i,r)=>{const a=Sa(i.key),o=Sa(r.key);return a<o?-1:a>o?1:0});else{const i=e.sortKeys;t.sort((r,a)=>i(Sa(r.key),Sa(a.key)))}return t}function Yk(e,n,t,i){let r="";const a=gg(e,t.items);for(let o=0,s=a.length;o<s;o+=1){let l="";(!i||r!=="")&&(l+=nc(e,n));const{key:c,value:d}=a[o],u=(c.kind==="mapping"||c.kind==="sequence")&&!c.style.flow&&c.items.length!==0||c.kind==="scalar"&&(c.style.literal||c.style.folded),p=u?Gn(e,n+1,c,{block:!0,compact:!0,isblockseq:!ic(e,c,n+1)}):Gn(e,n+1,c,{block:!0,compact:!0,iskey:!0}),f=c.kind==="scalar"&&c.value.indexOf(`
`)!==-1,m=u||f||p.length>1024;m&&(p&&Xt===p.charCodeAt(0)?l+="?":l+="? "),l+=p,m&&(l+=nc(e,n));const b=Gn(e,n+1,d,{block:!0,compact:m,isblockseq:m&&!ic(e,d,n+1)}),A=c.kind==="scalar"&&c.value===""&&p!==""&&p.charCodeAt(p.length-1)!==lg&&p.charCodeAt(p.length-1)!==sg,y=!m&&(c.kind==="alias"||A)?" ":"";b===""||Xt===b.charCodeAt(0)?l+=`${y}:`:l+=`${y}: `,l+=b,r+=l}return r}function ic(e,n,t){return n.style.tagged||n.anchor!==void 0||e.indent<2&&t>0}function Gn(e,n,t,i){if(t.kind==="alias")return`*${t.anchor}`;const{block:r=!1,iskey:a=!1,isblockseq:o=!1}=i;let s=i.compact??!1;const l=t.anchor!==void 0;ic(e,t,n)&&(s=!1);let c,d=t.style.tagged;const u=r&&(t.kind==="mapping"||t.kind==="sequence")&&!t.style.flow&&t.items.length!==0;if(t.kind==="mapping")u?c=Yk(e,n,t,s):c=qk(e,n,t);else if(t.kind==="sequence")u?e.seqNoIndent&&!o&&n>0?c=Cp(e,n-1,t,s):c=Cp(e,n,t,s):c=Uk(e,n,t);else{const p=Nk(e,n),f=Vk(e,t,p,a,r);c=Wk(t.value,f,p),d=t.style.tagged||f!==$r&&t.tag!==e.defaultScalarTagName}if(u&&s&&n>0&&e.indent>2&&(c=`${" ".repeat(e.indent-2)}${c}`),d||l){const p=[],f=d?Mk(t):null,m=l?`&${t.anchor}`:null;e.tagBeforeAnchor?(f!==null&&p.push(f),m!==null&&p.push(m)):(m!==null&&p.push(m),f!==null&&p.push(f));const b=c===""||c.charCodeAt(0)===Xt?"":" ";c=`${p.join(" ")}${b}${c}`}return c}function Gk(e){return(e.kind==="sequence"||e.kind==="mapping")&&!e.style.flow&&e.items.length!==0&&!e.style.tagged&&e.anchor===void 0}function Kk(e){let n=e;for(;(n.kind==="sequence"||n.kind==="mapping")&&!n.style.flow&&n.items.length!==0;)n=n.kind==="sequence"?n.items[n.items.length-1]:n.items[n.items.length-1].value;if(n.kind!=="scalar"||!(n.style.literal||n.style.folded))return!1;const{value:t}=n;return t.endsWith(`

`)||t===`
`}function Qk(e){let n="";for(const t of e.directives){if(t.kind==="yaml"){n+=`%YAML ${t.version}
`;continue}const{handle:i,prefix:r}=t;n+=`%TAG ${i} ${r}
`}return n}function Xk(e,n){const t=Dk(n);let i="",r=!1;for(let a=0;a<e.length;a+=1){const o=e[a],s=Qk(o),l=s!=="",c=o.explicitStart||l||a>0&&!r;if(i+=s,o.contents===null)c&&(i+=`---
`);else if(c){const d=Gn(t,0,o.contents,{block:!0,compact:!0}),u=d===""?"":l||Gk(o.contents)?`
`:" ";i+=`---${u}${d}
`}else i+=Gn(t,0,o.contents,{block:!0,compact:!0})+`
`;r=o.explicitEnd||o.contents!==null&&Kk(o.contents),r&&(i+=`...
`)}return i}var Jk=P0.withTags({...Gl,resolve:(e,n,t)=>{const i=Gl.resolve(e,n,t);return i===ie?$m.resolve(e,n,t):i}},{...Kl,resolve:(e,n,t)=>{const i=Kl.resolve(e,n,t);return i===ie?Um.resolve(e,n,t):i}}),Zk={...xu,schema:Jk,skipInvalid:!1,noRefs:!1,flowLevel:-1,transform:()=>{}};function yg(e,n={}){const t={...Zk,...n},i=vk(e,t.schema,{noRefs:t.noRefs,skipInvalid:t.skipInvalid});return t.flowLevel>=0&&wk(i,(r,a)=>{if(!(a.depth<t.flowLevel))return r.style.flow=!0,ag}),t.transform(i),Xk(i,{...Ql(t,Object.keys(xu)),schema:t.schema})}function eS(e){try{return $o(e)}catch{return null}}function rc(e){return yg(e,{indent:2,lineWidth:120})}function nS(e,n){const i=(eS(e)||{}).meta||{},r=Object.values(n).map(a=>a.parsed).filter(Boolean).flatMap(a=>a.dimensions||[]);return{meta:i,dimensions:r}}function _t(e){const n={};for(const[t,i]of Object.entries(e)){let r=null,a=null;try{r=$o(i)}catch(o){a=o.message}n[t]={raw:i,parsed:r,error:a}}return n}function tS(e,n,t){let i=null,r=null;try{i=$o(t)}catch(a){r=a.message}return{...e,[n]:{raw:t,parsed:i,error:r}}}const iS={base:"vs",inherit:!0,rules:[{token:"comment",foreground:"93a1a1",fontStyle:"italic"},{token:"string",foreground:"2aa198"},{token:"keyword",foreground:"859900"},{token:"number",foreground:"2aa198"},{token:"operator",foreground:"657b83"},{token:"type",foreground:"268bd2"},{token:"delimiter",foreground:"93a1a1"},{token:"key",foreground:"268bd2"},{token:"string.yaml",foreground:"2aa198"},{token:"keyword.yaml",foreground:"859900"}],colors:{"editor.background":"#fdf6e3","editor.foreground":"#657b83","editor.lineHighlightBackground":"#eee8d520","editor.selectionBackground":"#d4cdb840","editorLineNumber.foreground":"#b5b0a0","editorLineNumber.activeForeground":"#93a1a1","editorCursor.foreground":"#657b83","editor.inactiveSelectionBackground":"#d4cdb820","editorWidget.background":"#fdf6e3","editorWidget.border":"#d4cdb8","editorSuggestWidget.background":"#fdf6e3","editorSuggestWidget.border":"#d4cdb8","editorSuggestWidget.selectedBackground":"#eee8d5","scrollbar.shadow":"#00000010","scrollbarSlider.background":"#93a1a130","scrollbarSlider.hoverBackground":"#93a1a150"}},rS=[{id:"config",label:"config",title:"Config"},{id:"P-people-place",label:"P",title:"People & Place"},{id:"R-reality",label:"R",title:"Reality"},{id:"I-intent",label:"I",title:"Intent"},{id:"S-signal",label:"S",title:"Signal"},{id:"M-movement",label:"M",title:"Movement"}],aS=[{id:"config",label:"config",title:"Config"},{id:"who",label:"W",title:"Who"},{id:"where",label:"WH",title:"Where"},{id:"runtime",label:"RT",title:"Runtime"},{id:"state",label:"ST",title:"State"},{id:"control",label:"CT",title:"Control"},{id:"operations",label:"OP",title:"Operations"}],oS=[{id:"config",label:"config",title:"Config"},{id:"identity",label:"ID",title:"Identity"},{id:"surface",label:"SF",title:"Surface"},{id:"controls",label:"CT",title:"Controls"},{id:"threats",label:"TH",title:"Threats"},{id:"posture",label:"PO",title:"Posture"}],sS=[{id:"config",label:"config",title:"Config"},{id:"domains",label:"DO",title:"Domains"},{id:"components",label:"CO",title:"Components"},{id:"integrations",label:"IN",title:"Integrations"},{id:"quality",label:"QA",title:"Quality"},{id:"evolution",label:"EV",title:"Evolution"}];function lS({parsed:e,raw:n,onChange:t}){const i=(e==null?void 0:e.meta)||{};function r(l,c){const d={meta:{...i,[l]:c}};t(rc(d))}const a={width:"100%",padding:"4px 8px",fontSize:"12px",fontFamily:"monospace",backgroundColor:"#fdf6e3",border:"1px solid #d4cdb8",borderRadius:"4px",color:"#586e75",outline:"none"},o={fontSize:"10px",textTransform:"uppercase",letterSpacing:"0.08em",color:"#93a1a1",fontWeight:600,marginBottom:"3px",display:"block"},s=[{key:"organization",label:"Organization",type:"text"},{key:"description",label:"Description",type:"text"},{key:"domain",label:"Domain",type:"text"},{key:"scope",label:"Scope",type:"text"},{key:"as_of",label:"As Of (date)",type:"text"},{key:"schema_version",label:"Schema Version",type:"text"},{key:"source",label:"Source Path",type:"text"}];return h.jsxs("div",{style:{padding:"12px 16px",display:"flex",flexDirection:"column",gap:"10px"},children:[s.map(({key:l,label:c,type:d})=>h.jsxs("div",{children:[h.jsx("label",{style:o,children:c}),h.jsx("input",{type:d,value:i[l]||"",onChange:u=>r(l,u.target.value),style:a})]},l)),h.jsxs("div",{children:[h.jsx("label",{style:o,children:"Temporal State"}),h.jsx("select",{value:i.temporal_state||"baseline",onChange:l=>r("temporal_state",l.target.value),style:a,children:["baseline","transition","target"].map(l=>h.jsx("option",{value:l,children:l},l))})]}),h.jsxs("div",{children:[h.jsx("label",{style:o,children:"Diagram Kind"}),h.jsxs("select",{value:i.diagramKind||"ea",onChange:l=>r("diagramKind",l.target.value),style:a,children:[h.jsx("option",{value:"ea",children:"ea (PRISM/EA)"}),h.jsx("option",{value:"infra",children:"infra (PRISM/I)"}),h.jsx("option",{value:"cy",children:"cy (PRISM/CY)"}),h.jsx("option",{value:"app",children:"app (PRISM/A)"})]})]})]})}const cS=["self","internal","external"],uS=["","active","decommissioning","decommissioned","planned"];function dS({artifact:e,index:n,total:t,onChange:i,onMove:r}){const a={flex:1,padding:"3px 6px",fontSize:"11px",fontFamily:"monospace",backgroundColor:"#fdf6e3",border:"1px solid #d4cdb8",borderRadius:"3px",color:"#586e75",outline:"none",minWidth:0},o={...a,flex:"0 0 auto",width:"auto"},s={display:"flex",alignItems:"center",gap:"6px",marginBottom:"4px",flexWrap:"wrap"},l={fontSize:"9px",color:"#93a1a1",fontWeight:600,textTransform:"uppercase",minWidth:"42px",letterSpacing:"0.06em",flexShrink:0};function c(d,u){i({...e,[d]:u||void 0})}return h.jsxs("div",{style:{backgroundColor:"#fdf6e3",border:"1px solid #d4cdb8",borderRadius:"6px",padding:"8px 10px",marginBottom:"8px"},children:[h.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",marginBottom:"6px"},children:[h.jsx("button",{onClick:()=>r(n,n-1),disabled:n===0,style:{...Pp,opacity:n===0?.3:1},title:"Move up",children:"▲"}),h.jsx("button",{onClick:()=>r(n,n+1),disabled:n===t-1,style:{...Pp,opacity:n===t-1?.3:1},title:"Move down",children:"▼"}),h.jsx("span",{style:{fontSize:"10px",fontFamily:"monospace",color:"#93a1a1",flex:1},children:e.id||"(no id)"})]}),h.jsxs("div",{style:s,children:[h.jsx("span",{style:l,children:"Icon"}),h.jsx("input",{value:e.icon||"",onChange:d=>c("icon",d.target.value),style:{...a,flex:"0 0 40px"}}),h.jsx("span",{style:l,children:"Label"}),h.jsx("input",{value:e.label||"",onChange:d=>c("label",d.target.value),style:a})]}),h.jsxs("div",{style:s,children:[h.jsx("span",{style:l,children:"Sub"}),h.jsx("input",{value:e.sub||"",onChange:d=>c("sub",d.target.value),style:a})]}),h.jsxs("div",{style:s,children:[h.jsx("span",{style:l,children:"Ownership"}),h.jsx("select",{value:e.ownership||"self",onChange:d=>c("ownership",d.target.value),style:o,children:cS.map(d=>h.jsx("option",{value:d,children:d},d))}),h.jsx("span",{style:l,children:"Status"}),h.jsx("select",{value:e.status||"",onChange:d=>c("status",d.target.value),style:o,children:uS.map(d=>h.jsx("option",{value:d,children:d||"(none)"},d))})]}),h.jsxs("div",{style:s,children:[h.jsx("span",{style:l,children:"Depends On"}),h.jsx("input",{value:(e.depends_on||[]).join(", "),onChange:d=>{const u=d.target.value.split(",").map(p=>p.trim()).filter(Boolean);i({...e,depends_on:u.length?u:void 0})},placeholder:"id-1, id-2, ...",style:{...a,fontFamily:"monospace",fontSize:"10px"}})]}),h.jsxs("div",{style:s,children:[h.jsx("span",{style:l,children:"Tags"}),h.jsx("input",{value:(e.tags||[]).join(", "),onChange:d=>{const u=d.target.value.split(",").map(p=>p.trim()).filter(Boolean);i({...e,tags:u.length?u:void 0})},placeholder:"tag1, tag2, ...",style:{...a,fontFamily:"monospace",fontSize:"10px"}})]})]})}const Pp={padding:"1px 5px",fontSize:"10px",background:"#eee8d5",border:"1px solid #d4cdb8",borderRadius:"3px",cursor:"pointer",color:"#586e75",lineHeight:1.4};function pS({parsed:e,onChange:n}){const t=(e==null?void 0:e.dimensions)||[];function i(a,o,s){const l=t.map((c,d)=>{if(d!==a)return c;const u=(c.artifacts||[]).map((p,f)=>f===o?s:p);return{...c,artifacts:u}});n(rc({...e,dimensions:l}))}function r(a,o,s){const l=t.map((c,d)=>{if(d!==a)return c;const u=[...c.artifacts||[]];if(s<0||s>=u.length)return c;const[p]=u.splice(o,1);return u.splice(s,0,p),{...c,artifacts:u}});n(rc({...e,dimensions:l}))}return t.length?h.jsx("div",{style:{padding:"10px 14px",overflowY:"auto"},children:t.map((a,o)=>h.jsxs("div",{style:{marginBottom:"16px"},children:[h.jsxs("div",{style:{fontSize:"11px",fontWeight:700,color:"#586e75",textTransform:"uppercase",letterSpacing:"0.08em",marginBottom:"8px",paddingBottom:"4px",borderBottom:"1px solid #d4cdb8"},children:[a.icon," ",a.name,h.jsx("span",{style:{color:"#93a1a1",fontWeight:400,textTransform:"none",marginLeft:"8px"},children:a.subtitle})]}),(a.artifacts||[]).map((s,l)=>h.jsx(dS,{artifact:s,index:l,total:a.artifacts.length,onChange:c=>i(o,l,c),onMove:(c,d)=>r(o,c,d)},s.id||l))]},a.id||o))}):h.jsx("div",{style:{padding:"16px",color:"#93a1a1",fontSize:"12px"},children:"No dimensions found. Check YAML structure."})}function fS({diagramKind:e,layerStates:n,onLayerChange:t}){var y,g;const i=e==="infra"?aS:e==="cy"?oS:e==="app"?sS:rS,[r,a]=V.useState(((y=i[0])==null?void 0:y.id)||"config"),[o,s]=V.useState("monaco"),l=V.useRef(null),c=n[r]||{raw:"",parsed:null,error:null},d=r==="config";function u(v,I){l.current={editor:v,monaco:I},I.editor.defineTheme("solarized-light",iS),I.editor.setTheme("solarized-light")}function p(v){t(r,v||"")}function f(v){t(r,v)}V.useEffect(()=>{if(l.current&&o==="monaco"){const{editor:v}=l.current,I=v.getModel();I&&I.getValue()!==c.raw&&v.executeEdits("tab-switch",[{range:I.getFullModelRange(),text:c.raw}])}},[r]);const m={display:"flex",gap:"2px",padding:"6px 8px 0",backgroundColor:"#e5dfc8",borderBottom:"1px solid #d4cdb8",flexWrap:"wrap"},b=v=>({padding:"4px 10px",fontSize:"11px",fontWeight:v?700:500,fontFamily:"monospace",backgroundColor:v?"#fdf6e3":"transparent",border:v?"1px solid #d4cdb8":"1px solid transparent",borderBottom:v?"1px solid #fdf6e3":"1px solid transparent",borderRadius:"4px 4px 0 0",cursor:"pointer",color:v?"#586e75":"#93a1a1",marginBottom:"-1px"}),A=v=>({padding:"3px 10px",fontSize:"10px",fontWeight:v?700:500,backgroundColor:v?"#eee8d5":"transparent",border:"1px solid",borderColor:v?"#d4cdb8":"transparent",borderRadius:"4px",cursor:"pointer",color:v?"#586e75":"#93a1a1"});return h.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100%",backgroundColor:"#fdf6e3",borderRight:"1px solid #d4cdb8"},children:[h.jsx("div",{style:m,children:i.map(v=>h.jsx("button",{onClick:()=>a(v.id),style:b(r===v.id),title:v.title,children:v.label},v.id))}),h.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",padding:"6px 10px",backgroundColor:"#fdf6e3",borderBottom:"1px solid #eee8d5"},children:[h.jsxs("span",{style:{fontSize:"10px",color:"#93a1a1",fontFamily:"monospace",flex:1},children:[(g=i.find(v=>v.id===r))==null?void 0:g.title,c.error&&h.jsx("span",{style:{color:"#dc322f",marginLeft:"8px"},children:"⚠ parse error"})]}),h.jsx("button",{onClick:()=>s("monaco"),style:A(o==="monaco"),children:"Editor"}),h.jsx("button",{onClick:()=>s("form"),style:A(o==="form"),children:"Form"})]}),h.jsx("div",{style:{flex:1,overflow:"hidden",position:"relative"},children:o==="monaco"?h.jsx(kx,{height:"100%",language:"yaml",value:c.raw,theme:"solarized-light",onMount:u,onChange:p,options:{fontSize:12,fontFamily:"'JetBrains Mono', 'Fira Code', 'Cascadia Code', monospace",minimap:{enabled:!1},lineNumbers:"on",scrollBeyondLastLine:!1,wordWrap:"on",tabSize:2,insertSpaces:!0,renderLineHighlight:"line",padding:{top:8,bottom:8},overviewRulerLanes:0,hideCursorInOverviewRuler:!0,scrollbar:{verticalScrollbarSize:8,horizontalScrollbarSize:8},bracketPairColorization:{enabled:!1}}}):h.jsx("div",{style:{height:"100%",overflowY:"auto"},children:d?h.jsx(lS,{parsed:c.parsed,raw:c.raw,onChange:f}):h.jsx(pS,{parsed:c.parsed,onChange:f})})})]})}const hS=[{id:"ea",label:"PRISM",name:"Enterprise Architecture",dims:"5 layers",tagline:"Five layers. The full enterprise as a navigable, git-native landscape."},{id:"infra",label:"PRISM/I",name:"Infrastructure",dims:"6 dimensions",tagline:"What infrastructure runs the enterprise, who owns it, and where it's going."},{id:"cy",label:"PRISM/CY",name:"Cybersecurity",dims:"5 dimensions",tagline:"Security posture as a structured landscape — not a checklist."},{id:"app",label:"PRISM/A",name:"Application Architecture",dims:"5 dimensions",tagline:"Bounded contexts, components, quality, and the full evolution arc."},{id:"mvp",label:"PRISM/MVP",name:"Product Validation",dims:"5 dimensions",tagline:"Hypotheses, bets, and learning velocity. Not a backlog."},{id:"dt",label:"PRISM/D",name:"Data Architecture",dims:"5 dimensions",tagline:"Data domains, flows, contracts, platforms, and governance — in one landscape."},{id:"ai",label:"PRISM/AI",name:"AI Architecture",dims:"5 dimensions",tagline:"Models, systems, lifecycle, trust controls, and production observability."}];function mS({onEnter:e,onEnterWith:n,onAbout:t,onViewSpec:i}){return h.jsxs("div",{className:"min-h-screen bg-sol-base3 flex flex-col",children:[h.jsxs("div",{className:"px-8 py-4 flex justify-between items-center border-b border-sol-base2",children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsxs("svg",{width:"22",height:"22",viewBox:"-5 -5 110 110",fill:"none",stroke:"#586e75",strokeWidth:"6",strokeLinejoin:"round",className:"opacity-80",children:[h.jsx("polygon",{points:"50,0 93.3,25 93.3,75 50,100 6.7,75 6.7,25"}),h.jsx("polygon",{points:"50,25 71.65,37.5 71.65,62.5 50,75 28.35,62.5 28.35,37.5"}),h.jsx("line",{x1:"50",y1:"0",x2:"50",y2:"25"}),h.jsx("line",{x1:"93.3",y1:"25",x2:"71.65",y2:"37.5"}),h.jsx("line",{x1:"93.3",y1:"75",x2:"71.65",y2:"62.5"}),h.jsx("line",{x1:"50",y1:"100",x2:"50",y2:"75"}),h.jsx("line",{x1:"6.7",y1:"75",x2:"28.35",y2:"62.5"}),h.jsx("line",{x1:"6.7",y1:"25",x2:"28.35",y2:"37.5"})]}),h.jsx("span",{className:"font-clay font-bold text-sol-base00 text-base tracking-wide",children:"PRISM"})]}),h.jsx("button",{onClick:t,className:"font-clay font-semibold text-sm text-sol-base1 hover:text-sol-base00 transition-colors",children:"About"})]}),h.jsxs("div",{className:"flex flex-col items-center justify-center px-8 pt-16 pb-12 text-center",children:[h.jsxs("svg",{width:"56",height:"56",viewBox:"-5 -5 110 110",fill:"none",stroke:"#586e75",strokeWidth:"5",strokeLinejoin:"round",className:"mb-5 opacity-80",children:[h.jsx("polygon",{points:"50,0 93.3,25 93.3,75 50,100 6.7,75 6.7,25"}),h.jsx("polygon",{points:"50,25 71.65,37.5 71.65,62.5 50,75 28.35,62.5 28.35,37.5"}),h.jsx("line",{x1:"50",y1:"0",x2:"50",y2:"25"}),h.jsx("line",{x1:"93.3",y1:"25",x2:"71.65",y2:"37.5"}),h.jsx("line",{x1:"93.3",y1:"75",x2:"71.65",y2:"62.5"}),h.jsx("line",{x1:"50",y1:"100",x2:"50",y2:"75"}),h.jsx("line",{x1:"6.7",y1:"75",x2:"28.35",y2:"62.5"}),h.jsx("line",{x1:"6.7",y1:"25",x2:"28.35",y2:"37.5"})]}),h.jsx("h1",{className:"font-clay font-bold text-6xl text-sol-base00 leading-none tracking-wide mb-2",children:"PRISM"}),h.jsx("p",{className:"font-clay text-lg text-sol-base1 mb-10",children:"Enterprise Architecture Frameworks"}),h.jsxs("div",{className:"max-w-2xl text-left space-y-4 mb-10",children:[h.jsx("p",{className:"font-clay text-2xl font-semibold text-sol-base00 leading-snug",children:"Enterprise architecture that lives in your repository."}),h.jsx("p",{className:"font-body text-sol-base01 text-base leading-relaxed",children:"PRISM lets you define your enterprise as plain-text files — systems, capabilities, infrastructure, security posture, data flows, AI architecture, product bets. Commit them to git. Review them in pull requests. Reason about the full picture without a modeling tool, a proprietary database, or a dedicated consultant."}),h.jsx("p",{className:"font-body text-sol-base01 text-base leading-relaxed",children:"The name describes what the framework does. A prism refracts a single beam of light into its constituent parts. PRISM refracts a complex enterprise into clear layers — each answering a distinct question, all composable into a landscape you can actually reason about."}),h.jsx("p",{className:"font-body text-sol-base1 text-sm leading-relaxed",children:"Simple enough to start in an afternoon. Deep enough to govern a global enterprise. Seven frameworks cover every architecture domain — each with its own dimensions, schemas, and examples, all sharing the same foundation."}),h.jsx("div",{className:"flex gap-2 pt-1 flex-wrap",children:["Source-first","Git-native","Schema-validated","Plain-text YAML","No proprietary tooling"].map(r=>h.jsx("span",{className:"font-body text-xs px-2.5 py-1 rounded-full bg-sol-base2 text-sol-base1",children:r},r))}),h.jsx("p",{className:"font-body text-sol-base1 text-xs leading-relaxed opacity-70 pt-2",children:"Note: PRISM EA Framework is an independent framework. It is not a revision or successor of the 1986 PRISM."})]}),h.jsx("button",{onClick:e,className:"font-clay font-semibold text-base px-6 py-3 rounded-xl bg-sol-base00 text-sol-base3 hover:opacity-90 transition-opacity shadow-sm",children:"Open Landscape Viewer"})]}),h.jsx("div",{className:"border-t border-sol-base2 mx-8"}),h.jsxs("div",{className:"px-8 py-12",children:[h.jsx("p",{className:"font-clay font-semibold text-sol-base1 text-xs uppercase tracking-widest mb-6 text-center",children:"The family"}),h.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-6xl mx-auto",children:hS.map(r=>h.jsxs("div",{className:"bg-sol-base2 rounded-2xl px-5 py-4 flex flex-col gap-2",children:[h.jsxs("div",{className:"flex items-baseline gap-2",children:[h.jsx("span",{className:"font-clay font-bold text-lg text-sol-base00 leading-none",children:r.label}),h.jsx("span",{className:"font-body text-xs text-sol-base1",children:r.dims})]}),h.jsx("p",{className:"font-clay text-sm text-sol-base01 leading-snug",children:r.name}),h.jsx("p",{className:"font-body text-xs text-sol-base1 leading-relaxed flex-1",children:r.tagline}),h.jsxs("div",{className:"flex gap-2 mt-1 flex-wrap",children:[h.jsx("button",{onClick:()=>n(r.id),className:"font-clay font-semibold text-xs px-3 py-1.5 rounded-lg bg-sol-base00 text-sol-base3 hover:opacity-90 transition-opacity",children:"View landscape"}),h.jsx("button",{onClick:()=>i(r.id),className:"font-clay font-semibold text-xs px-3 py-1.5 rounded-lg text-sol-base1 hover:text-sol-base00 transition-colors border border-sol-base1",children:"View spec"})]})]},r.id))})]}),h.jsxs("div",{className:"mt-auto border-t border-sol-base2 px-8 py-5 flex justify-between items-center flex-wrap gap-2",children:[h.jsx("span",{className:"font-body text-xs text-sol-base1 opacity-60",children:"PRISM Frameworks · v1.0"}),h.jsx("span",{className:"font-body text-xs text-sol-base1 opacity-60",children:"Source-first · Git-native · Schema-validated"})]})]})}function gS({onBack:e}){return h.jsxs("div",{className:"min-h-screen bg-sol-base3 flex flex-col",children:[h.jsxs("div",{className:"px-8 py-5 border-b border-sol-base2 flex items-center gap-4",children:[h.jsx("button",{onClick:e,className:"font-clay font-semibold text-sm text-sol-base1 hover:text-sol-base00 transition-colors",children:"← Back"}),h.jsxs("svg",{width:"24",height:"24",viewBox:"-5 -5 110 110",fill:"none",stroke:"#586e75",strokeWidth:"6",strokeLinejoin:"round",className:"opacity-70",children:[h.jsx("polygon",{points:"50,0 93.3,25 93.3,75 50,100 6.7,75 6.7,25"}),h.jsx("polygon",{points:"50,25 71.65,37.5 71.65,62.5 50,75 28.35,62.5 28.35,37.5"}),h.jsx("line",{x1:"50",y1:"0",x2:"50",y2:"25"}),h.jsx("line",{x1:"93.3",y1:"25",x2:"71.65",y2:"37.5"}),h.jsx("line",{x1:"93.3",y1:"75",x2:"71.65",y2:"62.5"}),h.jsx("line",{x1:"50",y1:"100",x2:"50",y2:"75"}),h.jsx("line",{x1:"6.7",y1:"75",x2:"28.35",y2:"62.5"}),h.jsx("line",{x1:"6.7",y1:"25",x2:"28.35",y2:"37.5"})]}),h.jsx("span",{className:"font-clay font-bold text-sol-base00",children:"PRISM"})]}),h.jsx("div",{className:"flex-1 flex justify-center px-8 py-16",children:h.jsxs("div",{className:"max-w-2xl w-full",children:[h.jsx("h2",{className:"font-clay font-bold text-3xl text-sol-base00 mb-10",children:"Why I built this"}),h.jsxs("div",{className:"font-body text-sol-base01 text-base leading-relaxed space-y-5",children:[h.jsx("p",{children:`Architecture has a rot problem. You commission a diagram, someone draws it in Visio or a SaaS tool, and it lives behind a login or in a shared drive. Six months later, half of what it describes has changed. The diagram hasn't. When someone finally asks for "the current architecture," they get a stale file — or a meeting to schedule a meeting.`}),h.jsx("p",{children:"That's not a tool problem. It's a philosophy problem. Architecture was treated as documentation when it should have been treated as source code."}),h.jsx("p",{children:"I built PRISM because I wanted enterprise architecture to work the way code works. You don't ask permission to read the codebase. You don't schedule a meeting to find out what a system does. You open the repository."}),h.jsx("p",{children:"PRISM brings that same discipline to enterprise architecture: your organization's structure, systems, data flows, security posture, infrastructure, AI architecture, and product decisions — all as plain-text YAML files, committed to git, versioned, reviewable, and always current. No proprietary tooling. No centralized gatekeeper. No diagram that only one person knows how to update."}),h.jsx("p",{children:"Architecture should be a source of truth, not a snapshot. That's what PRISM is for."})]}),h.jsxs("div",{className:"mt-12 pt-8 border-t border-sol-base2",children:[h.jsx("p",{className:"font-clay text-sol-base00 font-semibold text-base mb-1",children:"Palakurthi, V.G."}),h.jsxs("p",{className:"font-body text-sol-base1 text-sm italic leading-relaxed",children:["Palakurthi, V.G. (2025). ",h.jsx("em",{children:"PRISM: Enterprise architecture frameworks for the source-first era."})]})]}),h.jsx("div",{className:"mt-6 pt-6 border-t border-sol-base2",children:h.jsx("p",{className:"font-body text-sol-base1 text-xs leading-relaxed opacity-70",children:"Note: PRISM EA Framework is an independent framework. It is not a revision or successor of the 1986 PRISM."})})]})})]})}function yS(e,n){const t={};return(e[e.length-1]===""?[...e,""]:e).join((t.padRight?" ":"")+","+(t.padLeft===!1?"":" ")).trim()}const vS=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,bS=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,wS={};function _p(e,n){return(wS.jsx?bS:vS).test(e)}const xS=/[ \t\n\f\r]/g;function kS(e){return typeof e=="object"?e.type==="text"?Ep(e.value):!1:Ep(e)}function Ep(e){return e.replace(xS,"")===""}class Zr{constructor(n,t,i){this.normal=t,this.property=n,i&&(this.space=i)}}Zr.prototype.normal={};Zr.prototype.property={};Zr.prototype.space=void 0;function vg(e,n){const t={},i={};for(const r of e)Object.assign(t,r.property),Object.assign(i,r.normal);return new Zr(t,i,n)}function ac(e){return e.toLowerCase()}class tn{constructor(n,t){this.attribute=t,this.property=n}}tn.prototype.attribute="";tn.prototype.booleanish=!1;tn.prototype.boolean=!1;tn.prototype.commaOrSpaceSeparated=!1;tn.prototype.commaSeparated=!1;tn.prototype.defined=!1;tn.prototype.mustUseProperty=!1;tn.prototype.number=!1;tn.prototype.overloadedBoolean=!1;tn.prototype.property="";tn.prototype.spaceSeparated=!1;tn.prototype.space=void 0;let SS=0;const K=ni(),ke=ni(),oc=ni(),L=ni(),ce=ni(),Ht=ni(),an=ni();function ni(){return 2**++SS}const sc=Object.freeze(Object.defineProperty({__proto__:null,boolean:K,booleanish:ke,commaOrSpaceSeparated:an,commaSeparated:Ht,number:L,overloadedBoolean:oc,spaceSeparated:ce},Symbol.toStringTag,{value:"Module"})),Ms=Object.keys(sc);class Iu extends tn{constructor(n,t,i,r){let a=-1;if(super(n,t),Tp(this,"space",r),typeof i=="number")for(;++a<Ms.length;){const o=Ms[a];Tp(this,Ms[a],(i&sc[o])===sc[o])}}}Iu.prototype.defined=!0;function Tp(e,n,t){t&&(e[n]=t)}function Wi(e){const n={},t={};for(const[i,r]of Object.entries(e.properties)){const a=new Iu(i,e.transform(e.attributes||{},i),r,e.space);e.mustUseProperty&&e.mustUseProperty.includes(i)&&(a.mustUseProperty=!0),n[i]=a,t[ac(i)]=i,t[ac(a.attribute)]=i}return new Zr(n,t,e.space)}const bg=Wi({properties:{ariaActiveDescendant:null,ariaAtomic:ke,ariaAutoComplete:null,ariaBusy:ke,ariaChecked:ke,ariaColCount:L,ariaColIndex:L,ariaColSpan:L,ariaControls:ce,ariaCurrent:null,ariaDescribedBy:ce,ariaDetails:null,ariaDisabled:ke,ariaDropEffect:ce,ariaErrorMessage:null,ariaExpanded:ke,ariaFlowTo:ce,ariaGrabbed:ke,ariaHasPopup:null,ariaHidden:ke,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:ce,ariaLevel:L,ariaLive:null,ariaModal:ke,ariaMultiLine:ke,ariaMultiSelectable:ke,ariaOrientation:null,ariaOwns:ce,ariaPlaceholder:null,ariaPosInSet:L,ariaPressed:ke,ariaReadOnly:ke,ariaRelevant:null,ariaRequired:ke,ariaRoleDescription:ce,ariaRowCount:L,ariaRowIndex:L,ariaRowSpan:L,ariaSelected:ke,ariaSetSize:L,ariaSort:null,ariaValueMax:L,ariaValueMin:L,ariaValueNow:L,ariaValueText:null,role:null},transform(e,n){return n==="role"?n:"aria-"+n.slice(4).toLowerCase()}});function wg(e,n){return n in e?e[n]:n}function xg(e,n){return wg(e,n.toLowerCase())}const IS=Wi({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:Ht,acceptCharset:ce,accessKey:ce,action:null,allow:null,allowFullScreen:K,allowPaymentRequest:K,allowUserMedia:K,alpha:K,alt:null,as:null,async:K,autoCapitalize:null,autoComplete:ce,autoFocus:K,autoPlay:K,blocking:ce,capture:null,charSet:null,checked:K,cite:null,className:ce,closedBy:null,colorSpace:null,cols:L,colSpan:L,command:null,commandFor:null,content:null,contentEditable:ke,controls:K,controlsList:ce,coords:L|Ht,crossOrigin:null,data:null,dateTime:null,decoding:null,default:K,defer:K,dir:null,dirName:null,disabled:K,download:oc,draggable:ke,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:K,formTarget:null,headers:ce,height:L,hidden:oc,high:L,href:null,hrefLang:null,htmlFor:ce,httpEquiv:ce,id:null,imageSizes:null,imageSrcSet:null,inert:K,inputMode:null,integrity:null,is:null,isMap:K,itemId:null,itemProp:ce,itemRef:ce,itemScope:K,itemType:ce,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:K,low:L,manifest:null,max:null,maxLength:L,media:null,method:null,min:null,minLength:L,multiple:K,muted:K,name:null,nonce:null,noModule:K,noValidate:K,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:K,optimum:L,pattern:null,ping:ce,placeholder:null,playsInline:K,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:K,referrerPolicy:null,rel:ce,required:K,reversed:K,rows:L,rowSpan:L,sandbox:ce,scope:null,scoped:K,seamless:K,selected:K,shadowRootClonable:K,shadowRootCustomElementRegistry:K,shadowRootDelegatesFocus:K,shadowRootMode:null,shadowRootSerializable:K,shape:null,size:L,sizes:null,slot:null,span:L,spellCheck:ke,src:null,srcDoc:null,srcLang:null,srcSet:null,start:L,step:null,style:null,tabIndex:L,target:null,title:null,translate:null,type:null,typeMustMatch:K,useMap:null,value:ke,width:L,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:ce,axis:null,background:null,bgColor:null,border:L,borderColor:null,bottomMargin:L,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:K,declare:K,event:null,face:null,frame:null,frameBorder:null,hSpace:L,leftMargin:L,link:null,longDesc:null,lowSrc:null,marginHeight:L,marginWidth:L,noResize:K,noHref:K,noShade:K,noWrap:K,object:null,profile:null,prompt:null,rev:null,rightMargin:L,rules:null,scheme:null,scrolling:ke,standby:null,summary:null,text:null,topMargin:L,valueType:null,version:null,vAlign:null,vLink:null,vSpace:L,allowTransparency:null,autoCorrect:null,autoSave:null,credentialless:K,disablePictureInPicture:K,disableRemotePlayback:K,exportParts:Ht,part:ce,prefix:null,property:null,results:L,security:null,unselectable:null},space:"html",transform:xg}),AS=Wi({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",maskType:"mask-type",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:an,accentHeight:L,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:L,amplitude:L,arabicForm:null,ascent:L,attributeName:null,attributeType:null,azimuth:L,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:L,by:null,calcMode:null,capHeight:L,className:ce,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:L,diffuseConstant:L,direction:null,display:null,dur:null,divisor:L,dominantBaseline:null,download:K,dx:null,dy:null,edgeMode:null,editable:null,elevation:L,enableBackground:null,end:null,event:null,exponent:L,externalResourcesRequired:null,fill:null,fillOpacity:L,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:Ht,g2:Ht,glyphName:Ht,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:L,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:L,horizOriginX:L,horizOriginY:L,id:null,ideographic:L,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:L,k:L,k1:L,k2:L,k3:L,k4:L,kernelMatrix:an,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:L,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskType:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:L,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:L,overlineThickness:L,paintOrder:null,panose1:null,path:null,pathLength:L,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:ce,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:L,pointsAtY:L,pointsAtZ:L,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:an,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:an,rev:an,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:an,requiredFeatures:an,requiredFonts:an,requiredFormats:an,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:L,specularExponent:L,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:L,strikethroughThickness:L,string:null,stroke:null,strokeDashArray:an,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:L,strokeOpacity:L,strokeWidth:null,style:null,surfaceScale:L,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:an,tabIndex:L,tableValues:null,target:null,targetX:L,targetY:L,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:an,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:L,underlineThickness:L,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:L,values:null,vAlphabetic:L,vMathematical:L,vectorEffect:null,vHanging:L,vIdeographic:L,version:null,vertAdvY:L,vertOriginX:L,vertOriginY:L,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:L,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:wg}),kg=Wi({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(e,n){return"xlink:"+n.slice(5).toLowerCase()}}),Sg=Wi({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:xg}),Ig=Wi({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(e,n){return"xml:"+n.slice(3).toLowerCase()}}),CS={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},PS=/[A-Z]/g,Rp=/-[a-z]/g,_S=/^data[-\w.:]+$/i;function ES(e,n){const t=ac(n);let i=n,r=tn;if(t in e.normal)return e.property[e.normal[t]];if(t.length>4&&t.slice(0,4)==="data"&&_S.test(n)){if(n.charAt(4)==="-"){const a=n.slice(5).replace(Rp,RS);i="data"+a.charAt(0).toUpperCase()+a.slice(1)}else{const a=n.slice(4);if(!Rp.test(a)){let o=a.replace(PS,TS);o.charAt(0)!=="-"&&(o="-"+o),n="data"+o}}r=Iu}return new r(i,n)}function TS(e){return"-"+e.toLowerCase()}function RS(e){return e.charAt(1).toUpperCase()}const MS=vg([bg,IS,kg,Sg,Ig],"html"),Au=vg([bg,AS,kg,Sg,Ig],"svg");function DS(e){return e.join(" ").trim()}var Cu={},Mp=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,LS=/\n/g,NS=/^\s*/,jS=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,OS=/^:\s*/,FS=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,zS=/^[;\s]*/,BS=/^\s+|\s+$/g,WS=`
`,Dp="/",Lp="*",Ot="",VS="comment",HS="declaration";function $S(e,n){if(typeof e!="string")throw new TypeError("First argument must be a string");if(!e)return[];n=n||{};var t=1,i=1;function r(m){var b=m.match(LS);b&&(t+=b.length);var A=m.lastIndexOf(WS);i=~A?m.length-A:i+m.length}function a(){var m={line:t,column:i};return function(b){return b.position=new o(m),c(),b}}function o(m){this.start=m,this.end={line:t,column:i},this.source=n.source}o.prototype.content=e;function s(m){var b=new Error(n.source+":"+t+":"+i+": "+m);if(b.reason=m,b.filename=n.source,b.line=t,b.column=i,b.source=e,!n.silent)throw b}function l(m){var b=m.exec(e);if(b){var A=b[0];return r(A),e=e.slice(A.length),b}}function c(){l(NS)}function d(m){var b;for(m=m||[];b=u();)b!==!1&&m.push(b);return m}function u(){var m=a();if(!(Dp!=e.charAt(0)||Lp!=e.charAt(1))){for(var b=2;Ot!=e.charAt(b)&&(Lp!=e.charAt(b)||Dp!=e.charAt(b+1));)++b;if(b+=2,Ot===e.charAt(b-1))return s("End of comment missing");var A=e.slice(2,b-2);return i+=2,r(A),e=e.slice(b),i+=2,m({type:VS,comment:A})}}function p(){var m=a(),b=l(jS);if(b){if(u(),!l(OS))return s("property missing ':'");var A=l(FS),y=m({type:HS,property:Np(b[0].replace(Mp,Ot)),value:A?Np(A[0].replace(Mp,Ot)):Ot});return l(zS),y}}function f(){var m=[];d(m);for(var b;b=p();)b!==!1&&(m.push(b),d(m));return m}return c(),f()}function Np(e){return e?e.replace(BS,Ot):Ot}var US=$S,qS=$a&&$a.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Cu,"__esModule",{value:!0});Cu.default=GS;const YS=qS(US);function GS(e,n){let t=null;if(!e||typeof e!="string")return t;const i=(0,YS.default)(e),r=typeof n=="function";return i.forEach(a=>{if(a.type!=="declaration")return;const{property:o,value:s}=a;r?n(o,s,a):s&&(t=t||{},t[o]=s)}),t}var Uo={};Object.defineProperty(Uo,"__esModule",{value:!0});Uo.camelCase=void 0;var KS=/^--[a-zA-Z0-9_-]+$/,QS=/-([a-z])/g,XS=/^[^-]+$/,JS=/^-(webkit|moz|ms|o|khtml)-/,ZS=/^-(ms)-/,e1=function(e){return!e||XS.test(e)||KS.test(e)},n1=function(e,n){return n.toUpperCase()},jp=function(e,n){return"".concat(n,"-")},t1=function(e,n){return n===void 0&&(n={}),e1(e)?e:(e=e.toLowerCase(),n.reactCompat?e=e.replace(ZS,jp):e=e.replace(JS,jp),e.replace(QS,n1))};Uo.camelCase=t1;var i1=$a&&$a.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},r1=i1(Cu),a1=Uo;function lc(e,n){var t={};return!e||typeof e!="string"||(0,r1.default)(e,function(i,r){i&&r&&(t[(0,a1.camelCase)(i,n)]=r)}),t}lc.default=lc;var o1=lc;const s1=yc(o1),Ag=Cg("end"),Pu=Cg("start");function Cg(e){return n;function n(t){const i=t&&t.position&&t.position[e]||{};if(typeof i.line=="number"&&i.line>0&&typeof i.column=="number"&&i.column>0)return{line:i.line,column:i.column,offset:typeof i.offset=="number"&&i.offset>-1?i.offset:void 0}}}function l1(e){const n=Pu(e),t=Ag(e);if(n&&t)return{start:n,end:t}}function wr(e){return!e||typeof e!="object"?"":"position"in e||"type"in e?Op(e.position):"start"in e||"end"in e?Op(e):"line"in e||"column"in e?cc(e):""}function cc(e){return Fp(e&&e.line)+":"+Fp(e&&e.column)}function Op(e){return cc(e&&e.start)+"-"+cc(e&&e.end)}function Fp(e){return e&&typeof e=="number"?e:1}class We extends Error{constructor(n,t,i){super(),typeof t=="string"&&(i=t,t=void 0);let r="",a={},o=!1;if(t&&("line"in t&&"column"in t?a={place:t}:"start"in t&&"end"in t?a={place:t}:"type"in t?a={ancestors:[t],place:t.position}:a={...t}),typeof n=="string"?r=n:!a.cause&&n&&(o=!0,r=n.message,a.cause=n),!a.ruleId&&!a.source&&typeof i=="string"){const l=i.indexOf(":");l===-1?a.ruleId=i:(a.source=i.slice(0,l),a.ruleId=i.slice(l+1))}if(!a.place&&a.ancestors&&a.ancestors){const l=a.ancestors[a.ancestors.length-1];l&&(a.place=l.position)}const s=a.place&&"start"in a.place?a.place.start:a.place;this.ancestors=a.ancestors||void 0,this.cause=a.cause||void 0,this.column=s?s.column:void 0,this.fatal=void 0,this.file="",this.message=r,this.line=s?s.line:void 0,this.name=wr(a.place)||"1:1",this.place=a.place||void 0,this.reason=this.message,this.ruleId=a.ruleId||void 0,this.source=a.source||void 0,this.stack=o&&a.cause&&typeof a.cause.stack=="string"?a.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}We.prototype.file="";We.prototype.name="";We.prototype.reason="";We.prototype.message="";We.prototype.stack="";We.prototype.column=void 0;We.prototype.line=void 0;We.prototype.ancestors=void 0;We.prototype.cause=void 0;We.prototype.fatal=void 0;We.prototype.place=void 0;We.prototype.ruleId=void 0;We.prototype.source=void 0;const _u={}.hasOwnProperty,c1=new Map,u1=/[A-Z]/g,d1=new Set(["table","tbody","thead","tfoot","tr"]),p1=new Set(["td","th"]),Pg="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function f1(e,n){if(!n||n.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const t=n.filePath||void 0;let i;if(n.development){if(typeof n.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");i=x1(t,n.jsxDEV)}else{if(typeof n.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof n.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");i=w1(t,n.jsx,n.jsxs)}const r={Fragment:n.Fragment,ancestors:[],components:n.components||{},create:i,elementAttributeNameCase:n.elementAttributeNameCase||"react",evaluater:n.createEvaluater?n.createEvaluater():void 0,filePath:t,ignoreInvalidStyle:n.ignoreInvalidStyle||!1,passKeys:n.passKeys!==!1,passNode:n.passNode||!1,schema:n.space==="svg"?Au:MS,stylePropertyNameCase:n.stylePropertyNameCase||"dom",tableCellAlignToStyle:n.tableCellAlignToStyle!==!1},a=_g(r,e,void 0);return a&&typeof a!="string"?a:r.create(e,r.Fragment,{children:a||void 0},void 0)}function _g(e,n,t){if(n.type==="element")return h1(e,n,t);if(n.type==="mdxFlowExpression"||n.type==="mdxTextExpression")return m1(e,n);if(n.type==="mdxJsxFlowElement"||n.type==="mdxJsxTextElement")return y1(e,n,t);if(n.type==="mdxjsEsm")return g1(e,n);if(n.type==="root")return v1(e,n,t);if(n.type==="text")return b1(e,n)}function h1(e,n,t){const i=e.schema;let r=i;n.tagName.toLowerCase()==="svg"&&i.space==="html"&&(r=Au,e.schema=r),e.ancestors.push(n);const a=Tg(e,n.tagName,!1),o=k1(e,n);let s=Tu(e,n);return d1.has(n.tagName)&&(s=s.filter(function(l){return typeof l=="string"?!kS(l):!0})),Eg(e,o,a,n),Eu(o,s),e.ancestors.pop(),e.schema=i,e.create(n,a,o,t)}function m1(e,n){if(n.data&&n.data.estree&&e.evaluater){const i=n.data.estree.body[0];return i.type,e.evaluater.evaluateExpression(i.expression)}Ur(e,n.position)}function g1(e,n){if(n.data&&n.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(n.data.estree);Ur(e,n.position)}function y1(e,n,t){const i=e.schema;let r=i;n.name==="svg"&&i.space==="html"&&(r=Au,e.schema=r),e.ancestors.push(n);const a=n.name===null?e.Fragment:Tg(e,n.name,!0),o=S1(e,n),s=Tu(e,n);return Eg(e,o,a,n),Eu(o,s),e.ancestors.pop(),e.schema=i,e.create(n,a,o,t)}function v1(e,n,t){const i={};return Eu(i,Tu(e,n)),e.create(n,e.Fragment,i,t)}function b1(e,n){return n.value}function Eg(e,n,t,i){typeof t!="string"&&t!==e.Fragment&&e.passNode&&(n.node=i)}function Eu(e,n){if(n.length>0){const t=n.length>1?n:n[0];t&&(e.children=t)}}function w1(e,n,t){return i;function i(r,a,o,s){const c=Array.isArray(o.children)?t:n;return s?c(a,o,s):c(a,o)}}function x1(e,n){return t;function t(i,r,a,o){const s=Array.isArray(a.children),l=Pu(i);return n(r,a,o,s,{columnNumber:l?l.column-1:void 0,fileName:e,lineNumber:l?l.line:void 0},void 0)}}function k1(e,n){const t={};let i,r;for(r in n.properties)if(r!=="children"&&_u.call(n.properties,r)){const a=I1(e,r,n.properties[r]);if(a){const[o,s]=a;e.tableCellAlignToStyle&&o==="align"&&typeof s=="string"&&p1.has(n.tagName)?i=s:t[o]=s}}if(i){const a=t.style||(t.style={});a[e.stylePropertyNameCase==="css"?"text-align":"textAlign"]=i}return t}function S1(e,n){const t={};for(const i of n.attributes)if(i.type==="mdxJsxExpressionAttribute")if(i.data&&i.data.estree&&e.evaluater){const a=i.data.estree.body[0];a.type;const o=a.expression;o.type;const s=o.properties[0];s.type,Object.assign(t,e.evaluater.evaluateExpression(s.argument))}else Ur(e,n.position);else{const r=i.name;let a;if(i.value&&typeof i.value=="object")if(i.value.data&&i.value.data.estree&&e.evaluater){const s=i.value.data.estree.body[0];s.type,a=e.evaluater.evaluateExpression(s.expression)}else Ur(e,n.position);else a=i.value===null?!0:i.value;t[r]=a}return t}function Tu(e,n){const t=[];let i=-1;const r=e.passKeys?new Map:c1;for(;++i<n.children.length;){const a=n.children[i];let o;if(e.passKeys){const l=a.type==="element"?a.tagName:a.type==="mdxJsxFlowElement"||a.type==="mdxJsxTextElement"?a.name:void 0;if(l){const c=r.get(l)||0;o=l+"-"+c,r.set(l,c+1)}}const s=_g(e,a,o);s!==void 0&&t.push(s)}return t}function I1(e,n,t){const i=ES(e.schema,n);if(!(t==null||typeof t=="number"&&Number.isNaN(t))){if(Array.isArray(t)&&(t=i.commaSeparated?yS(t):DS(t)),i.property==="style"){let r=typeof t=="object"?t:A1(e,String(t));return e.stylePropertyNameCase==="css"&&(r=C1(r)),["style",r]}return[e.elementAttributeNameCase==="react"&&i.space?CS[i.property]||i.property:i.attribute,t]}}function A1(e,n){try{return s1(n,{reactCompat:!0})}catch(t){if(e.ignoreInvalidStyle)return{};const i=t,r=new We("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:i,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw r.file=e.filePath||void 0,r.url=Pg+"#cannot-parse-style-attribute",r}}function Tg(e,n,t){let i;if(!t)i={type:"Literal",value:n};else if(n.includes(".")){const r=n.split(".");let a=-1,o;for(;++a<r.length;){const s=_p(r[a])?{type:"Identifier",name:r[a]}:{type:"Literal",value:r[a]};o=o?{type:"MemberExpression",object:o,property:s,computed:!!(a&&s.type==="Literal"),optional:!1}:s}i=o}else i=_p(n)&&!/^[a-z]/.test(n)?{type:"Identifier",name:n}:{type:"Literal",value:n};if(i.type==="Literal"){const r=i.value;return _u.call(e.components,r)?e.components[r]:r}if(e.evaluater)return e.evaluater.evaluateExpression(i);Ur(e)}function Ur(e,n){const t=new We("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:n,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw t.file=e.filePath||void 0,t.url=Pg+"#cannot-handle-mdx-estrees-without-createevaluater",t}function C1(e){const n={};let t;for(t in e)_u.call(e,t)&&(n[P1(t)]=e[t]);return n}function P1(e){let n=e.replace(u1,_1);return n.slice(0,3)==="ms-"&&(n="-"+n),n}function _1(e){return"-"+e.toLowerCase()}const Ds={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},E1={};function Ru(e,n){const t=E1,i=typeof t.includeImageAlt=="boolean"?t.includeImageAlt:!0,r=typeof t.includeHtml=="boolean"?t.includeHtml:!0;return Rg(e,i,r)}function Rg(e,n,t){if(T1(e)){if("value"in e)return e.type==="html"&&!t?"":e.value;if(n&&"alt"in e&&e.alt)return e.alt;if("children"in e)return zp(e.children,n,t)}return Array.isArray(e)?zp(e,n,t):""}function zp(e,n,t){const i=[];let r=-1;for(;++r<e.length;)i[r]=Rg(e[r],n,t);return i.join("")}function T1(e){return!!(e&&typeof e=="object")}const Bp=document.createElement("i");function Mu(e){const n="&"+e+";";Bp.innerHTML=n;const t=Bp.textContent;return t.charCodeAt(t.length-1)===59&&e!=="semi"||t===n?!1:t}function dn(e,n,t,i){const r=e.length;let a=0,o;if(n<0?n=-n>r?0:r+n:n=n>r?r:n,t=t>0?t:0,i.length<1e4)o=Array.from(i),o.unshift(n,t),e.splice(...o);else for(t&&e.splice(n,t);a<i.length;)o=i.slice(a,a+1e4),o.unshift(n,0),e.splice(...o),a+=1e4,n+=1e4}function yn(e,n){return e.length>0?(dn(e,e.length,0,n),e):n}const Wp={}.hasOwnProperty;function Mg(e){const n={};let t=-1;for(;++t<e.length;)R1(n,e[t]);return n}function R1(e,n){let t;for(t in n){const r=(Wp.call(e,t)?e[t]:void 0)||(e[t]={}),a=n[t];let o;if(a)for(o in a){Wp.call(r,o)||(r[o]=[]);const s=a[o];M1(r[o],Array.isArray(s)?s:s?[s]:[])}}}function M1(e,n){let t=-1;const i=[];for(;++t<n.length;)(n[t].add==="after"?e:i).push(n[t]);dn(e,0,0,i)}function Dg(e,n){const t=Number.parseInt(e,n);return t<9||t===11||t>13&&t<32||t>126&&t<160||t>55295&&t<57344||t>64975&&t<65008||(t&65535)===65535||(t&65535)===65534||t>1114111?"�":String.fromCodePoint(t)}function En(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const $e=Et(/[A-Za-z]/),Oe=Et(/[\dA-Za-z]/),D1=Et(/[#-'*+\--9=?A-Z^-~]/);function wo(e){return e!==null&&(e<32||e===127)}const uc=Et(/\d/),L1=Et(/[\dA-Fa-f]/),N1=Et(/[!-/:-@[-`{-~]/);function Y(e){return e!==null&&e<-2}function ue(e){return e!==null&&(e<0||e===32)}function J(e){return e===-2||e===-1||e===32}const qo=Et(new RegExp("\\p{P}|\\p{S}","u")),Jt=Et(/\s/);function Et(e){return n;function n(t){return t!==null&&t>-1&&e.test(String.fromCharCode(t))}}function Vi(e){const n=[];let t=-1,i=0,r=0;for(;++t<e.length;){const a=e.charCodeAt(t);let o="";if(a===37&&Oe(e.charCodeAt(t+1))&&Oe(e.charCodeAt(t+2)))r=2;else if(a<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(a))||(o=String.fromCharCode(a));else if(a>55295&&a<57344){const s=e.charCodeAt(t+1);a<56320&&s>56319&&s<57344?(o=String.fromCharCode(a,s),r=1):o="�"}else o=String.fromCharCode(a);o&&(n.push(e.slice(i,t),encodeURIComponent(o)),i=t+r+1,o=""),r&&(t+=r,r=0)}return n.join("")+e.slice(i)}function re(e,n,t,i){const r=i?i-1:Number.POSITIVE_INFINITY;let a=0;return o;function o(l){return J(l)?(e.enter(t),s(l)):n(l)}function s(l){return J(l)&&a++<r?(e.consume(l),s):(e.exit(t),n(l))}}const j1={tokenize:O1};function O1(e){const n=e.attempt(this.parser.constructs.contentInitial,i,r);let t;return n;function i(s){if(s===null){e.consume(s);return}return e.enter("lineEnding"),e.consume(s),e.exit("lineEnding"),re(e,n,"linePrefix")}function r(s){return e.enter("paragraph"),a(s)}function a(s){const l=e.enter("chunkText",{contentType:"text",previous:t});return t&&(t.next=l),t=l,o(s)}function o(s){if(s===null){e.exit("chunkText"),e.exit("paragraph"),e.consume(s);return}return Y(s)?(e.consume(s),e.exit("chunkText"),a):(e.consume(s),o)}}const F1={tokenize:z1},Vp={tokenize:B1};function z1(e){const n=this,t=[];let i=0,r,a,o;return s;function s(v){if(i<t.length){const I=t[i];return n.containerState=I[1],e.attempt(I[0].continuation,l,c)(v)}return c(v)}function l(v){if(i++,n.containerState._closeFlow){n.containerState._closeFlow=void 0,r&&g();const I=n.events.length;let P=I,S;for(;P--;)if(n.events[P][0]==="exit"&&n.events[P][1].type==="chunkFlow"){S=n.events[P][1].end;break}y(i);let _=I;for(;_<n.events.length;)n.events[_][1].end={...S},_++;return dn(n.events,P+1,0,n.events.slice(I)),n.events.length=_,c(v)}return s(v)}function c(v){if(i===t.length){if(!r)return p(v);if(r.currentConstruct&&r.currentConstruct.concrete)return m(v);n.interrupt=!!(r.currentConstruct&&!r._gfmTableDynamicInterruptHack)}return n.containerState={},e.check(Vp,d,u)(v)}function d(v){return r&&g(),y(i),p(v)}function u(v){return n.parser.lazy[n.now().line]=i!==t.length,o=n.now().offset,m(v)}function p(v){return n.containerState={},e.attempt(Vp,f,m)(v)}function f(v){return i++,t.push([n.currentConstruct,n.containerState]),p(v)}function m(v){if(v===null){r&&g(),y(0),e.consume(v);return}return r=r||n.parser.flow(n.now()),e.enter("chunkFlow",{_tokenizer:r,contentType:"flow",previous:a}),b(v)}function b(v){if(v===null){A(e.exit("chunkFlow"),!0),y(0),e.consume(v);return}return Y(v)?(e.consume(v),A(e.exit("chunkFlow")),i=0,n.interrupt=void 0,s):(e.consume(v),b)}function A(v,I){const P=n.sliceStream(v);if(I&&P.push(null),v.previous=a,a&&(a.next=v),a=v,r.defineSkip(v.start),r.write(P),n.parser.lazy[v.start.line]){let S=r.events.length;for(;S--;)if(r.events[S][1].start.offset<o&&(!r.events[S][1].end||r.events[S][1].end.offset>o))return;const _=n.events.length;let R=_,F,k;for(;R--;)if(n.events[R][0]==="exit"&&n.events[R][1].type==="chunkFlow"){if(F){k=n.events[R][1].end;break}F=!0}for(y(i),S=_;S<n.events.length;)n.events[S][1].end={...k},S++;dn(n.events,R+1,0,n.events.slice(_)),n.events.length=S}}function y(v){let I=t.length;for(;I-- >v;){const P=t[I];n.containerState=P[1],P[0].exit.call(n,e)}t.length=v}function g(){r.write([null]),a=void 0,r=void 0,n.containerState._closeFlow=void 0}}function B1(e,n,t){return re(e,e.attempt(this.parser.constructs.document,n,t),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function ji(e){if(e===null||ue(e)||Jt(e))return 1;if(qo(e))return 2}function Yo(e,n,t){const i=[];let r=-1;for(;++r<e.length;){const a=e[r].resolveAll;a&&!i.includes(a)&&(n=a(n,t),i.push(a))}return n}const dc={name:"attention",resolveAll:W1,tokenize:V1};function W1(e,n){let t=-1,i,r,a,o,s,l,c,d;for(;++t<e.length;)if(e[t][0]==="enter"&&e[t][1].type==="attentionSequence"&&e[t][1]._close){for(i=t;i--;)if(e[i][0]==="exit"&&e[i][1].type==="attentionSequence"&&e[i][1]._open&&n.sliceSerialize(e[i][1]).charCodeAt(0)===n.sliceSerialize(e[t][1]).charCodeAt(0)){if((e[i][1]._close||e[t][1]._open)&&(e[t][1].end.offset-e[t][1].start.offset)%3&&!((e[i][1].end.offset-e[i][1].start.offset+e[t][1].end.offset-e[t][1].start.offset)%3))continue;l=e[i][1].end.offset-e[i][1].start.offset>1&&e[t][1].end.offset-e[t][1].start.offset>1?2:1;const u={...e[i][1].end},p={...e[t][1].start};Hp(u,-l),Hp(p,l),o={type:l>1?"strongSequence":"emphasisSequence",start:u,end:{...e[i][1].end}},s={type:l>1?"strongSequence":"emphasisSequence",start:{...e[t][1].start},end:p},a={type:l>1?"strongText":"emphasisText",start:{...e[i][1].end},end:{...e[t][1].start}},r={type:l>1?"strong":"emphasis",start:{...o.start},end:{...s.end}},e[i][1].end={...o.start},e[t][1].start={...s.end},c=[],e[i][1].end.offset-e[i][1].start.offset&&(c=yn(c,[["enter",e[i][1],n],["exit",e[i][1],n]])),c=yn(c,[["enter",r,n],["enter",o,n],["exit",o,n],["enter",a,n]]),c=yn(c,Yo(n.parser.constructs.insideSpan.null,e.slice(i+1,t),n)),c=yn(c,[["exit",a,n],["enter",s,n],["exit",s,n],["exit",r,n]]),e[t][1].end.offset-e[t][1].start.offset?(d=2,c=yn(c,[["enter",e[t][1],n],["exit",e[t][1],n]])):d=0,dn(e,i-1,t-i+3,c),t=i+c.length-d-2;break}}for(t=-1;++t<e.length;)e[t][1].type==="attentionSequence"&&(e[t][1].type="data");return e}function V1(e,n){const t=this.parser.constructs.attentionMarkers.null,i=this.previous,r=ji(i);let a;return o;function o(l){return a=l,e.enter("attentionSequence"),s(l)}function s(l){if(l===a)return e.consume(l),s;const c=e.exit("attentionSequence"),d=ji(l),u=!d||d===2&&r||t.includes(l),p=!r||r===2&&d||t.includes(i);return c._open=!!(a===42?u:u&&(r||!p)),c._close=!!(a===42?p:p&&(d||!u)),n(l)}}function Hp(e,n){e.column+=n,e.offset+=n,e._bufferIndex+=n}const H1={name:"autolink",tokenize:$1};function $1(e,n,t){let i=0;return r;function r(f){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(f),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),a}function a(f){return $e(f)?(e.consume(f),o):f===64?t(f):c(f)}function o(f){return f===43||f===45||f===46||Oe(f)?(i=1,s(f)):c(f)}function s(f){return f===58?(e.consume(f),i=0,l):(f===43||f===45||f===46||Oe(f))&&i++<32?(e.consume(f),s):(i=0,c(f))}function l(f){return f===62?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(f),e.exit("autolinkMarker"),e.exit("autolink"),n):f===null||f===32||f===60||wo(f)?t(f):(e.consume(f),l)}function c(f){return f===64?(e.consume(f),d):D1(f)?(e.consume(f),c):t(f)}function d(f){return Oe(f)?u(f):t(f)}function u(f){return f===46?(e.consume(f),i=0,d):f===62?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(f),e.exit("autolinkMarker"),e.exit("autolink"),n):p(f)}function p(f){if((f===45||Oe(f))&&i++<63){const m=f===45?p:u;return e.consume(f),m}return t(f)}}const ea={partial:!0,tokenize:U1};function U1(e,n,t){return i;function i(a){return J(a)?re(e,r,"linePrefix")(a):r(a)}function r(a){return a===null||Y(a)?n(a):t(a)}}const Lg={continuation:{tokenize:Y1},exit:G1,name:"blockQuote",tokenize:q1};function q1(e,n,t){const i=this;return r;function r(o){if(o===62){const s=i.containerState;return s.open||(e.enter("blockQuote",{_container:!0}),s.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(o),e.exit("blockQuoteMarker"),a}return t(o)}function a(o){return J(o)?(e.enter("blockQuotePrefixWhitespace"),e.consume(o),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),n):(e.exit("blockQuotePrefix"),n(o))}}function Y1(e,n,t){const i=this;return r;function r(o){return J(o)?re(e,a,"linePrefix",i.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(o):a(o)}function a(o){return e.attempt(Lg,n,t)(o)}}function G1(e){e.exit("blockQuote")}const Ng={name:"characterEscape",tokenize:K1};function K1(e,n,t){return i;function i(a){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(a),e.exit("escapeMarker"),r}function r(a){return N1(a)?(e.enter("characterEscapeValue"),e.consume(a),e.exit("characterEscapeValue"),e.exit("characterEscape"),n):t(a)}}const jg={name:"characterReference",tokenize:Q1};function Q1(e,n,t){const i=this;let r=0,a,o;return s;function s(u){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(u),e.exit("characterReferenceMarker"),l}function l(u){return u===35?(e.enter("characterReferenceMarkerNumeric"),e.consume(u),e.exit("characterReferenceMarkerNumeric"),c):(e.enter("characterReferenceValue"),a=31,o=Oe,d(u))}function c(u){return u===88||u===120?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(u),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),a=6,o=L1,d):(e.enter("characterReferenceValue"),a=7,o=uc,d(u))}function d(u){if(u===59&&r){const p=e.exit("characterReferenceValue");return o===Oe&&!Mu(i.sliceSerialize(p))?t(u):(e.enter("characterReferenceMarker"),e.consume(u),e.exit("characterReferenceMarker"),e.exit("characterReference"),n)}return o(u)&&r++<a?(e.consume(u),d):t(u)}}const $p={partial:!0,tokenize:J1},Up={concrete:!0,name:"codeFenced",tokenize:X1};function X1(e,n,t){const i=this,r={partial:!0,tokenize:P};let a=0,o=0,s;return l;function l(S){return c(S)}function c(S){const _=i.events[i.events.length-1];return a=_&&_[1].type==="linePrefix"?_[2].sliceSerialize(_[1],!0).length:0,s=S,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),d(S)}function d(S){return S===s?(o++,e.consume(S),d):o<3?t(S):(e.exit("codeFencedFenceSequence"),J(S)?re(e,u,"whitespace")(S):u(S))}function u(S){return S===null||Y(S)?(e.exit("codeFencedFence"),i.interrupt?n(S):e.check($p,b,I)(S)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),p(S))}function p(S){return S===null||Y(S)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),u(S)):J(S)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),re(e,f,"whitespace")(S)):S===96&&S===s?t(S):(e.consume(S),p)}function f(S){return S===null||Y(S)?u(S):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),m(S))}function m(S){return S===null||Y(S)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),u(S)):S===96&&S===s?t(S):(e.consume(S),m)}function b(S){return e.attempt(r,I,A)(S)}function A(S){return e.enter("lineEnding"),e.consume(S),e.exit("lineEnding"),y}function y(S){return a>0&&J(S)?re(e,g,"linePrefix",a+1)(S):g(S)}function g(S){return S===null||Y(S)?e.check($p,b,I)(S):(e.enter("codeFlowValue"),v(S))}function v(S){return S===null||Y(S)?(e.exit("codeFlowValue"),g(S)):(e.consume(S),v)}function I(S){return e.exit("codeFenced"),n(S)}function P(S,_,R){let F=0;return k;function k(N){return S.enter("lineEnding"),S.consume(N),S.exit("lineEnding"),T}function T(N){return S.enter("codeFencedFence"),J(N)?re(S,z,"linePrefix",i.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(N):z(N)}function z(N){return N===s?(S.enter("codeFencedFenceSequence"),G(N)):R(N)}function G(N){return N===s?(F++,S.consume(N),G):F>=o?(S.exit("codeFencedFenceSequence"),J(N)?re(S,Q,"whitespace")(N):Q(N)):R(N)}function Q(N){return N===null||Y(N)?(S.exit("codeFencedFence"),_(N)):R(N)}}}function J1(e,n,t){const i=this;return r;function r(o){return o===null?t(o):(e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),a)}function a(o){return i.parser.lazy[i.now().line]?t(o):n(o)}}const Ls={name:"codeIndented",tokenize:eI},Z1={partial:!0,tokenize:nI};function eI(e,n,t){const i=this;return r;function r(c){return e.enter("codeIndented"),re(e,a,"linePrefix",5)(c)}function a(c){const d=i.events[i.events.length-1];return d&&d[1].type==="linePrefix"&&d[2].sliceSerialize(d[1],!0).length>=4?o(c):t(c)}function o(c){return c===null?l(c):Y(c)?e.attempt(Z1,o,l)(c):(e.enter("codeFlowValue"),s(c))}function s(c){return c===null||Y(c)?(e.exit("codeFlowValue"),o(c)):(e.consume(c),s)}function l(c){return e.exit("codeIndented"),n(c)}}function nI(e,n,t){const i=this;return r;function r(o){return i.parser.lazy[i.now().line]?t(o):Y(o)?(e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),r):re(e,a,"linePrefix",5)(o)}function a(o){const s=i.events[i.events.length-1];return s&&s[1].type==="linePrefix"&&s[2].sliceSerialize(s[1],!0).length>=4?n(o):Y(o)?r(o):t(o)}}const tI={name:"codeText",previous:rI,resolve:iI,tokenize:aI};function iI(e){let n=e.length-4,t=3,i,r;if((e[t][1].type==="lineEnding"||e[t][1].type==="space")&&(e[n][1].type==="lineEnding"||e[n][1].type==="space")){for(i=t;++i<n;)if(e[i][1].type==="codeTextData"){e[t][1].type="codeTextPadding",e[n][1].type="codeTextPadding",t+=2,n-=2;break}}for(i=t-1,n++;++i<=n;)r===void 0?i!==n&&e[i][1].type!=="lineEnding"&&(r=i):(i===n||e[i][1].type==="lineEnding")&&(e[r][1].type="codeTextData",i!==r+2&&(e[r][1].end=e[i-1][1].end,e.splice(r+2,i-r-2),n-=i-r-2,i=r+2),r=void 0);return e}function rI(e){return e!==96||this.events[this.events.length-1][1].type==="characterEscape"}function aI(e,n,t){let i=0,r,a;return o;function o(u){return e.enter("codeText"),e.enter("codeTextSequence"),s(u)}function s(u){return u===96?(e.consume(u),i++,s):(e.exit("codeTextSequence"),l(u))}function l(u){return u===null?t(u):u===32?(e.enter("space"),e.consume(u),e.exit("space"),l):u===96?(a=e.enter("codeTextSequence"),r=0,d(u)):Y(u)?(e.enter("lineEnding"),e.consume(u),e.exit("lineEnding"),l):(e.enter("codeTextData"),c(u))}function c(u){return u===null||u===32||u===96||Y(u)?(e.exit("codeTextData"),l(u)):(e.consume(u),c)}function d(u){return u===96?(e.consume(u),r++,d):r===i?(e.exit("codeTextSequence"),e.exit("codeText"),n(u)):(a.type="codeTextData",c(u))}}class oI{constructor(n){this.left=n?[...n]:[],this.right=[]}get(n){if(n<0||n>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+n+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return n<this.left.length?this.left[n]:this.right[this.right.length-n+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(n,t){const i=t??Number.POSITIVE_INFINITY;return i<this.left.length?this.left.slice(n,i):n>this.left.length?this.right.slice(this.right.length-i+this.left.length,this.right.length-n+this.left.length).reverse():this.left.slice(n).concat(this.right.slice(this.right.length-i+this.left.length).reverse())}splice(n,t,i){const r=t||0;this.setCursor(Math.trunc(n));const a=this.right.splice(this.right.length-r,Number.POSITIVE_INFINITY);return i&&Zi(this.left,i),a.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(n){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(n)}pushMany(n){this.setCursor(Number.POSITIVE_INFINITY),Zi(this.left,n)}unshift(n){this.setCursor(0),this.right.push(n)}unshiftMany(n){this.setCursor(0),Zi(this.right,n.reverse())}setCursor(n){if(!(n===this.left.length||n>this.left.length&&this.right.length===0||n<0&&this.left.length===0))if(n<this.left.length){const t=this.left.splice(n,Number.POSITIVE_INFINITY);Zi(this.right,t.reverse())}else{const t=this.right.splice(this.left.length+this.right.length-n,Number.POSITIVE_INFINITY);Zi(this.left,t.reverse())}}}function Zi(e,n){let t=0;if(n.length<1e4)e.push(...n);else for(;t<n.length;)e.push(...n.slice(t,t+1e4)),t+=1e4}function Og(e){const n={};let t=-1,i,r,a,o,s,l,c;const d=new oI(e);for(;++t<d.length;){for(;t in n;)t=n[t];if(i=d.get(t),t&&i[1].type==="chunkFlow"&&d.get(t-1)[1].type==="listItemPrefix"&&(l=i[1]._tokenizer.events,a=0,a<l.length&&l[a][1].type==="lineEndingBlank"&&(a+=2),a<l.length&&l[a][1].type==="content"))for(;++a<l.length&&l[a][1].type!=="content";)l[a][1].type==="chunkText"&&(l[a][1]._isInFirstContentOfListItem=!0,a++);if(i[0]==="enter")i[1].contentType&&(Object.assign(n,sI(d,t)),t=n[t],c=!0);else if(i[1]._container){for(a=t,r=void 0;a--;)if(o=d.get(a),o[1].type==="lineEnding"||o[1].type==="lineEndingBlank")o[0]==="enter"&&(r&&(d.get(r)[1].type="lineEndingBlank"),o[1].type="lineEnding",r=a);else if(!(o[1].type==="linePrefix"||o[1].type==="listItemIndent"))break;r&&(i[1].end={...d.get(r)[1].start},s=d.slice(r,t),s.unshift(i),d.splice(r,t-r+1,s))}}return dn(e,0,Number.POSITIVE_INFINITY,d.slice(0)),!c}function sI(e,n){const t=e.get(n)[1],i=e.get(n)[2];let r=n-1;const a=[];let o=t._tokenizer;o||(o=i.parser[t.contentType](t.start),t._contentTypeTextTrailing&&(o._contentTypeTextTrailing=!0));const s=o.events,l=[],c={};let d,u,p=-1,f=t,m=0,b=0;const A=[b];for(;f;){for(;e.get(++r)[1]!==f;);a.push(r),f._tokenizer||(d=i.sliceStream(f),f.next||d.push(null),u&&o.defineSkip(f.start),f._isInFirstContentOfListItem&&(o._gfmTasklistFirstContentOfListItem=!0),o.write(d),f._isInFirstContentOfListItem&&(o._gfmTasklistFirstContentOfListItem=void 0)),u=f,f=f.next}for(f=t;++p<s.length;)s[p][0]==="exit"&&s[p-1][0]==="enter"&&s[p][1].type===s[p-1][1].type&&s[p][1].start.line!==s[p][1].end.line&&(b=p+1,A.push(b),f._tokenizer=void 0,f.previous=void 0,f=f.next);for(o.events=[],f?(f._tokenizer=void 0,f.previous=void 0):A.pop(),p=A.length;p--;){const y=s.slice(A[p],A[p+1]),g=a.pop();l.push([g,g+y.length-1]),e.splice(g,2,y)}for(l.reverse(),p=-1;++p<l.length;)c[m+l[p][0]]=m+l[p][1],m+=l[p][1]-l[p][0]-1;return c}const lI={resolve:uI,tokenize:dI},cI={partial:!0,tokenize:pI};function uI(e){return Og(e),e}function dI(e,n){let t;return i;function i(s){return e.enter("content"),t=e.enter("chunkContent",{contentType:"content"}),r(s)}function r(s){return s===null?a(s):Y(s)?e.check(cI,o,a)(s):(e.consume(s),r)}function a(s){return e.exit("chunkContent"),e.exit("content"),n(s)}function o(s){return e.consume(s),e.exit("chunkContent"),t.next=e.enter("chunkContent",{contentType:"content",previous:t}),t=t.next,r}}function pI(e,n,t){const i=this;return r;function r(o){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),re(e,a,"linePrefix")}function a(o){if(o===null||Y(o))return t(o);const s=i.events[i.events.length-1];return!i.parser.constructs.disable.null.includes("codeIndented")&&s&&s[1].type==="linePrefix"&&s[2].sliceSerialize(s[1],!0).length>=4?n(o):e.interrupt(i.parser.constructs.flow,t,n)(o)}}function Fg(e,n,t,i,r,a,o,s,l){const c=l||Number.POSITIVE_INFINITY;let d=0;return u;function u(y){return y===60?(e.enter(i),e.enter(r),e.enter(a),e.consume(y),e.exit(a),p):y===null||y===32||y===41||wo(y)?t(y):(e.enter(i),e.enter(o),e.enter(s),e.enter("chunkString",{contentType:"string"}),b(y))}function p(y){return y===62?(e.enter(a),e.consume(y),e.exit(a),e.exit(r),e.exit(i),n):(e.enter(s),e.enter("chunkString",{contentType:"string"}),f(y))}function f(y){return y===62?(e.exit("chunkString"),e.exit(s),p(y)):y===null||y===60||Y(y)?t(y):(e.consume(y),y===92?m:f)}function m(y){return y===60||y===62||y===92?(e.consume(y),f):f(y)}function b(y){return!d&&(y===null||y===41||ue(y))?(e.exit("chunkString"),e.exit(s),e.exit(o),e.exit(i),n(y)):d<c&&y===40?(e.consume(y),d++,b):y===41?(e.consume(y),d--,b):y===null||y===32||y===40||wo(y)?t(y):(e.consume(y),y===92?A:b)}function A(y){return y===40||y===41||y===92?(e.consume(y),b):b(y)}}function zg(e,n,t,i,r,a){const o=this;let s=0,l;return c;function c(f){return e.enter(i),e.enter(r),e.consume(f),e.exit(r),e.enter(a),d}function d(f){return s>999||f===null||f===91||f===93&&!l||f===94&&!s&&"_hiddenFootnoteSupport"in o.parser.constructs?t(f):f===93?(e.exit(a),e.enter(r),e.consume(f),e.exit(r),e.exit(i),n):Y(f)?(e.enter("lineEnding"),e.consume(f),e.exit("lineEnding"),d):(e.enter("chunkString",{contentType:"string"}),u(f))}function u(f){return f===null||f===91||f===93||Y(f)||s++>999?(e.exit("chunkString"),d(f)):(e.consume(f),l||(l=!J(f)),f===92?p:u)}function p(f){return f===91||f===92||f===93?(e.consume(f),s++,u):u(f)}}function Bg(e,n,t,i,r,a){let o;return s;function s(p){return p===34||p===39||p===40?(e.enter(i),e.enter(r),e.consume(p),e.exit(r),o=p===40?41:p,l):t(p)}function l(p){return p===o?(e.enter(r),e.consume(p),e.exit(r),e.exit(i),n):(e.enter(a),c(p))}function c(p){return p===o?(e.exit(a),l(o)):p===null?t(p):Y(p)?(e.enter("lineEnding"),e.consume(p),e.exit("lineEnding"),re(e,c,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),d(p))}function d(p){return p===o||p===null||Y(p)?(e.exit("chunkString"),c(p)):(e.consume(p),p===92?u:d)}function u(p){return p===o||p===92?(e.consume(p),d):d(p)}}function xr(e,n){let t;return i;function i(r){return Y(r)?(e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),t=!0,i):J(r)?re(e,i,t?"linePrefix":"lineSuffix")(r):n(r)}}const fI={name:"definition",tokenize:mI},hI={partial:!0,tokenize:gI};function mI(e,n,t){const i=this;let r;return a;function a(f){return e.enter("definition"),o(f)}function o(f){return zg.call(i,e,s,t,"definitionLabel","definitionLabelMarker","definitionLabelString")(f)}function s(f){return r=En(i.sliceSerialize(i.events[i.events.length-1][1]).slice(1,-1)),f===58?(e.enter("definitionMarker"),e.consume(f),e.exit("definitionMarker"),l):t(f)}function l(f){return ue(f)?xr(e,c)(f):c(f)}function c(f){return Fg(e,d,t,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(f)}function d(f){return e.attempt(hI,u,u)(f)}function u(f){return J(f)?re(e,p,"whitespace")(f):p(f)}function p(f){return f===null||Y(f)?(e.exit("definition"),i.parser.defined.push(r),n(f)):t(f)}}function gI(e,n,t){return i;function i(s){return ue(s)?xr(e,r)(s):t(s)}function r(s){return Bg(e,a,t,"definitionTitle","definitionTitleMarker","definitionTitleString")(s)}function a(s){return J(s)?re(e,o,"whitespace")(s):o(s)}function o(s){return s===null||Y(s)?n(s):t(s)}}const yI={name:"hardBreakEscape",tokenize:vI};function vI(e,n,t){return i;function i(a){return e.enter("hardBreakEscape"),e.consume(a),r}function r(a){return Y(a)?(e.exit("hardBreakEscape"),n(a)):t(a)}}const bI={name:"headingAtx",resolve:wI,tokenize:xI};function wI(e,n){let t=e.length-2,i=3,r,a;return e[i][1].type==="whitespace"&&(i+=2),t-2>i&&e[t][1].type==="whitespace"&&(t-=2),e[t][1].type==="atxHeadingSequence"&&(i===t-1||t-4>i&&e[t-2][1].type==="whitespace")&&(t-=i+1===t?2:4),t>i&&(r={type:"atxHeadingText",start:e[i][1].start,end:e[t][1].end},a={type:"chunkText",start:e[i][1].start,end:e[t][1].end,contentType:"text"},dn(e,i,t-i+1,[["enter",r,n],["enter",a,n],["exit",a,n],["exit",r,n]])),e}function xI(e,n,t){let i=0;return r;function r(d){return e.enter("atxHeading"),a(d)}function a(d){return e.enter("atxHeadingSequence"),o(d)}function o(d){return d===35&&i++<6?(e.consume(d),o):d===null||ue(d)?(e.exit("atxHeadingSequence"),s(d)):t(d)}function s(d){return d===35?(e.enter("atxHeadingSequence"),l(d)):d===null||Y(d)?(e.exit("atxHeading"),n(d)):J(d)?re(e,s,"whitespace")(d):(e.enter("atxHeadingText"),c(d))}function l(d){return d===35?(e.consume(d),l):(e.exit("atxHeadingSequence"),s(d))}function c(d){return d===null||d===35||ue(d)?(e.exit("atxHeadingText"),s(d)):(e.consume(d),c)}}const kI=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],qp=["pre","script","style","textarea"],SI={concrete:!0,name:"htmlFlow",resolveTo:CI,tokenize:PI},II={partial:!0,tokenize:EI},AI={partial:!0,tokenize:_I};function CI(e){let n=e.length;for(;n--&&!(e[n][0]==="enter"&&e[n][1].type==="htmlFlow"););return n>1&&e[n-2][1].type==="linePrefix"&&(e[n][1].start=e[n-2][1].start,e[n+1][1].start=e[n-2][1].start,e.splice(n-2,2)),e}function PI(e,n,t){const i=this;let r,a,o,s,l;return c;function c(x){return d(x)}function d(x){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(x),u}function u(x){return x===33?(e.consume(x),p):x===47?(e.consume(x),a=!0,b):x===63?(e.consume(x),r=3,i.interrupt?n:w):$e(x)?(e.consume(x),o=String.fromCharCode(x),A):t(x)}function p(x){return x===45?(e.consume(x),r=2,f):x===91?(e.consume(x),r=5,s=0,m):$e(x)?(e.consume(x),r=4,i.interrupt?n:w):t(x)}function f(x){return x===45?(e.consume(x),i.interrupt?n:w):t(x)}function m(x){const oe="CDATA[";return x===oe.charCodeAt(s++)?(e.consume(x),s===oe.length?i.interrupt?n:z:m):t(x)}function b(x){return $e(x)?(e.consume(x),o=String.fromCharCode(x),A):t(x)}function A(x){if(x===null||x===47||x===62||ue(x)){const oe=x===47,pe=o.toLowerCase();return!oe&&!a&&qp.includes(pe)?(r=1,i.interrupt?n(x):z(x)):kI.includes(o.toLowerCase())?(r=6,oe?(e.consume(x),y):i.interrupt?n(x):z(x)):(r=7,i.interrupt&&!i.parser.lazy[i.now().line]?t(x):a?g(x):v(x))}return x===45||Oe(x)?(e.consume(x),o+=String.fromCharCode(x),A):t(x)}function y(x){return x===62?(e.consume(x),i.interrupt?n:z):t(x)}function g(x){return J(x)?(e.consume(x),g):k(x)}function v(x){return x===47?(e.consume(x),k):x===58||x===95||$e(x)?(e.consume(x),I):J(x)?(e.consume(x),v):k(x)}function I(x){return x===45||x===46||x===58||x===95||Oe(x)?(e.consume(x),I):P(x)}function P(x){return x===61?(e.consume(x),S):J(x)?(e.consume(x),P):v(x)}function S(x){return x===null||x===60||x===61||x===62||x===96?t(x):x===34||x===39?(e.consume(x),l=x,_):J(x)?(e.consume(x),S):R(x)}function _(x){return x===l?(e.consume(x),l=null,F):x===null||Y(x)?t(x):(e.consume(x),_)}function R(x){return x===null||x===34||x===39||x===47||x===60||x===61||x===62||x===96||ue(x)?P(x):(e.consume(x),R)}function F(x){return x===47||x===62||J(x)?v(x):t(x)}function k(x){return x===62?(e.consume(x),T):t(x)}function T(x){return x===null||Y(x)?z(x):J(x)?(e.consume(x),T):t(x)}function z(x){return x===45&&r===2?(e.consume(x),q):x===60&&r===1?(e.consume(x),ne):x===62&&r===4?(e.consume(x),B):x===63&&r===3?(e.consume(x),w):x===93&&r===5?(e.consume(x),H):Y(x)&&(r===6||r===7)?(e.exit("htmlFlowData"),e.check(II,$,G)(x)):x===null||Y(x)?(e.exit("htmlFlowData"),G(x)):(e.consume(x),z)}function G(x){return e.check(AI,Q,$)(x)}function Q(x){return e.enter("lineEnding"),e.consume(x),e.exit("lineEnding"),N}function N(x){return x===null||Y(x)?G(x):(e.enter("htmlFlowData"),z(x))}function q(x){return x===45?(e.consume(x),w):z(x)}function ne(x){return x===47?(e.consume(x),o="",M):z(x)}function M(x){if(x===62){const oe=o.toLowerCase();return qp.includes(oe)?(e.consume(x),B):z(x)}return $e(x)&&o.length<8?(e.consume(x),o+=String.fromCharCode(x),M):z(x)}function H(x){return x===93?(e.consume(x),w):z(x)}function w(x){return x===62?(e.consume(x),B):x===45&&r===2?(e.consume(x),w):z(x)}function B(x){return x===null||Y(x)?(e.exit("htmlFlowData"),$(x)):(e.consume(x),B)}function $(x){return e.exit("htmlFlow"),n(x)}}function _I(e,n,t){const i=this;return r;function r(o){return Y(o)?(e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),a):t(o)}function a(o){return i.parser.lazy[i.now().line]?t(o):n(o)}}function EI(e,n,t){return i;function i(r){return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),e.attempt(ea,n,t)}}const TI={name:"htmlText",tokenize:RI};function RI(e,n,t){const i=this;let r,a,o;return s;function s(w){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(w),l}function l(w){return w===33?(e.consume(w),c):w===47?(e.consume(w),P):w===63?(e.consume(w),v):$e(w)?(e.consume(w),R):t(w)}function c(w){return w===45?(e.consume(w),d):w===91?(e.consume(w),a=0,m):$e(w)?(e.consume(w),g):t(w)}function d(w){return w===45?(e.consume(w),f):t(w)}function u(w){return w===null?t(w):w===45?(e.consume(w),p):Y(w)?(o=u,ne(w)):(e.consume(w),u)}function p(w){return w===45?(e.consume(w),f):u(w)}function f(w){return w===62?q(w):w===45?p(w):u(w)}function m(w){const B="CDATA[";return w===B.charCodeAt(a++)?(e.consume(w),a===B.length?b:m):t(w)}function b(w){return w===null?t(w):w===93?(e.consume(w),A):Y(w)?(o=b,ne(w)):(e.consume(w),b)}function A(w){return w===93?(e.consume(w),y):b(w)}function y(w){return w===62?q(w):w===93?(e.consume(w),y):b(w)}function g(w){return w===null||w===62?q(w):Y(w)?(o=g,ne(w)):(e.consume(w),g)}function v(w){return w===null?t(w):w===63?(e.consume(w),I):Y(w)?(o=v,ne(w)):(e.consume(w),v)}function I(w){return w===62?q(w):v(w)}function P(w){return $e(w)?(e.consume(w),S):t(w)}function S(w){return w===45||Oe(w)?(e.consume(w),S):_(w)}function _(w){return Y(w)?(o=_,ne(w)):J(w)?(e.consume(w),_):q(w)}function R(w){return w===45||Oe(w)?(e.consume(w),R):w===47||w===62||ue(w)?F(w):t(w)}function F(w){return w===47?(e.consume(w),q):w===58||w===95||$e(w)?(e.consume(w),k):Y(w)?(o=F,ne(w)):J(w)?(e.consume(w),F):q(w)}function k(w){return w===45||w===46||w===58||w===95||Oe(w)?(e.consume(w),k):T(w)}function T(w){return w===61?(e.consume(w),z):Y(w)?(o=T,ne(w)):J(w)?(e.consume(w),T):F(w)}function z(w){return w===null||w===60||w===61||w===62||w===96?t(w):w===34||w===39?(e.consume(w),r=w,G):Y(w)?(o=z,ne(w)):J(w)?(e.consume(w),z):(e.consume(w),Q)}function G(w){return w===r?(e.consume(w),r=void 0,N):w===null?t(w):Y(w)?(o=G,ne(w)):(e.consume(w),G)}function Q(w){return w===null||w===34||w===39||w===60||w===61||w===96?t(w):w===47||w===62||ue(w)?F(w):(e.consume(w),Q)}function N(w){return w===47||w===62||ue(w)?F(w):t(w)}function q(w){return w===62?(e.consume(w),e.exit("htmlTextData"),e.exit("htmlText"),n):t(w)}function ne(w){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(w),e.exit("lineEnding"),M}function M(w){return J(w)?re(e,H,"linePrefix",i.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(w):H(w)}function H(w){return e.enter("htmlTextData"),o(w)}}const Du={name:"labelEnd",resolveAll:NI,resolveTo:jI,tokenize:OI},MI={tokenize:FI},DI={tokenize:zI},LI={tokenize:BI};function NI(e){let n=-1;const t=[];for(;++n<e.length;){const i=e[n][1];if(t.push(e[n]),i.type==="labelImage"||i.type==="labelLink"||i.type==="labelEnd"){const r=i.type==="labelImage"?4:2;i.type="data",n+=r}}return e.length!==t.length&&dn(e,0,e.length,t),e}function jI(e,n){let t=e.length,i=0,r,a,o,s;for(;t--;)if(r=e[t][1],a){if(r.type==="link"||r.type==="labelLink"&&r._inactive)break;e[t][0]==="enter"&&r.type==="labelLink"&&(r._inactive=!0)}else if(o){if(e[t][0]==="enter"&&(r.type==="labelImage"||r.type==="labelLink")&&!r._balanced&&(a=t,r.type!=="labelLink")){i=2;break}}else r.type==="labelEnd"&&(o=t);const l={type:e[a][1].type==="labelLink"?"link":"image",start:{...e[a][1].start},end:{...e[e.length-1][1].end}},c={type:"label",start:{...e[a][1].start},end:{...e[o][1].end}},d={type:"labelText",start:{...e[a+i+2][1].end},end:{...e[o-2][1].start}};return s=[["enter",l,n],["enter",c,n]],s=yn(s,e.slice(a+1,a+i+3)),s=yn(s,[["enter",d,n]]),s=yn(s,Yo(n.parser.constructs.insideSpan.null,e.slice(a+i+4,o-3),n)),s=yn(s,[["exit",d,n],e[o-2],e[o-1],["exit",c,n]]),s=yn(s,e.slice(o+1)),s=yn(s,[["exit",l,n]]),dn(e,a,e.length,s),e}function OI(e,n,t){const i=this;let r=i.events.length,a,o;for(;r--;)if((i.events[r][1].type==="labelImage"||i.events[r][1].type==="labelLink")&&!i.events[r][1]._balanced){a=i.events[r][1];break}return s;function s(p){return a?a._inactive?u(p):(o=i.parser.defined.includes(En(i.sliceSerialize({start:a.end,end:i.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(p),e.exit("labelMarker"),e.exit("labelEnd"),l):t(p)}function l(p){return p===40?e.attempt(MI,d,o?d:u)(p):p===91?e.attempt(DI,d,o?c:u)(p):o?d(p):u(p)}function c(p){return e.attempt(LI,d,u)(p)}function d(p){return n(p)}function u(p){return a._balanced=!0,t(p)}}function FI(e,n,t){return i;function i(u){return e.enter("resource"),e.enter("resourceMarker"),e.consume(u),e.exit("resourceMarker"),r}function r(u){return ue(u)?xr(e,a)(u):a(u)}function a(u){return u===41?d(u):Fg(e,o,s,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(u)}function o(u){return ue(u)?xr(e,l)(u):d(u)}function s(u){return t(u)}function l(u){return u===34||u===39||u===40?Bg(e,c,t,"resourceTitle","resourceTitleMarker","resourceTitleString")(u):d(u)}function c(u){return ue(u)?xr(e,d)(u):d(u)}function d(u){return u===41?(e.enter("resourceMarker"),e.consume(u),e.exit("resourceMarker"),e.exit("resource"),n):t(u)}}function zI(e,n,t){const i=this;return r;function r(s){return zg.call(i,e,a,o,"reference","referenceMarker","referenceString")(s)}function a(s){return i.parser.defined.includes(En(i.sliceSerialize(i.events[i.events.length-1][1]).slice(1,-1)))?n(s):t(s)}function o(s){return t(s)}}function BI(e,n,t){return i;function i(a){return e.enter("reference"),e.enter("referenceMarker"),e.consume(a),e.exit("referenceMarker"),r}function r(a){return a===93?(e.enter("referenceMarker"),e.consume(a),e.exit("referenceMarker"),e.exit("reference"),n):t(a)}}const WI={name:"labelStartImage",resolveAll:Du.resolveAll,tokenize:VI};function VI(e,n,t){const i=this;return r;function r(s){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(s),e.exit("labelImageMarker"),a}function a(s){return s===91?(e.enter("labelMarker"),e.consume(s),e.exit("labelMarker"),e.exit("labelImage"),o):t(s)}function o(s){return s===94&&"_hiddenFootnoteSupport"in i.parser.constructs?t(s):n(s)}}const HI={name:"labelStartLink",resolveAll:Du.resolveAll,tokenize:$I};function $I(e,n,t){const i=this;return r;function r(o){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(o),e.exit("labelMarker"),e.exit("labelLink"),a}function a(o){return o===94&&"_hiddenFootnoteSupport"in i.parser.constructs?t(o):n(o)}}const Ns={name:"lineEnding",tokenize:UI};function UI(e,n){return t;function t(i){return e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),re(e,n,"linePrefix")}}const Va={name:"thematicBreak",tokenize:qI};function qI(e,n,t){let i=0,r;return a;function a(c){return e.enter("thematicBreak"),o(c)}function o(c){return r=c,s(c)}function s(c){return c===r?(e.enter("thematicBreakSequence"),l(c)):i>=3&&(c===null||Y(c))?(e.exit("thematicBreak"),n(c)):t(c)}function l(c){return c===r?(e.consume(c),i++,l):(e.exit("thematicBreakSequence"),J(c)?re(e,s,"whitespace")(c):s(c))}}const Ke={continuation:{tokenize:QI},exit:JI,name:"list",tokenize:KI},YI={partial:!0,tokenize:ZI},GI={partial:!0,tokenize:XI};function KI(e,n,t){const i=this,r=i.events[i.events.length-1];let a=r&&r[1].type==="linePrefix"?r[2].sliceSerialize(r[1],!0).length:0,o=0;return s;function s(f){const m=i.containerState.type||(f===42||f===43||f===45?"listUnordered":"listOrdered");if(m==="listUnordered"?!i.containerState.marker||f===i.containerState.marker:uc(f)){if(i.containerState.type||(i.containerState.type=m,e.enter(m,{_container:!0})),m==="listUnordered")return e.enter("listItemPrefix"),f===42||f===45?e.check(Va,t,c)(f):c(f);if(!i.interrupt||f===49)return e.enter("listItemPrefix"),e.enter("listItemValue"),l(f)}return t(f)}function l(f){return uc(f)&&++o<10?(e.consume(f),l):(!i.interrupt||o<2)&&(i.containerState.marker?f===i.containerState.marker:f===41||f===46)?(e.exit("listItemValue"),c(f)):t(f)}function c(f){return e.enter("listItemMarker"),e.consume(f),e.exit("listItemMarker"),i.containerState.marker=i.containerState.marker||f,e.check(ea,i.interrupt?t:d,e.attempt(YI,p,u))}function d(f){return i.containerState.initialBlankLine=!0,a++,p(f)}function u(f){return J(f)?(e.enter("listItemPrefixWhitespace"),e.consume(f),e.exit("listItemPrefixWhitespace"),p):t(f)}function p(f){return i.containerState.size=a+i.sliceSerialize(e.exit("listItemPrefix"),!0).length,n(f)}}function QI(e,n,t){const i=this;return i.containerState._closeFlow=void 0,e.check(ea,r,a);function r(s){return i.containerState.furtherBlankLines=i.containerState.furtherBlankLines||i.containerState.initialBlankLine,re(e,n,"listItemIndent",i.containerState.size+1)(s)}function a(s){return i.containerState.furtherBlankLines||!J(s)?(i.containerState.furtherBlankLines=void 0,i.containerState.initialBlankLine=void 0,o(s)):(i.containerState.furtherBlankLines=void 0,i.containerState.initialBlankLine=void 0,e.attempt(GI,n,o)(s))}function o(s){return i.containerState._closeFlow=!0,i.interrupt=void 0,re(e,e.attempt(Ke,n,t),"linePrefix",i.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(s)}}function XI(e,n,t){const i=this;return re(e,r,"listItemIndent",i.containerState.size+1);function r(a){const o=i.events[i.events.length-1];return o&&o[1].type==="listItemIndent"&&o[2].sliceSerialize(o[1],!0).length===i.containerState.size?n(a):t(a)}}function JI(e){e.exit(this.containerState.type)}function ZI(e,n,t){const i=this;return re(e,r,"listItemPrefixWhitespace",i.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function r(a){const o=i.events[i.events.length-1];return!J(a)&&o&&o[1].type==="listItemPrefixWhitespace"?n(a):t(a)}}const Yp={name:"setextUnderline",resolveTo:eA,tokenize:nA};function eA(e,n){let t=e.length,i,r,a;for(;t--;)if(e[t][0]==="enter"){if(e[t][1].type==="content"){i=t;break}e[t][1].type==="paragraph"&&(r=t)}else e[t][1].type==="content"&&e.splice(t,1),!a&&e[t][1].type==="definition"&&(a=t);const o={type:"setextHeading",start:{...e[i][1].start},end:{...e[e.length-1][1].end}};return e[r][1].type="setextHeadingText",a?(e.splice(r,0,["enter",o,n]),e.splice(a+1,0,["exit",e[i][1],n]),e[i][1].end={...e[a][1].end}):e[i][1]=o,e.push(["exit",o,n]),e}function nA(e,n,t){const i=this;let r;return a;function a(c){let d=i.events.length,u;for(;d--;)if(i.events[d][1].type!=="lineEnding"&&i.events[d][1].type!=="linePrefix"&&i.events[d][1].type!=="content"){u=i.events[d][1].type==="paragraph";break}return!i.parser.lazy[i.now().line]&&(i.interrupt||u)?(e.enter("setextHeadingLine"),r=c,o(c)):t(c)}function o(c){return e.enter("setextHeadingLineSequence"),s(c)}function s(c){return c===r?(e.consume(c),s):(e.exit("setextHeadingLineSequence"),J(c)?re(e,l,"lineSuffix")(c):l(c))}function l(c){return c===null||Y(c)?(e.exit("setextHeadingLine"),n(c)):t(c)}}const tA={tokenize:iA};function iA(e){const n=this,t=e.attempt(ea,i,e.attempt(this.parser.constructs.flowInitial,r,re(e,e.attempt(this.parser.constructs.flow,r,e.attempt(lI,r)),"linePrefix")));return t;function i(a){if(a===null){e.consume(a);return}return e.enter("lineEndingBlank"),e.consume(a),e.exit("lineEndingBlank"),n.currentConstruct=void 0,t}function r(a){if(a===null){e.consume(a);return}return e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),n.currentConstruct=void 0,t}}const rA={resolveAll:Vg()},aA=Wg("string"),oA=Wg("text");function Wg(e){return{resolveAll:Vg(e==="text"?sA:void 0),tokenize:n};function n(t){const i=this,r=this.parser.constructs[e],a=t.attempt(r,o,s);return o;function o(d){return c(d)?a(d):s(d)}function s(d){if(d===null){t.consume(d);return}return t.enter("data"),t.consume(d),l}function l(d){return c(d)?(t.exit("data"),a(d)):(t.consume(d),l)}function c(d){if(d===null)return!0;const u=r[d];let p=-1;if(u)for(;++p<u.length;){const f=u[p];if(!f.previous||f.previous.call(i,i.previous))return!0}return!1}}}function Vg(e){return n;function n(t,i){let r=-1,a;for(;++r<=t.length;)a===void 0?t[r]&&t[r][1].type==="data"&&(a=r,r++):(!t[r]||t[r][1].type!=="data")&&(r!==a+2&&(t[a][1].end=t[r-1][1].end,t.splice(a+2,r-a-2),r=a+2),a=void 0);return e?e(t,i):t}}function sA(e,n){let t=0;for(;++t<=e.length;)if((t===e.length||e[t][1].type==="lineEnding")&&e[t-1][1].type==="data"){const i=e[t-1][1],r=n.sliceStream(i);let a=r.length,o=-1,s=0,l;for(;a--;){const c=r[a];if(typeof c=="string"){for(o=c.length;c.charCodeAt(o-1)===32;)s++,o--;if(o)break;o=-1}else if(c===-2)l=!0,s++;else if(c!==-1){a++;break}}if(n._contentTypeTextTrailing&&t===e.length&&(s=0),s){const c={type:t===e.length||l||s<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:a?o:i.start._bufferIndex+o,_index:i.start._index+a,line:i.end.line,column:i.end.column-s,offset:i.end.offset-s},end:{...i.end}};i.end={...c.start},i.start.offset===i.end.offset?Object.assign(i,c):(e.splice(t,0,["enter",c,n],["exit",c,n]),t+=2)}t++}return e}const lA={42:Ke,43:Ke,45:Ke,48:Ke,49:Ke,50:Ke,51:Ke,52:Ke,53:Ke,54:Ke,55:Ke,56:Ke,57:Ke,62:Lg},cA={91:fI},uA={[-2]:Ls,[-1]:Ls,32:Ls},dA={35:bI,42:Va,45:[Yp,Va],60:SI,61:Yp,95:Va,96:Up,126:Up},pA={38:jg,92:Ng},fA={[-5]:Ns,[-4]:Ns,[-3]:Ns,33:WI,38:jg,42:dc,60:[H1,TI],91:HI,92:[yI,Ng],93:Du,95:dc,96:tI},hA={null:[dc,rA]},mA={null:[42,95]},gA={null:[]},yA=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:mA,contentInitial:cA,disable:gA,document:lA,flow:dA,flowInitial:uA,insideSpan:hA,string:pA,text:fA},Symbol.toStringTag,{value:"Module"}));function vA(e,n,t){let i={_bufferIndex:-1,_index:0,line:t&&t.line||1,column:t&&t.column||1,offset:t&&t.offset||0};const r={},a=[];let o=[],s=[];const l={attempt:_(P),check:_(S),consume:g,enter:v,exit:I,interrupt:_(S,{interrupt:!0})},c={code:null,containerState:{},defineSkip:b,events:[],now:m,parser:e,previous:null,sliceSerialize:p,sliceStream:f,write:u};let d=n.tokenize.call(c,l);return n.resolveAll&&a.push(n),c;function u(T){return o=yn(o,T),A(),o[o.length-1]!==null?[]:(R(n,0),c.events=Yo(a,c.events,c),c.events)}function p(T,z){return wA(f(T),z)}function f(T){return bA(o,T)}function m(){const{_bufferIndex:T,_index:z,line:G,column:Q,offset:N}=i;return{_bufferIndex:T,_index:z,line:G,column:Q,offset:N}}function b(T){r[T.line]=T.column,k()}function A(){let T;for(;i._index<o.length;){const z=o[i._index];if(typeof z=="string")for(T=i._index,i._bufferIndex<0&&(i._bufferIndex=0);i._index===T&&i._bufferIndex<z.length;)y(z.charCodeAt(i._bufferIndex));else y(z)}}function y(T){d=d(T)}function g(T){Y(T)?(i.line++,i.column=1,i.offset+=T===-3?2:1,k()):T!==-1&&(i.column++,i.offset++),i._bufferIndex<0?i._index++:(i._bufferIndex++,i._bufferIndex===o[i._index].length&&(i._bufferIndex=-1,i._index++)),c.previous=T}function v(T,z){const G=z||{};return G.type=T,G.start=m(),c.events.push(["enter",G,c]),s.push(G),G}function I(T){const z=s.pop();return z.end=m(),c.events.push(["exit",z,c]),z}function P(T,z){R(T,z.from)}function S(T,z){z.restore()}function _(T,z){return G;function G(Q,N,q){let ne,M,H,w;return Array.isArray(Q)?$(Q):"tokenize"in Q?$([Q]):B(Q);function B(C){return be;function be(Ge){const Te=Ge!==null&&C[Ge],nt=Ge!==null&&C.null,ta=[...Array.isArray(Te)?Te:Te?[Te]:[],...Array.isArray(nt)?nt:nt?[nt]:[]];return $(ta)(Ge)}}function $(C){return ne=C,M=0,C.length===0?q:x(C[M])}function x(C){return be;function be(Ge){return w=F(),H=C,C.partial||(c.currentConstruct=C),C.name&&c.parser.constructs.disable.null.includes(C.name)?pe():C.tokenize.call(z?Object.assign(Object.create(c),z):c,l,oe,pe)(Ge)}}function oe(C){return T(H,w),N}function pe(C){return w.restore(),++M<ne.length?x(ne[M]):q}}}function R(T,z){T.resolveAll&&!a.includes(T)&&a.push(T),T.resolve&&dn(c.events,z,c.events.length-z,T.resolve(c.events.slice(z),c)),T.resolveTo&&(c.events=T.resolveTo(c.events,c))}function F(){const T=m(),z=c.previous,G=c.currentConstruct,Q=c.events.length,N=Array.from(s);return{from:Q,restore:q};function q(){i=T,c.previous=z,c.currentConstruct=G,c.events.length=Q,s=N,k()}}function k(){i.line in r&&i.column<2&&(i.column=r[i.line],i.offset+=r[i.line]-1)}}function bA(e,n){const t=n.start._index,i=n.start._bufferIndex,r=n.end._index,a=n.end._bufferIndex;let o;if(t===r)o=[e[t].slice(i,a)];else{if(o=e.slice(t,r),i>-1){const s=o[0];typeof s=="string"?o[0]=s.slice(i):o.shift()}a>0&&o.push(e[r].slice(0,a))}return o}function wA(e,n){let t=-1;const i=[];let r;for(;++t<e.length;){const a=e[t];let o;if(typeof a=="string")o=a;else switch(a){case-5:{o="\r";break}case-4:{o=`
`;break}case-3:{o=`\r
`;break}case-2:{o=n?" ":"	";break}case-1:{if(!n&&r)continue;o=" ";break}default:o=String.fromCharCode(a)}r=a===-2,i.push(o)}return i.join("")}function xA(e){const i={constructs:Mg([yA,...(e||{}).extensions||[]]),content:r(j1),defined:[],document:r(F1),flow:r(tA),lazy:{},string:r(aA),text:r(oA)};return i;function r(a){return o;function o(s){return vA(i,a,s)}}}function kA(e){for(;!Og(e););return e}const Gp=/[\0\t\n\r]/g;function SA(){let e=1,n="",t=!0,i;return r;function r(a,o,s){const l=[];let c,d,u,p,f;for(a=n+(typeof a=="string"?a.toString():new TextDecoder(o||void 0).decode(a)),u=0,n="",t&&(a.charCodeAt(0)===65279&&u++,t=void 0);u<a.length;){if(Gp.lastIndex=u,c=Gp.exec(a),p=c&&c.index!==void 0?c.index:a.length,f=a.charCodeAt(p),!c){n=a.slice(u);break}if(f===10&&u===p&&i)l.push(-3),i=void 0;else switch(i&&(l.push(-5),i=void 0),u<p&&(l.push(a.slice(u,p)),e+=p-u),f){case 0:{l.push(65533),e++;break}case 9:{for(d=Math.ceil(e/4)*4,l.push(-2);e++<d;)l.push(-1);break}case 10:{l.push(-4),e=1;break}default:i=!0,e=1}u=p+1}return s&&(i&&l.push(-5),n&&l.push(n),l.push(null)),l}}const IA=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function AA(e){return e.replace(IA,CA)}function CA(e,n,t){if(n)return n;if(t.charCodeAt(0)===35){const r=t.charCodeAt(1),a=r===120||r===88;return Dg(t.slice(a?2:1),a?16:10)}return Mu(t)||e}const Hg={}.hasOwnProperty;function PA(e,n,t){return n&&typeof n=="object"&&(t=n,n=void 0),_A(t)(kA(xA(t).document().write(SA()(e,n,!0))))}function _A(e){const n={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:a(qu),autolinkProtocol:F,autolinkEmail:F,atxHeading:a(Hu),blockQuote:a(nt),characterEscape:F,characterReference:F,codeFenced:a(ta),codeFencedFenceInfo:o,codeFencedFenceMeta:o,codeIndented:a(ta,o),codeText:a(Sy,o),codeTextData:F,data:F,codeFlowValue:F,definition:a(Iy),definitionDestinationString:o,definitionLabelString:o,definitionTitleString:o,emphasis:a(Ay),hardBreakEscape:a($u),hardBreakTrailing:a($u),htmlFlow:a(Uu,o),htmlFlowData:F,htmlText:a(Uu,o),htmlTextData:F,image:a(Cy),label:o,link:a(qu),listItem:a(Py),listItemValue:p,listOrdered:a(Yu,u),listUnordered:a(Yu),paragraph:a(_y),reference:x,referenceString:o,resourceDestinationString:o,resourceTitleString:o,setextHeading:a(Hu),strong:a(Ey),thematicBreak:a(Ry)},exit:{atxHeading:l(),atxHeadingSequence:P,autolink:l(),autolinkEmail:Te,autolinkProtocol:Ge,blockQuote:l(),characterEscapeValue:k,characterReferenceMarkerHexadecimal:pe,characterReferenceMarkerNumeric:pe,characterReferenceValue:C,characterReference:be,codeFenced:l(A),codeFencedFence:b,codeFencedFenceInfo:f,codeFencedFenceMeta:m,codeFlowValue:k,codeIndented:l(y),codeText:l(N),codeTextData:k,data:k,definition:l(),definitionDestinationString:I,definitionLabelString:g,definitionTitleString:v,emphasis:l(),hardBreakEscape:l(z),hardBreakTrailing:l(z),htmlFlow:l(G),htmlFlowData:k,htmlText:l(Q),htmlTextData:k,image:l(ne),label:H,labelText:M,lineEnding:T,link:l(q),listItem:l(),listOrdered:l(),listUnordered:l(),paragraph:l(),referenceString:oe,resourceDestinationString:w,resourceTitleString:B,resource:$,setextHeading:l(R),setextHeadingLineSequence:_,setextHeadingText:S,strong:l(),thematicBreak:l()}};$g(n,(e||{}).mdastExtensions||[]);const t={};return i;function i(E){let O={type:"root",children:[]};const X={stack:[O],tokenStack:[],config:n,enter:s,exit:c,buffer:o,resume:d,data:t},te=[];let le=-1;for(;++le<E.length;)if(E[le][1].type==="listOrdered"||E[le][1].type==="listUnordered")if(E[le][0]==="enter")te.push(le);else{const kn=te.pop();le=r(E,kn,le)}for(le=-1;++le<E.length;){const kn=n[E[le][0]];Hg.call(kn,E[le][1].type)&&kn[E[le][1].type].call(Object.assign({sliceSerialize:E[le][2].sliceSerialize},X),E[le][1])}if(X.tokenStack.length>0){const kn=X.tokenStack[X.tokenStack.length-1];(kn[1]||Kp).call(X,void 0,kn[0])}for(O.position={start:it(E.length>0?E[0][1].start:{line:1,column:1,offset:0}),end:it(E.length>0?E[E.length-2][1].end:{line:1,column:1,offset:0})},le=-1;++le<n.transforms.length;)O=n.transforms[le](O)||O;return O}function r(E,O,X){let te=O-1,le=-1,kn=!1,Tt,zn,Hi,$i;for(;++te<=X;){const rn=E[te];switch(rn[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{rn[0]==="enter"?le++:le--,$i=void 0;break}case"lineEndingBlank":{rn[0]==="enter"&&(Tt&&!$i&&!le&&!Hi&&(Hi=te),$i=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:$i=void 0}if(!le&&rn[0]==="enter"&&rn[1].type==="listItemPrefix"||le===-1&&rn[0]==="exit"&&(rn[1].type==="listUnordered"||rn[1].type==="listOrdered")){if(Tt){let ti=te;for(zn=void 0;ti--;){const Bn=E[ti];if(Bn[1].type==="lineEnding"||Bn[1].type==="lineEndingBlank"){if(Bn[0]==="exit")continue;zn&&(E[zn][1].type="lineEndingBlank",kn=!0),Bn[1].type="lineEnding",zn=ti}else if(!(Bn[1].type==="linePrefix"||Bn[1].type==="blockQuotePrefix"||Bn[1].type==="blockQuotePrefixWhitespace"||Bn[1].type==="blockQuoteMarker"||Bn[1].type==="listItemIndent"))break}Hi&&(!zn||Hi<zn)&&(Tt._spread=!0),Tt.end=Object.assign({},zn?E[zn][1].start:rn[1].end),E.splice(zn||te,0,["exit",Tt,rn[2]]),te++,X++}if(rn[1].type==="listItemPrefix"){const ti={type:"listItem",_spread:!1,start:Object.assign({},rn[1].start),end:void 0};Tt=ti,E.splice(te,0,["enter",ti,rn[2]]),te++,X++,Hi=void 0,$i=!0}}}return E[O][1]._spread=kn,X}function a(E,O){return X;function X(te){s.call(this,E(te),te),O&&O.call(this,te)}}function o(){this.stack.push({type:"fragment",children:[]})}function s(E,O,X){this.stack[this.stack.length-1].children.push(E),this.stack.push(E),this.tokenStack.push([O,X||void 0]),E.position={start:it(O.start),end:void 0}}function l(E){return O;function O(X){E&&E.call(this,X),c.call(this,X)}}function c(E,O){const X=this.stack.pop(),te=this.tokenStack.pop();if(te)te[0].type!==E.type&&(O?O.call(this,E,te[0]):(te[1]||Kp).call(this,E,te[0]));else throw new Error("Cannot close `"+E.type+"` ("+wr({start:E.start,end:E.end})+"): it’s not open");X.position.end=it(E.end)}function d(){return Ru(this.stack.pop())}function u(){this.data.expectingFirstListItemValue=!0}function p(E){if(this.data.expectingFirstListItemValue){const O=this.stack[this.stack.length-2];O.start=Number.parseInt(this.sliceSerialize(E),10),this.data.expectingFirstListItemValue=void 0}}function f(){const E=this.resume(),O=this.stack[this.stack.length-1];O.lang=E}function m(){const E=this.resume(),O=this.stack[this.stack.length-1];O.meta=E}function b(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function A(){const E=this.resume(),O=this.stack[this.stack.length-1];O.value=E.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function y(){const E=this.resume(),O=this.stack[this.stack.length-1];O.value=E.replace(/(\r?\n|\r)$/g,"")}function g(E){const O=this.resume(),X=this.stack[this.stack.length-1];X.label=O,X.identifier=En(this.sliceSerialize(E)).toLowerCase()}function v(){const E=this.resume(),O=this.stack[this.stack.length-1];O.title=E}function I(){const E=this.resume(),O=this.stack[this.stack.length-1];O.url=E}function P(E){const O=this.stack[this.stack.length-1];if(!O.depth){const X=this.sliceSerialize(E).length;O.depth=X}}function S(){this.data.setextHeadingSlurpLineEnding=!0}function _(E){const O=this.stack[this.stack.length-1];O.depth=this.sliceSerialize(E).codePointAt(0)===61?1:2}function R(){this.data.setextHeadingSlurpLineEnding=void 0}function F(E){const X=this.stack[this.stack.length-1].children;let te=X[X.length-1];(!te||te.type!=="text")&&(te=Ty(),te.position={start:it(E.start),end:void 0},X.push(te)),this.stack.push(te)}function k(E){const O=this.stack.pop();O.value+=this.sliceSerialize(E),O.position.end=it(E.end)}function T(E){const O=this.stack[this.stack.length-1];if(this.data.atHardBreak){const X=O.children[O.children.length-1];X.position.end=it(E.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&n.canContainEols.includes(O.type)&&(F.call(this,E),k.call(this,E))}function z(){this.data.atHardBreak=!0}function G(){const E=this.resume(),O=this.stack[this.stack.length-1];O.value=E}function Q(){const E=this.resume(),O=this.stack[this.stack.length-1];O.value=E}function N(){const E=this.resume(),O=this.stack[this.stack.length-1];O.value=E}function q(){const E=this.stack[this.stack.length-1];if(this.data.inReference){const O=this.data.referenceType||"shortcut";E.type+="Reference",E.referenceType=O,delete E.url,delete E.title}else delete E.identifier,delete E.label;this.data.referenceType=void 0}function ne(){const E=this.stack[this.stack.length-1];if(this.data.inReference){const O=this.data.referenceType||"shortcut";E.type+="Reference",E.referenceType=O,delete E.url,delete E.title}else delete E.identifier,delete E.label;this.data.referenceType=void 0}function M(E){const O=this.sliceSerialize(E),X=this.stack[this.stack.length-2];X.label=AA(O),X.identifier=En(O).toLowerCase()}function H(){const E=this.stack[this.stack.length-1],O=this.resume(),X=this.stack[this.stack.length-1];if(this.data.inReference=!0,X.type==="link"){const te=E.children;X.children=te}else X.alt=O}function w(){const E=this.resume(),O=this.stack[this.stack.length-1];O.url=E}function B(){const E=this.resume(),O=this.stack[this.stack.length-1];O.title=E}function $(){this.data.inReference=void 0}function x(){this.data.referenceType="collapsed"}function oe(E){const O=this.resume(),X=this.stack[this.stack.length-1];X.label=O,X.identifier=En(this.sliceSerialize(E)).toLowerCase(),this.data.referenceType="full"}function pe(E){this.data.characterReferenceType=E.type}function C(E){const O=this.sliceSerialize(E),X=this.data.characterReferenceType;let te;X?(te=Dg(O,X==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):te=Mu(O);const le=this.stack[this.stack.length-1];le.value+=te}function be(E){const O=this.stack.pop();O.position.end=it(E.end)}function Ge(E){k.call(this,E);const O=this.stack[this.stack.length-1];O.url=this.sliceSerialize(E)}function Te(E){k.call(this,E);const O=this.stack[this.stack.length-1];O.url="mailto:"+this.sliceSerialize(E)}function nt(){return{type:"blockquote",children:[]}}function ta(){return{type:"code",lang:null,meta:null,value:""}}function Sy(){return{type:"inlineCode",value:""}}function Iy(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function Ay(){return{type:"emphasis",children:[]}}function Hu(){return{type:"heading",depth:0,children:[]}}function $u(){return{type:"break"}}function Uu(){return{type:"html",value:""}}function Cy(){return{type:"image",title:null,url:"",alt:null}}function qu(){return{type:"link",title:null,url:"",children:[]}}function Yu(E){return{type:"list",ordered:E.type==="listOrdered",start:null,spread:E._spread,children:[]}}function Py(E){return{type:"listItem",spread:E._spread,checked:null,children:[]}}function _y(){return{type:"paragraph",children:[]}}function Ey(){return{type:"strong",children:[]}}function Ty(){return{type:"text",value:""}}function Ry(){return{type:"thematicBreak"}}}function it(e){return{line:e.line,column:e.column,offset:e.offset}}function $g(e,n){let t=-1;for(;++t<n.length;){const i=n[t];Array.isArray(i)?$g(e,i):EA(e,i)}}function EA(e,n){let t;for(t in n)if(Hg.call(n,t))switch(t){case"canContainEols":{const i=n[t];i&&e[t].push(...i);break}case"transforms":{const i=n[t];i&&e[t].push(...i);break}case"enter":case"exit":{const i=n[t];i&&Object.assign(e[t],i);break}}}function Kp(e,n){throw e?new Error("Cannot close `"+e.type+"` ("+wr({start:e.start,end:e.end})+"): a different token (`"+n.type+"`, "+wr({start:n.start,end:n.end})+") is open"):new Error("Cannot close document, a token (`"+n.type+"`, "+wr({start:n.start,end:n.end})+") is still open")}function TA(e){const n=this;n.parser=t;function t(i){return PA(i,{...n.data("settings"),...e,extensions:n.data("micromarkExtensions")||[],mdastExtensions:n.data("fromMarkdownExtensions")||[]})}}function RA(e,n){const t={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(n),!0)};return e.patch(n,t),e.applyData(n,t)}function MA(e,n){const t={type:"element",tagName:"br",properties:{},children:[]};return e.patch(n,t),[e.applyData(n,t),{type:"text",value:`
`}]}function DA(e,n){const t=n.value?n.value+`
`:"",i={},r=n.lang?n.lang.split(/\s+/):[];r.length>0&&(i.className=["language-"+r[0]]);let a={type:"element",tagName:"code",properties:i,children:[{type:"text",value:t}]};return n.meta&&(a.data={meta:n.meta}),e.patch(n,a),a=e.applyData(n,a),a={type:"element",tagName:"pre",properties:{},children:[a]},e.patch(n,a),a}function LA(e,n){const t={type:"element",tagName:"del",properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}function NA(e,n){const t={type:"element",tagName:"em",properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}function jA(e,n){const t=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",i=String(n.identifier).toUpperCase(),r=Vi(i.toLowerCase()),a=e.footnoteOrder.indexOf(i);let o,s=e.footnoteCounts.get(i);s===void 0?(s=0,e.footnoteOrder.push(i),o=e.footnoteOrder.length):o=a+1,s+=1,e.footnoteCounts.set(i,s);const l={type:"element",tagName:"a",properties:{href:"#"+t+"fn-"+r,id:t+"fnref-"+r+(s>1?"-"+s:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(o)}]};e.patch(n,l);const c={type:"element",tagName:"sup",properties:{},children:[l]};return e.patch(n,c),e.applyData(n,c)}function OA(e,n){const t={type:"element",tagName:"h"+n.depth,properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}function FA(e,n){if(e.options.allowDangerousHtml){const t={type:"raw",value:n.value};return e.patch(n,t),e.applyData(n,t)}}function Ug(e,n){const t=n.referenceType;let i="]";if(t==="collapsed"?i+="[]":t==="full"&&(i+="["+(n.label||n.identifier)+"]"),n.type==="imageReference")return[{type:"text",value:"!["+n.alt+i}];const r=e.all(n),a=r[0];a&&a.type==="text"?a.value="["+a.value:r.unshift({type:"text",value:"["});const o=r[r.length-1];return o&&o.type==="text"?o.value+=i:r.push({type:"text",value:i}),r}function zA(e,n){const t=String(n.identifier).toUpperCase(),i=e.definitionById.get(t);if(!i)return Ug(e,n);const r={src:Vi(i.url||""),alt:n.alt};i.title!==null&&i.title!==void 0&&(r.title=i.title);const a={type:"element",tagName:"img",properties:r,children:[]};return e.patch(n,a),e.applyData(n,a)}function BA(e,n){const t={src:Vi(n.url)};n.alt!==null&&n.alt!==void 0&&(t.alt=n.alt),n.title!==null&&n.title!==void 0&&(t.title=n.title);const i={type:"element",tagName:"img",properties:t,children:[]};return e.patch(n,i),e.applyData(n,i)}function WA(e,n){const t={type:"text",value:n.value.replace(/\r?\n|\r/g," ")};e.patch(n,t);const i={type:"element",tagName:"code",properties:{},children:[t]};return e.patch(n,i),e.applyData(n,i)}function VA(e,n){const t=String(n.identifier).toUpperCase(),i=e.definitionById.get(t);if(!i)return Ug(e,n);const r={href:Vi(i.url||"")};i.title!==null&&i.title!==void 0&&(r.title=i.title);const a={type:"element",tagName:"a",properties:r,children:e.all(n)};return e.patch(n,a),e.applyData(n,a)}function HA(e,n){const t={href:Vi(n.url)};n.title!==null&&n.title!==void 0&&(t.title=n.title);const i={type:"element",tagName:"a",properties:t,children:e.all(n)};return e.patch(n,i),e.applyData(n,i)}function $A(e,n,t){const i=e.all(n),r=t?UA(t):qg(n),a={},o=[];if(typeof n.checked=="boolean"){const d=i[0];let u;d&&d.type==="element"&&d.tagName==="p"?u=d:(u={type:"element",tagName:"p",properties:{},children:[]},i.unshift(u)),u.children.length>0&&u.children.unshift({type:"text",value:" "}),u.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:n.checked,disabled:!0},children:[]}),a.className=["task-list-item"]}let s=-1;for(;++s<i.length;){const d=i[s];(r||s!==0||d.type!=="element"||d.tagName!=="p")&&o.push({type:"text",value:`
`}),d.type==="element"&&d.tagName==="p"&&!r?o.push(...d.children):o.push(d)}const l=i[i.length-1];l&&(r||l.type!=="element"||l.tagName!=="p")&&o.push({type:"text",value:`
`});const c={type:"element",tagName:"li",properties:a,children:o};return e.patch(n,c),e.applyData(n,c)}function UA(e){let n=!1;if(e.type==="list"){n=e.spread||!1;const t=e.children;let i=-1;for(;!n&&++i<t.length;)n=qg(t[i])}return n}function qg(e){const n=e.spread;return n??e.children.length>1}function qA(e,n){const t={},i=e.all(n);let r=-1;for(typeof n.start=="number"&&n.start!==1&&(t.start=n.start);++r<i.length;){const o=i[r];if(o.type==="element"&&o.tagName==="li"&&o.properties&&Array.isArray(o.properties.className)&&o.properties.className.includes("task-list-item")){t.className=["contains-task-list"];break}}const a={type:"element",tagName:n.ordered?"ol":"ul",properties:t,children:e.wrap(i,!0)};return e.patch(n,a),e.applyData(n,a)}function YA(e,n){const t={type:"element",tagName:"p",properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}function GA(e,n){const t={type:"root",children:e.wrap(e.all(n))};return e.patch(n,t),e.applyData(n,t)}function KA(e,n){const t={type:"element",tagName:"strong",properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}function QA(e,n){const t=e.all(n),i=t.shift(),r=[];if(i){const o={type:"element",tagName:"thead",properties:{},children:e.wrap([i],!0)};e.patch(n.children[0],o),r.push(o)}if(t.length>0){const o={type:"element",tagName:"tbody",properties:{},children:e.wrap(t,!0)},s=Pu(n.children[1]),l=Ag(n.children[n.children.length-1]);s&&l&&(o.position={start:s,end:l}),r.push(o)}const a={type:"element",tagName:"table",properties:{},children:e.wrap(r,!0)};return e.patch(n,a),e.applyData(n,a)}function XA(e,n,t){const i=t?t.children:void 0,a=(i?i.indexOf(n):1)===0?"th":"td",o=t&&t.type==="table"?t.align:void 0,s=o?o.length:n.children.length;let l=-1;const c=[];for(;++l<s;){const u=n.children[l],p={},f=o?o[l]:void 0;f&&(p.align=f);let m={type:"element",tagName:a,properties:p,children:[]};u&&(m.children=e.all(u),e.patch(u,m),m=e.applyData(u,m)),c.push(m)}const d={type:"element",tagName:"tr",properties:{},children:e.wrap(c,!0)};return e.patch(n,d),e.applyData(n,d)}function JA(e,n){const t={type:"element",tagName:"td",properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}const Qp=9,Xp=32;function ZA(e){const n=String(e),t=/\r?\n|\r/g;let i=t.exec(n),r=0;const a=[];for(;i;)a.push(Jp(n.slice(r,i.index),r>0,!0),i[0]),r=i.index+i[0].length,i=t.exec(n);return a.push(Jp(n.slice(r),r>0,!1)),a.join("")}function Jp(e,n,t){let i=0,r=e.length;if(n){let a=e.codePointAt(i);for(;a===Qp||a===Xp;)i++,a=e.codePointAt(i)}if(t){let a=e.codePointAt(r-1);for(;a===Qp||a===Xp;)r--,a=e.codePointAt(r-1)}return r>i?e.slice(i,r):""}function eC(e,n){const t={type:"text",value:ZA(String(n.value))};return e.patch(n,t),e.applyData(n,t)}function nC(e,n){const t={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(n,t),e.applyData(n,t)}const tC={blockquote:RA,break:MA,code:DA,delete:LA,emphasis:NA,footnoteReference:jA,heading:OA,html:FA,imageReference:zA,image:BA,inlineCode:WA,linkReference:VA,link:HA,listItem:$A,list:qA,paragraph:YA,root:GA,strong:KA,table:QA,tableCell:JA,tableRow:XA,text:eC,thematicBreak:nC,toml:Ia,yaml:Ia,definition:Ia,footnoteDefinition:Ia};function Ia(){}const Yg=-1,Go=0,kr=1,xo=2,Lu=3,Nu=4,ju=5,Ou=6,Gg=7,Kg=8,iC=typeof self=="object"?self:globalThis,Zp=(e,n)=>{switch(e){case"Function":case"SharedWorker":case"Worker":case"eval":case"setInterval":case"setTimeout":throw new TypeError("unable to deserialize "+e)}return new iC[e](n)},rC=(e,n)=>{const t=(r,a)=>(e.set(a,r),r),i=r=>{if(e.has(r))return e.get(r);const[a,o]=n[r];switch(a){case Go:case Yg:return t(o,r);case kr:{const s=t([],r);for(const l of o)s.push(i(l));return s}case xo:{const s=t({},r);for(const[l,c]of o)s[i(l)]=i(c);return s}case Lu:return t(new Date(o),r);case Nu:{const{source:s,flags:l}=o;return t(new RegExp(s,l),r)}case ju:{const s=t(new Map,r);for(const[l,c]of o)s.set(i(l),i(c));return s}case Ou:{const s=t(new Set,r);for(const l of o)s.add(i(l));return s}case Gg:{const{name:s,message:l}=o;return t(Zp(s,l),r)}case Kg:return t(BigInt(o),r);case"BigInt":return t(Object(BigInt(o)),r);case"ArrayBuffer":return t(new Uint8Array(o).buffer,o);case"DataView":{const{buffer:s}=new Uint8Array(o);return t(new DataView(s),o)}}return t(Zp(a,o),r)};return i},ef=e=>rC(new Map,e)(0),jt="",{toString:aC}={},{keys:oC}=Object,er=e=>{const n=typeof e;if(n!=="object"||!e)return[Go,n];const t=aC.call(e).slice(8,-1);switch(t){case"Array":return[kr,jt];case"Object":return[xo,jt];case"Date":return[Lu,jt];case"RegExp":return[Nu,jt];case"Map":return[ju,jt];case"Set":return[Ou,jt];case"DataView":return[kr,t]}return t.includes("Array")?[kr,t]:t.includes("Error")?[Gg,t]:[xo,t]},Aa=([e,n])=>e===Go&&(n==="function"||n==="symbol"),sC=(e,n,t,i)=>{const r=(o,s)=>{const l=i.push(o)-1;return t.set(s,l),l},a=o=>{if(t.has(o))return t.get(o);let[s,l]=er(o);switch(s){case Go:{let d=o;switch(l){case"bigint":s=Kg,d=o.toString();break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+l);d=null;break;case"undefined":return r([Yg],o)}return r([s,d],o)}case kr:{if(l){let p=o;return l==="DataView"?p=new Uint8Array(o.buffer):l==="ArrayBuffer"&&(p=new Uint8Array(o)),r([l,[...p]],o)}const d=[],u=r([s,d],o);for(const p of o)d.push(a(p));return u}case xo:{if(l)switch(l){case"BigInt":return r([l,o.toString()],o);case"Boolean":case"Number":case"String":return r([l,o.valueOf()],o)}if(n&&"toJSON"in o)return a(o.toJSON());const d=[],u=r([s,d],o);for(const p of oC(o))(e||!Aa(er(o[p])))&&d.push([a(p),a(o[p])]);return u}case Lu:return r([s,isNaN(o.getTime())?jt:o.toISOString()],o);case Nu:{const{source:d,flags:u}=o;return r([s,{source:d,flags:u}],o)}case ju:{const d=[],u=r([s,d],o);for(const[p,f]of o)(e||!(Aa(er(p))||Aa(er(f))))&&d.push([a(p),a(f)]);return u}case Ou:{const d=[],u=r([s,d],o);for(const p of o)(e||!Aa(er(p)))&&d.push(a(p));return u}}const{message:c}=o;return r([s,{name:l,message:c}],o)};return a},nf=(e,{json:n,lossy:t}={})=>{const i=[];return sC(!(n||t),!!n,new Map,i)(e),i},ko=typeof structuredClone=="function"?(e,n)=>n&&("json"in n||"lossy"in n)?ef(nf(e,n)):structuredClone(e):(e,n)=>ef(nf(e,n));function lC(e,n){const t=[{type:"text",value:"↩"}];return n>1&&t.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(n)}]}),t}function cC(e,n){return"Back to reference "+(e+1)+(n>1?"-"+n:"")}function uC(e){const n=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",t=e.options.footnoteBackContent||lC,i=e.options.footnoteBackLabel||cC,r=e.options.footnoteLabel||"Footnotes",a=e.options.footnoteLabelTagName||"h2",o=e.options.footnoteLabelProperties||{className:["sr-only"]},s=[];let l=-1;for(;++l<e.footnoteOrder.length;){const c=e.footnoteById.get(e.footnoteOrder[l]);if(!c)continue;const d=e.all(c),u=String(c.identifier).toUpperCase(),p=Vi(u.toLowerCase());let f=0;const m=[],b=e.footnoteCounts.get(u);for(;b!==void 0&&++f<=b;){m.length>0&&m.push({type:"text",value:" "});let g=typeof t=="string"?t:t(l,f);typeof g=="string"&&(g={type:"text",value:g}),m.push({type:"element",tagName:"a",properties:{href:"#"+n+"fnref-"+p+(f>1?"-"+f:""),dataFootnoteBackref:"",ariaLabel:typeof i=="string"?i:i(l,f),className:["data-footnote-backref"]},children:Array.isArray(g)?g:[g]})}const A=d[d.length-1];if(A&&A.type==="element"&&A.tagName==="p"){const g=A.children[A.children.length-1];g&&g.type==="text"?g.value+=" ":A.children.push({type:"text",value:" "}),A.children.push(...m)}else d.push(...m);const y={type:"element",tagName:"li",properties:{id:n+"fn-"+p},children:e.wrap(d,!0)};e.patch(c,y),s.push(y)}if(s.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:a,properties:{...ko(o),id:"footnote-label"},children:[{type:"text",value:r}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:e.wrap(s,!0)},{type:"text",value:`
`}]}}const Ko=function(e){if(e==null)return hC;if(typeof e=="function")return Qo(e);if(typeof e=="object")return Array.isArray(e)?dC(e):pC(e);if(typeof e=="string")return fC(e);throw new Error("Expected function, string, or object as test")};function dC(e){const n=[];let t=-1;for(;++t<e.length;)n[t]=Ko(e[t]);return Qo(i);function i(...r){let a=-1;for(;++a<n.length;)if(n[a].apply(this,r))return!0;return!1}}function pC(e){const n=e;return Qo(t);function t(i){const r=i;let a;for(a in e)if(r[a]!==n[a])return!1;return!0}}function fC(e){return Qo(n);function n(t){return t&&t.type===e}}function Qo(e){return n;function n(t,i,r){return!!(mC(t)&&e.call(this,t,typeof i=="number"?i:void 0,r||void 0))}}function hC(){return!0}function mC(e){return e!==null&&typeof e=="object"&&"type"in e}const Qg=[],gC=!0,pc=!1,yC="skip";function Xg(e,n,t,i){let r;typeof n=="function"&&typeof t!="function"?(i=t,t=n):r=n;const a=Ko(r),o=i?-1:1;s(e,void 0,[])();function s(l,c,d){const u=l&&typeof l=="object"?l:{};if(typeof u.type=="string"){const f=typeof u.tagName=="string"?u.tagName:typeof u.name=="string"?u.name:void 0;Object.defineProperty(p,"name",{value:"node ("+(l.type+(f?"<"+f+">":""))+")"})}return p;function p(){let f=Qg,m,b,A;if((!n||a(l,c,d[d.length-1]||void 0))&&(f=vC(t(l,d)),f[0]===pc))return f;if("children"in l&&l.children){const y=l;if(y.children&&f[0]!==yC)for(b=(i?y.children.length:-1)+o,A=d.concat(y);b>-1&&b<y.children.length;){const g=y.children[b];if(m=s(g,b,A)(),m[0]===pc)return m;b=typeof m[1]=="number"?m[1]:b+o}}return f}}}function vC(e){return Array.isArray(e)?e:typeof e=="number"?[gC,e]:e==null?Qg:[e]}function Fu(e,n,t,i){let r,a,o;typeof n=="function"&&typeof t!="function"?(a=void 0,o=n,r=t):(a=n,o=t,r=i),Xg(e,a,s,r);function s(l,c){const d=c[c.length-1],u=d?d.children.indexOf(l):void 0;return o(l,u,d)}}const fc={}.hasOwnProperty,bC={};function wC(e,n){const t=n||bC,i=new Map,r=new Map,a=new Map,o={...tC,...t.handlers},s={all:c,applyData:kC,definitionById:i,footnoteById:r,footnoteCounts:a,footnoteOrder:[],handlers:o,one:l,options:t,patch:xC,wrap:IC};return Fu(e,function(d){if(d.type==="definition"||d.type==="footnoteDefinition"){const u=d.type==="definition"?i:r,p=String(d.identifier).toUpperCase();u.has(p)||u.set(p,d)}}),s;function l(d,u){const p=d.type,f=s.handlers[p];if(fc.call(s.handlers,p)&&f)return f(s,d,u);if(s.options.passThrough&&s.options.passThrough.includes(p)){if("children"in d){const{children:b,...A}=d,y=ko(A);return y.children=s.all(d),y}return ko(d)}return(s.options.unknownHandler||SC)(s,d,u)}function c(d){const u=[];if("children"in d){const p=d.children;let f=-1;for(;++f<p.length;){const m=s.one(p[f],d);if(m){if(f&&p[f-1].type==="break"&&(!Array.isArray(m)&&m.type==="text"&&(m.value=tf(m.value)),!Array.isArray(m)&&m.type==="element")){const b=m.children[0];b&&b.type==="text"&&(b.value=tf(b.value))}Array.isArray(m)?u.push(...m):u.push(m)}}}return u}}function xC(e,n){e.position&&(n.position=l1(e))}function kC(e,n){let t=n;if(e&&e.data){const i=e.data.hName,r=e.data.hChildren,a=e.data.hProperties;if(typeof i=="string")if(t.type==="element")t.tagName=i;else{const o="children"in t?t.children:[t];t={type:"element",tagName:i,properties:{},children:o}}t.type==="element"&&a&&Object.assign(t.properties,ko(a)),"children"in t&&t.children&&r!==null&&r!==void 0&&(t.children=r)}return t}function SC(e,n){const t=n.data||{},i="value"in n&&!(fc.call(t,"hProperties")||fc.call(t,"hChildren"))?{type:"text",value:n.value}:{type:"element",tagName:"div",properties:{},children:e.all(n)};return e.patch(n,i),e.applyData(n,i)}function IC(e,n){const t=[];let i=-1;for(n&&t.push({type:"text",value:`
`});++i<e.length;)i&&t.push({type:"text",value:`
`}),t.push(e[i]);return n&&e.length>0&&t.push({type:"text",value:`
`}),t}function tf(e){let n=0,t=e.charCodeAt(n);for(;t===9||t===32;)n++,t=e.charCodeAt(n);return e.slice(n)}function rf(e,n){const t=wC(e,n),i=t.one(e,void 0),r=uC(t),a=Array.isArray(i)?{type:"root",children:i}:i||{type:"root",children:[]};return r&&a.children.push({type:"text",value:`
`},r),a}function AC(e,n){return e&&"run"in e?async function(t,i){const r=rf(t,{file:i,...n});await e.run(r,i)}:function(t,i){return rf(t,{file:i,...e||n})}}function af(e){if(e)throw e}var Ha=Object.prototype.hasOwnProperty,Jg=Object.prototype.toString,of=Object.defineProperty,sf=Object.getOwnPropertyDescriptor,lf=function(n){return typeof Array.isArray=="function"?Array.isArray(n):Jg.call(n)==="[object Array]"},cf=function(n){if(!n||Jg.call(n)!=="[object Object]")return!1;var t=Ha.call(n,"constructor"),i=n.constructor&&n.constructor.prototype&&Ha.call(n.constructor.prototype,"isPrototypeOf");if(n.constructor&&!t&&!i)return!1;var r;for(r in n);return typeof r>"u"||Ha.call(n,r)},uf=function(n,t){of&&t.name==="__proto__"?of(n,t.name,{enumerable:!0,configurable:!0,value:t.newValue,writable:!0}):n[t.name]=t.newValue},df=function(n,t){if(t==="__proto__")if(Ha.call(n,t)){if(sf)return sf(n,t).value}else return;return n[t]},CC=function e(){var n,t,i,r,a,o,s=arguments[0],l=1,c=arguments.length,d=!1;for(typeof s=="boolean"&&(d=s,s=arguments[1]||{},l=2),(s==null||typeof s!="object"&&typeof s!="function")&&(s={});l<c;++l)if(n=arguments[l],n!=null)for(t in n)i=df(s,t),r=df(n,t),s!==r&&(d&&r&&(cf(r)||(a=lf(r)))?(a?(a=!1,o=i&&lf(i)?i:[]):o=i&&cf(i)?i:{},uf(s,{name:t,newValue:e(d,o,r)})):typeof r<"u"&&uf(s,{name:t,newValue:r}));return s};const js=yc(CC);function hc(e){if(typeof e!="object"||e===null)return!1;const n=Object.getPrototypeOf(e);return(n===null||n===Object.prototype||Object.getPrototypeOf(n)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function PC(){const e=[],n={run:t,use:i};return n;function t(...r){let a=-1;const o=r.pop();if(typeof o!="function")throw new TypeError("Expected function as last argument, not "+o);s(null,...r);function s(l,...c){const d=e[++a];let u=-1;if(l){o(l);return}for(;++u<r.length;)(c[u]===null||c[u]===void 0)&&(c[u]=r[u]);r=c,d?_C(d,s)(...c):o(null,...c)}}function i(r){if(typeof r!="function")throw new TypeError("Expected `middelware` to be a function, not "+r);return e.push(r),n}}function _C(e,n){let t;return i;function i(...o){const s=e.length>o.length;let l;s&&o.push(r);try{l=e.apply(this,o)}catch(c){const d=c;if(s&&t)throw d;return r(d)}s||(l&&l.then&&typeof l.then=="function"?l.then(a,r):l instanceof Error?r(l):a(l))}function r(o,...s){t||(t=!0,n(o,...s))}function a(o){r(null,o)}}const Ln={basename:EC,dirname:TC,extname:RC,join:MC,sep:"/"};function EC(e,n){if(n!==void 0&&typeof n!="string")throw new TypeError('"ext" argument must be a string');na(e);let t=0,i=-1,r=e.length,a;if(n===void 0||n.length===0||n.length>e.length){for(;r--;)if(e.codePointAt(r)===47){if(a){t=r+1;break}}else i<0&&(a=!0,i=r+1);return i<0?"":e.slice(t,i)}if(n===e)return"";let o=-1,s=n.length-1;for(;r--;)if(e.codePointAt(r)===47){if(a){t=r+1;break}}else o<0&&(a=!0,o=r+1),s>-1&&(e.codePointAt(r)===n.codePointAt(s--)?s<0&&(i=r):(s=-1,i=o));return t===i?i=o:i<0&&(i=e.length),e.slice(t,i)}function TC(e){if(na(e),e.length===0)return".";let n=-1,t=e.length,i;for(;--t;)if(e.codePointAt(t)===47){if(i){n=t;break}}else i||(i=!0);return n<0?e.codePointAt(0)===47?"/":".":n===1&&e.codePointAt(0)===47?"//":e.slice(0,n)}function RC(e){na(e);let n=e.length,t=-1,i=0,r=-1,a=0,o;for(;n--;){const s=e.codePointAt(n);if(s===47){if(o){i=n+1;break}continue}t<0&&(o=!0,t=n+1),s===46?r<0?r=n:a!==1&&(a=1):r>-1&&(a=-1)}return r<0||t<0||a===0||a===1&&r===t-1&&r===i+1?"":e.slice(r,t)}function MC(...e){let n=-1,t;for(;++n<e.length;)na(e[n]),e[n]&&(t=t===void 0?e[n]:t+"/"+e[n]);return t===void 0?".":DC(t)}function DC(e){na(e);const n=e.codePointAt(0)===47;let t=LC(e,!n);return t.length===0&&!n&&(t="."),t.length>0&&e.codePointAt(e.length-1)===47&&(t+="/"),n?"/"+t:t}function LC(e,n){let t="",i=0,r=-1,a=0,o=-1,s,l;for(;++o<=e.length;){if(o<e.length)s=e.codePointAt(o);else{if(s===47)break;s=47}if(s===47){if(!(r===o-1||a===1))if(r!==o-1&&a===2){if(t.length<2||i!==2||t.codePointAt(t.length-1)!==46||t.codePointAt(t.length-2)!==46){if(t.length>2){if(l=t.lastIndexOf("/"),l!==t.length-1){l<0?(t="",i=0):(t=t.slice(0,l),i=t.length-1-t.lastIndexOf("/")),r=o,a=0;continue}}else if(t.length>0){t="",i=0,r=o,a=0;continue}}n&&(t=t.length>0?t+"/..":"..",i=2)}else t.length>0?t+="/"+e.slice(r+1,o):t=e.slice(r+1,o),i=o-r-1;r=o,a=0}else s===46&&a>-1?a++:a=-1}return t}function na(e){if(typeof e!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}const NC={cwd:jC};function jC(){return"/"}function mc(e){return!!(e!==null&&typeof e=="object"&&"href"in e&&e.href&&"protocol"in e&&e.protocol&&e.auth===void 0)}function OC(e){if(typeof e=="string")e=new URL(e);else if(!mc(e)){const n=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw n.code="ERR_INVALID_ARG_TYPE",n}if(e.protocol!=="file:"){const n=new TypeError("The URL must be of scheme file");throw n.code="ERR_INVALID_URL_SCHEME",n}return FC(e)}function FC(e){if(e.hostname!==""){const i=new TypeError('File URL host must be "localhost" or empty on darwin');throw i.code="ERR_INVALID_FILE_URL_HOST",i}const n=e.pathname;let t=-1;for(;++t<n.length;)if(n.codePointAt(t)===37&&n.codePointAt(t+1)===50){const i=n.codePointAt(t+2);if(i===70||i===102){const r=new TypeError("File URL path must not include encoded / characters");throw r.code="ERR_INVALID_FILE_URL_PATH",r}}return decodeURIComponent(n)}const Os=["history","path","basename","stem","extname","dirname"];class Zg{constructor(n){let t;n?mc(n)?t={path:n}:typeof n=="string"||zC(n)?t={value:n}:t=n:t={},this.cwd="cwd"in t?"":NC.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let i=-1;for(;++i<Os.length;){const a=Os[i];a in t&&t[a]!==void 0&&t[a]!==null&&(this[a]=a==="history"?[...t[a]]:t[a])}let r;for(r in t)Os.includes(r)||(this[r]=t[r])}get basename(){return typeof this.path=="string"?Ln.basename(this.path):void 0}set basename(n){zs(n,"basename"),Fs(n,"basename"),this.path=Ln.join(this.dirname||"",n)}get dirname(){return typeof this.path=="string"?Ln.dirname(this.path):void 0}set dirname(n){pf(this.basename,"dirname"),this.path=Ln.join(n||"",this.basename)}get extname(){return typeof this.path=="string"?Ln.extname(this.path):void 0}set extname(n){if(Fs(n,"extname"),pf(this.dirname,"extname"),n){if(n.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(n.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=Ln.join(this.dirname,this.stem+(n||""))}get path(){return this.history[this.history.length-1]}set path(n){mc(n)&&(n=OC(n)),zs(n,"path"),this.path!==n&&this.history.push(n)}get stem(){return typeof this.path=="string"?Ln.basename(this.path,this.extname):void 0}set stem(n){zs(n,"stem"),Fs(n,"stem"),this.path=Ln.join(this.dirname||"",n+(this.extname||""))}fail(n,t,i){const r=this.message(n,t,i);throw r.fatal=!0,r}info(n,t,i){const r=this.message(n,t,i);return r.fatal=void 0,r}message(n,t,i){const r=new We(n,t,i);return this.path&&(r.name=this.path+":"+r.name,r.file=this.path),r.fatal=!1,this.messages.push(r),r}toString(n){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(n||void 0).decode(this.value)}}function Fs(e,n){if(e&&e.includes(Ln.sep))throw new Error("`"+n+"` cannot be a path: did not expect `"+Ln.sep+"`")}function zs(e,n){if(!e)throw new Error("`"+n+"` cannot be empty")}function pf(e,n){if(!e)throw new Error("Setting `"+n+"` requires `path` to be set too")}function zC(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const BC=function(e){const i=this.constructor.prototype,r=i[e],a=function(){return r.apply(a,arguments)};return Object.setPrototypeOf(a,i),a},WC={}.hasOwnProperty;class zu extends BC{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=PC()}copy(){const n=new zu;let t=-1;for(;++t<this.attachers.length;){const i=this.attachers[t];n.use(...i)}return n.data(js(!0,{},this.namespace)),n}data(n,t){return typeof n=="string"?arguments.length===2?(Vs("data",this.frozen),this.namespace[n]=t,this):WC.call(this.namespace,n)&&this.namespace[n]||void 0:n?(Vs("data",this.frozen),this.namespace=n,this):this.namespace}freeze(){if(this.frozen)return this;const n=this;for(;++this.freezeIndex<this.attachers.length;){const[t,...i]=this.attachers[this.freezeIndex];if(i[0]===!1)continue;i[0]===!0&&(i[0]=void 0);const r=t.call(n,...i);typeof r=="function"&&this.transformers.use(r)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(n){this.freeze();const t=Ca(n),i=this.parser||this.Parser;return Bs("parse",i),i(String(t),t)}process(n,t){const i=this;return this.freeze(),Bs("process",this.parser||this.Parser),Ws("process",this.compiler||this.Compiler),t?r(void 0,t):new Promise(r);function r(a,o){const s=Ca(n),l=i.parse(s);i.run(l,s,function(d,u,p){if(d||!u||!p)return c(d);const f=u,m=i.stringify(f,p);$C(m)?p.value=m:p.result=m,c(d,p)});function c(d,u){d||!u?o(d):a?a(u):t(void 0,u)}}}processSync(n){let t=!1,i;return this.freeze(),Bs("processSync",this.parser||this.Parser),Ws("processSync",this.compiler||this.Compiler),this.process(n,r),hf("processSync","process",t),i;function r(a,o){t=!0,af(a),i=o}}run(n,t,i){ff(n),this.freeze();const r=this.transformers;return!i&&typeof t=="function"&&(i=t,t=void 0),i?a(void 0,i):new Promise(a);function a(o,s){const l=Ca(t);r.run(n,l,c);function c(d,u,p){const f=u||n;d?s(d):o?o(f):i(void 0,f,p)}}}runSync(n,t){let i=!1,r;return this.run(n,t,a),hf("runSync","run",i),r;function a(o,s){af(o),r=s,i=!0}}stringify(n,t){this.freeze();const i=Ca(t),r=this.compiler||this.Compiler;return Ws("stringify",r),ff(n),r(n,i)}use(n,...t){const i=this.attachers,r=this.namespace;if(Vs("use",this.frozen),n!=null)if(typeof n=="function")l(n,t);else if(typeof n=="object")Array.isArray(n)?s(n):o(n);else throw new TypeError("Expected usable value, not `"+n+"`");return this;function a(c){if(typeof c=="function")l(c,[]);else if(typeof c=="object")if(Array.isArray(c)){const[d,...u]=c;l(d,u)}else o(c);else throw new TypeError("Expected usable value, not `"+c+"`")}function o(c){if(!("plugins"in c)&&!("settings"in c))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");s(c.plugins),c.settings&&(r.settings=js(!0,r.settings,c.settings))}function s(c){let d=-1;if(c!=null)if(Array.isArray(c))for(;++d<c.length;){const u=c[d];a(u)}else throw new TypeError("Expected a list of plugins, not `"+c+"`")}function l(c,d){let u=-1,p=-1;for(;++u<i.length;)if(i[u][0]===c){p=u;break}if(p===-1)i.push([c,...d]);else if(d.length>0){let[f,...m]=d;const b=i[p][1];hc(b)&&hc(f)&&(f=js(!0,b,f)),i[p]=[c,f,...m]}}}}const VC=new zu().freeze();function Bs(e,n){if(typeof n!="function")throw new TypeError("Cannot `"+e+"` without `parser`")}function Ws(e,n){if(typeof n!="function")throw new TypeError("Cannot `"+e+"` without `compiler`")}function Vs(e,n){if(n)throw new Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function ff(e){if(!hc(e)||typeof e.type!="string")throw new TypeError("Expected node, got `"+e+"`")}function hf(e,n,t){if(!t)throw new Error("`"+e+"` finished async. Use `"+n+"` instead")}function Ca(e){return HC(e)?e:new Zg(e)}function HC(e){return!!(e&&typeof e=="object"&&"message"in e&&"messages"in e)}function $C(e){return typeof e=="string"||UC(e)}function UC(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const qC="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",mf=[],gf={allowDangerousHtml:!0},YC=/^(https?|ircs?|mailto|xmpp)$/i,GC=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function KC(e){const n=QC(e),t=XC(e);return JC(n.runSync(n.parse(t),t),e)}function QC(e){const n=e.rehypePlugins||mf,t=e.remarkPlugins||mf,i=e.remarkRehypeOptions?{...e.remarkRehypeOptions,...gf}:gf;return VC().use(TA).use(t).use(AC,i).use(n)}function XC(e){const n=e.children||"",t=new Zg;return typeof n=="string"&&(t.value=n),t}function JC(e,n){const t=n.allowedElements,i=n.allowElement,r=n.components,a=n.disallowedElements,o=n.skipHtml,s=n.unwrapDisallowed,l=n.urlTransform||ZC;for(const d of GC)Object.hasOwn(n,d.from)&&(""+d.from+(d.to?"use `"+d.to+"` instead":"remove it")+qC+d.id,void 0);return n.className&&(e={type:"element",tagName:"div",properties:{className:n.className},children:e.type==="root"?e.children:[e]}),Fu(e,c),f1(e,{Fragment:h.Fragment,components:r,ignoreInvalidStyle:!0,jsx:h.jsx,jsxs:h.jsxs,passKeys:!0,passNode:!0});function c(d,u,p){if(d.type==="raw"&&p&&typeof u=="number")return o?p.children.splice(u,1):p.children[u]={type:"text",value:d.value},u;if(d.type==="element"){let f;for(f in Ds)if(Object.hasOwn(Ds,f)&&Object.hasOwn(d.properties,f)){const m=d.properties[f],b=Ds[f];(b===null||b.includes(d.tagName))&&(d.properties[f]=l(String(m||""),f,d))}}if(d.type==="element"){let f=t?!t.includes(d.tagName):a?a.includes(d.tagName):!1;if(!f&&i&&typeof u=="number"&&(f=!i(d,u,p)),f&&p&&typeof u=="number")return s&&d.children?p.children.splice(u,1,...d.children):p.children.splice(u,1),u}}}function ZC(e){const n=e.indexOf(":"),t=e.indexOf("?"),i=e.indexOf("#"),r=e.indexOf("/");return n===-1||r!==-1&&n>r||t!==-1&&n>t||i!==-1&&n>i||YC.test(e.slice(0,n))?e:""}function yf(e,n){const t=String(e);if(typeof n!="string")throw new TypeError("Expected character");let i=0,r=t.indexOf(n);for(;r!==-1;)i++,r=t.indexOf(n,r+n.length);return i}function eP(e){if(typeof e!="string")throw new TypeError("Expected a string");return e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}function nP(e,n,t){const r=Ko((t||{}).ignore||[]),a=tP(n);let o=-1;for(;++o<a.length;)Xg(e,"text",s);function s(c,d){let u=-1,p;for(;++u<d.length;){const f=d[u],m=p?p.children:void 0;if(r(f,m?m.indexOf(f):void 0,p))return;p=f}if(p)return l(c,d)}function l(c,d){const u=d[d.length-1],p=a[o][0],f=a[o][1];let m=0;const A=u.children.indexOf(c);let y=!1,g=[];p.lastIndex=0;let v=p.exec(c.value);for(;v;){const I=v.index,P={index:v.index,input:v.input,stack:[...d,c]};let S=f(...v,P);if(typeof S=="string"&&(S=S.length>0?{type:"text",value:S}:void 0),S===!1?p.lastIndex=I+1:(m!==I&&g.push({type:"text",value:c.value.slice(m,I)}),Array.isArray(S)?g.push(...S):S&&g.push(S),m=I+v[0].length,y=!0),!p.global)break;v=p.exec(c.value)}return y?(m<c.value.length&&g.push({type:"text",value:c.value.slice(m)}),u.children.splice(A,1,...g)):g=[c],A+g.length}}function tP(e){const n=[];if(!Array.isArray(e))throw new TypeError("Expected find and replace tuple or list of tuples");const t=!e[0]||Array.isArray(e[0])?e:[e];let i=-1;for(;++i<t.length;){const r=t[i];n.push([iP(r[0]),rP(r[1])])}return n}function iP(e){return typeof e=="string"?new RegExp(eP(e),"g"):e}function rP(e){return typeof e=="function"?e:function(){return e}}const Hs="phrasing",$s=["autolink","link","image","label"];function aP(){return{transforms:[pP],enter:{literalAutolink:sP,literalAutolinkEmail:Us,literalAutolinkHttp:Us,literalAutolinkWww:Us},exit:{literalAutolink:dP,literalAutolinkEmail:uP,literalAutolinkHttp:lP,literalAutolinkWww:cP}}}function oP(){return{unsafe:[{character:"@",before:"[+\\-.\\w]",after:"[\\-.\\w]",inConstruct:Hs,notInConstruct:$s},{character:".",before:"[Ww]",after:"[\\-.\\w]",inConstruct:Hs,notInConstruct:$s},{character:":",before:"[ps]",after:"\\/",inConstruct:Hs,notInConstruct:$s}]}}function sP(e){this.enter({type:"link",title:null,url:"",children:[]},e)}function Us(e){this.config.enter.autolinkProtocol.call(this,e)}function lP(e){this.config.exit.autolinkProtocol.call(this,e)}function cP(e){this.config.exit.data.call(this,e);const n=this.stack[this.stack.length-1];n.type,n.url="http://"+this.sliceSerialize(e)}function uP(e){this.config.exit.autolinkEmail.call(this,e)}function dP(e){this.exit(e)}function pP(e){nP(e,[[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi,fP],[new RegExp("(?<=^|\\s|\\p{P}|\\p{S})([-.\\w+]+)@([-\\w]+(?:\\.[-\\w]+)+)","gu"),hP]],{ignore:["link","linkReference"]})}function fP(e,n,t,i,r){let a="";if(!ey(r)||(/^w/i.test(n)&&(t=n+t,n="",a="http://"),!mP(t)))return!1;const o=gP(t+i);if(!o[0])return!1;const s={type:"link",title:null,url:a+n+o[0],children:[{type:"text",value:n+o[0]}]};return o[1]?[s,{type:"text",value:o[1]}]:s}function hP(e,n,t,i){return!ey(i,!0)||/[-\d_]$/.test(t)?!1:{type:"link",title:null,url:"mailto:"+n+"@"+t,children:[{type:"text",value:n+"@"+t}]}}function mP(e){const n=e.split(".");return!(n.length<2||n[n.length-1]&&(/_/.test(n[n.length-1])||!/[a-zA-Z\d]/.test(n[n.length-1]))||n[n.length-2]&&(/_/.test(n[n.length-2])||!/[a-zA-Z\d]/.test(n[n.length-2])))}function gP(e){const n=/[!"&'),.:;<>?\]}]+$/.exec(e);if(!n)return[e,void 0];e=e.slice(0,n.index);let t=n[0],i=t.indexOf(")");const r=yf(e,"(");let a=yf(e,")");for(;i!==-1&&r>a;)e+=t.slice(0,i+1),t=t.slice(i+1),i=t.indexOf(")"),a++;return[e,t]}function ey(e,n){const t=e.input.charCodeAt(e.index-1);return(e.index===0||Jt(t)||qo(t))&&(!n||t!==47)}ny.peek=AP;function yP(){this.buffer()}function vP(e){this.enter({type:"footnoteReference",identifier:"",label:""},e)}function bP(){this.buffer()}function wP(e){this.enter({type:"footnoteDefinition",identifier:"",label:"",children:[]},e)}function xP(e){const n=this.resume(),t=this.stack[this.stack.length-1];t.type,t.identifier=En(this.sliceSerialize(e)).toLowerCase(),t.label=n}function kP(e){this.exit(e)}function SP(e){const n=this.resume(),t=this.stack[this.stack.length-1];t.type,t.identifier=En(this.sliceSerialize(e)).toLowerCase(),t.label=n}function IP(e){this.exit(e)}function AP(){return"["}function ny(e,n,t,i){const r=t.createTracker(i);let a=r.move("[^");const o=t.enter("footnoteReference"),s=t.enter("reference");return a+=r.move(t.safe(t.associationId(e),{after:"]",before:a})),s(),o(),a+=r.move("]"),a}function CP(){return{enter:{gfmFootnoteCallString:yP,gfmFootnoteCall:vP,gfmFootnoteDefinitionLabelString:bP,gfmFootnoteDefinition:wP},exit:{gfmFootnoteCallString:xP,gfmFootnoteCall:kP,gfmFootnoteDefinitionLabelString:SP,gfmFootnoteDefinition:IP}}}function PP(e){let n=!1;return e&&e.firstLineBlank&&(n=!0),{handlers:{footnoteDefinition:t,footnoteReference:ny},unsafe:[{character:"[",inConstruct:["label","phrasing","reference"]}]};function t(i,r,a,o){const s=a.createTracker(o);let l=s.move("[^");const c=a.enter("footnoteDefinition"),d=a.enter("label");return l+=s.move(a.safe(a.associationId(i),{before:l,after:"]"})),d(),l+=s.move("]:"),i.children&&i.children.length>0&&(s.shift(4),l+=s.move((n?`
`:" ")+a.indentLines(a.containerFlow(i,s.current()),n?ty:_P))),c(),l}}function _P(e,n,t){return n===0?e:ty(e,n,t)}function ty(e,n,t){return(t?"":"    ")+e}const EP=["autolink","destinationLiteral","destinationRaw","reference","titleQuote","titleApostrophe"];iy.peek=LP;function TP(){return{canContainEols:["delete"],enter:{strikethrough:MP},exit:{strikethrough:DP}}}function RP(){return{unsafe:[{character:"~",inConstruct:"phrasing",notInConstruct:EP}],handlers:{delete:iy}}}function MP(e){this.enter({type:"delete",children:[]},e)}function DP(e){this.exit(e)}function iy(e,n,t,i){const r=t.createTracker(i),a=t.enter("strikethrough");let o=r.move("~~");return o+=t.containerPhrasing(e,{...r.current(),before:o,after:"~"}),o+=r.move("~~"),a(),o}function LP(){return"~"}function NP(e){return e.length}function jP(e,n){const t=n||{},i=(t.align||[]).concat(),r=t.stringLength||NP,a=[],o=[],s=[],l=[];let c=0,d=-1;for(;++d<e.length;){const b=[],A=[];let y=-1;for(e[d].length>c&&(c=e[d].length);++y<e[d].length;){const g=OP(e[d][y]);if(t.alignDelimiters!==!1){const v=r(g);A[y]=v,(l[y]===void 0||v>l[y])&&(l[y]=v)}b.push(g)}o[d]=b,s[d]=A}let u=-1;if(typeof i=="object"&&"length"in i)for(;++u<c;)a[u]=vf(i[u]);else{const b=vf(i);for(;++u<c;)a[u]=b}u=-1;const p=[],f=[];for(;++u<c;){const b=a[u];let A="",y="";b===99?(A=":",y=":"):b===108?A=":":b===114&&(y=":");let g=t.alignDelimiters===!1?1:Math.max(1,l[u]-A.length-y.length);const v=A+"-".repeat(g)+y;t.alignDelimiters!==!1&&(g=A.length+g+y.length,g>l[u]&&(l[u]=g),f[u]=g),p[u]=v}o.splice(1,0,p),s.splice(1,0,f),d=-1;const m=[];for(;++d<o.length;){const b=o[d],A=s[d];u=-1;const y=[];for(;++u<c;){const g=b[u]||"";let v="",I="";if(t.alignDelimiters!==!1){const P=l[u]-(A[u]||0),S=a[u];S===114?v=" ".repeat(P):S===99?P%2?(v=" ".repeat(P/2+.5),I=" ".repeat(P/2-.5)):(v=" ".repeat(P/2),I=v):I=" ".repeat(P)}t.delimiterStart!==!1&&!u&&y.push("|"),t.padding!==!1&&!(t.alignDelimiters===!1&&g==="")&&(t.delimiterStart!==!1||u)&&y.push(" "),t.alignDelimiters!==!1&&y.push(v),y.push(g),t.alignDelimiters!==!1&&y.push(I),t.padding!==!1&&y.push(" "),(t.delimiterEnd!==!1||u!==c-1)&&y.push("|")}m.push(t.delimiterEnd===!1?y.join("").replace(/ +$/,""):y.join(""))}return m.join(`
`)}function OP(e){return e==null?"":String(e)}function vf(e){const n=typeof e=="string"?e.codePointAt(0):0;return n===67||n===99?99:n===76||n===108?108:n===82||n===114?114:0}function FP(e,n,t,i){const r=t.enter("blockquote"),a=t.createTracker(i);a.move("> "),a.shift(2);const o=t.indentLines(t.containerFlow(e,a.current()),zP);return r(),o}function zP(e,n,t){return">"+(t?"":" ")+e}function BP(e,n){return bf(e,n.inConstruct,!0)&&!bf(e,n.notInConstruct,!1)}function bf(e,n,t){if(typeof n=="string"&&(n=[n]),!n||n.length===0)return t;let i=-1;for(;++i<n.length;)if(e.includes(n[i]))return!0;return!1}function wf(e,n,t,i){let r=-1;for(;++r<t.unsafe.length;)if(t.unsafe[r].character===`
`&&BP(t.stack,t.unsafe[r]))return/[ \t]/.test(i.before)?"":" ";return`\\
`}function WP(e,n){const t=String(e);let i=t.indexOf(n),r=i,a=0,o=0;if(typeof n!="string")throw new TypeError("Expected substring");for(;i!==-1;)i===r?++a>o&&(o=a):a=1,r=i+n.length,i=t.indexOf(n,r);return o}function VP(e,n){return!!(n.options.fences===!1&&e.value&&!e.lang&&/[^ \r\n]/.test(e.value)&&!/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(e.value))}function HP(e){const n=e.options.fence||"`";if(n!=="`"&&n!=="~")throw new Error("Cannot serialize code with `"+n+"` for `options.fence`, expected `` ` `` or `~`");return n}function $P(e,n,t,i){const r=HP(t),a=e.value||"",o=r==="`"?"GraveAccent":"Tilde";if(VP(e,t)){const u=t.enter("codeIndented"),p=t.indentLines(a,UP);return u(),p}const s=t.createTracker(i),l=r.repeat(Math.max(WP(a,r)+1,3)),c=t.enter("codeFenced");let d=s.move(l);if(e.lang){const u=t.enter(`codeFencedLang${o}`);d+=s.move(t.safe(e.lang,{before:d,after:" ",encode:["`"],...s.current()})),u()}if(e.lang&&e.meta){const u=t.enter(`codeFencedMeta${o}`);d+=s.move(" "),d+=s.move(t.safe(e.meta,{before:d,after:`
`,encode:["`"],...s.current()})),u()}return d+=s.move(`
`),a&&(d+=s.move(a+`
`)),d+=s.move(l),c(),d}function UP(e,n,t){return(t?"":"    ")+e}function Bu(e){const n=e.options.quote||'"';if(n!=='"'&&n!=="'")throw new Error("Cannot serialize title with `"+n+"` for `options.quote`, expected `\"`, or `'`");return n}function qP(e,n,t,i){const r=Bu(t),a=r==='"'?"Quote":"Apostrophe",o=t.enter("definition");let s=t.enter("label");const l=t.createTracker(i);let c=l.move("[");return c+=l.move(t.safe(t.associationId(e),{before:c,after:"]",...l.current()})),c+=l.move("]: "),s(),!e.url||/[\0- \u007F]/.test(e.url)?(s=t.enter("destinationLiteral"),c+=l.move("<"),c+=l.move(t.safe(e.url,{before:c,after:">",...l.current()})),c+=l.move(">")):(s=t.enter("destinationRaw"),c+=l.move(t.safe(e.url,{before:c,after:e.title?" ":`
`,...l.current()}))),s(),e.title&&(s=t.enter(`title${a}`),c+=l.move(" "+r),c+=l.move(t.safe(e.title,{before:c,after:r,...l.current()})),c+=l.move(r),s()),o(),c}function YP(e){const n=e.options.emphasis||"*";if(n!=="*"&&n!=="_")throw new Error("Cannot serialize emphasis with `"+n+"` for `options.emphasis`, expected `*`, or `_`");return n}function qr(e){return"&#x"+e.toString(16).toUpperCase()+";"}function So(e,n,t){const i=ji(e),r=ji(n);return i===void 0?r===void 0?t==="_"?{inside:!0,outside:!0}:{inside:!1,outside:!1}:r===1?{inside:!0,outside:!0}:{inside:!1,outside:!0}:i===1?r===void 0?{inside:!1,outside:!1}:r===1?{inside:!0,outside:!0}:{inside:!1,outside:!1}:r===void 0?{inside:!1,outside:!1}:r===1?{inside:!0,outside:!1}:{inside:!1,outside:!1}}ry.peek=GP;function ry(e,n,t,i){const r=YP(t),a=t.enter("emphasis"),o=t.createTracker(i),s=o.move(r);let l=o.move(t.containerPhrasing(e,{after:r,before:s,...o.current()}));const c=l.charCodeAt(0),d=So(i.before.charCodeAt(i.before.length-1),c,r);d.inside&&(l=qr(c)+l.slice(1));const u=l.charCodeAt(l.length-1),p=So(i.after.charCodeAt(0),u,r);p.inside&&(l=l.slice(0,-1)+qr(u));const f=o.move(r);return a(),t.attentionEncodeSurroundingInfo={after:p.outside,before:d.outside},s+l+f}function GP(e,n,t){return t.options.emphasis||"*"}function KP(e,n){let t=!1;return Fu(e,function(i){if("value"in i&&/\r?\n|\r/.test(i.value)||i.type==="break")return t=!0,pc}),!!((!e.depth||e.depth<3)&&Ru(e)&&(n.options.setext||t))}function QP(e,n,t,i){const r=Math.max(Math.min(6,e.depth||1),1),a=t.createTracker(i);if(KP(e,t)){const d=t.enter("headingSetext"),u=t.enter("phrasing"),p=t.containerPhrasing(e,{...a.current(),before:`
`,after:`
`});return u(),d(),p+`
`+(r===1?"=":"-").repeat(p.length-(Math.max(p.lastIndexOf("\r"),p.lastIndexOf(`
`))+1))}const o="#".repeat(r),s=t.enter("headingAtx"),l=t.enter("phrasing");a.move(o+" ");let c=t.containerPhrasing(e,{before:"# ",after:`
`,...a.current()});return/^[\t ]/.test(c)&&(c=qr(c.charCodeAt(0))+c.slice(1)),c=c?o+" "+c:o,t.options.closeAtx&&(c+=" "+o),l(),s(),c}ay.peek=XP;function ay(e){return e.value||""}function XP(){return"<"}oy.peek=JP;function oy(e,n,t,i){const r=Bu(t),a=r==='"'?"Quote":"Apostrophe",o=t.enter("image");let s=t.enter("label");const l=t.createTracker(i);let c=l.move("![");return c+=l.move(t.safe(e.alt,{before:c,after:"]",...l.current()})),c+=l.move("]("),s(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(s=t.enter("destinationLiteral"),c+=l.move("<"),c+=l.move(t.safe(e.url,{before:c,after:">",...l.current()})),c+=l.move(">")):(s=t.enter("destinationRaw"),c+=l.move(t.safe(e.url,{before:c,after:e.title?" ":")",...l.current()}))),s(),e.title&&(s=t.enter(`title${a}`),c+=l.move(" "+r),c+=l.move(t.safe(e.title,{before:c,after:r,...l.current()})),c+=l.move(r),s()),c+=l.move(")"),o(),c}function JP(){return"!"}sy.peek=ZP;function sy(e,n,t,i){const r=e.referenceType,a=t.enter("imageReference");let o=t.enter("label");const s=t.createTracker(i);let l=s.move("![");const c=t.safe(e.alt,{before:l,after:"]",...s.current()});l+=s.move(c+"]["),o();const d=t.stack;t.stack=[],o=t.enter("reference");const u=t.safe(t.associationId(e),{before:l,after:"]",...s.current()});return o(),t.stack=d,a(),r==="full"||!c||c!==u?l+=s.move(u+"]"):r==="shortcut"?l=l.slice(0,-1):l+=s.move("]"),l}function ZP(){return"!"}ly.peek=e_;function ly(e,n,t){let i=e.value||"",r="`",a=-1;for(;new RegExp("(^|[^`])"+r+"([^`]|$)").test(i);)r+="`";for(/[^ \r\n]/.test(i)&&(/^[ \r\n]/.test(i)&&/[ \r\n]$/.test(i)||/^`|`$/.test(i))&&(i=" "+i+" ");++a<t.unsafe.length;){const o=t.unsafe[a],s=t.compilePattern(o);let l;if(o.atBreak)for(;l=s.exec(i);){let c=l.index;i.charCodeAt(c)===10&&i.charCodeAt(c-1)===13&&c--,i=i.slice(0,c)+" "+i.slice(l.index+1)}}return r+i+r}function e_(){return"`"}function cy(e,n){const t=Ru(e);return!!(!n.options.resourceLink&&e.url&&!e.title&&e.children&&e.children.length===1&&e.children[0].type==="text"&&(t===e.url||"mailto:"+t===e.url)&&/^[a-z][a-z+.-]+:/i.test(e.url)&&!/[\0- <>\u007F]/.test(e.url))}uy.peek=n_;function uy(e,n,t,i){const r=Bu(t),a=r==='"'?"Quote":"Apostrophe",o=t.createTracker(i);let s,l;if(cy(e,t)){const d=t.stack;t.stack=[],s=t.enter("autolink");let u=o.move("<");return u+=o.move(t.containerPhrasing(e,{before:u,after:">",...o.current()})),u+=o.move(">"),s(),t.stack=d,u}s=t.enter("link"),l=t.enter("label");let c=o.move("[");return c+=o.move(t.containerPhrasing(e,{before:c,after:"](",...o.current()})),c+=o.move("]("),l(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(l=t.enter("destinationLiteral"),c+=o.move("<"),c+=o.move(t.safe(e.url,{before:c,after:">",...o.current()})),c+=o.move(">")):(l=t.enter("destinationRaw"),c+=o.move(t.safe(e.url,{before:c,after:e.title?" ":")",...o.current()}))),l(),e.title&&(l=t.enter(`title${a}`),c+=o.move(" "+r),c+=o.move(t.safe(e.title,{before:c,after:r,...o.current()})),c+=o.move(r),l()),c+=o.move(")"),s(),c}function n_(e,n,t){return cy(e,t)?"<":"["}dy.peek=t_;function dy(e,n,t,i){const r=e.referenceType,a=t.enter("linkReference");let o=t.enter("label");const s=t.createTracker(i);let l=s.move("[");const c=t.containerPhrasing(e,{before:l,after:"]",...s.current()});l+=s.move(c+"]["),o();const d=t.stack;t.stack=[],o=t.enter("reference");const u=t.safe(t.associationId(e),{before:l,after:"]",...s.current()});return o(),t.stack=d,a(),r==="full"||!c||c!==u?l+=s.move(u+"]"):r==="shortcut"?l=l.slice(0,-1):l+=s.move("]"),l}function t_(){return"["}function Wu(e){const n=e.options.bullet||"*";if(n!=="*"&&n!=="+"&&n!=="-")throw new Error("Cannot serialize items with `"+n+"` for `options.bullet`, expected `*`, `+`, or `-`");return n}function i_(e){const n=Wu(e),t=e.options.bulletOther;if(!t)return n==="*"?"-":"*";if(t!=="*"&&t!=="+"&&t!=="-")throw new Error("Cannot serialize items with `"+t+"` for `options.bulletOther`, expected `*`, `+`, or `-`");if(t===n)throw new Error("Expected `bullet` (`"+n+"`) and `bulletOther` (`"+t+"`) to be different");return t}function r_(e){const n=e.options.bulletOrdered||".";if(n!=="."&&n!==")")throw new Error("Cannot serialize items with `"+n+"` for `options.bulletOrdered`, expected `.` or `)`");return n}function py(e){const n=e.options.rule||"*";if(n!=="*"&&n!=="-"&&n!=="_")throw new Error("Cannot serialize rules with `"+n+"` for `options.rule`, expected `*`, `-`, or `_`");return n}function a_(e,n,t,i){const r=t.enter("list"),a=t.bulletCurrent;let o=e.ordered?r_(t):Wu(t);const s=e.ordered?o==="."?")":".":i_(t);let l=n&&t.bulletLastUsed?o===t.bulletLastUsed:!1;if(!e.ordered){const d=e.children?e.children[0]:void 0;if((o==="*"||o==="-")&&d&&(!d.children||!d.children[0])&&t.stack[t.stack.length-1]==="list"&&t.stack[t.stack.length-2]==="listItem"&&t.stack[t.stack.length-3]==="list"&&t.stack[t.stack.length-4]==="listItem"&&t.indexStack[t.indexStack.length-1]===0&&t.indexStack[t.indexStack.length-2]===0&&t.indexStack[t.indexStack.length-3]===0&&(l=!0),py(t)===o&&d){let u=-1;for(;++u<e.children.length;){const p=e.children[u];if(p&&p.type==="listItem"&&p.children&&p.children[0]&&p.children[0].type==="thematicBreak"){l=!0;break}}}}l&&(o=s),t.bulletCurrent=o;const c=t.containerFlow(e,i);return t.bulletLastUsed=o,t.bulletCurrent=a,r(),c}function o_(e){const n=e.options.listItemIndent||"one";if(n!=="tab"&&n!=="one"&&n!=="mixed")throw new Error("Cannot serialize items with `"+n+"` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");return n}function s_(e,n,t,i){const r=o_(t);let a=t.bulletCurrent||Wu(t);n&&n.type==="list"&&n.ordered&&(a=(typeof n.start=="number"&&n.start>-1?n.start:1)+(t.options.incrementListMarker===!1?0:n.children.indexOf(e))+a);let o=a.length+1;(r==="tab"||r==="mixed"&&(n&&n.type==="list"&&n.spread||e.spread))&&(o=Math.ceil(o/4)*4);const s=t.createTracker(i);s.move(a+" ".repeat(o-a.length)),s.shift(o);const l=t.enter("listItem"),c=t.indentLines(t.containerFlow(e,s.current()),d);return l(),c;function d(u,p,f){return p?(f?"":" ".repeat(o))+u:(f?a:a+" ".repeat(o-a.length))+u}}function l_(e,n,t,i){const r=t.enter("paragraph"),a=t.enter("phrasing"),o=t.containerPhrasing(e,i);return a(),r(),o}const c_=Ko(["break","delete","emphasis","footnote","footnoteReference","image","imageReference","inlineCode","inlineMath","link","linkReference","mdxJsxTextElement","mdxTextExpression","strong","text","textDirective"]);function u_(e,n,t,i){return(e.children.some(function(o){return c_(o)})?t.containerPhrasing:t.containerFlow).call(t,e,i)}function d_(e){const n=e.options.strong||"*";if(n!=="*"&&n!=="_")throw new Error("Cannot serialize strong with `"+n+"` for `options.strong`, expected `*`, or `_`");return n}fy.peek=p_;function fy(e,n,t,i){const r=d_(t),a=t.enter("strong"),o=t.createTracker(i),s=o.move(r+r);let l=o.move(t.containerPhrasing(e,{after:r,before:s,...o.current()}));const c=l.charCodeAt(0),d=So(i.before.charCodeAt(i.before.length-1),c,r);d.inside&&(l=qr(c)+l.slice(1));const u=l.charCodeAt(l.length-1),p=So(i.after.charCodeAt(0),u,r);p.inside&&(l=l.slice(0,-1)+qr(u));const f=o.move(r+r);return a(),t.attentionEncodeSurroundingInfo={after:p.outside,before:d.outside},s+l+f}function p_(e,n,t){return t.options.strong||"*"}function f_(e,n,t,i){return t.safe(e.value,i)}function h_(e){const n=e.options.ruleRepetition||3;if(n<3)throw new Error("Cannot serialize rules with repetition `"+n+"` for `options.ruleRepetition`, expected `3` or more");return n}function m_(e,n,t){const i=(py(t)+(t.options.ruleSpaces?" ":"")).repeat(h_(t));return t.options.ruleSpaces?i.slice(0,-1):i}const hy={blockquote:FP,break:wf,code:$P,definition:qP,emphasis:ry,hardBreak:wf,heading:QP,html:ay,image:oy,imageReference:sy,inlineCode:ly,link:uy,linkReference:dy,list:a_,listItem:s_,paragraph:l_,root:u_,strong:fy,text:f_,thematicBreak:m_};function g_(){return{enter:{table:y_,tableData:xf,tableHeader:xf,tableRow:b_},exit:{codeText:w_,table:v_,tableData:qs,tableHeader:qs,tableRow:qs}}}function y_(e){const n=e._align;this.enter({type:"table",align:n.map(function(t){return t==="none"?null:t}),children:[]},e),this.data.inTable=!0}function v_(e){this.exit(e),this.data.inTable=void 0}function b_(e){this.enter({type:"tableRow",children:[]},e)}function qs(e){this.exit(e)}function xf(e){this.enter({type:"tableCell",children:[]},e)}function w_(e){let n=this.resume();this.data.inTable&&(n=n.replace(/\\([\\|])/g,x_));const t=this.stack[this.stack.length-1];t.type,t.value=n,this.exit(e)}function x_(e,n){return n==="|"?n:e}function k_(e){const n=e||{},t=n.tableCellPadding,i=n.tablePipeAlign,r=n.stringLength,a=t?" ":"|";return{unsafe:[{character:"\r",inConstruct:"tableCell"},{character:`
`,inConstruct:"tableCell"},{atBreak:!0,character:"|",after:"[	 :-]"},{character:"|",inConstruct:"tableCell"},{atBreak:!0,character:":",after:"-"},{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{inlineCode:p,table:o,tableCell:l,tableRow:s}};function o(f,m,b,A){return c(d(f,b,A),f.align)}function s(f,m,b,A){const y=u(f,b,A),g=c([y]);return g.slice(0,g.indexOf(`
`))}function l(f,m,b,A){const y=b.enter("tableCell"),g=b.enter("phrasing"),v=b.containerPhrasing(f,{...A,before:a,after:a});return g(),y(),v}function c(f,m){return jP(f,{align:m,alignDelimiters:i,padding:t,stringLength:r})}function d(f,m,b){const A=f.children;let y=-1;const g=[],v=m.enter("table");for(;++y<A.length;)g[y]=u(A[y],m,b);return v(),g}function u(f,m,b){const A=f.children;let y=-1;const g=[],v=m.enter("tableRow");for(;++y<A.length;)g[y]=l(A[y],f,m,b);return v(),g}function p(f,m,b){let A=hy.inlineCode(f,m,b);return b.stack.includes("tableCell")&&(A=A.replace(/\|/g,"\\$&")),A}}function S_(){return{exit:{taskListCheckValueChecked:kf,taskListCheckValueUnchecked:kf,paragraph:A_}}}function I_(){return{unsafe:[{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{listItem:C_}}}function kf(e){const n=this.stack[this.stack.length-2];n.type,n.checked=e.type==="taskListCheckValueChecked"}function A_(e){const n=this.stack[this.stack.length-2];if(n&&n.type==="listItem"&&typeof n.checked=="boolean"){const t=this.stack[this.stack.length-1];t.type;const i=t.children[0];if(i&&i.type==="text"){const r=n.children;let a=-1,o;for(;++a<r.length;){const s=r[a];if(s.type==="paragraph"){o=s;break}}o===t&&(i.value=i.value.slice(1),i.value.length===0?t.children.shift():t.position&&i.position&&typeof i.position.start.offset=="number"&&(i.position.start.column++,i.position.start.offset++,t.position.start=Object.assign({},i.position.start)))}}this.exit(e)}function C_(e,n,t,i){const r=e.children[0],a=typeof e.checked=="boolean"&&r&&r.type==="paragraph",o="["+(e.checked?"x":" ")+"] ",s=t.createTracker(i);a&&s.move(o);let l=hy.listItem(e,n,t,{...i,...s.current()});return a&&(l=l.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/,c)),l;function c(d){return d+o}}function P_(){return[aP(),CP(),TP(),g_(),S_()]}function __(e){return{extensions:[oP(),PP(e),RP(),k_(e),I_()]}}const E_={tokenize:N_,partial:!0},my={tokenize:j_,partial:!0},gy={tokenize:O_,partial:!0},yy={tokenize:F_,partial:!0},T_={tokenize:z_,partial:!0},vy={name:"wwwAutolink",tokenize:D_,previous:wy},by={name:"protocolAutolink",tokenize:L_,previous:xy},et={name:"emailAutolink",tokenize:M_,previous:ky},Fn={};function R_(){return{text:Fn}}let Mt=48;for(;Mt<123;)Fn[Mt]=et,Mt++,Mt===58?Mt=65:Mt===91&&(Mt=97);Fn[43]=et;Fn[45]=et;Fn[46]=et;Fn[95]=et;Fn[72]=[et,by];Fn[104]=[et,by];Fn[87]=[et,vy];Fn[119]=[et,vy];function M_(e,n,t){const i=this;let r,a;return o;function o(u){return!gc(u)||!ky.call(i,i.previous)||Vu(i.events)?t(u):(e.enter("literalAutolink"),e.enter("literalAutolinkEmail"),s(u))}function s(u){return gc(u)?(e.consume(u),s):u===64?(e.consume(u),l):t(u)}function l(u){return u===46?e.check(T_,d,c)(u):u===45||u===95||Oe(u)?(a=!0,e.consume(u),l):d(u)}function c(u){return e.consume(u),r=!0,l}function d(u){return a&&r&&$e(i.previous)?(e.exit("literalAutolinkEmail"),e.exit("literalAutolink"),n(u)):t(u)}}function D_(e,n,t){const i=this;return r;function r(o){return o!==87&&o!==119||!wy.call(i,i.previous)||Vu(i.events)?t(o):(e.enter("literalAutolink"),e.enter("literalAutolinkWww"),e.check(E_,e.attempt(my,e.attempt(gy,a),t),t)(o))}function a(o){return e.exit("literalAutolinkWww"),e.exit("literalAutolink"),n(o)}}function L_(e,n,t){const i=this;let r="",a=!1;return o;function o(u){return(u===72||u===104)&&xy.call(i,i.previous)&&!Vu(i.events)?(e.enter("literalAutolink"),e.enter("literalAutolinkHttp"),r+=String.fromCodePoint(u),e.consume(u),s):t(u)}function s(u){if($e(u)&&r.length<5)return r+=String.fromCodePoint(u),e.consume(u),s;if(u===58){const p=r.toLowerCase();if(p==="http"||p==="https")return e.consume(u),l}return t(u)}function l(u){return u===47?(e.consume(u),a?c:(a=!0,l)):t(u)}function c(u){return u===null||wo(u)||ue(u)||Jt(u)||qo(u)?t(u):e.attempt(my,e.attempt(gy,d),t)(u)}function d(u){return e.exit("literalAutolinkHttp"),e.exit("literalAutolink"),n(u)}}function N_(e,n,t){let i=0;return r;function r(o){return(o===87||o===119)&&i<3?(i++,e.consume(o),r):o===46&&i===3?(e.consume(o),a):t(o)}function a(o){return o===null?t(o):n(o)}}function j_(e,n,t){let i,r,a;return o;function o(c){return c===46||c===95?e.check(yy,l,s)(c):c===null||ue(c)||Jt(c)||c!==45&&qo(c)?l(c):(a=!0,e.consume(c),o)}function s(c){return c===95?i=!0:(r=i,i=void 0),e.consume(c),o}function l(c){return r||i||!a?t(c):n(c)}}function O_(e,n){let t=0,i=0;return r;function r(o){return o===40?(t++,e.consume(o),r):o===41&&i<t?a(o):o===33||o===34||o===38||o===39||o===41||o===42||o===44||o===46||o===58||o===59||o===60||o===63||o===93||o===95||o===126?e.check(yy,n,a)(o):o===null||ue(o)||Jt(o)?n(o):(e.consume(o),r)}function a(o){return o===41&&i++,e.consume(o),r}}function F_(e,n,t){return i;function i(s){return s===33||s===34||s===39||s===41||s===42||s===44||s===46||s===58||s===59||s===63||s===95||s===126?(e.consume(s),i):s===38?(e.consume(s),a):s===93?(e.consume(s),r):s===60||s===null||ue(s)||Jt(s)?n(s):t(s)}function r(s){return s===null||s===40||s===91||ue(s)||Jt(s)?n(s):i(s)}function a(s){return $e(s)?o(s):t(s)}function o(s){return s===59?(e.consume(s),i):$e(s)?(e.consume(s),o):t(s)}}function z_(e,n,t){return i;function i(a){return e.consume(a),r}function r(a){return Oe(a)?t(a):n(a)}}function wy(e){return e===null||e===40||e===42||e===95||e===91||e===93||e===126||ue(e)}function xy(e){return!$e(e)}function ky(e){return!(e===47||gc(e))}function gc(e){return e===43||e===45||e===46||e===95||Oe(e)}function Vu(e){let n=e.length,t=!1;for(;n--;){const i=e[n][1];if((i.type==="labelLink"||i.type==="labelImage")&&!i._balanced){t=!0;break}if(i._gfmAutolinkLiteralWalkedInto){t=!1;break}}return e.length>0&&!t&&(e[e.length-1][1]._gfmAutolinkLiteralWalkedInto=!0),t}const B_={tokenize:G_,partial:!0};function W_(){return{document:{91:{name:"gfmFootnoteDefinition",tokenize:U_,continuation:{tokenize:q_},exit:Y_}},text:{91:{name:"gfmFootnoteCall",tokenize:$_},93:{name:"gfmPotentialFootnoteCall",add:"after",tokenize:V_,resolveTo:H_}}}}function V_(e,n,t){const i=this;let r=i.events.length;const a=i.parser.gfmFootnotes||(i.parser.gfmFootnotes=[]);let o;for(;r--;){const l=i.events[r][1];if(l.type==="labelImage"){o=l;break}if(l.type==="gfmFootnoteCall"||l.type==="labelLink"||l.type==="label"||l.type==="image"||l.type==="link")break}return s;function s(l){if(!o||!o._balanced)return t(l);const c=En(i.sliceSerialize({start:o.end,end:i.now()}));return c.codePointAt(0)!==94||!a.includes(c.slice(1))?t(l):(e.enter("gfmFootnoteCallLabelMarker"),e.consume(l),e.exit("gfmFootnoteCallLabelMarker"),n(l))}}function H_(e,n){let t=e.length;for(;t--;)if(e[t][1].type==="labelImage"&&e[t][0]==="enter"){e[t][1];break}e[t+1][1].type="data",e[t+3][1].type="gfmFootnoteCallLabelMarker";const i={type:"gfmFootnoteCall",start:Object.assign({},e[t+3][1].start),end:Object.assign({},e[e.length-1][1].end)},r={type:"gfmFootnoteCallMarker",start:Object.assign({},e[t+3][1].end),end:Object.assign({},e[t+3][1].end)};r.end.column++,r.end.offset++,r.end._bufferIndex++;const a={type:"gfmFootnoteCallString",start:Object.assign({},r.end),end:Object.assign({},e[e.length-1][1].start)},o={type:"chunkString",contentType:"string",start:Object.assign({},a.start),end:Object.assign({},a.end)},s=[e[t+1],e[t+2],["enter",i,n],e[t+3],e[t+4],["enter",r,n],["exit",r,n],["enter",a,n],["enter",o,n],["exit",o,n],["exit",a,n],e[e.length-2],e[e.length-1],["exit",i,n]];return e.splice(t,e.length-t+1,...s),e}function $_(e,n,t){const i=this,r=i.parser.gfmFootnotes||(i.parser.gfmFootnotes=[]);let a=0,o;return s;function s(u){return e.enter("gfmFootnoteCall"),e.enter("gfmFootnoteCallLabelMarker"),e.consume(u),e.exit("gfmFootnoteCallLabelMarker"),l}function l(u){return u!==94?t(u):(e.enter("gfmFootnoteCallMarker"),e.consume(u),e.exit("gfmFootnoteCallMarker"),e.enter("gfmFootnoteCallString"),e.enter("chunkString").contentType="string",c)}function c(u){if(a>999||u===93&&!o||u===null||u===91||ue(u))return t(u);if(u===93){e.exit("chunkString");const p=e.exit("gfmFootnoteCallString");return r.includes(En(i.sliceSerialize(p)))?(e.enter("gfmFootnoteCallLabelMarker"),e.consume(u),e.exit("gfmFootnoteCallLabelMarker"),e.exit("gfmFootnoteCall"),n):t(u)}return ue(u)||(o=!0),a++,e.consume(u),u===92?d:c}function d(u){return u===91||u===92||u===93?(e.consume(u),a++,c):c(u)}}function U_(e,n,t){const i=this,r=i.parser.gfmFootnotes||(i.parser.gfmFootnotes=[]);let a,o=0,s;return l;function l(m){return e.enter("gfmFootnoteDefinition")._container=!0,e.enter("gfmFootnoteDefinitionLabel"),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(m),e.exit("gfmFootnoteDefinitionLabelMarker"),c}function c(m){return m===94?(e.enter("gfmFootnoteDefinitionMarker"),e.consume(m),e.exit("gfmFootnoteDefinitionMarker"),e.enter("gfmFootnoteDefinitionLabelString"),e.enter("chunkString").contentType="string",d):t(m)}function d(m){if(o>999||m===93&&!s||m===null||m===91||ue(m))return t(m);if(m===93){e.exit("chunkString");const b=e.exit("gfmFootnoteDefinitionLabelString");return a=En(i.sliceSerialize(b)),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(m),e.exit("gfmFootnoteDefinitionLabelMarker"),e.exit("gfmFootnoteDefinitionLabel"),p}return ue(m)||(s=!0),o++,e.consume(m),m===92?u:d}function u(m){return m===91||m===92||m===93?(e.consume(m),o++,d):d(m)}function p(m){return m===58?(e.enter("definitionMarker"),e.consume(m),e.exit("definitionMarker"),r.includes(a)||r.push(a),re(e,f,"gfmFootnoteDefinitionWhitespace")):t(m)}function f(m){return n(m)}}function q_(e,n,t){return e.check(ea,n,e.attempt(B_,n,t))}function Y_(e){e.exit("gfmFootnoteDefinition")}function G_(e,n,t){const i=this;return re(e,r,"gfmFootnoteDefinitionIndent",5);function r(a){const o=i.events[i.events.length-1];return o&&o[1].type==="gfmFootnoteDefinitionIndent"&&o[2].sliceSerialize(o[1],!0).length===4?n(a):t(a)}}function K_(e){let t=(e||{}).singleTilde;const i={name:"strikethrough",tokenize:a,resolveAll:r};return t==null&&(t=!0),{text:{126:i},insideSpan:{null:[i]},attentionMarkers:{null:[126]}};function r(o,s){let l=-1;for(;++l<o.length;)if(o[l][0]==="enter"&&o[l][1].type==="strikethroughSequenceTemporary"&&o[l][1]._close){let c=l;for(;c--;)if(o[c][0]==="exit"&&o[c][1].type==="strikethroughSequenceTemporary"&&o[c][1]._open&&o[l][1].end.offset-o[l][1].start.offset===o[c][1].end.offset-o[c][1].start.offset){o[l][1].type="strikethroughSequence",o[c][1].type="strikethroughSequence";const d={type:"strikethrough",start:Object.assign({},o[c][1].start),end:Object.assign({},o[l][1].end)},u={type:"strikethroughText",start:Object.assign({},o[c][1].end),end:Object.assign({},o[l][1].start)},p=[["enter",d,s],["enter",o[c][1],s],["exit",o[c][1],s],["enter",u,s]],f=s.parser.constructs.insideSpan.null;f&&dn(p,p.length,0,Yo(f,o.slice(c+1,l),s)),dn(p,p.length,0,[["exit",u,s],["enter",o[l][1],s],["exit",o[l][1],s],["exit",d,s]]),dn(o,c-1,l-c+3,p),l=c+p.length-2;break}}for(l=-1;++l<o.length;)o[l][1].type==="strikethroughSequenceTemporary"&&(o[l][1].type="data");return o}function a(o,s,l){const c=this.previous,d=this.events;let u=0;return p;function p(m){return c===126&&d[d.length-1][1].type!=="characterEscape"?l(m):(o.enter("strikethroughSequenceTemporary"),f(m))}function f(m){const b=ji(c);if(m===126)return u>1?l(m):(o.consume(m),u++,f);if(u<2&&!t)return l(m);const A=o.exit("strikethroughSequenceTemporary"),y=ji(m);return A._open=!y||y===2&&!!b,A._close=!b||b===2&&!!y,s(m)}}}class Q_{constructor(){this.map=[]}add(n,t,i){X_(this,n,t,i)}consume(n){if(this.map.sort(function(a,o){return a[0]-o[0]}),this.map.length===0)return;let t=this.map.length;const i=[];for(;t>0;)t-=1,i.push(n.slice(this.map[t][0]+this.map[t][1]),this.map[t][2]),n.length=this.map[t][0];i.push(n.slice()),n.length=0;let r=i.pop();for(;r;){for(const a of r)n.push(a);r=i.pop()}this.map.length=0}}function X_(e,n,t,i){let r=0;if(!(t===0&&i.length===0)){for(;r<e.map.length;){if(e.map[r][0]===n){e.map[r][1]+=t,e.map[r][2].push(...i);return}r+=1}e.map.push([n,t,i])}}function J_(e,n){let t=!1;const i=[];for(;n<e.length;){const r=e[n];if(t){if(r[0]==="enter")r[1].type==="tableContent"&&i.push(e[n+1][1].type==="tableDelimiterMarker"?"left":"none");else if(r[1].type==="tableContent"){if(e[n-1][1].type==="tableDelimiterMarker"){const a=i.length-1;i[a]=i[a]==="left"?"center":"right"}}else if(r[1].type==="tableDelimiterRow")break}else r[0]==="enter"&&r[1].type==="tableDelimiterRow"&&(t=!0);n+=1}return i}function Z_(){return{flow:{null:{name:"table",tokenize:eE,resolveAll:nE}}}}function eE(e,n,t){const i=this;let r=0,a=0,o;return s;function s(k){let T=i.events.length-1;for(;T>-1;){const Q=i.events[T][1].type;if(Q==="lineEnding"||Q==="linePrefix")T--;else break}const z=T>-1?i.events[T][1].type:null,G=z==="tableHead"||z==="tableRow"?S:l;return G===S&&i.parser.lazy[i.now().line]?t(k):G(k)}function l(k){return e.enter("tableHead"),e.enter("tableRow"),c(k)}function c(k){return k===124||(o=!0,a+=1),d(k)}function d(k){return k===null?t(k):Y(k)?a>1?(a=0,i.interrupt=!0,e.exit("tableRow"),e.enter("lineEnding"),e.consume(k),e.exit("lineEnding"),f):t(k):J(k)?re(e,d,"whitespace")(k):(a+=1,o&&(o=!1,r+=1),k===124?(e.enter("tableCellDivider"),e.consume(k),e.exit("tableCellDivider"),o=!0,d):(e.enter("data"),u(k)))}function u(k){return k===null||k===124||ue(k)?(e.exit("data"),d(k)):(e.consume(k),k===92?p:u)}function p(k){return k===92||k===124?(e.consume(k),u):u(k)}function f(k){return i.interrupt=!1,i.parser.lazy[i.now().line]?t(k):(e.enter("tableDelimiterRow"),o=!1,J(k)?re(e,m,"linePrefix",i.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(k):m(k))}function m(k){return k===45||k===58?A(k):k===124?(o=!0,e.enter("tableCellDivider"),e.consume(k),e.exit("tableCellDivider"),b):P(k)}function b(k){return J(k)?re(e,A,"whitespace")(k):A(k)}function A(k){return k===58?(a+=1,o=!0,e.enter("tableDelimiterMarker"),e.consume(k),e.exit("tableDelimiterMarker"),y):k===45?(a+=1,y(k)):k===null||Y(k)?I(k):P(k)}function y(k){return k===45?(e.enter("tableDelimiterFiller"),g(k)):P(k)}function g(k){return k===45?(e.consume(k),g):k===58?(o=!0,e.exit("tableDelimiterFiller"),e.enter("tableDelimiterMarker"),e.consume(k),e.exit("tableDelimiterMarker"),v):(e.exit("tableDelimiterFiller"),v(k))}function v(k){return J(k)?re(e,I,"whitespace")(k):I(k)}function I(k){return k===124?m(k):k===null||Y(k)?!o||r!==a?P(k):(e.exit("tableDelimiterRow"),e.exit("tableHead"),n(k)):P(k)}function P(k){return t(k)}function S(k){return e.enter("tableRow"),_(k)}function _(k){return k===124?(e.enter("tableCellDivider"),e.consume(k),e.exit("tableCellDivider"),_):k===null||Y(k)?(e.exit("tableRow"),n(k)):J(k)?re(e,_,"whitespace")(k):(e.enter("data"),R(k))}function R(k){return k===null||k===124||ue(k)?(e.exit("data"),_(k)):(e.consume(k),k===92?F:R)}function F(k){return k===92||k===124?(e.consume(k),R):R(k)}}function nE(e,n){let t=-1,i=!0,r=0,a=[0,0,0,0],o=[0,0,0,0],s=!1,l=0,c,d,u;const p=new Q_;for(;++t<e.length;){const f=e[t],m=f[1];f[0]==="enter"?m.type==="tableHead"?(s=!1,l!==0&&(Sf(p,n,l,c,d),d=void 0,l=0),c={type:"table",start:Object.assign({},m.start),end:Object.assign({},m.end)},p.add(t,0,[["enter",c,n]])):m.type==="tableRow"||m.type==="tableDelimiterRow"?(i=!0,u=void 0,a=[0,0,0,0],o=[0,t+1,0,0],s&&(s=!1,d={type:"tableBody",start:Object.assign({},m.start),end:Object.assign({},m.end)},p.add(t,0,[["enter",d,n]])),r=m.type==="tableDelimiterRow"?2:d?3:1):r&&(m.type==="data"||m.type==="tableDelimiterMarker"||m.type==="tableDelimiterFiller")?(i=!1,o[2]===0&&(a[1]!==0&&(o[0]=o[1],u=Pa(p,n,a,r,void 0,u),a=[0,0,0,0]),o[2]=t)):m.type==="tableCellDivider"&&(i?i=!1:(a[1]!==0&&(o[0]=o[1],u=Pa(p,n,a,r,void 0,u)),a=o,o=[a[1],t,0,0])):m.type==="tableHead"?(s=!0,l=t):m.type==="tableRow"||m.type==="tableDelimiterRow"?(l=t,a[1]!==0?(o[0]=o[1],u=Pa(p,n,a,r,t,u)):o[1]!==0&&(u=Pa(p,n,o,r,t,u)),r=0):r&&(m.type==="data"||m.type==="tableDelimiterMarker"||m.type==="tableDelimiterFiller")&&(o[3]=t)}for(l!==0&&Sf(p,n,l,c,d),p.consume(n.events),t=-1;++t<n.events.length;){const f=n.events[t];f[0]==="enter"&&f[1].type==="table"&&(f[1]._align=J_(n.events,t))}return e}function Pa(e,n,t,i,r,a){const o=i===1?"tableHeader":i===2?"tableDelimiter":"tableData",s="tableContent";t[0]!==0&&(a.end=Object.assign({},ri(n.events,t[0])),e.add(t[0],0,[["exit",a,n]]));const l=ri(n.events,t[1]);if(a={type:o,start:Object.assign({},l),end:Object.assign({},l)},e.add(t[1],0,[["enter",a,n]]),t[2]!==0){const c=ri(n.events,t[2]),d=ri(n.events,t[3]),u={type:s,start:Object.assign({},c),end:Object.assign({},d)};if(e.add(t[2],0,[["enter",u,n]]),i!==2){const p=n.events[t[2]],f=n.events[t[3]];if(p[1].end=Object.assign({},f[1].end),p[1].type="chunkText",p[1].contentType="text",t[3]>t[2]+1){const m=t[2]+1,b=t[3]-t[2]-1;e.add(m,b,[])}}e.add(t[3]+1,0,[["exit",u,n]])}return r!==void 0&&(a.end=Object.assign({},ri(n.events,r)),e.add(r,0,[["exit",a,n]]),a=void 0),a}function Sf(e,n,t,i,r){const a=[],o=ri(n.events,t);r&&(r.end=Object.assign({},o),a.push(["exit",r,n])),i.end=Object.assign({},o),a.push(["exit",i,n]),e.add(t+1,0,a)}function ri(e,n){const t=e[n],i=t[0]==="enter"?"start":"end";return t[1][i]}const tE={name:"tasklistCheck",tokenize:rE};function iE(){return{text:{91:tE}}}function rE(e,n,t){const i=this;return r;function r(l){return i.previous!==null||!i._gfmTasklistFirstContentOfListItem?t(l):(e.enter("taskListCheck"),e.enter("taskListCheckMarker"),e.consume(l),e.exit("taskListCheckMarker"),a)}function a(l){return ue(l)?(e.enter("taskListCheckValueUnchecked"),e.consume(l),e.exit("taskListCheckValueUnchecked"),o):l===88||l===120?(e.enter("taskListCheckValueChecked"),e.consume(l),e.exit("taskListCheckValueChecked"),o):t(l)}function o(l){return l===93?(e.enter("taskListCheckMarker"),e.consume(l),e.exit("taskListCheckMarker"),e.exit("taskListCheck"),s):t(l)}function s(l){return Y(l)?n(l):J(l)?e.check({tokenize:aE},n,t)(l):t(l)}}function aE(e,n,t){return re(e,i,"whitespace");function i(r){return r===null?t(r):n(r)}}function oE(e){return Mg([R_(),W_(),K_(e),Z_(),iE()])}const sE={};function lE(e){const n=this,t=e||sE,i=n.data(),r=i.micromarkExtensions||(i.micromarkExtensions=[]),a=i.fromMarkdownExtensions||(i.fromMarkdownExtensions=[]),o=i.toMarkdownExtensions||(i.toMarkdownExtensions=[]);r.push(oE(t)),a.push(P_()),o.push(__(t))}const cE=`# PRISM Framework — Full Specification

Version: 1.0.0
Status: Draft
Licence: CC BY-SA 4.0

> **Note:** PRISM EA Framework is an independent framework. It is not a revision or successor of the 1986 PRISM.

---

## 1. Overview

PRISM is a methodology for describing, governing, and evolving an enterprise architecture across five distinct but interrelated layers. Each layer answers a specific question. Together they provide a complete picture of the enterprise — who it involves, what it does, why it exists, how its parts connect, and where it's going.

PRISM is intentionally generic. "Enterprise" means any organized system with stakeholders, operations, intent, and change — not just an IT department. A hospital, a logistics network, a government agency, a software product company: all are valid PRISM subjects.

---

## 1.1 How Nine Architectural Dimensions Map to Five Layers

Enterprise architecture practice identifies at least nine distinct concerns that a complete architectural description must address. PRISM consolidates these into five layers, grouping concerns that are tightly coupled rather than forcing artificial separation.

| Architectural dimension | PRISM layer | Where it lives |
|------------------------|-------------|----------------|
| **Who** — People, roles, organizational units | **P** | \`stakeholders[]\` |
| **Where** — Geographies, environments, jurisdictions | **P** | \`geographies[]\`, \`environments[]\` |
| **What** — Capabilities, products, deliverables | **R** | \`capabilities[]\` |
| **How** — Processes, systems, pipelines | **R** | \`processes[]\`, \`systems[]\`, \`data_assets[]\` |
| **Why / When** — Strategic rationale, timing (optional) | **I** | \`drivers[]\`, \`timelines[]\` |
| **If-Then** — Risks, goals, constraints | **I** | \`risks[]\`, \`goals[]\`, \`constraints[]\` |
| **Exchange** — Integration, APIs, data flow | **S** | \`apis[]\`, \`events[]\`, \`data_contracts[]\` |
| **Pulse** — Ethics, adoption, sentiment, social impact | **M → Pulse** | \`adoption_signals[]\`, \`sentiment[]\`, \`ethics_markers[]\` |
| **Legacy** — History, trajectory, decisions | **M → Trajectory** | \`decisions[]\`, \`transition_programs[]\`, baseline/target descriptions |

### Why five and not nine?

**P groups Who + Where** because stakeholders without location are incomplete and locations without stakeholders are inert. A regulator without a jurisdiction is not a useful architectural artifact.

**R groups What + How** because capabilities and the systems that deliver them are inseparable in practice. Separating them into distinct layers creates artificial maintenance overhead without analytical benefit.

**I groups Why/When + If-Then** because both address the same concern: the strategic constraints on what the architecture must achieve and by when. Risks, goals, and constraints are all expressions of the same layer: *what the enterprise needs to be true, and what threatens that*.

**M groups Pulse + Legacy** because human adoption and chronological trajectory are interdependent. A technically complete target architecture that ignores change readiness will fail in delivery. Movement holds both the human signal (present) and the architectural journey (past-to-future).

**S stands alone** because exchange contracts are the most consequential architectural decisions an enterprise makes — they outlive the systems that implement them, and they deserve their own governance concern.

---

## 2. Foundational Principles

### 2.1 Source-First Architecture

Architecture artifacts in PRISM are plain-text files. YAML for structured data. Markdown for narrative. The filesystem is the model. This has concrete benefits:

- Any developer tool works: editors, diff viewers, grep, CI pipelines.
- No proprietary database or export step between "the model" and "the file."
- The file is the source of truth, not a rendering of one.

#### Why YAML for artifacts, JSON for schemas

Schemas (validation) use JSON. Artifacts (authoring) use YAML. These are separate concerns serving different audiences.

**JSON for schemas because:**
- JSON Schema is the validation standard — tooling (\`ajv\`, IDE plugins, CI validators) expects JSON Schema in JSON.
- Schemas are machine-read, rarely authored directly by practitioners.
- Strict syntax makes schema errors unambiguous.

**YAML for artifacts because:**

| Problem with JSON for human authors | YAML solution |
|-------------------------------------|---------------|
| No comments — can't annotate \`# decommissioning in 2026\` | Native \`#\` comment support |
| Every string needs quotes — \`"name": "Claims System"\` | \`name: Claims System\` — no quotes needed |
| Multi-line strings require escape sequences — rationale fields become unreadable | Block scalars (\`>\` or \`\\|\`) for clean prose |
| Trailing commas break the file | Indentation-based — no commas |
| Syntactic noise: \`{}\`, \`[]\`, \`""\` everywhere | Clean indent structure |

Concrete example — the same architectural decision in both formats:

\`\`\`json
{
  "id": "dec-kafka-adoption",
  "title": "Adopt Apache Kafka",
  "rationale": "Evaluated Kafka, AWS SQS, and Azure Service Bus. Kafka selected for throughput requirements and vendor neutrality.",
  "date": "2024-03-15"
}
\`\`\`

\`\`\`yaml
- id: dec-kafka-adoption
  title: "Adopt Apache Kafka"
  rationale: >
    Evaluated Kafka, AWS SQS, and Azure Service Bus.
    Kafka selected for throughput requirements and vendor neutrality.
  date: "2024-03-15"
\`\`\`

The YAML version is writable by a business analyst. The JSON version looks like code.

PRISM's authoring principle: non-technical stakeholders must be able to create and edit these files. YAML clears that bar; JSON doesn't.

**Compatibility note:** YAML is a superset of JSON. Valid JSON is valid YAML. Teams whose tooling requires JSON artifacts can author in JSON and remain PRISM-compliant.

### 2.2 Git-Native Workflow

PRISM treats git not as a backup mechanism but as the governance engine.

| Git concept | PRISM meaning |
|-------------|---------------|
| Branch | Exploration of an architectural option |
| Commit | A decision made |
| Pull request | A governance review checkpoint |
| Tag | A published architecture baseline or target |
| Diff | Change impact analysis |
| History | Audit trail |

An organization's architecture history is its git log. No separate change register needed.

### 2.3 Schema-Based Validation

Every PRISM artifact validates against a JSON Schema. This provides:

- Structural consistency across teams and projects
- Automated validation in CI pipelines
- Self-documentation through schema descriptions
- Clear contracts for tooling (renderers, dashboards, analyzers)

Schemas live in \`schema/\` and are versioned alongside the framework.

### 2.4 Authorable Landscapes

A PRISM landscape is a set of layer files describing one enterprise (or one bounded context within one). It must be authorable by:

- An enterprise architect (technical detail)
- A business analyst (capabilities and intent)
- A product owner (stakeholders and signals)
- A CIO (movement and trajectory)

YAML was chosen because it reads like structured prose. No modeling language expertise required.

### 2.5 Domain Agnosticism

PRISM layers are defined in terms that apply outside of IT:

- "System" can mean a hospital department, a production line, or a software application.
- "Stakeholder" can mean a citizen, an employee, a regulator, or a machine.
- "Signal" can mean an API, a physical goods transfer, a policy directive, or a service contract.

---

## 3. Framework Layers

### 3.1 P — People & Place

**Core question:** Who uses this, and from where?

This is the foundation layer. Before describing what an enterprise does, PRISM establishes who's involved and where they operate. This draws from Zachman's Who and Where columns.

**Sub-dimensions:**

- **Stakeholders** — Roles, personas, organizational units, external parties, regulators. Includes human actors and organizational entities.
- **Geographies** — Physical locations, regions, regulatory jurisdictions, virtual or logical environments.
- **Environments** — Operating contexts (production, staging, development, field operations, disaster recovery).

**Authoring note:** Don't try to list every individual person. List roles and org units. Specificity matters at the boundary — who's external vs. internal, who holds regulatory authority, who can trigger change.

---

### 3.2 R — Reality

**Core question:** What exists, and how does it run?

The operational layer. This covers what the enterprise actually has and does, drawing from TOGAF's architecture domains (business, application, data, technology) without mandating their full scope.

**Sub-dimensions:**

- **Capabilities** — What the enterprise can do, expressed as business outcomes (e.g., "process insurance claims," "manufacture automotive components").
- **Systems** — The operational units delivering capabilities — applications, machines, teams, processes, services.
- **Data** — The core information assets, their owners, classifications, and flow patterns.
- **Processes** — How work moves through the enterprise: workflows, procedures, value streams.

**Authoring note:** Describe what's real today, not what was planned. Reality is your baseline. Use the temporal dimension to express the gap between now and target.

---

### 3.3 I — Intent

**Core question:** Why does it exist, and when does it matter?

This layer is optional but valuable for governance decisions and investment justification. It captures the strategic rationale behind architectural choices, drawing from Zachman's Why and When columns.

**Sub-dimensions:**

- **Drivers** — Business motivations: market forces, regulatory requirements, cost pressures, strategic bets.
- **Goals** — Desired outcomes tied to drivers, expressed as measurable targets where possible.
- **Timelines** — When things matter: compliance deadlines, market windows, fiscal cycles, event-driven triggers.
- **Constraints** — Non-negotiable boundaries: budget caps, legal mandates, technical debt ceilings, policy limits.
- **Risks** — If-Then conditions: what could go wrong, the impact if it does, and the chosen response strategy (mitigate, accept, transfer, avoid). Risks are architectural — they constrain what goals are achievable and on what timeline.

**Authoring note:** Intent decays. Revisit this layer when drivers change. A system without documented intent becomes a legacy system — everyone runs it, nobody knows why.

---

### 3.4 S — Signal

**Core question:** How do the parts communicate?

The exchange layer. This captures the contracts, protocols, and patterns through which systems, teams, and stakeholders exchange information and value. It's the connective tissue of the enterprise.

**Sub-dimensions:**

- **APIs** — Synchronous interfaces: REST, GraphQL, gRPC, SOAP, internal function calls with external contracts.
- **Events** — Asynchronous signals: message queues, event streams, pub/sub topics, webhooks.
- **Data Contracts** — Agreements about data shape, ownership, latency, and quality across system boundaries.
- **Integration Patterns** — Architectural patterns in use: choreography vs. orchestration, request-reply vs. event-driven, batch vs. streaming.
- **Service Agreements** — SLAs, SLOs, SLIs between producers and consumers.

**Authoring note:** Model signals at the boundary, not the implementation. The exchange contract matters more than the internal mechanism. If the signal layer is empty or undocumented, the enterprise is operating on implicit contracts — a governance risk.

---

### 3.5 M — Movement

**Core question:** Are people adopting it, and where is it headed?

Movement is PRISM's most novel layer. It is the only layer in any major EA framework that treats human adoption signals as a first-class architectural concern alongside systems, integrations, and strategic rationale.

**Important:** M is not "legacy." M = Movement. It has two distinct sub-dimensions:

\`\`\`
M — Movement
├── Pulse        ← present-tense human signal (adoption, sentiment, ethics, change readiness)
└── Trajectory   ← chronological arc (baseline → transition → target, decisions log)
\`\`\`

"Legacy" or "chronological" maps to Trajectory. But Pulse is equally first-class — it is what distinguishes PRISM from any existing framework. Every previous EA framework documents the architecture. PRISM also documents whether people are actually using it.

**Pulse sub-dimension:**

- **Adoption signals** — How deeply stakeholders are actually using systems and processes, not just whether they've been deployed. Six levels: none, aware, exploring, partial, active, embedded.
- **Sentiment** — The dominant emotional signal from stakeholder groups: enthusiasm, skepticism, confusion, resistance, fatigue.
- **Change readiness** — Organizational capacity to absorb change at a given point in time. Readiness is not permanent — it rises and falls with organizational load.
- **Ethics markers** — Known concerns: bias in automated decisions, privacy gaps, fairness issues, accessibility failures, accountability gaps. Naming the concern is the first step to addressing it.

**Trajectory (Chronological sub-dimension):**

- **Baseline description** — Narrative anchor: what did this enterprise look like at the start of the current era?
- **Transition programs** — Active change initiatives with status, dates, and affected PRISM layers.
- **Target description** — Desired end state in plain language, readable by a business stakeholder.
- **Decisions log** — Key architectural decisions with rationale and git commit SHA references.

**Why combine Pulse and Trajectory in one layer?**

A migration that ignores sentiment fails. A transformation that ignores trajectory is blind to how far it has to travel. Separating them produces two thin layers. Combining them produces one meaningful one: the human and temporal dimensions of architectural change are inseparable in practice.

---

## 4. Temporal Dimension

Every layer in PRISM operates across three temporal states:

| State | Meaning |
|-------|---------|
| \`baseline\` | The architecture as it exists today |
| \`transition\` | An intermediate state during a planned change |
| \`target\` | The desired future state |

Each artifact in a PRISM landscape declares its temporal state in its front matter:

\`\`\`yaml
prism:
  layer: reality
  temporal_state: baseline
  as_of: "2025-01-01"
\`\`\`

Git tags mark published baselines and targets:

\`\`\`
git tag prism/baseline/2025-01
git tag prism/target/2027-q2
\`\`\`

Branches hold transition work:

\`\`\`
git branch prism/transition/cloud-migration
\`\`\`

This approach replaces heavyweight architecture change management tools with version control semantics that teams already understand.

---

## 5. A PRISM Landscape

A landscape is a populated instance of PRISM for a specific enterprise or bounded domain. It consists of:

1. A \`.prism/config.yaml\` declaring the organization, domain, and active layers.
2. One or more YAML artifact files per active layer.
3. A git repository holding all of the above.

Landscapes can be:
- **Full** — All five layers populated.
- **Partial** — Only the layers relevant to the current concern (e.g., P + R + S for an integration review).
- **Scoped** — Bounded to a department, product line, or capability area.

---

## 6. Schema Governance

PRISM schemas are versioned. When a schema changes in a breaking way, the major version increments. Landscapes declare which schema version they target:

\`\`\`yaml
prism:
  schema_version: "1.0"
\`\`\`

Schema validation can run locally:

\`\`\`bash
ajv validate -s prism/schema/reality.schema.json -d my-enterprise/reality/landscape.yaml
\`\`\`

Or in CI:

\`\`\`yaml
# .github/workflows/prism-validate.yml
- name: Validate PRISM artifacts
  run: ajv validate -s prism/schema/*.schema.json -d landscape/**/*.yaml
\`\`\`

---

## 7. PRISM and Non-IT Domains

PRISM was designed without assuming IT context. Here's how the layers translate across domains:

| Layer | IT context | Healthcare context | Manufacturing context |
|-------|-----------|-------------------|-----------------------|
| P | Dev teams, SREs, regions, environments | Clinical staff, patients, hospitals, wards | Factory workers, suppliers, plants, zones |
| R | Applications, databases, APIs, infrastructure | Clinical workflows, EHR systems, formularies | Production lines, BOMs, equipment, logistics |
| I | Product roadmap, compliance mandates | Patient outcomes, regulatory requirements | Quality targets, cost reduction programs |
| S | REST APIs, event streams, data contracts | HL7/FHIR messages, referral protocols | EDI transactions, MES integrations |
| M | Adoption metrics, tech debt, migration trajectory | Clinician adoption, change fatigue, EHR rollout | Workforce readiness, lean transition, factory baseline |

---

## 8. Limitations and Known Gaps

- PRISM v1.0 does not prescribe a rendering or visualization standard. Diagrams are out of scope; the text model is the primary artifact.
- Tooling (CLI, dashboard) is roadmap. Current validation relies on third-party JSON Schema validators.
- The Pulse sub-dimension of M requires qualitative input that cannot be schema-validated. PRISM captures the structure; organizations supply the signal.
- PRISM does not currently define a maturity model. Maturity levels are planned for v1.1.

---

## 9. Glossary

| Term | Definition |
|------|-----------|
| Landscape | A populated PRISM instance for a specific enterprise or domain |
| Layer | One of the five PRISM dimensions (P/R/I/S/M) |
| Temporal state | The point-in-time status of an artifact: baseline, transition, or target |
| Signal | Any exchange contract between parts of an enterprise |
| Pulse | The qualitative human signal within an enterprise: sentiment, readiness, adoption |
| Trajectory | The chronological arc from baseline through transition to target |
| Schema | A JSON Schema document that validates a PRISM artifact's structure |
| Artifact | A YAML or Markdown file containing PRISM layer data |
| Decommissioning | An artifact in active transition toward retirement. Still operational but targeted for removal |
| Decommissioned | An artifact that has been retired. Retained in the model for blast radius traceability and audit |
| DependsOn | A declared dependency between artifacts. Enables blast radius analysis when a dependency changes or is decommissioned |
| Blast radius | The set of artifacts flagged as impacted when a dependency is decommissioned or changed |
| Compliance framework | A structured reference to a named regulatory or control framework (GDPR, CCPA, PCI-DSS, etc.) attached to an artifact |
| Classification | The sensitivity level of an artifact: none, public, internal, proprietary, confidential, or secret |
| Tags | An array of free-form strings attached to any artifact for filtering, indexing, and tooling |
| Flow direction | Whether a signal is inbound (entering the enterprise), outbound (leaving), or bidirectional |
| Integration mode | The style of coupling between systems: embedded (in-process), handoff (ownership transfer), or deep-link (UI-level cross-system linking) |
| Kind | The semantic type of a capability artifact: capability, process, system, or function |
| Tier | A free-form environment label that supplements the structured environment type |
| Cloud region | A geography of type cloud-region, data-center, or availability-zone, linked to a cloud provider and provider-specific region identifier |

---

## 10. Extended Concepts

These concepts extend PRISM's core schema. All fields are optional — existing artifacts validate without changes.

---

### 10.1 Decommissioning and Decommissioned States

Systems, capabilities, and processes can now express lifecycle transition explicitly:

- \`decommissioning\` — in active transition toward retirement. Still operational.
- \`decommissioned\` — retired. Retained in the model for blast radius traceability and audit trail.

Previously, \`legacy\` and \`deprecated\` existed but didn't distinguish between "on the way out" and "already gone." This gap made it impossible to represent partial transitions accurately.

\`\`\`yaml
- id: sys-legacy-billing
  status: decommissioning   # still running, targeted for removal

- id: sys-old-reporting
  status: decommissioned    # retired — kept for dependency traceability
\`\`\`

---

### 10.2 DependsOn and Blast Radius

Any artifact in the R layer (systems, capabilities, processes, data assets) can now declare explicit dependencies via \`depends_on\`. Each dependency entry names an artifact ID and its type.

\`\`\`yaml
- id: cap-claims-processing
  depends_on:
    - id: sys-claims-app
      type: system
    - id: sys-claims-db
      type: system
\`\`\`

**Blast radius:** when a system's status changes to \`decommissioning\` or \`decommissioned\`, tooling can traverse \`depends_on\` references across the landscape to surface all artifacts that are impacted. This makes the consequences of a decommission visible before it happens, not after.

The \`type\` field on each dependency enables cross-dimension traversal: a process can depend on a system, a capability can depend on a data asset, and so on.

---

### 10.2b AI-Native System Types

PRISM recognizes that modern enterprises run AI systems as first-class operational units. Three new values in \`systems.type\` cover this:

| Type | Meaning |
|------|---------|
| \`ai-agent\` | An autonomous AI system acting on behalf of a role — perceives inputs, reasons, takes actions, may call tools or other agents |
| \`llm\` | A large language model serving inference — provides language understanding, generation, classification, or extraction |
| \`agentic-workflow\` | An orchestrated multi-agent pipeline — coordinates multiple AI agents toward a shared outcome |

AI systems participate in the full Reality schema: they have owners, \`depends_on\` dependencies, \`compliance_frameworks\`, \`classification\`, and \`trigger_mode\`. They appear in \`system_ids\` on capabilities and processes just like any other system.

\`\`\`yaml
- id: sys-claims-triage-agent
  name: "Claims Triage AI Agent"
  type: ai-agent
  description: "Autonomous agent that reads incoming claim documents, classifies severity, and routes to the appropriate adjudicator queue."
  status: active
  classification: confidential
  trigger_mode: event-driven
  depends_on:
    - id: sys-claims-db
      type: system
  compliance_frameworks:
    - framework: HIPAA
      scope: "PHI processing in claim documents"
      status: applicable
\`\`\`

Capabilities delivered by AI agents use \`kind: ai-agent\`:

\`\`\`yaml
- id: cap-ai-triage
  name: "Automated Claims Triage"
  kind: ai-agent
  description: "AI-driven classification and routing of incoming claims."
\`\`\`

---

### 10.2c Process Execution Mode

Processes now carry an \`execution_mode\` field:

| Mode | Meaning |
|------|---------|
| \`manual\` | Entirely human-driven. No system automation. |
| \`automatic\` | Fully system-driven. No human intervention required. |
| \`semi-automatic\` | Human initiates, approves, or monitors — system executes steps. |

This field makes PRISM a direct input to automation initiatives. Listing all \`manual\` processes gives an immediate automation backlog.

\`\`\`yaml
- id: proc-claim-adjudication
  execution_mode: semi-automatic   # human reviewer, system validates and routes
\`\`\`

---

### 10.2d System Trigger Mode

Systems now carry a \`trigger_mode\` field to express how execution is initiated:

| Mode | Meaning |
|------|---------|
| \`manual\` | A human triggers execution (button click, script run, etc.) |
| \`scheduled\` | Time-based (cron job, batch window) |
| \`event-driven\` | Triggered by an event or message on a queue/stream |
| \`api-driven\` | Triggered by an incoming API call |
| \`continuous\` | Always running; no discrete trigger |
| \`real-time\` | Streaming; sub-second response expected |

Systems with \`trigger_mode: manual\` are automation candidates — especially when their corresponding processes are \`execution_mode: manual\`.

\`\`\`yaml
- id: sys-billing-reconcile
  trigger_mode: manual   # finance team runs this monthly by hand
\`\`\`

---

### 10.3 Compliance Frameworks

PRISM v1.0 had free-text \`regulatory_constraints\` on data assets. That's not enough for modern governance environments where multiple frameworks apply simultaneously and their status needs to be tracked individually.

v1.1 adds a structured \`compliance_frameworks\` array to systems, capabilities, and data assets:

\`\`\`yaml
compliance_frameworks:
  - framework: GDPR
    scope: "Personal data of EU residents — Articles 5-11, 17, 20"
    status: in-progress
  - framework: CCPA
    scope: "California consumer data rights"
    status: applicable
  - framework: PCI-DSS
    scope: "Cardholder data environment"
    status: certified
    certification_date: "2024-11-01"
\`\`\`

Supported frameworks: \`GDPR\`, \`CCPA\`, \`PDPA\`, \`DPDP\`, \`PCI-DSS\`, \`SOC2\`, \`ISO-27001\`, \`NIST-CSF\`, \`HIPAA\`, \`SOX\`, \`FedRAMP\`, \`LGPD\`, \`PIPEDA\`, \`POPIA\`, \`other\`.

Status options: \`applicable\`, \`certified\`, \`in-progress\`, \`exempt\`.

The existing \`regulatory_constraints\` free-text array on data assets is preserved for backward compatibility. \`compliance_frameworks\` is the structured equivalent and the preferred approach going forward.

---

### 10.4 Classification

A unified \`classification\` field is now available on systems, capabilities, and data assets. For data assets, the existing classification enum is expanded. For systems and capabilities, classification is new.

| Value | Meaning |
|-------|---------|
| \`none\` | No sensitivity designation |
| \`public\` | Freely shareable outside the enterprise |
| \`internal\` | Internal use only — not for external distribution |
| \`proprietary\` | Competitive or IP-sensitive — restricted even internally |
| \`confidential\` | Limited distribution — need-to-know basis |
| \`secret\` | Highest sensitivity — strictest controls required |
| \`restricted\` | Access-controlled subset (data assets only) |
| \`regulated\` | Subject to a compliance framework (data assets only) |

\`\`\`yaml
- id: sys-claims-app
  classification: confidential

- id: da-ip-pricing-model
  classification: proprietary
\`\`\`

---

### 10.5 Environment (Generic)

The environment \`type\` enum is expanded to cover QA, pre-production, and performance testing — contexts that exist in virtually every delivery pipeline but were previously uncategorized:

New types: \`qa\`, \`pre-production\`, \`performance\`.

A new \`tier\` string field allows organizations to add free-form labels on top of the structured type — useful for multi-region or multi-tier production setups where \`type: production\` alone is insufficient:

\`\`\`yaml
- id: prod-eu
  type: production
  tier: "prod-eu-tier-1"
  geography_id: dc-aws-eu-west-1
\`\`\`

---

### 10.6 Tags

Every artifact item across all three schema layers (R, S, P) now supports a \`tags\` array. Tags are free-form strings for filtering, indexing, and tooling:

\`\`\`yaml
tags:
  - core
  - customer-facing
  - regulated
  - decommissioning
\`\`\`

Tags are intentionally unstructured — they don't replace typed fields like \`classification\` or \`status\`, but they provide a lightweight mechanism for cross-cutting concerns that don't fit the formal taxonomy.

---

### 10.7 Flow Direction

APIs and events in the S layer now support a \`direction\` field:

| Value | Meaning |
|-------|---------|
| \`inbound\` | Signal enters the enterprise from outside |
| \`outbound\` | Signal leaves the enterprise |
| \`bidirectional\` | Signal flows both ways |

This replaces the ambiguous upstream/downstream terminology, which carries different meaning depending on whether you're reading from the producer's or consumer's perspective. Inbound and outbound are unambiguous relative to the enterprise boundary.

\`\`\`yaml
- id: api-payment-gateway
  direction: outbound   # this enterprise calls out to a payment provider

- id: api-claims-intake
  direction: inbound    # partners POST claims into this enterprise
\`\`\`

---

### 10.8 Artifact Kind

Capabilities in the R layer now support a \`kind\` field to express what type of artifact a capability functionally represents:

| Value | Meaning |
|-------|---------|
| \`capability\` | A business outcome the enterprise can deliver (default) |
| \`process\` | A workflow or procedure that is the capability |
| \`system\` | A system that functions as the capability |
| \`function\` | A discrete, bounded function within a larger capability |

This is useful when the enterprise's capability map blurs into process or system territory — common in non-IT domains where a "capability" might be a manual process or an operational team.

\`\`\`yaml
- id: cap-billing
  kind: process   # billing IS the process; there's no separate system to reference
\`\`\`

---

### 10.9 Integration Mode

APIs and integration patterns in the S layer, and systems in the R layer, now support \`integration_mode\`:

| Value | Meaning |
|-------|---------|
| \`embedded\` | In-process coupling. Components share context and runtime. Tightest coupling. |
| \`handoff\` | One system transfers ownership to another. Work moves across a boundary. |
| \`deep-link\` | UI-level cross-system linking. No shared context — each side authenticates independently. |

\`api\`, \`event\`, and \`batch\` are also available on systems as additional integration modes for systems that primarily exchange through those mechanisms.

\`\`\`yaml
- id: api-portal-to-claims
  integration_mode: handoff   # portal hands claim submission to claims system

- id: pat-portal-deeplink
  integration_mode: deep-link  # portal links into claims detail page
\`\`\`

---

### 10.10 Regions and Cloud Infrastructure

The geography \`type\` enum is extended with three new types to support cloud and infrastructure topology:

| New type | Meaning |
|----------|---------|
| \`cloud-region\` | A named cloud provider region (e.g., AWS us-east-1) |
| \`data-center\` | A physical or logical data center |
| \`availability-zone\` | A sub-region zone within a cloud region |

Two new fields support cloud-specific identification:

- \`cloud_provider\` — enum: \`aws\`, \`azure\`, \`gcp\`, \`oracle\`, \`alibaba\`, \`on-premises\`, \`multi-cloud\`, \`other\`
- \`cloud_region_id\` — the provider-specific identifier (e.g., \`"us-east-1"\`, \`"eu-west-2"\`, \`"eastus"\`)

\`\`\`yaml
- id: dc-aws-eu-west-1
  type: cloud-region
  cloud_provider: aws
  cloud_region_id: "eu-west-1"
  parent_id: region-emea
  regulatory_zone: "GDPR"
\`\`\`

The \`parent_id\` field supports containment hierarchy, so availability zones nest inside cloud regions, cloud regions nest inside geographic regions, and the full topology is navigable.

---

### 10.11 Data Sensitivity

The \`classification\` field (§10.4) describes access control — who is permitted to see an artifact. Data sensitivity is a separate concern: **what category of personal or regulated data** does this artifact process, store, or transmit?

PRISM adds a \`data_sensitivity\` field as a string array. Values are additive — a system can handle multiple data categories simultaneously.

| Value | Definition | Regulatory triggers |
|-------|-----------|---------------------|
| \`pii\` | **Personally Identifiable Information** — any data that can identify an individual: name, email address, IP address, phone number, national ID number, device identifier | GDPR, CCPA, PIPEDA, LGPD, PDPA, and equivalent privacy laws |
| \`spii\` | **Sensitive PII** — PII whose disclosure could cause significant harm: financial account numbers, biometric data, health records, SSN, criminal history, precise geolocation, sexual orientation, religious beliefs | Same privacy laws with heightened controls required |
| \`phi\` | **Protected Health Information** — health and medical records under HIPAA jurisdiction | HIPAA |
| \`pci\` | **Payment Card Industry data** — cardholder numbers, CVVs, card account data | PCI-DSS |

SPII is a subset of PII. An artifact with \`data_sensitivity: [spii]\` implicitly handles PII. Declare both (\`[pii, spii]\`) when explicit labeling helps; omit \`pii\` when \`[spii]\` alone is sufficient.

\`\`\`yaml
# System handling personal identifiers but not financial/biometric/health data
- id: sys-claims-portal
  data_sensitivity: [pii]
  classification: confidential
  compliance_frameworks:
    - framework: GDPR
      scope: "Claimant personal data — EU policyholders"
      status: in-progress

# System handling financial account records (SPII) and personal identifiers (PII)
- id: sys-billing
  data_sensitivity: [pii, spii]
  compliance_frameworks:
    - framework: GDPR
      scope: "Policyholder billing records"
      status: in-progress
    - framework: SOX
      scope: "Financial transaction records"
      status: certified
      certification_date: "2024-11-15"
\`\`\`

**Where it applies:** \`data_sensitivity\` can be set on any artifact type across PRISM layers. The most impactful placements:

- **R layer — \`systems[]\`:** operational units that process or transmit PII/SPII
- **R layer — \`data_assets[]\`:** stores holding PII/SPII at rest
- **S layer — \`apis[]\`, \`events[]\`, \`data_contracts[]\`:** signals carrying PII/SPII across system boundaries

**Relationship to \`classification\` and \`compliance_frameworks\`:**

| Field | What it answers |
|-------|----------------|
| \`data_sensitivity\` | What type of personal or regulated data is here? |
| \`classification\` | Who is permitted to access this artifact? |
| \`compliance_frameworks\` | Which regulatory regimes formally apply, and what is their certification status? |

\`data_sensitivity: [pii]\` is the signal that GDPR-class privacy law applies. \`compliance_frameworks\` is how you track whether you're certified. The two are complementary, not duplicative.
`,uE=`# PRISM/I — Infrastructure Landscape Framework

Version: 1.0.0
Status: Draft
Licence: CC BY-SA 4.0

---

## 1. Overview

PRISM/I is a framework for describing, governing, and evolving infrastructure landscapes. It answers a specific class of question that PRISM (Enterprise Architecture) does not: *what infrastructure runs the enterprise, who owns it, and where is it going?*

PRISM/I is intentionally vendor-agnostic. Cloud, on-premises, colocation, hybrid, bare-metal: all are valid PRISM/I subjects. AWS, GCP, Azure, VMware, Kubernetes, Nomad — these are implementations. PRISM/I describes the landscape they form, not the technology itself.

### Relationship to PRISM (Enterprise Architecture)

PRISM EA and PRISM/I are independent frameworks. They share authoring conventions but have separate dimensions, artifact types, and schemas.

| Concern | Framework |
|---------|-----------|
| Stakeholders, capabilities, intent, signals, movement | PRISM (Enterprise Architecture) |
| Teams, accounts, compute, data, networking, delivery | PRISM/I (Infrastructure) |

PRISM EA's \`Reality/systems\` dimension lists *what* systems exist. PRISM/I describes *how* those systems are hosted, connected, and operated. They cross-reference by system ID but neither imports the other's schema.

---

## 2. The Six Dimensions

PRISM/I organizes infrastructure concerns into six dimensions. Each dimension answers one question.

| Dimension | Question | Scope |
|-----------|----------|-------|
| **Who** | Who owns this infrastructure? | Teams and providers responsible for infrastructure |
| **Where** | Where does it run? | Accounts, regions, environments, network zones |
| **Runtime** | What executes? | Compute, containers, functions, messaging, orchestration |
| **State** | What persists? | Databases, object storage, caches, data streams |
| **Control** | What governs access and traffic? | Networking, IAM, secrets, service mesh, certificates |
| **Operations** | How is it delivered and observed? | CI/CD, registries, monitoring, logging, tracing, alerting |

### Why six and not more?

**Who and Where are separate** because ownership and location answer different governance questions. Who owns infrastructure (team accountability) is independent of where it runs (region, compliance zone, jurisdiction). Splitting them makes ownership auditable separately from geography — particularly important when compliance zones (GDPR EU regions, SOX-scoped accounts) need to be queryable independently of team structure.

**Runtime and State are separate** because execution and persistence have different failure modes, scaling concerns, and ownership patterns. Conflating them produces landscapes where "the database" and "the service that queries it" share the same operational thinking — they don't.

**Control stands alone** because access and network policy are cross-cutting. A firewall rule spans Runtime *and* State. IAM governs all dimensions. Burying Control inside another dimension obscures the governance surface.

**Operations is last** because it operates on everything above it. CI/CD pipelines deploy Runtime. Monitoring covers State and Control. A separate dimension makes it possible to audit the delivery and observability posture independently.

---

## 3. Foundational Principles

PRISM/I inherits three principles from PRISM EA. They are not optional.

### 3.1 YAML for Artifacts, JSON for Schemas

Landscapes are authored in YAML. Schemas (validation rules) are in JSON Schema format.

YAML because infrastructure landscapes must be readable and writable by platform engineers, SREs, security teams, and architects — not just developers. Comments, block scalars, and minimal syntax noise matter.

JSON Schema because validation tooling (\`ajv\`, IDE plugins, CI validators) expects it.

### 3.2 Git-Native Governance

| Git concept | PRISM/I meaning |
|-------------|-----------------|
| Branch | Exploration of an infrastructure change |
| Commit | A provisioning or configuration decision |
| Pull request | Governance review (security, cost, compliance) |
| Tag | Published baseline or target landscape |
| Diff | Change impact analysis |
| History | Audit trail for infrastructure decisions |

PRISM/I landscapes live in git. No separate CMDB export step required.

### 3.3 Ownership Model

Every artifact in a PRISM/I landscape declares an owner.

| Ownership | Meaning |
|-----------|---------|
| \`self\` | Owned and operated by the primary organization's core teams |
| \`internal\` | Owned by another team or division within the same organization |
| \`external\` | Owned by a third party, vendor, or external authority |

Ownership determines who is responsible for the artifact's availability, security posture, and cost. It is not the same as who *uses* an artifact.

### 3.4 Temporal Axis

Every PRISM/I landscape is timestamped and positioned on a temporal axis.

| State | Meaning |
|-------|---------|
| \`baseline\` | Current as-is state, verified at \`as_of\` date |
| \`transition\` | Change in progress — baseline partially replaced |
| \`target\` | Desired to-be state, not yet fully realized |

A landscape in \`transition\` state documents *both* what exists now and what it is becoming. This is how PRISM/I captures migrations in flight — cloud migrations, platform consolidations, region expansions — without requiring a separate "future state" document.

---

## 4. Dimensions — Artifact Types

### 4.1 Who

| Artifact type | Description |
|---------------|-------------|
| \`team\` | Engineering, platform, or operations team responsible for infrastructure |
| \`provider\` | Infrastructure provider: AWS, GCP, Azure, on-prem datacenter, colocation facility |

### 4.2 Where

| Artifact type | Description |
|---------------|-------------|
| \`account\` | Cloud account, project, subscription, or on-prem tenant |
| \`region\` | Geographic deployment location |
| \`environment\` | Logical deployment environment: production, staging, development, DR |
| \`network_zone\` | Network boundary at the organization level: corp, dmz, restricted |

### 4.3 Runtime

| Artifact type | Description |
|---------------|-------------|
| \`cluster\` | Container orchestration cluster: Kubernetes, ECS, Nomad |
| \`node_pool\` | Group of compute nodes within a cluster |
| \`service\` | Long-running workload: microservice, API, background worker |
| \`job\` | Batch or scheduled workload |
| \`function\` | Serverless function or FaaS unit |
| \`vm\` | Virtual machine or instance outside cluster orchestration |
| \`queue\` | Message queue: SQS, RabbitMQ, Azure Service Bus |
| \`topic\` | Pub/sub topic or event stream: Kafka topic, SNS topic, Pub/Sub topic |
| \`stream\` | Ordered event stream with retention: Kafka, Kinesis, EventHub |
| \`workflow_engine\` | Workflow orchestration platform: Temporal, Airflow, Step Functions |

### 4.4 State

| Artifact type | Description |
|---------------|-------------|
| \`database\` | Relational, document, graph, time-series, or wide-column store |
| \`object_store\` | Object/blob storage: S3, GCS, Azure Blob |
| \`file_system\` | Network-attached or distributed file system: EFS, NFS, GCS FUSE |
| \`cache\` | In-memory cache or distributed cache: Redis, Memcached, DAX |
| \`data_warehouse\` | Analytical store: Snowflake, BigQuery, Redshift |
| \`data_lake\` | Raw data repository: S3-based, Delta Lake, GCS bucket |
| \`search_index\` | Full-text or vector search: Elasticsearch, OpenSearch, Pinecone |
| \`backup\` | Backup target or snapshot policy |

### 4.5 Control

| Artifact type | Description |
|---------------|-------------|
| \`vpc\` | Virtual private cloud, VNet, or equivalent network boundary |
| \`subnet\` | Subnet within a VPC — public, private, or isolated |
| \`peering\` | VPC peering, transit gateway, or cross-network link |
| \`load_balancer\` | Layer 4 or Layer 7 load balancer, API gateway |
| \`cdn\` | Content delivery network edge |
| \`service_mesh\` | East-west traffic control: Istio, Linkerd, Consul Connect |
| \`dns\` | DNS zone or resolver: Route53, Cloud DNS, internal DNS |
| \`certificate\` | TLS/SSL certificate or PKI authority |
| \`iam_role\` | IAM role, service account, or workload identity |
| \`iam_policy\` | Permission policy governing one or more roles |
| \`secret_store\` | Secrets management: Vault, AWS Secrets Manager, Azure Key Vault |
| \`firewall_rule\` | Security group, NACL, WAF rule, or firewall policy |

### 4.6 Operations

| Artifact type | Description |
|---------------|-------------|
| \`pipeline\` | CI/CD pipeline: GitHub Actions, Jenkins, Tekton, CircleCI |
| \`registry\` | Container or artifact registry: ECR, GCR, Artifactory, Harbor |
| \`infrastructure_code\` | IaC module or stack: Terraform, Pulumi, CDK, Helm chart |
| \`metrics\` | Metrics collection and storage: Prometheus, CloudWatch, Datadog |
| \`logging\` | Log aggregation: ELK, Loki, Splunk, CloudWatch Logs |
| \`tracing\` | Distributed tracing: Jaeger, Zipkin, Tempo, X-Ray |
| \`alerting\` | Alert routing and on-call: PagerDuty, OpsGenie, Alertmanager |
| \`dashboard\` | Observability dashboard: Grafana, Datadog dashboard, CloudWatch dashboard |
| \`runbook\` | Operational procedure or incident response document |
| \`slo\` | Service level objective definition |
| \`chaos\` | Chaos engineering tooling: Chaos Monkey, LitmusChaos, Gremlin |

---

## 5. File Structure

A PRISM/I landscape is a directory with one YAML file per dimension.

\`\`\`
<org-name>/
  .prism-i/
    config.yaml           # landscape metadata
  who/
    landscape.yaml
  where/
    landscape.yaml
  runtime/
    landscape.yaml
  state/
    landscape.yaml
  control/
    landscape.yaml
  operations/
    landscape.yaml
\`\`\`

### \`.prism-i/config.yaml\`

\`\`\`yaml
prism_i_version: "1.0"
organization: "ACME, INC"
domain: insurance
scope: enterprise
temporal_state: baseline     # baseline | transition | target
as_of: "2025-01-01"
active_dimensions:
  - who
  - where
  - runtime
  - state
  - control
  - operations
\`\`\`

### Dimension landscape file structure

\`\`\`yaml
# who/landscape.yaml
dimension: who
as_of: "2025-01-01"
temporal_state: baseline

teams:
  - id: team-platform
    name: "Platform Engineering"
    ownership: self
    type: team
    ...

providers:
  - id: prov-aws
    name: "Amazon Web Services"
    ownership: external
    type: provider
    ...
\`\`\`

\`\`\`yaml
# where/landscape.yaml
dimension: where
as_of: "2025-01-01"
temporal_state: baseline

accounts:
  - id: acct-aws-prod
    name: "AWS Production Account"
    ownership: self
    type: account
    provider: aws
    ...

regions:
  - id: reg-us-east-1
    name: "US East (N. Virginia)"
    type: region
    provider: prov-aws
    ...
\`\`\`

Each dimension file uses its artifact type as the top-level key (plural). Artifacts within each section follow the same pattern: \`id\`, \`name\`, \`type\`, \`ownership\`, plus dimension-specific fields.

---

## 6. Artifact Fields

### Required fields (all artifact types)

| Field | Type | Description |
|-------|------|-------------|
| \`id\` | string | Unique within the landscape. Kebab-case. |
| \`name\` | string | Human-readable display name |
| \`type\` | string | Artifact type from the dimension's type list |
| \`ownership\` | enum | \`self\` \\| \`internal\` \\| \`external\` |

### Common optional fields

| Field | Type | Description |
|-------|------|-------------|
| \`description\` | string | Prose description |
| \`tags\` | string[] | Free-form labels |
| \`status\` | enum | \`active\` \\| \`deprecated\` \\| \`planned\` \\| \`decommissioning\` |
| \`temporal_state\` | enum | Override landscape-level temporal state for this artifact |
| \`links\` | object | Cross-references to PRISM EA artifacts by ID |
| \`notes\` | string | Free-form annotation |
| \`data_sensitivity\` | string[] | Data categories this artifact processes or stores: \`pii\` \\| \`spii\` \\| \`phi\` \\| \`pci\`. Most relevant on State dimension artifacts (databases, object stores, data warehouses) and Control dimension artifacts (IAM roles protecting sensitive data, secret stores). |
| \`compliance_frameworks\` | object[] | Compliance frameworks applicable to this artifact. Array of \`{framework, scope, status}\` objects. Same structure as PRISM EA §10.3. Framework values: \`GDPR\`, \`SOX\`, \`HIPAA\`, \`PCI-DSS\`, \`ISO-27001\`, \`SOC2\`, \`CCPA\`, \`FedRAMP\`, \`other\`. |

### Cross-referencing PRISM EA

A PRISM/I artifact can reference a PRISM EA artifact by its ID using the \`links\` field:

\`\`\`yaml
- id: svc-claims-api
  name: "Claims API"
  type: service
  ownership: self
  links:
    prism_ea_system: sys-claims-portal   # ID in PRISM EA Reality/systems
\`\`\`

This is a soft reference — no schema enforcement across frameworks. PRISM/I does not import PRISM EA's schemas.

---

## 7. Temporal Representation

Infrastructure landscapes change constantly. PRISM/I captures change at the artifact level, not just the landscape level.

\`\`\`yaml
# runtime/landscape.yaml
temporal_state: transition    # landscape is mid-migration

services:
  - id: svc-billing-zos
    name: "Legacy Billing z/OS"
    type: vm
    ownership: self
    status: decommissioning
    temporal_state: baseline   # this artifact is the old state

  - id: svc-billing-k8s
    name: "Billing Service (Kubernetes)"
    type: service
    ownership: self
    status: active
    temporal_state: target     # this artifact is the target state
\`\`\`

A landscape in \`transition\` state shows baseline and target artifacts side by side. The diff between them is the migration.

---

## 8. Validation

PRISM/I landscapes validate against JSON Schemas in \`schemas/\`.

| Schema file | Validates |
|-------------|-----------|
| \`config.schema.json\` | \`.prism-i/config.yaml\` |
| \`who.schema.json\` | \`who/landscape.yaml\` |
| \`where.schema.json\` | \`where/landscape.yaml\` |
| \`runtime.schema.json\` | \`runtime/landscape.yaml\` |
| \`state.schema.json\` | \`state/landscape.yaml\` |
| \`control.schema.json\` | \`control/landscape.yaml\` |
| \`operations.schema.json\` | \`operations/landscape.yaml\` |

---

## 9. What PRISM/I Does Not Cover

- **Application architecture** — service-to-service dependencies, API contracts, domain models. These belong in PRISM EA (Signal layer) or architecture decision records.
- **Cost management** — cloud billing, reserved instance tracking, chargeback. PRISM/I captures artifact ownership (which enables cost attribution) but is not a cost tool.
- **Runbook content** — PRISM/I records that a runbook *exists* as an artifact. The runbook itself lives in your wiki or docs system.
- **Real-time state** — PRISM/I is a landscape description, not a live inventory. It describes what *should* be true as of \`as_of\`. For live state, use your cloud provider's asset inventory or a CMDB.
`,dE=`# PRISM/CY — Cybersecurity Landscape Framework

Version: 1.0.0
Status: Draft
Licence: CC BY-SA 4.0

---

## 1. Overview

PRISM/CY is a framework for describing, governing, and evolving an organization's cybersecurity posture as a landscape. It answers a class of question that no existing security framework addresses: *what does our security posture look like right now, as a structured, navigable landscape?*

Existing security frameworks — NIST CSF, ISO 27001, SOC 2, CIS Controls — are **control checklists**. They tell you which controls you should have, and whether you've implemented them. They do not describe your actual landscape: which identities have access to what, what your attack surface looks like, what threats are actively targeting which surfaces, and how your posture is evolving over time.

PRISM/CY fills that gap. It is a text-first, git-native, schema-validated landscape description that any organization can author, version, and validate — without proprietary tooling.

### What PRISM/CY is not

- Not a control framework. It does not prescribe controls or measure gap-to-standard. Use NIST CSF or ISO 27001 for that.
- Not a live CSPM (Cloud Security Posture Manager). PRISM/CY describes the landscape as of \`as_of\`. For live drift detection, use Prisma Cloud, Wiz, or equivalent.
- Not a penetration testing methodology. PRISM/CY models your understanding of the attack surface; it doesn't enumerate all possible exploits.
- Not a ticketing system. Security programs and findings reference remediation work; they don't replace it.

### Relationship to PRISM (Enterprise Architecture)

PRISM/CY and PRISM EA are independent frameworks. They share authoring conventions and cross-reference by artifact ID.

| Concern | Framework |
|---------|-----------|
| Stakeholders, capabilities, systems, intent, signals, movement | PRISM EA |
| Identities, attack surface, controls, threats, posture | PRISM/CY |

PRISM EA's \`Reality/systems\` lists what systems exist. PRISM/CY's \`Surface\` dimension describes which of those systems are exposed and how. Cross-reference using the \`prism_ea_system\` link field — no schema enforcement, soft reference by ID.

### Relationship to PRISM/I (Infrastructure)

PRISM/I describes how infrastructure runs. PRISM/CY describes how it's secured. The relationship is:

- PRISM/I \`Control\` dimension: network-level controls (VPCs, firewalls, IAM policies, certificates)
- PRISM/CY \`Controls\` dimension: the full security control posture — technical + organizational

They overlap at network controls. Cross-reference PRISM/I control artifacts using the \`prism_i_artifact\` link field.

---

## 2. Foundational Principles

PRISM/CY inherits three principles from PRISM EA.

### 2.1 YAML for Artifacts, JSON for Schemas

Security landscapes are authored in YAML. Schemas are in JSON Schema format. YAML because security teams, architects, GRC analysts, and CISOs need to read and write these files — not just developers. Comments, block scalars, and minimal syntax noise matter.

### 2.2 Git-Native Governance

| Git concept | PRISM/CY meaning |
|-------------|-----------------|
| Branch | Exploration of a security posture change |
| Commit | A security decision or remediation step |
| Pull request | Security review — architecture, GRC, CISO sign-off |
| Tag | Published security baseline |
| Diff | Security posture change analysis |
| History | Audit trail for security decisions |

Security posture in a git repo means: every posture change is a commit with an author, timestamp, and reviewers. This is more auditable than a spreadsheet.

### 2.3 Temporal Axis

Every PRISM/CY landscape is positioned on a temporal axis.

| State | Meaning |
|-------|---------|
| \`baseline\` | Current as-is posture, verified at \`as_of\` date |
| \`transition\` | Posture in flux — remediation underway, migration in progress |
| \`target\` | Desired future posture, not yet fully realized |

Artifacts declare their own temporal state. A control being retired is \`decommissioning\`. A planned control is \`planned\`. The combination of artifact-level states describes the migration from current to target posture.

### 2.4 Who & Where is Inherited

Security teams and organizational structure live in PRISM EA's P layer. PRISM/CY does not duplicate stakeholders or geographies. It references them by ID.

This is intentional: the organization chart, geography, and jurisdiction structure is the same whether you're describing EA or security posture. PRISM/CY focuses on the security-specific concerns.

---

## 3. The Five Dimensions

| Dimension | Question | Scope |
|-----------|----------|-------|
| **Identity** | Who and what has access, and how? | IAM roles, service accounts, external identities, privileged access |
| **Surface** | What is exposed? | Public endpoints, internal APIs, legacy interfaces, data exposure points |
| **Controls** | What's protecting it? | Technical controls (WAF, SIEM, MFA, CSPM), organizational controls (policies, training) |
| **Threats** | What's threatening it? | Threat actors, active risks, EOL risks, AI risks, supply chain risks, regulatory risks |
| **Posture** | Where do we stand? | Compliance framework status, maturity, open programs, remediation trajectory |

### Why five?

**Identity stands alone** because identity is the new perimeter. In a cloud-native, zero-trust world, network boundaries are secondary to identity boundaries. Who (or what) has a credential matters more than where the traffic originates.

**Surface is separate from Identity** because exposure and access are different concerns. A system can be exposed without a credential (e.g., a misconfigured public S3 bucket). A credential can exist without a public exposure. Surface describes the shape of the attack surface; Identity describes who has keys to it.

**Controls stands alone** because controls are the defensive response. They span Identity (MFA enforces it), Surface (WAF protects it), and Threats (SIEM detects them). Burying controls inside another dimension obscures the governance question: "what's actually protecting us?"

**Threats stands alone** because active threat intelligence is a separate concern from the landscape it targets. A threat actor doesn't become irrelevant because the surface is patched — it stays in the landscape as a documented risk. Threats reference Surfaces and Identities but are not subordinate to them.

**Posture is last** because it synthesizes the other four. Posture artifacts describe where the organization stands relative to external compliance frameworks, and which programs are addressing identified gaps.

---

## 4. Dimensions — Artifact Types

### 4.1 Identity

| Artifact type | Description |
|---------------|-------------|
| \`iam_role\` | IAM role: AWS IAM role, Azure AD role, GCP service account role, Okta group |
| \`service_account\` | Non-human identity: CI/CD service account, workload identity, application service user |
| \`external_identity\` | Third-party or partner identity with system access |
| \`privileged_access\` | Privileged account: local admin, break-glass access, root credentials |
| \`federation\` | Federated identity configuration: SAML IdP, OIDC provider, SSO integration |

**Key fields on identity artifacts:**

| Field | Values | Meaning |
|-------|--------|---------|
| \`mfa_enforced\` | \`true\` \\| \`false\` | Whether MFA is required for this identity |
| \`access_level\` | \`read\` \\| \`write\` \\| \`admin\` \\| \`privileged\` | Scope of access granted |
| \`pam_controlled\` | \`true\` \\| \`false\` | Whether access is managed through PAM tooling |
| \`data_sensitivity\` | string[] | Data categories this identity is authorized to access: \`pii\` \\| \`spii\` \\| \`phi\` \\| \`pci\` |
| \`prism_ea_stakeholder\` | string | Reference to PRISM EA stakeholder ID |

### 4.2 Surface

| Artifact type | Description |
|---------------|-------------|
| \`public_endpoint\` | Internet-facing endpoint: HTTPS, API gateway, webhook receiver |
| \`internal_endpoint\` | Private endpoint: VPC-internal API, service mesh endpoint |
| \`legacy_interface\` | Pre-modern interface: JCL batch, SFTP, mainframe terminal |
| \`data_exposure_point\` | Where data leaves a boundary: export API, partner data feed, S3 presigned URL |
| \`admin_console\` | Administrative interface: cloud console access, bastion host |

**Key fields on surface artifacts:**

| Field | Values | Meaning |
|-------|--------|---------|
| \`direction\` | \`inbound\` \\| \`outbound\` \\| \`bidirectional\` | Traffic flow direction |
| \`authentication\` | \`none\` \\| \`api-key\` \\| \`oauth2\` \\| \`saml\` \\| \`mfa-required\` | Authentication mechanism |
| \`waf_protected\` | \`true\` \\| \`false\` | Whether a WAF sits in front |
| \`data_sensitivity\` | string[] | Data categories this surface can expose: \`pii\` \\| \`spii\` \\| \`phi\` \\| \`pci\` |
| \`prism_ea_system\` | string | Reference to PRISM EA system ID |

### 4.3 Controls

| Artifact type | Description |
|---------------|-------------|
| \`technical_control\` | Technology-implemented control: WAF, MFA, SIEM, CSPM, DLP, EDR, encryption |
| \`org_control\` | Organizationally-implemented control: access reviews, security training, vendor assessments, policy |
| \`detective_control\` | Control focused on detection: SIEM rules, anomaly detection, alerting thresholds |
| \`preventive_control\` | Control focused on prevention: WAF rules, IAM boundaries, network segmentation |
| \`corrective_control\` | Control focused on response: incident playbooks, auto-remediation, backup + restore |

**Key fields on control artifacts:**

| Field | Values | Meaning |
|-------|--------|---------|
| \`control_function\` | \`identify\` \\| \`protect\` \\| \`detect\` \\| \`respond\` \\| \`recover\` | NIST CSF function alignment |
| \`coverage\` | \`full\` \\| \`partial\` \\| \`planned\` | How broadly this control is applied |
| \`vendor\` | string | Tool or service vendor implementing this control |

### 4.4 Threats

| Artifact type | Description |
|---------------|-------------|
| \`threat\` | Active or assessed threat: APT, insider, supply chain, regulatory, AI risk, EOL risk |
| \`vulnerability\` | Known vulnerability: CVE, misconfiguration, architectural weakness |
| \`risk\` | Assessed risk combining threat + likelihood + impact |

**Key fields on threat artifacts:**

| Field | Values | Meaning |
|-------|--------|---------|
| \`threat_category\` | \`external-actor\` \\| \`insider\` \\| \`supply-chain\` \\| \`regulatory\` \\| \`ai-risk\` \\| \`eol-risk\` \\| \`credential\` | Type of threat |
| \`likelihood\` | \`critical\` \\| \`high\` \\| \`medium\` \\| \`low\` | Assessed likelihood of exploitation |
| \`impact\` | \`critical\` \\| \`high\` \\| \`medium\` \\| \`low\` | Business impact if exploited |
| \`mitigated_by\` | string[] | IDs of controls that mitigate this threat |

**Dependency modeling in Threats:**

Threat artifacts use \`depends_on\` to link to the surfaces, identities, or controls they exploit or reference. This enables blast radius analysis:

- Selecting a surface shows which threats target it (impacted threats)
- When a surface is decommissioned, linked threats light up as "at risk of becoming unresolvable" — the threat record may need closure or reassignment

\`\`\`yaml
- id: threat-zos-eol
  type: threat
  threat_category: eol-risk
  depends_on: [surf-zos-jcl-batch]   # threat tied to this surface
  # if surf-zos-jcl-batch decommissions, this threat should be closed
\`\`\`

### 4.5 Posture

| Artifact type | Description |
|---------------|-------------|
| \`compliance\` | Compliance framework status: GDPR, SOX, ISO 27001, SOC 2, PCI-DSS |
| \`maturity_assessment\` | Security maturity score against a framework domain |
| \`security_program\` | Active security remediation or improvement program |
| \`finding\` | Open finding from audit, pen test, or CSPM scan |

**Key fields on posture artifacts:**

| Field | Values | Meaning |
|-------|--------|---------|
| \`framework\` | \`GDPR\` \\| \`SOX\` \\| \`ISO-27001\` \\| \`SOC2\` \\| \`PCI-DSS\` \\| \`NIST-CSF\` \\| \`HIPAA\` \\| etc. | Compliance framework |
| \`status\` | \`certified\` \\| \`in-progress\` \\| \`applicable\` \\| \`exempt\` | Framework compliance status |
| \`maturity_level\` | \`initial\` \\| \`defined\` \\| \`managed\` \\| \`optimized\` | Maturity rating |
| \`target_date\` | date | Target completion date for in-progress items |

---

## 5. File Structure

\`\`\`
<org-name>/
  .prism-cy/
    config.yaml             # landscape metadata
  identity/
    landscape.yaml
  surface/
    landscape.yaml
  controls/
    landscape.yaml
  threats/
    landscape.yaml
  posture/
    landscape.yaml
\`\`\`

### \`.prism-cy/config.yaml\`

\`\`\`yaml
prism_cy_version: "1.0"
organization: "ACME, INC"
description: "Cybersecurity landscape — insurance operations, cloud migration"
domain: insurance
scope: enterprise
temporal_state: transition     # mid cloud migration; security posture in flux
as_of: "2025-01-01"
active_dimensions:
  - identity
  - surface
  - controls
  - threats
  - posture
security_frameworks:
  - GDPR
  - SOX
  - ISO-27001
\`\`\`

### Dimension landscape file

\`\`\`yaml
# identity/landscape.yaml
dimension: identity
as_of: "2025-01-01"
temporal_state: transition

iam_roles:
  - id: role-soc-analyst
    name: "SOC Analyst"
    type: iam_role
    ownership: self
    access_level: read
    mfa_enforced: true
    ...

service_accounts:
  - id: svc-acct-claims-ai
    name: "AI Claims Triage Service Account"
    type: service_account
    ownership: self
    pam_controlled: false
    ...
\`\`\`

Each dimension file uses its artifact type as the top-level key (plural). The \`id\` must be unique within the landscape.

---

## 6. Cross-Referencing

PRISM/CY artifacts can reference artifacts from other PRISM frameworks using \`links\`:

\`\`\`yaml
- id: surf-claims-portal
  type: public_endpoint
  links:
    prism_ea_system: sys-claims-portal    # PRISM EA Reality/systems
    prism_i_artifact: svc-claims-api      # PRISM/I Runtime/services
\`\`\`

Cross-references are soft — no schema enforcement across frameworks. PRISM/CY does not import other frameworks' schemas.

---

## 7. Dependency Modeling and Blast Radius

PRISM/CY supports \`depends_on\` on all artifact types. The key use cases:

**Threat → Surface:** A threat depends on the surface it exploits. When the surface decommissions, the threat record should be closed.

**Security program → Threat:** A remediation program depends on the threat it addresses. When the threat is resolved, the program can be closed.

**Identity → Control:** A privileged identity depends on the PAM control managing it. If the control is decommissioned, the identity is unmanaged.

Blast radius analysis surfaces these relationships visually. Select any artifact to see what depends on it (impacted) and what it depends on (upstream).

---

## 8. Temporal Representation

\`\`\`yaml
# threats/landscape.yaml
temporal_state: transition

threats:
  - id: threat-zos-eol
    name: "z/OS EOL Risk"
    type: threat
    status: active
    temporal_state: baseline   # this threat exists in current state
    target_resolution: "2025-12-31"

  - id: threat-zos-eol-resolved
    name: "z/OS EOL Risk (resolved)"
    type: threat
    status: decommissioned
    temporal_state: target      # when migration completes, this threat closes
\`\`\`

---

## 9. What PRISM/CY Does Not Cover

- **Live security posture.** PRISM/CY is a landscape description, not a real-time dashboard. For live drift detection, use Wiz, Prisma Cloud, or equivalent.
- **Penetration test methodology.** PRISM/CY models your understanding of the surface; it doesn't enumerate all possible exploit paths.
- **Security event data.** PRISM/CY records that a SIEM exists and what it covers; the actual alerts live in your SIEM.
- **Detailed access policies.** PRISM/CY captures the *shape* of IAM (which roles exist, what access level, whether MFA-enforced); specific policy JSON/YAML lives in your IaC repo.
`,pE=`# PRISM/A — Application Architecture Framework

Version: 1.0.0
Status: Draft
Licence: CC BY-SA 4.0

---

## 1. Overview

PRISM/A is a framework for describing, governing, and evolving an organization's application architecture as a landscape. It answers the question: *what applications exist, how are they structured, how do they relate to each other, how healthy are they, and where are they going?*

Existing approaches each cover a subset of this:

| Approach | What it does | What it misses |
|----------|-------------|----------------|
| **C4 Model** | Diagrams: system context, container, component, code | Diagram-first; no text model; no temporal state; no quality |
| **TOGAF Application Layer** | Application inventory and interface mapping | Heavyweight; no bounded context structure; no AI-native thinking |
| **Service Catalogs** | Lists what services exist | No design intent; no quality; no evolution arc |
| **ADRs** | Captures architectural decisions | Not connected to the resulting landscape; no cross-referencing |
| **OpenAPI Specs** | Interface contracts | Only the interface; nothing about component structure or quality |

PRISM/A is text-first, git-native, and schema-validated. It models the full application landscape — not just what exists, but the organizational intent behind it, the quality reality of it, and the trajectory it's following.

### What makes PRISM/A different

**Domain-Driven Design as the organizing principle.** PRISM/A treats bounded contexts (domains) as the primary architectural unit — not services, not layers, not teams. Services, events, and APIs are described *within* and *between* domains. This makes the domain model navigable by architects, product owners, and engineers.

**Quality as a first-class dimension.** Most architecture documentation describes what systems do, not how healthy they are. PRISM/A includes a Quality dimension: test coverage, SLO compliance, technical debt level, reliability, and security posture are architectural artifacts, not metrics-tool outputs.

**AI-native from day one.** AI systems (agents, LLMs, agentic workflows) participate fully in the application landscape. They have domains, components, integration contracts, quality metrics, and evolution plans — just like any other system.

**Evolution instead of future-state documents.** The Evolution dimension replaces separate "future state architecture" documents. ADRs, migration programs, API versioning plans, and deprecation roadmaps all live in the same landscape — connected to the current-state components they affect.

### Relationship to PRISM EA

| Concern | Framework |
|---------|-----------|
| Capabilities, systems (high-level), processes, data, signals, intent | PRISM EA |
| Bounded contexts, components, cross-domain integrations, quality, evolution | PRISM/A |

PRISM EA's \`Reality/systems\` lists what systems exist at a business level. PRISM/A's \`Components\` dimension describes their internal structure, tech stack, and runtime characteristics. They cross-reference by system ID.

PRISM EA's \`Signal/apis\` and \`Signal/events\` list external integration contracts. PRISM/A's \`Integrations\` dimension describes the full cross-domain integration graph — both internal and external.

### Relationship to PRISM/I (Infrastructure)

PRISM/I describes how infrastructure runs. PRISM/A describes what applications run on that infrastructure. Cross-reference PRISM/I runtime artifacts (clusters, services, topics) from PRISM/A components using the \`prism_i_artifact\` link field.

---

## 2. Foundational Principles

PRISM/A inherits three principles from PRISM EA.

### 2.1 YAML for Artifacts, JSON for Schemas

Application landscapes are authored in YAML. Engineers, architects, and tech leads need to read and write these files without a modeling tool. YAML's comments, block scalars, and minimal syntax noise make this tractable.

### 2.2 Git-Native Governance

| Git concept | PRISM/A meaning |
|-------------|----------------|
| Branch | Exploration of an architectural option |
| Commit | An architectural decision or refactor |
| Pull request | Architecture review — tech lead, staff engineer, architect |
| Tag | Published architecture baseline |
| Diff | Change impact analysis across the application estate |
| History | Audit trail for architectural decisions |

ADRs in the Evolution dimension reference git commit SHAs — making decisions traceable from the landscape to the exact commit where they were made.

### 2.3 Temporal Axis

| State | Meaning |
|-------|---------|
| \`baseline\` | The application landscape as it exists today |
| \`transition\` | An intermediate state during a refactor or migration |
| \`target\` | The desired future architecture |

Components being replaced are \`decommissioning\`. Planned future components are \`planned\`. The landscape describes the full arc from current to target.

### 2.4 Who & Where is Inherited

Application ownership and team structure live in PRISM EA's P layer. PRISM/A does not duplicate stakeholders or geographies. Component ownership references PRISM EA stakeholder IDs.

---

## 3. The Five Dimensions

| Dimension | Question | Scope |
|-----------|----------|-------|
| **Domains** | What are the logical partitions? | Bounded contexts and their purpose, ownership, and relationships |
| **Components** | What are the building blocks? | Services, APIs, workers, UIs, AI models, adapters within domains |
| **Integrations** | How do they communicate? | Cross-domain contracts: synchronous APIs, async events, data contracts |
| **Quality** | How healthy is the estate? | Test coverage, SLOs, tech debt, reliability, security posture at app level |
| **Evolution** | Where is it going? | ADRs, migration programs, API versioning, deprecation roadmap |

### Why five?

**Domains precede components** because the domain model is the organizing principle. A service without a domain has no clear ownership, no clear boundary, and no clear evolution path. Naming domains first forces the architectural conversation that most service inventories skip.

**Components are inside domains.** Unlike service catalogs that list everything at the same level, PRISM/A places components within domains. This makes cross-domain coupling immediately visible — when an integration crosses a domain boundary, that's an explicit architectural decision.

**Integrations stand alone** because cross-domain contracts are the most consequential decisions in application architecture. They outlive the components that implement them. A separate dimension gives them the governance attention they deserve — just as PRISM EA's Signal layer does for enterprise signals.

**Quality is a dimension, not a metric.** Most architecture documentation is silent on health. By making quality a first-class dimension, PRISM/A forces organizations to describe the quality reality of their estate alongside its functional reality. A component with zero test coverage and critical tech debt is an architectural risk.

**Evolution replaces future-state documents** because separate "to-be architecture" documents go stale immediately. In PRISM/A, the evolution arc lives in the same file as the current state — connected to the components it affects via \`depends_on\` references.

---

## 4. Dimensions — Artifact Types

### 4.1 Domains

| Artifact type | Description |
|---------------|-------------|
| \`domain\` | A bounded context: a named, cohesive area of the application estate with clear ownership and language |

**Key fields on domain artifacts:**

| Field | Description |
|-------|-------------|
| \`ubiquitous_language\` | string[] — the key terms and concepts that define this domain |
| \`owner_stakeholder_id\` | Reference to PRISM EA stakeholder who owns this domain |
| \`domain_type\` | \`core\` \\| \`supporting\` \\| \`generic\` — DDD classification |
| \`maturity\` | \`initial\` \\| \`defined\` \\| \`managed\` — domain architecture maturity |

### 4.2 Components

| Artifact type | Description |
|---------------|-------------|
| \`service\` | Long-running workload: backend API, microservice, BFF (backend-for-frontend) |
| \`ui\` | User interface: web SPA, mobile app, desktop client, microfrontend |
| \`worker\` | Background workload: consumer, job, batch processor |
| \`ai_model\` | AI/ML model or AI agent: deployed model, LLM endpoint, agentic system |
| \`adapter\` | Integration adapter: anti-corruption layer, external system facade |
| \`platform\` | Third-party platform: SaaS product, vendor-managed system |

**Key fields on component artifacts:**

| Field | Description |
|-------|-------------|
| \`domain_id\` | Which domain this component belongs to |
| \`tech_stack\` | string[] — runtime, language, framework (e.g., [Java 21, Spring Boot, EKS]) |
| \`system_type\` | \`ai-agent\` \\| \`llm\` \\| \`agentic-workflow\` for AI components |
| \`trigger_mode\` | \`event-driven\` \\| \`api-driven\` \\| \`scheduled\` \\| \`continuous\` \\| \`manual\` |
| \`prism_ea_system\` | Reference to PRISM EA system ID |
| \`prism_i_artifact\` | Reference to PRISM/I runtime artifact |
| \`data_sensitivity\` | string[] — data categories this component processes: \`pii\` \\| \`spii\` \\| \`phi\` \\| \`pci\` |
| \`compliance_frameworks\` | object[] — compliance frameworks applicable. Same structure as PRISM EA §10.3. |

### 4.3 Integrations

| Artifact type | Description |
|---------------|-------------|
| \`api\` | Synchronous API contract: REST, GraphQL, gRPC |
| \`event\` | Asynchronous event: Kafka topic, SNS/SQS message, webhook |
| \`data_contract\` | Structured data exchange agreement: batch feed, shared DB table, ETL pipeline |
| \`adapter_contract\` | Contract through an anti-corruption layer (adapter component) |

**Key fields on integration artifacts:**

| Field | Description |
|-------|-------------|
| \`producer_domain\` | Domain ID producing this integration |
| \`consumer_domain\` | Domain ID consuming this integration |
| \`direction\` | \`inbound\` \\| \`outbound\` \\| \`bidirectional\` |
| \`coupling\` | \`synchronous\` \\| \`asynchronous\` \\| \`batch\` |
| \`schema_registry\` | Whether the event/API schema is registered in a schema registry |
| \`versioning\` | \`none\` \\| \`url-versioned\` \\| \`header-versioned\` \\| \`schema-versioned\` |
| \`data_sensitivity\` | string[] — data categories flowing through this integration: \`pii\` \\| \`spii\` \\| \`phi\` \\| \`pci\` |

### 4.4 Quality

| Artifact type | Description |
|---------------|-------------|
| \`quality_metric\` | Snapshot of a component's quality: coverage, SLO, debt, reliability |
| \`slo\` | Service level objective: target, current measurement, breach history |
| \`tech_debt_record\` | Documented technical debt item with severity and resolution plan |

**Key fields on quality artifacts:**

| Field | Description |
|-------|-------------|
| \`component_id\` | Which component this quality artifact describes |
| \`test_coverage\` | Percentage — automated test coverage |
| \`tech_debt_level\` | \`none\` \\| \`low\` \\| \`medium\` \\| \`high\` \\| \`critical\` |
| \`reliability\` | \`high\` \\| \`medium\` \\| \`low\` — P99 latency and error rate assessment |
| \`security_posture\` | \`strong\` \\| \`moderate\` \\| \`weak\` — security hygiene of this component |
| \`last_assessed\` | Date of last quality assessment |

### 4.5 Evolution

| Artifact type | Description |
|---------------|-------------|
| \`decision\` | Architectural Decision Record (ADR): the decision, rationale, and trade-offs |
| \`migration_program\` | Planned migration or replacement: source → target component, timeline |
| \`roadmap_item\` | Planned new capability or feature: domain, component, expected delivery |
| \`deprecation\` | Deprecation notice for an API, event, or component version |

**Key fields on evolution artifacts:**

| Field | Description |
|-------|-------------|
| \`status\` | \`active\` \\| \`planned\` \\| \`completed\` \\| \`cancelled\` |
| \`target_date\` | Expected completion or delivery date |
| \`decision_date\` | For ADRs: when the decision was made |
| \`git_commit_sha\` | For ADRs: the commit where this decision was first recorded |
| \`replaces\` | IDs of artifacts this evolution artifact supersedes |
| \`superseded_by\` | ID of the evolution artifact that superseded this one |

---

## 5. File Structure

\`\`\`
<org-name>/
  .prism-a/
    config.yaml             # landscape metadata
  domains/
    landscape.yaml
  components/
    landscape.yaml
  integrations/
    landscape.yaml
  quality/
    landscape.yaml
  evolution/
    landscape.yaml
\`\`\`

### \`.prism-a/config.yaml\`

\`\`\`yaml
prism_a_version: "1.0"
organization: "ACME, INC"
description: "Application architecture — insurance operations platform"
domain: insurance
scope: enterprise
temporal_state: transition    # billing migration in progress
as_of: "2025-01-01"
active_dimensions:
  - domains
  - components
  - integrations
  - quality
  - evolution
tech_governance:
  schema_registry: true
  adr_required: true
  api_review_required: true
\`\`\`

---

## 6. Domain Modeling

PRISM/A adopts three DDD domain classifications:

| Classification | Meaning |
|---------------|---------|
| \`core\` | The business differentiator. What the organization does that competitors can't easily replicate. |
| \`supporting\` | Enables core domains but is not differentiating. Often a good candidate for SaaS or package software. |
| \`generic\` | Commodity function. Should be bought or built with minimal investment. |

Classification guides investment and build-vs-buy decisions:

- \`core\` domains get greenfield investment and internal ownership.
- \`supporting\` domains may use package software with customization.
- \`generic\` domains should be SaaS-first.

\`\`\`yaml
- id: dom-claims
  name: "Claims"
  type: domain
  domain_type: core         # claims adjudication is ACME's differentiator
  maturity: managed

- id: dom-billing
  name: "Billing"
  type: domain
  domain_type: supporting   # billing is essential but not differentiating
  maturity: initial         # z/OS migration constrains maturity

- id: dom-auth
  name: "Authentication"
  type: domain
  domain_type: generic      # buy: use Okta
  maturity: managed
\`\`\`

---

## 7. Cross-Referencing

\`\`\`yaml
- id: comp-claims-portal
  type: service
  links:
    prism_ea_system: sys-claims-portal    # PRISM EA Reality/systems
    prism_i_artifact: svc-claims-api      # PRISM/I Runtime/services
    prism_cy_surface: surf-claims-portal  # PRISM/CY Surface
\`\`\`

---

## 8. Dependency Modeling and Blast Radius

Components and integrations use \`depends_on\` to declare runtime dependencies. This enables:

**Migration blast radius:** When \`comp-billing-zos\` is \`decommissioning\`, all integrations and components that depend on it are at risk. Selecting the legacy billing component shows every at-risk artifact.

**Evolution blast radius:** When a domain or component has a \`migration_program\` depending on it, selecting the artifact shows what programs are planned.

\`\`\`yaml
- id: int-portal-billing
  type: api
  depends_on: [comp-billing-zos]   # at risk — billing z/OS decommissioning
\`\`\`

---

## 9. What PRISM/A Does Not Cover

- **Code-level architecture.** PRISM/A describes components and their relationships. Internal code structure, class hierarchies, and module dependencies live in code and tooling (e.g., static analysis, dependency graphs).
- **Runtime topology.** PRISM/A records that a component runs on EKS; the actual pod spec lives in PRISM/I or your IaC repo.
- **API implementation.** PRISM/A records that an API exists and what integration contract it uses; the OpenAPI spec lives in your API gateway or schema registry.
- **Runbook content.** PRISM/A records that a runbook *exists* as a quality artifact; the runbook lives in your docs system.
- **Real-time health data.** PRISM/A is a landscape description, not a live dashboard. For live SLO tracking, use your observability platform.
`,fE=`# PRISM/MVP — Product Validation Landscape Framework

Version: 1.0.0
Status: Draft
Licence: CC BY-SA 4.0

---

## 1. Overview

PRISM/MVP is a framework for describing, governing, and evolving a product's validation journey as a structured, navigable landscape. It answers the question no existing product framework addresses as a coherent landscape: *who are we building for, what problem are we solving, what are we betting on, what do we believe but haven't proven, and what are we actually learning?*

Existing approaches each cover a subset:

| Approach | What it does | What it misses |
|----------|-------------|----------------|
| **MVP Canvas** | Single-page visual: segments, value props, channels, assumptions, experiments | Flat structure — no hierarchy, no validation lifecycle, no cross-referencing, no temporal arc |
| **Lean Startup** | Build-measure-learn loop | No structured landscape; no assumption prioritization; no connection to technical reality |
| **OKRs** | Outcome-based goal setting | Tells you what to achieve, not how to validate the assumptions behind the goals |
| **User Story Mapping** | Visual backlog structure | Output-focused (features), not outcome-focused (validation); no assumption tracking |
| **Product Backlog (Scrum)** | Feature priority queue | Assumes you know what to build; no room for the "is this the right thing?" question |
| **Shape Up** | Bet-based six-week cycles | Build-focused; no hypothesis lifecycle; no market or value modeling |

PRISM/MVP is text-first, git-native, and schema-validated. It models the full product validation landscape — not just what the product does, but the organizational beliefs behind it, the experiments testing those beliefs, and the learning trajectory from hypothesis to validated product.

### What makes PRISM/MVP different

**Hypotheses as the unit of work.** Not features, not stories, not tickets. Every capability we build is a bet on an underlying hypothesis. PRISM/MVP makes those hypotheses explicit, versioned, and validated (or invalidated) through the git history.

**Learning velocity over feature throughput.** The north star of PRISM/MVP is not how many features shipped — it's how fast the team is invalidating assumptions. Invalidating a risky assumption is a product success even if the feature is killed.

**Bets not backlogs.** PRISM/MVP replaces must/should/could as a priority scheme with investment decisions. Each bet has a rationale ("we're betting on this because..."), a linked hypothesis ("the assumption this tests is..."), and an opportunity cost ("by doing this, we're not doing..."). A bet without a rationale is a guess. A guess should not be in the landscape.

**Temporal arc across the validation journey.** Every hypothesis has a lifecycle: \`unvalidated\` → \`in-progress\` → \`validated\` or \`invalidated\`. The landscape captures this arc, preserving what was learned even after invalidation. Deleted hypotheses are invisible learnings. PRISM/MVP keeps them.

**Exclusions are first-class artifacts.** Most product frameworks ignore what you decided NOT to build. PRISM/MVP models exclusions explicitly — with rationale. This prevents the "why didn't we build X?" conversation from happening twice.

**Cross-framework integration.** Bets link to PRISM/A components (what we're actually building). Market segments link to PRISM EA stakeholders (who we're building for). Signal metrics link to PRISM/A quality SLOs (measuring the right thing at the system level). PRISM/MVP is not a standalone canvas — it is part of the PRISM ecosystem.

### What PRISM/MVP is not

- **Not a backlog.** PRISM/MVP describes *what you're learning* and *why you're building it*. Sprint tasks, user stories, and acceptance criteria live in Jira, Linear, or your issue tracker.
- **Not a roadmap.** Roadmaps describe what you plan to deliver on a timeline. PRISM/MVP describes what you're validating on a learning arc. They are compatible but not the same thing.
- **Not a business case.** PRISM/MVP doesn't prove ROI before building. It structures the learning process that produces the evidence for ROI decisions.
- **Not a research repository.** PRISM/MVP captures structured learnings, not raw research artifacts. Transcripts, session recordings, and survey data live in your research tool.

### Relationship to PRISM (Enterprise Architecture)

| Concern | Framework |
|---------|-----------|
| Stakeholders, capabilities, systems, intent, signals, movement | PRISM EA |
| Customer segments, value propositions, product bets, hypotheses, learning signals | PRISM/MVP |

PRISM EA's \`People/stakeholders\` lists who's involved in the enterprise. PRISM/MVP's \`Market\` dimension describes those same people through a product lens — their jobs to be done, their pain points, and how they're reached. Cross-reference PRISM EA stakeholder IDs using the \`prism_ea_stakeholder\` link field.

PRISM EA's \`Intent\` layer captures strategic goals and drivers. PRISM/MVP's \`Value\` dimension captures the product-level problem statements those goals generate. They are complementary: Intent is "why the enterprise" and Value is "why this product."

### Relationship to PRISM/A (Application Architecture)

PRISM/A describes the applications being built. PRISM/MVP describes why those applications are the right bets. Bets in PRISM/MVP's \`Bets\` dimension link to PRISM/A component IDs — connecting the product decision to the technical implementation.

---

## 2. Foundational Principles

PRISM/MVP inherits three principles from PRISM EA.

### 2.1 YAML for Artifacts, JSON for Schemas

Product landscapes are authored in YAML. Product managers, designers, engineers, and business stakeholders all need to read and write these files without specialized tooling. YAML's comments, block scalars, and minimal syntax noise make this tractable.

### 2.2 Git-Native Learning

| Git concept | PRISM/MVP meaning |
|-------------|------------------|
| Branch | Exploration of a product direction or hypothesis variant |
| Commit | An assumption formed, tested, or concluded |
| Pull request | Product review — PM, design, engineering, and stakeholder alignment |
| Tag | Published learning milestone: "we know enough to proceed" |
| Diff | Change in product understanding since last review |
| History | Audit trail of what was believed, tested, and learned |

Every invalidated hypothesis is a preserved learning. Every pivot is a pull request with a reviewer discussion. Every "why did we build this?" question is answerable from the git log.

### 2.3 Temporal Axis

| State | Meaning |
|-------|---------|
| \`baseline\` | Current understanding — hypotheses formed, product in initial state |
| \`transition\` | Validation in progress — experiments running, learnings accumulating |
| \`target\` | Validated state — hypotheses confirmed or product direction set |

Hypotheses declare their own validation state. An assumption under active testing is different from one that's been invalidated. The landscape tracks both — without deletion.

### 2.4 Jobs-to-Be-Done as the Customer Model

PRISM/MVP frames customers through *what they're trying to accomplish*, not just demographics. A "26–35 year old urban professional" is an incomplete customer model. "When I file a complex insurance claim, I want to understand where it stands without calling an agent, so I can plan my recovery financially" is actionable.

Every segment in PRISM/MVP includes a Jobs-to-Be-Done (JTBD) statement. Personas are optional enrichment; the JTBD is the core.

JTBD format: \`When [situation], I want [motivation], so I can [outcome].\`

---

## 3. The Five Dimensions

| Dimension | Question | Scope |
|-----------|----------|-------|
| **Market** | Who are we building for, and what is their context? | Segments, personas, channels, engagement models |
| **Value** | What problem are we solving, and what value do we deliver? | Problem statements, value propositions, differentiators, outcomes |
| **Bets** | What are we building, and what are we choosing NOT to build? | Feature bets (must/should/could as investment decisions), exclusions, alternatives |
| **Hypotheses** | What do we believe but haven't proven? | Assumptions, risks, unknowns |
| **Signals** | What are we learning? | Metrics, experiments, results, learnings, pivots |

### Why five?

**Market precedes Value** because understanding who you're building for is not the same as understanding what they need. A segment is defined by context and JTBD; the value proposition is the response to that context. Conflating them produces "customer segment: people who need insurance" which is not a product insight.

**Value precedes Bets** because every product bet should be traceable to a problem. A bet with no linked problem is output without outcome. The Value dimension forces the "what problem does this solve?" question before any scope decision is made.

**Bets are investment decisions, not a backlog.** Must/should/could in PRISM/MVP are not priority tiers on a feature list — they are degrees of investment certainty. A \`must\` bet is something non-negotiable for the value proposition — cutting it invalidates the core. A \`should\` bet adds significant value but is negotiable. A \`could\` bet is an option held open pending signal. This framing prevents scope creep disguised as reprioritization.

**Hypotheses stand alone** because assumptions are the highest-leverage artifact in product development. Most products fail not because they shipped badly, but because they shipped the wrong thing — a consequence of untested assumptions. By making hypotheses a first-class dimension, PRISM/MVP forces assumption articulation *before* bets are decided, and preserves invalidated assumptions as organizational learning.

**Signals are last** because they synthesize the other four. A metric is only meaningful if you know which segment you're measuring, which problem you're trying to solve, which bet you're validating, and which assumption you're testing. A "north star metric" without the context of Market, Value, and Hypotheses is a number without a story.

---

## 4. Dimensions — Artifact Types

### 4.1 Market

| Artifact type | Description |
|---------------|-------------|
| \`segment\` | A defined group of people or organizations with a shared context and JTBD |
| \`persona\` | An archetype within a segment — optional enrichment with behavioral detail |
| \`channel\` | How we reach and serve this segment: direct, partner, marketplace, product-led |
| \`engagement_model\` | How customers interact with the product: self-serve, high-touch, community, hybrid |

**Key fields on market artifacts:**

| Field | Type | Description |
|-------|------|-------------|
| \`jtbd\` | string | Jobs-to-Be-Done statement: "When [situation], I want [motivation], so I can [outcome]" |
| \`segment_type\` | enum | \`primary\` \\| \`secondary\` \\| \`negative\` — Primary: who we're optimizing for. Secondary: benefiting but not the focus. Negative: explicitly NOT building for this group |
| \`size\` | enum | \`large\` \\| \`medium\` \\| \`niche\` — qualitative market size; do not fabricate numbers |
| \`validation_state\` | enum | \`assumed\` \\| \`observed\` \\| \`validated\` — how much evidence we have for this segment |
| \`evidence\` | string | What evidence exists for this segment's existence and need |
| \`prism_ea_stakeholder\` | string | Reference to PRISM EA stakeholder ID |

**Segment types:**

- \`primary\` — The segment the product is optimized for. When in doubt, optimize for this group.
- \`secondary\` — Benefits from the product but is not the primary focus. Features for secondary segments should not compromise primary segment experience.
- \`negative\` — Explicitly out of scope. Identifying negative segments prevents feature drift toward the wrong audience. Documenting them prevents the "why didn't we build X?" conversation.

### 4.2 Value

| Artifact type | Description |
|---------------|-------------|
| \`problem\` | A specific pain point, friction, or unmet need experienced by a segment |
| \`value_proposition\` | What we deliver in response to a problem: gain creator, pain reliever, or new possibility |
| \`differentiator\` | What makes our solution distinctive vs. alternatives a customer would otherwise use |
| \`outcome\` | The measurable result we expect the customer to achieve when the value proposition is realized |

**Key fields on value artifacts:**

| Field | Type | Description |
|-------|------|-------------|
| \`segment_id\` | string | Problems link to the segment that experiences them |
| \`value_type\` | enum | \`gain\` \\| \`pain_relief\` \\| \`new_possibility\` — which type of value does this create |
| \`evidence\` | string | What evidence exists that this problem is real and worth solving |
| \`validation_state\` | enum | \`assumed\` \\| \`observed\` \\| \`validated\` |
| \`alternative\` | string | What does the customer do today instead of using our solution |
| \`linked_problem\` | string | For value propositions: which problem does this address |

**Validation states on problems and value propositions:**

- \`assumed\` — We believe this problem exists but have no direct evidence.
- \`observed\` — We have indirect evidence (analytics, support tickets, secondary research).
- \`validated\` — We have direct primary evidence (user research, interviews, experiments).

Problems that are still \`assumed\` should be the first thing validated — before building anything.

### 4.3 Bets

| Artifact type | Description |
|---------------|-------------|
| \`bet\` | A feature, capability, or design decision we're investing in — with rationale and linked hypothesis |
| \`exclusion\` | An explicit decision NOT to include something, preserved with rationale |
| \`alternative\` | An option considered and rejected, with the reason for rejection |

**Key fields on bet artifacts:**

| Field | Type | Description |
|-------|------|-------------|
| \`tier\` | enum | \`must\` \\| \`should\` \\| \`could\` — investment certainty, not priority |
| \`rationale\` | string | Why are we making this bet? What do we believe it will achieve? |
| \`linked_hypothesis\` | string | ID of the hypothesis this bet is designed to test |
| \`linked_value\` | string | ID of the problem or value proposition this bet addresses |
| \`opportunity_cost\` | string | What are we NOT doing by making this bet? |
| \`status\` | enum | \`active\` \\| \`validated\` \\| \`invalidated\` \\| \`parked\` |
| \`ai_specific\` | boolean | True if this is an AI feature bet — enables AI assumption tracking |
| \`prism_a_component\` | string | Reference to PRISM/A component ID (what we're actually building) |
| \`depends_on\` | string[] | IDs of hypotheses this bet depends on |

**The must/should/could model in PRISM/MVP:**

Unlike traditional prioritization, PRISM/MVP's tier is fixed at bet creation time and changes only when a learning or strategic decision explicitly revises it. A \`must\` bet that gets deprioritized must become an \`exclusion\` with rationale — not silently moved down a list. A \`could\` bet that receives validating signal is explicitly promoted to \`should\` or \`must\`. This creates a decision audit trail.

**Bet status lifecycle:**

\`\`\`
active → validated   (bet delivered, hypothesis confirmed)
       → invalidated (hypothesis disproven; bet killed or revised)
       → parked      (deferred pending signal; not killed)
\`\`\`

### 4.4 Hypotheses

| Artifact type | Description |
|---------------|-------------|
| \`assumption\` | Something believed to be true that, if wrong, would materially change the product direction |
| \`risk\` | The consequence if a specific assumption is invalidated |
| \`unknown\` | A known unknown: something we know we don't know yet, but need to before deciding |

**Key fields on hypothesis artifacts:**

| Field | Type | Description |
|-------|------|-------------|
| \`assumption_type\` | enum | \`desirability\` \\| \`viability\` \\| \`feasibility\` \\| \`usability\` \\| \`ai-behavior\` |
| \`risk_level\` | enum | \`critical\` \\| \`high\` \\| \`medium\` \\| \`low\` — how bad is it if this is wrong? |
| \`validation_state\` | enum | \`unvalidated\` \\| \`in-progress\` \\| \`validated\` \\| \`invalidated\` |
| \`validation_criteria\` | string | How will we know if this assumption is true? What evidence is sufficient? |
| \`linked_bet\` | string | ID of the bet this hypothesis supports |
| \`discovery_date\` | date | When this assumption was first articulated |
| \`resolution_date\` | date | When validation concluded (validated or invalidated) |
| \`linked_learning\` | string | ID of the learning that resolved this assumption |

**Assumption types:**

| Type | What it tests |
|------|--------------|
| \`desirability\` | Do customers actually want this? |
| \`viability\` | Can we build a sustainable business on this? |
| \`feasibility\` | Can we build this with our current capability? |
| \`usability\` | Will customers be able to use this effectively? |
| \`ai-behavior\` | Will the AI component perform as needed? (accuracy, trust, bias, hallucination) |

**Assumption prioritization:** Test the riskiest (\`critical\`) and least validated (\`unvalidated\`) assumptions first. An assumption that is \`low\` risk if wrong does not need to be tested before shipping. An assumption that is \`critical\` and \`unvalidated\` is the most dangerous artifact in the landscape — it represents a product bet with no foundation.

### 4.5 Signals

| Artifact type | Description |
|---------------|-------------|
| \`metric\` | A measurement used to track product health, validate hypotheses, or guide decisions |
| \`experiment\` | A structured test designed to validate or invalidate a specific assumption |
| \`result\` | The outcome of an experiment: what was observed, measured, and recorded |
| \`learning\` | The interpretation of a result: what this means for the product direction |
| \`pivot\` | A significant change in direction based on learnings |

**Key fields on signal artifacts:**

| Field | Type | Description |
|-------|------|-------------|
| \`metric_type\` | enum | \`north_star\` \\| \`guardrail\` \\| \`diagnostic\` |
| \`linked_hypothesis\` | string | The assumption this experiment or metric is testing |
| \`linked_bet\` | string | The bet this signal is validating |
| \`method\` | enum | \`a_b_test\` \\| \`usability_study\` \\| \`survey\` \\| \`interview\` \\| \`prototype\` \\| \`dogfood\` \\| \`beta\` \\| \`shadow\` |
| \`result_state\` | enum | \`pending\` \\| \`supports\` \\| \`refutes\` \\| \`inconclusive\` |
| \`confidence\` | enum | \`high\` \\| \`medium\` \\| \`low\` |
| \`n\` | integer | Sample size (if applicable) |
| \`pivot_type\` | enum | For pivots: \`zoom-in\` \\| \`zoom-out\` \\| \`customer-segment\` \\| \`value\` \\| \`channel\` \\| \`platform\` \\| \`business-model\` \\| \`persist\` |

**Metric types:**

- \`north_star\` — What moves the business. One primary metric that captures product health. Example: time-to-first-decision.
- \`guardrail\` — What we cannot let worsen. Protects against optimizing one metric at the cost of another. Example: AI accuracy must not fall below 85%.
- \`diagnostic\` — Understanding why. Explains changes in the north star. Example: adjudicator triage time saved per day.

**The Learning Loop:**

\`\`\`
Market + Value (understanding)
       ↓
   Hypotheses (articulating beliefs)
       ↓
     Bets (investment decisions)
       ↓
   Signals (validation)
       ↓
   Learnings (interpretation)
       ↓
  Pivot / Persist (direction)
       ↓
 [update Market, Value, Hypotheses, Bets]
\`\`\`

Each loop iteration is a version of the landscape. The git history IS the learning history.

**Pivot types (adapted from Lean Startup):**

| Type | Meaning |
|------|---------|
| \`zoom-in\` | What was a feature becomes the whole product |
| \`zoom-out\` | What was the whole product becomes a feature of something bigger |
| \`customer-segment\` | We had the right product for the wrong customer |
| \`value\` | The problem we're solving isn't the one customers care about |
| \`channel\` | The product is right, the distribution is wrong |
| \`platform\` | A feature becomes a platform (or vice versa) |
| \`business-model\` | Same value, different revenue structure |
| \`persist\` | Learnings confirm current direction; continue as planned |

---

## 5. File Structure

\`\`\`
<org-name>/
  .prism-mvp/
    config.yaml             # landscape metadata
  market/
    landscape.yaml
  value/
    landscape.yaml
  bets/
    landscape.yaml
  hypotheses/
    landscape.yaml
  signals/
    landscape.yaml
\`\`\`

### \`.prism-mvp/config.yaml\`

\`\`\`yaml
prism_mvp_version: "1.0"
organization: "ACME, INC"
product: "AI Claims Triage"
description: "MVP validation landscape for AI-assisted claims triage and routing"
domain: insurance
scope: product          # enterprise | product | feature
temporal_state: transition
as_of: "2025-01-01"
active_dimensions:
  - market
  - value
  - bets
  - hypotheses
  - signals
target_segments:
  - seg-claims-adjudicators
  - seg-policyholders-claimants
learning_cadence: "2-week sprint"
\`\`\`

### Dimension landscape file structure

\`\`\`yaml
# hypotheses/landscape.yaml
dimension: hypotheses
as_of: "2025-01-01"
temporal_state: transition

assumptions:
  - id: hyp-adjuster-trust
    name: "Adjuster AI Trust Threshold"
    type: assumption
    assumption_type: usability
    risk_level: critical
    validation_state: in-progress
    description: >
      Claims adjusters will trust AI triage scores enough to use them as a primary
      routing signal — provided accuracy exceeds 85% on historical claims.
    validation_criteria: >
      > 70% of adjusters in pilot cohort route claims using AI score without manual
      override within 30 days of exposure. Manual override rate < 40%.
    linked_bet: bet-ai-intake-scoring
    discovery_date: "2024-11-15"

risks:
  - id: risk-trust-failure
    name: "Adjudicators Reject AI → Feature Abandoned"
    type: risk
    risk_level: critical
    linked_assumption: hyp-adjuster-trust
    mitigation: >
      SHAP explanations included in MVP. Weekly sync with pilot lead.
      Override tracking to identify patterns in rejected scores.

unknowns:
  - id: unk-workload-context
    name: "Does AI Trust Vary by Workload Level?"
    type: unknown
    planned_investigation: "Segment pilot results by daily claim volume."
\`\`\`

---

## 6. The Learning Loop

The Learning Loop is the core operating principle of PRISM/MVP. It connects the five dimensions into a closed validation cycle.

Every experiment references a hypothesis. Every result has a confidence level. Every learning interprets a result. Every pivot or persist decision references a learning. The chain is traversable in both directions:

- From a hypothesis: find all experiments designed to test it
- From a pivot: trace back to the learning and experiment that caused it
- From a bet: find all hypotheses it rests on (its foundation) and all experiments testing those hypotheses (its validation status)

**Learning velocity:** A team running 3 experiments per sprint and invalidating 2 assumptions is moving faster than a team shipping 10 features. PRISM/MVP makes learning velocity visible: the ratio of \`validated | invalidated\` hypotheses to \`unvalidated\` hypotheses, tracked over time.

**Preserving invalidated hypotheses:** An invalidated assumption is not a failure — it is an asset. It tells the next product team why a direction was tried and abandoned. PRISM/MVP never deletes assumptions; invalidated ones are marked \`invalidated\` with a resolution date and linked learning.

---

## 7. Cross-Referencing

PRISM/MVP artifacts link to other PRISM framework artifacts:

\`\`\`yaml
# market/landscape.yaml
- id: seg-claims-adjudicators
  links:
    prism_ea_stakeholder: stk-claims-adjusters    # PRISM EA People/stakeholders

# bets/landscape.yaml
- id: bet-ai-intake-scoring
  links:
    prism_a_component: comp-claims-ai-triage      # PRISM/A Components
    prism_ea_system: sys-claims-ai                # PRISM EA Reality/systems

# signals/landscape.yaml
- id: metric-time-to-decision
  links:
    prism_a_slo: slo-claims-ai-accuracy           # PRISM/A Quality/SLOs
\`\`\`

Cross-references are soft — no schema enforcement across frameworks. PRISM/MVP does not import other frameworks' schemas.

---

## 8. Dependency Modeling and Blast Radius

PRISM/MVP uses \`depends_on\` to model the validation chain:

\`\`\`yaml
# bets depend on hypotheses
- id: bet-ai-intake-scoring
  depends_on: [hyp-adjuster-trust, hyp-ai-accuracy-threshold]

# experiments depend on bets
- id: exp-adjudicator-pilot-cohort
  depends_on: [bet-ai-intake-scoring]

# learnings depend on results
- id: learn-model-accuracy-89pct
  depends_on: [result-model-backtest]
\`\`\`

**Invalidation blast radius:** If a critical assumption (\`hyp-adjuster-trust\`) is invalidated, every bet that depends on it is at risk. Selecting the assumption in the landscape shows all dependent bets — the full blast radius of the invalidation.

Forward traversal: select a hypothesis → see which bets rest on it → see which experiments are testing it.
Backward traversal: select a bet → see which results support or refute its foundation.

---

## 9. Validation State Lifecycle

Hypotheses follow a validation lifecycle:

\`\`\`
unvalidated → in-progress → validated
                          └→ invalidated
\`\`\`

Bets follow a parallel lifecycle driven by their hypothesis outcomes:

\`\`\`
active → validated    (bet delivered, core hypothesis confirmed)
       → invalidated  (core hypothesis disproven — bet killed or fundamentally revised)
       → parked       (deferred pending signal — not killed, not advancing)
\`\`\`

\`\`\`yaml
- id: hyp-adjuster-trust
  validation_state: validated
  resolution_date: "2025-03-15"
  linked_learning: learn-trust-with-explainability

- id: hyp-policyholder-self-serve
  validation_state: invalidated
  resolution_date: "2025-02-01"
  linked_learning: learn-self-serve-not-preferred-by-over-60s
\`\`\`

Invalidated hypotheses are preserved. The linked learning explains what was found. The linked bet record explains what was decided differently.

---

## 10. AI-Native Assumption Types

PRISM/MVP recognizes that AI features carry a unique class of assumption not covered by traditional product frameworks:

| AI assumption subtype | What it tests |
|----------------------|--------------|
| **Accuracy threshold** | Will the model be accurate enough for users to trust it? |
| **Trust formation** | Under what conditions will users override AI vs. follow it? |
| **Bias and fairness** | Does the model produce equitable outcomes across user groups? |
| **Explainability** | Can users understand why the AI made a specific decision? |
| **Failure modes** | How does the system behave when the model is wrong? Is the failure safe? |
| **Data availability** | Is training data available, labeled, and of sufficient quality? |
| **Hallucination tolerance** | How much variance or confabulation will users accept? |

These assumptions use \`assumption_type: ai-behavior\` and should carry \`risk_level: critical\` by default. AI feature failures are often invisible until user trust is lost — and lost trust is rarely recoverable.

\`\`\`yaml
- id: hyp-ai-accuracy-threshold
  assumption_type: ai-behavior
  risk_level: critical
  description: >
    Adjusters will trust AI triage recommendations if model accuracy on
    historical claims exceeds 85%. Below 85%, manual override rate exceeds
    60% and the feature does not deliver the projected time savings.
  validation_criteria: >
    Backtest model on last 6 months of labeled claims.
    Accuracy ≥ 85% = hypothesis supported.
    Run adjuster trust study with real routing data.
\`\`\`

---

## 11. What PRISM/MVP Does Not Cover

- **Sprint planning.** PRISM/MVP describes what you're validating, not how you're building it sprint by sprint. Jira, Linear, and GitHub Issues manage that.
- **Roadmaps and release planning.** PRISM/MVP is a learning landscape, not a delivery plan. Roadmaps are outputs; PRISM/MVP tracks the inputs to roadmap decisions.
- **Financial modeling.** Market size estimates in PRISM/MVP are qualitative. Revenue projections, unit economics, and business case modeling live in your financial tools.
- **Raw research artifacts.** Interview transcripts, session recordings, and survey responses are inputs to PRISM/MVP learnings — not the learnings themselves. Store them in Dovetail, Notion, or your research repo; reference them from \`result\` artifacts.
- **Legal and compliance.** Regulatory requirements affecting the product are captured in PRISM EA's Intent layer (\`constraints[]\`). PRISM/MVP focuses on product-market validation, not compliance validation.
- **Live usage analytics.** PRISM/MVP records that a metric is being measured and what was found; the live data lives in your analytics platform (Mixpanel, Amplitude, Segment, etc.).

---

## 12. Glossary

| Term | Definition |
|------|-----------|
| **Bet** | An investment decision in a feature, capability, or design approach — with rationale, linked hypothesis, and declared opportunity cost |
| **Hypothesis** | An assumption held about the market, customer, or product that, if wrong, would change product direction |
| **JTBD** | Jobs-to-Be-Done: the functional or emotional goal a customer is trying to accomplish in a given situation |
| **Learning velocity** | The rate at which the team is validating or invalidating hypotheses — the PRISM/MVP measure of product momentum |
| **Pivot** | A structured change in product direction based on signal from experiments, with a declared pivot type and rationale |
| **Persist** | A decision to continue current direction, supported by signal — the outcome when learning confirms the hypothesis |
| **North star metric** | The single primary metric that captures whether the product is delivering value to its primary segment |
| **Guardrail metric** | A metric that must not worsen; protects against optimizing one dimension at the cost of another |
| **Negative segment** | A customer segment explicitly identified as NOT the target — prevents feature drift toward the wrong audience |
| **Exclusion** | An explicit decision not to include a feature or capability, preserved in the landscape with rationale |
| **Blast radius** | The set of bets that become at risk when a critical assumption is invalidated |
| **Validation state** | The lifecycle state of a hypothesis: unvalidated, in-progress, validated, or invalidated |
| **Assumption type** | The category of an assumption: desirability, viability, feasibility, usability, or ai-behavior |
`,hE=`# PRISM/D — Data Architecture Landscape Framework

> **Version:** 1.0  
> **Status:** Active  
> **Licence:** CC BY-SA 4.0  
> **Family:** PRISM Frameworks

---

## § 1 Overview

Most organizations have data catalogs, governance policies, quality tools, and lineage diagrams — all in separate systems, all out of sync. PRISM/D is not another catalog. It's a **landscape view of your data architecture**: who owns what data, how it moves, where it lives, what governs it, and how those pieces connect.

PRISM/D treats data architecture the way PRISM treats enterprise architecture: as a living landscape committed to git, with explicit ownership, cross-cutting blast radius, and no orphaned artifacts.

### What PRISM/D replaces (and what it doesn't)

| Framework / Tool | What it does | Where it falls short | PRISM/D stance |
|---|---|---|---|
| DAMA-DMBOK | Comprehensive data governance process framework | Committee-centric, heavy, not git-native, no landscape view | Different concern — DAMA defines process, PRISM/D maps architecture |
| Data Catalogs (Collibra, Alation) | Metadata discovery and search | Tooling-centric, not an architecture document, expensive, requires data crawling | Complementary — catalog for discovery, PRISM/D for design and architecture decisions |
| Data Mesh | Domain ownership principles | Principles only, no standard for mapping or documenting the mesh | PRISM/D is the mapping standard for a data mesh architecture |
| Great Expectations / dbt | Data quality enforcement, transformation | Implementation-level, not architecture-level | Data contracts in PRISM/D reference these tools; they don't replace each other |
| PRISM (EA) | Enterprise architecture landscape | Treats data as a sub-artifact type — no data domain ownership, pipeline lineage, or governance model | PRISM/D adds depth the EA view lacks |
| PRISM/I | Infrastructure landscape | Storage platforms appear as infra; data domains, flows, contracts, governance don't | Complementary — PRISM/I shows where data lives physically; PRISM/D shows what data exists and how it's governed |

### The core assertion

Data architecture has exactly five concerns. Every data architecture decision maps to one of them.

1. **Who owns what data** — without domain ownership, data governance is theater
2. **How data moves** — pipelines, streams, and syncs are architecture decisions, not plumbing
3. **Where data lives** — platform choice has cascade effects on cost, compliance, and performance
4. **What agreements govern exchange** — schemas and SLAs are contracts; contracts have states
5. **Who can access what, under what rules** — access, retention, PII, lineage: the governance layer

These five concerns become five dimensions.

---

## § 2 Foundational Principles

### Git-native

Every PRISM/D landscape lives in a directory committed to source control. Data architecture decisions are first-class code: reviewed, versioned, merged. A schema deprecation, a domain ownership transfer, a new pipeline — all committed, all traceable.

### Domain ownership as a first-class concept

Data Mesh taught the industry that domain ownership matters more than centralized data teams. PRISM/D operationalizes this: every dataset and data product has a declared owning team. Ownership determines SLA accountability, access policy authority, and incident response routing.

### Data products over raw datasets

PRISM/D distinguishes raw datasets from **data products** — intentionally designed, versioned, and served datasets with a declared consumer, schema contract, and SLA. A raw claims dump is a dataset. A curated feature vector served to an AI model is a data product.

### Lineage as architecture

End-to-end lineage — from source domain to pipeline to platform to consumer — is an architecture concern, not a metadata search result. PRISM/D captures lineage as explicit \`depends_on\` links, making blast radius traversal possible: change a source schema → see every downstream consumer at risk.

### PII/SPII/PHI are first-class fields

Sensitive data classification isn't a compliance checkbox bolted on later. \`data_sensitivity\`, \`data_classification\`, and \`compliance_frameworks\` are required fields on any artifact that touches regulated data. The landscape renders them visually.

### Schema version: "1.0"

---

## § 3 Five Dimensions — The Why

Each dimension answers exactly one question. Together they answer everything about a data architecture.

| # | Dimension | The one question it answers |
|---|---|---|
| 1 | **Domains** | What data exists and who owns it? |
| 2 | **Flows** | How does data move from source to consumer? |
| 3 | **Platforms** | Where is data stored and processed? |
| 4 | **Contracts** | What agreements govern data exchange? |
| 5 | **Governance** | Who can access what, under what rules? |

**Why five, not more?**

A sixth dimension always reduces to one of these five. "Data quality" belongs in Contracts (quality rules are contract terms). "Data observability" belongs in Contracts or Governance (breach detection is contract enforcement). "MDM" belongs in Domains (master data is a domain concern). "Reporting" belongs in Flows and Platforms. Every proposed sixth dimension was an artifact type within an existing dimension, not a new dimension.

**Why not fewer?**

Four dimensions loses the distinction between Contracts and Governance — they look similar but aren't. Contracts define the rules of exchange between producer and consumer. Governance defines who is allowed to exchange at all. Merging them hides accountability.

---

## § 4 Dimensions and Artifact Types

### 4.1 Domains

**The question:** What data exists and who owns it?

Domains define the bounded contexts of data ownership. A domain owns its source data, publishes data products for consumers, and is accountable for the SLAs of its products. This is the Data Mesh ownership model operationalized.

| Artifact Type | Purpose |
|---|---|
| \`data_domain\` | A bounded data ownership context — claims, policy, customer, etc. |
| \`data_product\` | A versioned, intentionally designed dataset served to external consumers |
| \`dataset\` | A raw or intermediate dataset owned by a domain (not served externally) |

Key fields:

| Field | Values | Required |
|---|---|---|
| \`owner\` | Team or domain name | Yes |
| \`domain_type\` | \`source \\| derived \\| aggregate \\| event\` | Yes |
| \`data_classification\` | \`public \\| internal \\| confidential \\| restricted\` | Yes |
| \`data_sensitivity\` | \`[pii, spii, phi, pci]\` (list) | When applicable |
| \`compliance_frameworks\` | \`[GDPR, CCPA, HIPAA, SOX, PCI-DSS, APRA]\` | When applicable |
| \`depends_on\` | List of upstream domain/product IDs | When applicable |

**domain_type explained:**
- \`source\` — originates data from a system of record (CRM, claims system, IoT)
- \`derived\` — computed from one or more source domains (feature store, ML features)
- \`aggregate\` — combines multiple domains into a unified view (customer 360, MDM)
- \`event\` — produces event streams rather than stored datasets

### 4.2 Flows

**The question:** How does data move from source to consumer?

Flows are the pipelines, event streams, and syncs that move data between domains, platforms, and consumers. They are architecture decisions: frequency, latency SLA, transformation pattern, and failure mode all matter.

| Artifact Type | Purpose |
|---|---|
| \`pipeline\` | Batch or streaming transformation pipeline (Spark, dbt, Flink) |
| \`event_stream\` | Real-time event bus or message queue (Kafka, Kinesis, Pub/Sub) |
| \`sync\` | Direct system-to-system sync or CDC process |
| \`data_api\` | Synchronous data serving API (OLTP-style, REST/GraphQL) |

Key fields:

| Field | Values | Required |
|---|---|---|
| \`source\` | Source domain or system ID | Yes |
| \`destination\` | Target platform or consumer ID | Yes |
| \`frequency\` | \`real-time \\| near-real-time \\| hourly \\| daily \\| weekly \\| on-demand\` | Yes |
| \`latency_sla\` | Human-readable SLA (e.g. \`<200ms\`, \`T+1h\`, \`T+24h\`) | Yes |
| \`transformation_type\` | \`raw \\| filtered \\| aggregated \\| enriched \\| normalized \\| feature-engineered\` | Yes |
| \`failure_mode\` | What happens on pipeline failure | Recommended |

### 4.3 Platforms

**The question:** Where is data stored and processed?

Platforms are the storage and compute systems that data moves through. Platform choice determines compliance scope, cost model, query capability, and operational complexity.

| Artifact Type | Purpose |
|---|---|
| \`data_lake\` | Object-based raw data storage (S3 + Delta Lake, GCS + Iceberg) |
| \`data_warehouse\` | Columnar analytical store (Snowflake, BigQuery, Redshift) |
| \`feature_store\` | ML feature serving and storage (Feast, Tecton, Vertex Feature Store) |
| \`stream_platform\` | Event streaming infrastructure (Kafka, Kinesis, Pub/Sub) |
| \`data_cache\` | Low-latency serving layer (Redis, Memcached) |
| \`lakehouse\` | Unified lake + warehouse (Databricks Delta, Apache Iceberg on S3) |

Key fields:

| Field | Values | Required |
|---|---|---|
| \`technology\` | Technology name | Yes |
| \`platform_type\` | \`lake \\| warehouse \\| lakehouse \\| feature_store \\| stream \\| cache\` | Yes |
| \`deployment\` | \`cloud \\| on-prem \\| hybrid \\| managed-saas\` | Yes |
| \`managed_by\` | Team or vendor | Yes |
| \`data_classification_max\` | Highest classification allowed on this platform | Yes |
| \`compliance_scope\` | Which compliance regimes this platform is certified for | When applicable |

### 4.4 Contracts

**The question:** What agreements govern data exchange?

A contract defines the mutual commitment between a data producer and a data consumer. Schema version, quality thresholds, SLAs, and change management protocol are all contract terms. Contracts have states: a \`breached\` contract is an incident, not a footnote.

| Artifact Type | Purpose |
|---|---|
| \`data_contract\` | Formal schema + SLA agreement between producer and consumer |
| \`schema_def\` | Versioned schema definition (standalone, referenced by contracts) |
| \`quality_rule\` | Data quality assertion (completeness, uniqueness, freshness, accuracy) |
| \`sla\` | Service level agreement (freshness, availability, latency) |

Key fields:

| Field | Values | Required |
|---|---|---|
| \`producer\` | Domain or system that produces the data | Yes |
| \`consumer\` | Team or system consuming the data | Yes |
| \`schema_version\` | Semantic version string | Yes |
| \`contract_state\` | \`draft \\| proposed \\| agreed \\| enforced \\| breached \\| retired\` | Yes |
| \`enforcement\` | \`advisory \\| enforced \\| breaking\` | Yes |
| \`quality_threshold\` | Human-readable quality requirement | Recommended |
| \`change_protocol\` | What happens when producer changes the schema | Recommended |

**Contract state lifecycle:**
\`\`\`
draft → proposed → agreed → enforced
                         ↘ breached → (remediate) → enforced
                                    ↘ retired
\`\`\`

### 4.5 Governance

**The question:** Who can access what, under what rules?

Governance covers the four enforcement mechanisms that protect data: access control, PII/SPII/PHI classification, retention rules, and regulatory compliance obligations. These aren't policy documents — they're architecture artifacts that link to specific domains, platforms, and flows.

| Artifact Type | Purpose |
|---|---|
| \`pii_register\` | Inventory of PII fields by domain, with legal basis |
| \`spii_register\` | Inventory of SPII/PHI/PCI fields — elevated risk |
| \`access_policy\` | Who can access which data, under what conditions |
| \`retention_rule\` | How long data is retained, under which regulation |
| \`lineage_map\` | End-to-end data lineage from source to consumer |
| \`compliance_control\` | Specific compliance obligation and its implementation |

Key fields:

| Field | Values | Required |
|---|---|---|
| \`data_classification\` | \`public \\| internal \\| confidential \\| restricted\` | Yes |
| \`legal_basis\` | \`consent \\| legitimate-interest \\| legal-obligation \\| contract\` | For PII |
| \`regulation\` | \`GDPR \\| CCPA \\| HIPAA \\| SOX \\| PCI-DSS \\| APRA \\| state-law\` | When applicable |
| \`retention_period\` | Duration and trigger (e.g. \`7 years from claim close\`) | For retention rules |
| \`audit_required\` | boolean — whether access must be logged for audit | When applicable |
| \`depends_on\` | Linked domain or platform IDs | Yes for lineage maps |

---

## § 5 File Structure

\`\`\`
data-architecture/
└── examples/
    └── acme-insurance/
        ├── .prism-d/
        │   └── config.yaml          # meta: org, product, temporal_state, as_of
        ├── domains/
        │   └── landscape.yaml       # data_domain, data_product artifacts
        ├── flows/
        │   └── landscape.yaml       # pipeline, event_stream, sync artifacts
        ├── platforms/
        │   └── landscape.yaml       # data_lake, warehouse, feature_store artifacts
        ├── contracts/
        │   └── landscape.yaml       # data_contract, sla, quality_rule artifacts
        └── governance/
            └── landscape.yaml       # pii_register, access_policy, retention_rule, lineage_map
\`\`\`

### config.yaml example

\`\`\`yaml
prism_d_version: "1.0"
organization: "ACME, INC"
product: "Enterprise Data Architecture"
domain: multi-domain
scope: enterprise
temporal_state: baseline
as_of: "2025-01-01"
active_dimensions: [domains, flows, platforms, contracts, governance]
data_mesh_topology: federated-with-central-platform
primary_cloud: aws
\`\`\`

---

## § 6 The Data Governance Loop

Data governance isn't a checkpoint — it's a continuous loop connecting domains, flows, platforms, and contracts.

\`\`\`
Domain declares ownership
    ↓
Pipeline moves data (Flow)
    ↓
Data lands on Platform
    ↓
Contract governs the exchange
    ↓
Governance enforces access, retention, and compliance
    ↓
Lineage map proves the chain → audit / incident response
    ↑
Schema change → contract version bump → consumers notified
\`\`\`

**Blast radius in PRISM/D:**

Select a source domain → see every downstream flow, platform, and consumer that depends on it. Select a data contract → see which AI model, BI report, or analytics pipeline breaks if the schema changes. The \`depends_on\` field on flows, contracts, and governance artifacts creates the traversable graph.

---

## § 7 Data Product Model

PRISM/D distinguishes between **data domains** (ownership units) and **data products** (served outputs). A data product is:

- Intentionally designed for a specific consumer
- Versioned with a schema contract
- Served with a declared SLA
- Owned by a domain team that is accountable for its quality

This is the Data Mesh data-as-a-product principle made concrete. The data product artifact links:
- Its owning domain
- Its upstream dependencies (source datasets/pipelines)
- Its consumers (downstream models, reports, APIs)
- Its active contract

---

## § 8 Cross-Referencing

PRISM/D connects to the broader PRISM framework family:

| Cross-reference | How |
|---|---|
| **PRISM (EA)** | Data flows appear as \`data_contract\` events in the Signal (S) layer; domains map to capabilities in the Reality (R) layer |
| **PRISM/I** | Platforms (lakes, warehouses, streams) are the storage artifacts in PRISM/I's State dimension; PRISM/D owns the data governance of those stores |
| **PRISM/A** | Application components that produce or consume data link to PRISM/D domains via declared data contracts |
| **PRISM/AI** | The AI Feature Store domain and feature vector data products link directly to model artifacts in PRISM/AI's Models dimension |
| **PRISM/MVP** | Market signals, experiment results, and learning artifacts in PRISM/MVP depend on analytics data products declared in PRISM/D |

Cross-referencing uses soft links — reference the ID of an artifact in the other framework. No circular imports, no tight coupling.

---

## § 9 PII / SPII / PHI Classification

All four sensitivity tiers are first-class in PRISM/D:

| Tier | Definition | Examples | Renderer chip |
|---|---|---|---|
| \`pii\` | Personally identifiable information | Name, email, address, date of birth, phone | 🔒 PII (blue) |
| \`spii\` | Sensitive PII — elevated risk on exposure | SSN, financial account numbers, biometrics, government ID | 🔐 SPII (red) |
| \`phi\` | Protected health information (HIPAA) | Medical records, diagnosis codes, treatment history | 🏥 PHI (green) |
| \`pci\` | Payment card industry data | Card numbers, CVV, cardholder data | 💳 PCI (amber) |

**data_classification** sets the baseline access tier:

| Classification | Meaning |
|---|---|
| \`public\` | Freely shareable, no access restrictions |
| \`internal\` | ACME employees only, no NDA required |
| \`confidential\` | Need-to-know basis, NDA or role-based access |
| \`restricted\` | Highest protection — PII/SPII/PHI + regulatory data |

---

## § 10 What PRISM/D Does Not Cover

| Excluded concern | Why | Where it belongs |
|---|---|---|
| Data quality implementation | PRISM/D declares quality thresholds in contracts; Great Expectations/dbt enforce them | Your data quality toolchain |
| Data catalog and search | PRISM/D is a design artifact, not a discovery tool | Collibra, Atlan, DataHub, or similar |
| BI report inventory | Reports are consumers of data products, not architecture | BI platform metadata |
| ML experiment tracking | Model training runs and experiment logs | MLflow, W&B, or PRISM/AI Lifecycle dimension |
| Live data monitoring | PRISM/D references monitoring SLAs; it doesn't run them | Observability stack or PRISM/AI Observability dimension |
| Database schema migration scripts | PRISM/D documents schema contracts; migrations are implementation | Flyway, Alembic, or dbt |

---

## § 11 Glossary

| Term | Definition |
|---|---|
| **Data domain** | A bounded context of data ownership, accountable for declared data products and SLAs |
| **Data product** | A versioned, intentionally designed dataset served to external consumers with a declared schema and SLA |
| **Data contract** | A formal agreement between a data producer and consumer specifying schema, quality, SLA, and change management |
| **Feature store** | A storage and serving system for ML model input features, providing point-in-time correctness and low-latency retrieval |
| **Lakehouse** | A storage architecture combining data lake scale (cheap object storage) with data warehouse query performance (table format like Delta Lake or Iceberg) |
| **Lineage map** | An end-to-end trace from data origin to consumption, enabling impact analysis and audit compliance |
| **PII** | Personally identifiable information — data that can identify a natural person |
| **SPII** | Sensitive PII — PII that carries elevated risk on exposure (SSN, biometrics, financial account numbers) |
| **PHI** | Protected health information — medical data protected under HIPAA |
| **Data mesh** | An organizational and architectural paradigm where domain teams own and serve their data as products |
| **Contract state** | The current enforcement status of a data contract: \`draft → proposed → agreed → enforced\` (or \`breached\` / \`retired\`) |
| **Blast radius** | The set of downstream artifacts that are impacted by a change to or failure of an upstream artifact |
`,mE=`# PRISM/AI — AI Architecture Landscape Framework

> **Version:** 1.0  
> **Status:** Active  
> **Licence:** CC BY-SA 4.0  
> **Family:** PRISM Frameworks

---

## § 1 Overview

AI is now in production across every industry. Organizations have models, agents, RAG pipelines, fine-tuned LLMs, and autonomous workflows — often with no consistent architectural view of what exists, how it's evaluated, whether it's safe, or what breaks when a model drifts.

PRISM/AI is a **landscape view of your AI architecture**: every model deployed, every AI-powered system built on those models, how they move through lifecycle stages, what trust controls govern them, and what's being measured in production. It covers the full stack from foundation model selection to drift detection.

PRISM/AI is not a training tracker, not a compliance framework, not a model registry. It's the architectural map that connects all of those — committed to git, designed for cross-team visibility, and linked to PRISM/D for data provenance and PRISM/A for application context.

### What PRISM/AI replaces (and what it doesn't)

| Framework / Tool | What it does | Where it falls short | PRISM/AI stance |
|---|---|---|---|
| MLflow / Weights & Biases | Experiment tracking, model registry, artifact management | Training-run-centric, no architectural landscape, no trust/safety layer, no system-level view | Complementary — PRISM/AI's Lifecycle dimension references these; they don't replace it |
| ISO/IEC 42001 | AI management system standard | Process/governance framework, not an architecture mapping tool | Different concern — compliance attestation vs. architecture visibility |
| NIST AI RMF | Risk framework for responsible AI | Risk taxonomy and process, no landscape view, not git-native | Risk categories inform PRISM/AI Trust dimension; frameworks are different concerns |
| EU AI Act | Regulatory compliance for AI systems | Compliance obligations, not architecture documentation | PRISM/AI maps what EU AI Act requires you to document; they're complementary |
| PRISM/A | Application architecture landscape | Treats AI components as \`system_type: ai-agent\` — no model lifecycle, no trust controls, no eval suites | PRISM/AI adds what PRISM/A deliberately leaves out |
| PRISM (EA) | Enterprise architecture | Has AI systems as capability types; no depth on models, evals, guardrails, observability | PRISM/AI is the deep dive the EA view references |

### The core assertion

AI architecture has exactly five concerns. Every AI architecture decision maps to one of them.

1. **What models exist** — model inventory, capability, provenance, deployment target
2. **What systems are built on those models** — the applications, agents, RAG pipelines, copilots
3. **How models move through lifecycle** — training, evaluation, deployment, monitoring, deprecation
4. **What trust controls govern AI behavior** — guardrails, bias assessment, alignment, red-team
5. **What's being measured in production** — accuracy, latency, drift, override rates, incidents

These five concerns become five dimensions.

---

## § 2 Foundational Principles

### Git-native

Every PRISM/AI landscape lives in a directory committed to source control. A new model version, a guardrail update, a red-team finding — all committed, all traceable. AI architecture decisions are first-class code.

### Models are architecture, not experiments

The ML community treats models as experiment outputs. PRISM/AI treats models as **architectural assets**: versioned, with declared dependencies, serving specific systems, governed by trust controls, and observable in production. A model version is as significant an architectural decision as a database schema.

### Trust is non-negotiable and explicit

Every AI system has a trust posture — whether you've documented it or not. PRISM/AI makes trust explicit: accuracy thresholds, bias assessments, explainability requirements, human override availability, and red-team findings are first-class artifacts with enforcement states.

### AI behavior assumption type

PRISM/AI recognizes a category of architectural uncertainty that doesn't exist in traditional software: **AI behavior assumptions** — correctness thresholds, hallucination rates, emergent behavior under distribution shift. These aren't bugs to fix; they're statistical properties to monitor. PRISM/AI's Trust and Observability dimensions provide the vocabulary.

### Human-in-the-loop as a declared architectural property

Whether a human must review AI output before it takes effect is an architectural decision, not an implementation detail. \`human_in_loop\` is a first-class field on every AI system artifact. Its presence or absence determines deployment risk class and regulatory scope.

### Schema version: "1.0"

---

## § 3 Five Dimensions — The Why

Each dimension answers exactly one question. Together they answer everything about an AI architecture.

| # | Dimension | The one question it answers |
|---|---|---|
| 1 | **Models** | What AI models are deployed, and what are they capable of? |
| 2 | **Systems** | What AI-powered applications are built on those models? |
| 3 | **Lifecycle** | How do models train, evaluate, deploy, monitor, and retire? |
| 4 | **Trust** | What controls ensure AI behavior is safe, fair, and aligned? |
| 5 | **Observability** | What is being measured in production, and what has gone wrong? |

**Why five, not more?**

"Data" is not a sixth dimension — PRISM/D covers training data, feature stores, and data governance. PRISM/AI's Models dimension references the data products from PRISM/D. "Security" is not a sixth dimension — AI-specific security concerns (prompt injection, data extraction, adversarial inputs) belong in the Trust dimension and link to PRISM/CY.

"Cost" is not a sixth dimension — token cost, inference cost, and compute cost are observability signals in the Observability dimension. Adding a Cost dimension would split what is naturally unified monitoring.

**Why not fewer?**

Four dimensions loses the distinction between Trust and Observability — they address fundamentally different concerns. Trust defines the controls that should hold ("SHAP must be shown to every adjudicator"). Observability measures whether they do ("override rate is 44%, target <40%"). Merging them collapses design intent with empirical measurement.

---

## § 4 Dimensions and Artifact Types

### 4.1 Models

**The question:** What AI models are deployed, and what are they capable of?

The Models dimension is the inventory of every AI model — foundation models, fine-tuned variants, custom-trained models, embedding models, and specialized classifiers — that the organization deploys or depends on.

| Artifact Type | Purpose |
|---|---|
| \`foundation_model\` | A pre-trained general-purpose model from a provider (GPT-4o, Claude, Gemini) |
| \`fine_tuned_model\` | A provider model fine-tuned on organization-specific data |
| \`custom_model\` | A model trained from scratch or from open-source base on org data |
| \`embedding_model\` | A model that produces vector representations (text-embedding-3-small, BGE) |
| \`classifier\` | A specialized classification model (sentiment, routing, severity) |
| \`explainability_layer\` | A post-hoc explainability wrapper (SHAP, LIME, integrated gradients) |

Key fields:

| Field | Values | Required |
|---|---|---|
| \`model_provider\` | \`anthropic \\| openai \\| google \\| meta \\| open-source \\| proprietary\` | Yes |
| \`capability_type\` | \`generation \\| classification \\| embedding \\| reasoning \\| vision \\| multimodal \\| structured-output\` | Yes |
| \`lifecycle_stage\` | \`research \\| training \\| evaluation \\| staging \\| production \\| deprecated \\| retired\` | Yes |
| \`version\` | Model version string | Yes |
| \`training_data_source\` | Where training data comes from — links to PRISM/D domain IDs | Recommended |
| \`license\` | License type (\`proprietary-api \\| open-source-permissive \\| open-source-restricted\`) | Yes |
| \`ai_model\` | \`true\` — signals AI card rendering | Yes |

**lifecycle_stage for models:**
- \`research\` — being explored, not yet in any deployment pipeline
- \`training\` — actively being trained or fine-tuned
- \`evaluation\` — in eval suite, not yet deployed
- \`staging\` — deployed to non-production, acceptance testing
- \`production\` — live, serving real traffic
- \`deprecated\` — still running, actively being replaced
- \`retired\` — decommissioned, no longer running

### 4.2 Systems

**The question:** What AI-powered applications are built on those models?

Systems are the applications, services, and workflows that use models to deliver value to users. A single model can power multiple systems. A system can chain multiple models. The key distinction from PRISM/A: Systems in PRISM/AI are AI-centric — they exist to deliver AI capability, not just to use AI as a component.

| Artifact Type | Purpose |
|---|---|
| \`ai_system\` | A deployed AI-powered service or application |
| \`rag_pipeline\` | A retrieval-augmented generation pipeline |
| \`copilot\` | A human-facing AI assistant embedded in a product |
| \`classifier_service\` | An API that serves classification decisions at scale |
| \`autonomous_workflow\` | A multi-step workflow with AI decision points and minimal human review |
| \`ai_agent\` | An agent with tool access and autonomous action-taking capability |

Key fields:

| Field | Values | Required |
|---|---|---|
| \`primary_model\` | ID of the primary model artifact | Yes |
| \`architecture_pattern\` | \`rag \\| zero-shot \\| few-shot \\| fine-tuned \\| agentic \\| ensemble \\| hybrid\` | Yes |
| \`human_in_loop\` | boolean — must a human approve output before it takes effect? | Yes |
| \`failure_mode\` | What happens when the AI system fails or produces low-confidence output | Yes |
| \`lifecycle_stage\` | Same as Models above | Yes |
| \`depends_on\` | Model artifact IDs this system uses | Yes |

### 4.3 Lifecycle

**The question:** How do models train, evaluate, deploy, monitor, and retire?

Lifecycle covers the operational processes that move models from research to production and eventually to retirement. These are architecture decisions: retraining cadence, evaluation methodology, deployment strategy, and monitoring frequency directly determine model quality and risk.

| Artifact Type | Purpose |
|---|---|
| \`training_run\` | A recurring model training or fine-tuning process |
| \`eval_suite\` | A defined evaluation methodology (benchmarks, holdout tests, backtests) |
| \`deployment\` | The process for deploying model versions to an environment |
| \`monitoring_job\` | A recurring process that checks model health in production |
| \`experiment\` | A time-bounded model experiment (A/B, shadow, canary) |

Key fields:

| Field | Values | Required |
|---|---|---|
| \`lifecycle_stage\` | Which stage of AI lifecycle this artifact manages | Yes |
| \`cadence\` | Frequency (\`daily \\| weekly \\| monthly \\| per-release \\| event-driven\`) | Yes |
| \`responsible_team\` | Team accountable for running this process | Yes |
| \`trigger\` | \`scheduled \\| event-driven \\| manual \\| drift-triggered\` | Yes |
| \`depends_on\` | Model or eval suite IDs | Recommended |

### 4.4 Trust

**The question:** What controls ensure AI behavior is safe, fair, and aligned?

Trust is the most distinctively AI-native dimension. It covers the controls that constrain, evaluate, and document AI behavior — guardrails, bias assessments, red-team findings, explainability requirements, and alignment controls. Trust artifacts are not optional: every AI system in production must have at least one linked trust artifact.

| Artifact Type | Purpose |
|---|---|
| \`guardrail\` | A hard constraint on model behavior (accuracy threshold, content filter, output schema) |
| \`bias_assessment\` | A documented evaluation of model outputs for demographic or group-level disparities |
| \`red_team_finding\` | A documented vulnerability or adversarial finding from red-teaming |
| \`alignment_control\` | A control that keeps AI behavior within intended boundaries (human override, scope limits) |
| \`explainability_config\` | A declared explainability requirement and how it's implemented |

Key fields:

| Field | Values | Required |
|---|---|---|
| \`trust_type\` | \`accuracy \\| alignment \\| fairness \\| safety \\| explainability \\| privacy\` | Yes |
| \`enforcement\` | \`blocking \\| soft-block \\| logging \\| alerting \\| advisory\` | Yes |
| \`severity\` | \`critical \\| high \\| medium \\| low\` (for red-team findings) | For red_team_finding |
| \`remediation_status\` | \`open \\| mitigated \\| resolved \\| accepted\` | Yes |
| \`depends_on\` | Model or system IDs this control applies to | Yes |

**enforcement levels:**
- \`blocking\` — model or system cannot deploy/operate if this control fails
- \`soft-block\` — output is flagged and routed for human review
- \`logging\` — control failure is recorded but does not interrupt flow
- \`alerting\` — control failure triggers an alert to on-call
- \`advisory\` — recommended, not enforced

### 4.5 Observability

**The question:** What is being measured in production, and what has gone wrong?

AI observability goes beyond traditional SRE monitoring. Model accuracy, token cost, hallucination rate, override frequency, demographic drift, and output distribution are all signals that require purpose-built measurement. Observability artifacts declare what's being measured, current values, thresholds, and linked incidents.

| Artifact Type | Purpose |
|---|---|
| \`eval_metric\` | A production measurement of model or system quality |
| \`drift_detector\` | A process that compares current model behavior to a reference baseline |
| \`alert_rule\` | A threshold-based alerting rule linked to an eval metric |
| \`ai_incident\` | A documented production incident involving AI behavior |
| \`trace_config\` | A declared tracing or logging configuration for AI request/response chains |

Key fields:

| Field | Values | Required |
|---|---|---|
| \`signal_type\` | \`accuracy \\| latency \\| cost \\| drift \\| override-rate \\| hallucination-rate \\| toxicity \\| confidence\` | Yes |
| \`current_value\` | Current measured value | Recommended |
| \`threshold\` | Alert or action threshold | Yes |
| \`aggregation\` | \`real-time \\| hourly \\| daily \\| weekly \\| per-batch\` | Yes |
| \`linked_guardrail\` | Trust guardrail ID this metric enforces | Recommended |
| \`depends_on\` | Model, system, or eval suite IDs | Yes |

---

## § 5 File Structure

\`\`\`
ai-architecture/
└── examples/
    └── acme-insurance/
        ├── .prism-ai/
        │   └── config.yaml          # meta: org, product, temporal_state, as_of
        ├── models/
        │   └── landscape.yaml       # foundation_model, custom_model, embedding_model artifacts
        ├── systems/
        │   └── landscape.yaml       # ai_system, rag_pipeline, copilot, classifier_service
        ├── lifecycle/
        │   └── landscape.yaml       # training_run, eval_suite, deployment, monitoring_job
        ├── trust/
        │   └── landscape.yaml       # guardrail, bias_assessment, red_team_finding, alignment_control
        └── observability/
            └── landscape.yaml       # eval_metric, drift_detector, alert_rule, ai_incident
\`\`\`

### config.yaml example

\`\`\`yaml
prism_ai_version: "1.0"
organization: "ACME, INC"
product: "AI Claims Triage — Architecture Landscape"
domain: insurance
scope: product
temporal_state: transition
as_of: "2025-01-01"
active_dimensions: [models, systems, lifecycle, trust, observability]
ai_risk_class: high           # EU AI Act risk classification
human_in_loop_required: true  # all customer-facing decisions require human review
\`\`\`

---

## § 6 The AI Lifecycle Loop

AI systems don't ship once — they cycle continuously through training, evaluation, deployment, and monitoring.

\`\`\`
Research (model selection / prototyping)
    ↓
Training (data → model artifact)
    ↓
Evaluation (eval suite → pass/fail against trust guardrails)
    ↓
Staging (canary / shadow deployment)
    ↓
Production (live serving)
    ↓
Monitoring (accuracy, drift, override rate, incidents)
    ↓
Drift detected or performance degraded
    ↓
Retrain → Evaluation → Staging → Production (loop)
\`\`\`

PRISM/AI's \`depends_on\` links connect lifecycle artifacts to the models and systems they manage, making blast radius traversal possible: change a training data source → see every downstream eval suite, deployment, and monitoring job at risk.

---

## § 7 Trust Framework

Trust in PRISM/AI is structured across five types, each addressing a different failure mode:

| Trust type | Failure mode addressed | Example control |
|---|---|---|
| \`accuracy\` | Model predictions are wrong too often | ≥87% accuracy blocks deployment |
| \`alignment\` | Model acts outside intended scope | Human override always available |
| \`fairness\` | Model outputs differ across demographic groups | Demographic parity assessment monthly |
| \`safety\` | Model produces harmful, toxic, or dangerous outputs | Content filter with blocking enforcement |
| \`explainability\` | Model decisions are opaque to affected users | SHAP mandatory for adjudicator-facing scores |
| \`privacy\` | Model leaks training data or enables re-identification | PII scrubbing in training + inference |

**Risk levels for trust findings:**
- \`critical\` — immediate deployment block or incident escalation
- \`high\` — requires resolution within current sprint
- \`medium\` — tracked, scheduled for resolution
- \`low\` — acknowledged, accepted or deferred

---

## § 8 Cross-Referencing

PRISM/AI connects to the broader PRISM framework family:

| Cross-reference | How |
|---|---|
| **PRISM (EA)** | AI systems appear as AI capabilities in the Reality (R) layer; strategic AI adoption signals in the Signal (S) layer |
| **PRISM/D** | Models depend on training data domains and feature store products declared in PRISM/D; link via \`training_data_source\` field |
| **PRISM/I** | Model serving infrastructure (GPU clusters, inference endpoints) is declared in PRISM/I's Runtime and Control dimensions |
| **PRISM/A** | Application components that embed AI use \`system_type: ai-agent\`; they link to PRISM/AI system artifacts for full depth |
| **PRISM/CY** | AI security threats (prompt injection, data extraction, adversarial inputs) link to threat artifacts in PRISM/CY |
| **PRISM/MVP** | AI-behavior assumptions in PRISM/MVP hypotheses link to trust guardrails in PRISM/AI for validation evidence |

---

## § 9 AI-Native Risk Classification

PRISM/AI recognizes five categories of AI-specific architectural risk not found in traditional software:

| Risk category | Description | Mitigation approach |
|---|---|---|
| **Model drift** | Distribution shift between training data and production inputs degrades accuracy over time | Drift detector in Observability + scheduled retraining in Lifecycle |
| **Hallucination** | Generative models produce confident but factually incorrect outputs | Confidence thresholds, retrieval grounding (RAG), HITL for high-stakes outputs |
| **Demographic bias** | Model outcomes differ unfairly across demographic groups | Bias assessments in Trust + disaggregated eval metrics in Observability |
| **Adversarial input** | Crafted inputs manipulate model behavior (prompt injection, evasion attacks) | Red-team findings in Trust + input sanitization controls |
| **Training data leakage** | Model memorizes and outputs training data containing PII/SPII | Privacy trust controls + data minimization in PRISM/D governance |

---

## § 10 What PRISM/AI Does Not Cover

| Excluded concern | Why | Where it belongs |
|---|---|---|
| Training data management and governance | Covered by PRISM/D — data domains, contracts, and governance | PRISM/D |
| Experiment tracking and hyperparameter search | Run-level tracking belongs in tooling | MLflow, W&B, Comet |
| Model weight storage and artifact versioning | Implementation detail | MLflow Model Registry, Hugging Face, S3 + DVC |
| Prompt library management | Prompt engineering is operational, not architecture | Prompt management tools |
| AI product strategy and roadmap | Product decisions belong in PRISM/MVP | PRISM/MVP Bets and Hypotheses dimensions |
| Cloud infrastructure for AI compute | Declared in PRISM/I | PRISM/I Runtime dimension |
| Application integration patterns | AI component integration belongs in PRISM/A | PRISM/A Integrations dimension |

---

## § 11 Glossary

| Term | Definition |
|---|---|
| **Foundation model** | A large pre-trained model from a provider, used as-is or fine-tuned (GPT-4o, Claude Sonnet, Gemini Pro) |
| **Fine-tuned model** | A foundation model further trained on organization-specific data to improve performance on a target task |
| **RAG (Retrieval-Augmented Generation)** | An architecture pattern that grounds LLM outputs in retrieved documents or knowledge bases to reduce hallucination |
| **Guardrail** | A hard or soft constraint on AI behavior with a declared enforcement level (blocking/logging/alerting) |
| **Human-in-the-loop (HITL)** | An architectural pattern where a human must review or approve AI output before it takes effect |
| **Model drift** | Statistical shift between the distribution of inputs seen during training and inputs seen in production |
| **Bias assessment** | An evaluation of model outputs across demographic or categorical groups to detect unfair disparities |
| **Red-team finding** | A documented vulnerability discovered by intentionally adversarial testing of an AI system |
| **Alignment control** | A control that keeps AI behavior within intended scope and values (human override, scope restrictions, refusal rules) |
| **Explainability** | The degree to which an AI system's decisions can be understood and explained to affected users |
| **lifecycle_stage** | The current stage of a model's operational lifecycle: \`research → training → evaluation → staging → production → deprecated → retired\` |
| **Blast radius (AI)** | The set of systems, evaluations, and monitoring jobs at risk if a model changes, degrades, or fails |
`,gE={ea:cE,infra:uE,cy:dE,app:pE,mvp:fE,dt:hE,ai:mE},yE={ea:"PRISM — Enterprise Architecture",infra:"PRISM/I — Infrastructure",cy:"PRISM/CY — Cybersecurity",app:"PRISM/A — Application Architecture",mvp:"PRISM/MVP — Product Validation",dt:"PRISM/D — Data Architecture",ai:"PRISM/AI — AI Architecture"},vE=h.jsxs("svg",{width:"24",height:"24",viewBox:"-5 -5 110 110",fill:"none",stroke:"#586e75",strokeWidth:"6",strokeLinejoin:"round",className:"opacity-70",children:[h.jsx("polygon",{points:"50,0 93.3,25 93.3,75 50,100 6.7,75 6.7,25"}),h.jsx("polygon",{points:"50,25 71.65,37.5 71.65,62.5 50,75 28.35,62.5 28.35,37.5"}),h.jsx("line",{x1:"50",y1:"0",x2:"50",y2:"25"}),h.jsx("line",{x1:"93.3",y1:"25",x2:"71.65",y2:"37.5"}),h.jsx("line",{x1:"93.3",y1:"75",x2:"71.65",y2:"62.5"}),h.jsx("line",{x1:"50",y1:"100",x2:"50",y2:"75"}),h.jsx("line",{x1:"6.7",y1:"75",x2:"28.35",y2:"62.5"}),h.jsx("line",{x1:"6.7",y1:"25",x2:"28.35",y2:"37.5"})]}),bE={h1:({children:e})=>h.jsx("h1",{className:"font-clay font-bold text-4xl text-sol-base00 mb-6 mt-10 first:mt-0",children:e}),h2:({children:e})=>h.jsx("h2",{className:"font-clay font-bold text-2xl text-sol-base00 mb-4 mt-10 pb-2 border-b border-sol-base2",children:e}),h3:({children:e})=>h.jsx("h3",{className:"font-clay font-semibold text-xl text-sol-base0 mb-3 mt-6",children:e}),h4:({children:e})=>h.jsx("h4",{className:"font-clay font-semibold text-base text-sol-base0 mb-2 mt-4",children:e}),p:({children:e})=>h.jsx("p",{className:"font-body text-sol-base0 text-base leading-relaxed mb-4",children:e}),ul:({children:e})=>h.jsx("ul",{className:"list-disc pl-6 space-y-1 mb-4 font-body text-sol-base0 text-base leading-relaxed",children:e}),ol:({children:e})=>h.jsx("ol",{className:"list-decimal pl-6 space-y-1 mb-4 font-body text-sol-base0 text-base leading-relaxed",children:e}),li:({children:e})=>h.jsx("li",{className:"leading-relaxed",children:e}),blockquote:({children:e})=>h.jsx("blockquote",{className:"border-l-4 border-sol-base1 pl-5 my-4 text-sol-base1 italic",children:e}),hr:()=>h.jsx("hr",{className:"border-sol-base2 my-8"}),strong:({children:e})=>h.jsx("strong",{className:"font-semibold text-sol-base00",children:e}),em:({children:e})=>h.jsx("em",{className:"italic",children:e}),a:({href:e,children:n})=>h.jsx("a",{href:e,className:"text-sol-blue underline hover:opacity-70 transition-opacity",target:"_blank",rel:"noopener noreferrer",children:n}),pre:({children:e})=>h.jsx("pre",{className:"font-mono text-sm bg-sol-base2 text-sol-base0 rounded-xl p-5 mb-4 overflow-x-auto border border-sol-base2",children:e}),code:({className:e,children:n})=>e?h.jsx("code",{className:e,children:n}):h.jsx("code",{className:"font-mono text-sm px-1.5 py-0.5 rounded bg-sol-base2 text-sol-cyan",children:n}),table:({children:e})=>h.jsx("div",{className:"overflow-x-auto mb-6",children:h.jsx("table",{className:"w-full text-sm font-body border-collapse",children:e})}),thead:({children:e})=>h.jsx("thead",{className:"border-b-2 border-sol-base1",children:e}),th:({children:e})=>h.jsx("th",{className:"text-left font-clay font-semibold text-sol-base00 pb-2 pr-6",children:e}),td:({children:e})=>h.jsx("td",{className:"text-sol-base0 py-2 pr-6 border-b border-sol-base2",children:e})};function wE({framework:e,onBack:n}){const t=gE[e]||"# Spec not found",i=yE[e]||e.toUpperCase();return h.jsxs("div",{className:"min-h-screen bg-sol-base3 flex flex-col",children:[h.jsxs("div",{className:"px-8 py-5 border-b border-sol-base2 flex items-center gap-4",children:[h.jsx("button",{onClick:n,className:"font-clay font-semibold text-sm text-sol-base1 hover:text-sol-base00 transition-colors",children:"← Back"}),vE,h.jsx("span",{className:"font-clay font-bold text-sol-base00",children:i})]}),h.jsx("div",{className:"flex-1 flex justify-center px-8 py-12",children:h.jsx("div",{className:"max-w-3xl w-full",children:h.jsx(KC,{remarkPlugins:[lE],components:bE,children:t})})})]})}function xE(e,n){const t={};for(const[l,c]of Object.entries(n))t[l]=c.raw;const r=yg({prism_framework:e,prism_version:"1.0",layers:t},{indent:2,lineWidth:120}),a=new Blob([r],{type:"text/yaml"}),o=URL.createObjectURL(a),s=document.createElement("a");s.href=o,s.download=`prism-${e}-landscape.yaml`,s.click(),URL.revokeObjectURL(o)}function kE(e){try{const n=$o(e);if(!n||typeof n!="object"||!n.prism_framework||!n.layers||typeof n.layers!="object")return null;const t={};for(const[i,r]of Object.entries(n.layers))typeof r=="string"&&(t[i]=r);return Object.keys(t).length===0?null:{framework:String(n.prism_framework),layerRaws:t}}catch{return null}}function SE({profile:e,layerStates:n,onImport:t}){const i=V.useRef(null),[r,a]=V.useState(null);function o(){xE(e,n)}function s(l){const c=l.target.files[0];if(!c)return;const d=new FileReader;d.onload=u=>{const p=kE(u.target.result);p?(a(null),t(p)):(a("Not a valid PRISM landscape file"),setTimeout(()=>a(null),3e3)),l.target.value=""},d.readAsText(c)}return h.jsxs("div",{className:"relative flex items-center gap-1",children:[h.jsxs("div",{className:"flex gap-1 p-1 rounded-xl",style:{backgroundColor:"#d9d4c0"},children:[h.jsx("button",{onClick:o,className:"font-clay font-semibold text-sm px-3 py-1.5 rounded-lg text-sol-base1 hover:text-sol-base00 transition-colors",title:"Download landscape as YAML",children:"Download"}),h.jsx("button",{onClick:()=>i.current.click(),className:"font-clay font-semibold text-sm px-3 py-1.5 rounded-lg text-sol-base1 hover:text-sol-base00 transition-colors",title:"Open a PRISM YAML landscape file",children:"Open"})]}),h.jsx("input",{ref:i,type:"file",accept:".yaml,.yml",onChange:s,style:{display:"none"}}),r&&h.jsx("span",{className:"absolute top-full mt-1 right-0 font-body text-xs text-red-600 whitespace-nowrap bg-white px-2 py-1 rounded shadow-sm",children:r})]})}const IE=`meta:
  organization: "ACME, INC"
  description: "Insurance Operations — IT, Non-IT Operations, and 3rd Party Logistics"
  domain: insurance
  scope: enterprise
  temporal_state: baseline
  as_of: "2025-01-01"
  schema_version: "1.0"
  diagramKind: ea
  source: prism/examples/acme-insurance/
  active_layers: [P, R, I, S, M]
  author: "ACME Architecture Team"
  contact: "enterprise-arch@acme.com"
  created_date: "2024-06-01"
  last_modified: "2025-01-01"
  reviewed_by: ""
  review_date: ""
  status: active
`,AE=`layer: P
dimensions:

  - id: who
    prism_layer: P
    prism_sub_dimension: stakeholders
    icon: "◎"
    name: Who
    subtitle: "People & Roles"
    artifacts:
      - id: stk-claims-adj
        icon: "◎"
        label: "Claims Adjusters"
        sub: "ACME Operations"
        ownership: self
        type: stakeholder
      - id: stk-it-ops
        icon: "◎"
        label: "IT Operations"
        sub: "ACME Infrastructure"
        ownership: self
        type: stakeholder
      - id: stk-fraud
        icon: "◎"
        label: "Fraud Investigation"
        sub: "Legal Division"
        ownership: internal
        type: stakeholder
      - id: stk-finance
        icon: "◎"
        label: "Finance Team"
        sub: "ACME Finance"
        ownership: internal
        type: stakeholder
      - id: stk-customers
        icon: "◎"
        label: "Policyholders"
        sub: "End customers"
        ownership: external
        type: stakeholder
      - id: stk-eu-reg
        icon: "◎"
        label: "EU Data Regulator"
        sub: "Gov authority"
        ownership: external
        type: stakeholder
      - id: stk-logico
        icon: "◎"
        label: "LogiCo Drivers"
        sub: "3PL partner"
        ownership: external
        type: stakeholder

  - id: where
    prism_layer: P
    prism_sub_dimension: "geographies + environments"
    icon: "⬡"
    name: Where
    subtitle: "Geographies & Environments"
    artifacts:
      - id: geo-us-hq
        icon: "⬡"
        label: "US HQ"
        sub: "Chicago · primary"
        ownership: self
        type: geography
      - id: geo-eu
        icon: "⬡"
        label: "EU Region"
        sub: "GDPR jurisdiction"
        ownership: self
        type: geography
      - id: geo-aws-use1
        icon: "⬡"
        label: "AWS us-east-1"
        sub: "Cloud · primary"
        ownership: self
        type: geography
      - id: geo-aws-euw1
        icon: "⬡"
        label: "AWS eu-west-1"
        sub: "Cloud · EU DR"
        ownership: self
        type: geography
      - id: geo-logico
        icon: "⬡"
        label: "LogiCo Network"
        sub: "12 warehouse hubs"
        ownership: external
        type: geography
      - id: env-prod
        icon: "▣"
        label: "Production"
        sub: "AWS us-east-1"
        ownership: self
        type: environment
      - id: env-dr
        icon: "▣"
        label: "DR Environment"
        sub: "AWS eu-west-1"
        ownership: self
        type: environment
      - id: env-staging
        icon: "▣"
        label: "Pre-Production"
        sub: "AWS us-east-1"
        ownership: self
        type: environment
      - id: env-qa
        icon: "▣"
        label: "QA"
        sub: "US HQ · qa-primary"
        ownership: self
        type: environment
      - id: env-perf
        icon: "▣"
        label: "Performance"
        sub: "AWS us-east-1 · load-test"
        ownership: self
        type: environment
`,CE=`layer: R
dimensions:

  - id: what
    prism_layer: R
    prism_sub_dimension: capabilities
    icon: "◆"
    name: What
    subtitle: "Capabilities & Products"
    artifacts:
      - id: cap-claims
        icon: "◆"
        label: "Claims Processing"
        sub: "Core · insured"
        ownership: self
        type: capability
      - id: cap-billing
        icon: "◆"
        label: "Billing & Invoicing"
        sub: "Finance · core"
        ownership: self
        type: capability
      - id: cap-policy
        icon: "◆"
        label: "Policy Management"
        sub: "Core · insured"
        ownership: self
        type: capability
      - id: cap-fraud
        icon: "◆"
        label: "Fraud Detection"
        sub: "AI-assisted · Risk"
        ownership: internal
        type: capability
        kind: ai-agent
        classification: confidential
      - id: cap-reporting
        icon: "◆"
        label: "Financial Reporting"
        sub: "Finance team"
        ownership: internal
        type: capability
      - id: cap-courier
        icon: "◆"
        label: "Evidence Courier"
        sub: "Physical · LogiCo"
        ownership: external
        type: capability

  - id: how
    prism_layer: R
    prism_sub_dimension: "systems + processes"
    icon: "↺"
    name: How
    subtitle: "Processes & Systems"
    artifacts:
      - id: sys-claims-portal
        icon: "⊞"
        label: "Claims Portal"
        sub: "Web · self-hosted"
        ownership: self
        type: system
        status: active
        trigger_mode: event-driven
        data_sensitivity: [pii]
        compliance_frameworks: [GDPR, SOX]
      - id: sys-billing-zos
        icon: "⊞"
        label: "Legacy Billing z/OS"
        sub: "EOL Dec 2025"
        ownership: self
        type: system
        status: decommissioning
        trigger_mode: manual
        data_sensitivity: [pii, spii]
        compliance_frameworks: [SOX]
      - id: sys-claims-ai
        icon: "⊛"
        label: "AI Claims Triage"
        sub: "AI Agent · event-driven"
        ownership: self
        type: system
        system_type: ai-agent
        status: active
        trigger_mode: event-driven
        classification: confidential
        data_sensitivity: [pii]
        depends_on: [sys-claims-portal]
      - id: sys-sap
        icon: "⊞"
        label: "SAP S/4HANA"
        sub: "ERP · Finance team"
        ownership: internal
        type: system
        status: active
      - id: sys-fraud-mgmt
        icon: "⊞"
        label: "Fraud Case Mgmt"
        sub: "Legal team tool"
        ownership: internal
        type: system
        status: active
        data_sensitivity: [pii, spii]
      - id: sys-logico-tms
        icon: "⊞"
        label: "LogiCo TMS"
        sub: "Transport mgmt"
        ownership: external
        type: system
        status: active
      - id: proc-claims-wf
        icon: "↺"
        label: "Claims Workflow"
        sub: "Semi-automated"
        ownership: self
        type: process
        execution_mode: semi-automatic
        depends_on: [sys-claims-portal, sys-billing-zos]
      - id: proc-billing-reconc
        icon: "↺"
        label: "Billing Reconciliation"
        sub: "Manual · Finance"
        ownership: self
        type: process
        execution_mode: manual
        depends_on: [sys-billing-zos]
`,PE=`layer: I
dimensions:

  - id: why-when
    prism_layer: I
    prism_sub_dimension: "drivers + timelines"
    icon: "▸"
    name: "Why / When"
    subtitle: "Drivers & Timelines"
    artifacts:
      - id: drv-gdpr
        icon: "▸"
        label: "GDPR Compliance"
        sub: "Regulatory · EU"
        ownership: external
        type: driver
      - id: drv-legacy
        icon: "▸"
        label: "Legacy Risk"
        sub: "EOL Dec 2025"
        ownership: self
        type: driver
      - id: drv-cost
        icon: "▸"
        label: "Cost Reduction"
        sub: "Board mandate FY26"
        ownership: self
        type: driver
      - id: drv-market
        icon: "▸"
        label: "EU Market Expansion"
        sub: "Growth strategy"
        ownership: self
        type: driver
      - id: tl-vendor-eol
        icon: "⊙"
        label: "Vendor Support EOL"
        sub: "Dec 31 2025"
        ownership: self
        type: timeline
      - id: tl-eu-audit
        icon: "⊙"
        label: "EU Audit Window"
        sub: "Oct 15 2025"
        ownership: external
        type: timeline

  - id: if-then
    prism_layer: I
    prism_sub_dimension: "risks + goals + constraints"
    icon: "⚠"
    name: If-Then
    subtitle: "Risks, Goals & Constraints"
    artifacts:
      - id: risk-migration
        icon: "⚠"
        label: "Migration Delay"
        sub: "If z/OS late → SLA breach"
        ownership: self
        type: risk
      - id: risk-gdpr-fine
        icon: "⚠"
        label: "GDPR Fine"
        sub: "If audit fails → 4% revenue"
        ownership: external
        type: risk
      - id: risk-portal
        icon: "⚠"
        label: "Portal Abandonment"
        sub: "If UX fails → manual revert"
        ownership: self
        type: risk
      - id: goal-decomm
        icon: "◉"
        label: "Decommission Billing"
        sub: "Goal · zero z/OS Nov 30"
        ownership: self
        type: goal
      - id: goal-cost
        icon: "◉"
        label: "30% Cost Target"
        sub: "Goal · FY2026"
        ownership: self
        type: goal
      - id: con-capex
        icon: "⊘"
        label: "$4.2M CapEx Cap"
        sub: "Constraint · CFO Office"
        ownership: self
        type: constraint
`,_E=`layer: S
dimensions:

  - id: exchange
    prism_layer: S
    prism_sub_dimension: "apis + events + data_contracts"
    icon: "⇌"
    name: Exchange
    subtitle: "APIs, Events & Contracts"
    artifacts:
      - id: api-claims-v3
        icon: "⇌"
        label: "Claims API v3"
        sub: "REST · inbound"
        ownership: self
        type: api
        direction: inbound
        integration_mode: handoff
      - id: api-logico-track
        icon: "⇌"
        label: "LogiCo Tracking API"
        sub: "REST · outbound"
        ownership: external
        type: api
        direction: outbound
        integration_mode: handoff
      - id: api-sap-bridge
        icon: "⇌"
        label: "SAP Finance Bridge"
        sub: "SOAP · internal"
        ownership: internal
        type: api
        direction: bidirectional
        integration_mode: embedded
      - id: evt-claim-sub
        icon: "↯"
        label: "ClaimSubmitted"
        sub: "Kafka topic · inbound"
        ownership: self
        type: event
        direction: inbound
      - id: evt-policy-chg
        icon: "↯"
        label: "PolicyChanged"
        sub: "Kafka topic"
        ownership: self
        type: event
        direction: inbound
      - id: evt-shipment
        icon: "↯"
        label: "ShipmentStatus"
        sub: "LogiCo webhook · outbound"
        ownership: external
        type: event
        direction: outbound
      - id: dc-logico-mfst
        icon: "▤"
        label: "LogiCo Manifest v2"
        sub: "Data contract"
        ownership: external
        type: data_contract
`,EE=`layer: M
dimensions:

  - id: pulse
    prism_layer: M
    prism_sub_dimension: "adoption + sentiment + ethics + change_readiness"
    icon: "▲"
    name: Pulse
    subtitle: "Ethics, Adoption & Sentiment"
    artifacts:
      - id: pulse-claims-portal
        icon: "▲"
        label: "Claims Portal"
        sub: "Adoption 65% · active"
        ownership: self
        type: adoption_signal
      - id: pulse-logico-portal
        icon: "▲"
        label: "LogiCo Portal"
        sub: "Adoption 40% · partial"
        ownership: external
        type: adoption_signal
      - id: pulse-billing-senti
        icon: "▲"
        label: "Legacy Billing"
        sub: "Sentiment: fatigue"
        ownership: self
        type: sentiment
      - id: pulse-fraud-ethics
        icon: "◈"
        label: "Fraud AI Ethics"
        sub: "Bias review pending"
        ownership: internal
        type: ethics_marker
      - id: pulse-eu-readiness
        icon: "▲"
        label: "EU Staff Readiness"
        sub: "Change readiness: med"
        ownership: self
        type: change_readiness

  - id: legacy
    prism_layer: M
    prism_sub_dimension: "decisions + trajectory"
    icon: "◈"
    name: Legacy
    subtitle: "History, Trajectory & Decisions"
    artifacts:
      - id: dec-kafka
        icon: "◈"
        label: "Adopt Apache Kafka"
        sub: "Decision · Mar 2024"
        ownership: self
        type: decision
      - id: pol-no-mainframe
        icon: "◈"
        label: "No New Mainframe"
        sub: "Policy · Q1 2025"
        ownership: self
        type: decision
      - id: dec-logico-partner
        icon: "◈"
        label: "LogiCo Partnership"
        sub: "Decision · 2022"
        ownership: external
        type: decision
      - id: prog-cloud-mig
        icon: "◈"
        label: "Cloud Migration"
        sub: "Transition · active"
        ownership: self
        type: transition_program
      - id: tgt-cloud-native
        icon: "◈"
        label: "Cloud-Native Platform"
        sub: "Target · 2027-Q2"
        ownership: self
        type: target
`,TE=`meta:
  organization: "ACME, INC"
  description: "Infrastructure Landscape — AWS, On-Prem, and 3PL Partner LogiCo"
  domain: insurance
  scope: enterprise
  temporal_state: transition
  as_of: "2025-01-01"
  schema_version: "1.0"
  diagramKind: infra
  source: infrastructure/examples/acme-insurance/
  active_dimensions: [who, where, runtime, state, control, operations]
  author: "ACME Platform Engineering"
  contact: "platform-eng@acme.com"
  created_date: "2024-06-01"
  last_modified: "2025-01-01"
  reviewed_by: ""
  review_date: ""
  status: active
`,RE=`dimensions:
  - id: who
    dimension_key: who
    icon: "◎"
    name: "Who"
    subtitle: "Teams, Users & Providers"
    artifacts:
      - id: team-platform
        icon: "◎"
        label: "Platform Eng"
        sub: "EKS · CI/CD · IDP"
        ownership: self
        type: team
      - id: team-infra-ops
        icon: "◎"
        label: "Infra & Ops"
        sub: "Networking · IAM"
        ownership: self
        type: team
      - id: team-it-ops
        icon: "◎"
        label: "IT Operations"
        sub: "Legacy z/OS"
        ownership: self
        type: team
      - id: team-end-users
        icon: "◎"
        label: "Policyholders"
        sub: "Portal end users"
        ownership: external
        type: team
      - id: team-logico-ops
        icon: "◎"
        label: "LogiCo Ops"
        sub: "3PL partner"
        ownership: external
        type: team
      - id: prov-aws
        icon: "⬡"
        label: "Amazon Web Services"
        sub: "Primary provider"
        ownership: external
        type: provider
      - id: prov-onprem-dc1
        icon: "⬡"
        label: "Chicago DC"
        sub: "On-prem · decommissioning"
        ownership: self
        type: provider
      - id: prov-logico-cloud
        icon: "⬡"
        label: "LogiCo Cloud"
        sub: "3PL private infra"
        ownership: external
        type: provider
`,ME=`dimensions:
  - id: where
    dimension_key: where
    icon: "⬡"
    name: "Where"
    subtitle: "Accounts, Regions & Environments"
    artifacts:
      - id: acct-aws-prod
        icon: "▣"
        label: "AWS Production"
        sub: "us-east-1 · SOX · GDPR"
        ownership: self
        type: account
      - id: acct-aws-dr
        icon: "▣"
        label: "AWS DR"
        sub: "eu-west-1 · GDPR"
        ownership: self
        type: account
      - id: acct-aws-nonprod
        icon: "▣"
        label: "AWS Non-Prod"
        sub: "staging · dev"
        ownership: self
        type: account
      - id: env-prod
        icon: "▣"
        label: "Production"
        sub: "AWS us-east-1"
        ownership: self
        type: environment
      - id: env-dr
        icon: "▣"
        label: "Disaster Recovery"
        sub: "AWS eu-west-1"
        ownership: self
        type: environment
      - id: env-staging
        icon: "▣"
        label: "Staging"
        sub: "AWS us-east-1"
        ownership: self
        type: environment
      - id: env-qa
        icon: "▣"
        label: "QA"
        sub: "AWS non-prod"
        ownership: self
        type: environment
`,DE=`dimensions:
  - id: runtime
    dimension_key: runtime
    icon: "↺"
    name: "Runtime"
    subtitle: "Execution & Messaging"
    artifacts:
      - id: cluster-eks-prod
        icon: "⊞"
        label: "EKS Production"
        sub: "Kubernetes · us-east-1"
        ownership: self
        type: cluster
      - id: cluster-eks-staging
        icon: "⊞"
        label: "EKS Staging"
        sub: "Kubernetes · non-prod"
        ownership: self
        type: cluster
      - id: np-eks-prod-general
        icon: "⊞"
        label: "General Pool"
        sub: "m6i.xlarge · 3–20 nodes"
        ownership: self
        type: node_pool
      - id: np-eks-prod-spot
        icon: "⊞"
        label: "Spot Workers"
        sub: "m6i.2xlarge · 0–50 nodes"
        ownership: self
        type: node_pool
      - id: svc-claims-api
        icon: "↺"
        label: "Claims API"
        sub: "EKS · prod"
        ownership: self
        type: service
      - id: svc-policy-api
        icon: "↺"
        label: "Policy API"
        sub: "EKS · prod"
        ownership: self
        type: service
      - id: svc-fraud-engine
        icon: "↺"
        label: "Fraud Engine"
        sub: "EKS · internal"
        ownership: internal
        type: service
      - id: svc-billing-zos
        icon: "↺"
        label: "Billing z/OS"
        sub: "On-prem · EOL Dec 2025"
        ownership: self
        type: vm
        status: decommissioning
      - id: svc-billing-k8s
        icon: "↺"
        label: "Billing Service"
        sub: "EKS · target · planned"
        ownership: self
        type: service
      - id: topic-claim-submitted
        icon: "↯"
        label: "ClaimSubmitted"
        sub: "Kafka topic"
        ownership: self
        type: topic
      - id: topic-policy-changed
        icon: "↯"
        label: "PolicyChanged"
        sub: "Kafka topic"
        ownership: self
        type: topic
      - id: topic-shipment-status
        icon: "↯"
        label: "ShipmentStatus"
        sub: "LogiCo webhook"
        ownership: external
        type: topic
      - id: wfe-temporal
        icon: "⊙"
        label: "Temporal Cloud"
        sub: "Managed · claims WF"
        ownership: external
        type: workflow_engine
`,LE=`dimensions:
  - id: state
    dimension_key: state
    icon: "▤"
    name: "State"
    subtitle: "Data & Persistence"
    artifacts:
      - id: db-claims-rds
        icon: "▤"
        label: "Claims DB (RDS)"
        sub: "PostgreSQL · Multi-AZ · PII"
        ownership: self
        type: database
        data_sensitivity: [pii]
        compliance_frameworks: [GDPR]
      - id: db-policy-rds
        icon: "▤"
        label: "Policy DB (RDS)"
        sub: "PostgreSQL · Multi-AZ"
        ownership: self
        type: database
        data_sensitivity: [pii]
      - id: db-billing-zos-vsam
        icon: "▤"
        label: "Billing VSAM"
        sub: "z/OS · decommissioning"
        ownership: self
        type: database
        status: decommissioning
        data_sensitivity: [spii]
        compliance_frameworks: [SOX]
      - id: db-billing-postgres
        icon: "▤"
        label: "Billing DB (RDS)"
        sub: "PostgreSQL · target · planned"
        ownership: self
        type: database
        data_sensitivity: [spii]
        compliance_frameworks: [SOX]
      - id: db-fraud-mongo
        icon: "▤"
        label: "Fraud Case Store"
        sub: "DocumentDB · internal"
        ownership: internal
        type: database
        data_sensitivity: [pii, spii]
      - id: db-sap-hana
        icon: "▤"
        label: "SAP HANA"
        sub: "Finance team · on-prem"
        ownership: internal
        type: database
      - id: s3-claims-docs
        icon: "▤"
        label: "Claims Docs"
        sub: "S3 · versioned · GDPR"
        ownership: self
        type: object_store
        data_sensitivity: [pii]
        compliance_frameworks: [GDPR]
      - id: s3-evidence-archive
        icon: "▤"
        label: "Evidence Archive"
        sub: "S3 · legal hold"
        ownership: self
        type: object_store
      - id: cache-claims-redis
        icon: "▤"
        label: "Session Cache"
        sub: "ElastiCache Redis"
        ownership: self
        type: cache
      - id: dw-snowflake
        icon: "▤"
        label: "Snowflake DW"
        sub: "Analytics · SOX"
        ownership: internal
        type: data_warehouse
`,NE=`dimensions:
  - id: control
    dimension_key: control
    icon: "⊘"
    name: "Control"
    subtitle: "Networking & Access"
    artifacts:
      - id: vpc-prod-us-east-1
        icon: "⬡"
        label: "VPC Production"
        sub: "10.0.0.0/16 · us-east-1"
        ownership: self
        type: vpc
      - id: vpc-dr-eu-west-1
        icon: "⬡"
        label: "VPC DR"
        sub: "10.1.0.0/16 · eu-west-1"
        ownership: self
        type: vpc
      - id: alb-claims-portal
        icon: "⇌"
        label: "Claims Portal ALB"
        sub: "L7 · public · TLS"
        ownership: self
        type: load_balancer
      - id: alb-internal-apis
        icon: "⇌"
        label: "Internal APIs ALB"
        sub: "L7 · private · TLS"
        ownership: self
        type: load_balancer
      - id: mesh-istio-prod
        icon: "⇌"
        label: "Istio Service Mesh"
        sub: "mTLS · retry · circuit break"
        ownership: self
        type: service_mesh
      - id: dns-internal
        icon: "◎"
        label: "Route53 Private"
        sub: "Internal DNS"
        ownership: self
        type: dns
      - id: dns-public
        icon: "◎"
        label: "Route53 Public"
        sub: "acmeinc.com"
        ownership: self
        type: dns
      - id: secrets-vault-prod
        icon: "⊘"
        label: "HashiCorp Vault"
        sub: "Primary secrets · K8s auth"
        ownership: self
        type: secret_store
      - id: secrets-aws-ssm
        icon: "⊘"
        label: "AWS SSM"
        sub: "Parameter store"
        ownership: self
        type: secret_store
      - id: iam-claims-api-role
        icon: "⊘"
        label: "claims-api-role"
        sub: "IAM · RDS + S3 access"
        ownership: self
        type: iam_role
      - id: iam-platform-admin
        icon: "⊘"
        label: "platform-admin"
        sub: "IAM · MFA required"
        ownership: self
        type: iam_role
      - id: waf-claims-portal
        icon: "⊘"
        label: "Claims WAF"
        sub: "OWASP · rate limit"
        ownership: self
        type: firewall_rule
      - id: sg-rds-claims
        icon: "⊘"
        label: "Claims RDS SG"
        sub: "Port 5432 · locked"
        ownership: self
        type: firewall_rule
`,jE=`dimensions:
  - id: operations
    dimension_key: operations
    icon: "▲"
    name: "Operations"
    subtitle: "Delivery & Observability"
    artifacts:
      - id: pipeline-claims-api
        icon: "▲"
        label: "Claims API CI/CD"
        sub: "GitHub Actions · prod"
        ownership: self
        type: pipeline
      - id: pipeline-infra-iac
        icon: "▲"
        label: "IaC Pipeline"
        sub: "Terraform · manual gate"
        ownership: self
        type: pipeline
      - id: pipeline-billing-migration
        icon: "▲"
        label: "Billing Migration"
        sub: "Active · z/OS → RDS"
        ownership: self
        type: pipeline
      - id: registry-ecr-prod
        icon: "▣"
        label: "ECR Production"
        sub: "Container registry · immutable"
        ownership: self
        type: registry
      - id: iac-aws-core
        icon: "◆"
        label: "AWS Core IaC"
        sub: "Terraform · VPCs · IAM"
        ownership: self
        type: infrastructure_code
      - id: iac-eks-clusters
        icon: "◆"
        label: "EKS IaC"
        sub: "Terraform · Karpenter"
        ownership: self
        type: infrastructure_code
      - id: metrics-prometheus
        icon: "▲"
        label: "Prometheus"
        sub: "Metrics · EKS scrape"
        ownership: self
        type: metrics
      - id: metrics-cloudwatch
        icon: "▲"
        label: "CloudWatch"
        sub: "AWS native metrics"
        ownership: external
        type: metrics
      - id: logging-loki
        icon: "▲"
        label: "Grafana Loki"
        sub: "Log aggregation · EKS"
        ownership: self
        type: logging
      - id: tracing-tempo
        icon: "▲"
        label: "Grafana Tempo"
        sub: "Distributed tracing · OTEL"
        ownership: self
        type: tracing
      - id: alerting-pagerduty
        icon: "↯"
        label: "PagerDuty"
        sub: "On-call routing"
        ownership: external
        type: alerting
      - id: dash-grafana-platform
        icon: "▤"
        label: "Platform Grafana"
        sub: "Metrics · logs · traces"
        ownership: self
        type: dashboard
      - id: slo-claims-api-availability
        icon: "◉"
        label: "Claims Availability SLO"
        sub: "99.9% · 30d window"
        ownership: self
        type: slo
      - id: slo-claims-api-latency
        icon: "◉"
        label: "Claims Latency SLO"
        sub: "p99 < 500ms · 30d"
        ownership: self
        type: slo
`,OE=`meta:
  organization: "ACME, INC"
  description: "Cybersecurity Landscape — cloud migration, AI posture, SOX + GDPR"
  domain: insurance
  scope: enterprise
  temporal_state: transition
  as_of: "2025-01-01"
  schema_version: "1.0"
  diagramKind: cy
  source: cybersecurity/examples/acme-insurance/
  active_dimensions: [identity, surface, controls, threats, posture]
  author: "ACME Security Team"
  contact: "security@acme.com"
  created_date: "2024-06-01"
  last_modified: "2025-01-01"
  reviewed_by: ""
  review_date: ""
  status: active
`,FE=`dimensions:
  - id: identity
    dimension_key: identity
    icon: "◑"
    name: "Identity"
    subtitle: "IAM, access boundaries, privileged accounts"
    artifacts:
      - id: role-soc-analyst
        icon: "◑"
        label: "SOC Analyst"
        sub: "read-only · MFA enforced"
        type: iam_role
        ownership: self
        status: active

      - id: role-claims-adj
        icon: "◑"
        label: "Claims Adjudicator"
        sub: "PII access · MFA enforced"
        type: iam_role
        ownership: self
        status: active
        classification: confidential
        data_sensitivity: [pii]
        compliance_frameworks: [GDPR]

      - id: role-fraud-investigator
        icon: "◑"
        label: "Fraud Investigator"
        sub: "legal division · MFA"
        type: iam_role
        ownership: internal
        status: active
        classification: confidential
        data_sensitivity: [pii, spii]

      - id: svc-acct-claims-ai
        icon: "◐"
        label: "AI Triage Service Acct"
        sub: "event consumer · least-priv"
        type: iam_role
        ownership: self
        status: active
        system_type: ai-agent
        classification: confidential
        data_sensitivity: [pii]

      - id: svc-acct-cicd-deploy
        icon: "◐"
        label: "CI/CD Deploy Account"
        sub: "admin-equiv · HIGH RISK"
        type: iam_role
        ownership: self
        status: active
        classification: confidential
        tags: [high-risk, remediation-target]

      - id: ext-logico-api
        icon: "◓"
        label: "LogiCo API Identity"
        sub: "api-key · 3rd party"
        type: iam_role
        ownership: external
        status: active
        data_sensitivity: [pii]

      - id: priv-zos-admin
        icon: "⊘"
        label: "z/OS Admin Access"
        sub: "PAM · break-glass"
        type: iam_role
        ownership: self
        status: decommissioning
        depends_on: [ctrl-vault]
        tags: [pam-controlled, privileged]
`,zE=`dimensions:
  - id: surface
    dimension_key: surface
    icon: "◈"
    name: "Surface"
    subtitle: "Attack surface — exposed endpoints and interfaces"
    artifacts:
      - id: surf-claims-portal
        icon: "◈"
        label: "Claims Portal"
        sub: "HTTPS · WAF · OAuth2"
        type: public_endpoint
        ownership: self
        status: active
        direction: inbound
        classification: confidential
        data_sensitivity: [pii]
        compliance_frameworks: [GDPR, SOX]

      - id: surf-logico-webhook
        icon: "◈"
        label: "LogiCo Webhook"
        sub: "api-key · bidirectional"
        type: public_endpoint
        ownership: self
        status: active
        direction: bidirectional
        data_sensitivity: [pii]

      - id: surf-admin-api
        icon: "▣"
        label: "Admin Internal API"
        sub: "mTLS · private zone"
        type: internal_endpoint
        ownership: self
        status: active
        classification: confidential

      - id: surf-fraud-model-api
        icon: "⊛"
        label: "Fraud Model API"
        sub: "inference · injection risk"
        type: internal_endpoint
        ownership: self
        status: active
        system_type: ai-agent
        classification: confidential
        data_sensitivity: [pii, spii]

      - id: surf-zos-jcl
        icon: "▤"
        label: "z/OS JCL Interface"
        sub: "no modern auth · legacy"
        type: legacy_interface
        ownership: self
        status: decommissioning
        trigger_mode: manual
        data_sensitivity: [spii]
        compliance_frameworks: [SOX]
`,BE=`dimensions:
  - id: controls
    dimension_key: controls
    icon: "⊛"
    name: "Controls"
    subtitle: "Technical and organizational defenses"
    artifacts:
      - id: ctrl-waf
        icon: "⊛"
        label: "WAF"
        sub: "Cloudflare · OWASP Top 10"
        type: technical_control
        ownership: external
        status: active

      - id: ctrl-mfa-sso
        icon: "⊛"
        label: "MFA + SSO"
        sub: "Okta · SAML · full coverage"
        type: technical_control
        ownership: external
        status: active

      - id: ctrl-siem
        icon: "⊛"
        label: "SIEM"
        sub: "Splunk Cloud · 24×7 SOC"
        type: technical_control
        ownership: external
        status: active

      - id: ctrl-cspm
        icon: "⊛"
        label: "CSPM"
        sub: "Prisma Cloud · daily scan"
        type: technical_control
        ownership: external
        status: active

      - id: ctrl-encrypt
        icon: "⊛"
        label: "Encryption at Rest"
        sub: "AES-256 · KMS"
        type: technical_control
        ownership: self
        status: active

      - id: ctrl-vault
        icon: "⊘"
        label: "PAM + Secrets"
        sub: "Vault · dynamic creds"
        type: technical_control
        ownership: self
        status: active

      - id: ctrl-edr
        icon: "⊛"
        label: "EDR"
        sub: "CrowdStrike · partial"
        type: technical_control
        ownership: external
        status: active
        tags: [partial-coverage]

      - id: ctrl-access-review
        icon: "▸"
        label: "Access Reviews"
        sub: "quarterly · mandatory"
        type: org_control
        ownership: self
        status: active

      - id: ctrl-sec-training
        icon: "▸"
        label: "Sec Awareness Training"
        sub: "annual · phishing sim"
        type: org_control
        ownership: self
        status: active

      - id: ctrl-vendor-review
        icon: "▸"
        label: "Vendor Security Reviews"
        sub: "annual · LogiCo overdue"
        type: org_control
        ownership: self
        status: active
        tags: [review-overdue]
`,WE=`dimensions:
  - id: threats
    dimension_key: threats
    icon: "⚠"
    name: "Threats"
    subtitle: "Active risks and threat vectors"
    artifacts:
      - id: threat-zos-eol
        icon: "⚠"
        label: "z/OS EOL Risk"
        sub: "high likelihood · critical"
        type: threat
        ownership: self
        status: active
        depends_on: [surf-zos-jcl]
        tags: [eol-risk, mainframe, sox-risk]

      - id: threat-ai-prompt-inject
        icon: "⚠"
        label: "Prompt Injection Risk"
        sub: "medium · AI surface"
        type: threat
        ownership: self
        status: active
        system_type: ai-agent
        depends_on: [surf-fraud-model-api, svc-acct-claims-ai]
        tags: [ai-risk, injection]

      - id: threat-logico-supply
        icon: "⚠"
        label: "LogiCo Supply Chain"
        sub: "medium · review overdue"
        type: threat
        ownership: external
        status: active
        depends_on: [ext-logico-api, surf-logico-webhook]
        tags: [supply-chain, third-party]

      - id: threat-gdpr-breach
        icon: "⚠"
        label: "GDPR Data Breach Risk"
        sub: "medium · critical impact"
        type: threat
        ownership: self
        status: active
        classification: confidential
        depends_on: [surf-claims-portal]
        tags: [gdpr, regulatory, pii]

      - id: threat-cicd-creds
        icon: "⚠"
        label: "CI/CD Cred Sprawl"
        sub: "admin-equiv · keys-to-kingdom"
        type: threat
        ownership: self
        status: active
        classification: confidential
        depends_on: [svc-acct-cicd-deploy]
        tags: [credential-risk, admin-equivalent, cicd]
`,VE=`dimensions:
  - id: posture
    dimension_key: posture
    icon: "◉"
    name: "Posture"
    subtitle: "Compliance status and security programs"
    artifacts:
      - id: pos-gdpr
        icon: "◉"
        label: "GDPR"
        sub: "in-progress · target Jun 2025"
        type: compliance
        ownership: self
        status: active
        tags: [in-progress, pii, eu-regulatory]

      - id: pos-sox
        icon: "◉"
        label: "SOX Sec 302"
        sub: "certified · Nov 2024"
        type: compliance
        ownership: self
        status: active
        tags: [certified, financial-controls]

      - id: pos-iso27001
        icon: "◉"
        label: "ISO 27001"
        sub: "in-progress · target Dec 2025"
        type: compliance
        ownership: self
        status: active
        tags: [in-progress, certification-target]

      - id: prog-zos-sec-track
        icon: "▲"
        label: "z/OS Security Track"
        sub: "active · target Dec 2025"
        type: security_program
        ownership: self
        status: active
        depends_on: [threat-zos-eol]

      - id: prog-ai-governance
        icon: "▲"
        label: "AI Governance"
        sub: "active · target Jun 2025"
        type: security_program
        ownership: self
        status: active
        depends_on: [threat-ai-prompt-inject]

      - id: prog-cicd-hardening
        icon: "▲"
        label: "CI/CD Hardening"
        sub: "active · target Mar 2025"
        type: security_program
        ownership: self
        status: active
        depends_on: [threat-cicd-creds]
`,HE=`meta:
  organization: "ACME, INC"
  description: "Application Architecture — billing migration, AI triage, fraud detection"
  domain: insurance
  scope: enterprise
  temporal_state: transition
  as_of: "2025-01-01"
  schema_version: "1.0"
  diagramKind: app
  source: app-architecture/examples/acme-insurance/
  active_dimensions: [domains, components, integrations, quality, evolution]
  author: "ACME Engineering"
  contact: "engineering@acme.com"
  created_date: "2024-06-01"
  last_modified: "2025-01-01"
  reviewed_by: ""
  review_date: ""
  status: active
`,$E=`dimensions:
  - id: domains
    dimension_key: domains
    icon: "⬡"
    name: "Domains"
    subtitle: "Bounded contexts and ownership"
    artifacts:
      - id: dom-claims
        icon: "⬡"
        label: "Claims"
        sub: "core · AI-assisted"
        type: domain
        ownership: self
        status: active

      - id: dom-billing
        icon: "⬡"
        label: "Billing"
        sub: "supporting · migration"
        type: domain
        ownership: self
        status: active

      - id: dom-fraud
        icon: "⬡"
        label: "Fraud Detection"
        sub: "core · AI-assisted"
        type: domain
        ownership: internal
        status: active

      - id: dom-evidence
        icon: "⬡"
        label: "Evidence & Courier"
        sub: "supporting · 3rd party"
        type: domain
        ownership: external
        status: active

      - id: dom-policy
        icon: "⬡"
        label: "Policy Management"
        sub: "core · stable"
        type: domain
        ownership: self
        status: active
`,UE=`dimensions:
  - id: components
    dimension_key: components
    icon: "⊞"
    name: "Components"
    subtitle: "Services, AI models, adapters, platforms"
    artifacts:
      - id: comp-claims-portal
        icon: "↺"
        label: "Claims Portal"
        sub: "React + Spring Boot · EKS"
        type: service
        ownership: self
        status: active
        direction: inbound
        data_sensitivity: [pii]
        compliance_frameworks: [GDPR, SOX]

      - id: comp-claims-ai-triage
        icon: "⊛"
        label: "AI Claims Triage"
        sub: "Python · event-driven · RAG"
        type: service
        ownership: self
        status: active
        system_type: ai-agent
        trigger_mode: event-driven
        classification: confidential
        data_sensitivity: [pii]
        depends_on: [comp-claims-portal]

      - id: comp-billing-zos
        icon: "↺"
        label: "Billing z/OS"
        sub: "COBOL · JCL · no tests"
        type: service
        ownership: self
        status: decommissioning
        trigger_mode: manual
        data_sensitivity: [pii, spii]
        compliance_frameworks: [SOX]

      - id: comp-billing-cloud
        icon: "↺"
        label: "Cloud Billing"
        sub: "planned · event-sourced"
        type: service
        ownership: self
        status: planned

      - id: comp-fraud-scoring
        icon: "⊛"
        label: "Fraud Scoring ML"
        sub: "Python · SageMaker · SHAP"
        type: service
        ownership: internal
        status: active
        system_type: ai-agent
        classification: confidential
        data_sensitivity: [pii, spii]

      - id: comp-fraud-case-mgmt
        icon: "↺"
        label: "Fraud Case Mgmt"
        sub: "Vue + Spring Boot"
        type: service
        ownership: internal
        status: active
        data_sensitivity: [pii, spii]

      - id: comp-logico-adapter
        icon: "⇌"
        label: "LogiCo TMS Adapter"
        sub: "anti-corruption layer"
        type: service
        ownership: self
        status: active
        data_sensitivity: [pii]

      - id: comp-sap-s4hana
        icon: "▣"
        label: "SAP S/4HANA"
        sub: "vendor-managed · GL"
        type: service
        ownership: external
        status: active
`,qE=`dimensions:
  - id: integrations
    dimension_key: integrations
    icon: "⇌"
    name: "Integrations"
    subtitle: "Cross-domain contracts — APIs, events, data"
    artifacts:
      - id: int-claim-submitted
        icon: "↯"
        label: "ClaimSubmitted"
        sub: "Kafka · Avro · schema-reg"
        type: event
        ownership: self
        status: active
        direction: bidirectional
        data_sensitivity: [pii]
        depends_on: [comp-claims-portal, comp-claims-ai-triage]

      - id: int-fraud-score-event
        icon: "↯"
        label: "FraudScoreRequested"
        sub: "Kafka · cross-domain"
        type: event
        ownership: self
        status: active
        direction: bidirectional
        data_sensitivity: [pii, spii]
        depends_on: [comp-fraud-scoring, comp-fraud-case-mgmt]

      - id: int-portal-billing-api
        icon: "⇌"
        label: "Claims → Billing API"
        sub: "REST · AT RISK"
        type: api
        ownership: self
        status: active
        data_sensitivity: [pii, spii]
        depends_on: [comp-billing-zos]

      - id: int-fraud-evidence-api
        icon: "⇌"
        label: "Fraud ↔ Evidence API"
        sub: "REST · via adapter"
        type: api
        ownership: self
        status: active
        data_sensitivity: [pii]
        depends_on: [comp-logico-adapter, comp-fraud-case-mgmt]

      - id: int-logico-tms-api
        icon: "⇌"
        label: "LogiCo TMS API"
        sub: "REST · outbound · api-key"
        type: api
        ownership: external
        status: active
        direction: outbound
        data_sensitivity: [pii]
        depends_on: [comp-logico-adapter]

      - id: int-billing-sap-sync
        icon: "▤"
        label: "Billing → SAP GL Sync"
        sub: "batch · nightly · SOX"
        type: data_contract
        ownership: self
        status: active
        data_sensitivity: [spii]
        compliance_frameworks: [SOX]
        depends_on: [comp-billing-zos, comp-sap-s4hana]
`,YE=`dimensions:
  - id: quality
    dimension_key: quality
    icon: "◉"
    name: "Quality"
    subtitle: "Coverage, debt, reliability, security posture"
    artifacts:
      - id: qual-claims-portal
        icon: "◉"
        label: "Claims Portal"
        sub: "73% cov · low debt · 99.9% SLO"
        type: quality_metric
        ownership: self
        status: active

      - id: qual-billing-zos
        icon: "◉"
        label: "Billing z/OS"
        sub: "0% cov · CRITICAL debt"
        type: quality_metric
        ownership: self
        status: decommissioning
        trigger_mode: manual
        depends_on: [comp-billing-zos]

      - id: qual-fraud-scoring
        icon: "◉"
        label: "Fraud Scoring ML"
        sub: "68% cov · SHAP partial"
        type: quality_metric
        ownership: internal
        status: active
        system_type: ai-agent

      - id: qual-claims-ai-triage
        icon: "◉"
        label: "AI Claims Triage"
        sub: "55% cov · no audit log"
        type: quality_metric
        ownership: self
        status: active
        system_type: ai-agent
        depends_on: [comp-claims-ai-triage]

      - id: qual-logico-adapter
        icon: "◉"
        label: "LogiCo Adapter"
        sub: "85% cov · low debt"
        type: quality_metric
        ownership: self
        status: active
`,GE=`dimensions:
  - id: evolution
    dimension_key: evolution
    icon: "▲"
    name: "Evolution"
    subtitle: "ADRs, migrations, roadmap, deprecations"
    artifacts:
      - id: adr-kafka-backbone
        icon: "◈"
        label: "ADR: Kafka Backbone"
        sub: "Mar 2024 · throughput + replay"
        type: decision
        ownership: self
        status: active

      - id: adr-logico-acl
        icon: "◈"
        label: "ADR: Anti-Corruption Layer"
        sub: "Nov 2023 · 3rd party isolation"
        type: decision
        ownership: self
        status: active

      - id: adr-eks-compute
        icon: "◈"
        label: "ADR: EKS Primary Compute"
        sub: "Jun 2023 · AI workload control"
        type: decision
        ownership: self
        status: active

      - id: evo-billing-migration
        icon: "▲"
        label: "Billing Cloud Migration"
        sub: "active · target Dec 2025"
        type: transition_program
        ownership: self
        status: active
        depends_on: [comp-billing-zos]

      - id: evo-ai-fraud-prescreen
        icon: "▲"
        label: "AI → Fraud Pre-Screen"
        sub: "active · target Sep 2025"
        type: transition_program
        ownership: self
        status: active
        depends_on: [comp-claims-ai-triage, comp-fraud-case-mgmt]

      - id: evo-claims-portal-v2
        icon: "◈"
        label: "Claims API v2"
        sub: "planned · Jun 2025"
        type: roadmap_item
        ownership: self
        status: planned
        depends_on: [comp-claims-portal]

      - id: dep-jcl-interface
        icon: "⊘"
        label: "JCL Batch Deprecation"
        sub: "active · Dec 2025 sunset"
        type: deprecation
        ownership: self
        status: active
        depends_on: [comp-billing-zos, int-billing-sap-sync]
`,KE=`meta:
  organization: "ACME, INC"
  description: "AI Claims Triage MVP — adjudicator trust validation in progress"
  domain: insurance
  scope: product
  temporal_state: transition
  as_of: "2025-01-01"
  schema_version: "1.0"
  diagramKind: mvp
  source: mvp/examples/acme-insurance/
  active_dimensions: [market, value, bets, hypotheses, signals]
  author: "ACME Product"
  contact: "product@acme.com"
  created_date: "2024-09-01"
  last_modified: "2025-01-01"
  reviewed_by: ""
  review_date: ""
  status: draft
`,QE=`dimensions:
  - id: market
    dimension_key: market
    icon: "◎"
    name: "Market"
    subtitle: "Segments, channels, engagement models"
    artifacts:
      - id: seg-claims-adjudicators
        icon: "◎"
        label: "Claims Adjudicators"
        sub: "primary · validated"
        type: segment
        ownership: self
        status: active
        segment_type: primary
        validation_state: validated

      - id: seg-policyholders-claimants
        icon: "◎"
        label: "Policyholders (Active Claimants)"
        sub: "secondary · observed"
        type: segment
        ownership: internal
        status: active
        segment_type: secondary
        validation_state: observed

      - id: seg-manual-workflow-adjusters
        icon: "◎"
        label: "Manual-Preference Adjusters"
        sub: "negative · 8–12% workforce · excluded"
        type: segment
        ownership: external
        status: active
        segment_type: negative
        validation_state: observed

      - id: ch-claims-portal-integration
        icon: "⇌"
        label: "Claims Portal (In-Product)"
        sub: "primary channel · zero install"
        type: channel
        ownership: self
        status: active
        validation_state: validated

      - id: ch-it-rollout
        icon: "⇌"
        label: "IT-Managed Pilot Rollout"
        sub: "internal channel · managed"
        type: channel
        ownership: internal
        status: active
        validation_state: assumed

      - id: eng-embedded-workflow
        icon: "▣"
        label: "Embedded Adjudicator Workflow"
        sub: "zero-friction · auto-engaged"
        type: engagement_model
        ownership: self
        status: active
        validation_state: in-progress
`,XE=`dimensions:
  - id: value
    dimension_key: value
    icon: "◉"
    name: "Value"
    subtitle: "Problems, value propositions, differentiators"
    artifacts:
      - id: prob-triage-time
        icon: "⚠"
        label: "Manual Triage: 35% of Adjudicator Time"
        sub: "primary segment · validated"
        type: problem
        ownership: self
        status: active
        validation_state: validated

      - id: prob-routing-errors
        icon: "⚠"
        label: "High-Severity Claims Mis-Routed"
        sub: "14% error rate · observed · $2.1M/yr"
        type: problem
        ownership: self
        status: active
        validation_state: observed

      - id: prob-status-anxiety
        icon: "⚠"
        label: "No Visibility Into Claim Progress"
        sub: "secondary segment · 42% support calls · observed"
        type: problem
        ownership: internal
        status: active
        validation_state: observed

      - id: vp-ai-triage-score
        icon: "◉"
        label: "AI Severity Score at Intake"
        sub: "pain relief · adjudicators · in testing"
        type: value_proposition
        ownership: self
        status: active
        validation_state: in-progress

      - id: vp-intelligent-routing
        icon: "◉"
        label: "AI Routing Recommendation"
        sub: "pain relief · <3% mis-routing target"
        type: value_proposition
        ownership: self
        status: active
        validation_state: in-progress

      - id: vp-self-serve-status
        icon: "◉"
        label: "Self-Serve Status Updates"
        sub: "pain relief · policyholders · assumed"
        type: value_proposition
        ownership: internal
        status: active
        validation_state: assumed

      - id: diff-embedded-not-separate
        icon: "◆"
        label: "Zero-Friction Embedded Workflow"
        sub: "no context switch · existing portal"
        type: differentiator
        ownership: self
        status: active

      - id: diff-explainability
        icon: "◆"
        label: "SHAP Explanations on Every Score"
        sub: "trust driver · why not just what"
        type: differentiator
        ownership: self
        status: active
`,JE=`dimensions:
  - id: bets
    dimension_key: bets
    icon: "▸"
    name: "Bets"
    subtitle: "Must/should/could investment decisions and exclusions"
    artifacts:
      - id: bet-ai-intake-scoring
        icon: "▸"
        label: "AI Severity Score at Intake"
        sub: "MUST · active · AI bet"
        type: bet
        ownership: self
        status: active
        tier: must
        ai_specific: true
        depends_on: [hyp-adjuster-trust-threshold, hyp-ai-accuracy-threshold]

      - id: bet-routing-recommendation
        icon: "▸"
        label: "Routing Recommendation Engine"
        sub: "MUST · active"
        type: bet
        ownership: self
        status: active
        tier: must
        depends_on: [hyp-routing-accuracy]

      - id: bet-shap-explainability
        icon: "▸"
        label: "SHAP Explanation Overlay"
        sub: "SHOULD · active · AI bet"
        type: bet
        ownership: self
        status: active
        tier: should
        ai_specific: true
        depends_on: [hyp-explainability-trust-link]

      - id: bet-policyholder-status
        icon: "▸"
        label: "Policyholder Self-Serve Status"
        sub: "COULD · parked · phase 2"
        type: bet
        ownership: internal
        status: active
        tier: could
        bet_status: parked
        depends_on: [hyp-policyholder-self-serve-preference]

      - id: excl-automated-settlement
        icon: "⊘"
        label: "Automated Settlement Decision"
        sub: "excluded · regulatory + trust"
        type: exclusion
        ownership: self
        status: active

      - id: excl-fraud-scoring
        icon: "⊘"
        label: "Fraud Scoring at Intake"
        sub: "excluded · domain boundary"
        type: exclusion
        ownership: internal
        status: active

      - id: alt-rules-based-triage
        icon: "↯"
        label: "Rules-Based Triage"
        sub: "evaluated · rejected · 61% accuracy"
        type: alternative
        ownership: self
        status: active

      - id: alt-external-ai-vendor
        icon: "↯"
        label: "Third-Party AI Vendor (SaaS)"
        sub: "evaluated · rejected · 3 vendors"
        type: alternative
        ownership: external
        status: active
`,ZE=`dimensions:
  - id: hypotheses
    dimension_key: hypotheses
    icon: "⊛"
    name: "Hypotheses"
    subtitle: "Assumptions, risks, unknowns"
    artifacts:
      - id: hyp-adjuster-trust-threshold
        icon: "⊛"
        label: "Adjuster Trust Above 85% Accuracy"
        sub: "usability · critical · in testing"
        type: assumption
        ownership: self
        status: active
        assumption_type: usability
        risk_level: critical
        validation_state: in-progress

      - id: hyp-ai-accuracy-threshold
        icon: "⊛"
        label: "Model Achieves >85% Accuracy"
        sub: "AI behavior · critical · validated ✓"
        type: assumption
        ownership: self
        status: active
        assumption_type: ai-behavior
        risk_level: critical
        validation_state: validated

      - id: hyp-explainability-trust-link
        icon: "⊛"
        label: "SHAP Explanations Increase Trust"
        sub: "usability · high · in testing"
        type: assumption
        ownership: self
        status: active
        assumption_type: usability
        risk_level: high
        validation_state: in-progress

      - id: hyp-routing-accuracy
        icon: "⊛"
        label: "AI Routing <3% Mis-Routing Rate"
        sub: "viability · high · in testing"
        type: assumption
        ownership: self
        status: active
        assumption_type: viability
        risk_level: high
        validation_state: in-progress

      - id: hyp-policyholder-self-serve-preference
        icon: "⊛"
        label: "Policyholders Prefer Self-Serve"
        sub: "desirability · medium · assumed"
        type: assumption
        ownership: internal
        status: active
        assumption_type: desirability
        risk_level: medium
        validation_state: assumed

      - id: risk-trust-failure
        icon: "⚠"
        label: "Adjusters Reject AI → Abandoned"
        sub: "critical risk · override rate watch"
        type: risk
        ownership: self
        status: active
        risk_level: critical
        depends_on: [hyp-adjuster-trust-threshold]

      - id: risk-model-drift
        icon: "⚠"
        label: "Model Accuracy Degrades (Drift)"
        sub: "high risk · monthly monitoring"
        type: risk
        ownership: self
        status: active
        risk_level: high
        depends_on: [hyp-ai-accuracy-threshold]

      - id: unk-adjuster-workload-context
        icon: "◐"
        label: "Trust Vary by Workload Level?"
        sub: "open question · pilot design"
        type: unknown
        ownership: self
        status: active

      - id: unk-regulatory-ai-disclosure
        icon: "◐"
        label: "AI Disclosure Required by Regulators?"
        sub: "open question · legal review pending"
        type: unknown
        ownership: self
        status: active
`,e2=`dimensions:
  - id: signals
    dimension_key: signals
    icon: "◈"
    name: "Signals"
    subtitle: "Metrics, experiments, results, learnings, pivots"
    artifacts:
      - id: metric-time-to-first-decision
        icon: "◈"
        label: "Time-to-First-Decision"
        sub: "north star · 4.2 days → <2.0 target"
        type: metric
        ownership: self
        status: active
        metric_type: north_star

      - id: metric-ai-accuracy
        icon: "◈"
        label: "AI Model Accuracy"
        sub: "guardrail · ≥87% required · 89.1% now"
        type: metric
        ownership: self
        status: active
        metric_type: guardrail
        depends_on: [hyp-ai-accuracy-threshold]

      - id: metric-manual-override-rate
        icon: "◈"
        label: "Manual Override Rate"
        sub: "guardrail · <40% target · pilot metric"
        type: metric
        ownership: self
        status: active
        metric_type: guardrail
        depends_on: [hyp-adjuster-trust-threshold]

      - id: metric-triage-time-saved
        icon: "◈"
        label: "Adjudicator Triage Time Saved"
        sub: "diagnostic · 2.8h → <1.5h target"
        type: metric
        ownership: self
        status: active
        metric_type: diagnostic
        depends_on: [hyp-adjuster-trust-threshold]

      - id: exp-adjudicator-pilot-cohort
        icon: "↺"
        label: "30-Adjudicator Pilot Cohort"
        sub: "beta · 4 weeks · pending"
        type: experiment
        ownership: self
        status: active
        result_state: pending
        depends_on: [bet-ai-intake-scoring]

      - id: exp-shap-ab-test
        icon: "↺"
        label: "SHAP A/B Test (Within Pilot)"
        sub: "a/b test · n=500 · pending"
        type: experiment
        ownership: self
        status: active
        result_state: pending
        depends_on: [bet-shap-explainability]

      - id: exp-model-backtest
        icon: "↺"
        label: "AI Model Historical Backtest"
        sub: "shadow · n=12,400 · supports"
        type: experiment
        ownership: self
        status: active
        result_state: supports
        depends_on: [bet-ai-intake-scoring]

      - id: result-model-accuracy-89pct
        icon: "▤"
        label: "Model: 89.1% Accuracy"
        sub: "supports · high confidence · completed"
        type: result
        ownership: self
        status: active
        result_state: supports
        depends_on: [exp-model-backtest]

      - id: learn-model-accuracy-89pct
        icon: "▲"
        label: "Feasibility Gate Cleared"
        sub: "pilot green-light · false negative watch"
        type: learning
        ownership: self
        status: active
        depends_on: [result-model-accuracy-89pct]

      - id: pivot-status-page-parked
        icon: "⬡"
        label: "Status Page Parked → Zoom In"
        sub: "zoom-in · adjudicator first"
        type: pivot
        ownership: self
        status: active
        pivot_type: zoom-in
        depends_on: [learn-model-accuracy-89pct]
`,n2=`meta:
  organization: "ACME, INC"
  description: "Enterprise Data Architecture — AI Claims Triage support layers"
  diagramKind: dt
  source: data-architecture/examples/acme-insurance/
  temporal_state: baseline
  as_of: "2025-01-01"
  schema_version: "1.0"
  active_dimensions: [domains, flows, platforms, contracts, governance]
  author: "ACME Data Engineering"
  contact: "data-engineering@acme.com"
  created_date: "2024-06-01"
  last_modified: "2025-01-01"
  reviewed_by: ""
  review_date: ""
  status: active
`,t2=`dimensions:
  - id: domains
    dimension_key: domains
    icon: "⬡"
    name: "Domains"
    subtitle: "Data ownership, bounded contexts, and data products"
    artifacts:
      - id: dom-claims
        icon: "⬡"
        label: "Claims Data Domain"
        sub: "source · restricted · SPII+PII+PHI"
        type: data_domain
        ownership: self
        status: active
        domain_type: source
        data_classification: restricted
        data_sensitivity: [spii, pii, phi]
        compliance_frameworks:
          - framework: HIPAA
          - framework: APRA

      - id: dom-policy
        icon: "⬡"
        label: "Policy Data Domain"
        sub: "source · confidential · PII"
        type: data_domain
        ownership: internal
        status: active
        domain_type: source
        data_classification: confidential
        data_sensitivity: [pii]
        compliance_frameworks:
          - framework: CCPA

      - id: dom-customer
        icon: "⬡"
        label: "Customer Domain"
        sub: "aggregate · confidential · PII"
        type: data_domain
        ownership: internal
        status: active
        domain_type: aggregate
        data_classification: confidential
        data_sensitivity: [pii]

      - id: dom-ai-features
        icon: "⬡"
        label: "AI Feature Store Domain"
        sub: "derived · confidential · AI Engineering"
        type: data_domain
        ownership: self
        status: active
        domain_type: derived
        data_classification: confidential
        data_sensitivity: [pii]
        depends_on: [dom-claims, dom-policy]

      - id: dp-triage-features
        icon: "◉"
        label: "Triage Feature Vectors"
        sub: "data product · v1.2 · 125 dimensions"
        type: data_product
        ownership: self
        status: active
        data_classification: confidential
        depends_on: [dom-ai-features]

      - id: dp-claims-analytics
        icon: "◉"
        label: "Claims Outcomes Analytics"
        sub: "data product · anonymized · internal"
        type: data_product
        ownership: internal
        status: active
        data_classification: internal
        depends_on: [dom-claims]
`,i2=`dimensions:
  - id: flows
    dimension_key: flows
    icon: "↺"
    name: "Flows"
    subtitle: "Pipelines, event streams, and data movement"
    artifacts:
      - id: flow-claims-intake
        icon: "↺"
        label: "Claims Intake Event Stream"
        sub: "Kafka · real-time · <500ms"
        type: event_stream
        ownership: self
        status: active
        data_sensitivity: [spii, pii, phi]

      - id: flow-policy-sync
        icon: "↺"
        label: "Policy Nightly Sync"
        sub: "batch · daily · T+6h SLA"
        type: pipeline
        ownership: internal
        status: active
        data_sensitivity: [pii]

      - id: flow-feature-pipeline
        icon: "↺"
        label: "Claims Feature Pipeline"
        sub: "Spark · hourly · T+1h"
        type: pipeline
        ownership: self
        status: active
        data_sensitivity: [pii]
        depends_on: [flow-claims-intake, flow-policy-sync]

      - id: flow-model-serving
        icon: "↺"
        label: "Model Serving API"
        sub: "sync · real-time · <200ms p99"
        type: data_api
        ownership: self
        status: active
        depends_on: [flow-feature-pipeline]

      - id: flow-dbt-analytics
        icon: "↺"
        label: "dbt Analytics Pipeline"
        sub: "dbt · daily · T+24h"
        type: pipeline
        ownership: internal
        status: active
`,r2=`dimensions:
  - id: platforms
    dimension_key: platforms
    icon: "▣"
    name: "Platforms"
    subtitle: "Data storage and processing infrastructure"
    artifacts:
      - id: plat-delta-lake
        icon: "▣"
        label: "Delta Lake (Raw Ingestion)"
        sub: "AWS S3 + Delta Lake · lake · restricted"
        type: data_lake
        ownership: self
        status: active
        data_classification: restricted
        compliance_frameworks:
          - framework: HIPAA
          - framework: APRA

      - id: plat-snowflake
        icon: "▣"
        label: "Snowflake (Analytics)"
        sub: "Snowflake · warehouse · confidential max"
        type: data_warehouse
        ownership: external
        status: active
        data_classification: confidential
        compliance_frameworks:
          - framework: CCPA

      - id: plat-kafka
        icon: "▣"
        label: "Confluent Kafka"
        sub: "Confluent Cloud · stream · real-time"
        type: stream_platform
        ownership: external
        status: active
        data_classification: restricted
        compliance_frameworks:
          - framework: HIPAA

      - id: plat-feast
        icon: "▣"
        label: "Feast Feature Store"
        sub: "Feast · feature store · online + offline"
        type: feature_store
        ownership: self
        status: active
        data_classification: confidential

      - id: plat-redis
        icon: "▣"
        label: "Redis (Feature Cache)"
        sub: "ElastiCache Redis · cache · <10ms"
        type: data_cache
        ownership: self
        status: active
        data_classification: confidential
`,a2=`dimensions:
  - id: contracts
    dimension_key: contracts
    icon: "▤"
    name: "Contracts"
    subtitle: "Schema agreements, SLAs, and quality rules"
    artifacts:
      - id: contract-claims-schema
        icon: "▤"
        label: "Claims Schema v2.3"
        sub: "enforced · Claims Ops → Data Eng"
        type: data_contract
        ownership: self
        status: active
        contract_state: enforced
        enforcement: enforced

      - id: contract-feature-vector
        icon: "▤"
        label: "Feature Vector Contract v1.0"
        sub: "breaking · Feature Pipeline → AI Model"
        type: data_contract
        ownership: self
        status: active
        contract_state: enforced
        enforcement: breaking
        depends_on: [contract-claims-schema]

      - id: contract-model-output
        icon: "▤"
        label: "Model Output Schema"
        sub: "agreed · AI Model → Claims Portal"
        type: data_contract
        ownership: self
        status: active
        contract_state: agreed
        enforcement: enforced
        depends_on: [contract-feature-vector]

      - id: sla-analytics-freshness
        icon: "▤"
        label: "Analytics Freshness SLA"
        sub: "advisory · T+24h · BI team"
        type: sla
        ownership: internal
        status: active
        contract_state: agreed
        enforcement: advisory
`,o2=`dimensions:
  - id: governance
    dimension_key: governance
    icon: "⊘"
    name: "Governance"
    subtitle: "PII registers, access policies, retention, and compliance"
    artifacts:
      - id: gov-pii-claimant
        icon: "⊘"
        label: "Claimant PII Register"
        sub: "PII · restricted · CCPA + APRA"
        type: pii_register
        ownership: self
        status: active
        data_classification: restricted
        data_sensitivity: [pii]
        compliance_frameworks:
          - framework: CCPA
          - framework: APRA

      - id: gov-spii-medical
        icon: "⊘"
        label: "Medical SPII / PHI Register"
        sub: "SPII · PHI · restricted · HIPAA"
        type: pii_register
        ownership: self
        status: active
        data_classification: restricted
        data_sensitivity: [spii, phi]
        compliance_frameworks:
          - framework: HIPAA
          - framework: APRA

      - id: gov-retention-claims
        icon: "⊘"
        label: "Claims Retention — 7 Years"
        sub: "7yr · APRA + State regulatory"
        type: retention_rule
        ownership: self
        status: active
        data_classification: restricted
        compliance_frameworks:
          - framework: APRA

      - id: gov-access-ai-eng
        icon: "⊘"
        label: "AI Eng Access Policy"
        sub: "READ-only · no direct PHI · audited"
        type: access_policy
        ownership: self
        status: active
        data_classification: restricted

      - id: gov-hipaa-baa
        icon: "⊘"
        label: "HIPAA BAA"
        sub: "AWS + Confluent + Snowflake"
        type: compliance_control
        ownership: self
        status: active
        data_classification: restricted
        compliance_frameworks:
          - framework: HIPAA

      - id: gov-lineage-claims-model
        icon: "⊘"
        label: "Claims → Model Lineage Map"
        sub: "end-to-end · audit evidence"
        type: lineage_map
        ownership: self
        status: active
        depends_on: [dom-claims, flow-claims-intake, plat-delta-lake, flow-feature-pipeline, plat-feast, flow-model-serving]
`,s2=`meta:
  organization: "ACME, INC"
  description: "AI Claims Triage — models, trust, and observability in transition"
  diagramKind: ai
  source: ai-architecture/examples/acme-insurance/
  temporal_state: transition
  as_of: "2025-01-01"
  schema_version: "1.0"
  active_dimensions: [models, systems, lifecycle, trust, observability]
  author: "ACME AI Platform"
  contact: "ai-platform@acme.com"
  created_date: "2024-09-01"
  last_modified: "2025-01-01"
  reviewed_by: ""
  review_date: ""
  status: draft
`,l2=`dimensions:
  - id: models
    dimension_key: models
    icon: "⊛"
    name: "Models"
    subtitle: "AI models, embeddings, and explainability layers"
    artifacts:
      - id: model-severity-scoring
        icon: "⊛"
        label: "Claims Severity Model"
        sub: "XGBoost ensemble · v2.1 · 89.1% accuracy"
        type: custom_model
        ownership: self
        status: active
        ai_model: true
        model_provider: proprietary
        lifecycle_stage: production

      - id: model-routing-classifier
        icon: "⊛"
        label: "Routing Classifier"
        sub: "LightGBM · v1.3 · canary"
        type: custom_model
        ownership: self
        status: active
        ai_model: true
        model_provider: proprietary
        lifecycle_stage: staging
        depends_on: [model-severity-scoring]

      - id: model-nlp-extractor
        icon: "⊛"
        label: "Claims NLP Extractor"
        sub: "spaCy fine-tuned · v3.0 · <50ms"
        type: custom_model
        ownership: self
        status: active
        ai_model: true
        model_provider: open-source
        lifecycle_stage: production

      - id: model-shap-explainer
        icon: "⊛"
        label: "SHAP Explainability Layer"
        sub: "SHAP v0.44 · wraps severity model"
        type: explainability_layer
        ownership: self
        status: active
        model_provider: open-source
        lifecycle_stage: production
        depends_on: [model-severity-scoring]

      - id: model-policy-embeddings
        icon: "⊛"
        label: "Policy Text Embeddings"
        sub: "text-embedding-3-small · research"
        type: embedding_model
        ownership: external
        status: active
        ai_model: true
        model_provider: openai
        lifecycle_stage: research
`,c2=`dimensions:
  - id: systems
    dimension_key: systems
    icon: "⊞"
    name: "Systems"
    subtitle: "AI-powered applications, agents, and services"
    artifacts:
      - id: sys-triage-service
        icon: "⊞"
        label: "Claims Triage AI Service"
        sub: "scoring + routing · human-in-loop"
        type: ai_system
        ownership: self
        status: active
        lifecycle_stage: production
        human_in_loop: true
        depends_on: [model-severity-scoring, model-routing-classifier, model-nlp-extractor]

      - id: sys-adjudicator-copilot
        icon: "⊞"
        label: "Adjudicator Copilot UI"
        sub: "SHAP overlay · human-in-loop · pilot"
        type: copilot
        ownership: self
        status: active
        lifecycle_stage: production
        human_in_loop: true
        depends_on: [sys-triage-service, model-shap-explainer]

      - id: sys-routing-engine
        icon: "⊞"
        label: "Routing Recommendation Engine"
        sub: "classifier · 10% canary · staging"
        type: classifier_service
        ownership: self
        status: active
        lifecycle_stage: staging
        human_in_loop: true
        depends_on: [model-routing-classifier]

      - id: sys-policy-rag
        icon: "⊞"
        label: "Policy RAG Chatbot (Planned)"
        sub: "RAG · research · GPT-4o"
        type: rag_pipeline
        ownership: self
        status: active
        lifecycle_stage: research
        human_in_loop: true
        depends_on: [model-policy-embeddings]
`,u2=`dimensions:
  - id: lifecycle
    dimension_key: lifecycle
    icon: "↺"
    name: "Lifecycle"
    subtitle: "Training, evaluation, deployment, and monitoring"
    artifacts:
      - id: lc-monthly-retrain
        icon: "↺"
        label: "Monthly Model Retraining"
        sub: "Airflow · monthly · SageMaker"
        type: training_run
        ownership: self
        status: active
        lifecycle_stage: production
        depends_on: [model-severity-scoring]

      - id: lc-severity-eval
        icon: "↺"
        label: "Severity Eval Suite"
        sub: "holdout + backtest · n=12,400"
        type: eval_suite
        ownership: self
        status: active
        lifecycle_stage: production
        depends_on: [lc-monthly-retrain, model-severity-scoring]

      - id: lc-canary-deploy
        icon: "↺"
        label: "Canary Deployment"
        sub: "10% → full · 2-week · blue-green"
        type: deployment
        ownership: self
        status: active
        lifecycle_stage: staging
        depends_on: [lc-severity-eval, model-routing-classifier]

      - id: lc-drift-monitor
        icon: "↺"
        label: "Feature Drift Monitor"
        sub: "PSI weekly · top-20 features"
        type: monitoring_job
        ownership: self
        status: active
        lifecycle_stage: production
        depends_on: [model-severity-scoring]
`,d2=`dimensions:
  - id: trust
    dimension_key: trust
    icon: "⊘"
    name: "Trust"
    subtitle: "Guardrails, bias controls, red-team findings, and alignment"
    artifacts:
      - id: trust-accuracy-guardrail
        icon: "⊘"
        label: "Accuracy Guardrail ≥87%"
        sub: "blocking · accuracy · critical"
        type: guardrail
        ownership: self
        status: active
        trust_type: accuracy
        enforcement: blocking
        severity: critical
        depends_on: [model-severity-scoring, lc-severity-eval]

      - id: trust-demographic-parity
        icon: "⊘"
        label: "Demographic Parity Assessment"
        sub: "alerting · fairness · quarterly"
        type: bias_assessment
        ownership: self
        status: active
        trust_type: fairness
        enforcement: alerting
        severity: high
        depends_on: [model-severity-scoring]

      - id: trust-shap-required
        icon: "⊘"
        label: "SHAP Mandatory for Adjudicators"
        sub: "blocking · explainability · enforced"
        type: explainability_config
        ownership: self
        status: active
        trust_type: explainability
        enforcement: blocking
        severity: high
        depends_on: [model-shap-explainer, sys-adjudicator-copilot]

      - id: trust-human-override
        icon: "⊘"
        label: "Human Override Always Available"
        sub: "alignment · one-click · no lock-in"
        type: alignment_control
        ownership: self
        status: active
        trust_type: alignment
        enforcement: blocking
        severity: critical
        depends_on: [sys-adjudicator-copilot, sys-triage-service]

      - id: trust-rt-crafted-text
        icon: "⊘"
        label: "Red Team: Crafted Text Skews Score"
        sub: "medium · mitigated · logging"
        type: red_team_finding
        ownership: internal
        status: active
        trust_type: safety
        enforcement: logging
        severity: medium
        depends_on: [model-nlp-extractor, model-severity-scoring]
`,p2=`dimensions:
  - id: observability
    dimension_key: observability
    icon: "◈"
    name: "Observability"
    subtitle: "Production metrics, drift detection, alerts, and incidents"
    artifacts:
      - id: obs-accuracy-eval
        icon: "◈"
        label: "Daily Accuracy Evaluation"
        sub: "89.1% current · threshold 87%"
        type: eval_metric
        ownership: self
        status: active
        signal_type: accuracy
        depends_on: [model-severity-scoring, lc-severity-eval]

      - id: obs-inference-latency
        icon: "◈"
        label: "Inference Latency P99"
        sub: "145ms current · threshold 200ms"
        type: eval_metric
        ownership: self
        status: active
        signal_type: latency
        depends_on: [sys-triage-service]

      - id: obs-override-rate
        icon: "◈"
        label: "Manual Override Rate"
        sub: "44% current · target <40%"
        type: eval_metric
        ownership: self
        status: active
        signal_type: override-rate
        depends_on: [sys-adjudicator-copilot, sys-triage-service]

      - id: obs-drift-detector
        icon: "◈"
        label: "Feature Drift Detector"
        sub: "PSI max 0.08 · no drift"
        type: drift_detector
        ownership: self
        status: active
        signal_type: drift
        depends_on: [model-severity-scoring, lc-drift-monitor]

      - id: obs-incident-false-high
        icon: "◈"
        label: "Incident: False-High Score"
        sub: "resolved · multi-claimant case"
        type: ai_incident
        ownership: self
        status: active
        signal_type: accuracy
        depends_on: [model-severity-scoring]
`,f2={config:IE,"P-people-place":AE,"R-reality":CE,"I-intent":PE,"S-signal":_E,"M-movement":EE},h2={config:TE,who:RE,where:ME,runtime:DE,state:LE,control:NE,operations:jE},m2={config:OE,identity:FE,surface:zE,controls:BE,threats:WE,posture:VE},g2={config:HE,domains:$E,components:UE,integrations:qE,quality:YE,evolution:GE},y2={config:KE,market:QE,value:XE,bets:JE,hypotheses:ZE,signals:e2},v2={config:n2,domains:t2,flows:i2,platforms:r2,contracts:a2,governance:o2},b2={config:s2,models:l2,systems:c2,lifecycle:u2,trust:d2,observability:p2},w2=_t(f2),x2=_t(h2),k2=_t(m2),S2=_t(g2),I2=_t(y2),A2=_t(v2),C2=_t(b2),P2={ea:{label:"PRISM",subtitle:"Enterprise Architecture Landscape Framework",dimCount:"5 layers"},infra:{label:"PRISM/I",subtitle:"Infrastructure Landscape Framework",dimCount:"6 dimensions"},cy:{label:"PRISM/CY",subtitle:"Cybersecurity Landscape Framework",dimCount:"5 dimensions"},app:{label:"PRISM/A",subtitle:"Application Architecture Landscape Framework",dimCount:"5 dimensions"},mvp:{label:"PRISM/MVP",subtitle:"Product Validation Landscape Framework",dimCount:"5 dimensions"},dt:{label:"PRISM/D",subtitle:"Data Architecture Landscape Framework",dimCount:"5 dimensions"},ai:{label:"PRISM/AI",subtitle:"AI Architecture Landscape Framework",dimCount:"5 dimensions"}},_2=[["ea","EA"],["infra","Infra"],["cy","CY"],["app","App"],["mvp","MVP"],["dt","Data"],["ai","AI"]];function E2(){var pe;const[e,n]=V.useState("landing"),[t,i]=V.useState("ea"),[r,a]=V.useState("ea"),[o,s]=V.useState("view"),[l,c]=V.useState(null),[d,u]=V.useState(w2),[p,f]=V.useState(x2),[m,b]=V.useState(k2),[A,y]=V.useState(S2),[g,v]=V.useState(I2),[I,P]=V.useState(A2),[S,_]=V.useState(C2),R=r==="ea"?d:r==="infra"?p:r==="cy"?m:r==="mvp"?g:r==="dt"?I:r==="ai"?S:A,F=(pe=R.config)==null?void 0:pe.raw,k=V.useMemo(()=>nS(F,R),[F,R]),{meta:T={},dimensions:z=[]}=k,G=z.reduce((C,be)=>{var Ge;return C+(((Ge=be.artifacts)==null?void 0:Ge.length)||0)},0),Q=V.useMemo(()=>z.flatMap(C=>C.artifacts||[]),[z]),N=Q.filter(C=>["ai-agent","llm","agentic-workflow"].includes(C.system_type)).length,q=Q.filter(C=>C.status==="decommissioning"||C.status==="decommissioned").length,ne=Q.filter(C=>C.execution_mode==="manual"||C.trigger_mode==="manual"&&!C.execution_mode).length,M=P2[r];function H(C){c(be=>be===C||C===null?null:C)}function w(C){a(C),c(null)}function B(C,be){({ea:u,infra:f,cy:b,app:y,mvp:v,dt:P,ai:_})[r](Te=>tS(Te,C,be))}function $({framework:C,layerRaws:be}){const Te={ea:u,infra:f,cy:b,app:y,mvp:v,dt:P,ai:_}[C];Te&&(Te(_t(be)),a(C),c(null))}const x=T.diagramKind||r;if(e==="landing")return h.jsx(mS,{onEnter:()=>n("viewer"),onEnterWith:C=>{w(C),n("viewer")},onAbout:()=>n("about"),onViewSpec:C=>{i(C),n("spec")}});if(e==="about")return h.jsx(gS,{onBack:()=>n("landing")});if(e==="spec")return h.jsx(wE,{framework:t,onBack:()=>n("landing")});const oe=h.jsx("div",{className:"border-b border-sol-base2 px-8 py-5 bg-sol-base2 flex-shrink-0",children:h.jsxs("div",{className:"flex items-end justify-between flex-wrap gap-4",children:[h.jsxs("div",{className:"flex items-end gap-5 flex-wrap",children:[h.jsx("div",{children:h.jsxs("div",{className:"flex items-center gap-3",children:[h.jsxs("svg",{width:"44",height:"44",viewBox:"-5 -5 110 110",fill:"none",stroke:"#586e75",strokeWidth:"5.5",strokeLinejoin:"round",children:[h.jsx("polygon",{points:"50,0 93.3,25 93.3,75 50,100 6.7,75 6.7,25"}),h.jsx("polygon",{points:"50,25 71.65,37.5 71.65,62.5 50,75 28.35,62.5 28.35,37.5"}),h.jsx("line",{x1:"50",y1:"0",x2:"50",y2:"25"}),h.jsx("line",{x1:"93.3",y1:"25",x2:"71.65",y2:"37.5"}),h.jsx("line",{x1:"93.3",y1:"75",x2:"71.65",y2:"62.5"}),h.jsx("line",{x1:"50",y1:"100",x2:"50",y2:"75"}),h.jsx("line",{x1:"6.7",y1:"75",x2:"28.35",y2:"62.5"}),h.jsx("line",{x1:"6.7",y1:"25",x2:"28.35",y2:"37.5"})]}),h.jsxs("div",{children:[h.jsx("h1",{className:"font-clay font-bold text-5xl text-sol-base00 leading-none tracking-wide",children:M.label}),h.jsx("p",{className:"font-clay text-sol-base1 text-base mt-1 leading-tight",children:M.subtitle})]})]})}),h.jsxs("div",{className:"pl-5 pb-0.5",style:{borderLeft:"2px solid #93a1a1"},children:[h.jsx("div",{className:"font-clay font-bold text-3xl text-sol-base00 leading-tight",children:T.organization||"ACME, INC"}),h.jsx("div",{className:"font-body text-xs text-sol-base1 mt-0.5",children:T.description}),h.jsxs("div",{className:"flex gap-2 mt-2 flex-wrap",children:[N>0&&h.jsxs("span",{className:"font-body text-xs px-2 py-0.5 rounded-full font-semibold",style:{background:"#d4d0f0",color:"#6c71c4"},children:["✦ ",N," AI"]}),q>0&&h.jsxs("span",{className:"font-body text-xs px-2 py-0.5 rounded-full font-semibold",style:{background:"#f5cba7",color:"#9a3500"},children:["⚠ ",q," decomm."]}),ne>0&&h.jsxs("span",{className:"font-body text-xs px-2 py-0.5 rounded-full font-semibold",style:{background:"#faeeb5",color:"#7a5c00"},children:["🤚 ",ne," manual"]}),T.status&&h.jsx("span",{className:"font-body text-xs px-2 py-0.5 rounded-full font-semibold",style:{background:T.status==="active"?"#c3e6cb":T.status==="archived"?"#e2e3e5":"#fff3cd",color:T.status==="active"?"#155724":T.status==="archived"?"#495057":"#856404"},children:T.status})]}),(T.author||T.reviewed_by)&&h.jsxs("div",{className:"flex gap-3 mt-1 flex-wrap",children:[T.author&&h.jsx("span",{className:"font-body text-xs text-sol-base1",children:T.author}),T.reviewed_by&&h.jsxs("span",{className:"font-body text-xs text-sol-base1 opacity-60",children:["reviewed: ",T.reviewed_by]})]})]})]}),h.jsxs("div",{className:"flex flex-col items-end gap-3",children:[h.jsxs("div",{className:"flex gap-2 items-center flex-wrap",children:[h.jsx("button",{onClick:()=>n("landing"),className:"font-clay font-semibold text-sm px-3 py-1.5 rounded-lg text-sol-base1 hover:text-sol-base00 transition-colors",title:"Back to home",children:"← Home"}),h.jsx("div",{className:"flex gap-1 p-1 rounded-xl",style:{backgroundColor:"#d9d4c0"},children:["view","edit"].map(C=>h.jsx("button",{onClick:()=>s(C),className:`font-clay font-semibold text-sm px-3 py-1.5 rounded-lg transition-colors capitalize ${o===C?"bg-sol-base00 text-sol-base3 shadow-sm":"text-sol-base1 hover:text-sol-base00"}`,children:C},C))}),h.jsx("div",{className:"flex gap-1 p-1 rounded-xl",style:{backgroundColor:"#d9d4c0"},children:_2.map(([C,be])=>h.jsx("button",{onClick:()=>w(C),className:`font-clay font-semibold text-sm px-3 py-1.5 rounded-lg transition-colors ${r===C?"bg-sol-base00 text-sol-base3 shadow-sm":"text-sol-base1 hover:text-sol-base00"}`,children:be},C))}),h.jsx(SE,{profile:r,layerStates:R,onImport:$})]}),h.jsxs("div",{className:"text-right font-body text-xs text-sol-base1 space-y-0.5",children:[h.jsxs("div",{children:["Temporal: ",h.jsx("span",{className:"text-sol-base00 font-semibold",children:T.temporal_state})," · ",T.as_of]}),h.jsxs("div",{children:[z.length," dimensions · ",M.dimCount," · ",G," artifacts"]}),h.jsxs("div",{className:"text-sol-base1 opacity-60",children:[M.label," v",T.schema_version]})]})]})]})});return o==="edit"?h.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100vh",overflow:"hidden"},children:[oe,h.jsxs("div",{style:{display:"flex",flex:1,overflow:"hidden"},children:[h.jsx("div",{style:{width:"40%",minWidth:"320px",flexShrink:0,overflow:"hidden"},children:h.jsx(fS,{diagramKind:x,layerStates:R,onLayerChange:B})}),h.jsx("div",{style:{flex:1,overflow:"hidden",position:"relative"},children:h.jsx(ip,{landscape:k,profile:r,selectedId:l,onSelect:H})})]})]}):h.jsxs("div",{className:`min-h-screen bg-sol-base3 flex flex-col ${l?"pb-32":""}`,children:[oe,h.jsx(ip,{landscape:k,profile:r,selectedId:l,onSelect:H})]})}Ys.createRoot(document.getElementById("root")).render(h.jsx(E2,{}));
