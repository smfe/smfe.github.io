var domain = "https://s3-ap-southeast-1.amazonaws.com/directedbyyou-dev.com/";
var refDomain = "";
var customUrl = domain + "data/custom-url.xml";

// var domain = "https://s3-ap-southeast-1.amazonaws.com/directedbyyou-prd.com/";
// var domain = "https://s3-ap-southeast-1.amazonaws.com/directedbyyou-stg.com/";


!function(a,b){"object"==typeof exports&&"undefined"!=typeof module?module.exports=b():"function"==typeof define&&define.amd?define(b):a.moment=b()}(this,function(){"use strict";function b(){return a.apply(null,arguments)}function c(b){a=b}function d(a){return a instanceof Array||"[object Array]"===Object.prototype.toString.call(a)}function e(a){return null!=a&&"[object Object]"===Object.prototype.toString.call(a)}function f(a){var b;for(b in a)return!1;return!0}function g(a){return a instanceof Date||"[object Date]"===Object.prototype.toString.call(a)}function h(a,b){var d,c=[];for(d=0;d<a.length;++d)c.push(b(a[d],d));return c}function i(a,b){return Object.prototype.hasOwnProperty.call(a,b)}function j(a,b){for(var c in b)i(b,c)&&(a[c]=b[c]);return i(b,"toString")&&(a.toString=b.toString),i(b,"valueOf")&&(a.valueOf=b.valueOf),a}function k(a,b,c,d){return Hc(a,b,c,d,!0).utc()}function l(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],meridiem:null}}function m(a){return null==a._pf&&(a._pf=l()),a._pf}function o(a){if(null==a._isValid){var b=m(a),c=n.call(b.parsedDateParts,function(a){return null!=a}),d=!isNaN(a._d.getTime())&&b.overflow<0&&!b.empty&&!b.invalidMonth&&!b.invalidWeekday&&!b.nullInput&&!b.invalidFormat&&!b.userInvalidated&&(!b.meridiem||b.meridiem&&c);if(a._strict&&(d=d&&0===b.charsLeftOver&&0===b.unusedTokens.length&&void 0===b.bigHour),null!=Object.isFrozen&&Object.isFrozen(a))return d;a._isValid=d}return a._isValid}function p(a){var b=k(NaN);return null!=a?j(m(b),a):m(b).userInvalidated=!0,b}function q(a){return void 0===a}function s(a,b){var c,d,e;if(q(b._isAMomentObject)||(a._isAMomentObject=b._isAMomentObject),q(b._i)||(a._i=b._i),q(b._f)||(a._f=b._f),q(b._l)||(a._l=b._l),q(b._strict)||(a._strict=b._strict),q(b._tzm)||(a._tzm=b._tzm),q(b._isUTC)||(a._isUTC=b._isUTC),q(b._offset)||(a._offset=b._offset),q(b._pf)||(a._pf=m(b)),q(b._locale)||(a._locale=b._locale),r.length>0)for(c in r)d=r[c],e=b[d],q(e)||(a[d]=e);return a}function u(a){s(this,a),this._d=new Date(null!=a._d?a._d.getTime():NaN),t===!1&&(t=!0,b.updateOffset(this),t=!1)}function v(a){return a instanceof u||null!=a&&null!=a._isAMomentObject}function w(a){return a<0?Math.ceil(a)||0:Math.floor(a)}function x(a){var b=+a,c=0;return 0!==b&&isFinite(b)&&(c=w(b)),c}function y(a,b,c){var g,d=Math.min(a.length,b.length),e=Math.abs(a.length-b.length),f=0;for(g=0;g<d;g++)(c&&a[g]!==b[g]||!c&&x(a[g])!==x(b[g]))&&f++;return f+e}function z(a){b.suppressDeprecationWarnings===!1&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+a)}function A(a,c){var d=!0;return j(function(){if(null!=b.deprecationHandler&&b.deprecationHandler(null,a),d){for(var f,e=[],g=0;g<arguments.length;g++){if(f="","object"==typeof arguments[g]){f+="\n["+g+"] ";for(var h in arguments[0])f+=h+": "+arguments[0][h]+", ";f=f.slice(0,-2)}else f=arguments[g];e.push(f)}z(a+"\nArguments: "+Array.prototype.slice.call(e).join("")+"\n"+(new Error).stack),d=!1}return c.apply(this,arguments)},c)}function C(a,c){null!=b.deprecationHandler&&b.deprecationHandler(a,c),B[a]||(z(c),B[a]=!0)}function D(a){return a instanceof Function||"[object Function]"===Object.prototype.toString.call(a)}function E(a){var b,c;for(c in a)b=a[c],D(b)?this[c]=b:this["_"+c]=b;this._config=a,this._ordinalParseLenient=new RegExp(this._ordinalParse.source+"|"+/\d{1,2}/.source)}function F(a,b){var d,c=j({},a);for(d in b)i(b,d)&&(e(a[d])&&e(b[d])?(c[d]={},j(c[d],a[d]),j(c[d],b[d])):null!=b[d]?c[d]=b[d]:delete c[d]);for(d in a)i(a,d)&&!i(b,d)&&e(a[d])&&(c[d]=j({},c[d]));return c}function G(a){null!=a&&this.set(a)}function J(a,b,c){var d=this._calendar[a]||this._calendar.sameElse;return D(d)?d.call(b,c):d}function L(a){var b=this._longDateFormat[a],c=this._longDateFormat[a.toUpperCase()];return b||!c?b:(this._longDateFormat[a]=c.replace(/MMMM|MM|DD|dddd/g,function(a){return a.slice(1)}),this._longDateFormat[a])}function N(){return this._invalidDate}function Q(a){return this._ordinal.replace("%d",a)}function S(a,b,c,d){var e=this._relativeTime[c];return D(e)?e(a,b,c,d):e.replace(/%d/i,a)}function T(a,b){var c=this._relativeTime[a>0?"future":"past"];return D(c)?c(b):c.replace(/%s/i,b)}function V(a,b){var c=a.toLowerCase();U[c]=U[c+"s"]=U[b]=a}function W(a){return"string"==typeof a?U[a]||U[a.toLowerCase()]:void 0}function X(a){var c,d,b={};for(d in a)i(a,d)&&(c=W(d),c&&(b[c]=a[d]));return b}function Z(a,b){Y[a]=b}function $(a){var b=[];for(var c in a)b.push({unit:c,priority:Y[c]});return b.sort(function(a,b){return a.priority-b.priority}),b}function _(a,c){return function(d){return null!=d?(ba(this,a,d),b.updateOffset(this,c),this):aa(this,a)}}function aa(a,b){return a.isValid()?a._d["get"+(a._isUTC?"UTC":"")+b]():NaN}function ba(a,b,c){a.isValid()&&a._d["set"+(a._isUTC?"UTC":"")+b](c)}function ca(a){return a=W(a),D(this[a])?this[a]():this}function da(a,b){if("object"==typeof a){a=X(a);for(var c=$(a),d=0;d<c.length;d++)this[c[d].unit](a[c[d].unit])}else if(a=W(a),D(this[a]))return this[a](b);return this}function ea(a,b,c){var d=""+Math.abs(a),e=b-d.length,f=a>=0;return(f?c?"+":"":"-")+Math.pow(10,Math.max(0,e)).toString().substr(1)+d}function ja(a,b,c,d){var e=d;"string"==typeof d&&(e=function(){return this[d]()}),a&&(ia[a]=e),b&&(ia[b[0]]=function(){return ea(e.apply(this,arguments),b[1],b[2])}),c&&(ia[c]=function(){return this.localeData().ordinal(e.apply(this,arguments),a)})}function ka(a){return a.match(/\[[\s\S]/)?a.replace(/^\[|\]$/g,""):a.replace(/\\/g,"")}function la(a){var c,d,b=a.match(fa);for(c=0,d=b.length;c<d;c++)ia[b[c]]?b[c]=ia[b[c]]:b[c]=ka(b[c]);return function(c){var f,e="";for(f=0;f<d;f++)e+=b[f]instanceof Function?b[f].call(c,a):b[f];return e}}function ma(a,b){return a.isValid()?(b=na(b,a.localeData()),ha[b]=ha[b]||la(b),ha[b](a)):a.localeData().invalidDate()}function na(a,b){function d(a){return b.longDateFormat(a)||a}var c=5;for(ga.lastIndex=0;c>=0&&ga.test(a);)a=a.replace(ga,d),ga.lastIndex=0,c-=1;return a}function Ga(a,b,c){Fa[a]=D(b)?b:function(a,d){return a&&c?c:b}}function Ha(a,b){return i(Fa,a)?Fa[a](b._strict,b._locale):new RegExp(Ia(a))}function Ia(a){return Ja(a.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(a,b,c,d,e){return b||c||d||e}))}function Ja(a){return a.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function La(a,b){var c,d=b;for("string"==typeof a&&(a=[a]),"number"==typeof b&&(d=function(a,c){c[b]=x(a)}),c=0;c<a.length;c++)Ka[a[c]]=d}function Ma(a,b){La(a,function(a,c,d,e){d._w=d._w||{},b(a,d._w,d,e)})}function Na(a,b,c){null!=b&&i(Ka,a)&&Ka[a](b,c._a,c,a)}function Ya(a,b){return new Date(Date.UTC(a,b+1,0)).getUTCDate()}function _a(a,b){return a?d(this._months)?this._months[a.month()]:this._months[(this._months.isFormat||Za).test(b)?"format":"standalone"][a.month()]:this._months}function bb(a,b){return a?d(this._monthsShort)?this._monthsShort[a.month()]:this._monthsShort[Za.test(b)?"format":"standalone"][a.month()]:this._monthsShort}function cb(a,b,c){var d,e,f,g=a.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],d=0;d<12;++d)f=k([2e3,d]),this._shortMonthsParse[d]=this.monthsShort(f,"").toLocaleLowerCase(),this._longMonthsParse[d]=this.months(f,"").toLocaleLowerCase();return c?"MMM"===b?(e=Xa.call(this._shortMonthsParse,g),e!==-1?e:null):(e=Xa.call(this._longMonthsParse,g),e!==-1?e:null):"MMM"===b?(e=Xa.call(this._shortMonthsParse,g),e!==-1?e:(e=Xa.call(this._longMonthsParse,g),e!==-1?e:null)):(e=Xa.call(this._longMonthsParse,g),e!==-1?e:(e=Xa.call(this._shortMonthsParse,g),e!==-1?e:null))}function db(a,b,c){var d,e,f;if(this._monthsParseExact)return cb.call(this,a,b,c);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),d=0;d<12;d++){if(e=k([2e3,d]),c&&!this._longMonthsParse[d]&&(this._longMonthsParse[d]=new RegExp("^"+this.months(e,"").replace(".","")+"$","i"),this._shortMonthsParse[d]=new RegExp("^"+this.monthsShort(e,"").replace(".","")+"$","i")),c||this._monthsParse[d]||(f="^"+this.months(e,"")+"|^"+this.monthsShort(e,""),this._monthsParse[d]=new RegExp(f.replace(".",""),"i")),c&&"MMMM"===b&&this._longMonthsParse[d].test(a))return d;if(c&&"MMM"===b&&this._shortMonthsParse[d].test(a))return d;if(!c&&this._monthsParse[d].test(a))return d}}function eb(a,b){var c;if(!a.isValid())return a;if("string"==typeof b)if(/^\d+$/.test(b))b=x(b);else if(b=a.localeData().monthsParse(b),"number"!=typeof b)return a;return c=Math.min(a.date(),Ya(a.year(),b)),a._d["set"+(a._isUTC?"UTC":"")+"Month"](b,c),a}function fb(a){return null!=a?(eb(this,a),b.updateOffset(this,!0),this):aa(this,"Month")}function gb(){return Ya(this.year(),this.month())}function ib(a){return this._monthsParseExact?(i(this,"_monthsRegex")||lb.call(this),a?this._monthsShortStrictRegex:this._monthsShortRegex):(i(this,"_monthsShortRegex")||(this._monthsShortRegex=hb),this._monthsShortStrictRegex&&a?this._monthsShortStrictRegex:this._monthsShortRegex)}function kb(a){return this._monthsParseExact?(i(this,"_monthsRegex")||lb.call(this),a?this._monthsStrictRegex:this._monthsRegex):(i(this,"_monthsRegex")||(this._monthsRegex=jb),this._monthsStrictRegex&&a?this._monthsStrictRegex:this._monthsRegex)}function lb(){function a(a,b){return b.length-a.length}var e,f,b=[],c=[],d=[];for(e=0;e<12;e++)f=k([2e3,e]),b.push(this.monthsShort(f,"")),c.push(this.months(f,"")),d.push(this.months(f,"")),d.push(this.monthsShort(f,""));for(b.sort(a),c.sort(a),d.sort(a),e=0;e<12;e++)b[e]=Ja(b[e]),c[e]=Ja(c[e]);for(e=0;e<24;e++)d[e]=Ja(d[e]);this._monthsRegex=new RegExp("^("+d.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+c.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+b.join("|")+")","i")}function mb(a){return nb(a)?366:365}function nb(a){return a%4===0&&a%100!==0||a%400===0}function pb(){return nb(this.year())}function qb(a,b,c,d,e,f,g){var h=new Date(a,b,c,d,e,f,g);return a<100&&a>=0&&isFinite(h.getFullYear())&&h.setFullYear(a),h}function rb(a){var b=new Date(Date.UTC.apply(null,arguments));return a<100&&a>=0&&isFinite(b.getUTCFullYear())&&b.setUTCFullYear(a),b}function sb(a,b,c){var d=7+b-c,e=(7+rb(a,0,d).getUTCDay()-b)%7;return-e+d-1}function tb(a,b,c,d,e){var i,j,f=(7+c-d)%7,g=sb(a,d,e),h=1+7*(b-1)+f+g;return h<=0?(i=a-1,j=mb(i)+h):h>mb(a)?(i=a+1,j=h-mb(a)):(i=a,j=h),{year:i,dayOfYear:j}}function ub(a,b,c){var f,g,d=sb(a.year(),b,c),e=Math.floor((a.dayOfYear()-d-1)/7)+1;return e<1?(g=a.year()-1,f=e+vb(g,b,c)):e>vb(a.year(),b,c)?(f=e-vb(a.year(),b,c),g=a.year()+1):(g=a.year(),f=e),{week:f,year:g}}function vb(a,b,c){var d=sb(a,b,c),e=sb(a+1,b,c);return(mb(a)-d+e)/7}function wb(a){return ub(a,this._week.dow,this._week.doy).week}function yb(){return this._week.dow}function zb(){return this._week.doy}function Ab(a){var b=this.localeData().week(this);return null==a?b:this.add(7*(a-b),"d")}function Bb(a){var b=ub(this,1,4).week;return null==a?b:this.add(7*(a-b),"d")}function Cb(a,b){return"string"!=typeof a?a:isNaN(a)?(a=b.weekdaysParse(a),"number"==typeof a?a:null):parseInt(a,10)}function Db(a,b){return"string"==typeof a?b.weekdaysParse(a)%7||7:isNaN(a)?null:a}function Fb(a,b){return a?d(this._weekdays)?this._weekdays[a.day()]:this._weekdays[this._weekdays.isFormat.test(b)?"format":"standalone"][a.day()]:this._weekdays}function Hb(a){return a?this._weekdaysShort[a.day()]:this._weekdaysShort}function Jb(a){return a?this._weekdaysMin[a.day()]:this._weekdaysMin}function Kb(a,b,c){var d,e,f,g=a.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],d=0;d<7;++d)f=k([2e3,1]).day(d),this._minWeekdaysParse[d]=this.weekdaysMin(f,"").toLocaleLowerCase(),this._shortWeekdaysParse[d]=this.weekdaysShort(f,"").toLocaleLowerCase(),this._weekdaysParse[d]=this.weekdays(f,"").toLocaleLowerCase();return c?"dddd"===b?(e=Xa.call(this._weekdaysParse,g),e!==-1?e:null):"ddd"===b?(e=Xa.call(this._shortWeekdaysParse,g),e!==-1?e:null):(e=Xa.call(this._minWeekdaysParse,g),e!==-1?e:null):"dddd"===b?(e=Xa.call(this._weekdaysParse,g),e!==-1?e:(e=Xa.call(this._shortWeekdaysParse,g),e!==-1?e:(e=Xa.call(this._minWeekdaysParse,g),e!==-1?e:null))):"ddd"===b?(e=Xa.call(this._shortWeekdaysParse,g),e!==-1?e:(e=Xa.call(this._weekdaysParse,g),e!==-1?e:(e=Xa.call(this._minWeekdaysParse,g),e!==-1?e:null))):(e=Xa.call(this._minWeekdaysParse,g),e!==-1?e:(e=Xa.call(this._weekdaysParse,g),e!==-1?e:(e=Xa.call(this._shortWeekdaysParse,g),e!==-1?e:null)))}function Lb(a,b,c){var d,e,f;if(this._weekdaysParseExact)return Kb.call(this,a,b,c);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),d=0;d<7;d++){if(e=k([2e3,1]).day(d),c&&!this._fullWeekdaysParse[d]&&(this._fullWeekdaysParse[d]=new RegExp("^"+this.weekdays(e,"").replace(".",".?")+"$","i"),this._shortWeekdaysParse[d]=new RegExp("^"+this.weekdaysShort(e,"").replace(".",".?")+"$","i"),this._minWeekdaysParse[d]=new RegExp("^"+this.weekdaysMin(e,"").replace(".",".?")+"$","i")),this._weekdaysParse[d]||(f="^"+this.weekdays(e,"")+"|^"+this.weekdaysShort(e,"")+"|^"+this.weekdaysMin(e,""),this._weekdaysParse[d]=new RegExp(f.replace(".",""),"i")),c&&"dddd"===b&&this._fullWeekdaysParse[d].test(a))return d;if(c&&"ddd"===b&&this._shortWeekdaysParse[d].test(a))return d;if(c&&"dd"===b&&this._minWeekdaysParse[d].test(a))return d;if(!c&&this._weekdaysParse[d].test(a))return d}}function Mb(a){if(!this.isValid())return null!=a?this:NaN;var b=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=a?(a=Cb(a,this.localeData()),this.add(a-b,"d")):b}function Nb(a){if(!this.isValid())return null!=a?this:NaN;var b=(this.day()+7-this.localeData()._week.dow)%7;return null==a?b:this.add(a-b,"d")}function Ob(a){if(!this.isValid())return null!=a?this:NaN;if(null!=a){var b=Db(a,this.localeData());return this.day(this.day()%7?b:b-7)}return this.day()||7}function Qb(a){return this._weekdaysParseExact?(i(this,"_weekdaysRegex")||Vb.call(this),a?this._weekdaysStrictRegex:this._weekdaysRegex):(i(this,"_weekdaysRegex")||(this._weekdaysRegex=Pb),this._weekdaysStrictRegex&&a?this._weekdaysStrictRegex:this._weekdaysRegex)}function Sb(a){return this._weekdaysParseExact?(i(this,"_weekdaysRegex")||Vb.call(this),a?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(i(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=Rb),this._weekdaysShortStrictRegex&&a?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)}function Ub(a){return this._weekdaysParseExact?(i(this,"_weekdaysRegex")||Vb.call(this),a?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(i(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=Tb),this._weekdaysMinStrictRegex&&a?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)}function Vb(){function a(a,b){return b.length-a.length}var f,g,h,i,j,b=[],c=[],d=[],e=[];for(f=0;f<7;f++)g=k([2e3,1]).day(f),h=this.weekdaysMin(g,""),i=this.weekdaysShort(g,""),j=this.weekdays(g,""),b.push(h),c.push(i),d.push(j),e.push(h),e.push(i),e.push(j);for(b.sort(a),c.sort(a),d.sort(a),e.sort(a),f=0;f<7;f++)c[f]=Ja(c[f]),d[f]=Ja(d[f]),e[f]=Ja(e[f]);this._weekdaysRegex=new RegExp("^("+e.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+d.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+c.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+b.join("|")+")","i")}function Wb(){return this.hours()%12||12}function Xb(){return this.hours()||24}function Yb(a,b){ja(a,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),b)})}function Zb(a,b){return b._meridiemParse}function $b(a){return"p"===(a+"").toLowerCase().charAt(0)}function ac(a,b,c){return a>11?c?"pm":"PM":c?"am":"AM"}function fc(a){return a?a.toLowerCase().replace("_","-"):a}function gc(a){for(var c,d,e,f,b=0;b<a.length;){for(f=fc(a[b]).split("-"),c=f.length,d=fc(a[b+1]),d=d?d.split("-"):null;c>0;){if(e=hc(f.slice(0,c).join("-")))return e;if(d&&d.length>=c&&y(f,d,!0)>=c-1)break;c--}b++}return null}function hc(a){var b=null;if(!dc[a]&&"undefined"!=typeof module&&module&&module.exports)try{b=ec._abbr,require("./locale/"+a),ic(b)}catch(a){}return dc[a]}function ic(a,b){var c;return a&&(c=q(b)?lc(a):jc(a,b),c&&(ec=c)),ec._abbr}function jc(a,b){if(null!==b){var c=cc;return b.abbr=a,null!=dc[a]?(C("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),c=dc[a]._config):null!=b.parentLocale&&(null!=dc[b.parentLocale]?c=dc[b.parentLocale]._config:C("parentLocaleUndefined","specified parentLocale is not defined yet. See http://momentjs.com/guides/#/warnings/parent-locale/")),dc[a]=new G(F(c,b)),ic(a),dc[a]}return delete dc[a],null}function kc(a,b){if(null!=b){var c,d=cc;null!=dc[a]&&(d=dc[a]._config),b=F(d,b),c=new G(b),c.parentLocale=dc[a],dc[a]=c,ic(a)}else null!=dc[a]&&(null!=dc[a].parentLocale?dc[a]=dc[a].parentLocale:null!=dc[a]&&delete dc[a]);return dc[a]}function lc(a){var b;if(a&&a._locale&&a._locale._abbr&&(a=a._locale._abbr),!a)return ec;if(!d(a)){if(b=hc(a))return b;a=[a]}return gc(a)}function mc(){return H(dc)}function nc(a){var b,c=a._a;return c&&m(a).overflow===-2&&(b=c[Pa]<0||c[Pa]>11?Pa:c[Qa]<1||c[Qa]>Ya(c[Oa],c[Pa])?Qa:c[Ra]<0||c[Ra]>24||24===c[Ra]&&(0!==c[Sa]||0!==c[Ta]||0!==c[Ua])?Ra:c[Sa]<0||c[Sa]>59?Sa:c[Ta]<0||c[Ta]>59?Ta:c[Ua]<0||c[Ua]>999?Ua:-1,m(a)._overflowDayOfYear&&(b<Oa||b>Qa)&&(b=Qa),m(a)._overflowWeeks&&b===-1&&(b=Va),m(a)._overflowWeekday&&b===-1&&(b=Wa),m(a).overflow=b),a}function uc(a){var b,c,f,g,h,i,d=a._i,e=oc.exec(d)||pc.exec(d);if(e){for(m(a).iso=!0,b=0,c=rc.length;b<c;b++)if(rc[b][1].exec(e[1])){g=rc[b][0],f=rc[b][2]!==!1;break}if(null==g)return void(a._isValid=!1);if(e[3]){for(b=0,c=sc.length;b<c;b++)if(sc[b][1].exec(e[3])){h=(e[2]||" ")+sc[b][0];break}if(null==h)return void(a._isValid=!1)}if(!f&&null!=h)return void(a._isValid=!1);if(e[4]){if(!qc.exec(e[4]))return void(a._isValid=!1);i="Z"}a._f=g+(h||"")+(i||""),Ac(a)}else a._isValid=!1}function vc(a){var c=tc.exec(a._i);return null!==c?void(a._d=new Date(+c[1])):(uc(a),void(a._isValid===!1&&(delete a._isValid,b.createFromInputFallback(a))))}function wc(a,b,c){return null!=a?a:null!=b?b:c}function xc(a){var c=new Date(b.now());return a._useUTC?[c.getUTCFullYear(),c.getUTCMonth(),c.getUTCDate()]:[c.getFullYear(),c.getMonth(),c.getDate()]}function yc(a){var b,c,e,f,d=[];if(!a._d){for(e=xc(a),a._w&&null==a._a[Qa]&&null==a._a[Pa]&&zc(a),a._dayOfYear&&(f=wc(a._a[Oa],e[Oa]),a._dayOfYear>mb(f)&&(m(a)._overflowDayOfYear=!0),c=rb(f,0,a._dayOfYear),a._a[Pa]=c.getUTCMonth(),a._a[Qa]=c.getUTCDate()),b=0;b<3&&null==a._a[b];++b)a._a[b]=d[b]=e[b];for(;b<7;b++)a._a[b]=d[b]=null==a._a[b]?2===b?1:0:a._a[b];24===a._a[Ra]&&0===a._a[Sa]&&0===a._a[Ta]&&0===a._a[Ua]&&(a._nextDay=!0,a._a[Ra]=0),a._d=(a._useUTC?rb:qb).apply(null,d),null!=a._tzm&&a._d.setUTCMinutes(a._d.getUTCMinutes()-a._tzm),a._nextDay&&(a._a[Ra]=24)}}function zc(a){var b,c,d,e,f,g,h,i;b=a._w,null!=b.GG||null!=b.W||null!=b.E?(f=1,g=4,c=wc(b.GG,a._a[Oa],ub(Ic(),1,4).year),d=wc(b.W,1),e=wc(b.E,1),(e<1||e>7)&&(i=!0)):(f=a._locale._week.dow,g=a._locale._week.doy,c=wc(b.gg,a._a[Oa],ub(Ic(),f,g).year),d=wc(b.w,1),null!=b.d?(e=b.d,(e<0||e>6)&&(i=!0)):null!=b.e?(e=b.e+f,(b.e<0||b.e>6)&&(i=!0)):e=f),d<1||d>vb(c,f,g)?m(a)._overflowWeeks=!0:null!=i?m(a)._overflowWeekday=!0:(h=tb(c,d,e,f,g),a._a[Oa]=h.year,a._dayOfYear=h.dayOfYear)}function Ac(a){if(a._f===b.ISO_8601)return void uc(a);a._a=[],m(a).empty=!0;var d,e,f,g,h,c=""+a._i,i=c.length,j=0;for(f=na(a._f,a._locale).match(fa)||[],d=0;d<f.length;d++)g=f[d],e=(c.match(Ha(g,a))||[])[0],e&&(h=c.substr(0,c.indexOf(e)),h.length>0&&m(a).unusedInput.push(h),c=c.slice(c.indexOf(e)+e.length),j+=e.length),ia[g]?(e?m(a).empty=!1:m(a).unusedTokens.push(g),Na(g,e,a)):a._strict&&!e&&m(a).unusedTokens.push(g);m(a).charsLeftOver=i-j,c.length>0&&m(a).unusedInput.push(c),a._a[Ra]<=12&&m(a).bigHour===!0&&a._a[Ra]>0&&(m(a).bigHour=void 0),m(a).parsedDateParts=a._a.slice(0),m(a).meridiem=a._meridiem,a._a[Ra]=Bc(a._locale,a._a[Ra],a._meridiem),yc(a),nc(a)}function Bc(a,b,c){var d;return null==c?b:null!=a.meridiemHour?a.meridiemHour(b,c):null!=a.isPM?(d=a.isPM(c),d&&b<12&&(b+=12),d||12!==b||(b=0),b):b}function Cc(a){var b,c,d,e,f;if(0===a._f.length)return m(a).invalidFormat=!0,void(a._d=new Date(NaN));for(e=0;e<a._f.length;e++)f=0,b=s({},a),null!=a._useUTC&&(b._useUTC=a._useUTC),b._f=a._f[e],Ac(b),o(b)&&(f+=m(b).charsLeftOver,f+=10*m(b).unusedTokens.length,m(b).score=f,(null==d||f<d)&&(d=f,c=b));j(a,c||b)}function Dc(a){if(!a._d){var b=X(a._i);a._a=h([b.year,b.month,b.day||b.date,b.hour,b.minute,b.second,b.millisecond],function(a){return a&&parseInt(a,10)}),yc(a)}}function Ec(a){var b=new u(nc(Fc(a)));return b._nextDay&&(b.add(1,"d"),b._nextDay=void 0),b}function Fc(a){var b=a._i,c=a._f;return a._locale=a._locale||lc(a._l),null===b||void 0===c&&""===b?p({nullInput:!0}):("string"==typeof b&&(a._i=b=a._locale.preparse(b)),v(b)?new u(nc(b)):(d(c)?Cc(a):g(b)?a._d=b:c?Ac(a):Gc(a),o(a)||(a._d=null),a))}function Gc(a){var c=a._i;void 0===c?a._d=new Date(b.now()):g(c)?a._d=new Date(c.valueOf()):"string"==typeof c?vc(a):d(c)?(a._a=h(c.slice(0),function(a){return parseInt(a,10)}),yc(a)):"object"==typeof c?Dc(a):"number"==typeof c?a._d=new Date(c):b.createFromInputFallback(a)}function Hc(a,b,c,g,h){var i={};return"boolean"==typeof c&&(g=c,c=void 0),(e(a)&&f(a)||d(a)&&0===a.length)&&(a=void 0),i._isAMomentObject=!0,i._useUTC=i._isUTC=h,i._l=c,i._i=a,i._f=b,i._strict=g,Ec(i)}function Ic(a,b,c,d){return Hc(a,b,c,d,!1)}function Lc(a,b){var c,e;if(1===b.length&&d(b[0])&&(b=b[0]),!b.length)return Ic();for(c=b[0],e=1;e<b.length;++e)b[e].isValid()&&!b[e][a](c)||(c=b[e]);return c}function Mc(){var a=[].slice.call(arguments,0);return Lc("isBefore",a)}function Nc(){var a=[].slice.call(arguments,0);return Lc("isAfter",a)}function Pc(a){var b=X(a),c=b.year||0,d=b.quarter||0,e=b.month||0,f=b.week||0,g=b.day||0,h=b.hour||0,i=b.minute||0,j=b.second||0,k=b.millisecond||0;this._milliseconds=+k+1e3*j+6e4*i+1e3*h*60*60,this._days=+g+7*f,this._months=+e+3*d+12*c,this._data={},this._locale=lc(),this._bubble()}function Qc(a){return a instanceof Pc}function Rc(a){return a<0?Math.round(-1*a)*-1:Math.round(a)}function Sc(a,b){ja(a,0,0,function(){var a=this.utcOffset(),c="+";return a<0&&(a=-a,c="-"),c+ea(~~(a/60),2)+b+ea(~~a%60,2)})}function Uc(a,b){var c=(b||"").match(a)||[],d=c[c.length-1]||[],e=(d+"").match(Tc)||["-",0,0],f=+(60*e[1])+x(e[2]);return"+"===e[0]?f:-f}function Vc(a,c){var d,e;return c._isUTC?(d=c.clone(),e=(v(a)||g(a)?a.valueOf():Ic(a).valueOf())-d.valueOf(),d._d.setTime(d._d.valueOf()+e),b.updateOffset(d,!1),d):Ic(a).local()}function Wc(a){return 15*-Math.round(a._d.getTimezoneOffset()/15)}function Xc(a,c){var e,d=this._offset||0;return this.isValid()?null!=a?("string"==typeof a?a=Uc(Ca,a):Math.abs(a)<16&&(a=60*a),!this._isUTC&&c&&(e=Wc(this)),this._offset=a,this._isUTC=!0,null!=e&&this.add(e,"m"),d!==a&&(!c||this._changeInProgress?nd(this,id(a-d,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,b.updateOffset(this,!0),this._changeInProgress=null)),this):this._isUTC?d:Wc(this):null!=a?this:NaN}function Yc(a,b){return null!=a?("string"!=typeof a&&(a=-a),this.utcOffset(a,b),this):-this.utcOffset()}function Zc(a){return this.utcOffset(0,a)}function $c(a){return this._isUTC&&(this.utcOffset(0,a),this._isUTC=!1,a&&this.subtract(Wc(this),"m")),this}function _c(){if(this._tzm)this.utcOffset(this._tzm);else if("string"==typeof this._i){var a=Uc(Ba,this._i);0===a?this.utcOffset(0,!0):this.utcOffset(Uc(Ba,this._i))}return this}function ad(a){return!!this.isValid()&&(a=a?Ic(a).utcOffset():0,(this.utcOffset()-a)%60===0)}function bd(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function cd(){if(!q(this._isDSTShifted))return this._isDSTShifted;var a={};if(s(a,this),a=Fc(a),a._a){var b=a._isUTC?k(a._a):Ic(a._a);this._isDSTShifted=this.isValid()&&y(a._a,b.toArray())>0}else this._isDSTShifted=!1;return this._isDSTShifted}function dd(){return!!this.isValid()&&!this._isUTC}function ed(){return!!this.isValid()&&this._isUTC}function fd(){return!!this.isValid()&&(this._isUTC&&0===this._offset)}function id(a,b){var e,f,g,c=a,d=null;return Qc(a)?c={ms:a._milliseconds,d:a._days,M:a._months}:"number"==typeof a?(c={},b?c[b]=a:c.milliseconds=a):(d=gd.exec(a))?(e="-"===d[1]?-1:1,c={y:0,d:x(d[Qa])*e,h:x(d[Ra])*e,m:x(d[Sa])*e,s:x(d[Ta])*e,ms:x(Rc(1e3*d[Ua]))*e}):(d=hd.exec(a))?(e="-"===d[1]?-1:1,c={y:jd(d[2],e),M:jd(d[3],e),w:jd(d[4],e),d:jd(d[5],e),h:jd(d[6],e),m:jd(d[7],e),s:jd(d[8],e)}):null==c?c={}:"object"==typeof c&&("from"in c||"to"in c)&&(g=ld(Ic(c.from),Ic(c.to)),c={},c.ms=g.milliseconds,c.M=g.months),f=new Pc(c),Qc(a)&&i(a,"_locale")&&(f._locale=a._locale),f}function jd(a,b){var c=a&&parseFloat(a.replace(",","."));return(isNaN(c)?0:c)*b}function kd(a,b){var c={milliseconds:0,months:0};return c.months=b.month()-a.month()+12*(b.year()-a.year()),a.clone().add(c.months,"M").isAfter(b)&&--c.months,c.milliseconds=+b-+a.clone().add(c.months,"M"),c}function ld(a,b){var c;return a.isValid()&&b.isValid()?(b=Vc(b,a),a.isBefore(b)?c=kd(a,b):(c=kd(b,a),c.milliseconds=-c.milliseconds,c.months=-c.months),c):{milliseconds:0,months:0}}function md(a,b){return function(c,d){var e,f;return null===d||isNaN(+d)||(C(b,"moment()."+b+"(period, number) is deprecated. Please use moment()."+b+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),f=c,c=d,d=f),c="string"==typeof c?+c:c,e=id(c,d),nd(this,e,a),this}}function nd(a,c,d,e){var f=c._milliseconds,g=Rc(c._days),h=Rc(c._months);a.isValid()&&(e=null==e||e,f&&a._d.setTime(a._d.valueOf()+f*d),g&&ba(a,"Date",aa(a,"Date")+g*d),h&&eb(a,aa(a,"Month")+h*d),e&&b.updateOffset(a,g||h))}function qd(a,b){var c=a.diff(b,"days",!0);return c<-6?"sameElse":c<-1?"lastWeek":c<0?"lastDay":c<1?"sameDay":c<2?"nextDay":c<7?"nextWeek":"sameElse"}function rd(a,c){var d=a||Ic(),e=Vc(d,this).startOf("day"),f=b.calendarFormat(this,e)||"sameElse",g=c&&(D(c[f])?c[f].call(this,d):c[f]);return this.format(g||this.localeData().calendar(f,this,Ic(d)))}function sd(){return new u(this)}function td(a,b){var c=v(a)?a:Ic(a);return!(!this.isValid()||!c.isValid())&&(b=W(q(b)?"millisecond":b),"millisecond"===b?this.valueOf()>c.valueOf():c.valueOf()<this.clone().startOf(b).valueOf())}function ud(a,b){var c=v(a)?a:Ic(a);return!(!this.isValid()||!c.isValid())&&(b=W(q(b)?"millisecond":b),"millisecond"===b?this.valueOf()<c.valueOf():this.clone().endOf(b).valueOf()<c.valueOf())}function vd(a,b,c,d){return d=d||"()",("("===d[0]?this.isAfter(a,c):!this.isBefore(a,c))&&(")"===d[1]?this.isBefore(b,c):!this.isAfter(b,c))}function wd(a,b){var d,c=v(a)?a:Ic(a);return!(!this.isValid()||!c.isValid())&&(b=W(b||"millisecond"),"millisecond"===b?this.valueOf()===c.valueOf():(d=c.valueOf(),this.clone().startOf(b).valueOf()<=d&&d<=this.clone().endOf(b).valueOf()))}function xd(a,b){return this.isSame(a,b)||this.isAfter(a,b)}function yd(a,b){return this.isSame(a,b)||this.isBefore(a,b)}function zd(a,b,c){var d,e,f,g;return this.isValid()?(d=Vc(a,this),d.isValid()?(e=6e4*(d.utcOffset()-this.utcOffset()),b=W(b),"year"===b||"month"===b||"quarter"===b?(g=Ad(this,d),"quarter"===b?g/=3:"year"===b&&(g/=12)):(f=this-d,g="second"===b?f/1e3:"minute"===b?f/6e4:"hour"===b?f/36e5:"day"===b?(f-e)/864e5:"week"===b?(f-e)/6048e5:f),c?g:w(g)):NaN):NaN}function Ad(a,b){var e,f,c=12*(b.year()-a.year())+(b.month()-a.month()),d=a.clone().add(c,"months");return b-d<0?(e=a.clone().add(c-1,"months"),f=(b-d)/(d-e)):(e=a.clone().add(c+1,"months"),f=(b-d)/(e-d)),-(c+f)||0}function Bd(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function Cd(){var a=this.clone().utc();return 0<a.year()&&a.year()<=9999?D(Date.prototype.toISOString)?this.toDate().toISOString():ma(a,"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]"):ma(a,"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")}function Dd(a){a||(a=this.isUtc()?b.defaultFormatUtc:b.defaultFormat);var c=ma(this,a);return this.localeData().postformat(c)}function Ed(a,b){return this.isValid()&&(v(a)&&a.isValid()||Ic(a).isValid())?id({to:this,from:a}).locale(this.locale()).humanize(!b):this.localeData().invalidDate()}function Fd(a){return this.from(Ic(),a)}function Gd(a,b){return this.isValid()&&(v(a)&&a.isValid()||Ic(a).isValid())?id({from:this,to:a}).locale(this.locale()).humanize(!b):this.localeData().invalidDate()}function Hd(a){return this.to(Ic(),a)}function Id(a){var b;return void 0===a?this._locale._abbr:(b=lc(a),null!=b&&(this._locale=b),this)}function Kd(){return this._locale}function Ld(a){switch(a=W(a)){case"year":this.month(0);case"quarter":case"month":this.date(1);case"week":case"isoWeek":case"day":case"date":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return"week"===a&&this.weekday(0),"isoWeek"===a&&this.isoWeekday(1),"quarter"===a&&this.month(3*Math.floor(this.month()/3)),this}function Md(a){return a=W(a),void 0===a||"millisecond"===a?this:("date"===a&&(a="day"),this.startOf(a).add(1,"isoWeek"===a?"week":a).subtract(1,"ms"))}function Nd(){return this._d.valueOf()-6e4*(this._offset||0)}function Od(){return Math.floor(this.valueOf()/1e3)}function Pd(){return new Date(this.valueOf())}function Qd(){var a=this;return[a.year(),a.month(),a.date(),a.hour(),a.minute(),a.second(),a.millisecond()]}function Rd(){var a=this;return{years:a.year(),months:a.month(),date:a.date(),hours:a.hours(),minutes:a.minutes(),seconds:a.seconds(),milliseconds:a.milliseconds()}}function Sd(){return this.isValid()?this.toISOString():null}function Td(){return o(this)}function Ud(){return j({},m(this))}function Vd(){return m(this).overflow}function Wd(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}function Xd(a,b){ja(0,[a,a.length],0,b)}function Yd(a){return ae.call(this,a,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)}function Zd(a){return ae.call(this,a,this.isoWeek(),this.isoWeekday(),1,4)}function $d(){return vb(this.year(),1,4)}function _d(){var a=this.localeData()._week;return vb(this.year(),a.dow,a.doy)}function ae(a,b,c,d,e){var f;return null==a?ub(this,d,e).year:(f=vb(a,d,e),b>f&&(b=f),be.call(this,a,b,c,d,e))}function be(a,b,c,d,e){var f=tb(a,b,c,d,e),g=rb(f.year,0,f.dayOfYear);return this.year(g.getUTCFullYear()),this.month(g.getUTCMonth()),this.date(g.getUTCDate()),this}function ce(a){return null==a?Math.ceil((this.month()+1)/3):this.month(3*(a-1)+this.month()%3)}function ee(a){var b=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return null==a?b:this.add(a-b,"d")}function ie(a,b){b[Ua]=x(1e3*("0."+a))}function ke(){return this._isUTC?"UTC":""}function le(){return this._isUTC?"Coordinated Universal Time":""}function oe(a){return Ic(1e3*a)}function pe(){return Ic.apply(null,arguments).parseZone()}function qe(a){return a}function se(a,b,c,d){var e=lc(),f=k().set(d,b);return e[c](f,a)}function te(a,b,c){if("number"==typeof a&&(b=a,a=void 0),a=a||"",null!=b)return se(a,b,c,"month");var d,e=[];for(d=0;d<12;d++)e[d]=se(a,d,c,"month");return e}function ue(a,b,c,d){"boolean"==typeof a?("number"==typeof b&&(c=b,b=void 0),b=b||""):(b=a,c=b,a=!1,"number"==typeof b&&(c=b,b=void 0),b=b||"");var e=lc(),f=a?e._week.dow:0;if(null!=c)return se(b,(c+f)%7,d,"day");var g,h=[];for(g=0;g<7;g++)h[g]=se(b,(g+f)%7,d,"day");return h}function ve(a,b){return te(a,b,"months")}function we(a,b){return te(a,b,"monthsShort")}function xe(a,b,c){return ue(a,b,c,"weekdays")}function ye(a,b,c){return ue(a,b,c,"weekdaysShort")}function ze(a,b,c){return ue(a,b,c,"weekdaysMin");
}function Be(){var a=this._data;return this._milliseconds=Ae(this._milliseconds),this._days=Ae(this._days),this._months=Ae(this._months),a.milliseconds=Ae(a.milliseconds),a.seconds=Ae(a.seconds),a.minutes=Ae(a.minutes),a.hours=Ae(a.hours),a.months=Ae(a.months),a.years=Ae(a.years),this}function Ce(a,b,c,d){var e=id(b,c);return a._milliseconds+=d*e._milliseconds,a._days+=d*e._days,a._months+=d*e._months,a._bubble()}function De(a,b){return Ce(this,a,b,1)}function Ee(a,b){return Ce(this,a,b,-1)}function Fe(a){return a<0?Math.floor(a):Math.ceil(a)}function Ge(){var e,f,g,h,i,a=this._milliseconds,b=this._days,c=this._months,d=this._data;return a>=0&&b>=0&&c>=0||a<=0&&b<=0&&c<=0||(a+=864e5*Fe(Ie(c)+b),b=0,c=0),d.milliseconds=a%1e3,e=w(a/1e3),d.seconds=e%60,f=w(e/60),d.minutes=f%60,g=w(f/60),d.hours=g%24,b+=w(g/24),i=w(He(b)),c+=i,b-=Fe(Ie(i)),h=w(c/12),c%=12,d.days=b,d.months=c,d.years=h,this}function He(a){return 4800*a/146097}function Ie(a){return 146097*a/4800}function Je(a){var b,c,d=this._milliseconds;if(a=W(a),"month"===a||"year"===a)return b=this._days+d/864e5,c=this._months+He(b),"month"===a?c:c/12;switch(b=this._days+Math.round(Ie(this._months)),a){case"week":return b/7+d/6048e5;case"day":return b+d/864e5;case"hour":return 24*b+d/36e5;case"minute":return 1440*b+d/6e4;case"second":return 86400*b+d/1e3;case"millisecond":return Math.floor(864e5*b)+d;default:throw new Error("Unknown unit "+a)}}function Ke(){return this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*x(this._months/12)}function Le(a){return function(){return this.as(a)}}function Ue(a){return a=W(a),this[a+"s"]()}function Ve(a){return function(){return this._data[a]}}function bf(){return w(this.days()/7)}function ef(a,b,c,d,e){return e.relativeTime(b||1,!!c,a,d)}function ff(a,b,c){var d=id(a).abs(),e=cf(d.as("s")),f=cf(d.as("m")),g=cf(d.as("h")),h=cf(d.as("d")),i=cf(d.as("M")),j=cf(d.as("y")),k=e<df.s&&["s",e]||f<=1&&["m"]||f<df.m&&["mm",f]||g<=1&&["h"]||g<df.h&&["hh",g]||h<=1&&["d"]||h<df.d&&["dd",h]||i<=1&&["M"]||i<df.M&&["MM",i]||j<=1&&["y"]||["yy",j];return k[2]=b,k[3]=+a>0,k[4]=c,ef.apply(null,k)}function gf(a){return void 0===a?cf:"function"==typeof a&&(cf=a,!0)}function hf(a,b){return void 0!==df[a]&&(void 0===b?df[a]:(df[a]=b,!0))}function jf(a){var b=this.localeData(),c=ff(this,!a,b);return a&&(c=b.pastFuture(+this,c)),b.postformat(c)}function lf(){var d,e,f,a=kf(this._milliseconds)/1e3,b=kf(this._days),c=kf(this._months);d=w(a/60),e=w(d/60),a%=60,d%=60,f=w(c/12),c%=12;var g=f,h=c,i=b,j=e,k=d,l=a,m=this.asSeconds();return m?(m<0?"-":"")+"P"+(g?g+"Y":"")+(h?h+"M":"")+(i?i+"D":"")+(j||k||l?"T":"")+(j?j+"H":"")+(k?k+"M":"")+(l?l+"S":""):"P0D"}var a,n;n=Array.prototype.some?Array.prototype.some:function(a){for(var b=Object(this),c=b.length>>>0,d=0;d<c;d++)if(d in b&&a.call(this,b[d],d,b))return!0;return!1};var r=b.momentProperties=[],t=!1,B={};b.suppressDeprecationWarnings=!1,b.deprecationHandler=null;var H;H=Object.keys?Object.keys:function(a){var b,c=[];for(b in a)i(a,b)&&c.push(b);return c};var Xa,I={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},K={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},M="Invalid date",O="%d",P=/\d{1,2}/,R={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},U={},Y={},fa=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,ga=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,ha={},ia={},oa=/\d/,pa=/\d\d/,qa=/\d{3}/,ra=/\d{4}/,sa=/[+-]?\d{6}/,ta=/\d\d?/,ua=/\d\d\d\d?/,va=/\d\d\d\d\d\d?/,wa=/\d{1,3}/,xa=/\d{1,4}/,ya=/[+-]?\d{1,6}/,za=/\d+/,Aa=/[+-]?\d+/,Ba=/Z|[+-]\d\d:?\d\d/gi,Ca=/Z|[+-]\d\d(?::?\d\d)?/gi,Da=/[+-]?\d+(\.\d{1,3})?/,Ea=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,Fa={},Ka={},Oa=0,Pa=1,Qa=2,Ra=3,Sa=4,Ta=5,Ua=6,Va=7,Wa=8;Xa=Array.prototype.indexOf?Array.prototype.indexOf:function(a){var b;for(b=0;b<this.length;++b)if(this[b]===a)return b;return-1},ja("M",["MM",2],"Mo",function(){return this.month()+1}),ja("MMM",0,0,function(a){return this.localeData().monthsShort(this,a)}),ja("MMMM",0,0,function(a){return this.localeData().months(this,a)}),V("month","M"),Z("month",8),Ga("M",ta),Ga("MM",ta,pa),Ga("MMM",function(a,b){return b.monthsShortRegex(a)}),Ga("MMMM",function(a,b){return b.monthsRegex(a)}),La(["M","MM"],function(a,b){b[Pa]=x(a)-1}),La(["MMM","MMMM"],function(a,b,c,d){var e=c._locale.monthsParse(a,d,c._strict);null!=e?b[Pa]=e:m(c).invalidMonth=a});var Za=/D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/,$a="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ab="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),hb=Ea,jb=Ea;ja("Y",0,0,function(){var a=this.year();return a<=9999?""+a:"+"+a}),ja(0,["YY",2],0,function(){return this.year()%100}),ja(0,["YYYY",4],0,"year"),ja(0,["YYYYY",5],0,"year"),ja(0,["YYYYYY",6,!0],0,"year"),V("year","y"),Z("year",1),Ga("Y",Aa),Ga("YY",ta,pa),Ga("YYYY",xa,ra),Ga("YYYYY",ya,sa),Ga("YYYYYY",ya,sa),La(["YYYYY","YYYYYY"],Oa),La("YYYY",function(a,c){c[Oa]=2===a.length?b.parseTwoDigitYear(a):x(a)}),La("YY",function(a,c){c[Oa]=b.parseTwoDigitYear(a)}),La("Y",function(a,b){b[Oa]=parseInt(a,10)}),b.parseTwoDigitYear=function(a){return x(a)+(x(a)>68?1900:2e3)};var ob=_("FullYear",!0);ja("w",["ww",2],"wo","week"),ja("W",["WW",2],"Wo","isoWeek"),V("week","w"),V("isoWeek","W"),Z("week",5),Z("isoWeek",5),Ga("w",ta),Ga("ww",ta,pa),Ga("W",ta),Ga("WW",ta,pa),Ma(["w","ww","W","WW"],function(a,b,c,d){b[d.substr(0,1)]=x(a)});var xb={dow:0,doy:6};ja("d",0,"do","day"),ja("dd",0,0,function(a){return this.localeData().weekdaysMin(this,a)}),ja("ddd",0,0,function(a){return this.localeData().weekdaysShort(this,a)}),ja("dddd",0,0,function(a){return this.localeData().weekdays(this,a)}),ja("e",0,0,"weekday"),ja("E",0,0,"isoWeekday"),V("day","d"),V("weekday","e"),V("isoWeekday","E"),Z("day",11),Z("weekday",11),Z("isoWeekday",11),Ga("d",ta),Ga("e",ta),Ga("E",ta),Ga("dd",function(a,b){return b.weekdaysMinRegex(a)}),Ga("ddd",function(a,b){return b.weekdaysShortRegex(a)}),Ga("dddd",function(a,b){return b.weekdaysRegex(a)}),Ma(["dd","ddd","dddd"],function(a,b,c,d){var e=c._locale.weekdaysParse(a,d,c._strict);null!=e?b.d=e:m(c).invalidWeekday=a}),Ma(["d","e","E"],function(a,b,c,d){b[d]=x(a)});var Eb="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),Gb="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),Ib="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),Pb=Ea,Rb=Ea,Tb=Ea;ja("H",["HH",2],0,"hour"),ja("h",["hh",2],0,Wb),ja("k",["kk",2],0,Xb),ja("hmm",0,0,function(){return""+Wb.apply(this)+ea(this.minutes(),2)}),ja("hmmss",0,0,function(){return""+Wb.apply(this)+ea(this.minutes(),2)+ea(this.seconds(),2)}),ja("Hmm",0,0,function(){return""+this.hours()+ea(this.minutes(),2)}),ja("Hmmss",0,0,function(){return""+this.hours()+ea(this.minutes(),2)+ea(this.seconds(),2)}),Yb("a",!0),Yb("A",!1),V("hour","h"),Z("hour",13),Ga("a",Zb),Ga("A",Zb),Ga("H",ta),Ga("h",ta),Ga("HH",ta,pa),Ga("hh",ta,pa),Ga("hmm",ua),Ga("hmmss",va),Ga("Hmm",ua),Ga("Hmmss",va),La(["H","HH"],Ra),La(["a","A"],function(a,b,c){c._isPm=c._locale.isPM(a),c._meridiem=a}),La(["h","hh"],function(a,b,c){b[Ra]=x(a),m(c).bigHour=!0}),La("hmm",function(a,b,c){var d=a.length-2;b[Ra]=x(a.substr(0,d)),b[Sa]=x(a.substr(d)),m(c).bigHour=!0}),La("hmmss",function(a,b,c){var d=a.length-4,e=a.length-2;b[Ra]=x(a.substr(0,d)),b[Sa]=x(a.substr(d,2)),b[Ta]=x(a.substr(e)),m(c).bigHour=!0}),La("Hmm",function(a,b,c){var d=a.length-2;b[Ra]=x(a.substr(0,d)),b[Sa]=x(a.substr(d))}),La("Hmmss",function(a,b,c){var d=a.length-4,e=a.length-2;b[Ra]=x(a.substr(0,d)),b[Sa]=x(a.substr(d,2)),b[Ta]=x(a.substr(e))});var ec,_b=/[ap]\.?m?\.?/i,bc=_("Hours",!0),cc={calendar:I,longDateFormat:K,invalidDate:M,ordinal:O,ordinalParse:P,relativeTime:R,months:$a,monthsShort:ab,week:xb,weekdays:Eb,weekdaysMin:Ib,weekdaysShort:Gb,meridiemParse:_b},dc={},oc=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/,pc=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/,qc=/Z|[+-]\d\d(?::?\d\d)?/,rc=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/]],sc=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],tc=/^\/?Date\((\-?\d+)/i;b.createFromInputFallback=A("value provided is not in a recognized ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(a){a._d=new Date(a._i+(a._useUTC?" UTC":""))}),b.ISO_8601=function(){};var Jc=A("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var a=Ic.apply(null,arguments);return this.isValid()&&a.isValid()?a<this?this:a:p()}),Kc=A("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var a=Ic.apply(null,arguments);return this.isValid()&&a.isValid()?a>this?this:a:p()}),Oc=function(){return Date.now?Date.now():+new Date};Sc("Z",":"),Sc("ZZ",""),Ga("Z",Ca),Ga("ZZ",Ca),La(["Z","ZZ"],function(a,b,c){c._useUTC=!0,c._tzm=Uc(Ca,a)});var Tc=/([\+\-]|\d\d)/gi;b.updateOffset=function(){};var gd=/^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,hd=/^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;id.fn=Pc.prototype;var od=md(1,"add"),pd=md(-1,"subtract");b.defaultFormat="YYYY-MM-DDTHH:mm:ssZ",b.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";var Jd=A("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(a){return void 0===a?this.localeData():this.locale(a)});ja(0,["gg",2],0,function(){return this.weekYear()%100}),ja(0,["GG",2],0,function(){return this.isoWeekYear()%100}),Xd("gggg","weekYear"),Xd("ggggg","weekYear"),Xd("GGGG","isoWeekYear"),Xd("GGGGG","isoWeekYear"),V("weekYear","gg"),V("isoWeekYear","GG"),Z("weekYear",1),Z("isoWeekYear",1),Ga("G",Aa),Ga("g",Aa),Ga("GG",ta,pa),Ga("gg",ta,pa),Ga("GGGG",xa,ra),Ga("gggg",xa,ra),Ga("GGGGG",ya,sa),Ga("ggggg",ya,sa),Ma(["gggg","ggggg","GGGG","GGGGG"],function(a,b,c,d){b[d.substr(0,2)]=x(a)}),Ma(["gg","GG"],function(a,c,d,e){c[e]=b.parseTwoDigitYear(a)}),ja("Q",0,"Qo","quarter"),V("quarter","Q"),Z("quarter",7),Ga("Q",oa),La("Q",function(a,b){b[Pa]=3*(x(a)-1)}),ja("D",["DD",2],"Do","date"),V("date","D"),Z("date",9),Ga("D",ta),Ga("DD",ta,pa),Ga("Do",function(a,b){return a?b._ordinalParse:b._ordinalParseLenient}),La(["D","DD"],Qa),La("Do",function(a,b){b[Qa]=x(a.match(ta)[0],10)});var de=_("Date",!0);ja("DDD",["DDDD",3],"DDDo","dayOfYear"),V("dayOfYear","DDD"),Z("dayOfYear",4),Ga("DDD",wa),Ga("DDDD",qa),La(["DDD","DDDD"],function(a,b,c){c._dayOfYear=x(a)}),ja("m",["mm",2],0,"minute"),V("minute","m"),Z("minute",14),Ga("m",ta),Ga("mm",ta,pa),La(["m","mm"],Sa);var fe=_("Minutes",!1);ja("s",["ss",2],0,"second"),V("second","s"),Z("second",15),Ga("s",ta),Ga("ss",ta,pa),La(["s","ss"],Ta);var ge=_("Seconds",!1);ja("S",0,0,function(){return~~(this.millisecond()/100)}),ja(0,["SS",2],0,function(){return~~(this.millisecond()/10)}),ja(0,["SSS",3],0,"millisecond"),ja(0,["SSSS",4],0,function(){return 10*this.millisecond()}),ja(0,["SSSSS",5],0,function(){return 100*this.millisecond()}),ja(0,["SSSSSS",6],0,function(){return 1e3*this.millisecond()}),ja(0,["SSSSSSS",7],0,function(){return 1e4*this.millisecond()}),ja(0,["SSSSSSSS",8],0,function(){return 1e5*this.millisecond()}),ja(0,["SSSSSSSSS",9],0,function(){return 1e6*this.millisecond()}),V("millisecond","ms"),Z("millisecond",16),Ga("S",wa,oa),Ga("SS",wa,pa),Ga("SSS",wa,qa);var he;for(he="SSSS";he.length<=9;he+="S")Ga(he,za);for(he="S";he.length<=9;he+="S")La(he,ie);var je=_("Milliseconds",!1);ja("z",0,0,"zoneAbbr"),ja("zz",0,0,"zoneName");var me=u.prototype;me.add=od,me.calendar=rd,me.clone=sd,me.diff=zd,me.endOf=Md,me.format=Dd,me.from=Ed,me.fromNow=Fd,me.to=Gd,me.toNow=Hd,me.get=ca,me.invalidAt=Vd,me.isAfter=td,me.isBefore=ud,me.isBetween=vd,me.isSame=wd,me.isSameOrAfter=xd,me.isSameOrBefore=yd,me.isValid=Td,me.lang=Jd,me.locale=Id,me.localeData=Kd,me.max=Kc,me.min=Jc,me.parsingFlags=Ud,me.set=da,me.startOf=Ld,me.subtract=pd,me.toArray=Qd,me.toObject=Rd,me.toDate=Pd,me.toISOString=Cd,me.toJSON=Sd,me.toString=Bd,me.unix=Od,me.valueOf=Nd,me.creationData=Wd,me.year=ob,me.isLeapYear=pb,me.weekYear=Yd,me.isoWeekYear=Zd,me.quarter=me.quarters=ce,me.month=fb,me.daysInMonth=gb,me.week=me.weeks=Ab,me.isoWeek=me.isoWeeks=Bb,me.weeksInYear=_d,me.isoWeeksInYear=$d,me.date=de,me.day=me.days=Mb,me.weekday=Nb,me.isoWeekday=Ob,me.dayOfYear=ee,me.hour=me.hours=bc,me.minute=me.minutes=fe,me.second=me.seconds=ge,me.millisecond=me.milliseconds=je,me.utcOffset=Xc,me.utc=Zc,me.local=$c,me.parseZone=_c,me.hasAlignedHourOffset=ad,me.isDST=bd,me.isLocal=dd,me.isUtcOffset=ed,me.isUtc=fd,me.isUTC=fd,me.zoneAbbr=ke,me.zoneName=le,me.dates=A("dates accessor is deprecated. Use date instead.",de),me.months=A("months accessor is deprecated. Use month instead",fb),me.years=A("years accessor is deprecated. Use year instead",ob),me.zone=A("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",Yc),me.isDSTShifted=A("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",cd);var ne=me,re=G.prototype;re.calendar=J,re.longDateFormat=L,re.invalidDate=N,re.ordinal=Q,re.preparse=qe,re.postformat=qe,re.relativeTime=S,re.pastFuture=T,re.set=E,re.months=_a,re.monthsShort=bb,re.monthsParse=db,re.monthsRegex=kb,re.monthsShortRegex=ib,re.week=wb,re.firstDayOfYear=zb,re.firstDayOfWeek=yb,re.weekdays=Fb,re.weekdaysMin=Jb,re.weekdaysShort=Hb,re.weekdaysParse=Lb,re.weekdaysRegex=Qb,re.weekdaysShortRegex=Sb,re.weekdaysMinRegex=Ub,re.isPM=$b,re.meridiem=ac,ic("en",{ordinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(a){var b=a%10,c=1===x(a%100/10)?"th":1===b?"st":2===b?"nd":3===b?"rd":"th";return a+c}}),b.lang=A("moment.lang is deprecated. Use moment.locale instead.",ic),b.langData=A("moment.langData is deprecated. Use moment.localeData instead.",lc);var Ae=Math.abs,Me=Le("ms"),Ne=Le("s"),Oe=Le("m"),Pe=Le("h"),Qe=Le("d"),Re=Le("w"),Se=Le("M"),Te=Le("y"),We=Ve("milliseconds"),Xe=Ve("seconds"),Ye=Ve("minutes"),Ze=Ve("hours"),$e=Ve("days"),_e=Ve("months"),af=Ve("years"),cf=Math.round,df={s:45,m:45,h:22,d:26,M:11},kf=Math.abs,mf=Pc.prototype;mf.abs=Be,mf.add=De,mf.subtract=Ee,mf.as=Je,mf.asMilliseconds=Me,mf.asSeconds=Ne,mf.asMinutes=Oe,mf.asHours=Pe,mf.asDays=Qe,mf.asWeeks=Re,mf.asMonths=Se,mf.asYears=Te,mf.valueOf=Ke,mf._bubble=Ge,mf.get=Ue,mf.milliseconds=We,mf.seconds=Xe,mf.minutes=Ye,mf.hours=Ze,mf.days=$e,mf.weeks=bf,mf.months=_e,mf.years=af,mf.humanize=jf,mf.toISOString=lf,mf.toString=lf,mf.toJSON=lf,mf.locale=Id,mf.localeData=Kd,mf.toIsoString=A("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",lf),mf.lang=Jd,ja("X",0,0,"unix"),ja("x",0,0,"valueOf"),Ga("x",Aa),Ga("X",Da),La("X",function(a,b,c){c._d=new Date(1e3*parseFloat(a,10))}),La("x",function(a,b,c){c._d=new Date(x(a))}),b.version="2.15.1",c(Ic),b.fn=ne,b.min=Mc,b.max=Nc,b.now=Oc,b.utc=k,b.unix=oe,b.months=ve,b.isDate=g,b.locale=ic,b.invalid=p,b.duration=id,b.isMoment=v,b.weekdays=xe,b.parseZone=pe,b.localeData=lc,b.isDuration=Qc,b.monthsShort=we,b.weekdaysMin=ze,b.defineLocale=jc,b.updateLocale=kc,b.locales=mc,b.weekdaysShort=ye,b.normalizeUnits=W,b.relativeTimeRounding=gf,b.relativeTimeThreshold=hf,b.calendarFormat=qd,b.prototype=ne;var nf=b;return nf});

