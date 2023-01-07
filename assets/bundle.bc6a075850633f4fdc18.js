/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/jsbi/dist/jsbi-umd.js":
/*!********************************************!*\
  !*** ./node_modules/jsbi/dist/jsbi-umd.js ***!
  \********************************************/
/***/ (function(module) {

    (function(i,_){ true?module.exports=_():0})(this,function(){'use strict';var i=Math.imul,_=Math.clz32,t=Math.abs,e=Math.max,g=Math.floor;class o extends Array{constructor(i,_){if(super(i),this.sign=_,i>o.__kMaxLength)throw new RangeError("Maximum BigInt size exceeded")}static BigInt(i){var _=Number.isFinite;if("number"==typeof i){if(0===i)return o.__zero();if(o.__isOneDigitInt(i))return 0>i?o.__oneDigit(-i,!0):o.__oneDigit(i,!1);if(!_(i)||g(i)!==i)throw new RangeError("The number "+i+" cannot be converted to BigInt because it is not an integer");return o.__fromDouble(i)}if("string"==typeof i){const _=o.__fromString(i);if(null===_)throw new SyntaxError("Cannot convert "+i+" to a BigInt");return _}if("boolean"==typeof i)return!0===i?o.__oneDigit(1,!1):o.__zero();if("object"==typeof i){if(i.constructor===o)return i;const _=o.__toPrimitive(i);return o.BigInt(_)}throw new TypeError("Cannot convert "+i+" to a BigInt")}toDebugString(){const i=["BigInt["];for(const _ of this)i.push((_?(_>>>0).toString(16):_)+", ");return i.push("]"),i.join("")}toString(i=10){if(2>i||36<i)throw new RangeError("toString() radix argument must be between 2 and 36");return 0===this.length?"0":0==(i&i-1)?o.__toStringBasePowerOfTwo(this,i):o.__toStringGeneric(this,i,!1)}static toNumber(i){const _=i.length;if(0===_)return 0;if(1===_){const _=i.__unsignedDigit(0);return i.sign?-_:_}const t=i.__digit(_-1),e=o.__clz30(t),n=30*_-e;if(1024<n)return i.sign?-Infinity:1/0;let g=n-1,s=t,l=_-1;const r=e+3;let a=32===r?0:s<<r;a>>>=12;const u=r-12;let d=12<=r?0:s<<20+r,h=20+r;for(0<u&&0<l&&(l--,s=i.__digit(l),a|=s>>>30-u,d=s<<u+2,h=u+2);0<h&&0<l;)l--,s=i.__digit(l),d|=30<=h?s<<h-30:s>>>30-h,h-=30;const m=o.__decideRounding(i,h,l,s);if((1===m||0===m&&1==(1&d))&&(d=d+1>>>0,0===d&&(a++,0!=a>>>20&&(a=0,g++,1023<g))))return i.sign?-Infinity:1/0;const b=i.sign?-2147483648:0;return g=g+1023<<20,o.__kBitConversionInts[1]=b|g|a,o.__kBitConversionInts[0]=d,o.__kBitConversionDouble[0]}static unaryMinus(i){if(0===i.length)return i;const _=i.__copy();return _.sign=!i.sign,_}static bitwiseNot(i){return i.sign?o.__absoluteSubOne(i).__trim():o.__absoluteAddOne(i,!0)}static exponentiate(i,_){if(_.sign)throw new RangeError("Exponent must be positive");if(0===_.length)return o.__oneDigit(1,!1);if(0===i.length)return i;if(1===i.length&&1===i.__digit(0))return i.sign&&0==(1&_.__digit(0))?o.unaryMinus(i):i;if(1<_.length)throw new RangeError("BigInt too big");let t=_.__unsignedDigit(0);if(1===t)return i;if(t>=o.__kMaxLengthBits)throw new RangeError("BigInt too big");if(1===i.length&&2===i.__digit(0)){const _=1+(0|t/30),e=i.sign&&0!=(1&t),n=new o(_,e);n.__initializeDigits();const g=1<<t%30;return n.__setDigit(_-1,g),n}let e=null,n=i;for(0!=(1&t)&&(e=i),t>>=1;0!==t;t>>=1)n=o.multiply(n,n),0!=(1&t)&&(null===e?e=n:e=o.multiply(e,n));return e}static multiply(_,t){if(0===_.length)return _;if(0===t.length)return t;let i=_.length+t.length;30<=_.__clzmsd()+t.__clzmsd()&&i--;const e=new o(i,_.sign!==t.sign);e.__initializeDigits();for(let n=0;n<_.length;n++)o.__multiplyAccumulate(t,_.__digit(n),e,n);return e.__trim()}static divide(i,_){if(0===_.length)throw new RangeError("Division by zero");if(0>o.__absoluteCompare(i,_))return o.__zero();const t=i.sign!==_.sign,e=_.__unsignedDigit(0);let n;if(1===_.length&&32767>=e){if(1===e)return t===i.sign?i:o.unaryMinus(i);n=o.__absoluteDivSmall(i,e,null)}else n=o.__absoluteDivLarge(i,_,!0,!1);return n.sign=t,n.__trim()}static remainder(i,_){if(0===_.length)throw new RangeError("Division by zero");if(0>o.__absoluteCompare(i,_))return i;const t=_.__unsignedDigit(0);if(1===_.length&&32767>=t){if(1===t)return o.__zero();const _=o.__absoluteModSmall(i,t);return 0===_?o.__zero():o.__oneDigit(_,i.sign)}const e=o.__absoluteDivLarge(i,_,!1,!0);return e.sign=i.sign,e.__trim()}static add(i,_){const t=i.sign;return t===_.sign?o.__absoluteAdd(i,_,t):0<=o.__absoluteCompare(i,_)?o.__absoluteSub(i,_,t):o.__absoluteSub(_,i,!t)}static subtract(i,_){const t=i.sign;return t===_.sign?0<=o.__absoluteCompare(i,_)?o.__absoluteSub(i,_,t):o.__absoluteSub(_,i,!t):o.__absoluteAdd(i,_,t)}static leftShift(i,_){return 0===_.length||0===i.length?i:_.sign?o.__rightShiftByAbsolute(i,_):o.__leftShiftByAbsolute(i,_)}static signedRightShift(i,_){return 0===_.length||0===i.length?i:_.sign?o.__leftShiftByAbsolute(i,_):o.__rightShiftByAbsolute(i,_)}static unsignedRightShift(){throw new TypeError("BigInts have no unsigned right shift; use >> instead")}static lessThan(i,_){return 0>o.__compareToBigInt(i,_)}static lessThanOrEqual(i,_){return 0>=o.__compareToBigInt(i,_)}static greaterThan(i,_){return 0<o.__compareToBigInt(i,_)}static greaterThanOrEqual(i,_){return 0<=o.__compareToBigInt(i,_)}static equal(_,t){if(_.sign!==t.sign)return!1;if(_.length!==t.length)return!1;for(let e=0;e<_.length;e++)if(_.__digit(e)!==t.__digit(e))return!1;return!0}static notEqual(i,_){return!o.equal(i,_)}static bitwiseAnd(i,_){if(!i.sign&&!_.sign)return o.__absoluteAnd(i,_).__trim();if(i.sign&&_.sign){const t=e(i.length,_.length)+1;let n=o.__absoluteSubOne(i,t);const g=o.__absoluteSubOne(_);return n=o.__absoluteOr(n,g,n),o.__absoluteAddOne(n,!0,n).__trim()}return i.sign&&([i,_]=[_,i]),o.__absoluteAndNot(i,o.__absoluteSubOne(_)).__trim()}static bitwiseXor(i,_){if(!i.sign&&!_.sign)return o.__absoluteXor(i,_).__trim();if(i.sign&&_.sign){const t=e(i.length,_.length),n=o.__absoluteSubOne(i,t),g=o.__absoluteSubOne(_);return o.__absoluteXor(n,g,n).__trim()}const t=e(i.length,_.length)+1;i.sign&&([i,_]=[_,i]);let n=o.__absoluteSubOne(_,t);return n=o.__absoluteXor(n,i,n),o.__absoluteAddOne(n,!0,n).__trim()}static bitwiseOr(i,_){const t=e(i.length,_.length);if(!i.sign&&!_.sign)return o.__absoluteOr(i,_).__trim();if(i.sign&&_.sign){let e=o.__absoluteSubOne(i,t);const n=o.__absoluteSubOne(_);return e=o.__absoluteAnd(e,n,e),o.__absoluteAddOne(e,!0,e).__trim()}i.sign&&([i,_]=[_,i]);let n=o.__absoluteSubOne(_,t);return n=o.__absoluteAndNot(n,i,n),o.__absoluteAddOne(n,!0,n).__trim()}static asIntN(_,t){if(0===t.length)return t;if(_=g(_),0>_)throw new RangeError("Invalid value: not (convertible to) a safe integer");if(0===_)return o.__zero();if(_>=o.__kMaxLengthBits)return t;const e=0|(_+29)/30;if(t.length<e)return t;const s=t.__unsignedDigit(e-1),l=1<<(_-1)%30;if(t.length===e&&s<l)return t;if(!((s&l)===l))return o.__truncateToNBits(_,t);if(!t.sign)return o.__truncateAndSubFromPowerOfTwo(_,t,!0);if(0==(s&l-1)){for(let n=e-2;0<=n;n--)if(0!==t.__digit(n))return o.__truncateAndSubFromPowerOfTwo(_,t,!1);return t.length===e&&s===l?t:o.__truncateToNBits(_,t)}return o.__truncateAndSubFromPowerOfTwo(_,t,!1)}static asUintN(i,_){if(0===_.length)return _;if(i=g(i),0>i)throw new RangeError("Invalid value: not (convertible to) a safe integer");if(0===i)return o.__zero();if(_.sign){if(i>o.__kMaxLengthBits)throw new RangeError("BigInt too big");return o.__truncateAndSubFromPowerOfTwo(i,_,!1)}if(i>=o.__kMaxLengthBits)return _;const t=0|(i+29)/30;if(_.length<t)return _;const e=i%30;if(_.length==t){if(0===e)return _;const i=_.__digit(t-1);if(0==i>>>e)return _}return o.__truncateToNBits(i,_)}static ADD(i,_){if(i=o.__toPrimitive(i),_=o.__toPrimitive(_),"string"==typeof i)return"string"!=typeof _&&(_=_.toString()),i+_;if("string"==typeof _)return i.toString()+_;if(i=o.__toNumeric(i),_=o.__toNumeric(_),o.__isBigInt(i)&&o.__isBigInt(_))return o.add(i,_);if("number"==typeof i&&"number"==typeof _)return i+_;throw new TypeError("Cannot mix BigInt and other types, use explicit conversions")}static LT(i,_){return o.__compare(i,_,0)}static LE(i,_){return o.__compare(i,_,1)}static GT(i,_){return o.__compare(i,_,2)}static GE(i,_){return o.__compare(i,_,3)}static EQ(i,_){for(;;){if(o.__isBigInt(i))return o.__isBigInt(_)?o.equal(i,_):o.EQ(_,i);if("number"==typeof i){if(o.__isBigInt(_))return o.__equalToNumber(_,i);if("object"!=typeof _)return i==_;_=o.__toPrimitive(_)}else if("string"==typeof i){if(o.__isBigInt(_))return i=o.__fromString(i),null!==i&&o.equal(i,_);if("object"!=typeof _)return i==_;_=o.__toPrimitive(_)}else if("boolean"==typeof i){if(o.__isBigInt(_))return o.__equalToNumber(_,+i);if("object"!=typeof _)return i==_;_=o.__toPrimitive(_)}else if("symbol"==typeof i){if(o.__isBigInt(_))return!1;if("object"!=typeof _)return i==_;_=o.__toPrimitive(_)}else if("object"==typeof i){if("object"==typeof _&&_.constructor!==o)return i==_;i=o.__toPrimitive(i)}else return i==_}}static NE(i,_){return!o.EQ(i,_)}static __zero(){return new o(0,!1)}static __oneDigit(i,_){const t=new o(1,_);return t.__setDigit(0,i),t}__copy(){const _=new o(this.length,this.sign);for(let t=0;t<this.length;t++)_[t]=this[t];return _}__trim(){let i=this.length,_=this[i-1];for(;0===_;)i--,_=this[i-1],this.pop();return 0===i&&(this.sign=!1),this}__initializeDigits(){for(let _=0;_<this.length;_++)this[_]=0}static __decideRounding(i,_,t,e){if(0<_)return-1;let n;if(0>_)n=-_-1;else{if(0===t)return-1;t--,e=i.__digit(t),n=29}let g=1<<n;if(0==(e&g))return-1;if(g-=1,0!=(e&g))return 1;for(;0<t;)if(t--,0!==i.__digit(t))return 1;return 0}static __fromDouble(i){o.__kBitConversionDouble[0]=i;const _=2047&o.__kBitConversionInts[1]>>>20,t=_-1023,e=(0|t/30)+1,n=new o(e,0>i);let g=1048575&o.__kBitConversionInts[1]|1048576,s=o.__kBitConversionInts[0];const l=20,r=t%30;let a,u=0;if(20>r){const i=l-r;u=i+32,a=g>>>i,g=g<<32-i|s>>>i,s<<=32-i}else if(20===r)u=32,a=g,g=s,s=0;else{const i=r-l;u=32-i,a=g<<i|s>>>32-i,g=s<<i,s=0}n.__setDigit(e-1,a);for(let _=e-2;0<=_;_--)0<u?(u-=30,a=g>>>2,g=g<<30|s>>>2,s<<=30):a=0,n.__setDigit(_,a);return n.__trim()}static __isWhitespace(i){return!!(13>=i&&9<=i)||(159>=i?32==i:131071>=i?160==i||5760==i:196607>=i?(i&=131071,10>=i||40==i||41==i||47==i||95==i||4096==i):65279==i)}static __fromString(i,_=0){let t=0;const e=i.length;let n=0;if(n===e)return o.__zero();let g=i.charCodeAt(n);for(;o.__isWhitespace(g);){if(++n===e)return o.__zero();g=i.charCodeAt(n)}if(43===g){if(++n===e)return null;g=i.charCodeAt(n),t=1}else if(45===g){if(++n===e)return null;g=i.charCodeAt(n),t=-1}if(0===_){if(_=10,48===g){if(++n===e)return o.__zero();if(g=i.charCodeAt(n),88===g||120===g){if(_=16,++n===e)return null;g=i.charCodeAt(n)}else if(79===g||111===g){if(_=8,++n===e)return null;g=i.charCodeAt(n)}else if(66===g||98===g){if(_=2,++n===e)return null;g=i.charCodeAt(n)}}}else if(16===_&&48===g){if(++n===e)return o.__zero();if(g=i.charCodeAt(n),88===g||120===g){if(++n===e)return null;g=i.charCodeAt(n)}}if(0!=t&&10!==_)return null;for(;48===g;){if(++n===e)return o.__zero();g=i.charCodeAt(n)}const s=e-n;let l=o.__kMaxBitsPerChar[_],r=o.__kBitsPerCharTableMultiplier-1;if(s>1073741824/l)return null;const a=l*s+r>>>o.__kBitsPerCharTableShift,u=new o(0|(a+29)/30,!1),h=10>_?_:10,b=10<_?_-10:0;if(0==(_&_-1)){l>>=o.__kBitsPerCharTableShift;const _=[],t=[];let s=!1;do{let o=0,r=0;for(;;){let _;if(g-48>>>0<h)_=g-48;else if((32|g)-97>>>0<b)_=(32|g)-87;else{s=!0;break}if(r+=l,o=o<<l|_,++n===e){s=!0;break}if(g=i.charCodeAt(n),30<r+l)break}_.push(o),t.push(r)}while(!s);o.__fillFromParts(u,_,t)}else{u.__initializeDigits();let t=!1,s=0;do{let a=0,D=1;for(;;){let o;if(g-48>>>0<h)o=g-48;else if((32|g)-97>>>0<b)o=(32|g)-87;else{t=!0;break}const l=D*_;if(1073741823<l)break;if(D=l,a=a*_+o,s++,++n===e){t=!0;break}g=i.charCodeAt(n)}r=30*o.__kBitsPerCharTableMultiplier-1;const c=0|(l*s+r>>>o.__kBitsPerCharTableShift)/30;u.__inplaceMultiplyAdd(D,a,c)}while(!t)}if(n!==e){if(!o.__isWhitespace(g))return null;for(n++;n<e;n++)if(g=i.charCodeAt(n),!o.__isWhitespace(g))return null}return u.sign=-1==t,u.__trim()}static __fillFromParts(_,t,e){let n=0,g=0,o=0;for(let s=t.length-1;0<=s;s--){const i=t[s],l=e[s];g|=i<<o,o+=l,30===o?(_.__setDigit(n++,g),o=0,g=0):30<o&&(_.__setDigit(n++,1073741823&g),o-=30,g=i>>>l-o)}if(0!==g){if(n>=_.length)throw new Error("implementation bug");_.__setDigit(n++,g)}for(;n<_.length;n++)_.__setDigit(n,0)}static __toStringBasePowerOfTwo(_,i){const t=_.length;let e=i-1;e=(85&e>>>1)+(85&e),e=(51&e>>>2)+(51&e),e=(15&e>>>4)+(15&e);const n=e,g=i-1,s=_.__digit(t-1),l=o.__clz30(s);let r=0|(30*t-l+n-1)/n;if(_.sign&&r++,268435456<r)throw new Error("string too long");const a=Array(r);let u=r-1,d=0,h=0;for(let e=0;e<t-1;e++){const i=_.__digit(e),t=(d|i<<h)&g;a[u--]=o.__kConversionChars[t];const s=n-h;for(d=i>>>s,h=30-s;h>=n;)a[u--]=o.__kConversionChars[d&g],d>>>=n,h-=n}const m=(d|s<<h)&g;for(a[u--]=o.__kConversionChars[m],d=s>>>n-h;0!==d;)a[u--]=o.__kConversionChars[d&g],d>>>=n;if(_.sign&&(a[u--]="-"),-1!=u)throw new Error("implementation bug");return a.join("")}static __toStringGeneric(_,i,t){const e=_.length;if(0===e)return"";if(1===e){let e=_.__unsignedDigit(0).toString(i);return!1===t&&_.sign&&(e="-"+e),e}const n=30*e-o.__clz30(_.__digit(e-1)),g=o.__kMaxBitsPerChar[i],s=g-1;let l=n*o.__kBitsPerCharTableMultiplier;l+=s-1,l=0|l/s;const r=l+1>>1,a=o.exponentiate(o.__oneDigit(i,!1),o.__oneDigit(r,!1));let u,d;const h=a.__unsignedDigit(0);if(1===a.length&&32767>=h){u=new o(_.length,!1),u.__initializeDigits();let t=0;for(let e=2*_.length-1;0<=e;e--){const i=t<<15|_.__halfDigit(e);u.__setHalfDigit(e,0|i/h),t=0|i%h}d=t.toString(i)}else{const t=o.__absoluteDivLarge(_,a,!0,!0);u=t.quotient;const e=t.remainder.__trim();d=o.__toStringGeneric(e,i,!0)}u.__trim();let m=o.__toStringGeneric(u,i,!0);for(;d.length<r;)d="0"+d;return!1===t&&_.sign&&(m="-"+m),m+d}static __unequalSign(i){return i?-1:1}static __absoluteGreater(i){return i?-1:1}static __absoluteLess(i){return i?1:-1}static __compareToBigInt(i,_){const t=i.sign;if(t!==_.sign)return o.__unequalSign(t);const e=o.__absoluteCompare(i,_);return 0<e?o.__absoluteGreater(t):0>e?o.__absoluteLess(t):0}static __compareToNumber(i,_){if(o.__isOneDigitInt(_)){const e=i.sign,n=0>_;if(e!==n)return o.__unequalSign(e);if(0===i.length){if(n)throw new Error("implementation bug");return 0===_?0:-1}if(1<i.length)return o.__absoluteGreater(e);const g=t(_),s=i.__unsignedDigit(0);return s>g?o.__absoluteGreater(e):s<g?o.__absoluteLess(e):0}return o.__compareToDouble(i,_)}static __compareToDouble(i,_){if(_!==_)return _;if(_===1/0)return-1;if(_===-Infinity)return 1;const t=i.sign;if(t!==0>_)return o.__unequalSign(t);if(0===_)throw new Error("implementation bug: should be handled elsewhere");if(0===i.length)return-1;o.__kBitConversionDouble[0]=_;const e=2047&o.__kBitConversionInts[1]>>>20;if(2047==e)throw new Error("implementation bug: handled elsewhere");const n=e-1023;if(0>n)return o.__absoluteGreater(t);const g=i.length;let s=i.__digit(g-1);const l=o.__clz30(s),r=30*g-l,a=n+1;if(r<a)return o.__absoluteLess(t);if(r>a)return o.__absoluteGreater(t);let u=1048576|1048575&o.__kBitConversionInts[1],d=o.__kBitConversionInts[0];const h=20,m=29-l;if(m!==(0|(r-1)%30))throw new Error("implementation bug");let b,D=0;if(20>m){const i=h-m;D=i+32,b=u>>>i,u=u<<32-i|d>>>i,d<<=32-i}else if(20===m)D=32,b=u,u=d,d=0;else{const i=m-h;D=32-i,b=u<<i|d>>>32-i,u=d<<i,d=0}if(s>>>=0,b>>>=0,s>b)return o.__absoluteGreater(t);if(s<b)return o.__absoluteLess(t);for(let e=g-2;0<=e;e--){0<D?(D-=30,b=u>>>2,u=u<<30|d>>>2,d<<=30):b=0;const _=i.__unsignedDigit(e);if(_>b)return o.__absoluteGreater(t);if(_<b)return o.__absoluteLess(t)}if(0!==u||0!==d){if(0===D)throw new Error("implementation bug");return o.__absoluteLess(t)}return 0}static __equalToNumber(i,_){return o.__isOneDigitInt(_)?0===_?0===i.length:1===i.length&&i.sign===0>_&&i.__unsignedDigit(0)===t(_):0===o.__compareToDouble(i,_)}static __comparisonResultToBool(i,_){return 0===_?0>i:1===_?0>=i:2===_?0<i:3===_?0<=i:void 0}static __compare(i,_,t){if(i=o.__toPrimitive(i),_=o.__toPrimitive(_),"string"==typeof i&&"string"==typeof _)switch(t){case 0:return i<_;case 1:return i<=_;case 2:return i>_;case 3:return i>=_;}if(o.__isBigInt(i)&&"string"==typeof _)return _=o.__fromString(_),null!==_&&o.__comparisonResultToBool(o.__compareToBigInt(i,_),t);if("string"==typeof i&&o.__isBigInt(_))return i=o.__fromString(i),null!==i&&o.__comparisonResultToBool(o.__compareToBigInt(i,_),t);if(i=o.__toNumeric(i),_=o.__toNumeric(_),o.__isBigInt(i)){if(o.__isBigInt(_))return o.__comparisonResultToBool(o.__compareToBigInt(i,_),t);if("number"!=typeof _)throw new Error("implementation bug");return o.__comparisonResultToBool(o.__compareToNumber(i,_),t)}if("number"!=typeof i)throw new Error("implementation bug");if(o.__isBigInt(_))return o.__comparisonResultToBool(o.__compareToNumber(_,i),2^t);if("number"!=typeof _)throw new Error("implementation bug");return 0===t?i<_:1===t?i<=_:2===t?i>_:3===t?i>=_:void 0}__clzmsd(){return o.__clz30(this.__digit(this.length-1))}static __absoluteAdd(_,t,e){if(_.length<t.length)return o.__absoluteAdd(t,_,e);if(0===_.length)return _;if(0===t.length)return _.sign===e?_:o.unaryMinus(_);let n=_.length;(0===_.__clzmsd()||t.length===_.length&&0===t.__clzmsd())&&n++;const g=new o(n,e);let s=0,l=0;for(;l<t.length;l++){const i=_.__digit(l)+t.__digit(l)+s;s=i>>>30,g.__setDigit(l,1073741823&i)}for(;l<_.length;l++){const i=_.__digit(l)+s;s=i>>>30,g.__setDigit(l,1073741823&i)}return l<g.length&&g.__setDigit(l,s),g.__trim()}static __absoluteSub(_,t,e){if(0===_.length)return _;if(0===t.length)return _.sign===e?_:o.unaryMinus(_);const n=new o(_.length,e);let g=0,s=0;for(;s<t.length;s++){const i=_.__digit(s)-t.__digit(s)-g;g=1&i>>>30,n.__setDigit(s,1073741823&i)}for(;s<_.length;s++){const i=_.__digit(s)-g;g=1&i>>>30,n.__setDigit(s,1073741823&i)}return n.__trim()}static __absoluteAddOne(_,i,t=null){const e=_.length;null===t?t=new o(e,i):t.sign=i;let n=1;for(let g=0;g<e;g++){const i=_.__digit(g)+n;n=i>>>30,t.__setDigit(g,1073741823&i)}return 0!=n&&t.__setDigitGrow(e,1),t}static __absoluteSubOne(_,t){const e=_.length;t=t||e;const n=new o(t,!1);let g=1;for(let o=0;o<e;o++){const i=_.__digit(o)-g;g=1&i>>>30,n.__setDigit(o,1073741823&i)}if(0!=g)throw new Error("implementation bug");for(let g=e;g<t;g++)n.__setDigit(g,0);return n}static __absoluteAnd(_,t,e=null){let n=_.length,g=t.length,s=g;if(n<g){s=n;const i=_,e=n;_=t,n=g,t=i,g=e}let l=s;null===e?e=new o(l,!1):l=e.length;let r=0;for(;r<s;r++)e.__setDigit(r,_.__digit(r)&t.__digit(r));for(;r<l;r++)e.__setDigit(r,0);return e}static __absoluteAndNot(_,t,e=null){const n=_.length,g=t.length;let s=g;n<g&&(s=n);let l=n;null===e?e=new o(l,!1):l=e.length;let r=0;for(;r<s;r++)e.__setDigit(r,_.__digit(r)&~t.__digit(r));for(;r<n;r++)e.__setDigit(r,_.__digit(r));for(;r<l;r++)e.__setDigit(r,0);return e}static __absoluteOr(_,t,e=null){let n=_.length,g=t.length,s=g;if(n<g){s=n;const i=_,e=n;_=t,n=g,t=i,g=e}let l=n;null===e?e=new o(l,!1):l=e.length;let r=0;for(;r<s;r++)e.__setDigit(r,_.__digit(r)|t.__digit(r));for(;r<n;r++)e.__setDigit(r,_.__digit(r));for(;r<l;r++)e.__setDigit(r,0);return e}static __absoluteXor(_,t,e=null){let n=_.length,g=t.length,s=g;if(n<g){s=n;const i=_,e=n;_=t,n=g,t=i,g=e}let l=n;null===e?e=new o(l,!1):l=e.length;let r=0;for(;r<s;r++)e.__setDigit(r,_.__digit(r)^t.__digit(r));for(;r<n;r++)e.__setDigit(r,_.__digit(r));for(;r<l;r++)e.__setDigit(r,0);return e}static __absoluteCompare(_,t){const e=_.length-t.length;if(0!=e)return e;let n=_.length-1;for(;0<=n&&_.__digit(n)===t.__digit(n);)n--;return 0>n?0:_.__unsignedDigit(n)>t.__unsignedDigit(n)?1:-1}static __multiplyAccumulate(_,t,e,n){if(0===t)return;const g=32767&t,s=t>>>15;let l=0,r=0;for(let a,u=0;u<_.length;u++,n++){a=e.__digit(n);const i=_.__digit(u),t=32767&i,d=i>>>15,h=o.__imul(t,g),m=o.__imul(t,s),b=o.__imul(d,g),D=o.__imul(d,s);a+=r+h+l,l=a>>>30,a&=1073741823,a+=((32767&m)<<15)+((32767&b)<<15),l+=a>>>30,r=D+(m>>>15)+(b>>>15),e.__setDigit(n,1073741823&a)}for(;0!=l||0!==r;n++){let i=e.__digit(n);i+=l+r,r=0,l=i>>>30,e.__setDigit(n,1073741823&i)}}static __internalMultiplyAdd(_,t,e,g,s){let l=e,a=0;for(let n=0;n<g;n++){const i=_.__digit(n),e=o.__imul(32767&i,t),g=o.__imul(i>>>15,t),u=e+((32767&g)<<15)+a+l;l=u>>>30,a=g>>>15,s.__setDigit(n,1073741823&u)}if(s.length>g)for(s.__setDigit(g++,l+a);g<s.length;)s.__setDigit(g++,0);else if(0!==l+a)throw new Error("implementation bug")}__inplaceMultiplyAdd(i,_,t){t>this.length&&(t=this.length);const e=32767&i,n=i>>>15;let g=0,s=_;for(let l=0;l<t;l++){const i=this.__digit(l),_=32767&i,t=i>>>15,r=o.__imul(_,e),a=o.__imul(_,n),u=o.__imul(t,e),d=o.__imul(t,n);let h=s+r+g;g=h>>>30,h&=1073741823,h+=((32767&a)<<15)+((32767&u)<<15),g+=h>>>30,s=d+(a>>>15)+(u>>>15),this.__setDigit(l,1073741823&h)}if(0!=g||0!==s)throw new Error("implementation bug")}static __absoluteDivSmall(_,t,e=null){null===e&&(e=new o(_.length,!1));let n=0;for(let g,o=2*_.length-1;0<=o;o-=2){g=(n<<15|_.__halfDigit(o))>>>0;const i=0|g/t;n=0|g%t,g=(n<<15|_.__halfDigit(o-1))>>>0;const s=0|g/t;n=0|g%t,e.__setDigit(o>>>1,i<<15|s)}return e}static __absoluteModSmall(_,t){let e=0;for(let n=2*_.length-1;0<=n;n--){const i=(e<<15|_.__halfDigit(n))>>>0;e=0|i%t}return e}static __absoluteDivLarge(i,_,t,e){const g=_.__halfDigitLength(),n=_.length,s=i.__halfDigitLength()-g;let l=null;t&&(l=new o(s+2>>>1,!1),l.__initializeDigits());const r=new o(g+2>>>1,!1);r.__initializeDigits();const a=o.__clz15(_.__halfDigit(g-1));0<a&&(_=o.__specialLeftShift(_,a,0));const d=o.__specialLeftShift(i,a,1),u=_.__halfDigit(g-1);let h=0;for(let a,m=s;0<=m;m--){a=32767;const i=d.__halfDigit(m+g);if(i!==u){const t=(i<<15|d.__halfDigit(m+g-1))>>>0;a=0|t/u;let e=0|t%u;const n=_.__halfDigit(g-2),s=d.__halfDigit(m+g-2);for(;o.__imul(a,n)>>>0>(e<<16|s)>>>0&&(a--,e+=u,!(32767<e)););}o.__internalMultiplyAdd(_,a,0,n,r);let e=d.__inplaceSub(r,m,g+1);0!==e&&(e=d.__inplaceAdd(_,m,g),d.__setHalfDigit(m+g,32767&d.__halfDigit(m+g)+e),a--),t&&(1&m?h=a<<15:l.__setDigit(m>>>1,h|a))}if(e)return d.__inplaceRightShift(a),t?{quotient:l,remainder:d}:d;if(t)return l;throw new Error("unreachable")}static __clz15(i){return o.__clz30(i)-15}__inplaceAdd(_,t,e){let n=0;for(let g=0;g<e;g++){const i=this.__halfDigit(t+g)+_.__halfDigit(g)+n;n=i>>>15,this.__setHalfDigit(t+g,32767&i)}return n}__inplaceSub(_,t,e){let n=0;if(1&t){t>>=1;let g=this.__digit(t),o=32767&g,s=0;for(;s<e-1>>>1;s++){const i=_.__digit(s),e=(g>>>15)-(32767&i)-n;n=1&e>>>15,this.__setDigit(t+s,(32767&e)<<15|32767&o),g=this.__digit(t+s+1),o=(32767&g)-(i>>>15)-n,n=1&o>>>15}const i=_.__digit(s),l=(g>>>15)-(32767&i)-n;n=1&l>>>15,this.__setDigit(t+s,(32767&l)<<15|32767&o);if(t+s+1>=this.length)throw new RangeError("out of bounds");0==(1&e)&&(g=this.__digit(t+s+1),o=(32767&g)-(i>>>15)-n,n=1&o>>>15,this.__setDigit(t+_.length,1073709056&g|32767&o))}else{t>>=1;let g=0;for(;g<_.length-1;g++){const i=this.__digit(t+g),e=_.__digit(g),o=(32767&i)-(32767&e)-n;n=1&o>>>15;const s=(i>>>15)-(e>>>15)-n;n=1&s>>>15,this.__setDigit(t+g,(32767&s)<<15|32767&o)}const i=this.__digit(t+g),o=_.__digit(g),s=(32767&i)-(32767&o)-n;n=1&s>>>15;let l=0;0==(1&e)&&(l=(i>>>15)-(o>>>15)-n,n=1&l>>>15),this.__setDigit(t+g,(32767&l)<<15|32767&s)}return n}__inplaceRightShift(_){if(0===_)return;let t=this.__digit(0)>>>_;const e=this.length-1;for(let n=0;n<e;n++){const i=this.__digit(n+1);this.__setDigit(n,1073741823&i<<30-_|t),t=i>>>_}this.__setDigit(e,t)}static __specialLeftShift(_,t,e){const g=_.length,n=new o(g+e,!1);if(0===t){for(let t=0;t<g;t++)n.__setDigit(t,_.__digit(t));return 0<e&&n.__setDigit(g,0),n}let s=0;for(let o=0;o<g;o++){const i=_.__digit(o);n.__setDigit(o,1073741823&i<<t|s),s=i>>>30-t}return 0<e&&n.__setDigit(g,s),n}static __leftShiftByAbsolute(_,i){const t=o.__toShiftAmount(i);if(0>t)throw new RangeError("BigInt too big");const e=0|t/30,n=t%30,g=_.length,s=0!==n&&0!=_.__digit(g-1)>>>30-n,l=g+e+(s?1:0),r=new o(l,_.sign);if(0===n){let t=0;for(;t<e;t++)r.__setDigit(t,0);for(;t<l;t++)r.__setDigit(t,_.__digit(t-e))}else{let t=0;for(let _=0;_<e;_++)r.__setDigit(_,0);for(let o=0;o<g;o++){const i=_.__digit(o);r.__setDigit(o+e,1073741823&i<<n|t),t=i>>>30-n}if(s)r.__setDigit(g+e,t);else if(0!==t)throw new Error("implementation bug")}return r.__trim()}static __rightShiftByAbsolute(_,i){const t=_.length,e=_.sign,n=o.__toShiftAmount(i);if(0>n)return o.__rightShiftByMaximum(e);const g=0|n/30,s=n%30;let l=t-g;if(0>=l)return o.__rightShiftByMaximum(e);let r=!1;if(e){if(0!=(_.__digit(g)&(1<<s)-1))r=!0;else for(let t=0;t<g;t++)if(0!==_.__digit(t)){r=!0;break}}if(r&&0===s){const i=_.__digit(t-1);0==~i&&l++}let a=new o(l,e);if(0===s){a.__setDigit(l-1,0);for(let e=g;e<t;e++)a.__setDigit(e-g,_.__digit(e))}else{let e=_.__digit(g)>>>s;const n=t-g-1;for(let t=0;t<n;t++){const i=_.__digit(t+g+1);a.__setDigit(t,1073741823&i<<30-s|e),e=i>>>s}a.__setDigit(n,e)}return r&&(a=o.__absoluteAddOne(a,!0,a)),a.__trim()}static __rightShiftByMaximum(i){return i?o.__oneDigit(1,!0):o.__zero()}static __toShiftAmount(i){if(1<i.length)return-1;const _=i.__unsignedDigit(0);return _>o.__kMaxLengthBits?-1:_}static __toPrimitive(i,_="default"){if("object"!=typeof i)return i;if(i.constructor===o)return i;if("undefined"!=typeof Symbol&&"symbol"==typeof Symbol.toPrimitive){const t=i[Symbol.toPrimitive];if(t){const i=t(_);if("object"!=typeof i)return i;throw new TypeError("Cannot convert object to primitive value")}}const t=i.valueOf;if(t){const _=t.call(i);if("object"!=typeof _)return _}const e=i.toString;if(e){const _=e.call(i);if("object"!=typeof _)return _}throw new TypeError("Cannot convert object to primitive value")}static __toNumeric(i){return o.__isBigInt(i)?i:+i}static __isBigInt(i){return"object"==typeof i&&null!==i&&i.constructor===o}static __truncateToNBits(i,_){const t=0|(i+29)/30,e=new o(t,_.sign),n=t-1;for(let t=0;t<n;t++)e.__setDigit(t,_.__digit(t));let g=_.__digit(n);if(0!=i%30){const _=32-i%30;g=g<<_>>>_}return e.__setDigit(n,g),e.__trim()}static __truncateAndSubFromPowerOfTwo(_,t,e){var n=Math.min;const g=0|(_+29)/30,s=new o(g,e);let l=0;const r=g-1;let a=0;for(const i=n(r,t.length);l<i;l++){const i=0-t.__digit(l)-a;a=1&i>>>30,s.__setDigit(l,1073741823&i)}for(;l<r;l++)s.__setDigit(l,0|1073741823&-a);let u=r<t.length?t.__digit(r):0;const d=_%30;let h;if(0==d)h=0-u-a,h&=1073741823;else{const i=32-d;u=u<<i>>>i;const _=1<<32-i;h=_-u-a,h&=_-1}return s.__setDigit(r,h),s.__trim()}__digit(_){return this[_]}__unsignedDigit(_){return this[_]>>>0}__setDigit(_,i){this[_]=0|i}__setDigitGrow(_,i){this[_]=0|i}__halfDigitLength(){const i=this.length;return 32767>=this.__unsignedDigit(i-1)?2*i-1:2*i}__halfDigit(_){return 32767&this[_>>>1]>>>15*(1&_)}__setHalfDigit(_,i){const t=_>>>1,e=this.__digit(t),n=1&_?32767&e|i<<15:1073709056&e|32767&i;this.__setDigit(t,n)}static __digitPow(i,_){let t=1;for(;0<_;)1&_&&(t*=i),_>>>=1,i*=i;return t}static __isOneDigitInt(i){return(1073741823&i)===i}}return o.__kMaxLength=33554432,o.__kMaxLengthBits=o.__kMaxLength<<5,o.__kMaxBitsPerChar=[0,0,32,51,64,75,83,90,96,102,107,111,115,119,122,126,128,131,134,136,139,141,143,145,147,149,151,153,154,156,158,159,160,162,163,165,166],o.__kBitsPerCharTableShift=5,o.__kBitsPerCharTableMultiplier=1<<o.__kBitsPerCharTableShift,o.__kConversionChars=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],o.__kBitConversionBuffer=new ArrayBuffer(8),o.__kBitConversionDouble=new Float64Array(o.__kBitConversionBuffer),o.__kBitConversionInts=new Int32Array(o.__kBitConversionBuffer),o.__clz30=_?function(i){return _(i)-2}:function(i){var _=Math.LN2,t=Math.log;return 0===i?30:0|29-(0|t(i>>>0)/_)},o.__imul=i||function(i,_){return 0|i*_},o});
    //# sourceMappingURL=jsbi-umd.js.map
    
    
    /***/ }),
    
    /***/ "./src/googleAnalytics.ts":
    /*!********************************!*\
      !*** ./src/googleAnalytics.ts ***!
      \********************************/
    /***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
    
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
    /* harmony export */   "gtag": function() { return /* binding */ gtag; }
    /* harmony export */ });
    /* eslint-disable no-empty */
    /* eslint-disable @typescript-eslint/no-empty-function */
    /* eslint-disable no-empty-function */
    /* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
    /* eslint-disable prefer-rest-params */
    /** @type {function(...*):void} */
    var gtag = function () { };
    if (false) { var firstScript, tag, gaElem; }
    
    
    /***/ }),
    
    /***/ "./src/keygen/asus.ts":
    /*!****************************!*\
      !*** ./src/keygen/asus.ts ***!
      \****************************/
    /***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
    
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
    /* harmony export */   "asusKeygen": function() { return /* binding */ asusKeygen; },
    /* harmony export */   "asusSolver": function() { return /* binding */ asusSolver; }
    /* harmony export */ });
    /* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/keygen/utils.ts");
    var __read = (undefined && undefined.__read) || function (o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    };
    // based on dogbert's pwgen-asus.py
    /* eslint-disable no-bitwise */
    
    /** @type {function(number=,number=,number=):Array<number>} */
    function initTable(a1, a2, a3) {
        if (a1 === void 0) { a1 = 11; }
        if (a2 === void 0) { a2 = 19; }
        if (a3 === void 0) { a3 = 6; }
        var table = [];
        var zeroCode = "0".charCodeAt(0);
        table[0] = a1 + zeroCode;
        table[1] = a2 + zeroCode;
        table[2] = a3 + zeroCode;
        table[3] = "6".charCodeAt(0);
        table[4] = "7".charCodeAt(0);
        table[5] = "8".charCodeAt(0);
        table[6] = "9".charCodeAt(0);
        var chksum = table.reduce(function (acc, val) { return acc + val; }, 0);
        for (var i = 7; i < 32; i++) {
            chksum = (33676 * chksum + 12345) >>> 0;
            table[i] = ((chksum >> 16) & 0x7FFF) % 43 + zeroCode;
        }
        var v3 = a1 * a2;
        var v4 = shuffle1((a1 - 1) * (a2 - 1), a3);
        return table.map(function (value) { return shuffle2(value - zeroCode, v4, v3); });
    }
    function shuffle1(a1, a2) {
        var _a;
        var v3 = 2;
        for (var i = 0; i < a2; i++) {
            var v4 = v3;
            var v5 = a1;
            while (v5 > 0) {
                if (v5 < v4) {
                    _a = __read([v4, v5], 2), v5 = _a[0], v4 = _a[1];
                }
                v5 %= v4;
            }
            if (v4 !== 1) {
                v3++;
            }
        }
        return v3;
    }
    function shuffle2(a1, a2, a3) {
        if (a1 >= a3) {
            a1 %= a3;
        }
        var result = a1;
        if (a2 !== 1) {
            for (var i = 0; i < a2 - 1; i++) {
                result = a1 * result % a3;
            }
        }
        return result;
    }
    function leftPad(base, len, fill) {
        if (fill === void 0) { fill = " "; }
        var padding = len - base.length;
        for (var i = 0; i < padding; i++) {
            base = fill + base;
        }
        return base;
    }
    function makeDateRegexp() {
        var years = [];
        var months = [];
        var days = [];
        for (var year = 1990; year <= 2100; year++) {
            years.push(leftPad(year.toString(), 4, "0"));
        }
        for (var month = 1; month <= 12; month++) {
            months.push(leftPad(month.toString(), 2, "0"));
        }
        for (var day = 1; day <= 31; day++) {
            days.push(leftPad(day.toString(), 2, "0"));
        }
        var ymdre = new RegExp("(".concat(years.join("|"), ")(").concat(months.join("|"), ")(").concat(days.join("|"), ")"));
        var dmyre = new RegExp("(".concat(days.join("|"), ")(").concat(months.join("|"), ")(").concat(years.join("|"), ")"));
        return [ymdre, dmyre];
    }
    var asusTable = initTable();
    var _a = __read(makeDateRegexp(), 2), ymdRegex = _a[0], dmyRegex = _a[1];
    function asusKeygen(year, month, day) {
        var date = leftPad(year.toString(), 4, "0") +
            leftPad(month.toString(), 2, "0") +
            leftPad(day.toString(), 2, "0");
        var chksum = parseInt(date, 16);
        var password = "";
        for (var i = 0; i < 8; i++) {
            chksum = (33676 * chksum + 12345) >>> 0;
            var index = (chksum >> 16) & 31;
            var pwdChar = asusTable[index] % 36;
            if (pwdChar > 9) {
                password += String.fromCharCode(pwdChar + "7".charCodeAt(0));
            }
            else {
                password += String.fromCharCode(pwdChar + "0".charCodeAt(0));
            }
        }
        return password;
    }
    var asusSolver = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.makeSolver)({
        name: "asusDate",
        description: "ASUS (Using date)",
        examples: ["2010-02-03"],
        inputValidator: function (s) { return s.length === 8; },
        fun: function (code) {
            var result = [];
            if (ymdRegex.test(code)) {
                var year = parseInt(code.slice(0, 4), 10);
                var month = parseInt(code.slice(4, 6), 10);
                var day = parseInt(code.slice(6, 8), 10);
                result.push(asusKeygen(year, month, day));
            }
            if (dmyRegex.test(code)) {
                var day = parseInt(code.slice(0, 2), 10);
                var month = parseInt(code.slice(2, 4), 10);
                var year = parseInt(code.slice(4, 8), 10);
                result.push(asusKeygen(year, month, day));
            }
            return result;
        }
    });
    
    
    /***/ }),
    
    /***/ "./src/keygen/cryptoUtils.ts":
    /*!***********************************!*\
      !*** ./src/keygen/cryptoUtils.ts ***!
      \***********************************/
    /***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
    
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
    /* harmony export */   "Crc64": function() { return /* binding */ Crc64; },
    /* harmony export */   "Sha256": function() { return /* binding */ Sha256; },
    /* harmony export */   "AES128": function() { return /* binding */ AES128; }
    /* harmony export */ });
    /* harmony import */ var jsbi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsbi */ "./node_modules/jsbi/dist/jsbi-umd.js");
    /* harmony import */ var jsbi__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsbi__WEBPACK_IMPORTED_MODULE_0__);
    var __read = (undefined && undefined.__read) || function (o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    };
    /* eslint-disable no-bitwise */
    /* eslint-disable @typescript-eslint/no-shadow */
    /* eslint-disable no-shadow */
    
    var Crc64 = /** @class */ (function () {
        function Crc64(poly, table) {
            this.polynom = poly;
            if (table && Array.isArray(table)) {
                this.table = table;
            }
            else {
                this.table = Crc64.getCRC64Table(poly);
            }
            this.crc = jsbi__WEBPACK_IMPORTED_MODULE_0___default().BigInt(0);
        }
        Crc64.makeTable = function (poly) {
            var table = [];
            for (var i = 0; i < 256; i++) {
                var crc = jsbi__WEBPACK_IMPORTED_MODULE_0___default().BigInt(i);
                for (var j = 0; j < 8; j++) {
                    if (jsbi__WEBPACK_IMPORTED_MODULE_0___default().EQ(jsbi__WEBPACK_IMPORTED_MODULE_0___default().bitwiseAnd(crc, jsbi__WEBPACK_IMPORTED_MODULE_0___default().BigInt(1)), 1)) {
                        crc = jsbi__WEBPACK_IMPORTED_MODULE_0___default().bitwiseXor(jsbi__WEBPACK_IMPORTED_MODULE_0___default().signedRightShift(crc, jsbi__WEBPACK_IMPORTED_MODULE_0___default().BigInt(1)), poly);
                    }
                    else {
                        crc = jsbi__WEBPACK_IMPORTED_MODULE_0___default().signedRightShift(crc, jsbi__WEBPACK_IMPORTED_MODULE_0___default().BigInt(1));
                    }
                }
                table.push(jsbi__WEBPACK_IMPORTED_MODULE_0___default().asUintN(64, crc));
            }
            return table;
        };
        Crc64.getCRC64Table = function (poly) {
            var key = poly.toString(10);
            var val = Crc64.tableCache[key];
            if (val !== undefined && Array.isArray(val)) {
                return val;
            }
            else {
                var table = Crc64.makeTable(poly);
                // save only ECMA table
                if (jsbi__WEBPACK_IMPORTED_MODULE_0___default().EQ(poly, Crc64.ECMA_POLYNOMIAL)) {
                    Crc64.tableCache[key] = table;
                }
                return table;
            }
        };
        Crc64.prototype.reset = function () {
            this.crc = jsbi__WEBPACK_IMPORTED_MODULE_0___default().BigInt(0);
        };
        Crc64.prototype.update = function (input) {
            for (var i = 0; i < input.length; i++) {
                var b = input[i] & 0xFF;
                var index = jsbi__WEBPACK_IMPORTED_MODULE_0___default().toNumber(jsbi__WEBPACK_IMPORTED_MODULE_0___default().asUintN(8, jsbi__WEBPACK_IMPORTED_MODULE_0___default().bitwiseXor(this.crc, jsbi__WEBPACK_IMPORTED_MODULE_0___default().BigInt(b))));
                var temp = jsbi__WEBPACK_IMPORTED_MODULE_0___default().bitwiseXor(this.table[index], jsbi__WEBPACK_IMPORTED_MODULE_0___default().signedRightShift(this.crc, jsbi__WEBPACK_IMPORTED_MODULE_0___default().BigInt(8)));
                this.crc = jsbi__WEBPACK_IMPORTED_MODULE_0___default().asUintN(64, temp);
            }
        };
        Crc64.prototype.digest = function () {
            return this.crc;
        };
        Crc64.prototype.hexdigest = function () {
            return ("0".repeat(16) + this.digest().toString(16)).slice(-16);
        };
        // ECMA 182 0xC96C5795D7870F42
        Crc64.ECMA_POLYNOMIAL = jsbi__WEBPACK_IMPORTED_MODULE_0___default().BigInt("14514072000185962306");
        Crc64.tableCache = {};
        return Crc64;
    }());
    
    var Sha256 = /** @class */ (function () {
        function Sha256(input) {
            this.bitlen = jsbi__WEBPACK_IMPORTED_MODULE_0___default().BigInt(0);
            this.datalen = 0;
            this.data = new Uint8Array(64);
            this.state = Sha256.SHA256_IV.slice();
            if (input && (input instanceof Uint8Array || Array.isArray(input))) {
                this.update(input);
            }
        }
        Sha256.prototype.update = function (input) {
            for (var i = 0; i < input.length; i++) {
                var b = input[i];
                this.data[this.datalen] = b;
                this.datalen++;
                if (this.datalen >= 64) {
                    this.transform();
                    this.bitlen = jsbi__WEBPACK_IMPORTED_MODULE_0___default().add(this.bitlen, jsbi__WEBPACK_IMPORTED_MODULE_0___default().BigInt(512));
                    this.datalen = 0;
                }
            }
        };
        Sha256.prototype.digest = function () {
            var item = this.copy();
            return item.final();
        };
        Sha256.prototype.hexdigest = function () {
            return Array.from(this.digest()).map(function (x) {
                x = x & 0xFF;
                return (x < 0xf) ? "0" + x.toString(16) : x.toString(16);
            }).join("");
        };
        Sha256.prototype.transform = function () {
            var m = new Uint32Array(64);
            function ROTRIGHT(a, b) {
                return (a >>> b) | (a << (32 - b));
            }
            function CH(a, b, c) {
                return (a & b) ^ (~a & c);
            }
            function MAJ(a, b, c) {
                return (a & b) ^ (a & c) ^ (b & c);
            }
            function EP0(a) {
                return ROTRIGHT(a, 2) ^ ROTRIGHT(a, 13) ^ ROTRIGHT(a, 22);
            }
            function EP1(a) {
                return ROTRIGHT(a, 6) ^ ROTRIGHT(a, 11) ^ ROTRIGHT(a, 25);
            }
            function SIG0(a) {
                return ROTRIGHT(a, 7) ^ ROTRIGHT(a, 18) ^ (a >>> 3);
            }
            function SIG1(a) {
                return ROTRIGHT(a, 17) ^ ROTRIGHT(a, 19) ^ (a >>> 10);
            }
            for (var i = 0, j = 0; i < 16; i++, j += 4) {
                m[i] = (this.data[j] << 24) | (this.data[j + 1] << 16) | (this.data[j + 2] << 8) |
                    (this.data[j + 3]);
            }
            for (var i = 16; i < 64; i++) {
                m[i] = (SIG1(m[i - 2]) + m[i - 7] + SIG0(m[i - 15]) + m[i - 16]) >>> 0;
            }
            var _a = __read(this.state, 8), a = _a[0], b = _a[1], c = _a[2], d = _a[3], e = _a[4], f = _a[5], g = _a[6], h = _a[7];
            for (var i = 0; i < 64; i++) {
                var t1 = h + EP1(e) + CH(e, f, g) + Sha256.SHA256_CONSTANTS[i] + m[i];
                var t2 = EP0(a) + MAJ(a, b, c);
                h = g;
                g = f;
                f = e;
                e = (d + t1) >>> 0;
                d = c;
                c = b;
                b = a;
                a = (t1 + t2) >>> 0;
            }
            this.state[0] += a;
            this.state[1] += b;
            this.state[2] += c;
            this.state[3] += d;
            this.state[4] += e;
            this.state[5] += f;
            this.state[6] += g;
            this.state[7] += h;
        };
        Sha256.prototype.copy = function () {
            var item = new Sha256();
            item.state = this.state.slice();
            item.data = this.data.slice();
            item.bitlen = this.bitlen;
            item.datalen = this.datalen;
            return item;
        };
        Sha256.prototype.final = function () {
            var i = this.datalen & 63;
            if (this.datalen < 56) {
                this.data[i++] = 0x80;
                while (i < 56) {
                    this.data[i++] = 0;
                }
            }
            else {
                this.data[i++] = 0x80;
                while (i < 64) {
                    this.data[i++] = 0;
                }
                this.transform();
                for (var i_1 = 0; i_1 < 56; i_1++) {
                    this.data[i_1] = 0;
                }
            }
            this.bitlen = jsbi__WEBPACK_IMPORTED_MODULE_0___default().add(this.bitlen, jsbi__WEBPACK_IMPORTED_MODULE_0___default().BigInt(this.datalen * 8));
            for (var i_2 = 63, j = 0; i_2 >= 56; i_2--, j += 8) {
                // val = (this.bitlen >> j) & 0xFF
                var val = jsbi__WEBPACK_IMPORTED_MODULE_0___default().asUintN(8, jsbi__WEBPACK_IMPORTED_MODULE_0___default().signedRightShift(this.bitlen, jsbi__WEBPACK_IMPORTED_MODULE_0___default().BigInt(j)));
                this.data[i_2] = jsbi__WEBPACK_IMPORTED_MODULE_0___default().toNumber(val);
            }
            this.transform();
            var hash = new Uint8Array(32);
            for (var i_3 = 0; i_3 < 4; i_3++) {
                for (var j = 0; j < 8; j++) {
                    hash[i_3 + j * 4] = (this.state[j] >>> (24 - i_3 * 8)) & 0xFF;
                }
            }
            return hash;
        };
        Sha256.SHA256_CONSTANTS = Uint32Array.from([
            0x428A2F98, 0x71374491, 0xB5C0FBCF, 0xE9B5DBA5,
            0x3956C25B, 0x59F111F1, 0x923F82A4, 0xAB1C5ED5,
            0xD807AA98, 0x12835B01, 0x243185BE, 0x550C7DC3,
            0x72BE5D74, 0x80DEB1FE, 0x9BDC06A7, 0xC19BF174,
            0xE49B69C1, 0xEFBE4786, 0x0FC19DC6, 0x240CA1CC,
            0x2DE92C6F, 0x4A7484AA, 0x5CB0A9DC, 0x76F988DA,
            0x983E5152, 0xA831C66D, 0xB00327C8, 0xBF597FC7,
            0xC6E00BF3, 0xD5A79147, 0x06CA6351, 0x14292967,
            0x27B70A85, 0x2E1B2138, 0x4D2C6DFC, 0x53380D13,
            0x650A7354, 0x766A0ABB, 0x81C2C92E, 0x92722C85,
            0xA2BFE8A1, 0xA81A664B, 0xC24B8B70, 0xC76C51A3,
            0xD192E819, 0xD6990624, 0xF40E3585, 0x106AA070,
            0x19A4C116, 0x1E376C08, 0x2748774C, 0x34B0BCB5,
            0x391C0CB3, 0x4ED8AA4A, 0x5B9CCA4F, 0x682E6FF3,
            0x748F82EE, 0x78A5636F, 0x84C87814, 0x8CC70208,
            0x90BEFFFA, 0xA4506CEB, 0xBEF9A3F7, 0xC67178F2
        ]);
        Sha256.SHA256_IV = Uint32Array.from([
            0x6A09E667, 0xBB67AE85, 0x3C6EF372, 0xA54FF53A,
            0x510E527F, 0x9B05688C, 0x1F83D9AB, 0x5BE0CD19
        ]);
        return Sha256;
    }());
    
    var AES128 = /** @class */ (function () {
        function AES128(key) {
            this.roundKey = AES128.keyExpansion(key);
        }
        AES128.keyExpansion = function (key) {
            if (key.length !== 16) {
                throw new Error("Key should be 16 bytes");
            }
            var roundKey = new Uint8Array(176);
            // first round key is the key itself
            for (var i = 0; i < AES128.NK * 4; i++) {
                roundKey[i] = key[i];
            }
            var temp = new Uint8Array(4);
            // all other round keys generated from previous ones
            for (var i = AES128.NK; i < AES128.NB * (AES128.NR + 1); i++) {
                var k = (i - 1) * 4;
                temp[0] = roundKey[k + 0];
                temp[1] = roundKey[k + 1];
                temp[2] = roundKey[k + 2];
                temp[3] = roundKey[k + 3];
                if (i % AES128.NK === 0) {
                    // AES RotWord()
                    {
                        var first = temp[0];
                        temp[0] = temp[1];
                        temp[1] = temp[2];
                        temp[2] = temp[3];
                        temp[3] = first;
                    }
                    // AES SubWord()
                    {
                        temp[0] = AES128.sbox[temp[0]];
                        temp[1] = AES128.sbox[temp[1]];
                        temp[2] = AES128.sbox[temp[2]];
                        temp[3] = AES128.sbox[temp[3]];
                    }
                    temp[0] ^= AES128.rcon[i / AES128.NK];
                }
                {
                    var j = i * 4;
                    var k_1 = (i - AES128.NK) * 4;
                    roundKey[j + 0] = roundKey[k_1 + 0] ^ temp[0];
                    roundKey[j + 1] = roundKey[k_1 + 1] ^ temp[1];
                    roundKey[j + 2] = roundKey[k_1 + 2] ^ temp[2];
                    roundKey[j + 3] = roundKey[k_1 + 3] ^ temp[3];
                }
            }
            return roundKey;
        };
        AES128.addRoundKey = function (round, state, roundKey) {
            for (var i = 0; i < 4; i++) {
                for (var j = 0; j < 4; j++) {
                    state[i * 4 + j] ^= roundKey[(round * AES128.NB * 4) + (i * AES128.NB) + j];
                    state[i * 4 + j] &= 0xFF;
                }
            }
        };
        AES128.subBytes = function (state) {
            for (var i = 0; i < 4; i++) {
                for (var j = 0; j < 4; j++) {
                    state[j * 4 + i] = AES128.sbox[state[j * 4 + i]];
                }
            }
        };
        AES128.shiftRows = function (state) {
            // rotate first row 1 columns to left
            var temp = state[0 * 4 + 1];
            state[0 * 4 + 1] = state[1 * 4 + 1];
            state[1 * 4 + 1] = state[2 * 4 + 1];
            state[2 * 4 + 1] = state[3 * 4 + 1];
            state[3 * 4 + 1] = temp;
            // rotate second row 2 columns to left
            temp = state[0 * 4 + 2];
            state[0 * 4 + 2] = state[2 * 4 + 2];
            state[2 * 4 + 2] = temp;
            temp = state[1 * 4 + 2];
            state[1 * 4 + 2] = state[3 * 4 + 2];
            state[3 * 4 + 2] = temp;
            // rotate thirdd row 3 columns to left
            temp = state[0 * 4 + 3];
            state[0 * 4 + 3] = state[3 * 4 + 3];
            state[3 * 4 + 3] = state[2 * 4 + 3];
            state[2 * 4 + 3] = state[1 * 4 + 3];
            state[1 * 4 + 3] = temp;
        };
        AES128.mixColumns = function (state) {
            var tmp1;
            var tmp2;
            function xtime(x) {
                return (x << 1) ^ (((x >>> 7) & 1) * 0x1B);
            }
            for (var i = 0; i < 4; i++) {
                var t = state[i * 4 + 0];
                tmp1 = state[i * 4 + 0] ^ state[i * 4 + 1] ^ state[i * 4 + 2] ^ state[i * 4 + 3];
                tmp2 = xtime(state[i * 4 + 0] ^ state[i * 4 + 1]);
                state[i * 4 + 0] ^= tmp2 ^ tmp1;
                tmp2 = xtime(state[i * 4 + 1] ^ state[i * 4 + 2]);
                state[i * 4 + 1] ^= tmp2 ^ tmp1;
                tmp2 = xtime(state[i * 4 + 2] ^ state[i * 4 + 3]);
                state[i * 4 + 2] ^= tmp2 ^ tmp1;
                tmp2 = xtime(state[i * 4 + 3] ^ t);
                state[i * 4 + 3] ^= tmp2 ^ tmp1;
            }
        };
        AES128.prototype.encryptBlock = function (input) {
            if (input.length !== 16) {
                throw new Error("Invalid block length");
            }
            var state = input.slice();
            AES128.addRoundKey(0, state, this.roundKey);
            for (var round = 1;; round++) {
                AES128.subBytes(state);
                AES128.shiftRows(state);
                if (round === 10) {
                    break;
                }
                AES128.mixColumns(state);
                AES128.addRoundKey(round, state, this.roundKey);
            }
            AES128.addRoundKey(AES128.NR, state, this.roundKey);
            return state;
        };
        // AES128 ECB mode
        AES128.NB = 4;
        AES128.NK = 4;
        AES128.NR = 10;
        AES128.sbox = Uint8Array.from([
            0x63, 0x7c, 0x77, 0x7b, 0xf2, 0x6b, 0x6f, 0xc5, 0x30, 0x01, 0x67, 0x2b, 0xfe, 0xd7, 0xab, 0x76,
            0xca, 0x82, 0xc9, 0x7d, 0xfa, 0x59, 0x47, 0xf0, 0xad, 0xd4, 0xa2, 0xaf, 0x9c, 0xa4, 0x72, 0xc0,
            0xb7, 0xfd, 0x93, 0x26, 0x36, 0x3f, 0xf7, 0xcc, 0x34, 0xa5, 0xe5, 0xf1, 0x71, 0xd8, 0x31, 0x15,
            0x04, 0xc7, 0x23, 0xc3, 0x18, 0x96, 0x05, 0x9a, 0x07, 0x12, 0x80, 0xe2, 0xeb, 0x27, 0xb2, 0x75,
            0x09, 0x83, 0x2c, 0x1a, 0x1b, 0x6e, 0x5a, 0xa0, 0x52, 0x3b, 0xd6, 0xb3, 0x29, 0xe3, 0x2f, 0x84,
            0x53, 0xd1, 0x00, 0xed, 0x20, 0xfc, 0xb1, 0x5b, 0x6a, 0xcb, 0xbe, 0x39, 0x4a, 0x4c, 0x58, 0xcf,
            0xd0, 0xef, 0xaa, 0xfb, 0x43, 0x4d, 0x33, 0x85, 0x45, 0xf9, 0x02, 0x7f, 0x50, 0x3c, 0x9f, 0xa8,
            0x51, 0xa3, 0x40, 0x8f, 0x92, 0x9d, 0x38, 0xf5, 0xbc, 0xb6, 0xda, 0x21, 0x10, 0xff, 0xf3, 0xd2,
            0xcd, 0x0c, 0x13, 0xec, 0x5f, 0x97, 0x44, 0x17, 0xc4, 0xa7, 0x7e, 0x3d, 0x64, 0x5d, 0x19, 0x73,
            0x60, 0x81, 0x4f, 0xdc, 0x22, 0x2a, 0x90, 0x88, 0x46, 0xee, 0xb8, 0x14, 0xde, 0x5e, 0x0b, 0xdb,
            0xe0, 0x32, 0x3a, 0x0a, 0x49, 0x06, 0x24, 0x5c, 0xc2, 0xd3, 0xac, 0x62, 0x91, 0x95, 0xe4, 0x79,
            0xe7, 0xc8, 0x37, 0x6d, 0x8d, 0xd5, 0x4e, 0xa9, 0x6c, 0x56, 0xf4, 0xea, 0x65, 0x7a, 0xae, 0x08,
            0xba, 0x78, 0x25, 0x2e, 0x1c, 0xa6, 0xb4, 0xc6, 0xe8, 0xdd, 0x74, 0x1f, 0x4b, 0xbd, 0x8b, 0x8a,
            0x70, 0x3e, 0xb5, 0x66, 0x48, 0x03, 0xf6, 0x0e, 0x61, 0x35, 0x57, 0xb9, 0x86, 0xc1, 0x1d, 0x9e,
            0xe1, 0xf8, 0x98, 0x11, 0x69, 0xd9, 0x8e, 0x94, 0x9b, 0x1e, 0x87, 0xe9, 0xce, 0x55, 0x28, 0xdf,
            0x8c, 0xa1, 0x89, 0x0d, 0xbf, 0xe6, 0x42, 0x68, 0x41, 0x99, 0x2d, 0x0f, 0xb0, 0x54, 0xbb, 0x16
        ]);
        AES128.rcon = Uint8Array.from([
            0x8D, 0x01, 0x02, 0x04, 0x08, 0x10, 0x20, 0x40, 0x80, 0x1B, 0x36, 0x6C, 0xD8, 0xAB, 0x4D, 0x9A
        ]);
        return AES128;
    }());
    
    
    
    /***/ }),
    
    /***/ "./src/keygen/dell/encode.ts":
    /*!***********************************!*\
      !*** ./src/keygen/dell/encode.ts ***!
      \***********************************/
    /***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
    
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
    /* harmony export */   "TagE7A8Encoder": function() { return /* binding */ TagE7A8Encoder; },
    /* harmony export */   "TagE7A8EncoderSecond": function() { return /* binding */ TagE7A8EncoderSecond; },
    /* harmony export */   "blockEncode": function() { return /* binding */ blockEncode; }
    /* harmony export */ });
    var __extends = (undefined && undefined.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            if (typeof b !== "function" && b !== null)
                throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var md5magic = Uint32Array.from([
        0xd76aa478, 0xe8c7b756, 0x242070db, 0xc1bdceee,
        0xf57c0faf, 0x4787c62a, 0xa8304613, 0xfd469501,
        0x698098d8, 0x8b44f7af, 0xffff5bb1, 0x895cd7be,
        0x6b901122, 0xfd987193, 0xa679438e, 0x49b40821,
        0xf61e2562, 0xc040b340, 0x265e5a51, 0xe9b6c7aa,
        0xd62f105d, 0x02441453, 0xd8a1e681, 0xe7d3fbc8,
        0x21e1cde6, 0xc33707d6, 0xf4d50d87, 0x455a14ed,
        0xa9e3e905, 0xfcefa3f8, 0x676f02d9, 0x8d2a4c8a,
        0xfffa3942, 0x8771f681, 0x6d9d6122, 0xfde5380c,
        0xa4beea44, 0x4bdecfa9, 0xf6bb4b60, 0xbebfbc70,
        0x289b7ec6, 0xeaa127fa, 0xd4ef3085, 0x4881d05,
        0xd9d4d039, 0xe6db99e5, 0x1fa27cf8, 0xc4ac5665,
        0xf4292244, 0x432aff97, 0xab9423a7, 0xfc93a039,
        0x655b59c3, 0x8f0ccc92, 0xffeff47d, 0x85845dd1,
        0x6fa87e4f, 0xfe2ce6e0, 0xa3014314, 0x4e0811a1,
        0xf7537e82, 0xbd3af235, 0x2ad7d2bb, 0xeb86d391
    ]);
    var md5magic2 = Uint32Array.from([
        0xd76aa478, 0xe8c7b756, 0x242070db, 0xc1bdceee,
        0xf57c0faf, 0x4787c62a, 0xa8304613, 0xfd469501,
        0x698098d8, 0x8b44f7af, 0xffff5bb1, 0x895cd7be,
        0x6b901122, 0xfd987193, 0xa679438e, 0x49b40821,
        0xf61e2562, 0xc040b340, 0x265e5a51, 0xe9b6c7aa,
        0xd62f105d, 0x02441453, 0xd8a1e681, 0xe7d3fbc8,
        0x21e1cde6, 0xc33707d6, 0xf4d50d87, 0x455a14ed,
        0xa9e3e905, 0xfcefa3f8, 0x676f02d9, 0x8d2a4c8a,
        0xd9d4d039, 0xe6db99e5, 0x1fa27cf8, 0xc4ac5665,
        0x289b7ec6, 0xeaa127fa, 0xd4ef3085, 0x04881d05,
        0xa4beea44, 0x4bdecfa9, 0xf6bb4b60, 0xbebfbc70,
        0xfffa3942, 0x8771f681, 0x6d9d6122, 0xfde5380c,
        0xf7537e82, 0xbd3af235, 0x2ad7d2bb, 0xeb86d391,
        0x6fa87e4f, 0xfe2ce6e0, 0xa3014314, 0x4e0811a1,
        0x655b59c3, 0x8f0ccc92, 0xffeff47d, 0x85845dd1,
        0xf4292244, 0x432aff97, 0xab9423a7, 0xfc93a039
    ]);
    var rotationTable = [
        [7, 12, 17, 22],
        [5, 9, 14, 20],
        [4, 11, 16, 23],
        [6, 10, 15, 21]
    ];
    var initialData = [
        0x67452301 | 0,
        0xEFCDAB89 | 0,
        0x98BADCFE | 0,
        0x10325476 | 0
    ];
    // Maybe optimize ? return (((param2 >>> (0x20 - param7))) | (param2 << param7)) + num1;
    function rol(x, bitsrot) {
        // n >>> 0 used to convert signed number to unsigned
        // (unsigned(x) >> (32 - bitsrot)) | (unsigned(x) << bitsrot);
        return ((x >>> 0) / Math.pow(2, 32 - bitsrot)) | (((x >>> 0) << bitsrot) | 0);
    }
    function encF2(num1, num2, num3) {
        return ((num3 ^ num2) & num1) ^ num3;
    }
    function encF3(num1, num2, num3) {
        return ((num1 ^ num2) & num3) ^ num2;
    }
    function encF4(num1, num2, num3) {
        return (num2 ^ num1) ^ num3;
    }
    function encF5(num1, num2, num3) {
        return (num1 | ~num3) ^ num2;
    }
    function encF1(num1, num2) {
        return (num1 + num2) | 0;
    }
    // Negative functions
    function encF1N(num1, num2) {
        return (num1 - num2) | 0;
    }
    function encF2N(num1, num2, num3) {
        return encF2(num1, num2, ~num3);
    }
    function encF4N(num1, num2, num3) {
        return encF4(num1, ~num2, num3);
    }
    function encF5N(num1, num2, num3) {
        return encF5(~num1, num2, num3);
    }
    var Tag595BEncoder = /** @class */ (function () {
        function Tag595BEncoder(encBlock) {
            this.f1 = encF1N;
            this.f2 = encF2N;
            this.f3 = encF3;
            this.f4 = encF4N;
            this.f5 = encF5N;
            this.md5table = md5magic;
            this.encBlock = encBlock;
            this.encData = this.initialData();
            this.A = this.encData[0];
            this.B = this.encData[1];
            this.C = this.encData[2];
            this.D = this.encData[3];
        }
        Tag595BEncoder.encode = function (encBlock) {
            var obj = new this(encBlock);
            obj.makeEncode();
            return obj.result();
        };
        Tag595BEncoder.prototype.makeEncode = function () {
            var t = 0;
            for (var i = 0; i < 64; i++) {
                switch (i >> 4) {
                    case 0:
                        t = this.calculate(this.f2, i & 15, i); // Use half byte
                        break;
                    case 1:
                        t = this.calculate(this.f3, (i * 5 + 1) & 15, i);
                        break;
                    case 2:
                        t = this.calculate(this.f4, (i * 3 + 5) & 15, i);
                        break;
                    case 3:
                        t = this.calculate(this.f5, (i * 7) & 15, i);
                        break;
                }
                this.A = this.D;
                this.D = this.C;
                this.C = this.B;
                this.B = rol(t, rotationTable[i >> 4][i & 3]) + this.B | 0;
            }
            this.incrementData();
        };
        Tag595BEncoder.prototype.result = function () {
            return this.encData.map(function (v) { return (v | 0) >>> 0; });
        };
        Tag595BEncoder.prototype.initialData = function () {
            return initialData.slice();
        };
        Tag595BEncoder.prototype.calculate = function (func, key1, key2) {
            var temp = func(this.B, this.C, this.D);
            return this.A + this.f1(temp, this.md5table[key2] + this.encBlock[key1]) | 0;
        };
        Tag595BEncoder.prototype.incrementData = function () {
            var _this = this;
            this.encData[0] += this.A;
            this.encData[1] += this.B;
            this.encData[2] += this.C;
            this.encData[3] += this.D;
            this.encData.forEach(function (val, index) {
                _this.encData[index] = val | 0;
            });
        };
        return Tag595BEncoder;
    }());
    var TagD35BEncoder = /** @class */ (function (_super) {
        __extends(TagD35BEncoder, _super);
        function TagD35BEncoder() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.f1 = encF1;
            _this.f2 = encF2;
            _this.f3 = encF3;
            _this.f4 = encF4;
            _this.f5 = encF5;
            return _this;
        }
        return TagD35BEncoder;
    }(Tag595BEncoder));
    var Tag1D3BEncoder = /** @class */ (function (_super) {
        __extends(Tag1D3BEncoder, _super);
        function Tag1D3BEncoder() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Tag1D3BEncoder.prototype.makeEncode = function () {
            for (var j = 0; j < 21; j++) {
                this.A |= 0x97;
                this.B ^= 0x8;
                this.C |= 0x60606161 - j;
                this.D ^= 0x50501010 + j;
                _super.prototype.makeEncode.call(this);
            }
        };
        return Tag1D3BEncoder;
    }(Tag595BEncoder));
    var Tag1F66Encoder = /** @class */ (function (_super) {
        __extends(Tag1F66Encoder, _super);
        function Tag1F66Encoder() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.md5table = md5magic2;
            return _this;
        }
        Tag1F66Encoder.prototype.makeEncode = function () {
            var t = 0;
            for (var j = 0; j < 17; j++) {
                this.A |= 0x100097;
                this.B ^= 0xA0008;
                this.C |= 0x60606161 - j;
                this.D ^= 0x50501010 + j;
                for (var i = 0; i < 64; i++) {
                    switch (i >> 4) {
                        case 0:
                            t = this.calculate(this.f2, i & 15, i + 16 | 0);
                            break;
                        case 1:
                            t = this.calculate(this.f3, (i * 5 + 1) & 15, i + 32 | 0);
                            break;
                        case 2:
                            t = this.calculate(this.f4, (i * 3 + 5) & 15, i - 2 * (i & 12) + 12);
                            break;
                        case 3:
                            t = this.calculate(this.f5, (i * 7) & 15, 2 * (i & 3) - (i & 15) + 12);
                            break;
                    }
                    this.A = this.D;
                    this.D = this.C;
                    this.C = this.B;
                    this.B = rol(t, rotationTable[i >> 4][i & 3]) + this.B | 0;
                }
                this.incrementData();
            }
            for (var j = 0; j < 21; j++) {
                this.A |= 0x97;
                this.B ^= 0x8;
                this.C |= 0x50501010 - j;
                this.D ^= 0x60606161 + j;
                for (var i = 0; i < 64; i++) {
                    switch (i >> 4) {
                        case 0:
                            t = this.calculate(this.f4, (i * 3 + 5) & 15, 2 * (i & 3) - i + 44);
                            break;
                        case 1:
                            t = this.calculate(this.f5, (i * 7) & 15, 2 * (i & 3) - i + 76);
                            break;
                        case 2:
                            t = this.calculate(this.f2, i & 15, (i & 15) | 0);
                            break;
                        case 3:
                            t = this.calculate(this.f3, (i * 5 + 1) & 15, i - 32 | 0);
                            break;
                    }
                    var g = (i >> 4) + 2;
                    this.A = this.D;
                    this.D = this.C;
                    this.C = this.B;
                    this.B = rol(t, rotationTable[g & 3][i & 3]) + this.B | 0;
                }
                this.incrementData();
            }
        };
        return Tag1F66Encoder;
    }(Tag595BEncoder));
    var Tag6FF1Encoder = /** @class */ (function (_super) {
        __extends(Tag6FF1Encoder, _super);
        function Tag6FF1Encoder() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.md5table = md5magic2;
            _this.counter1 = 23;
            return _this;
        }
        Tag6FF1Encoder.prototype.makeEncode = function () {
            var t = 0;
            for (var j = 0; j < this.counter1; j++) {
                this.A |= 0xA08097;
                this.B ^= 0xA010908;
                this.C |= 0x60606161 - j;
                this.D ^= 0x50501010 + j;
                for (var i = 0; i < 64; i++) {
                    var k = (i & 15) - ((i & 12) << 1) + 12;
                    switch (i >> 4) {
                        case 0:
                            t = this.calculate(this.f2, i & 15, i + 32 | 0);
                            break;
                        case 1:
                            t = this.calculate(this.f3, (i * 5 + 1) & 15, (i & 15) | 0);
                            break;
                        case 2:
                            t = this.calculate(this.f4, (i * 3 + 5) & 15, k + 16 | 0);
                            break;
                        case 3:
                            t = this.calculate(this.f5, (i * 7) & 15, k + 48 | 0);
                            break;
                    }
                    this.A = this.D;
                    this.D = this.C;
                    this.C = this.B;
                    this.B = rol(t, rotationTable[i >> 4][i & 3]) + this.B | 0;
                }
                this.incrementData();
            }
            for (var j = 0; j < 17; j++) {
                this.A |= 0x100097;
                this.B ^= 0xA0008;
                this.C |= 0x50501010 - j;
                this.D ^= 0x60606161 + j;
                for (var i = 0; i < 64; i++) {
                    var k = (i & 15) - ((i & 12) << 1) + 12;
                    switch (i >> 4) {
                        case 0:
                            t = this.calculate(this.f4, ((i & 15) * 3 + 5) & 15, k + 16);
                            break;
                        case 1:
                            t = this.calculate(this.f5, ((i & 3) * 7 + (i & 12) + 4) & 15, (i & 15) + 32);
                            break;
                        case 2:
                            t = this.calculate(this.f2, k & 15, k);
                            break;
                        case 3:
                            t = this.calculate(this.f3, ((i & 15) * 5 + 1) & 15, (i & 15) + 48);
                            break;
                    }
                    var g = (i >> 4) + 2;
                    this.A = this.D;
                    this.D = this.C;
                    this.C = this.B;
                    this.B = rol(t, rotationTable[g & 3][i & 3]) + this.B | 0;
                }
                this.incrementData();
            }
        };
        return Tag6FF1Encoder;
    }(Tag595BEncoder));
    var Tag1F5AEncoder = /** @class */ (function (_super) {
        __extends(Tag1F5AEncoder, _super);
        function Tag1F5AEncoder() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.md5table = md5magic2;
            return _this;
        }
        Tag1F5AEncoder.prototype.makeEncode = function () {
            var t = 0;
            for (var i = 0; i < 5; i++) {
                for (var j = 0; j < 64; j++) {
                    var k = 12 + (j & 3) - (j & 12);
                    switch (j >> 4) {
                        case 0:
                            t = this.calculate(this.f2, j & 15, j);
                            break;
                        case 1:
                            t = this.calculate(this.f3, (j * 5 + 1) & 15, j);
                            break;
                        case 2:
                            t = this.calculate(this.f4, (j * 3 + 5) & 15, k + 0x20);
                            break;
                        case 3:
                            t = this.calculate(this.f5, (j * 7) & 15, k + 0x30);
                            break;
                    }
                    this.B = this.D;
                    this.D = this.A;
                    this.A = this.C;
                    this.C = rol(t, rotationTable[j >> 4][j & 3]) + this.C | 0;
                }
                this.incrementData();
            }
        };
        Tag1F5AEncoder.prototype.incrementData = function () {
            var _this = this;
            this.encData[0] += this.B;
            this.encData[1] += this.C;
            this.encData[2] += this.A;
            this.encData[3] += this.D;
            this.encData.forEach(function (val, index) {
                _this.encData[index] = val | 0;
            });
        };
        Tag1F5AEncoder.prototype.calculate = function (func, key1, key2) {
            var temp = func(this.C, this.A, this.D);
            return this.B + this.f1(temp, this.md5table[key2] + this.encBlock[key1]) | 0;
        };
        return Tag1F5AEncoder;
    }(Tag595BEncoder));
    var TagBF97Encoder = /** @class */ (function (_super) {
        __extends(TagBF97Encoder, _super);
        function TagBF97Encoder() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.counter1 = 31;
            return _this;
        }
        return TagBF97Encoder;
    }(Tag6FF1Encoder));
    var TagE7A8Encoder = /** @class */ (function (_super) {
        __extends(TagE7A8Encoder, _super);
        function TagE7A8Encoder() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.md5table = md5magic2;
            _this.loopParams = [17, 13, 12, 8];
            _this.encodeParams = Uint32Array.from([
                0x50501010, 0xA010908, 0xA08097, 0x60606161,
                0x60606161, 0xA0008, 0x100097, 0x50501010
            ]);
            return _this;
        }
        TagE7A8Encoder.prototype.makeEncode = function () {
            for (var p = 0; p < this.loopParams[0]; p++) {
                this.A |= this.encodeParams[0];
                this.B ^= this.encodeParams[1];
                this.C |= this.encodeParams[2] - p;
                this.D ^= this.encodeParams[3] + p;
                for (var j = 0; j < this.loopParams[2]; j += 4) {
                    this.shortcut(this.f2, j, j + 32, 0, [0, 1, 2, 3]);
                }
                for (var j = 0; j < this.loopParams[2]; j += 4) {
                    this.shortcut(this.f3, j, j, 1, [1, -2, -1, 0]);
                }
                for (var j = this.loopParams[3]; j > 3; j -= 4) {
                    this.shortcut(this.f4, j, j + 16, 2, [-3, -4, -1, 2]);
                }
                for (var j = this.loopParams[3]; j > 3; j -= 4) {
                    this.shortcut(this.f5, j, j + 48, 3, [2, 3, 2, -3]);
                }
                this.incrementData();
            }
            for (var p = 0; p < this.loopParams[1]; p++) {
                this.A |= this.encodeParams[4];
                this.B ^= this.encodeParams[5];
                this.C |= this.encodeParams[6] - p;
                this.D ^= this.encodeParams[7] + p;
                for (var j = this.loopParams[3]; j > 3; j -= 4) {
                    this.shortcut(this.f4, j, j + 16, 2, [-3, -4, -1, 2]);
                }
                for (var j = 0; j < this.loopParams[2]; j += 4) {
                    this.shortcut(this.f5, j, j + 32, 3, [2, 3, 2, -3]);
                }
                for (var j = this.loopParams[3]; j > 0; j -= 4) {
                    this.shortcut(this.f2, j, j, 0, [0, 1, 2, 3]);
                }
                for (var j = 0; j < this.loopParams[2]; j += 4) {
                    this.shortcut(this.f3, j, j + 48, 1, [1, -2, 3, 0]);
                }
                this.incrementData();
            }
        };
        TagE7A8Encoder.prototype.initialData = function () {
            return [0, 0, 0, 0];
        };
        TagE7A8Encoder.prototype.shortcut = function (fun, j, md5_index, rot_index, indexes) {
            for (var i = 0; i < 4; i++) {
                var t = this.calculate(fun, (j + indexes[i]) & 7, i + md5_index);
                this.A = this.D;
                this.D = this.C;
                this.C = this.B;
                this.B = rol(t, rotationTable[rot_index][i]) + this.B | 0;
            }
        };
        return TagE7A8Encoder;
    }(Tag595BEncoder));
    
    var TagE7A8EncoderSecond = /** @class */ (function (_super) {
        __extends(TagE7A8EncoderSecond, _super);
        function TagE7A8EncoderSecond() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            // this model has bug and it goes over the array limit
            _this.md5table = (function () {
                var overfillArr = [
                    0xa0008 ^ 0x6d2f93a5, 0xa08097 ^ 0x6d2f93a5, 0xa010908 ^ 0x6d2f93a5, 0x60606161 ^ 0x6d2f93a5
                ];
                var arr = new Uint32Array(md5magic2.length + overfillArr.length);
                arr.set(md5magic2);
                arr.set(overfillArr, md5magic2.length);
                return arr;
            })();
            _this.loopParams = [17, 13, 12, 16];
            return _this;
        }
        return TagE7A8EncoderSecond;
    }(TagE7A8Encoder));
    
    var encoders = {
        "595B": Tag595BEncoder,
        "2A7B": Tag595BEncoder,
        "A95B": Tag595BEncoder,
        "1D3B": Tag1D3BEncoder,
        "D35B": TagD35BEncoder,
        "1F66": Tag1F66Encoder,
        "6FF1": Tag6FF1Encoder,
        "1F5A": Tag1F5AEncoder,
        "BF97": TagBF97Encoder,
        "E7A8": TagE7A8Encoder
    };
    function blockEncode(encBlock, tag) {
        return encoders[tag].encode(encBlock);
    }
    
    
    /***/ }),
    
    /***/ "./src/keygen/dell/index.ts":
    /*!**********************************!*\
      !*** ./src/keygen/dell/index.ts ***!
      \**********************************/
    /***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
    
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
    /* harmony export */   "DellTag": function() { return /* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_3__.DellTag; },
    /* harmony export */   "DES": function() { return /* reexport safe */ _latitude__WEBPACK_IMPORTED_MODULE_2__.DES; },
    /* harmony export */   "latitude3540Keygen": function() { return /* reexport safe */ _latitude__WEBPACK_IMPORTED_MODULE_2__.latitude3540Keygen; },
    /* harmony export */   "calculateSuffix": function() { return /* binding */ calculateSuffix; },
    /* harmony export */   "keygenDell": function() { return /* binding */ keygenDell; },
    /* harmony export */   "hddOldSolver": function() { return /* binding */ hddOldSolver; },
    /* harmony export */   "dellSolver": function() { return /* binding */ dellSolver; },
    /* harmony export */   "dellHddSolver": function() { return /* binding */ dellHddSolver; },
    /* harmony export */   "dellLatitude3540Solver": function() { return /* binding */ dellLatitude3540Solver; }
    /* harmony export */ });
    /* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/keygen/utils.ts");
    /* harmony import */ var _encode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./encode */ "./src/keygen/dell/encode.ts");
    /* harmony import */ var _latitude__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./latitude */ "./src/keygen/dell/latitude.ts");
    /* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./types */ "./src/keygen/dell/types.ts");
    /* harmony import */ var _cryptoUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cryptoUtils */ "./src/keygen/cryptoUtils.ts");
    /* eslint-disable no-bitwise */
    
    
    
    
    
    
    var scanCodes = "\0\x1B1234567890-=\x08\x09qwertyuiop[]\x0D\xFFasdfghjkl;'`\xFF\\zxcvbnm,./";
    var encscans = [
        0x05, 0x10, 0x13, 0x09, 0x32, 0x03, 0x25, 0x11, 0x1F, 0x17, 0x06, 0x15,
        0x30, 0x19, 0x26, 0x22, 0x0A, 0x02, 0x2C, 0x2F, 0x16, 0x14, 0x07, 0x18,
        0x24, 0x23, 0x31, 0x20, 0x1E, 0x08, 0x2D, 0x21, 0x04, 0x0B, 0x12, 0x2E
    ];
    var asciiPrintable = "012345679abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ0";
    var extraCharacters = {
        "2A7B": asciiPrintable,
        "1F5A": asciiPrintable,
        "1D3B": "0BfIUG1kuPvc8A9Nl5DLZYSno7Ka6HMgqsJWm65yCQR94b21OTp7VFX2z0jihE33d4xtrew0",
        "1F66": "0ewr3d4xtUG1ku0BfIp7VFb21OTSno7KDLZYqsJWa6HMgCQR94m65y9Nl5Pvc8AjihE3X2z0",
        "6FF1": "08rptBxfbGVMz38IiSoeb360MKcLf4QtBCbWVzmH5wmZUcRR5DZG2xNCEv1nFtzsZB2bw1X0",
        "BF97": "0Q2drGk99rkQFMxN[Z5y3DGr16h638myIL2rzz2pzcU7JWLJ1EGnqRN4seZPRM2aBXIjbkGZ"
    };
    /*
     * Does this really work somewhere ?
     * Depends only in first two chars
     * Input: 11 symbols
     */
    function keygenHddOld(serial) {
        var serialArr = serial.split("").map(function (c) { return c.charCodeAt(0); });
        // encscans[26], encscans[0xAA % encscans.length]
        var ret = [49, 49, 49, 49, 49];
        ret.push(serialArr[1] >> 1);
        ret.push((serialArr[1] >> 6) | (serialArr[0] << 2));
        ret.push(serialArr[0] >> 3);
        // lower bits then 5 are never change
        for (var i = 0; i < 8; i++) {
            var r = 0xAA;
            if (ret[i] & 8) {
                r ^= serialArr[1];
            }
            if (ret[i] & 16) {
                r ^= serialArr[0];
            }
            ret[i] = encscans[r % encscans.length];
        }
        return ret.map(function (c) { return scanCodes.charAt(c); }).join("");
    }
    function calculateSuffix(serial, tag, type) {
        var suffix = [];
        var codesTable;
        var arr1;
        var arr2;
        if (type === 0 /* ServiceTag */) {
            arr1 = [1, 2, 3, 4];
            arr2 = [4, 3, 2];
        }
        else {
            // SuffixType.HDD
            arr1 = [1, 10, 9, 8];
            arr2 = [8, 9, 10];
        }
        suffix[0] = serial[arr1[3]];
        suffix[1] = (serial[arr1[3]] >> 5) |
            (((serial[arr1[2]] >> 5) | (serial[arr1[2]] << 3)) & 0xF1);
        suffix[2] = serial[arr1[2]] >> 2;
        suffix[3] = (serial[arr1[2]] >> 7) | (serial[arr1[1]] << 1);
        suffix[4] = (serial[arr1[1]] >> 4) | (serial[arr1[0]] << 4);
        suffix[5] = serial[1] >> 1;
        suffix[6] = (serial[1] >> 6) | (serial[0] << 2);
        suffix[7] = serial[0] >> 3;
        // normalize bytes
        suffix.forEach(function (v, i) {
            suffix[i] = v & 0xFF;
        });
        var table = extraCharacters[tag];
        if (table !== undefined) {
            codesTable = table.split("").map(function (s) { return s.charCodeAt(0); });
        }
        else {
            codesTable = encscans;
        }
        for (var i = 0; i < 8; i++) {
            var r = 0xAA;
            if (suffix[i] & 1) {
                r ^= serial[arr2[0]];
            }
            if (suffix[i] & 2) {
                r ^= serial[arr2[1]];
            }
            if (suffix[i] & 4) {
                r ^= serial[arr2[2]];
            }
            if (suffix[i] & 8) {
                r ^= serial[1];
            }
            if (suffix[i] & 16) {
                r ^= serial[0];
            }
            suffix[i] = codesTable[r % codesTable.length];
        }
        return suffix;
    }
    function resultToString(arr, tag) {
        var r = arr[0] % 9;
        var result = "";
        var table = extraCharacters[tag];
        for (var i = 0; i < 16; i++) {
            if (table !== undefined) {
                result += table.charAt(arr[i] % table.length);
            }
            else if (r <= i && result.length < 8) { // 595B, D35B, A95B
                result += scanCodes.charAt(encscans[arr[i] % encscans.length]);
            }
        }
        return result;
    }
    /*
     * 7 symbols + 4 symbols ( 595B, D35B, 2A7B, A95B, 1D3B etc...)
     * serial -- serial number without tag, 7 symbols for ServiceTag, 11 symbols for HDD
     * tag    -- tag string
     */
    function keygenDell(serial, tag, type) {
        var fullSerial;
        var encBlock;
        function byteArrayToInt(arr) {
            // convert byte array to 32-bit little-endian int array
            // also will convert undefined values to 0
            var resultLength = arr.length >> 2; // divide length to 4
            var result = [];
            for (var i = 0; i <= resultLength; i++) {
                result[i] = arr[i * 4] | (arr[i * 4 + 1] << 8) |
                    (arr[i * 4 + 2] << 16) | (arr[i * 4 + 3] << 24) | 0;
            }
            return result;
        }
        function intArrayToByte(arr) {
            // convert 32-bit little-endian array to byte array
            var result = [];
            arr.forEach(function (num) {
                result.push(num & 0xFF);
                result.push((num >> 8) & 0xFF);
                result.push((num >> 16) & 0xFF);
                result.push((num >> 24) & 0xFF);
            });
            return result;
        }
        function calculateE7A8(block, klass) {
            // TODO: refactor this
            var table = "Q92G0drk9y63r5DG1hLqJGW1EnRk[QxrFMNZ328I6myLr4MsPNeZR2z72czpzUJBGXbaIjkZ";
            var res = intArrayToByte(klass.encode(block));
            var digest = new _cryptoUtils__WEBPACK_IMPORTED_MODULE_4__.Sha256(Uint8Array.from(res));
            var out = digest.digest();
            var out_str = "";
            for (var i = 0; i < 16; i++) {
                out_str += table[(out[i + 16] + out[i]) % table.length];
            }
            return out_str;
        }
        if (tag === _types__WEBPACK_IMPORTED_MODULE_3__.DellTag.TagA95B) {
            if (type === 0 /* ServiceTag */) {
                fullSerial = serial + _types__WEBPACK_IMPORTED_MODULE_3__.DellTag.Tag595B;
            }
            else { // HDD
                fullSerial = serial.slice(3) + "\0\0\0" + _types__WEBPACK_IMPORTED_MODULE_3__.DellTag.Tag595B;
            }
        }
        else {
            fullSerial = serial + tag;
        }
        var fullSerialArray = [];
        // convert string to byte array
        for (var i = 0; i < fullSerial.length; i++) {
            // Maybe protect against unicode symbols with: charCode & 0xFF ?
            fullSerialArray.push(fullSerial.charCodeAt(i));
        }
        if (tag === _types__WEBPACK_IMPORTED_MODULE_3__.DellTag.TagE7A8) {
            // TODO: refactor all this
            encBlock = byteArrayToInt(fullSerialArray);
            for (var i = 0; i < 16; i++) {
                if (encBlock[i] === undefined) {
                    encBlock[i] = 0;
                }
            }
            var out_str1 = calculateE7A8(encBlock, _encode__WEBPACK_IMPORTED_MODULE_1__.TagE7A8Encoder);
            var out_str2 = calculateE7A8(encBlock, _encode__WEBPACK_IMPORTED_MODULE_1__.TagE7A8EncoderSecond);
            var output = [];
            if (out_str1) {
                output.push(out_str1);
            }
            if (out_str2) {
                output.push(out_str2);
            }
            return output;
        }
        fullSerialArray = fullSerialArray.concat(calculateSuffix(fullSerialArray, tag, type));
        var cnt = 23;
        // NOTE: after this array might contain undefined values
        fullSerialArray[cnt] = 0x80;
        encBlock = byteArrayToInt(fullSerialArray);
        // fill empty values with zeros
        for (var i = 0; i < 16; i++) {
            if (encBlock[i] === undefined) {
                encBlock[i] = 0;
            }
        }
        encBlock[14] = cnt << 3;
        var decodedBytes = intArrayToByte((0,_encode__WEBPACK_IMPORTED_MODULE_1__.blockEncode)(encBlock, tag));
        var outputResult = resultToString(decodedBytes, tag);
        return (outputResult) ? [outputResult] : [];
    }
    function checkDellTag(tag) {
        tag = tag.toUpperCase();
        for (var tagItem in _types__WEBPACK_IMPORTED_MODULE_3__.DellTag) {
            if (tag === (_types__WEBPACK_IMPORTED_MODULE_3__.DellTag[tagItem])) {
                return true;
            }
        }
        return false;
    }
    var hddOldSolver = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.makeSolver)({
        name: "dellHDDOld",
        description: "Dell HDD Serial Number (old)",
        examples: ["12345678901"],
        inputValidator: function (s) { return s.length === 11; },
        fun: function (s) { return [keygenHddOld(s)]; }
    });
    var dellSolver = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.makeSolver)({
        name: "dellTag",
        description: "Dell from serial number",
        examples: ["1234567-595B", "1234567-1D3B"],
        inputValidator: function (password) {
            if (password.length !== 11) {
                return false;
            }
            else {
                return checkDellTag(password.slice(7, 11));
            }
        },
        fun: function (password) {
            var suffix = password.slice(7, 11).toUpperCase();
            return keygenDell(password.slice(0, 7).toUpperCase(), suffix, 0 /* ServiceTag */);
        }
    });
    var dellHddSolver = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.makeSolver)({
        name: "dellHddNew",
        description: "Dell from hdd serial number",
        examples: ["1234567890A-595B"],
        inputValidator: function (password) {
            if (password.length !== 15) {
                return false;
            }
            else {
                return checkDellTag(password.slice(11, 15));
            }
        },
        fun: function (password) {
            var suffix = password.slice(11, 15).toUpperCase();
            return keygenDell(password.slice(0, 11).toUpperCase(), suffix, 1 /* HDD */);
        }
    });
    var latitude3540RE = /^([0-9A-F]{16})([0-9A-Z]{7})$/i;
    // TODO: implement solver with 2 inputs
    var dellLatitude3540Solver = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.makeSolver)({
        name: "dellLatitude3540",
        description: "Dell Latitude 3540",
        examples: ["5F3988D5E0ACE4BF-7QH8602"],
        inputValidator: function (pwd) { return latitude3540RE.test(pwd); },
        fun: function (input) {
            var match = latitude3540RE.exec(input);
            if (match && match.length === 3) {
                var output = (0,_latitude__WEBPACK_IMPORTED_MODULE_2__.latitude3540Keygen)(match[1], match[2]);
                if (output) {
                    return [output];
                }
            }
            return [];
        }
    });
    
    
    /***/ }),
    
    /***/ "./src/keygen/dell/latitude.ts":
    /*!*************************************!*\
      !*** ./src/keygen/dell/latitude.ts ***!
      \*************************************/
    /***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
    
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
    /* harmony export */   "DES": function() { return /* binding */ DES; },
    /* harmony export */   "latitude3540Keygen": function() { return /* binding */ latitude3540Keygen; }
    /* harmony export */ });
    /* eslint-disable no-bitwise */
    var DES = /** @class */ (function () {
        function DES(key) {
            if (key.length !== 8) {
                throw new Error("DES key should be 8 bytes long");
            }
            this.key = Uint8Array.from(key);
            this.subKeys = new Uint32Array(16 * 2);
            this.generateSubkeys();
        }
        DES.FUNC = function (data, subkey2, subkey1) {
            var part1 = 0;
            var part2 = 0;
            var temp = 0;
            var output = 0;
            for (var i = 0; i < 48; i++) {
                var index = DES.EXPANSION[i] - 1;
                if (i < 32) {
                    part1 |= ((data >>> index) & 1) << i;
                }
                else {
                    part2 |= ((data >>> index) & 1) << (i - 32);
                }
            }
            part2 ^= subkey2;
            part1 ^= subkey1;
            function getEBit(index) {
                if (index < 32) {
                    return (part1 >>> index) & 1;
                }
                else {
                    return (part2 >>> (index - 32)) & 1;
                }
            }
            for (var i = 0, level = 0; i < 48; i += 6, level++) {
                var row = getEBit(i) << 1 | getEBit(i + 5);
                var col = getEBit(i + 1) << 3 | getEBit(i + 2) << 2 | getEBit(i + 3) << 1 | getEBit(i + 4);
                var num = DES.SBOX[level << 6 | row << 4 | col];
                // outputut in reverse order
                temp = (temp << 4) | num;
            }
            for (var i = 0; i < 32; i++) {
                var index = 32 - DES.POST_SBOX[i];
                output |= ((temp >>> index) & 1) << i;
            }
            return output;
        };
        DES.prototype.encryptBlock = function (input) {
            return this.cryptBlock(input, true);
        };
        DES.prototype.decryptBlock = function (input) {
            return this.cryptBlock(input, false);
        };
        DES.prototype.generateSubkeys = function () {
            var leftpart = 0;
            var rightpart = 0;
            for (var i = 0; i < 56; i++) {
                var index = DES.PC1[i] - 1;
                var bit = (this.key[index >>> 3] >>> (7 - (index & 7))) & 1;
                if (i < 28) {
                    leftpart |= (bit << i);
                }
                else {
                    rightpart |= (bit << (i - 28));
                }
            }
            function rightShift(part, val) {
                return (part >>> val | part << (28 - val)) & 0xfffffff;
            }
            for (var round = 0; round < 16; round++) {
                var subkeyPart1 = 0;
                var subkeyPart2 = 0;
                leftpart = rightShift(leftpart, DES.ITERATION_SHIFT[round]);
                rightpart = rightShift(rightpart, DES.ITERATION_SHIFT[round]);
                for (var i = 0; i < 48; i++) {
                    var index = DES.PC2[i] - 1;
                    var bit = ((index < 28) ? (leftpart >>> index) : (rightpart >>> (index - 28))) & 1;
                    if (i < 32) {
                        subkeyPart1 |= (bit << i);
                    }
                    else {
                        subkeyPart2 |= (bit << (i - 32));
                    }
                }
                this.subKeys[round << 1] = subkeyPart2;
                this.subKeys[round << 1 | 1] = subkeyPart1;
            }
        };
        DES.prototype.cryptBlock = function (input, encrypt) {
            if (encrypt === void 0) { encrypt = true; }
            if (input.length !== 8) {
                throw new Error("Input should be 8 bytes long");
            }
            var leftpart = 0;
            var rightpart = 0;
            // initial permutation
            for (var i = 0; i < 64; i++) {
                var index = DES.IP[i] - 1;
                var bit = (input[index >>> 3] >>> (7 - (index & 7))) & 1;
                if (i < 32) {
                    leftpart |= (bit << i);
                }
                else {
                    rightpart |= (bit << (i - 32));
                }
            }
            if (encrypt) {
                for (var round = 0; round < 16; round++) {
                    var temp = rightpart;
                    rightpart = leftpart ^ DES.FUNC(rightpart, this.subKeys[round << 1], this.subKeys[round << 1 | 1]);
                    leftpart = temp;
                }
            }
            else {
                // reverse order
                for (var round = 15; round >= 0; round--) {
                    var temp = rightpart;
                    rightpart = leftpart ^ DES.FUNC(rightpart, this.subKeys[round << 1], this.subKeys[round << 1 | 1]);
                    leftpart = temp;
                }
            }
            // final permutation
            var output = new Uint8Array(8);
            for (var i = 0; i < 64; i++) {
                var index = DES.FP[i] - 1;
                var bit = void 0;
                if (index < 32) {
                    bit = (rightpart >>> index) & 1;
                }
                else {
                    bit = (leftpart >>> (index - 32)) & 1;
                }
                output[i >>> 3] |= (bit << (7 - (i & 7)));
            }
            return output;
        };
        // DES ECB mode
        // Initial permutation table
        DES.IP = Uint8Array.from([
            58, 50, 42, 34, 26, 18, 10, 2,
            60, 52, 44, 36, 28, 20, 12, 4,
            62, 54, 46, 38, 30, 22, 14, 6,
            64, 56, 48, 40, 32, 24, 16, 8,
            57, 49, 41, 33, 25, 17, 9, 1,
            59, 51, 43, 35, 27, 19, 11, 3,
            61, 53, 45, 37, 29, 21, 13, 5,
            63, 55, 47, 39, 31, 23, 15, 7,
        ]);
        // final permutation table
        DES.FP = Uint8Array.from([
            40, 8, 48, 16, 56, 24, 64, 32,
            39, 7, 47, 15, 55, 23, 63, 31,
            38, 6, 46, 14, 54, 22, 62, 30,
            37, 5, 45, 13, 53, 21, 61, 29,
            36, 4, 44, 12, 52, 20, 60, 28,
            35, 3, 43, 11, 51, 19, 59, 27,
            34, 2, 42, 10, 50, 18, 58, 26,
            33, 1, 41, 9, 49, 17, 57, 25,
        ]);
        // permutation choice 1
        DES.PC1 = Uint8Array.from([
            57, 49, 41, 33, 25, 17, 9,
            1, 58, 50, 42, 34, 26, 18,
            10, 2, 59, 51, 43, 35, 27,
            19, 11, 3, 60, 52, 44, 36,
            63, 55, 47, 39, 31, 23, 15,
            7, 62, 54, 46, 38, 30, 22,
            14, 6, 61, 53, 45, 37, 29,
            21, 13, 5, 28, 20, 12, 4,
        ]);
        // permutation choice 2
        DES.PC2 = Uint8Array.from([
            14, 17, 11, 24, 1, 5, 3, 28,
            15, 6, 21, 10, 23, 19, 12, 4,
            26, 8, 16, 7, 27, 20, 13, 2,
            41, 52, 31, 37, 47, 55, 30, 40,
            51, 45, 33, 48, 44, 49, 39, 56,
            34, 53, 46, 42, 50, 36, 29, 32,
        ]);
        // expansion table (E table)
        DES.EXPANSION = Uint8Array.from([
            32, 1, 2, 3, 4, 5,
            4, 5, 6, 7, 8, 9,
            8, 9, 10, 11, 12, 13,
            12, 13, 14, 15, 16, 17,
            16, 17, 18, 19, 20, 21,
            20, 21, 22, 23, 24, 25,
            24, 25, 26, 27, 28, 29,
            28, 29, 30, 31, 32, 1,
        ]);
        // Post S-Box permutation (P table)
        DES.POST_SBOX = Uint8Array.from([
            16, 7, 20, 21,
            29, 12, 28, 17,
            1, 15, 23, 26,
            5, 18, 31, 10,
            2, 8, 24, 14,
            32, 27, 3, 9,
            19, 13, 30, 6,
            22, 11, 4, 25,
        ]);
        DES.ITERATION_SHIFT = Uint8Array.from([
            1, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1
        ]);
        DES.SBOX = Uint8Array.from([
            // S1
            14, 4, 13, 1, 2, 15, 11, 8, 3, 10, 6, 12, 5, 9, 0, 7,
            0, 15, 7, 4, 14, 2, 13, 1, 10, 6, 12, 11, 9, 5, 3, 8,
            4, 1, 14, 8, 13, 6, 2, 11, 15, 12, 9, 7, 3, 10, 5, 0,
            15, 12, 8, 2, 4, 9, 1, 7, 5, 11, 3, 14, 10, 0, 6, 13,
            // S2
            15, 1, 8, 14, 6, 11, 3, 4, 9, 7, 2, 13, 12, 0, 5, 10,
            3, 13, 4, 7, 15, 2, 8, 14, 12, 0, 1, 10, 6, 9, 11, 5,
            0, 14, 7, 11, 10, 4, 13, 1, 5, 8, 12, 6, 9, 3, 2, 15,
            13, 8, 10, 1, 3, 15, 4, 2, 11, 6, 7, 12, 0, 5, 14, 9,
            // S3
            10, 0, 9, 14, 6, 3, 15, 5, 1, 13, 12, 7, 11, 4, 2, 8,
            13, 7, 0, 9, 3, 4, 6, 10, 2, 8, 5, 14, 12, 11, 15, 1,
            13, 6, 4, 9, 8, 15, 3, 0, 11, 1, 2, 12, 5, 10, 14, 7,
            1, 10, 13, 0, 6, 9, 8, 7, 4, 15, 14, 3, 11, 5, 2, 12,
            // S4
            7, 13, 14, 3, 0, 6, 9, 10, 1, 2, 8, 5, 11, 12, 4, 15,
            13, 8, 11, 5, 6, 15, 0, 3, 4, 7, 2, 12, 1, 10, 14, 9,
            10, 6, 9, 0, 12, 11, 7, 13, 15, 1, 3, 14, 5, 2, 8, 4,
            3, 15, 0, 6, 10, 1, 13, 8, 9, 4, 5, 11, 12, 7, 2, 14,
            // S5
            2, 12, 4, 1, 7, 10, 11, 6, 8, 5, 3, 15, 13, 0, 14, 9,
            14, 11, 2, 12, 4, 7, 13, 1, 5, 0, 15, 10, 3, 9, 8, 6,
            4, 2, 1, 11, 10, 13, 7, 8, 15, 9, 12, 5, 6, 3, 0, 14,
            11, 8, 12, 7, 1, 14, 2, 13, 6, 15, 0, 9, 10, 4, 5, 3,
            // S6
            12, 1, 10, 15, 9, 2, 6, 8, 0, 13, 3, 4, 14, 7, 5, 11,
            10, 15, 4, 2, 7, 12, 9, 5, 6, 1, 13, 14, 0, 11, 3, 8,
            9, 14, 15, 5, 2, 8, 12, 3, 7, 0, 4, 10, 1, 13, 11, 6,
            4, 3, 2, 12, 9, 5, 15, 10, 11, 14, 1, 7, 6, 0, 8, 13,
            // S7
            4, 11, 2, 14, 15, 0, 8, 13, 3, 12, 9, 7, 5, 10, 6, 1,
            13, 0, 11, 7, 4, 9, 1, 10, 14, 3, 5, 12, 2, 15, 8, 6,
            1, 4, 11, 13, 12, 3, 7, 14, 10, 15, 6, 8, 0, 5, 9, 2,
            6, 11, 13, 8, 1, 4, 10, 7, 9, 5, 0, 15, 14, 2, 3, 12,
            // S8
            13, 2, 8, 4, 6, 15, 11, 1, 10, 9, 3, 14, 5, 0, 12, 7,
            1, 15, 13, 8, 10, 3, 7, 4, 12, 5, 6, 11, 0, 14, 9, 2,
            7, 11, 4, 1, 9, 12, 14, 2, 0, 6, 10, 13, 15, 3, 5, 8,
            2, 1, 14, 7, 4, 10, 8, 13, 15, 12, 9, 0, 3, 5, 6, 11,
        ]);
        return DES;
    }());
    
    /*
     * Latitude 3540 keygen
     * hash -- 16 digit hexdeciman number
     * tag -- 7 chars length string
     */
    function latitude3540Keygen(hash, tag) {
        var checkRe = /^[0-9A-Fa-f]$/;
        var masterKey = Uint8Array.from("23AAFFAD".split("").map(function (v) { return v.charCodeAt(0); }));
        var enc1 = new DES(masterKey);
        var block1 = new Uint8Array(8);
        var block2 = new Uint8Array(8);
        var pwd = "";
        // read hex encoded 8 byte block
        for (var i = 0; i < 8; i++) {
            block2[i] = parseInt(hash.slice(i * 2, i * 2 + 2), 16);
        }
        block1[0] = tag.charCodeAt(tag.length - 1);
        var key2 = enc1.encryptBlock(block1);
        var enc2 = new DES(key2);
        var encodedPwd = enc2.decryptBlock(block2);
        for (var i = 0; i < 8; i++) {
            var sym = String.fromCharCode(encodedPwd[i]);
            if (checkRe.test(sym)) {
                pwd += sym;
            }
            else {
                return undefined;
            }
        }
        return pwd;
    }
    
    
    /***/ }),
    
    /***/ "./src/keygen/dell/types.ts":
    /*!**********************************!*\
      !*** ./src/keygen/dell/types.ts ***!
      \**********************************/
    /***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
    
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
    /* harmony export */   "DellTag": function() { return /* binding */ DellTag; }
    /* harmony export */ });
    var DellTag;
    (function (DellTag) {
        DellTag["Tag595B"] = "595B";
        DellTag["TagD35B"] = "D35B";
        DellTag["Tag2A7B"] = "2A7B";
        DellTag["TagA95B"] = "A95B";
        DellTag["Tag1D3B"] = "1D3B";
        DellTag["Tag6FF1"] = "6FF1";
        DellTag["Tag1F66"] = "1F66";
        DellTag["Tag1F5A"] = "1F5A";
        DellTag["TagBF97"] = "BF97";
        DellTag["TagE7A8"] = "E7A8";
    })(DellTag || (DellTag = {}));
    
    
    /***/ }),
    
    /***/ "./src/keygen/fsi.ts":
    /*!***************************!*\
      !*** ./src/keygen/fsi.ts ***!
      \***************************/
    /***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
    
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
    /* harmony export */   "fsiHexSolver": function() { return /* binding */ fsiHexSolver; },
    /* harmony export */   "fsi20DecNewSolver": function() { return /* binding */ fsi20DecNewSolver; },
    /* harmony export */   "fsi20DecOldSolver": function() { return /* binding */ fsi20DecOldSolver; },
    /* harmony export */   "fsi24DecSolver": function() { return /* binding */ fsi24DecSolver; }
    /* harmony export */ });
    /* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/keygen/utils.ts");
    var __values = (undefined && undefined.__values) || function(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    };
    var __read = (undefined && undefined.__read) || function (o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    };
    /* eslint-disable no-bitwise */
    
    function generateCRC16Table() {
        var table = [];
        for (var i = 0, crc = 0; i < 256; i++) {
            crc = (i << 8);
            for (var j = 0; j < 8; j++) {
                crc = (crc << 1);
                if (crc & 0x10000) {
                    crc = crc ^ 0x1021;
                }
            }
            table.push(crc & 0xFFFF);
        }
        return table;
    }
    var crc16Table = generateCRC16Table();
    /* For Fujitsu-Siemens. 8 or 5x4 hexadecimal digits. */
    function fsiHexKeygen(serial) {
        function hashToString(hash) {
            var zero = "0".charCodeAt(0);
            return [12, 8, 4, 0].reduce(function (acc, num) {
                var temp = String.fromCharCode(zero + ((hash >> num) % 16) % 10);
                return acc + temp;
            }, "");
        }
        function calculateHash(word, table) {
            var hash = 0;
            for (var i = 0, d = 0; i < word.length; i++) {
                d = table[(word.charCodeAt(i) ^ (hash >> 8)) % 256];
                hash = ((hash << 8) ^ d) & 0xFFFF;
            }
            return hash;
        }
        if (serial.length === 20) {
            serial = serial.slice(12, 20);
        }
        return hashToString(calculateHash(serial.slice(0, 4), crc16Table)) +
            hashToString(calculateHash(serial.slice(4, 8), crc16Table));
    }
    function codeToBytes(code) {
        var e_1, _a;
        var numbers = [
            parseInt(code.slice(0, 5), 10),
            parseInt(code.slice(5, 10), 10),
            parseInt(code.slice(10, 15), 10),
            parseInt(code.slice(15, 20), 10)
        ];
        var acc = [];
        try {
            for (var numbers_1 = __values(numbers), numbers_1_1 = numbers_1.next(); !numbers_1_1.done; numbers_1_1 = numbers_1.next()) {
                var val = numbers_1_1.value;
                acc.push(val % 256);
                acc.push(Math.floor(val / 256));
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (numbers_1_1 && !numbers_1_1.done && (_a = numbers_1.return)) _a.call(numbers_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return acc;
    }
    /* For Fujitsu-Siemens. 5x4 dicimal digits */
    function fsi20DecOldKeygen(serial) {
        // opArr - array with that operations do, ar1,ar2 - numbers */
        function interleave(opArr, ar1, ar2) {
            var arr = opArr.slice(0); // copy array
            arr[ar1[0]] = ((opArr[ar2[0]] >> 4) | (opArr[ar2[3]] << 4)) & 0xFF;
            arr[ar1[1]] = ((opArr[ar2[0]] & 0x0F) | (opArr[ar2[3]] & 0xF0));
            arr[ar1[2]] = ((opArr[ar2[1]] >> 4) | (opArr[ar2[2]] << 4) & 0xFF);
            arr[ar1[3]] = (opArr[ar2[1]] & 0x0F) | (opArr[ar2[2]] & 0xF0);
            return arr;
        }
        function decryptCodeOld(bytes) {
            var _a, _b;
            var xorKey = ":3-v@e4i";
            // apply XOR key
            bytes.forEach(function (val, i, arr) {
                arr[i] = val ^ xorKey.charCodeAt(i);
            });
            // swap two bytes
            _a = __read([bytes[6], bytes[2]], 2), bytes[2] = _a[0], bytes[6] = _a[1];
            _b = __read([bytes[7], bytes[3]], 2), bytes[3] = _b[0], bytes[7] = _b[1];
            bytes = interleave(bytes, [0, 1, 2, 3], [0, 1, 2, 3]);
            bytes = interleave(bytes, [4, 5, 6, 7], [6, 7, 4, 5]);
            // final rotations
            bytes[0] = ((bytes[0] << 3) & 0xFF) | (bytes[0] >> 5);
            bytes[1] = ((bytes[1] << 5) & 0xFF) | (bytes[1] >> 3);
            bytes[2] = ((bytes[2] << 7) & 0xFF) | (bytes[2] >> 1);
            bytes[3] = ((bytes[3] << 4) & 0xFF) | (bytes[3] >> 4);
            bytes[5] = ((bytes[5] << 6) & 0xFF) | (bytes[5] >> 2);
            bytes[6] = ((bytes[6] << 1) & 0xFF) | (bytes[6] >> 7);
            bytes[7] = ((bytes[7] << 2) & 0xFF) | (bytes[7] >> 6);
            return bytes.map(function (b) { return (b % 36).toString(36); }).join("");
        }
        return decryptCodeOld(codeToBytes(serial));
    }
    /* For Fujitsu-Simens. 6x4 decimal digits */
    function fsi24DecKeygen(serial) {
        var xorKey = "<7#&9?>s";
        var tmp = codeToBytes(serial.slice(4));
        var bytes = [
            (tmp[3] & 0xF0) | (tmp[0] & 0x0F),
            (tmp[2] & 0xF0) | (tmp[1] & 0x0F),
            (tmp[5] & 0xF0) | (tmp[6] & 0x0F),
            (tmp[4] & 0xF0) | (tmp[7] & 0x0F),
            (tmp[7] & 0xF0) | (tmp[4] & 0x0F),
            (tmp[6] & 0xF0) | (tmp[5] & 0x0F),
            (tmp[1] & 0xF0) | (tmp[2] & 0x0F),
            (tmp[0] & 0xF0) | (tmp[3] & 0x0F)
        ];
        bytes.forEach(function (val, i, arr) {
            arr[i] = val ^ xorKey.charCodeAt(i);
        });
        bytes[0] = ((bytes[0] << 1) & 0xFF) | (bytes[0] >> 7);
        bytes[1] = ((bytes[1] << 7) & 0xFF) | (bytes[1] >> 1);
        bytes[2] = ((bytes[2] << 2) & 0xFF) | (bytes[2] >> 6);
        bytes[3] = ((bytes[3] << 8) & 0xFF) | (bytes[3] >> 0);
        bytes[4] = ((bytes[4] << 3) & 0xFF) | (bytes[4] >> 5);
        bytes[5] = ((bytes[5] << 6) & 0xFF) | (bytes[5] >> 2);
        bytes[6] = ((bytes[6] << 4) & 0xFF) | (bytes[6] >> 4);
        bytes[7] = ((bytes[7] << 5) & 0xFF) | (bytes[7] >> 3);
        return bytes.map(function (val) { return (val % 36).toString(36); }).join("");
    }
    /* For Fujitsu-Siemens. 5x4 dicimal digits. new */
    function fsi20DecNewKeygen(serial) {
        var fKeys = [
            "4798156302", "7201593846", "5412367098", "6587249310",
            "9137605284", "3974018625", "8052974163"
        ];
        return [0, 2, 5, 11, 13, 15, 16].map(function (val, i) {
            var temp = parseInt(serial.charAt(val), 10);
            return fKeys[i].charAt(temp);
        }).join("");
    }
    var fsiHexSolver = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.makeSolver)({
        name: "fsiHex",
        description: "Fujitsu-Siemens hexdigits",
        examples: ["DEADBEEF", "AAAA-BBBB-CCCC-DEAD-BEEF"],
        inputValidator: function (s) { return /^([0-9ABCDEF]{20}|[0-9ABCDEF]{8})$/i.test(s); },
        fun: function (code) { return [fsiHexKeygen(code)]; }
    });
    var fsi20DecNewSolver = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.makeSolver)({
        name: "fsiDecNew",
        description: "Fujitsu-Siemens decimal new (5x4)",
        examples: ["1234-4321-1234-4321-1234"],
        inputValidator: function (s) { return /^\d{20}$/i.test(s); },
        fun: function (code) { return [fsi20DecNewKeygen(code)]; }
    });
    var fsi20DecOldSolver = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.makeSolver)({
        name: "fsiDecOld",
        description: "Fujitsu-Siemens decimal old (5x4)",
        examples: ["1234-4321-1234-4321-1234"],
        inputValidator: function (s) { return /^\d{20}$/i.test(s); },
        fun: function (code) { return [fsi20DecOldKeygen(code)]; }
    });
    var fsi24DecSolver = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.makeSolver)({
        name: "fsi24Dec",
        description: "Fujitsu-Siemens decimal old (6x4)",
        examples: ["8F16-1234-4321-1234-4321-1234"],
        inputValidator: function (s) { return /^[0-9ABCDEF]{4}\d{20}$/i.test(s); },
        fun: function (code) { return [fsi24DecKeygen(code)]; }
    });
    
    
    /***/ }),
    
    /***/ "./src/keygen/hpami.ts":
    /*!*****************************!*\
      !*** ./src/keygen/hpami.ts ***!
      \*****************************/
    /***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
    
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
    /* harmony export */   "Crc32": function() { return /* binding */ Crc32; },
    /* harmony export */   "hpAMISolver": function() { return /* binding */ hpAMISolver; }
    /* harmony export */ });
    /* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/keygen/utils.ts");
    /* eslint-disable no-bitwise */
    
    var Crc32 = /** @class */ (function () {
        function Crc32(poly) {
            if (poly === undefined) {
                poly = Crc32.IEEE_POLYNOMIAL;
            }
            this.table = Crc32.getCRC32Table(poly);
            this.crc = 0;
        }
        Crc32.makeTable = function (poly) {
            var crcTable = new Uint32Array(256);
            for (var i = 0; i < 256; i++) {
                var crc = i;
                for (var j = 0; j < 8; j++) {
                    crc = (crc & 1) ? (poly ^ (crc >>> 1)) : (crc >>> 1);
                }
                crcTable[i] = crc;
            }
            return crcTable;
        };
        Crc32.getCRC32Table = function (poly) {
            var key = poly.toString(10);
            var val = Crc32.tableCache[key];
            if (val !== undefined && val instanceof Uint32Array) {
                return val;
            }
            else {
                var table = Crc32.makeTable(poly);
                // save only IEEE table
                if (poly === Crc32.IEEE_POLYNOMIAL) {
                    Crc32.tableCache[key] = table;
                }
                return table;
            }
        };
        Crc32.prototype.reset = function () {
            this.crc = 0;
        };
        Crc32.prototype.update = function (input) {
            this.crc ^= -1;
            for (var i = 0; i < input.length; i++) {
                var b = input[i] & 0xFF;
                var index = (this.crc ^ b) & 0xFF;
                this.crc = (this.crc >>> 8) ^ this.table[index];
            }
            this.crc = ((this.crc ^ (-1)) >>> 0);
        };
        Crc32.prototype.digest = function () {
            return this.crc;
        };
        Crc32.prototype.hexdigest = function () {
            return ("0".repeat(8) + this.digest().toString(16)).slice(-8);
        };
        Crc32.IEEE_POLYNOMIAL = 0xEDB88320;
        Crc32.tableCache = {};
        return Crc32;
    }());
    
    function hpAmiKeygen(input) {
        if (input.length !== 8) {
            return undefined;
        }
        var salt = Uint8Array.from([
            0xb9, 0xed, 0xf5, 0x69, 0x9d, 0x16, 0x49, 0xf9,
            0x8c, 0x5f, 0x7c, 0xb3, 0x68, 0x3c, 0xd4, 0xa7
        ]);
        var backdoor = parseInt(input, 16);
        var temp = new Uint8Array(20);
        var crc = new Crc32();
        for (var i = 0; i < 0x10; i++) {
            temp[i] = salt[i] ^ 0x36;
        }
        // pack value in little-endian format
        temp[0x10] = backdoor & 0xFF;
        temp[0x11] = (backdoor >>> 8) & 0xFF;
        temp[0x12] = (backdoor >>> 16) & 0xFF;
        temp[0x13] = (backdoor >>> 24) & 0xFF;
        crc.update(temp);
        var next = crc.digest();
        for (var i = 0; i < 0x10; i++) {
            temp[i] = salt[i] ^ 0x5C;
        }
        // pack value in little-endian format
        temp[0x10] = next & 0xFF;
        temp[0x11] = (next >>> 8) & 0xFF;
        temp[0x12] = (next >>> 16) & 0xFF;
        temp[0x13] = (next >>> 24) & 0xFF;
        crc.reset();
        crc.update(temp);
        return crc.hexdigest();
    }
    var hpAMISolver = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.makeSolver)({
        name: "hpAMI",
        description: "HP AMI",
        examples: ["A7AF422F"],
        inputValidator: function (s) { return /^[0-9ABCDEF]{8}$/i.test(s); },
        fun: function (input) {
            var output = hpAmiKeygen(input);
            return (output) ? [output] : [];
        }
    });
    
    
    /***/ }),
    
    /***/ "./src/keygen/hpmini.ts":
    /*!******************************!*\
      !*** ./src/keygen/hpmini.ts ***!
      \******************************/
    /***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
    
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
    /* harmony export */   "hpMiniSolver": function() { return /* binding */ hpMiniSolver; }
    /* harmony export */ });
    /* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/keygen/utils.ts");
    /* For HP/Compaq Netbooks. 10 chars */
    
    var table1 = {
        "1": "3", "0": "1", "3": "F", "2": "7", "5": "Q", "4": "V",
        "7": "X", "6": "G", "9": "O", "8": "U", "a": "C", "c": "E",
        "b": "P", "e": "M", "d": "T", "g": "H", "f": "8", "i": "Y",
        "h": "Z", "k": "S", "j": "W", "m": "4", "l": "K", "o": "J",
        "n": "9", "q": "5", "p": "2", "s": "N", "r": "B", "u": "L",
        "t": "A", "w": "D", "v": "6", "y": "I", "x": "4", "z": "0"
    };
    var table2 = {
        "1": "3", "0": "1", "3": "F", "2": "7", "5": "Q", "4": "V",
        "7": "X", "6": "G", "9": "O", "8": "U", "a": "C", "c": "E",
        "b": "P", "e": "M", "d": "T", "g": "H", "f": "8", "i": "Y",
        "h": "Z", "k": "S", "j": "W", "m": "4", "l": "K", "o": "J",
        "n": "9", "q": "5", "p": "2", "s": "N", "r": "B", "u": "L",
        "t": "A", "w": "D", "v": "6", "y": "I", "x": "R", "z": "0"
    };
    function hpMiniKeygen(serial) {
        var password1 = "";
        var password2 = "";
        serial = serial.toLowerCase();
        for (var i = 0; i < serial.length; i++) {
            password1 += table1[serial.charAt(i)];
            password2 += table2[serial.charAt(i)];
        }
        if (password1 === password2) {
            return [password1.toLowerCase()];
        }
        else {
            return [password1.toLowerCase(), password2.toLowerCase()];
        }
    }
    var hpMiniSolver = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.makeSolver)({
        name: "hpMini",
        description: "HP/Compaq Mini Netbooks",
        examples: ["CNU1234ABC"],
        inputValidator: function (s) { return /^[0-9A-Z]{10}$/i.test(s); },
        fun: hpMiniKeygen
    });
    
    
    /***/ }),
    
    /***/ "./src/keygen/index.ts":
    /*!*****************************!*\
      !*** ./src/keygen/index.ts ***!
      \*****************************/
    /***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
    
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
    /* harmony export */   "solvers": function() { return /* binding */ solvers; },
    /* harmony export */   "keygen": function() { return /* binding */ keygen; }
    /* harmony export */ });
    /* harmony import */ var _polyfills_performancePolyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../polyfills/performancePolyfill */ "./src/polyfills/performancePolyfill.ts");
    /* harmony import */ var _asus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./asus */ "./src/keygen/asus.ts");
    /* harmony import */ var _dell__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dell */ "./src/keygen/dell/index.ts");
    /* harmony import */ var _fsi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fsi */ "./src/keygen/fsi.ts");
    /* harmony import */ var _hpami__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hpami */ "./src/keygen/hpami.ts");
    /* harmony import */ var _hpmini__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hpmini */ "./src/keygen/hpmini.ts");
    /* harmony import */ var _insyde__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./insyde */ "./src/keygen/insyde.ts");
    /* harmony import */ var _phoenix__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./phoenix */ "./src/keygen/phoenix.ts");
    /* harmony import */ var _samsung__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./samsung */ "./src/keygen/samsung.ts");
    /* harmony import */ var _sony__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sony */ "./src/keygen/sony.ts");
    /* harmony import */ var _sony_4x4__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sony_4x4 */ "./src/keygen/sony_4x4.ts");
    var __read = (undefined && undefined.__read) || function (o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    };
    
    
    
    
    
    
    
    
    
    
    
    var solvers = [
        _asus__WEBPACK_IMPORTED_MODULE_1__.asusSolver,
        _insyde__WEBPACK_IMPORTED_MODULE_6__.acerInsyde10Solver,
        _sony__WEBPACK_IMPORTED_MODULE_9__.sonySolver,
        _sony_4x4__WEBPACK_IMPORTED_MODULE_10__.sony4x4Solver,
        _samsung__WEBPACK_IMPORTED_MODULE_8__.samsung44HexSolver,
        _samsung__WEBPACK_IMPORTED_MODULE_8__.samsungSolver,
        _dell__WEBPACK_IMPORTED_MODULE_2__.hddOldSolver,
        _dell__WEBPACK_IMPORTED_MODULE_2__.dellSolver,
        _dell__WEBPACK_IMPORTED_MODULE_2__.dellHddSolver,
        _dell__WEBPACK_IMPORTED_MODULE_2__.dellLatitude3540Solver,
        _fsi__WEBPACK_IMPORTED_MODULE_3__.fsiHexSolver,
        _fsi__WEBPACK_IMPORTED_MODULE_3__.fsi20DecNewSolver,
        _fsi__WEBPACK_IMPORTED_MODULE_3__.fsi20DecOldSolver,
        _fsi__WEBPACK_IMPORTED_MODULE_3__.fsi24DecSolver,
        _hpmini__WEBPACK_IMPORTED_MODULE_5__.hpMiniSolver,
        _insyde__WEBPACK_IMPORTED_MODULE_6__.hpInsydeSolver,
        _hpami__WEBPACK_IMPORTED_MODULE_4__.hpAMISolver,
        _insyde__WEBPACK_IMPORTED_MODULE_6__.insydeSolver,
        _phoenix__WEBPACK_IMPORTED_MODULE_7__.phoenixSolver,
        _phoenix__WEBPACK_IMPORTED_MODULE_7__.phoenixHPCompaqSolver,
        _phoenix__WEBPACK_IMPORTED_MODULE_7__.phoenixFsiSolver,
        _phoenix__WEBPACK_IMPORTED_MODULE_7__.phoenixFsiLSolver,
        _phoenix__WEBPACK_IMPORTED_MODULE_7__.phoenixFsiPSolver,
        _phoenix__WEBPACK_IMPORTED_MODULE_7__.phoenixFsiSSolver,
        _phoenix__WEBPACK_IMPORTED_MODULE_7__.phoenixFsiXSolver
    ];
    // NOTE: In future this function can change or even be removed
    function keygen(serial) {
        return solvers
            .map(function (solver) {
            var startTime = (0,_polyfills_performancePolyfill__WEBPACK_IMPORTED_MODULE_0__.monotonicTime)();
            var passwords = solver(serial);
            var calcTime = (0,_polyfills_performancePolyfill__WEBPACK_IMPORTED_MODULE_0__.monotonicTime)() - startTime;
            return [solver, passwords, calcTime];
        }).filter(function (_a) {
            var _b = __read(_a, 2), _ = _b[0], passwords = _b[1];
            return passwords !== undefined && passwords.length >= 1;
        });
    }
    
    
    /***/ }),
    
    /***/ "./src/keygen/insyde.ts":
    /*!******************************!*\
      !*** ./src/keygen/insyde.ts ***!
      \******************************/
    /***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
    
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
    /* harmony export */   "insydeAcerSwitch": function() { return /* binding */ insydeAcerSwitch; },
    /* harmony export */   "insydeSolver": function() { return /* binding */ insydeSolver; },
    /* harmony export */   "acerInsyde10Solver": function() { return /* binding */ acerInsyde10Solver; },
    /* harmony export */   "hpInsydeSolver": function() { return /* binding */ hpInsydeSolver; }
    /* harmony export */ });
    /* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/keygen/utils.ts");
    /* harmony import */ var _cryptoUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cryptoUtils */ "./src/keygen/cryptoUtils.ts");
    /* eslint-disable no-bitwise */
    /* eslint-disable @typescript-eslint/no-shadow */
    /* eslint-disable no-shadow */
    /* Maybe need fixing for browsers where numbers is 32-bits */
    /* Some Acer, HP  laptops. 8 digit */
    
    
    var INSYDE_SALT = "Insyde Software Corp.";
    function insydeAcerSwitch(arr) {
        if (arr.length !== 32) {
            throw new Error("Input array should have 32 length");
        }
        function fun0(arr) {
            var output = new Uint8Array(16);
            var k = 0;
            for (var i = 3; i >= 0; i--) {
                for (var j = 0; j < 16; j += 4) {
                    output[k++] = arr[i + j];
                }
            }
            return output;
        }
        function fun1(arr) {
            var output = new Uint8Array(16);
            var k = 0;
            for (var i = 0; i < 4; i++) {
                for (var j = 12; j >= 0; j -= 4) {
                    output[k++] = arr[i + j];
                }
            }
            return output;
        }
        function fun2(arr) {
            var output = new Uint8Array(16);
            var k = 0;
            for (var i = 0; i < 4; i++) {
                for (var j = 0; j < 4; j++) {
                    output[k++] = (arr[((j + i) & 3) + i * 4] + i) & 0xFF;
                }
            }
            return output;
        }
        function fun3(arr) {
            var output = new Uint8Array(16);
            var k = 0;
            var acc1 = 0;
            var acc2 = 0;
            for (var i = 0; i < 4; i++) {
                acc1 ^= arr[i * 5];
                acc2 ^= arr[i * 3 + 3];
            }
            for (var i = 0; i < 16; i++) {
                var pivot = ((i & 1) === 0) ? acc1 : acc2;
                output[k++] = arr[i] ^ pivot;
            }
            return output;
        }
        function fun4(arr) {
            var output = new Uint8Array(16);
            var k = 0;
            for (var i = 0; i < 16; i++) {
                var temp1 = arr[i];
                var temp2 = arr[(i + 1) & 0xF]; // arr[(i + 1) % 15];
                var pivot = (temp2 < temp1) ? temp2 : 0xFF;
                output[k++] = temp1 ^ pivot;
            }
            return output;
        }
        function fun5(arr) {
            var output = new Uint8Array(16);
            for (var i = 0; i < 4; i++) {
                var acc = 0;
                for (var j = 0; j < 16; j += 4) {
                    acc ^= arr[j + i];
                }
                for (var j = 0; j < 16; j += 4) {
                    var temp_1 = i + j;
                    output[temp_1] = (arr[temp_1] * acc) & 0xFF;
                }
            }
            return output;
        }
        function keyProcess(arr) {
            var output = new Uint8Array(16);
            for (var i = 0; i < 16; i++) {
                var acc = 0;
                for (var j = 0; j < 8; j++) {
                    acc += arr[((i >> 2) << 3) + j] * arr[j * 4 + (i & 3)];
                }
                output[i] = acc & 0xFF;
            }
            return output;
        }
        var temp = keyProcess(arr);
        switch (arr[8] % 6) {
            case 0:
                return fun0(temp);
            case 1:
                return fun1(temp);
            case 2:
                return fun2(temp);
            case 3:
                return fun3(temp);
            case 4:
                return fun4(temp);
            default:
                return fun5(temp);
        }
    }
    // 10 digits acer key
    function acerInsydeKeygen(serial) {
        function rotatefun(arr) {
            var idx = arr[9] & 0xF;
            var output = new Uint8Array(16);
            for (var i = 0; i < output.length; i++) {
                output[i] = arr[((idx * 2 + 1) * i) % arr.length];
            }
            return output;
        }
        var inputBytes = Uint8Array.from(serial.split("").map(function (c) { return c.charCodeAt(0) & 0xFF; }));
        var digest = (new _cryptoUtils__WEBPACK_IMPORTED_MODULE_1__.Sha256(inputBytes)).digest();
        var key = insydeAcerSwitch(digest);
        var blockData = rotatefun(digest);
        var data = (new _cryptoUtils__WEBPACK_IMPORTED_MODULE_1__.AES128(key)).encryptBlock(blockData);
        var crc = new _cryptoUtils__WEBPACK_IMPORTED_MODULE_1__.Crc64(_cryptoUtils__WEBPACK_IMPORTED_MODULE_1__.Crc64.ECMA_POLYNOMIAL);
        crc.update(data);
        return [crc.hexdigest()];
    }
    function insydeKeygen(serial) {
        var salt1 = INSYDE_SALT;
        var salt2 = ":\x16@>\x1496H\x07.\x0f\x0e\nG-MDGHBT";
        // some firmware has a bug in number convesion to string
        // they use simple snprintf(dst, 0x16, "%d", serial) so leading zeros are lost
        // and at the end buffer is filled with \x00
        var serial2 = (parseInt(serial, 10).toString() + "\x00".repeat(8)).slice(0, 8);
        var password1 = "";
        var password2 = "";
        var password3 = "";
        for (var i = 0; i < 8; i++) {
            // salt.charCodeAt(i % salt.length) + (i % salt.length)
            var b = (salt1.charCodeAt(i) + i) ^ serial.charCodeAt(i);
            password1 += (b % 10).toString();
            b = (salt1.charCodeAt(i) + i) ^ serial2.charCodeAt(i);
            password2 += (b % 10).toString();
            b = salt2.charCodeAt(i) ^ serial2.charCodeAt(i);
            password3 += (b % 10).toString();
        }
        if (password1 === password2) {
            return [password1, password3];
        }
        else {
            return [password1, password2, password3];
        }
    }
    function hpInsydeKeygen(serial) {
        var inputRe = /^i\s*(\d{8})$/i;
        var salt1 = "c6B|wS^8";
        var salt2 = INSYDE_SALT;
        var match = inputRe.exec(serial);
        if (!match || match.length !== 2) {
            return [];
        }
        else {
            serial = match[1];
        }
        var password1 = "";
        var password2 = "";
        for (var i = 0; i < 8; i++) {
            var b = (salt1.charCodeAt(i) + i) ^ serial.charCodeAt(i);
            password1 += (b % 10).toString();
            b = (salt2.charCodeAt(i) + i) ^ serial.charCodeAt(i);
            password2 += (b % 10).toString();
        }
        return [password1, password2];
    }
    var insydeSolver = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.makeSolver)({
        name: "insydeH2O",
        description: "Insyde H2O BIOS (Acer, HP)",
        examples: ["03133610"],
        inputValidator: function (s) { return /^\d{8}$/i.test(s); },
        fun: insydeKeygen
    });
    var acerInsyde10Solver = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.makeSolver)({
        name: "acerInsyde10",
        description: "Acer Insyde 10 digits",
        examples: ["0173549286"],
        inputValidator: function (s) { return /^\d{10}$/i.test(s); },
        fun: acerInsydeKeygen
    });
    var hpInsydeSolver = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.makeSolver)({
        name: "hpInsyde",
        description: "HP Insyde H2O",
        examples: ["i 70412809", "I 59170869"],
        inputValidator: function (s) { return /^i\s*\d{8}$/i.test(s); },
        fun: hpInsydeKeygen
    });
    
    
    /***/ }),
    
    /***/ "./src/keygen/phoenix.ts":
    /*!*******************************!*\
      !*** ./src/keygen/phoenix.ts ***!
      \*******************************/
    /***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
    
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
    /* harmony export */   "phoenixSolver": function() { return /* binding */ phoenixSolver; },
    /* harmony export */   "phoenixHPCompaqSolver": function() { return /* binding */ phoenixHPCompaqSolver; },
    /* harmony export */   "phoenixFsiSolver": function() { return /* binding */ phoenixFsiSolver; },
    /* harmony export */   "phoenixFsiLSolver": function() { return /* binding */ phoenixFsiLSolver; },
    /* harmony export */   "phoenixFsiPSolver": function() { return /* binding */ phoenixFsiPSolver; },
    /* harmony export */   "phoenixFsiSSolver": function() { return /* binding */ phoenixFsiSSolver; },
    /* harmony export */   "phoenixFsiXSolver": function() { return /* binding */ phoenixFsiXSolver; }
    /* harmony export */ });
    /* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/keygen/utils.ts");
    /* eslint-disable no-bitwise */
    
    // Without zero
    var digitsOnly = "123456789".split("");
    var lettersOnly = "abcdefghijklmnopqrstuvwxyz".split("");
    // const alphaNumeric: string[] = lettersOnly.concat(digitsOnly);
    var defaultPhoenix = {
        shift: 0,
        salt: 0,
        dictionary: lettersOnly,
        minLen: 3,
        maxLen: 7
    };
    /* The phoenix implementation of the CRC-16 contains a rather severe bug
     * quartering the image space of the function: both the first and second MSB
     * are always zero regardless of the input.
     * For a working implementation, you'd have to change the polynom from 0x2001
     * to e.g. 0xA001.
     */
    function badCRC16(pwd, salt) {
        if (salt === void 0) { salt = 0; }
        var hash = salt;
        for (var c = 0; c < pwd.length; c++) {
            hash ^= pwd[c];
            for (var i = 8; i--;) {
                if (hash & 1) {
                    hash = (hash >> 1) ^ 0x2001;
                }
                else {
                    hash = (hash >> 1);
                }
            }
        }
        return hash;
    }
    /*
     * Modified version of badCRC16 to speedup bruteForce.
     * Returns pasword length if it matches required hash
     * or -1 if it isn't matches requiredHash.
     */
    function searchBadCRC16(pwd, salt, requiredHash, minLen) {
        minLen--;
        var hash = salt;
        for (var c = 0; c < pwd.length; c++) {
            hash ^= pwd[c];
            for (var i = 8; i--;) {
                if (hash & 1) {
                    hash = (hash >> 1) ^ 0x2001;
                }
                else {
                    hash = (hash >> 1);
                }
            }
            if (c >= minLen && hash === requiredHash) {
                return c + 1;
            }
        }
        return -1; // not found
    }
    function generatePhoenixPassword(encodedPwd, characters) {
        if (characters === void 0) { characters = lettersOnly; }
        var rnd = Math.random() * characters.length;
        for (var i = 0; i < encodedPwd.length; i++) {
            var index = Math.floor(rnd % characters.length);
            encodedPwd[i] = _utils__WEBPACK_IMPORTED_MODULE_0__.reversedScanCodes[characters[index]];
            rnd *= encodedPwd.length;
        }
    }
    function bruteForce(hash, salt, characters, minLen, maxLen) {
        if (salt === void 0) { salt = 0; }
        if (characters === void 0) { characters = lettersOnly; }
        if (minLen === void 0) { minLen = 3; }
        if (maxLen === void 0) { maxLen = 7; }
        var encodedPwd = [];
        for (var i = 0; i < maxLen; i++) {
            encodedPwd.push(0);
        }
        if (hash > 0x3FFF) {
            return 0 /* BadHash */;
        }
        var kk = 0;
        while (true) {
            kk++;
            if (kk > 7000000) {
                return 1 /* NotFound */;
            }
            generatePhoenixPassword(encodedPwd, characters);
            var found = searchBadCRC16(encodedPwd, salt, hash, minLen);
            if (found !== -1) {
                return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.keyboardEncToAscii)(encodedPwd.slice(0, found));
            }
        }
    }
    function makePhoenixSolver(description) {
        /* eslint-disable @typescript-eslint/no-unsafe-member-access */
        if (description === void 0) {
            description = {};
        }
        var key;
        for (key in defaultPhoenix) {
            if (description[key] === void 0) {
                description[key] = defaultPhoenix[key];
            }
        }
        var info = {
            shift: description.shift,
            salt: description.salt,
            dictionary: description.dictionary,
            minLen: description.minLen,
            maxLen: description.maxLen
        };
        var keygen = function (code) {
            var password = bruteForce(parseInt(code, 10) + info.shift, info.salt, info.dictionary, info.minLen, info.maxLen);
            if (typeof password === "string") {
                return [password];
            }
            else {
                return [];
            }
        };
        var cleaner = function (code) { return code.trim().replace(/[-\s]/gi, ""); };
        var validator = function (s) { return /^[0-9]{5}$/i.test(s); };
        var calculateHash = function (password) {
            var pwd = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.asciiToKeyboardEnc)(password);
            return badCRC16(pwd, info.salt) - info.shift;
        };
        var solver = function (code) {
            var cleanCode = cleaner(code);
            if (validator(cleanCode)) {
                return keygen(cleanCode);
            }
            else {
                return [];
            }
        };
        solver.biosName = description.name;
        solver.validator = validator;
        solver.cleaner = cleaner;
        solver.keygen = keygen;
        solver.examples = ["12345"];
        solver.info = info;
        solver.calculateHash = calculateHash;
        if (description.description) {
            solver.description = description.description;
        }
        return solver;
    }
    var phoenixSolver = makePhoenixSolver({
        name: "phoenix",
        description: "Generic Phoenix"
    });
    var phoenixHPCompaqSolver = makePhoenixSolver({
        name: "phoenixHP",
        description: "HP/Compaq Phoenix BIOS",
        salt: 17232
    });
    var phoenixFsiSolver = makePhoenixSolver({
        name: "phoenixFSI",
        description: "Fujitsu-Siemens Phoenix",
        salt: 65,
        dictionary: digitsOnly
    });
    var phoenixFsiLSolver = makePhoenixSolver({
        name: "phoenixFSIModelL",
        description: "Fujitsu-Siemens (model L) Phoenix",
        shift: 1,
        salt: "L".charCodeAt(0),
        dictionary: digitsOnly
    });
    var phoenixFsiPSolver = makePhoenixSolver({
        name: "phoenixFSIModelP",
        description: "Fujitsu-Siemens (model P) Phoenix",
        shift: 1,
        salt: "P".charCodeAt(0),
        dictionary: digitsOnly
    });
    var phoenixFsiSSolver = makePhoenixSolver({
        name: "phoenixFSIModelS",
        description: "Fujitsu-Siemens (model S) Phoenix",
        shift: 1,
        salt: "S".charCodeAt(0),
        dictionary: digitsOnly
    });
    var phoenixFsiXSolver = makePhoenixSolver({
        name: "phoenixFSIModelX",
        description: "Fujitsu-Siemens (model X) Phoenix",
        shift: 1,
        salt: "X".charCodeAt(0),
        dictionary: digitsOnly
    });
    
    
    /***/ }),
    
    /***/ "./src/keygen/samsung.ts":
    /*!*******************************!*\
      !*** ./src/keygen/samsung.ts ***!
      \*******************************/
    /***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
    
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
    /* harmony export */   "samsung44HexKeygen": function() { return /* binding */ samsung44HexKeygen; },
    /* harmony export */   "samsungSolver": function() { return /* binding */ samsungSolver; },
    /* harmony export */   "samsung44HexSolver": function() { return /* binding */ samsung44HexSolver; }
    /* harmony export */ });
    /* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/keygen/utils.ts");
    /* eslint-disable no-bitwise */
    /* Return password for samsung laptops
     * 12 or 18 hexhecimal digits like 07088120410C0000
     */
    var __values = (undefined && undefined.__values) || function(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    };
    
    
    var rotationMatrix1 = [
        7, 1, 5, 3, 0, 6, 2, 5, 2, 3, 0, 6, 1, 7, 6, 1, 5, 2, 7, 1, 0, 3, 7,
        6, 1, 0, 5, 2, 1, 5, 7, 3, 2, 0, 6
    ];
    var rotationMatrix2 = [
        1, 6, 2, 5, 7, 3, 0, 7, 1, 6, 2, 5, 0, 3, 0, 6, 5, 1, 1, 7, 2, 5, 2,
        3, 7, 6, 2, 1, 3, 7, 6, 5, 0, 1, 7
    ];
    var rotationMatrix3 = Uint8Array.from([
        3, 6, 3, 1, 6, 7, 7, 7, 2, 6, 4, 3, 4, 6, 1, 7, 2, 1, 7, 7,
        5, 3, 3, 1, 2, 3, 1, 2, 1, 7, 4, 7, 6, 2, 4, 4, 1, 6, 1, 5,
        6, 6, 7, 5, 7, 7, 4, 3, 1, 1, 1, 6, 3, 2, 7, 3, 7, 3, 7, 3,
        5, 6, 4, 1, 1, 3, 6, 6, 1, 4, 3, 7, 6, 7, 5, 3, 6, 7, 6, 3,
        1, 3, 5, 7, 5, 6, 2, 2, 7, 5, 7, 1, 2, 3, 2, 1, 6, 4, 5, 3
    ]);
    function keyToAscii(intKeys) {
        var e_1, _a;
        var out = "";
        try {
            for (var intKeys_1 = __values(intKeys), intKeys_1_1 = intKeys_1.next(); !intKeys_1_1.done; intKeys_1_1 = intKeys_1.next()) {
                var intKey = intKeys_1_1.value;
                if (intKey === 0) {
                    return out;
                }
                if (intKey < 32 || intKey > 127) {
                    return undefined;
                }
                out += String.fromCharCode(intKey);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (intKeys_1_1 && !intKeys_1_1.done && (_a = intKeys_1.return)) _a.call(intKeys_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return out;
    }
    function decryptHash(hash, key, rotationMatrix) {
        var outhash = [];
        for (var i = 0; i < hash.length; i++) {
            var val = ((hash[i] << (rotationMatrix[7 * key + i])) & 0xFF) |
                (hash[i] >> (8 - rotationMatrix[7 * key + i]));
            outhash.push(val);
        }
        return outhash;
    }
    function samsungKeygen(serial) {
        var hash = [];
        for (var i = 1; i < Math.floor(serial.length / 2); i++) {
            var val = parseInt(serial.charAt(2 * i) + serial.charAt(2 * i + 1), 16);
            hash.push(val);
        }
        var key = parseInt(serial.substring(0, 2), 16) % 5;
        var calcScanCodePwd = function (matrix) {
            return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.keyboardEncToAscii)(decryptHash(hash, key, matrix));
        };
        var scanCodePassword = calcScanCodePwd(rotationMatrix1);
        if (scanCodePassword === "") {
            scanCodePassword = calcScanCodePwd(rotationMatrix2);
        }
        var asciiPassword1 = keyToAscii(decryptHash(hash, key, rotationMatrix1));
        var asciiPassword2 = keyToAscii(decryptHash(hash, key, rotationMatrix2));
        return [scanCodePassword, asciiPassword1, asciiPassword2].
            filter(function (code) { return code ? true : false; });
    }
    function byteRol(val, shift) {
        return ((val << shift) & 0xff) | (val >> (8 - shift));
    }
    function nonprintable(sym) {
        return sym >= 127 || sym < 32;
    }
    /* Samsung 44 HEX keys */
    function samsung44HexKeygen(serial) {
        if (serial.length !== 44) {
            return undefined;
        }
        var hash = new Uint8Array(22);
        var password = "";
        for (var i = 21; i >= 0; i--) {
            var low = parseInt(serial[i * 2], 16);
            var high = parseInt(serial[i * 2 + 1], 16);
            hash[21 - i] = (high << 4) | low;
        }
        var pwdLength = hash[0] >> 3;
        if (pwdLength > 20) {
            // length to big, probably other algorithm
            return undefined;
        }
        var key = (hash[1] % 5) * 20;
        for (var i = 0; i < pwdLength; i++) {
            var shift = rotationMatrix3[key + i];
            var sym = byteRol(byteRol(hash[i + 2], shift), 4);
            if (nonprintable(sym)) {
                return undefined;
            }
            password += String.fromCharCode(sym);
        }
        return password;
    }
    var samsungSolver = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.makeSolver)({
        name: "samsung",
        description: "Samsung",
        examples: ["07088120410C0000"],
        inputValidator: function (s) { return /^[0-9ABCDEF]+$/i.test(s) && (s.length === 12 || s.length === 14 || s.length === 16 || s.length === 18); },
        fun: samsungKeygen
    });
    var samsung44HexSolver = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.makeSolver)({
        name: "samsung44Hex",
        description: "Samsung 44 Hexdecimal",
        examples: ["54574AAD6A8B1B9353F6FA66DCD2DA91B06DBD8E3204"],
        inputValidator: function (s) { return /^[0-9ABCDEF]{44}$/i.test(s); },
        fun: function (hash) {
            var pwd = samsung44HexKeygen(hash);
            return (pwd) ? [pwd] : [];
        }
    });
    
    
    /***/ }),
    
    /***/ "./src/keygen/sony.ts":
    /*!****************************!*\
      !*** ./src/keygen/sony.ts ***!
      \****************************/
    /***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
    
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
    /* harmony export */   "sonySolver": function() { return /* binding */ sonySolver; }
    /* harmony export */ });
    /* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/keygen/utils.ts");
    
    /* Return password for old sony laptops
     * password 7 digit number like 1234567
     */
    function sonyKeygen(serial) {
        var table = "0987654321876543210976543210982109876543109876543221098765436543210987";
        var code = "";
        for (var i = 0; i < serial.length; i++) {
            code += table.charAt(parseInt(serial.charAt(i), 10) + 10 * i);
        }
        return code;
    }
    var sonySolver = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.makeSolver)({
        name: "sony",
        description: "Old Sony",
        examples: ["1234567"],
        inputValidator: function (s) { return /^\d{7}$/i.test(s); },
        fun: function (code) {
            var res = sonyKeygen(code);
            return res ? [res] : [];
        }
    });
    
    
    /***/ }),
    
    /***/ "./src/keygen/sony_4x4.ts":
    /*!********************************!*\
      !*** ./src/keygen/sony_4x4.ts ***!
      \********************************/
    /***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
    
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
    /* harmony export */   "modularPow": function() { return /* binding */ modularPow; },
    /* harmony export */   "sony4x4Keygen": function() { return /* binding */ sony4x4Keygen; },
    /* harmony export */   "sony4x4Solver": function() { return /* binding */ sony4x4Solver; }
    /* harmony export */ });
    /* harmony import */ var jsbi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsbi */ "./node_modules/jsbi/dist/jsbi-umd.js");
    /* harmony import */ var jsbi__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsbi__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/keygen/utils.ts");
    var __read = (undefined && undefined.__read) || function (o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    };
    // based on dogbert's pwgen-sony-4x4.py
    /* eslint-disable no-bitwise */
    
    
    var otpChars = "9DPK7V2F3RT6HX8J";
    var pwdChars = "47592836";
    var inputRe = new RegExp("^[".concat(otpChars, "]{16}$"));
    function arrayToNumber(arr) {
        // same as python struct.unpack("<I", arr)
        return (arr[3] << 24 | arr[2] << 16 | arr[1] << 8 | arr[0]) >>> 0;
    }
    function numberToArray(num) {
        return [num & 0xFF, (num >> 8) & 0xFF, (num >> 16) & 0xFF, (num >> 24) & 0xFF];
    }
    function decodeHash(hash) {
        var temp = [];
        for (var i = 0; i < hash.length; i += 2) {
            // TODO: check values
            temp.unshift(otpChars.indexOf(hash[i]) * 16 + otpChars.indexOf(hash[i + 1]));
        }
        return temp;
    }
    function encodePassword(pwd) {
        var n = arrayToNumber(pwd);
        var result = "";
        for (var i = 0; i < 8; i++) {
            result += pwdChars.charAt((n >> (21 - i * 3)) & 0x7);
        }
        return result;
    }
    // http://numericalrecipes.blogspot.com/2009/03/modular-multiplicative-inverse.html
    function extEuclideanAlg(a, b) {
        if (jsbi__WEBPACK_IMPORTED_MODULE_0___default().EQ(b, 0)) {
            return [jsbi__WEBPACK_IMPORTED_MODULE_0___default().BigInt(1), jsbi__WEBPACK_IMPORTED_MODULE_0___default().BigInt(0), a];
        }
        else {
            var _a = __read(extEuclideanAlg(b, jsbi__WEBPACK_IMPORTED_MODULE_0___default().remainder(a, b)), 3), x = _a[0], y = _a[1], gcd = _a[2];
            return [y, jsbi__WEBPACK_IMPORTED_MODULE_0___default().subtract(x, jsbi__WEBPACK_IMPORTED_MODULE_0___default().multiply(y, jsbi__WEBPACK_IMPORTED_MODULE_0___default().divide(a, b))), gcd];
        }
    }
    function modInvEuclid(a, m) {
        var _a = __read(extEuclideanAlg(a, m), 3), x = _a[0], gcd = _a[2];
        if (jsbi__WEBPACK_IMPORTED_MODULE_0___default().EQ(gcd, 1)) {
            // hack for javascript modulo operation
            // https://stackoverflow.com/questions/4467539/javascript-modulo-gives-a-negative-result-for-negative-numbers
            var temp = jsbi__WEBPACK_IMPORTED_MODULE_0___default().remainder(x, m);
            return jsbi__WEBPACK_IMPORTED_MODULE_0___default().GE(temp, 0) ? temp : jsbi__WEBPACK_IMPORTED_MODULE_0___default().ADD(temp, m);
        }
        else {
            return undefined;
        }
    }
    // https://en.wikipedia.org/wiki/Modular_exponentiation#Right-to-left_binary_method
    function modularPow(base, exponent, modulus) {
        var result = jsbi__WEBPACK_IMPORTED_MODULE_0___default().BigInt(1);
        if (!(modulus instanceof (jsbi__WEBPACK_IMPORTED_MODULE_0___default()))) {
            modulus = jsbi__WEBPACK_IMPORTED_MODULE_0___default().BigInt(modulus);
        }
        if (jsbi__WEBPACK_IMPORTED_MODULE_0___default().EQ(modulus, 1)) {
            return 0;
        }
        base = jsbi__WEBPACK_IMPORTED_MODULE_0___default().remainder(base, modulus);
        while (exponent > 0) {
            if ((exponent & 1) === 1) {
                result = jsbi__WEBPACK_IMPORTED_MODULE_0___default().remainder(jsbi__WEBPACK_IMPORTED_MODULE_0___default().multiply(result, base), modulus);
            }
            exponent = exponent >> 1;
            base = jsbi__WEBPACK_IMPORTED_MODULE_0___default().remainder(jsbi__WEBPACK_IMPORTED_MODULE_0___default().multiply(base, base), modulus);
        }
        return jsbi__WEBPACK_IMPORTED_MODULE_0___default().toNumber(result);
    }
    function rsaDecrypt(code) {
        var low = jsbi__WEBPACK_IMPORTED_MODULE_0___default().BigInt(arrayToNumber(code.slice(0, 4)));
        var high = jsbi__WEBPACK_IMPORTED_MODULE_0___default().BigInt(arrayToNumber(code.slice(4, 8)));
        var c = jsbi__WEBPACK_IMPORTED_MODULE_0___default().bitwiseOr(jsbi__WEBPACK_IMPORTED_MODULE_0___default().leftShift(high, jsbi__WEBPACK_IMPORTED_MODULE_0___default().BigInt(32)), low);
        var p = 2795287379;
        var q = 3544934711;
        var e = 41;
        var phi = jsbi__WEBPACK_IMPORTED_MODULE_0___default().multiply(jsbi__WEBPACK_IMPORTED_MODULE_0___default().BigInt(p - 1), jsbi__WEBPACK_IMPORTED_MODULE_0___default().BigInt(q - 1));
        var d = modInvEuclid(jsbi__WEBPACK_IMPORTED_MODULE_0___default().BigInt(e), phi);
        var dp = jsbi__WEBPACK_IMPORTED_MODULE_0___default().remainder(d, jsbi__WEBPACK_IMPORTED_MODULE_0___default().BigInt(p - 1));
        var dq = jsbi__WEBPACK_IMPORTED_MODULE_0___default().remainder(d, jsbi__WEBPACK_IMPORTED_MODULE_0___default().BigInt(q - 1));
        var qinv = modInvEuclid(jsbi__WEBPACK_IMPORTED_MODULE_0___default().BigInt(q), jsbi__WEBPACK_IMPORTED_MODULE_0___default().BigInt(p));
        var m1 = modularPow(c, jsbi__WEBPACK_IMPORTED_MODULE_0___default().toNumber(dp), p);
        var m2 = modularPow(c, jsbi__WEBPACK_IMPORTED_MODULE_0___default().toNumber(dq), q);
        var h;
        if (m1 < m2) {
            h = jsbi__WEBPACK_IMPORTED_MODULE_0___default().remainder(jsbi__WEBPACK_IMPORTED_MODULE_0___default().multiply(jsbi__WEBPACK_IMPORTED_MODULE_0___default().add(jsbi__WEBPACK_IMPORTED_MODULE_0___default().BigInt(m1 - m2), jsbi__WEBPACK_IMPORTED_MODULE_0___default().BigInt(p)), qinv), jsbi__WEBPACK_IMPORTED_MODULE_0___default().BigInt(p));
        }
        else {
            h = jsbi__WEBPACK_IMPORTED_MODULE_0___default().remainder(jsbi__WEBPACK_IMPORTED_MODULE_0___default().multiply(jsbi__WEBPACK_IMPORTED_MODULE_0___default().BigInt(m1 - m2), qinv), jsbi__WEBPACK_IMPORTED_MODULE_0___default().BigInt(p));
        }
        var m = jsbi__WEBPACK_IMPORTED_MODULE_0___default().add(jsbi__WEBPACK_IMPORTED_MODULE_0___default().multiply(h, jsbi__WEBPACK_IMPORTED_MODULE_0___default().BigInt(q)), jsbi__WEBPACK_IMPORTED_MODULE_0___default().BigInt(m2));
        return numberToArray(jsbi__WEBPACK_IMPORTED_MODULE_0___default().toNumber(jsbi__WEBPACK_IMPORTED_MODULE_0___default().asUintN(32, m))).concat(numberToArray(jsbi__WEBPACK_IMPORTED_MODULE_0___default().toNumber(jsbi__WEBPACK_IMPORTED_MODULE_0___default().signedRightShift(m, jsbi__WEBPACK_IMPORTED_MODULE_0___default().BigInt(32)))));
    }
    function sony4x4Keygen(hash) {
        var numHash = decodeHash(hash);
        var pwd = rsaDecrypt(numHash);
        return encodePassword(pwd);
    }
    var sony4x4Solver = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.makeSolver)({
        name: "sony4x4",
        description: "Sony 4x4",
        examples: ["73KR-3FP9-PVKH-K29R"],
        cleaner: function (input) { return input.trim().replace(/[-\s]/gi, "").toUpperCase(); },
        inputValidator: function (s) { return inputRe.test(s); },
        fun: function (code) {
            var res = sony4x4Keygen(code);
            return res ? [res] : [];
        }
    });
    
    
    /***/ }),
    
    /***/ "./src/keygen/utils.ts":
    /*!*****************************!*\
      !*** ./src/keygen/utils.ts ***!
      \*****************************/
    /***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
    
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
    /* harmony export */   "keyboardDict": function() { return /* binding */ keyboardDict; },
    /* harmony export */   "reversedScanCodes": function() { return /* binding */ reversedScanCodes; },
    /* harmony export */   "keyboardEncToAscii": function() { return /* binding */ keyboardEncToAscii; },
    /* harmony export */   "asciiToKeyboardEnc": function() { return /* binding */ asciiToKeyboardEnc; },
    /* harmony export */   "makeSolver": function() { return /* binding */ makeSolver; }
    /* harmony export */ });
    var __values = (undefined && undefined.__values) || function(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    };
    var keyboardDict = {
        2: "1", 3: "2", 4: "3", 5: "4", 6: "5", 7: "6", 8: "7", 9: "8",
        10: "9", 11: "0", 16: "q", 17: "w", 18: "e", 19: "r", 20: "t", 21: "y",
        22: "u", 23: "i", 24: "o", 25: "p", 30: "a", 31: "s", 32: "d", 33: "f",
        34: "g", 35: "h", 36: "j", 37: "k", 38: "l", 44: "z", 45: "x", 46: "c",
        47: "v", 48: "b", 49: "n", 50: "m"
    };
    // reverse scan code table
    function generateReverseKeyDict() {
        var result = {};
        for (var key in keyboardDict) {
            if (keyboardDict.hasOwnProperty(key)) {
                result[keyboardDict[key]] = parseInt(key, 10);
            }
        }
        return result;
    }
    var reversedScanCodes = generateReverseKeyDict();
    /* Decode Keyboard code to Ascii symbol */
    function keyboardEncToAscii(inKey) {
        var e_1, _a;
        var out = "";
        try {
            for (var inKey_1 = __values(inKey), inKey_1_1 = inKey_1.next(); !inKey_1_1.done; inKey_1_1 = inKey_1.next()) {
                var key = inKey_1_1.value;
                if (key === 0) {
                    return out;
                }
                if (key in keyboardDict) {
                    out += keyboardDict[key];
                }
                else {
                    return "";
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (inKey_1_1 && !inKey_1_1.done && (_a = inKey_1.return)) _a.call(inKey_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return out;
    }
    function asciiToKeyboardEnc(password) {
        return password.split("").map(function (c) {
            var code = reversedScanCodes[c];
            if (code === void 0) {
                throw new Error("Undefined scan code");
            }
            else {
                return code;
            }
        });
    }
    function cleanSerial(serial) {
        return serial.trim().replace(/-/gi, "");
    }
    function makeSolver(description) {
        /* eslint-disable @typescript-eslint/no-unsafe-member-access */
        var solver = function (code) {
            var cleanCode = solver.cleaner(code);
            if (description.inputValidator(cleanCode)) {
                return description.fun(cleanCode);
            }
            else {
                return [];
            }
        };
        solver.biosName = description.name;
        solver.validator = description.inputValidator;
        if (description.cleaner) {
            solver.cleaner = description.cleaner;
        }
        else {
            solver.cleaner = cleanSerial;
        }
        solver.keygen = description.fun;
        if (description.examples) {
            solver.examples = description.examples;
        }
        if (description.description) {
            solver.description = description.description;
        }
        return solver;
    }
    
    
    /***/ }),
    
    /***/ "./src/polyfills/performancePolyfill.ts":
    /*!**********************************************!*\
      !*** ./src/polyfills/performancePolyfill.ts ***!
      \**********************************************/
    /***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
    
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
    /* harmony export */   "monotonicTime": function() { return /* binding */ monotonicTime; }
    /* harmony export */ });
    /* eslint-disable @typescript-eslint/unbound-method */
    function makeMonotonicTime() {
        if (typeof performance !== "undefined" && performance) {
            var nowFun = performance.now ||
                performance.webkitNow ||
                performance.mozNow ||
                performance.oNow ||
                performance.msNow;
            if (nowFun) {
                return nowFun.bind(performance);
            }
            else {
                return Date.now;
            }
        }
        else {
            return Date.now;
        }
    }
    var monotonicTime = makeMonotonicTime();
    
    
    /***/ })
    
    /******/ 	});
    /************************************************************************/
    /******/ 	// The module cache
    /******/ 	var __webpack_module_cache__ = {};
    /******/ 	
    /******/ 	// The require function
    /******/ 	function __webpack_require__(moduleId) {
    /******/ 		// Check if module is in cache
    /******/ 		var cachedModule = __webpack_module_cache__[moduleId];
    /******/ 		if (cachedModule !== undefined) {
    /******/ 			return cachedModule.exports;
    /******/ 		}
    /******/ 		// Create a new module (and put it into the cache)
    /******/ 		var module = __webpack_module_cache__[moduleId] = {
    /******/ 			// no module.id needed
    /******/ 			// no module.loaded needed
    /******/ 			exports: {}
    /******/ 		};
    /******/ 	
    /******/ 		// Execute the module function
    /******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /******/ 	
    /******/ 		// Return the exports of the module
    /******/ 		return module.exports;
    /******/ 	}
    /******/ 	
    /************************************************************************/
    /******/ 	/* webpack/runtime/compat get default export */
    /******/ 	!function() {
    /******/ 		// getDefaultExport function for compatibility with non-harmony modules
    /******/ 		__webpack_require__.n = function(module) {
    /******/ 			var getter = module && module.__esModule ?
    /******/ 				function() { return module['default']; } :
    /******/ 				function() { return module; };
    /******/ 			__webpack_require__.d(getter, { a: getter });
    /******/ 			return getter;
    /******/ 		};
    /******/ 	}();
    /******/ 	
    /******/ 	/* webpack/runtime/define property getters */
    /******/ 	!function() {
    /******/ 		// define getter functions for harmony exports
    /******/ 		__webpack_require__.d = function(exports, definition) {
    /******/ 			for(var key in definition) {
    /******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
    /******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
    /******/ 				}
    /******/ 			}
    /******/ 		};
    /******/ 	}();
    /******/ 	
    /******/ 	/* webpack/runtime/hasOwnProperty shorthand */
    /******/ 	!function() {
    /******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
    /******/ 	}();
    /******/ 	
    /******/ 	/* webpack/runtime/make namespace object */
    /******/ 	!function() {
    /******/ 		// define __esModule on exports
    /******/ 		__webpack_require__.r = function(exports) {
    /******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
    /******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
    /******/ 			}
    /******/ 			Object.defineProperty(exports, '__esModule', { value: true });
    /******/ 		};
    /******/ 	}();
    /******/ 	
    /************************************************************************/
    var __webpack_exports__ = {};
    // This entry need to be wrapped in an IIFE because it need to be in strict mode.
    !function() {
    "use strict";
    /*!*******************!*\
      !*** ./src/ui.ts ***!
      \*******************/
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var _googleAnalytics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./googleAnalytics */ "./src/googleAnalytics.ts");
    /* harmony import */ var _keygen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keygen */ "./src/keygen/index.ts");
    var __read = (undefined && undefined.__read) || function (o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    };
    
    
    var form = document.getElementById("form_id");
    var serialInput = document.getElementById("serial_id");
    var tryThis = document.getElementById("try_this");
    var dellNote = document.getElementById("dell_note");
    var answerElement = document.getElementById("answer");
    function renderResult(results) {
        var table = document.createElement("table");
        table.classList.add("answer_table");
        results.forEach(function (_a) {
            var _b = __read(_a, 3), solver = _b[0], passwords = _b[1], _ = _b[2];
            var trElem = document.createElement("tr");
            var tdNameElem = document.createElement("td");
            tdNameElem.appendChild(document.createTextNode(solver.description));
            trElem.appendChild(tdNameElem);
            var tdElem = document.createElement("td");
            passwords.forEach(function (pwd, index) {
                if (index > 0) {
                    tdElem.appendChild(document.createElement("br"));
                }
                tdElem.appendChild(document.createTextNode(pwd));
            });
            trElem.appendChild(tdElem);
            table.appendChild(trElem);
        });
        answerElement.appendChild(table);
    }
    function trackResult(serial) {
        var result = (0,_keygen__WEBPACK_IMPORTED_MODULE_1__.keygen)(serial);
        if (false) { var eventParams_1; }
        return result;
    }
    form.addEventListener("submit", function (event) {
        if (event.preventDefault) {
            event.preventDefault();
        }
        else {
            event.returnValue = false;
        }
        answerElement.innerHTML = ""; // remove old table
        var results = trackResult(serialInput.value);
        if (results.length > 0) {
            tryThis.style.display = "";
            dellNote.style.display = "";
            renderResult(results);
        }
        else {
            tryThis.style.display = "none";
            dellNote.style.display = "none";
        }
    }, true);
    
    }();
    /******/ })()
    ;
    //# sourceMappingURL=bundle.bc6a075850633f4fdc18.js.map