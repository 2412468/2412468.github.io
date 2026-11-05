(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const co="170",yi={ROTATE:0,DOLLY:1,PAN:2},Mi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Nl=0,Io=1,Fl=2,Wa=1,Ol=2,dn=3,Nn=0,Te=1,be=2,Un=0,Ei=1,wi=2,No=3,Fo=4,Bl=5,qn=100,zl=101,kl=102,Hl=103,Gl=104,Vl=200,Wl=201,Xl=202,Yl=203,ys=204,Es=205,ql=206,Zl=207,Kl=208,jl=209,$l=210,Jl=211,Ql=212,tc=213,ec=214,bs=0,Ts=1,ws=2,Ai=3,As=4,Rs=5,Cs=6,Ps=7,Xa=0,nc=1,ic=2,In=0,rc=1,sc=2,oc=3,ac=4,lc=5,cc=6,hc=7,Ya=300,Ri=301,Ci=302,Ds=303,Ls=304,Hr=306,Us=1e3,Kn=1001,Is=1002,Se=1003,uc=1004,rr=1005,Oe=1006,Yr=1007,jn=1008,Mn=1009,qa=1010,Za=1011,$i=1012,ho=1013,Fn=1014,Qe=1015,Qn=1016,uo=1017,fo=1018,Pi=1020,Ka=35902,ja=1021,$a=1022,Be=1023,Ja=1024,Qa=1025,$n=1026,Di=1027,po=1028,mo=1029,tl=1030,go=1031,vo=1033,Dr=33776,Lr=33777,Ur=33778,Ir=33779,Ns=35840,Fs=35841,Os=35842,Bs=35843,zs=36196,ks=37492,Hs=37496,Gs=37808,Vs=37809,Ws=37810,Xs=37811,Ys=37812,qs=37813,Zs=37814,Ks=37815,js=37816,$s=37817,Js=37818,Qs=37819,to=37820,eo=37821,Nr=36492,no=36494,io=36495,el=36283,ro=36284,so=36285,oo=36286,dc=3200,fc=3201,pc=0,mc=1,Ln="",Fe="srgb",Ii="srgb-linear",Gr="linear",ee="srgb",ri=7680,Oo=519,gc=512,vc=513,_c=514,nl=515,xc=516,Mc=517,Sc=518,yc=519,Bo=35044,zo="300 es",gn=2e3,Br=2001;class ti{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const _e=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ko=1234567;const Zi=Math.PI/180,Ji=180/Math.PI;function Ni(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(_e[i&255]+_e[i>>8&255]+_e[i>>16&255]+_e[i>>24&255]+"-"+_e[t&255]+_e[t>>8&255]+"-"+_e[t>>16&15|64]+_e[t>>24&255]+"-"+_e[e&63|128]+_e[e>>8&255]+"-"+_e[e>>16&255]+_e[e>>24&255]+_e[n&255]+_e[n>>8&255]+_e[n>>16&255]+_e[n>>24&255]).toLowerCase()}function Me(i,t,e){return Math.max(t,Math.min(e,i))}function _o(i,t){return(i%t+t)%t}function Ec(i,t,e,n,r){return n+(i-t)*(r-n)/(e-t)}function bc(i,t,e){return i!==t?(e-i)/(t-i):0}function Ki(i,t,e){return(1-e)*i+e*t}function Tc(i,t,e,n){return Ki(i,t,1-Math.exp(-e*n))}function wc(i,t=1){return t-Math.abs(_o(i,t*2)-t)}function Ac(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Rc(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Cc(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Pc(i,t){return i+Math.random()*(t-i)}function Dc(i){return i*(.5-Math.random())}function Lc(i){i!==void 0&&(ko=i);let t=ko+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Uc(i){return i*Zi}function Ic(i){return i*Ji}function Nc(i){return(i&i-1)===0&&i!==0}function Fc(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Oc(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Bc(i,t,e,n,r){const s=Math.cos,o=Math.sin,a=s(e/2),l=o(e/2),c=s((t+n)/2),d=o((t+n)/2),f=s((t-n)/2),h=o((t-n)/2),m=s((n-t)/2),g=o((n-t)/2);switch(r){case"XYX":i.set(a*d,l*f,l*h,a*c);break;case"YZY":i.set(l*h,a*d,l*f,a*c);break;case"ZXZ":i.set(l*f,l*h,a*d,a*c);break;case"XZX":i.set(a*d,l*g,l*m,a*c);break;case"YXY":i.set(l*m,a*d,l*g,a*c);break;case"ZYZ":i.set(l*g,l*m,a*d,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function xi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ye(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Jn={DEG2RAD:Zi,RAD2DEG:Ji,generateUUID:Ni,clamp:Me,euclideanModulo:_o,mapLinear:Ec,inverseLerp:bc,lerp:Ki,damp:Tc,pingpong:wc,smoothstep:Ac,smootherstep:Rc,randInt:Cc,randFloat:Pc,randFloatSpread:Dc,seededRandom:Lc,degToRad:Uc,radToDeg:Ic,isPowerOfTwo:Nc,ceilPowerOfTwo:Fc,floorPowerOfTwo:Oc,setQuaternionFromProperEuler:Bc,normalize:ye,denormalize:xi};class Dt{constructor(t=0,e=0){Dt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Me(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*r+t.x,this.y=s*r+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Bt{constructor(t,e,n,r,s,o,a,l,c){Bt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,c)}set(t,e,n,r,s,o,a,l,c){const d=this.elements;return d[0]=t,d[1]=r,d[2]=a,d[3]=e,d[4]=s,d[5]=l,d[6]=n,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],d=n[4],f=n[7],h=n[2],m=n[5],g=n[8],_=r[0],p=r[3],u=r[6],b=r[1],T=r[4],y=r[7],L=r[2],A=r[5],w=r[8];return s[0]=o*_+a*b+l*L,s[3]=o*p+a*T+l*A,s[6]=o*u+a*y+l*w,s[1]=c*_+d*b+f*L,s[4]=c*p+d*T+f*A,s[7]=c*u+d*y+f*w,s[2]=h*_+m*b+g*L,s[5]=h*p+m*T+g*A,s[8]=h*u+m*y+g*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],d=t[8];return e*o*d-e*a*c-n*s*d+n*a*l+r*s*c-r*o*l}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],d=t[8],f=d*o-a*c,h=a*l-d*s,m=c*s-o*l,g=e*f+n*h+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=f*_,t[1]=(r*c-d*n)*_,t[2]=(a*n-r*o)*_,t[3]=h*_,t[4]=(d*e-r*l)*_,t[5]=(r*s-a*e)*_,t[6]=m*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-r*c,r*l,-r*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(qr.makeScale(t,e)),this}rotate(t){return this.premultiply(qr.makeRotation(-t)),this}translate(t,e){return this.premultiply(qr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const qr=new Bt;function il(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function zr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function zc(){const i=zr("canvas");return i.style.display="block",i}const Ho={};function Yi(i){i in Ho||(Ho[i]=!0,console.warn(i))}function kc(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function Hc(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Gc(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Yt={enabled:!0,workingColorSpace:Ii,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ee&&(i.r=_n(i.r),i.g=_n(i.g),i.b=_n(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ee&&(i.r=bi(i.r),i.g=bi(i.g),i.b=bi(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Ln?Gr:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function _n(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function bi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Go=[.64,.33,.3,.6,.15,.06],Vo=[.2126,.7152,.0722],Wo=[.3127,.329],Xo=new Bt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Yo=new Bt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Yt.define({[Ii]:{primaries:Go,whitePoint:Wo,transfer:Gr,toXYZ:Xo,fromXYZ:Yo,luminanceCoefficients:Vo,workingColorSpaceConfig:{unpackColorSpace:Fe},outputColorSpaceConfig:{drawingBufferColorSpace:Fe}},[Fe]:{primaries:Go,whitePoint:Wo,transfer:ee,toXYZ:Xo,fromXYZ:Yo,luminanceCoefficients:Vo,outputColorSpaceConfig:{drawingBufferColorSpace:Fe}}});let si;class Vc{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{si===void 0&&(si=zr("canvas")),si.width=t.width,si.height=t.height;const n=si.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=si}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=zr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=_n(s[o]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(_n(e[n]/255)*255):e[n]=_n(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Wc=0;class rl{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Wc++}),this.uuid=Ni(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Zr(r[o].image)):s.push(Zr(r[o]))}else s=Zr(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function Zr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Vc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Xc=0;class we extends ti{constructor(t=we.DEFAULT_IMAGE,e=we.DEFAULT_MAPPING,n=Kn,r=Kn,s=Oe,o=jn,a=Be,l=Mn,c=we.DEFAULT_ANISOTROPY,d=Ln){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Xc++}),this.uuid=Ni(),this.name="",this.source=new rl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Dt(0,0),this.repeat=new Dt(1,1),this.center=new Dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Bt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ya)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Us:t.x=t.x-Math.floor(t.x);break;case Kn:t.x=t.x<0?0:1;break;case Is:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Us:t.y=t.y-Math.floor(t.y);break;case Kn:t.y=t.y<0?0:1;break;case Is:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}we.DEFAULT_IMAGE=null;we.DEFAULT_MAPPING=Ya;we.DEFAULT_ANISOTROPY=1;class he{constructor(t=0,e=0,n=0,r=1){he.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*r+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const l=t.elements,c=l[0],d=l[4],f=l[8],h=l[1],m=l[5],g=l[9],_=l[2],p=l[6],u=l[10];if(Math.abs(d-h)<.01&&Math.abs(f-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(d+h)<.1&&Math.abs(f+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const T=(c+1)/2,y=(m+1)/2,L=(u+1)/2,A=(d+h)/4,w=(f+_)/4,C=(g+p)/4;return T>y&&T>L?T<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(T),r=A/n,s=w/n):y>L?y<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),n=A/r,s=C/r):L<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(L),n=w/s,r=C/s),this.set(n,r,s,e),this}let b=Math.sqrt((p-g)*(p-g)+(f-_)*(f-_)+(h-d)*(h-d));return Math.abs(b)<.001&&(b=1),this.x=(p-g)/b,this.y=(f-_)/b,this.z=(h-d)/b,this.w=Math.acos((c+m+u-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Yc extends ti{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new he(0,0,t,e),this.scissorTest=!1,this.viewport=new he(0,0,t,e);const r={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Oe,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new we(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,r=t.textures.length;n<r;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new rl(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Sn extends Yc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class sl extends we{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Se,this.minFilter=Se,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class qc extends we{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Se,this.minFilter=Se,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class yn{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,o,a){let l=n[r+0],c=n[r+1],d=n[r+2],f=n[r+3];const h=s[o+0],m=s[o+1],g=s[o+2],_=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=d,t[e+3]=f;return}if(a===1){t[e+0]=h,t[e+1]=m,t[e+2]=g,t[e+3]=_;return}if(f!==_||l!==h||c!==m||d!==g){let p=1-a;const u=l*h+c*m+d*g+f*_,b=u>=0?1:-1,T=1-u*u;if(T>Number.EPSILON){const L=Math.sqrt(T),A=Math.atan2(L,u*b);p=Math.sin(p*A)/L,a=Math.sin(a*A)/L}const y=a*b;if(l=l*p+h*y,c=c*p+m*y,d=d*p+g*y,f=f*p+_*y,p===1-a){const L=1/Math.sqrt(l*l+c*c+d*d+f*f);l*=L,c*=L,d*=L,f*=L}}t[e]=l,t[e+1]=c,t[e+2]=d,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,r,s,o){const a=n[r],l=n[r+1],c=n[r+2],d=n[r+3],f=s[o],h=s[o+1],m=s[o+2],g=s[o+3];return t[e]=a*g+d*f+l*m-c*h,t[e+1]=l*g+d*h+c*f-a*m,t[e+2]=c*g+d*m+a*h-l*f,t[e+3]=d*g-a*f-l*h-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),d=a(r/2),f=a(s/2),h=l(n/2),m=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=h*d*f+c*m*g,this._y=c*m*f-h*d*g,this._z=c*d*g+h*m*f,this._w=c*d*f-h*m*g;break;case"YXZ":this._x=h*d*f+c*m*g,this._y=c*m*f-h*d*g,this._z=c*d*g-h*m*f,this._w=c*d*f+h*m*g;break;case"ZXY":this._x=h*d*f-c*m*g,this._y=c*m*f+h*d*g,this._z=c*d*g+h*m*f,this._w=c*d*f-h*m*g;break;case"ZYX":this._x=h*d*f-c*m*g,this._y=c*m*f+h*d*g,this._z=c*d*g-h*m*f,this._w=c*d*f+h*m*g;break;case"YZX":this._x=h*d*f+c*m*g,this._y=c*m*f+h*d*g,this._z=c*d*g-h*m*f,this._w=c*d*f-h*m*g;break;case"XZY":this._x=h*d*f-c*m*g,this._y=c*m*f-h*d*g,this._z=c*d*g+h*m*f,this._w=c*d*f+h*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],d=e[6],f=e[10],h=n+a+f;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(d-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(n>a&&n>f){const m=2*Math.sqrt(1+n-a-f);this._w=(d-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>f){const m=2*Math.sqrt(1+a-n-f);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+d)/m}else{const m=2*Math.sqrt(1+f-n-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Me(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,d=e._w;return this._x=n*d+o*a+r*c-s*l,this._y=r*d+o*l+s*a-n*c,this._z=s*d+o*c+n*l-r*a,this._w=o*d-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-e;return this._w=m*o+e*this._w,this._x=m*n+e*this._x,this._y=m*r+e*this._y,this._z=m*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,a),f=Math.sin((1-e)*d)/c,h=Math.sin(e*d)/c;return this._w=o*f+this._w*h,this._x=n*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(t=0,e=0,n=0){N.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(qo.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(qo.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*r-a*n),d=2*(a*e-s*r),f=2*(s*n-o*e);return this.x=e+l*c+o*f-a*d,this.y=n+l*d+a*c-s*f,this.z=r+l*f+s*d-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Kr.copy(this).projectOnVector(t),this.sub(Kr)}reflect(t){return this.sub(Kr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Me(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Kr=new N,qo=new yn;class ei{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ye.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ye.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Ye.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Ye):Ye.fromBufferAttribute(s,o),Ye.applyMatrix4(t.matrixWorld),this.expandByPoint(Ye);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),sr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),sr.copy(n.boundingBox)),sr.applyMatrix4(t.matrixWorld),this.union(sr)}const r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ye),Ye.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ki),or.subVectors(this.max,ki),oi.subVectors(t.a,ki),ai.subVectors(t.b,ki),li.subVectors(t.c,ki),Tn.subVectors(ai,oi),wn.subVectors(li,ai),zn.subVectors(oi,li);let e=[0,-Tn.z,Tn.y,0,-wn.z,wn.y,0,-zn.z,zn.y,Tn.z,0,-Tn.x,wn.z,0,-wn.x,zn.z,0,-zn.x,-Tn.y,Tn.x,0,-wn.y,wn.x,0,-zn.y,zn.x,0];return!jr(e,oi,ai,li,or)||(e=[1,0,0,0,1,0,0,0,1],!jr(e,oi,ai,li,or))?!1:(ar.crossVectors(Tn,wn),e=[ar.x,ar.y,ar.z],jr(e,oi,ai,li,or))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ye).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ye).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(an[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),an[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),an[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),an[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),an[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),an[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),an[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),an[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(an),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const an=[new N,new N,new N,new N,new N,new N,new N,new N],Ye=new N,sr=new ei,oi=new N,ai=new N,li=new N,Tn=new N,wn=new N,zn=new N,ki=new N,or=new N,ar=new N,kn=new N;function jr(i,t,e,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){kn.fromArray(i,s);const a=r.x*Math.abs(kn.x)+r.y*Math.abs(kn.y)+r.z*Math.abs(kn.z),l=t.dot(kn),c=e.dot(kn),d=n.dot(kn);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}const Zc=new ei,Hi=new N,$r=new N;class Fi{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Zc.setFromPoints(t).getCenter(n);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Hi.subVectors(t,this.center);const e=Hi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(Hi,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):($r.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Hi.copy(t.center).add($r)),this.expandByPoint(Hi.copy(t.center).sub($r))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ln=new N,Jr=new N,lr=new N,An=new N,Qr=new N,cr=new N,ts=new N;class xo{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ln)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ln.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ln.copy(this.origin).addScaledVector(this.direction,e),ln.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){Jr.copy(t).add(e).multiplyScalar(.5),lr.copy(e).sub(t).normalize(),An.copy(this.origin).sub(Jr);const s=t.distanceTo(e)*.5,o=-this.direction.dot(lr),a=An.dot(this.direction),l=-An.dot(lr),c=An.lengthSq(),d=Math.abs(1-o*o);let f,h,m,g;if(d>0)if(f=o*l-a,h=o*a-l,g=s*d,f>=0)if(h>=-g)if(h<=g){const _=1/d;f*=_,h*=_,m=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-s,-l),s),m=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Jr).addScaledVector(lr,h),m}intersectSphere(t,e){ln.subVectors(t.center,this.origin);const n=ln.dot(this.direction),r=ln.dot(ln)-n*n,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,o,a,l;const c=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(t.min.x-h.x)*c,r=(t.max.x-h.x)*c):(n=(t.max.x-h.x)*c,r=(t.min.x-h.x)*c),d>=0?(s=(t.min.y-h.y)*d,o=(t.max.y-h.y)*d):(s=(t.max.y-h.y)*d,o=(t.min.y-h.y)*d),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(t.min.z-h.z)*f,l=(t.max.z-h.z)*f):(a=(t.max.z-h.z)*f,l=(t.min.z-h.z)*f),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,ln)!==null}intersectTriangle(t,e,n,r,s){Qr.subVectors(e,t),cr.subVectors(n,t),ts.crossVectors(Qr,cr);let o=this.direction.dot(ts),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;An.subVectors(this.origin,t);const l=a*this.direction.dot(cr.crossVectors(An,cr));if(l<0)return null;const c=a*this.direction.dot(Qr.cross(An));if(c<0||l+c>o)return null;const d=-a*An.dot(ts);return d<0?null:this.at(d/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Kt{constructor(t,e,n,r,s,o,a,l,c,d,f,h,m,g,_,p){Kt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,c,d,f,h,m,g,_,p)}set(t,e,n,r,s,o,a,l,c,d,f,h,m,g,_,p){const u=this.elements;return u[0]=t,u[4]=e,u[8]=n,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=d,u[10]=f,u[14]=h,u[3]=m,u[7]=g,u[11]=_,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Kt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,r=1/ci.setFromMatrixColumn(t,0).length(),s=1/ci.setFromMatrixColumn(t,1).length(),o=1/ci.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){const h=o*d,m=o*f,g=a*d,_=a*f;e[0]=l*d,e[4]=-l*f,e[8]=c,e[1]=m+g*c,e[5]=h-_*c,e[9]=-a*l,e[2]=_-h*c,e[6]=g+m*c,e[10]=o*l}else if(t.order==="YXZ"){const h=l*d,m=l*f,g=c*d,_=c*f;e[0]=h+_*a,e[4]=g*a-m,e[8]=o*c,e[1]=o*f,e[5]=o*d,e[9]=-a,e[2]=m*a-g,e[6]=_+h*a,e[10]=o*l}else if(t.order==="ZXY"){const h=l*d,m=l*f,g=c*d,_=c*f;e[0]=h-_*a,e[4]=-o*f,e[8]=g+m*a,e[1]=m+g*a,e[5]=o*d,e[9]=_-h*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const h=o*d,m=o*f,g=a*d,_=a*f;e[0]=l*d,e[4]=g*c-m,e[8]=h*c+_,e[1]=l*f,e[5]=_*c+h,e[9]=m*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const h=o*l,m=o*c,g=a*l,_=a*c;e[0]=l*d,e[4]=_-h*f,e[8]=g*f+m,e[1]=f,e[5]=o*d,e[9]=-a*d,e[2]=-c*d,e[6]=m*f+g,e[10]=h-_*f}else if(t.order==="XZY"){const h=o*l,m=o*c,g=a*l,_=a*c;e[0]=l*d,e[4]=-f,e[8]=c*d,e[1]=h*f+_,e[5]=o*d,e[9]=m*f-g,e[2]=g*f-m,e[6]=a*d,e[10]=_*f+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Kc,t,jc)}lookAt(t,e,n){const r=this.elements;return Ie.subVectors(t,e),Ie.lengthSq()===0&&(Ie.z=1),Ie.normalize(),Rn.crossVectors(n,Ie),Rn.lengthSq()===0&&(Math.abs(n.z)===1?Ie.x+=1e-4:Ie.z+=1e-4,Ie.normalize(),Rn.crossVectors(n,Ie)),Rn.normalize(),hr.crossVectors(Ie,Rn),r[0]=Rn.x,r[4]=hr.x,r[8]=Ie.x,r[1]=Rn.y,r[5]=hr.y,r[9]=Ie.y,r[2]=Rn.z,r[6]=hr.z,r[10]=Ie.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],d=n[1],f=n[5],h=n[9],m=n[13],g=n[2],_=n[6],p=n[10],u=n[14],b=n[3],T=n[7],y=n[11],L=n[15],A=r[0],w=r[4],C=r[8],S=r[12],x=r[1],R=r[5],H=r[9],F=r[13],Y=r[2],Z=r[6],W=r[10],J=r[14],V=r[3],it=r[7],dt=r[11],yt=r[15];return s[0]=o*A+a*x+l*Y+c*V,s[4]=o*w+a*R+l*Z+c*it,s[8]=o*C+a*H+l*W+c*dt,s[12]=o*S+a*F+l*J+c*yt,s[1]=d*A+f*x+h*Y+m*V,s[5]=d*w+f*R+h*Z+m*it,s[9]=d*C+f*H+h*W+m*dt,s[13]=d*S+f*F+h*J+m*yt,s[2]=g*A+_*x+p*Y+u*V,s[6]=g*w+_*R+p*Z+u*it,s[10]=g*C+_*H+p*W+u*dt,s[14]=g*S+_*F+p*J+u*yt,s[3]=b*A+T*x+y*Y+L*V,s[7]=b*w+T*R+y*Z+L*it,s[11]=b*C+T*H+y*W+L*dt,s[15]=b*S+T*F+y*J+L*yt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],d=t[2],f=t[6],h=t[10],m=t[14],g=t[3],_=t[7],p=t[11],u=t[15];return g*(+s*l*f-r*c*f-s*a*h+n*c*h+r*a*m-n*l*m)+_*(+e*l*m-e*c*h+s*o*h-r*o*m+r*c*d-s*l*d)+p*(+e*c*f-e*a*m-s*o*f+n*o*m+s*a*d-n*c*d)+u*(-r*a*d-e*l*f+e*a*h+r*o*f-n*o*h+n*l*d)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],d=t[8],f=t[9],h=t[10],m=t[11],g=t[12],_=t[13],p=t[14],u=t[15],b=f*p*c-_*h*c+_*l*m-a*p*m-f*l*u+a*h*u,T=g*h*c-d*p*c-g*l*m+o*p*m+d*l*u-o*h*u,y=d*_*c-g*f*c+g*a*m-o*_*m-d*a*u+o*f*u,L=g*f*l-d*_*l-g*a*h+o*_*h+d*a*p-o*f*p,A=e*b+n*T+r*y+s*L;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/A;return t[0]=b*w,t[1]=(_*h*s-f*p*s-_*r*m+n*p*m+f*r*u-n*h*u)*w,t[2]=(a*p*s-_*l*s+_*r*c-n*p*c-a*r*u+n*l*u)*w,t[3]=(f*l*s-a*h*s-f*r*c+n*h*c+a*r*m-n*l*m)*w,t[4]=T*w,t[5]=(d*p*s-g*h*s+g*r*m-e*p*m-d*r*u+e*h*u)*w,t[6]=(g*l*s-o*p*s-g*r*c+e*p*c+o*r*u-e*l*u)*w,t[7]=(o*h*s-d*l*s+d*r*c-e*h*c-o*r*m+e*l*m)*w,t[8]=y*w,t[9]=(g*f*s-d*_*s-g*n*m+e*_*m+d*n*u-e*f*u)*w,t[10]=(o*_*s-g*a*s+g*n*c-e*_*c-o*n*u+e*a*u)*w,t[11]=(d*a*s-o*f*s-d*n*c+e*f*c+o*n*m-e*a*m)*w,t[12]=L*w,t[13]=(d*_*r-g*f*r+g*n*h-e*_*h-d*n*p+e*f*p)*w,t[14]=(g*a*r-o*_*r-g*n*l+e*_*l+o*n*p-e*a*p)*w,t[15]=(o*f*r-d*a*r+d*n*l-e*f*l-o*n*h+e*a*h)*w,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,d=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,d*a+n,d*l-r*o,0,c*l-r*a,d*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,o){return this.set(1,n,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,d=o+o,f=a+a,h=s*c,m=s*d,g=s*f,_=o*d,p=o*f,u=a*f,b=l*c,T=l*d,y=l*f,L=n.x,A=n.y,w=n.z;return r[0]=(1-(_+u))*L,r[1]=(m+y)*L,r[2]=(g-T)*L,r[3]=0,r[4]=(m-y)*A,r[5]=(1-(h+u))*A,r[6]=(p+b)*A,r[7]=0,r[8]=(g+T)*w,r[9]=(p-b)*w,r[10]=(1-(h+_))*w,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;let s=ci.set(r[0],r[1],r[2]).length();const o=ci.set(r[4],r[5],r[6]).length(),a=ci.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],qe.copy(this);const c=1/s,d=1/o,f=1/a;return qe.elements[0]*=c,qe.elements[1]*=c,qe.elements[2]*=c,qe.elements[4]*=d,qe.elements[5]*=d,qe.elements[6]*=d,qe.elements[8]*=f,qe.elements[9]*=f,qe.elements[10]*=f,e.setFromRotationMatrix(qe),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,r,s,o,a=gn){const l=this.elements,c=2*s/(e-t),d=2*s/(n-r),f=(e+t)/(e-t),h=(n+r)/(n-r);let m,g;if(a===gn)m=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Br)m=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,r,s,o,a=gn){const l=this.elements,c=1/(e-t),d=1/(n-r),f=1/(o-s),h=(e+t)*c,m=(n+r)*d;let g,_;if(a===gn)g=(o+s)*f,_=-2*f;else if(a===Br)g=s*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ci=new N,qe=new Kt,Kc=new N(0,0,0),jc=new N(1,1,1),Rn=new N,hr=new N,Ie=new N,Zo=new Kt,Ko=new yn;class rn{constructor(t=0,e=0,n=0,r=rn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],d=r[9],f=r[2],h=r[6],m=r[10];switch(e){case"XYZ":this._y=Math.asin(Me(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Me(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Me(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Me(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Me(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Me(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Zo.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Zo,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ko.setFromEuler(this),this.setFromQuaternion(Ko,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}rn.DEFAULT_ORDER="XYZ";class ol{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let $c=0;const jo=new N,hi=new yn,cn=new Kt,ur=new N,Gi=new N,Jc=new N,Qc=new yn,$o=new N(1,0,0),Jo=new N(0,1,0),Qo=new N(0,0,1),ta={type:"added"},th={type:"removed"},ui={type:"childadded",child:null},es={type:"childremoved",child:null};class Ae extends ti{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$c++}),this.uuid=Ni(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ae.DEFAULT_UP.clone();const t=new N,e=new rn,n=new yn,r=new N(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Kt},normalMatrix:{value:new Bt}}),this.matrix=new Kt,this.matrixWorld=new Kt,this.matrixAutoUpdate=Ae.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ol,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return hi.setFromAxisAngle(t,e),this.quaternion.multiply(hi),this}rotateOnWorldAxis(t,e){return hi.setFromAxisAngle(t,e),this.quaternion.premultiply(hi),this}rotateX(t){return this.rotateOnAxis($o,t)}rotateY(t){return this.rotateOnAxis(Jo,t)}rotateZ(t){return this.rotateOnAxis(Qo,t)}translateOnAxis(t,e){return jo.copy(t).applyQuaternion(this.quaternion),this.position.add(jo.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis($o,t)}translateY(t){return this.translateOnAxis(Jo,t)}translateZ(t){return this.translateOnAxis(Qo,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(cn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ur.copy(t):ur.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Gi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?cn.lookAt(Gi,ur,this.up):cn.lookAt(ur,Gi,this.up),this.quaternion.setFromRotationMatrix(cn),r&&(cn.extractRotation(r.matrixWorld),hi.setFromRotationMatrix(cn),this.quaternion.premultiply(hi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ta),ui.child=t,this.dispatchEvent(ui),ui.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(th),es.child=t,this.dispatchEvent(es),es.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),cn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),cn.multiply(t.parent.matrixWorld)),t.applyMatrix4(cn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ta),ui.child=t,this.dispatchEvent(ui),ui.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gi,t,Jc),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gi,Qc,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const f=l[c];s(t.shapes,f)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),d=o(t.images),f=o(t.shapes),h=o(t.skeletons),m=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(a){const l=[];for(const c in a){const d=a[c];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}Ae.DEFAULT_UP=new N(0,1,0);Ae.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ze=new N,hn=new N,ns=new N,un=new N,di=new N,fi=new N,ea=new N,is=new N,rs=new N,ss=new N,os=new he,as=new he,ls=new he;class Ke{constructor(t=new N,e=new N,n=new N){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),Ze.subVectors(t,e),r.cross(Ze);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){Ze.subVectors(r,e),hn.subVectors(n,e),ns.subVectors(t,e);const o=Ze.dot(Ze),a=Ze.dot(hn),l=Ze.dot(ns),c=hn.dot(hn),d=hn.dot(ns),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,m=(c*l-a*d)*h,g=(o*d-a*l)*h;return s.set(1-m-g,g,m)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,un)===null?!1:un.x>=0&&un.y>=0&&un.x+un.y<=1}static getInterpolation(t,e,n,r,s,o,a,l){return this.getBarycoord(t,e,n,r,un)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,un.x),l.addScaledVector(o,un.y),l.addScaledVector(a,un.z),l)}static getInterpolatedAttribute(t,e,n,r,s,o){return os.setScalar(0),as.setScalar(0),ls.setScalar(0),os.fromBufferAttribute(t,e),as.fromBufferAttribute(t,n),ls.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(os,s.x),o.addScaledVector(as,s.y),o.addScaledVector(ls,s.z),o}static isFrontFacing(t,e,n,r){return Ze.subVectors(n,e),hn.subVectors(t,e),Ze.cross(hn).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ze.subVectors(this.c,this.b),hn.subVectors(this.a,this.b),Ze.cross(hn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ke.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ke.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return Ke.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return Ke.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ke.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let o,a;di.subVectors(r,n),fi.subVectors(s,n),is.subVectors(t,n);const l=di.dot(is),c=fi.dot(is);if(l<=0&&c<=0)return e.copy(n);rs.subVectors(t,r);const d=di.dot(rs),f=fi.dot(rs);if(d>=0&&f<=d)return e.copy(r);const h=l*f-d*c;if(h<=0&&l>=0&&d<=0)return o=l/(l-d),e.copy(n).addScaledVector(di,o);ss.subVectors(t,s);const m=di.dot(ss),g=fi.dot(ss);if(g>=0&&m<=g)return e.copy(s);const _=m*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(fi,a);const p=d*g-m*f;if(p<=0&&f-d>=0&&m-g>=0)return ea.subVectors(s,r),a=(f-d)/(f-d+(m-g)),e.copy(r).addScaledVector(ea,a);const u=1/(p+_+h);return o=_*u,a=h*u,e.copy(n).addScaledVector(di,o).addScaledVector(fi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const al={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Cn={h:0,s:0,l:0},dr={h:0,s:0,l:0};function cs(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Zt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Fe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Yt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,r=Yt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Yt.toWorkingColorSpace(this,r),this}setHSL(t,e,n,r=Yt.workingColorSpace){if(t=_o(t,1),e=Me(e,0,1),n=Me(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=cs(o,s,t+1/3),this.g=cs(o,s,t),this.b=cs(o,s,t-1/3)}return Yt.toWorkingColorSpace(this,r),this}setStyle(t,e=Fe){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Fe){const n=al[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=_n(t.r),this.g=_n(t.g),this.b=_n(t.b),this}copyLinearToSRGB(t){return this.r=bi(t.r),this.g=bi(t.g),this.b=bi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Fe){return Yt.fromWorkingColorSpace(xe.copy(this),t),Math.round(Me(xe.r*255,0,255))*65536+Math.round(Me(xe.g*255,0,255))*256+Math.round(Me(xe.b*255,0,255))}getHexString(t=Fe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Yt.workingColorSpace){Yt.fromWorkingColorSpace(xe.copy(this),e);const n=xe.r,r=xe.g,s=xe.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,c;const d=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=d<=.5?f/(o+a):f/(2-o-a),o){case n:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-n)/f+2;break;case s:l=(n-r)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=d,t}getRGB(t,e=Yt.workingColorSpace){return Yt.fromWorkingColorSpace(xe.copy(this),e),t.r=xe.r,t.g=xe.g,t.b=xe.b,t}getStyle(t=Fe){Yt.fromWorkingColorSpace(xe.copy(this),t);const e=xe.r,n=xe.g,r=xe.b;return t!==Fe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(Cn),this.setHSL(Cn.h+t,Cn.s+e,Cn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Cn),t.getHSL(dr);const n=Ki(Cn.h,dr.h,e),r=Ki(Cn.s,dr.s,e),s=Ki(Cn.l,dr.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const xe=new Zt;Zt.NAMES=al;let eh=0;class Qi extends ti{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:eh++}),this.uuid=Ni(),this.name="",this.blending=Ei,this.side=Nn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ys,this.blendDst=Es,this.blendEquation=qn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Zt(0,0,0),this.blendAlpha=0,this.depthFunc=Ai,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Oo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ri,this.stencilZFail=ri,this.stencilZPass=ri,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ei&&(n.blending=this.blending),this.side!==Nn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ys&&(n.blendSrc=this.blendSrc),this.blendDst!==Es&&(n.blendDst=this.blendDst),this.blendEquation!==qn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ai&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Oo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ri&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ri&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ri&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=r(t.textures),o=r(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Mo extends Qi{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rn,this.combine=Xa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ue=new N,fr=new Dt;class Re{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Bo,this.updateRanges=[],this.gpuType=Qe,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)fr.fromBufferAttribute(this,e),fr.applyMatrix3(t),this.setXY(e,fr.x,fr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ue.fromBufferAttribute(this,e),ue.applyMatrix3(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ue.fromBufferAttribute(this,e),ue.applyMatrix4(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ue.fromBufferAttribute(this,e),ue.applyNormalMatrix(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ue.fromBufferAttribute(this,e),ue.transformDirection(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=xi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ye(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=xi(e,this.array)),e}setX(t,e){return this.normalized&&(e=ye(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=xi(e,this.array)),e}setY(t,e){return this.normalized&&(e=ye(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=xi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ye(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=xi(e,this.array)),e}setW(t,e){return this.normalized&&(e=ye(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ye(e,this.array),n=ye(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=ye(e,this.array),n=ye(n,this.array),r=ye(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=ye(e,this.array),n=ye(n,this.array),r=ye(r,this.array),s=ye(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Bo&&(t.usage=this.usage),t}}class ll extends Re{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class cl extends Re{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Gt extends Re{constructor(t,e,n){super(new Float32Array(t),e,n)}}let nh=0;const ke=new Kt,hs=new Ae,pi=new N,Ne=new ei,Vi=new ei,ge=new N;class fe extends ti{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:nh++}),this.uuid=Ni(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(il(t)?cl:ll)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Bt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ke.makeRotationFromQuaternion(t),this.applyMatrix4(ke),this}rotateX(t){return ke.makeRotationX(t),this.applyMatrix4(ke),this}rotateY(t){return ke.makeRotationY(t),this.applyMatrix4(ke),this}rotateZ(t){return ke.makeRotationZ(t),this.applyMatrix4(ke),this}translate(t,e,n){return ke.makeTranslation(t,e,n),this.applyMatrix4(ke),this}scale(t,e,n){return ke.makeScale(t,e,n),this.applyMatrix4(ke),this}lookAt(t){return hs.lookAt(t),hs.updateMatrix(),this.applyMatrix4(hs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(pi).negate(),this.translate(pi.x,pi.y,pi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let r=0,s=t.length;r<s;r++){const o=t[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Gt(n,3))}else{for(let n=0,r=e.count;n<r;n++){const s=t[n];e.setXYZ(n,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ei);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];Ne.setFromBufferAttribute(s),this.morphTargetsRelative?(ge.addVectors(this.boundingBox.min,Ne.min),this.boundingBox.expandByPoint(ge),ge.addVectors(this.boundingBox.max,Ne.max),this.boundingBox.expandByPoint(ge)):(this.boundingBox.expandByPoint(Ne.min),this.boundingBox.expandByPoint(Ne.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){const n=this.boundingSphere.center;if(Ne.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];Vi.setFromBufferAttribute(a),this.morphTargetsRelative?(ge.addVectors(Ne.min,Vi.min),Ne.expandByPoint(ge),ge.addVectors(Ne.max,Vi.max),Ne.expandByPoint(ge)):(Ne.expandByPoint(Vi.min),Ne.expandByPoint(Vi.max))}Ne.getCenter(n);let r=0;for(let s=0,o=t.count;s<o;s++)ge.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(ge));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)ge.fromBufferAttribute(a,c),l&&(pi.fromBufferAttribute(t,c),ge.add(pi)),r=Math.max(r,n.distanceToSquared(ge))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Re(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<n.count;C++)a[C]=new N,l[C]=new N;const c=new N,d=new N,f=new N,h=new Dt,m=new Dt,g=new Dt,_=new N,p=new N;function u(C,S,x){c.fromBufferAttribute(n,C),d.fromBufferAttribute(n,S),f.fromBufferAttribute(n,x),h.fromBufferAttribute(s,C),m.fromBufferAttribute(s,S),g.fromBufferAttribute(s,x),d.sub(c),f.sub(c),m.sub(h),g.sub(h);const R=1/(m.x*g.y-g.x*m.y);isFinite(R)&&(_.copy(d).multiplyScalar(g.y).addScaledVector(f,-m.y).multiplyScalar(R),p.copy(f).multiplyScalar(m.x).addScaledVector(d,-g.x).multiplyScalar(R),a[C].add(_),a[S].add(_),a[x].add(_),l[C].add(p),l[S].add(p),l[x].add(p))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let C=0,S=b.length;C<S;++C){const x=b[C],R=x.start,H=x.count;for(let F=R,Y=R+H;F<Y;F+=3)u(t.getX(F+0),t.getX(F+1),t.getX(F+2))}const T=new N,y=new N,L=new N,A=new N;function w(C){L.fromBufferAttribute(r,C),A.copy(L);const S=a[C];T.copy(S),T.sub(L.multiplyScalar(L.dot(S))).normalize(),y.crossVectors(A,S);const R=y.dot(l[C])<0?-1:1;o.setXYZW(C,T.x,T.y,T.z,R)}for(let C=0,S=b.length;C<S;++C){const x=b[C],R=x.start,H=x.count;for(let F=R,Y=R+H;F<Y;F+=3)w(t.getX(F+0)),w(t.getX(F+1)),w(t.getX(F+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Re(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,m=n.count;h<m;h++)n.setXYZ(h,0,0,0);const r=new N,s=new N,o=new N,a=new N,l=new N,c=new N,d=new N,f=new N;if(t)for(let h=0,m=t.count;h<m;h+=3){const g=t.getX(h+0),_=t.getX(h+1),p=t.getX(h+2);r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),o.fromBufferAttribute(e,p),d.subVectors(o,s),f.subVectors(r,s),d.cross(f),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),a.add(d),l.add(d),c.add(d),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,m=e.count;h<m;h+=3)r.fromBufferAttribute(e,h+0),s.fromBufferAttribute(e,h+1),o.fromBufferAttribute(e,h+2),d.subVectors(o,s),f.subVectors(r,s),d.cross(f),n.setXYZ(h+0,d.x,d.y,d.z),n.setXYZ(h+1,d.x,d.y,d.z),n.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ge.fromBufferAttribute(t,e),ge.normalize(),t.setXYZ(e,ge.x,ge.y,ge.z)}toNonIndexed(){function t(a,l){const c=a.array,d=a.itemSize,f=a.normalized,h=new c.constructor(l.length*d);let m=0,g=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?m=l[_]*a.data.stride+a.offset:m=l[_]*d;for(let u=0;u<d;u++)h[g++]=c[m++]}return new Re(h,d,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new fe,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=t(l,n);e.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let d=0,f=c.length;d<f;d++){const h=c[d],m=t(h,n);l.push(m)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let f=0,h=c.length;f<h;f++){const m=c[f];d.push(m.toJSON(t.data))}d.length>0&&(r[l]=d,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const r=t.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(e))}const s=t.morphAttributes;for(const c in s){const d=[],f=s[c];for(let h=0,m=f.length;h<m;h++)d.push(f[h].clone(e));this.morphAttributes[c]=d}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,d=o.length;c<d;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const na=new Kt,Hn=new xo,pr=new Fi,ia=new N,mr=new N,gr=new N,vr=new N,us=new N,_r=new N,ra=new N,xr=new N;class $t extends Ae{constructor(t=new fe,e=new Mo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(s&&a){_r.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=a[l],f=s[l];d!==0&&(us.fromBufferAttribute(f,t),o?_r.addScaledVector(us,d):_r.addScaledVector(us.sub(e),d))}e.add(_r)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),pr.copy(n.boundingSphere),pr.applyMatrix4(s),Hn.copy(t.ray).recast(t.near),!(pr.containsPoint(Hn.origin)===!1&&(Hn.intersectSphere(pr,ia)===null||Hn.origin.distanceToSquared(ia)>(t.far-t.near)**2))&&(na.copy(s).invert(),Hn.copy(t.ray).applyMatrix4(na),!(n.boundingBox!==null&&Hn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Hn)))}_computeIntersections(t,e,n){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,f=s.attributes.normal,h=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const p=h[g],u=o[p.materialIndex],b=Math.max(p.start,m.start),T=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let y=b,L=T;y<L;y+=3){const A=a.getX(y),w=a.getX(y+1),C=a.getX(y+2);r=Mr(this,u,t,n,c,d,f,A,w,C),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=p.materialIndex,e.push(r))}}else{const g=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let p=g,u=_;p<u;p+=3){const b=a.getX(p),T=a.getX(p+1),y=a.getX(p+2);r=Mr(this,o,t,n,c,d,f,b,T,y),r&&(r.faceIndex=Math.floor(p/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const p=h[g],u=o[p.materialIndex],b=Math.max(p.start,m.start),T=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let y=b,L=T;y<L;y+=3){const A=y,w=y+1,C=y+2;r=Mr(this,u,t,n,c,d,f,A,w,C),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=p.materialIndex,e.push(r))}}else{const g=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let p=g,u=_;p<u;p+=3){const b=p,T=p+1,y=p+2;r=Mr(this,o,t,n,c,d,f,b,T,y),r&&(r.faceIndex=Math.floor(p/3),e.push(r))}}}}function ih(i,t,e,n,r,s,o,a){let l;if(t.side===Te?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,t.side===Nn,a),l===null)return null;xr.copy(a),xr.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(xr);return c<e.near||c>e.far?null:{distance:c,point:xr.clone(),object:i}}function Mr(i,t,e,n,r,s,o,a,l,c){i.getVertexPosition(a,mr),i.getVertexPosition(l,gr),i.getVertexPosition(c,vr);const d=ih(i,t,e,n,mr,gr,vr,ra);if(d){const f=new N;Ke.getBarycoord(ra,mr,gr,vr,f),r&&(d.uv=Ke.getInterpolatedAttribute(r,a,l,c,f,new Dt)),s&&(d.uv1=Ke.getInterpolatedAttribute(s,a,l,c,f,new Dt)),o&&(d.normal=Ke.getInterpolatedAttribute(o,a,l,c,f,new N),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new N,materialIndex:0};Ke.getNormal(mr,gr,vr,h.normal),d.face=h,d.barycoord=f}return d}class tr extends fe{constructor(t=1,e=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],d=[],f=[];let h=0,m=0;g("z","y","x",-1,-1,n,e,t,o,s,0),g("z","y","x",1,-1,n,e,-t,o,s,1),g("x","z","y",1,1,t,n,e,r,o,2),g("x","z","y",1,-1,t,n,-e,r,o,3),g("x","y","z",1,-1,t,e,n,r,s,4),g("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Gt(c,3)),this.setAttribute("normal",new Gt(d,3)),this.setAttribute("uv",new Gt(f,2));function g(_,p,u,b,T,y,L,A,w,C,S){const x=y/w,R=L/C,H=y/2,F=L/2,Y=A/2,Z=w+1,W=C+1;let J=0,V=0;const it=new N;for(let dt=0;dt<W;dt++){const yt=dt*R-F;for(let Nt=0;Nt<Z;Nt++){const jt=Nt*x-H;it[_]=jt*b,it[p]=yt*T,it[u]=Y,c.push(it.x,it.y,it.z),it[_]=0,it[p]=0,it[u]=A>0?1:-1,d.push(it.x,it.y,it.z),f.push(Nt/w),f.push(1-dt/C),J+=1}}for(let dt=0;dt<C;dt++)for(let yt=0;yt<w;yt++){const Nt=h+yt+Z*dt,jt=h+yt+Z*(dt+1),O=h+(yt+1)+Z*(dt+1),G=h+(yt+1)+Z*dt;l.push(Nt,jt,G),l.push(jt,O,G),V+=6}a.addGroup(m,V,S),m+=V,h+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new tr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Li(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function Ee(i){const t={};for(let e=0;e<i.length;e++){const n=Li(i[e]);for(const r in n)t[r]=n[r]}return t}function rh(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function hl(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Yt.workingColorSpace}const sh={clone:Li,merge:Ee};var oh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ah=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class se extends Qi{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=oh,this.fragmentShader=ah,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Li(t.uniforms),this.uniformsGroups=rh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class ul extends Ae{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Kt,this.projectionMatrix=new Kt,this.projectionMatrixInverse=new Kt,this.coordinateSystem=gn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Pn=new N,sa=new Dt,oa=new Dt;class He extends ul{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ji*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Zi*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ji*2*Math.atan(Math.tan(Zi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Pn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Pn.x,Pn.y).multiplyScalar(-t/Pn.z),Pn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Pn.x,Pn.y).multiplyScalar(-t/Pn.z)}getViewSize(t,e){return this.getViewBounds(t,sa,oa),e.subVectors(oa,sa)}setViewOffset(t,e,n,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Zi*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,e-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const mi=-90,gi=1;class lh extends Ae{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new He(mi,gi,t,e);r.layers=this.layers,this.add(r);const s=new He(mi,gi,t,e);s.layers=this.layers,this.add(s);const o=new He(mi,gi,t,e);o.layers=this.layers,this.add(o);const a=new He(mi,gi,t,e);a.layers=this.layers,this.add(a);const l=new He(mi,gi,t,e);l.layers=this.layers,this.add(l);const c=new He(mi,gi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,o,a,l]=e;for(const c of e)this.remove(c);if(t===gn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Br)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,d]=this.children,f=t.getRenderTarget(),h=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,o),t.setRenderTarget(n,2,r),t.render(e,a),t.setRenderTarget(n,3,r),t.render(e,l),t.setRenderTarget(n,4,r),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,r),t.render(e,d),t.setRenderTarget(f,h,m),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class dl extends we{constructor(t,e,n,r,s,o,a,l,c,d){t=t!==void 0?t:[],e=e!==void 0?e:Ri,super(t,e,n,r,s,o,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class ch extends Sn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new dl(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Oe}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new tr(5,5,5),s=new se({name:"CubemapFromEquirect",uniforms:Li(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Te,blending:Un});s.uniforms.tEquirect.value=e;const o=new $t(r,s),a=e.minFilter;return e.minFilter===jn&&(e.minFilter=Oe),new lh(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,r){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,r);t.setRenderTarget(s)}}const ds=new N,hh=new N,uh=new Bt;class Dn{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=ds.subVectors(n,e).cross(hh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(ds),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||uh.getNormalMatrix(t),r=this.coplanarPoint(ds).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Gn=new Fi,Sr=new N;class fl{constructor(t=new Dn,e=new Dn,n=new Dn,r=new Dn,s=new Dn,o=new Dn){this.planes=[t,e,n,r,s,o]}set(t,e,n,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=gn){const n=this.planes,r=t.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],d=r[5],f=r[6],h=r[7],m=r[8],g=r[9],_=r[10],p=r[11],u=r[12],b=r[13],T=r[14],y=r[15];if(n[0].setComponents(l-s,h-c,p-m,y-u).normalize(),n[1].setComponents(l+s,h+c,p+m,y+u).normalize(),n[2].setComponents(l+o,h+d,p+g,y+b).normalize(),n[3].setComponents(l-o,h-d,p-g,y-b).normalize(),n[4].setComponents(l-a,h-f,p-_,y-T).normalize(),e===gn)n[5].setComponents(l+a,h+f,p+_,y+T).normalize();else if(e===Br)n[5].setComponents(a,f,_,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Gn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Gn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Gn)}intersectsSprite(t){return Gn.center.set(0,0,0),Gn.radius=.7071067811865476,Gn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Gn)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(Sr.x=r.normal.x>0?t.max.x:t.min.x,Sr.y=r.normal.y>0?t.max.y:t.min.y,Sr.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Sr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function pl(){let i=null,t=!1,e=null,n=null;function r(s,o){e(s,o),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function dh(i){const t=new WeakMap;function e(a,l){const c=a.array,d=a.usage,f=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,d),a.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){const d=l.array,f=l.updateRanges;if(i.bindBuffer(c,a),f.length===0)i.bufferSubData(c,0,d);else{f.sort((m,g)=>m.start-g.start);let h=0;for(let m=1;m<f.length;m++){const g=f[h],_=f[m];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++h,f[h]=_)}f.length=h+1;for(let m=0,g=f.length;m<g;m++){const _=f[m];i.bufferSubData(c,_.start*d.BYTES_PER_ELEMENT,d,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const d=t.get(a);(!d||d.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class ni extends fe{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(r),c=a+1,d=l+1,f=t/a,h=e/l,m=[],g=[],_=[],p=[];for(let u=0;u<d;u++){const b=u*h-o;for(let T=0;T<c;T++){const y=T*f-s;g.push(y,-b,0),_.push(0,0,1),p.push(T/a),p.push(1-u/l)}}for(let u=0;u<l;u++)for(let b=0;b<a;b++){const T=b+c*u,y=b+c*(u+1),L=b+1+c*(u+1),A=b+1+c*u;m.push(T,y,A),m.push(y,L,A)}this.setIndex(m),this.setAttribute("position",new Gt(g,3)),this.setAttribute("normal",new Gt(_,3)),this.setAttribute("uv",new Gt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ni(t.width,t.height,t.widthSegments,t.heightSegments)}}var fh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ph=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,mh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_h=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Mh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Sh=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,yh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Eh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,bh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Th=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,wh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ah=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Rh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Ch=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ph=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Dh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Lh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Uh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ih=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Nh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Fh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Oh=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Bh=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,zh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,kh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Hh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Gh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Vh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Wh=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Xh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Yh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,qh=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Zh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Kh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,jh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$h=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Jh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Qh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,tu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,eu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,nu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,iu=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ru=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,su=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,ou=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,au=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cu=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,uu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,du=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,fu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,pu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,mu=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gu=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vu=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_u=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Mu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Su=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,yu=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Eu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Tu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,wu=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Au=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ru=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Cu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Pu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Du=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Lu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Uu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Iu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Nu=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Fu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ou=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Bu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ku=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Hu=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Gu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Vu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Wu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Xu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Yu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Zu=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Ku=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ju=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,$u=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ju=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Qu=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,td=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ed=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,nd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,id=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sd=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,od=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ad=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ld=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,cd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,hd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ud=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const dd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fd=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,md=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_d=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,xd=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Md=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Sd=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,yd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ed=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bd=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Td=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,wd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ad=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rd=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Cd=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pd=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Dd=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ld=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Ud=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Id=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Nd=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fd=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Od=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bd=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zd=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kd=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Hd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Gd=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vd=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Wd=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Xd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,kt={alphahash_fragment:fh,alphahash_pars_fragment:ph,alphamap_fragment:mh,alphamap_pars_fragment:gh,alphatest_fragment:vh,alphatest_pars_fragment:_h,aomap_fragment:xh,aomap_pars_fragment:Mh,batching_pars_vertex:Sh,batching_vertex:yh,begin_vertex:Eh,beginnormal_vertex:bh,bsdfs:Th,iridescence_fragment:wh,bumpmap_pars_fragment:Ah,clipping_planes_fragment:Rh,clipping_planes_pars_fragment:Ch,clipping_planes_pars_vertex:Ph,clipping_planes_vertex:Dh,color_fragment:Lh,color_pars_fragment:Uh,color_pars_vertex:Ih,color_vertex:Nh,common:Fh,cube_uv_reflection_fragment:Oh,defaultnormal_vertex:Bh,displacementmap_pars_vertex:zh,displacementmap_vertex:kh,emissivemap_fragment:Hh,emissivemap_pars_fragment:Gh,colorspace_fragment:Vh,colorspace_pars_fragment:Wh,envmap_fragment:Xh,envmap_common_pars_fragment:Yh,envmap_pars_fragment:qh,envmap_pars_vertex:Zh,envmap_physical_pars_fragment:su,envmap_vertex:Kh,fog_vertex:jh,fog_pars_vertex:$h,fog_fragment:Jh,fog_pars_fragment:Qh,gradientmap_pars_fragment:tu,lightmap_pars_fragment:eu,lights_lambert_fragment:nu,lights_lambert_pars_fragment:iu,lights_pars_begin:ru,lights_toon_fragment:ou,lights_toon_pars_fragment:au,lights_phong_fragment:lu,lights_phong_pars_fragment:cu,lights_physical_fragment:hu,lights_physical_pars_fragment:uu,lights_fragment_begin:du,lights_fragment_maps:fu,lights_fragment_end:pu,logdepthbuf_fragment:mu,logdepthbuf_pars_fragment:gu,logdepthbuf_pars_vertex:vu,logdepthbuf_vertex:_u,map_fragment:xu,map_pars_fragment:Mu,map_particle_fragment:Su,map_particle_pars_fragment:yu,metalnessmap_fragment:Eu,metalnessmap_pars_fragment:bu,morphinstance_vertex:Tu,morphcolor_vertex:wu,morphnormal_vertex:Au,morphtarget_pars_vertex:Ru,morphtarget_vertex:Cu,normal_fragment_begin:Pu,normal_fragment_maps:Du,normal_pars_fragment:Lu,normal_pars_vertex:Uu,normal_vertex:Iu,normalmap_pars_fragment:Nu,clearcoat_normal_fragment_begin:Fu,clearcoat_normal_fragment_maps:Ou,clearcoat_pars_fragment:Bu,iridescence_pars_fragment:zu,opaque_fragment:ku,packing:Hu,premultiplied_alpha_fragment:Gu,project_vertex:Vu,dithering_fragment:Wu,dithering_pars_fragment:Xu,roughnessmap_fragment:Yu,roughnessmap_pars_fragment:qu,shadowmap_pars_fragment:Zu,shadowmap_pars_vertex:Ku,shadowmap_vertex:ju,shadowmask_pars_fragment:$u,skinbase_vertex:Ju,skinning_pars_vertex:Qu,skinning_vertex:td,skinnormal_vertex:ed,specularmap_fragment:nd,specularmap_pars_fragment:id,tonemapping_fragment:rd,tonemapping_pars_fragment:sd,transmission_fragment:od,transmission_pars_fragment:ad,uv_pars_fragment:ld,uv_pars_vertex:cd,uv_vertex:hd,worldpos_vertex:ud,background_vert:dd,background_frag:fd,backgroundCube_vert:pd,backgroundCube_frag:md,cube_vert:gd,cube_frag:vd,depth_vert:_d,depth_frag:xd,distanceRGBA_vert:Md,distanceRGBA_frag:Sd,equirect_vert:yd,equirect_frag:Ed,linedashed_vert:bd,linedashed_frag:Td,meshbasic_vert:wd,meshbasic_frag:Ad,meshlambert_vert:Rd,meshlambert_frag:Cd,meshmatcap_vert:Pd,meshmatcap_frag:Dd,meshnormal_vert:Ld,meshnormal_frag:Ud,meshphong_vert:Id,meshphong_frag:Nd,meshphysical_vert:Fd,meshphysical_frag:Od,meshtoon_vert:Bd,meshtoon_frag:zd,points_vert:kd,points_frag:Hd,shadow_vert:Gd,shadow_frag:Vd,sprite_vert:Wd,sprite_frag:Xd},rt={common:{diffuse:{value:new Zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Bt}},envmap:{envMap:{value:null},envMapRotation:{value:new Bt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Bt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Bt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Bt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Bt},normalScale:{value:new Dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Bt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Bt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Bt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Bt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0},uvTransform:{value:new Bt}},sprite:{diffuse:{value:new Zt(16777215)},opacity:{value:1},center:{value:new Dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}}},$e={basic:{uniforms:Ee([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.fog]),vertexShader:kt.meshbasic_vert,fragmentShader:kt.meshbasic_frag},lambert:{uniforms:Ee([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new Zt(0)}}]),vertexShader:kt.meshlambert_vert,fragmentShader:kt.meshlambert_frag},phong:{uniforms:Ee([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new Zt(0)},specular:{value:new Zt(1118481)},shininess:{value:30}}]),vertexShader:kt.meshphong_vert,fragmentShader:kt.meshphong_frag},standard:{uniforms:Ee([rt.common,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.roughnessmap,rt.metalnessmap,rt.fog,rt.lights,{emissive:{value:new Zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag},toon:{uniforms:Ee([rt.common,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.gradientmap,rt.fog,rt.lights,{emissive:{value:new Zt(0)}}]),vertexShader:kt.meshtoon_vert,fragmentShader:kt.meshtoon_frag},matcap:{uniforms:Ee([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,{matcap:{value:null}}]),vertexShader:kt.meshmatcap_vert,fragmentShader:kt.meshmatcap_frag},points:{uniforms:Ee([rt.points,rt.fog]),vertexShader:kt.points_vert,fragmentShader:kt.points_frag},dashed:{uniforms:Ee([rt.common,rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:kt.linedashed_vert,fragmentShader:kt.linedashed_frag},depth:{uniforms:Ee([rt.common,rt.displacementmap]),vertexShader:kt.depth_vert,fragmentShader:kt.depth_frag},normal:{uniforms:Ee([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,{opacity:{value:1}}]),vertexShader:kt.meshnormal_vert,fragmentShader:kt.meshnormal_frag},sprite:{uniforms:Ee([rt.sprite,rt.fog]),vertexShader:kt.sprite_vert,fragmentShader:kt.sprite_frag},background:{uniforms:{uvTransform:{value:new Bt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:kt.background_vert,fragmentShader:kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Bt}},vertexShader:kt.backgroundCube_vert,fragmentShader:kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:kt.cube_vert,fragmentShader:kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:kt.equirect_vert,fragmentShader:kt.equirect_frag},distanceRGBA:{uniforms:Ee([rt.common,rt.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:kt.distanceRGBA_vert,fragmentShader:kt.distanceRGBA_frag},shadow:{uniforms:Ee([rt.lights,rt.fog,{color:{value:new Zt(0)},opacity:{value:1}}]),vertexShader:kt.shadow_vert,fragmentShader:kt.shadow_frag}};$e.physical={uniforms:Ee([$e.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Bt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Bt},clearcoatNormalScale:{value:new Dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Bt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Bt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Bt},sheen:{value:0},sheenColor:{value:new Zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Bt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Bt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Bt},transmissionSamplerSize:{value:new Dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Bt},attenuationDistance:{value:0},attenuationColor:{value:new Zt(0)},specularColor:{value:new Zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Bt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Bt},anisotropyVector:{value:new Dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Bt}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag};const yr={r:0,b:0,g:0},Vn=new rn,Yd=new Kt;function qd(i,t,e,n,r,s,o){const a=new Zt(0);let l=s===!0?0:1,c,d,f=null,h=0,m=null;function g(b){let T=b.isScene===!0?b.background:null;return T&&T.isTexture&&(T=(b.backgroundBlurriness>0?e:t).get(T)),T}function _(b){let T=!1;const y=g(b);y===null?u(a,l):y&&y.isColor&&(u(y,1),T=!0);const L=i.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||T)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(b,T){const y=g(T);y&&(y.isCubeTexture||y.mapping===Hr)?(d===void 0&&(d=new $t(new tr(1,1,1),new se({name:"BackgroundCubeMaterial",uniforms:Li($e.backgroundCube.uniforms),vertexShader:$e.backgroundCube.vertexShader,fragmentShader:$e.backgroundCube.fragmentShader,side:Te,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(L,A,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),Vn.copy(T.backgroundRotation),Vn.x*=-1,Vn.y*=-1,Vn.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Vn.y*=-1,Vn.z*=-1),d.material.uniforms.envMap.value=y,d.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(Yd.makeRotationFromEuler(Vn)),d.material.toneMapped=Yt.getTransfer(y.colorSpace)!==ee,(f!==y||h!==y.version||m!==i.toneMapping)&&(d.material.needsUpdate=!0,f=y,h=y.version,m=i.toneMapping),d.layers.enableAll(),b.unshift(d,d.geometry,d.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new $t(new ni(2,2),new se({name:"BackgroundMaterial",uniforms:Li($e.background.uniforms),vertexShader:$e.background.vertexShader,fragmentShader:$e.background.fragmentShader,side:Nn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=Yt.getTransfer(y.colorSpace)!==ee,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(f!==y||h!==y.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,f=y,h=y.version,m=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function u(b,T){b.getRGB(yr,hl(i)),n.buffers.color.setClear(yr.r,yr.g,yr.b,T,o)}return{getClearColor:function(){return a},setClearColor:function(b,T=1){a.set(b),l=T,u(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,u(a,l)},render:_,addToRenderList:p}}function Zd(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=h(null);let s=r,o=!1;function a(x,R,H,F,Y){let Z=!1;const W=f(F,H,R);s!==W&&(s=W,c(s.object)),Z=m(x,F,H,Y),Z&&g(x,F,H,Y),Y!==null&&t.update(Y,i.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,y(x,R,H,F),Y!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(Y).buffer))}function l(){return i.createVertexArray()}function c(x){return i.bindVertexArray(x)}function d(x){return i.deleteVertexArray(x)}function f(x,R,H){const F=H.wireframe===!0;let Y=n[x.id];Y===void 0&&(Y={},n[x.id]=Y);let Z=Y[R.id];Z===void 0&&(Z={},Y[R.id]=Z);let W=Z[F];return W===void 0&&(W=h(l()),Z[F]=W),W}function h(x){const R=[],H=[],F=[];for(let Y=0;Y<e;Y++)R[Y]=0,H[Y]=0,F[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:H,attributeDivisors:F,object:x,attributes:{},index:null}}function m(x,R,H,F){const Y=s.attributes,Z=R.attributes;let W=0;const J=H.getAttributes();for(const V in J)if(J[V].location>=0){const dt=Y[V];let yt=Z[V];if(yt===void 0&&(V==="instanceMatrix"&&x.instanceMatrix&&(yt=x.instanceMatrix),V==="instanceColor"&&x.instanceColor&&(yt=x.instanceColor)),dt===void 0||dt.attribute!==yt||yt&&dt.data!==yt.data)return!0;W++}return s.attributesNum!==W||s.index!==F}function g(x,R,H,F){const Y={},Z=R.attributes;let W=0;const J=H.getAttributes();for(const V in J)if(J[V].location>=0){let dt=Z[V];dt===void 0&&(V==="instanceMatrix"&&x.instanceMatrix&&(dt=x.instanceMatrix),V==="instanceColor"&&x.instanceColor&&(dt=x.instanceColor));const yt={};yt.attribute=dt,dt&&dt.data&&(yt.data=dt.data),Y[V]=yt,W++}s.attributes=Y,s.attributesNum=W,s.index=F}function _(){const x=s.newAttributes;for(let R=0,H=x.length;R<H;R++)x[R]=0}function p(x){u(x,0)}function u(x,R){const H=s.newAttributes,F=s.enabledAttributes,Y=s.attributeDivisors;H[x]=1,F[x]===0&&(i.enableVertexAttribArray(x),F[x]=1),Y[x]!==R&&(i.vertexAttribDivisor(x,R),Y[x]=R)}function b(){const x=s.newAttributes,R=s.enabledAttributes;for(let H=0,F=R.length;H<F;H++)R[H]!==x[H]&&(i.disableVertexAttribArray(H),R[H]=0)}function T(x,R,H,F,Y,Z,W){W===!0?i.vertexAttribIPointer(x,R,H,Y,Z):i.vertexAttribPointer(x,R,H,F,Y,Z)}function y(x,R,H,F){_();const Y=F.attributes,Z=H.getAttributes(),W=R.defaultAttributeValues;for(const J in Z){const V=Z[J];if(V.location>=0){let it=Y[J];if(it===void 0&&(J==="instanceMatrix"&&x.instanceMatrix&&(it=x.instanceMatrix),J==="instanceColor"&&x.instanceColor&&(it=x.instanceColor)),it!==void 0){const dt=it.normalized,yt=it.itemSize,Nt=t.get(it);if(Nt===void 0)continue;const jt=Nt.buffer,O=Nt.type,G=Nt.bytesPerElement,tt=O===i.INT||O===i.UNSIGNED_INT||it.gpuType===ho;if(it.isInterleavedBufferAttribute){const $=it.data,st=$.stride,lt=it.offset;if($.isInstancedInterleavedBuffer){for(let _t=0;_t<V.locationSize;_t++)u(V.location+_t,$.meshPerAttribute);x.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let _t=0;_t<V.locationSize;_t++)p(V.location+_t);i.bindBuffer(i.ARRAY_BUFFER,jt);for(let _t=0;_t<V.locationSize;_t++)T(V.location+_t,yt/V.locationSize,O,dt,st*G,(lt+yt/V.locationSize*_t)*G,tt)}else{if(it.isInstancedBufferAttribute){for(let $=0;$<V.locationSize;$++)u(V.location+$,it.meshPerAttribute);x.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let $=0;$<V.locationSize;$++)p(V.location+$);i.bindBuffer(i.ARRAY_BUFFER,jt);for(let $=0;$<V.locationSize;$++)T(V.location+$,yt/V.locationSize,O,dt,yt*G,yt/V.locationSize*$*G,tt)}}else if(W!==void 0){const dt=W[J];if(dt!==void 0)switch(dt.length){case 2:i.vertexAttrib2fv(V.location,dt);break;case 3:i.vertexAttrib3fv(V.location,dt);break;case 4:i.vertexAttrib4fv(V.location,dt);break;default:i.vertexAttrib1fv(V.location,dt)}}}}b()}function L(){C();for(const x in n){const R=n[x];for(const H in R){const F=R[H];for(const Y in F)d(F[Y].object),delete F[Y];delete R[H]}delete n[x]}}function A(x){if(n[x.id]===void 0)return;const R=n[x.id];for(const H in R){const F=R[H];for(const Y in F)d(F[Y].object),delete F[Y];delete R[H]}delete n[x.id]}function w(x){for(const R in n){const H=n[R];if(H[x.id]===void 0)continue;const F=H[x.id];for(const Y in F)d(F[Y].object),delete F[Y];delete H[x.id]}}function C(){S(),o=!0,s!==r&&(s=r,c(s.object))}function S(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:C,resetDefaultState:S,dispose:L,releaseStatesOfGeometry:A,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:p,disableUnusedAttributes:b}}function Kd(i,t,e){let n;function r(c){n=c}function s(c,d){i.drawArrays(n,c,d),e.update(d,n,1)}function o(c,d,f){f!==0&&(i.drawArraysInstanced(n,c,d,f),e.update(d,n,f))}function a(c,d,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,d,0,f);let m=0;for(let g=0;g<f;g++)m+=d[g];e.update(m,n,1)}function l(c,d,f,h){if(f===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<c.length;g++)o(c[g],d[g],h[g]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,d,0,h,0,f);let g=0;for(let _=0;_<f;_++)g+=d[_]*h[_];e.update(g,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function jd(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(w){return!(w!==Be&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const C=w===Qn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==Mn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Qe&&!C)}function l(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const f=e.logarithmicDepthBuffer===!0,h=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:m,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:u,maxVertexUniforms:b,maxVaryings:T,maxFragmentUniforms:y,vertexTextures:L,maxSamples:A}}function $d(i){const t=this;let e=null,n=0,r=!1,s=!1;const o=new Dn,a=new Bt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const m=f.length!==0||h||n!==0||r;return r=h,n=f.length,m},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){e=d(f,h,0)},this.setState=function(f,h,m){const g=f.clippingPlanes,_=f.clipIntersection,p=f.clipShadows,u=i.get(f);if(!r||g===null||g.length===0||s&&!p)s?d(null):c();else{const b=s?0:n,T=b*4;let y=u.clippingState||null;l.value=y,y=d(g,h,T,m);for(let L=0;L!==T;++L)y[L]=e[L];u.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function d(f,h,m,g){const _=f!==null?f.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const u=m+_*4,b=h.matrixWorldInverse;a.getNormalMatrix(b),(p===null||p.length<u)&&(p=new Float32Array(u));for(let T=0,y=m;T!==_;++T,y+=4)o.copy(f[T]).applyMatrix4(b,a),o.normal.toArray(p,y),p[y+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}function Jd(i){let t=new WeakMap;function e(o,a){return a===Ds?o.mapping=Ri:a===Ls&&(o.mapping=Ci),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ds||a===Ls)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new ch(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",r),e(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class ml extends ul{constructor(t=-1,e=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Si=4,aa=[.125,.215,.35,.446,.526,.582],Zn=20,fs=new ml,la=new Zt;let ps=null,ms=0,gs=0,vs=!1;const Yn=(1+Math.sqrt(5))/2,vi=1/Yn,ca=[new N(-Yn,vi,0),new N(Yn,vi,0),new N(-vi,0,Yn),new N(vi,0,Yn),new N(0,Yn,-vi),new N(0,Yn,vi),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)];class ha{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100){ps=this._renderer.getRenderTarget(),ms=this._renderer.getActiveCubeFace(),gs=this._renderer.getActiveMipmapLevel(),vs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fa(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=da(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ps,ms,gs),this._renderer.xr.enabled=vs,t.scissorTest=!1,Er(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ri||t.mapping===Ci?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ps=this._renderer.getRenderTarget(),ms=this._renderer.getActiveCubeFace(),gs=this._renderer.getActiveMipmapLevel(),vs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Oe,minFilter:Oe,generateMipmaps:!1,type:Qn,format:Be,colorSpace:Ii,depthBuffer:!1},r=ua(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ua(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Qd(s)),this._blurMaterial=tf(s,t,e)}return r}_compileMaterial(t){const e=new $t(this._lodPlanes[0],t);this._renderer.compile(e,fs)}_sceneToCubeUV(t,e,n,r){const a=new He(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,h=d.toneMapping;d.getClearColor(la),d.toneMapping=In,d.autoClear=!1;const m=new Mo({name:"PMREM.Background",side:Te,depthWrite:!1,depthTest:!1}),g=new $t(new tr,m);let _=!1;const p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,_=!0):(m.color.copy(la),_=!0);for(let u=0;u<6;u++){const b=u%3;b===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):b===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));const T=this._cubeSize;Er(r,b*T,u>2?T:0,T,T),d.setRenderTarget(r),_&&d.render(g,a),d.render(t,a)}g.geometry.dispose(),g.material.dispose(),d.toneMapping=h,d.autoClear=f,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===Ri||t.mapping===Ci;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=fa()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=da());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new $t(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;Er(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,fs)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=ca[(r-s-1)%ca.length];this._blur(t,s-1,s,o,a)}e.autoClear=n}_blur(t,e,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,r,"latitudinal",s),this._halfBlur(o,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,f=new $t(this._lodPlanes[r],c),h=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Zn-1),_=s/g,p=isFinite(s)?1+Math.floor(d*_):Zn;p>Zn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Zn}`);const u=[];let b=0;for(let w=0;w<Zn;++w){const C=w/_,S=Math.exp(-C*C/2);u.push(S),w===0?b+=S:w<p&&(b+=2*S)}for(let w=0;w<u.length;w++)u[w]=u[w]/b;h.envMap.value=t.texture,h.samples.value=p,h.weights.value=u,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:T}=this;h.dTheta.value=g,h.mipInt.value=T-n;const y=this._sizeLods[r],L=3*y*(r>T-Si?r-T+Si:0),A=4*(this._cubeSize-y);Er(e,L,A,3*y,2*y),l.setRenderTarget(e),l.render(f,fs)}}function Qd(i){const t=[],e=[],n=[];let r=i;const s=i-Si+1+aa.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>i-Si?l=aa[o-i+Si-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),d=-c,f=1+c,h=[d,d,f,d,f,f,d,d,f,f,d,f],m=6,g=6,_=3,p=2,u=1,b=new Float32Array(_*g*m),T=new Float32Array(p*g*m),y=new Float32Array(u*g*m);for(let A=0;A<m;A++){const w=A%3*2/3-1,C=A>2?0:-1,S=[w,C,0,w+2/3,C,0,w+2/3,C+1,0,w,C,0,w+2/3,C+1,0,w,C+1,0];b.set(S,_*g*A),T.set(h,p*g*A);const x=[A,A,A,A,A,A];y.set(x,u*g*A)}const L=new fe;L.setAttribute("position",new Re(b,_)),L.setAttribute("uv",new Re(T,p)),L.setAttribute("faceIndex",new Re(y,u)),t.push(L),r>Si&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function ua(i,t,e){const n=new Sn(i,t,e);return n.texture.mapping=Hr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Er(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function tf(i,t,e){const n=new Float32Array(Zn),r=new N(0,1,0);return new se({name:"SphericalGaussianBlur",defines:{n:Zn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:So(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Un,depthTest:!1,depthWrite:!1})}function da(){return new se({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:So(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Un,depthTest:!1,depthWrite:!1})}function fa(){return new se({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:So(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Un,depthTest:!1,depthWrite:!1})}function So(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ef(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ds||l===Ls,d=l===Ri||l===Ci;if(c||d){let f=t.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return e===null&&(e=new ha(i)),f=c?e.fromEquirectangular(a,f):e.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),f.texture;if(f!==void 0)return f.texture;{const m=a.image;return c&&m&&m.height>0||d&&m&&r(m)?(e===null&&(e=new ha(i)),f=c?e.fromEquirectangular(a):e.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let d=0;d<c;d++)a[d]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function nf(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&Yi("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function rf(i,t,e,n){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&t.remove(h.index);for(const g in h.attributes)t.remove(h.attributes[g]);for(const g in h.morphAttributes){const _=h.morphAttributes[g];for(let p=0,u=_.length;p<u;p++)t.remove(_[p])}h.removeEventListener("dispose",o),delete r[h.id];const m=s.get(h);m&&(t.remove(m),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,e.memory.geometries++),h}function l(f){const h=f.attributes;for(const g in h)t.update(h[g],i.ARRAY_BUFFER);const m=f.morphAttributes;for(const g in m){const _=m[g];for(let p=0,u=_.length;p<u;p++)t.update(_[p],i.ARRAY_BUFFER)}}function c(f){const h=[],m=f.index,g=f.attributes.position;let _=0;if(m!==null){const b=m.array;_=m.version;for(let T=0,y=b.length;T<y;T+=3){const L=b[T+0],A=b[T+1],w=b[T+2];h.push(L,A,A,w,w,L)}}else if(g!==void 0){const b=g.array;_=g.version;for(let T=0,y=b.length/3-1;T<y;T+=3){const L=T+0,A=T+1,w=T+2;h.push(L,A,A,w,w,L)}}else return;const p=new(il(h)?cl:ll)(h,1);p.version=_;const u=s.get(f);u&&t.remove(u),s.set(f,p)}function d(f){const h=s.get(f);if(h){const m=f.index;m!==null&&h.version<m.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:d}}function sf(i,t,e){let n;function r(h){n=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,m){i.drawElements(n,m,s,h*o),e.update(m,n,1)}function c(h,m,g){g!==0&&(i.drawElementsInstanced(n,m,s,h*o,g),e.update(m,n,g))}function d(h,m,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,s,h,0,g);let p=0;for(let u=0;u<g;u++)p+=m[u];e.update(p,n,1)}function f(h,m,g,_){if(g===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<h.length;u++)c(h[u]/o,m[u],_[u]);else{p.multiDrawElementsInstancedWEBGL(n,m,0,s,h,0,_,0,g);let u=0;for(let b=0;b<g;b++)u+=m[b]*_[b];e.update(u,n,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=f}function of(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(s/3);break;case i.LINES:e.lines+=a*(s/2);break;case i.LINE_STRIP:e.lines+=a*(s-1);break;case i.LINE_LOOP:e.lines+=a*s;break;case i.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function af(i,t,e){const n=new WeakMap,r=new he;function s(o,a,l){const c=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=d!==void 0?d.length:0;let h=n.get(a);if(h===void 0||h.count!==f){let x=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",x)};var m=x;h!==void 0&&h.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,u=a.morphAttributes.position||[],b=a.morphAttributes.normal||[],T=a.morphAttributes.color||[];let y=0;g===!0&&(y=1),_===!0&&(y=2),p===!0&&(y=3);let L=a.attributes.position.count*y,A=1;L>t.maxTextureSize&&(A=Math.ceil(L/t.maxTextureSize),L=t.maxTextureSize);const w=new Float32Array(L*A*4*f),C=new sl(w,L,A,f);C.type=Qe,C.needsUpdate=!0;const S=y*4;for(let R=0;R<f;R++){const H=u[R],F=b[R],Y=T[R],Z=L*A*4*R;for(let W=0;W<H.count;W++){const J=W*S;g===!0&&(r.fromBufferAttribute(H,W),w[Z+J+0]=r.x,w[Z+J+1]=r.y,w[Z+J+2]=r.z,w[Z+J+3]=0),_===!0&&(r.fromBufferAttribute(F,W),w[Z+J+4]=r.x,w[Z+J+5]=r.y,w[Z+J+6]=r.z,w[Z+J+7]=0),p===!0&&(r.fromBufferAttribute(Y,W),w[Z+J+8]=r.x,w[Z+J+9]=r.y,w[Z+J+10]=r.z,w[Z+J+11]=Y.itemSize===4?r.w:1)}}h={count:f,texture:C,size:new Dt(L,A)},n.set(a,h),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:s}}function lf(i,t,e,n){let r=new WeakMap;function s(l){const c=n.render.frame,d=l.geometry,f=t.get(l,d);if(r.get(f)!==c&&(t.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}class yo extends we{constructor(t,e,n,r,s,o,a,l,c,d=$n){if(d!==$n&&d!==Di)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===$n&&(n=Fn),n===void 0&&d===Di&&(n=Pi),super(null,r,s,o,a,l,d,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Se,this.minFilter=l!==void 0?l:Se,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const gl=new we,pa=new yo(1,1),vl=new sl,_l=new qc,xl=new dl,ma=[],ga=[],va=new Float32Array(16),_a=new Float32Array(9),xa=new Float32Array(4);function Oi(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=ma[r];if(s===void 0&&(s=new Float32Array(r),ma[r]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(s,a)}return s}function pe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function me(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Vr(i,t){let e=ga[t];e===void 0&&(e=new Int32Array(t),ga[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function cf(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function hf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pe(e,t))return;i.uniform2fv(this.addr,t),me(e,t)}}function uf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(pe(e,t))return;i.uniform3fv(this.addr,t),me(e,t)}}function df(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pe(e,t))return;i.uniform4fv(this.addr,t),me(e,t)}}function ff(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(pe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),me(e,t)}else{if(pe(e,n))return;xa.set(n),i.uniformMatrix2fv(this.addr,!1,xa),me(e,n)}}function pf(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(pe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),me(e,t)}else{if(pe(e,n))return;_a.set(n),i.uniformMatrix3fv(this.addr,!1,_a),me(e,n)}}function mf(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(pe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),me(e,t)}else{if(pe(e,n))return;va.set(n),i.uniformMatrix4fv(this.addr,!1,va),me(e,n)}}function gf(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function vf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pe(e,t))return;i.uniform2iv(this.addr,t),me(e,t)}}function _f(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(pe(e,t))return;i.uniform3iv(this.addr,t),me(e,t)}}function xf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pe(e,t))return;i.uniform4iv(this.addr,t),me(e,t)}}function Mf(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Sf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pe(e,t))return;i.uniform2uiv(this.addr,t),me(e,t)}}function yf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(pe(e,t))return;i.uniform3uiv(this.addr,t),me(e,t)}}function Ef(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pe(e,t))return;i.uniform4uiv(this.addr,t),me(e,t)}}function bf(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(pa.compareFunction=nl,s=pa):s=gl,e.setTexture2D(t||s,r)}function Tf(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||_l,r)}function wf(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||xl,r)}function Af(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||vl,r)}function Rf(i){switch(i){case 5126:return cf;case 35664:return hf;case 35665:return uf;case 35666:return df;case 35674:return ff;case 35675:return pf;case 35676:return mf;case 5124:case 35670:return gf;case 35667:case 35671:return vf;case 35668:case 35672:return _f;case 35669:case 35673:return xf;case 5125:return Mf;case 36294:return Sf;case 36295:return yf;case 36296:return Ef;case 35678:case 36198:case 36298:case 36306:case 35682:return bf;case 35679:case 36299:case 36307:return Tf;case 35680:case 36300:case 36308:case 36293:return wf;case 36289:case 36303:case 36311:case 36292:return Af}}function Cf(i,t){i.uniform1fv(this.addr,t)}function Pf(i,t){const e=Oi(t,this.size,2);i.uniform2fv(this.addr,e)}function Df(i,t){const e=Oi(t,this.size,3);i.uniform3fv(this.addr,e)}function Lf(i,t){const e=Oi(t,this.size,4);i.uniform4fv(this.addr,e)}function Uf(i,t){const e=Oi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function If(i,t){const e=Oi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Nf(i,t){const e=Oi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Ff(i,t){i.uniform1iv(this.addr,t)}function Of(i,t){i.uniform2iv(this.addr,t)}function Bf(i,t){i.uniform3iv(this.addr,t)}function zf(i,t){i.uniform4iv(this.addr,t)}function kf(i,t){i.uniform1uiv(this.addr,t)}function Hf(i,t){i.uniform2uiv(this.addr,t)}function Gf(i,t){i.uniform3uiv(this.addr,t)}function Vf(i,t){i.uniform4uiv(this.addr,t)}function Wf(i,t,e){const n=this.cache,r=t.length,s=Vr(e,r);pe(n,s)||(i.uniform1iv(this.addr,s),me(n,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||gl,s[o])}function Xf(i,t,e){const n=this.cache,r=t.length,s=Vr(e,r);pe(n,s)||(i.uniform1iv(this.addr,s),me(n,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||_l,s[o])}function Yf(i,t,e){const n=this.cache,r=t.length,s=Vr(e,r);pe(n,s)||(i.uniform1iv(this.addr,s),me(n,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||xl,s[o])}function qf(i,t,e){const n=this.cache,r=t.length,s=Vr(e,r);pe(n,s)||(i.uniform1iv(this.addr,s),me(n,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||vl,s[o])}function Zf(i){switch(i){case 5126:return Cf;case 35664:return Pf;case 35665:return Df;case 35666:return Lf;case 35674:return Uf;case 35675:return If;case 35676:return Nf;case 5124:case 35670:return Ff;case 35667:case 35671:return Of;case 35668:case 35672:return Bf;case 35669:case 35673:return zf;case 5125:return kf;case 36294:return Hf;case 36295:return Gf;case 36296:return Vf;case 35678:case 36198:case 36298:case 36306:case 35682:return Wf;case 35679:case 36299:case 36307:return Xf;case 35680:case 36300:case 36308:case 36293:return Yf;case 36289:case 36303:case 36311:case 36292:return qf}}class Kf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Rf(e.type)}}class jf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Zf(e.type)}}class $f{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(t,e[a.id],n)}}}const _s=/(\w+)(\])?(\[|\.)?/g;function Ma(i,t){i.seq.push(t),i.map[t.id]=t}function Jf(i,t,e){const n=i.name,r=n.length;for(_s.lastIndex=0;;){const s=_s.exec(n),o=_s.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Ma(e,c===void 0?new Kf(a,i,t):new jf(a,i,t));break}else{let f=e.map[a];f===void 0&&(f=new $f(a),Ma(e,f)),e=f}}}class Fr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);Jf(s,o,this)}}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in e&&n.push(o)}return n}}function Sa(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Qf=37297;let tp=0;function ep(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const ya=new Bt;function np(i){Yt._getMatrix(ya,Yt.workingColorSpace,i);const t=`mat3( ${ya.elements.map(e=>e.toFixed(4))} )`;switch(Yt.getTransfer(i)){case Gr:return[t,"LinearTransferOETF"];case ee:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Ea(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=i.getShaderInfoLog(t).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+ep(i.getShaderSource(t),o)}else return r}function ip(i,t){const e=np(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function rp(i,t){let e;switch(t){case rc:e="Linear";break;case sc:e="Reinhard";break;case oc:e="Cineon";break;case ac:e="ACESFilmic";break;case cc:e="AgX";break;case hc:e="Neutral";break;case lc:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const br=new N;function sp(){Yt.getLuminanceCoefficients(br);const i=br.x.toFixed(4),t=br.y.toFixed(4),e=br.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function op(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qi).join(`
`)}function ap(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function lp(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function qi(i){return i!==""}function ba(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ta(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const cp=/^[ \t]*#include +<([\w\d./]+)>/gm;function ao(i){return i.replace(cp,up)}const hp=new Map;function up(i,t){let e=kt[t];if(e===void 0){const n=hp.get(t);if(n!==void 0)e=kt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ao(e)}const dp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wa(i){return i.replace(dp,fp)}function fp(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Aa(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function pp(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Wa?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ol?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===dn&&(t="SHADOWMAP_TYPE_VSM"),t}function mp(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ri:case Ci:t="ENVMAP_TYPE_CUBE";break;case Hr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function gp(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ci:t="ENVMAP_MODE_REFRACTION";break}return t}function vp(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Xa:t="ENVMAP_BLENDING_MULTIPLY";break;case nc:t="ENVMAP_BLENDING_MIX";break;case ic:t="ENVMAP_BLENDING_ADD";break}return t}function _p(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function xp(i,t,e,n){const r=i.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=pp(e),c=mp(e),d=gp(e),f=vp(e),h=_p(e),m=op(e),g=ap(s),_=r.createProgram();let p,u,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(qi).join(`
`),p.length>0&&(p+=`
`),u=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(qi).join(`
`),u.length>0&&(u+=`
`)):(p=[Aa(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qi).join(`
`),u=[Aa(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+d:"",e.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==In?"#define TONE_MAPPING":"",e.toneMapping!==In?kt.tonemapping_pars_fragment:"",e.toneMapping!==In?rp("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",kt.colorspace_pars_fragment,ip("linearToOutputTexel",e.outputColorSpace),sp(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(qi).join(`
`)),o=ao(o),o=ba(o,e),o=Ta(o,e),a=ao(a),a=ba(a,e),a=Ta(a,e),o=wa(o),a=wa(a),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,u=["#define varying in",e.glslVersion===zo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===zo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const T=b+p+o,y=b+u+a,L=Sa(r,r.VERTEX_SHADER,T),A=Sa(r,r.FRAGMENT_SHADER,y);r.attachShader(_,L),r.attachShader(_,A),e.index0AttributeName!==void 0?r.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function w(R){if(i.debug.checkShaderErrors){const H=r.getProgramInfoLog(_).trim(),F=r.getShaderInfoLog(L).trim(),Y=r.getShaderInfoLog(A).trim();let Z=!0,W=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(Z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,L,A);else{const J=Ea(r,L,"vertex"),V=Ea(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+H+`
`+J+`
`+V)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(F===""||Y==="")&&(W=!1);W&&(R.diagnostics={runnable:Z,programLog:H,vertexShader:{log:F,prefix:p},fragmentShader:{log:Y,prefix:u}})}r.deleteShader(L),r.deleteShader(A),C=new Fr(r,_),S=lp(r,_)}let C;this.getUniforms=function(){return C===void 0&&w(this),C};let S;this.getAttributes=function(){return S===void 0&&w(this),S};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=r.getProgramParameter(_,Qf)),x},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=tp++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=L,this.fragmentShader=A,this}let Mp=0;class Sp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new yp(t),e.set(t,n)),n}}class yp{constructor(t){this.id=Mp++,this.code=t,this.usedTimes=0}}function Ep(i,t,e,n,r,s,o){const a=new ol,l=new Sp,c=new Set,d=[],f=r.logarithmicDepthBuffer,h=r.vertexTextures;let m=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return c.add(S),S===0?"uv":`uv${S}`}function p(S,x,R,H,F){const Y=H.fog,Z=F.geometry,W=S.isMeshStandardMaterial?H.environment:null,J=(S.isMeshStandardMaterial?e:t).get(S.envMap||W),V=J&&J.mapping===Hr?J.image.height:null,it=g[S.type];S.precision!==null&&(m=r.getMaxPrecision(S.precision),m!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",m,"instead."));const dt=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,yt=dt!==void 0?dt.length:0;let Nt=0;Z.morphAttributes.position!==void 0&&(Nt=1),Z.morphAttributes.normal!==void 0&&(Nt=2),Z.morphAttributes.color!==void 0&&(Nt=3);let jt,O,G,tt;if(it){const te=$e[it];jt=te.vertexShader,O=te.fragmentShader}else jt=S.vertexShader,O=S.fragmentShader,l.update(S),G=l.getVertexShaderID(S),tt=l.getFragmentShaderID(S);const $=i.getRenderTarget(),st=i.state.buffers.depth.getReversed(),lt=F.isInstancedMesh===!0,_t=F.isBatchedMesh===!0,It=!!S.map,wt=!!S.matcap,Pt=!!J,D=!!S.aoMap,ct=!!S.lightMap,xt=!!S.bumpMap,At=!!S.normalMap,vt=!!S.displacementMap,Ht=!!S.emissiveMap,St=!!S.metalnessMap,E=!!S.roughnessMap,v=S.anisotropy>0,B=S.clearcoat>0,K=S.dispersion>0,Q=S.iridescence>0,q=S.sheen>0,Mt=S.transmission>0,at=v&&!!S.anisotropyMap,pt=B&&!!S.clearcoatMap,Wt=B&&!!S.clearcoatNormalMap,et=B&&!!S.clearcoatRoughnessMap,mt=Q&&!!S.iridescenceMap,Ct=Q&&!!S.iridescenceThicknessMap,Lt=q&&!!S.sheenColorMap,gt=q&&!!S.sheenRoughnessMap,Vt=!!S.specularMap,zt=!!S.specularColorMap,ie=!!S.specularIntensityMap,P=Mt&&!!S.transmissionMap,ot=Mt&&!!S.thicknessMap,X=!!S.gradientMap,j=!!S.alphaMap,ft=S.alphaTest>0,ht=!!S.alphaHash,Ft=!!S.extensions;let ce=In;S.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(ce=i.toneMapping);const ve={shaderID:it,shaderType:S.type,shaderName:S.name,vertexShader:jt,fragmentShader:O,defines:S.defines,customVertexShaderID:G,customFragmentShaderID:tt,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:m,batching:_t,batchingColor:_t&&F._colorsTexture!==null,instancing:lt,instancingColor:lt&&F.instanceColor!==null,instancingMorph:lt&&F.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:$===null?i.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:Ii,alphaToCoverage:!!S.alphaToCoverage,map:It,matcap:wt,envMap:Pt,envMapMode:Pt&&J.mapping,envMapCubeUVHeight:V,aoMap:D,lightMap:ct,bumpMap:xt,normalMap:At,displacementMap:h&&vt,emissiveMap:Ht,normalMapObjectSpace:At&&S.normalMapType===mc,normalMapTangentSpace:At&&S.normalMapType===pc,metalnessMap:St,roughnessMap:E,anisotropy:v,anisotropyMap:at,clearcoat:B,clearcoatMap:pt,clearcoatNormalMap:Wt,clearcoatRoughnessMap:et,dispersion:K,iridescence:Q,iridescenceMap:mt,iridescenceThicknessMap:Ct,sheen:q,sheenColorMap:Lt,sheenRoughnessMap:gt,specularMap:Vt,specularColorMap:zt,specularIntensityMap:ie,transmission:Mt,transmissionMap:P,thicknessMap:ot,gradientMap:X,opaque:S.transparent===!1&&S.blending===Ei&&S.alphaToCoverage===!1,alphaMap:j,alphaTest:ft,alphaHash:ht,combine:S.combine,mapUv:It&&_(S.map.channel),aoMapUv:D&&_(S.aoMap.channel),lightMapUv:ct&&_(S.lightMap.channel),bumpMapUv:xt&&_(S.bumpMap.channel),normalMapUv:At&&_(S.normalMap.channel),displacementMapUv:vt&&_(S.displacementMap.channel),emissiveMapUv:Ht&&_(S.emissiveMap.channel),metalnessMapUv:St&&_(S.metalnessMap.channel),roughnessMapUv:E&&_(S.roughnessMap.channel),anisotropyMapUv:at&&_(S.anisotropyMap.channel),clearcoatMapUv:pt&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:Wt&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:et&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:mt&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ct&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:Lt&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:gt&&_(S.sheenRoughnessMap.channel),specularMapUv:Vt&&_(S.specularMap.channel),specularColorMapUv:zt&&_(S.specularColorMap.channel),specularIntensityMapUv:ie&&_(S.specularIntensityMap.channel),transmissionMapUv:P&&_(S.transmissionMap.channel),thicknessMapUv:ot&&_(S.thicknessMap.channel),alphaMapUv:j&&_(S.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(At||v),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!Z.attributes.uv&&(It||j),fog:!!Y,useFog:S.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:st,skinning:F.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:yt,morphTextureStride:Nt,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:ce,decodeVideoTexture:It&&S.map.isVideoTexture===!0&&Yt.getTransfer(S.map.colorSpace)===ee,decodeVideoTextureEmissive:Ht&&S.emissiveMap.isVideoTexture===!0&&Yt.getTransfer(S.emissiveMap.colorSpace)===ee,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===be,flipSided:S.side===Te,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ft&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ft&&S.extensions.multiDraw===!0||_t)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return ve.vertexUv1s=c.has(1),ve.vertexUv2s=c.has(2),ve.vertexUv3s=c.has(3),c.clear(),ve}function u(S){const x=[];if(S.shaderID?x.push(S.shaderID):(x.push(S.customVertexShaderID),x.push(S.customFragmentShaderID)),S.defines!==void 0)for(const R in S.defines)x.push(R),x.push(S.defines[R]);return S.isRawShaderMaterial===!1&&(b(x,S),T(x,S),x.push(i.outputColorSpace)),x.push(S.customProgramCacheKey),x.join()}function b(S,x){S.push(x.precision),S.push(x.outputColorSpace),S.push(x.envMapMode),S.push(x.envMapCubeUVHeight),S.push(x.mapUv),S.push(x.alphaMapUv),S.push(x.lightMapUv),S.push(x.aoMapUv),S.push(x.bumpMapUv),S.push(x.normalMapUv),S.push(x.displacementMapUv),S.push(x.emissiveMapUv),S.push(x.metalnessMapUv),S.push(x.roughnessMapUv),S.push(x.anisotropyMapUv),S.push(x.clearcoatMapUv),S.push(x.clearcoatNormalMapUv),S.push(x.clearcoatRoughnessMapUv),S.push(x.iridescenceMapUv),S.push(x.iridescenceThicknessMapUv),S.push(x.sheenColorMapUv),S.push(x.sheenRoughnessMapUv),S.push(x.specularMapUv),S.push(x.specularColorMapUv),S.push(x.specularIntensityMapUv),S.push(x.transmissionMapUv),S.push(x.thicknessMapUv),S.push(x.combine),S.push(x.fogExp2),S.push(x.sizeAttenuation),S.push(x.morphTargetsCount),S.push(x.morphAttributeCount),S.push(x.numDirLights),S.push(x.numPointLights),S.push(x.numSpotLights),S.push(x.numSpotLightMaps),S.push(x.numHemiLights),S.push(x.numRectAreaLights),S.push(x.numDirLightShadows),S.push(x.numPointLightShadows),S.push(x.numSpotLightShadows),S.push(x.numSpotLightShadowsWithMaps),S.push(x.numLightProbes),S.push(x.shadowMapType),S.push(x.toneMapping),S.push(x.numClippingPlanes),S.push(x.numClipIntersection),S.push(x.depthPacking)}function T(S,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reverseDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),S.push(a.mask)}function y(S){const x=g[S.type];let R;if(x){const H=$e[x];R=sh.clone(H.uniforms)}else R=S.uniforms;return R}function L(S,x){let R;for(let H=0,F=d.length;H<F;H++){const Y=d[H];if(Y.cacheKey===x){R=Y,++R.usedTimes;break}}return R===void 0&&(R=new xp(i,x,S,s),d.push(R)),R}function A(S){if(--S.usedTimes===0){const x=d.indexOf(S);d[x]=d[d.length-1],d.pop(),S.destroy()}}function w(S){l.remove(S)}function C(){l.dispose()}return{getParameters:p,getProgramCacheKey:u,getUniforms:y,acquireProgram:L,releaseProgram:A,releaseShaderCache:w,programs:d,dispose:C}}function bp(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,l){i.get(o)[a]=l}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function Tp(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Ra(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Ca(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function o(f,h,m,g,_,p){let u=i[t];return u===void 0?(u={id:f.id,object:f,geometry:h,material:m,groupOrder:g,renderOrder:f.renderOrder,z:_,group:p},i[t]=u):(u.id=f.id,u.object=f,u.geometry=h,u.material=m,u.groupOrder=g,u.renderOrder=f.renderOrder,u.z=_,u.group=p),t++,u}function a(f,h,m,g,_,p){const u=o(f,h,m,g,_,p);m.transmission>0?n.push(u):m.transparent===!0?r.push(u):e.push(u)}function l(f,h,m,g,_,p){const u=o(f,h,m,g,_,p);m.transmission>0?n.unshift(u):m.transparent===!0?r.unshift(u):e.unshift(u)}function c(f,h){e.length>1&&e.sort(f||Tp),n.length>1&&n.sort(h||Ra),r.length>1&&r.sort(h||Ra)}function d(){for(let f=t,h=i.length;f<h;f++){const m=i[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:d,sort:c}}function wp(){let i=new WeakMap;function t(n,r){const s=i.get(n);let o;return s===void 0?(o=new Ca,i.set(n,[o])):r>=s.length?(o=new Ca,s.push(o)):o=s[r],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Ap(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new N,color:new Zt};break;case"SpotLight":e={position:new N,direction:new N,color:new Zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new Zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new Zt,groundColor:new Zt};break;case"RectAreaLight":e={color:new Zt,position:new N,halfWidth:new N,halfHeight:new N};break}return i[t.id]=e,e}}}function Rp(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Cp=0;function Pp(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Dp(i){const t=new Ap,e=Rp(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new N);const r=new N,s=new Kt,o=new Kt;function a(c){let d=0,f=0,h=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let m=0,g=0,_=0,p=0,u=0,b=0,T=0,y=0,L=0,A=0,w=0;c.sort(Pp);for(let S=0,x=c.length;S<x;S++){const R=c[S],H=R.color,F=R.intensity,Y=R.distance,Z=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)d+=H.r*F,f+=H.g*F,h+=H.b*F;else if(R.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(R.sh.coefficients[W],F);w++}else if(R.isDirectionalLight){const W=t.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const J=R.shadow,V=e.get(R);V.shadowIntensity=J.intensity,V.shadowBias=J.bias,V.shadowNormalBias=J.normalBias,V.shadowRadius=J.radius,V.shadowMapSize=J.mapSize,n.directionalShadow[m]=V,n.directionalShadowMap[m]=Z,n.directionalShadowMatrix[m]=R.shadow.matrix,b++}n.directional[m]=W,m++}else if(R.isSpotLight){const W=t.get(R);W.position.setFromMatrixPosition(R.matrixWorld),W.color.copy(H).multiplyScalar(F),W.distance=Y,W.coneCos=Math.cos(R.angle),W.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),W.decay=R.decay,n.spot[_]=W;const J=R.shadow;if(R.map&&(n.spotLightMap[L]=R.map,L++,J.updateMatrices(R),R.castShadow&&A++),n.spotLightMatrix[_]=J.matrix,R.castShadow){const V=e.get(R);V.shadowIntensity=J.intensity,V.shadowBias=J.bias,V.shadowNormalBias=J.normalBias,V.shadowRadius=J.radius,V.shadowMapSize=J.mapSize,n.spotShadow[_]=V,n.spotShadowMap[_]=Z,y++}_++}else if(R.isRectAreaLight){const W=t.get(R);W.color.copy(H).multiplyScalar(F),W.halfWidth.set(R.width*.5,0,0),W.halfHeight.set(0,R.height*.5,0),n.rectArea[p]=W,p++}else if(R.isPointLight){const W=t.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity),W.distance=R.distance,W.decay=R.decay,R.castShadow){const J=R.shadow,V=e.get(R);V.shadowIntensity=J.intensity,V.shadowBias=J.bias,V.shadowNormalBias=J.normalBias,V.shadowRadius=J.radius,V.shadowMapSize=J.mapSize,V.shadowCameraNear=J.camera.near,V.shadowCameraFar=J.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=Z,n.pointShadowMatrix[g]=R.shadow.matrix,T++}n.point[g]=W,g++}else if(R.isHemisphereLight){const W=t.get(R);W.skyColor.copy(R.color).multiplyScalar(F),W.groundColor.copy(R.groundColor).multiplyScalar(F),n.hemi[u]=W,u++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=rt.LTC_FLOAT_1,n.rectAreaLTC2=rt.LTC_FLOAT_2):(n.rectAreaLTC1=rt.LTC_HALF_1,n.rectAreaLTC2=rt.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=f,n.ambient[2]=h;const C=n.hash;(C.directionalLength!==m||C.pointLength!==g||C.spotLength!==_||C.rectAreaLength!==p||C.hemiLength!==u||C.numDirectionalShadows!==b||C.numPointShadows!==T||C.numSpotShadows!==y||C.numSpotMaps!==L||C.numLightProbes!==w)&&(n.directional.length=m,n.spot.length=_,n.rectArea.length=p,n.point.length=g,n.hemi.length=u,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=y+L-A,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=w,C.directionalLength=m,C.pointLength=g,C.spotLength=_,C.rectAreaLength=p,C.hemiLength=u,C.numDirectionalShadows=b,C.numPointShadows=T,C.numSpotShadows=y,C.numSpotMaps=L,C.numLightProbes=w,n.version=Cp++)}function l(c,d){let f=0,h=0,m=0,g=0,_=0;const p=d.matrixWorldInverse;for(let u=0,b=c.length;u<b;u++){const T=c[u];if(T.isDirectionalLight){const y=n.directional[f];y.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(p),f++}else if(T.isSpotLight){const y=n.spot[m];y.position.setFromMatrixPosition(T.matrixWorld),y.position.applyMatrix4(p),y.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(p),m++}else if(T.isRectAreaLight){const y=n.rectArea[g];y.position.setFromMatrixPosition(T.matrixWorld),y.position.applyMatrix4(p),o.identity(),s.copy(T.matrixWorld),s.premultiply(p),o.extractRotation(s),y.halfWidth.set(T.width*.5,0,0),y.halfHeight.set(0,T.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(T.isPointLight){const y=n.point[h];y.position.setFromMatrixPosition(T.matrixWorld),y.position.applyMatrix4(p),h++}else if(T.isHemisphereLight){const y=n.hemi[_];y.direction.setFromMatrixPosition(T.matrixWorld),y.direction.transformDirection(p),_++}}}return{setup:a,setupView:l,state:n}}function Pa(i){const t=new Dp(i),e=[],n=[];function r(d){c.camera=d,e.length=0,n.length=0}function s(d){e.push(d)}function o(d){n.push(d)}function a(){t.setup(e)}function l(d){t.setupView(e,d)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function Lp(i){let t=new WeakMap;function e(r,s=0){const o=t.get(r);let a;return o===void 0?(a=new Pa(i),t.set(r,[a])):s>=o.length?(a=new Pa(i),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class Up extends Qi{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=dc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Ip extends Qi{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Np=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Fp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Op(i,t,e){let n=new fl;const r=new Dt,s=new Dt,o=new he,a=new Up({depthPacking:fc}),l=new Ip,c={},d=e.maxTextureSize,f={[Nn]:Te,[Te]:Nn,[be]:be},h=new se({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Dt},radius:{value:4}},vertexShader:Np,fragmentShader:Fp}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const g=new fe;g.setAttribute("position",new Re(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new $t(g,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wa;let u=this.type;this.render=function(A,w,C){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;const S=i.getRenderTarget(),x=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),H=i.state;H.setBlending(Un),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const F=u!==dn&&this.type===dn,Y=u===dn&&this.type!==dn;for(let Z=0,W=A.length;Z<W;Z++){const J=A[Z],V=J.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const it=V.getFrameExtents();if(r.multiply(it),s.copy(V.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/it.x),r.x=s.x*it.x,V.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/it.y),r.y=s.y*it.y,V.mapSize.y=s.y)),V.map===null||F===!0||Y===!0){const yt=this.type!==dn?{minFilter:Se,magFilter:Se}:{};V.map!==null&&V.map.dispose(),V.map=new Sn(r.x,r.y,yt),V.map.texture.name=J.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();const dt=V.getViewportCount();for(let yt=0;yt<dt;yt++){const Nt=V.getViewport(yt);o.set(s.x*Nt.x,s.y*Nt.y,s.x*Nt.z,s.y*Nt.w),H.viewport(o),V.updateMatrices(J,yt),n=V.getFrustum(),y(w,C,V.camera,J,this.type)}V.isPointLightShadow!==!0&&this.type===dn&&b(V,C),V.needsUpdate=!1}u=this.type,p.needsUpdate=!1,i.setRenderTarget(S,x,R)};function b(A,w){const C=t.update(_);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Sn(r.x,r.y)),h.uniforms.shadow_pass.value=A.map.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(w,null,C,h,_,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(w,null,C,m,_,null)}function T(A,w,C,S){let x=null;const R=C.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(R!==void 0)x=R;else if(x=C.isPointLight===!0?l:a,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const H=x.uuid,F=w.uuid;let Y=c[H];Y===void 0&&(Y={},c[H]=Y);let Z=Y[F];Z===void 0&&(Z=x.clone(),Y[F]=Z,w.addEventListener("dispose",L)),x=Z}if(x.visible=w.visible,x.wireframe=w.wireframe,S===dn?x.side=w.shadowSide!==null?w.shadowSide:w.side:x.side=w.shadowSide!==null?w.shadowSide:f[w.side],x.alphaMap=w.alphaMap,x.alphaTest=w.alphaTest,x.map=w.map,x.clipShadows=w.clipShadows,x.clippingPlanes=w.clippingPlanes,x.clipIntersection=w.clipIntersection,x.displacementMap=w.displacementMap,x.displacementScale=w.displacementScale,x.displacementBias=w.displacementBias,x.wireframeLinewidth=w.wireframeLinewidth,x.linewidth=w.linewidth,C.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const H=i.properties.get(x);H.light=C}return x}function y(A,w,C,S,x){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&x===dn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,A.matrixWorld);const F=t.update(A),Y=A.material;if(Array.isArray(Y)){const Z=F.groups;for(let W=0,J=Z.length;W<J;W++){const V=Z[W],it=Y[V.materialIndex];if(it&&it.visible){const dt=T(A,it,S,x);A.onBeforeShadow(i,A,w,C,F,dt,V),i.renderBufferDirect(C,null,F,dt,A,V),A.onAfterShadow(i,A,w,C,F,dt,V)}}}else if(Y.visible){const Z=T(A,Y,S,x);A.onBeforeShadow(i,A,w,C,F,Z,null),i.renderBufferDirect(C,null,F,Z,A,null),A.onAfterShadow(i,A,w,C,F,Z,null)}}const H=A.children;for(let F=0,Y=H.length;F<Y;F++)y(H[F],w,C,S,x)}function L(A){A.target.removeEventListener("dispose",L);for(const C in c){const S=c[C],x=A.target.uuid;x in S&&(S[x].dispose(),delete S[x])}}}const Bp={[bs]:Ts,[ws]:Cs,[As]:Ps,[Ai]:Rs,[Ts]:bs,[Cs]:ws,[Ps]:As,[Rs]:Ai};function zp(i,t){function e(){let P=!1;const ot=new he;let X=null;const j=new he(0,0,0,0);return{setMask:function(ft){X!==ft&&!P&&(i.colorMask(ft,ft,ft,ft),X=ft)},setLocked:function(ft){P=ft},setClear:function(ft,ht,Ft,ce,ve){ve===!0&&(ft*=ce,ht*=ce,Ft*=ce),ot.set(ft,ht,Ft,ce),j.equals(ot)===!1&&(i.clearColor(ft,ht,Ft,ce),j.copy(ot))},reset:function(){P=!1,X=null,j.set(-1,0,0,0)}}}function n(){let P=!1,ot=!1,X=null,j=null,ft=null;return{setReversed:function(ht){if(ot!==ht){const Ft=t.get("EXT_clip_control");ot?Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.ZERO_TO_ONE_EXT):Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.NEGATIVE_ONE_TO_ONE_EXT);const ce=ft;ft=null,this.setClear(ce)}ot=ht},getReversed:function(){return ot},setTest:function(ht){ht?$(i.DEPTH_TEST):st(i.DEPTH_TEST)},setMask:function(ht){X!==ht&&!P&&(i.depthMask(ht),X=ht)},setFunc:function(ht){if(ot&&(ht=Bp[ht]),j!==ht){switch(ht){case bs:i.depthFunc(i.NEVER);break;case Ts:i.depthFunc(i.ALWAYS);break;case ws:i.depthFunc(i.LESS);break;case Ai:i.depthFunc(i.LEQUAL);break;case As:i.depthFunc(i.EQUAL);break;case Rs:i.depthFunc(i.GEQUAL);break;case Cs:i.depthFunc(i.GREATER);break;case Ps:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}j=ht}},setLocked:function(ht){P=ht},setClear:function(ht){ft!==ht&&(ot&&(ht=1-ht),i.clearDepth(ht),ft=ht)},reset:function(){P=!1,X=null,j=null,ft=null,ot=!1}}}function r(){let P=!1,ot=null,X=null,j=null,ft=null,ht=null,Ft=null,ce=null,ve=null;return{setTest:function(te){P||(te?$(i.STENCIL_TEST):st(i.STENCIL_TEST))},setMask:function(te){ot!==te&&!P&&(i.stencilMask(te),ot=te)},setFunc:function(te,We,sn){(X!==te||j!==We||ft!==sn)&&(i.stencilFunc(te,We,sn),X=te,j=We,ft=sn)},setOp:function(te,We,sn){(ht!==te||Ft!==We||ce!==sn)&&(i.stencilOp(te,We,sn),ht=te,Ft=We,ce=sn)},setLocked:function(te){P=te},setClear:function(te){ve!==te&&(i.clearStencil(te),ve=te)},reset:function(){P=!1,ot=null,X=null,j=null,ft=null,ht=null,Ft=null,ce=null,ve=null}}}const s=new e,o=new n,a=new r,l=new WeakMap,c=new WeakMap;let d={},f={},h=new WeakMap,m=[],g=null,_=!1,p=null,u=null,b=null,T=null,y=null,L=null,A=null,w=new Zt(0,0,0),C=0,S=!1,x=null,R=null,H=null,F=null,Y=null;const Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,J=0;const V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(V)[1]),W=J>=1):V.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),W=J>=2);let it=null,dt={};const yt=i.getParameter(i.SCISSOR_BOX),Nt=i.getParameter(i.VIEWPORT),jt=new he().fromArray(yt),O=new he().fromArray(Nt);function G(P,ot,X,j){const ft=new Uint8Array(4),ht=i.createTexture();i.bindTexture(P,ht),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ft=0;Ft<X;Ft++)P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY?i.texImage3D(ot,0,i.RGBA,1,1,j,0,i.RGBA,i.UNSIGNED_BYTE,ft):i.texImage2D(ot+Ft,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ft);return ht}const tt={};tt[i.TEXTURE_2D]=G(i.TEXTURE_2D,i.TEXTURE_2D,1),tt[i.TEXTURE_CUBE_MAP]=G(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),tt[i.TEXTURE_2D_ARRAY]=G(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),tt[i.TEXTURE_3D]=G(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),$(i.DEPTH_TEST),o.setFunc(Ai),xt(!1),At(Io),$(i.CULL_FACE),D(Un);function $(P){d[P]!==!0&&(i.enable(P),d[P]=!0)}function st(P){d[P]!==!1&&(i.disable(P),d[P]=!1)}function lt(P,ot){return f[P]!==ot?(i.bindFramebuffer(P,ot),f[P]=ot,P===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=ot),P===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=ot),!0):!1}function _t(P,ot){let X=m,j=!1;if(P){X=h.get(ot),X===void 0&&(X=[],h.set(ot,X));const ft=P.textures;if(X.length!==ft.length||X[0]!==i.COLOR_ATTACHMENT0){for(let ht=0,Ft=ft.length;ht<Ft;ht++)X[ht]=i.COLOR_ATTACHMENT0+ht;X.length=ft.length,j=!0}}else X[0]!==i.BACK&&(X[0]=i.BACK,j=!0);j&&i.drawBuffers(X)}function It(P){return g!==P?(i.useProgram(P),g=P,!0):!1}const wt={[qn]:i.FUNC_ADD,[zl]:i.FUNC_SUBTRACT,[kl]:i.FUNC_REVERSE_SUBTRACT};wt[Hl]=i.MIN,wt[Gl]=i.MAX;const Pt={[Vl]:i.ZERO,[Wl]:i.ONE,[Xl]:i.SRC_COLOR,[ys]:i.SRC_ALPHA,[$l]:i.SRC_ALPHA_SATURATE,[Kl]:i.DST_COLOR,[ql]:i.DST_ALPHA,[Yl]:i.ONE_MINUS_SRC_COLOR,[Es]:i.ONE_MINUS_SRC_ALPHA,[jl]:i.ONE_MINUS_DST_COLOR,[Zl]:i.ONE_MINUS_DST_ALPHA,[Jl]:i.CONSTANT_COLOR,[Ql]:i.ONE_MINUS_CONSTANT_COLOR,[tc]:i.CONSTANT_ALPHA,[ec]:i.ONE_MINUS_CONSTANT_ALPHA};function D(P,ot,X,j,ft,ht,Ft,ce,ve,te){if(P===Un){_===!0&&(st(i.BLEND),_=!1);return}if(_===!1&&($(i.BLEND),_=!0),P!==Bl){if(P!==p||te!==S){if((u!==qn||y!==qn)&&(i.blendEquation(i.FUNC_ADD),u=qn,y=qn),te)switch(P){case Ei:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case wi:i.blendFunc(i.ONE,i.ONE);break;case No:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Fo:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Ei:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case wi:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case No:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Fo:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}b=null,T=null,L=null,A=null,w.set(0,0,0),C=0,p=P,S=te}return}ft=ft||ot,ht=ht||X,Ft=Ft||j,(ot!==u||ft!==y)&&(i.blendEquationSeparate(wt[ot],wt[ft]),u=ot,y=ft),(X!==b||j!==T||ht!==L||Ft!==A)&&(i.blendFuncSeparate(Pt[X],Pt[j],Pt[ht],Pt[Ft]),b=X,T=j,L=ht,A=Ft),(ce.equals(w)===!1||ve!==C)&&(i.blendColor(ce.r,ce.g,ce.b,ve),w.copy(ce),C=ve),p=P,S=!1}function ct(P,ot){P.side===be?st(i.CULL_FACE):$(i.CULL_FACE);let X=P.side===Te;ot&&(X=!X),xt(X),P.blending===Ei&&P.transparent===!1?D(Un):D(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),o.setFunc(P.depthFunc),o.setTest(P.depthTest),o.setMask(P.depthWrite),s.setMask(P.colorWrite);const j=P.stencilWrite;a.setTest(j),j&&(a.setMask(P.stencilWriteMask),a.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),a.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Ht(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?$(i.SAMPLE_ALPHA_TO_COVERAGE):st(i.SAMPLE_ALPHA_TO_COVERAGE)}function xt(P){x!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),x=P)}function At(P){P!==Nl?($(i.CULL_FACE),P!==R&&(P===Io?i.cullFace(i.BACK):P===Fl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):st(i.CULL_FACE),R=P}function vt(P){P!==H&&(W&&i.lineWidth(P),H=P)}function Ht(P,ot,X){P?($(i.POLYGON_OFFSET_FILL),(F!==ot||Y!==X)&&(i.polygonOffset(ot,X),F=ot,Y=X)):st(i.POLYGON_OFFSET_FILL)}function St(P){P?$(i.SCISSOR_TEST):st(i.SCISSOR_TEST)}function E(P){P===void 0&&(P=i.TEXTURE0+Z-1),it!==P&&(i.activeTexture(P),it=P)}function v(P,ot,X){X===void 0&&(it===null?X=i.TEXTURE0+Z-1:X=it);let j=dt[X];j===void 0&&(j={type:void 0,texture:void 0},dt[X]=j),(j.type!==P||j.texture!==ot)&&(it!==X&&(i.activeTexture(X),it=X),i.bindTexture(P,ot||tt[P]),j.type=P,j.texture=ot)}function B(){const P=dt[it];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function K(){try{i.compressedTexImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Q(){try{i.compressedTexImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function q(){try{i.texSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Mt(){try{i.texSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function at(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function pt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Wt(){try{i.texStorage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function et(){try{i.texStorage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function mt(){try{i.texImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ct(){try{i.texImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Lt(P){jt.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),jt.copy(P))}function gt(P){O.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),O.copy(P))}function Vt(P,ot){let X=c.get(ot);X===void 0&&(X=new WeakMap,c.set(ot,X));let j=X.get(P);j===void 0&&(j=i.getUniformBlockIndex(ot,P.name),X.set(P,j))}function zt(P,ot){const j=c.get(ot).get(P);l.get(ot)!==j&&(i.uniformBlockBinding(ot,j,P.__bindingPointIndex),l.set(ot,j))}function ie(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},it=null,dt={},f={},h=new WeakMap,m=[],g=null,_=!1,p=null,u=null,b=null,T=null,y=null,L=null,A=null,w=new Zt(0,0,0),C=0,S=!1,x=null,R=null,H=null,F=null,Y=null,jt.set(0,0,i.canvas.width,i.canvas.height),O.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:$,disable:st,bindFramebuffer:lt,drawBuffers:_t,useProgram:It,setBlending:D,setMaterial:ct,setFlipSided:xt,setCullFace:At,setLineWidth:vt,setPolygonOffset:Ht,setScissorTest:St,activeTexture:E,bindTexture:v,unbindTexture:B,compressedTexImage2D:K,compressedTexImage3D:Q,texImage2D:mt,texImage3D:Ct,updateUBOMapping:Vt,uniformBlockBinding:zt,texStorage2D:Wt,texStorage3D:et,texSubImage2D:q,texSubImage3D:Mt,compressedTexSubImage2D:at,compressedTexSubImage3D:pt,scissor:Lt,viewport:gt,reset:ie}}function Da(i,t,e,n){const r=kp(n);switch(e){case ja:return i*t;case Ja:return i*t;case Qa:return i*t*2;case po:return i*t/r.components*r.byteLength;case mo:return i*t/r.components*r.byteLength;case tl:return i*t*2/r.components*r.byteLength;case go:return i*t*2/r.components*r.byteLength;case $a:return i*t*3/r.components*r.byteLength;case Be:return i*t*4/r.components*r.byteLength;case vo:return i*t*4/r.components*r.byteLength;case Dr:case Lr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ur:case Ir:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Fs:case Bs:return Math.max(i,16)*Math.max(t,8)/4;case Ns:case Os:return Math.max(i,8)*Math.max(t,8)/2;case zs:case ks:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Hs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Gs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Vs:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ws:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Xs:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ys:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case qs:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Zs:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ks:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case js:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case $s:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Js:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Qs:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case to:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case eo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Nr:case no:case io:return Math.ceil(i/4)*Math.ceil(t/4)*16;case el:case ro:return Math.ceil(i/4)*Math.ceil(t/4)*8;case so:case oo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function kp(i){switch(i){case Mn:case qa:return{byteLength:1,components:1};case $i:case Za:case Qn:return{byteLength:2,components:1};case uo:case fo:return{byteLength:2,components:4};case Fn:case ho:case Qe:return{byteLength:4,components:1};case Ka:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Hp(i,t,e,n,r,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Dt,d=new WeakMap;let f;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,v){return m?new OffscreenCanvas(E,v):zr("canvas")}function _(E,v,B){let K=1;const Q=St(E);if((Q.width>B||Q.height>B)&&(K=B/Math.max(Q.width,Q.height)),K<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const q=Math.floor(K*Q.width),Mt=Math.floor(K*Q.height);f===void 0&&(f=g(q,Mt));const at=v?g(q,Mt):f;return at.width=q,at.height=Mt,at.getContext("2d").drawImage(E,0,0,q,Mt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+q+"x"+Mt+")."),at}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),E;return E}function p(E){return E.generateMipmaps}function u(E){i.generateMipmap(E)}function b(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(E,v,B,K,Q=!1){if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let q=v;if(v===i.RED&&(B===i.FLOAT&&(q=i.R32F),B===i.HALF_FLOAT&&(q=i.R16F),B===i.UNSIGNED_BYTE&&(q=i.R8)),v===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(q=i.R8UI),B===i.UNSIGNED_SHORT&&(q=i.R16UI),B===i.UNSIGNED_INT&&(q=i.R32UI),B===i.BYTE&&(q=i.R8I),B===i.SHORT&&(q=i.R16I),B===i.INT&&(q=i.R32I)),v===i.RG&&(B===i.FLOAT&&(q=i.RG32F),B===i.HALF_FLOAT&&(q=i.RG16F),B===i.UNSIGNED_BYTE&&(q=i.RG8)),v===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(q=i.RG8UI),B===i.UNSIGNED_SHORT&&(q=i.RG16UI),B===i.UNSIGNED_INT&&(q=i.RG32UI),B===i.BYTE&&(q=i.RG8I),B===i.SHORT&&(q=i.RG16I),B===i.INT&&(q=i.RG32I)),v===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(q=i.RGB8UI),B===i.UNSIGNED_SHORT&&(q=i.RGB16UI),B===i.UNSIGNED_INT&&(q=i.RGB32UI),B===i.BYTE&&(q=i.RGB8I),B===i.SHORT&&(q=i.RGB16I),B===i.INT&&(q=i.RGB32I)),v===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(q=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(q=i.RGBA16UI),B===i.UNSIGNED_INT&&(q=i.RGBA32UI),B===i.BYTE&&(q=i.RGBA8I),B===i.SHORT&&(q=i.RGBA16I),B===i.INT&&(q=i.RGBA32I)),v===i.RGB&&B===i.UNSIGNED_INT_5_9_9_9_REV&&(q=i.RGB9_E5),v===i.RGBA){const Mt=Q?Gr:Yt.getTransfer(K);B===i.FLOAT&&(q=i.RGBA32F),B===i.HALF_FLOAT&&(q=i.RGBA16F),B===i.UNSIGNED_BYTE&&(q=Mt===ee?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(q=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(q=i.RGB5_A1)}return(q===i.R16F||q===i.R32F||q===i.RG16F||q===i.RG32F||q===i.RGBA16F||q===i.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function y(E,v){let B;return E?v===null||v===Fn||v===Pi?B=i.DEPTH24_STENCIL8:v===Qe?B=i.DEPTH32F_STENCIL8:v===$i&&(B=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Fn||v===Pi?B=i.DEPTH_COMPONENT24:v===Qe?B=i.DEPTH_COMPONENT32F:v===$i&&(B=i.DEPTH_COMPONENT16),B}function L(E,v){return p(E)===!0||E.isFramebufferTexture&&E.minFilter!==Se&&E.minFilter!==Oe?Math.log2(Math.max(v.width,v.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?v.mipmaps.length:1}function A(E){const v=E.target;v.removeEventListener("dispose",A),C(v),v.isVideoTexture&&d.delete(v)}function w(E){const v=E.target;v.removeEventListener("dispose",w),x(v)}function C(E){const v=n.get(E);if(v.__webglInit===void 0)return;const B=E.source,K=h.get(B);if(K){const Q=K[v.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&S(E),Object.keys(K).length===0&&h.delete(B)}n.remove(E)}function S(E){const v=n.get(E);i.deleteTexture(v.__webglTexture);const B=E.source,K=h.get(B);delete K[v.__cacheKey],o.memory.textures--}function x(E){const v=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(v.__webglFramebuffer[K]))for(let Q=0;Q<v.__webglFramebuffer[K].length;Q++)i.deleteFramebuffer(v.__webglFramebuffer[K][Q]);else i.deleteFramebuffer(v.__webglFramebuffer[K]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[K])}else{if(Array.isArray(v.__webglFramebuffer))for(let K=0;K<v.__webglFramebuffer.length;K++)i.deleteFramebuffer(v.__webglFramebuffer[K]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let K=0;K<v.__webglColorRenderbuffer.length;K++)v.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[K]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const B=E.textures;for(let K=0,Q=B.length;K<Q;K++){const q=n.get(B[K]);q.__webglTexture&&(i.deleteTexture(q.__webglTexture),o.memory.textures--),n.remove(B[K])}n.remove(E)}let R=0;function H(){R=0}function F(){const E=R;return E>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+r.maxTextures),R+=1,E}function Y(E){const v=[];return v.push(E.wrapS),v.push(E.wrapT),v.push(E.wrapR||0),v.push(E.magFilter),v.push(E.minFilter),v.push(E.anisotropy),v.push(E.internalFormat),v.push(E.format),v.push(E.type),v.push(E.generateMipmaps),v.push(E.premultiplyAlpha),v.push(E.flipY),v.push(E.unpackAlignment),v.push(E.colorSpace),v.join()}function Z(E,v){const B=n.get(E);if(E.isVideoTexture&&vt(E),E.isRenderTargetTexture===!1&&E.version>0&&B.__version!==E.version){const K=E.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{O(B,E,v);return}}e.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+v)}function W(E,v){const B=n.get(E);if(E.version>0&&B.__version!==E.version){O(B,E,v);return}e.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+v)}function J(E,v){const B=n.get(E);if(E.version>0&&B.__version!==E.version){O(B,E,v);return}e.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+v)}function V(E,v){const B=n.get(E);if(E.version>0&&B.__version!==E.version){G(B,E,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+v)}const it={[Us]:i.REPEAT,[Kn]:i.CLAMP_TO_EDGE,[Is]:i.MIRRORED_REPEAT},dt={[Se]:i.NEAREST,[uc]:i.NEAREST_MIPMAP_NEAREST,[rr]:i.NEAREST_MIPMAP_LINEAR,[Oe]:i.LINEAR,[Yr]:i.LINEAR_MIPMAP_NEAREST,[jn]:i.LINEAR_MIPMAP_LINEAR},yt={[gc]:i.NEVER,[yc]:i.ALWAYS,[vc]:i.LESS,[nl]:i.LEQUAL,[_c]:i.EQUAL,[Sc]:i.GEQUAL,[xc]:i.GREATER,[Mc]:i.NOTEQUAL};function Nt(E,v){if(v.type===Qe&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===Oe||v.magFilter===Yr||v.magFilter===rr||v.magFilter===jn||v.minFilter===Oe||v.minFilter===Yr||v.minFilter===rr||v.minFilter===jn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,it[v.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,it[v.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,it[v.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,dt[v.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,dt[v.minFilter]),v.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,yt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Se||v.minFilter!==rr&&v.minFilter!==jn||v.type===Qe&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const B=t.get("EXT_texture_filter_anisotropic");i.texParameterf(E,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function jt(E,v){let B=!1;E.__webglInit===void 0&&(E.__webglInit=!0,v.addEventListener("dispose",A));const K=v.source;let Q=h.get(K);Q===void 0&&(Q={},h.set(K,Q));const q=Y(v);if(q!==E.__cacheKey){Q[q]===void 0&&(Q[q]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,B=!0),Q[q].usedTimes++;const Mt=Q[E.__cacheKey];Mt!==void 0&&(Q[E.__cacheKey].usedTimes--,Mt.usedTimes===0&&S(v)),E.__cacheKey=q,E.__webglTexture=Q[q].texture}return B}function O(E,v,B){let K=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(K=i.TEXTURE_3D);const Q=jt(E,v),q=v.source;e.bindTexture(K,E.__webglTexture,i.TEXTURE0+B);const Mt=n.get(q);if(q.version!==Mt.__version||Q===!0){e.activeTexture(i.TEXTURE0+B);const at=Yt.getPrimaries(Yt.workingColorSpace),pt=v.colorSpace===Ln?null:Yt.getPrimaries(v.colorSpace),Wt=v.colorSpace===Ln||at===pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt);let et=_(v.image,!1,r.maxTextureSize);et=Ht(v,et);const mt=s.convert(v.format,v.colorSpace),Ct=s.convert(v.type);let Lt=T(v.internalFormat,mt,Ct,v.colorSpace,v.isVideoTexture);Nt(K,v);let gt;const Vt=v.mipmaps,zt=v.isVideoTexture!==!0,ie=Mt.__version===void 0||Q===!0,P=q.dataReady,ot=L(v,et);if(v.isDepthTexture)Lt=y(v.format===Di,v.type),ie&&(zt?e.texStorage2D(i.TEXTURE_2D,1,Lt,et.width,et.height):e.texImage2D(i.TEXTURE_2D,0,Lt,et.width,et.height,0,mt,Ct,null));else if(v.isDataTexture)if(Vt.length>0){zt&&ie&&e.texStorage2D(i.TEXTURE_2D,ot,Lt,Vt[0].width,Vt[0].height);for(let X=0,j=Vt.length;X<j;X++)gt=Vt[X],zt?P&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,gt.width,gt.height,mt,Ct,gt.data):e.texImage2D(i.TEXTURE_2D,X,Lt,gt.width,gt.height,0,mt,Ct,gt.data);v.generateMipmaps=!1}else zt?(ie&&e.texStorage2D(i.TEXTURE_2D,ot,Lt,et.width,et.height),P&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,et.width,et.height,mt,Ct,et.data)):e.texImage2D(i.TEXTURE_2D,0,Lt,et.width,et.height,0,mt,Ct,et.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){zt&&ie&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ot,Lt,Vt[0].width,Vt[0].height,et.depth);for(let X=0,j=Vt.length;X<j;X++)if(gt=Vt[X],v.format!==Be)if(mt!==null)if(zt){if(P)if(v.layerUpdates.size>0){const ft=Da(gt.width,gt.height,v.format,v.type);for(const ht of v.layerUpdates){const Ft=gt.data.subarray(ht*ft/gt.data.BYTES_PER_ELEMENT,(ht+1)*ft/gt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,ht,gt.width,gt.height,1,mt,Ft)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,gt.width,gt.height,et.depth,mt,gt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,X,Lt,gt.width,gt.height,et.depth,0,gt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else zt?P&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,gt.width,gt.height,et.depth,mt,Ct,gt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,X,Lt,gt.width,gt.height,et.depth,0,mt,Ct,gt.data)}else{zt&&ie&&e.texStorage2D(i.TEXTURE_2D,ot,Lt,Vt[0].width,Vt[0].height);for(let X=0,j=Vt.length;X<j;X++)gt=Vt[X],v.format!==Be?mt!==null?zt?P&&e.compressedTexSubImage2D(i.TEXTURE_2D,X,0,0,gt.width,gt.height,mt,gt.data):e.compressedTexImage2D(i.TEXTURE_2D,X,Lt,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):zt?P&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,gt.width,gt.height,mt,Ct,gt.data):e.texImage2D(i.TEXTURE_2D,X,Lt,gt.width,gt.height,0,mt,Ct,gt.data)}else if(v.isDataArrayTexture)if(zt){if(ie&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ot,Lt,et.width,et.height,et.depth),P)if(v.layerUpdates.size>0){const X=Da(et.width,et.height,v.format,v.type);for(const j of v.layerUpdates){const ft=et.data.subarray(j*X/et.data.BYTES_PER_ELEMENT,(j+1)*X/et.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,j,et.width,et.height,1,mt,Ct,ft)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,mt,Ct,et.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Lt,et.width,et.height,et.depth,0,mt,Ct,et.data);else if(v.isData3DTexture)zt?(ie&&e.texStorage3D(i.TEXTURE_3D,ot,Lt,et.width,et.height,et.depth),P&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,mt,Ct,et.data)):e.texImage3D(i.TEXTURE_3D,0,Lt,et.width,et.height,et.depth,0,mt,Ct,et.data);else if(v.isFramebufferTexture){if(ie)if(zt)e.texStorage2D(i.TEXTURE_2D,ot,Lt,et.width,et.height);else{let X=et.width,j=et.height;for(let ft=0;ft<ot;ft++)e.texImage2D(i.TEXTURE_2D,ft,Lt,X,j,0,mt,Ct,null),X>>=1,j>>=1}}else if(Vt.length>0){if(zt&&ie){const X=St(Vt[0]);e.texStorage2D(i.TEXTURE_2D,ot,Lt,X.width,X.height)}for(let X=0,j=Vt.length;X<j;X++)gt=Vt[X],zt?P&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,mt,Ct,gt):e.texImage2D(i.TEXTURE_2D,X,Lt,mt,Ct,gt);v.generateMipmaps=!1}else if(zt){if(ie){const X=St(et);e.texStorage2D(i.TEXTURE_2D,ot,Lt,X.width,X.height)}P&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,mt,Ct,et)}else e.texImage2D(i.TEXTURE_2D,0,Lt,mt,Ct,et);p(v)&&u(K),Mt.__version=q.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function G(E,v,B){if(v.image.length!==6)return;const K=jt(E,v),Q=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+B);const q=n.get(Q);if(Q.version!==q.__version||K===!0){e.activeTexture(i.TEXTURE0+B);const Mt=Yt.getPrimaries(Yt.workingColorSpace),at=v.colorSpace===Ln?null:Yt.getPrimaries(v.colorSpace),pt=v.colorSpace===Ln||Mt===at?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);const Wt=v.isCompressedTexture||v.image[0].isCompressedTexture,et=v.image[0]&&v.image[0].isDataTexture,mt=[];for(let j=0;j<6;j++)!Wt&&!et?mt[j]=_(v.image[j],!0,r.maxCubemapSize):mt[j]=et?v.image[j].image:v.image[j],mt[j]=Ht(v,mt[j]);const Ct=mt[0],Lt=s.convert(v.format,v.colorSpace),gt=s.convert(v.type),Vt=T(v.internalFormat,Lt,gt,v.colorSpace),zt=v.isVideoTexture!==!0,ie=q.__version===void 0||K===!0,P=Q.dataReady;let ot=L(v,Ct);Nt(i.TEXTURE_CUBE_MAP,v);let X;if(Wt){zt&&ie&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ot,Vt,Ct.width,Ct.height);for(let j=0;j<6;j++){X=mt[j].mipmaps;for(let ft=0;ft<X.length;ft++){const ht=X[ft];v.format!==Be?Lt!==null?zt?P&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ft,0,0,ht.width,ht.height,Lt,ht.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ft,Vt,ht.width,ht.height,0,ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):zt?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ft,0,0,ht.width,ht.height,Lt,gt,ht.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ft,Vt,ht.width,ht.height,0,Lt,gt,ht.data)}}}else{if(X=v.mipmaps,zt&&ie){X.length>0&&ot++;const j=St(mt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ot,Vt,j.width,j.height)}for(let j=0;j<6;j++)if(et){zt?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,mt[j].width,mt[j].height,Lt,gt,mt[j].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Vt,mt[j].width,mt[j].height,0,Lt,gt,mt[j].data);for(let ft=0;ft<X.length;ft++){const Ft=X[ft].image[j].image;zt?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ft+1,0,0,Ft.width,Ft.height,Lt,gt,Ft.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ft+1,Vt,Ft.width,Ft.height,0,Lt,gt,Ft.data)}}else{zt?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Lt,gt,mt[j]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Vt,Lt,gt,mt[j]);for(let ft=0;ft<X.length;ft++){const ht=X[ft];zt?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ft+1,0,0,Lt,gt,ht.image[j]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ft+1,Vt,Lt,gt,ht.image[j])}}}p(v)&&u(i.TEXTURE_CUBE_MAP),q.__version=Q.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function tt(E,v,B,K,Q,q){const Mt=s.convert(B.format,B.colorSpace),at=s.convert(B.type),pt=T(B.internalFormat,Mt,at,B.colorSpace),Wt=n.get(v),et=n.get(B);if(et.__renderTarget=v,!Wt.__hasExternalTextures){const mt=Math.max(1,v.width>>q),Ct=Math.max(1,v.height>>q);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?e.texImage3D(Q,q,pt,mt,Ct,v.depth,0,Mt,at,null):e.texImage2D(Q,q,pt,mt,Ct,0,Mt,at,null)}e.bindFramebuffer(i.FRAMEBUFFER,E),At(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,Q,et.__webglTexture,0,xt(v)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,Q,et.__webglTexture,q),e.bindFramebuffer(i.FRAMEBUFFER,null)}function $(E,v,B){if(i.bindRenderbuffer(i.RENDERBUFFER,E),v.depthBuffer){const K=v.depthTexture,Q=K&&K.isDepthTexture?K.type:null,q=y(v.stencilBuffer,Q),Mt=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=xt(v);At(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,at,q,v.width,v.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,at,q,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,q,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Mt,i.RENDERBUFFER,E)}else{const K=v.textures;for(let Q=0;Q<K.length;Q++){const q=K[Q],Mt=s.convert(q.format,q.colorSpace),at=s.convert(q.type),pt=T(q.internalFormat,Mt,at,q.colorSpace),Wt=xt(v);B&&At(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Wt,pt,v.width,v.height):At(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Wt,pt,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,pt,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function st(E,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,E),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=n.get(v.depthTexture);K.__renderTarget=v,(!K.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),Z(v.depthTexture,0);const Q=K.__webglTexture,q=xt(v);if(v.depthTexture.format===$n)At(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0);else if(v.depthTexture.format===Di)At(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function lt(E){const v=n.get(E),B=E.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==E.depthTexture){const K=E.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),K){const Q=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,K.removeEventListener("dispose",Q)};K.addEventListener("dispose",Q),v.__depthDisposeCallback=Q}v.__boundDepthTexture=K}if(E.depthTexture&&!v.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");st(v.__webglFramebuffer,E)}else if(B){v.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[K]),v.__webglDepthbuffer[K]===void 0)v.__webglDepthbuffer[K]=i.createRenderbuffer(),$(v.__webglDepthbuffer[K],E,!1);else{const Q=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=v.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,q)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),$(v.__webglDepthbuffer,E,!1);else{const K=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,Q)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function _t(E,v,B){const K=n.get(E);v!==void 0&&tt(K.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&lt(E)}function It(E){const v=E.texture,B=n.get(E),K=n.get(v);E.addEventListener("dispose",w);const Q=E.textures,q=E.isWebGLCubeRenderTarget===!0,Mt=Q.length>1;if(Mt||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=v.version,o.memory.textures++),q){B.__webglFramebuffer=[];for(let at=0;at<6;at++)if(v.mipmaps&&v.mipmaps.length>0){B.__webglFramebuffer[at]=[];for(let pt=0;pt<v.mipmaps.length;pt++)B.__webglFramebuffer[at][pt]=i.createFramebuffer()}else B.__webglFramebuffer[at]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){B.__webglFramebuffer=[];for(let at=0;at<v.mipmaps.length;at++)B.__webglFramebuffer[at]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(Mt)for(let at=0,pt=Q.length;at<pt;at++){const Wt=n.get(Q[at]);Wt.__webglTexture===void 0&&(Wt.__webglTexture=i.createTexture(),o.memory.textures++)}if(E.samples>0&&At(E)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let at=0;at<Q.length;at++){const pt=Q[at];B.__webglColorRenderbuffer[at]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[at]);const Wt=s.convert(pt.format,pt.colorSpace),et=s.convert(pt.type),mt=T(pt.internalFormat,Wt,et,pt.colorSpace,E.isXRRenderTarget===!0),Ct=xt(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ct,mt,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.RENDERBUFFER,B.__webglColorRenderbuffer[at])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),$(B.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(q){e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),Nt(i.TEXTURE_CUBE_MAP,v);for(let at=0;at<6;at++)if(v.mipmaps&&v.mipmaps.length>0)for(let pt=0;pt<v.mipmaps.length;pt++)tt(B.__webglFramebuffer[at][pt],E,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,pt);else tt(B.__webglFramebuffer[at],E,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);p(v)&&u(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Mt){for(let at=0,pt=Q.length;at<pt;at++){const Wt=Q[at],et=n.get(Wt);e.bindTexture(i.TEXTURE_2D,et.__webglTexture),Nt(i.TEXTURE_2D,Wt),tt(B.__webglFramebuffer,E,Wt,i.COLOR_ATTACHMENT0+at,i.TEXTURE_2D,0),p(Wt)&&u(i.TEXTURE_2D)}e.unbindTexture()}else{let at=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(at=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(at,K.__webglTexture),Nt(at,v),v.mipmaps&&v.mipmaps.length>0)for(let pt=0;pt<v.mipmaps.length;pt++)tt(B.__webglFramebuffer[pt],E,v,i.COLOR_ATTACHMENT0,at,pt);else tt(B.__webglFramebuffer,E,v,i.COLOR_ATTACHMENT0,at,0);p(v)&&u(at),e.unbindTexture()}E.depthBuffer&&lt(E)}function wt(E){const v=E.textures;for(let B=0,K=v.length;B<K;B++){const Q=v[B];if(p(Q)){const q=b(E),Mt=n.get(Q).__webglTexture;e.bindTexture(q,Mt),u(q),e.unbindTexture()}}}const Pt=[],D=[];function ct(E){if(E.samples>0){if(At(E)===!1){const v=E.textures,B=E.width,K=E.height;let Q=i.COLOR_BUFFER_BIT;const q=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Mt=n.get(E),at=v.length>1;if(at)for(let pt=0;pt<v.length;pt++)e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let pt=0;pt<v.length;pt++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),at){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Mt.__webglColorRenderbuffer[pt]);const Wt=n.get(v[pt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Wt,0)}i.blitFramebuffer(0,0,B,K,0,0,B,K,Q,i.NEAREST),l===!0&&(Pt.length=0,D.length=0,Pt.push(i.COLOR_ATTACHMENT0+pt),E.depthBuffer&&E.resolveDepthBuffer===!1&&(Pt.push(q),D.push(q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,D)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Pt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),at)for(let pt=0;pt<v.length;pt++){e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.RENDERBUFFER,Mt.__webglColorRenderbuffer[pt]);const Wt=n.get(v[pt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.TEXTURE_2D,Wt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const v=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function xt(E){return Math.min(r.maxSamples,E.samples)}function At(E){const v=n.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function vt(E){const v=o.render.frame;d.get(E)!==v&&(d.set(E,v),E.update())}function Ht(E,v){const B=E.colorSpace,K=E.format,Q=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||B!==Ii&&B!==Ln&&(Yt.getTransfer(B)===ee?(K!==Be||Q!==Mn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),v}function St(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=H,this.setTexture2D=Z,this.setTexture2DArray=W,this.setTexture3D=J,this.setTextureCube=V,this.rebindTextures=_t,this.setupRenderTarget=It,this.updateRenderTargetMipmap=wt,this.updateMultisampleRenderTarget=ct,this.setupDepthRenderbuffer=lt,this.setupFrameBufferTexture=tt,this.useMultisampledRTT=At}function Gp(i,t){function e(n,r=Ln){let s;const o=Yt.getTransfer(r);if(n===Mn)return i.UNSIGNED_BYTE;if(n===uo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===fo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ka)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===qa)return i.BYTE;if(n===Za)return i.SHORT;if(n===$i)return i.UNSIGNED_SHORT;if(n===ho)return i.INT;if(n===Fn)return i.UNSIGNED_INT;if(n===Qe)return i.FLOAT;if(n===Qn)return i.HALF_FLOAT;if(n===ja)return i.ALPHA;if(n===$a)return i.RGB;if(n===Be)return i.RGBA;if(n===Ja)return i.LUMINANCE;if(n===Qa)return i.LUMINANCE_ALPHA;if(n===$n)return i.DEPTH_COMPONENT;if(n===Di)return i.DEPTH_STENCIL;if(n===po)return i.RED;if(n===mo)return i.RED_INTEGER;if(n===tl)return i.RG;if(n===go)return i.RG_INTEGER;if(n===vo)return i.RGBA_INTEGER;if(n===Dr||n===Lr||n===Ur||n===Ir)if(o===ee)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Dr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Lr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ur)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ir)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Dr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Lr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ur)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ir)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ns||n===Fs||n===Os||n===Bs)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Ns)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Fs)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Os)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Bs)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===zs||n===ks||n===Hs)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===zs||n===ks)return o===ee?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Hs)return o===ee?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Gs||n===Vs||n===Ws||n===Xs||n===Ys||n===qs||n===Zs||n===Ks||n===js||n===$s||n===Js||n===Qs||n===to||n===eo)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Gs)return o===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Vs)return o===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ws)return o===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Xs)return o===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ys)return o===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===qs)return o===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Zs)return o===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ks)return o===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===js)return o===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===$s)return o===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Js)return o===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Qs)return o===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===to)return o===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===eo)return o===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Nr||n===no||n===io)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Nr)return o===ee?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===no)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===io)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===el||n===ro||n===so||n===oo)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Nr)return s.COMPRESSED_RED_RGTC1_EXT;if(n===ro)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===so)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===oo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Pi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class Vp extends He{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Le extends Ae{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Wp={type:"move"};class xs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Le,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Le,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Le,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const p=e.getJointPose(_,n),u=this._getHandJoint(c,_);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const d=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=d.position.distanceTo(f.position),m=.02,g=.005;c.inputState.pinching&&h>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Wp)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Le;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Xp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Yp=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class qp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const r=new we,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new se({vertexShader:Xp,fragmentShader:Yp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new $t(new ni(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Zp extends ti{constructor(t,e){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,d=null,f=null,h=null,m=null,g=null;const _=new qp,p=e.getContextAttributes();let u=null,b=null;const T=[],y=[],L=new Dt;let A=null;const w=new He;w.viewport=new he;const C=new He;C.viewport=new he;const S=[w,C],x=new Vp;let R=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(O){let G=T[O];return G===void 0&&(G=new xs,T[O]=G),G.getTargetRaySpace()},this.getControllerGrip=function(O){let G=T[O];return G===void 0&&(G=new xs,T[O]=G),G.getGripSpace()},this.getHand=function(O){let G=T[O];return G===void 0&&(G=new xs,T[O]=G),G.getHandSpace()};function F(O){const G=y.indexOf(O.inputSource);if(G===-1)return;const tt=T[G];tt!==void 0&&(tt.update(O.inputSource,O.frame,c||o),tt.dispatchEvent({type:O.type,data:O.inputSource}))}function Y(){r.removeEventListener("select",F),r.removeEventListener("selectstart",F),r.removeEventListener("selectend",F),r.removeEventListener("squeeze",F),r.removeEventListener("squeezestart",F),r.removeEventListener("squeezeend",F),r.removeEventListener("end",Y),r.removeEventListener("inputsourceschange",Z);for(let O=0;O<T.length;O++){const G=y[O];G!==null&&(y[O]=null,T[O].disconnect(G))}R=null,H=null,_.reset(),t.setRenderTarget(u),m=null,h=null,f=null,r=null,b=null,jt.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(O){s=O,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){a=O,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(O){c=O},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(O){if(r=O,r!==null){if(u=t.getRenderTarget(),r.addEventListener("select",F),r.addEventListener("selectstart",F),r.addEventListener("selectend",F),r.addEventListener("squeeze",F),r.addEventListener("squeezestart",F),r.addEventListener("squeezeend",F),r.addEventListener("end",Y),r.addEventListener("inputsourceschange",Z),p.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(L),r.renderState.layers===void 0){const G={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,e,G),r.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),b=new Sn(m.framebufferWidth,m.framebufferHeight,{format:Be,type:Mn,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let G=null,tt=null,$=null;p.depth&&($=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,G=p.stencil?Di:$n,tt=p.stencil?Pi:Fn);const st={colorFormat:e.RGBA8,depthFormat:$,scaleFactor:s};f=new XRWebGLBinding(r,e),h=f.createProjectionLayer(st),r.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),b=new Sn(h.textureWidth,h.textureHeight,{format:Be,type:Mn,depthTexture:new yo(h.textureWidth,h.textureHeight,tt,void 0,void 0,void 0,void 0,void 0,void 0,G),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),jt.setContext(r),jt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Z(O){for(let G=0;G<O.removed.length;G++){const tt=O.removed[G],$=y.indexOf(tt);$>=0&&(y[$]=null,T[$].disconnect(tt))}for(let G=0;G<O.added.length;G++){const tt=O.added[G];let $=y.indexOf(tt);if($===-1){for(let lt=0;lt<T.length;lt++)if(lt>=y.length){y.push(tt),$=lt;break}else if(y[lt]===null){y[lt]=tt,$=lt;break}if($===-1)break}const st=T[$];st&&st.connect(tt)}}const W=new N,J=new N;function V(O,G,tt){W.setFromMatrixPosition(G.matrixWorld),J.setFromMatrixPosition(tt.matrixWorld);const $=W.distanceTo(J),st=G.projectionMatrix.elements,lt=tt.projectionMatrix.elements,_t=st[14]/(st[10]-1),It=st[14]/(st[10]+1),wt=(st[9]+1)/st[5],Pt=(st[9]-1)/st[5],D=(st[8]-1)/st[0],ct=(lt[8]+1)/lt[0],xt=_t*D,At=_t*ct,vt=$/(-D+ct),Ht=vt*-D;if(G.matrixWorld.decompose(O.position,O.quaternion,O.scale),O.translateX(Ht),O.translateZ(vt),O.matrixWorld.compose(O.position,O.quaternion,O.scale),O.matrixWorldInverse.copy(O.matrixWorld).invert(),st[10]===-1)O.projectionMatrix.copy(G.projectionMatrix),O.projectionMatrixInverse.copy(G.projectionMatrixInverse);else{const St=_t+vt,E=It+vt,v=xt-Ht,B=At+($-Ht),K=wt*It/E*St,Q=Pt*It/E*St;O.projectionMatrix.makePerspective(v,B,K,Q,St,E),O.projectionMatrixInverse.copy(O.projectionMatrix).invert()}}function it(O,G){G===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices(G.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.updateCamera=function(O){if(r===null)return;let G=O.near,tt=O.far;_.texture!==null&&(_.depthNear>0&&(G=_.depthNear),_.depthFar>0&&(tt=_.depthFar)),x.near=C.near=w.near=G,x.far=C.far=w.far=tt,(R!==x.near||H!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),R=x.near,H=x.far),w.layers.mask=O.layers.mask|2,C.layers.mask=O.layers.mask|4,x.layers.mask=w.layers.mask|C.layers.mask;const $=O.parent,st=x.cameras;it(x,$);for(let lt=0;lt<st.length;lt++)it(st[lt],$);st.length===2?V(x,w,C):x.projectionMatrix.copy(w.projectionMatrix),dt(O,x,$)};function dt(O,G,tt){tt===null?O.matrix.copy(G.matrixWorld):(O.matrix.copy(tt.matrixWorld),O.matrix.invert(),O.matrix.multiply(G.matrixWorld)),O.matrix.decompose(O.position,O.quaternion,O.scale),O.updateMatrixWorld(!0),O.projectionMatrix.copy(G.projectionMatrix),O.projectionMatrixInverse.copy(G.projectionMatrixInverse),O.isPerspectiveCamera&&(O.fov=Ji*2*Math.atan(1/O.projectionMatrix.elements[5]),O.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(O){l=O,h!==null&&(h.fixedFoveation=O),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=O)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(x)};let yt=null;function Nt(O,G){if(d=G.getViewerPose(c||o),g=G,d!==null){const tt=d.views;m!==null&&(t.setRenderTargetFramebuffer(b,m.framebuffer),t.setRenderTarget(b));let $=!1;tt.length!==x.cameras.length&&(x.cameras.length=0,$=!0);for(let lt=0;lt<tt.length;lt++){const _t=tt[lt];let It=null;if(m!==null)It=m.getViewport(_t);else{const Pt=f.getViewSubImage(h,_t);It=Pt.viewport,lt===0&&(t.setRenderTargetTextures(b,Pt.colorTexture,h.ignoreDepthValues?void 0:Pt.depthStencilTexture),t.setRenderTarget(b))}let wt=S[lt];wt===void 0&&(wt=new He,wt.layers.enable(lt),wt.viewport=new he,S[lt]=wt),wt.matrix.fromArray(_t.transform.matrix),wt.matrix.decompose(wt.position,wt.quaternion,wt.scale),wt.projectionMatrix.fromArray(_t.projectionMatrix),wt.projectionMatrixInverse.copy(wt.projectionMatrix).invert(),wt.viewport.set(It.x,It.y,It.width,It.height),lt===0&&(x.matrix.copy(wt.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),$===!0&&x.cameras.push(wt)}const st=r.enabledFeatures;if(st&&st.includes("depth-sensing")){const lt=f.getDepthInformation(tt[0]);lt&&lt.isValid&&lt.texture&&_.init(t,lt,r.renderState)}}for(let tt=0;tt<T.length;tt++){const $=y[tt],st=T[tt];$!==null&&st!==void 0&&st.update($,G,c||o)}yt&&yt(O,G),G.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:G}),g=null}const jt=new pl;jt.setAnimationLoop(Nt),this.setAnimationLoop=function(O){yt=O},this.dispose=function(){}}}const Wn=new rn,Kp=new Kt;function jp(i,t){function e(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function n(p,u){u.color.getRGB(p.fogColor.value,hl(i)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function r(p,u,b,T,y){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(p,u):u.isMeshToonMaterial?(s(p,u),f(p,u)):u.isMeshPhongMaterial?(s(p,u),d(p,u)):u.isMeshStandardMaterial?(s(p,u),h(p,u),u.isMeshPhysicalMaterial&&m(p,u,y)):u.isMeshMatcapMaterial?(s(p,u),g(p,u)):u.isMeshDepthMaterial?s(p,u):u.isMeshDistanceMaterial?(s(p,u),_(p,u)):u.isMeshNormalMaterial?s(p,u):u.isLineBasicMaterial?(o(p,u),u.isLineDashedMaterial&&a(p,u)):u.isPointsMaterial?l(p,u,b,T):u.isSpriteMaterial?c(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,e(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,e(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===Te&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,e(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===Te&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,e(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,e(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,e(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const b=t.get(u),T=b.envMap,y=b.envMapRotation;T&&(p.envMap.value=T,Wn.copy(y),Wn.x*=-1,Wn.y*=-1,Wn.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Wn.y*=-1,Wn.z*=-1),p.envMapRotation.value.setFromMatrix4(Kp.makeRotationFromEuler(Wn)),p.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap&&(p.lightMap.value=u.lightMap,p.lightMapIntensity.value=u.lightMapIntensity,e(u.lightMap,p.lightMapTransform)),u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,e(u.aoMap,p.aoMapTransform))}function o(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,e(u.map,p.mapTransform))}function a(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function l(p,u,b,T){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*b,p.scale.value=T*.5,u.map&&(p.map.value=u.map,e(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function c(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,e(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function d(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function f(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function h(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,e(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,e(u.roughnessMap,p.roughnessMapTransform)),u.envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,b){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,e(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,e(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,e(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,e(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,e(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Te&&p.clearcoatNormalScale.value.negate())),u.dispersion>0&&(p.dispersion.value=u.dispersion),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,e(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,e(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,e(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,e(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,e(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,e(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,e(u.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,u){u.matcap&&(p.matcap.value=u.matcap)}function _(p,u){const b=t.get(u).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function $p(i,t,e,n){let r={},s={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,T){const y=T.program;n.uniformBlockBinding(b,y)}function c(b,T){let y=r[b.id];y===void 0&&(g(b),y=d(b),r[b.id]=y,b.addEventListener("dispose",p));const L=T.program;n.updateUBOMapping(b,L);const A=t.render.frame;s[b.id]!==A&&(h(b),s[b.id]=A)}function d(b){const T=f();b.__bindingPointIndex=T;const y=i.createBuffer(),L=b.__size,A=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,L,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,y),y}function f(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(b){const T=r[b.id],y=b.uniforms,L=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let A=0,w=y.length;A<w;A++){const C=Array.isArray(y[A])?y[A]:[y[A]];for(let S=0,x=C.length;S<x;S++){const R=C[S];if(m(R,A,S,L)===!0){const H=R.__offset,F=Array.isArray(R.value)?R.value:[R.value];let Y=0;for(let Z=0;Z<F.length;Z++){const W=F[Z],J=_(W);typeof W=="number"||typeof W=="boolean"?(R.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,H+Y,R.__data)):W.isMatrix3?(R.__data[0]=W.elements[0],R.__data[1]=W.elements[1],R.__data[2]=W.elements[2],R.__data[3]=0,R.__data[4]=W.elements[3],R.__data[5]=W.elements[4],R.__data[6]=W.elements[5],R.__data[7]=0,R.__data[8]=W.elements[6],R.__data[9]=W.elements[7],R.__data[10]=W.elements[8],R.__data[11]=0):(W.toArray(R.__data,Y),Y+=J.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,H,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(b,T,y,L){const A=b.value,w=T+"_"+y;if(L[w]===void 0)return typeof A=="number"||typeof A=="boolean"?L[w]=A:L[w]=A.clone(),!0;{const C=L[w];if(typeof A=="number"||typeof A=="boolean"){if(C!==A)return L[w]=A,!0}else if(C.equals(A)===!1)return C.copy(A),!0}return!1}function g(b){const T=b.uniforms;let y=0;const L=16;for(let w=0,C=T.length;w<C;w++){const S=Array.isArray(T[w])?T[w]:[T[w]];for(let x=0,R=S.length;x<R;x++){const H=S[x],F=Array.isArray(H.value)?H.value:[H.value];for(let Y=0,Z=F.length;Y<Z;Y++){const W=F[Y],J=_(W),V=y%L,it=V%J.boundary,dt=V+it;y+=it,dt!==0&&L-dt<J.storage&&(y+=L-dt),H.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=y,y+=J.storage}}}const A=y%L;return A>0&&(y+=L-A),b.__size=y,b.__cache={},this}function _(b){const T={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(T.boundary=4,T.storage=4):b.isVector2?(T.boundary=8,T.storage=8):b.isVector3||b.isColor?(T.boundary=16,T.storage=12):b.isVector4?(T.boundary=16,T.storage=16):b.isMatrix3?(T.boundary=48,T.storage=48):b.isMatrix4?(T.boundary=64,T.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),T}function p(b){const T=b.target;T.removeEventListener("dispose",p);const y=o.indexOf(T.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function u(){for(const b in r)i.deleteBuffer(r[b]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}class Jp{constructor(t={}){const{canvas:e=zc(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:h=!1}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;const g=new Uint32Array(4),_=new Int32Array(4);let p=null,u=null;const b=[],T=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Fe,this.toneMapping=In,this.toneMappingExposure=1;const y=this;let L=!1,A=0,w=0,C=null,S=-1,x=null;const R=new he,H=new he;let F=null;const Y=new Zt(0);let Z=0,W=e.width,J=e.height,V=1,it=null,dt=null;const yt=new he(0,0,W,J),Nt=new he(0,0,W,J);let jt=!1;const O=new fl;let G=!1,tt=!1;const $=new Kt,st=new Kt,lt=new N,_t=new he,It={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let wt=!1;function Pt(){return C===null?V:1}let D=n;function ct(M,U){return e.getContext(M,U)}try{const M={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${co}`),e.addEventListener("webglcontextlost",j,!1),e.addEventListener("webglcontextrestored",ft,!1),e.addEventListener("webglcontextcreationerror",ht,!1),D===null){const U="webgl2";if(D=ct(U,M),D===null)throw ct(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let xt,At,vt,Ht,St,E,v,B,K,Q,q,Mt,at,pt,Wt,et,mt,Ct,Lt,gt,Vt,zt,ie,P;function ot(){xt=new nf(D),xt.init(),zt=new Gp(D,xt),At=new jd(D,xt,t,zt),vt=new zp(D,xt),At.reverseDepthBuffer&&h&&vt.buffers.depth.setReversed(!0),Ht=new of(D),St=new bp,E=new Hp(D,xt,vt,St,At,zt,Ht),v=new Jd(y),B=new ef(y),K=new dh(D),ie=new Zd(D,K),Q=new rf(D,K,Ht,ie),q=new lf(D,Q,K,Ht),Lt=new af(D,At,E),et=new $d(St),Mt=new Ep(y,v,B,xt,At,ie,et),at=new jp(y,St),pt=new wp,Wt=new Lp(xt),Ct=new qd(y,v,B,vt,q,m,l),mt=new Op(y,q,At),P=new $p(D,Ht,At,vt),gt=new Kd(D,xt,Ht),Vt=new sf(D,xt,Ht),Ht.programs=Mt.programs,y.capabilities=At,y.extensions=xt,y.properties=St,y.renderLists=pt,y.shadowMap=mt,y.state=vt,y.info=Ht}ot();const X=new Zp(y,D);this.xr=X,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const M=xt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=xt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(M){M!==void 0&&(V=M,this.setSize(W,J,!1))},this.getSize=function(M){return M.set(W,J)},this.setSize=function(M,U,z=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=M,J=U,e.width=Math.floor(M*V),e.height=Math.floor(U*V),z===!0&&(e.style.width=M+"px",e.style.height=U+"px"),this.setViewport(0,0,M,U)},this.getDrawingBufferSize=function(M){return M.set(W*V,J*V).floor()},this.setDrawingBufferSize=function(M,U,z){W=M,J=U,V=z,e.width=Math.floor(M*z),e.height=Math.floor(U*z),this.setViewport(0,0,M,U)},this.getCurrentViewport=function(M){return M.copy(R)},this.getViewport=function(M){return M.copy(yt)},this.setViewport=function(M,U,z,k){M.isVector4?yt.set(M.x,M.y,M.z,M.w):yt.set(M,U,z,k),vt.viewport(R.copy(yt).multiplyScalar(V).round())},this.getScissor=function(M){return M.copy(Nt)},this.setScissor=function(M,U,z,k){M.isVector4?Nt.set(M.x,M.y,M.z,M.w):Nt.set(M,U,z,k),vt.scissor(H.copy(Nt).multiplyScalar(V).round())},this.getScissorTest=function(){return jt},this.setScissorTest=function(M){vt.setScissorTest(jt=M)},this.setOpaqueSort=function(M){it=M},this.setTransparentSort=function(M){dt=M},this.getClearColor=function(M){return M.copy(Ct.getClearColor())},this.setClearColor=function(){Ct.setClearColor.apply(Ct,arguments)},this.getClearAlpha=function(){return Ct.getClearAlpha()},this.setClearAlpha=function(){Ct.setClearAlpha.apply(Ct,arguments)},this.clear=function(M=!0,U=!0,z=!0){let k=0;if(M){let I=!1;if(C!==null){const nt=C.texture.format;I=nt===vo||nt===go||nt===mo}if(I){const nt=C.texture.type,ut=nt===Mn||nt===Fn||nt===$i||nt===Pi||nt===uo||nt===fo,Et=Ct.getClearColor(),bt=Ct.getClearAlpha(),Ut=Et.r,Ot=Et.g,Tt=Et.b;ut?(g[0]=Ut,g[1]=Ot,g[2]=Tt,g[3]=bt,D.clearBufferuiv(D.COLOR,0,g)):(_[0]=Ut,_[1]=Ot,_[2]=Tt,_[3]=bt,D.clearBufferiv(D.COLOR,0,_))}else k|=D.COLOR_BUFFER_BIT}U&&(k|=D.DEPTH_BUFFER_BIT),z&&(k|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",j,!1),e.removeEventListener("webglcontextrestored",ft,!1),e.removeEventListener("webglcontextcreationerror",ht,!1),pt.dispose(),Wt.dispose(),St.dispose(),v.dispose(),B.dispose(),q.dispose(),ie.dispose(),P.dispose(),Mt.dispose(),X.dispose(),X.removeEventListener("sessionstart",wo),X.removeEventListener("sessionend",Ao),Bn.stop()};function j(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function ft(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const M=Ht.autoReset,U=mt.enabled,z=mt.autoUpdate,k=mt.needsUpdate,I=mt.type;ot(),Ht.autoReset=M,mt.enabled=U,mt.autoUpdate=z,mt.needsUpdate=k,mt.type=I}function ht(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Ft(M){const U=M.target;U.removeEventListener("dispose",Ft),ce(U)}function ce(M){ve(M),St.remove(M)}function ve(M){const U=St.get(M).programs;U!==void 0&&(U.forEach(function(z){Mt.releaseProgram(z)}),M.isShaderMaterial&&Mt.releaseShaderCache(M))}this.renderBufferDirect=function(M,U,z,k,I,nt){U===null&&(U=It);const ut=I.isMesh&&I.matrixWorld.determinant()<0,Et=Ll(M,U,z,k,I);vt.setMaterial(k,ut);let bt=z.index,Ut=1;if(k.wireframe===!0){if(bt=Q.getWireframeAttribute(z),bt===void 0)return;Ut=2}const Ot=z.drawRange,Tt=z.attributes.position;let qt=Ot.start*Ut,re=(Ot.start+Ot.count)*Ut;nt!==null&&(qt=Math.max(qt,nt.start*Ut),re=Math.min(re,(nt.start+nt.count)*Ut)),bt!==null?(qt=Math.max(qt,0),re=Math.min(re,bt.count)):Tt!=null&&(qt=Math.max(qt,0),re=Math.min(re,Tt.count));const oe=re-qt;if(oe<0||oe===1/0)return;ie.setup(I,k,Et,z,bt);let Pe,Jt=gt;if(bt!==null&&(Pe=K.get(bt),Jt=Vt,Jt.setIndex(Pe)),I.isMesh)k.wireframe===!0?(vt.setLineWidth(k.wireframeLinewidth*Pt()),Jt.setMode(D.LINES)):Jt.setMode(D.TRIANGLES);else if(I.isLine){let Rt=k.linewidth;Rt===void 0&&(Rt=1),vt.setLineWidth(Rt*Pt()),I.isLineSegments?Jt.setMode(D.LINES):I.isLineLoop?Jt.setMode(D.LINE_LOOP):Jt.setMode(D.LINE_STRIP)}else I.isPoints?Jt.setMode(D.POINTS):I.isSprite&&Jt.setMode(D.TRIANGLES);if(I.isBatchedMesh)if(I._multiDrawInstances!==null)Jt.renderMultiDrawInstances(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount,I._multiDrawInstances);else if(xt.get("WEBGL_multi_draw"))Jt.renderMultiDraw(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount);else{const Rt=I._multiDrawStarts,on=I._multiDrawCounts,Qt=I._multiDrawCount,Xe=bt?K.get(bt).bytesPerElement:1,ii=St.get(k).currentProgram.getUniforms();for(let Ue=0;Ue<Qt;Ue++)ii.setValue(D,"_gl_DrawID",Ue),Jt.render(Rt[Ue]/Xe,on[Ue])}else if(I.isInstancedMesh)Jt.renderInstances(qt,oe,I.count);else if(z.isInstancedBufferGeometry){const Rt=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,on=Math.min(z.instanceCount,Rt);Jt.renderInstances(qt,oe,on)}else Jt.render(qt,oe)};function te(M,U,z){M.transparent===!0&&M.side===be&&M.forceSinglePass===!1?(M.side=Te,M.needsUpdate=!0,ir(M,U,z),M.side=Nn,M.needsUpdate=!0,ir(M,U,z),M.side=be):ir(M,U,z)}this.compile=function(M,U,z=null){z===null&&(z=M),u=Wt.get(z),u.init(U),T.push(u),z.traverseVisible(function(I){I.isLight&&I.layers.test(U.layers)&&(u.pushLight(I),I.castShadow&&u.pushShadow(I))}),M!==z&&M.traverseVisible(function(I){I.isLight&&I.layers.test(U.layers)&&(u.pushLight(I),I.castShadow&&u.pushShadow(I))}),u.setupLights();const k=new Set;return M.traverse(function(I){if(!(I.isMesh||I.isPoints||I.isLine||I.isSprite))return;const nt=I.material;if(nt)if(Array.isArray(nt))for(let ut=0;ut<nt.length;ut++){const Et=nt[ut];te(Et,z,I),k.add(Et)}else te(nt,z,I),k.add(nt)}),T.pop(),u=null,k},this.compileAsync=function(M,U,z=null){const k=this.compile(M,U,z);return new Promise(I=>{function nt(){if(k.forEach(function(ut){St.get(ut).currentProgram.isReady()&&k.delete(ut)}),k.size===0){I(M);return}setTimeout(nt,10)}xt.get("KHR_parallel_shader_compile")!==null?nt():setTimeout(nt,10)})};let We=null;function sn(M){We&&We(M)}function wo(){Bn.stop()}function Ao(){Bn.start()}const Bn=new pl;Bn.setAnimationLoop(sn),typeof self<"u"&&Bn.setContext(self),this.setAnimationLoop=function(M){We=M,X.setAnimationLoop(M),M===null?Bn.stop():Bn.start()},X.addEventListener("sessionstart",wo),X.addEventListener("sessionend",Ao),this.render=function(M,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(U),U=X.getCamera()),M.isScene===!0&&M.onBeforeRender(y,M,U,C),u=Wt.get(M,T.length),u.init(U),T.push(u),st.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),O.setFromProjectionMatrix(st),tt=this.localClippingEnabled,G=et.init(this.clippingPlanes,tt),p=pt.get(M,b.length),p.init(),b.push(p),X.enabled===!0&&X.isPresenting===!0){const nt=y.xr.getDepthSensingMesh();nt!==null&&Xr(nt,U,-1/0,y.sortObjects)}Xr(M,U,0,y.sortObjects),p.finish(),y.sortObjects===!0&&p.sort(it,dt),wt=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,wt&&Ct.addToRenderList(p,M),this.info.render.frame++,G===!0&&et.beginShadows();const z=u.state.shadowsArray;mt.render(z,M,U),G===!0&&et.endShadows(),this.info.autoReset===!0&&this.info.reset();const k=p.opaque,I=p.transmissive;if(u.setupLights(),U.isArrayCamera){const nt=U.cameras;if(I.length>0)for(let ut=0,Et=nt.length;ut<Et;ut++){const bt=nt[ut];Co(k,I,M,bt)}wt&&Ct.render(M);for(let ut=0,Et=nt.length;ut<Et;ut++){const bt=nt[ut];Ro(p,M,bt,bt.viewport)}}else I.length>0&&Co(k,I,M,U),wt&&Ct.render(M),Ro(p,M,U);C!==null&&(E.updateMultisampleRenderTarget(C),E.updateRenderTargetMipmap(C)),M.isScene===!0&&M.onAfterRender(y,M,U),ie.resetDefaultState(),S=-1,x=null,T.pop(),T.length>0?(u=T[T.length-1],G===!0&&et.setGlobalState(y.clippingPlanes,u.state.camera)):u=null,b.pop(),b.length>0?p=b[b.length-1]:p=null};function Xr(M,U,z,k){if(M.visible===!1)return;if(M.layers.test(U.layers)){if(M.isGroup)z=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(U);else if(M.isLight)u.pushLight(M),M.castShadow&&u.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||O.intersectsSprite(M)){k&&_t.setFromMatrixPosition(M.matrixWorld).applyMatrix4(st);const ut=q.update(M),Et=M.material;Et.visible&&p.push(M,ut,Et,z,_t.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||O.intersectsObject(M))){const ut=q.update(M),Et=M.material;if(k&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),_t.copy(M.boundingSphere.center)):(ut.boundingSphere===null&&ut.computeBoundingSphere(),_t.copy(ut.boundingSphere.center)),_t.applyMatrix4(M.matrixWorld).applyMatrix4(st)),Array.isArray(Et)){const bt=ut.groups;for(let Ut=0,Ot=bt.length;Ut<Ot;Ut++){const Tt=bt[Ut],qt=Et[Tt.materialIndex];qt&&qt.visible&&p.push(M,ut,qt,z,_t.z,Tt)}}else Et.visible&&p.push(M,ut,Et,z,_t.z,null)}}const nt=M.children;for(let ut=0,Et=nt.length;ut<Et;ut++)Xr(nt[ut],U,z,k)}function Ro(M,U,z,k){const I=M.opaque,nt=M.transmissive,ut=M.transparent;u.setupLightsView(z),G===!0&&et.setGlobalState(y.clippingPlanes,z),k&&vt.viewport(R.copy(k)),I.length>0&&nr(I,U,z),nt.length>0&&nr(nt,U,z),ut.length>0&&nr(ut,U,z),vt.buffers.depth.setTest(!0),vt.buffers.depth.setMask(!0),vt.buffers.color.setMask(!0),vt.setPolygonOffset(!1)}function Co(M,U,z,k){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[k.id]===void 0&&(u.state.transmissionRenderTarget[k.id]=new Sn(1,1,{generateMipmaps:!0,type:xt.has("EXT_color_buffer_half_float")||xt.has("EXT_color_buffer_float")?Qn:Mn,minFilter:jn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Yt.workingColorSpace}));const nt=u.state.transmissionRenderTarget[k.id],ut=k.viewport||R;nt.setSize(ut.z,ut.w);const Et=y.getRenderTarget();y.setRenderTarget(nt),y.getClearColor(Y),Z=y.getClearAlpha(),Z<1&&y.setClearColor(16777215,.5),y.clear(),wt&&Ct.render(z);const bt=y.toneMapping;y.toneMapping=In;const Ut=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),u.setupLightsView(k),G===!0&&et.setGlobalState(y.clippingPlanes,k),nr(M,z,k),E.updateMultisampleRenderTarget(nt),E.updateRenderTargetMipmap(nt),xt.has("WEBGL_multisampled_render_to_texture")===!1){let Ot=!1;for(let Tt=0,qt=U.length;Tt<qt;Tt++){const re=U[Tt],oe=re.object,Pe=re.geometry,Jt=re.material,Rt=re.group;if(Jt.side===be&&oe.layers.test(k.layers)){const on=Jt.side;Jt.side=Te,Jt.needsUpdate=!0,Po(oe,z,k,Pe,Jt,Rt),Jt.side=on,Jt.needsUpdate=!0,Ot=!0}}Ot===!0&&(E.updateMultisampleRenderTarget(nt),E.updateRenderTargetMipmap(nt))}y.setRenderTarget(Et),y.setClearColor(Y,Z),Ut!==void 0&&(k.viewport=Ut),y.toneMapping=bt}function nr(M,U,z){const k=U.isScene===!0?U.overrideMaterial:null;for(let I=0,nt=M.length;I<nt;I++){const ut=M[I],Et=ut.object,bt=ut.geometry,Ut=k===null?ut.material:k,Ot=ut.group;Et.layers.test(z.layers)&&Po(Et,U,z,bt,Ut,Ot)}}function Po(M,U,z,k,I,nt){M.onBeforeRender(y,U,z,k,I,nt),M.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),I.onBeforeRender(y,U,z,k,M,nt),I.transparent===!0&&I.side===be&&I.forceSinglePass===!1?(I.side=Te,I.needsUpdate=!0,y.renderBufferDirect(z,U,k,I,M,nt),I.side=Nn,I.needsUpdate=!0,y.renderBufferDirect(z,U,k,I,M,nt),I.side=be):y.renderBufferDirect(z,U,k,I,M,nt),M.onAfterRender(y,U,z,k,I,nt)}function ir(M,U,z){U.isScene!==!0&&(U=It);const k=St.get(M),I=u.state.lights,nt=u.state.shadowsArray,ut=I.state.version,Et=Mt.getParameters(M,I.state,nt,U,z),bt=Mt.getProgramCacheKey(Et);let Ut=k.programs;k.environment=M.isMeshStandardMaterial?U.environment:null,k.fog=U.fog,k.envMap=(M.isMeshStandardMaterial?B:v).get(M.envMap||k.environment),k.envMapRotation=k.environment!==null&&M.envMap===null?U.environmentRotation:M.envMapRotation,Ut===void 0&&(M.addEventListener("dispose",Ft),Ut=new Map,k.programs=Ut);let Ot=Ut.get(bt);if(Ot!==void 0){if(k.currentProgram===Ot&&k.lightsStateVersion===ut)return Lo(M,Et),Ot}else Et.uniforms=Mt.getUniforms(M),M.onBeforeCompile(Et,y),Ot=Mt.acquireProgram(Et,bt),Ut.set(bt,Ot),k.uniforms=Et.uniforms;const Tt=k.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Tt.clippingPlanes=et.uniform),Lo(M,Et),k.needsLights=Il(M),k.lightsStateVersion=ut,k.needsLights&&(Tt.ambientLightColor.value=I.state.ambient,Tt.lightProbe.value=I.state.probe,Tt.directionalLights.value=I.state.directional,Tt.directionalLightShadows.value=I.state.directionalShadow,Tt.spotLights.value=I.state.spot,Tt.spotLightShadows.value=I.state.spotShadow,Tt.rectAreaLights.value=I.state.rectArea,Tt.ltc_1.value=I.state.rectAreaLTC1,Tt.ltc_2.value=I.state.rectAreaLTC2,Tt.pointLights.value=I.state.point,Tt.pointLightShadows.value=I.state.pointShadow,Tt.hemisphereLights.value=I.state.hemi,Tt.directionalShadowMap.value=I.state.directionalShadowMap,Tt.directionalShadowMatrix.value=I.state.directionalShadowMatrix,Tt.spotShadowMap.value=I.state.spotShadowMap,Tt.spotLightMatrix.value=I.state.spotLightMatrix,Tt.spotLightMap.value=I.state.spotLightMap,Tt.pointShadowMap.value=I.state.pointShadowMap,Tt.pointShadowMatrix.value=I.state.pointShadowMatrix),k.currentProgram=Ot,k.uniformsList=null,Ot}function Do(M){if(M.uniformsList===null){const U=M.currentProgram.getUniforms();M.uniformsList=Fr.seqWithValue(U.seq,M.uniforms)}return M.uniformsList}function Lo(M,U){const z=St.get(M);z.outputColorSpace=U.outputColorSpace,z.batching=U.batching,z.batchingColor=U.batchingColor,z.instancing=U.instancing,z.instancingColor=U.instancingColor,z.instancingMorph=U.instancingMorph,z.skinning=U.skinning,z.morphTargets=U.morphTargets,z.morphNormals=U.morphNormals,z.morphColors=U.morphColors,z.morphTargetsCount=U.morphTargetsCount,z.numClippingPlanes=U.numClippingPlanes,z.numIntersection=U.numClipIntersection,z.vertexAlphas=U.vertexAlphas,z.vertexTangents=U.vertexTangents,z.toneMapping=U.toneMapping}function Ll(M,U,z,k,I){U.isScene!==!0&&(U=It),E.resetTextureUnits();const nt=U.fog,ut=k.isMeshStandardMaterial?U.environment:null,Et=C===null?y.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Ii,bt=(k.isMeshStandardMaterial?B:v).get(k.envMap||ut),Ut=k.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Ot=!!z.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Tt=!!z.morphAttributes.position,qt=!!z.morphAttributes.normal,re=!!z.morphAttributes.color;let oe=In;k.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(oe=y.toneMapping);const Pe=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Jt=Pe!==void 0?Pe.length:0,Rt=St.get(k),on=u.state.lights;if(G===!0&&(tt===!0||M!==x)){const ze=M===x&&k.id===S;et.setState(k,M,ze)}let Qt=!1;k.version===Rt.__version?(Rt.needsLights&&Rt.lightsStateVersion!==on.state.version||Rt.outputColorSpace!==Et||I.isBatchedMesh&&Rt.batching===!1||!I.isBatchedMesh&&Rt.batching===!0||I.isBatchedMesh&&Rt.batchingColor===!0&&I.colorTexture===null||I.isBatchedMesh&&Rt.batchingColor===!1&&I.colorTexture!==null||I.isInstancedMesh&&Rt.instancing===!1||!I.isInstancedMesh&&Rt.instancing===!0||I.isSkinnedMesh&&Rt.skinning===!1||!I.isSkinnedMesh&&Rt.skinning===!0||I.isInstancedMesh&&Rt.instancingColor===!0&&I.instanceColor===null||I.isInstancedMesh&&Rt.instancingColor===!1&&I.instanceColor!==null||I.isInstancedMesh&&Rt.instancingMorph===!0&&I.morphTexture===null||I.isInstancedMesh&&Rt.instancingMorph===!1&&I.morphTexture!==null||Rt.envMap!==bt||k.fog===!0&&Rt.fog!==nt||Rt.numClippingPlanes!==void 0&&(Rt.numClippingPlanes!==et.numPlanes||Rt.numIntersection!==et.numIntersection)||Rt.vertexAlphas!==Ut||Rt.vertexTangents!==Ot||Rt.morphTargets!==Tt||Rt.morphNormals!==qt||Rt.morphColors!==re||Rt.toneMapping!==oe||Rt.morphTargetsCount!==Jt)&&(Qt=!0):(Qt=!0,Rt.__version=k.version);let Xe=Rt.currentProgram;Qt===!0&&(Xe=ir(k,U,I));let ii=!1,Ue=!1,Bi=!1;const ae=Xe.getUniforms(),je=Rt.uniforms;if(vt.useProgram(Xe.program)&&(ii=!0,Ue=!0,Bi=!0),k.id!==S&&(S=k.id,Ue=!0),ii||x!==M){vt.buffers.depth.getReversed()?($.copy(M.projectionMatrix),Hc($),Gc($),ae.setValue(D,"projectionMatrix",$)):ae.setValue(D,"projectionMatrix",M.projectionMatrix),ae.setValue(D,"viewMatrix",M.matrixWorldInverse);const En=ae.map.cameraPosition;En!==void 0&&En.setValue(D,lt.setFromMatrixPosition(M.matrixWorld)),At.logarithmicDepthBuffer&&ae.setValue(D,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&ae.setValue(D,"isOrthographic",M.isOrthographicCamera===!0),x!==M&&(x=M,Ue=!0,Bi=!0)}if(I.isSkinnedMesh){ae.setOptional(D,I,"bindMatrix"),ae.setOptional(D,I,"bindMatrixInverse");const ze=I.skeleton;ze&&(ze.boneTexture===null&&ze.computeBoneTexture(),ae.setValue(D,"boneTexture",ze.boneTexture,E))}I.isBatchedMesh&&(ae.setOptional(D,I,"batchingTexture"),ae.setValue(D,"batchingTexture",I._matricesTexture,E),ae.setOptional(D,I,"batchingIdTexture"),ae.setValue(D,"batchingIdTexture",I._indirectTexture,E),ae.setOptional(D,I,"batchingColorTexture"),I._colorsTexture!==null&&ae.setValue(D,"batchingColorTexture",I._colorsTexture,E));const zi=z.morphAttributes;if((zi.position!==void 0||zi.normal!==void 0||zi.color!==void 0)&&Lt.update(I,z,Xe),(Ue||Rt.receiveShadow!==I.receiveShadow)&&(Rt.receiveShadow=I.receiveShadow,ae.setValue(D,"receiveShadow",I.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(je.envMap.value=bt,je.flipEnvMap.value=bt.isCubeTexture&&bt.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&U.environment!==null&&(je.envMapIntensity.value=U.environmentIntensity),Ue&&(ae.setValue(D,"toneMappingExposure",y.toneMappingExposure),Rt.needsLights&&Ul(je,Bi),nt&&k.fog===!0&&at.refreshFogUniforms(je,nt),at.refreshMaterialUniforms(je,k,V,J,u.state.transmissionRenderTarget[M.id]),Fr.upload(D,Do(Rt),je,E)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Fr.upload(D,Do(Rt),je,E),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&ae.setValue(D,"center",I.center),ae.setValue(D,"modelViewMatrix",I.modelViewMatrix),ae.setValue(D,"normalMatrix",I.normalMatrix),ae.setValue(D,"modelMatrix",I.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const ze=k.uniformsGroups;for(let En=0,bn=ze.length;En<bn;En++){const Uo=ze[En];P.update(Uo,Xe),P.bind(Uo,Xe)}}return Xe}function Ul(M,U){M.ambientLightColor.needsUpdate=U,M.lightProbe.needsUpdate=U,M.directionalLights.needsUpdate=U,M.directionalLightShadows.needsUpdate=U,M.pointLights.needsUpdate=U,M.pointLightShadows.needsUpdate=U,M.spotLights.needsUpdate=U,M.spotLightShadows.needsUpdate=U,M.rectAreaLights.needsUpdate=U,M.hemisphereLights.needsUpdate=U}function Il(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(M,U,z){St.get(M.texture).__webglTexture=U,St.get(M.depthTexture).__webglTexture=z;const k=St.get(M);k.__hasExternalTextures=!0,k.__autoAllocateDepthBuffer=z===void 0,k.__autoAllocateDepthBuffer||xt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,U){const z=St.get(M);z.__webglFramebuffer=U,z.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(M,U=0,z=0){C=M,A=U,w=z;let k=!0,I=null,nt=!1,ut=!1;if(M){const bt=St.get(M);if(bt.__useDefaultFramebuffer!==void 0)vt.bindFramebuffer(D.FRAMEBUFFER,null),k=!1;else if(bt.__webglFramebuffer===void 0)E.setupRenderTarget(M);else if(bt.__hasExternalTextures)E.rebindTextures(M,St.get(M.texture).__webglTexture,St.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Tt=M.depthTexture;if(bt.__boundDepthTexture!==Tt){if(Tt!==null&&St.has(Tt)&&(M.width!==Tt.image.width||M.height!==Tt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(M)}}const Ut=M.texture;(Ut.isData3DTexture||Ut.isDataArrayTexture||Ut.isCompressedArrayTexture)&&(ut=!0);const Ot=St.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ot[U])?I=Ot[U][z]:I=Ot[U],nt=!0):M.samples>0&&E.useMultisampledRTT(M)===!1?I=St.get(M).__webglMultisampledFramebuffer:Array.isArray(Ot)?I=Ot[z]:I=Ot,R.copy(M.viewport),H.copy(M.scissor),F=M.scissorTest}else R.copy(yt).multiplyScalar(V).floor(),H.copy(Nt).multiplyScalar(V).floor(),F=jt;if(vt.bindFramebuffer(D.FRAMEBUFFER,I)&&k&&vt.drawBuffers(M,I),vt.viewport(R),vt.scissor(H),vt.setScissorTest(F),nt){const bt=St.get(M.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+U,bt.__webglTexture,z)}else if(ut){const bt=St.get(M.texture),Ut=U||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,bt.__webglTexture,z||0,Ut)}S=-1},this.readRenderTargetPixels=function(M,U,z,k,I,nt,ut){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Et=St.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ut!==void 0&&(Et=Et[ut]),Et){vt.bindFramebuffer(D.FRAMEBUFFER,Et);try{const bt=M.texture,Ut=bt.format,Ot=bt.type;if(!At.textureFormatReadable(Ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!At.textureTypeReadable(Ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=M.width-k&&z>=0&&z<=M.height-I&&D.readPixels(U,z,k,I,zt.convert(Ut),zt.convert(Ot),nt)}finally{const bt=C!==null?St.get(C).__webglFramebuffer:null;vt.bindFramebuffer(D.FRAMEBUFFER,bt)}}},this.readRenderTargetPixelsAsync=async function(M,U,z,k,I,nt,ut){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Et=St.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ut!==void 0&&(Et=Et[ut]),Et){const bt=M.texture,Ut=bt.format,Ot=bt.type;if(!At.textureFormatReadable(Ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!At.textureTypeReadable(Ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=M.width-k&&z>=0&&z<=M.height-I){vt.bindFramebuffer(D.FRAMEBUFFER,Et);const Tt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Tt),D.bufferData(D.PIXEL_PACK_BUFFER,nt.byteLength,D.STREAM_READ),D.readPixels(U,z,k,I,zt.convert(Ut),zt.convert(Ot),0);const qt=C!==null?St.get(C).__webglFramebuffer:null;vt.bindFramebuffer(D.FRAMEBUFFER,qt);const re=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await kc(D,re,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Tt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,nt),D.deleteBuffer(Tt),D.deleteSync(re),nt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(M,U=null,z=0){M.isTexture!==!0&&(Yi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,M=arguments[1]);const k=Math.pow(2,-z),I=Math.floor(M.image.width*k),nt=Math.floor(M.image.height*k),ut=U!==null?U.x:0,Et=U!==null?U.y:0;E.setTexture2D(M,0),D.copyTexSubImage2D(D.TEXTURE_2D,z,0,0,ut,Et,I,nt),vt.unbindTexture()},this.copyTextureToTexture=function(M,U,z=null,k=null,I=0){M.isTexture!==!0&&(Yi("WebGLRenderer: copyTextureToTexture function signature has changed."),k=arguments[0]||null,M=arguments[1],U=arguments[2],I=arguments[3]||0,z=null);let nt,ut,Et,bt,Ut,Ot,Tt,qt,re;const oe=M.isCompressedTexture?M.mipmaps[I]:M.image;z!==null?(nt=z.max.x-z.min.x,ut=z.max.y-z.min.y,Et=z.isBox3?z.max.z-z.min.z:1,bt=z.min.x,Ut=z.min.y,Ot=z.isBox3?z.min.z:0):(nt=oe.width,ut=oe.height,Et=oe.depth||1,bt=0,Ut=0,Ot=0),k!==null?(Tt=k.x,qt=k.y,re=k.z):(Tt=0,qt=0,re=0);const Pe=zt.convert(U.format),Jt=zt.convert(U.type);let Rt;U.isData3DTexture?(E.setTexture3D(U,0),Rt=D.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(E.setTexture2DArray(U,0),Rt=D.TEXTURE_2D_ARRAY):(E.setTexture2D(U,0),Rt=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,U.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,U.unpackAlignment);const on=D.getParameter(D.UNPACK_ROW_LENGTH),Qt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Xe=D.getParameter(D.UNPACK_SKIP_PIXELS),ii=D.getParameter(D.UNPACK_SKIP_ROWS),Ue=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,oe.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,oe.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,bt),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ut),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ot);const Bi=M.isDataArrayTexture||M.isData3DTexture,ae=U.isDataArrayTexture||U.isData3DTexture;if(M.isRenderTargetTexture||M.isDepthTexture){const je=St.get(M),zi=St.get(U),ze=St.get(je.__renderTarget),En=St.get(zi.__renderTarget);vt.bindFramebuffer(D.READ_FRAMEBUFFER,ze.__webglFramebuffer),vt.bindFramebuffer(D.DRAW_FRAMEBUFFER,En.__webglFramebuffer);for(let bn=0;bn<Et;bn++)Bi&&D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,St.get(M).__webglTexture,I,Ot+bn),M.isDepthTexture?(ae&&D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,St.get(U).__webglTexture,I,re+bn),D.blitFramebuffer(bt,Ut,nt,ut,Tt,qt,nt,ut,D.DEPTH_BUFFER_BIT,D.NEAREST)):ae?D.copyTexSubImage3D(Rt,I,Tt,qt,re+bn,bt,Ut,nt,ut):D.copyTexSubImage2D(Rt,I,Tt,qt,re+bn,bt,Ut,nt,ut);vt.bindFramebuffer(D.READ_FRAMEBUFFER,null),vt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else ae?M.isDataTexture||M.isData3DTexture?D.texSubImage3D(Rt,I,Tt,qt,re,nt,ut,Et,Pe,Jt,oe.data):U.isCompressedArrayTexture?D.compressedTexSubImage3D(Rt,I,Tt,qt,re,nt,ut,Et,Pe,oe.data):D.texSubImage3D(Rt,I,Tt,qt,re,nt,ut,Et,Pe,Jt,oe):M.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,I,Tt,qt,nt,ut,Pe,Jt,oe.data):M.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,I,Tt,qt,oe.width,oe.height,Pe,oe.data):D.texSubImage2D(D.TEXTURE_2D,I,Tt,qt,nt,ut,Pe,Jt,oe);D.pixelStorei(D.UNPACK_ROW_LENGTH,on),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Qt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Xe),D.pixelStorei(D.UNPACK_SKIP_ROWS,ii),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ue),I===0&&U.generateMipmaps&&D.generateMipmap(Rt),vt.unbindTexture()},this.copyTextureToTexture3D=function(M,U,z=null,k=null,I=0){return M.isTexture!==!0&&(Yi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,k=arguments[1]||null,M=arguments[2],U=arguments[3],I=arguments[4]||0),Yi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(M,U,z,k,I)},this.initRenderTarget=function(M){St.get(M).__webglFramebuffer===void 0&&E.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?E.setTextureCube(M,0):M.isData3DTexture?E.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?E.setTexture2DArray(M,0):E.setTexture2D(M,0),vt.unbindTexture()},this.resetState=function(){A=0,w=0,C=null,vt.reset(),ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Yt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Yt._getUnpackColorSpace()}}class Ml extends Ae{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new rn,this.environmentIntensity=1,this.environmentRotation=new rn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Qp extends we{constructor(t=null,e=1,n=1,r,s,o,a,l,c=Se,d=Se,f,h){super(null,o,a,l,c,d,r,s,f,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class kr extends Re{constructor(t,e,n,r=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const _i=new Kt,La=new Kt,Tr=[],Ua=new ei,tm=new Kt,Wi=new $t,Xi=new Fi;class Ia extends $t{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new kr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,tm)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ei),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,_i),Ua.copy(t.boundingBox).applyMatrix4(_i),this.boundingBox.union(Ua)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Fi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,_i),Xi.copy(t.boundingSphere).applyMatrix4(_i),this.boundingSphere.union(Xi)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,o=t*s+1;for(let a=0;a<n.length;a++)n[a]=r[o+a]}raycast(t,e){const n=this.matrixWorld,r=this.count;if(Wi.geometry=this.geometry,Wi.material=this.material,Wi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Xi.copy(this.boundingSphere),Xi.applyMatrix4(n),t.ray.intersectsSphere(Xi)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,_i),La.multiplyMatrices(n,_i),Wi.matrixWorld=La,Wi.raycast(t,Tr);for(let o=0,a=Tr.length;o<a;o++){const l=Tr[o];l.instanceId=s,l.object=this,e.push(l)}Tr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new kr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Qp(new Float32Array(r*this.count),r,this.count,po,Qe));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=r*t;s[l]=a,s.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class em extends Qi{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Zt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Na=new Kt,lo=new xo,wr=new Fi,Ar=new N;class Sl extends Ae{constructor(t=new fe,e=new em){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),wr.copy(n.boundingSphere),wr.applyMatrix4(r),wr.radius+=s,t.ray.intersectsSphere(wr)===!1)return;Na.copy(r).invert(),lo.copy(t.ray).applyMatrix4(Na);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,f=n.attributes.position;if(c!==null){const h=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let g=h,_=m;g<_;g++){const p=c.getX(g);Ar.fromBufferAttribute(f,p),Fa(Ar,p,l,r,t,e,this)}}else{const h=Math.max(0,o.start),m=Math.min(f.count,o.start+o.count);for(let g=h,_=m;g<_;g++)Ar.fromBufferAttribute(f,g),Fa(Ar,g,l,r,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Fa(i,t,e,n,r,s,o){const a=lo.distanceSqToPoint(i);if(a<e){const l=new N;lo.closestPointToPoint(i,l),l.applyMatrix4(n);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class fn extends fe{constructor(t=1,e=1,n=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const d=[],f=[],h=[],m=[];let g=0;const _=[],p=n/2;let u=0;b(),o===!1&&(t>0&&T(!0),e>0&&T(!1)),this.setIndex(d),this.setAttribute("position",new Gt(f,3)),this.setAttribute("normal",new Gt(h,3)),this.setAttribute("uv",new Gt(m,2));function b(){const y=new N,L=new N;let A=0;const w=(e-t)/n;for(let C=0;C<=s;C++){const S=[],x=C/s,R=x*(e-t)+t;for(let H=0;H<=r;H++){const F=H/r,Y=F*l+a,Z=Math.sin(Y),W=Math.cos(Y);L.x=R*Z,L.y=-x*n+p,L.z=R*W,f.push(L.x,L.y,L.z),y.set(Z,w,W).normalize(),h.push(y.x,y.y,y.z),m.push(F,1-x),S.push(g++)}_.push(S)}for(let C=0;C<r;C++)for(let S=0;S<s;S++){const x=_[S][C],R=_[S+1][C],H=_[S+1][C+1],F=_[S][C+1];(t>0||S!==0)&&(d.push(x,R,F),A+=3),(e>0||S!==s-1)&&(d.push(R,H,F),A+=3)}c.addGroup(u,A,0),u+=A}function T(y){const L=g,A=new Dt,w=new N;let C=0;const S=y===!0?t:e,x=y===!0?1:-1;for(let H=1;H<=r;H++)f.push(0,p*x,0),h.push(0,x,0),m.push(.5,.5),g++;const R=g;for(let H=0;H<=r;H++){const Y=H/r*l+a,Z=Math.cos(Y),W=Math.sin(Y);w.x=S*W,w.y=p*x,w.z=S*Z,f.push(w.x,w.y,w.z),h.push(0,x,0),A.x=Z*.5+.5,A.y=W*.5*x+.5,m.push(A.x,A.y),g++}for(let H=0;H<r;H++){const F=L+H,Y=R+H;y===!0?d.push(Y,Y+1,F):d.push(Y+1,Y,F),C+=3}c.addGroup(u,C,y===!0?1:2),u+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fn(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ti extends fe{constructor(t=1,e=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const d=[],f=new N,h=new N,m=[],g=[],_=[],p=[];for(let u=0;u<=n;u++){const b=[],T=u/n;let y=0;u===0&&o===0?y=.5/e:u===n&&l===Math.PI&&(y=-.5/e);for(let L=0;L<=e;L++){const A=L/e;f.x=-t*Math.cos(r+A*s)*Math.sin(o+T*a),f.y=t*Math.cos(o+T*a),f.z=t*Math.sin(r+A*s)*Math.sin(o+T*a),g.push(f.x,f.y,f.z),h.copy(f).normalize(),_.push(h.x,h.y,h.z),p.push(A+y,1-T),b.push(c++)}d.push(b)}for(let u=0;u<n;u++)for(let b=0;b<e;b++){const T=d[u][b+1],y=d[u][b],L=d[u+1][b],A=d[u+1][b+1];(u!==0||o>0)&&m.push(T,y,A),(u!==n-1||l<Math.PI)&&m.push(y,L,A)}this.setIndex(m),this.setAttribute("position",new Gt(g,3)),this.setAttribute("normal",new Gt(_,3)),this.setAttribute("uv",new Gt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ti(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ji extends fe{constructor(t=1,e=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);const o=[],a=[],l=[],c=[],d=new N,f=new N,h=new N;for(let m=0;m<=n;m++)for(let g=0;g<=r;g++){const _=g/r*s,p=m/n*Math.PI*2;f.x=(t+e*Math.cos(p))*Math.cos(_),f.y=(t+e*Math.cos(p))*Math.sin(_),f.z=e*Math.sin(p),a.push(f.x,f.y,f.z),d.x=t*Math.cos(_),d.y=t*Math.sin(_),h.subVectors(f,d).normalize(),l.push(h.x,h.y,h.z),c.push(g/r),c.push(m/n)}for(let m=1;m<=n;m++)for(let g=1;g<=r;g++){const _=(r+1)*m+g-1,p=(r+1)*(m-1)+g-1,u=(r+1)*(m-1)+g,b=(r+1)*m+g;o.push(_,p,b),o.push(p,u,b)}this.setIndex(o),this.setAttribute("position",new Gt(a,3)),this.setAttribute("normal",new Gt(l,3)),this.setAttribute("uv",new Gt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ji(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class nm{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Oa(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Oa();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Oa(){return performance.now()}class Ba{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Me(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class im extends ti{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:co}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=co);const za={type:"change"},Eo={type:"start"},yl={type:"end"},Rr=new xo,ka=new Dn,rm=Math.cos(70*Jn.DEG2RAD),de=new N,De=2*Math.PI,ne={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ms=1e-6;class sm extends im{constructor(t,e=null){super(t,e),this.state=ne.NONE,this.enabled=!0,this.target=new N,this.cursor=new N,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:yi.ROTATE,MIDDLE:yi.DOLLY,RIGHT:yi.PAN},this.touches={ONE:Mi.ROTATE,TWO:Mi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new N,this._lastQuaternion=new yn,this._lastTargetPosition=new N,this._quat=new yn().setFromUnitVectors(t.up,new N(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ba,this._sphericalDelta=new Ba,this._scale=1,this._panOffset=new N,this._rotateStart=new Dt,this._rotateEnd=new Dt,this._rotateDelta=new Dt,this._panStart=new Dt,this._panEnd=new Dt,this._panDelta=new Dt,this._dollyStart=new Dt,this._dollyEnd=new Dt,this._dollyDelta=new Dt,this._dollyDirection=new N,this._mouse=new Dt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=am.bind(this),this._onPointerDown=om.bind(this),this._onPointerUp=lm.bind(this),this._onContextMenu=mm.bind(this),this._onMouseWheel=um.bind(this),this._onKeyDown=dm.bind(this),this._onTouchStart=fm.bind(this),this._onTouchMove=pm.bind(this),this._onMouseDown=cm.bind(this),this._onMouseMove=hm.bind(this),this._interceptControlDown=gm.bind(this),this._interceptControlUp=vm.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(za),this.update(),this.state=ne.NONE}update(t=null){const e=this.object.position;de.copy(e).sub(this.target),de.applyQuaternion(this._quat),this._spherical.setFromVector3(de),this.autoRotate&&this.state===ne.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=De:n>Math.PI&&(n-=De),r<-Math.PI?r+=De:r>Math.PI&&(r-=De),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(de.setFromSpherical(this._spherical),de.applyQuaternion(this._quatInverse),e.copy(this.target).add(de),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=de.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const a=new N(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new N(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=de.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Rr.origin.copy(this.object.position),Rr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Rr.direction))<rm?this.object.lookAt(this.target):(ka.setFromNormalAndCoplanarPoint(this.object.up,this.target),Rr.intersectPlane(ka,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Ms||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ms||this._lastTargetPosition.distanceToSquared(this.target)>Ms?(this.dispatchEvent(za),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?De/60*this.autoRotateSpeed*t:De/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){de.setFromMatrixColumn(e,0),de.multiplyScalar(-t),this._panOffset.add(de)}_panUp(t,e){this.screenSpacePanning===!0?de.setFromMatrixColumn(e,1):(de.setFromMatrixColumn(e,0),de.crossVectors(this.object.up,de)),de.multiplyScalar(t),this._panOffset.add(de)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;de.copy(r).sub(this.target);let s=de.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*s/n.clientHeight,this.object.matrix),this._panUp(2*e*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),r=t-n.left,s=e-n.top,o=n.width,a=n.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(De*this._rotateDelta.x/e.clientHeight),this._rotateUp(De*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(De*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-De*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(De*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-De*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panStart.set(n,r)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(n*n+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),r=.5*(t.pageX+n.x),s=.5*(t.pageY+n.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(De*this._rotateDelta.x/e.clientHeight),this._rotateUp(De*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Dt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function om(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function am(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function lm(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(yl),this.state=ne.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function cm(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case yi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ne.DOLLY;break;case yi.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ne.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ne.ROTATE}break;case yi.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ne.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ne.PAN}break;default:this.state=ne.NONE}this.state!==ne.NONE&&this.dispatchEvent(Eo)}function hm(i){switch(this.state){case ne.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ne.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ne.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function um(i){this.enabled===!1||this.enableZoom===!1||this.state!==ne.NONE||(i.preventDefault(),this.dispatchEvent(Eo),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(yl))}function dm(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function fm(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Mi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=ne.TOUCH_ROTATE;break;case Mi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=ne.TOUCH_PAN;break;default:this.state=ne.NONE}break;case 2:switch(this.touches.TWO){case Mi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ne.TOUCH_DOLLY_PAN;break;case Mi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ne.TOUCH_DOLLY_ROTATE;break;default:this.state=ne.NONE}break;default:this.state=ne.NONE}this.state!==ne.NONE&&this.dispatchEvent(Eo)}function pm(i){switch(this._trackPointer(i),this.state){case ne.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ne.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ne.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ne.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ne.NONE}}function mm(i){this.enabled!==!1&&i.preventDefault()}function gm(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function vm(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Wr=new N(3.15,30.3,-420);new N(.312,.715,-5.85);const pn=`
uniform vec3 uBhPos;
uniform float uFogIntensity;
uniform float uTime;
uniform float uBluePhotons;

float hash13(vec3 p3) {
  p3 = fract(p3 * 0.1031);
  p3 += dot(p3, p3.zyx + 31.32);
  return fract((p3.x + p3.y) * p3.z);
}

float valueNoise3D(vec3 x) {
  vec3 i = floor(x);
  vec3 f = fract(x);
  f = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(mix(hash13(i + vec3(0,0,0)), hash13(i + vec3(1,0,0)), f.x),
        mix(hash13(i + vec3(0,1,0)), hash13(i + vec3(1,1,0)), f.x), f.y),
    mix(mix(hash13(i + vec3(0,0,1)), hash13(i + vec3(1,0,1)), f.x),
        mix(hash13(i + vec3(0,1,1)), hash13(i + vec3(1,1,1)), f.x), f.z),
    f.z
  );
}

float hgPhase(float cosTheta, float g) {
  float g2 = g * g;
  return (1.0 - g2) / (4.0 * 3.14159265 * pow(max(1.0 + g2 - 2.0 * g * cosTheta, 0.001), 1.5));
}

/**
 * 角色背后的投影与遮光拖影 (Astronaut Cast Shadow & Occlusion Wake):
 * Gargantua 黑洞在 z = -420 处提供逆光地平线光源，
 * 宇航员位于 (0.312, 0.715, -5.85)，其身体阻挡背光并在身后 (+Z 方向，朝向镜头)
 * 投射出长长的遮光阴影走廊，增强角色在花海中的扎根感与场景纵深立体感。
 */
float evalAstronautShadow(vec3 worldPos) {
  float dZ = worldPos.z - (-5.85);
  if (dZ < -0.15 || dZ > 8.0) return 1.0;

  float t = dZ / 414.15;
  float shadowCenterX = 0.312 - (3.15 - 0.312) * t * 0.95;

  float penumbra = 0.22 + dZ * 0.082;
  float dx = abs(worldPos.x - shadowCenterX);

  float lateral = smoothstep(penumbra, penumbra * 0.18, dx);
  float distFade = smoothstep(7.8, 0.4, dZ);

  float shadowStrength = lateral * distFade * 0.65;
  return clamp(1.0 - shadowStrength, 0.0, 1.0);
}

/**
 * 3D Volumetric Height-Fog & Accretion-Disk Horizon Light Spill:
 * - 前景与近中景 (< 7.2m) 保持清澈通透，无灰白泛白感
 * - 远景地平线雾气柔和克制，避免地平线交界处过曝发白
 */
vec3 applyVolumetricFog(vec3 baseColor, vec3 ro, vec3 worldPos) {
  vec3 rayVec = worldPos - ro;
  float dist = length(rayVec);
  vec3 rd = rayVec / max(dist, 0.0001);

  float distGate = smoothstep(7.0, 12.5, dist);
  if (distGate <= 0.001 || uFogIntensity <= 0.001) {
    return baseColor;
  }

  vec3 bhDir = normalize(uBhPos - ro);

  float yBase = 0.78;
  float falloff = 1.45;
  float effectiveDist = min(dist, 200.0);

  float h0 = max(ro.y - yBase, -0.4);
  float dy = rd.y * effectiveDist;
  float opticalDepth;
  if (abs(dy) > 0.004) {
    opticalDepth = (exp(-falloff * h0) - exp(-falloff * (h0 + dy))) / (falloff * rd.y);
  } else {
    opticalDepth = effectiveDist * exp(-falloff * h0);
  }
  opticalDepth = max(opticalDepth, 0.0);

  vec3 sampleMid = ro + rd * min(dist * 0.5, 32.0) + vec3(uTime * 0.12, 0.0, uTime * 0.05);
  float mistNoise = 0.85 + 0.30 * valueNoise3D(sampleMid * vec3(0.14, 0.42, 0.12));

  float valleyMist = smoothstep(8.2, 24.0, dist) * 0.22;
  float farHorizonDissolve = smoothstep(78.0, 190.0, dist) * 2.6;
  float tau = (opticalDepth * 0.014 * mistNoise + effectiveDist * 0.0032 + valleyMist + farHorizonDissolve) * distGate * uFogIntensity;
  tau = min(tau, 4.2);

  float transmittance = exp(-tau);

  float cosBh = max(dot(rd, bhDir), 0.0);
  float horizonProximity = smoothstep(14.0, 95.0, dist);
  float extremeHorizon = smoothstep(58.0, 180.0, dist);

  vec3 warmValleyMist   = vec3(0.068, 0.062, 0.118);
  vec3 blueValleyMist   = vec3(0.038, 0.068, 0.155);
  vec3 valleyMistCol    = mix(warmValleyMist, blueValleyMist, uBluePhotons);

  vec3 warmMidHaze      = vec3(0.32, 0.20, 0.11);
  vec3 blueMidHaze      = vec3(0.09, 0.26, 0.68);
  vec3 midHazeCol       = mix(warmMidHaze, blueMidHaze, uBluePhotons);

  vec3 warmHorizonBlaze = vec3(0.76, 0.48, 0.24);
  vec3 blueHorizonBlaze = vec3(0.18, 0.55, 1.32);
  vec3 horizonBlazeCol  = mix(warmHorizonBlaze, blueHorizonBlaze, uBluePhotons);

  vec3 inScatter = mix(valleyMistCol, midHazeCol, horizonProximity);
  inScatter = mix(inScatter, horizonBlazeCol, extremeHorizon);

  vec3 warmFwd = vec3(0.34, 0.21, 0.10);
  vec3 blueFwd = vec3(0.10, 0.32, 0.82);
  inScatter += mix(warmFwd, blueFwd, uBluePhotons) * hgPhase(cosBh, 0.64) * 0.28;

  return baseColor * transmittance + inScatter * (1.0 - transmittance);
}
`;function _m(){const i=new Ti(750,64,48),t={uBhPos:{value:Wr.clone()},uRefCamPos:{value:new N(0,1.62,0)},uTime:{value:0},uDiskPhase:{value:0},uFogIntensity:{value:1},uDiskScale:{value:1},uSkyDarkness:{value:1},uBluePhotons:{value:0}},e=new se({side:Te,depthWrite:!1,uniforms:t,vertexShader:`
      varying vec3 vWorldPos;
      void main() {
        vec4 wp = modelMatrix * vec4(position, 1.0);
        vWorldPos = wp.xyz;
        gl_Position = projectionMatrix * viewMatrix * wp;
      }
    `,fragmentShader:`
      precision highp float;

      varying vec3 vWorldPos;

      uniform vec3 uBhPos;
      uniform vec3 uRefCamPos;
      uniform float uTime;
      uniform float uDiskPhase;
      uniform float uFogIntensity;
      uniform float uDiskScale;
      uniform float uSkyDarkness;
      uniform float uBluePhotons;

      const float TAU = 6.28318530718;

      vec3 hash33(vec3 p3) {
        p3 = fract(p3 * vec3(0.1031, 0.1030, 0.0973));
        p3 += dot(p3, p3.yxz + 33.33);
        return fract((p3.xxy + p3.yxx) * p3.zyx);
      }

      float hash11(float p) {
        p = fract(p * 0.1031);
        p *= p + 33.33;
        p *= p + p;
        return fract(p);
      }

      // Seamless 2D periodic polar hash
      float hash12Periodic(vec2 p, float period) {
        p.y = mod(p.y, period);
        vec3 p3 = fract(vec3(p.xyx) * 0.1031);
        p3 += dot(p3, p3.yzx + 33.33);
        return fract((p3.x + p3.y) * p3.z);
      }

      // C2 quintic 2D polar noise
      float polarNoise(float rCoord, float aCoord, float period) {
        vec2 p = vec2(rCoord, aCoord);
        vec2 i = floor(p);
        vec2 f = fract(p);
        f = f * f * f * (f * (f * 6.0 - 15.0) + 10.0);
        return mix(
          mix(hash12Periodic(i, period), hash12Periodic(i + vec2(1.0, 0.0), period), f.x),
          mix(hash12Periodic(i + vec2(0.0, 1.0), period), hash12Periodic(i + vec2(1.0, 1.0), period), f.x),
          f.y
        );
      }

      /**
       * 严控曝光、层次分明的黑体色温与亮度阶梯 (Non-Clipping Blackbody Temperature & Brightness Ramp):
       * - 抵消 ACES + Gamma 1/2.2 的高光压缩效应，使由外到内的每一层环带都拥有清晰的亮度差与色温差：
       *   1. 远外翼边缘 (0.00..0.22): 深邃古铜暗琥珀 (Deep Burnished Copper-Bronze)
       *   2. 中外层 (0.22..0.48): 温润焦糖琥珀金 (Warm Caramel-Amber Gold)
       *   3. 中层环带 (0.48..0.74): 饱满赤金与香槟金 (Rich Golden Amber)
       *   4. 次内层环带 (0.74..0.90): 璀璨亮香槟白金 (Radiant Champagne White-Gold)
       *   5. 最内层核心光子环 (0.90..1.00): 全盘最亮的炽白核心 (Brightest Incandescent Core)
       */
      vec3 evalBlackbodyRamp(float temp, float blueShift) {
        float t = clamp(temp, 0.0, 1.0);

        // --- 黄白/暖金模式 (精准反演 ACES 曲线，让外->中->内呈现线性均匀的视觉亮度阶梯) ---
        vec3 w0 = vec3(0.14, 0.050, 0.014); // 远外缘深古铜暗琥珀
        vec3 w1 = vec3(0.34, 0.16,  0.052); // 外中层温润古铜金
        vec3 w2 = vec3(0.64, 0.36,  0.135); // 中层饱满琥珀暖金
        vec3 w3 = vec3(1.02, 0.68,  0.310); // 中内层明亮香槟暖金
        vec3 w4 = vec3(1.48, 1.18,  0.740); // 次内层璀璨奶油金
        vec3 w5 = vec3(2.25, 2.08,  1.800); // 最内层高能炽白核心 (唯一最高亮层!)

        vec3 warmCol = mix(w0, w1, smoothstep(0.00, 0.24, t));
        warmCol = mix(warmCol, w2, smoothstep(0.20, 0.50, t));
        warmCol = mix(warmCol, w3, smoothstep(0.45, 0.74, t));
        warmCol = mix(warmCol, w4, smoothstep(0.68, 0.89, t));
        warmCol = mix(warmCol, w5, smoothstep(0.86, 1.00, t));

        // --- 深蓝模式 (Calibrated Deep Blue Gargantua Palette) ---
        vec3 b0 = vec3(0.012, 0.045, 0.17); // 远外缘深海夜蓝
        vec3 b1 = vec3(0.040, 0.15,  0.45); // 外中层幽邃群青
        vec3 b2 = vec3(0.11,  0.36,  0.82); // 中层钴蓝天青
        vec3 b3 = vec3(0.30,  0.68,  1.32); // 中内层冰魄亮蓝
        vec3 b4 = vec3(0.76,  1.24,  1.82); // 次内层高能冰白蓝
        vec3 b5 = vec3(1.88,  2.22,  2.58); // 最内层蓝白光子核心

        vec3 blueCol = mix(b0, b1, smoothstep(0.00, 0.24, t));
        blueCol = mix(blueCol, b2, smoothstep(0.20, 0.50, t));
        blueCol = mix(blueCol, b3, smoothstep(0.45, 0.74, t));
        blueCol = mix(blueCol, b4, smoothstep(0.68, 0.89, t));
        blueCol = mix(blueCol, b5, smoothstep(0.86, 1.00, t));

        return mix(warmCol, blueCol, clamp(blueShift, 0.0, 1.0));
      }

      /**
       * 高清晰度纤细流线光丝层 (High-Definition Slender Photon Streaks):
       * - 保留清晰的轨道丝芯与环间微暗对比，使最内层到最外层的拉丝细节都根根分明！
       */
      vec4 evalDenseStreakBandLayer(
        float rCoord,
        float radialFreq,
        float flowAzim,
        float radialHotness,
        float dopplerX,
        float numSectors,
        float speedScale,
        float fiberRadius,
        float ringBandWeight,
        float seed
      ) {
        float baseIr = floor(rCoord);
        vec3 accumRgb = vec3(0.0);
        float accumVal = 0.0;

        for (int k = -1; k <= 1; k++) {
          float id = baseIr + float(k);
          float hTrack = hash11(id * 3.17 + seed);
          float hSpeed = hash11(id * 7.31 + seed + 19.1);
          float hPhase = hash11(id * 13.7 + seed + 43.7);

          float trackCenter = id + 0.20 + 0.60 * hTrack;
          float dr = abs(rCoord - trackCenter);

          float effWidth = fiberRadius * (0.70 + 0.44 * hTrack);
          float normDr = dr / max(effWidth, 0.005);
          float radialProfile = exp(-normDr * normDr * 2.25) + 0.18 * exp(-normDr * 2.20);

          if (radialProfile > 0.008) {
            float rTrackApprox = exp(clamp(id / max(radialFreq, 1.0), -0.05, 2.7));
            float omega = speedScale * (0.092 + 0.095 / pow(max(rTrackApprox, 1.0), 0.42)) * (0.96 + 0.08 * hSpeed);

            float rotAz = flowAzim - omega * uDiskPhase;
            float uAz = fract((rotAz / TAU) + hPhase) * numSectors;
            float iSec = floor(uAz);
            float fSec = fract(uAz);

            for (int m = -1; m <= 1; m++) {
              float fm = float(m);
              float secId = mod(iSec + fm + numSectors, numSectors);
              float arcSeed = id * 29.3 + secId * 71.7 + seed;

              float hHead = hash11(arcSeed + 5.3);
              float hLen  = hash11(arcSeed + 17.9);
              float hAmp  = hash11(arcSeed + 31.1);
              float hCol1 = hash11(arcSeed + 53.7);
              float hCol2 = hash11(arcSeed + 89.3);

              float arcPresence = (0.24 + 0.86 * pow(hAmp, 1.12)) * (0.65 + 0.38 * ringBandWeight);

              float headInSec = 0.15 + 0.70 * hHead;
              float dSec = (fSec - fm) - headInSec;

              float tailLen = 0.54 + 0.76 * hLen;
              float headTapering = smoothstep(0.24, -0.05, dSec);
              float tailTapering = exp(-max(-dSec, 0.0) / tailLen) * smoothstep(-1.78, -0.08, dSec);

              float arcEnv = (dSec < 0.24) ? (headTapering * tailTapering * arcPresence) : 0.0;

              if (arcEnv > 0.005) {
                float w = radialProfile * arcEnv;
                float headHotBoost = smoothstep(-0.35, 0.0, dSec) * 0.08;

                float localTemp = clamp(
                  radialHotness * 0.86 +
                  ringBandWeight * 0.08 +
                  (hCol1 - 0.46) * 0.14 +
                  headHotBoost +
                  dopplerX * 0.03,
                  0.0, 1.0
                );

                vec3 arcTint = evalBlackbodyRamp(localTemp, uBluePhotons);
                arcTint *= mix(vec3(1.05, 0.99, 0.94), vec3(0.95, 1.01, 1.06), hCol2);

                accumRgb += arcTint * w;
                accumVal += w;
              }
            }
          }
        }
        return vec4(accumRgb * 0.48, accumVal * 0.48);
      }

      /**
       * 多层星海与缓慢呼吸闪烁效果 (Multi-Layer Starfield with Slow Asynchronous Twinkling):
       * - 每颗星星拥有独立的慢速双谐波闪烁周期 (约 2.6s ~ 6.2s)，呈现清晰可感的缓慢明暗呼吸与微芒律动
       */
      vec3 renderStars(vec3 rd, float skyClearMask) {
        if (skyClearMask <= 0.005) return vec3(0.0);
        vec3 col = vec3(0.0);

        for (int layer = 0; layer < 3; layer++) {
          float scale = (layer == 0) ? 58.0 : ((layer == 1) ? 112.0 : 188.0);
          vec3 p = rd * scale;
          vec3 cell = floor(p);
          vec3 f = fract(p);

          vec3 rnd = hash33(cell + float(layer) * 53.7);
          float prob = (layer == 0) ? 0.18 : ((layer == 1) ? 0.26 : 0.32);

          if (rnd.x < prob) {
            vec3 rndPos = hash33(cell + 17.7 + float(layer) * 19.3);
            vec3 starCenter = 0.22 + 0.56 * rndPos;
            vec3 diff = f - starCenter;
            float d = length(diff);

            // 缓慢的异步呼吸闪烁 (周期约 2.6 秒 ~ 6.2 秒，肉眼可清晰观察到星星缓慢变暗与亮起)
            float freq1 = 0.95 + rnd.y * 1.35;
            float freq2 = 0.52 + rndPos.x * 0.78;
            float slowWave = 0.65 * sin(uTime * freq1 + rnd.z * TAU)
                           + 0.35 * sin(uTime * freq2 - rnd.y * TAU);
            float twinklePhase = clamp(slowWave * 0.5 + 0.5, 0.0, 1.0);

            // 跨度饱满的慢速闪烁曲线：谷底微暗 (0.04)，波峰晶莹闪耀 (2.15)，抵消伽马压缩后依然呼吸感十足
            float twinkle = mix(0.04, 2.15, pow(twinklePhase, 2.15));

            float baseRadius = (layer == 0) ? 0.22 : ((layer == 1) ? 0.185 : 0.16);
            float radius = baseRadius * (0.74 + 0.38 * twinklePhase);
            float s = smoothstep(radius, 0.0, d);
            float core = s * s * s + 0.35 * pow(s, 1.35);

            // 主亮星在闪烁波峰时带有极其柔和的十字星芒呼吸感
            if (layer == 0) {
              float crossX = exp(-abs(diff.x) * 26.0) * exp(-abs(diff.y) * 6.5);
              float crossY = exp(-abs(diff.y) * 26.0) * exp(-abs(diff.x) * 6.5);
              core += (crossX + crossY) * 0.28 * pow(twinklePhase, 2.4) * smoothstep(radius * 1.35, 0.0, d);
            }

            float baseBright = (layer == 0)
              ? (0.42 + 0.78 * rnd.z)
              : ((layer == 1) ? (0.22 + 0.44 * rnd.y) : (0.12 + 0.28 * rndPos.z));

            vec3 starTint = mix(vec3(0.75, 0.86, 1.08), vec3(1.06, 0.95, 0.80), smoothstep(0.2, 0.8, rnd.y));
            starTint = mix(starTint, vec3(1.08, 0.78, 0.70), smoothstep(0.82, 0.98, rndPos.y) * 0.65);

            col += starTint * (core * baseBright * twinkle);
          }
        }
        return col * skyClearMask;
      }

      /**
       * 吸积盘核心渲染模型 (evalAccretionDisk):
       * - 严格实现“由外到内亮度平滑渐变递增、由内向外渐变衰减，最内层是最亮的”！
       * - 无论是上拱环还是水平吸积盘，都呈现从最内层炽亮白金 -> 次内层明亮香槟金 ->
       *   中层饱满暖琥珀金 -> 外缘古铜暗金丝缕的连续渐变，且最亮处依然保留丰富拉丝纹理！
       */
      vec4 evalAccretionDisk(float rRaw, float flowAzim, float dopplerX, bool isUpperArch, bool isSecondary) {
        float r = (rRaw < 1.74) ? rRaw : (1.74 + (rRaw - 1.74) / max(uDiskScale, 0.45));
        if (r < 0.95 || r > 14.2) return vec4(0.0);

        float logR = log(max(r, 0.85));

        // -----------------------------------------------------------------
        // 1. 适配上拱环与赤道盘面跨度的连续径向归一化坐标 uR (0 = 最内层, 1 = 最外缘)
        // -----------------------------------------------------------------
        float spanR = isUpperArch ? 5.2 : 11.2;
        float uR = clamp((r - 1.02) / spanR, 0.0, 1.0);

        // 单调平滑的径向色温渐变：仅最内层 (uR=0..0.08) 达到白炽核心色温 (0.92..1.0)，向外快速展开丰富的金黄/琥珀色温阶梯！
        float radialHotness = clamp(
          0.48 * pow(1.0 - uR, 1.45) +
          0.52 * exp(-uR * 2.65),
          0.0, 1.0
        );

        // -----------------------------------------------------------------
        // 2. 细腻有致的同心环带结构 (Concentric Ring Bands with Clear Contrast)
        // -----------------------------------------------------------------
        float azSlow = flowAzim - uDiskPhase * 0.14;
        float azShear = flowAzim - uDiskPhase * 0.19 + logR * 0.65;

        float nMacro = polarNoise(logR * 2.6, (azSlow  / TAU) * 1.0, 1.0);
        float nMid   = polarNoise(logR * 6.5 + nMacro * 0.30, (azShear / TAU) * 2.0, 2.0);
        float nFine  = polarNoise(logR * 16.0 + nMid  * 0.25, (azShear / TAU) * 3.0, 3.0);

        float thickBandWave = 0.5 + 0.5 * cos(logR * 5.6 - 0.58 + (nMacro - 0.5) * 0.50);
        float subBandWave   = 0.5 + 0.5 * sin(logR * 12.6 + (nMid - 0.5) * 0.42);
        float ringBandWeight = smoothstep(0.08, 0.92, thickBandWave * 0.66 + subBandWave * 0.34);
        float thickRingEnvelope = mix(0.60, 1.12, ringBandWeight);

        float logRStream = logR + (nMacro - 0.5) * 0.008 + (nMid - 0.5) * 0.004;

        float apexSpread = isUpperArch ? 0.0 : pow(clamp(abs(dopplerX), 0.0, 1.0), 1.65) * smoothstep(2.0, 4.8, r);
        float fgApron = isUpperArch ? 0.0 : smoothstep(3.2, 6.8, r);
        float wingResolution = clamp(max(apexSpread, fgApron * 0.90), 0.0, 1.0);

        // -----------------------------------------------------------------
        // 3. 四层高清晰度纤细光粒流线 (4-Tier Crisp Slender Photon Streaks)
        // -----------------------------------------------------------------
        float freqA = isUpperArch ? 14.0 : 17.0;
        float radA  = isUpperArch ? 0.23 : mix(0.23, 0.17, wingResolution);
        vec4 streaksA = evalDenseStreakBandLayer(
          logRStream * freqA, freqA, flowAzim, radialHotness, dopplerX,
          3.0, 0.96, radA, ringBandWeight, 13.7
        );

        float freqB = isUpperArch ? 28.0 : 38.0;
        float radB  = isUpperArch ? 0.17 : mix(0.17, 0.125, wingResolution);
        vec4 streaksB = evalDenseStreakBandLayer(
          logRStream * freqB, freqB, flowAzim, radialHotness, dopplerX,
          4.0, 1.00, radB, ringBandWeight, 91.3
        );

        float freqC = isUpperArch ? 50.0 : 70.0;
        float radC  = isUpperArch ? 0.135 : mix(0.135, 0.095, wingResolution);
        vec4 streaksC = evalDenseStreakBandLayer(
          logRStream * freqC, freqC, flowAzim, radialHotness, dopplerX,
          5.0, 1.04, radC, nMid, 217.9
        );

        float freqD = isUpperArch ? 78.0 : 108.0;
        float radD  = isUpperArch ? 0.115 : mix(0.115, 0.08, wingResolution);
        vec4 streaksD = evalDenseStreakBandLayer(
          logRStream * freqD, freqD, flowAzim, radialHotness, dopplerX,
          6.0, 1.08, radD, nFine, 389.1
        );

        // -----------------------------------------------------------------
        // 4. 温润底光 + 高对比流线拉丝 + 最内层高亮光子缘合成
        // -----------------------------------------------------------------
        float gentleRingMod = 1.0
          - 0.12 * exp(-pow((r - 2.45) / 0.36, 2.0))
          - 0.14 * exp(-pow((r - 4.10) / 0.48, 2.0))
          - 0.13 * exp(-pow((r - 6.35) / 0.64, 2.0));

        float gasTemp = clamp(radialHotness * 0.85 + (ringBandWeight - 0.5) * 0.10, 0.0, 1.0);
        vec3 baseGasCol = evalBlackbodyRamp(gasTemp, uBluePhotons) * (0.18 + 0.20 * thickRingEnvelope);

        float microSilk = 0.5 + 0.5 * sin(logRStream * 135.0 + nFine * 4.2);
        vec3 silkCol = evalBlackbodyRamp(clamp(radialHotness + 0.05, 0.0, 1.0), uBluePhotons) * pow(microSilk, 2.1) * 0.12;

        vec3 streakRgb = (
          streaksA.rgb * 0.35 +
          streaksB.rgb * 0.42 +
          streaksC.rgb * 0.35 +
          streaksD.rgb * 0.25 +
          silkCol
        ) * thickRingEnvelope;

        float streakDensity = clamp((
          streaksA.a * 0.44 +
          streaksB.a * 0.52 +
          streaksC.a * 0.44 +
          streaksD.a * 0.34
        ) * thickRingEnvelope, 0.0, 2.4);

        // 仅在紧贴视界的最内层 (uR = 0.00 .. 0.085) 赋予高能炽白核心推进，确保“最内层是最亮的”，且不外溢吞没次内层细节！
        float innerMostCore = exp(-pow(uR / 0.075, 1.35)) * smoothstep(0.95, 1.03, r);
        vec3 innerMostCol = evalBlackbodyRamp(1.0, uBluePhotons) * innerMostCore * 0.38;

        vec3 diskRgb = (baseGasCol + streakRgb * 1.15 + innerMostCol) * gentleRingMod;

        // -----------------------------------------------------------------
        // 5. 核心关键：连续丝滑的径向亮度衰减曲线 (Continuous Monotonic Radial Attenuation)
        // 从 uR=0 (最内层最高亮) 到 uR=1 (最外缘柔和消散) 全程单调平滑过渡！
        // -----------------------------------------------------------------
        float diskRise = smoothstep(0.95, 1.025, r);

        float radialFalloff =
          0.34 * exp(-pow(uR / 0.085, 1.30)) +
          0.52 * pow(1.0 - uR, 1.25) +
          0.28 * exp(-uR * 1.65);

        // 外翼边缘呈修长拉丝状自然消散
        float outerEdgeR = isUpperArch
          ? (r - (streakDensity - 0.36) * 0.85 - (ringBandWeight - 0.5) * 0.40)
          : (r - (streakDensity - 0.36) * 0.85 - (ringBandWeight - 0.5) * 0.45);
        float outerStart = isUpperArch ? 3.8 : 7.2;
        float outerEnd   = isUpperArch ? 6.8 : 13.8;
        float outerSoftFade = 1.0 - smoothstep(outerStart, outerEnd, outerEdgeR);

        float fgHorizonTame = isUpperArch ? 1.02 : mix(0.84, 0.98, smoothstep(6.2, 1.3, r));

        float mainProfile = diskRise * radialFalloff * outerSoftFade * fgHorizonTame;

        float doppler = 1.0 + 0.12 * dopplerX * smoothstep(11.0, 1.4, r);
        float archGain = isUpperArch ? 1.05 : 0.86;
        vec3 col = diskRgb * (mainProfile * doppler * archGain);

        // 保持前景赤道盘面在整个主环区 (r < 9.5) 的高不透明度
        float wispyOpacity = mix(0.82, 0.999, smoothstep(0.03, 0.52, streakDensity));
        float coreOpaqueLock = isUpperArch ? smoothstep(4.5, 1.8, r) : smoothstep(11.5, 8.2, r);
        float alpha = diskRise * pow(max(outerSoftFade, 0.0), 0.75) * mix(wispyOpacity, 1.0, coreOpaqueLock);
        alpha = clamp(alpha, 0.0, 0.999);

        if (isSecondary) {
          col *= 0.24;
          alpha *= 0.24;
        }

        return vec4(col, clamp(alpha, 0.0, 1.0));
      }

      void main() {
        vec3 ro = cameraPosition;
        vec3 rd = normalize(vWorldPos - ro);

        // 1. Calibrated deep-twilight starry sky
        float elev = clamp(rd.y, -0.25, 1.0);
        float skyDarkScale = mix(1.0, 0.06, clamp(uSkyDarkness * 0.55, 0.0, 1.0));
        vec3 zenithCol = vec3(0.024, 0.032, 0.058) * skyDarkScale;
        vec3 midSkyCol = vec3(0.068, 0.062, 0.078) * mix(1.0, skyDarkScale, 0.92);

        vec3 warmHorizonMist = vec3(0.36, 0.22, 0.11);
        vec3 blueHorizonMist = vec3(0.09, 0.28, 0.78);
        vec3 horizonMist     = mix(warmHorizonMist, blueHorizonMist, uBluePhotons);

        vec3 skyBg = mix(midSkyCol, zenithCol, smoothstep(0.04, 0.36, elev));
        float glowFalloff = mix(11.5, 15.5, clamp(uSkyDarkness * 0.5, 0.0, 1.0));
        float horizonGlow = exp(-pow(max(elev + 0.010, 0.0) * glowFalloff, 1.55));
        skyBg = mix(skyBg, horizonMist, horizonGlow * (0.55 + 0.24 * uFogIntensity));

        float starMask = smoothstep(0.028, 0.155, elev);
        vec3 starsCol = renderStars(rd, starMask);
        vec3 baseSkyWithStars = skyBg + starsCol;

        // 2. 3D Black Hole Coordinate Frame
        vec3 refForward = normalize(uRefCamPos - uBhPos);
        float rollAngle = -0.0253;
        vec3 tiltedUp = normalize(vec3(-sin(rollAngle), cos(rollAngle), 0.0));
        vec3 diskRight = normalize(cross(tiltedUp, refForward));
        vec3 diskUpOrtho = normalize(cross(refForward, diskRight));

        float inc = 0.0428; // 2.45 deg grazing inclination
        vec3 diskNormal = normalize(cos(inc) * diskUpOrtho + sin(inc) * refForward);
        vec3 diskForward = normalize(cos(inc) * refForward - sin(inc) * diskUpOrtho);

        vec3 toBh = uBhPos - ro;
        float L = length(toBh);
        vec3 bhDir = toBh / L;

        float cosA = clamp(dot(rd, bhDir), -1.0, 1.0);
        vec3 perp = rd - cosA * bhDir;
        float sinA = length(perp);
        float b = max(L * sinA, 0.001);

        vec3 finalSky = baseSkyWithStars;

        bool skipHighSky = (elev > 0.27) && (b > 84.0);

        float diskCoverMask = 0.0;
        if (cosA > 0.25 && !skipHighSky) {
          vec3 e1 = -bhDir;
          vec3 e2 = (sinA > 1e-6) ? (perp / sinA) : diskUpOrtho;

          const float bCrit = 53.5;
          const float rs = 31.1666;
          const float C = 6.5;

          float u = 1.0 / L;
          float up = cosA / b;

          const float dphi = 0.043;
          float phi = 0.0;
          float hPrev = dot(e1, diskNormal);

          bool hitHorizon = false;
          vec3 accumDisk = vec3(0.0);
          float accumAlpha = 0.0;
          int crossings = 0;

          // 上半球远场引力透镜项（仅依赖径向 u，完全不依赖冲击参数 b，100% 保证 rHit 随 b 严格单调递增，且不改变视界阴影尺寸！）
          float upperArchDir = clamp(dot(e2, diskUpOrtho), 0.0, 1.0);

          for (int i = 0; i < 92; i++) {
            float rsu = max(rs * u, 0.0);
            float rsu2 = rsu * rsu;
            float rsu5 = rsu2 * rsu2 * rsu;
            float farFieldGate0 = smoothstep(0.65, 0.22, rsu);
            float f0 = (C * rsu5 + 1.05 * upperArchDir * farFieldGate0 * rsu2) * u - u;

            float uNext = u + up * dphi + 0.5 * f0 * dphi * dphi;

            if (uNext >= 1.35 / rs) {
              hitHorizon = true;
              break;
            }
            if (uNext <= 0.0) {
              break;
            }

            float rsuN = rs * uNext;
            float rsuN2 = rsuN * rsuN;
            float rsuN5 = rsuN2 * rsuN2 * rsuN;
            float farFieldGate1 = smoothstep(0.65, 0.22, rsuN);
            float f1 = (C * rsuN5 + 1.05 * upperArchDir * farFieldGate1 * rsuN2) * uNext - uNext;

            float upNext = up + 0.5 * (f0 + f1) * dphi;
            float phiNext = phi + dphi;

            vec3 dirNext = cos(phiNext) * e1 + sin(phiNext) * e2;
            float hNext = dot(dirNext, diskNormal);

            if (hPrev * hNext <= 0.0 && crossings < 2) {
              float t = hPrev / (hPrev - hNext);
              float uHit = mix(u, uNext, t);
              if (uHit > 0.0001) {
                float phiHit = phi + t * dphi;
                float rHit = 1.0 / uHit;
                float rNorm = rHit / bCrit;

                vec3 dirHit = normalize(cos(phiHit) * e1 + sin(phiHit) * e2);
                float xDisk = dot(dirHit, diskRight);
                float zDisk = dot(dirHit, diskForward);

                bool isUpperArch = (phiHit > 1.58) && (dot(e2, diskUpOrtho) > -0.15);

                vec2 flowDir;
                if (crossings > 0) {
                  flowDir = normalize(vec2(dot(e2, diskRight), max(-dot(e2, diskUpOrtho), 0.0) + 1e-4));
                } else {
                  float archUnfold = smoothstep(1.65, 2.45, phiHit) * smoothstep(0.0, 0.28, dot(e2, diskUpOrtho));
                  vec2 eqDir = normalize(vec2(xDisk, zDisk) + vec2(1e-6, 0.0));
                  vec2 archDir = normalize(vec2(dot(e2, diskRight), -max(dot(e2, diskUpOrtho), 0.0) - 1e-4));
                  flowDir = normalize(mix(eqDir, archDir, archUnfold * 0.84));
                }
                float flowAzim = atan(flowDir.y, flowDir.x);

                vec4 sampleDisk = evalAccretionDisk(rNorm, flowAzim, xDisk, isUpperArch, crossings > 0);
                if (crossings > 0) {
                  float secSmooth = smoothstep(bCrit * 1.00, bCrit * 1.15, b);
                  sampleDisk *= secSmooth;
                }
                accumDisk += (1.0 - accumAlpha) * sampleDisk.rgb * sampleDisk.a;
                accumAlpha += (1.0 - accumAlpha) * sampleDisk.a;
                crossings++;

                if (accumAlpha > 0.992 && crossings >= 1 && b > bCrit * 1.08) {
                  break;
                }
              }
            }

            u = uNext;
            up = upNext;
            phi = phiNext;
            hPrev = hNext;
          }

          float bRatio = b / bCrit;

          // -----------------------------------------------------------------
          // 3. 事件视界深邃黑影与最内缘锐利光子亮环 (Event Horizon Shadow & Brightest Inner Photon Rim)
          // -----------------------------------------------------------------
          float shadowGrad = smoothstep(0.26, 0.04, elev);
          vec3 shadowCoreCol = mix(
            vec3(0.012, 0.015, 0.024) * mix(1.0, skyDarkScale, 0.90),
            vec3(0.038, 0.032, 0.036) * mix(1.0, skyDarkScale, 0.72),
            shadowGrad
          ) * (0.72 + 0.18 * uFogIntensity);

          // 视界内缘纤细次级光子环与微弱内晕
          float innerSoftHalo = exp(-pow(max(1.01 - bRatio, 0.0) / 0.10, 1.60)) * smoothstep(0.70, 1.01, bRatio);
          float innerThinPhotonRing = exp(-pow((bRatio - 0.872) / 0.012, 2.0)) * smoothstep(0.0, 0.10, (rd.y - bhDir.y) + 0.015);
          vec3 warmInnerGlow = vec3(0.54, 0.42, 0.26);
          vec3 blueInnerGlow = vec3(0.18, 0.46, 0.98);
          vec3 innerHorizonGlow = mix(warmInnerGlow, blueInnerGlow, uBluePhotons) * (innerSoftHalo * 0.62 + innerThinPhotonRing * 0.85);

          // 紧贴黑洞阴影最内缘 (bRatio ≈ 1.012) 的极细高能光子内环：仅作用于上半球视界内缘，不穿透前景水平盘面
          float upperRimGate = smoothstep(-0.008, 0.022, rd.y - bhDir.y);
          float photonRingSpike = exp(-pow((bRatio - 1.012) / 0.020, 2.0)) * upperRimGate;
          vec3 photonRingCol = evalBlackbodyRamp(1.0, uBluePhotons) * photonRingSpike * 0.95;  // 强化光子环（v4 风味）

          photonRingCol += evalBlackbodyRamp(1.0, uBluePhotons) * exp(-pow((bRatio - 1.02) / 0.150, 2.0)) * 0.30;  // 外圈柔晕

          vec3 behindDisk;
          if (hitHorizon) {
            float fgDiskVeil = (crossings > 0) ? smoothstep(0.010, -0.028, rd.y - bhDir.y) : 0.0;
            behindDisk = mix(shadowCoreCol + innerHorizonGlow, skyBg, fgDiskVeil);
          } else {
            float archStarFade = smoothstep(1.24, 1.40, bRatio);
            behindDisk = skyBg + starsCol * archStarFade;
          }

          // 克制温润的外日冕微晕
          float outerCorona = 0.05 * exp(-pow(max(bRatio - 1.10, 0.0) / 0.20, 1.60)) * (hitHorizon ? 0.0 : 1.0);

          float diskTrans = mix(0.98, 0.94, shadowGrad);
          diskCoverMask = accumAlpha;
          finalSky = behindDisk * (1.0 - accumAlpha) + (accumDisk + photonRingCol * accumAlpha) * diskTrans;

          vec3 warmCorona = vec3(0.52, 0.30, 0.13);
          vec3 blueCorona = vec3(0.10, 0.36, 0.98);
          finalSky += mix(warmCorona, blueCorona, uBluePhotons) * outerCorona;
        }

        float hRimArg = (elev + 0.006) * 26.0;
        float horizonRim = exp(-hRimArg * hRimArg) * (1.0 - 0.92 * diskCoverMask);
        vec3 warmHorizonRim = vec3(0.45, 0.28, 0.13);
        vec3 blueHorizonRim = vec3(0.11, 0.36, 0.98);
        finalSky += mix(warmHorizonRim, blueHorizonRim, uBluePhotons) * horizonRim * (0.24 + 0.12 * uFogIntensity);

        gl_FragColor = vec4(max(finalSky, vec3(0.0)), 1.0);
      }
    `}),n=new $t(i,e);n.frustumCulled=!1,n.renderOrder=-10;let r=0,s=null;return{mesh:n,uniforms:t,update(o,a,l,c=1,d=1,f=0){const h=s===null?o:Math.max(0,Math.min(o-s,.25));s=o,r+=h*d,t.uTime.value=o,t.uDiskPhase.value=r,t.uFogIntensity.value=a,t.uDiskScale.value=l,t.uSkyDarkness.value=c,t.uBluePhotons.value=f}}}function xm(){const i=new Le;i.position.set(.312,.715,-5.85),i.rotation.y=-.62;const t={uBhPos:{value:Wr.clone()},uFogIntensity:{value:1},uTime:{value:0},uBluePhotons:{value:0},uRootMatrix:{value:new Kt},uRootMatrixInv:{value:new Kt}};function e(){i.updateMatrixWorld(!0),t.uRootMatrix.value.copy(i.matrixWorld),t.uRootMatrixInv.value.copy(i.matrixWorld).invert()}function n(ct){return new se({uniforms:{uBhPos:t.uBhPos,uFogIntensity:t.uFogIntensity,uTime:t.uTime,uBluePhotons:t.uBluePhotons,uRootMatrix:t.uRootMatrix,uRootMatrixInv:t.uRootMatrixInv,uBaseColor:{value:new Zt(ct.baseColor)},uShadowColor:{value:new Zt(ct.shadowColor)},uRoughness:{value:ct.roughness??.48},uMetallic:{value:ct.metallic??.1},uRimStrength:{value:ct.rimStrength??1.2},uIsHelmet:{value:ct.isHelmet?1:0},uWrinkleAmp:{value:ct.wrinkleAmp??0}},vertexShader:`
        varying vec3 vWorldPos;
        varying vec3 vWorldNormal;
        varying vec3 vLocalPos;
        varying vec3 vRootPos;

        uniform float uWrinkleAmp;
        uniform mat4 uRootMatrixInv;

        void main() {
          vec3 pos = position;
          vec3 norm = normal;

          if (uWrinkleAmp > 0.0001) {
            float w = sin(pos.y * 56.0 + pos.x * 14.0) * 0.65 + sin(pos.y * 108.0 - pos.z * 16.0) * 0.35;
            pos += norm * (w * uWrinkleAmp);
            norm = normalize(norm + vec3(0.0, cos(pos.y * 56.0) * uWrinkleAmp * 16.0, 0.0));
          }

          vLocalPos = pos;

          vec4 wp = modelMatrix * vec4(pos, 1.0);
          vWorldPos = wp.xyz;
          vWorldNormal = normalize(mat3(modelMatrix) * norm);
          vRootPos = (uRootMatrixInv * wp).xyz;

          gl_Position = projectionMatrix * viewMatrix * wp;
        }
      `,fragmentShader:`
        precision highp float;

        varying vec3 vWorldPos;
        varying vec3 vWorldNormal;
        varying vec3 vLocalPos;
        varying vec3 vRootPos;

        uniform mat4 uRootMatrix;
        uniform vec3 uBaseColor;
        uniform vec3 uShadowColor;
        uniform float uRoughness;
        uniform float uMetallic;
        uniform float uRimStrength;
        uniform float uIsHelmet;

        ${pn}

        float smin(float a, float b, float k) {
          float h = clamp(0.5 + 0.5 * (b - a) / k, 0.0, 1.0);
          return mix(b, a, h) - k * h * (1.0 - h);
        }

        float sdCapsule(vec3 p, vec3 a, vec3 b, float r) {
          vec3 pa = p - a;
          vec3 ba = b - a;
          float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);
          return length(pa - ba * h) - r;
        }

        float sdEllipsoidApprox(vec3 p, vec3 c, vec3 r) {
          vec3 q = (p - c) / r;
          float k0 = length(q);
          float k1 = length(q / r);
          return (k0 * (k0 - 1.0)) / max(k1, 1e-4);
        }

        float evalAstroHullSdf(vec3 p) {
          float dTorso = sdEllipsoidApprox(p, vec3(0.0, 0.335, 0.012), vec3(0.250, 0.355, 0.218));
          float dPadR  = sdCapsule(p, vec3(0.180, 0.510, 0.004), vec3(0.270, 0.385, 0.018), 0.125);
          float dArmR  = sdCapsule(p, vec3(0.255, 0.410, 0.012), vec3(0.272, 0.180, 0.035), 0.104);
          float dPadL  = sdCapsule(p, vec3(-0.180, 0.508, 0.004), vec3(-0.268, 0.382, 0.018), 0.125);
          float dArmL  = sdCapsule(p, vec3(-0.252, 0.406, 0.012), vec3(-0.270, 0.180, 0.035), 0.104);
          float dNeck  = sdCapsule(p, vec3(0.006, 0.596, 0.004), vec3(0.014, 0.706, -0.028), 0.188);
          float dHelm  = sdEllipsoidApprox(p, vec3(0.020, 0.874, -0.030), vec3(0.214, 0.222, 0.233));

          float dShoulders = min(smin(dPadR, dArmR, 0.045), smin(dPadL, dArmL, 0.045));
          float dUpperBody = smin(dTorso, dShoulders, 0.052);
          float dHeadNeck  = smin(dNeck, dHelm, 0.036);
          return smin(dUpperBody, dHeadNeck, 0.045);
        }

        void main() {
          vec3 N = normalize(vWorldNormal);
          vec3 V = normalize(cameraPosition - vWorldPos);

          const float eps = 0.004;
          vec2 e = vec2(1.0, -1.0);
          vec3 hullGradRoot = normalize(
            e.xyy * evalAstroHullSdf(vRootPos + e.xyy * eps) +
            e.yyx * evalAstroHullSdf(vRootPos + e.yyx * eps) +
            e.yxy * evalAstroHullSdf(vRootPos + e.yxy * eps) +
            e.xxx * evalAstroHullSdf(vRootPos + e.xxx * eps)
          );
          vec3 N_hull = normalize(mat3(uRootMatrix) * hullGradRoot);

          vec3 L_center = normalize(vec3(0.05, 0.12, -1.0));
          vec3 L_left   = normalize(vec3(-0.84, 0.16, -0.52));
          vec3 L_right  = normalize(vec3(0.84, 0.17, -0.52));

          vec3 baseCol = uBaseColor;
          vec3 shadCol = uShadowColor;
          float rough = uRoughness;
          float metal = uMetallic;
          float rimStr = uRimStrength;
          float visorMask = 0.0;

          if (uIsHelmet > 0.5) {
            vec3 lp = vLocalPos;
            float tiltedY = lp.y + lp.x * 0.16 - lp.z * 0.08;
            float rearSideBand =
              smoothstep(-0.082, -0.068, tiltedY) *
              (1.0 - smoothstep(0.036, 0.050, tiltedY));

            float frontVisor =
              smoothstep(0.03, -0.06, lp.z) *
              smoothstep(-0.115, -0.095, lp.y) *
              (1.0 - smoothstep(0.078, 0.098, lp.y));

            visorMask = clamp(max(rearSideBand, frontVisor), 0.0, 1.0);

            float seamEdge = visorMask * (1.0 - visorMask) * 4.0;
            N = normalize(N - vec3(0.0, seamEdge * 0.22, 0.0));

            baseCol = mix(baseCol, vec3(0.004, 0.006, 0.010), visorMask);
            shadCol = mix(shadCol, vec3(0.001, 0.0015, 0.003), visorMask);
            rough = mix(rough, 0.10, visorMask);
            metal = mix(metal, 0.22, visorMask);
            rimStr = mix(rimStr, 0.35, visorMask);
          }

          // 2. 自阴影与暮光漫反射
          float skyUp = clamp(N.y * 0.5 + 0.5, 0.0, 1.0);
          float hullForward = clamp((dot(N_hull, L_center) + 0.15) / 1.15, 0.0, 1.0);
          float microCreviceAo = mix(0.55, 1.0, smoothstep(-0.15, 0.65, dot(N, N_hull)));

          vec3 albedo = mix(shadCol, baseCol, clamp(pow(skyUp, 1.2) * 0.80 + hullForward * 0.20, 0.0, 1.0));
          vec3 coolSkyLight = vec3(0.72, 0.78, 1.06) * (0.22 + 0.76 * pow(skyUp, 1.35));
          vec3 violetBounce = vec3(0.13, 0.11, 0.28) * clamp(-N.y * 0.5 + 0.5, 0.0, 1.0);

          vec3 warmForwardFill = vec3(0.30, 0.19, 0.10);
          vec3 blueForwardFill = vec3(0.08, 0.22, 0.58);
          vec3 forwardFill = mix(warmForwardFill, blueForwardFill, uBluePhotons) * pow(hullForward, 2.2);

          vec3 diffuse = albedo * (coolSkyLight + violetBounce + forwardFill) * microCreviceAo;

          // 3. 轮廓边缘光：根据 uBluePhotons 从金黄平滑过渡到深邃天青蓝
          float ndvHull = clamp(dot(N_hull, V), 0.0, 1.0);
          float outerSilhouette = smoothstep(0.68, 0.97, 1.0 - ndvHull) * pow(1.0 - ndvHull, 4.2);
          float outwardMicroAgree = smoothstep(0.16, 0.68, dot(N, N_hull));
          float canopyClearance = smoothstep(0.24, 0.41, vRootPos.y);
          float upperContourGate = smoothstep(-0.28, 0.14, N_hull.y);

          float horizonExposure = clamp(
            max(dot(N_hull, L_center), 0.0) * 0.95 +
            max(dot(N_hull, L_left), 0.0) * 0.88 +
            max(dot(N_hull, L_right), 0.0) * 0.88 +
            clamp(N_hull.y, 0.0, 1.0) * 0.14,
            0.0, 1.45
          );

          float outerRimMask = outerSilhouette * outwardMicroAgree * canopyClearance * upperContourGate;

          vec3 warmGoldRimCol = vec3(2.10, 1.44, 0.72);
          vec3 blueRimCol     = vec3(0.75, 1.75, 3.40);
          vec3 rimCol = mix(warmGoldRimCol, blueRimCol, uBluePhotons);
          vec3 rim = rimCol * outerRimMask * horizonExposure * rimStr;

          // 4. 镜面高光反射
          float shininess = mix(160.0, 14.0, clamp(rough, 0.05, 1.0));
          float outerSpecGate = smoothstep(0.66, 0.94, 1.0 - ndvHull) * outwardMicroAgree;

          float visC = smoothstep(0.04, 0.36, dot(N_hull, L_center)) * smoothstep(0.02, 0.26, dot(N, L_center));
          float visR = smoothstep(0.04, 0.36, dot(N_hull, L_right))  * smoothstep(0.02, 0.26, dot(N, L_right));
          float visL = smoothstep(0.04, 0.36, dot(N_hull, L_left))   * smoothstep(0.02, 0.26, dot(N, L_left));

          float specC = pow(max(dot(N, normalize(L_center + V)), 0.0), shininess) * visC;
          float specR = pow(max(dot(N, normalize(L_right + V)), 0.0), shininess * 0.85) * visR;
          float specL = pow(max(dot(N, normalize(L_left + V)), 0.0), shininess * 0.80) * visL;

          vec3 F0 = mix(vec3(0.04), albedo * 1.4 + vec3(0.06), metal);
          float specNorm = (shininess + 2.0) / 24.0;
          vec3 spec = F0 * rimCol * (specC + specR * 0.9 + specL * 0.7) * specNorm * 0.13 * canopyClearance * outerSpecGate;

          if (uIsHelmet > 0.5) {
            float rightOuterEdge = smoothstep(0.60, 0.95, 1.0 - ndvHull) * pow(1.0 - ndvHull, 3.8) * smoothstep(0.42, 0.88, N_hull.x);
            float glintBandY = exp(-pow((vRootPos.y - 0.868) * 24.0, 2.0));
            vec3 warmVisorGlint = vec3(6.2, 4.1, 1.85);
            vec3 blueVisorGlint = vec3(1.6, 4.8, 8.8);
            spec += mix(warmVisorGlint, blueVisorGlint, uBluePhotons) * rightOuterEdge * (0.22 + 1.75 * glintBandY);
          }

          vec3 col = diffuse * (1.0 - metal * 0.55) + spec + rim;
          col = applyVolumetricFog(col, cameraPosition, vWorldPos);

          gl_FragColor = vec4(max(col, vec3(0.0)), 1.0);
        }
      `})}const r=n({baseColor:"#223b55",shadowColor:"#02070f",roughness:.54,metallic:.08,rimStrength:1.85}),s=n({baseColor:"#203750",shadowColor:"#02060d",roughness:.6,metallic:.05,rimStrength:1.35,wrinkleAmp:.0062}),o=n({baseColor:"#3a3f5e",shadowColor:"#050710",roughness:.34,metallic:.14,rimStrength:1.35,isHelmet:!0}),a=n({baseColor:"#11141c",shadowColor:"#020306",roughness:.32,metallic:.52,rimStrength:1.95}),l=n({baseColor:"#141e2c",shadowColor:"#03060c",roughness:.28,metallic:.58,rimStrength:2.65}),c=new Ti(.245,48,36),d=c.attributes.position;for(let ct=0;ct<d.count;ct++){let xt=d.getX(ct),At=d.getY(ct),vt=d.getZ(ct);At*=1.56;const Ht=Jn.smoothstep(At,-.26,.24);if(xt*=.88+.24*Ht,vt*=.74+.14*Ht,vt>0){const St=-.01*Math.exp(-Math.pow(xt/.055,2))*Ht;vt+=.022*Ht+St}d.setXYZ(ct,xt,At,vt)}c.computeVertexNormals();const f=new $t(c,r);f.position.set(0,.34,0),i.add(f);const h=new ji(.228,.005,8,36,Math.PI*.8),m=new $t(h,r);m.position.set(0,.54,.032),m.rotation.set(Math.PI*.44,0,-Math.PI*.4),m.scale.set(1.25,.8,1);const g=new fn(.205,.185,.22,24),_=new $t(g,r);_.position.set(0,.06,0),_.scale.set(1.08,1,.78),i.add(_);const p=new Le;p.position.set(-.078,.435,.222),p.rotation.set(-.08,-.36,0);const u=new fn(.026,.03,.016,20);u.rotateX(Math.PI/2),p.add(new $t(u,a));const b=new Mo({color:new Zt(2.4,.1,.05)}),T=new $t(new Ti(.013,14,14),b);T.scale.set(1,1,.6),T.position.z=.007,p.add(T),i.add(p);function y(ct){const xt=new Le,At=ct?1:-1,vt=new fn(.098,.112,.175,24),Ht=new $t(vt,a);Ht.scale.set(.96,1,1.12),xt.add(Ht);const St=7;for(let E=0;E<St;E++){const v=E/(St-1),B=Jn.lerp(.072,-.072,v),Q=.096+.02*Math.sin(v*Math.PI*.85+.22),q=new ji(Q,.0095,12,34);q.rotateX(Math.PI*.5);const Mt=new $t(q,l);Mt.position.y=B,Mt.scale.set(.96,1,1.14),xt.add(Mt)}return xt.position.set(At*.225,.455,.008),xt.rotation.z=At*.64,xt.rotation.x=-.1,xt}i.add(y(!0)),i.add(y(!1));const L=new fn(.102,.09,.36,24,24),A=new fn(.088,.076,.34,20,20),w=new Le;w.position.set(.248,.455,.005),w.rotation.z=.14,w.rotation.x=-.14;const C=new $t(L,s);C.position.y=-.16,w.add(C);const S=new $t(A,s);S.position.set(.01,-.46,-.05),S.rotation.x=-.26,w.add(S),i.add(w);const x=new Le;x.position.set(-.245,.45,.005),x.rotation.z=-.13,x.rotation.x=-.16;const R=new $t(L,s);R.position.y=-.16,x.add(R);const H=new $t(A,s);H.position.set(-.01,-.46,-.05),H.rotation.x=-.24,x.add(H),i.add(x);const F=new Le;F.position.set(.008,.615,-.006),F.rotation.set(-.26,-.04,0);const Y=new $t(new fn(.148,.168,.128,24),a);Y.position.y=.036,F.add(Y);const Z=[{y:.014,r:.177,tube:.019},{y:.044,r:.17,tube:.016},{y:.072,r:.163,tube:.015}];for(const ct of Z){const xt=new ji(ct.r,ct.tube,14,42);xt.rotateX(Math.PI/2);const At=new $t(xt,a);At.position.y=ct.y,At.scale.set(.96,1,1.06),F.add(At)}i.add(F);const W=new Le;W.position.set(.014,.642,-.022),W.rotation.y=-.12,W.rotation.z=-.025,W.rotation.x=-.04;const J=.232,V=new Ti(.22,52,42),it=V.attributes.position;for(let ct=0;ct<it.count;ct++){let xt=it.getX(ct),At=it.getY(ct),vt=it.getZ(ct);xt*=.97,At*=1.01,vt*=1.06,it.setXYZ(ct,xt,At,vt)}V.computeVertexNormals();const dt=new $t(V,o);dt.position.y=J,W.add(dt);for(const ct of[-1,1]){const xt=new fn(.032,.035,.016,20);xt.rotateZ(Math.PI/2);const At=new $t(xt,o);At.position.set(ct*.208,J-.012,-.042),At.rotation.y=-ct*.18,W.add(At)}i.add(W);const yt=new Le,Nt=new se({transparent:!0,depthWrite:!1,blending:wi,side:be,uniforms:{uTime:t.uTime,uBluePhotons:t.uBluePhotons,uFogIntensity:t.uFogIntensity},vertexShader:`
      attribute float aRibbonId;
      varying vec2 vUv;
      varying float vRibbonId;
      uniform float uTime;

      void main() {
        vUv = uv;
        vRibbonId = aRibbonId;
        vec3 p = position;

        // 沿逆光方向 (+Z, 朝镜头方向) 飘荡的波状拖尾位移
        float wave = sin(uTime * 1.5 + p.y * 5.0 + aRibbonId * 1.8) * 0.024 * smoothstep(0.0, 0.7, p.z);
        p.x += wave;
        p.y += cos(uTime * 1.2 + aRibbonId * 2.2) * 0.012 * p.z;

        gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
      }
    `,fragmentShader:`
      precision highp float;
      varying vec2 vUv;
      varying float vRibbonId;
      uniform float uTime;
      uniform float uBluePhotons;
      uniform float uFogIntensity;

      void main() {
        float u = vUv.x;
        float v = vUv.y;

        // 柔和条纹光带拖影
        float streaks = sin((v * 16.0 - uTime * 0.8) + vRibbonId * 3.14) * 0.5 + 0.5;
        streaks = pow(streaks, 2.2);

        // 头部向后发散淡出
        float zFade = smoothstep(0.02, 0.22, v) * (1.0 - smoothstep(0.45, 0.98, v));
        float edgeFade = 1.0 - smoothstep(0.32, 0.98, abs(u * 2.0 - 1.0));

        float alpha = zFade * edgeFade * (0.35 + 0.65 * streaks) * 0.18 * uFogIntensity;
        if (alpha <= 0.002) discard;

        vec3 warmWakeCol = vec3(1.45, 0.98, 0.48);
        vec3 blueWakeCol = vec3(0.38, 0.88, 2.15);
        vec3 wakeCol = mix(warmWakeCol, blueWakeCol, uBluePhotons);

        gl_FragColor = vec4(wakeCol * alpha, alpha);
      }
    `}),jt=4,O=new fe,G=[],tt=[],$=[],st=[];for(let ct=0;ct<jt;ct++){const xt=(ct-1.5)*.24,At=Math.sin(xt)*.18,vt=.55+(ct-1.5)*.08,Ht=G.length/3,St=14;for(let E=0;E<=St;E++){const v=E/St,B=.06+v*.72,K=(.16+v*.28)*(1-v*.35);G.push(At-K*.5,vt+v*.08,B),G.push(At+K*.5,vt+v*.08,B),tt.push(0,v),tt.push(1,v),$.push(ct,ct)}for(let E=0;E<St;E++){const v=Ht+E*2,B=v+1,K=v+2,Q=v+3;st.push(v,B,K,B,Q,K)}}O.setAttribute("position",new Gt(G,3)),O.setAttribute("uv",new Gt(tt,2)),O.setAttribute("aRibbonId",new Gt($,1)),O.setIndex(st),new $t(O,Nt);const lt=38,_t=new Float32Array(lt*3),It=new Float32Array(lt*3);for(let ct=0;ct<lt;ct++){const xt=ct/lt;_t[ct*3+0]=(Math.random()-.5)*.42,_t[ct*3+1]=.4+Math.random()*.48,_t[ct*3+2]=.08+xt*.75,It[ct*3+0]=Math.random()*Math.PI*2,It[ct*3+1]=.6+Math.random()*.8,It[ct*3+2]=Math.random()}const wt=new fe;wt.setAttribute("position",new Re(_t,3)),wt.setAttribute("aSeed",new Re(It,3));const Pt=new se({transparent:!0,depthWrite:!1,blending:wi,uniforms:{uTime:t.uTime,uBluePhotons:t.uBluePhotons,uFogIntensity:t.uFogIntensity},vertexShader:`
      attribute vec3 aSeed;
      varying float vAlpha;
      uniform float uTime;
      uniform float uFogIntensity;

      void main() {
        vec3 p = position;
        p.x += sin(uTime * 0.8 + aSeed.x) * 0.04;
        p.y += cos(uTime * 0.6 + aSeed.y * 3.0) * 0.03;
        p.z += fract(aSeed.z + uTime * 0.12) * 0.65;

        vAlpha = (0.35 + 0.55 * sin(uTime * 1.4 + aSeed.x)) * uFogIntensity;
        gl_PointSize = clamp(24.0 * aSeed.y / max(p.z + 1.2, 0.5), 1.5, 5.5);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
      }
    `,fragmentShader:`
      precision highp float;
      varying float vAlpha;
      uniform float uBluePhotons;

      void main() {
        vec2 d = gl_PointCoord - 0.5;
        float r2 = dot(d, d);
        if (r2 > 0.25) discard;
        float soft = (1.0 - r2 * 4.0);
        soft *= soft;

        vec3 warmM = vec3(1.65, 1.15, 0.58);
        vec3 blueM = vec3(0.48, 1.12, 2.85);
        vec3 col = mix(warmM, blueM, uBluePhotons);

        gl_FragColor = vec4(col * soft * vAlpha * 0.35, soft * vAlpha * 0.35);
      }
    `}),D=new Sl(wt,Pt);return D.renderOrder=4,yt.add(D),i.add(yt),e(),{group:i,headGroup:W,update(ct,xt,At=0){t.uTime.value=ct,t.uFogIntensity.value=xt,t.uBluePhotons.value=At,i.position.y=.715+Math.sin(ct*1.15)*.003,W.rotation.y=-.12+Math.sin(ct*.65)*.014,W.rotation.x=-.04+Math.cos(ct*.8)*.006,e()}}}function Ge(i,t){let e=.77;const n=(t+1.35)/.72,r=Math.exp(-n*n),s=.08*Je(-.28,-.88,i),o=.11*Je(.18,.88,i),a=-.05*Math.exp(-Math.pow((i+.16)/.42,2));e+=r*(.04+s+o+a);const l=(t+3.05)/.88;e-=.18*Math.exp(-l*l);const c=(t+5.45)/1.95,d=Math.exp(-c*c),f=.11*Math.exp(-Math.pow((i+2.55)/1.25,2)),h=-.115*Math.exp(-Math.pow((i+1.18)/.98,2)),m=.085*Math.exp(-Math.pow((i-.16)/1.05,2)),g=.27*Je(.45,3.2,i);e+=d*(.095+f+h+m+g);const _=(t+13.5)/5.8;e-=.22*Math.exp(-_*_);const p=Je(-3,-10.5,t),u=1-Je(-32,-145,t),b=Math.sin(i*.24+t*.17)*.12+Math.cos(i*.48-t*.27+1.1)*.07+Math.sin(i*.95+t*.55)*.028;return e+=b*p*(.16+.84*u),e+=Je(-25,-150,t)*.035,e}function Ha(i,t,e=new N){const r=Ge(i-.12,t),s=Ge(i+.12,t),o=Ge(i,t-.12),a=Ge(i,t+.12);return e.set(r-s,2*.12,o-a).normalize(),e}function Je(i,t,e){const n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)}function Mm(i){let t=i>>>0;return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}const Ui=[{angle:-2.38,cupPitch:.92,widthScale:1.04,lenScale:1.05,roll:.14},{angle:-.96,cupPitch:.78,widthScale:.96,lenScale:.98,roll:-.1},{angle:0,cupPitch:.66,widthScale:1.18,lenScale:1.06,roll:0},{angle:.96,cupPitch:.78,widthScale:.96,lenScale:.98,roll:.1},{angle:2.38,cupPitch:.92,widthScale:1.04,lenScale:1.05,roll:-.14}];function Sm(i=3,t=4){const e=[],n=[],r=[],s=[],o=new N,a=new Kt,l=new Kt;for(let g=0;g<Ui.length;g++){const _=Ui[g],p=e.length/3;a.makeRotationY(_.angle),l.makeRotationZ(_.roll);for(let b=0;b<=t;b++){const T=b/t,y=.036*_.widthScale*(.16+.94*Math.sin(Math.pow(T,.58)*Math.PI*.89)),L=.068*_.lenScale,A=L*(T*.78+.12*Math.sin(T*Math.PI)),w=L*(Math.pow(T,1.18)*Math.sin(_.cupPitch)*1.08-.1*Math.pow(Math.max(T-.72,0),2));for(let C=0;C<=i;C++){const S=C/i*2-1,x=(1-S*S)*-.0085*Math.sin(T*Math.PI),R=Math.pow(Math.abs(S),2.4)*.006*T;o.set(S*y,w+x+R+g*6e-4,A*Math.cos(_.cupPitch*.52)+x*.45),o.applyMatrix4(l),o.applyMatrix4(a),e.push(o.x,o.y,o.z),n.push(0,1,0),r.push(S,T)}}const u=i+1;for(let b=0;b<t;b++)for(let T=0;T<i;T++){const y=p+b*u+T,L=y+1,A=y+u,w=A+1;s.push(y,A,L,L,A,w)}}const c=e.length/3,d=5,f=[{y:.004,r:.013,zOff:0},{y:-.055,r:.0055,zOff:.006},{y:-.155,r:.0045,zOff:.014}];for(let g=0;g<f.length;g++){const _=f[g];for(let p=0;p<=d;p++){const u=p/d*Math.PI*2;e.push(Math.cos(u)*_.r,_.y,Math.sin(u)*_.r+_.zOff),n.push(Math.cos(u),.2,Math.sin(u)),r.push(0,-.5)}}const h=d+1;for(let g=0;g<f.length-1;g++)for(let _=0;_<d;_++){const p=c+g*h+_,u=p+1,b=p+h,T=b+1;s.push(p,u,b,u,T,b)}const m=new fe;return m.setAttribute("position",new Gt(e,3)),m.setAttribute("normal",new Gt(n,3)),m.setAttribute("uv",new Gt(r,2)),m.setIndex(s),m.computeVertexNormals(),m}function ym(){const i=[],t=[],e=[],n=[],r=new N,s=new Kt,o=new Kt,a=[[0,.02],[-1,.54],[1,.54],[-.68,.98],[.68,.98]];for(let c=0;c<Ui.length;c++){const d=Ui[c],f=i.length/3;s.makeRotationY(d.angle),o.makeRotationZ(d.roll);for(const[h,m]of a){const g=.037*d.widthScale*(.16+.94*Math.sin(Math.pow(m,.58)*Math.PI*.89)),_=.069*d.lenScale,p=_*(m*.78+.12*Math.sin(m*Math.PI)),u=_*(Math.pow(m,1.18)*Math.sin(d.cupPitch)*1.08-.1*Math.pow(Math.max(m-.72,0),2)),b=(1-h*h)*-.0075*Math.sin(m*Math.PI),T=Math.pow(Math.abs(h),2.2)*.005*m;r.set(h*g,u+b+T+c*6e-4,p*Math.cos(d.cupPitch*.52)+b*.4),r.applyMatrix4(o),r.applyMatrix4(s),i.push(r.x,r.y,r.z),t.push(0,1,0),e.push(h,m)}n.push(f+0,f+2,f+1,f+1,f+2,f+3,f+2,f+4,f+3)}const l=new fe;return l.setAttribute("position",new Gt(i,3)),l.setAttribute("normal",new Gt(t,3)),l.setAttribute("uv",new Gt(e,2)),l.setIndex(n),l.computeVertexNormals(),l}function Em(){const i=[],t=[],e=[],n=[],r=new N,s=new Kt,o=new Kt,a=[[0,.05],[-1,.88],[1,.88]];for(let c=0;c<Ui.length;c++){const d=Ui[c],f=i.length/3;s.makeRotationY(d.angle),o.makeRotationZ(d.roll);for(const[h,m]of a){const g=.04*d.widthScale*(.2+.88*m),_=.07*d.lenScale,p=_*m*.84,u=_*Math.pow(m,1.12)*Math.sin(d.cupPitch)*1.05;r.set(h*g,u+c*5e-4,p*Math.cos(d.cupPitch*.52)),r.applyMatrix4(o),r.applyMatrix4(s),i.push(r.x,r.y,r.z),t.push(0,1,0),e.push(h,m)}n.push(f+0,f+2,f+1)}const l=new fe;return l.setAttribute("position",new Gt(i,3)),l.setAttribute("normal",new Gt(t,3)),l.setAttribute("uv",new Gt(e,2)),l.setIndex(n),l.computeVertexNormals(),l}function bm(){const i=[],t=[],e=[],n=[];for(let s=0;s<3;s++){const o=s/3*Math.PI*2+.35,a=i.length/3,l=Math.cos(o),c=Math.sin(o),d=[[0,0,0,0,0],[-.048,.042,.038,-1,.35],[.048,.042,.038,1,.35],[-.036,.072,.082,-.8,.72],[.036,.072,.082,.8,.72],[0,.078,.118,0,1]];for(const f of d){const h=f[0],m=f[1],g=f[2],_=h*l+g*c,p=-h*c+g*l;i.push(_,m,p),t.push(c*.25,.94,l*.25),e.push(f[3],-1)}n.push(a+0,a+1,a+2,a+1,a+3,a+4,a+1,a+4,a+2,a+3,a+5,a+4)}const r=new fe;return r.setAttribute("position",new Gt(i,3)),r.setAttribute("normal",new Gt(t,3)),r.setAttribute("uv",new Gt(e,2)),r.setIndex(n),r.computeVertexNormals(),r}function Tm(){const i=new Le,t={uBhPos:{value:Wr.clone()},uFogIntensity:{value:1},uTime:{value:0},uBluePhotons:{value:0}},e=320,n=205,r=new ni(e,n,128,96);r.rotateX(-Math.PI/2);const s=r.attributes.position;for(let O=0;O<s.count;O++){const G=s.getX(O),tt=s.getZ(O)-n*.5+2,$=Ge(G,tt);s.setXYZ(O,G,$,tt)}r.computeVertexNormals();const o=new se({uniforms:t,vertexShader:`
      varying vec3 vWorldPos;
      varying vec3 vWorldNormal;
      varying vec3 vFogScatter;
      varying float vFogTrans;

      ${pn}

      void main() {
        vec4 wp = modelMatrix * vec4(position, 1.0);
        vWorldPos = wp.xyz;
        vWorldNormal = normalize(mat3(modelMatrix) * normal);

        vec3 zeroFog = applyVolumetricFog(vec3(0.0), cameraPosition, wp.xyz);
        vec3 unitFog = applyVolumetricFog(vec3(1.0), cameraPosition, wp.xyz);
        vFogScatter = zeroFog;
        vFogTrans = clamp(unitFog.r - zeroFog.r, 0.0, 1.0);

        gl_Position = projectionMatrix * viewMatrix * wp;
      }
    `,fragmentShader:`
      precision highp float;
      varying vec3 vWorldPos;
      varying vec3 vWorldNormal;
      varying vec3 vFogScatter;
      varying float vFogTrans;

      ${pn}

      float hash12(vec2 p) {
        vec3 p3 = fract(vec3(p.xyx) * 0.1031);
        p3 += dot(p3, p3.yzx + 33.33);
        return fract((p3.x + p3.y) * p3.z);
      }

      float noise2D(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        f = f * f * (3.0 - 2.0 * f);
        return mix(
          mix(hash12(i), hash12(i + vec2(1.0, 0.0)), f.x),
          mix(hash12(i + vec2(0.0, 1.0)), hash12(i + vec2(1.0, 1.0)), f.x),
          f.y
        );
      }

      void main() {
        vec3 N = normalize(vWorldNormal);
        float dist = length(vWorldPos - cameraPosition);

        // 协调统一色系：与花海深幽紫靛蓝无缝融为一体
        vec3 nearSoil = vec3(0.0020, 0.0024, 0.0075);
        vec3 baseCol = nearSoil;

        if (dist > 9.5) {
          float n1 = noise2D(vWorldPos.xz * 4.5);
          float n2 = noise2D(vWorldPos.xz * 13.0);
          float petalNoise = n1 * 0.6 + n2 * 0.4;

          vec3 farCanopyDark = vec3(0.0045, 0.0048, 0.0160);
          vec3 farCanopyLit  = vec3(0.0220, 0.0190, 0.0580);
          vec3 farCarpet = mix(farCanopyDark, farCanopyLit, smoothstep(0.28, 0.78, petalNoise));

          vec3 L_disk = normalize(vec3(0.0, 0.14, -1.0));
          float backRim = clamp(dot(N, L_disk) * 0.5 + 0.5, 0.0, 1.0);
          float goldenTips = smoothstep(0.72, 0.95, n2) * smoothstep(14.0, 48.0, dist);

          vec3 warmRim = vec3(0.32, 0.19, 0.08);
          vec3 blueRim = vec3(0.08, 0.24, 0.75);
          vec3 rimCol  = mix(warmRim, blueRim, uBluePhotons);
          farCarpet += rimCol * goldenTips * (0.35 + 0.65 * backRim);

          baseCol = mix(nearSoil, farCarpet, smoothstep(10.0, 32.0, dist));
        }

        // 宇航员身后地面阴影 (增强角色与地面深邃关系)
        float astroShadow = evalAstronautShadow(vWorldPos);
        baseCol *= mix(0.55, 1.0, astroShadow);

        baseCol = baseCol * vFogTrans + vFogScatter;
        gl_FragColor = vec4(max(baseCol, vec3(0.0)), 1.0);
      }
    `}),a=new $t(r,o);i.add(a);const l=new se({side:be,uniforms:t,vertexShader:`
      attribute vec4 aFlowerData; // x: hueShift, y: variant, z: glintSeed, w: swayPhase

      varying vec3 vWorldPos;
      varying vec3 vWorldNormal;
      varying vec3 vLocalPos;
      varying vec2 vUv;
      varying vec4 vFlowerData;
      varying float vClumpShade;
      varying vec3 vFogScatter;
      varying float vFogTrans;

      ${pn}

      void main() {
        vUv = uv;
        vFlowerData = aFlowerData;
        vLocalPos = position;

        vec3 pos = position;
        vec4 worldOrigin = modelMatrix * instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0);
        float heightFactor = clamp((pos.y + 0.06) * 6.5, 0.0, 1.25);
        float breeze =
          sin(uTime * 1.25 + worldOrigin.x * 0.85 + worldOrigin.z * 0.55 + aFlowerData.w) * 0.0085 +
          cos(uTime * 1.95 - worldOrigin.z * 0.9 + aFlowerData.w * 1.7) * 0.004;

        pos.x += breeze * heightFactor;
        pos.z += breeze * 0.6 * heightFactor;

        vec4 wp = modelMatrix * instanceMatrix * vec4(pos, 1.0);
        vWorldPos = wp.xyz;

        mat3 normalMat = mat3(modelMatrix) * mat3(instanceMatrix);
        vWorldNormal = normalize(normalMat * normal);

        float cs = 0.52 + 0.62 * valueNoise3D(worldOrigin.xyz * vec3(1.85, 1.2, 1.85));
        vClumpShade = (aFlowerData.y > 0.75) ? 1.0 : cs;

        vec3 zeroFog = applyVolumetricFog(vec3(0.0), cameraPosition, wp.xyz);
        vec3 unitFog = applyVolumetricFog(vec3(1.0), cameraPosition, wp.xyz);
        vFogScatter = zeroFog;
        vFogTrans = clamp(unitFog.r - zeroFog.r, 0.0, 1.0);

        gl_Position = projectionMatrix * viewMatrix * wp;
      }
    `,fragmentShader:`
      precision highp float;

      varying vec3 vWorldPos;
      varying vec3 vWorldNormal;
      varying vec3 vLocalPos;
      varying vec2 vUv;
      varying vec4 vFlowerData;
      varying float vClumpShade;
      varying vec3 vFogScatter;
      varying float vFogTrans;

      ${pn}

      void main() {
        vec3 N = normalize(gl_FrontFacing ? vWorldNormal : -vWorldNormal);
        vec3 toCam = cameraPosition - vWorldPos;
        float dist = length(toCam);
        vec3 V = toCam / max(dist, 0.0001);

        float hueShift = vFlowerData.x;
        float isWhite = step(0.75, vFlowerData.y);
        float glintSeed = vFlowerData.z;

        // 茎托叶 shading
        if (vUv.y < -0.1) {
          if (isWhite > 0.5 && dist < 3.0) discard;
          vec3 darkLeaf = vec3(0.0010, 0.0015, 0.0042);
          vec3 litLeaf = vec3(0.0045, 0.0070, 0.0150);
          float sky = clamp(N.y * 0.5 + 0.5, 0.0, 1.0);
          vec3 leafCol = mix(darkLeaf, litLeaf, sky);
          leafCol = leafCol * vFogTrans + vFogScatter;
          gl_FragColor = vec4(leafCol, 1.0);
          return;
        }

        float pu = vUv.x;
        float pv = clamp(vUv.y, 0.0, 1.0);

        // 花瓣脉络
        float fanCoord = pu / (0.30 + 0.72 * pv);
        float primaryVeins = pow(abs(sin(fanCoord * 10.5)), 0.48);
        float fineStriations = 0.5 + 0.5 * cos(fanCoord * 23.0);
        float veinMask = (1.0 - primaryVeins) * smoothstep(0.04, 0.18, pv) * (1.0 - smoothstep(0.76, 0.99, pv));

        // 统一全场景完全一致的花瓣自然渐变基色
        vec3 deepIndigoBase = vec3(0.0032, 0.0036, 0.0125);
        vec3 royalViolet    = mix(vec3(0.018, 0.015, 0.052), vec3(0.028, 0.024, 0.075), hueShift);
        vec3 lavenderMargin = mix(vec3(0.052, 0.046, 0.125), vec3(0.078, 0.068, 0.168), hueShift);

        vec3 petalAlbedo;
        if (isWhite < 0.5) {
          petalAlbedo = mix(deepIndigoBase, royalViolet, smoothstep(0.08, 0.48, pv));
          petalAlbedo = mix(petalAlbedo, lavenderMargin, smoothstep(0.42, 0.94, pv) * (0.45 + 0.55 * fineStriations));
          petalAlbedo = mix(petalAlbedo, vec3(0.0018, 0.0020, 0.0070), veinMask * 0.85);

          float throatEye = 1.0 - smoothstep(0.02, 0.11, pv);
          petalAlbedo = mix(petalAlbedo, vec3(0.045, 0.038, 0.022), throatEye * 0.45);
        } else {
          // 浅色点缀花朵保持冷调淡紫银灰 (与全场景基调完全统一，绝不偏黄偏褐)
          vec3 paleLavender = mix(vec3(0.088, 0.082, 0.148), vec3(0.128, 0.120, 0.198), hueShift);
          petalAlbedo = mix(royalViolet, paleLavender, smoothstep(0.15, 0.85, pv));
        }

        // 次表面散射与边缘光：随黑洞从黄白变深蓝 (uBluePhotons) 同步转变
        vec3 warmSssTint = vec3(0.58, 0.34, 0.18);
        vec3 blueSssTint = vec3(0.18, 0.45, 1.15);
        vec3 sssTint = mix(warmSssTint, blueSssTint, uBluePhotons);

        vec3 warmRimCol = vec3(0.54, 0.34, 0.15);
        vec3 blueRimCol = vec3(0.18, 0.48, 1.25);
        vec3 rimCol = mix(warmRimCol, blueRimCol, uBluePhotons);

        // 宇航员背后的遮光走廊 (大幅提升角色背后光影层次)
        float astroShadow = evalAstronautShadow(vWorldPos);
        float clumpShade = vClumpShade * mix(0.48, 1.0, astroShadow);

        float ao = pow(smoothstep(-0.02, 0.82, pv), 1.55) * 0.88 + 0.12;
        float skyUp = clamp(N.y * 0.5 + 0.5, 0.0, 1.0);
        vec3 ambient = petalAlbedo * vec3(0.72, 0.78, 1.12) * (0.22 + 0.78 * pow(skyUp, 1.25)) * ao * clumpShade;

        vec3 L_disk = normalize(vec3(vWorldPos.x * 0.03, 0.15, -1.0));
        float backScatter = pow(clamp(dot(-N, L_disk) * 0.5 + 0.5, 0.0, 1.0), 2.4);
        float edgeThinness = smoothstep(0.46, 0.98, pv);
        vec3 sss = petalAlbedo * sssTint * backScatter * edgeThinness * 1.75 * clumpShade;

        float ndv = 1.0 - abs(dot(N, V));
        float ndv2 = ndv * ndv;
        float fresnel = ndv2 * ndv2;
        vec3 goldenRim = rimCol * fresnel * edgeThinness * ao * clumpShade * (isWhite > 0.5 ? 0.32 : 0.52);

        vec3 col = ambient + sss + goldenRim;

        if (glintSeed > 0.932 && isWhite < 0.5) {
          vec3 warmGlint = (dist > 9.5) ? vec3(0.96, 0.60, 0.25) * 0.85 : vec3(1.48, 0.96, 0.42) * 1.05;
          vec3 blueGlint = (dist > 9.5) ? vec3(0.32, 0.75, 1.85) * 0.85 : vec3(0.55, 1.25, 2.95) * 1.05;
          vec3 activeGlint = mix(warmGlint, blueGlint, uBluePhotons) * astroShadow;

          if (dist < 2.4) {
            float singleDewdrop = step(0.028, vLocalPos.z) * smoothstep(0.62, 0.95, pv) * exp(-pow(pu / 0.46, 2.0));
            col += activeGlint * singleDewdrop * 1.05;
          } else {
            float dPu = (pu - (hueShift - 0.5) * 0.65) / 0.28;
            float tipSpot = smoothstep(0.74, 0.98, pv) * exp(-dPu * dPu);
            float rawGain = mix(1.8, 3.6, fract(glintSeed * 37.3));
            col += activeGlint * tipSpot * rawGain;
          }
        }

        col = col * vFogTrans + vFogScatter;
        gl_FragColor = vec4(max(col, vec3(0.0)), 1.0);
      }
    `}),c=new se({side:be,uniforms:t,vertexShader:`
      attribute vec4 aFlowerData;
      varying vec3 vLeafCol;
      uniform float uTime;

      void main() {
        vec3 pos = position;
        vec4 worldOrigin = modelMatrix * instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0);
        float breeze = sin(uTime * 1.2 + worldOrigin.x * 0.8 + aFlowerData.w) * 0.005 * clamp(pos.y * 8.0, 0.0, 1.0);
        pos.x += breeze;

        vec4 wp = modelMatrix * instanceMatrix * vec4(pos, 1.0);
        vec3 wn = normalize(mat3(modelMatrix) * mat3(instanceMatrix) * normal);
        float sky = clamp(wn.y * 0.5 + 0.5, 0.0, 1.0);
        vLeafCol = mix(vec3(0.0010, 0.0016, 0.0045), vec3(0.0045, 0.0075, 0.0150), sky);

        gl_Position = projectionMatrix * viewMatrix * wp;
      }
    `,fragmentShader:`
      precision highp float;
      varying vec3 vLeafCol;
      void main() {
        gl_FragColor = vec4(vLeafCol, 1.0);
      }
    `}),d=new se({side:be,uniforms:t,vertexShader:`
      attribute vec4 aFlowerData;

      varying vec2 vUv;
      varying vec4 vFlowerData;
      varying vec3 vBaseLight;
      varying vec3 vFogScatter;
      varying float vFogTrans;

      ${pn}

      void main() {
        vUv = uv;
        vFlowerData = aFlowerData;

        vec3 pos = position;
        vec4 worldOrigin = modelMatrix * instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0);
        float breeze = sin(uTime * 1.25 + worldOrigin.x * 0.85 + worldOrigin.z * 0.55 + aFlowerData.w) * 0.007;
        pos.x += breeze * uv.y;

        vec4 wp = modelMatrix * instanceMatrix * vec4(pos, 1.0);
        vec3 N = normalize(mat3(modelMatrix) * mat3(instanceMatrix) * normal);
        vec3 V = normalize(cameraPosition - wp.xyz);

        float clumpShade = (aFlowerData.y > 0.75)
          ? 1.0
          : (0.52 + 0.62 * valueNoise3D(worldOrigin.xyz * vec3(1.85, 1.2, 1.85)));

        float astroShadow = evalAstronautShadow(wp.xyz);
        clumpShade *= mix(0.50, 1.0, astroShadow);

        float skyUp = clamp(N.y * 0.5 + 0.5, 0.0, 1.0);
        vec3 L_disk = normalize(vec3(wp.x * 0.03, 0.15, -1.0));
        float backScatter = clamp(dot(-N, L_disk) * 0.5 + 0.5, 0.0, 1.0);
        backScatter *= backScatter;
        float ndv = 1.0 - abs(dot(N, V));
        float fresnel = ndv * ndv * ndv;

        vBaseLight = vec3(
          (0.20 + 0.82 * skyUp) * clumpShade,
          backScatter * 1.65 * clumpShade,
          fresnel * 0.42 * clumpShade
        );

        vec3 zeroFog = applyVolumetricFog(vec3(0.0), cameraPosition, wp.xyz);
        vec3 unitFog = applyVolumetricFog(vec3(1.0), cameraPosition, wp.xyz);
        vFogScatter = zeroFog;
        vFogTrans = clamp(unitFog.r - zeroFog.r, 0.0, 1.0);

        gl_Position = projectionMatrix * viewMatrix * wp;
      }
    `,fragmentShader:`
      precision highp float;

      varying vec2 vUv;
      varying vec4 vFlowerData;
      varying vec3 vBaseLight;
      varying vec3 vFogScatter;
      varying float vFogTrans;

      ${pn}

      void main() {
        float pu = vUv.x;
        float pv = clamp(vUv.y, 0.0, 1.0);
        float hueShift = vFlowerData.x;
        float isWhite = step(0.75, vFlowerData.y);
        float glintSeed = vFlowerData.z;

        // 统一基调配方
        vec3 deepIndigoBase = vec3(0.0032, 0.0036, 0.0125);
        vec3 royalViolet    = mix(vec3(0.018, 0.015, 0.052), vec3(0.028, 0.024, 0.075), hueShift);
        vec3 lavenderMargin = mix(vec3(0.052, 0.046, 0.125), vec3(0.078, 0.068, 0.168), hueShift);

        vec3 petalAlbedo;
        if (isWhite < 0.5) {
          petalAlbedo = mix(deepIndigoBase, royalViolet, smoothstep(0.08, 0.48, pv));
          petalAlbedo = mix(petalAlbedo, lavenderMargin, pv * pv * 0.85 + 0.15 * pv);
          float vein = 1.0 - 0.50 * exp(-pu * pu * 14.0) * (1.0 - pv);
          petalAlbedo *= vein;
        } else {
          vec3 paleLavender = mix(vec3(0.088, 0.082, 0.148), vec3(0.128, 0.120, 0.198), hueShift);
          petalAlbedo = mix(royalViolet, paleLavender, smoothstep(0.15, 0.85, pv));
        }

        vec3 warmSssTint = vec3(0.58, 0.34, 0.18);
        vec3 blueSssTint = vec3(0.18, 0.45, 1.15);
        vec3 sssTint = mix(warmSssTint, blueSssTint, uBluePhotons);

        vec3 warmRimCol = vec3(0.54, 0.34, 0.15);
        vec3 blueRimCol = vec3(0.18, 0.48, 1.25);
        vec3 rimCol = mix(warmRimCol, blueRimCol, uBluePhotons);

        float ao = 0.20 + 0.80 * pv;
        float edge = smoothstep(0.42, 0.96, pv);
        vec3 col =
          petalAlbedo * vec3(0.72, 0.78, 1.12) * vBaseLight.x * ao +
          petalAlbedo * sssTint * vBaseLight.y * edge +
          rimCol * vBaseLight.z * edge * ao;

        if (glintSeed > 0.932 && isWhite < 0.5) {
          float dPu = (pu - (hueShift - 0.5) * 0.55) / 0.34;
          float tipSpot = smoothstep(0.68, 0.96, pv) * exp(-dPu * dPu);
          float rawGain = mix(1.6, 3.2, fract(glintSeed * 37.3));
          vec3 warmGlint = vec3(0.88, 0.55, 0.23);
          vec3 blueGlint = vec3(0.28, 0.68, 1.75);
          vec3 glintColor = mix(warmGlint, blueGlint, uBluePhotons);
          col += glintColor * tipSpot * rawGain;
        }

        col = col * vFogTrans + vFogScatter;
        gl_FragColor = vec4(max(col, vec3(0.0)), 1.0);
      }
    `}),f=new se({side:be,uniforms:t,vertexShader:`
      attribute vec4 aFlowerData;
      varying vec3 vLitColor;

      ${pn}

      void main() {
        vec4 wp = modelMatrix * instanceMatrix * vec4(position, 1.0);
        vec3 N = normalize(mat3(modelMatrix) * mat3(instanceMatrix) * normal);

        float pv = clamp(uv.y, 0.0, 1.0);
        float hueShift = aFlowerData.x;
        float isWhite = step(0.75, aFlowerData.y);
        float glintSeed = aFlowerData.z;

        // 与近中景一致的纯正紫罗兰基准色
        vec3 deepIndigoBase = vec3(0.0032, 0.0036, 0.0125);
        vec3 royalViolet    = mix(vec3(0.018, 0.015, 0.052), vec3(0.028, 0.024, 0.075), hueShift);
        vec3 lavenderMargin = mix(vec3(0.052, 0.046, 0.125), vec3(0.078, 0.068, 0.168), hueShift);

        vec3 albedo;
        if (isWhite < 0.5) {
          albedo = mix(deepIndigoBase, royalViolet, smoothstep(0.08, 0.52, pv));
          albedo = mix(albedo, lavenderMargin, pv);
        } else {
          vec3 paleLavender = mix(vec3(0.088, 0.082, 0.148), vec3(0.128, 0.120, 0.198), hueShift);
          albedo = mix(royalViolet, paleLavender, pv);
        }

        float skyUp = clamp(N.y * 0.5 + 0.5, 0.0, 1.0);
        float ao = 0.25 + 0.75 * pv;
        vec3 col = albedo * vec3(0.72, 0.78, 1.12) * (0.28 + 0.75 * skyUp) * ao;

        vec3 warmRim = vec3(0.62, 0.38, 0.18);
        vec3 blueRim = vec3(0.20, 0.48, 1.25);
        vec3 rimCol = mix(warmRim, blueRim, uBluePhotons);
        col += albedo * rimCol * pv * 0.85;

        if (glintSeed > 0.935 && isWhite < 0.5 && pv > 0.5) {
          vec3 warmG = vec3(0.82, 0.50, 0.21);
          vec3 blueG = vec3(0.25, 0.62, 1.65);
          col += mix(warmG, blueG, uBluePhotons) * mix(1.1, 2.3, fract(glintSeed * 31.7));
        }

        vLitColor = max(applyVolumetricFog(col, cameraPosition, wp.xyz), vec3(0.0));
        gl_Position = projectionMatrix * viewMatrix * wp;
      }
    `,fragmentShader:`
      precision highp float;
      varying vec3 vLitColor;
      void main() {
        gl_FragColor = vec4(vLitColor, 1.0);
      }
    `}),h=Mm(20261101),m=new Ae,g=new N(0,1,0),_=new N,p=new yn,u=new yn,b=new rn(0,0,0,"YXZ");function T(O,G,tt,$,st,lt,_t,It){const wt=Ge(G,tt);Ha(G,tt,_),O.push({x:G,y:wt+$,z:tt,nx:_.x,ny:_.y,nz:_.z,scale:st,yaw:h()*Math.PI*2,tiltX:(h()-.35)*.72,tiltZ:(h()-.5)*.68,hueShift:lt,variant:_t,glintSeed:It,swayPhase:h()*Math.PI*2})}function y(O,G,tt,$,st){const lt=new Float32Array(tt.length*4),_t=new Ia(O,G,tt.length);for(let wt=0;wt<tt.length;wt++){const Pt=tt[wt];m.position.set(Pt.x,Pt.y,Pt.z),_.set(Pt.nx,Pt.ny,Pt.nz).lerp(g,$).normalize(),p.setFromUnitVectors(g,_),b.set(Pt.tiltX*st,Pt.yaw,Pt.tiltZ*st,"YXZ"),u.setFromEuler(b),m.quaternion.multiplyQuaternions(p,u),m.scale.setScalar(Pt.scale),m.updateMatrix(),_t.setMatrixAt(wt,m.matrix),lt[wt*4+0]=Pt.hueShift,lt[wt*4+1]=Pt.variant,lt[wt*4+2]=Pt.glintSeed,lt[wt*4+3]=Pt.swayPhase}return O.setAttribute("aFlowerData",new kr(lt,4)),_t.instanceMatrix.needsUpdate=!0,_t.frustumCulled=!1,_t}const L=[],A=[{cx:-.575,cz:-1.16,targetY:1.345,count:4,spread:.036,scale:1.04},{cx:-.252,cz:-1.14,targetY:1.278,count:3,spread:.032,scale:.96},{cx:.648,cz:-1.34,targetY:1.404,count:4,spread:.036,scale:1.02},{cx:.456,cz:-1.07,targetY:1.338,count:6,spread:.048,scale:1.14}];for(const O of A)for(let G=0;G<O.count;G++){const tt=G/O.count*Math.PI*2+h()*.6,$=(G===0?0:.35+.65*h())*O.spread,st=O.cx+Math.cos(tt)*$,lt=O.cz+Math.sin(tt)*$*.7,_t=Ge(st,lt),It=O.targetY-_t+(h()-.5)*.025;T(L,st,lt,It,O.scale*(.9+.2*h()),.3+.6*h(),1,.1),T(L,st+(h()-.5)*.04,lt-.04,It-.065,1.15,h(),0,.1)}const w=[[.128,.962,-1.52],[.185,.918,-1.64],[.206,.954,-1.58],[.352,.955,-1.6],[.378,.938,-1.62],[.402,.896,-1.72],[.418,.938,-1.58],[.644,.872,-1.68],[.665,.852,-1.74],[.682,.942,-1.54],[.724,.802,-1.82],[.752,.774,-1.88]];for(const[O,G,tt]of w){const $=-tt,st=(2*O-1)*$*.5351,lt=1.62+$*(-.0148+(1-2*G)*.301),_t=Ge(st,tt);T(L,st,tt,lt-_t,.95,.5,0,.985)}for(let O=0;O<1950;O++){const G=h(),tt=-.98-Math.pow(G,1.1)*1.6,$=-tt*.64+.32,st=(h()*2-1)*$,lt=.045*Je(.18,.8,st/Math.max($,.1)),_t=.032*Je(-.28,-.85,st/Math.max($,.1)),It=.08+h()*.1+lt+_t,wt=.86+h()*.38;let Pt=h()*.89;tt<-2.35&&h()<.015&&(Pt=.938+h()*.058),T(L,st,tt,It,wt,h(),0,Pt)}const C=9400;for(;L.length<C;){let O,G;if(L.length<C-1900){G=-2.55-Math.pow(h(),.92)*5.05;const ct=-G*.62+.65;O=(h()*2-1)*ct}else{const D=Math.sqrt(h())*3.4,ct=h()*Math.PI*2;if(O=.31+Math.cos(ct)*D,G=-5.85+Math.sin(ct)*D,G>-.85)continue}const tt=O-.312,$=G+5.85;if(tt*tt+$*$<.036)continue;const lt=G>-5.85&&G<-4.25&&Math.abs(O-.34)<.34?.04+h()*.115:.12+h()*.135,_t=.87+h()*.44,It=.5+O/(2*Math.max(-G,1)*.5351);let wt=.008;It<.36?wt=.048:It>.82&&(wt=.045);const Pt=h()<wt?.935+h()*.062:h()*.88;T(L,O,G,lt,_t,h(),0,Pt)}const S=Sm(3,4),x=y(S,l,L,.48,1);i.add(x);const R=6400,H=bm(),F=new Float32Array(R*4),Y=new Ia(H,c,R);for(let O=0;O<R;O++){const G=-.92-Math.pow(h(),.92)*7.25,tt=-G*.63+.6,$=(h()*2-1)*tt,st=Ge($,G);Ha($,G,_),m.position.set($,st+.015+h()*.06,G),p.setFromUnitVectors(g,_),b.set((h()-.5)*.3,h()*Math.PI*2,(h()-.5)*.3,"YXZ"),u.setFromEuler(b),m.quaternion.multiplyQuaternions(p,u),m.scale.setScalar(1.08+h()*.72),m.updateMatrix(),Y.setMatrixAt(O,m.matrix),F[O*4+0]=h(),F[O*4+1]=0,F[O*4+2]=0,F[O*4+3]=h()*Math.PI*2}H.setAttribute("aFlowerData",new kr(F,4)),Y.instanceMatrix.needsUpdate=!0,Y.frustumCulled=!1,i.add(Y);const Z=[],W=14200;for(;Z.length<W;){const G=-7.2-Math.pow(h(),.95)*13.3,tt=-G*.63+1,$=(h()*2-1)*tt,st=$-.31,lt=G+5.85;if(st*st+lt*lt<7.8)continue;const _t=(.96+Je(-8,-20,G)*.24)*(.86+h()*.44),It=.12+h()*.13,wt=.5+$/(2*Math.max(-G,1)*.5351);let Pt=.014;(wt<.36||wt>.8)&&(Pt=.038);const D=h()<Pt?.935+h()*.062:h()*.86;T(Z,$,G,It,_t,h(),0,D)}const J=ym(),V=y(J,d,Z,.52,.85);i.add(V);const it=[],dt=[{x:-5.45,z:-22,count:10},{x:7.45,z:-23,count:12}];for(const O of dt)for(let G=0;G<O.count;G++){const tt=O.x+(h()-.5)*.42,$=O.z+(h()-.5)*.42;T(it,tt,$,.18+h()*.12,1.45+h()*.4,h(),1,.2)}const yt=33e3;for(;it.length<yt;){const G=-19.5-Math.pow(h(),1.45)*140.5,tt=-G*.65+2.4,$=(h()*2-1)*tt,lt=(1.24+Je(-20,-98,G)*1.15)*(.85+h()*.45),_t=.12+h()*.13,It=h()<.028?.938+h()*.06:h()*.85;T(it,$,G,_t,lt,h(),0,It)}const Nt=Em(),jt=y(Nt,f,it,.58,.68);return i.add(jt),{group:i,update(O,G,tt=0){t.uTime.value=O,t.uFogIntensity.value=G,t.uBluePhotons.value=tt}}}function wm(){const i=new Le,t={uTime:{value:0},uFogIntensity:{value:1},uBluePhotons:{value:0},uBhPos:{value:Wr.clone()}},e=new se({transparent:!0,depthWrite:!1,blending:wi,side:be,uniforms:t,vertexShader:`
      attribute float aLayerNorm;
      varying vec3 vWorldPos;
      varying vec3 vWorldNormal;
      varying vec2 vUv;
      varying float vLayerNorm;

      void main() {
        vUv = uv;
        vLayerNorm = aLayerNorm;
        vec4 wp = modelMatrix * vec4(position, 1.0);
        vWorldPos = wp.xyz;
        vWorldNormal = normalize(mat3(modelMatrix) * normal);
        gl_Position = projectionMatrix * viewMatrix * wp;
      }
    `,fragmentShader:`
      precision highp float;

      varying vec3 vWorldPos;
      varying vec3 vWorldNormal;
      varying vec2 vUv;
      varying float vLayerNorm;

      ${pn}

      float hash12(vec2 p) {
        vec3 p3 = fract(vec3(p.xyx) * 0.1031);
        p3 += dot(p3, p3.yzx + 33.33);
        return fract((p3.x + p3.y) * p3.z);
      }

      float noise2D(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        f = f * f * (3.0 - 2.0 * f);
        return mix(
          mix(hash12(i), hash12(i + vec2(1.0, 0.0)), f.x),
          mix(hash12(i + vec2(0.0, 1.0)), hash12(i + vec2(1.0, 1.0)), f.x),
          f.y
        );
      }

      float fbm2(vec2 p) {
        float v = 0.65 * noise2D(p);
        p = mat2(0.80, -0.60, 0.60, 0.80) * p * 2.15;
        v += 0.35 * noise2D(p);
        return v;
      }

      void main() {
        if (uFogIntensity <= 0.01) discard;

        vec3 toCam = cameraPosition - vWorldPos;
        float dist = length(toCam);
        vec3 V = toCam / max(dist, 0.001);

        vec2 centeredUv = vUv * 2.0 - 1.0;
        float radialMask = 1.0 - smoothstep(0.35, 0.98, length(centeredUv));
        float grazingFade = smoothstep(0.02, 0.22, abs(dot(normalize(vWorldNormal), V)));
        float nearFade = smoothstep(4.5, 13.0, dist) * (1.0 - smoothstep(110.0, 175.0, dist));

        float edgeFadeUv = smoothstep(0.0, 0.14, vUv.x) * smoothstep(1.0, 0.86, vUv.x) * smoothstep(0.0, 0.12, vUv.y) * smoothstep(1.0, 0.88, vUv.y);
        float mask = radialMask * grazingFade * nearFade * edgeFadeUv;
        if (mask <= 0.002) discard;

        vec2 windUv = vWorldPos.xz * vec2(0.045, 0.065) + vec2(uTime * 0.024, uTime * 0.014 + vLayerNorm * 3.7);
        float mist = smoothstep(0.32, 0.82, fbm2(windUv));

        vec3 rd = -V;
        vec3 bhDir = normalize(uBhPos - cameraPosition);
        float cBh = max(dot(rd, bhDir), 0.0);
        float forwardGlow = cBh * cBh * cBh;
        float horizonAlign = exp(-pow(abs(vWorldPos.x) * 0.012, 2.0));

        vec3 warmMistColor = mix(
          vec3(0.12, 0.10, 0.18),
          vec3(0.95, 0.64, 0.34),
          clamp(0.45 + 0.55 * forwardGlow + 0.25 * horizonAlign, 0.0, 1.0)
        );
        vec3 blueMistColor = mix(
          vec3(0.06, 0.10, 0.24),
          vec3(0.32, 0.76, 1.85),
          clamp(0.45 + 0.55 * forwardGlow + 0.25 * horizonAlign, 0.0, 1.0)
        );
        vec3 mistColor = mix(warmMistColor, blueMistColor, uBluePhotons);

        float astroShadow = evalAstronautShadow(vWorldPos);
        float alpha = mist * mask * (1.0 - vLayerNorm * 0.50) * 0.042 * uFogIntensity * mix(0.55, 1.0, astroShadow);
        gl_FragColor = vec4(mistColor * alpha, alpha);
      }
    `}),n=3,r=28,s=28,o=[],a=[],l=[],c=[],d=[];for(let L=0;L<n;L++){const A=L/(n-1),w=new ni(190,155,r,s);w.rotateX(-Math.PI/2);const C=w.attributes.position,S=w.attributes.normal,x=w.attributes.uv,R=o.length/3;for(let F=0;F<C.count;F++){const Y=C.getX(F),Z=C.getZ(F)-82,J=Ge(Y,Z)+.24+A*.72;o.push(Y,J,Z),a.push(S.getX(F),S.getY(F),S.getZ(F)),l.push(x.getX(F),x.getY(F)),c.push(A)}const H=w.index.array;for(let F=0;F<H.length;F++)d.push(R+H[F]);w.dispose()}const f=new fe;f.setAttribute("position",new Gt(o,3)),f.setAttribute("normal",new Gt(a,3)),f.setAttribute("uv",new Gt(l,2)),f.setAttribute("aLayerNorm",new Gt(c,1)),f.setIndex(d),f.computeVertexNormals();const h=new $t(f,e);h.frustumCulled=!1,h.renderOrder=5,i.add(h);const m=220,g=new Float32Array(m*3),_=new Float32Array(m*3);let p=918273;const u=()=>(p=p*1664525+1013904223>>>0,p/4294967296);for(let L=0;L<m;L++){const A=-2.2-Math.pow(u(),.9)*24,w=(u()*2-1)*(-A*.58+.8),C=Math.min(Ge(w,A)+.14+u()*.38,1.32);g[L*3+0]=w,g[L*3+1]=C,g[L*3+2]=A,_[L*3+0]=u()*Math.PI*2,_[L*3+1]=.5+u()*.9,_[L*3+2]=u()}const b=new fe;b.setAttribute("position",new Re(g,3)),b.setAttribute("aSeed",new Re(_,3));const T=new se({transparent:!0,depthWrite:!1,blending:wi,uniforms:t,vertexShader:`
      attribute vec3 aSeed;
      varying float vAlpha;
      uniform float uTime;
      uniform float uFogIntensity;

      void main() {
        vec3 p = position;
        p.x += sin(uTime * 0.35 + aSeed.x) * 0.16;
        p.y += cos(uTime * 0.28 + aSeed.x * 1.3) * 0.09;
        p.z += sin(uTime * 0.22 + aSeed.y * 4.0) * 0.12;

        vec4 mv = viewMatrix * vec4(p, 1.0);
        float dist = max(-mv.z, 0.5);

        vAlpha = (0.20 + 0.35 * aSeed.z) * clamp(uFogIntensity, 0.0, 1.8) * smoothstep(1.2, 3.2, dist) * (1.0 - smoothstep(18.0, 26.0, dist));
        gl_PointSize = clamp((16.0 * aSeed.y) / dist, 1.5, 6.5);
        gl_Position = projectionMatrix * mv;
      }
    `,fragmentShader:`
      precision highp float;
      varying float vAlpha;
      uniform float uBluePhotons;

      void main() {
        vec2 d = gl_PointCoord - 0.5;
        float r2 = dot(d, d);
        if (r2 > 0.25) discard;
        float soft = (1.0 - r2 * 4.0);
        soft *= soft;

        vec3 warmPollen = vec3(1.15, 0.82, 0.46);
        vec3 bluePollen = vec3(0.35, 0.88, 1.95);
        vec3 col = mix(warmPollen, bluePollen, uBluePhotons) * soft * vAlpha;
        gl_FragColor = vec4(col, soft * vAlpha);
      }
    `}),y=new Sl(b,T);return y.frustumCulled=!1,y.renderOrder=6,i.add(y),{group:i,update(L,A,w=0){t.uTime.value=L,t.uFogIntensity.value=A,t.uBluePhotons.value=w}}}const Xn=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`;class Am{constructor(t){this.renderer=t,this.orthoCamera=new ml(-1,1,1,-1,0,1),this.quadGeo=new ni(2,2),this.quadMesh=new $t(this.quadGeo,null),this.quadScene=new Ml,this.quadScene.add(this.quadMesh),this.width=1,this.height=1,this.sceneRT=new Sn(1,1,{type:Qn,minFilter:Oe,magFilter:Oe,format:Be,depthBuffer:!0}),this.sceneRT.depthTexture=new yo(1,1),this.sceneRT.depthTexture.format=$n,this.sceneRT.depthTexture.type=Fn,this.cocRawRT=this._makeRT(1,1,Se),this.cocTempRT=this._makeRT(1,1,Se),this.cocDilatedRT=this._makeRT(1,1,Se),this.dofRT=this._makeRT(1,1),this.dofSmoothRT=this._makeRT(1,1),this.bloomLevels=5,this.bloomDownRTs=[],this.bloomUpRTs=[];for(let e=0;e<this.bloomLevels;e++)this.bloomDownRTs.push(this._makeRT(1,1)),e<this.bloomLevels-1&&this.bloomUpRTs.push(this._makeRT(1,1));this._initMaterials()}_makeRT(t,e,n=Oe){return new Sn(t,e,{type:Qn,minFilter:n,magFilter:n,format:Be,depthBuffer:!1})}_initMaterials(){this.cocMat=new se({uniforms:{tDepth:{value:null},uTexelSize:{value:new Dt(1,1)},uNear:{value:.25},uFar:{value:900},uFocusDist:{value:5.85},uDofStrength:{value:1}},vertexShader:Xn,fragmentShader:`
        precision highp float;
        varying vec2 vUv;

        uniform sampler2D tDepth;
        uniform vec2 uTexelSize;
        uniform float uNear;
        uniform float uFar;
        uniform float uFocusDist;
        uniform float uDofStrength;

        float linearizeDepth(float d) {
          float zNdc = d * 2.0 - 1.0;
          return (2.0 * uNear * uFar) / (uFar + uNear - zNdc * (uFar - uNear));
        }

        void main() {
          float rawD = texture2D(tDepth, vUv).r;
          float zLin = linearizeDepth(rawD);

          float coc = 0.0;
          if (zLin < uFocusDist) {
            float fg = (uFocusDist - zLin) / max(zLin * max(uFocusDist - 0.35, 0.5), 0.08);
            fg = max(fg - 0.032, 0.0) * 1.16;
            coc = -clamp(fg, 0.0, 1.0);
          } else {
            float bg = (zLin - uFocusDist) / max(zLin * 1.15, 0.5);
            bg = max(bg - 0.048, 0.0) * 0.34;
            // 天体球(黑洞吸积盘与星空 zLin > 240m)保持 100% 绝对零模糊(coc = 0.0)，防止景深pass模糊掉纤细光丝！
            float celestialKeepSharp = mix(0.72, 1.0, 1.0 - smoothstep(200.0, 260.0, zLin));
            coc = clamp(bg * celestialKeepSharp, 0.0, 0.72);
          }

          coc *= clamp(uDofStrength, 0.0, 2.0);

          float edgeClean = 1.0;
          if (coc > 0.012) {
            float zR = linearizeDepth(texture2D(tDepth, vUv + vec2( uTexelSize.x, 0.0)).r);
            float zL = linearizeDepth(texture2D(tDepth, vUv + vec2(-uTexelSize.x, 0.0)).r);
            float zU = linearizeDepth(texture2D(tDepth, vUv + vec2(0.0,  uTexelSize.y)).r);
            float zD = linearizeDepth(texture2D(tDepth, vUv + vec2(0.0, -uTexelSize.y)).r);
            float minNeighborZ = min(min(zR, zL), min(zU, zD));
            edgeClean = smoothstep(uFocusDist + 0.45, uFocusDist + 2.40, minNeighborZ);
          }

          gl_FragColor = vec4(coc, max(-coc, 0.0), zLin, edgeClean);
        }
      `}),this.cocDilateMat=new se({uniforms:{tCoc:{value:null},uStepAxis:{value:new Dt(1,0)},uMaxBlurPx:{value:26}},vertexShader:Xn,fragmentShader:`
        precision highp float;
        varying vec2 vUv;

        uniform sampler2D tCoc;
        uniform vec2 uStepAxis;
        uniform float uMaxBlurPx;

        void main() {
          vec4 center = texture2D(tCoc, vUv);
          float maxFg = center.g;

          float stepScale = max(uMaxBlurPx * 0.5 / 4.0, 1.0);
          float invMax = 1.0 / max(uMaxBlurPx * 0.5 + 1.0, 1.0);

          for (int k = -4; k <= 4; k++) {
            if (k == 0) continue;
            float fk = float(k);
            vec2 off = uStepAxis * (fk * stepScale);
            float sampleFg = texture2D(tCoc, vUv + off).g;
            float distNorm = abs(fk * stepScale) * invMax;
            if (sampleFg >= distNorm * 0.82) {
              maxFg = max(maxFg, sampleFg);
            }
          }

          gl_FragColor = vec4(center.r, maxFg, center.b, 1.0);
        }
      `}),this.bokehMat=new se({uniforms:{tColor:{value:null},tCocRaw:{value:null},tCocDilated:{value:null},uTexelSize:{value:new Dt(1,1)},uMaxBlurPx:{value:26}},vertexShader:Xn,fragmentShader:`
        precision highp float;
        varying vec2 vUv;

        uniform sampler2D tColor;
        uniform sampler2D tCocRaw;
        uniform sampler2D tCocDilated;
        uniform vec2 uTexelSize;
        uniform float uMaxBlurPx;

        const int NUM_TAPS = 48;
        const float GOLDEN_ANGLE = 2.39996323;

        float calcLuma(vec3 c) {
          return dot(c, vec3(0.2126, 0.7152, 0.0722));
        }

        void main() {
          vec3 centerCol = texture2D(tColor, vUv).rgb;
          vec4 rawCenter = texture2D(tCocRaw, vUv);
          float dilatedFg = texture2D(tCocDilated, vUv).g;

          float centerCoc = rawCenter.r;
          float centerZ = rawCenter.b;

          float effectiveNorm = max(abs(centerCoc), dilatedFg);
          float searchRadiusPx = effectiveNorm * uMaxBlurPx;

          if (searchRadiusPx < 0.65) {
            gl_FragColor = vec4(centerCol, 0.0);
            return;
          }

          vec3 bgSum = centerCol * 0.35;
          float bgWeight = 0.35;

          vec3 fgSum = vec3(0.0);
          float fgWeight = 0.0;
          float fgCoverage = 0.0;

          for (int i = 0; i < NUM_TAPS; i++) {
            float fi = float(i);
            float rNorm = sqrt((fi + 0.5) / float(NUM_TAPS));
            float theta = fi * GOLDEN_ANGLE;
            vec2 unitDisk = vec2(cos(theta), sin(theta)) * rNorm;

            vec2 tapOffsetPx = unitDisk * searchRadiusPx;
            vec2 tapUv = clamp(vUv + tapOffsetPx * uTexelSize, vec2(0.001), vec2(0.999));

            vec3 sCol = texture2D(tColor, tapUv).rgb;
            vec4 sCocData = texture2D(tCocRaw, tapUv);
            float sCoc = sCocData.r;
            float sZ = sCocData.b;

            float tapDistPx = rNorm * searchRadiusPx;
            float sRadiusPx = abs(sCoc) * uMaxBlurPx;

            float luma = calcLuma(sCol);
            float excessLuma = max(luma - 0.42, 0.0);
            float bokehBoost = 1.0 + (excessLuma * sqrt(excessLuma + 0.01)) * 3.4 * clamp(abs(sCoc) * 1.6, 0.0, 1.4);

            if (sCoc < -0.015) {
              float overlap = 1.0 - smoothstep(sRadiusPx * 0.86, sRadiusPx * 1.04 + 0.75, tapDistPx);
              if (overlap > 0.001) {
                float w = overlap * bokehBoost;
                fgSum += sCol * w;
                fgWeight += w;
                fgCoverage += overlap;
              }
            } else if (sCoc > 0.012 && centerCoc > 0.005) {
              float depthAccept = smoothstep(centerZ - 1.2, centerZ - 0.15, sZ);
              float radiusAccept = 1.0 - smoothstep(sRadiusPx * 0.88, sRadiusPx * 1.12 + 0.85, tapDistPx);
              float w = depthAccept * radiusAccept * bokehBoost * sCocData.a;
              bgSum += sCol * w;
              bgWeight += w;
            }
          }

          vec3 bgResult = bgSum / max(bgWeight, 0.0001);
          vec3 finalCol = bgResult;

          if (fgWeight > 0.0001) {
            vec3 fgResult = fgSum / fgWeight;
            float fgAlpha = clamp((fgCoverage / float(NUM_TAPS)) * 2.15, 0.0, 1.0);
            if (centerCoc < -0.04) {
              fgAlpha = mix(fgAlpha, 1.0, smoothstep(0.04, 0.25, -centerCoc));
            }
            finalCol = mix(bgResult, fgResult, fgAlpha);
          }

          gl_FragColor = vec4(finalCol, clamp(searchRadiusPx / max(uMaxBlurPx, 1.0), 0.0, 1.0));
        }
      `}),this.dofSmoothMat=new se({uniforms:{tDof:{value:null},uTexelSize:{value:new Dt(1,1)}},vertexShader:Xn,fragmentShader:`
        precision highp float;
        varying vec2 vUv;

        uniform sampler2D tDof;
        uniform vec2 uTexelSize;

        void main() {
          vec4 c = texture2D(tDof, vUv);
          float blurMask = smoothstep(0.08, 0.35, c.a);
          if (blurMask <= 0.001) {
            gl_FragColor = vec4(c.rgb, 1.0);
            return;
          }

          vec2 d = uTexelSize * (1.75 * blurMask);
          vec3 sumRgb = c.rgb * 4.0;
          float sumW = 4.0;

          vec4 s0 = texture2D(tDof, vUv + vec2(-d.x, -d.y)); float w0 = 1.0 * smoothstep(0.015, 0.10, s0.a); sumRgb += s0.rgb * w0; sumW += w0;
          vec4 s1 = texture2D(tDof, vUv + vec2( 0.0, -d.y)); float w1 = 2.0 * smoothstep(0.015, 0.10, s1.a); sumRgb += s1.rgb * w1; sumW += w1;
          vec4 s2 = texture2D(tDof, vUv + vec2( d.x, -d.y)); float w2 = 1.0 * smoothstep(0.015, 0.10, s2.a); sumRgb += s2.rgb * w2; sumW += w2;
          vec4 s3 = texture2D(tDof, vUv + vec2(-d.x,  0.0)); float w3 = 2.0 * smoothstep(0.015, 0.10, s3.a); sumRgb += s3.rgb * w3; sumW += w3;
          vec4 s5 = texture2D(tDof, vUv + vec2( d.x,  0.0)); float w5 = 2.0 * smoothstep(0.015, 0.10, s5.a); sumRgb += s5.rgb * w5; sumW += w5;
          vec4 s6 = texture2D(tDof, vUv + vec2(-d.x,  d.y)); float w6 = 1.0 * smoothstep(0.015, 0.10, s6.a); sumRgb += s6.rgb * w6; sumW += w6;
          vec4 s7 = texture2D(tDof, vUv + vec2( 0.0,  d.y)); float w7 = 2.0 * smoothstep(0.015, 0.10, s7.a); sumRgb += s7.rgb * w7; sumW += w7;
          vec4 s8 = texture2D(tDof, vUv + vec2( d.x,  d.y)); float w8 = 1.0 * smoothstep(0.015, 0.10, s8.a); sumRgb += s8.rgb * w8; sumW += w8;

          gl_FragColor = vec4(mix(c.rgb, sumRgb / max(sumW, 0.0001), blurMask), 1.0);
        }
      `}),this.bloomDownMat=new se({uniforms:{tSource:{value:null},uTexelSize:{value:new Dt(1,1)},uIsFirstMip:{value:1},uThreshold:{value:1.15},uKnee:{value:.35}},vertexShader:Xn,fragmentShader:`
        precision highp float;
        varying vec2 vUv;

        uniform sampler2D tSource;
        uniform vec2 uTexelSize;
        uniform float uIsFirstMip;
        uniform float uThreshold;
        uniform float uKnee;

        vec3 prefilter(vec3 c) {
          c = min(c, vec3(12.0));
          if (uIsFirstMip < 0.5) return c;
          float br = max(c.r, max(c.g, c.b));
          float rq = clamp(br - uThreshold + uKnee, 0.0, 2.0 * uKnee);
          rq = (rq * rq) / (4.0 * uKnee + 1e-4);
          float mult = max(rq, br - uThreshold) / max(br, 1e-4);
          return c * mult;
        }

        void main() {
          vec2 ts = uTexelSize;
          vec3 A = prefilter(texture2D(tSource, vUv + ts * vec2(-2.0, -2.0)).rgb);
          vec3 B = prefilter(texture2D(tSource, vUv + ts * vec2( 0.0, -2.0)).rgb);
          vec3 C = prefilter(texture2D(tSource, vUv + ts * vec2( 2.0, -2.0)).rgb);
          vec3 D = prefilter(texture2D(tSource, vUv + ts * vec2(-1.0, -1.0)).rgb);
          vec3 E = prefilter(texture2D(tSource, vUv + ts * vec2( 1.0, -1.0)).rgb);
          vec3 F = prefilter(texture2D(tSource, vUv + ts * vec2(-2.0,  0.0)).rgb);
          vec3 G = prefilter(texture2D(tSource, vUv).rgb);
          vec3 H = prefilter(texture2D(tSource, vUv + ts * vec2( 2.0,  0.0)).rgb);
          vec3 I = prefilter(texture2D(tSource, vUv + ts * vec2(-1.0,  1.0)).rgb);
          vec3 J = prefilter(texture2D(tSource, vUv + ts * vec2( 1.0,  1.0)).rgb);
          vec3 K = prefilter(texture2D(tSource, vUv + ts * vec2(-2.0,  2.0)).rgb);
          vec3 L = prefilter(texture2D(tSource, vUv + ts * vec2( 0.0,  2.0)).rgb);
          vec3 M = prefilter(texture2D(tSource, vUv + ts * vec2( 2.0,  2.0)).rgb);

          vec3 outCol = (D + E + I + J) * 0.125;
          outCol += (A + B + G + F) * 0.03125;
          outCol += (B + C + H + G) * 0.03125;
          outCol += (F + G + L + K) * 0.03125;
          outCol += (G + H + M + L) * 0.03125;

          gl_FragColor = vec4(outCol, 1.0);
        }
      `}),this.bloomUpMat=new se({uniforms:{tLowMip:{value:null},tHighMip:{value:null},uTexelSize:{value:new Dt(1,1)},uRadius:{value:1.05}},vertexShader:Xn,fragmentShader:`
        precision highp float;
        varying vec2 vUv;

        uniform sampler2D tLowMip;
        uniform sampler2D tHighMip;
        uniform vec2 uTexelSize;
        uniform float uRadius;

        void main() {
          vec2 d = uTexelSize * uRadius * vec2(1.18, 1.0);

          vec3 s =
            texture2D(tLowMip, vUv + vec2(-d.x, -d.y)).rgb * 1.0 +
            texture2D(tLowMip, vUv + vec2( 0.0, -d.y)).rgb * 2.0 +
            texture2D(tLowMip, vUv + vec2( d.x, -d.y)).rgb * 1.0 +
            texture2D(tLowMip, vUv + vec2(-d.x,  0.0)).rgb * 2.0 +
            texture2D(tLowMip, vUv).rgb * 4.0 +
            texture2D(tLowMip, vUv + vec2( d.x,  0.0)).rgb * 2.0 +
            texture2D(tLowMip, vUv + vec2(-d.x,  d.y)).rgb * 1.0 +
            texture2D(tLowMip, vUv + vec2( 0.0,  d.y)).rgb * 2.0 +
            texture2D(tLowMip, vUv + vec2( d.x,  d.y)).rgb * 1.0;

          vec3 upsampled = (s / 16.0) * 0.58 + texture2D(tHighMip, vUv).rgb;
          gl_FragColor = vec4(upsampled, 1.0);
        }
      `}),this.compositeMat=new se({uniforms:{tScene:{value:null},tBloom:{value:null},uBloomStrength:{value:1},uFogIntensity:{value:1},uBluePhotons:{value:0},uResolution:{value:new Dt(1,1)}},vertexShader:Xn,fragmentShader:`
        precision highp float;
        varying vec2 vUv;

        uniform sampler2D tScene;
        uniform sampler2D tBloom;
        uniform float uBloomStrength;
        uniform float uFogIntensity;
        uniform float uBluePhotons;
        uniform vec2 uResolution;

        vec3 cinemaTonemap(vec3 x) {
          float luma = dot(x, vec3(0.2126, 0.7152, 0.0722));
          vec3 desat = mix(x, vec3(luma) * vec3(1.01, 0.99, 0.95), smoothstep(2.4, 8.5, luma) * 0.18);

          const float a = 2.48;
          const float b = 0.032;
          const float c = 2.42;
          const float d = 0.58;
          const float e = 0.14;
          return clamp((desat * (a * desat + b)) / (desat * (c * desat + d) + e), 0.0, 1.0);
        }

        float ign(vec2 px) {
          return fract(52.9829189 * fract(dot(px, vec2(0.06711056, 0.00583715))));
        }

        void main() {
          vec2 texel = 1.0 / max(uResolution, vec2(1.0));
          vec3 hdr = texture2D(tScene, vUv).rgb;

          // 对比度自适应微细节锐化 (Contrast-Adaptive Micro-Sharpening)
          // 令黑洞吸积盘中的纤细瘦长光丝达到极佳的光学清晰度，彻底告别模糊感！
          vec3 nN = texture2D(tScene, vUv + vec2(0.0,  texel.y)).rgb;
          vec3 nS = texture2D(tScene, vUv + vec2(0.0, -texel.y)).rgb;
          vec3 nE = texture2D(tScene, vUv + vec2( texel.x, 0.0)).rgb;
          vec3 nW = texture2D(tScene, vUv + vec2(-texel.x, 0.0)).rgb;
          vec3 avgNeighbor = (nN + nS + nE + nW) * 0.25;
          hdr = max(hdr + (hdr - avgNeighbor) * 0.36, vec3(0.0));

          vec3 bloom = texture2D(tBloom, vUv).rgb;

          vec3 warmBloomTint = vec3(1.02, 0.94, 0.84);
          vec3 blueBloomTint = vec3(0.72, 0.94, 1.35);
          vec3 bloomTint = mix(warmBloomTint, blueBloomTint, uBluePhotons);

          hdr += bloom * bloomTint * (0.46 * uBloomStrength);  // 辉光加强

          vec3 mapped = cinemaTonemap(hdr * 0.98);

          vec2 vigUv = vUv * 2.0 - 1.0;
          float vig = 1.0 - 0.15 * dot(vigUv * vec2(0.75, 0.92), vigUv * vec2(0.75, 0.92));
          mapped *= clamp(vig, 0.78, 1.0);

          vec3 srgb = pow(max(mapped, vec3(0.0)), vec3(1.0 / 2.2));
          srgb += (ign(gl_FragCoord.xy) - 0.5) / 255.0;

          gl_FragColor = vec4(clamp(srgb, 0.0, 1.0), 1.0);
        }
      `})}setSize(t,e){this.width=Math.max(1,Math.floor(t)),this.height=Math.max(1,Math.floor(e)),this.sceneRT.setSize(this.width,this.height),this.cocRawRT.setSize(this.width,this.height),this.dofRT.setSize(this.width,this.height),this.dofSmoothRT.setSize(this.width,this.height);const n=Math.max(1,Math.floor(this.width*.5)),r=Math.max(1,Math.floor(this.height*.5));this.cocTempRT.setSize(n,r),this.cocDilatedRT.setSize(n,r);let s=n,o=r;for(let a=0;a<this.bloomLevels;a++)this.bloomDownRTs[a].setSize(s,o),a<this.bloomLevels-1&&this.bloomUpRTs[a].setSize(s,o),s=Math.max(1,Math.floor(s*.5)),o=Math.max(1,Math.floor(o*.5))}_blit(t,e){this.quadMesh.material=t,this.renderer.setRenderTarget(e),this.renderer.render(this.quadScene,this.orthoCamera)}render(t,e,n){const{dofStrength:r=1,focusDistance:s=5.85,bloomStrength:o=1,fogIntensity:a=1,bluePhotons:l=0}=n;this.renderer.setRenderTarget(this.sceneRT),this.renderer.clear(!0,!0,!1),this.renderer.render(t,e);const c=Math.min(this.width,this.height),d=Math.max(6,c/574*21.5);let f=this.sceneRT.texture;r>.01&&(this.cocMat.uniforms.tDepth.value=this.sceneRT.depthTexture,this.cocMat.uniforms.uTexelSize.value.set(1/this.width,1/this.height),this.cocMat.uniforms.uNear.value=e.near,this.cocMat.uniforms.uFar.value=e.far,this.cocMat.uniforms.uFocusDist.value=s,this.cocMat.uniforms.uDofStrength.value=r,this._blit(this.cocMat,this.cocRawRT),this.cocDilateMat.uniforms.tCoc.value=this.cocRawRT.texture,this.cocDilateMat.uniforms.uStepAxis.value.set(1/this.cocTempRT.width,0),this.cocDilateMat.uniforms.uMaxBlurPx.value=d,this._blit(this.cocDilateMat,this.cocTempRT),this.cocDilateMat.uniforms.tCoc.value=this.cocTempRT.texture,this.cocDilateMat.uniforms.uStepAxis.value.set(0,1/this.cocTempRT.height),this._blit(this.cocDilateMat,this.cocDilatedRT),this.bokehMat.uniforms.tColor.value=this.sceneRT.texture,this.bokehMat.uniforms.tCocRaw.value=this.cocRawRT.texture,this.bokehMat.uniforms.tCocDilated.value=this.cocDilatedRT.texture,this.bokehMat.uniforms.uTexelSize.value.set(1/this.width,1/this.height),this.bokehMat.uniforms.uMaxBlurPx.value=d,this._blit(this.bokehMat,this.dofRT),this.dofSmoothMat.uniforms.tDof.value=this.dofRT.texture,this.dofSmoothMat.uniforms.uTexelSize.value.set(1/this.width,1/this.height),this._blit(this.dofSmoothMat,this.dofSmoothRT),f=this.dofSmoothRT.texture);let h=f,m=this.width,g=this.height;for(let b=0;b<this.bloomLevels;b++)this.bloomDownMat.uniforms.tSource.value=h,this.bloomDownMat.uniforms.uTexelSize.value.set(1/m,1/g),this.bloomDownMat.uniforms.uIsFirstMip.value=b===0?1:0,this._blit(this.bloomDownMat,this.bloomDownRTs[b]),h=this.bloomDownRTs[b].texture,m=this.bloomDownRTs[b].width,g=this.bloomDownRTs[b].height;let _=this.bloomDownRTs[this.bloomLevels-1].texture,p=this.bloomDownRTs[this.bloomLevels-1].width,u=this.bloomDownRTs[this.bloomLevels-1].height;for(let b=this.bloomLevels-2;b>=0;b--)this.bloomUpMat.uniforms.tLowMip.value=_,this.bloomUpMat.uniforms.tHighMip.value=this.bloomDownRTs[b].texture,this.bloomUpMat.uniforms.uTexelSize.value.set(1/p,1/u),this._blit(this.bloomUpMat,this.bloomUpRTs[b]),_=this.bloomUpRTs[b].texture,p=this.bloomUpRTs[b].width,u=this.bloomUpRTs[b].height;this.compositeMat.uniforms.tScene.value=f,this.compositeMat.uniforms.tBloom.value=this.bloomUpRTs[0].texture,this.compositeMat.uniforms.uBloomStrength.value=o,this.compositeMat.uniforms.uFogIntensity.value=a,this.compositeMat.uniforms.uBluePhotons.value=l,this.compositeMat.uniforms.uResolution.value.set(this.width,this.height),this._blit(this.compositeMat,null)}}const Or=new N(0,1.62,0),El=new N(0,1.472,-10),mn=new N(.305,1.35,-5.85),bl=33.5,Ss=1024/574,nn=new URLSearchParams(window.location.search),Rm=nn.has("blue")?Math.max(0,Math.min(1,parseFloat(nn.get("blue"))||0)):0,Cm=nn.has("speed")?Math.max(0,Math.min(3,parseFloat(nn.get("speed"))||0)):3,Xt={cameraMode:"locked",rotate90:nn.get("rot90")==="1",dofStrength:nn.has("dof")?Math.max(0,Math.min(2,parseFloat(nn.get("dof"))||0)):.92,focusDistance:8.45,bloomStrength:2.2,fogIntensity:1.44,diskScale:1.6,diskSpeed:Cm,bluePhotons:Rm,skyDarkness:1.72},Pm=Jn.degToRad(7.5);let Tl=0,Cr=0;nn.get("mouse")==="1"&&window.addEventListener("message",i=>{const t=i.data;if(!t||t.type!=="hero-parallax")return;Tl=(typeof t.x=="number"?Math.max(-1,Math.min(1,t.x)):0)*Pm});const Dm=document.getElementById("canvas-container"),Ve=new Jp({antialias:!1,powerPreference:"high-performance",stencil:!1,depth:!0}),Lm=window.__FORCE_DPR__||Math.min(Math.max(window.devicePixelRatio||1,2),2.5);Ve.setPixelRatio(Lm);Ve.setSize(window.innerWidth,window.innerHeight);Ve.outputColorSpace=Fe;Ve.autoClear=!1;Ve.info.autoReset=!1;Dm.appendChild(Ve.domElement);const er=new Ml,le=new He(bl,window.innerWidth/Math.max(window.innerHeight,1),.25,900),Ce=new sm(le,Ve.domElement);Ce.enableDamping=!0;Ce.dampingFactor=.06;Ce.enabled=!1;Ce.target.copy(mn);Ce.minDistance=1.3;Ce.maxDistance=32;Ce.minPolarAngle=.2;Ce.maxPolarAngle=Math.PI*.465;const wl=_m();er.add(wl.mesh);const Al=xm();er.add(Al.group);const Rl=Tm();er.add(Rl.group);const Cl=wm();er.add(Cl.group);const Pl=new Am(Ve);function bo(){const i=Math.max(window.innerWidth,1),t=Math.max(window.innerHeight,1),e=i/t;le.aspect=e,le.position.copy(Or);const n=Math.tan(Jn.degToRad(bl*.5)),r=n*Ss;if(Xt.rotate90){le.up.set(-1,0,0);let s=r;const o=1/Ss;e<o*.92&&(s=n/Math.max(e,.25)),le.fov=Jn.radToDeg(2*Math.atan(s))}else{le.up.set(0,1,0);let s=n;e<Ss*.85&&(s=r*.85/Math.max(e,.35)),le.fov=Jn.radToDeg(2*Math.atan(s))}le.lookAt(El),le.updateProjectionMatrix()}function Dl(){const i=window.innerWidth,t=window.innerHeight,e=window.__FORCE_DPR__||Math.min(Math.max(window.devicePixelRatio||1,2),2.5);Ve.setPixelRatio(e),Ve.setSize(i,t),Pl.setSize(Math.floor(i*e),Math.floor(t*e)),Xt.cameraMode==="locked"?bo():(le.aspect=i/Math.max(t,1),le.updateProjectionMatrix())}window.addEventListener("resize",Dl);Dl();const xn=document.getElementById("hud");xn&&nn.get("hud")!=="1"&&xn.classList.add("hud-hidden");window.addEventListener("message",i=>{const t=i.data;t&&t.type==="toggle-hud"&&xn&&xn.classList.toggle("hud-hidden")});window.addEventListener("wheel",i=>{window.parent&&window.parent!==window&&window.parent.postMessage({type:"hero-scroll",dy:i.deltaY},"*")},{passive:!0});const Pr=document.getElementById("btn-toggle-hud"),tn=document.getElementById("btn-cam-lock"),en=document.getElementById("btn-cam-free"),vn=document.getElementById("btn-cam-rotate90");Xt.rotate90&&vn&&vn.classList.add("active");Pr==null||Pr.addEventListener("click",()=>{xn.classList.toggle("collapsed"),Pr.textContent=xn.classList.contains("collapsed")?"▸":"▾"});window.addEventListener("keydown",i=>{(i.key==="h"||i.key==="H")&&(xn==null||xn.classList.toggle("hud-hidden"))});tn==null||tn.addEventListener("click",()=>{Xt.cameraMode="locked",Ce.enabled=!1,tn.classList.add("active"),en==null||en.classList.remove("active"),bo()});en==null||en.addEventListener("click",()=>{Xt.cameraMode="free",Xt.rotate90=!1,vn==null||vn.classList.remove("active"),le.up.set(0,1,0),le.fov=38,le.updateProjectionMatrix(),Ce.target.copy(mn),Ce.enabled=!0,Ce.update(),en.classList.add("active"),tn==null||tn.classList.remove("active")});vn==null||vn.addEventListener("click",()=>{Xt.rotate90=!Xt.rotate90,vn.classList.toggle("active",Xt.rotate90),Xt.cameraMode!=="locked"&&(Xt.cameraMode="locked",Ce.enabled=!1,tn==null||tn.classList.add("active"),en==null||en.classList.remove("active")),bo()});function On(i,t,e,n){const r=document.getElementById(i),s=document.getElementById(t);r&&(r.value=String(Xt[e]),s&&(s.textContent=n(Xt[e])),r.addEventListener("input",()=>{const o=parseFloat(r.value);Xt[e]=o,e==="focusDistance"&&(Xt.manualFocus=!0),s&&(s.textContent=n(o))}))}On("slider-dof","val-dof","dofStrength",i=>i.toFixed(2));On("slider-focus","val-focus","focusDistance",i=>`${i.toFixed(2)}m`);On("slider-bloom","val-bloom","bloomStrength",i=>i.toFixed(2));On("slider-fog","val-fog","fogIntensity",i=>i.toFixed(2));On("slider-disk","val-disk","diskScale",i=>`${i.toFixed(2)}x`);On("slider-disk-speed","val-disk-speed","diskSpeed",i=>`${i.toFixed(2)}x`);On("slider-blue-photons","val-blue-photons","bluePhotons",i=>`${Math.round(i*100)}%`);On("slider-sky-dark","val-sky-dark","skyDarkness",i=>i.toFixed(2));const Ga=document.getElementById("slider-blue-photons");Ga&&Ga.addEventListener("input",()=>{window.__BLUE_MANUAL__=!0});const Um=new nm;let Va=!1;function To(){window.__PAUSE_LOOP__||requestAnimationFrame(To);const i=window.__FIXED_TIME__!==void 0?window.__FIXED_TIME__:Um.getElapsedTime();if(Ve.info.reset(),Xt.cameraMode==="free"){Ce.update();const e=Ge(le.position.x,le.position.z)+.44;le.position.y<e&&(le.position.y=e,le.lookAt(Ce.target))}if(nn.get("mouse")==="1"&&Xt.cameraMode==="locked"){Cr+=(Tl-Cr)*.075;const e=Math.cos(Cr),n=Math.sin(Cr),r=Or.x-mn.x,s=Or.z-mn.z;le.position.set(mn.x+r*e-s*n,Or.y,mn.z+r*n+s*e),le.lookAt(mn.x,El.y,mn.z)}if(!window.__BLUE_MANUAL__){const s=i%48;let o;s<20?o=0:s<24?o=(s-20)/4:s<44?o=1:o=1-(s-44)/4,Xt.bluePhotons=Math.max(0,Math.min(1,o))}const t=Xt.cameraMode==="free"&&!Xt.manualFocus?{...Xt,focusDistance:le.position.distanceTo(mn)}:Xt;if(wl.update(i,Xt.fogIntensity,Xt.diskScale,Xt.skyDarkness,Xt.diskSpeed,Xt.bluePhotons),Al.update(i,Xt.fogIntensity,Xt.bluePhotons),Rl.update(i,Xt.fogIntensity,Xt.bluePhotons),Cl.update(i,Xt.fogIntensity,Xt.bluePhotons),Pl.render(er,le,t),!Va){Va=!0,window.__SCENE_READY__=!0,window.__RENDERER_INFO__=Ve.info;const e=document.getElementById("loading-overlay");e&&setTimeout(()=>e.classList.add("hidden"),180)}}To();window.__RENDER_AT_TIME__=i=>{window.__FIXED_TIME__=i,To()};