!function(a,b){"use strict";"function"==typeof define&&define.amd?define(["moment"],b):"object"==typeof module&&module.exports?module.exports=b(require("moment")):b(a.moment)}(this,function(a){"use strict";function k(a){return a>96?a-87:a>64?a-29:a-48}function l(a){var g,b=0,c=a.split("."),d=c[0],e=c[1]||"",f=1,h=0,i=1;for(45===a.charCodeAt(0)&&(b=1,i=-1),b;b<d.length;b++)g=k(d.charCodeAt(b)),h=60*h+g;for(b=0;b<e.length;b++)f/=60,g=k(e.charCodeAt(b)),h+=g*f;return h*i}function m(a){for(var b=0;b<a.length;b++)a[b]=l(a[b])}function n(a,b){for(var c=0;c<b;c++)a[c]=Math.round((a[c-1]||0)+6e4*a[c]);a[b-1]=1/0}function o(a,b){var d,c=[];for(d=0;d<b.length;d++)c[d]=a[b[d]];return c}function p(a){var b=a.split("|"),c=b[2].split(" "),d=b[3].split(""),e=b[4].split(" ");return m(c),m(d),m(e),n(e,d.length),{name:b[0],abbrs:o(b[1].split(" "),d),offsets:o(c,d),untils:e,population:0|b[5]}}function q(a){a&&this._set(p(a))}function r(a){var b=a.toTimeString(),c=b.match(/\([a-z ]+\)/i);c&&c[0]?(c=c[0].match(/[A-Z]/g),c=c?c.join(""):void 0):(c=b.match(/[A-Z]{3,5}/g),c=c?c[0]:void 0),"GMT"===c&&(c=void 0),this.at=+a,this.abbr=c,this.offset=a.getTimezoneOffset()}function s(a){this.zone=a,this.offsetScore=0,this.abbrScore=0}function t(a,b){for(var c,d;d=6e4*((b.at-a.at)/12e4|0);)c=new r(new Date(a.at+d)),c.offset===a.offset?a=c:b=c;return a}function u(){var d,e,f,a=(new Date).getFullYear()-2,b=new r(new Date(a,0,1)),c=[b];for(f=1;f<48;f++)e=new r(new Date(a,f,1)),e.offset!==b.offset&&(d=t(b,e),c.push(d),c.push(new r(new Date(d.at+6e4)))),b=e;for(f=0;f<4;f++)c.push(new r(new Date(a+f,0,1))),c.push(new r(new Date(a+f,6,1)));return c}function v(a,b){return a.offsetScore!==b.offsetScore?a.offsetScore-b.offsetScore:a.abbrScore!==b.abbrScore?a.abbrScore-b.abbrScore:b.zone.population-a.zone.population}function w(a,b){var c,d;for(m(b),c=0;c<b.length;c++)d=b[c],f[d]=f[d]||{},f[d][a]=!0}function x(a){var g,h,i,b=a.length,c={},d=[];for(g=0;g<b;g++){i=f[a[g].offset]||{};for(h in i)i.hasOwnProperty(h)&&(c[h]=!0)}for(g in c)c.hasOwnProperty(g)&&d.push(e[g]);return d}function y(){try{var a=Intl.DateTimeFormat().resolvedOptions().timeZone;if(a){var b=e[A(a)];if(b)return b;I("Moment Timezone found "+a+" from the Intl api, but did not have that data loaded.")}}catch(a){}var h,i,j,c=u(),d=c.length,f=x(c),g=[];for(i=0;i<f.length;i++){for(h=new s(C(f[i]),d),j=0;j<d;j++)h.scoreOffsetAt(c[j]);g.push(h)}return g.sort(v),g.length>0?g[0].zone.name:void 0}function z(a){return g&&!a||(g=y()),g}function A(a){return(a||"").toLowerCase().replace(/\//g,"_")}function B(a){var b,d,f,g;for("string"==typeof a&&(a=[a]),b=0;b<a.length;b++)f=a[b].split("|"),d=f[0],g=A(d),c[g]=a[b],e[g]=d,f[5]&&w(g,f[2].split(" "))}function C(a,b){a=A(a);var g,f=c[a];return f instanceof q?f:"string"==typeof f?(f=new q(f),c[a]=f,f):d[a]&&b!==C&&(g=C(d[a],C))?(f=c[a]=new q,f._set(g),f.name=e[a],f):null}function D(){var a,b=[];for(a in e)e.hasOwnProperty(a)&&(c[a]||c[d[a]])&&e[a]&&b.push(e[a]);return b.sort()}function E(a){var b,c,f,g;for("string"==typeof a&&(a=[a]),b=0;b<a.length;b++)c=a[b].split("|"),f=A(c[0]),g=A(c[1]),d[f]=g,e[f]=c[0],d[g]=f,e[g]=c[1]}function F(a){B(a.zones),E(a.links),J.dataVersion=a.version}function G(a){return G.didShowError||(G.didShowError=!0,I("moment.tz.zoneExists('"+a+"') has been deprecated in favor of !moment.tz.zone('"+a+"')")),!!C(a)}function H(a){return!(!a._a||void 0!==a._tzm)}function I(a){"undefined"!=typeof console&&"function"==typeof console.error&&console.error(a)}function J(b){var c=Array.prototype.slice.call(arguments,0,-1),d=arguments[arguments.length-1],e=C(d),f=a.utc.apply(null,c);return e&&!a.isMoment(b)&&H(f)&&f.add(e.parse(f),"minutes"),f.tz(d),f}function L(a){return function(){return this._z?this._z.abbr(this):a.call(this)}}function M(a){return function(){return this._z=null,a.apply(this,arguments)}}if(void 0!==a.tz)return I("Moment Timezone "+a.tz.version+" was already loaded "+(a.tz.dataVersion?"with data from ":"without any data")+a.tz.dataVersion),a;var g,b="0.5.6",c={},d={},e={},f={},h=a.version.split("."),i=+h[0],j=+h[1];(i<2||2===i&&j<6)&&I("Moment Timezone requires Moment.js >= 2.6.0. You are using Moment.js "+a.version+". See momentjs.com"),q.prototype={_set:function(a){this.name=a.name,this.abbrs=a.abbrs,this.untils=a.untils,this.offsets=a.offsets,this.population=a.population},_index:function(a){var d,b=+a,c=this.untils;for(d=0;d<c.length;d++)if(b<c[d])return d},parse:function(a){var f,g,h,i,b=+a,c=this.offsets,d=this.untils,e=d.length-1;for(i=0;i<e;i++)if(f=c[i],g=c[i+1],h=c[i?i-1:i],f<g&&J.moveAmbiguousForward?f=g:f>h&&J.moveInvalidForward&&(f=h),b<d[i]-6e4*f)return c[i];return c[e]},abbr:function(a){return this.abbrs[this._index(a)]},offset:function(a){return this.offsets[this._index(a)]}},s.prototype.scoreOffsetAt=function(a){this.offsetScore+=Math.abs(this.zone.offset(a.at)-a.offset),this.zone.abbr(a.at).replace(/[^A-Z]/g,"")!==a.abbr&&this.abbrScore++},J.version=b,J.dataVersion="",J._zones=c,J._links=d,J._names=e,J.add=B,J.link=E,J.load=F,J.zone=C,J.zoneExists=G,J.guess=z,J.names=D,J.Zone=q,J.unpack=p,J.unpackBase60=l,J.needsOffset=H,J.moveInvalidForward=!0,J.moveAmbiguousForward=!1;var K=a.fn;a.tz=J,a.defaultZone=null,a.updateOffset=function(b,c){var e,d=a.defaultZone;void 0===b._z&&(d&&H(b)&&!b._isUTC&&(b._d=a.utc(b._a)._d,b.utc().add(d.parse(b),"minutes")),b._z=d),b._z&&(e=b._z.offset(b),Math.abs(e)<16&&(e/=60),void 0!==b.utcOffset?b.utcOffset(-e,c):b.zone(e,c))},K.tz=function(b){return b?(this._z=C(b),this._z?a.updateOffset(this):I("Moment Timezone has no data for "+b+". See http://momentjs.com/timezone/docs/#/data-loading/."),this):this._z?this._z.name:void 0},K.zoneName=L(K.zoneName),K.zoneAbbr=L(K.zoneAbbr),K.utc=M(K.utc),a.tz.setDefault=function(b){return(i<2||2===i&&j<9)&&I("Moment Timezone setDefault() requires Moment.js >= 2.9.0. You are using Moment.js "+a.version+"."),a.defaultZone=b?C(b):null,a};var N=a.momentProperties;return"[object Array]"===Object.prototype.toString.call(N)?(N.push("_z"),N.push("_a")):N&&(N._z=null),a});


(function($){

  $.fn.simplyCountable = function(options){

    options = $.extend({
      counter:            '#counter',
      countType:          'characters',
      maxCount:           200,
      strictMax:          false,
      countDirection:     'down',
      safeClass:          'safe',
      overClass:          'over',
      thousandSeparator:  ',',
      onOverCount:        function(){},
      onSafeCount:        function(){},
      onMaxCount:         function(){}
    }, options);

    var navKeys = [33,34,35,36,37,38,39,40];

    return $(this).each(function(){

      var countable = $(this);
      var counter = $(options.counter);
      if (!counter.length) { return false; }

      var countCheck = function(){

        var count;
        var revCount;

        var reverseCount = function(ct){
          return ct - (ct*2) + options.maxCount;
        }

        var countInt = function(){
          return (options.countDirection === 'up') ? revCount : count;
        }

        var numberFormat = function(ct){
          var prefix = '';
          if (options.thousandSeparator){
            ct = ct.toString();
            // Handle large negative numbers
            if (ct.match(/^-/)) {
              ct = ct.substr(1);
              prefix = '-';
            }
            for (var i = ct.length-3; i > 0; i -= 3){
              ct = ct.substr(0,i) + options.thousandSeparator + ct.substr(i);
            }
          }
          return prefix + ct;
        }

        var changeCountableValue = function(val){
          countable.val(val).trigger('change');
        }

        /* Calculates count for either words or characters */
        if (options.countType === 'words'){
          count = options.maxCount - $.trim(countable.val()).split(/\s+/).length;
          if (countable.val() === ''){ count += 1; }
        }
        else { count = options.maxCount - countable.val().length; }
        revCount = reverseCount(count);

        /* If strictMax set restrict further characters */
        if (options.strictMax && count <= 0){
          var content = countable.val();
          if (count < 0) {
            options.onMaxCount(countInt(), countable, counter);
          }
          if (options.countType === 'words'){
            var allowedText = content.match( new RegExp('\\s?(\\S+\\s+){'+ options.maxCount +'}') );
            if (allowedText) {
              changeCountableValue(allowedText[0]);
            }
          }
          else { changeCountableValue(content.substring(0, options.maxCount)); }
          count = 0, revCount = options.maxCount;
        }

        counter.text(numberFormat(countInt()));

        /* Set CSS class rules and API callbacks */
        if (!counter.hasClass(options.safeClass) && !counter.hasClass(options.overClass)){
          if (count < 0){ counter.addClass(options.overClass); }
          else { counter.addClass(options.safeClass); }
        }
        else if (count < 0 && counter.hasClass(options.safeClass)){
          counter.removeClass(options.safeClass).addClass(options.overClass);
          options.onOverCount(countInt(), countable, counter);
        }
        else if (count >= 0 && counter.hasClass(options.overClass)){
          counter.removeClass(options.overClass).addClass(options.safeClass);
          options.onSafeCount(countInt(), countable, counter);
        }

      };

      countCheck();

      countable.on('keyup blur paste', function(e) {
        switch(e.type) {
          case 'keyup':
            // Skip navigational key presses
            if ($.inArray(e.which, navKeys) < 0) { countCheck(); }
            break;
          case 'paste':
            // Wait a few miliseconds if a paste event
            setTimeout(countCheck, (e.type === 'paste' ? 5 : 0));
            break;
          default:
            countCheck();
            break;
        }
      });

    });

  };

})(jQuery);


Handlebars.registerHelper("parseClassIcon", function(str) {
  var colors = '{"Romance": "pink", "Comedy": "yellow", "Horror": "blue", "Sci-fi": "darkblue", "Tragedy": "perple"}';
  var obj = JSON.parse(colors);
  if (str !== null) {
    return obj[str.split('___')[2]];
  } else {
    return "";
  }
});


var startDate = '';

$.get(customUrl, {}, function (xml){
  startDate = xml.getElementsByTagName("start-date")[0].childNodes[0].nodeValue;
  refDomain = xml.getElementsByTagName("domain")[0].childNodes[0].nodeValue;

  var curDay = calcDay(startDate);

  getKeyword(curDay);

  var week = calcWeek(curDay);
  var lang = $("#select-language").val();

  var langNode = xml.getElementsByTagName(lang)[0];
  var childNode = langNode.getElementsByTagName("gallery")[0];




  var winnerDate;
  if (curDay <= 7) {

    winnerDate = langNode.getElementsByTagName("end-week-1")[0].childNodes[0].nodeValue;

  } else if (curDay > 7 && curDay <= 14) {

    winnerDate = langNode.getElementsByTagName("end-week-2")[0].childNodes[0].nodeValue;

  } else if (curDay > 14 && curDay <= 21){

    winnerDate = langNode.getElementsByTagName("end-week-3")[0].childNodes[0].nodeValue;

  }

  $(".thank-you-wrapper").find('.welcome-title span').html(winnerDate);




  for (var i = 1; i <= week; i++) {

    var url = "//woobox.com/" + childNode.getElementsByTagName("week-" + i)[0].childNodes[0].nodeValue + "/gallery?web=1";

    $(".week-links .week-link:nth-child(" + i + ") a span").remove();
    $(".week-links .week-link:nth-child(" + i + ") a").attr("href", url).addClass("active-link");

  }

  if (week > 1) {
    $(".nav-menus .menu-list li.hide").removeClass("hide");
  }

});

function getKeyword(curDay) {
  var lang = $("#select-language").val();
  if (lang !== "" && lang !== 'undefined' && parseInt(curDay) >= 0) {

    $.get(domain + "data/keyword-" + (lang === null ? "en" : lang) + ".xml", {}, function (xml){

      //get keyword
      $('.key-word').html(xml.getElementsByTagName("keyword")[curDay - 1].childNodes[0].nodeValue);
      $('.key-block .desc').html(xml.getElementsByTagName("description")[curDay].childNodes[0].nodeValue);
      $('.key-wrapper .media img').attr("src", xml.getElementsByTagName("image")[curDay].childNodes[0].nodeValue);

      //get week, day
      var week = '',
          date = '';

      if (curDay <= 7) {

        var items = xml.getElementsByTagName("weeks")[0];
        week = items.getElementsByTagName("title")[0].childNodes[0].nodeValue;
        date = items.getElementsByTagName("date")[curDay - 1].childNodes[0].nodeValue;

      } else if (curDay > 7 && curDay <= 14) {

        var items = xml.getElementsByTagName("weeks")[1];
        week = items.getElementsByTagName("title")[0].childNodes[0].nodeValue;
        date = items.getElementsByTagName("date")[curDay - 8].childNodes[0].nodeValue;

      } else if (curDay > 14 && curDay <= 21){

        var items = xml.getElementsByTagName("weeks")[2];
        week = items.getElementsByTagName("title")[0].childNodes[0].nodeValue;
        date = items.getElementsByTagName("date")[curDay - 15].childNodes[0].nodeValue;

      }

      for (var i = 1; i < 4; i++) {
        var slider = xml.getElementsByTagName("slider-item")[i - 1];
        var index = slider.getElementsByTagName("index")[0].childNodes[0].nodeValue;
        var title = slider.getElementsByTagName("title")[0].childNodes[0].nodeValue;

        var el = $("#slider-video li:nth-child(" + i + ")");

        el.find(".index").html(index);
        el.find(".title").html(title);
      }


      $('.form-heading').find('[data-week]').html(week);
      $('.form-heading').find('[data-date]').html(date);

    });
  }

}

Handlebars.registerHelper("parseSelectLangu", function(str, index) {
  if (str !== null) {
    return str.split('___')[index];
  } else {
    return "";
  }
});


function calcTime() {
  return moment().tz("Asia/Hong_Kong").format('MM.DD.YYYY');
}

function parseDate(str) {
  var mdy = str.split('.');
  return new Date(mdy[2], mdy[0]-1, mdy[1]);
}

function diffDay(first, second) {
  return Math.round((second-first)/(1000*60*60*24));
}

function calcDay(startDay) {
  var diffDays = diffDay(parseDate(startDay), parseDate(calcTime())) + 1;
  return diffDays;
}

function callbackRecaptcha() {
  $(".validate-captcha").val(calcTime());
}

function addData() {
  var name = $(".first-name");
  var email = $(".input-email");
  var country = $(".input-country");
  var story = $(".textarea-control");
  var genre = $(".genre");
  var conditions = $(".custom-checkbox");
  var captcha = $(".validate-captcha");
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  $(".error").remove();
  if ($.trim(name.val()) == "") {
    name.after('<p class="error">' + name.data('error-message') + '</p>');
  }

  if ($.trim(email.val()) == "") {
    email.after('<p class="error">' + email.data('error-message') + '</p>');
  } else if(!re.test(email.val())) {
    email.after('<p class="error">' + email.data('error-message-invalid') + '</p>');
  }

  if ($.trim(country.val()) == "") {
    $(".type-select .inputs").append.after('<p class="error">' + country.data('error-message') + '</p>');
  }

  if ($.trim(story.val()) == "") {
    story.after('<p class="error">' + story.data('error-message') + '</p>');
  }

  if (!$(genre).is(":checked")) {
    $(".type-radio .inputs").append('<p class="error">' + $(".type-radio .inputs").data('error-message') + '</p>');
    return false;
  }

  if (!$(conditions).is(":checked")) {
    $(".type-checkbox .inputs").append('<p class="error">' + conditions.data('error-message') + '</p>');
  }

  if ($.trim(captcha.val()) == "") {
    $(".g-recaptcha").after('<p class="error">' + $(".g-recaptcha").data('error-message') + '</p>');
  }

  $(".last-name").val('___' + calcTime() + '___' + $(".genre:checked").val());

}

function calcWeek(day) {
  if (day <= 7) {
    return 1;
  } else if (day > 7 && day <= 14) {
    return 2;
  } else if (day > 14){
    return 3;
  }
}

function getLanguage() {
  var lang = $("#select-language").val();
  if (lang === "") {
    lang = "en";
  }
  //setCookie("language", lang, 365);

  return $("#select-language").val();
}

function changeLanguage() {
  var lang = $("#select-language").val();
  setCookie("language", lang, 365);

  window.top.location.href = refDomain + lang;
}


function redirectPage(type) {
  $.get(customUrl, {}, function (xml){
    var lang = getLanguage();

    var langNode = xml.getElementsByTagName(lang)[0];
    var childNode;
    switch(type) {
      case "1":
        childNode = langNode.getElementsByTagName("gallery")[0];
        break;
      case "2":
        childNode = langNode.getElementsByTagName("winner")[0];
        break;
    }
    var week = calcWeek(calcDay(startDate));
    var link = childNode.getElementsByTagName("week-" + week)[0].childNodes[0].nodeValue;
    var curUrl = window.location.href;
    if (curUrl !== link) {
      document.location.href = link;
    }
  });
}

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
        c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkInput() {
  var val = $('.textarea-control').val();
  if (val.length > 200) {
    return false;
  }
}

function shareFacebook(content, mynode) {
  var lang = getLanguage();
  var win = window.open('', '_blank');
  $.get(customUrl, {}, function (xml){

    var langNode = xml.getElementsByTagName(lang)[0];

    var title = langNode.getElementsByTagName("title")[0].childNodes[0].nodeValue;
    var desc = langNode.getElementsByTagName("description")[0].childNodes[0].nodeValue;
    var caption = langNode.getElementsByTagName("caption")[0].childNodes[0].nodeValue;
    var url = refDomain + lang;//langNode.getElementsByTagName("url")[0].childNodes[0].nodeValue;
    var images = langNode.getElementsByTagName("images")[0];
    var pic = images.getElementsByTagName(mynode.toLowerCase())[0].childNodes[0].nodeValue;

    var link = "https://www.facebook.com/dialog/feed?app_id=255453481519606&link=" + url + "&picture=" + pic + "&name=" + title + "&caption=" + caption + "&description=" + (content + ' ' + desc) + "&redirect_uri=" + url;

    win.location = link;
    win.focus();
  });
}

window.addEventListener('message', function(event) {
  if (event.data === 'facebook') {
    $("#page-container").removeClass('no-facebook').addClass('has-facebook');
    $("html").addClass('facebook');
    $(".page-component-has-overflow div.banner").remove();
  }
  if (!$("#page-container").hasClass('has-facebook')) {
    $("#page-container").addClass('no-facebook');
  }
  $('header').addClass('visible');
});


$('.start-now').on('click touchstart', function(){
  $('#entrypage-container').animate({
    scrollTop: $(".banner").height()
  }, 1500, function(){});
});


//youtube modal
window.onclick = function(event) {
  if($(event.target).attr('class') === 'youtube-modal') {
    closeYoutube();
  }
}
var videoHolder;

function openYoutube() {
  $('.youtube-modal').show();
  function onYouTubeIframeAPIReady(videoId) {
    videoHolder = new YT.Player('player', {
      height: '100%',
      width: '100%',
      videoId: videoId,
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      }
    });
  };
  if(!videoHolder) {
    var videoId = $('.btn-watch').attr('data-videoId');
    onYouTubeIframeAPIReady(videoId);
  }
  $('.youtube-modal').bind('touchmove', false);
}
function closeYoutube(){
  $('.youtube-modal').hide();
  stopVideo();
  $('.youtube-modal').bind('touchmove', true);
}
//youtube api
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onPlayerReady(event) {
  event.target.playVideo();
}
var done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    // setTimeout(stopVideo, 6000);
    done = true;
  }
}
function stopVideo() {
  videoHolder.stopVideo();
}

function sliderVideo() {
  var site = $('body');
  var width = site.width();
  var slider = $('#slider-video');
  var options = {
    // autoplay: true,
    // autoplaySpeed: 2000,
    dots: true,
    dotsClass: 'slick-dots video-dots',
    nextArrow: '<button type="button" class="slick-next"></button>',
    prevArrow: '<button type="button" class="slick-prev"></button>',
    slidesToScroll: 1,
    slidesToShow: 1
  }
  if (width <= 809) {
    if (!slider.hasClass('slick-initialized')) {
      slider.slick(options);
    } else {
      return false;
    }
  } else {
    if(slider.hasClass('slick-initialized')) {
      slider.slick('unslick');
    }
  }
}
window.onload = function() {
  if (document.referrer === null || document.referrer == "") {
    var fullPath = document.location;
    var pathname = fullPath.pathname;
    var page = "";
    if (pathname != "") {
      pathname = pathname.split("/");
      page = "?p=" + pathname[pathname.length-1];
    }
    var lang = getLanguage();
    if (lang != "") {
      lang = lang + "/";
    } else {
      lang = "en/";
    }
    document.location.href = refDomain + lang + page;
  }

  sliderVideo();
  var bannerSlider = $('.banner-slider');
  var site = $('body');
  if (!$(".has-facebook").hasClass()) {
    if (!bannerSlider.hasClass('slick-initialized')) {
      $('.banner-slider')
        .slick({
          lazyLoad: 'ondemand',
          arrows: false,
          autoplay: true,
          autoplaySpeed: 6000,
          dots: false,
          draggable: false,
          speed: 1200,
          swipe: false,
          touchMove:false,
          fade: true,
          cssEase: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        });
    }
  }

  $("#select-language").val(getLanguage());


  getLang($('#select-language'));
}
window.onresize = function() {
  sliderVideo();
}
function goBack() {
  window.history.back()
}

var offsetHeader = $('header').outerHeight(true) - parseInt($('header').css('margin-bottom'));
var heightHeader = $('header').outerHeight(true);


$(window).on('scroll load', function() {
  if (document.body.scrollTop > offsetHeader) {
    $('header').addClass('fixed-header');
    $('header').siblings('.block-gallery ').css('padding-top', heightHeader);
    $('header').siblings('.thank-you-wrapper ').css('padding-top', heightHeader);

  } else {
    $('header').removeClass('fixed-header');
    $('header').siblings('.block-gallery ').css('padding-top', '');
    $('header').siblings('.thank-you-wrapper ').css('padding-top', '');
  }
});
// window.onscroll = function() {
//   if (document.body.scrollTop > offsetHeader) {
//     $('header').addClass('fixed-header');
//     $('header').siblings('.block-gallery ').css('padding-top', heightHeader);
//     $('header').siblings('.thank-you-wrapper ').css('padding-top', heightHeader);

//   } else {
//     $('header').removeClass('fixed-header');
//     $('header').siblings('.block-gallery ').css('padding-top', '');
//     $('header').siblings('.thank-you-wrapper ').css('padding-top', '');
//   }
// };

function openHeader() {
  $('.nav-bar').addClass('open');
  $('body').css('overflow','hidden');
}

function closeHeader() {
  $('.nav-bar').removeClass('open');
  $('body').css('overflow', '');
}
$(window).on('resize load', function() {
  if( $(window).width() > 1026) {
    $('.nav-menus').removeClass('close');
    $('.nav-btn-close').addClass('open');
    // openHeader();
  } else {
    $('.nav-menus').addClass('close');
    $('.nav-btn-close').removeClass('open');
    // closeHeader();
  }
});

$('.drop-text').on('click', function(){
  openLang($(this));
});

function openLang(ele){
  if(ele.hasClass('active')){
    ele.removeClass('active');
    ele.parent().find('.subnav-language').slideUp();
  }else{
    ele.parent().find('.subnav-language').slideDown();
    ele.addClass('active');
  }
}

$('.subnav-language li').on('click', function(){
  var i = $(this).data('value');
  $('#select-language').val(i).trigger('change');

  var text = $(this).text();
  $(this).parents('.dropnav-language').find('.drop-text').html(text);
});

function getLang(ele){
  var text = ele.find('option:selected').text();
  $('.drop-text').html(text);
}

//tooltip modal
function openTooltip() {
  $('.tooltip-modal').show();
}
function closeTooltip() {
  $('.tooltip-modal').hide();
}
window.onclick = function(event) {
  if($(event.target).attr('class') === 'tooltip-modal') {
    closeTooltip();
  }
}
