(()=>{/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var L0=0,xf=1,N0=2;var vc=1,D0=2,Va=3,Zi=0,yn=1,Nn=2,Ji=0,Ha=1,vf=2,yf=3,Sf=4,U0=5;var Ur=100,F0=101,O0=102,B0=103,k0=104,z0=200,G0=201,V0=202,H0=203,Mf=204,bf=205,W0=206,X0=207,q0=208,$0=209,Y0=210,K0=211,j0=212,Z0=213,J0=214,Xl=0,ql=1,$l=2,Ea=3,Yl=4,Kl=5,jl=6,Zl=7,bh=0,Q0=1,e_=2,Li=0,Ef=1,Tf=2,Af=3,wf=4,Rf=5,Cf=6,If=7,nf="attached",t_="detached",Pf=300,Qs=301,Fr=302,Eh=303,Th=304,yc=306,js=1e3,fi=1001,Ta=1002,Zt=1003,Ah=1004;var Or=1005;var Jt=1006,Wa=1007;var Ni=1008;var Vn=1009,Lf=1010,Nf=1011,Xa=1012,wh=1013,Di=1014,ni=1015,Ui=1016,Rh=1017,Ch=1018,qa=1020,Df=35902,Uf=35899,Ff=1021,Of=1022,ii=1023,Xi=1026,er=1027,Ih=1028,Ph=1029,tr=1030,Lh=1031;var Nh=1033,Sc=33776,Mc=33777,bc=33778,Ec=33779,Dh=35840,Uh=35841,Fh=35842,Oh=35843,Bh=36196,kh=37492,zh=37496,Gh=37488,Vh=37489,Tc=37490,Hh=37491,Wh=37808,Xh=37809,qh=37810,$h=37811,Yh=37812,Kh=37813,jh=37814,Zh=37815,Jh=37816,Qh=37817,eu=37818,tu=37819,nu=37820,iu=37821,su=36492,ru=36494,au=36495,ou=36283,cu=36284,Ac=36285,lu=36286;var yr=2300,Sr=2301,Vl=2302,sf=2303,rf=2400,af=2401,of=2402,n_=2500;var Bf=0,wc=1,$a=2,i_=3200;var Rc=0,s_=1,Rs="",Xt="srgb",In="srgb-linear",zo="linear",wt="srgb";var Hl=7680;var r_=519,a_=512,o_=513,c_=514,hu=515,l_=516,h_=517,uu=518,u_=519,kf=35044;var zf="300 es",Pi=2e3,Aa=2001;function vS(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function yS(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function wa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function d_(){let n=wa("canvas");return n.style.display="block",n}var Hg={},Ra=null;function Go(...n){let e="THREE."+n.shift();Ra?Ra("log",e,...n):console.log(e,...n)}function f_(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function De(...n){n=f_(n);let e="THREE."+n.shift();if(Ra)Ra("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function $e(...n){n=f_(n);let e="THREE."+n.shift();if(Ra)Ra("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function vr(...n){let e=n.join(" ");e in Hg||(Hg[e]=!0,De(...n))}function p_(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var m_={[Xl]:ql,[$l]:jl,[Yl]:Zl,[Ea]:Kl,[ql]:Xl,[jl]:$l,[Zl]:Yl,[Kl]:Ea},qi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Wg=1234567,Fo=Math.PI/180,Mr=180/Math.PI;function pi(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Tn[n&255]+Tn[n>>8&255]+Tn[n>>16&255]+Tn[n>>24&255]+"-"+Tn[e&255]+Tn[e>>8&255]+"-"+Tn[e>>16&15|64]+Tn[e>>24&255]+"-"+Tn[t&63|128]+Tn[t>>8&255]+"-"+Tn[t>>16&255]+Tn[t>>24&255]+Tn[i&255]+Tn[i>>8&255]+Tn[i>>16&255]+Tn[i>>24&255]).toLowerCase()}function rt(n,e,t){return Math.max(e,Math.min(t,n))}function Gf(n,e){return(n%e+e)%e}function SS(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function MS(n,e,t){return n!==e?(t-n)/(e-n):0}function Oo(n,e,t){return(1-t)*n+t*e}function bS(n,e,t,i){return Oo(n,e,1-Math.exp(-t*i))}function ES(n,e=1){return e-Math.abs(Gf(n,e*2)-e)}function TS(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function AS(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function wS(n,e){return n+Math.floor(Math.random()*(e-n+1))}function RS(n,e){return n+Math.random()*(e-n)}function CS(n){return n*(.5-Math.random())}function IS(n){n!==void 0&&(Wg=n);let e=Wg+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function PS(n){return n*Fo}function LS(n){return n*Mr}function NS(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function DS(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function US(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function FS(n,e,t,i,s){let r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+i)/2),h=a((e+i)/2),u=r((e-i)/2),d=a((e-i)/2),f=r((i-e)/2),p=a((i-e)/2);switch(s){case"XYX":n.set(o*h,c*u,c*d,o*l);break;case"YZY":n.set(c*d,o*h,c*u,o*l);break;case"ZXZ":n.set(c*u,c*d,o*h,o*l);break;case"XZX":n.set(o*h,c*p,c*f,o*l);break;case"YXY":n.set(c*f,o*h,c*p,o*l);break;case"ZYZ":n.set(c*p,c*f,o*h,o*l);break;default:De("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ii(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ct(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Br={DEG2RAD:Fo,RAD2DEG:Mr,generateUUID:pi,clamp:rt,euclideanModulo:Gf,mapLinear:SS,inverseLerp:MS,lerp:Oo,damp:bS,pingpong:ES,smoothstep:TS,smootherstep:AS,randInt:wS,randFloat:RS,randFloatSpread:CS,seededRandom:IS,degToRad:PS,radToDeg:LS,isPowerOfTwo:NS,ceilPowerOfTwo:DS,floorPowerOfTwo:US,setQuaternionFromProperEuler:FS,normalize:Ct,denormalize:Ii},$f=class $f{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};$f.prototype.isVector2=!0;var ce=$f,Qn=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let c=i[s+0],l=i[s+1],h=i[s+2],u=i[s+3],d=r[a+0],f=r[a+1],p=r[a+2],x=r[a+3];if(u!==x||c!==d||l!==f||h!==p){let g=c*d+l*f+h*p+u*x;g<0&&(d=-d,f=-f,p=-p,x=-x,g=-g);let m=1-o;if(g<.9995){let M=Math.acos(g),E=Math.sin(M);m=Math.sin(m*M)/E,o=Math.sin(o*M)/E,c=c*m+d*o,l=l*m+f*o,h=h*m+p*o,u=u*m+x*o}else{c=c*m+d*o,l=l*m+f*o,h=h*m+p*o,u=u*m+x*o;let M=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=M,l*=M,h*=M,u*=M}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,a){let o=i[s],c=i[s+1],l=i[s+2],h=i[s+3],u=r[a],d=r[a+1],f=r[a+2],p=r[a+3];return e[t]=o*p+h*u+c*f-l*d,e[t+1]=c*p+h*d+l*u-o*f,e[t+2]=l*p+h*f+o*d-c*u,e[t+3]=h*p-o*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),h=o(s/2),u=o(r/2),d=c(i/2),f=c(s/2),p=c(r/2);switch(a){case"XYZ":this._x=d*h*u+l*f*p,this._y=l*f*u-d*h*p,this._z=l*h*p+d*f*u,this._w=l*h*u-d*f*p;break;case"YXZ":this._x=d*h*u+l*f*p,this._y=l*f*u-d*h*p,this._z=l*h*p-d*f*u,this._w=l*h*u+d*f*p;break;case"ZXY":this._x=d*h*u-l*f*p,this._y=l*f*u+d*h*p,this._z=l*h*p+d*f*u,this._w=l*h*u-d*f*p;break;case"ZYX":this._x=d*h*u-l*f*p,this._y=l*f*u+d*h*p,this._z=l*h*p-d*f*u,this._w=l*h*u+d*f*p;break;case"YZX":this._x=d*h*u+l*f*p,this._y=l*f*u+d*h*p,this._z=l*h*p-d*f*u,this._w=l*h*u-d*f*p;break;case"XZY":this._x=d*h*u-l*f*p,this._y=l*f*u-d*h*p,this._z=l*h*p+d*f*u,this._w=l*h*u+d*f*p;break;default:De("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=i+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(a-s)*f}else if(i>o&&i>u){let f=2*Math.sqrt(1+i-o-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+l)/f}else if(o>u){let f=2*Math.sqrt(1+o-i-u);this._w=(r-l)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-i-o);this._w=(a-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=i*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-i*l,this._z=r*h+a*l+i*c-s*o,this._w=a*h-i*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){let l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Yf=class Yf{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Xg.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Xg.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*i),h=2*(o*t-r*s),u=2*(r*i-a*t);return this.x=t+c*l+a*u-o*h,this.y=i+c*h+o*l-r*u,this.z=s+c*u+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-i*c,this.z=i*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Cd.copy(this).projectOnVector(e),this.sub(Cd)}reflect(e){return this.sub(Cd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Yf.prototype.isVector3=!0;var C=Yf,Cd=new C,Xg=new Qn,Kf=class Kf{constructor(e,t,i,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,c,l)}set(e,t,i,s,r,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=i,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],h=i[4],u=i[7],d=i[2],f=i[5],p=i[8],x=s[0],g=s[3],m=s[6],M=s[1],E=s[4],v=s[7],b=s[2],T=s[5],R=s[8];return r[0]=a*x+o*M+c*b,r[3]=a*g+o*E+c*T,r[6]=a*m+o*v+c*R,r[1]=l*x+h*M+u*b,r[4]=l*g+h*E+u*T,r[7]=l*m+h*v+u*R,r[2]=d*x+f*M+p*b,r[5]=d*g+f*E+p*T,r[8]=d*m+f*v+p*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-i*r*h+i*o*c+s*r*l-s*a*c}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,d=o*c-h*r,f=l*r-a*c,p=t*u+i*d+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return e[0]=u*x,e[1]=(s*l-h*i)*x,e[2]=(o*i-s*a)*x,e[3]=d*x,e[4]=(h*t-s*c)*x,e[5]=(s*r-o*t)*x,e[6]=f*x,e[7]=(i*c-l*t)*x,e[8]=(a*t-i*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return vr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Id.makeScale(e,t)),this}rotate(e){return vr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Id.makeRotation(-e)),this}translate(e,t){return vr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Id.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Kf.prototype.isMatrix3=!0;var Ze=Kf,Id=new Ze,qg=new Ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),$g=new Ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function OS(){let n={enabled:!0,workingColorSpace:In,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===wt&&(s.r=Ss(s.r),s.g=Ss(s.g),s.b=Ss(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===wt&&(s.r=ba(s.r),s.g=ba(s.g),s.b=ba(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Rs?zo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return vr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return vr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[In]:{primaries:e,whitePoint:i,transfer:zo,toXYZ:qg,fromXYZ:$g,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Xt},outputColorSpaceConfig:{drawingBufferColorSpace:Xt}},[Xt]:{primaries:e,whitePoint:i,transfer:wt,toXYZ:qg,fromXYZ:$g,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Xt}}}),n}var st=OS();function Ss(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ba(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var la,Jl=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{la===void 0&&(la=wa("canvas")),la.width=e.width,la.height=e.height;let s=la.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=la}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=wa("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ss(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ss(t[i]/255)*255):t[i]=Ss(t[i]);return{data:t,width:e.width,height:e.height}}else return De("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},BS=0,Ca=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:BS++}),this.uuid=pi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Pd(s[a].image)):r.push(Pd(s[a]))}else r=Pd(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function Pd(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Jl.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(De("Texture: Unable to serialize Texture."),{})}var kS=0,Ld=new C,dn=class n extends qi{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=fi,s=fi,r=Jt,a=Ni,o=ii,c=Vn,l=n.DEFAULT_ANISOTROPY,h=Rs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kS++}),this.uuid=pi(),this.name="",this.source=new Ca(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ce(0,0),this.repeat=new ce(1,1),this.center=new ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ld).x}get height(){return this.source.getSize(Ld).y}get depth(){return this.source.getSize(Ld).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){De(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){De(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Pf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case js:e.x=e.x-Math.floor(e.x);break;case fi:e.x=e.x<0?0:1;break;case Ta:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case js:e.y=e.y-Math.floor(e.y);break;case fi:e.y=e.y<0?0:1;break;case Ta:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};dn.DEFAULT_IMAGE=null;dn.DEFAULT_MAPPING=Pf;dn.DEFAULT_ANISOTROPY=1;var jf=class jf{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],p=c[9],x=c[2],g=c[6],m=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(p+g)<.1&&Math.abs(l+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let E=(l+1)/2,v=(f+1)/2,b=(m+1)/2,T=(h+d)/4,R=(u+x)/4,y=(p+g)/4;return E>v&&E>b?E<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(E),s=T/i,r=R/i):v>b?v<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),i=T/s,r=y/s):b<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),i=R/r,s=y/r),this.set(i,s,r,t),this}let M=Math.sqrt((g-p)*(g-p)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(g-p)/M,this.y=(u-x)/M,this.z=(d-h)/M,this.w=Math.acos((l+f+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this.w=rt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this.w=rt(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};jf.prototype.isVector4=!0;var It=jf,Ql=class extends qi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Jt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new It(0,0,e,t),this.scissorTest=!1,this.viewport=new It(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:i.depth},r=new dn(s),a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Jt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Ca(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},On=class extends Ql{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Vo=class extends dn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var eh=class extends dn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Mh=class Mh{constructor(e,t,i,s,r,a,o,c,l,h,u,d,f,p,x,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,c,l,h,u,d,f,p,x,g)}set(e,t,i,s,r,a,o,c,l,h,u,d,f,p,x,g){let m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=c,m[2]=l,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=p,m[11]=x,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Mh().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,s=1/ha.setFromMatrixColumn(e,0).length(),r=1/ha.setFromMatrixColumn(e,1).length(),a=1/ha.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*h,f=a*u,p=o*h,x=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+p*l,t[5]=d-x*l,t[9]=-o*c,t[2]=x-d*l,t[6]=p+f*l,t[10]=a*c}else if(e.order==="YXZ"){let d=c*h,f=c*u,p=l*h,x=l*u;t[0]=d+x*o,t[4]=p*o-f,t[8]=a*l,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-p,t[6]=x+d*o,t[10]=a*c}else if(e.order==="ZXY"){let d=c*h,f=c*u,p=l*h,x=l*u;t[0]=d-x*o,t[4]=-a*u,t[8]=p+f*o,t[1]=f+p*o,t[5]=a*h,t[9]=x-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let d=a*h,f=a*u,p=o*h,x=o*u;t[0]=c*h,t[4]=p*l-f,t[8]=d*l+x,t[1]=c*u,t[5]=x*l+d,t[9]=f*l-p,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let d=a*c,f=a*l,p=o*c,x=o*l;t[0]=c*h,t[4]=x-d*u,t[8]=p*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=f*u+p,t[10]=d-x*u}else if(e.order==="XZY"){let d=a*c,f=a*l,p=o*c,x=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+x,t[5]=a*h,t[9]=f*u-p,t[2]=p*u-f,t[6]=o*h,t[10]=x*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(zS,e,GS)}lookAt(e,t,i){let s=this.elements;return Zn.subVectors(e,t),Zn.lengthSq()===0&&(Zn.z=1),Zn.normalize(),Hs.crossVectors(i,Zn),Hs.lengthSq()===0&&(Math.abs(i.z)===1?Zn.x+=1e-4:Zn.z+=1e-4,Zn.normalize(),Hs.crossVectors(i,Zn)),Hs.normalize(),ml.crossVectors(Zn,Hs),s[0]=Hs.x,s[4]=ml.x,s[8]=Zn.x,s[1]=Hs.y,s[5]=ml.y,s[9]=Zn.y,s[2]=Hs.z,s[6]=ml.z,s[10]=Zn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],h=i[1],u=i[5],d=i[9],f=i[13],p=i[2],x=i[6],g=i[10],m=i[14],M=i[3],E=i[7],v=i[11],b=i[15],T=s[0],R=s[4],y=s[8],w=s[12],P=s[1],U=s[5],V=s[9],F=s[13],L=s[2],B=s[6],X=s[10],W=s[14],ie=s[3],q=s[7],J=s[11],te=s[15];return r[0]=a*T+o*P+c*L+l*ie,r[4]=a*R+o*U+c*B+l*q,r[8]=a*y+o*V+c*X+l*J,r[12]=a*w+o*F+c*W+l*te,r[1]=h*T+u*P+d*L+f*ie,r[5]=h*R+u*U+d*B+f*q,r[9]=h*y+u*V+d*X+f*J,r[13]=h*w+u*F+d*W+f*te,r[2]=p*T+x*P+g*L+m*ie,r[6]=p*R+x*U+g*B+m*q,r[10]=p*y+x*V+g*X+m*J,r[14]=p*w+x*F+g*W+m*te,r[3]=M*T+E*P+v*L+b*ie,r[7]=M*R+E*U+v*B+b*q,r[11]=M*y+E*V+v*X+b*J,r[15]=M*w+E*F+v*W+b*te,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],p=e[3],x=e[7],g=e[11],m=e[15],M=c*f-l*d,E=o*f-l*u,v=o*d-c*u,b=a*f-l*h,T=a*d-c*h,R=a*u-o*h;return t*(x*M-g*E+m*v)-i*(p*M-g*b+m*T)+s*(p*E-x*b+m*R)-r*(p*v-x*T+g*R)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],a=e[5],o=e[9],c=e[2],l=e[6],h=e[10];return t*(a*h-o*l)-i*(r*h-o*c)+s*(r*l-a*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],p=e[12],x=e[13],g=e[14],m=e[15],M=t*o-i*a,E=t*c-s*a,v=t*l-r*a,b=i*c-s*o,T=i*l-r*o,R=s*l-r*c,y=h*x-u*p,w=h*g-d*p,P=h*m-f*p,U=u*g-d*x,V=u*m-f*x,F=d*m-f*g,L=M*F-E*V+v*U+b*P-T*w+R*y;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let B=1/L;return e[0]=(o*F-c*V+l*U)*B,e[1]=(s*V-i*F-r*U)*B,e[2]=(x*R-g*T+m*b)*B,e[3]=(d*T-u*R-f*b)*B,e[4]=(c*P-a*F-l*w)*B,e[5]=(t*F-s*P+r*w)*B,e[6]=(g*v-p*R-m*E)*B,e[7]=(h*R-d*v+f*E)*B,e[8]=(a*V-o*P+l*y)*B,e[9]=(i*P-t*V-r*y)*B,e[10]=(p*T-x*v+m*M)*B,e[11]=(u*v-h*T-f*M)*B,e[12]=(o*w-a*U-c*y)*B,e[13]=(t*U-i*w+s*y)*B,e[14]=(x*E-p*b-g*M)*B,e[15]=(h*b-u*E+d*M)*B,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+i,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+i,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,u=o+o,d=r*l,f=r*h,p=r*u,x=a*h,g=a*u,m=o*u,M=c*l,E=c*h,v=c*u,b=i.x,T=i.y,R=i.z;return s[0]=(1-(x+m))*b,s[1]=(f+v)*b,s[2]=(p-E)*b,s[3]=0,s[4]=(f-v)*T,s[5]=(1-(d+m))*T,s[6]=(g+M)*T,s[7]=0,s[8]=(p+E)*R,s[9]=(g-M)*R,s[10]=(1-(d+x))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let a=ha.set(s[0],s[1],s[2]).length(),o=ha.set(s[4],s[5],s[6]).length(),c=ha.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Ai.copy(this);let l=1/a,h=1/o,u=1/c;return Ai.elements[0]*=l,Ai.elements[1]*=l,Ai.elements[2]*=l,Ai.elements[4]*=h,Ai.elements[5]*=h,Ai.elements[6]*=h,Ai.elements[8]*=u,Ai.elements[9]*=u,Ai.elements[10]*=u,t.setFromRotationMatrix(Ai),i.x=a,i.y=o,i.z=c,this}makePerspective(e,t,i,s,r,a,o=Pi,c=!1){let l=this.elements,h=2*r/(t-e),u=2*r/(i-s),d=(t+e)/(t-e),f=(i+s)/(i-s),p,x;if(c)p=r/(a-r),x=a*r/(a-r);else if(o===Pi)p=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===Aa)p=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=Pi,c=!1){let l=this.elements,h=2/(t-e),u=2/(i-s),d=-(t+e)/(t-e),f=-(i+s)/(i-s),p,x;if(c)p=1/(a-r),x=a/(a-r);else if(o===Pi)p=-2/(a-r),x=-(a+r)/(a-r);else if(o===Aa)p=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=p,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Mh.prototype.isMatrix4=!0;var je=Mh,ha=new C,Ai=new je,zS=new C(0,0,0),GS=new C(1,1,1),Hs=new C,ml=new C,Zn=new C,Yg=new je,Kg=new Qn,$i=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-rt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(rt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-rt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(rt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-rt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:De("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Yg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Yg,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Kg.setFromEuler(this),this.setFromQuaternion(Kg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};$i.DEFAULT_ORDER="XYZ";var Ho=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},VS=0,jg=new C,ua=new Qn,ms=new je,gl=new C,wo=new C,HS=new C,WS=new Qn,Zg=new C(1,0,0),Jg=new C(0,1,0),Qg=new C(0,0,1),e0={type:"added"},XS={type:"removed"},da={type:"childadded",child:null},Nd={type:"childremoved",child:null},Bt=class n extends qi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:VS++}),this.uuid=pi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new C,t=new $i,i=new Qn,s=new C(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new je},normalMatrix:{value:new Ze}}),this.matrix=new je,this.matrixWorld=new je,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ho,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ua.setFromAxisAngle(e,t),this.quaternion.multiply(ua),this}rotateOnWorldAxis(e,t){return ua.setFromAxisAngle(e,t),this.quaternion.premultiply(ua),this}rotateX(e){return this.rotateOnAxis(Zg,e)}rotateY(e){return this.rotateOnAxis(Jg,e)}rotateZ(e){return this.rotateOnAxis(Qg,e)}translateOnAxis(e,t){return jg.copy(e).applyQuaternion(this.quaternion),this.position.add(jg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Zg,e)}translateY(e){return this.translateOnAxis(Jg,e)}translateZ(e){return this.translateOnAxis(Qg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ms.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?gl.copy(e):gl.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),wo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ms.lookAt(wo,gl,this.up):ms.lookAt(gl,wo,this.up),this.quaternion.setFromRotationMatrix(ms),s&&(ms.extractRotation(s.matrixWorld),ua.setFromRotationMatrix(ms),this.quaternion.premultiply(ua.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?($e("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(e0),da.child=e,this.dispatchEvent(da),da.child=null):$e("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(XS),Nd.child=e,this.dispatchEvent(Nd),Nd.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ms.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ms.multiply(e.parent.matrixWorld)),e.applyMatrix4(ms),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(e0),da.child=e,this.dispatchEvent(da),da.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wo,e,HS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wo,WS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),p=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),p.length>0&&(i.nodes=p)}return i.object=s,i;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Bt.DEFAULT_UP=new C(0,1,0);Bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var an=class extends Bt{constructor(){super(),this.isGroup=!0,this.type="Group"}},qS={type:"move"},Ia=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new an,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new an,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new an,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let x of e.hand.values()){let g=t.getJointPose(x,i),m=this._getHandJoint(l,x);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,p=.005;l.inputState.pinching&&d>f+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(qS)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new an;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},g_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ws={h:0,s:0,l:0},_l={h:0,s:0,l:0};function Dd(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Ge=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Xt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=st.workingColorSpace){return this.r=e,this.g=t,this.b=i,st.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=st.workingColorSpace){if(e=Gf(e,1),t=rt(t,0,1),i=rt(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=Dd(a,r,e+1/3),this.g=Dd(a,r,e),this.b=Dd(a,r,e-1/3)}return st.colorSpaceToWorking(this,s),this}setStyle(e,t=Xt){function i(r){r!==void 0&&parseFloat(r)<1&&De("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:De("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);De("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Xt){let i=g_[e.toLowerCase()];return i!==void 0?this.setHex(i,t):De("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ss(e.r),this.g=Ss(e.g),this.b=Ss(e.b),this}copyLinearToSRGB(e){return this.r=ba(e.r),this.g=ba(e.g),this.b=ba(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Xt){return st.workingToColorSpace(An.copy(this),e),Math.round(rt(An.r*255,0,255))*65536+Math.round(rt(An.g*255,0,255))*256+Math.round(rt(An.b*255,0,255))}getHexString(e=Xt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=st.workingColorSpace){st.workingToColorSpace(An.copy(this),t);let i=An.r,s=An.g,r=An.b,a=Math.max(i,s,r),o=Math.min(i,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case i:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-i)/u+2;break;case r:c=(i-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=st.workingColorSpace){return st.workingToColorSpace(An.copy(this),t),e.r=An.r,e.g=An.g,e.b=An.b,e}getStyle(e=Xt){st.workingToColorSpace(An.copy(this),e);let t=An.r,i=An.g,s=An.b;return e!==Xt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Ws),this.setHSL(Ws.h+e,Ws.s+t,Ws.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ws),e.getHSL(_l);let i=Oo(Ws.h,_l.h,t),s=Oo(Ws.s,_l.s,t),r=Oo(Ws.l,_l.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},An=new Ge;Ge.NAMES=g_;var br=class extends Bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $i,this.environmentIntensity=1,this.environmentRotation=new $i,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},wi=new C,gs=new C,Ud=new C,_s=new C,fa=new C,pa=new C,t0=new C,Fd=new C,Od=new C,Bd=new C,kd=new It,zd=new It,Gd=new It,Ks=class n{constructor(e=new C,t=new C,i=new C){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),wi.subVectors(e,t),s.cross(wi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){wi.subVectors(s,t),gs.subVectors(i,t),Ud.subVectors(e,t);let a=wi.dot(wi),o=wi.dot(gs),c=wi.dot(Ud),l=gs.dot(gs),h=gs.dot(Ud),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(l*c-o*h)*d,p=(a*h-o*c)*d;return r.set(1-f-p,p,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,_s)===null?!1:_s.x>=0&&_s.y>=0&&_s.x+_s.y<=1}static getInterpolation(e,t,i,s,r,a,o,c){return this.getBarycoord(e,t,i,s,_s)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,_s.x),c.addScaledVector(a,_s.y),c.addScaledVector(o,_s.z),c)}static getInterpolatedAttribute(e,t,i,s,r,a){return kd.setScalar(0),zd.setScalar(0),Gd.setScalar(0),kd.fromBufferAttribute(e,t),zd.fromBufferAttribute(e,i),Gd.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(kd,r.x),a.addScaledVector(zd,r.y),a.addScaledVector(Gd,r.z),a}static isFrontFacing(e,t,i,s){return wi.subVectors(i,t),gs.subVectors(e,t),wi.cross(gs).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return wi.subVectors(this.c,this.b),gs.subVectors(this.a,this.b),wi.cross(gs).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,a,o;fa.subVectors(s,i),pa.subVectors(r,i),Fd.subVectors(e,i);let c=fa.dot(Fd),l=pa.dot(Fd);if(c<=0&&l<=0)return t.copy(i);Od.subVectors(e,s);let h=fa.dot(Od),u=pa.dot(Od);if(h>=0&&u<=h)return t.copy(s);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(i).addScaledVector(fa,a);Bd.subVectors(e,r);let f=fa.dot(Bd),p=pa.dot(Bd);if(p>=0&&f<=p)return t.copy(r);let x=f*l-c*p;if(x<=0&&l>=0&&p<=0)return o=l/(l-p),t.copy(i).addScaledVector(pa,o);let g=h*p-f*u;if(g<=0&&u-h>=0&&f-p>=0)return t0.subVectors(r,s),o=(u-h)/(u-h+(f-p)),t.copy(s).addScaledVector(t0,o);let m=1/(g+x+d);return a=x*m,o=d*m,t.copy(i).addScaledVector(fa,a).addScaledVector(pa,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},vn=class{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Ri.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Ri.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Ri.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Ri):Ri.fromBufferAttribute(r,a),Ri.applyMatrix4(e.matrixWorld),this.expandByPoint(Ri);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),xl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),xl.copy(i.boundingBox)),xl.applyMatrix4(e.matrixWorld),this.union(xl)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ri),Ri.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ro),vl.subVectors(this.max,Ro),ma.subVectors(e.a,Ro),ga.subVectors(e.b,Ro),_a.subVectors(e.c,Ro),Xs.subVectors(ga,ma),qs.subVectors(_a,ga),mr.subVectors(ma,_a);let t=[0,-Xs.z,Xs.y,0,-qs.z,qs.y,0,-mr.z,mr.y,Xs.z,0,-Xs.x,qs.z,0,-qs.x,mr.z,0,-mr.x,-Xs.y,Xs.x,0,-qs.y,qs.x,0,-mr.y,mr.x,0];return!Vd(t,ma,ga,_a,vl)||(t=[1,0,0,0,1,0,0,0,1],!Vd(t,ma,ga,_a,vl))?!1:(yl.crossVectors(Xs,qs),t=[yl.x,yl.y,yl.z],Vd(t,ma,ga,_a,vl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ri).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ri).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xs[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xs[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xs[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xs[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xs[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xs[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xs[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xs[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xs),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},xs=[new C,new C,new C,new C,new C,new C,new C,new C],Ri=new C,xl=new vn,ma=new C,ga=new C,_a=new C,Xs=new C,qs=new C,mr=new C,Ro=new C,vl=new C,yl=new C,gr=new C;function Vd(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){gr.fromArray(n,r);let o=s.x*Math.abs(gr.x)+s.y*Math.abs(gr.y)+s.z*Math.abs(gr.z),c=e.dot(gr),l=t.dot(gr),h=i.dot(gr);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var rn=new C,Sl=new ce,$S=0,un=class extends qi{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:$S++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=kf,this.updateRanges=[],this.gpuType=ni,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Sl.fromBufferAttribute(this,t),Sl.applyMatrix3(e),this.setXY(t,Sl.x,Sl.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)rn.fromBufferAttribute(this,t),rn.applyMatrix3(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)rn.fromBufferAttribute(this,t),rn.applyMatrix4(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)rn.fromBufferAttribute(this,t),rn.applyNormalMatrix(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)rn.fromBufferAttribute(this,t),rn.transformDirection(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ii(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ct(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ii(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ii(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ii(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ii(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),i=Ct(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),i=Ct(i,this.array),s=Ct(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),i=Ct(i,this.array),s=Ct(s,this.array),r=Ct(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var Wo=class extends un{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Xo=class extends un{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Ot=class extends un{constructor(e,t,i){super(new Float32Array(e),t,i)}},YS=new vn,Co=new C,Hd=new C,Bn=class{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):YS.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Co.subVectors(e,this.center);let t=Co.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Co,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Hd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Co.copy(e.center).add(Hd)),this.expandByPoint(Co.copy(e.center).sub(Hd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},KS=0,di=new je,Wd=new Bt,xa=new C,Jn=new vn,Io=new vn,_n=new C,on=class n extends qi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:KS++}),this.uuid=pi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(vS(e)?Xo:Wo)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Ze().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return di.makeRotationFromQuaternion(e),this.applyMatrix4(di),this}rotateX(e){return di.makeRotationX(e),this.applyMatrix4(di),this}rotateY(e){return di.makeRotationY(e),this.applyMatrix4(di),this}rotateZ(e){return di.makeRotationZ(e),this.applyMatrix4(di),this}translate(e,t,i){return di.makeTranslation(e,t,i),this.applyMatrix4(di),this}scale(e,t,i){return di.makeScale(e,t,i),this.applyMatrix4(di),this}lookAt(e){return Wd.lookAt(e),Wd.updateMatrix(),this.applyMatrix4(Wd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xa).negate(),this.translate(xa.x,xa.y,xa.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ot(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&De("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){$e("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];Jn.setFromBufferAttribute(r),this.morphTargetsRelative?(_n.addVectors(this.boundingBox.min,Jn.min),this.boundingBox.expandByPoint(_n),_n.addVectors(this.boundingBox.max,Jn.max),this.boundingBox.expandByPoint(_n)):(this.boundingBox.expandByPoint(Jn.min),this.boundingBox.expandByPoint(Jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&$e('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){$e("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(e){let i=this.boundingSphere.center;if(Jn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Io.setFromBufferAttribute(o),this.morphTargetsRelative?(_n.addVectors(Jn.min,Io.min),Jn.expandByPoint(_n),_n.addVectors(Jn.max,Io.max),Jn.expandByPoint(_n)):(Jn.expandByPoint(Io.min),Jn.expandByPoint(Io.max))}Jn.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)_n.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(_n));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)_n.fromBufferAttribute(o,l),c&&(xa.fromBufferAttribute(e,l),_n.add(xa)),s=Math.max(s,i.distanceToSquared(_n))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&$e('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){$e("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new un(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],c=[];for(let y=0;y<i.count;y++)o[y]=new C,c[y]=new C;let l=new C,h=new C,u=new C,d=new ce,f=new ce,p=new ce,x=new C,g=new C;function m(y,w,P){l.fromBufferAttribute(i,y),h.fromBufferAttribute(i,w),u.fromBufferAttribute(i,P),d.fromBufferAttribute(r,y),f.fromBufferAttribute(r,w),p.fromBufferAttribute(r,P),h.sub(l),u.sub(l),f.sub(d),p.sub(d);let U=1/(f.x*p.y-p.x*f.y);isFinite(U)&&(x.copy(h).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(U),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-p.x).multiplyScalar(U),o[y].add(x),o[w].add(x),o[P].add(x),c[y].add(g),c[w].add(g),c[P].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let y=0,w=M.length;y<w;++y){let P=M[y],U=P.start,V=P.count;for(let F=U,L=U+V;F<L;F+=3)m(e.getX(F+0),e.getX(F+1),e.getX(F+2))}let E=new C,v=new C,b=new C,T=new C;function R(y){b.fromBufferAttribute(s,y),T.copy(b);let w=o[y];E.copy(w),E.sub(b.multiplyScalar(b.dot(w))).normalize(),v.crossVectors(T,w);let U=v.dot(c[y])<0?-1:1;a.setXYZW(y,E.x,E.y,E.z,U)}for(let y=0,w=M.length;y<w;++y){let P=M[y],U=P.start,V=P.count;for(let F=U,L=U+V;F<L;F+=3)R(e.getX(F+0)),R(e.getX(F+1)),R(e.getX(F+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new un(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let s=new C,r=new C,a=new C,o=new C,c=new C,l=new C,h=new C,u=new C;if(e)for(let d=0,f=e.count;d<f;d+=3){let p=e.getX(d+0),x=e.getX(d+1),g=e.getX(d+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,g),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(i,p),c.fromBufferAttribute(i,x),l.fromBufferAttribute(i,g),o.add(h),c.add(h),l.add(h),i.setXYZ(p,o.x,o.y,o.z),i.setXYZ(x,c.x,c.y,c.z),i.setXYZ(g,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)_n.fromBufferAttribute(e,t),_n.normalize(),e.setXYZ(t,_n.x,_n.y,_n.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h),f=0,p=0;for(let x=0,g=c.length;x<g;x++){o.isInterleavedBufferAttribute?f=c[x]*o.data.stride+o.offset:f=c[x]*h;for(let m=0;m<h;m++)d[p++]=l[f++]}return new un(d,h,u)}if(this.index===null)return De("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=e(c,i);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){let d=l[h],f=e(d,i);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Pa=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=kf,this.updateRanges=[],this.version=0,this.uuid=pi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=pi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=pi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},Cn=new C,La=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Cn.fromBufferAttribute(this,t),Cn.applyMatrix4(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Cn.fromBufferAttribute(this,t),Cn.applyNormalMatrix(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Cn.fromBufferAttribute(this,t),Cn.transformDirection(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Ii(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ct(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=Ct(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ii(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ii(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ii(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ii(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ct(t,this.array),i=Ct(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ct(t,this.array),i=Ct(i,this.array),s=Ct(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ct(t,this.array),i=Ct(i,this.array),s=Ct(s,this.array),r=Ct(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Go("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new un(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Go("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Xd=new C,jS=new C,ZS=new Ze,Ci=class{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Xd.subVectors(i,t).cross(jS.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta(Xd),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||ZS.getNormalMatrix(e),s=this.coplanarPoint(Xd).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},JS=0,Pn=class extends qi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:JS++}),this.uuid=pi(),this.name="",this.type="Material",this.blending=Ha,this.side=Zi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Mf,this.blendDst=bf,this.blendEquation=Ur,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ge(0,0,0),this.blendAlpha=0,this.depthFunc=Ea,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=r_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hl,this.stencilZFail=Hl,this.stencilZPass=Hl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){De(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){De(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ge().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Ci().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new ce().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ce().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var vs=new C,qd=new C,Ml=new C,bl=new C,Er=class{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,vs)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=vs.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(vs.copy(this.origin).addScaledVector(this.direction,t),vs.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){qd.copy(e).add(t).multiplyScalar(.5),Ml.copy(t).sub(e).normalize(),bl.copy(this.origin).sub(qd);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Ml),o=bl.dot(this.direction),c=-bl.dot(Ml),l=bl.lengthSq(),h=Math.abs(1-a*a),u,d,f,p;if(h>0)if(u=a*c-o,d=a*o-c,p=r*h,u>=0)if(d>=-p)if(d<=p){let x=1/h;u*=x,d*=x,f=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d<=-p?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=p?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(qd).addScaledVector(Ml,d),f}intersectSphere(e,t){if(e.radius<0)return null;vs.subVectors(e.center,this.origin);let i=vs.dot(this.direction),s=vs.dot(vs)-i*i,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),i>c||o>s)||((o>i||i!==i)&&(i=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,vs)!==null}intersectTriangle(e,t,i,s,r){let a=this.origin,o=this.direction,c=o.x,l=o.y,h=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,x=t.y-a.y,g=t.z-a.z,m=i.x-a.x,M=i.y-a.y,E=i.z-a.z,v=Math.abs(c),b=Math.abs(l),T=Math.abs(h),R,y,w,P,U,V,F,L,B,X,W,ie;if(v>=b&&v>=T?(w=c,V=u,B=p,ie=m,c>=0?(R=l,y=h,P=d,U=f,F=x,L=g,X=M,W=E):(R=h,y=l,P=f,U=d,F=g,L=x,X=E,W=M)):b>=T?(w=l,V=d,B=x,ie=M,l>=0?(R=h,y=c,P=f,U=u,F=g,L=p,X=E,W=m):(R=c,y=h,P=u,U=f,F=p,L=g,X=m,W=E)):(w=h,V=f,B=g,ie=E,h>=0?(R=c,y=l,P=u,U=d,F=p,L=x,X=m,W=M):(R=l,y=c,P=d,U=u,F=x,L=p,X=M,W=m)),w===0)return null;let q=R/w,J=y/w,te=1/w,Ue=P-q*V,Ae=U-J*V,Mt=F-q*B,ot=L-J*B,_t=X-q*ie,K=W-J*ie,Q=_t*ot-K*Mt,xe=Ue*K-Ae*_t,qe=Mt*Ae-ot*Ue;if(s){if(Q<0||xe<0||qe<0)return null}else if((Q<0||xe<0||qe<0)&&(Q>0||xe>0||qe>0))return null;let be=Q+xe+qe;if(be===0)return null;let Ye=te*(Q*V+xe*B+qe*ie);return(be>0?Ye<0:Ye>0)?null:this.at(Ye/be,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ln=class extends Pn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $i,this.combine=bh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},n0=new je,_r=new Er,El=new Bn,i0=new C,Tl=new C,Al=new C,wl=new C,$d=new C,Rl=new C,s0=new C,Cl=new C,ht=class extends Bt{constructor(e=new on,t=new Ln){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Rl.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],u=r[c];h!==0&&($d.fromBufferAttribute(u,e),a?Rl.addScaledVector($d,h):Rl.addScaledVector($d.sub(t),h))}t.add(Rl)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),El.copy(i.boundingSphere),El.applyMatrix4(r),_r.copy(e.ray).recast(e.near),!(El.containsPoint(_r.origin)===!1&&(_r.intersectSphere(El,i0)===null||_r.origin.distanceToSquared(i0)>(e.far-e.near)**2))&&(n0.copy(r).invert(),_r.copy(e.ray).applyMatrix4(n0),!(i.boundingBox!==null&&_r.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,_r)))}_computeIntersections(e,t,i){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,x=d.length;p<x;p++){let g=d[p],m=a[g.materialIndex],M=Math.max(g.start,f.start),E=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let v=M,b=E;v<b;v+=3){let T=o.getX(v),R=o.getX(v+1),y=o.getX(v+2);s=Il(this,m,e,i,l,h,u,T,R,y),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let g=p,m=x;g<m;g+=3){let M=o.getX(g),E=o.getX(g+1),v=o.getX(g+2);s=Il(this,a,e,i,l,h,u,M,E,v),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let p=0,x=d.length;p<x;p++){let g=d[p],m=a[g.materialIndex],M=Math.max(g.start,f.start),E=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let v=M,b=E;v<b;v+=3){let T=v,R=v+1,y=v+2;s=Il(this,m,e,i,l,h,u,T,R,y),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let g=p,m=x;g<m;g+=3){let M=g,E=g+1,v=g+2;s=Il(this,a,e,i,l,h,u,M,E,v),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function QS(n,e,t,i,s,r,a,o){let c;if(e.side===yn?c=i.intersectTriangle(a,r,s,!0,o):c=i.intersectTriangle(s,r,a,e.side===Zi,o),c===null)return null;Cl.copy(o),Cl.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(Cl);return l<t.near||l>t.far?null:{distance:l,point:Cl.clone(),object:n}}function Il(n,e,t,i,s,r,a,o,c,l){n.getVertexPosition(o,Tl),n.getVertexPosition(c,Al),n.getVertexPosition(l,wl);let h=QS(n,e,t,i,Tl,Al,wl,s0);if(h){let u=new C;Ks.getBarycoord(s0,Tl,Al,wl,u),s&&(h.uv=Ks.getInterpolatedAttribute(s,o,c,l,u,new ce)),r&&(h.uv1=Ks.getInterpolatedAttribute(r,o,c,l,u,new ce)),a&&(h.normal=Ks.getInterpolatedAttribute(a,o,c,l,u,new C),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:c,c:l,normal:new C,materialIndex:0};Ks.getNormal(Tl,Al,wl,d.normal),h.face=d,h.barycoord=u}return h}var Po=new It,r0=new It,a0=new It,e2=new It,o0=new je,Pl=new C,Yd=new Bn,c0=new je,Kd=new Er,qo=class extends ht{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=nf,this.bindMatrix=new je,this.bindMatrixInverse=new je,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new vn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Pl),this.boundingBox.expandByPoint(Pl)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Bn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Pl),this.boundingSphere.expandByPoint(Pl)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Yd.copy(this.boundingSphere),Yd.applyMatrix4(s),e.ray.intersectsSphere(Yd)!==!1&&(c0.copy(s).invert(),Kd.copy(e.ray).applyMatrix4(c0),!(this.boundingBox!==null&&Kd.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Kd)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new It,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===nf?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===t_?this.bindMatrixInverse.copy(this.bindMatrix).invert():De("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let i=this.skeleton,s=this.geometry;r0.fromBufferAttribute(s.attributes.skinIndex,e),a0.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(Po.copy(t),t.set(0,0,0,0)):(Po.set(...t,1),t.set(0,0,0)),Po.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let a=a0.getComponent(r);if(a!==0){let o=r0.getComponent(r);o0.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),t.addScaledVector(e2.copy(Po).applyMatrix4(o0),a)}}return t.isVector4&&(t.w=Po.w),t.applyMatrix4(this.bindMatrixInverse)}},Na=class extends Bt{constructor(){super(),this.isBone=!0,this.type="Bone"}},Da=class extends dn{constructor(e=null,t=1,i=1,s,r,a,o,c,l=Zt,h=Zt,u,d){super(null,a,o,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},l0=new je,t2=new je,$o=class n{constructor(e=[],t=[]){this.uuid=pi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){De("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new je)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let i=new je;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){let e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:t2;l0.multiplyMatrices(o,t[r]),l0.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new n(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let i=new Da(t,e,e,ii,ni);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){let r=e.bones[i],a=t[r];a===void 0&&(De("Skeleton: No bone found with UUID:",r),a=new Na),this.bones.push(a),this.boneInverses.push(new je().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,i=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let a=t[s];e.bones.push(a.uuid);let o=i[s];e.boneInverses.push(o.toArray())}return e}},Ms=class extends un{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},va=new je,h0=new je,Ll=[],u0=new vn,n2=new je,Lo=new ht,No=new Bn,Tr=class extends ht{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ms(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,n2)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new vn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,va),u0.copy(e.boundingBox).applyMatrix4(va),this.boundingBox.union(u0)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Bn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,va),No.copy(e.boundingSphere).applyMatrix4(va),this.boundingSphere.union(No)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=e*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(Lo.geometry=this.geometry,Lo.material=this.material,Lo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),No.copy(this.boundingSphere),No.applyMatrix4(i),e.ray.intersectsSphere(No)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,va),h0.multiplyMatrices(i,va),Lo.matrixWorld=h0,Lo.raycast(e,Ll);for(let a=0,o=Ll.length;a<o;a++){let c=Ll[a];c.instanceId=r,c.object=this,t.push(c)}Ll.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Ms(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Da(new Float32Array(s*this.count),s,this.count,Ih,ni));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<i.length;l++)a+=i[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*e;return r[c]=o,r.set(i,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},xr=new Bn,i2=new ce(.5,.5),Nl=new C,Ua=class{constructor(e=new Ci,t=new Ci,i=new Ci,s=new Ci,r=new Ci,a=new Ci){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Pi,i=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],u=r[5],d=r[6],f=r[7],p=r[8],x=r[9],g=r[10],m=r[11],M=r[12],E=r[13],v=r[14],b=r[15];if(s[0].setComponents(l-a,f-h,m-p,b-M).normalize(),s[1].setComponents(l+a,f+h,m+p,b+M).normalize(),s[2].setComponents(l+o,f+u,m+x,b+E).normalize(),s[3].setComponents(l-o,f-u,m-x,b-E).normalize(),i)s[4].setComponents(c,d,g,v).normalize(),s[5].setComponents(l-c,f-d,m-g,b-v).normalize();else if(s[4].setComponents(l-c,f-d,m-g,b-v).normalize(),t===Pi)s[5].setComponents(l+c,f+d,m+g,b+v).normalize();else if(t===Aa)s[5].setComponents(c,d,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),xr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),xr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(xr)}intersectsSprite(e){xr.center.set(0,0,0);let t=i2.distanceTo(e.center);return xr.radius=.7071067811865476+t,xr.applyMatrix4(e.matrixWorld),this.intersectsSphere(xr)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Nl.x=s.normal.x>0?e.max.x:e.min.x,Nl.y=s.normal.y>0?e.max.y:e.min.y,Nl.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Nl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Fa=class extends Pn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ge(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},th=new C,nh=new C,d0=new je,Do=new Er,Dl=new Bn,jd=new C,f0=new C,Ar=class extends Bt{constructor(e=new on,t=new Fa){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)th.fromBufferAttribute(t,s-1),nh.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=th.distanceTo(nh);e.setAttribute("lineDistance",new Ot(i,1))}else De("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Dl.copy(i.boundingSphere),Dl.applyMatrix4(s),Dl.radius+=r,e.ray.intersectsSphere(Dl)===!1)return;d0.copy(s).invert(),Do.copy(e.ray).applyMatrix4(d0);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){let f=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let x=f,g=p-1;x<g;x+=l){let m=h.getX(x),M=h.getX(x+1),E=Ul(this,e,Do,c,m,M,x);E&&t.push(E)}if(this.isLineLoop){let x=h.getX(p-1),g=h.getX(f),m=Ul(this,e,Do,c,x,g,p-1);m&&t.push(m)}}else{let f=Math.max(0,a.start),p=Math.min(d.count,a.start+a.count);for(let x=f,g=p-1;x<g;x+=l){let m=Ul(this,e,Do,c,x,x+1,x);m&&t.push(m)}if(this.isLineLoop){let x=Ul(this,e,Do,c,p-1,f,p-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Ul(n,e,t,i,s,r,a){let o=n.geometry.attributes.position;if(th.fromBufferAttribute(o,s),nh.fromBufferAttribute(o,r),t.distanceSqToSegment(th,nh,jd,f0)>i)return;jd.applyMatrix4(n.matrixWorld);let l=e.ray.origin.distanceTo(jd);if(!(l<e.near||l>e.far))return{distance:l,point:f0.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}var p0=new C,m0=new C,Yo=class extends Ar{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)p0.fromBufferAttribute(t,s),m0.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+p0.distanceTo(m0);e.setAttribute("lineDistance",new Ot(i,1))}else De("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Ko=class extends Ar{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Oa=class extends Pn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ge(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},g0=new je,cf=new Er,Fl=new Bn,Ol=new C,jo=class extends Bt{constructor(e=new on,t=new Oa){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Fl.copy(i.boundingSphere),Fl.applyMatrix4(s),Fl.radius+=r,e.ray.intersectsSphere(Fl)===!1)return;g0.copy(s).invert(),cf.copy(e.ray).applyMatrix4(g0);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=i.index,u=i.attributes.position;if(l!==null){let d=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let p=d,x=f;p<x;p++){let g=l.getX(p);Ol.fromBufferAttribute(u,g),_0(Ol,g,c,s,e,t,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let p=d,x=f;p<x;p++)Ol.fromBufferAttribute(u,p),_0(Ol,p,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function _0(n,e,t,i,s,r,a){let o=cf.distanceSqToPoint(n);if(o<t){let c=new C;cf.closestPointToPoint(n,c),c.applyMatrix4(i);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Zo=class extends dn{constructor(e=[],t=Qs,i,s,r,a,o,c,l,h){super(e,t,i,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Jo=class extends dn{constructor(e,t,i,s,r,a,o,c,l){super(e,t,i,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Zs=class extends dn{constructor(e,t,i=Di,s,r,a,o=Zt,c=Zt,l,h=Xi,u=1){if(h!==Xi&&h!==er)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,s,r,a,o,c,h,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ca(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},ih=class extends Zs{constructor(e,t=Di,i=Qs,s,r,a=Zt,o=Zt,c,l=Xi){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,i,s,r,a,o,c,l),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Qo=class extends dn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},mi=class n extends on{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],u=[],d=0,f=0;p("z","y","x",-1,-1,i,t,e,a,r,0),p("z","y","x",1,-1,i,t,-e,a,r,1),p("x","z","y",1,1,e,i,t,s,a,2),p("x","z","y",1,-1,e,i,-t,s,a,3),p("x","y","z",1,-1,e,t,i,s,r,4),p("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new Ot(l,3)),this.setAttribute("normal",new Ot(h,3)),this.setAttribute("uv",new Ot(u,2));function p(x,g,m,M,E,v,b,T,R,y,w){let P=v/R,U=b/y,V=v/2,F=b/2,L=T/2,B=R+1,X=y+1,W=0,ie=0,q=new C;for(let J=0;J<X;J++){let te=J*U-F;for(let Ue=0;Ue<B;Ue++){let Ae=Ue*P-V;q[x]=Ae*M,q[g]=te*E,q[m]=L,l.push(q.x,q.y,q.z),q[x]=0,q[g]=0,q[m]=T>0?1:-1,h.push(q.x,q.y,q.z),u.push(Ue/R),u.push(1-J/y),W+=1}}for(let J=0;J<y;J++)for(let te=0;te<R;te++){let Ue=d+te+B*J,Ae=d+te+B*(J+1),Mt=d+(te+1)+B*(J+1),ot=d+(te+1)+B*J;c.push(Ue,Ae,ot),c.push(Ae,Mt,ot),ie+=6}o.addGroup(f,ie,w),f+=ie,d+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var ei=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){De("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),s=0,r=i.length,a;t?a=t:a=e*i[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=i[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===a)return s/(r-1);let h=i[s],d=i[s+1]-h,f=(a-h)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),c=t||(a.isVector2?new ce:new C);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new C,s=[],r=[],a=[],o=new C,c=new je;for(let f=0;f<=e;f++){let p=f/e;s[f]=this.getTangentAt(p,new C)}r[0]=new C,a[0]=new C;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,i.set(1,0,0)),u<=l&&(l=u,i.set(0,1,0)),d<=l&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let p=Math.acos(rt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(o,p))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(rt(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let p=1;p<=e;p++)r[p].applyMatrix4(c.makeRotationAxis(s[p],f*p)),a[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Ba=class extends ei{constructor(e=0,t=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new ce){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return i.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},sh=class extends Ba{constructor(e,t,i,s,r,a){super(e,t,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Vf(){let n=0,e=0,t=0,i=0;function s(r,a,o,c){n=r,e=o,t=-3*r+3*a-2*o-c,i=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,u){let d=(a-r)/l-(o-r)/(l+h)+(o-a)/h,f=(o-a)/h-(c-a)/(h+u)+(c-o)/u;d*=h,f*=h,s(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return n+e*r+t*a+i*o}}}var x0=new C,v0=new C,Zd=new Vf,Jd=new Vf,Qd=new Vf,rh=class extends ei{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new C){let i=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=s[(o-1)%r]:(v0.subVectors(s[0],s[1]).add(s[0]),l=v0);let u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(x0.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=x0),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(l.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),p<1e-4&&(p=x),g<1e-4&&(g=x),Zd.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,p,x,g),Jd.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,p,x,g),Qd.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,p,x,g)}else this.curveType==="catmullrom"&&(Zd.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),Jd.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),Qd.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return i.set(Zd.calc(c),Jd.calc(c),Qd.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new C().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function y0(n,e,t,i,s){let r=(i-e)*.5,a=(s-t)*.5,o=n*n,c=n*o;return(2*t-2*i+r+a)*c+(-3*t+3*i-2*r-a)*o+r*n+t}function s2(n,e){let t=1-n;return t*t*e}function r2(n,e){return 2*(1-n)*n*e}function a2(n,e){return n*n*e}function Bo(n,e,t,i){return s2(n,e)+r2(n,t)+a2(n,i)}function o2(n,e){let t=1-n;return t*t*t*e}function c2(n,e){let t=1-n;return 3*t*t*n*e}function l2(n,e){return 3*(1-n)*n*n*e}function h2(n,e){return n*n*n*e}function ko(n,e,t,i,s){return o2(n,e)+c2(n,t)+l2(n,i)+h2(n,s)}var ec=class extends ei{constructor(e=new ce,t=new ce,i=new ce,s=new ce){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new ce){let i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(ko(e,s.x,r.x,a.x,o.x),ko(e,s.y,r.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ah=class extends ei{constructor(e=new C,t=new C,i=new C,s=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new C){let i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(ko(e,s.x,r.x,a.x,o.x),ko(e,s.y,r.y,a.y,o.y),ko(e,s.z,r.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},tc=class extends ei{constructor(e=new ce,t=new ce){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ce){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ce){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},oh=class extends ei{constructor(e=new C,t=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new C){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new C){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},nc=class extends ei{constructor(e=new ce,t=new ce,i=new ce){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ce){let i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(Bo(e,s.x,r.x,a.x),Bo(e,s.y,r.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},wr=class extends ei{constructor(e=new C,t=new C,i=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new C){let i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(Bo(e,s.x,r.x,a.x),Bo(e,s.y,r.y,a.y),Bo(e,s.z,r.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ic=class extends ei{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ce){let i=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return i.set(y0(o,c.x,l.x,h.x,u.x),y0(o,c.y,l.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new ce().fromArray(s))}return this}},ch=Object.freeze({__proto__:null,ArcCurve:sh,CatmullRomCurve3:rh,CubicBezierCurve:ec,CubicBezierCurve3:ah,EllipseCurve:Ba,LineCurve:tc,LineCurve3:oh,QuadraticBezierCurve:nc,QuadraticBezierCurve3:wr,SplineCurve:ic}),lh=class extends ei{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ch[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let a=s[r]-i,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){let h=c[l];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new ch[s.type]().fromJSON(s))}return this}},sc=class extends lh{constructor(e){super(),this.type="Path",this.currentPoint=new ce,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new tc(this.currentPoint.clone(),new ce(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new nc(this.currentPoint.clone(),new ce(e,t),new ce(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,a){let o=new ec(this.currentPoint.clone(),new ce(e,t),new ce(i,s),new ce(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new ic(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,i,s,r,a),this}absarc(e,t,i,s,r,a){return this.absellipse(e,t,i,i,s,r,a),this}ellipse(e,t,i,s,r,a,o,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,i,s,r,a,o,c),this}absellipse(e,t,i,s,r,a,o,c){let l=new Ba(e,t,i,s,r,a,o,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Rr=class extends sc{constructor(e){super(e),this.uuid=pi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new sc().fromJSON(s))}return this}};function u2(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,r=__(n,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,c,l;if(i&&(r=g2(n,e,r,t)),n.length>80*t){o=n[0],c=n[1];let h=o,u=c;for(let d=t;d<s;d+=t){let f=n[d],p=n[d+1];f<o&&(o=f),p<c&&(c=p),f>h&&(h=f),p>u&&(u=p)}l=Math.max(h-o,u-c),l=l!==0?32767/l:0}return rc(r,a,t,o,c,l,0),a}function __(n,e,t,i,s){let r;if(s===w2(n,e,t,i)>0)for(let a=e;a<t;a+=i)r=S0(a/i|0,n[a],n[a+1],r);else for(let a=t-i;a>=e;a-=i)r=S0(a/i|0,n[a],n[a+1],r);return r&&ka(r,r.next)&&(oc(r),r=r.next),r}function Cr(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(ka(t,t.next)||qt(t.prev,t,t.next)===0)){if(oc(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function rc(n,e,t,i,s,r,a){if(!n)return;!a&&r&&S2(n,i,s,r);let o=n;for(;n.prev!==n.next;){let c=n.prev,l=n.next;if(r?f2(n,i,s,r):d2(n)){e.push(c.i,n.i,l.i),oc(n),n=l.next,o=l.next;continue}if(n=l,n===o){a?a===1?(n=p2(Cr(n),e),rc(n,e,t,i,s,r,2)):a===2&&m2(n,e,t,i,s,r):rc(Cr(n),e,t,i,s,r,1);break}}}function d2(n){let e=n.prev,t=n,i=n.next;if(qt(e,t,i)>=0)return!1;let s=e.x,r=t.x,a=i.x,o=e.y,c=t.y,l=i.y,h=Math.min(s,r,a),u=Math.min(o,c,l),d=Math.max(s,r,a),f=Math.max(o,c,l),p=i.next;for(;p!==e;){if(p.x>=h&&p.x<=d&&p.y>=u&&p.y<=f&&Uo(s,o,r,c,a,l,p.x,p.y)&&qt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function f2(n,e,t,i){let s=n.prev,r=n,a=n.next;if(qt(s,r,a)>=0)return!1;let o=s.x,c=r.x,l=a.x,h=s.y,u=r.y,d=a.y,f=Math.min(o,c,l),p=Math.min(h,u,d),x=Math.max(o,c,l),g=Math.max(h,u,d),m=lf(f,p,e,t,i),M=lf(x,g,e,t,i),E=n.prevZ,v=n.nextZ;for(;E&&E.z>=m&&v&&v.z<=M;){if(E.x>=f&&E.x<=x&&E.y>=p&&E.y<=g&&E!==s&&E!==a&&Uo(o,h,c,u,l,d,E.x,E.y)&&qt(E.prev,E,E.next)>=0||(E=E.prevZ,v.x>=f&&v.x<=x&&v.y>=p&&v.y<=g&&v!==s&&v!==a&&Uo(o,h,c,u,l,d,v.x,v.y)&&qt(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;E&&E.z>=m;){if(E.x>=f&&E.x<=x&&E.y>=p&&E.y<=g&&E!==s&&E!==a&&Uo(o,h,c,u,l,d,E.x,E.y)&&qt(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;v&&v.z<=M;){if(v.x>=f&&v.x<=x&&v.y>=p&&v.y<=g&&v!==s&&v!==a&&Uo(o,h,c,u,l,d,v.x,v.y)&&qt(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function p2(n,e){let t=n;do{let i=t.prev,s=t.next.next;!ka(i,s)&&v_(i,t,t.next,s)&&ac(i,s)&&ac(s,i)&&(e.push(i.i,t.i,s.i),oc(t),oc(t.next),t=n=s),t=t.next}while(t!==n);return Cr(t)}function m2(n,e,t,i,s,r){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&E2(a,o)){let c=y_(a,o);a=Cr(a,a.next),c=Cr(c,c.next),rc(a,e,t,i,s,r,0),rc(c,e,t,i,s,r,0);return}o=o.next}a=a.next}while(a!==n)}function g2(n,e,t,i){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*i,c=r<a-1?e[r+1]*i:n.length,l=__(n,o,c,i,!1);l===l.next&&(l.steiner=!0),s.push(b2(l))}s.sort(_2);for(let r=0;r<s.length;r++)t=x2(s[r],t);return t}function _2(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function x2(n,e){let t=v2(n,e);if(!t)return e;let i=y_(t,n);return Cr(i,i.next),Cr(t,t.next)}function v2(n,e){let t=e,i=n.x,s=n.y,r=-1/0,a;if(ka(n,t))return t;do{if(ka(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=i&&u>r&&(r=u,a=t.x<t.next.x?t:t.next,u===i))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,c=a.x,l=a.y,h=1/0;t=a;do{if(i>=t.x&&t.x>=c&&i!==t.x&&x_(s<l?i:r,s,c,l,s<l?r:i,s,t.x,t.y)){let u=Math.abs(s-t.y)/(i-t.x);ac(t,n)&&(u<h||u===h&&(t.x>a.x||t.x===a.x&&y2(a,t)))&&(a=t,h=u)}t=t.next}while(t!==o);return a}function y2(n,e){return qt(n.prev,n,e.prev)<0&&qt(e.next,n,n.next)<0}function S2(n,e,t,i){let s=n;do s.z===0&&(s.z=lf(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,M2(s)}function M2(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let a=i,o=0;for(let l=0;l<t&&(o++,a=a.nextZ,!!a);l++);let c=t;for(;o>0||c>0&&a;)o!==0&&(c===0||!a||i.z<=a.z)?(s=i,i=i.nextZ,o--):(s=a,a=a.nextZ,c--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=a}r.nextZ=null,t*=2}while(e>1);return n}function lf(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function b2(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function x_(n,e,t,i,s,r,a,o){return(s-a)*(e-o)>=(n-a)*(r-o)&&(n-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(i-o)}function Uo(n,e,t,i,s,r,a,o){return!(n===a&&e===o)&&x_(n,e,t,i,s,r,a,o)}function E2(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!T2(n,e)&&(ac(n,e)&&ac(e,n)&&A2(n,e)&&(qt(n.prev,n,e.prev)||qt(n,e.prev,e))||ka(n,e)&&qt(n.prev,n,n.next)>0&&qt(e.prev,e,e.next)>0)}function qt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function ka(n,e){return n.x===e.x&&n.y===e.y}function v_(n,e,t,i){let s=kl(qt(n,e,t)),r=kl(qt(n,e,i)),a=kl(qt(t,i,n)),o=kl(qt(t,i,e));return!!(s!==r&&a!==o||s===0&&Bl(n,t,e)||r===0&&Bl(n,i,e)||a===0&&Bl(t,n,i)||o===0&&Bl(t,e,i))}function Bl(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function kl(n){return n>0?1:n<0?-1:0}function T2(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&v_(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function ac(n,e){return qt(n.prev,n,n.next)<0?qt(n,e,n.next)>=0&&qt(n,n.prev,e)>=0:qt(n,e,n.prev)<0||qt(n,n.next,e)<0}function A2(n,e){let t=n,i=!1,s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function y_(n,e){let t=hf(n.i,n.x,n.y),i=hf(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function S0(n,e,t,i){let s=hf(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function oc(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function hf(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function w2(n,e,t,i){let s=0;for(let r=e,a=t-i;r<t;r+=i)s+=(n[a]-n[r])*(n[r+1]+n[a+1]),a=r;return s}var uf=class{static triangulate(e,t,i=2){return u2(e,t,i)}},Hi=class n{static area(e){let t=e.length,i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],r=[];M0(e),b0(i,e);let a=e.length;t.forEach(M0);for(let c=0;c<t.length;c++)s.push(a),a+=t[c].length,b0(i,t[c]);let o=uf.triangulate(i,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}};function M0(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function b0(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var cc=class n extends on{constructor(e=new Rr([new ce(.5,.5),new ce(-.5,.5),new ce(-.5,-.5),new ce(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,s=[],r=[];for(let o=0,c=e.length;o<c;o++){let l=e[o];a(l)}this.setAttribute("position",new Ot(s,3)),this.setAttribute("uv",new Ot(r,2)),this.computeVertexNormals();function a(o){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:f-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,m=t.extrudePath,M=t.UVGenerator!==void 0?t.UVGenerator:R2,E,v=!1,b,T,R,y;if(m){E=m.getSpacedPoints(h),v=!0,d=!1;let ee=m.isCatmullRomCurve3?m.closed:!1;b=m.computeFrenetFrames(h,ee),T=new C,R=new C,y=new C}d||(g=0,f=0,p=0,x=0);let w=o.extractPoints(l),P=w.shape,U=w.holes;if(!Hi.isClockWise(P)){P=P.reverse();for(let ee=0,se=U.length;ee<se;ee++){let re=U[ee];Hi.isClockWise(re)&&(U[ee]=re.reverse())}}function F(ee){let re=10000000000000001e-36,ae=ee[0];for(let ue=1;ue<=ee.length;ue++){let We=ue%ee.length,He=ee[We],Ke=He.x-ae.x,Je=He.y-ae.y,I=Ke*Ke+Je*Je,Et=Math.max(Math.abs(He.x),Math.abs(He.y),Math.abs(ae.x),Math.abs(ae.y)),ct=re*Et*Et;if(I<=ct){ee.splice(We,1),ue--;continue}ae=He}}F(P),U.forEach(F);let L=U.length,B=P;for(let ee=0;ee<L;ee++){let se=U[ee];P=P.concat(se)}function X(ee,se,re){return se||$e("ExtrudeGeometry: vec does not exist"),ee.clone().addScaledVector(se,re)}let W=P.length;function ie(ee,se,re){let ae,ue,We,He=ee.x-se.x,Ke=ee.y-se.y,Je=re.x-ee.x,I=re.y-ee.y,Et=He*He+Ke*Ke,ct=He*I-Ke*Je;if(Math.abs(ct)>Number.EPSILON){let A=Math.sqrt(Et),_=Math.sqrt(Je*Je+I*I),O=se.x-Ke/A,G=se.y+He/A,$=re.x-I/_,oe=re.y+Je/_,he=(($-O)*I-(oe-G)*Je)/(He*I-Ke*Je);ae=O+He*he-ee.x,ue=G+Ke*he-ee.y;let Y=ae*ae+ue*ue;if(Y<=2)return new ce(ae,ue);We=Math.sqrt(Y/2)}else{let A=!1;He>Number.EPSILON?Je>Number.EPSILON&&(A=!0):He<-Number.EPSILON?Je<-Number.EPSILON&&(A=!0):Math.sign(Ke)===Math.sign(I)&&(A=!0),A?(ae=-Ke,ue=He,We=Math.sqrt(Et)):(ae=He,ue=Ke,We=Math.sqrt(Et/2))}return new ce(ae/We,ue/We)}let q=[];for(let ee=0,se=B.length,re=se-1,ae=ee+1;ee<se;ee++,re++,ae++)re===se&&(re=0),ae===se&&(ae=0),q[ee]=ie(B[ee],B[re],B[ae]);let J=[],te,Ue=q.concat();for(let ee=0,se=L;ee<se;ee++){let re=U[ee];te=[];for(let ae=0,ue=re.length,We=ue-1,He=ae+1;ae<ue;ae++,We++,He++)We===ue&&(We=0),He===ue&&(He=0),te[ae]=ie(re[ae],re[We],re[He]);J.push(te),Ue=Ue.concat(te)}let Ae;if(g===0)Ae=Hi.triangulateShape(B,U);else{let ee=[],se=[];for(let re=0;re<g;re++){let ae=re/g,ue=f*Math.cos(ae*Math.PI/2),We=p*Math.sin(ae*Math.PI/2)+x;for(let He=0,Ke=B.length;He<Ke;He++){let Je=X(B[He],q[He],We);xe(Je.x,Je.y,-ue),ae===0&&ee.push(Je)}for(let He=0,Ke=L;He<Ke;He++){let Je=U[He];te=J[He];let I=[];for(let Et=0,ct=Je.length;Et<ct;Et++){let A=X(Je[Et],te[Et],We);xe(A.x,A.y,-ue),ae===0&&I.push(A)}ae===0&&se.push(I)}}Ae=Hi.triangulateShape(ee,se)}let Mt=Ae.length,ot=p+x;for(let ee=0;ee<W;ee++){let se=d?X(P[ee],Ue[ee],ot):P[ee];v?(R.copy(b.normals[0]).multiplyScalar(se.x),T.copy(b.binormals[0]).multiplyScalar(se.y),y.copy(E[0]).add(R).add(T),xe(y.x,y.y,y.z)):xe(se.x,se.y,0)}for(let ee=1;ee<=h;ee++)for(let se=0;se<W;se++){let re=d?X(P[se],Ue[se],ot):P[se];v?(R.copy(b.normals[ee]).multiplyScalar(re.x),T.copy(b.binormals[ee]).multiplyScalar(re.y),y.copy(E[ee]).add(R).add(T),xe(y.x,y.y,y.z)):xe(re.x,re.y,u/h*ee)}for(let ee=g-1;ee>=0;ee--){let se=ee/g,re=f*Math.cos(se*Math.PI/2),ae=p*Math.sin(se*Math.PI/2)+x;for(let ue=0,We=B.length;ue<We;ue++){let He=X(B[ue],q[ue],ae);xe(He.x,He.y,u+re)}for(let ue=0,We=U.length;ue<We;ue++){let He=U[ue];te=J[ue];for(let Ke=0,Je=He.length;Ke<Je;Ke++){let I=X(He[Ke],te[Ke],ae);v?xe(I.x,I.y+E[h-1].y,E[h-1].x+re):xe(I.x,I.y,u+re)}}}_t(),K();function _t(){let ee=s.length/3;if(d){let se=0,re=W*se;for(let ae=0;ae<Mt;ae++){let ue=Ae[ae];qe(ue[2]+re,ue[1]+re,ue[0]+re)}se=h+g*2,re=W*se;for(let ae=0;ae<Mt;ae++){let ue=Ae[ae];qe(ue[0]+re,ue[1]+re,ue[2]+re)}}else{for(let se=0;se<Mt;se++){let re=Ae[se];qe(re[2],re[1],re[0])}for(let se=0;se<Mt;se++){let re=Ae[se];qe(re[0]+W*h,re[1]+W*h,re[2]+W*h)}}i.addGroup(ee,s.length/3-ee,0)}function K(){let ee=s.length/3,se=0;Q(B,se),se+=B.length;for(let re=0,ae=U.length;re<ae;re++){let ue=U[re];Q(ue,se),se+=ue.length}i.addGroup(ee,s.length/3-ee,1)}function Q(ee,se){let re=ee.length;for(;--re>=0;){let ae=re,ue=re-1;ue<0&&(ue=ee.length-1);for(let We=0,He=h+g*2;We<He;We++){let Ke=W*We,Je=W*(We+1),I=se+ae+Ke,Et=se+ue+Ke,ct=se+ue+Je,A=se+ae+Je;be(I,Et,ct,A)}}}function xe(ee,se,re){c.push(ee),c.push(se),c.push(re)}function qe(ee,se,re){Ye(ee),Ye(se),Ye(re);let ae=s.length/3,ue=M.generateTopUV(i,s,ae-3,ae-2,ae-1);Rt(ue[0]),Rt(ue[1]),Rt(ue[2])}function be(ee,se,re,ae){Ye(ee),Ye(se),Ye(ae),Ye(se),Ye(re),Ye(ae);let ue=s.length/3,We=M.generateSideWallUV(i,s,ue-6,ue-3,ue-2,ue-1);Rt(We[0]),Rt(We[1]),Rt(We[3]),Rt(We[1]),Rt(We[2]),Rt(We[3])}function Ye(ee){s.push(c[ee*3+0]),s.push(c[ee*3+1]),s.push(c[ee*3+2])}function Rt(ee){r.push(ee.x),r.push(ee.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return C2(t,i,e)}static fromJSON(e,t){let i=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];i.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new ch[s.type]().fromJSON(s)),new n(i,e.options)}},R2={generateTopUV:function(n,e,t,i,s){let r=e[t*3],a=e[t*3+1],o=e[i*3],c=e[i*3+1],l=e[s*3],h=e[s*3+1];return[new ce(r,a),new ce(o,c),new ce(l,h)]},generateSideWallUV:function(n,e,t,i,s,r){let a=e[t*3],o=e[t*3+1],c=e[t*3+2],l=e[i*3],h=e[i*3+1],u=e[i*3+2],d=e[s*3],f=e[s*3+1],p=e[s*3+2],x=e[r*3],g=e[r*3+1],m=e[r*3+2];return Math.abs(o-h)<Math.abs(a-l)?[new ce(a,1-c),new ce(l,1-u),new ce(d,1-p),new ce(x,1-m)]:[new ce(o,1-c),new ce(h,1-u),new ce(f,1-p),new ce(g,1-m)]}};function C2(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Ir=class n extends on{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(i),c=Math.floor(s),l=o+1,h=c+1,u=e/o,d=t/c,f=[],p=[],x=[],g=[];for(let m=0;m<h;m++){let M=m*d-a;for(let E=0;E<l;E++){let v=E*u-r;p.push(v,-M,0),x.push(0,0,1),g.push(E/o),g.push(1-m/c)}}for(let m=0;m<c;m++)for(let M=0;M<o;M++){let E=M+l*m,v=M+l*(m+1),b=M+1+l*(m+1),T=M+1+l*m;f.push(E,v,T),f.push(v,b,T)}this.setIndex(f),this.setAttribute("position",new Ot(p,3)),this.setAttribute("normal",new Ot(x,3)),this.setAttribute("uv",new Ot(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}};var lc=class n extends on{constructor(e=new Rr([new ce(0,.5),new ce(-.5,-.5),new ce(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],s=[],r=[],a=[],o=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let h=0;h<e.length;h++)l(e[h]),this.addGroup(o,c,h),o+=c,c=0;this.setIndex(i),this.setAttribute("position",new Ot(s,3)),this.setAttribute("normal",new Ot(r,3)),this.setAttribute("uv",new Ot(a,2));function l(h){let u=s.length/3,d=h.extractPoints(t),f=d.shape,p=d.holes;Hi.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,m=p.length;g<m;g++){let M=p[g];Hi.isClockWise(M)===!0&&(p[g]=M.reverse())}let x=Hi.triangulateShape(f,p);for(let g=0,m=p.length;g<m;g++){let M=p[g];f=f.concat(M)}for(let g=0,m=f.length;g<m;g++){let M=f[g];s.push(M.x,M.y,0),r.push(0,0,1),a.push(M.x,M.y)}for(let g=0,m=x.length;g<m;g++){let M=x[g],E=M[0]+u,v=M[1]+u,b=M[2]+u;i.push(E,v,b),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return I2(t,e)}static fromJSON(e,t){let i=[];for(let s=0,r=e.shapes.length;s<r;s++){let a=t[e.shapes[s]];i.push(a)}return new n(i,e.curveSegments)}};function I2(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){let s=n[t];e.shapes.push(s.uuid)}else e.shapes.push(n.uuid);return e}var Pr=class n extends on{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let c=Math.min(a+o,Math.PI),l=0,h=[],u=new C,d=new C,f=[],p=[],x=[],g=[];for(let m=0;m<=i;m++){let M=[],E=m/i,v=a+E*o,b=e*Math.cos(v),T=Math.sqrt(e*e-b*b),R=0;m===0&&a===0?R=.5/t:m===i&&c===Math.PI&&(R=-.5/t);for(let y=0;y<=t;y++){let w=y/t,P=s+w*r;u.x=-T*Math.cos(P),u.y=b,u.z=T*Math.sin(P),p.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),g.push(w+R,1-E),M.push(l++)}h.push(M)}for(let m=0;m<i;m++)for(let M=0;M<t;M++){let E=h[m][M+1],v=h[m][M],b=h[m+1][M],T=h[m+1][M+1];(m!==0||a>0)&&f.push(E,v,T),(m!==i-1||c<Math.PI)&&f.push(v,b,T)}this.setIndex(f),this.setAttribute("position",new Ot(p,3)),this.setAttribute("normal",new Ot(x,3)),this.setAttribute("uv",new Ot(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var hc=class n extends on{constructor(e=new wr(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),t=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:s,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new C,c=new C,l=new ce,h=new C,u=[],d=[],f=[],p=[];x(),this.setIndex(p),this.setAttribute("position",new Ot(u,3)),this.setAttribute("normal",new Ot(d,3)),this.setAttribute("uv",new Ot(f,2));function x(){for(let E=0;E<t;E++)g(E);g(r===!1?t:0),M(),m()}function g(E){h=e.getPointAt(E/t,h);let v=a.normals[E],b=a.binormals[E];for(let T=0;T<=s;T++){let R=T/s*Math.PI*2,y=Math.sin(R),w=-Math.cos(R);c.x=w*v.x+y*b.x,c.y=w*v.y+y*b.y,c.z=w*v.z+y*b.z,c.normalize(),d.push(c.x,c.y,c.z),o.x=h.x+i*c.x,o.y=h.y+i*c.y,o.z=h.z+i*c.z,u.push(o.x,o.y,o.z)}}function m(){for(let E=1;E<=t;E++)for(let v=1;v<=s;v++){let b=(s+1)*(E-1)+(v-1),T=(s+1)*E+(v-1),R=(s+1)*E+v,y=(s+1)*(E-1)+v;p.push(b,T,y),p.push(T,R,y)}}function M(){for(let E=0;E<=t;E++)for(let v=0;v<=s;v++)l.x=E/t,l.y=v/s,f.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new n(new ch[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function kr(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];if(E0(s))s.isRenderTargetTexture?(De("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(E0(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function wn(n){let e={};for(let t=0;t<n.length;t++){let i=kr(n[t]);for(let s in i)e[s]=i[s]}return e}function E0(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function P2(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Hf(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:st.workingColorSpace}var S_={clone:kr,merge:wn},L2=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,N2=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ti=class extends Pn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=L2,this.fragmentShader=N2,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=kr(e.uniforms),this.uniformsGroups=P2(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new Ge().setHex(s.value);break;case"v2":this.uniforms[i].value=new ce().fromArray(s.value);break;case"v3":this.uniforms[i].value=new C().fromArray(s.value);break;case"v4":this.uniforms[i].value=new It().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Ze().fromArray(s.value);break;case"m4":this.uniforms[i].value=new je().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},hh=class extends ti{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},kn=class extends Pn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Rc,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $i,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},zn=class extends kn{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ce(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return rt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ge(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ge(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ge(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var uc=class extends Pn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Rc,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $i,this.combine=bh,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},uh=class extends Pn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=i_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},dh=class extends Pn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ys(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Wl(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}function D2(n){function e(s,r){return n[s]-n[r]}let t=n.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function T0(n,e,t){let i=n.length,s=new n.constructor(i);for(let r=0,a=0;a!==i;++r){let o=t[r]*e;for(let c=0;c!==e;++c)s[a++]=n[o+c]}return s}function U2(n,e,t,i){let s=1,r=n[0];for(;r!==void 0&&r[i]===void 0;)r=n[s++];if(r===void 0)return;let a=r[i];if(a!==void 0)if(Array.isArray(a))do a=r[i],a!==void 0&&(e.push(r.time),t.push(...a)),r=n[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[i],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=n[s++];while(r!==void 0);else do a=r[i],a!==void 0&&(e.push(r.time),t.push(a)),r=n[s++];while(r!==void 0)}var Yi=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];e:{t:{let a;n:{i:if(!(e<s)){for(let o=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=t[++i],e<s)break t}a=t.length;break n}if(!(e>=r)){let o=t[1];e<o&&(i=2,r=o);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=t[--i-1],e>=r)break t}a=i,i=0;break n}break e}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},fh=class extends Yi{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:rf,endingEnd:rf}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case af:r=e,o=2*t-i;break;case of:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=i}if(c===void 0)switch(this.getSettings_().endingEnd){case af:a=e,c=2*i-t;break;case of:a=1,c=i+s[1]-s[0];break;default:a=e-1,c=t}let l=(i-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(i-t)/(s-t),x=p*p,g=x*p,m=-d*g+2*d*x-d*p,M=(1+d)*g+(-1.5-2*d)*x+(-.5+d)*p+1,E=(-1-f)*g+(1.5+f)*x+.5*p,v=f*g-f*x;for(let b=0;b!==o;++b)r[b]=m*a[h+b]+M*a[l+b]+E*a[c+b]+v*a[u+b];return r}},ph=class extends Yi{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(i-t)/(s-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[l+d]*u+a[c+d]*h;return r}},mh=class extends Yi{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},gh=class extends Yi{interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this.inTangents,u=this.outTangents;if(!h||!u){let p=(i-t)/(s-t),x=1-p;for(let g=0;g!==o;++g)r[g]=a[l+g]*x+a[c+g]*p;return r}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let x=a[l+p],g=a[c+p],m=f*d+p*2,M=u[m],E=u[m+1],v=e*d+p*2,b=h[v],T=h[v+1],R=O2(i,t,M,b,s);r[p]=M_(R,x,E,T,g)}return r}};function M_(n,e,t,i,s){let r=1-n;return r*r*r*e+3*r*r*n*t+3*r*n*n*i+n*n*n*s}function F2(n,e,t,i,s){let r=1-n;return 3*r*r*(t-e)+6*r*n*(i-t)+3*n*n*(s-i)}function O2(n,e,t,i,s){let r=(n-e)/(s-e);for(let a=0;a<8;a++){let o=M_(r,e,t,i,s)-n;if(Math.abs(o)<1e-10)break;let c=F2(r,e,t,i,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}var Gn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ys(t,this.TimeBufferType),this.values=Ys(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Ys(e.times,Array),values:Ys(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s),Wl(e.settings)&&(i.settings={inTangents:Ys(e.settings.inTangents,Array),outTangents:Ys(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new mh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ph(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new fh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new gh(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case yr:t=this.InterpolantFactoryMethodDiscrete;break;case Sr:t=this.InterpolantFactoryMethodLinear;break;case Vl:t=this.InterpolantFactoryMethodSmooth;break;case sf:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return De("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return yr;case this.InterpolantFactoryMethodLinear:return Sr;case this.InterpolantFactoryMethodSmooth:return Vl;case this.InterpolantFactoryMethodBezier:return sf}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e;Wl(this.settings)&&(A0(this.settings.inTangents,e),A0(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&($e("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&($e("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=i[o];if(typeof c=="number"&&isNaN(c)){$e("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){$e("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&yS(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){$e("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Vl,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(s)c=!0;else{let u=o*i,d=u-i,f=u+i;for(let p=0;p!==i;++p){let x=t[u+p];if(x!==t[d+p]||x!==t[f+p]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let u=o*i,d=a*i;for(let f=0;f!==i;++f)t[d+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,c=a*i,l=0;l!==i;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,Wl(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function A0(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]*=e}Gn.prototype.ValueTypeName="";Gn.prototype.TimeBufferType=Float32Array;Gn.prototype.ValueBufferType=Float32Array;Gn.prototype.DefaultInterpolation=Sr;var bs=class extends Gn{constructor(e,t,i){super(e,t,i)}};bs.prototype.ValueTypeName="bool";bs.prototype.ValueBufferType=Array;bs.prototype.DefaultInterpolation=yr;bs.prototype.InterpolantFactoryMethodLinear=void 0;bs.prototype.InterpolantFactoryMethodSmooth=void 0;var dc=class extends Gn{constructor(e,t,i,s){super(e,t,i,s)}};dc.prototype.ValueTypeName="color";var Es=class extends Gn{constructor(e,t,i,s){super(e,t,i,s)}};Es.prototype.ValueTypeName="number";var _h=class extends Yi{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(i-t)/(s-t),l=e*o;for(let h=l+o;l!==h;l+=4)Qn.slerpFlat(r,0,a,l-o,a,l,c);return r}},Ts=class extends Gn{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new _h(this.times,this.values,this.getValueSize(),e)}};Ts.prototype.ValueTypeName="quaternion";Ts.prototype.InterpolantFactoryMethodSmooth=void 0;var As=class extends Gn{constructor(e,t,i){super(e,t,i)}};As.prototype.ValueTypeName="string";As.prototype.ValueBufferType=Array;As.prototype.DefaultInterpolation=yr;As.prototype.InterpolantFactoryMethodLinear=void 0;As.prototype.InterpolantFactoryMethodSmooth=void 0;var Js=class extends Gn{constructor(e,t,i,s){super(e,t,i,s)}};Js.prototype.ValueTypeName="vector";var fc=class{constructor(e="",t=-1,i=[],s=n_){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=pi(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],i=e.tracks,s=1/(e.fps||1);for(let a=0,o=i.length;a!==o;++a)t.push(k2(i[a]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=i.length;r!==a;++r)t.push(Gn.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(e,t,i,s){let r=t.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);let h=D2(c);c=T0(c,1,h),l=T0(l,1,h),!s&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new Es(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/i))}return new this(e,-1,a)}static findByName(e,t){let i=e;if(!Array.isArray(e)){let s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){let s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){let l=e[o],h=l.name.match(r);if(h&&h.length>1){let u=h[1],d=s[u];d||(s[u]=d=[]),d.push(l)}}let a=[];for(let o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,i));return a}resetDuration(){let e=this.tracks,t=0;for(let i=0,s=e.length;i!==s;++i){let r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let i=0;i<this.tracks.length;i++)e.push(this.tracks[i].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function B2(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Es;case"vector":case"vector2":case"vector3":case"vector4":return Js;case"color":return dc;case"quaternion":return Ts;case"bool":case"boolean":return bs;case"string":return As}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function k2(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=B2(n.type);if(n.times===void 0){let i=[],s=[];U2(n.keys,i,s,"value"),n.times=i,n.values=s}let t;return e.parse!==void 0?t=e.parse(n):t=new e(n.name,n.times,n.values,n.interpolation),Wl(n.settings)&&(t.settings={inTangents:Ys(n.settings.inTangents,Float32Array),outTangents:Ys(n.settings.outTangents,Float32Array)}),t}var Wi={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(w0(n)||(this.files[n]=e))},get:function(n){if(this.enabled!==!1&&!w0(n))return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};function w0(n){try{let e=n.slice(n.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var xh=class{constructor(e,t,i){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let f=l[u],p=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},b_=new xh,Ki=class{constructor(e){this.manager=e!==void 0?e:b_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Ki.DEFAULT_MATERIAL_NAME="__DEFAULT";var ys={},df=class extends Error{constructor(e,t){super(e),this.response=t}},za=class extends Ki{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Wi.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(ys[e]!==void 0){ys[e].push({onLoad:t,onProgress:i,onError:s});return}ys[e]=[],ys[e].push({onLoad:t,onProgress:i,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&De("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=ys[e],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,p=f!==0,x=0,g=new ReadableStream({start(m){M();function M(){u.read().then(({done:E,value:v})=>{if(E)m.close();else{x+=v.byteLength;let b=new ProgressEvent("progress",{lengthComputable:p,loaded:x,total:f});for(let T=0,R=h.length;T<R;T++){let y=h[T];y.onProgress&&y.onProgress(b)}m.enqueue(v),M()}},E=>{m.error(E)})}}});return new Response(g)}else throw new df(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o==="")return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(p=>f.decode(p))}}}).then(l=>{Wi.add(`file:${e}`,l);let h=ys[e];delete ys[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{let h=ys[e];if(h===void 0)throw this.manager.itemError(e),l;delete ys[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var ya=new WeakMap,vh=class extends Ki{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Wi.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let u=ya.get(a);u===void 0&&(u=[],ya.set(a,u)),u.push({onLoad:t,onError:s})}return a}let o=wa("img");function c(){h(),t&&t(this);let u=ya.get(this)||[];for(let d=0;d<u.length;d++){let f=u[d];f.onLoad&&f.onLoad(this)}ya.delete(this),r.manager.itemEnd(e)}function l(u){h(),s&&s(u),Wi.remove(`image:${e}`);let d=ya.get(this)||[];for(let f=0;f<d.length;f++){let p=d[f];p.onError&&p.onError(u)}ya.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Wi.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}};var pc=class extends Ki{constructor(e){super(e)}load(e,t,i,s){let r=new dn,a=new vh(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}},Lr=class extends Bt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ge(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},mc=class extends Lr{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Bt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ge(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},ef=new je,R0=new C,C0=new C,Ga=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ce(512,512),this.mapType=Vn,this.map=null,this.mapPass=null,this.matrix=new je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ua,this._frameExtents=new ce(1,1),this._viewportCount=1,this._viewports=[new It(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;R0.setFromMatrixPosition(e.matrixWorld),t.position.copy(R0),C0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(C0),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){ef.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(ef,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;e.coordinateSystem===Aa||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),t.multiply(ef)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},zl=new C,Gl=new Qn,Vi=new C,gc=class extends Bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new je,this.projectionMatrix=new je,this.projectionMatrixInverse=new je,this.coordinateSystem=Pi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(zl,Gl,Vi),Vi.x===1&&Vi.y===1&&Vi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(zl,Gl,Vi.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(zl,Gl,Vi),Vi.x===1&&Vi.y===1&&Vi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(zl,Gl,Vi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},$s=new C,I0=new ce,P0=new ce,xn=class extends gc{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Mr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Fo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Mr*2*Math.atan(Math.tan(Fo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){$s.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set($s.x,$s.y).multiplyScalar(-e/$s.z),$s.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set($s.x,$s.y).multiplyScalar(-e/$s.z)}getViewSize(e,t){return this.getViewBounds(e,I0,P0),t.subVectors(P0,I0)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Fo*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*i/l,s*=a.width/c,i*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ff=class extends Ga{constructor(){super(new xn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,i=Mr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},_c=class extends Lr{constructor(e,t,i=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Bt.DEFAULT_UP),this.updateMatrix(),this.target=new Bt,this.distance=i,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new ff}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},pf=class extends Ga{constructor(){super(new xn(90,1,.5,500)),this.isPointLightShadow=!0}},Nr=class extends Lr{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new pf}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},ji=class extends gc{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,a=i+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},mf=class extends Ga{constructor(){super(new ji(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Dr=class extends Lr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Bt.DEFAULT_UP),this.updateMatrix(),this.target=new Bt,this.shadow=new mf}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var ws=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var tf=new WeakMap,xc=class extends Ki{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&De("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&De("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Wi.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(l=>{tf.has(a)===!0?(s&&s(tf.get(a)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(l),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);return}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Wi.add(`image-bitmap:${e}`,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){s&&s(l),tf.set(c,l),Wi.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Wi.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Sa=-90,Ma=1,yh=class extends Bt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new xn(Sa,Ma,e,t);s.layers=this.layers,this.add(s);let r=new xn(Sa,Ma,e,t);r.layers=this.layers,this.add(r);let a=new xn(Sa,Ma,e,t);a.layers=this.layers,this.add(a);let o=new xn(Sa,Ma,e,t);o.layers=this.layers,this.add(o);let c=new xn(Sa,Ma,e,t);c.layers=this.layers,this.add(c);let l=new xn(Sa,Ma,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===Pi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Aa)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},Sh=class extends xn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Wf="\\[\\]\\.:\\/",z2=new RegExp("["+Wf+"]","g"),Xf="[^"+Wf+"]",G2="[^"+Wf.replace("\\.","")+"]",V2=/((?:WC+[\/:])*)/.source.replace("WC",Xf),H2=/(WCOD+)?/.source.replace("WCOD",G2),W2=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Xf),X2=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Xf),q2=new RegExp("^"+V2+H2+W2+X2+"$"),$2=["material","materials","bones","map"],gf=class{constructor(e,t,i){let s=i||Dt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Dt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(z2,"")}static parseTrackName(e){let t=q2.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);$2.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=i(o.children);if(c)return c}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){De("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material){$e("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){$e("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){$e("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){$e("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){$e("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){$e("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==void 0){if(e[l]===void 0){$e("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[s];if(a===void 0){let l=t.nodeName;$e("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){$e("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){$e("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Dt.Composite=gf;Dt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Dt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Dt.prototype.GetterByBindingType=[Dt.prototype._getValue_direct,Dt.prototype._getValue_array,Dt.prototype._getValue_arrayElement,Dt.prototype._getValue_toArray];Dt.prototype.SetterByBindingTypeAndVersioning=[[Dt.prototype._setValue_direct,Dt.prototype._setValue_direct_setNeedsUpdate,Dt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Dt.prototype._setValue_array,Dt.prototype._setValue_array_setNeedsUpdate,Dt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Dt.prototype._setValue_arrayElement,Dt.prototype._setValue_arrayElement_setNeedsUpdate,Dt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Dt.prototype._setValue_fromArray,Dt.prototype._setValue_fromArray_setNeedsUpdate,Dt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var _R=new Float32Array(1);var Zf=class Zf{constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};Zf.prototype.isMatrix2=!0;var _f=Zf;function qf(n,e,t,i){let s=Y2(i);switch(t){case Ff:return n*e;case Ih:return n*e/s.components*s.byteLength;case Ph:return n*e/s.components*s.byteLength;case tr:return n*e*2/s.components*s.byteLength;case Lh:return n*e*2/s.components*s.byteLength;case Of:return n*e*3/s.components*s.byteLength;case ii:return n*e*4/s.components*s.byteLength;case Nh:return n*e*4/s.components*s.byteLength;case Sc:case Mc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case bc:case Ec:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Uh:case Oh:return Math.max(n,16)*Math.max(e,8)/4;case Dh:case Fh:return Math.max(n,8)*Math.max(e,8)/2;case Bh:case kh:case Gh:case Vh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case zh:case Tc:case Hh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Wh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Xh:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case qh:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case $h:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Yh:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Kh:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case jh:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Zh:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Jh:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Qh:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case eu:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case tu:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case nu:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case iu:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case su:case ru:case au:return Math.ceil(n/4)*Math.ceil(e/4)*16;case ou:case cu:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Ac:case lu:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Y2(n){switch(n){case Vn:case Lf:return{byteLength:1,components:1};case Xa:case Nf:case Ui:return{byteLength:2,components:1};case Rh:case Ch:return{byteLength:2,components:4};case Di:case wh:case ni:return{byteLength:4,components:1};case Df:case Uf:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?De("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function X_(){let n=null,e=!1,t=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function j2(n){let e=new WeakMap;function t(o,c){let l=o.array,h=o.usage,u=l.byteLength,d=n.createBuffer();n.bindBuffer(c,d),n.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=n.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=n.SHORT;else if(l instanceof Uint32Array)f=n.UNSIGNED_INT;else if(l instanceof Int32Array)f=n.INT;else if(l instanceof Int8Array)f=n.BYTE;else if(l instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,c,l){let h=c.array,u=c.updateRanges;if(n.bindBuffer(l,o),u.length===0)n.bufferSubData(l,0,h);else{u.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<u.length;f++){let p=u[d],x=u[f];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,p=u.length;f<p;f++){let x=u[f];n.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(n.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var Z2=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,J2=`#ifdef USE_ALPHAHASH
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
#endif`,Q2=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,eM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,nM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,iM=`#ifdef USE_AOMAP
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
#endif`,sM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,rM=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,aM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,oM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,hM=`#ifdef USE_IRIDESCENCE
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
#endif`,uM=`#ifdef USE_BUMPMAP
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
#endif`,dM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,fM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,pM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,mM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,_M=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,xM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,vM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,yM=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,SM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,MM=`vec3 transformedNormal = objectNormal;
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
#endif`,bM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,EM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,TM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,AM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wM="gl_FragColor = linearToOutputTexel( gl_FragColor );",RM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,CM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,IM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,PM=`#ifdef USE_ENVMAP
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
#endif`,LM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,NM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,DM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,UM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,FM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,OM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,BM=`#ifdef USE_GRADIENTMAP
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
}`,kM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,GM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,VM=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,HM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
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
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,WM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,XM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$M=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,YM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,KM=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,jM=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ZM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,JM=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,QM=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,eb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ib=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,sb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,rb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ab=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ob=`#if defined( USE_POINTS_UV )
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
#endif`,cb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ub=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,db=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fb=`#ifdef USE_MORPHTARGETS
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
#endif`,pb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,gb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,_b=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,yb=`#ifdef USE_NORMALMAP
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
#endif`,Sb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Mb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,bb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Eb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Tb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ab=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,wb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Rb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Cb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ib=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Pb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Lb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Nb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Db=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,Ub=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,Fb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,Ob=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Bb=`#ifdef USE_SKINNING
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
#endif`,kb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zb=`#ifdef USE_SKINNING
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
#endif`,Gb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Vb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Hb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Wb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Xb=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,qb=`#ifdef USE_TRANSMISSION
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
#endif`,$b=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Kb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Zb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Jb=`uniform sampler2D t2D;
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
}`,Qb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,e3=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,t3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,n3=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,i3=`#include <common>
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
}`,s3=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,r3=`#define DISTANCE
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
}`,a3=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,o3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,c3=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,l3=`uniform float scale;
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
}`,h3=`uniform vec3 diffuse;
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
}`,u3=`#include <common>
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
}`,d3=`uniform vec3 diffuse;
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
}`,f3=`#define LAMBERT
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
}`,p3=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,m3=`#define MATCAP
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
}`,g3=`#define MATCAP
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
}`,_3=`#define NORMAL
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
}`,x3=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,v3=`#define PHONG
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
}`,y3=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,S3=`#define STANDARD
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
}`,M3=`#define STANDARD
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
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,b3=`#define TOON
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
}`,E3=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,T3=`uniform float size;
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
}`,A3=`uniform vec3 diffuse;
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
}`,w3=`#include <common>
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
}`,R3=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,C3=`uniform float rotation;
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
}`,I3=`uniform vec3 diffuse;
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
}`,it={alphahash_fragment:Z2,alphahash_pars_fragment:J2,alphamap_fragment:Q2,alphamap_pars_fragment:eM,alphatest_fragment:tM,alphatest_pars_fragment:nM,aomap_fragment:iM,aomap_pars_fragment:sM,batching_pars_vertex:rM,batching_vertex:aM,begin_vertex:oM,beginnormal_vertex:cM,bsdfs:lM,iridescence_fragment:hM,bumpmap_pars_fragment:uM,clipping_planes_fragment:dM,clipping_planes_pars_fragment:fM,clipping_planes_pars_vertex:pM,clipping_planes_vertex:mM,color_fragment:gM,color_pars_fragment:_M,color_pars_vertex:xM,color_vertex:vM,common:yM,cube_uv_reflection_fragment:SM,defaultnormal_vertex:MM,displacementmap_pars_vertex:bM,displacementmap_vertex:EM,emissivemap_fragment:TM,emissivemap_pars_fragment:AM,colorspace_fragment:wM,colorspace_pars_fragment:RM,envmap_fragment:CM,envmap_common_pars_fragment:IM,envmap_pars_fragment:PM,envmap_pars_vertex:LM,envmap_physical_pars_fragment:HM,envmap_vertex:NM,fog_vertex:DM,fog_pars_vertex:UM,fog_fragment:FM,fog_pars_fragment:OM,gradientmap_pars_fragment:BM,lightmap_pars_fragment:kM,lights_lambert_fragment:zM,lights_lambert_pars_fragment:GM,lights_pars_begin:VM,lights_toon_fragment:WM,lights_toon_pars_fragment:XM,lights_phong_fragment:qM,lights_phong_pars_fragment:$M,lights_physical_fragment:YM,lights_physical_pars_fragment:KM,lights_fragment_begin:jM,lights_fragment_maps:ZM,lights_fragment_end:JM,lightprobes_pars_fragment:QM,logdepthbuf_fragment:eb,logdepthbuf_pars_fragment:tb,logdepthbuf_pars_vertex:nb,logdepthbuf_vertex:ib,map_fragment:sb,map_pars_fragment:rb,map_particle_fragment:ab,map_particle_pars_fragment:ob,metalnessmap_fragment:cb,metalnessmap_pars_fragment:lb,morphinstance_vertex:hb,morphcolor_vertex:ub,morphnormal_vertex:db,morphtarget_pars_vertex:fb,morphtarget_vertex:pb,normal_fragment_begin:mb,normal_fragment_maps:gb,normal_pars_fragment:_b,normal_pars_vertex:xb,normal_vertex:vb,normalmap_pars_fragment:yb,clearcoat_normal_fragment_begin:Sb,clearcoat_normal_fragment_maps:Mb,clearcoat_pars_fragment:bb,iridescence_pars_fragment:Eb,opaque_fragment:Tb,packing:Ab,premultiplied_alpha_fragment:wb,project_vertex:Rb,dithering_fragment:Cb,dithering_pars_fragment:Ib,roughnessmap_fragment:Pb,roughnessmap_pars_fragment:Lb,shadowmap_pars_fragment:Nb,shadowmap_pars_vertex:Db,shadowmap_vertex:Ub,shadowmask_pars_fragment:Fb,skinbase_vertex:Ob,skinning_pars_vertex:Bb,skinning_vertex:kb,skinnormal_vertex:zb,specularmap_fragment:Gb,specularmap_pars_fragment:Vb,tonemapping_fragment:Hb,tonemapping_pars_fragment:Wb,transmission_fragment:Xb,transmission_pars_fragment:qb,uv_pars_fragment:$b,uv_pars_vertex:Yb,uv_vertex:Kb,worldpos_vertex:jb,background_vert:Zb,background_frag:Jb,backgroundCube_vert:Qb,backgroundCube_frag:e3,cube_vert:t3,cube_frag:n3,depth_vert:i3,depth_frag:s3,distance_vert:r3,distance_frag:a3,equirect_vert:o3,equirect_frag:c3,linedashed_vert:l3,linedashed_frag:h3,meshbasic_vert:u3,meshbasic_frag:d3,meshlambert_vert:f3,meshlambert_frag:p3,meshmatcap_vert:m3,meshmatcap_frag:g3,meshnormal_vert:_3,meshnormal_frag:x3,meshphong_vert:v3,meshphong_frag:y3,meshphysical_vert:S3,meshphysical_frag:M3,meshtoon_vert:b3,meshtoon_frag:E3,points_vert:T3,points_frag:A3,shadow_vert:w3,shadow_frag:R3,sprite_vert:C3,sprite_frag:I3},_e={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},envMapRotation:{value:new Ze},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new C},probesMax:{value:new C},probesResolution:{value:new C}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},es={basic:{uniforms:wn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:it.meshbasic_vert,fragmentShader:it.meshbasic_frag},lambert:{uniforms:wn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Ge(0)},envMapIntensity:{value:1}}]),vertexShader:it.meshlambert_vert,fragmentShader:it.meshlambert_frag},phong:{uniforms:wn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:it.meshphong_vert,fragmentShader:it.meshphong_frag},standard:{uniforms:wn([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag},toon:{uniforms:wn([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new Ge(0)}}]),vertexShader:it.meshtoon_vert,fragmentShader:it.meshtoon_frag},matcap:{uniforms:wn([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:it.meshmatcap_vert,fragmentShader:it.meshmatcap_frag},points:{uniforms:wn([_e.points,_e.fog]),vertexShader:it.points_vert,fragmentShader:it.points_frag},dashed:{uniforms:wn([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:it.linedashed_vert,fragmentShader:it.linedashed_frag},depth:{uniforms:wn([_e.common,_e.displacementmap]),vertexShader:it.depth_vert,fragmentShader:it.depth_frag},normal:{uniforms:wn([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:it.meshnormal_vert,fragmentShader:it.meshnormal_frag},sprite:{uniforms:wn([_e.sprite,_e.fog]),vertexShader:it.sprite_vert,fragmentShader:it.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:it.background_vert,fragmentShader:it.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ze}},vertexShader:it.backgroundCube_vert,fragmentShader:it.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:it.cube_vert,fragmentShader:it.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:it.equirect_vert,fragmentShader:it.equirect_frag},distance:{uniforms:wn([_e.common,_e.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:it.distance_vert,fragmentShader:it.distance_frag},shadow:{uniforms:wn([_e.lights,_e.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:it.shadow_vert,fragmentShader:it.shadow_frag}};es.physical={uniforms:wn([es.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag};var du={r:0,b:0,g:0},P3=new je,q_=new Ze;q_.set(-1,0,0,0,1,0,0,0,1);function L3(n,e,t,i,s,r){let a=new Ge(0),o=s===!0?0:1,c,l,h=null,u=0,d=null;function f(M){let E=M.isScene===!0?M.background:null;if(E&&E.isTexture){let v=M.backgroundBlurriness>0;E=e.get(E,v)}return E}function p(M){let E=!1,v=f(M);v===null?g(a,o):v&&v.isColor&&(g(v,1),E=!0);let b=n.xr.getEnvironmentBlendMode();b==="additive"?t.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||E)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function x(M,E){let v=f(E);v&&(v.isCubeTexture||v.mapping===yc)?(l===void 0&&(l=new ht(new mi(1,1,1),new ti({name:"BackgroundCubeMaterial",uniforms:kr(es.backgroundCube.uniforms),vertexShader:es.backgroundCube.vertexShader,fragmentShader:es.backgroundCube.fragmentShader,side:yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(b,T,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=v,l.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(P3.makeRotationFromEuler(E.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(q_),l.material.toneMapped=st.getTransfer(v.colorSpace)!==wt,(h!==v||u!==v.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,h=v,u=v.version,d=n.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new ht(new Ir(2,2),new ti({name:"BackgroundMaterial",uniforms:kr(es.background.uniforms),vertexShader:es.background.vertexShader,fragmentShader:es.background.fragmentShader,side:Zi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=st.getTransfer(v.colorSpace)!==wt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||u!==v.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,h=v,u=v.version,d=n.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function g(M,E){M.getRGB(du,Hf(n)),t.buffers.color.setClear(du.r,du.g,du.b,E,r)}function m(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,E=1){a.set(M),o=E,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,g(a,o)},render:p,addToRenderList:x,dispose:m}}function N3(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null),r=s,a=!1;function o(U,V,F,L,B){let X=!1,W=u(U,L,F,V);r!==W&&(r=W,l(r.object)),X=f(U,L,F,B),X&&p(U,L,F,B),B!==null&&e.update(B,n.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,v(U,V,F,L),B!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function c(){return n.createVertexArray()}function l(U){return n.bindVertexArray(U)}function h(U){return n.deleteVertexArray(U)}function u(U,V,F,L){let B=L.wireframe===!0,X=i[V.id];X===void 0&&(X={},i[V.id]=X);let W=U.isInstancedMesh===!0?U.id:0,ie=X[W];ie===void 0&&(ie={},X[W]=ie);let q=ie[F.id];q===void 0&&(q={},ie[F.id]=q);let J=q[B];return J===void 0&&(J=d(c()),q[B]=J),J}function d(U){let V=[],F=[],L=[];for(let B=0;B<t;B++)V[B]=0,F[B]=0,L[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:F,attributeDivisors:L,object:U,attributes:{},index:null}}function f(U,V,F,L){let B=r.attributes,X=V.attributes,W=0,ie=F.getAttributes();for(let q in ie)if(ie[q].location>=0){let te=B[q],Ue=X[q];if(Ue===void 0&&(q==="instanceMatrix"&&U.instanceMatrix&&(Ue=U.instanceMatrix),q==="instanceColor"&&U.instanceColor&&(Ue=U.instanceColor)),te===void 0||te.attribute!==Ue||Ue&&te.data!==Ue.data)return!0;W++}return r.attributesNum!==W||r.index!==L}function p(U,V,F,L){let B={},X=V.attributes,W=0,ie=F.getAttributes();for(let q in ie)if(ie[q].location>=0){let te=X[q];te===void 0&&(q==="instanceMatrix"&&U.instanceMatrix&&(te=U.instanceMatrix),q==="instanceColor"&&U.instanceColor&&(te=U.instanceColor));let Ue={};Ue.attribute=te,te&&te.data&&(Ue.data=te.data),B[q]=Ue,W++}r.attributes=B,r.attributesNum=W,r.index=L}function x(){let U=r.newAttributes;for(let V=0,F=U.length;V<F;V++)U[V]=0}function g(U){m(U,0)}function m(U,V){let F=r.newAttributes,L=r.enabledAttributes,B=r.attributeDivisors;F[U]=1,L[U]===0&&(n.enableVertexAttribArray(U),L[U]=1),B[U]!==V&&(n.vertexAttribDivisor(U,V),B[U]=V)}function M(){let U=r.newAttributes,V=r.enabledAttributes;for(let F=0,L=V.length;F<L;F++)V[F]!==U[F]&&(n.disableVertexAttribArray(F),V[F]=0)}function E(U,V,F,L,B,X,W){W===!0?n.vertexAttribIPointer(U,V,F,B,X):n.vertexAttribPointer(U,V,F,L,B,X)}function v(U,V,F,L){x();let B=L.attributes,X=F.getAttributes(),W=V.defaultAttributeValues;for(let ie in X){let q=X[ie];if(q.location>=0){let J=B[ie];if(J===void 0&&(ie==="instanceMatrix"&&U.instanceMatrix&&(J=U.instanceMatrix),ie==="instanceColor"&&U.instanceColor&&(J=U.instanceColor)),J!==void 0){let te=J.normalized,Ue=J.itemSize,Ae=e.get(J);if(Ae===void 0)continue;let Mt=Ae.buffer,ot=Ae.type,_t=Ae.bytesPerElement,K=ot===n.INT||ot===n.UNSIGNED_INT||J.gpuType===wh;if(J.isInterleavedBufferAttribute){let Q=J.data,xe=Q.stride,qe=J.offset;if(Q.isInstancedInterleavedBuffer){for(let be=0;be<q.locationSize;be++)m(q.location+be,Q.meshPerAttribute);U.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let be=0;be<q.locationSize;be++)g(q.location+be);n.bindBuffer(n.ARRAY_BUFFER,Mt);for(let be=0;be<q.locationSize;be++)E(q.location+be,Ue/q.locationSize,ot,te,xe*_t,(qe+Ue/q.locationSize*be)*_t,K)}else{if(J.isInstancedBufferAttribute){for(let Q=0;Q<q.locationSize;Q++)m(q.location+Q,J.meshPerAttribute);U.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let Q=0;Q<q.locationSize;Q++)g(q.location+Q);n.bindBuffer(n.ARRAY_BUFFER,Mt);for(let Q=0;Q<q.locationSize;Q++)E(q.location+Q,Ue/q.locationSize,ot,te,Ue*_t,Ue/q.locationSize*Q*_t,K)}}else if(W!==void 0){let te=W[ie];if(te!==void 0)switch(te.length){case 2:n.vertexAttrib2fv(q.location,te);break;case 3:n.vertexAttrib3fv(q.location,te);break;case 4:n.vertexAttrib4fv(q.location,te);break;default:n.vertexAttrib1fv(q.location,te)}}}}M()}function b(){w();for(let U in i){let V=i[U];for(let F in V){let L=V[F];for(let B in L){let X=L[B];for(let W in X)h(X[W].object),delete X[W];delete L[B]}}delete i[U]}}function T(U){if(i[U.id]===void 0)return;let V=i[U.id];for(let F in V){let L=V[F];for(let B in L){let X=L[B];for(let W in X)h(X[W].object),delete X[W];delete L[B]}}delete i[U.id]}function R(U){for(let V in i){let F=i[V];for(let L in F){let B=F[L];if(B[U.id]===void 0)continue;let X=B[U.id];for(let W in X)h(X[W].object),delete X[W];delete B[U.id]}}}function y(U){for(let V in i){let F=i[V],L=U.isInstancedMesh===!0?U.id:0,B=F[L];if(B!==void 0){for(let X in B){let W=B[X];for(let ie in W)h(W[ie].object),delete W[ie];delete B[X]}delete F[L],Object.keys(F).length===0&&delete i[V]}}}function w(){P(),a=!0,r!==s&&(r=s,l(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:w,resetDefaultState:P,dispose:b,releaseStatesOfGeometry:T,releaseStatesOfObject:y,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:g,disableUnusedAttributes:M}}function D3(n,e,t){let i;function s(c){i=c}function r(c,l){n.drawArrays(i,c,l),t.update(l,i,1)}function a(c,l,h){h!==0&&(n.drawArraysInstanced(i,c,l,h),t.update(l,i,h))}function o(c,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,h);let d=0;for(let f=0;f<h;f++)d+=l[f];t.update(d,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function U3(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let R=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==ii&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){let y=R===Ui&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Vn&&R!==ni&&!y&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function c(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(De("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&De("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),E=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),b=n.getParameter(n.MAX_SAMPLES),T=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:M,maxVaryings:E,maxFragmentUniforms:v,maxSamples:b,samples:T}}function F3(n){let e=this,t=null,i=0,s=!1,r=!1,a=new Ci,o=new Ze,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||i!==0||s;return s=d,i=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let p=u.clippingPlanes,x=u.clipIntersection,g=u.clipShadows,m=n.get(u);if(!s||p===null||p.length===0||r&&!g)r?h(null):l();else{let M=r?0:i,E=M*4,v=m.clippingState||null;c.value=v,v=h(p,d,E,f);for(let b=0;b!==E;++b)v[b]=t[b];m.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,f,p){let x=u!==null?u.length:0,g=null;if(x!==0){if(g=c.value,p!==!0||g===null){let m=f+x*4,M=d.matrixWorldInverse;o.getNormalMatrix(M),(g===null||g.length<m)&&(g=new Float32Array(m));for(let E=0,v=f;E!==x;++E,v+=4)a.copy(u[E]).applyMatrix4(M,o),a.normal.toArray(g,v),g[v+3]=a.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}var Ka=4,O3=6,B3=20,k3=256,Cc=new ji,E_=new Ge,Jf=null,Qf=0,ep=0,tp=!1,z3=new C,zr=new C,Za=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){let{size:a=256,position:o=z3}=r;Jf=this._renderer.getRenderTarget(),Qf=this._renderer.getActiveCubeFace(),ep=this._renderer.getActiveMipmapLevel(),tp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,s,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=w_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=A_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Jf,Qf,ep),this._renderer.xr.enabled=tp,e.scissorTest=!1,Ya(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Qs||e.mapping===Fr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Jf=this._renderer.getRenderTarget(),Qf=this._renderer.getActiveCubeFace(),ep=this._renderer.getActiveMipmapLevel(),tp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Jt,minFilter:Jt,generateMipmaps:!1,type:Ui,format:ii,colorSpace:In,depthBuffer:!1},s=T_(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=T_(e,t,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=G3(r)),this._blurMaterial=H3(r,e,t),this._ggxMaterial=V3(r,e,t)}return s}_compileMaterial(e){let t=new ht(new on,e);this._renderer.compile(t,Cc)}_sceneToCubeUV(e,t,i,s,r){let c=new xn(90,1,t,i),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(E_),u.toneMapping=Li,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ht(new mi,new Ln({name:"PMREM.Background",side:yn,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,g=x.material,m=!1,M=e.background;M?M.isColor&&(g.color.copy(M),e.background=null,m=!0):(g.color.copy(E_),m=!0);for(let E=0;E<6;E++){let v=E%3;v===0?(c.up.set(0,l[E],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[E],r.y,r.z)):v===1?(c.up.set(0,0,l[E]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[E],r.z)):(c.up.set(0,l[E],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[E]));let b=this._cubeSize;Ya(s,v*b,E>2?b:0,b,b),u.setRenderTarget(s),m&&u.render(x,c),u.render(e,c)}u.toneMapping=f,u.autoClear=d,e.background=M}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===Qs||e.mapping===Fr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=w_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=A_());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let c=this._cubeSize;Ya(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(a,Cc)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;let c=a.uniforms,l=i/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(l*l-h*h),d=l*1.25,f=u*d,{_lodMax:p}=this,x=this._sizeLods[i],g=3*x*(i>p-Ka?i-p+Ka:0),m=4*(this._cubeSize-x);c.envMap.value=e.texture,c.roughness.value=f,c.mipInt.value=p-t,Ya(r,g,m,3*x,2*x),s.setRenderTarget(r),s.render(o,Cc),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=p-i,Ya(e,g,m,3*x,2*x),s.setRenderTarget(e),s.render(o,Cc)}_blur(e,t,i,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,i,a),this._blurPass(r,e,i,i,a)}_blurPass(e,t,i,s,r){let a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[s];c.material=o;let l=o.uniforms;l.envMap.value=e.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-i;let h=this._sizeLods[s],u=3*h*(s>this._lodMax-Ka?s-this._lodMax+Ka:0),d=4*(this._cubeSize-h);Ya(t,u,d,3*h,2*h),a.setRenderTarget(t),a.render(c,Cc)}};function G3(n){let e=[],t=[],i=n,s=n-Ka+1+O3;for(let r=0;r<s;r++){let a=Math.pow(2,i);e.push(a);let o=1/(a-2),c=-o,l=1+o,h=[c,c,l,c,l,l,c,c,l,l,c,l],u=6,d=6,f=3,p=new Float32Array(f*d*u),x=new Float32Array(f*d*u);for(let m=0;m<u;m++){let M=m%3*2/3-1,E=m>2?0:-1,v=[M,E,0,M+2/3,E,0,M+2/3,E+1,0,M,E,0,M+2/3,E+1,0,M,E+1,0];p.set(v,f*d*m);for(let b=0;b<d;b++){let T=h[b*2]*2-1,R=h[b*2+1]*2-1;m===0?zr.set(1,R,T):m===1?zr.set(-T,1,-R):m===2?zr.set(-T,R,1):m===3?zr.set(-1,R,-T):m===4?zr.set(-T,-1,R):zr.set(T,R,-1),zr.toArray(x,(m*d+b)*f)}}let g=new on;g.setAttribute("position",new un(p,f)),g.setAttribute("outputDirection",new un(x,f)),t.push(new ht(g,null)),i>Ka&&i--}return{lodMeshes:t,sizeLods:e}}function T_(n,e,t){let i=new On(n,e,t);return i.texture.mapping=yc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ya(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function V3(n,e,t){return new ti({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:k3,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:gu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function H3(n,e,t){return new ti({name:"SphericalGaussianBlur",defines:{SAMPLES:B3,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:gu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function A_(){return new ti({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gu(),fragmentShader:`

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
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function w_(){return new ti({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function gu(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var pu=class extends On{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Zo(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new mi(5,5,5),r=new ti({name:"CubemapFromEquirect",uniforms:kr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:yn,blending:Ji});r.uniforms.tEquirect.value=t;let a=new ht(s,r),o=t.minFilter;return t.minFilter===Ni&&(t.minFilter=Jt),new yh(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}};function W3(n){let e=new WeakMap,t=new WeakMap,i=null;function s(d,f=!1){return d==null?null:f?a(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===Eh||f===Th)if(e.has(d)){let p=e.get(d).texture;return o(p,d.mapping)}else{let p=d.image;if(p&&p.height>0){let x=new pu(p.height);return x.fromEquirectangularTexture(n,d),e.set(d,x),d.addEventListener("dispose",l),o(x.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){let f=d.mapping,p=f===Eh||f===Th,x=f===Qs||f===Fr;if(p||x){let g=t.get(d),m=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==m)return i===null&&(i=new Za(n)),g=p?i.fromEquirectangular(d,g):i.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),g.texture;if(g!==void 0)return g.texture;{let M=d.image;return p&&M&&M.height>0||x&&M&&c(M)?(i===null&&(i=new Za(n)),g=p?i.fromEquirectangular(d):i.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),d.addEventListener("dispose",h),g.texture):null}}}return d}function o(d,f){return f===Eh?d.mapping=Qs:f===Th&&(d.mapping=Fr),d}function c(d){let f=0,p=6;for(let x=0;x<p;x++)d[x]!==void 0&&f++;return f===p}function l(d){let f=d.target;f.removeEventListener("dispose",l);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function u(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:u}}function X3(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&vr("WebGLRenderer: "+i+" extension not supported."),s}}}function q3(n,e,t,i){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let p in d.attributes)e.remove(d.attributes[p]);d.removeEventListener("dispose",a),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function c(u){let d=u.attributes;for(let f in d)e.update(d[f],n.ARRAY_BUFFER)}function l(u){let d=[],f=u.index,p=u.attributes.position,x=0;if(p===void 0)return;if(f!==null){let M=f.array;x=f.version;for(let E=0,v=M.length;E<v;E+=3){let b=M[E+0],T=M[E+1],R=M[E+2];d.push(b,T,T,R,R,b)}}else{let M=p.array;x=p.version;for(let E=0,v=M.length/3-1;E<v;E+=3){let b=E+0,T=E+1,R=E+2;d.push(b,T,T,R,R,b)}}let g=new(p.count>=65535?Xo:Wo)(d,1);g.version=x;let m=r.get(u);m&&e.remove(m),r.set(u,g)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function $3(n,e,t){let i;function s(u){i=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function c(u,d){n.drawElements(i,d,r,u*a),t.update(d,i,1)}function l(u,d,f){f!==0&&(n.drawElementsInstanced(i,d,r,u*a,f),t.update(d,i,f))}function h(u,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,u,0,f);let x=0;for(let g=0;g<f;g++)x+=d[g];t.update(x,i,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function Y3(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:$e("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function K3(n,e,t){let i=new WeakMap,s=new It;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=i.get(o);if(d===void 0||d.count!==u){let w=function(){R.dispose(),i.delete(o),o.removeEventListener("dispose",w)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],M=o.morphAttributes.color||[],E=0;f===!0&&(E=1),p===!0&&(E=2),x===!0&&(E=3);let v=o.attributes.position.count*E,b=1;v>e.maxTextureSize&&(b=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let T=new Float32Array(v*b*4*u),R=new Vo(T,v,b,u);R.type=ni,R.needsUpdate=!0;let y=E*4;for(let P=0;P<u;P++){let U=g[P],V=m[P],F=M[P],L=v*b*4*P;for(let B=0;B<U.count;B++){let X=B*y;f===!0&&(s.fromBufferAttribute(U,B),T[L+X+0]=s.x,T[L+X+1]=s.y,T[L+X+2]=s.z,T[L+X+3]=0),p===!0&&(s.fromBufferAttribute(V,B),T[L+X+4]=s.x,T[L+X+5]=s.y,T[L+X+6]=s.z,T[L+X+7]=0),x===!0&&(s.fromBufferAttribute(F,B),T[L+X+8]=s.x,T[L+X+9]=s.y,T[L+X+10]=s.z,T[L+X+11]=F.itemSize===4?s.w:1)}}d={count:u,texture:R,size:new ce(v,b)},i.set(o,d),o.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let f=0;for(let x=0;x<l.length;x++)f+=l[x];let p=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(n,"morphTargetBaseInfluence",p),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function j3(n,e,t,i,s){let r=new WeakMap;function a(l){let h=s.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let f=l.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function o(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),i.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var Z3={[Ef]:"LINEAR_TONE_MAPPING",[Tf]:"REINHARD_TONE_MAPPING",[Af]:"CINEON_TONE_MAPPING",[wf]:"ACES_FILMIC_TONE_MAPPING",[Cf]:"AGX_TONE_MAPPING",[If]:"NEUTRAL_TONE_MAPPING",[Rf]:"CUSTOM_TONE_MAPPING"};function J3(n,e,t,i,s,r){let a=new On(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=new on;l.setAttribute("position",new Ot([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Ot([0,2,0,0,2,0],2));let h=new hh({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new ht(l,h),d=new ji(-1,1,1,-1,0,1),f=null,p=null,x=!1,g,m=null,M=[],E=!1;this.setSize=function(v,b){a.setSize(v,b),o!==null&&o.setSize(v,b),c!==null&&c.setSize(v,b);for(let T=0;T<M.length;T++){let R=M[T];R.setSize&&R.setSize(v,b)}},this.setEffects=function(v){M=v,E=M.length>0&&M[0].isRenderPass===!0;let b=a.width,T=a.height;M.length>0&&o===null&&(o=new On(b,T,{type:Ui,depthBuffer:!1,stencilBuffer:!1}),c=new On(b,T,{type:Ui,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<M.length;R++){let y=M[R];y.setSize&&y.setSize(b,T)}},this.begin=function(v,b){if(x||v.toneMapping===Li&&M.length===0)return!1;if(m=b,b!==null){let T=b.width,R=b.height;(a.width!==T||a.height!==R)&&this.setSize(T,R)}return E===!1&&v.setRenderTarget(a),g=v.toneMapping,v.toneMapping=Li,!0},this.hasRenderPass=function(){return E},this.end=function(v,b){v.toneMapping=g,x=!0;let T=a,R=o;for(let y=0;y<M.length;y++){let w=M[y];w.enabled!==!1&&(w.render(v,R,T,b),w.needsSwap!==!1&&(T=R,R=R===o?c:o))}if(f!==v.outputColorSpace||p!==v.toneMapping){f=v.outputColorSpace,p=v.toneMapping,h.defines={},st.getTransfer(f)===wt&&(h.defines.SRGB_TRANSFER="");let y=Z3[p];y&&(h.defines[y]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=T.texture,v.setRenderTarget(m),v.render(u,d),m=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),h.dispose()}}var $_=new dn,sp=new Zs(1,1),Y_=new Vo,K_=new eh,j_=new Zo,R_=[],C_=[],I_=new Float32Array(16),P_=new Float32Array(9),L_=new Float32Array(4);function Ja(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=R_[s];if(r===void 0&&(r=new Float32Array(s),R_[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function fn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function pn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function _u(n,e){let t=C_[e];t===void 0&&(t=new Int32Array(e),C_[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Q3(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function eE(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;n.uniform2fv(this.addr,e),pn(t,e)}}function tE(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(fn(t,e))return;n.uniform3fv(this.addr,e),pn(t,e)}}function nE(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;n.uniform4fv(this.addr,e),pn(t,e)}}function iE(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(fn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),pn(t,e)}else{if(fn(t,i))return;L_.set(i),n.uniformMatrix2fv(this.addr,!1,L_),pn(t,i)}}function sE(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(fn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),pn(t,e)}else{if(fn(t,i))return;P_.set(i),n.uniformMatrix3fv(this.addr,!1,P_),pn(t,i)}}function rE(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(fn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),pn(t,e)}else{if(fn(t,i))return;I_.set(i),n.uniformMatrix4fv(this.addr,!1,I_),pn(t,i)}}function aE(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function oE(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;n.uniform2iv(this.addr,e),pn(t,e)}}function cE(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(fn(t,e))return;n.uniform3iv(this.addr,e),pn(t,e)}}function lE(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;n.uniform4iv(this.addr,e),pn(t,e)}}function hE(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function uE(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;n.uniform2uiv(this.addr,e),pn(t,e)}}function dE(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(fn(t,e))return;n.uniform3uiv(this.addr,e),pn(t,e)}}function fE(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;n.uniform4uiv(this.addr,e),pn(t,e)}}function pE(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(sp.compareFunction=t.isReversedDepthBuffer()?uu:hu,r=sp):r=$_,t.setTexture2D(e||r,s)}function mE(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||K_,s)}function gE(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||j_,s)}function _E(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Y_,s)}function xE(n){switch(n){case 5126:return Q3;case 35664:return eE;case 35665:return tE;case 35666:return nE;case 35674:return iE;case 35675:return sE;case 35676:return rE;case 5124:case 35670:return aE;case 35667:case 35671:return oE;case 35668:case 35672:return cE;case 35669:case 35673:return lE;case 5125:return hE;case 36294:return uE;case 36295:return dE;case 36296:return fE;case 35678:case 36198:case 36298:case 36306:case 35682:return pE;case 35679:case 36299:case 36307:return mE;case 35680:case 36300:case 36308:case 36293:return gE;case 36289:case 36303:case 36311:case 36292:return _E}}function vE(n,e){n.uniform1fv(this.addr,e)}function yE(n,e){let t=Ja(e,this.size,2);n.uniform2fv(this.addr,t)}function SE(n,e){let t=Ja(e,this.size,3);n.uniform3fv(this.addr,t)}function ME(n,e){let t=Ja(e,this.size,4);n.uniform4fv(this.addr,t)}function bE(n,e){let t=Ja(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function EE(n,e){let t=Ja(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function TE(n,e){let t=Ja(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function AE(n,e){n.uniform1iv(this.addr,e)}function wE(n,e){n.uniform2iv(this.addr,e)}function RE(n,e){n.uniform3iv(this.addr,e)}function CE(n,e){n.uniform4iv(this.addr,e)}function IE(n,e){n.uniform1uiv(this.addr,e)}function PE(n,e){n.uniform2uiv(this.addr,e)}function LE(n,e){n.uniform3uiv(this.addr,e)}function NE(n,e){n.uniform4uiv(this.addr,e)}function DE(n,e,t){let i=this.cache,s=e.length,r=_u(t,s);fn(i,r)||(n.uniform1iv(this.addr,r),pn(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=sp:a=$_;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function UE(n,e,t){let i=this.cache,s=e.length,r=_u(t,s);fn(i,r)||(n.uniform1iv(this.addr,r),pn(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||K_,r[a])}function FE(n,e,t){let i=this.cache,s=e.length,r=_u(t,s);fn(i,r)||(n.uniform1iv(this.addr,r),pn(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||j_,r[a])}function OE(n,e,t){let i=this.cache,s=e.length,r=_u(t,s);fn(i,r)||(n.uniform1iv(this.addr,r),pn(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Y_,r[a])}function BE(n){switch(n){case 5126:return vE;case 35664:return yE;case 35665:return SE;case 35666:return ME;case 35674:return bE;case 35675:return EE;case 35676:return TE;case 5124:case 35670:return AE;case 35667:case 35671:return wE;case 35668:case 35672:return RE;case 35669:case 35673:return CE;case 5125:return IE;case 36294:return PE;case 36295:return LE;case 36296:return NE;case 35678:case 36198:case 36298:case 36306:case 35682:return DE;case 35679:case 36299:case 36307:return UE;case 35680:case 36300:case 36308:case 36293:return FE;case 36289:case 36303:case 36311:case 36292:return OE}}var rp=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=xE(t.type)}},ap=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=BE(t.type)}},op=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],i)}}},np=/(\w+)(\])?(\[|\.)?/g;function N_(n,e){n.seq.push(e),n.map[e.id]=e}function kE(n,e,t){let i=n.name,s=i.length;for(np.lastIndex=0;;){let r=np.exec(i),a=np.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){N_(t,l===void 0?new rp(o,n,e):new ap(o,n,e));break}else{let u=t.map[o];u===void 0&&(u=new op(o),N_(t,u)),t=u}}}var ja=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);kE(o,c,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&i.push(a)}return i}};function D_(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var zE=37297,GE=0;function VE(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}var U_=new Ze;function HE(n){st._getMatrix(U_,st.workingColorSpace,n);let e=`mat3( ${U_.elements.map(t=>t.toFixed(4))} )`;switch(st.getTransfer(n)){case zo:return[e,"LinearTransferOETF"];case wt:return[e,"sRGBTransferOETF"];default:return De("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function F_(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+VE(n.getShaderSource(e),o)}else return r}function WE(n,e){let t=HE(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var XE={[Ef]:"Linear",[Tf]:"Reinhard",[Af]:"Cineon",[wf]:"ACESFilmic",[Cf]:"AgX",[If]:"Neutral",[Rf]:"Custom"};function qE(n,e){let t=XE[e];return t===void 0?(De("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var fu=new C;function $E(){st.getLuminanceCoefficients(fu);let n=fu.x.toFixed(4),e=fu.y.toFixed(4),t=fu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function YE(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Pc).join(`
`)}function KE(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function jE(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Pc(n){return n!==""}function O_(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function B_(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var ZE=/^[ \t]*#include +<([\w\d./]+)>/gm;function cp(n){return n.replace(ZE,QE)}var JE=new Map;function QE(n,e){let t=it[e];if(t===void 0){let i=JE.get(e);if(i!==void 0)t=it[i],De('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return cp(t)}var eT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function k_(n){return n.replace(eT,tT)}function tT(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function z_(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var nT={[vc]:"SHADOWMAP_TYPE_PCF",[Va]:"SHADOWMAP_TYPE_VSM"};function iT(n){return nT[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var sT={[Qs]:"ENVMAP_TYPE_CUBE",[Fr]:"ENVMAP_TYPE_CUBE",[yc]:"ENVMAP_TYPE_CUBE_UV"};function rT(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":sT[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var aT={[Fr]:"ENVMAP_MODE_REFRACTION"};function oT(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":aT[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var cT={[bh]:"ENVMAP_BLENDING_MULTIPLY",[Q0]:"ENVMAP_BLENDING_MIX",[e_]:"ENVMAP_BLENDING_ADD"};function lT(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":cT[n.combine]||"ENVMAP_BLENDING_NONE"}function hT(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function uT(n,e,t,i){let s=n.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=iT(t),l=rT(t),h=oT(t),u=lT(t),d=hT(t),f=YE(t),p=KE(r),x=s.createProgram(),g,m,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Pc).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Pc).join(`
`),m.length>0&&(m+=`
`)):(g=[z_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Pc).join(`
`),m=[z_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Li?"#define TONE_MAPPING":"",t.toneMapping!==Li?it.tonemapping_pars_fragment:"",t.toneMapping!==Li?qE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",it.colorspace_pars_fragment,WE("linearToOutputTexel",t.outputColorSpace),$E(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Pc).join(`
`)),a=cp(a),a=O_(a,t),a=B_(a,t),o=cp(o),o=O_(o,t),o=B_(o,t),a=k_(a),o=k_(o),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===zf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===zf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let E=M+g+a,v=M+m+o,b=D_(s,s.VERTEX_SHADER,E),T=D_(s,s.FRAGMENT_SHADER,v);s.attachShader(x,b),s.attachShader(x,T),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function R(U){if(n.debug.checkShaderErrors){let V=s.getProgramInfoLog(x)||"",F=s.getShaderInfoLog(b)||"",L=s.getShaderInfoLog(T)||"",B=V.trim(),X=F.trim(),W=L.trim(),ie=!0,q=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(ie=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,b,T);else{let J=F_(s,b,"vertex"),te=F_(s,T,"fragment");$e("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+B+`
`+J+`
`+te)}else B!==""?De("WebGLProgram: Program Info Log:",B):(X===""||W==="")&&(q=!1);q&&(U.diagnostics={runnable:ie,programLog:B,vertexShader:{log:X,prefix:g},fragmentShader:{log:W,prefix:m}})}s.deleteShader(b),s.deleteShader(T),y=new ja(s,x),w=jE(s,x)}let y;this.getUniforms=function(){return y===void 0&&R(this),y};let w;this.getAttributes=function(){return w===void 0&&R(this),w};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(x,zE)),P},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=GE++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=b,this.fragmentShader=T,this}var dT=0,lp=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new hp(e),t.set(e,i)),i}},hp=class{constructor(e){this.id=dT++,this.code=e,this.usedTimes=0}};function fT(n){return n===tr||n===Tc||n===Ac}function pT(n,e,t,i,s,r){let a=new Ho,o=new lp,c=new Set,l=[],h=new Map,u=i.logarithmicDepthBuffer,d=i.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(y){return c.add(y),y===0?"uv":`uv${y}`}function x(y,w,P,U,V,F){let L=U.fog,B=V.geometry,X=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?U.environment:null,W=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,ie=e.get(y.envMap||X,W),q=ie&&ie.mapping===yc?ie.image.height:null,J=f[y.type];y.precision!==null&&(d=i.getMaxPrecision(y.precision),d!==y.precision&&De("WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));let te=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Ue=te!==void 0?te.length:0,Ae=0;B.morphAttributes.position!==void 0&&(Ae=1),B.morphAttributes.normal!==void 0&&(Ae=2),B.morphAttributes.color!==void 0&&(Ae=3);let Mt,ot,_t,K;if(J){let Ut=es[J];Mt=Ut.vertexShader,ot=Ut.fragmentShader}else{Mt=y.vertexShader,ot=y.fragmentShader;let Ut=o.getVertexShaderStage(y),Tt=o.getFragmentShaderStage(y);o.update(y,Ut,Tt),_t=Ut.id,K=Tt.id}let Q=n.getRenderTarget(),xe=n.state.buffers.depth.getReversed(),qe=V.isInstancedMesh===!0,be=V.isBatchedMesh===!0,Ye=!!y.map,Rt=!!y.matcap,ee=!!ie,se=!!y.aoMap,re=!!y.lightMap,ae=!!y.bumpMap&&y.wireframe===!1,ue=!!y.normalMap,We=!!y.displacementMap,He=!!y.emissiveMap,Ke=!!y.metalnessMap,Je=!!y.roughnessMap,I=y.anisotropy>0,Et=y.clearcoat>0,ct=y.dispersion>0,A=y.retroreflectivity>0,_=y.iridescence>0,O=y.sheen>0,G=y.transmission>0,$=I&&!!y.anisotropyMap,oe=Et&&!!y.clearcoatMap,he=Et&&!!y.clearcoatNormalMap,Y=Et&&!!y.clearcoatRoughnessMap,Z=_&&!!y.iridescenceMap,de=_&&!!y.iridescenceThicknessMap,Fe=O&&!!y.sheenColorMap,ge=O&&!!y.sheenRoughnessMap,fe=!!y.specularMap,Oe=!!y.specularColorMap,Xe=!!y.specularIntensityMap,tt=G&&!!y.transmissionMap,D=G&&!!y.thicknessMap,pe=!!y.gradientMap,j=!!y.alphaMap,me=y.alphaTest>0,Me=!!y.alphaHash,ne=!!y.extensions,ze=Li;y.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(ze=n.toneMapping);let Le={shaderID:J,shaderType:y.type,shaderName:y.name,vertexShader:Mt,fragmentShader:ot,defines:y.defines,customVertexShaderID:_t,customFragmentShaderID:K,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:be,batchingColor:be&&V._colorsTexture!==null,instancing:qe,instancingColor:qe&&V.instanceColor!==null,instancingMorph:qe&&V.morphTexture!==null,outputColorSpace:Q===null?n.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:st.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:Ye,matcap:Rt,envMap:ee,envMapMode:ee&&ie.mapping,envMapCubeUVHeight:q,aoMap:se,lightMap:re,bumpMap:ae,normalMap:ue,displacementMap:We,emissiveMap:He,normalMapObjectSpace:ue&&y.normalMapType===s_,normalMapTangentSpace:ue&&y.normalMapType===Rc,packedNormalMap:ue&&y.normalMapType===Rc&&fT(y.normalMap.format),metalnessMap:Ke,roughnessMap:Je,anisotropy:I,anisotropyMap:$,clearcoat:Et,clearcoatMap:oe,clearcoatNormalMap:he,clearcoatRoughnessMap:Y,dispersion:ct,retroreflection:A,iridescence:_,iridescenceMap:Z,iridescenceThicknessMap:de,sheen:O,sheenColorMap:Fe,sheenRoughnessMap:ge,specularMap:fe,specularColorMap:Oe,specularIntensityMap:Xe,transmission:G,transmissionMap:tt,thicknessMap:D,gradientMap:pe,opaque:y.transparent===!1&&y.blending===Ha&&y.alphaToCoverage===!1,alphaMap:j,alphaTest:me,alphaHash:Me,combine:y.combine,mapUv:Ye&&p(y.map.channel),aoMapUv:se&&p(y.aoMap.channel),lightMapUv:re&&p(y.lightMap.channel),bumpMapUv:ae&&p(y.bumpMap.channel),normalMapUv:ue&&p(y.normalMap.channel),displacementMapUv:We&&p(y.displacementMap.channel),emissiveMapUv:He&&p(y.emissiveMap.channel),metalnessMapUv:Ke&&p(y.metalnessMap.channel),roughnessMapUv:Je&&p(y.roughnessMap.channel),anisotropyMapUv:$&&p(y.anisotropyMap.channel),clearcoatMapUv:oe&&p(y.clearcoatMap.channel),clearcoatNormalMapUv:he&&p(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Y&&p(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Z&&p(y.iridescenceMap.channel),iridescenceThicknessMapUv:de&&p(y.iridescenceThicknessMap.channel),sheenColorMapUv:Fe&&p(y.sheenColorMap.channel),sheenRoughnessMapUv:ge&&p(y.sheenRoughnessMap.channel),specularMapUv:fe&&p(y.specularMap.channel),specularColorMapUv:Oe&&p(y.specularColorMap.channel),specularIntensityMapUv:Xe&&p(y.specularIntensityMap.channel),transmissionMapUv:tt&&p(y.transmissionMap.channel),thicknessMapUv:D&&p(y.thicknessMap.channel),alphaMapUv:j&&p(y.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(ue||I),vertexNormals:!!B.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!B.attributes.uv&&(Ye||j),fog:!!L,useFog:y.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||B.attributes.normal===void 0&&ue===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:xe,skinning:V.isSkinnedMesh===!0,hasPositionAttribute:B.attributes.position!==void 0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:Ue,morphTextureStride:Ae,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:F.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:ze,decodeVideoTexture:Ye&&y.map.isVideoTexture===!0&&st.getTransfer(y.map.colorSpace)===wt,decodeVideoTextureEmissive:He&&y.emissiveMap.isVideoTexture===!0&&st.getTransfer(y.emissiveMap.colorSpace)===wt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Nn,flipSided:y.side===yn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:ne&&y.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ne&&y.extensions.multiDraw===!0||be)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Le.vertexUv1s=c.has(1),Le.vertexUv2s=c.has(2),Le.vertexUv3s=c.has(3),c.clear(),Le}function g(y){let w=[];if(y.shaderID?w.push(y.shaderID):(w.push(y.customVertexShaderID),w.push(y.customFragmentShaderID)),y.defines!==void 0)for(let P in y.defines)w.push(P),w.push(y.defines[P]);return y.isRawShaderMaterial===!1&&(m(w,y),M(w,y),w.push(n.outputColorSpace)),w.push(y.customProgramCacheKey),w.join()}function m(y,w){y.push(w.precision),y.push(w.outputColorSpace),y.push(w.envMapMode),y.push(w.envMapCubeUVHeight),y.push(w.mapUv),y.push(w.alphaMapUv),y.push(w.lightMapUv),y.push(w.aoMapUv),y.push(w.bumpMapUv),y.push(w.normalMapUv),y.push(w.displacementMapUv),y.push(w.emissiveMapUv),y.push(w.metalnessMapUv),y.push(w.roughnessMapUv),y.push(w.anisotropyMapUv),y.push(w.clearcoatMapUv),y.push(w.clearcoatNormalMapUv),y.push(w.clearcoatRoughnessMapUv),y.push(w.iridescenceMapUv),y.push(w.iridescenceThicknessMapUv),y.push(w.sheenColorMapUv),y.push(w.sheenRoughnessMapUv),y.push(w.specularMapUv),y.push(w.specularColorMapUv),y.push(w.specularIntensityMapUv),y.push(w.transmissionMapUv),y.push(w.thicknessMapUv),y.push(w.combine),y.push(w.fogExp2),y.push(w.sizeAttenuation),y.push(w.morphTargetsCount),y.push(w.morphAttributeCount),y.push(w.numSunLights),y.push(w.numDirLights),y.push(w.numPointLights),y.push(w.numSpotLights),y.push(w.numSpotLightMaps),y.push(w.numHemiLights),y.push(w.numRectAreaLights),y.push(w.numSunLightShadows),y.push(w.numDirLightShadows),y.push(w.numPointLightShadows),y.push(w.numSpotLightShadows),y.push(w.numSpotLightShadowsWithMaps),y.push(w.numLightProbes),y.push(w.shadowMapType),y.push(w.toneMapping),y.push(w.numClippingPlanes),y.push(w.numClipIntersection),y.push(w.depthPacking)}function M(y,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.retroreflection&&a.enable(24),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),w.packedNormalMap&&a.enable(22),w.vertexNormals&&a.enable(23),y.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),w.numLightProbeGrids>0&&a.enable(22),w.hasPositionAttribute&&a.enable(23),y.push(a.mask)}function E(y){let w=f[y.type],P;if(w){let U=es[w];P=S_.clone(U.uniforms)}else P=y.uniforms;return P}function v(y,w){let P=h.get(w);return P!==void 0?++P.usedTimes:(P=new uT(n,w,y,s),l.push(P),h.set(w,P)),P}function b(y){if(--y.usedTimes===0){let w=l.indexOf(y);l[w]=l[l.length-1],l.pop(),h.delete(y.cacheKey),y.destroy()}}function T(y){o.remove(y)}function R(){o.dispose()}return{getParameters:x,getProgramCacheKey:g,getUniforms:E,acquireProgram:v,releaseProgram:b,releaseShaderCache:T,programs:l,dispose:R}}function mT(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,c){n.get(a)[o]=c}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function gT(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function G_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function V_(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,p,x,g,m){let M=n[e];return M===void 0?(M={id:d.id,object:d,geometry:f,material:p,materialVariant:a(d),groupOrder:x,renderOrder:d.renderOrder,z:g,group:m},n[e]=M):(M.id=d.id,M.object=d,M.geometry=f,M.material=p,M.materialVariant=a(d),M.groupOrder=x,M.renderOrder=d.renderOrder,M.z=g,M.group=m),e++,M}function c(d,f,p,x,g,m,M){M.reversedDepth===!0&&(g=-g);let E=o(d,f,p,x,g,m);p.transmission>0?i.push(E):p.transparent===!0?s.push(E):t.push(E)}function l(d,f,p,x,g,m){let M=o(d,f,p,x,g,m);p.transmission>0?i.unshift(M):p.transparent===!0?s.unshift(M):t.unshift(M)}function h(d,f){t.length>1&&t.sort(d||gT),i.length>1&&i.sort(f||G_),s.length>1&&s.sort(f||G_)}function u(){for(let d=e,f=n.length;d<f;d++){let p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:c,unshift:l,finish:u,sort:h}}function _T(){let n=new WeakMap;function e(i,s){let r=n.get(i),a;return r===void 0?(a=new V_,n.set(i,[a])):s>=r.length?(a=new V_,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function xT(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new C,color:new Ge};break;case"SpotLight":t={position:new C,direction:new C,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":t={color:new Ge,position:new C,halfWidth:new C,halfHeight:new C};break}return n[e.id]=t,t}}}function vT(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var yT=0;function ST(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function MT(n){let e=new xT,t=vT(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new C);let s=new C,r=new je,a=new je;function o(l){let h=0,u=0,d=0;for(let V=0;V<9;V++)i.probe[V].set(0,0,0);let f=0,p=0,x=0,g=0,m=0,M=0,E=0,v=0,b=0,T=0,R=0,y=0,w=0,P=0;l.sort(ST);for(let V=0,F=l.length;V<F;V++){let L=l[V],B=L.color,X=L.intensity,W=L.distance,ie=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===tr?ie=L.shadow.map.texture:ie=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=B.r*X,u+=B.g*X,d+=B.b*X;else if(L.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(L.sh.coefficients[q],X);P++}else if(L.isSunLight){let q=e.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let J=L.shadow,te=t.get(L);te.shadowIntensity=J.intensity,te.shadowBias=J.bias,te.shadowNormalBias=J.normalBias,te.shadowRadius=J.radius,te.shadowMapSize.copy(J.mapSize).multiply(J.getFrameExtents()),i.sunShadow[p]=te,i.sunShadowMap[p]=ie;let Ue=J.getViewportCount();for(let Ae=0;Ae<Ue;Ae++)i.sunShadowMatrix[x+Ae]=J.getMatrix(Ae),i.sunShadowCascade[x+Ae]=J._cascadeData[Ae];x+=Ue,p++}i.sun[f]=q,f++}else if(L.isDirectionalLight){let q=e.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let J=L.shadow,te=t.get(L);te.shadowIntensity=J.intensity,te.shadowBias=J.bias,te.shadowNormalBias=J.normalBias,te.shadowRadius=J.radius,te.shadowMapSize=J.mapSize,i.directionalShadow[g]=te,i.directionalShadowMap[g]=ie,i.directionalShadowMatrix[g]=L.shadow.matrix,b++}i.directional[g]=q,g++}else if(L.isSpotLight){let q=e.get(L);q.position.setFromMatrixPosition(L.matrixWorld),q.color.copy(B).multiplyScalar(X),q.distance=W,q.coneCos=Math.cos(L.angle),q.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),q.decay=L.decay,i.spot[M]=q;let J=L.shadow;if(L.map&&(i.spotLightMap[y]=L.map,y++,J.updateMatrices(L),L.castShadow&&w++),i.spotLightMatrix[M]=J.matrix,L.castShadow){let te=t.get(L);te.shadowIntensity=J.intensity,te.shadowBias=J.bias,te.shadowNormalBias=J.normalBias,te.shadowRadius=J.radius,te.shadowMapSize=J.mapSize,i.spotShadow[M]=te,i.spotShadowMap[M]=ie,R++}M++}else if(L.isRectAreaLight){let q=e.get(L);q.color.copy(B).multiplyScalar(X),q.halfWidth.set(L.width*.5,0,0),q.halfHeight.set(0,L.height*.5,0),i.rectArea[E]=q,E++}else if(L.isPointLight){let q=e.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),q.distance=L.distance,q.decay=L.decay,L.castShadow){let J=L.shadow,te=t.get(L);te.shadowIntensity=J.intensity,te.shadowBias=J.bias,te.shadowNormalBias=J.normalBias,te.shadowRadius=J.radius,te.shadowMapSize=J.mapSize,te.shadowCameraNear=J.camera.near,te.shadowCameraFar=J.camera.far,i.pointShadow[m]=te,i.pointShadowMap[m]=ie,i.pointShadowMatrix[m]=L.shadow.matrix,T++}i.point[m]=q,m++}else if(L.isHemisphereLight){let q=e.get(L);q.skyColor.copy(L.color).multiplyScalar(X),q.groundColor.copy(L.groundColor).multiplyScalar(X),i.hemi[v]=q,v++}}E>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=_e.LTC_FLOAT_1,i.rectAreaLTC2=_e.LTC_FLOAT_2):(i.rectAreaLTC1=_e.LTC_HALF_1,i.rectAreaLTC2=_e.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;let U=i.hash;(U.sunLength!==f||U.directionalLength!==g||U.pointLength!==m||U.spotLength!==M||U.rectAreaLength!==E||U.hemiLength!==v||U.numSunShadows!==p||U.numDirectionalShadows!==b||U.numPointShadows!==T||U.numSpotShadows!==R||U.numSpotMaps!==y||U.numLightProbes!==P)&&(i.sun.length=f,i.directional.length=g,i.spot.length=M,i.rectArea.length=E,i.point.length=m,i.hemi.length=v,i.sunShadow.length=p,i.sunShadowMap.length=p,i.sunShadowMatrix.length=x,i.sunShadowCascade.length=x,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.directionalShadowMatrix.length=b,i.pointShadow.length=T,i.pointShadowMap.length=T,i.pointShadowMatrix.length=T,i.spotShadow.length=R,i.spotShadowMap.length=R,i.spotLightMatrix.length=R+y-w,i.spotLightMap.length=y,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=P,U.sunLength=f,U.directionalLength=g,U.pointLength=m,U.spotLength=M,U.rectAreaLength=E,U.hemiLength=v,U.numSunShadows=p,U.numDirectionalShadows=b,U.numPointShadows=T,U.numSpotShadows=R,U.numSpotMaps=y,U.numLightProbes=P,i.version=yT++)}function c(l,h){let u=0,d=0,f=0,p=0,x=0,g=0,m=h.matrixWorldInverse;for(let M=0,E=l.length;M<E;M++){let v=l[M];if(v.isSunLight){let b=i.sun[u];b.direction.setFromMatrixPosition(v.matrixWorld),b.direction.transformDirection(m),u++}else if(v.isDirectionalLight){let b=i.directional[d];b.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),d++}else if(v.isSpotLight){let b=i.spot[p];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),p++}else if(v.isRectAreaLight){let b=i.rectArea[x];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(m),a.identity(),r.copy(v.matrixWorld),r.premultiply(m),a.extractRotation(r),b.halfWidth.set(v.width*.5,0,0),b.halfHeight.set(0,v.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),x++}else if(v.isPointLight){let b=i.point[f];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(m),f++}else if(v.isHemisphereLight){let b=i.hemi[g];b.direction.setFromMatrixPosition(v.matrixWorld),b.direction.transformDirection(m),g++}}}return{setup:o,setupView:c,state:i}}function H_(n){let e=new MT(n),t=[],i=[],s=[];function r(d){u.camera=d,t.length=0,i.length=0,s.length=0}function a(d){t.push(d)}function o(d){i.push(d)}function c(d){s.push(d)}function l(){e.setup(t)}function h(d){e.setupView(t,d)}let u={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:l,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function bT(n){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new H_(n),e.set(s,[o])):r>=a.length?(o=new H_(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}var ET=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,TT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,AT=[new C(1,0,0),new C(-1,0,0),new C(0,1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1)],wT=[new C(0,-1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1),new C(0,-1,0),new C(0,-1,0)],W_=new je,Ic=new C,ip=new C;function RT(n,e,t){let i=new Ua,s=new ce,r=new ce,a=new It,o=new uh,c=new dh,l={},h=t.maxTextureSize,u={[Zi]:yn,[yn]:Zi,[Nn]:Nn},d=new ti({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ce},radius:{value:4}},vertexShader:ET,fragmentShader:TT}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let p=new on;p.setAttribute("position",new un(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new ht(p,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vc;let m=this.type;this.render=function(T,R,y){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;this.type===D0&&(De("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=vc);let w=n.getRenderTarget(),P=n.getActiveCubeFace(),U=n.getActiveMipmapLevel(),V=n.state;V.setBlending(Ji),V.buffers.depth.getReversed()===!0?V.buffers.color.setClear(0,0,0,0):V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);let F=m!==this.type;F&&R.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(B=>B.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,B=T.length;L<B;L++){let X=T[L],W=X.shadow;if(W===void 0){De("WebGLShadowMap:",X,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);let ie=W.getFrameExtents();s.multiply(ie),r.copy(W.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ie.x),s.x=r.x*ie.x,W.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ie.y),s.y=r.y*ie.y,W.mapSize.y=r.y));let q=n.state.buffers.depth.getReversed();if(W.camera._reversedDepth=q,W.map===null||F===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===Va){if(X.isPointLight){De("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new On(s.x,s.y,{format:tr,type:Ui,minFilter:Jt,magFilter:Jt,generateMipmaps:!1}),W.map.texture.name=X.name+".shadowMap",W.map.depthTexture=new Zs(s.x,s.y,ni),W.map.depthTexture.name=X.name+".shadowMapDepth",W.map.depthTexture.format=Xi,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Zt,W.map.depthTexture.magFilter=Zt}else X.isPointLight?(W.map=new pu(s.x),W.map.depthTexture=new ih(s.x,Di)):(W.map=new On(s.x,s.y),W.map.depthTexture=new Zs(s.x,s.y,Di)),W.map.depthTexture.name=X.name+".shadowMap",W.map.depthTexture.format=Xi,this.type===vc?(W.map.depthTexture.compareFunction=q?uu:hu,W.map.depthTexture.minFilter=Jt,W.map.depthTexture.magFilter=Jt):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Zt,W.map.depthTexture.magFilter=Zt);W.camera.updateProjectionMatrix()}W.map.isWebGLCubeRenderTarget!==!0&&(W.map.width!==s.x||W.map.height!==s.y)&&W.map.setSize(s.x,s.y);let J=W.map.isWebGLCubeRenderTarget?6:W.getViewportCount();X.isPointLight!==!0&&W.updateMatrices(X,y);for(let te=0;te<J;te++){let Ue=W.getCamera(te);if(X.isPointLight){let Ae=W.camera,Mt=W.matrix,ot=X.distance||Ae.far;ot!==Ae.far&&(Ae.far=ot,Ae.updateProjectionMatrix()),Ic.setFromMatrixPosition(X.matrixWorld),Ae.position.copy(Ic),ip.copy(Ae.position),ip.add(AT[te]),Ae.up.copy(wT[te]),Ae.lookAt(ip),Ae.updateMatrixWorld(),Mt.makeTranslation(-Ic.x,-Ic.y,-Ic.z),W_.multiplyMatrices(Ae.projectionMatrix,Ae.matrixWorldInverse),W._frustum.setFromProjectionMatrix(W_,Ae.coordinateSystem,Ae.reversedDepth)}if(W.map.isWebGLCubeRenderTarget)n.setRenderTarget(W.map,te),n.clear();else{te===0&&(n.setRenderTarget(W.map),n.clear());let Ae=W.getViewport(te);a.set(r.x*Ae.x,r.y*Ae.y,r.x*Ae.z,r.y*Ae.w),V.viewport(a)}i=W.getFrustum(te),v(R,y,Ue,X,this.type)}W.isPointLightShadow!==!0&&this.type===Va&&M(W,y),W.needsUpdate=!1}m=this.type,g.needsUpdate=!1,n.setRenderTarget(w,P,U)};function M(T,R){let y=e.update(x);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null?T.mapPass=new On(s.x,s.y,{format:tr,type:Ui}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),d.uniforms.shadow_pass.value=T.map.depthTexture,d.uniforms.resolution.value.set(T.map.width,T.map.height),d.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(R,null,y,d,x,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(R,null,y,f,x,null)}function E(T,R,y,w){let P=null,U=y.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(U!==void 0)P=U;else if(P=y.isPointLight===!0?c:o,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let V=P.uuid,F=R.uuid,L=l[V];L===void 0&&(L={},l[V]=L);let B=L[F];B===void 0&&(B=P.clone(),L[F]=B,R.addEventListener("dispose",b)),P=B}if(P.visible=R.visible,P.wireframe=R.wireframe,w===Va?P.side=R.shadowSide!==null?R.shadowSide:R.side:P.side=R.shadowSide!==null?R.shadowSide:u[R.side],P.alphaMap=R.alphaMap,P.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,P.map=R.map,P.clipShadows=R.clipShadows,P.clippingPlanes=R.clippingPlanes,P.clipIntersection=R.clipIntersection,P.displacementMap=R.displacementMap,P.displacementScale=R.displacementScale,P.displacementBias=R.displacementBias,P.wireframeLinewidth=R.wireframeLinewidth,P.linewidth=R.linewidth,y.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let V=n.properties.get(P);V.light=y}return P}function v(T,R,y,w,P){if(T.visible===!1)return;if(T.layers.test(R.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&P===Va)&&(!T.frustumCulled||T.intersectsFrustum(i))){T.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,T.matrixWorld);let F=e.update(T),L=T.material;if(Array.isArray(L)){let B=F.groups;for(let X=0,W=B.length;X<W;X++){let ie=B[X],q=L[ie.materialIndex];if(q&&q.visible){let J=E(T,q,w,P);T.onBeforeShadow(n,T,R,y,F,J,ie),n.renderBufferDirect(y,null,F,J,T,ie),T.onAfterShadow(n,T,R,y,F,J,ie)}}}else if(L.visible){let B=E(T,L,w,P);T.onBeforeShadow(n,T,R,y,F,B,null),n.renderBufferDirect(y,null,F,B,T,null),T.onAfterShadow(n,T,R,y,F,B,null)}}let V=T.children;for(let F=0,L=V.length;F<L;F++)v(V[F],R,y,w,P)}function b(T){T.target.removeEventListener("dispose",b);for(let y in l){let w=l[y],P=T.target.uuid;P in w&&(w[P].dispose(),delete w[P])}}}function CT(n,e){function t(){let D=!1,pe=new It,j=null,me=new It(0,0,0,0);return{setMask:function(Me){j!==Me&&!D&&(n.colorMask(Me,Me,Me,Me),j=Me)},setLocked:function(Me){D=Me},setClear:function(Me,ne,ze,Le,Ut){Ut===!0&&(Me*=Le,ne*=Le,ze*=Le),pe.set(Me,ne,ze,Le),me.equals(pe)===!1&&(n.clearColor(Me,ne,ze,Le),me.copy(pe))},reset:function(){D=!1,j=null,me.set(-1,0,0,0)}}}function i(){let D=!1,pe=!1,j=null,me=null,Me=null;return{setReversed:function(ne){if(pe!==ne){let ze=e.get("EXT_clip_control");ne?ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.ZERO_TO_ONE_EXT):ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.NEGATIVE_ONE_TO_ONE_EXT),pe=ne;let Le=Me;Me=null,this.setClear(Le)}},getReversed:function(){return pe},setTest:function(ne){ne?Q(n.DEPTH_TEST):xe(n.DEPTH_TEST)},setMask:function(ne){j!==ne&&!D&&(n.depthMask(ne),j=ne)},setFunc:function(ne){if(pe&&(ne=m_[ne]),me!==ne){switch(ne){case Xl:n.depthFunc(n.NEVER);break;case ql:n.depthFunc(n.ALWAYS);break;case $l:n.depthFunc(n.LESS);break;case Ea:n.depthFunc(n.LEQUAL);break;case Yl:n.depthFunc(n.EQUAL);break;case Kl:n.depthFunc(n.GEQUAL);break;case jl:n.depthFunc(n.GREATER);break;case Zl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}me=ne}},setLocked:function(ne){D=ne},setClear:function(ne){Me!==ne&&(Me=ne,pe&&(ne=1-ne),n.clearDepth(ne))},reset:function(){D=!1,j=null,me=null,Me=null,pe=!1}}}function s(){let D=!1,pe=null,j=null,me=null,Me=null,ne=null,ze=null,Le=null,Ut=null;return{setTest:function(Tt){D||(Tt?Q(n.STENCIL_TEST):xe(n.STENCIL_TEST))},setMask:function(Tt){pe!==Tt&&!D&&(n.stencilMask(Tt),pe=Tt)},setFunc:function(Tt,Ti,zi){(j!==Tt||me!==Ti||Me!==zi)&&(n.stencilFunc(Tt,Ti,zi),j=Tt,me=Ti,Me=zi)},setOp:function(Tt,Ti,zi){(ne!==Tt||ze!==Ti||Le!==zi)&&(n.stencilOp(Tt,Ti,zi),ne=Tt,ze=Ti,Le=zi)},setLocked:function(Tt){D=Tt},setClear:function(Tt){Ut!==Tt&&(n.clearStencil(Tt),Ut=Tt)},reset:function(){D=!1,pe=null,j=null,me=null,Me=null,ne=null,ze=null,Le=null,Ut=null}}}let r=new t,a=new i,o=new s,c=new WeakMap,l=new WeakMap,h={},u={},d={},f=new WeakMap,p=[],x=null,g=!1,m=null,M=null,E=null,v=null,b=null,T=null,R=null,y=new Ge(0,0,0),w=0,P=!1,U=null,V=null,F=null,L=null,B=null,X=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,ie=0,q=n.getParameter(n.VERSION);q.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(q)[1]),W=ie>=1):q.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),W=ie>=2);let J=null,te={},Ue=n.getParameter(n.SCISSOR_BOX),Ae=n.getParameter(n.VIEWPORT),Mt=new It().fromArray(Ue),ot=new It().fromArray(Ae);function _t(D,pe,j,me){let Me=new Uint8Array(4),ne=n.createTexture();n.bindTexture(D,ne),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ze=0;ze<j;ze++)D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY?n.texImage3D(pe,0,n.RGBA,1,1,me,0,n.RGBA,n.UNSIGNED_BYTE,Me):n.texImage2D(pe+ze,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Me);return ne}let K={};K[n.TEXTURE_2D]=_t(n.TEXTURE_2D,n.TEXTURE_2D,1),K[n.TEXTURE_CUBE_MAP]=_t(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[n.TEXTURE_2D_ARRAY]=_t(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),K[n.TEXTURE_3D]=_t(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Q(n.DEPTH_TEST),a.setFunc(Ea),ae(!1),ue(xf),Q(n.CULL_FACE),se(Ji);function Q(D){h[D]!==!0&&(n.enable(D),h[D]=!0)}function xe(D){h[D]!==!1&&(n.disable(D),h[D]=!1)}function qe(D,pe){return d[D]!==pe?(n.bindFramebuffer(D,pe),d[D]=pe,D===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=pe),D===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=pe),!0):!1}function be(D,pe){let j=p,me=!1;if(D){j=f.get(pe),j===void 0&&(j=[],f.set(pe,j));let Me=D.textures;if(j.length!==Me.length||j[0]!==n.COLOR_ATTACHMENT0){for(let ne=0,ze=Me.length;ne<ze;ne++)j[ne]=n.COLOR_ATTACHMENT0+ne;j.length=Me.length,me=!0}}else j[0]!==n.BACK&&(j[0]=n.BACK,me=!0);me&&n.drawBuffers(j)}function Ye(D){return x!==D?(n.useProgram(D),x=D,!0):!1}let Rt={[Ur]:n.FUNC_ADD,[F0]:n.FUNC_SUBTRACT,[O0]:n.FUNC_REVERSE_SUBTRACT};Rt[B0]=n.MIN,Rt[k0]=n.MAX;let ee={[z0]:n.ZERO,[G0]:n.ONE,[V0]:n.SRC_COLOR,[Mf]:n.SRC_ALPHA,[Y0]:n.SRC_ALPHA_SATURATE,[q0]:n.DST_COLOR,[W0]:n.DST_ALPHA,[H0]:n.ONE_MINUS_SRC_COLOR,[bf]:n.ONE_MINUS_SRC_ALPHA,[$0]:n.ONE_MINUS_DST_COLOR,[X0]:n.ONE_MINUS_DST_ALPHA,[K0]:n.CONSTANT_COLOR,[j0]:n.ONE_MINUS_CONSTANT_COLOR,[Z0]:n.CONSTANT_ALPHA,[J0]:n.ONE_MINUS_CONSTANT_ALPHA};function se(D,pe,j,me,Me,ne,ze,Le,Ut,Tt){if(D===Ji){g===!0&&(xe(n.BLEND),g=!1);return}if(g===!1&&(Q(n.BLEND),g=!0),D!==U0){if(D!==m||Tt!==P){if((M!==Ur||b!==Ur)&&(n.blendEquation(n.FUNC_ADD),M=Ur,b=Ur),Tt)switch(D){case Ha:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case vf:n.blendFunc(n.ONE,n.ONE);break;case yf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Sf:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:$e("WebGLState: Invalid blending: ",D);break}else switch(D){case Ha:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case vf:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case yf:$e("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Sf:$e("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:$e("WebGLState: Invalid blending: ",D);break}E=null,v=null,T=null,R=null,y.set(0,0,0),w=0,m=D,P=Tt}return}Me=Me||pe,ne=ne||j,ze=ze||me,(pe!==M||Me!==b)&&(n.blendEquationSeparate(Rt[pe],Rt[Me]),M=pe,b=Me),(j!==E||me!==v||ne!==T||ze!==R)&&(n.blendFuncSeparate(ee[j],ee[me],ee[ne],ee[ze]),E=j,v=me,T=ne,R=ze),(Le.equals(y)===!1||Ut!==w)&&(n.blendColor(Le.r,Le.g,Le.b,Ut),y.copy(Le),w=Ut),m=D,P=!1}function re(D,pe){D.side===Nn?xe(n.CULL_FACE):Q(n.CULL_FACE);let j=D.side===yn;pe&&(j=!j),ae(j),D.blending===Ha&&D.transparent===!1?se(Ji):se(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);let me=D.stencilWrite;o.setTest(me),me&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),He(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Q(n.SAMPLE_ALPHA_TO_COVERAGE):xe(n.SAMPLE_ALPHA_TO_COVERAGE)}function ae(D){U!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),U=D)}function ue(D){D!==L0?(Q(n.CULL_FACE),D!==V&&(D===xf?n.cullFace(n.BACK):D===N0?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):xe(n.CULL_FACE),V=D}function We(D){D!==F&&(W&&n.lineWidth(D),F=D)}function He(D,pe,j){D?(Q(n.POLYGON_OFFSET_FILL),(L!==pe||B!==j)&&(L=pe,B=j,a.getReversed()&&(pe=-pe),n.polygonOffset(pe,j))):xe(n.POLYGON_OFFSET_FILL)}function Ke(D){D?Q(n.SCISSOR_TEST):xe(n.SCISSOR_TEST)}function Je(D){D===void 0&&(D=n.TEXTURE0+X-1),J!==D&&(n.activeTexture(D),J=D)}function I(D,pe,j){j===void 0&&(J===null?j=n.TEXTURE0+X-1:j=J);let me=te[j];me===void 0&&(me={type:void 0,texture:void 0},te[j]=me),(me.type!==D||me.texture!==pe)&&(J!==j&&(n.activeTexture(j),J=j),n.bindTexture(D,pe||K[D]),me.type=D,me.texture=pe)}function Et(){let D=te[J];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function ct(){try{n.compressedTexImage2D(...arguments)}catch(D){$e("WebGLState:",D)}}function A(){try{n.compressedTexImage3D(...arguments)}catch(D){$e("WebGLState:",D)}}function _(){try{n.texSubImage2D(...arguments)}catch(D){$e("WebGLState:",D)}}function O(){try{n.texSubImage3D(...arguments)}catch(D){$e("WebGLState:",D)}}function G(){try{n.compressedTexSubImage2D(...arguments)}catch(D){$e("WebGLState:",D)}}function $(){try{n.compressedTexSubImage3D(...arguments)}catch(D){$e("WebGLState:",D)}}function oe(){try{n.texStorage2D(...arguments)}catch(D){$e("WebGLState:",D)}}function he(){try{n.texStorage3D(...arguments)}catch(D){$e("WebGLState:",D)}}function Y(){try{n.texImage2D(...arguments)}catch(D){$e("WebGLState:",D)}}function Z(){try{n.texImage3D(...arguments)}catch(D){$e("WebGLState:",D)}}function de(D){return u[D]!==void 0?u[D]:n.getParameter(D)}function Fe(D,pe){u[D]!==pe&&(n.pixelStorei(D,pe),u[D]=pe)}function ge(D){Mt.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),Mt.copy(D))}function fe(D){ot.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),ot.copy(D))}function Oe(D,pe){let j=l.get(pe);j===void 0&&(j=new WeakMap,l.set(pe,j));let me=j.get(D);me===void 0&&(me=n.getUniformBlockIndex(pe,D.name),j.set(D,me))}function Xe(D,pe){let me=l.get(pe).get(D);c.get(pe)!==me&&(n.uniformBlockBinding(pe,me,D.__bindingPointIndex),c.set(pe,me))}function tt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},u={},J=null,te={},d={},f=new WeakMap,p=[],x=null,g=!1,m=null,M=null,E=null,v=null,b=null,T=null,R=null,y=new Ge(0,0,0),w=0,P=!1,U=null,V=null,F=null,L=null,B=null,Mt.set(0,0,n.canvas.width,n.canvas.height),ot.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Q,disable:xe,bindFramebuffer:qe,drawBuffers:be,useProgram:Ye,setBlending:se,setMaterial:re,setFlipSided:ae,setCullFace:ue,setLineWidth:We,setPolygonOffset:He,setScissorTest:Ke,activeTexture:Je,bindTexture:I,unbindTexture:Et,compressedTexImage2D:ct,compressedTexImage3D:A,texImage2D:Y,texImage3D:Z,pixelStorei:Fe,getParameter:de,updateUBOMapping:Oe,uniformBlockBinding:Xe,texStorage2D:oe,texStorage3D:he,texSubImage2D:_,texSubImage3D:O,compressedTexSubImage2D:G,compressedTexSubImage3D:$,scissor:ge,viewport:fe,reset:tt}}function IT(n,e,t,i,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ce,h=new WeakMap,u=new Set,d,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(A,_){return p?new OffscreenCanvas(A,_):wa("canvas")}function g(A,_,O){let G=1,$=ct(A);if(($.width>O||$.height>O)&&(G=O/Math.max($.width,$.height)),G<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let oe=Math.floor(G*$.width),he=Math.floor(G*$.height);d===void 0&&(d=x(oe,he));let Y=_?x(oe,he):d;return Y.width=oe,Y.height=he,Y.getContext("2d").drawImage(A,0,0,oe,he),De("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+oe+"x"+he+")."),Y}else return"data"in A&&De("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),A;return A}function m(A){return A.generateMipmaps}function M(A){n.generateMipmap(A)}function E(A){return A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?n.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function v(A,_,O,G,$,oe=!1){if(A!==null){if(n[A]!==void 0)return n[A];De("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let he;G&&(he=e.get("EXT_texture_norm16"),he||De("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=_;if(_===n.RED&&(O===n.FLOAT&&(Y=n.R32F),O===n.HALF_FLOAT&&(Y=n.R16F),O===n.UNSIGNED_BYTE&&(Y=n.R8),O===n.UNSIGNED_SHORT&&he&&(Y=he.R16_EXT),O===n.SHORT&&he&&(Y=he.R16_SNORM_EXT)),_===n.RED_INTEGER&&(O===n.UNSIGNED_BYTE&&(Y=n.R8UI),O===n.UNSIGNED_SHORT&&(Y=n.R16UI),O===n.UNSIGNED_INT&&(Y=n.R32UI),O===n.BYTE&&(Y=n.R8I),O===n.SHORT&&(Y=n.R16I),O===n.INT&&(Y=n.R32I)),_===n.RG&&(O===n.FLOAT&&(Y=n.RG32F),O===n.HALF_FLOAT&&(Y=n.RG16F),O===n.UNSIGNED_BYTE&&(Y=n.RG8),O===n.UNSIGNED_SHORT&&he&&(Y=he.RG16_EXT),O===n.SHORT&&he&&(Y=he.RG16_SNORM_EXT)),_===n.RG_INTEGER&&(O===n.UNSIGNED_BYTE&&(Y=n.RG8UI),O===n.UNSIGNED_SHORT&&(Y=n.RG16UI),O===n.UNSIGNED_INT&&(Y=n.RG32UI),O===n.BYTE&&(Y=n.RG8I),O===n.SHORT&&(Y=n.RG16I),O===n.INT&&(Y=n.RG32I)),_===n.RGB_INTEGER&&(O===n.UNSIGNED_BYTE&&(Y=n.RGB8UI),O===n.UNSIGNED_SHORT&&(Y=n.RGB16UI),O===n.UNSIGNED_INT&&(Y=n.RGB32UI),O===n.BYTE&&(Y=n.RGB8I),O===n.SHORT&&(Y=n.RGB16I),O===n.INT&&(Y=n.RGB32I)),_===n.RGBA_INTEGER&&(O===n.UNSIGNED_BYTE&&(Y=n.RGBA8UI),O===n.UNSIGNED_SHORT&&(Y=n.RGBA16UI),O===n.UNSIGNED_INT&&(Y=n.RGBA32UI),O===n.BYTE&&(Y=n.RGBA8I),O===n.SHORT&&(Y=n.RGBA16I),O===n.INT&&(Y=n.RGBA32I)),_===n.RGB&&(O===n.UNSIGNED_SHORT&&he&&(Y=he.RGB16_EXT),O===n.SHORT&&he&&(Y=he.RGB16_SNORM_EXT),O===n.UNSIGNED_INT_5_9_9_9_REV&&(Y=n.RGB9_E5),O===n.UNSIGNED_INT_10F_11F_11F_REV&&(Y=n.R11F_G11F_B10F)),_===n.RGBA){let Z=oe?zo:st.getTransfer($);O===n.FLOAT&&(Y=n.RGBA32F),O===n.HALF_FLOAT&&(Y=n.RGBA16F),O===n.UNSIGNED_BYTE&&(Y=Z===wt?n.SRGB8_ALPHA8:n.RGBA8),O===n.UNSIGNED_SHORT&&he&&(Y=he.RGBA16_EXT),O===n.SHORT&&he&&(Y=he.RGBA16_SNORM_EXT),O===n.UNSIGNED_SHORT_4_4_4_4&&(Y=n.RGBA4),O===n.UNSIGNED_SHORT_5_5_5_1&&(Y=n.RGB5_A1)}return(Y===n.R16F||Y===n.R32F||Y===n.RG16F||Y===n.RG32F||Y===n.RGBA16F||Y===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function b(A,_){let O;return A?_===null||_===Di||_===qa?O=n.DEPTH24_STENCIL8:_===ni?O=n.DEPTH32F_STENCIL8:_===Xa&&(O=n.DEPTH24_STENCIL8,De("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Di||_===qa?O=n.DEPTH_COMPONENT24:_===ni?O=n.DEPTH_COMPONENT32F:_===Xa&&(O=n.DEPTH_COMPONENT16),O}function T(A,_){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==Zt&&A.minFilter!==Jt?Math.log2(Math.max(_.width,_.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?_.mipmaps.length:1}function R(A){let _=A.target;_.removeEventListener("dispose",R),w(_),_.isVideoTexture&&h.delete(_),_.isHTMLTexture&&u.delete(_)}function y(A){let _=A.target;_.removeEventListener("dispose",y),U(_)}function w(A){let _=i.get(A);if(_.__webglInit===void 0)return;let O=A.source,G=f.get(O);if(G){let $=G[_.__cacheKey];$.usedTimes--,$.usedTimes===0&&P(A),Object.keys(G).length===0&&f.delete(O)}i.remove(A)}function P(A){let _=i.get(A);n.deleteTexture(_.__webglTexture);let O=A.source,G=f.get(O);delete G[_.__cacheKey],a.memory.textures--}function U(A){let _=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(_.__webglFramebuffer[G]))for(let $=0;$<_.__webglFramebuffer[G].length;$++)n.deleteFramebuffer(_.__webglFramebuffer[G][$]);else n.deleteFramebuffer(_.__webglFramebuffer[G]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[G])}else{if(Array.isArray(_.__webglFramebuffer))for(let G=0;G<_.__webglFramebuffer.length;G++)n.deleteFramebuffer(_.__webglFramebuffer[G]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let G=0;G<_.__webglColorRenderbuffer.length;G++)_.__webglColorRenderbuffer[G]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[G]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let O=A.textures;for(let G=0,$=O.length;G<$;G++){let oe=i.get(O[G]);oe.__webglTexture&&(n.deleteTexture(oe.__webglTexture),a.memory.textures--),i.remove(O[G])}i.remove(A)}let V=0;function F(){V=0}function L(){return V}function B(A){V=A}function X(){let A=V;return A>=s.maxTextures&&De("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),V+=1,A}function W(A){let _=[];return _.push(A.wrapS),_.push(A.wrapT),_.push(A.wrapR||0),_.push(A.magFilter),_.push(A.minFilter),_.push(A.anisotropy),_.push(A.internalFormat),_.push(A.format),_.push(A.type),_.push(A.generateMipmaps),_.push(A.premultiplyAlpha),_.push(A.flipY),_.push(A.unpackAlignment),_.push(A.colorSpace),_.join()}function ie(A,_){let O=i.get(A);if(A.isVideoTexture&&I(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&O.__version!==A.version){let G=A.image;if(G===null)De("WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)De("WebGLRenderer: Texture marked for update but image is incomplete");else{xe(O,A,_);return}}else A.isExternalTexture&&(O.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,O.__webglTexture,n.TEXTURE0+_)}function q(A,_){let O=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){xe(O,A,_);return}else A.isExternalTexture&&(O.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,O.__webglTexture,n.TEXTURE0+_)}function J(A,_){let O=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){xe(O,A,_);return}t.bindTexture(n.TEXTURE_3D,O.__webglTexture,n.TEXTURE0+_)}function te(A,_){let O=i.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&O.__version!==A.version){qe(O,A,_);return}t.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+_)}let Ue={[js]:n.REPEAT,[fi]:n.CLAMP_TO_EDGE,[Ta]:n.MIRRORED_REPEAT},Ae={[Zt]:n.NEAREST,[Ah]:n.NEAREST_MIPMAP_NEAREST,[Or]:n.NEAREST_MIPMAP_LINEAR,[Jt]:n.LINEAR,[Wa]:n.LINEAR_MIPMAP_NEAREST,[Ni]:n.LINEAR_MIPMAP_LINEAR},Mt={[a_]:n.NEVER,[u_]:n.ALWAYS,[o_]:n.LESS,[hu]:n.LEQUAL,[c_]:n.EQUAL,[uu]:n.GEQUAL,[l_]:n.GREATER,[h_]:n.NOTEQUAL};function ot(A,_){if(_.type===ni&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Jt||_.magFilter===Wa||_.magFilter===Or||_.magFilter===Ni||_.minFilter===Jt||_.minFilter===Wa||_.minFilter===Or||_.minFilter===Ni)&&De("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(A,n.TEXTURE_WRAP_S,Ue[_.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,Ue[_.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,Ue[_.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,Ae[_.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,Ae[_.minFilter]),_.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,Mt[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Zt||_.minFilter!==Or&&_.minFilter!==Ni||_.type===ni&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){let O=e.get("EXT_texture_filter_anisotropic");n.texParameterf(A,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function _t(A,_){let O=!1;A.__webglInit===void 0&&(A.__webglInit=!0,_.addEventListener("dispose",R));let G=_.source,$=f.get(G);$===void 0&&($={},f.set(G,$));let oe=W(_);if(oe!==A.__cacheKey){$[oe]===void 0&&($[oe]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,O=!0),$[oe].usedTimes++;let he=$[A.__cacheKey];he!==void 0&&($[A.__cacheKey].usedTimes--,he.usedTimes===0&&P(_)),A.__cacheKey=oe,A.__webglTexture=$[oe].texture}return O}function K(A,_,O){return Math.floor(Math.floor(A/O)/_)}function Q(A,_,O,G){let oe=A.updateRanges;if(oe.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,_.width,_.height,O,G,_.data);else{oe.sort((Fe,ge)=>Fe.start-ge.start);let he=0;for(let Fe=1;Fe<oe.length;Fe++){let ge=oe[he],fe=oe[Fe],Oe=ge.start+ge.count,Xe=K(fe.start,_.width,4),tt=K(ge.start,_.width,4);fe.start<=Oe+1&&Xe===tt&&K(fe.start+fe.count-1,_.width,4)===Xe?ge.count=Math.max(ge.count,fe.start+fe.count-ge.start):(++he,oe[he]=fe)}oe.length=he+1;let Y=t.getParameter(n.UNPACK_ROW_LENGTH),Z=t.getParameter(n.UNPACK_SKIP_PIXELS),de=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,_.width);for(let Fe=0,ge=oe.length;Fe<ge;Fe++){let fe=oe[Fe],Oe=Math.floor(fe.start/4),Xe=Math.ceil(fe.count/4),tt=Oe%_.width,D=Math.floor(Oe/_.width),pe=Xe,j=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,tt),t.pixelStorei(n.UNPACK_SKIP_ROWS,D),t.texSubImage2D(n.TEXTURE_2D,0,tt,D,pe,j,O,G,_.data)}A.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,Y),t.pixelStorei(n.UNPACK_SKIP_PIXELS,Z),t.pixelStorei(n.UNPACK_SKIP_ROWS,de)}}function xe(A,_,O){let G=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(G=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(G=n.TEXTURE_3D);let $=_t(A,_),oe=_.source;t.bindTexture(G,A.__webglTexture,n.TEXTURE0+O);let he=i.get(oe);if(oe.version!==he.__version||$===!0){if(t.activeTexture(n.TEXTURE0+O),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){let j=st.getPrimaries(st.workingColorSpace),me=_.colorSpace===Rs?null:st.getPrimaries(_.colorSpace),Me=_.colorSpace===Rs||j===me?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me)}t.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment);let Z=g(_.image,!1,s.maxTextureSize);Z=Et(_,Z);let de=r.convert(_.format,_.colorSpace),Fe=r.convert(_.type),ge=v(_.internalFormat,de,Fe,_.normalized,_.colorSpace,_.isVideoTexture);ot(G,_);let fe,Oe=_.mipmaps,Xe=_.isVideoTexture!==!0,tt=he.__version===void 0||$===!0,D=oe.dataReady,pe=T(_,Z);if(_.isDepthTexture)ge=b(_.format===er,_.type),tt&&(Xe?t.texStorage2D(n.TEXTURE_2D,1,ge,Z.width,Z.height):t.texImage2D(n.TEXTURE_2D,0,ge,Z.width,Z.height,0,de,Fe,null));else if(_.isDataTexture)if(Oe.length>0){Xe&&tt&&t.texStorage2D(n.TEXTURE_2D,pe,ge,Oe[0].width,Oe[0].height);for(let j=0,me=Oe.length;j<me;j++)fe=Oe[j],Xe?D&&t.texSubImage2D(n.TEXTURE_2D,j,0,0,fe.width,fe.height,de,Fe,fe.data):t.texImage2D(n.TEXTURE_2D,j,ge,fe.width,fe.height,0,de,Fe,fe.data);_.generateMipmaps=!1}else Xe?(tt&&t.texStorage2D(n.TEXTURE_2D,pe,ge,Z.width,Z.height),D&&Q(_,Z,de,Fe)):t.texImage2D(n.TEXTURE_2D,0,ge,Z.width,Z.height,0,de,Fe,Z.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Xe&&tt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,pe,ge,Oe[0].width,Oe[0].height,Z.depth);for(let j=0,me=Oe.length;j<me;j++)if(fe=Oe[j],_.format!==ii)if(de!==null)if(Xe){if(D)if(_.layerUpdates.size>0){let Me=qf(fe.width,fe.height,_.format,_.type);for(let ne of _.layerUpdates){let ze=fe.data.subarray(ne*Me/fe.data.BYTES_PER_ELEMENT,(ne+1)*Me/fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,ne,fe.width,fe.height,1,de,ze)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,0,fe.width,fe.height,Z.depth,de,fe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,j,ge,fe.width,fe.height,Z.depth,0,fe.data,0,0);else De("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Xe?D&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,0,fe.width,fe.height,Z.depth,de,Fe,fe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,j,ge,fe.width,fe.height,Z.depth,0,de,Fe,fe.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{Xe&&tt&&t.texStorage2D(n.TEXTURE_2D,pe,ge,Oe[0].width,Oe[0].height);for(let j=0,me=Oe.length;j<me;j++)fe=Oe[j],_.format!==ii?de!==null?Xe?D&&t.compressedTexSubImage2D(n.TEXTURE_2D,j,0,0,fe.width,fe.height,de,fe.data):t.compressedTexImage2D(n.TEXTURE_2D,j,ge,fe.width,fe.height,0,fe.data):De("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xe?D&&t.texSubImage2D(n.TEXTURE_2D,j,0,0,fe.width,fe.height,de,Fe,fe.data):t.texImage2D(n.TEXTURE_2D,j,ge,fe.width,fe.height,0,de,Fe,fe.data)}else if(_.isDataArrayTexture)if(Xe){if(tt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,pe,ge,Z.width,Z.height,Z.depth),D)if(_.layerUpdates.size>0){let j=qf(Z.width,Z.height,_.format,_.type);for(let me of _.layerUpdates){let Me=Z.data.subarray(me*j/Z.data.BYTES_PER_ELEMENT,(me+1)*j/Z.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,me,Z.width,Z.height,1,de,Fe,Me)}_.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,de,Fe,Z.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ge,Z.width,Z.height,Z.depth,0,de,Fe,Z.data);else if(_.isData3DTexture)Xe?(tt&&t.texStorage3D(n.TEXTURE_3D,pe,ge,Z.width,Z.height,Z.depth),D&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,de,Fe,Z.data)):t.texImage3D(n.TEXTURE_3D,0,ge,Z.width,Z.height,Z.depth,0,de,Fe,Z.data);else if(_.isFramebufferTexture){if(tt)if(Xe)t.texStorage2D(n.TEXTURE_2D,pe,ge,Z.width,Z.height);else{let j=Z.width,me=Z.height;for(let Me=0;Me<pe;Me++)t.texImage2D(n.TEXTURE_2D,Me,ge,j,me,0,de,Fe,null),j>>=1,me>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in n){let j=n.canvas;if(j.hasAttribute("layoutsubtree")||j.setAttribute("layoutsubtree","true"),Z.parentNode!==j){j.appendChild(Z),u.add(_),j.onpaint=me=>{let Me=me.changedElements;for(let ne of u)Me.includes(ne.image)&&(ne.needsUpdate=!0)},j.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,Z);else{let Me=n.RGBA,ne=n.RGBA,ze=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Me,ne,ze,Z)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Oe.length>0){if(Xe&&tt){let j=ct(Oe[0]);t.texStorage2D(n.TEXTURE_2D,pe,ge,j.width,j.height)}for(let j=0,me=Oe.length;j<me;j++)fe=Oe[j],Xe?D&&t.texSubImage2D(n.TEXTURE_2D,j,0,0,de,Fe,fe):t.texImage2D(n.TEXTURE_2D,j,ge,de,Fe,fe);_.generateMipmaps=!1}else if(Xe){if(tt){let j=ct(Z);t.texStorage2D(n.TEXTURE_2D,pe,ge,j.width,j.height)}D&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,de,Fe,Z)}else t.texImage2D(n.TEXTURE_2D,0,ge,de,Fe,Z);m(_)&&M(G),he.__version=oe.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function qe(A,_,O){if(_.image.length!==6)return;let G=_t(A,_),$=_.source;t.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+O);let oe=i.get($);if($.version!==oe.__version||G===!0){t.activeTexture(n.TEXTURE0+O);let he=st.getPrimaries(st.workingColorSpace),Y=_.colorSpace===Rs?null:st.getPrimaries(_.colorSpace),Z=_.colorSpace===Rs||he===Y?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Z);let de=_.isCompressedTexture||_.image[0].isCompressedTexture,Fe=_.image[0]&&_.image[0].isDataTexture,ge=[];for(let ne=0;ne<6;ne++)!de&&!Fe?ge[ne]=g(_.image[ne],!0,s.maxCubemapSize):ge[ne]=Fe?_.image[ne].image:_.image[ne],ge[ne]=Et(_,ge[ne]);let fe=ge[0],Oe=r.convert(_.format,_.colorSpace),Xe=r.convert(_.type),tt=v(_.internalFormat,Oe,Xe,_.normalized,_.colorSpace),D=_.isVideoTexture!==!0,pe=oe.__version===void 0||G===!0,j=$.dataReady,me=T(_,fe);ot(n.TEXTURE_CUBE_MAP,_);let Me;if(de){D&&pe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,me,tt,fe.width,fe.height);for(let ne=0;ne<6;ne++){Me=ge[ne].mipmaps;for(let ze=0;ze<Me.length;ze++){let Le=Me[ze];_.format!==ii?Oe!==null?D?j&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ze,0,0,Le.width,Le.height,Oe,Le.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ze,tt,Le.width,Le.height,0,Le.data):De("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?j&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ze,0,0,Le.width,Le.height,Oe,Xe,Le.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ze,tt,Le.width,Le.height,0,Oe,Xe,Le.data)}}}else{if(Me=_.mipmaps,D&&pe){Me.length>0&&me++;let ne=ct(ge[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,me,tt,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(Fe){D?j&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,ge[ne].width,ge[ne].height,Oe,Xe,ge[ne].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,tt,ge[ne].width,ge[ne].height,0,Oe,Xe,ge[ne].data);for(let ze=0;ze<Me.length;ze++){let Ut=Me[ze].image[ne].image;D?j&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ze+1,0,0,Ut.width,Ut.height,Oe,Xe,Ut.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ze+1,tt,Ut.width,Ut.height,0,Oe,Xe,Ut.data)}}else{D?j&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Oe,Xe,ge[ne]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,tt,Oe,Xe,ge[ne]);for(let ze=0;ze<Me.length;ze++){let Le=Me[ze];D?j&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ze+1,0,0,Oe,Xe,Le.image[ne]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ze+1,tt,Oe,Xe,Le.image[ne])}}}m(_)&&M(n.TEXTURE_CUBE_MAP),oe.__version=$.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function be(A,_,O,G,$,oe){let he=r.convert(O.format,O.colorSpace),Y=r.convert(O.type),Z=v(O.internalFormat,he,Y,O.normalized,O.colorSpace),de=i.get(_),Fe=i.get(O);if(Fe.__renderTarget=_,!de.__hasExternalTextures){let ge=Math.max(1,_.width>>oe),fe=Math.max(1,_.height>>oe);$===n.TEXTURE_3D||$===n.TEXTURE_2D_ARRAY?t.texImage3D($,oe,Z,ge,fe,_.depth,0,he,Y,null):t.texImage2D($,oe,Z,ge,fe,0,he,Y,null)}t.bindFramebuffer(n.FRAMEBUFFER,A),Je(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,G,$,Fe.__webglTexture,0,Ke(_)):($===n.TEXTURE_2D||$>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,G,$,Fe.__webglTexture,oe),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ye(A,_,O){if(n.bindRenderbuffer(n.RENDERBUFFER,A),_.depthBuffer){let G=_.depthTexture,$=G&&G.isDepthTexture?G.type:null,oe=b(_.stencilBuffer,$),he=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Je(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ke(_),oe,_.width,_.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ke(_),oe,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,oe,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,he,n.RENDERBUFFER,A)}else{let G=_.textures;for(let $=0;$<G.length;$++){let oe=G[$],he=r.convert(oe.format,oe.colorSpace),Y=r.convert(oe.type),Z=v(oe.internalFormat,he,Y,oe.normalized,oe.colorSpace);Je(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ke(_),Z,_.width,_.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ke(_),Z,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,Z,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Rt(A,_,O){let G=_.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,A),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let $=i.get(_.depthTexture);if($.__renderTarget=_,(!$.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),G){if($.__webglInit===void 0&&($.__webglInit=!0,_.depthTexture.addEventListener("dispose",R)),$.__webglTexture===void 0){$.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture),ot(n.TEXTURE_CUBE_MAP,_.depthTexture);let de=r.convert(_.depthTexture.format),Fe=r.convert(_.depthTexture.type),ge;_.depthTexture.format===Xi?ge=n.DEPTH_COMPONENT24:_.depthTexture.format===er&&(ge=n.DEPTH24_STENCIL8);for(let fe=0;fe<6;fe++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,ge,_.width,_.height,0,de,Fe,null)}}else ie(_.depthTexture,0);let oe=$.__webglTexture,he=Ke(_),Y=G?n.TEXTURE_CUBE_MAP_POSITIVE_X+O:n.TEXTURE_2D,Z=_.depthTexture.format===er?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(_.depthTexture.format===Xi)Je(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Z,Y,oe,0,he):n.framebufferTexture2D(n.FRAMEBUFFER,Z,Y,oe,0);else if(_.depthTexture.format===er)Je(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Z,Y,oe,0,he):n.framebufferTexture2D(n.FRAMEBUFFER,Z,Y,oe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ee(A){let _=i.get(A),O=A.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==A.depthTexture){let G=A.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),G){let $=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,G.removeEventListener("dispose",$)};G.addEventListener("dispose",$),_.__depthDisposeCallback=$}_.__boundDepthTexture=G}if(A.depthTexture&&!_.__autoAllocateDepthBuffer)if(O)for(let G=0;G<6;G++)Rt(_.__webglFramebuffer[G],A,G);else{let G=A.texture.mipmaps;G&&G.length>0?Rt(_.__webglFramebuffer[0],A,0):Rt(_.__webglFramebuffer,A,0)}else if(O){_.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[G]),_.__webglDepthbuffer[G]===void 0)_.__webglDepthbuffer[G]=n.createRenderbuffer(),Ye(_.__webglDepthbuffer[G],A,!1);else{let $=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=_.__webglDepthbuffer[G];n.bindRenderbuffer(n.RENDERBUFFER,oe),n.framebufferRenderbuffer(n.FRAMEBUFFER,$,n.RENDERBUFFER,oe)}}else{let G=A.texture.mipmaps;if(G&&G.length>0?t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),Ye(_.__webglDepthbuffer,A,!1);else{let $=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,oe),n.framebufferRenderbuffer(n.FRAMEBUFFER,$,n.RENDERBUFFER,oe)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function se(A,_,O){let G=i.get(A);_!==void 0&&be(G.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),O!==void 0&&ee(A)}function re(A){let _=A.texture,O=i.get(A),G=i.get(_);A.addEventListener("dispose",y);let $=A.textures,oe=A.isWebGLCubeRenderTarget===!0,he=$.length>1;if(he||(G.__webglTexture===void 0&&(G.__webglTexture=n.createTexture()),G.__version=_.version,a.memory.textures++),oe){O.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer[Y]=[];for(let Z=0;Z<_.mipmaps.length;Z++)O.__webglFramebuffer[Y][Z]=n.createFramebuffer()}else O.__webglFramebuffer[Y]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer=[];for(let Y=0;Y<_.mipmaps.length;Y++)O.__webglFramebuffer[Y]=n.createFramebuffer()}else O.__webglFramebuffer=n.createFramebuffer();if(he)for(let Y=0,Z=$.length;Y<Z;Y++){let de=i.get($[Y]);de.__webglTexture===void 0&&(de.__webglTexture=n.createTexture(),a.memory.textures++)}if(A.samples>0&&Je(A)===!1){O.__webglMultisampledFramebuffer=n.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let Y=0;Y<$.length;Y++){let Z=$[Y];O.__webglColorRenderbuffer[Y]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,O.__webglColorRenderbuffer[Y]);let de=r.convert(Z.format,Z.colorSpace),Fe=r.convert(Z.type),ge=v(Z.internalFormat,de,Fe,Z.normalized,Z.colorSpace,A.isXRRenderTarget===!0),fe=Ke(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,fe,ge,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Y,n.RENDERBUFFER,O.__webglColorRenderbuffer[Y])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(O.__webglDepthRenderbuffer=n.createRenderbuffer(),Ye(O.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(oe){t.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture),ot(n.TEXTURE_CUBE_MAP,_);for(let Y=0;Y<6;Y++)if(_.mipmaps&&_.mipmaps.length>0)for(let Z=0;Z<_.mipmaps.length;Z++)be(O.__webglFramebuffer[Y][Z],A,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Z);else be(O.__webglFramebuffer[Y],A,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);m(_)&&M(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(he){for(let Y=0,Z=$.length;Y<Z;Y++){let de=$[Y],Fe=i.get(de),ge=n.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ge=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ge,Fe.__webglTexture),ot(ge,de),be(O.__webglFramebuffer,A,de,n.COLOR_ATTACHMENT0+Y,ge,0),m(de)&&M(ge)}t.unbindTexture()}else{let Y=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Y=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Y,G.__webglTexture),ot(Y,_),_.mipmaps&&_.mipmaps.length>0)for(let Z=0;Z<_.mipmaps.length;Z++)be(O.__webglFramebuffer[Z],A,_,n.COLOR_ATTACHMENT0,Y,Z);else be(O.__webglFramebuffer,A,_,n.COLOR_ATTACHMENT0,Y,0);m(_)&&M(Y),t.unbindTexture()}A.depthBuffer&&ee(A)}function ae(A){let _=A.textures;for(let O=0,G=_.length;O<G;O++){let $=_[O];if(m($)){let oe=E(A),he=i.get($).__webglTexture;t.bindTexture(oe,he),M(oe),t.unbindTexture()}}}let ue=[],We=[];function He(A){if(A.samples>0){if(Je(A)===!1){let _=A.textures,O=A.width,G=A.height,$=n.COLOR_BUFFER_BIT,oe=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,he=i.get(A),Y=_.length>1;if(Y)for(let de=0;de<_.length;de++)t.bindFramebuffer(n.FRAMEBUFFER,he.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,he.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer);let Z=A.texture.mipmaps;Z&&Z.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,he.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let de=0;de<_.length;de++){if(A.resolveDepthBuffer&&(A.depthBuffer&&($|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&($|=n.STENCIL_BUFFER_BIT)),Y){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,he.__webglColorRenderbuffer[de]);let Fe=i.get(_[de]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Fe,0)}n.blitFramebuffer(0,0,O,G,0,0,O,G,$,n.NEAREST),c===!0&&(ue.length=0,We.length=0,ue.push(n.COLOR_ATTACHMENT0+de),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&(ue.push(oe),We.push(oe),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,We)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ue))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Y)for(let de=0;de<_.length;de++){t.bindFramebuffer(n.FRAMEBUFFER,he.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.RENDERBUFFER,he.__webglColorRenderbuffer[de]);let Fe=i.get(_[de]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,he.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.TEXTURE_2D,Fe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&c){let _=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function Ke(A){return Math.min(s.maxSamples,A.samples)}function Je(A){let _=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function I(A){let _=a.render.frame;h.get(A)!==_&&(h.set(A,_),A.update())}function Et(A,_){let O=A.colorSpace,G=A.format,$=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||O!==In&&O!==Rs&&(st.getTransfer(O)===wt?(G!==ii||$!==Vn)&&De("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):$e("WebGLTextures: Unsupported texture color space:",O)),_}function ct(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=X,this.resetTextureUnits=F,this.getTextureUnits=L,this.setTextureUnits=B,this.setTexture2D=ie,this.setTexture2DArray=q,this.setTexture3D=J,this.setTextureCube=te,this.rebindTextures=se,this.setupRenderTarget=re,this.updateRenderTargetMipmap=ae,this.updateMultisampleRenderTarget=He,this.setupDepthRenderbuffer=ee,this.setupFrameBufferTexture=be,this.useMultisampledRTT=Je,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function PT(n,e){function t(i,s=Rs){let r,a=st.getTransfer(s);if(i===Vn)return n.UNSIGNED_BYTE;if(i===Rh)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Ch)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Df)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Uf)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Lf)return n.BYTE;if(i===Nf)return n.SHORT;if(i===Xa)return n.UNSIGNED_SHORT;if(i===wh)return n.INT;if(i===Di)return n.UNSIGNED_INT;if(i===ni)return n.FLOAT;if(i===Ui)return n.HALF_FLOAT;if(i===Ff)return n.ALPHA;if(i===Of)return n.RGB;if(i===ii)return n.RGBA;if(i===Xi)return n.DEPTH_COMPONENT;if(i===er)return n.DEPTH_STENCIL;if(i===Ih)return n.RED;if(i===Ph)return n.RED_INTEGER;if(i===tr)return n.RG;if(i===Lh)return n.RG_INTEGER;if(i===Nh)return n.RGBA_INTEGER;if(i===Sc||i===Mc||i===bc||i===Ec)if(a===wt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Sc)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Mc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===bc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ec)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Sc)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Mc)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===bc)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ec)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Dh||i===Uh||i===Fh||i===Oh)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Dh)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Uh)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Fh)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Oh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Bh||i===kh||i===zh||i===Gh||i===Vh||i===Tc||i===Hh)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Bh||i===kh)return a===wt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===zh)return a===wt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Gh)return r.COMPRESSED_R11_EAC;if(i===Vh)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Tc)return r.COMPRESSED_RG11_EAC;if(i===Hh)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Wh||i===Xh||i===qh||i===$h||i===Yh||i===Kh||i===jh||i===Zh||i===Jh||i===Qh||i===eu||i===tu||i===nu||i===iu)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Wh)return a===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Xh)return a===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===qh)return a===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===$h)return a===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Yh)return a===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Kh)return a===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===jh)return a===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Zh)return a===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Jh)return a===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Qh)return a===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===eu)return a===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===tu)return a===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===nu)return a===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===iu)return a===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===su||i===ru||i===au)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===su)return a===wt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ru)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===au)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ou||i===cu||i===Ac||i===lu)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===ou)return r.COMPRESSED_RED_RGTC1_EXT;if(i===cu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ac)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===lu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===qa?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var LT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,NT=`
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

}`,up=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Qo(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new ti({vertexShader:LT,fragmentShader:NT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ht(new Ir(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},dp=class extends qi{constructor(e,t){super();let i=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,p=null,x=typeof XRWebGLBinding<"u",g=new up,m={},M=t.getContextAttributes(),E=null,v=null,b=[],T=[],R=new ce,y=null,w=null,P=new xn;P.viewport=new It;let U=new xn;U.viewport=new It;let V=[P,U],F=new Sh,L=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let Q=b[K];return Q===void 0&&(Q=new Ia,b[K]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(K){let Q=b[K];return Q===void 0&&(Q=new Ia,b[K]=Q),Q.getGripSpace()},this.getHand=function(K){let Q=b[K];return Q===void 0&&(Q=new Ia,b[K]=Q),Q.getHandSpace()};function X(K){let Q=T.indexOf(K.inputSource);if(Q===-1)return;let xe=b[Q];xe!==void 0&&(xe.update(K.inputSource,K.frame,l||a),xe.dispatchEvent({type:K.type,data:K.inputSource}))}function W(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",ie);for(let K=0;K<b.length;K++){let Q=T[K];Q!==null&&(T[K]=null,b[K].disconnect(Q))}L=null,B=null,g.reset();for(let K in m)delete m[K];if(e.setRenderTarget(E),f=null,d=null,u=null,s=null,v=null,_t.stop(),i.isPresenting=!1,e.setPixelRatio(y),e.setSize(R.width,R.height,!1),w!==null){let K=w.camera;K.fov=w.fov,K.zoom=w.zoom,K.updateProjectionMatrix(),w=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,i.isPresenting===!0&&De("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,i.isPresenting===!0&&De("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(K){l=K},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(E=e.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",W),s.addEventListener("inputsourceschange",ie),M.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(R),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let xe=null,qe=null,be=null;M.depth&&(be=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,xe=M.stencil?er:Xi,qe=M.stencil?qa:Di);let Ye={colorFormat:t.RGBA8,depthFormat:be,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Ye),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new On(d.textureWidth,d.textureHeight,{format:ii,type:Vn,depthTexture:new Zs(d.textureWidth,d.textureHeight,qe,void 0,void 0,void 0,void 0,void 0,void 0,xe),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let xe={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,xe),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new On(f.framebufferWidth,f.framebufferHeight,{format:ii,type:Vn,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),_t.setContext(s),_t.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function ie(K){for(let Q=0;Q<K.removed.length;Q++){let xe=K.removed[Q],qe=T.indexOf(xe);qe>=0&&(T[qe]=null,b[qe].disconnect(xe))}for(let Q=0;Q<K.added.length;Q++){let xe=K.added[Q],qe=T.indexOf(xe);if(qe===-1){for(let Ye=0;Ye<b.length;Ye++)if(Ye>=T.length){T.push(xe),qe=Ye;break}else if(T[Ye]===null){T[Ye]=xe,qe=Ye;break}if(qe===-1)break}let be=b[qe];be&&be.connect(xe)}}let q=new C,J=new C;function te(K,Q,xe){q.setFromMatrixPosition(Q.matrixWorld),J.setFromMatrixPosition(xe.matrixWorld);let qe=q.distanceTo(J),be=Q.projectionMatrix.elements,Ye=xe.projectionMatrix.elements,Rt=be[14]/(be[10]-1),ee=be[14]/(be[10]+1),se=(be[9]+1)/be[5],re=(be[9]-1)/be[5],ae=(be[8]-1)/be[0],ue=(Ye[8]+1)/Ye[0],We=Rt*ae,He=Rt*ue,Ke=qe/(-ae+ue),Je=Ke*-ae;if(Q.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Je),K.translateZ(Ke),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),be[10]===-1)K.projectionMatrix.copy(Q.projectionMatrix),K.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{let I=Rt+Ke,Et=ee+Ke,ct=We-Je,A=He+(qe-Je),_=se*ee/Et*I,O=re*ee/Et*I;K.projectionMatrix.makePerspective(ct,A,_,O,I,Et),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function Ue(K,Q){Q===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(Q.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let Q=K.near,xe=K.far;g.texture!==null&&(g.depthNear>0&&(Q=g.depthNear),g.depthFar>0&&(xe=g.depthFar)),F.near=U.near=P.near=Q,F.far=U.far=P.far=xe,(L!==F.near||B!==F.far)&&(s.updateRenderState({depthNear:F.near,depthFar:F.far}),L=F.near,B=F.far),F.layers.mask=K.layers.mask|6,P.layers.mask=F.layers.mask&-5,U.layers.mask=F.layers.mask&-3;let qe=K.parent,be=F.cameras;Ue(F,qe);for(let Ye=0;Ye<be.length;Ye++)Ue(be[Ye],qe);be.length===2?te(F,P,U):F.projectionMatrix.copy(P.projectionMatrix),w===null&&K.isPerspectiveCamera&&(w={camera:K,fov:K.fov,zoom:K.zoom}),Ae(K,F,qe)};function Ae(K,Q,xe){xe===null?K.matrix.copy(Q.matrixWorld):(K.matrix.copy(xe.matrixWorld),K.matrix.invert(),K.matrix.multiply(Q.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(Q.projectionMatrix),K.projectionMatrixInverse.copy(Q.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Mr*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(K){c=K,d!==null&&(d.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(F)},this.getCameraTexture=function(K){return m[K]};let Mt=null;function ot(K,Q){if(h=Q.getViewerPose(l||a),p=Q,h!==null){let xe=h.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let qe=!1;xe.length!==F.cameras.length&&(F.cameras.length=0,qe=!0);for(let ee=0;ee<xe.length;ee++){let se=xe[ee],re=null;if(f!==null)re=f.getViewport(se);else{let ue=u.getViewSubImage(d,se);re=ue.viewport,ee===0&&(e.setRenderTargetTextures(v,ue.colorTexture,ue.depthStencilTexture),e.setRenderTarget(v))}let ae=V[ee];ae===void 0&&(ae=new xn,ae.layers.enable(ee),ae.viewport=new It,V[ee]=ae),ae.matrix.fromArray(se.transform.matrix),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.projectionMatrix.fromArray(se.projectionMatrix),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert(),ae.viewport.set(re.x,re.y,re.width,re.height),ee===0&&(F.matrix.copy(ae.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),qe===!0&&F.cameras.push(ae)}let be=s.enabledFeatures;if(be&&be.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){u=i.getBinding();let ee=u.getDepthInformation(xe[0]);ee&&ee.isValid&&ee.texture&&g.init(ee,s.renderState)}if(be&&be.includes("camera-access")&&x){e.state.unbindTexture(),u=i.getBinding();for(let ee=0;ee<xe.length;ee++){let se=xe[ee].camera;if(se){let re=m[se];re||(re=new Qo,m[se]=re);let ae=u.getCameraImage(se);re.sourceTexture=ae}}}}for(let xe=0;xe<b.length;xe++){let qe=T[xe],be=b[xe];qe!==null&&be!==void 0&&be.update(qe,Q,l||a)}Mt&&Mt(K,Q),Q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Q}),p=null}let _t=new X_;_t.setAnimationLoop(ot),this.setAnimationLoop=function(K){Mt=K},this.dispose=function(){}}},DT=new je,Z_=new Ze;Z_.set(-1,0,0,0,1,0,0,0,1);function UT(n,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function i(g,m){m.color.getRGB(g.fogColor.value,Hf(n)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,M,E,v){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(g,m):m.isMeshLambertMaterial?(r(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(g,m),u(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(g,m),d(g,m),m.isMeshPhysicalMaterial&&f(g,m,v)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),x(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?c(g,m,M,E):m.isSpriteMaterial?l(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===yn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===yn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let M=e.get(m),E=M.envMap,v=M.envMapRotation;E&&(g.envMap.value=E,g.envMapRotation.value.setFromMatrix4(DT.makeRotationFromEuler(v)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Z_),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function c(g,m,M,E){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*M,g.scale.value=E*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function l(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,M){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===yn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function x(g,m){let M=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function FT(n,e,t,i){let s={},r={},a=[],o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,b){let T=b.program;i.uniformBlockBinding(v,T)}function l(v,b){let T=s[v.id];T===void 0&&(g(v),T=h(v),s[v.id]=T,v.addEventListener("dispose",M));let R=b.program;i.updateUBOMapping(v,R);let y=e.render.frame;r[v.id]!==y&&(d(v),r[v.id]=y)}function h(v){let b=u();v.__bindingPointIndex=b;let T=n.createBuffer(),R=v.__size,y=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,T),n.bufferData(n.UNIFORM_BUFFER,R,y),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,T),T}function u(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return $e("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){let b=s[v.id],T=v.uniforms,R=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let y=0,w=T.length;y<w;y++){let P=T[y];if(Array.isArray(P))for(let U=0,V=P.length;U<V;U++)f(P[U],y,U,R);else f(P,y,0,R)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(v,b,T,R){if(x(v,b,T,R)===!0){let y=v.__offset,w=v.value;if(Array.isArray(w)){let P=0;for(let U=0;U<w.length;U++){let V=w[U],F=m(V);p(V,v.__data,P),typeof V!="number"&&typeof V!="boolean"&&!V.isMatrix3&&!ArrayBuffer.isView(V)&&(P+=F.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(w,v.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,y,v.__data)}}function p(v,b,T){typeof v=="number"||typeof v=="boolean"?b[0]=v:v.isMatrix3?(b[0]=v.elements[0],b[1]=v.elements[1],b[2]=v.elements[2],b[3]=0,b[4]=v.elements[3],b[5]=v.elements[4],b[6]=v.elements[5],b[7]=0,b[8]=v.elements[6],b[9]=v.elements[7],b[10]=v.elements[8],b[11]=0):ArrayBuffer.isView(v)?b.set(new v.constructor(v.buffer,v.byteOffset,b.length)):v.toArray(b,T)}function x(v,b,T,R){let y=v.value,w=b+"_"+T;if(R[w]===void 0)return typeof y=="number"||typeof y=="boolean"?R[w]=y:ArrayBuffer.isView(y)?R[w]=y.slice():R[w]=y.clone(),!0;{let P=R[w];if(typeof y=="number"||typeof y=="boolean"){if(P!==y)return R[w]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(P.equals(y)===!1)return P.copy(y),!0}}return!1}function g(v){let b=v.uniforms,T=0,R=16;for(let w=0,P=b.length;w<P;w++){let U=Array.isArray(b[w])?b[w]:[b[w]];for(let V=0,F=U.length;V<F;V++){let L=U[V],B=Array.isArray(L.value)?L.value:[L.value];for(let X=0,W=B.length;X<W;X++){let ie=B[X],q=m(ie),J=T%R,te=J%q.boundary,Ue=J+te;T+=te,Ue!==0&&R-Ue<q.storage&&(T+=R-Ue),L.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=T,T+=q.storage}}}let y=T%R;return y>0&&(T+=R-y),v.__size=T,v.__cache={},this}function m(v){let b={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(b.boundary=4,b.storage=4):v.isVector2?(b.boundary=8,b.storage=8):v.isVector3||v.isColor?(b.boundary=16,b.storage=12):v.isVector4?(b.boundary=16,b.storage=16):v.isMatrix3?(b.boundary=48,b.storage=48):v.isMatrix4?(b.boundary=64,b.storage=64):v.isTexture?De("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(b.boundary=16,b.storage=v.byteLength):De("WebGLRenderer: Unsupported uniform value type.",v),b}function M(v){let b=v.target;b.removeEventListener("dispose",M);let T=a.indexOf(b.__bindingPointIndex);a.splice(T,1),n.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function E(){for(let v in s)n.deleteBuffer(s[v]);a=[],s={},r={}}return{bind:c,update:l,dispose:E}}var OT=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Qi=null;function BT(){return Qi===null&&(Qi=new Da(OT,16,16,tr,Ui),Qi.name="DFG_LUT",Qi.minFilter=Jt,Qi.magFilter=Jt,Qi.wrapS=fi,Qi.wrapT=fi,Qi.generateMipmaps=!1,Qi.needsUpdate=!0),Qi}var mu=class{constructor(e={}){let{canvas:t=d_(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=Vn}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;let x=f,g=new Set([Nh,Lh,Ph]),m=new Set([Vn,Di,Xa,qa,Rh,Ch]),M=new Uint32Array(4),E=new Int32Array(4),v=new C,b=null,T=null,R=[],y=[],w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Li,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,U=!1,V=null,F=null,L=null,B=null;this._outputColorSpace=Xt;let X=0,W=0,ie=null,q=-1,J=null,te=new It,Ue=new It,Ae=null,Mt=new Ge(0),ot=0,_t=t.width,K=t.height,Q=1,xe=null,qe=null,be=new It(0,0,_t,K),Ye=new It(0,0,_t,K),Rt=!1,ee=new Ua,se=!1,re=!1,ae=new je,ue=new C,We=new It,He={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ke=!1;function Je(){return ie===null?Q:1}let I=i;function Et(S,N){return t.getContext(S,N)}let ct,A,_,O,G,$,oe,he,Y,Z,de,Fe,ge,fe,Oe,Xe,tt,D,pe,j,me,Me,ne;try{let S={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",Ut,!1),t.addEventListener("webglcontextrestored",Tt,!1),t.addEventListener("webglcontextcreationerror",Ti,!1),I===null){let N="webgl2";if(I=Et(N,S),I===null)throw Et(N)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ze()}catch(S){throw t.removeEventListener("webglcontextlost",Ut,!1),t.removeEventListener("webglcontextrestored",Tt,!1),t.removeEventListener("webglcontextcreationerror",Ti,!1),$e("WebGLRenderer: "+S.message),S}function ze(){ct=new X3(I),ct.init(),me=new PT(I,ct),A=new U3(I,ct,e,me),_=new CT(I,ct),A.reversedDepthBuffer&&d&&_.buffers.depth.setReversed(!0),F=I.createFramebuffer(),L=I.createFramebuffer(),B=I.createFramebuffer(),O=new Y3(I),G=new mT,$=new IT(I,ct,_,G,A,me,O),oe=new W3(P),he=new j2(I),Me=new N3(I,he),Y=new q3(I,he,O,Me),Z=new j3(I,Y,he,Me,O),D=new K3(I,A,$),Oe=new F3(G),de=new pT(P,oe,ct,A,Me,Oe),Fe=new UT(P,G),ge=new _T,fe=new bT(ct),tt=new L3(P,oe,_,Z,p,c),Xe=new RT(P,Z,A),ne=new FT(I,O,A,_),pe=new D3(I,ct,O),j=new $3(I,ct,O),O.programs=de.programs,P.capabilities=A,P.extensions=ct,P.properties=G,P.renderLists=ge,P.shadowMap=Xe,P.state=_,P.info=O}x!==Vn&&(w=new J3(x,t.width,t.height,o,s,r));let Le=new dp(P,I);this.xr=Le,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let S=ct.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=ct.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(S){S!==void 0&&(Q=S,this.setSize(_t,K,!1))},this.getSize=function(S){return S.set(_t,K)},this.setSize=function(S,N,H=!0){if(Le.isPresenting){De("WebGLRenderer: Can't change size while VR device is presenting.");return}_t=S,K=N,t.width=Math.floor(S*Q),t.height=Math.floor(N*Q),H===!0&&(t.style.width=S+"px",t.style.height=N+"px"),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,S,N)},this.getDrawingBufferSize=function(S){return S.set(_t*Q,K*Q).floor()},this.setDrawingBufferSize=function(S,N,H){_t=S,K=N,Q=H,t.width=Math.floor(S*H),t.height=Math.floor(N*H),this.setViewport(0,0,S,N)},this.setEffects=function(S){if(x===Vn){$e("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let N=0;N<S.length;N++)if(S[N].isOutputPass===!0){De("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(te)},this.getViewport=function(S){return S.copy(be)},this.setViewport=function(S,N,H,k){S.isVector4?be.set(S.x,S.y,S.z,S.w):be.set(S,N,H,k),_.viewport(te.copy(be).multiplyScalar(Q).round())},this.getScissor=function(S){return S.copy(Ye)},this.setScissor=function(S,N,H,k){S.isVector4?Ye.set(S.x,S.y,S.z,S.w):Ye.set(S,N,H,k),_.scissor(Ue.copy(Ye).multiplyScalar(Q).round())},this.getScissorTest=function(){return Rt},this.setScissorTest=function(S){_.setScissorTest(Rt=S)},this.setOpaqueSort=function(S){xe=S},this.setTransparentSort=function(S){qe=S},this.getClearColor=function(S){return S.copy(tt.getClearColor())},this.setClearColor=function(){tt.setClearColor(...arguments)},this.getClearAlpha=function(){return tt.getClearAlpha()},this.setClearAlpha=function(){tt.setClearAlpha(...arguments)},this.clear=function(S=!0,N=!0,H=!0){let k=0;if(S){let z=!1;if(ie!==null){let Se=ie.texture.format;z=g.has(Se)}if(z){let Se=ie.texture.type,Te=m.has(Se),ve=tt.getClearColor(),Re=tt.getClearAlpha(),Ne=ve.r,nt=ve.g,lt=ve.b;Te?(M[0]=Ne,M[1]=nt,M[2]=lt,M[3]=Re,I.clearBufferuiv(I.COLOR,0,M)):(E[0]=Ne,E[1]=nt,E[2]=lt,E[3]=Re,I.clearBufferiv(I.COLOR,0,E))}else k|=I.COLOR_BUFFER_BIT}N&&(k|=I.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),H&&(k|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k!==0&&I.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),V=S},this.dispose=function(){t.removeEventListener("webglcontextlost",Ut,!1),t.removeEventListener("webglcontextrestored",Tt,!1),t.removeEventListener("webglcontextcreationerror",Ti,!1),tt.dispose(),ge.dispose(),fe.dispose(),G.dispose(),oe.dispose(),Z.dispose(),Me.dispose(),ne.dispose(),de.dispose(),Le.dispose(),Le.removeEventListener("sessionstart",Dg),Le.removeEventListener("sessionend",Ug),pr.stop()};function Ut(S){S.preventDefault(),Go("WebGLRenderer: Context Lost."),U=!0}function Tt(){Go("WebGLRenderer: Context Restored."),U=!1;let S=O.autoReset,N=Xe.enabled,H=Xe.autoUpdate,k=Xe.needsUpdate,z=Xe.type;ze(),O.autoReset=S,Xe.enabled=N,Xe.autoUpdate=H,Xe.needsUpdate=k,Xe.type=z}function Ti(S){$e("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function zi(S){let N=S.target;N.removeEventListener("dispose",zi),dS(N)}function dS(S){fS(S),G.remove(S)}function fS(S){let N=G.get(S).programs;N!==void 0&&(N.forEach(function(H){de.releaseProgram(H)}),S.isShaderMaterial&&de.releaseShaderCache(S))}this.renderBufferDirect=function(S,N,H,k,z,Se){N===null&&(N=He);let Te=z.isMesh&&z.matrixWorld.determinantAffine()<0,ve=gS(S,N,H,k,z);_.setMaterial(k,Te);let Re=H.index,Ne=1;if(k.wireframe===!0){if(Re=Y.getWireframeAttribute(H),Re===void 0)return;Ne=2}let nt=H.drawRange,lt=H.attributes.position,Ce=nt.start*Ne,At=(nt.start+nt.count)*Ne;Se!==null&&(Ce=Math.max(Ce,Se.start*Ne),At=Math.min(At,(Se.start+Se.count)*Ne)),Re!==null?(Ce=Math.max(Ce,0),At=Math.min(At,Re.count)):lt!=null&&(Ce=Math.max(Ce,0),At=Math.min(At,lt.count));let sn=At-Ce;if(sn<0||sn===1/0)return;Me.setup(z,k,ve,H,Re);let zt,Nt=pe;if(Re!==null&&(zt=he.get(Re),Nt=j,Nt.setIndex(zt)),z.isMesh)k.wireframe===!0?(_.setLineWidth(k.wireframeLinewidth*Je()),Nt.setMode(I.LINES)):Nt.setMode(I.TRIANGLES);else if(z.isLine){let En=k.linewidth;En===void 0&&(En=1),_.setLineWidth(En*Je()),z.isLineSegments?Nt.setMode(I.LINES):z.isLineLoop?Nt.setMode(I.LINE_LOOP):Nt.setMode(I.LINE_STRIP)}else z.isPoints?Nt.setMode(I.POINTS):z.isSprite&&Nt.setMode(I.TRIANGLES);if(z.isBatchedMesh)if(ct.get("WEBGL_multi_draw"))Nt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let En=z._multiDrawStarts,Ee=z._multiDrawCounts,Rn=z._multiDrawCount,xt=Re?he.get(Re).bytesPerElement:1,ui=G.get(k).currentProgram.getUniforms();for(let Gi=0;Gi<Rn;Gi++)ui.setValue(I,"_gl_DrawID",Gi),Nt.render(En[Gi]/xt,Ee[Gi])}else if(z.isInstancedMesh)Nt.renderInstances(Ce,sn,z.count);else if(H.isInstancedBufferGeometry){let En=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Ee=Math.min(H.instanceCount,En);Nt.renderInstances(Ce,sn,Ee)}else Nt.render(Ce,sn)};function Ng(S,N,H,k){V!==null&&S.isNodeMaterial&&V.setObject(k,S),se===!0&&Oe.setState(S,H,!1),S.transparent===!0&&S.side===Nn&&S.forceSinglePass===!1?(S.side=yn,S.needsUpdate=!0,pl(S,N,k),S.side=Zi,S.needsUpdate=!0,pl(S,N,k),S.side=Nn):pl(S,N,k)}this.compile=function(S,N,H=null){H===null&&(H=S),V!==null&&V.renderStart(S,N,H),T=fe.get(H),T.init(N),y.push(T),H.traverseVisible(function(z){z.isLight&&z.layers.test(N.layers)&&(T.pushLight(z),z.castShadow&&T.pushShadow(z))}),S!==H&&S.traverseVisible(function(z){z.isLight&&z.layers.test(N.layers)&&(T.pushLight(z),z.castShadow&&T.pushShadow(z))}),T.setupLights(),V!==null&&V.updateLights(T.state.lightsArray),re=this.localClippingEnabled,se=Oe.init(this.clippingPlanes,re),se===!0&&Oe.setGlobalState(this.clippingPlanes,N),V!==null&&Xe.render(T.state.shadowsArray,H,N);let k=new Set;return S.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let Se=z.material;if(Se)if(Array.isArray(Se))for(let Te=0;Te<Se.length;Te++){let ve=Se[Te];Ng(ve,H,N,z),k.add(ve)}else Ng(Se,H,N,z),k.add(Se)}),T=y.pop(),V!==null&&V.renderEnd(),k},this.compileAsync=function(S,N,H=null){let k=this.compile(S,N,H);return new Promise(z=>{function Se(){if(k.forEach(function(Te){let Re=G.get(Te).currentProgram;(Re===void 0||Re.isReady())&&k.delete(Te)}),k.size===0){z(S);return}setTimeout(Se,10)}ct.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let wd=null;function pS(S){wd&&wd(S)}function Dg(){pr.stop()}function Ug(){pr.start()}let pr=new X_;pr.setAnimationLoop(pS),typeof self<"u"&&pr.setContext(self),this.setAnimationLoop=function(S){wd=S,Le.setAnimationLoop(S),S===null?pr.stop():pr.start()},Le.addEventListener("sessionstart",Dg),Le.addEventListener("sessionend",Ug),this.render=function(S,N){if(N!==void 0&&N.isCamera!==!0){$e("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;V!==null&&V.renderStart(S,N);let H=Le.enabled===!0&&Le.isPresenting===!0,k=w!==null&&(ie===null||H)&&w.begin(P,ie);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Le.enabled===!0&&Le.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Le.cameraAutoUpdate===!0&&Le.updateCamera(N),N=Le.getCamera()),S.isScene===!0&&S.onBeforeRender(P,S,N,ie),T=fe.get(S,y.length),T.init(N),T.state.textureUnits=$.getTextureUnits(),y.push(T),ae.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),ee.setFromProjectionMatrix(ae,Pi,N.reversedDepth),re=this.localClippingEnabled,se=Oe.init(this.clippingPlanes,re),b=ge.get(S,R.length),b.init(),R.push(b),Le.enabled===!0&&Le.isPresenting===!0){let Te=P.xr.getDepthSensingMesh();Te!==null&&Rd(Te,N,-1/0,P.sortObjects)}Rd(S,N,0,P.sortObjects),b.finish(),V!==null&&V.updateLights(T.state.lightsArray),P.sortObjects===!0&&b.sort(xe,qe),Ke=Le.enabled===!1||Le.isPresenting===!1||Le.hasDepthSensing()===!1,Ke&&tt.addToRenderList(b,S),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),se===!0&&Oe.beginShadows();let z=T.state.shadowsArray;if(Xe.render(z,S,N),se===!0&&Oe.endShadows(),(k&&w.hasRenderPass())===!1){let Te=b.opaque,ve=b.transmissive;if(T.setupLights(),N.isArrayCamera){let Re=N.cameras;if(ve.length>0)for(let Ne=0,nt=Re.length;Ne<nt;Ne++){let lt=Re[Ne];Og(Te,ve,S,lt)}Ke&&tt.render(S);for(let Ne=0,nt=Re.length;Ne<nt;Ne++){let lt=Re[Ne];Fg(b,S,lt,lt.viewport)}}else ve.length>0&&Og(Te,ve,S,N),Ke&&tt.render(S),Fg(b,S,N)}ie!==null&&W===0&&($.updateMultisampleRenderTarget(ie),$.updateRenderTargetMipmap(ie)),k&&w.end(P),S.isScene===!0&&S.onAfterRender(P,S,N),Me.resetDefaultState(),q=-1,J=null,y.pop(),y.length>0?(T=y[y.length-1],$.setTextureUnits(T.state.textureUnits),se===!0&&Oe.setGlobalState(P.clippingPlanes,T.state.camera)):T=null,R.pop(),R.length>0?b=R[R.length-1]:b=null,V!==null&&V.renderEnd()};function Rd(S,N,H,k){if(S.visible===!1)return;if(S.layers.test(N.layers)){if(S.isGroup)H=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(N);else if(S.isLightProbeGrid)T.pushLightProbeGrid(S);else if(S.isLight)T.pushLight(S),S.castShadow&&T.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||S.intersectsFrustum(ee)){k&&We.setFromMatrixPosition(S.matrixWorld).applyMatrix4(ae);let Te=Z.update(S),ve=S.material;ve.visible&&b.push(S,Te,ve,H,We.z,null,N)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||S.intersectsFrustum(ee))){let Te=Z.update(S),ve=S.material;if(k&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),We.copy(S.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),We.copy(Te.boundingSphere.center)),We.applyMatrix4(S.matrixWorld).applyMatrix4(ae)),Array.isArray(ve)){let Re=Te.groups;for(let Ne=0,nt=Re.length;Ne<nt;Ne++){let lt=Re[Ne],Ce=ve[lt.materialIndex];Ce&&Ce.visible&&b.push(S,Te,Ce,H,We.z,lt,N)}}else ve.visible&&b.push(S,Te,ve,H,We.z,null,N)}}let Se=S.children;for(let Te=0,ve=Se.length;Te<ve;Te++)Rd(Se[Te],N,H,k)}function Fg(S,N,H,k){let{opaque:z,transmissive:Se,transparent:Te}=S;T.setupLightsView(H),se===!0&&Oe.setGlobalState(P.clippingPlanes,H),k&&_.viewport(te.copy(k)),z.length>0&&fl(z,N,H),Se.length>0&&fl(Se,N,H),Te.length>0&&fl(Te,N,H),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function Og(S,N,H,k){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[k.id]===void 0){let Ce=ct.has("EXT_color_buffer_half_float")||ct.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[k.id]=new On(1,1,{generateMipmaps:!0,type:Ce?Ui:Vn,minFilter:Ni,samples:Math.max(4,A.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:st.workingColorSpace})}let Se=T.state.transmissionRenderTarget[k.id],Te=k.viewport||te;Se.setSize(Te.z*P.transmissionResolutionScale,Te.w*P.transmissionResolutionScale);let ve=P.getRenderTarget(),Re=P.getActiveCubeFace(),Ne=P.getActiveMipmapLevel();P.setRenderTarget(Se),P.getClearColor(Mt),ot=P.getClearAlpha(),ot<1&&P.setClearColor(16777215,.5),P.clear(),Ke&&tt.render(H);let nt=P.toneMapping;P.toneMapping=Li;let lt=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),T.setupLightsView(k),se===!0&&Oe.setGlobalState(P.clippingPlanes,k),fl(S,H,k),$.updateMultisampleRenderTarget(Se),$.updateRenderTargetMipmap(Se),ct.has("WEBGL_multisampled_render_to_texture")===!1){let Ce=!1;for(let At=0,sn=N.length;At<sn;At++){let zt=N[At],{object:Nt,geometry:En,material:Ee,group:Rn}=zt;if(Ee.side===Nn&&Nt.layers.test(k.layers)){let xt=Ee.side;Ee.side=yn,Ee.needsUpdate=!0,Bg(Nt,H,k,En,Ee,Rn),Ee.side=xt,Ee.needsUpdate=!0,Ce=!0}}Ce===!0&&($.updateMultisampleRenderTarget(Se),$.updateRenderTargetMipmap(Se))}P.setRenderTarget(ve,Re,Ne),P.setClearColor(Mt,ot),lt!==void 0&&(k.viewport=lt),P.toneMapping=nt}function fl(S,N,H){let k=N.isScene===!0?N.overrideMaterial:null;for(let z=0,Se=S.length;z<Se;z++){let Te=S[z],{object:ve,geometry:Re,group:Ne}=Te,nt=Te.material;nt.allowOverride===!0&&k!==null&&(nt=k),ve.layers.test(H.layers)&&Bg(ve,N,H,Re,nt,Ne)}}function Bg(S,N,H,k,z,Se){V!==null&&z.isNodeMaterial&&V.setObject(S,z),S.onBeforeRender(P,N,H,k,z,Se),S.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),z.onBeforeRender(P,N,H,k,S,Se),z.transparent===!0&&z.side===Nn&&z.forceSinglePass===!1?(z.side=yn,z.needsUpdate=!0,P.renderBufferDirect(H,N,k,z,S,Se),z.side=Zi,z.needsUpdate=!0,P.renderBufferDirect(H,N,k,z,S,Se),z.side=Nn):P.renderBufferDirect(H,N,k,z,S,Se),S.onAfterRender(P,N,H,k,z,Se)}function pl(S,N,H){N.isScene!==!0&&(N=He);let k=G.get(S),z=T.state.lights,Se=T.state.shadowsArray,Te=z.state.version,ve=de.getParameters(S,z.state,Se,N,H,T.state.lightProbeGridArray),Re=de.getProgramCacheKey(ve),Ne=k.programs;k.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?N.environment:null,k.fog=N.fog;let nt=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;k.envMap=oe.get(S.envMap||k.environment,nt),k.envMapRotation=k.environment!==null&&S.envMap===null?N.environmentRotation:S.envMapRotation,Ne===void 0&&(S.addEventListener("dispose",zi),Ne=new Map,k.programs=Ne);let lt=Ne.get(Re);if(lt!==void 0){if(k.currentProgram===lt&&k.lightsStateVersion===Te)return zg(S,ve),lt}else ve.uniforms=de.getUniforms(S),V!==null&&S.isNodeMaterial&&V.build(S,H,ve),S.onBeforeCompile(ve,P),lt=de.acquireProgram(ve,Re),Ne.set(Re,lt),k.uniforms=ve.uniforms;let Ce=k.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ce.clippingPlanes=Oe.uniform),zg(S,ve),k.needsLights=xS(S),k.lightsStateVersion=Te,k.needsLights&&(Ce.ambientLightColor.value=z.state.ambient,Ce.lightProbe.value=z.state.probe,Ce.sunLights.value=z.state.sun,Ce.sunLightShadows.value=z.state.sunShadow,Ce.directionalLights.value=z.state.directional,Ce.directionalLightShadows.value=z.state.directionalShadow,Ce.spotLights.value=z.state.spot,Ce.spotLightShadows.value=z.state.spotShadow,Ce.rectAreaLights.value=z.state.rectArea,Ce.ltc_1.value=z.state.rectAreaLTC1,Ce.ltc_2.value=z.state.rectAreaLTC2,Ce.pointLights.value=z.state.point,Ce.pointLightShadows.value=z.state.pointShadow,Ce.hemisphereLights.value=z.state.hemi,Ce.sunShadowMatrix.value=z.state.sunShadowMatrix,Ce.sunShadowCascade.value=z.state.sunShadowCascade,Ce.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Ce.spotLightMatrix.value=z.state.spotLightMatrix,Ce.spotLightMap.value=z.state.spotLightMap,Ce.pointShadowMatrix.value=z.state.pointShadowMatrix),k.lightProbeGrid=T.state.lightProbeGridArray.length>0,k.currentProgram=lt,k.uniformsList=null,lt}function kg(S){if(S.uniformsList===null){let N=S.currentProgram.getUniforms();S.uniformsList=ja.seqWithValue(N.seq,S.uniforms)}return S.uniformsList}function zg(S,N){let H=G.get(S);H.outputColorSpace=N.outputColorSpace,H.batching=N.batching,H.batchingColor=N.batchingColor,H.instancing=N.instancing,H.instancingColor=N.instancingColor,H.instancingMorph=N.instancingMorph,H.skinning=N.skinning,H.morphTargets=N.morphTargets,H.morphNormals=N.morphNormals,H.morphColors=N.morphColors,H.morphTargetsCount=N.morphTargetsCount,H.numClippingPlanes=N.numClippingPlanes,H.numIntersection=N.numClipIntersection,H.vertexAlphas=N.vertexAlphas,H.vertexTangents=N.vertexTangents,H.toneMapping=N.toneMapping}function mS(S,N){if(S.length===0)return null;if(S.length===1)return S[0].texture!==null?S[0]:null;v.setFromMatrixPosition(N.matrixWorld);for(let H=0,k=S.length;H<k;H++){let z=S[H];if(z.texture!==null&&z.boundingBox.containsPoint(v))return z}return null}function gS(S,N,H,k,z){N.isScene!==!0&&(N=He),$.resetTextureUnits();let Se=N.fog,Te=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?N.environment:null,ve=ie===null?P.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:st.workingColorSpace,Re=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,Ne=oe.get(k.envMap||Te,Re),nt=k.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,lt=!!H.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Ce=!!H.morphAttributes.position,At=!!H.morphAttributes.normal,sn=!!H.morphAttributes.color,zt=Li;k.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(zt=P.toneMapping);let Nt=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,En=Nt!==void 0?Nt.length:0,Ee=G.get(k),Rn=T.state.lights;if(se===!0&&(re===!0||S!==J)){let Ft=S===J&&k.id===q;Oe.setState(k,S,Ft)}let xt=!1;k.version===Ee.__version?(Ee.needsLights&&Ee.lightsStateVersion!==Rn.state.version||Ee.outputColorSpace!==ve||z.isBatchedMesh&&Ee.batching===!1||!z.isBatchedMesh&&Ee.batching===!0||z.isBatchedMesh&&Ee.batchingColor===!0&&z._colorsTexture===null||z.isBatchedMesh&&Ee.batchingColor===!1&&z._colorsTexture!==null||z.isInstancedMesh&&Ee.instancing===!1||!z.isInstancedMesh&&Ee.instancing===!0||z.isSkinnedMesh&&Ee.skinning===!1||!z.isSkinnedMesh&&Ee.skinning===!0||z.isInstancedMesh&&Ee.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Ee.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Ee.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Ee.instancingMorph===!1&&z.morphTexture!==null||Ee.envMap!==Ne||k.fog===!0&&Ee.fog!==Se||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==Oe.numPlanes||Ee.numIntersection!==Oe.numIntersection)||Ee.vertexAlphas!==nt||Ee.vertexTangents!==lt||Ee.morphTargets!==Ce||Ee.morphNormals!==At||Ee.morphColors!==sn||Ee.toneMapping!==zt||Ee.morphTargetsCount!==En||!!Ee.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(xt=!0):(xt=!0,Ee.__version=k.version);let ui=Ee.currentProgram;xt===!0&&(ui=pl(k,N,z),V&&k.isNodeMaterial&&V.onUpdateProgram(k,ui,Ee));let Gi=!1,zs=!1,oa=!1,Lt=ui.getUniforms(),jt=Ee.uniforms;if(_.useProgram(ui.program)&&(Gi=!0,zs=!0,oa=!0),k.id!==q&&(q=k.id,zs=!0),Ee.needsLights){let Ft=mS(T.state.lightProbeGridArray,z);Ee.lightProbeGrid!==Ft&&(Ee.lightProbeGrid=Ft,zs=!0)}if(Gi||J!==S){_.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),Lt.setValue(I,"projectionMatrix",S.projectionMatrix),Lt.setValue(I,"viewMatrix",S.matrixWorldInverse);let Vs=Lt.map.cameraPosition;Vs!==void 0&&Vs.setValue(I,ue.setFromMatrixPosition(S.matrixWorld)),A.logarithmicDepthBuffer&&Lt.setValue(I,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&Lt.setValue(I,"isOrthographic",S.isOrthographicCamera===!0),J!==S&&(J=S,zs=!0,oa=!0)}if(Ee.needsLights&&(Rn.state.sunShadowMap.length>0&&Lt.setValue(I,"sunShadowMap",Rn.state.sunShadowMap,$),Rn.state.directionalShadowMap.length>0&&Lt.setValue(I,"directionalShadowMap",Rn.state.directionalShadowMap,$),Rn.state.spotShadowMap.length>0&&Lt.setValue(I,"spotShadowMap",Rn.state.spotShadowMap,$),Rn.state.pointShadowMap.length>0&&Lt.setValue(I,"pointShadowMap",Rn.state.pointShadowMap,$)),z.isSkinnedMesh){Lt.setOptional(I,z,"bindMatrix"),Lt.setOptional(I,z,"bindMatrixInverse");let Ft=z.skeleton;Ft&&(Ft.boneTexture===null&&Ft.computeBoneTexture(),Lt.setValue(I,"boneTexture",Ft.boneTexture,$))}z.isBatchedMesh&&(Lt.setOptional(I,z,"batchingTexture"),Lt.setValue(I,"batchingTexture",z._matricesTexture,$),Lt.setOptional(I,z,"batchingIdTexture"),Lt.setValue(I,"batchingIdTexture",z._indirectTexture,$),Lt.setOptional(I,z,"batchingColorTexture"),z._colorsTexture!==null&&Lt.setValue(I,"batchingColorTexture",z._colorsTexture,$));let Gs=H.morphAttributes;if((Gs.position!==void 0||Gs.normal!==void 0||Gs.color!==void 0)&&D.update(z,H,ui),(zs||Ee.receiveShadow!==z.receiveShadow)&&(Ee.receiveShadow=z.receiveShadow,Lt.setValue(I,"receiveShadow",z.receiveShadow)),(k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial)&&k.envMap===null&&N.environment!==null&&(jt.envMapIntensity.value=N.environmentIntensity),jt.dfgLUT!==void 0&&(jt.dfgLUT.value=BT()),zs){if(Lt.setValue(I,"toneMappingExposure",P.toneMappingExposure),Ee.needsLights&&_S(jt,oa),Se&&k.fog===!0&&Fe.refreshFogUniforms(jt,Se),Fe.refreshMaterialUniforms(jt,k,Q,K,T.state.transmissionRenderTarget[S.id]),Ee.needsLights&&Ee.lightProbeGrid){let Ft=Ee.lightProbeGrid;jt.probesSH.value=Ft.texture,jt.probesMin.value.copy(Ft.boundingBox.min),jt.probesMax.value.copy(Ft.boundingBox.max),jt.probesResolution.value.copy(Ft.resolution)}ja.upload(I,kg(Ee),jt,$)}if(k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(ja.upload(I,kg(Ee),jt,$),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&Lt.setValue(I,"center",z.center),Lt.setValue(I,"modelViewMatrix",z.modelViewMatrix),Lt.setValue(I,"normalMatrix",z.normalMatrix),Lt.setValue(I,"modelMatrix",z.matrixWorld),k.uniformsGroups!==void 0){let Ft=k.uniformsGroups;for(let Vs=0,ca=Ft.length;Vs<ca;Vs++){let Vg=Ft[Vs];ne.update(Vg,ui),ne.bind(Vg,ui)}}return ui}function _S(S,N){S.ambientLightColor.needsUpdate=N,S.lightProbe.needsUpdate=N,S.sunLights.needsUpdate=N,S.sunLightShadows.needsUpdate=N,S.directionalLights.needsUpdate=N,S.directionalLightShadows.needsUpdate=N,S.pointLights.needsUpdate=N,S.pointLightShadows.needsUpdate=N,S.spotLights.needsUpdate=N,S.spotLightShadows.needsUpdate=N,S.rectAreaLights.needsUpdate=N,S.hemisphereLights.needsUpdate=N}function xS(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return ie},this.setRenderTargetTextures=function(S,N,H){let k=G.get(S);k.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),G.get(S.texture).__webglTexture=N,G.get(S.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:H,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,N){let H=G.get(S);H.__webglFramebuffer=N,H.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(S,N=0,H=0){ie=S,X=N,W=H;let k=null,z=!1,Se=!1;if(S){let ve=G.get(S);if(ve.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(I.FRAMEBUFFER,ve.__webglFramebuffer),te.copy(S.viewport),Ue.copy(S.scissor),Ae=S.scissorTest,_.viewport(te),_.scissor(Ue),_.setScissorTest(Ae),q=-1;return}else if(ve.__webglFramebuffer===void 0)$.setupRenderTarget(S);else if(ve.__hasExternalTextures)$.rebindTextures(S,G.get(S.texture).__webglTexture,G.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let nt=S.depthTexture;if(ve.__boundDepthTexture!==nt){if(nt!==null&&G.has(nt)&&(S.width!==nt.image.width||S.height!==nt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");$.setupDepthRenderbuffer(S)}}let Re=S.texture;(Re.isData3DTexture||Re.isDataArrayTexture||Re.isCompressedArrayTexture)&&(Se=!0);let Ne=G.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ne[N])?k=Ne[N][H]:k=Ne[N],z=!0):S.samples>0&&$.useMultisampledRTT(S)===!1?k=G.get(S).__webglMultisampledFramebuffer:Array.isArray(Ne)?k=Ne[H]:k=Ne,te.copy(S.viewport),Ue.copy(S.scissor),Ae=S.scissorTest}else te.copy(be).multiplyScalar(Q).floor(),Ue.copy(Ye).multiplyScalar(Q).floor(),Ae=Rt;if(H!==0&&(k=F),_.bindFramebuffer(I.FRAMEBUFFER,k)&&_.drawBuffers(S,k),_.viewport(te),_.scissor(Ue),_.setScissorTest(Ae),z){let ve=G.get(S.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+N,ve.__webglTexture,H)}else if(Se){let ve=N;for(let Re=0;Re<S.textures.length;Re++){let Ne=G.get(S.textures[Re]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Re,Ne.__webglTexture,H,ve)}}else if(S!==null&&H!==0){let ve=G.get(S.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,ve.__webglTexture,H)}q=-1};function Gg(S){let N=G.get(S);return(N.__readFormat!==S.format||N.__readType!==S.type)&&(N.__readFormat=S.format,N.__readType=S.type,N.__formatReadable=A.textureFormatReadable(S.format),N.__typeReadable=A.textureTypeReadable(S.type)),N}this.readRenderTargetPixels=function(S,N,H,k,z,Se,Te,ve=0){if(!(S&&S.isWebGLRenderTarget)){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=G.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Te!==void 0&&(Re=Re[Te]),Re){_.bindFramebuffer(I.FRAMEBUFFER,Re);try{let Ne=S.textures[ve],nt=Ne.format,lt=Ne.type;S.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+ve);let Ce=Gg(Ne);if(Ce.__formatReadable===!1){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ce.__typeReadable===!1){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=S.width-k&&H>=0&&H<=S.height-z&&I.readPixels(N,H,k,z,me.convert(nt),me.convert(lt),Se)}finally{let Ne=ie!==null?G.get(ie).__webglFramebuffer:null;_.bindFramebuffer(I.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(S,N,H,k,z,Se,Te,ve=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Re=G.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Te!==void 0&&(Re=Re[Te]),Re)if(N>=0&&N<=S.width-k&&H>=0&&H<=S.height-z){_.bindFramebuffer(I.FRAMEBUFFER,Re);let Ne=S.textures[ve],nt=Ne.format,lt=Ne.type;S.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+ve);let Ce=Gg(Ne);if(Ce.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ce.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let At=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,At),I.bufferData(I.PIXEL_PACK_BUFFER,Se.byteLength,I.STREAM_READ),I.readPixels(N,H,k,z,me.convert(nt),me.convert(lt),0),I.bindBuffer(I.PIXEL_PACK_BUFFER,null);let sn=ie!==null?G.get(ie).__webglFramebuffer:null;_.bindFramebuffer(I.FRAMEBUFFER,sn);let zt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await p_(I,zt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,At),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,Se),I.bindBuffer(I.PIXEL_PACK_BUFFER,null),I.deleteBuffer(At),I.deleteSync(zt),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,N=null,H=0){let k=Math.pow(2,-H),z=Math.floor(S.image.width*k),Se=Math.floor(S.image.height*k),Te=N!==null?N.x:0,ve=N!==null?N.y:0;$.setTexture2D(S,0),I.copyTexSubImage2D(I.TEXTURE_2D,H,0,0,Te,ve,z,Se),_.unbindTexture()},this.copyTextureToTexture=function(S,N,H=null,k=null,z=0,Se=0){let Te,ve,Re,Ne,nt,lt,Ce,At,sn,zt=S.isCompressedTexture?S.mipmaps[Se]:S.image;if(H!==null)Te=H.max.x-H.min.x,ve=H.max.y-H.min.y,Re=H.isBox3?H.max.z-H.min.z:1,Ne=H.min.x,nt=H.min.y,lt=H.isBox3?H.min.z:0;else{let jt=Math.pow(2,-z);Te=Math.floor(zt.width*jt),ve=Math.floor(zt.height*jt),S.isDataArrayTexture?Re=zt.depth:S.isData3DTexture?Re=Math.floor(zt.depth*jt):Re=1,Ne=0,nt=0,lt=0}k!==null?(Ce=k.x,At=k.y,sn=k.z):(Ce=0,At=0,sn=0);let Nt=me.convert(N.format),En=me.convert(N.type),Ee;N.isData3DTexture?($.setTexture3D(N,0),Ee=I.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?($.setTexture2DArray(N,0),Ee=I.TEXTURE_2D_ARRAY):($.setTexture2D(N,0),Ee=I.TEXTURE_2D),_.activeTexture(I.TEXTURE0),_.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,N.flipY),_.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),_.pixelStorei(I.UNPACK_ALIGNMENT,N.unpackAlignment);let Rn=_.getParameter(I.UNPACK_ROW_LENGTH),xt=_.getParameter(I.UNPACK_IMAGE_HEIGHT),ui=_.getParameter(I.UNPACK_SKIP_PIXELS),Gi=_.getParameter(I.UNPACK_SKIP_ROWS),zs=_.getParameter(I.UNPACK_SKIP_IMAGES);_.pixelStorei(I.UNPACK_ROW_LENGTH,zt.width),_.pixelStorei(I.UNPACK_IMAGE_HEIGHT,zt.height),_.pixelStorei(I.UNPACK_SKIP_PIXELS,Ne),_.pixelStorei(I.UNPACK_SKIP_ROWS,nt),_.pixelStorei(I.UNPACK_SKIP_IMAGES,lt);let oa=S.isDataArrayTexture||S.isData3DTexture,Lt=N.isDataArrayTexture||N.isData3DTexture;if(S.isDepthTexture){let jt=G.get(S),Gs=G.get(N),Ft=G.get(jt.__renderTarget),Vs=G.get(Gs.__renderTarget);_.bindFramebuffer(I.READ_FRAMEBUFFER,Ft.__webglFramebuffer),_.bindFramebuffer(I.DRAW_FRAMEBUFFER,Vs.__webglFramebuffer);for(let ca=0;ca<Re;ca++)oa&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,G.get(S).__webglTexture,z,lt+ca),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,G.get(N).__webglTexture,Se,sn+ca)),I.blitFramebuffer(Ne,nt,Te,ve,Ce,At,Te,ve,I.DEPTH_BUFFER_BIT,I.NEAREST);_.bindFramebuffer(I.READ_FRAMEBUFFER,null),_.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(z!==0||S.isRenderTargetTexture||G.has(S)){let jt=G.get(S),Gs=G.get(N);_.bindFramebuffer(I.READ_FRAMEBUFFER,L),_.bindFramebuffer(I.DRAW_FRAMEBUFFER,B);for(let Ft=0;Ft<Re;Ft++)oa?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,jt.__webglTexture,z,lt+Ft):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,jt.__webglTexture,z),Lt?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Gs.__webglTexture,Se,sn+Ft):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Gs.__webglTexture,Se),z!==0?I.blitFramebuffer(Ne,nt,Te,ve,Ce,At,Te,ve,I.COLOR_BUFFER_BIT,I.NEAREST):Lt?I.copyTexSubImage3D(Ee,Se,Ce,At,sn+Ft,Ne,nt,Te,ve):I.copyTexSubImage2D(Ee,Se,Ce,At,Ne,nt,Te,ve);_.bindFramebuffer(I.READ_FRAMEBUFFER,null),_.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else Lt?S.isDataTexture||S.isData3DTexture?I.texSubImage3D(Ee,Se,Ce,At,sn,Te,ve,Re,Nt,En,zt.data):N.isCompressedArrayTexture?I.compressedTexSubImage3D(Ee,Se,Ce,At,sn,Te,ve,Re,Nt,zt.data):I.texSubImage3D(Ee,Se,Ce,At,sn,Te,ve,Re,Nt,En,zt):S.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,Se,Ce,At,Te,ve,Nt,En,zt.data):S.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,Se,Ce,At,zt.width,zt.height,Nt,zt.data):I.texSubImage2D(I.TEXTURE_2D,Se,Ce,At,Te,ve,Nt,En,zt);_.pixelStorei(I.UNPACK_ROW_LENGTH,Rn),_.pixelStorei(I.UNPACK_IMAGE_HEIGHT,xt),_.pixelStorei(I.UNPACK_SKIP_PIXELS,ui),_.pixelStorei(I.UNPACK_SKIP_ROWS,Gi),_.pixelStorei(I.UNPACK_SKIP_IMAGES,zs),Se===0&&N.generateMipmaps&&I.generateMipmap(Ee),_.unbindTexture()},this.initRenderTarget=function(S){G.get(S).__webglFramebuffer===void 0&&$.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?$.setTextureCube(S,0):S.isData3DTexture?$.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?$.setTexture2DArray(S,0):$.setTexture2D(S,0),_.unbindTexture()},this.resetState=function(){X=0,W=0,ie=null,_.reset(),Me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=st._getDrawingBufferColorSpace(e),t.unpackColorSpace=st._getUnpackColorSpace()}};var xu=class extends br{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new mi;e.deleteAttribute("uv");let t=new kn({side:yn}),i=new kn,s=new Nr(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new ht(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new Tr(e,i,6),o=new Bt;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let c=new ht(e,Qa(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);let l=new ht(e,Qa(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);let h=new ht(e,Qa(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let u=new ht(e,Qa(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let d=new ht(e,Qa(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);let f=new ht(e,Qa(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Qa(n){return new uc({color:0,emissive:16777215,emissiveIntensity:n})}var Kr=typeof self<"u"?self:{};function Ax(n,e){e:{for(var t=["CLOSURE_FLAGS"],i=Kr,s=0;s<t.length;s++)if((i=i[t[s]])==null){t=null;break e}t=i}return(n=t&&t[n])!=null?n:e}function Vt(n,e){n=n.split(".");for(var t,i=Kr;n.length&&(t=n.shift());)n.length||e===void 0?i=i[t]&&i[t]!==Object.prototype[t]?i[t]:i[t]={}:i[t]=e}function Gr(){throw Error("Invalid UTF8")}function Q_(n,e){return e=String.fromCharCode.apply(null,e),n==null?e:n+e}var fp,e1,vu=void 0,kT=typeof TextDecoder<"u",zT=typeof TextEncoder<"u";function wx(n){if(zT)n=(e1||(e1=new TextEncoder)).encode(n);else{let t=0,i=new Uint8Array(3*n.length);for(let s=0;s<n.length;s++){var e=n.charCodeAt(s);if(e<128)i[t++]=e;else{if(e<2048)i[t++]=e>>6|192;else{if(e>=55296&&e<=57343){if(e<=56319&&s<n.length){let r=n.charCodeAt(++s);if(r>=56320&&r<=57343){e=1024*(e-55296)+r-56320+65536,i[t++]=e>>18|240,i[t++]=e>>12&63|128,i[t++]=e>>6&63|128,i[t++]=63&e|128;continue}s--}e=65533}i[t++]=e>>12|224,i[t++]=e>>6&63|128}i[t++]=63&e|128}}n=t===i.length?i:i.subarray(0,t)}return n}function Rx(n){Kr.setTimeout(()=>{throw n},0)}var GT=Ax(610401301,!1),t1=Ax(748402147,!0);function n1(){var n=Kr.navigator;return n&&(n=n.userAgent)?n:""}var bp,i1=Kr.navigator;function Zu(n){return Zu[" "](n),n}bp=i1&&i1.userAgentData||null,Zu[" "]=function(){};var Cx={},Fc=null;function VT(n){var e=n.length,t=3*e/4;t%3?t=Math.floor(t):"=.".indexOf(n[e-1])!=-1&&(t="=.".indexOf(n[e-2])!=-1?t-2:t-1);var i=new Uint8Array(t),s=0;return(function(r,a){function o(l){for(;c<r.length;){let h=r.charAt(c++),u=Fc[h];if(u!=null)return u;if(!/^[\s\xa0]*$/.test(h))throw Error("Unknown base64 encoding at char: "+h)}return l}Ix();for(var c=0;;){let l=o(-1),h=o(0),u=o(64),d=o(64);if(d===64&&l===-1)break;a(l<<2|h>>4),u!=64&&(a(h<<4&240|u>>2),d!=64&&a(u<<6&192|d))}})(n,function(r){i[s++]=r}),s!==t?i.subarray(0,s):i}function Ix(){if(!Fc){Fc={};var n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),e=["+/=","+/","-_=","-_.","-_"];for(let t=0;t<5;t++){let i=n.concat(e[t].split(""));Cx[t]=i;for(let s=0;s<i.length;s++){let r=i[s];Fc[r]===void 0&&(Fc[r]=s)}}}}var HT=typeof Uint8Array<"u",Px=!(!(GT&&bp&&bp.brands.length>0)&&(n1().indexOf("Trident")!=-1||n1().indexOf("MSIE")!=-1))&&typeof btoa=="function",s1=/[-_.]/g,WT={"-":"+",_:"/",".":"="};function XT(n){return WT[n]||""}function Lx(n){if(!Px)return VT(n);n=s1.test(n)?n.replace(s1,XT):n,n=atob(n);var e=new Uint8Array(n.length);for(let t=0;t<n.length;t++)e[t]=n.charCodeAt(t);return e}function Qp(n){return HT&&n!=null&&n instanceof Uint8Array}var ao={};function jr(){return r1||(r1=new rs(null,ao))}function em(n){Nx(ao);var e=n.h;return(e=e==null||Qp(e)?e:typeof e=="string"?Lx(e):null)==null?e:n.h=e}var r1,rs=class{i(){return new Uint8Array(em(this)||0)}constructor(n,e){if(Nx(e),this.h=n,n!=null&&n.length===0)throw Error("ByteString should be constructed with non-empty values")}};function Nx(n){if(n!==ao)throw Error("illegal external caller")}function Dx(n,e){n.__closure__error__context__984382||(n.__closure__error__context__984382={}),n.__closure__error__context__984382.severity=e}var a1=void 0;function zc(n){return Dx(n=Error(n),"warning"),n}function oo(n,e){if(n!=null){var t=a1??(a1={}),i=t[n]||0;i>=e||(t[n]=i+1,Dx(n=Error(),"incident"),Rx(n))}}function Jr(){return typeof BigInt=="function"}var _o=typeof Symbol=="function"&&typeof Symbol()=="symbol";function hs(n,e,t=!1){return typeof Symbol=="function"&&typeof Symbol()=="symbol"?t&&Symbol.for&&n?Symbol.for(n):n!=null?Symbol(n):Symbol():e}var hr,qT=hs("jas",void 0,!0),o1=hs(void 0,"0di"),Lc=hs(void 0,"1oa"),ai=hs(void 0,Symbol()),$T=hs(void 0,"0ub"),YT=hs(void 0,"0ubs"),Ep=hs(void 0,"0ubsb"),KT=hs(void 0,"0actk"),Ux=hs("m_m","lb",!0),c1=hs(),Fx={Wa:{value:0,configurable:!0,writable:!0,enumerable:!1}},Ox=Object.defineProperties,Pe=_o?qT:"Wa",l1=[];function qc(n,e){_o||Pe in n||Ox(n,Fx),n[Pe]|=e}function hn(n,e){_o||Pe in n||Ox(n,Fx),n[Pe]=e}function $c(n){return qc(n,34),n}function Gc(n){return qc(n,8192),n}hn(l1,7),hr=Object.freeze(l1);var Bx={};function co(n){return n!=null&&n[Ux]===Bx}function Kn(n,e){return e===void 0?n.i!==Zr&&!!(2&n.B[Pe]):!!(2&e)&&n.i!==Zr}var Zr={};function Ju(n,e){if(n!=null){if(typeof n=="string")n=n?new rs(n,ao):jr();else if(n.constructor!==rs)if(Qp(n))n=n.length?new rs(new Uint8Array(n),ao):jr();else{if(!e)throw Error();n=void 0}}return n}var Lu=class{constructor(e,t,i){this.h=e,this.i=t,this.l=i}next(){var e=this.h.next();return e.done||(e.value=this.i.call(this.l,e.value)),e}[Symbol.iterator](){return this}};function kx(n,e,t){var i,s=128&e?0:-1,r=n.length;(i=!!r)&&(i=(i=n[r-1])!=null&&typeof i=="object"&&i.constructor===Object);var a=r+(i?-1:0);for(e=128&e?1:0;e<a;e++)t(e-s,n[e]);if(i){n=n[r-1];for(let o in n)!isNaN(o)&&t(+o,n[o])}}Object.freeze({});var zx={};function xo(n){return 128&n?zx:void 0}function Qu(n){return n.jb=!0,n}var jT=Qu(n=>typeof n=="number"),h1=Qu(n=>typeof n=="string"),ZT=Qu(n=>typeof n=="boolean"),ed=typeof Kr.BigInt=="function"&&typeof Kr.BigInt(0)=="bigint";function ln(n){var e=n;if(h1(e)){if(!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(e))throw Error(String(e))}else if(jT(e)&&!Number.isSafeInteger(e))throw Error(String(e));return ed?BigInt(n):n=ZT(n)?n?"1":"0":h1(n)?n.trim()||"0":String(n)}var Tp=Qu(n=>ed?n>=QT&&n<=tA:n[0]==="-"?u1(n,JT):u1(n,eA)),JT=Number.MIN_SAFE_INTEGER.toString(),QT=ed?BigInt(Number.MIN_SAFE_INTEGER):void 0,eA=Number.MAX_SAFE_INTEGER.toString(),tA=ed?BigInt(Number.MAX_SAFE_INTEGER):void 0;function u1(n,e){if(n.length>e.length)return!1;if(n.length<e.length||n===e)return!0;for(let t=0;t<n.length;t++){let i=n[t],s=e[t];if(i>s)return!1;if(i<s)return!0}}var Nu,nA=typeof Uint8Array.prototype.slice=="function",vt=0,Pt=0;function Ap(n){var e=n>>>0;vt=e,Pt=(n-e)/4294967296>>>0}function Qr(n){if(n<0){Ap(-n);let[e,t]=im(vt,Pt);vt=e>>>0,Pt=t>>>0}else Ap(n)}function tm(n){var e=Nu||(Nu=new DataView(new ArrayBuffer(8)));e.setFloat32(0,+n,!0),Pt=0,vt=e.getUint32(0,!0)}function Gx(n,e){var t=4294967296*e+(n>>>0);return Number.isSafeInteger(t)?t:lo(n,e)}function iA(n,e){return ln(Jr()?BigInt.asUintN(64,(BigInt(e>>>0)<<BigInt(32))+BigInt(n>>>0)):lo(n,e))}function Vx(n,e){return Jr()?ln(BigInt.asIntN(64,(BigInt.asUintN(32,BigInt(e))<<BigInt(32))+BigInt.asUintN(32,BigInt(n)))):ln(nm(n,e))}function lo(n,e){if(n>>>=0,(e>>>=0)<=2097151)var t=""+(4294967296*e+n);else Jr()?t=""+(BigInt(e)<<BigInt(32)|BigInt(n)):(n=(16777215&n)+6777216*(t=16777215&(n>>>24|e<<8))+6710656*(e=e>>16&65535),t+=8147497*e,e*=2,n>=1e7&&(t+=n/1e7>>>0,n%=1e7),t>=1e7&&(e+=t/1e7>>>0,t%=1e7),t=e+d1(t)+d1(n));return t}function d1(n){return n=String(n),"0000000".slice(n.length)+n}function nm(n,e){if(2147483648&e)if(Jr())n=""+(BigInt(0|e)<<BigInt(32)|BigInt(n>>>0));else{let[t,i]=im(n,e);n="-"+lo(t,i)}else n=lo(n,e);return n}function Yc(n){if(n.length<16)Qr(Number(n));else if(Jr())n=BigInt(n),vt=Number(n&BigInt(4294967295))>>>0,Pt=Number(n>>BigInt(32)&BigInt(4294967295));else{let e=+(n[0]==="-");Pt=vt=0;let t=n.length;for(let i=e,s=(t-e)%6+e;s<=t;i=s,s+=6){let r=Number(n.slice(i,s));Pt*=1e6,(vt=1e6*vt+r)>=4294967296&&(Pt+=Math.trunc(vt/4294967296),Pt>>>=0,vt>>>=0)}if(e){let[i,s]=im(vt,Pt);vt=i,Pt=s}}}function im(n,e){return e=~e,n?n=1+~n:e+=1,[n,e]}function yi(n){return Array.prototype.slice.call(n)}var qr=typeof BigInt=="function"?BigInt.asIntN:void 0,wp=typeof BigInt=="function"?BigInt.asUintN:void 0,as=Number.isSafeInteger,Kc=Number.isFinite,or=Math.trunc,sA=ln(0);function Hx(n){if(typeof n!="number")throw Error(`Value of float/double field must be a number, found ${typeof n}: ${n}`);return n}function ri(n){return n==null||typeof n=="number"?n:n==="NaN"||n==="Infinity"||n==="-Infinity"?Number(n):void 0}function Du(n){if(typeof n!="boolean"){var e=typeof n;throw Error(`Expected boolean but got ${e!="object"?e:n?Array.isArray(n)?"array":e:"null"}: ${n}`)}return n}var rA=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function vo(n){switch(typeof n){case"bigint":return!0;case"number":return Kc(n);case"string":return rA.test(n);default:return!1}}function Ds(n){if(n!=null){if(!Kc(n))throw zc("enum");n|=0}return n}function ea(n){if(n==null)return n;if(typeof n=="string"&&n)n=+n;else if(typeof n!="number")return;return Kc(n)?0|n:void 0}function Wx(n){if(n==null)return n;if(typeof n=="string"&&n)n=+n;else if(typeof n!="number")return;return Kc(n)?n>>>0:void 0}function Xx(n,e){if(e??(e=1024),!vo(n))throw zc("int64");var t=typeof n;switch(e){case 512:switch(t){case"string":return Uu(n);case"bigint":return String(qr(64,n));default:return Kx(n)}case 1024:switch(t){case"string":return jx(n);case"bigint":return ln(qr(64,n));default:return Zx(n)}case 0:switch(t){case"string":return Uu(n);case"bigint":return ln(qr(64,n));default:return td(n)}default:return(function(i,s=`unexpected value ${i}!`){throw Error(s)})(e,"Unknown format requested type for int64")}}function qx(n){var e=n.length;return(n[0]==="-"?e<20||e===20&&n<="-9223372036854775808":e<19||e===19&&n<="9223372036854775807")?n:(Yc(n),nm(vt,Pt))}function $x(n){if(n[0]==="-")var e=!1;else e=(e=n.length)<20||e===20&&n<="18446744073709551615";return e?n:(Yc(n),lo(vt,Pt))}function td(n){if(n=or(n),!as(n)){Qr(n);var e=vt,t=Pt;(n=2147483648&t)&&(t=~t>>>0,(e=1+~e>>>0)==0&&(t=t+1>>>0)),n=typeof(e=Gx(e,t))=="number"?n?-e:e:n?"-"+e:e}return n}function Yx(n){return(n=or(n))>=0&&as(n)||(Qr(n),n=Gx(vt,Pt)),n}function Kx(n){return n=or(n),as(n)?n=String(n):(Qr(n),n=nm(vt,Pt)),n}function Uu(n){var e=or(Number(n));return as(e)?String(e):((e=n.indexOf("."))!==-1&&(n=n.substring(0,e)),qx(n))}function jx(n){var e=or(Number(n));return as(e)?ln(e):((e=n.indexOf("."))!==-1&&(n=n.substring(0,e)),Jr()?ln(qr(64,BigInt(n))):ln(qx(n)))}function Zx(n){return as(n)?ln(td(n)):ln(Kx(n))}function Fu(n){var e=typeof n;return n==null?n:e==="bigint"?ln(qr(64,n)):vo(n)?e==="string"?jx(n):Zx(n):void 0}function sm(n){if(n==null)return n;var e=typeof n;if(e==="bigint")return String(qr(64,n));if(vo(n)){if(e==="string")return Uu(n);if(e==="number")return td(n)}}function Jx(n){if(n==null||typeof n=="string"||n instanceof rs)return n}function Qx(n){if(typeof n!="string")throw Error();return n}function Ls(n){if(n!=null&&typeof n!="string")throw Error();return n}function bn(n){return n==null||typeof n=="string"?n:void 0}function rm(n,e,t,i){return co(n)?n:Array.isArray(n)?((i=(t=0|n[Pe])|32&i|2&i)!==t&&hn(n,i),new e(n)):(t?2&i?((n=e[o1])||($c((n=new e).B),n=e[o1]=n),e=n):e=new e:e=void 0,e)}function aA(n,e,t){return(n=e?Xx(n,1024):Fu(n))==null?t?sA:void 0:n}function oA(n){return n}var cA={},lA=(function(){try{return Zu(new class extends Map{constructor(){super()}}),!1}catch{return!0}})(),Bc=class{constructor(){this.h=new Map}get(e){return this.h.get(e)}set(e,t){return this.h.set(e,t),this.size=this.h.size,this}delete(e){return e=this.h.delete(e),this.size=this.h.size,e}clear(){this.h.clear(),this.size=this.h.size}has(e){return this.h.has(e)}entries(){return this.h.entries()}keys(){return this.h.keys()}values(){return this.h.values()}forEach(e,t){return this.h.forEach(e,t)}[Symbol.iterator](){return this.entries()}},hA=lA?(Object.setPrototypeOf(Bc.prototype,Map.prototype),Object.defineProperties(Bc.prototype,{size:{value:0,configurable:!0,enumerable:!0,writable:!0}}),Bc):class extends Map{constructor(){super()}};function f1(n){return n}function pp(n){if(2&n.N)throw Error("Cannot mutate an immutable Map")}var p1,Fs=class extends hA{constructor(n,e,t=f1,i=f1){super(),this.N=0|n[Pe],this.O=e,this.ca=t,this.oa=this.O?uA:i;for(let s=0;s<n.length;s++){let r=n[s],a=t(r[0],!1,!0),o=r[1];e?o===void 0&&(o=null):o=i(r[1],!1,!0,void 0,void 0,this.N),super.set(a,o)}}fa(n){return Gc(Array.from(super.entries(),n))}clear(){pp(this),super.clear()}delete(n){return pp(this),super.delete(this.ca(n,!0,!1))}entries(){if(this.O){var n=super.keys();n=new Lu(n,dA,this)}else n=super.entries();return n}values(){if(this.O){var n=super.keys();n=new Lu(n,Fs.prototype.get,this)}else n=super.values();return n}forEach(n,e){this.O?super.forEach((t,i,s)=>{n.call(e,s.get(i),i,s)}):super.forEach(n,e)}set(n,e){return pp(this),(n=this.ca(n,!0,!1))==null?this:e==null?(super.delete(n),this):super.set(n,this.oa(e,!0,!0,this.O,!1,this.N))}hb(n){var e=this.ca(n[0],!1,!0);n=n[1],n=this.O?n===void 0?null:n:this.oa(n,!1,!0,void 0,!1,this.N),super.set(e,n)}has(n){return super.has(this.ca(n,!1,!1))}get(n){n=this.ca(n,!1,!1);var e=super.get(n);if(e!==void 0){var t=this.O;return t?((t=this.oa(e,!1,!0,t,this.Ga,this.N))!==e&&super.set(n,t),t):e}}[Symbol.iterator](){return this.entries()}};function uA(n,e,t,i,s,r){return n=rm(n,i,t,r),s&&(n=om(n)),n}function dA(n){return[n,this.get(n)]}function m1(){return p1||(p1=new Fs($c([]),void 0,void 0,void 0,cA))}function nd(n){return ai?n[ai]:void 0}function Ou(n,e){for(let t in n)!isNaN(t)&&e(n,+t,n[t])}Fs.prototype.toJSON=void 0;var fA,g1,_1,Rp=class{},pA={eb:!0};function mA(n,e){e<100||oo(YT,1)}function id(n,e,t,i){var s=i!==void 0;i=!!i;var r,a=ai;!s&&_o&&a&&(r=n[a])&&Ou(r,mA),a=[];var o=n.length;r=4294967295;var c=!1,l=!!(64&e),h=l?128&e?0:-1:void 0;if(!(1&e)){var u=o&&n[o-1];u!=null&&typeof u=="object"&&u.constructor===Object?r=--o:u=void 0,!l||128&e||s||(c=!0,r=(fA??oA)(r-h,h,n,u,void 0)+h)}e=void 0;for(var d=0;d<o;d++){let f=n[d];if(f!=null&&(f=t(f,i))!=null)if(l&&d>=r){let p=d-h;(e??(e={}))[p]=f}else a[d]=f}if(u)for(let f in u){if((o=u[f])==null||(o=t(o,i))==null)continue;let p;d=+f,l&&!Number.isNaN(d)&&(p=d+h)<r?a[p]=o:(e??(e={}))[f]=o}return e&&(c?a.push(e):a[r]=e),s&&ai&&(n=nd(n))&&n instanceof Rp&&(a[ai]=(function(f){var p=new Rp;return Ou(f,(x,g,m)=>{p[g]=yi(m)}),p.la=f.la,p})(n)),a}function gA(n){return n[0]=Vc(n[0]),n[1]=Vc(n[1]),n}function Vc(n){switch(typeof n){case"number":return Number.isFinite(n)?n:""+n;case"bigint":return Tp(n)?Number(n):""+n;case"boolean":return n?1:0;case"object":if(Array.isArray(n)){var e=0|n[Pe];return n.length===0&&1&e?void 0:id(n,e,Vc)}if(co(n))return ev(n);if(n instanceof rs){if((e=n.h)==null)n="";else if(typeof e=="string")n=e;else{if(Px){for(var t="",i=0,s=e.length-10240;i<s;)t+=String.fromCharCode.apply(null,e.subarray(i,i+=10240));t+=String.fromCharCode.apply(null,i?e.subarray(i):e),e=btoa(t)}else{t===void 0&&(t=0),Ix(),t=Cx[t],i=Array(Math.floor(e.length/3)),s=t[64]||"";let l=0,h=0;for(;l<e.length-2;l+=3){var r=e[l],a=e[l+1],o=e[l+2],c=t[r>>2];r=t[(3&r)<<4|a>>4],a=t[(15&a)<<2|o>>6],o=t[63&o],i[h++]=c+r+a+o}switch(c=0,o=s,e.length-l){case 2:o=t[(15&(c=e[l+1]))<<2]||s;case 1:e=e[l],i[h]=t[e>>2]+t[(3&e)<<4|c>>4]+o+s}e=i.join("")}n=n.h=e}return n}return n instanceof Fs?n=n.size!==0?n.fa(gA):void 0:void 0}return n}function ev(n){return id(n=n.B,0|n[Pe],Vc)}function $r(n,e){return tv(n,e[0],e[1])}function tv(n,e,t,i=0){if(n==null){var s=32;t?(n=[t],s|=128):n=[],e&&(s=-16760833&s|(1023&e)<<14)}else{if(!Array.isArray(n))throw Error("narr");if(s=0|n[Pe],t1&&1&s)throw Error("rfarr");if(2048&s&&!(2&s)&&(function(){if(t1)throw Error("carr");oo(KT,5)})(),256&s)throw Error("farr");if(64&s)return(s|i)!==s&&hn(n,s|i),n;if(t&&(s|=128,t!==n[0]))throw Error("mid");e:{s|=64;var r=(t=n).length;if(r){var a=r-1;let c=t[a];if(c!=null&&typeof c=="object"&&c.constructor===Object){if((a-=e=128&s?0:-1)>=1024)throw Error("pvtlmt");for(var o in c)(r=+o)<a&&(t[r+e]=c[o],delete c[o]);s=-16760833&s|(1023&a)<<14;break e}}if(e){if((o=Math.max(e,r-(128&s?0:-1)))>1024)throw Error("spvt");s=-16760833&s|(1023&o)<<14}}}return hn(n,64|s|i),n}function _A(n,e){if(typeof n!="object")return n;if(Array.isArray(n)){var t=0|n[Pe];return n.length===0&&1&t?void 0:x1(n,t,e)}if(co(n))return v1(n);if(n instanceof Fs){if(2&(e=n.N))return n;if(!n.size)return;if(t=$c(n.fa()),n.O)for(n=0;n<t.length;n++){let i=t[n],s=i[1];s=s==null||typeof s!="object"?void 0:co(s)?v1(s):Array.isArray(s)?x1(s,0|s[Pe],!!(32&e)):void 0,i[1]=s}return t}return n instanceof rs?n:void 0}function x1(n,e,t){return 2&e||(!t||4096&e||16&e?n=yo(n,e,!1,t&&!(16&e)):(qc(n,34),4&e&&Object.freeze(n))),n}function am(n,e,t){return n=new n.constructor(e),t&&(n.i=Zr),n.o=Zr,n}function v1(n){var e=n.B,t=0|e[Pe];return Kn(n,t)?n:cm(n,e,t)?am(n,e):yo(e,t)}function yo(n,e,t,i){return i??(i=!!(34&e)),n=id(n,e,_A,i),i=32,t&&(i|=2),hn(n,e=16769217&e|i),n}function om(n){var e=n.B,t=0|e[Pe];return Kn(n,t)?cm(n,e,t)?am(n,e,!0):new n.constructor(yo(e,t,!1)):n}function So(n){if(n.i!==Zr)return!1;var e=n.B;return qc(e=yo(e,0|e[Pe]),2048),n.B=e,n.i=void 0,n.o=void 0,!0}function ta(n){if(!So(n)&&Kn(n,0|n.B[Pe]))throw Error()}function cr(n,e){e===void 0&&(e=0|n[Pe]),32&e&&!(4096&e)&&hn(n,4096|e)}function cm(n,e,t){return!!(2&t)||!(!(32&t)||4096&t)&&(hn(e,2|t),n.i=Zr,!0)}var nv=ln(0),nr={};function Ht(n,e,t,i){if((e=os(n.B,e,void 0,i))!==null||t&&n.o!==Zr)return e}function os(n,e,t,i){if(e===-1)return null;var s=e+(t?0:-1),r=n.length-1;if(!(r<1+(t?0:-1))){if(s>=r){var a=n[r];if(a!=null&&typeof a=="object"&&a.constructor===Object){t=a[e];var o=!0}else{if(s!==r)return;t=a}}else t=n[s];if(i&&t!=null){if((i=i(t))==null)return i;if(!Object.is(i,t))return o?a[e]=i:n[s]=i,i}return t}}function et(n,e,t,i){ta(n);var s=n.B;return Qt(s,0|s[Pe],e,t,i),n}function Qt(n,e,t,i,s){var r=t+(s?0:-1),a=n.length-1;if(a>=1+(s?0:-1)&&r>=a){let o=n[a];if(o!=null&&typeof o=="object"&&o.constructor===Object)return o[t]=i,e}return r<=a?(n[r]=i,e):(i!==void 0&&(t>=(a=(e??(e=0|n[Pe]))>>14&1023||536870912)?i!=null&&(n[a+(s?0:-1)]={[t]:i}):n[r]=i),e)}function iv(n,e){return co(n=os(n.B,e))||Array.isArray(n)}function sv(n,e,t){return iv(n,e=cv(n,t)===e?e:-1)}function Wr(n,e,t,i,s){var r=n.B,a=0|r[Pe];i=Kn(n,a)?1:i||4,s=!!s||i===3,i===2&&So(n)&&(a=0|(r=n.B)[Pe]);var o=(n=lm(r,e))===hr?7:0|n[Pe],c=hm(o,a),l=!(4&c);if(l){4&c&&(n=yi(n),o=0,c=rr(c,a),a=Qt(r,a,e,n));let h=0,u=0;for(;h<n.length;h++){let d=t(n[h]);d!=null&&(n[u++]=d)}u<h&&(n.length=u),t=-513&c|4,c=t&=-1025,c&=-4097}return c!==o&&(hn(n,c),2&c&&Object.freeze(n)),rv(n,c,r,a,e,i,l,s)}function rv(n,e,t,i,s,r,a,o){var c=e;return r===1||r===4&&(2&e||!(16&e)&&32&i)?sr(e)||((e|=!n.length||a&&!(4096&e)||32&i&&!(4096&e||16&e)?2:256)!==c&&hn(n,e),Object.freeze(n)):(r===2&&sr(e)&&(n=yi(n),c=0,e=rr(e,i),i=Qt(t,i,s,n)),sr(e)||(o||(e|=16),e!==c&&hn(n,e))),2&e||!(4096&e||16&e)||cr(t,i),n}function lm(n,e,t){return n=os(n,e,t),Array.isArray(n)?n:hr}function hm(n,e){return 2&e&&(n|=2),1|n}function sr(n){return!!(2&n)&&!!(4&n)||!!(256&n)}function av(n){return Ju(n,!0)}function ov(n){n=yi(n);for(let e=0;e<n.length;e++){let t=n[e]=yi(n[e]);Array.isArray(t[1])&&(t[1]=$c(t[1]))}return Gc(n)}function jc(n,e,t,i){ta(n),Qt(n=n.B,0|n[Pe],e,(i==="0"?Number(t)===0:t===i)?void 0:t)}function ur(n,e,t){if(2&e)throw Error();var i=xo(e),s=lm(n,t,i),r=s===hr?7:0|s[Pe],a=hm(r,e);return(2&a||sr(a)||16&a)&&(a===r||sr(a)||hn(s,a),s=yi(s),r=0,a=rr(a,e),Qt(n,e,t,s,i)),(a&=-13)!==r&&hn(s,a),s}function cv(n,e){return dm(um(n=n.B),n,void 0,e)}function um(n){if(_o)return n[Lc]??(n[Lc]=new Map);if(Lc in n)return n[Lc];var e=new Map;return Object.defineProperty(n,Lc,{value:e}),e}function lv(n,e,t,i,s){var r=um(n),a=dm(r,n,e,t,s);return a!==i&&(a&&(e=Qt(n,e,a,void 0,s)),r.set(t,i)),e}function dm(n,e,t,i,s){var r=n.get(i);if(r!=null)return r;r=0;for(let a=0;a<i.length;a++){let o=i[a];os(e,o,s)!=null&&(r!==0&&(t=Qt(e,t,r,void 0,s)),r=o)}return n.set(i,r),r}function fm(n,e,t){var i=0|n[Pe],s=xo(i),r=os(n,t,s);if(co(r)){if(!Kn(r))return So(r),r.B;var a=r.B}else Array.isArray(r)&&(a=r);if(a){let o=0|a[Pe];2&o&&(a=yo(a,o))}return(a=$r(a,e))!==r&&Qt(n,i,t,a,s),a}function St(n,e,t,i){var s=n.B,r=0|s[Pe];if(e=(function(a,o,c,l,h){var u=!1;if((l=os(a,l,h,d=>{var f=rm(d,c,!1,o);return u=f!==d&&f!=null,f}))!=null)return u&&!Kn(l)&&cr(a,o),l})(s,r,e,t,i),e==null)return e;if(!Kn(n,r=0|s[Pe])){let a=om(e);a!==e&&(So(n)&&(r=0|(s=n.B)[Pe]),cr(s,r=Qt(s,r,t,e=a,i)))}return e}function hv(n,e,t,i,s,r,a,o){var c=Kn(n,t);r=c?1:r||4,a=!!a||r===3,c=o&&!c,(r===2||c)&&So(n)&&(t=0|(e=n.B)[Pe]);var l=(n=lm(e,s))===hr?7:0|n[Pe],h=hm(l,t);if(o=!(4&h)){var u=n,d=t;let f=!!(2&h);f&&(d|=2);let p=!f,x=!0,g=0,m=0;for(;g<u.length;g++){let M=rm(u[g],i,!1,d);if(M instanceof i){if(!f){let E=Kn(M);p&&(p=!E),x&&(x=E)}u[m++]=M}}m<g&&(u.length=m),h|=4,h=x?-4097&h:4096|h,h=p?8|h:-9&h}if(h!==l&&(hn(n,h),2&h&&Object.freeze(n)),c&&!(8&h||!n.length&&(r===1||r===4&&(2&h||!(16&h)&&32&t)))){for(sr(h)&&(n=yi(n),h=rr(h,t),t=Qt(e,t,s,n)),i=n,c=h,l=0;l<i.length;l++)(u=i[l])!==(h=om(u))&&(i[l]=h);c|=8,hn(n,h=c=i.length?4096|c:-4097&c)}return rv(n,h,e,t,s,r,o,a)}function na(n,e,t){var i=n.B;return hv(n,i,0|i[Pe],e,t,void 0,!1,!0)}function uv(n){return n==null&&(n=void 0),n}function ke(n,e,t,i,s){return et(n,t,i=uv(i),s),i&&!Kn(i)&&cr(n.B),n}function Fi(n,e,t,i){e:{var s=i=uv(i);ta(n);let r=n.B,a=0|r[Pe];if(s==null){let o=um(r);if(dm(o,r,a,t)!==e)break e;o.set(t,0)}else a=lv(r,a,t,e);Qt(r,a,e,s)}return i&&!Kn(i)&&cr(n.B),n}function Cp(n,e,t){ta(n);var i=n.B,s=0|i[Pe];if(t==null)return Qt(i,s,e),n;var r=t===hr?7:0|t[Pe],a=r,o=sr(r),c=o||Object.isFrozen(t),l=!0,h=!0;for(let d=0;d<t.length;d++){var u=t[d];o||(u=Kn(u),l&&(l=!u),h&&(h=u))}return o||(r=l?13:5,r=h?-4097&r:4096|r),c&&r===a||(t=yi(t),a=0,r=rr(r,s)),r!==a&&hn(t,r),s=Qt(i,s,e,t),2&r||!(4096&r||16&r)||cr(i,s),n}function rr(n,e){return-273&(2&e?2|n:-3&n)}function Hc(n,e,t,i){var s=i;ta(n),n=hv(n,i=n.B,0|i[Pe],t,e,2,!0),s=s??new t,n.push(s),e=t=n===hr?7:0|n[Pe],(s=Kn(s))?(t&=-9,n.length===1&&(t&=-4097)):t|=4096,t!==e&&hn(n,t),s||cr(i)}function vi(n,e,t){return ea(Ht(n,e,t))}function Dn(n,e){return Ht(n,e,void 0,ri)??0}function Ip(n,e,t,i){return St(n,e,t=cv(n,i)===t?t:-1,void 0)}function Pp(n,e){jc(n,3,e==null?e:Du(e),!1)}function cs(n,e,t){if(t!=null){if(typeof t!="number"||!Kc(t))throw zc("int32");t|=0}et(n,e,t)}function mp(n,e,t){return et(n,e,t==null?t:Xx(t))}function Eu(n,e,t){return et(n,e,t==null?t:(function(i){if(!vo(i))throw zc("uint64");switch(typeof i){case"string":var s=or(Number(i));return as(s)&&s>=0?i=ln(s):((s=i.indexOf("."))!==-1&&(i=i.substring(0,s)),i=Jr()?ln(wp(64,BigInt(i))):ln($x(i))),i;case"bigint":return ln(wp(64,i));default:return as(i)?i=ln(Yx(i)):((i=or(i))>=0&&as(i)?i=String(i):(Qr(i),i=lo(vt,Pt)),i=ln(i)),i}})(t))}function Ve(n,e,t){et(n,e,t==null?t:Hx(t))}function no(n,e,t){jc(n,e,t==null?t:Hx(t),0)}function oi(n,e,t){jc(n,e,Ls(t),"")}function Bu(n,e,t){{ta(n);let a=n.B,o=0|a[Pe];if(t==null)Qt(a,o,e);else{var i=n=t===hr?7:0|t[Pe],s=sr(n),r=s||Object.isFrozen(t);for(s||(n=0),r||(t=yi(t),i=0,n=rr(n,o),r=!1),n|=5,n|=(4&n?512&n?512:1024&n?1024:0:void 0)??1024,s=0;s<t.length;s++){let c=t[s],l=Qx(c);Object.is(c,l)||(r&&(t=yi(t),i=0,n=rr(n,o),r=!1),t[s]=l)}n!==i&&(r&&(t=yi(t),n=rr(n,o)),hn(t,n)),Qt(a,o,e,t)}}}function sd(n,e,t){ta(n),Wr(n,e,bn,2,!0).push(Qx(t))}var eo=class{constructor(n,e,t){if(this.buffer=n,t&&!e)throw Error();this.h=e}};function rd(n,e){if(typeof n=="string")return new eo(Lx(n),e);if(Array.isArray(n))return new eo(new Uint8Array(n),e);if(n.constructor===Uint8Array)return new eo(n,!1);if(n.constructor===ArrayBuffer)return n=new Uint8Array(n),new eo(n,!1);if(n.constructor===rs)return e=em(n)||new Uint8Array(0),new eo(e,!0,n);if(n instanceof Uint8Array)return n=n.constructor===Uint8Array?n:new Uint8Array(n.buffer,n.byteOffset,n.byteLength),new eo(n,!1);throw Error()}function pm(n,e){var t=0,i=0,s=0,r=n.i,a=n.h;do{var o=r[a++];t|=(127&o)<<s,s+=7}while(s<32&&128&o);if(s>32)for(i|=(127&o)>>4,s=3;s<32&&128&o;s+=7)i|=(127&(o=r[a++]))<<s;if(Yr(n,a),!(128&o))return e(t>>>0,i>>>0);throw Error()}function mm(n){for(var e=0,t=n.h,i=t+10,s=n.i;t<i;){let r=s[t++];if(e|=r,!(128&r))return Yr(n,t),!!(127&e)}throw Error()}function Os(n){var e=n.i,t=n.h,i=e[t++],s=127&i;if(128&i&&(s|=(127&(i=e[t++]))<<7,128&i&&(s|=(127&(i=e[t++]))<<14,128&i&&(s|=(127&(i=e[t++]))<<21,128&i&&(s|=(i=e[t++])<<28,128&i&&128&e[t++]&&128&e[t++]&&128&e[t++]&&128&e[t++]&&128&e[t++])))))throw Error();return Yr(n,t),s}function ls(n){return Os(n)>>>0}function ku(n){return pm(n,Vx)}function Lp(n){var e=n.i,t=n.h,i=e[t],s=e[t+1],r=e[t+2];return e=e[t+3],Yr(n,n.h+4),(i|s<<8|r<<16|e<<24)>>>0}function zu(n){var e=Lp(n);n=2*(e>>31)+1;var t=e>>>23&255;return e&=8388607,t==255?e?NaN:n*(1/0):t==0?1401298464324817e-60*n*e:n*Math.pow(2,t-150)*(e+8388608)}function xA(n){return Os(n)}function Yr(n,e){if(n.h=e,e>n.l)throw Error()}function dv(n,e){if(e<0)throw Error();var t=n.h;if((e=t+e)>n.l)throw Error();return n.h=e,t}function fv(n,e){if(e==0)return jr();var t=dv(n,e);return n.ga&&n.u?t=n.i.subarray(t,t+e):(n=n.i,t=t===(e=t+e)?new Uint8Array(0):nA?n.slice(t,e):new Uint8Array(n.subarray(t,e))),t.length==0?jr():new rs(t,ao)}var vA=class{constructor(n,e,t,i){this.i=null,this.u=!1,this.h=this.l=this.o=0,this.init(n,e,t,i)}init(n,e,t,{ga:i=!1,na:s=!1}={}){this.ga=i,this.na=s,n&&(n=rd(n,this.na),this.i=n.buffer,this.u=n.h,this.o=e||0,this.l=t!==void 0?this.o+t:this.i.length,this.h=this.o)}clear(){this.i=null,this.u=!1,this.h=this.l=this.o=0,this.ga=!1}},y1=[],ho=0;function pv(n,e,t,i){if(Gu.length){let s=Gu.pop();return s.A(i),s.h.init(n,e,t,i),s}return new yA(n,e,t,i)}function mv(n){n.h.clear(),n.l=-1,n.i=-1,Gu.length<100&&Gu.push(n)}function gv(n){var e=n.h;if(e.h==e.l)return!1;n.o=n.h.h;var t=ls(n.h);if(e=t>>>3,!((t&=7)>=0&&t<=5)||e<1)throw Error();return n.l=e,n.i=t,!0}function Tu(n){try{switch(n.i){case 0:n.i!=0?Tu(n):mm(n.h);break;case 1:var e=n.h;Yr(e,e.h+8);break;case 2:if(n.i!=2)Tu(n);else{var t=ls(n.h),i=n.h;Yr(i,i.h+t)}break;case 5:var s=n.h;Yr(s,s.h+4);break;case 3:_v();let r=n.l;try{for(;;){if(!gv(n))throw Error();if(n.i==4){if(n.l!=r)throw Error();break}Tu(n)}}catch(a){throw a instanceof RangeError?new SyntaxError:a}finally{ho>0&&ho--}break;default:throw Error()}}catch(r){throw r instanceof RangeError?new SyntaxError:r}}function _v(){if(ho>=100)throw new SyntaxError;ho++}function Zc(n,e,t){var i=n.h.l,s=ls(n.h),r=(s=n.h.h+s)-i;if(r<=0&&(n.h.l=s,t(e,n,void 0,void 0,void 0),r=s-n.h.h),r)throw Error();return n.h.h=s,n.h.l=i,e}function gm(n){var e=ls(n.h),t=dv(n=n.h,e);if(n=n.i,kT){var i,s=n;(i=fp)||(i=fp=new TextDecoder("utf-8",{fatal:!0})),e=t+e,s=t===0&&e===s.length?s:s.subarray(t,e);try{var r=i.decode(s)}catch(o){if(vu===void 0){try{i.decode(new Uint8Array([128]))}catch{}try{i.decode(new Uint8Array([97])),vu=!0}catch{vu=!1}}throw!vu&&(fp=void 0),o}}else{e=(r=t)+e,t=[];let o,c=null;for(;r<e;){var a=n[r++];a<128?t.push(a):a<224?r>=e?Gr():(o=n[r++],a<194||(192&o)!=128?(r--,Gr()):t.push((31&a)<<6|63&o)):a<240?r>=e-1?Gr():(o=n[r++],(192&o)!=128||a===224&&o<160||a===237&&o>=160||(192&(i=n[r++]))!=128?(r--,Gr()):t.push((15&a)<<12|(63&o)<<6|63&i)):a<=244?r>=e-2?Gr():(o=n[r++],(192&o)!=128||o-144+(a<<28)>>30||(192&(i=n[r++]))!=128||(192&(s=n[r++]))!=128?(r--,Gr()):(a=(7&a)<<18|(63&o)<<12|(63&i)<<6|63&s,a-=65536,t.push(55296+(a>>10&1023),56320+(1023&a)))):Gr(),t.length>=8192&&(c=Q_(c,t),t.length=0)}r=Q_(c,t)}return r}function _m(n){var e=ls(n.h);return fv(n.h,e)}function Jc(n,e,t){var i=ls(n.h);for(i=n.h.h+i;n.h.h<i;)t.push(e(n.h))}var yA=class{constructor(n,e,t,i){if(y1.length){let s=y1.pop();s.init(n,e,t,i),n=s}else n=new vA(n,e,t,i);this.h=n,this.o=this.h.h,this.i=this.l=-1,this.A(i)}A({sa:n=!1}={}){this.sa=n}},Gu=[];function SA(n){return new Vu(4294967295&n,Math.floor(n/4294967296))}function S1(n){return n?/^\d+$/.test(n)?(Yc(n),new Vu(vt,Pt)):null:M1||(M1=new Vu(0,0))}var M1,Vu=class{constructor(n,e){this.i=n>>>0,this.h=e>>>0}};function MA(n){return new Hu(4294967295&n,Math.floor(n/4294967296))}function xv(n){return n?/^-?\d+$/.test(n)?(Yc(n),new Hu(vt,Pt)):null:b1||(b1=new Hu(0,0))}var b1,E1,T1,A1,gp,w1,Nc,yu,Hu=class{constructor(n,e){this.i=n>>>0,this.h=e>>>0}};function vv(n,e,t){return typeof BigInt64Array<"u"?(Nc||(Nc=new BigInt64Array(1),yu=new Uint32Array(Nc.buffer),Nc[0]=BigInt(1),w1=yu[0]===1),Nc[0]=n,new e(yu[n=w1?0:1],yu[1-n])):(gp||(E1=BigInt(Number.MIN_SAFE_INTEGER),T1=BigInt(Number.MAX_SAFE_INTEGER),A1=BigInt(4294967295),gp=BigInt(32)),n>=E1&&n<=T1?t(Number(n)):(n=BigInt.asUintN(64,n),new e(Number(n&A1),Number(n>>gp))))}function Us(n,e,t){for(;t>0||e>127;)n.h.push(127&e|128),e=(e>>>7|t<<25)>>>0,t>>>=7;n.h.push(e)}function Mo(n,e){for(;e>127;)n.h.push(127&e|128),e>>>=7;n.h.push(e)}function Qc(n,e){if(e>=0)Mo(n,e);else{for(let t=0;t<9;t++)n.h.push(127&e|128),e>>=7;n.h.push(1)}}function bA(n,e){Yc(e),(function(t){var i=Pt>>31;t(vt<<1^i,(Pt<<1|vt>>>31)^i)})((t,i)=>{Us(n,t>>>0,i>>>0)})}function Wc(n,e){n.h.push(e>>>0&255),n.h.push(e>>>8&255),n.h.push(e>>>16&255),n.h.push(e>>>24&255)}var EA=class{constructor(){this.h=[]}length(){return this.h.length}end(){var n=this.h;return this.h=[],n}};function uo(n,e){e.length!==0&&(n.l.push(e),n.i+=e.length)}function Fn(n,e,t){Mo(n.h,8*e+t)}function xm(n,e){return Fn(n,e,2),e=n.h.end(),uo(n,e),e.push(n.i),e}function vm(n,e){var t=e.pop();for(t=n.i+n.h.length()-t;t>127;)e.push(127&t|128),t>>>=7,n.i++;e.push(t),n.i++}function yv(n,e,t){if(t!=null)switch(Fn(n,e,0),typeof t){case"number":n=n.h,Qr(t),Us(n,vt,Pt);break;case"bigint":t=vv(t,Hu,MA),Us(n.h,t.i,t.h);break;default:t=xv(t),Us(n.h,t.i,t.h)}}function el(n,e,t){Fn(n,e,2),Mo(n.h,t.length),uo(n,n.h.end()),uo(n,t)}function Wu(n,e,t,i){t!=null&&(e=xm(n,e),i(t,n),vm(n,e))}var TA=class{constructor(){this.l=[],this.i=0,this.h=new EA}};function Sv(n){typeof n=="string"&&xv(n)}function Si(){var n=class{constructor(){throw Error()}};return Object.setPrototypeOf(n,n.prototype),n}var ym=Si(),Mv=Si(),Sm=Si(),ad=Si(),Mm=Si(),od=Si(),AA=Si(),wA=Si(),cd=Si(),RA=Si(),ld=Si(),bm=Si();function us(n,e,t){var i=n.B;ai&&ai in i&&(i=i[ai])&&delete i[e.h],e.i?e.u(n,e.i,e.h,t,e.l):e.u(n,e.h,t,e.l)}var ye=class{constructor(n,e){this.B=tv(n,e,void 0,2048)}toJSON(){return ev(this)}u(){var n=xw,e=this.B,t=n.h,i=ai;if(_o&&i&&e[i]?.[t]!=null&&oo($T,3),e=n.h,c1&&ai&&c1===void 0&&(i=(t=this.B)[ai])&&(i=i.la))try{i(t,e,pA)}catch(s){Rx(s)}return n.i?n.o(this,n.i,n.h,n.l):n.o(this,n.h,n.defaultValue,n.l)}clone(){var n=this.B,e=0|n[Pe];return cm(this,n,e)?am(this,n,!0):new this.constructor(yo(n,e,!1))}};ye.prototype[Ux]=Bx,ye.prototype.toString=function(){return this.B.toString()};var bo=class{constructor(n,e,t){this.h=n,this.i=e,n=ym,this.l=!!n&&t===n||!1}};function hd(n,e){return new bo(n,e,ym)}function bv(n,e,t,i,s){Wu(n,t,Tv(e,i),s)}var Np,Dp,CA=hd(function(n,e,t,i,s){return n.i===2&&(Zc(n,fm(e,i,t),s),!0)},bv),IA=hd(function(n,e,t,i,s){return n.i===2&&(Zc(n,fm(e,i,t),s),!0)},bv),ud=Symbol(),dd=Symbol(),Up=Symbol(),R1=Symbol(),C1=Symbol();function ia(n,e,t,i){var s=i[n];if(s)return s;(s={}).Fa=i,s.da=(function(u){switch(typeof u){case"boolean":return g1||(g1=[0,void 0,!0]);case"number":return u>0?void 0:u===0?_1||(_1=[0,void 0]):[-u,void 0];case"string":return[0,u];case"object":return u}})(i[0]);var r=i[1],a=1;r&&r.constructor===Object&&(s.ja=r,typeof(r=i[++a])=="function"&&(s.xa=!0,Np??(Np=r),Dp??(Dp=i[a+1]),r=i[a+=2]));for(var o={};r&&Array.isArray(r)&&r.length&&typeof r[0]=="number"&&r[0]>0;){for(var c=0;c<r.length;c++)o[r[c]]=r;r=i[++a]}for(c=1;r!==void 0;){let u;typeof r=="number"&&(c+=r,r=i[++a]);var l=void 0;if(r instanceof bo?u=r:(u=CA,a--),u?.l){r=i[++a],l=i;var h=a;typeof r=="function"&&(r=r(),l[h]=r),l=r}for(h=c+1,typeof(r=i[++a])=="number"&&r<0&&(h-=r,r=i[++a]);c<h;c++){let d=o[c];l?t(s,c,u,l,d):e(s,c,u,d)}}return i[n]=s}function Ev(n){return Array.isArray(n)?n[0]instanceof bo?n:[IA,n]:[n,void 0]}function Tv(n,e){return n instanceof ye?n.B:Array.isArray(n)?$r(n,e):void 0}function Em(n,e,t,i){var s=t.h;n[e]=i?(r,a,o)=>s(r,a,o,i):s}function Tm(n,e,t,i,s){var r,a,o=t.h;n[e]=(c,l,h)=>o(c,l,h,a||(a=ia(dd,Em,Tm,i).da),r||(r=Am(i)),s)}function Am(n){var e=n[Up];if(e!=null)return e;var t=ia(dd,Em,Tm,n);return e=t.xa?(i,s)=>Np(i,s,t):(i,s)=>{e:{_v();try{for(;gv(s)&&s.i!=4;){let d=s.l,f=t[d];if(f==null){let p=t.ja;if(p){let x=p[d];if(x){let g=LA(x);g!=null&&(f=t[d]=g)}}}if(f==null||!f(s,i,d)){var r=s;let p=r.o;if(Tu(r),r.sa)var a=void 0;else{let x=r.h.h-p;r.h.h=p,a=fv(r.h,x)}r=void 0;var o=i,c=d,l=a;l&&((r=o[ai]??(o[ai]=new Rp))[c]??(r[c]=[])).push(l)}}let u=nd(i);u&&(u.la=t.Fa[C1]);var h=!0;break e}catch(u){throw u instanceof RangeError?new SyntaxError:u}finally{ho>0&&ho--}h=void 0}return h},n[Up]=e,n[C1]=PA.bind(n),e}function PA(n,e,t,i){var s=this[dd],r=this[Up],a=$r(void 0,s.da),o=nd(n);if(o){var c=!1,l=s.ja;if(l){if(s=(h,u,d)=>{if(d.length!==0)if(l[u])for(let f of d){h=pv(f);try{c=!0,r(a,h)}finally{mv(h)}}else i?.(n,u,d)},e==null)Ou(o,s);else if(o!=null){let h=o[e];h&&s(o,e,h)}if(c){let h=0|n[Pe];if(2&h&&2048&h&&!t?.eb)throw Error();let u=xo(h),d=(f,p)=>{if(os(n,f,u)!=null){if(t?.mb===1)return;throw Error()}p!=null&&(h=Qt(n,h,f,p,u)),delete o[f]};e==null?kx(a,0|a[Pe],(f,p)=>{d(f,p)}):d(e,os(a,e,u))}}}}function LA(n){var e=(n=Ev(n))[0].h;if(n=n[1]){let t=Am(n),i=ia(dd,Em,Tm,n).da;return(s,r,a)=>e(s,r,a,i,t)}return e}function fd(n,e,t){n[e]=t.i}function pd(n,e,t,i){var s,r,a=t.i;n[e]=(o,c,l)=>a(o,c,l,r||(r=ia(ud,fd,pd,i).da),s||(s=Av(i)))}function Av(n){var e=n[R1];if(!e){let t=ia(ud,fd,pd,n);e=(i,s)=>wv(i,s,t),n[R1]=e}return e}function wv(n,e,t){kx(n,0|n[Pe],(i,s)=>{if(s!=null){var r=(function(a,o){var c=a[o];if(c)return c;if((c=a.ja)&&(c=c[o])){var l=(c=Ev(c))[0].i;if(c=c[1]){let h=Av(c),u=ia(ud,fd,pd,c).da;c=a.xa?Dp(u,h):(d,f,p)=>l(d,f,p,u,h)}else c=l;return a[o]=c}})(t,i);r?r(e,s,i):i<500||oo(Ep,3)}}),(n=nd(n))&&Ou(n,(i,s,r)=>{for(uo(e,e.h.end()),i=0;i<r.length;i++)uo(e,em(r[i])||new Uint8Array(0))})}var NA=ln(0);function Bs(n,e,t){if(Array.isArray(e)){var i=0|e[Pe];if(4&i)return e;for(var s=0,r=0;s<e.length;s++){let a=n(e[s]);a!=null&&(e[r++]=a)}return r<s&&(e.length=r),n=1|i,t&&(n=-1537&n|4),n!==i&&hn(e,n),t&&2&n&&Object.freeze(e),e}}var Rv=(n,e)=>{var t=new TA;wv(n.B,t,ia(ud,fd,pd,e)),uo(t,t.h.end()),n=new Uint8Array(t.i);var i=(e=t.l).length,s=0;for(let r=0;r<i;r++){let a=e[r];n.set(a,s),s+=a.length}return t.l=[n],n};function tn(n,e,t){return new bo(n,e,t)}function ks(n,e,t){return new bo(n,e,t)}function gn(n,e,t){Qt(n,0|n[Pe],e,t,xo(0|n[Pe]))}var DA=hd(function(n,e,t,i,s){if(n.i!==2)return!1;if(n=yi(n=Zc(n,$r([void 0,void 0],i),s)),s=xo(i=0|e[Pe]),2&i)throw Error();var r=os(e,t,s);if(r instanceof Fs)2&r.N?((r=r.fa()).push(n),Qt(e,i,t,r,s)):r.hb(n);else if(Array.isArray(r)){var a=0|r[Pe];8192&a||hn(r,a|=8192),2&a&&Qt(e,i,t,r=ov(r),s),r.push(n)}else Qt(e,i,t,Gc([n]),s);return!0},function(n,e,t,i,s){if(e instanceof Fs)e.forEach((r,a)=>{Wu(n,t,$r([a,r],i),s)});else if(Array.isArray(e)){for(let r=0;r<e.length;r++){let a=e[r];Array.isArray(a)&&Wu(n,t,$r(a,i),s)}Gc(e)}});function Cv(n,e,t){(e=ri(e))!=null&&(Fn(n,t,5),n=n.h,tm(e),Wc(n,vt))}function wm(n,e,t){(e=sm(e))!=null&&(Sv(e),yv(n,t,e))}function Iv(n,e,t){(e=ea(e))!=null&&e!=null&&(Fn(n,t,0),Qc(n.h,e))}function Pv(n,e,t){(e=e==null||typeof e=="boolean"?e:typeof e=="number"?!!e:void 0)!=null&&(Fn(n,t,0),n.h.h.push(e?1:0))}function Lv(n,e,t){(e=bn(e))!=null&&el(n,t,wx(e))}function Nv(n,e,t,i,s){Wu(n,t,Tv(e,i),s)}function Rm(n,e,t){(e=Jx(e))!=null&&el(n,t,rd(e,!0).buffer)}function Dv(n,e,t){(e=Wx(e))!=null&&e!=null&&(Fn(n,t,0),Mo(n.h,e))}function Uv(n,e,t){(e=ea(e))!=null&&(e=parseInt(e,10),Fn(n,t,0),Qc(n.h,e))}function Fv(n,e,t){return(n.i===5||n.i===2)&&(e=ur(e,0|e[Pe],t),n.i==2?Jc(n,zu,e):e.push(zu(n.h)),!0)}function Ov(n,e,t){return n.i===0&&(gn(e,t,ku(n.h)),!0)}function Bv(n,e,t){return(n.i===0||n.i===2)&&(e=ur(e,0|e[Pe],t),n.i==2?Jc(n,Os,e):e.push(Os(n.h)),!0)}function kv(n,e,t){return n.i===2&&(gn(e,t,(n=_m(n))===jr()?void 0:n),!0)}var I1=tn(function(n,e,t){if(n.i!==1)return!1;var i=n.h;n=Lp(i);var s=Lp(i);i=2*(s>>31)+1;var r=s>>>20&2047;return n=4294967296*(1048575&s)+n,gn(e,t,r==2047?n?NaN:i*(1/0):r==0?5e-324*i*n:i*Math.pow(2,r-1075)*(n+4503599627370496)),!0},function(n,e,t){(e=ri(e))!=null&&(Fn(n,t,1),n=n.h,(t=Nu||(Nu=new DataView(new ArrayBuffer(8)))).setFloat64(0,+e,!0),vt=t.getUint32(0,!0),Pt=t.getUint32(4,!0),Wc(n,vt),Wc(n,Pt))},RA),Kt=tn(function(n,e,t){return n.i===5&&(gn(e,t,zu(n.h)),!0)},Cv,cd),UA=ks(Fv,function(n,e,t){if((e=Bs(ri,e,!0))!=null)for(let a=0;a<e.length;a++){var i=n,s=t,r=e[a];r!=null&&(Fn(i,s,5),i=i.h,tm(r),Wc(i,vt))}},cd),Cm=ks(Fv,function(n,e,t){if((e=Bs(ri,e,!0))!=null&&e.length){Fn(n,t,2),Mo(n.h,4*e.length);for(let i=0;i<e.length;i++)t=n.h,tm(e[i]),Wc(t,vt)}},cd),zv=tn(function(n,e,t){return n.i===5&&(gn(e,t,(n=zu(n.h))===0?void 0:n),!0)},Cv,cd),Dc=tn(function(n,e,t){return Ov(n,e,t)},wm,od),Gt=tn(function(n,e,t){return Ov(n,e,t)},wm,od),FA=ks(function(n,e,t){return n.i!==0&&n.i!==2?n=!1:(e=ur(e,0|e[Pe],t),n.i==2?Jc(n,ku,e):e.push(ku(n.h)),n=!0),n},function(n,e,t){if((e=Bs(sm,e,!1))!=null)for(let i=0;i<e.length;i++)yv(n,t,e[i])},od),Au=tn(function(n,e,t){return n.i!==0?e=!1:(gn(e,t,(n=ku(n.h))===NA?void 0:n),e=!0),e},wm,od),Xu=tn(function(n,e,t){return n.i!==0?n=!1:(gn(e,t,pm(n.h,iA)),n=!0),n},function(n,e,t){if(e=(function(i){if(i==null)return i;var s=typeof i;if(s==="bigint")return String(wp(64,i));if(vo(i)){if(s==="string")return s=or(Number(i)),as(s)&&s>=0?i=String(s):((s=i.indexOf("."))!==-1&&(i=i.substring(0,s)),i=$x(i)),i;if(s==="number")return Yx(i)}})(e),e!=null&&(typeof e=="string"&&S1(e),e!=null))switch(Fn(n,t,0),typeof e){case"number":n=n.h,Qr(e),Us(n,vt,Pt);break;case"bigint":t=vv(e,Vu,SA),Us(n.h,t.i,t.h);break;default:t=S1(e),Us(n.h,t.i,t.h)}},AA),mt=tn(function(n,e,t){return n.i===0&&(gn(e,t,Os(n.h)),!0)},Iv,ad),P1=ks(Bv,function(n,e,t){if((e=Bs(ea,e,!0))!=null)for(let a=0;a<e.length;a++){var i=n,s=t,r=e[a];r!=null&&(Fn(i,s,0),Qc(i.h,r))}},ad),Eo=ks(Bv,function(n,e,t){if((e=Bs(ea,e,!0))!=null&&e.length){t=xm(n,t);for(let i=0;i<e.length;i++)Qc(n.h,e[i]);vm(n,t)}},ad),Xr=tn(function(n,e,t){return n.i===0&&(gn(e,t,(n=Os(n.h))===0?void 0:n),!0)},Iv,ad),Qe=tn(function(n,e,t){return n.i===0&&(gn(e,t,mm(n.h)),!0)},Pv,Mv),ar=tn(function(n,e,t){return n.i===0&&(gn(e,t,(n=mm(n.h))===!1?void 0:n),!0)},Pv,Mv),Mn=ks(function(n,e,t){return n.i===2&&(n=gm(n),ur(e,0|e[Pe],t).push(n),!0)},function(n,e,t){if((e=Bs(bn,e,!0))!=null)for(let a=0;a<e.length;a++){var i=n,s=t,r=e[a];r!=null&&el(i,s,wx(r))}},Sm),Is=tn(function(n,e,t){return n.i===2&&(gn(e,t,(n=gm(n))===""?void 0:n),!0)},Lv,Sm),le=tn(function(n,e,t){return n.i===2&&(gn(e,t,gm(n)),!0)},Lv,Sm),kt=(function(n,e,t=ym){return new bo(n,e,t)})(function(n,e,t,i,s){return n.i===2&&(i=$r(void 0,i),ur(e,0|e[Pe],t).push(i),Zc(n,i,s),!0)},function(n,e,t,i,s){if(Array.isArray(e)){for(let r=0;r<e.length;r++)Nv(n,e[r],t,i,s);1&(n=0|e[Pe])||hn(e,1|n)}}),ft=hd(function(n,e,t,i,s,r){if(n.i!==2)return!1;var a=0|e[Pe];return lv(e,a,r,t,xo(a)),Zc(n,e=fm(e,i,t),s),!0},Nv),io=tn(function(n,e,t){return n.i===2&&(gn(e,t,_m(n)),!0)},Rm,ld),Gv=ks(function(n,e,t){return n.i===2&&(n=_m(n),ur(e,0|e[Pe],t).push(n),!0)},function(n,e,t){if((e=Bs(Jx,e,!1))!=null)for(let a=0;a<e.length;a++){var i=n,s=t,r=e[a];r!=null&&el(i,s,rd(r,!0).buffer)}},ld),Vv=tn(function(n,e,t){return n.i===0&&(gn(e,t,ls(n.h)),!0)},Dv,Mm),OA=ks(function(n,e,t){return(n.i===0||n.i===2)&&(e=ur(e,0|e[Pe],t),n.i==2?Jc(n,ls,e):e.push(ls(n.h)),!0)},function(n,e,t){if((e=Bs(Wx,e,!0))!=null)for(let a=0;a<e.length;a++){var i=n,s=t,r=e[a];r!=null&&(Fn(i,s,0),Mo(i.h,r))}},Mm),BA=tn(function(n,e,t){return n.i===0&&(gn(e,t,(n=ls(n.h))===0?void 0:n),!0)},Dv,Mm),Ie=tn(function(n,e,t){return n.i===0&&(gn(e,t,Os(n.h)),!0)},Uv,bm),wu=tn(function(n,e,t){return n.i===0&&(gn(e,t,(n=Os(n.h))===0?void 0:n),!0)},Uv,bm),kA=tn(function(n,e,t){return n.i!==0?n=!1:(gn(e,t,(function(i){return pm(i,(s,r)=>{var a=-(1&s);return Vx(s=(s>>>1|r<<31)^a,r>>>1^a)})})(n.h)),n=!0),n},function(n,e,t){if((e=sm(e))!=null&&(Sv(e),e!=null))switch(Fn(n,t,0),typeof e){case"number":n=n.h,e=(t=e)<0,Ap(t=2*Math.abs(t)),t=vt;let i=Pt;e&&(t==0?i==0?i=t=4294967295:(i--,t=4294967295):t--),Us(n,vt=t,Pt=i);break;case"bigint":n=n.h,e=e<<BigInt(1)^e>>BigInt(63),vt=Number(BigInt.asUintN(32,e)),Pt=Number(BigInt.asUintN(32,e>>BigInt(32))),Us(n,vt,Pt);break;default:bA(n.h,e)}},wA),Fp=class{constructor(e,t){var i=li;this.h=e,this.i=t,this.o=St,this.u=ke,this.defaultValue=void 0,this.l=i.kb!=null?zx:void 0}register(){Zu(this)}};function ds(n,e){return new Fp(n,e)}function dr(n,e){return(t,i)=>{e:{let r={na:!0};i&&Object.assign(r,i),t=pv(t,void 0,void 0,r);try{let a=new n,o=a.B;Am(e)(o,t);var s=a;break e}catch(a){throw a instanceof RangeError?new SyntaxError:a}finally{mv(t)}s=void 0}return s}}function Im(n){return e=>Rv(e,n)}function tl(n){return function(){return Rv(this,n)}}var zA=[0,io,Gv,Qe,le],GA=[0,Is,[0,wu,[0,Au,Xr],wu,-1,[0,Ie],wu,-1],tn(kv,Rm,ld)],_p,L1=class extends ye{constructor(n){super(n)}},N1=[0,Is,tn(kv,function(n,e,t){if(e!=null){if(e instanceof ye){let i=e.nb;return void(i?(e=i(e),e!=null&&el(n,t,rd(e,!0).buffer)):oo(Ep,3))}if(Array.isArray(e))return void oo(Ep,3)}Rm(n,e,t)},ld)],VA=[0,1,[0,12,mt,10,Qe],[0,7,[0,mt,-1]]],D1=globalThis.trustedTypes,HA=class{constructor(n){this.h=n}toString(){return this.h+""}};function U1(n){var e;return _p===void 0&&(_p=(function(){var t=null;if(!D1)return t;try{let i=s=>s;t=D1.createPolicy("goog#html",{createHTML:i,createScript:i,createScriptURL:i})}catch{}return t})()),n=(e=_p)?e.createScriptURL(n):n,new HA(n)}function Vr(n,...e){if(e.length===0)return U1(n[0]);var t=n[0];for(let i=0;i<e.length;i++)t+=encodeURIComponent(e[i])+n[i+1];return U1(t)}var Hv=[0,mt,Ie,Qe,-1,Eo,Ie,-1,Qe,-1],Wv=[0,Ie,-1,Qe],Xv=class extends ye{constructor(n){super(n)}},qv=[0,Qe,le,Qe,Ie,-1,ks(function(n,e,t){return(n.i===0||n.i===2)&&(e=ur(e,0|e[Pe],t),n.i==2?Jc(n,xA,e):e.push(Os(n.h)),!0)},function(n,e,t){if((e=Bs(ea,e,!0))!=null&&e.length){t=xm(n,t);for(let i=0;i<e.length;i++)Qc(n.h,e[i]);vm(n,t)}},bm),le,-1,[0,Qe,-1],Ie,Qe,-1,Wv],WA=class extends ye{constructor(n){super(n)}},XA=class extends ye{constructor(n){super(n)}},$v=class extends ye{constructor(n){super(n)}h(){return iv(this,9)}},Yv=[0,3,Qe,-1,2,[0,[2],mt,ft,[0,Vv]],[0,Ie,Qe,Ie,Qe,Ie,4,[0,Qe,le,-1,Qe],Ie,Qe,-1],[0,[3,4],le,-1,ft,[0,mt],ft,[0,Ie,-1]],[0],le,Qe],Kv=[0,le,-2],F1=class extends ye{constructor(n){super(n)}},jv=[0],qA=class extends ye{constructor(n){super(n)}},Zv=[0,mt,Qe,1,Qe,-4],li=class extends ye{constructor(n){super(n,2)}},mn={};mn[336783863]=[0,le,Qe,-1,mt,[0,[1,2,3,4,5,6,7,8,9],ft,jv,ft,qv,ft,Kv,ft,Zv,ft,Hv,ft,[0,le,-2],ft,[0,le,Ie],ft,Yv,ft,Wv],[0,le],Qe,[0,[1,3],[2,4],ft,[0,Eo],-1,ft,[0,Mn],-1,kt,[0,le,-1]],le];var O1=[0,Au,-1,ar,-3,Au,Eo,Is,Xr,Au,-1,ar,Xr,ar,-2,Is];function Wt(n,e){sd(n,3,e)}function gt(n,e){sd(n,4,e)}var jn=class extends ye{constructor(n){super(n,500)}A(n){return ke(this,0,7,n)}},kc=[-1,{}],B1=[0,le,1,kc],k1=[0,le,Mn,kc];function Mi(n,e){Hc(n,1,jn,e)}function $t(n,e){sd(n,10,e)}function bt(n,e){sd(n,15,e)}var hi=class extends ye{constructor(n){super(n,500)}A(n){return ke(this,0,1001,n)}},Jv=[-500,kt,[-500,Is,-1,Mn,-3,[-2,mn,Qe],kt,N1,Xr,-1,B1,k1,kt,[0,Is,ar],Is,O1,Xr,Mn,987,Mn],4,kt,[-500,le,-1,[-1,{}],998,le],kt,[-500,le,Mn,-1,[-2,{},Qe],997,Mn,-1],Xr,kt,[-500,le,Mn,kc,998,Mn],Mn,Xr,B1,k1,kt,[0,Is,-1,kc],Mn,-2,O1,Is,-1,ar,[0,ar,BA],978,kc,kt,N1];hi.prototype.h=tl(Jv);var $A=dr(hi,Jv),YA=class extends ye{constructor(n){super(n)}},Qv=class extends ye{constructor(n){super(n)}h(){return na(this,YA,1)}},ey=[0,kt,[0,mt,Kt,le,-1]],md=dr(Qv,ey),KA=class extends ye{constructor(n){super(n)}},jA=class extends ye{constructor(n){super(n)}},xp=class extends ye{constructor(n){super(n)}l(){return St(this,KA,2)}h(){return na(this,jA,5)}},ty=dr(class extends ye{constructor(n){super(n)}},[0,Mn,Eo,Cm,[0,Ie,[0,mt,-3],[0,Kt,-3],[0,mt,-1,[0,kt,[0,mt,-2]]],kt,[0,Kt,-1,le,Kt]],le,-1,Gt,kt,[0,mt,Kt],Mn,Gt]),ZA=class extends ye{constructor(n){super(n)}},so=dr(class extends ye{constructor(n){super(n)}},[0,kt,[0,Kt,-4]]),JA=class extends ye{constructor(n){super(n)}},nl=dr(class extends ye{constructor(n){super(n)}},[0,kt,[0,Kt,-4]]),QA=class extends ye{constructor(n){super(n)}},ew=[0,mt,-1,Cm,Ie],ny=class extends ye{constructor(n){super(n)}};ny.prototype.h=tl([0,Kt,-4,Gt]);var tw=class extends ye{constructor(n){super(n)}},nw=dr(class extends ye{constructor(n){super(n)}},[0,kt,[0,1,mt,le,ey],Gt]),iw=class extends ye{constructor(n){super(n)}},sw=class extends ye{constructor(n){super(n)}h(){var n=Ht(this,1,void 0,av);return n??jr()}},rw=class extends ye{constructor(n){super(n)}},Ru=[1,2],aw=dr(class extends ye{constructor(n){super(n)}},[0,kt,[0,Ru,ft,[0,Cm],ft,[0,io],mt,le],Gt]),Pm=class extends ye{constructor(n){super(n)}},iy=[0,le,mt,Kt,Mn,-1],z1=class extends ye{constructor(n){super(n)}},ow=[0,Qe,-1],qu=class extends ye{constructor(n){super(n)}h(){return sv(this,2,Ns)}l(){return Ip(this,$v,6,Ns)}},Ns=[1,2,3,4,5,6],$u=class extends ye{constructor(n){super(n)}h(){return Ht(this,1,void 0,av)!=null}l(){return bn(Ht(this,2))!=null}},Yt=class extends ye{constructor(n){super(n)}},sy=[0,io,le,[0,mt,Gt,-1],[0,Xu,Gt]],en=[0,sy,Qe,[0,Ns,ft,Zv,ft,qv,ft,Hv,ft,jv,ft,Kv,ft,Yv],Ie],cw=Im(en),gd=class extends ye{constructor(n){super(n)}},Lm=[0,en,Kt,-1,mt],lw=ds(502141897,gd);mn[502141897]=Lm;var hw=dr(class extends ye{constructor(n){super(n)}},[0,[0,Ie,-1,UA,OA],ew]),ry=class extends ye{constructor(n){super(n)}},ay=class extends ye{constructor(n){super(n)}},Op=[0,en,Kt,[0,en],Qe],uw=ds(508968150,ay);mn[508968150]=[0,en,Lm,Op,Kt,[0,[0,sy]]],mn[508968149]=Op;var to=class extends ye{constructor(n){super(n)}l(){return St(this,Pm,2)}h(){et(this,2)}},oy=[0,en,iy];mn[478825465]=oy;var dw=class extends ye{constructor(n){super(n)}},cy=class extends ye{constructor(n){super(n)}},Nm=class extends ye{constructor(n){super(n)}},Dm=class extends ye{constructor(n){super(n)}},ly=class extends ye{constructor(n){super(n)}},G1=[0,en,[0,en],oy,-1],hy=[0,en,Kt,mt],Um=[0,en,Kt],uy=[0,en,hy,Um,Kt],fw=ds(479097054,ly);mn[479097054]=[0,en,uy,G1],mn[463370452]=G1,mn[464864288]=hy;var pw=ds(462713202,Dm);mn[462713202]=uy,mn[474472470]=Um;var mw=class extends ye{constructor(n){super(n)}},dy=class extends ye{constructor(n){super(n)}},fy=class extends ye{constructor(n){super(n)}},py=class extends ye{constructor(n){super(n)}},Fm=[0,en,Kt,-1,mt],Bp=[0,en,Kt,Qe];py.prototype.h=tl([0,en,Um,[0,en],Lm,Op,Fm,Bp]);var my=class extends ye{constructor(n){super(n)}},gw=ds(456383383,my);mn[456383383]=[0,en,iy];var gy=class extends ye{constructor(n){super(n)}},_w=ds(476348187,gy);mn[476348187]=[0,en,ow];var _y=class extends ye{constructor(n){super(n)}},V1=class extends ye{constructor(n){super(n)}},xy=[0,Ie,-1],xw=ds(458105876,class extends ye{constructor(n){super(n)}h(){var n=this.B,e=0|n[Pe],t=Kn(this,e);return n=(function(i,s,r,a){var o=V1;!a&&So(i)&&(r=0|(s=i.B)[Pe]);var c=os(s,2);if(i=!1,c==null){if(a)return m1();c=[]}else if(c.constructor===Fs){if(!(2&c.N)||a)return c;c=c.fa()}else Array.isArray(c)?i=!!(2&c[Pe]):c=[];if(a){if(!c.length)return m1();i||(i=!0,$c(c))}else i&&(i=!1,Gc(c),c=ov(c));return!i&&32&r&&qc(c,32),r=Qt(s,r,2,a=new Fs(c,o,aA,void 0)),i||cr(s,r),a})(this,n,e,t),!t&&V1&&(n.Ga=!0),n}});mn[458105876]=[0,xy,DA,[!0,Gt,[0,le,-1,Mn]],[0,Eo,Qe,Ie],Qe];var Om=class extends ye{constructor(n){super(n)}},vy=ds(458105758,Om);mn[458105758]=[0,en,le,xy];var vw=class extends ye{constructor(n){super(n)}},yw=class extends ye{constructor(n){super(n)}},Sw=class extends ye{constructor(n){super(n)}},Mw=Im([0,kt,[0,wu,kt,[0,zv,-1],ar]]),vp=class extends ye{constructor(n){super(n)}},H1=[0,zv,-1,ar],bw=class extends ye{constructor(n){super(n)}},yy=class extends ye{constructor(n){super(n)}},kp=[1,2];yy.prototype.h=tl([0,kp,ft,H1,ft,[0,kt,H1]]);var Sy=class extends ye{constructor(n){super(n)}},Ew=ds(443442058,Sy);mn[443442058]=[0,en,le,mt,Kt,Mn,-1,Qe,Kt],mn[514774813]=Fm;var My=class extends ye{constructor(n){super(n)}},Tw=ds(516587230,My);function zp(n,e){return e=e?e.clone():new Pm,n.displayNamesLocale!==void 0?et(e,1,Ls(n.displayNamesLocale)):n.displayNamesLocale===void 0&&et(e,1),n.maxResults!==void 0?cs(e,2,n.maxResults):"maxResults"in n&&et(e,2),n.scoreThreshold!==void 0?Ve(e,3,n.scoreThreshold):"scoreThreshold"in n&&et(e,3),n.categoryAllowlist!==void 0?Bu(e,4,n.categoryAllowlist):"categoryAllowlist"in n&&et(e,4),n.categoryDenylist!==void 0?Bu(e,5,n.categoryDenylist):"categoryDenylist"in n&&et(e,5),e}function by(n){var e=Number(n);return Number.isSafeInteger(e)?e:String(n)}function Bm(n,e=-1,t=""){return{categories:n.map(i=>({index:vi(i,1)??0??-1,score:Dn(i,2)??0,categoryName:bn(Ht(i,3))??""??"",displayName:bn(Ht(i,4))??""??""})),headIndex:e,headName:t}}function Aw(n){var e={classifications:na(n,tw,1).map(t=>Bm(St(t,Qv,4)?.h()??[],vi(t,2)??0,bn(Ht(t,3))??""))};return(function(t){return t==null?t:typeof t=="bigint"?(Tp(t)?t=Number(t):(t=qr(64,t),t=Tp(t)?Number(t):String(t)),t):vo(t)?typeof t=="number"?td(t):Uu(t):void 0})(Ht(n,2,void 0,Fu))!=null&&(e.timestampMs=by(Ht(n,2,void 0,Fu)??nv)),e}function Ey(n){var e=Wr(n,3,ri),t=Wr(n,2,ea),i=Wr(n,1,bn),s=Wr(n,9,bn),r={categories:[],keypoints:[]};for(let a=0;a<e.length;a++)r.categories.push({score:e[a],index:t[a]??-1,categoryName:i[a]??"",displayName:s[a]??""});if((e=St(n,xp,4)?.l())&&(r.boundingBox={originX:vi(e,1,nr)??0,originY:vi(e,2,nr)??0,width:vi(e,3,nr)??0,height:vi(e,4,nr)??0,angle:0}),St(n,xp,4)?.h().length)for(let a of St(n,xp,4).h())r.keypoints.push({x:Ht(a,1,nr,ri)??0,y:Ht(a,2,nr,ri)??0,score:Ht(a,4,nr,ri)??0,label:bn(Ht(a,3,nr))??""});return r}function il(n){var e=[];for(let t of na(n,JA,1))n={x:Dn(t,1)??0,y:Dn(t,2)??0,z:Dn(t,3)??0,visibility:Dn(t,4)??0},Ht(t,5,void 0,ri)!=null&&(n.presence=Dn(t,5)??0),e.push(n);return e}function ro(n){var e=[];for(let t of na(n,ZA,1))n={x:Dn(t,1)??0,y:Dn(t,2)??0,z:Dn(t,3)??0,visibility:Dn(t,4)??0},Ht(t,5,void 0,ri)!=null&&(n.presence=Dn(t,5)??0),e.push(n);return e}function W1(n){return Array.from(n,e=>e>127?e-256:e)}function X1(n,e){if(n.length!==e.length)throw Error(`Cannot compute cosine similarity between embeddings of different sizes (${n.length} vs. ${e.length}).`);var t=0,i=0,s=0;for(let r=0;r<n.length;r++)t+=n[r]*e[r],i+=n[r]*n[r],s+=e[r]*e[r];if(i<=0||s<=0)throw Error("Cannot compute cosine similarity on embedding with 0 norm.");return t/Math.sqrt(i*s)}mn[516587230]=[0,en,Fm,Bp,Kt],mn[518928384]=Bp;var Su,ww=new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,10,1,8,0,65,0,253,15,253,98,11]);async function Ty(n){if(n)return!0;if(Su===void 0)try{await WebAssembly.instantiate(ww),Su=!0}catch{Su=!1}return Su}async function Hr(n,e,t){return{wasmLoaderPath:`${e}/${n}_${t=`wasm${t?"_module":""}${await Ty(t)?"":"_nosimd"}_internal`}.js`,wasmBinaryPath:`${e}/${n}_${t}.wasm`}}var is=class{};function q1(n){return et(new Gp,1,Ds(n))}is.forVisionTasks=function(n,e=!1){return Hr("vision",n??Vr``,e)},is.forLiteRtLmTextTasks=function(n,e=!1){return Hr("litertlm_text",n??Vr``,e)},is.forTextTasks=function(n,e=!1){return Hr("text",n??Vr``,e)},is.forRetrievalTasks=function(n,e=!1){return Hr("retrieval",n??Vr``,e)},is.forGenAiTasks=function(n,e=!1){return Hr("genai",n??Vr``,e)},is.forDecisionTasks=function(n,e=!1){return Hr("decision",n??Vr``,e)},is.forAudioTasks=function(n,e=!1){return Hr("audio",n??Vr``,e)},is.isSimdSupported=function(n=!1){return Ty(n)};var Gp=class extends ye{constructor(n){super(n)}},Rw=class extends ye{constructor(n){super(n)}},$1=[0,Ie,2,Xu,-2,Gt,kt,[0,Ie,Gt]],Cw=class extends ye{constructor(n){super(n)}},Iw=class extends ye{constructor(n){super(n)}};function Vp(n,e){return et(n,1,Ds(e))}function Hp(n,e){return et(n,2,Ds(e))}var Wp=class extends ye{constructor(n){super(n)}},Yu=[3,4,5,6,7],Pw=class extends ye{constructor(n){super(n)}},Ay=class extends ye{constructor(n){super(n)}};Ay.prototype.h=tl([0,[0,Ie,le,-3,Ie],[0,Yu,Ie,-1,ft,[0,Ie,le,Xu],ft,$1,ft,[0,1,$1],ft,[0,Ie],ft,[0,Ie,le,Xu]]]);var Lw=class{constructor(){this.h=typeof AbortController<"u"}async send(n,e,t){var i=this.h?new AbortController:void 0,s=i&&n.ma>0?setTimeout(()=>{i.abort()},n.ma):void 0;try{let r=await fetch(n.url,{method:n.cb,headers:{...n.bb},...n.body&&{body:n.body},...n.withCredentials&&{credentials:"include"},signal:n.ma&&i?i.signal:null});r.status===200?e?.(await r.text()):t?.(r.status)}catch(r){r?.name==="AbortError"?t?.(408):t?.(400)}finally{clearTimeout(s)}}},Nw=class extends ye{constructor(n){super(n,37)}},Y1=[-4,{},VA,Ie,GA],K1=[0,le,Ie,1,le,-1,Ie,1,Ie,1,Gt],j1=[0,Ie,le,-2],Z1=[0,le,Ie],J1=[0,le,Ie],Q1=[0,Qe,-3],ex=[0,Ie,le,-1,Gt,mt,-1,le,-5,kt,[0,le,-4],-1,Qe,[0,Qe,-3],Ie],Dw=class extends ye{constructor(n){super(n,19)}},Uw=Im([-19,{},[0,Ie,1,[0,le,-6,Gt,mt,le,-1,Gt],1,[0,le,1,le,-5],le,-1,[0,Ie,le,-8],[0,le,-3],[0,le,Ie,le,-2],[0,le,-1,Ie,le,-1,Ie,le,-1,[0,kt,[0,le,-1],Qe,le,-5],[0,Ie,Qe,mt,-2]],Gt,[0,le,-3,Gt,mt,le,-1],[0,Ie,le,-1],[0,le,-9],[0,le,-6,Ie,le,1,le,Qe,Ie,-1,Qe,le,-2,Ie,le,Ie,le,mt,-1],1,[0,Ie],1,[0,le,-4],1,K1,[0,[1,2,3,4,5,6],ft,K1,ft,Z1,ft,J1,ft,[0,Ie],ft,ex,ft,j1],Z1,J1,ex,[0,[0,Ie,le,-1,Gt,mt,-1,le,-4,kt,[0,le,-4],-1,1,Q1],[0,Ie,le,-1,Gt,mt,-1,le,-4,Q1]],j1,[0,le,[0,mt,-3,Ie],Ie,-2,[0,mt,-1],Qe],4,[0,le,Ie,le,-1,Gt,Ie,le,-1,Ie,mt,-1]],Ie,kt,[-37,{},Dc,le,kt,[0,le,-1],io,1,io,[0,Mn,-1,P1,FA,-1],le,[0,mt,le,-1],Qe,mt,Gt,le,-1,kA,zA,Dc,io,Ie,P1,Gt,-1,[0,Ie,-1],le,Qe,le,Eo,le,-1,I1,1,I1,Y1,Qe,[0,Ie,[0,Kt,mt,-2],[0,Kt]],[0,Ie,Gt]],Dc,Gv,le,-1,Dc,Ie,-1,[0,Qe,-1,Ie,Qe],[0,Gt,-1,le],[0,Dc,Qe,Gt],Gt,1,Vv,1,Y1]),Fw=class{constructor(n){this.i=[],this.o=new Lw,this.l=n??"",this.h=setInterval(()=>{this.flush()},6e4)}close(){this.h!==void 0&&(clearInterval(this.h),this.h=void 0),this.flush()}flush(n,e){if(this.error)e?.("net-send-failed");else if(this.i.length===0)n?.();else{var t=this.i;this.i=[],t=(function(i){var s=new Dw;return Cp(s=et(s,2,Ds(1786)),3,i)})(t),t=Uw(t),this.o.send({url:"https://odml.pa.googleapis.com/v1/log",cb:"POST",ma:1e4,body:t,ib:2,bb:{"Content-Type":"application/x-protobuf","x-goog-api-key":this.l},withCredentials:!1},()=>{n?.()},i=>{this.error=Error(`Logging failed with HTTP error: ${i}`),this.i=[],this.h!==void 0&&(clearInterval(this.h),this.h=void 0),e?.("net-send-failed",i)})}}},Ku=class{constructor(){this.ba=this.V=this.Y=this.S=this.W=this.U=this.R=0}};function Xp(n,e){var t=new Ay;t=ke(t,0,1,n.C),t=ke(t,0,2,e),e=et(e=new Nw,6,Ju(t=t.h(),!1)),(n=n.m).error||n.i.push(e)}function tx(n,e){var t={R:e.R-n.l.R,U:e.U-n.l.U,W:e.W-n.l.W,S:e.S-n.l.S,Y:e.Y-n.l.Y,V:e.V,ba:e.ba},i=Hp(Vp(new Wp,n.D),1);t=wy(n,t),Xp(n,i=Fi(i,4,Yu,t)),n.l=e}function wy(n,e){var t=new Rw;return n=Eu(n=mp(n=et(t,1,Ds(n.F)),7,e.S),5,e.V),n=Eu(n,6,e.ba),e.W>0&&Eu(n,4,e.Y/e.W),e.R!==0&&(t=mp(t=q1(3),2,e.R),Hc(n,8,Gp,t)),e.U!==0&&(e=mp(t=q1(4),2,e.U),Hc(n,8,Gp,e)),n}var Ow=class{constructor(n,e,t){this.v=performance.now(),this.o=performance.now(),this.i=new Map,this.u=0,this.h=new Ku,this.l=new Ku,this.m=new Fw(t),this.D=(function(i){switch(i){case"AudioClassifier":return 4;case"AudioEmbedder":return 5;case"TextClassifier":return 6;case"TextEmbedder":return 7;case"GestureRecognizer":return 8;case"HandDetector":return 9;case"HandLandmarker":return 10;case"ImageClassifier":return 11;case"ImageEmbedder":return 12;case"ImageSegmenter":return 13;case"ObjectDetector":return 14;case"FaceDetector":return 15;case"FaceLandmarker":return 16;case"InteractiveSegmenter":case"InteractiveSegmenterLegacy":return 18;case"HolisticLandmarker":return 20;case"LlmInference":return 21;case"LanguageDetector":return 22;case"PoseLandmarker":return 23;case"UniversalEmbedder":return 28;case"SemanticRetriever":return 29;case"DecisionMaker":return 30;case"TextSummarizer":return 26;case"TextProofreader":return 27;case"AudioTranscriber":return 31;default:return 0}})(n),this.F=(function(i){switch(i){case"IMAGE":return 11;case"VIDEO":return 12;case"LIVE_STREAM":return 13;case"AUDIO_CLIPS":return 14;case"AUDIO_STREAM":return 15;default:return 10}})(e),n=new Pw,typeof window>"u"?e=0:(e=navigator.userAgent,e=/Android/i.test(e)?1:/iPhone|iPad|iPod/i.test(e)?2:/Windows/i.test(e)?5:/Macintosh/i.test(e)?4:/Linux/i.test(e)?3:0),n=et(n,1,Ds(e)),n=et(n,2,Ls("")),n=et(n,3,Ls("")),n=et(n,4,Ls("1.1.1")),n=et(n,5,Ls("")),this.C=et(n,6,Ds(4))}za(){var n=new Iw;n=Eu(n=et(n,1,Ds(this.F)),3,performance.now()-this.v),Xp(this,n=Fi(Hp(Vp(new Wp,this.D),0),3,Yu,n)),this.o=performance.now()}Aa(n){var e=this.i.get(n);if(e!==void 0&&(this.i.delete(n),n=performance.now()-e,++this.h.W,this.h.Y+=n,this.h.V=Math.max(this.h.V,n),this.u=Math.max(this.u,n),performance.now()>this.o+3e4)){for(let[t,i]of this.i.entries())n=t,i<e&&(this.h.S++,this.i.delete(n));e={...this.h,ba:performance.now()-this.o},this.h.V=0,this.o=performance.now(),tx(this,e)}}ya(){var n={...this.h,S:this.h.S+this.i.size,V:this.u,ba:performance.now()-this.v};tx(this,n);var e=new Cw;e=ke(e,0,2,n=wy(this,n)),Xp(this,e=Fi(n=Hp(Vp(new Wp,this.D),2),5,Yu,e))}close(){var n=this.m;typeof n.close=="function"?n.close():n.flush()}};function km(){var n=navigator;return typeof OffscreenCanvas<"u"&&(!(function(e=navigator){return(e=e.userAgent).includes("Safari")&&!e.includes("Chrome")})(n)||!!((n=n.userAgent.match(/Version\/([\d]+).*Safari/))&&n.length>=1&&Number(n[1])>=17))}async function nx(n){if(typeof importScripts!="function"){let e=document.createElement("script");return e.src=n.toString(),e.crossOrigin="anonymous",new Promise((t,i)=>{e.addEventListener("load",()=>{t()},!1),e.addEventListener("error",s=>{i(s)},!1),document.body.appendChild(e)})}try{importScripts(n.toString())}catch(e){if(!(e instanceof TypeError))throw e;{let t=self.import;t?await t(n.toString()):await import(n.toString())}}}function zm(n){return n.videoWidth!==void 0?[n.videoWidth,n.videoHeight]:n.naturalWidth!==void 0?[n.naturalWidth,n.naturalHeight]:n.displayWidth!==void 0?[n.displayWidth,n.displayHeight]:[n.width,n.height]}function Be(n,e,t){n.o||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target"),t(e=n.j.stringToNewUTF8(e)),n.j._free(e)}function Ry(n,e,t){if(!n.j.canvas)throw Error("No OpenGL canvas configured.");if(t?n.j._bindTextureToStream(t):n.j._bindTextureToCanvas(),!(t=n.j.canvas.getContext("webgl2")||n.j.canvas.getContext("webgl")))throw Error("Failed to obtain WebGL context from the provided canvas. `getContext()` should only be invoked with `webgl` or `webgl2`.");n.j.gpuOriginForWebTexturesIsBottomLeft&&t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!0),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,e),n.j.gpuOriginForWebTexturesIsBottomLeft&&t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1);var[i,s]=zm(e);return!n.l||i===n.j.canvas.width&&s===n.j.canvas.height||(n.j.canvas.width=i,n.j.canvas.height=s),[i,s]}function ix(n,e,t){n.o||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target");var i=new Uint32Array(e.length);for(let s=0;s<e.length;s++)i[s]=n.j.stringToNewUTF8(e[s]);e=n.j._malloc(4*i.length),n.j.HEAPU32.set(i,e>>2),t(e);for(let s of i)n.j._free(s);n.j._free(e)}function ns(n,e,t){n.j.simpleListeners=n.j.simpleListeners||{},n.j.simpleListeners[e]=t}function ir(n,e,t){var i=[];n.j.simpleListeners=n.j.simpleListeners||{},n.j.simpleListeners[e]=(s,r,a)=>{r?(t(i,a),i=[]):i.push(s)}}var Cy=class{constructor(n,e){this.l=!0,this.j=n,this.h=null,this.i=0,this.o=typeof this.j._addIntToInputStream=="function",e!==void 0?this.j.canvas=e:km()?this.j.canvas=new OffscreenCanvas(1,1):(console.warn("OffscreenCanvas not supported and GraphRunner constructor glCanvas parameter is undefined. Creating backup canvas."),this.j.canvas=document.createElement("canvas"))}async initializeGraph(n){var e=await(await fetch(n)).arrayBuffer();n=!(n.endsWith(".pbtxt")||n.endsWith(".textproto")),this.setGraph(new Uint8Array(e),n)}setGraphFromString(n){this.setGraph(new TextEncoder().encode(n),!1)}setGraph(n,e){var t=n.length,i=this.j._malloc(t);this.j.HEAPU8.set(n,i),e?this.j._changeBinaryGraph(t,i):this.j._changeTextGraph(t,i),this.j._free(i)}configureAudio(n,e,t,i,s){this.j._configureAudio||console.warn('Attempting to use configureAudio without support for input audio. Is build dep ":gl_graph_runner_audio" missing?'),Be(this,i||"input_audio",r=>{Be(this,s=s||"audio_header",a=>{this.j._configureAudio(r,a,n,e??0,t)})})}setAutoResizeCanvas(n){this.l=n}setAutoRenderToScreen(n){this.j._setAutoRenderToScreen(n)}setGpuBufferVerticalFlip(n){this.j.gpuOriginForWebTexturesIsBottomLeft=n}ka(n){ns(this,"__graph_config__",e=>{n(e)}),Be(this,"__graph_config__",e=>{this.j._getGraphConfig(e,void 0)}),delete this.j.simpleListeners.__graph_config__}attachErrorListener(n){this.j.errorListener=n}attachEmptyPacketListener(n,e){this.j.emptyPacketListeners=this.j.emptyPacketListeners||{},this.j.emptyPacketListeners[n]=e}addAudioToStream(n,e,t){this.addAudioToStreamWithShape(n,0,0,e,t)}addAudioToStreamWithShape(n,e,t,i,s){var r=4*n.length;this.i!==r&&(this.h&&this.j._free(this.h),this.h=this.j._malloc(r),this.i=r),this.j.HEAPF32.set(n,this.h/4),Be(this,i,a=>{this.j._addAudioToInputStream(this.h,e,t,a,s)})}addGpuBufferToStream(n,e,t){Be(this,e,i=>{var[s,r]=Ry(this,n,i);this.j._addBoundTextureToStream(i,s,r,t)})}addBoolToStream(n,e,t){Be(this,e,i=>{this.j._addBoolToInputStream(n,i,t)})}addDoubleToStream(n,e,t){Be(this,e,i=>{this.j._addDoubleToInputStream(n,i,t)})}addFloatToStream(n,e,t){Be(this,e,i=>{this.j._addFloatToInputStream(n,i,t)})}addIntToStream(n,e,t){Be(this,e,i=>{this.j._addIntToInputStream(n,i,t)})}addUintToStream(n,e,t){Be(this,e,i=>{this.j._addUintToInputStream(n,i,t)})}addStringToStream(n,e,t){Be(this,e,i=>{Be(this,n,s=>{this.j._addStringToInputStream(s,i,t)})})}addStringRecordToStream(n,e,t){Be(this,e,i=>{ix(this,Object.keys(n),s=>{ix(this,Object.values(n),r=>{this.j._addFlatHashMapToInputStream(s,r,Object.keys(n).length,i,t)})})})}addProtoToStream(n,e,t,i){Be(this,t,s=>{Be(this,e,r=>{var a=this.j._malloc(n.length);this.j.HEAPU8.set(n,a),this.j._addProtoToInputStream(a,n.length,r,s,i),this.j._free(a)})})}addEmptyPacketToStream(n,e){Be(this,n,t=>{this.j._addEmptyPacketToInputStream(t,e)})}addBoolVectorToStream(n,e,t){Be(this,e,i=>{var s=this.j._allocateBoolVector(n.length);if(!s)throw Error("Unable to allocate new bool vector on heap.");for(let r of n)this.j._addBoolVectorEntry(s,r);this.j._addBoolVectorToInputStream(s,i,t)})}addDoubleVectorToStream(n,e,t){Be(this,e,i=>{var s=this.j._allocateDoubleVector(n.length);if(!s)throw Error("Unable to allocate new double vector on heap.");for(let r of n)this.j._addDoubleVectorEntry(s,r);this.j._addDoubleVectorToInputStream(s,i,t)})}addFloatVectorToStream(n,e,t){Be(this,e,i=>{var s=this.j._allocateFloatVector(n.length);if(!s)throw Error("Unable to allocate new float vector on heap.");for(let r of n)this.j._addFloatVectorEntry(s,r);this.j._addFloatVectorToInputStream(s,i,t)})}addIntVectorToStream(n,e,t){Be(this,e,i=>{var s=this.j._allocateIntVector(n.length);if(!s)throw Error("Unable to allocate new int vector on heap.");for(let r of n)this.j._addIntVectorEntry(s,r);this.j._addIntVectorToInputStream(s,i,t)})}addUintVectorToStream(n,e,t){Be(this,e,i=>{var s=this.j._allocateUintVector(n.length);if(!s)throw Error("Unable to allocate new unsigned int vector on heap.");for(let r of n)this.j._addUintVectorEntry(s,r);this.j._addUintVectorToInputStream(s,i,t)})}addStringVectorToStream(n,e,t){Be(this,e,i=>{var s=this.j._allocateStringVector(n.length);if(!s)throw Error("Unable to allocate new string vector on heap.");for(let r of n)Be(this,r,a=>{this.j._addStringVectorEntry(s,a)});this.j._addStringVectorToInputStream(s,i,t)})}addBoolToInputSidePacket(n,e){Be(this,e,t=>{this.j._addBoolToInputSidePacket(n,t)})}addDoubleToInputSidePacket(n,e){Be(this,e,t=>{this.j._addDoubleToInputSidePacket(n,t)})}addFloatToInputSidePacket(n,e){Be(this,e,t=>{this.j._addFloatToInputSidePacket(n,t)})}addIntToInputSidePacket(n,e){Be(this,e,t=>{this.j._addIntToInputSidePacket(n,t)})}addUintToInputSidePacket(n,e){Be(this,e,t=>{this.j._addUintToInputSidePacket(n,t)})}addStringToInputSidePacket(n,e){Be(this,e,t=>{Be(this,n,i=>{this.j._addStringToInputSidePacket(i,t)})})}addProtoToInputSidePacket(n,e,t){Be(this,t,i=>{Be(this,e,s=>{var r=this.j._malloc(n.length);this.j.HEAPU8.set(n,r),this.j._addProtoToInputSidePacket(r,n.length,s,i),this.j._free(r)})})}addBoolVectorToInputSidePacket(n,e){Be(this,e,t=>{var i=this.j._allocateBoolVector(n.length);if(!i)throw Error("Unable to allocate new bool vector on heap.");for(let s of n)this.j._addBoolVectorEntry(i,s);this.j._addBoolVectorToInputSidePacket(i,t)})}addDoubleVectorToInputSidePacket(n,e){Be(this,e,t=>{var i=this.j._allocateDoubleVector(n.length);if(!i)throw Error("Unable to allocate new double vector on heap.");for(let s of n)this.j._addDoubleVectorEntry(i,s);this.j._addDoubleVectorToInputSidePacket(i,t)})}addFloatVectorToInputSidePacket(n,e){Be(this,e,t=>{var i=this.j._allocateFloatVector(n.length);if(!i)throw Error("Unable to allocate new float vector on heap.");for(let s of n)this.j._addFloatVectorEntry(i,s);this.j._addFloatVectorToInputSidePacket(i,t)})}addIntVectorToInputSidePacket(n,e){Be(this,e,t=>{var i=this.j._allocateIntVector(n.length);if(!i)throw Error("Unable to allocate new int vector on heap.");for(let s of n)this.j._addIntVectorEntry(i,s);this.j._addIntVectorToInputSidePacket(i,t)})}addUintVectorToInputSidePacket(n,e){Be(this,e,t=>{var i=this.j._allocateUintVector(n.length);if(!i)throw Error("Unable to allocate new unsigned int vector on heap.");for(let s of n)this.j._addUintVectorEntry(i,s);this.j._addUintVectorToInputSidePacket(i,t)})}addStringVectorToInputSidePacket(n,e){Be(this,e,t=>{var i=this.j._allocateStringVector(n.length);if(!i)throw Error("Unable to allocate new string vector on heap.");for(let s of n)Be(this,s,r=>{this.j._addStringVectorEntry(i,r)});this.j._addStringVectorToInputSidePacket(i,t)})}attachBoolListener(n,e){ns(this,n,e),Be(this,n,t=>{this.j._attachBoolListener(t)})}attachBoolVectorListener(n,e){ir(this,n,e),Be(this,n,t=>{this.j._attachBoolVectorListener(t)})}attachIntListener(n,e){ns(this,n,e),Be(this,n,t=>{this.j._attachIntListener(t)})}attachIntVectorListener(n,e){ir(this,n,e),Be(this,n,t=>{this.j._attachIntVectorListener(t)})}attachUintListener(n,e){ns(this,n,e),Be(this,n,t=>{this.j._attachUintListener(t)})}attachUintVectorListener(n,e){ir(this,n,e),Be(this,n,t=>{this.j._attachUintVectorListener(t)})}attachDoubleListener(n,e){ns(this,n,e),Be(this,n,t=>{this.j._attachDoubleListener(t)})}attachDoubleVectorListener(n,e){ir(this,n,e),Be(this,n,t=>{this.j._attachDoubleVectorListener(t)})}attachFloatListener(n,e){ns(this,n,e),Be(this,n,t=>{this.j._attachFloatListener(t)})}attachFloatVectorListener(n,e){ir(this,n,e),Be(this,n,t=>{this.j._attachFloatVectorListener(t)})}attachStringListener(n,e){ns(this,n,e),Be(this,n,t=>{this.j._attachStringListener(t)})}attachStringVectorListener(n,e){ir(this,n,e),Be(this,n,t=>{this.j._attachStringVectorListener(t)})}attachProtoListener(n,e,t){ns(this,n,e),Be(this,n,i=>{this.j._attachProtoListener(i,t||!1)})}attachProtoVectorListener(n,e,t){ir(this,n,e),Be(this,n,i=>{this.j._attachProtoVectorListener(i,t||!1)})}attachAudioListener(n,e,t){this.j._attachAudioListener||console.warn('Attempting to use attachAudioListener without support for output audio. Is build dep ":gl_graph_runner_audio_out" missing?'),ns(this,n,(i,s)=>{i=new Float32Array(i.buffer,i.byteOffset,i.length/4),e(i,s)}),Be(this,n,i=>{this.j._attachAudioListener(i,t||!1)})}finishProcessing(){this.j._waitUntilIdle()}closeGraph(){this.j._closeGraph(),this.j.simpleListeners=void 0,this.j.emptyPacketListeners=void 0}};function Iy(n){return class extends n{get qa(){return this.j}Ta(){if(typeof this.qa._mediapipeLoggerGetEncodedApiKey=="function"){let e=this.qa._mediapipeLoggerGetEncodedApiKey();return this.qa._decodeBase64(e)}}}}function Py(n){return class extends n{ab(){this.j._registerModelResourcesGraphService()}}}var Bw=Iy(Py(Cy)),kw=class extends Bw{};async function zw(n,e,t,i){return n=await(async(s,r,a,o,c)=>{if(r&&await nx(r),!self.ModuleFactory||a&&(await nx(a),!self.ModuleFactory))throw Error("ModuleFactory not set.");return self.Module&&c&&((r=self.Module).locateFile=c.locateFile,c.mainScriptUrlOrBlob&&(r.mainScriptUrlOrBlob=c.mainScriptUrlOrBlob)),c=await self.ModuleFactory(self.Module||c),self.ModuleFactory=self.Module=void 0,new s(c,o)})(n,t.wasmLoaderPath,t.assetLoaderPath,e,{locateFile:s=>s.endsWith(".wasm")?t.wasmBinaryPath.toString():t.assetBinaryPath&&s.endsWith(".data")?t.assetBinaryPath.toString():s}),(function(s,r){r=r.runningMode??"";var a=s.h.Ta();s.o=new Ow(s.D(),r,a)})(n,i),await n.A(i),n}async function Cu(n,e,t,i){return zw(n,e,t,i)}function yp(n,e,t){try{n.h.j.FS_unlink(`/${t}`)}catch{}n.h.j.FS_createDataFile("/",t,e,!0,!1,!1),qp(n,`/${t}`)}function qp(n,e){var t=St(n.baseOptions,$u,1)||new $u;typeof e=="string"?(et(t,2,Ls(e)),et(t,1)):e instanceof Uint8Array&&(et(t,1,Ju(e,!1)),et(t,2)),ke(n.baseOptions,0,1,t)}function sx(n){try{let e=n.L.length;if(e===1)throw Error(n.L[0].message);if(e>1)throw Error("Encountered multiple errors: "+n.L.map(t=>t.message).join(", "))}finally{n.L=[]}}function we(n,e){n.J=Math.max(n.J,e)}function _d(n,e){n.F=new jn,oi(n.F,2,"PassThroughCalculator"),Wt(n.F,"free_memory"),gt(n.F,"free_memory_unused_out"),$t(e,"free_memory"),Mi(e,n.F)}function fo(n,e){Wt(n.F,e),gt(n.F,e+"_unused_out")}function xd(n){n.h.addBoolToStream(!0,"free_memory",n.J)}var ju=class{constructor(n){this.h=n,this.L=[],this.J=0,this.h.setAutoRenderToScreen(!1)}l(n,e=!0,t=!1,i=!1){if(e){let s=n.baseOptions||{};if(n.baseOptions?.modelAssetBuffer&&n.baseOptions?.modelAssetPath)throw Error("Cannot set both baseOptions.modelAssetPath and baseOptions.modelAssetBuffer");if(!(St(this.baseOptions,$u,1)?.h()||St(this.baseOptions,$u,1)?.l()||n.baseOptions?.modelAssetBuffer||n.baseOptions?.modelAssetPath))throw Error("Either baseOptions.modelAssetPath or baseOptions.modelAssetBuffer must be set");(function(a,o,c=!1){var l=St(a.baseOptions,qu,3);if(!l){var h=l=new qu,u=new F1;Fi(h,4,Ns,u)}"delegate"in o&&(o.delegate==="GPU"?(o=l,h=new Xv,Fi(o,2,Ns,h)):(o=l,h=new F1,Fi(o,4,Ns,h))),c&&(c=l.l(),o=l.h()||c?.h()===!0,c=new $v,o?ke(c,0,9,o=new XA):ke(c,0,8,o=new WA),Fi(l,6,Ns,c)),ke(a.baseOptions,0,3,l)})(this,s,i);let r=t?"model.litertlm":"model.dat";if(s.modelAssetPath)return fetch(s.modelAssetPath.toString()).then(a=>{if(a.ok)return a.arrayBuffer();throw Error(`Failed to fetch model: ${s.modelAssetPath} (${a.status})`)}).then(a=>{yp(this,new Uint8Array(a),r),this.u(),this.M()});if(s.modelAssetBuffer instanceof Uint8Array)t?yp(this,s.modelAssetBuffer,r):qp(this,s.modelAssetBuffer);else if(s.modelAssetBuffer)return(async function(a){for(var o=[],c=0;;){let{done:l,value:h}=await a.read();if(l)break;o.push(h),c+=h.length}if(o.length===0)return new Uint8Array(0);if(o.length===1)return o[0];a=new Uint8Array(c),c=0;for(let l of o)a.set(l,c),c+=l.length;return a})(s.modelAssetBuffer).then(a=>{t?yp(this,a,r):qp(this,a),this.u(),this.M()})}return this.u(),this.M(),Promise.resolve()}M(){}ka(){var n;if(this.h.ka(e=>{n=$A(e)}),!n)throw Error("Failed to retrieve CalculatorGraphConfig");return n}setGraph(n,e){this.h.attachErrorListener((t,i)=>{this.L.push(Error(i))}),this.h.ab(),this.h.setGraph(n,e),this.o?.za(),this.F=void 0,sx(this)}finishProcessing(n){this.h.finishProcessing(),sx(this),this.o&&n!==void 0&&this.o.Aa(n)}close(){this.F=void 0,this.o?.ya(),this.o?.close(),this.h.closeGraph()}};function Un(n,e){if(!n)throw Error(`Unable to obtain required WebGL resource: ${e}`);return n}ju.prototype.close=ju.prototype.close;var $p=class{constructor(e,t,i,s){this.h=e,this.i=t,this.o=i,this.l=s}bind(){this.h.bindVertexArray(this.i)}close(){this.h.deleteVertexArray(this.i),this.h.deleteBuffer(this.o),this.h.deleteBuffer(this.l)}};function rx(n,e,t){var i=n.h;if(t=Un(i.createShader(t),"Failed to create WebGL shader"),i.shaderSource(t,e),i.compileShader(t),!i.getShaderParameter(t,i.COMPILE_STATUS))throw Error(`Could not compile WebGL shader: ${i.getShaderInfoLog(t)}`);return i.attachShader(n.i,t),t}function ax(n,e){var t=n.h,i=Un(t.createVertexArray(),"Failed to create vertex array");t.bindVertexArray(i);var s=Un(t.createBuffer(),"Failed to create buffer");t.bindBuffer(t.ARRAY_BUFFER,s),t.enableVertexAttribArray(n.G),t.vertexAttribPointer(n.G,2,t.FLOAT,!1,0,0),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),t.STATIC_DRAW);var r=Un(t.createBuffer(),"Failed to create buffer");return t.bindBuffer(t.ARRAY_BUFFER,r),t.enableVertexAttribArray(n.L),t.vertexAttribPointer(n.L,2,t.FLOAT,!1,0,0),t.bufferData(t.ARRAY_BUFFER,new Float32Array(e?[0,1,0,0,1,0,1,1]:[0,0,0,1,1,1,1,0]),t.STATIC_DRAW),t.bindBuffer(t.ARRAY_BUFFER,null),t.bindVertexArray(null),new $p(t,i,s,r)}function Gm(n,e){if(n.h){if(e!==n.h)throw Error("Cannot change GL context once initialized")}else n.h=e}function sl(n,e,t,i){return Gm(n,e),n.i||(n.o(),n.J()),t?(n.m||(n.m=ax(n,!0)),t=n.m):(n.F||(n.F=ax(n,!1)),t=n.F),e.useProgram(n.i),t.bind(),n.l(),n=i(),t.h.bindVertexArray(null),n}function lr(n,e,t){return Gm(n,e),n=Un(e.createTexture(),"Failed to create texture"),e.bindTexture(e.TEXTURE_2D,n),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,t??e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,t??e.LINEAR),e.bindTexture(e.TEXTURE_2D,null),n}function vd(n,e,t){Gm(n,e),n.D||(n.D=Un(e.createFramebuffer(),"Failed to create framebuffe.")),e.bindFramebuffer(e.FRAMEBUFFER,n.D),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}function Vm(n){n.h?.bindFramebuffer(n.h.FRAMEBUFFER,null)}var sa=class{C(){return`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D inputTexture;
  void main() {
    gl_FragColor = texture2D(inputTexture, vTex);
  }
 `}o(){var n=this.h;if(this.i=Un(n.createProgram(),"Failed to create WebGL program"),this.ea=rx(this,`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,n.VERTEX_SHADER),this.aa=rx(this,this.C(),n.FRAGMENT_SHADER),n.linkProgram(this.i),!n.getProgramParameter(this.i,n.LINK_STATUS))throw Error(`Error during program linking: ${n.getProgramInfoLog(this.i)}`);this.G=n.getAttribLocation(this.i,"aVertex"),this.L=n.getAttribLocation(this.i,"aTex")}J(){}l(){}close(){if(this.i){let n=this.h;n.deleteProgram(this.i),n.deleteShader(this.ea),n.deleteShader(this.aa)}this.D&&this.h.deleteFramebuffer(this.D),this.F&&this.F.close(),this.m&&this.m.close()}},Gw=class extends sa{C(){return`
  precision mediump float;
  uniform sampler2D backgroundTexture;
  uniform sampler2D maskTexture;
  uniform sampler2D colorMappingTexture;
  varying vec2 vTex;
  void main() {
    vec4 backgroundColor = texture2D(backgroundTexture, vTex);
    float category = texture2D(maskTexture, vTex).r;
    vec4 categoryColor = texture2D(colorMappingTexture, vec2(category, 0.0));
    gl_FragColor = mix(backgroundColor, categoryColor, categoryColor.a);
  }
 `}J(){var n=this.h;n.activeTexture(n.TEXTURE1),this.v=lr(this,n,n.LINEAR),n.activeTexture(n.TEXTURE2),this.u=lr(this,n,n.NEAREST)}o(){super.o();var n=this.h;this.P=Un(n.getUniformLocation(this.i,"backgroundTexture"),"Uniform location"),this.Z=Un(n.getUniformLocation(this.i,"colorMappingTexture"),"Uniform location"),this.M=Un(n.getUniformLocation(this.i,"maskTexture"),"Uniform location")}l(){super.l();var n=this.h;n.uniform1i(this.M,0),n.uniform1i(this.P,1),n.uniform1i(this.Z,2)}close(){this.v&&this.h.deleteTexture(this.v),this.u&&this.h.deleteTexture(this.u),super.close()}},Vw=class extends sa{C(){return`
  precision mediump float;
  uniform sampler2D maskTexture;
  uniform sampler2D defaultTexture;
  uniform sampler2D overlayTexture;
  varying vec2 vTex;
  void main() {
    float confidence = texture2D(maskTexture, vTex).r;
    vec4 defaultColor = texture2D(defaultTexture, vTex);
    vec4 overlayColor = texture2D(overlayTexture, vTex);
    // Apply the alpha from the overlay and merge in the default color
    overlayColor = mix(defaultColor, overlayColor, overlayColor.a);
    gl_FragColor = mix(defaultColor, overlayColor, confidence);
  }
 `}J(){var n=this.h;n.activeTexture(n.TEXTURE1),this.u=lr(this,n),n.activeTexture(n.TEXTURE2),this.v=lr(this,n)}o(){super.o();var n=this.h;this.M=Un(n.getUniformLocation(this.i,"defaultTexture"),"Uniform location"),this.P=Un(n.getUniformLocation(this.i,"overlayTexture"),"Uniform location"),this.K=Un(n.getUniformLocation(this.i,"maskTexture"),"Uniform location")}l(){super.l();var n=this.h;n.uniform1i(this.K,0),n.uniform1i(this.M,1),n.uniform1i(this.P,2)}close(){this.u&&this.h.deleteTexture(this.u),this.v&&this.h.deleteTexture(this.v),super.close()}};function Ps(n,e){switch(e){case 0:return n.h.find(t=>t instanceof Uint8Array);case 1:return n.h.find(t=>t instanceof Float32Array);case 2:return n.h.find(t=>typeof WebGLTexture<"u"&&t instanceof WebGLTexture);default:throw Error(`Type is not supported: ${e}`)}}function Yp(n){var e=Ps(n,1);if(!e){if(e=Ps(n,0))e=new Float32Array(e).map(i=>i/255);else{e=new Float32Array(n.width*n.height);let i=po(n);var t=Hm(n);if(vd(t,i,Ly(n)),"iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"document"in self&&"ontouchend"in self.document){t=new Float32Array(n.width*n.height*4),i.readPixels(0,0,n.width,n.height,i.RGBA,i.FLOAT,t);for(let s=0,r=0;s<e.length;++s,r+=4)e[s]=t[r]}else i.readPixels(0,0,n.width,n.height,i.RED,i.FLOAT,e)}n.h.push(e)}return e}function Ly(n){var e=Ps(n,2);if(!e){let t=po(n);e=Dy(n);let i=Yp(n),s=Ny(n);t.texImage2D(t.TEXTURE_2D,0,s,n.width,n.height,0,t.RED,t.FLOAT,i),Kp(n)}return e}function po(n){if(!n.canvas)throw Error("Conversion to different image formats require that a canvas is passed when initializing the image.");return n.i||(n.i=Un(n.canvas.getContext("webgl2"),"You cannot use a canvas that is already bound to a different type of rendering context.")),n.i}function Ny(n){if(n=po(n),!Mu)if(n.getExtension("EXT_color_buffer_float")&&n.getExtension("OES_texture_float_linear")&&n.getExtension("EXT_float_blend"))Mu=n.R32F;else{if(!n.getExtension("EXT_color_buffer_half_float"))throw Error("GPU does not fully support 4-channel float32 or float16 formats");Mu=n.R16F}return Mu}function Hm(n){return n.l||(n.l=new sa),n.l}function Dy(n){var e=po(n);e.viewport(0,0,n.width,n.height),e.activeTexture(e.TEXTURE0);var t=Ps(n,2);return t||(t=lr(Hm(n),e,n.o?e.LINEAR:e.NEAREST),n.h.push(t),n.u=!0),e.bindTexture(e.TEXTURE_2D,t),t}function Kp(n){n.i.bindTexture(n.i.TEXTURE_2D,null)}var Mu,cn=class{constructor(n,e,t,i,s,r,a){this.h=n,this.o=e,this.u=t,this.canvas=i,this.l=s,this.width=r,this.height=a,this.u&&--ox===0&&console.error("You seem to be creating MPMask instances without invoking .close(). This leaks resources.")}Va(){return!!Ps(this,0)}va(){return!!Ps(this,1)}X(){return!!Ps(this,2)}ua(){return(e=Ps(n=this,0))||(e=Yp(n),e=new Uint8Array(e.map(t=>Math.round(255*t))),n.h.push(e)),e;var n,e}ta(){return Yp(this)}T(){return Ly(this)}clone(){var n=[];for(let e of this.h){let t;if(e instanceof Uint8Array)t=new Uint8Array(e);else if(e instanceof Float32Array)t=new Float32Array(e);else{if(!(e instanceof WebGLTexture))throw Error(`Type is not supported: ${e}`);{let i=po(this),s=Hm(this);i.activeTexture(i.TEXTURE1),t=lr(s,i,this.o?i.LINEAR:i.NEAREST),i.bindTexture(i.TEXTURE_2D,t);let r=Ny(this);i.texImage2D(i.TEXTURE_2D,0,r,this.width,this.height,0,i.RED,i.FLOAT,null),i.bindTexture(i.TEXTURE_2D,null),vd(s,i,t),sl(s,i,!1,()=>{Dy(this),i.clearColor(0,0,0,0),i.clear(i.COLOR_BUFFER_BIT),i.drawArrays(i.TRIANGLE_FAN,0,4),Kp(this)}),Vm(s),Kp(this)}}n.push(t)}return new cn(n,this.o,this.X(),this.canvas,this.l,this.width,this.height)}close(){this.u&&po(this).deleteTexture(Ps(this,2)),ox=-1}};cn.prototype.close=cn.prototype.close,cn.prototype.clone=cn.prototype.clone,cn.prototype.getAsWebGLTexture=cn.prototype.T,cn.prototype.getAsFloat32Array=cn.prototype.ta,cn.prototype.getAsUint8Array=cn.prototype.ua,cn.prototype.hasWebGLTexture=cn.prototype.X,cn.prototype.hasFloat32Array=cn.prototype.va,cn.prototype.hasUint8Array=cn.prototype.Va;var ox=250,Hw={color:"white",lineWidth:4,radius:6};function Sp(n){return{...Hw,fillColor:(n=n||{}).color,...n}}function Cs(n,e){return n instanceof Function?n(e):n}function cx(n,e,t){return Math.max(Math.min(e,t),Math.min(Math.max(e,t),n))}function Uc(n){if(!n.l)throw Error("CPU rendering requested but CanvasRenderingContext2D not provided.");return n.l}function Xc(n){if(!n.u)throw Error("GPU rendering requested but WebGL2RenderingContext not provided.");return n.u}function lx(n,e,t){if(e.X())t(e.T());else{let i=e.va()?e.ta():e.ua();n.o=n.o??new sa;let s=Xc(n);t((n=new cn([i],e.o,!1,s.canvas,n.o,e.width,e.height)).T()),n.close()}}function hx(n,e,t,i){var s=(function(o){return o.h||(o.h=new Gw),o.h})(n),r=Xc(n),a=Array.isArray(t)?new ImageData(new Uint8ClampedArray(t),1,1):t;sl(s,r,!0,()=>{(function(c,l,h,u){var d=c.h;if(d.activeTexture(d.TEXTURE0),d.bindTexture(d.TEXTURE_2D,l),d.activeTexture(d.TEXTURE1),d.bindTexture(d.TEXTURE_2D,c.v),d.texImage2D(d.TEXTURE_2D,0,d.RGBA,d.RGBA,d.UNSIGNED_BYTE,h),c.K&&(function(f,p){if(f!==p)return!1;f=f.entries(),p=p.entries();for(let[x,g]of f){f=x;let m=g,M=p.next();if(M.done)return!1;let[E,v]=M.value;if(f!==E||m[0]!==v[0]||m[1]!==v[1]||m[2]!==v[2]||m[3]!==v[3])return!1}return!!p.next().done})(c.K,u))d.activeTexture(d.TEXTURE2),d.bindTexture(d.TEXTURE_2D,c.u);else{c.K=u;let f=Array(1024).fill(0);u.forEach((p,x)=>{if(p.length!==4)throw Error(`Color at index ${x} is not a four-channel value.`);f[4*x]=p[0],f[4*x+1]=p[1],f[4*x+2]=p[2],f[4*x+3]=p[3]}),d.activeTexture(d.TEXTURE2),d.bindTexture(d.TEXTURE_2D,c.u),d.texImage2D(d.TEXTURE_2D,0,d.RGBA,256,1,0,d.RGBA,d.UNSIGNED_BYTE,new Uint8Array(f))}})(s,e,a,i),r.clearColor(0,0,0,0),r.clear(r.COLOR_BUFFER_BIT),r.drawArrays(r.TRIANGLE_FAN,0,4);var o=s.h;o.activeTexture(o.TEXTURE0),o.bindTexture(o.TEXTURE_2D,null),o.activeTexture(o.TEXTURE1),o.bindTexture(o.TEXTURE_2D,null),o.activeTexture(o.TEXTURE2),o.bindTexture(o.TEXTURE_2D,null)})}function ux(n,e,t,i){var s=Xc(n),r=(function(c){return c.i||(c.i=new Vw),c.i})(n),a=Array.isArray(t)?new ImageData(new Uint8ClampedArray(t),1,1):t,o=Array.isArray(i)?new ImageData(new Uint8ClampedArray(i),1,1):i;sl(r,s,!0,()=>{var c=r.h;c.activeTexture(c.TEXTURE0),c.bindTexture(c.TEXTURE_2D,e),c.activeTexture(c.TEXTURE1),c.bindTexture(c.TEXTURE_2D,r.u),c.texImage2D(c.TEXTURE_2D,0,c.RGBA,c.RGBA,c.UNSIGNED_BYTE,a),c.activeTexture(c.TEXTURE2),c.bindTexture(c.TEXTURE_2D,r.v),c.texImage2D(c.TEXTURE_2D,0,c.RGBA,c.RGBA,c.UNSIGNED_BYTE,o),s.clearColor(0,0,0,0),s.clear(s.COLOR_BUFFER_BIT),s.drawArrays(s.TRIANGLE_FAN,0,4),s.bindTexture(s.TEXTURE_2D,null),(c=r.h).activeTexture(c.TEXTURE0),c.bindTexture(c.TEXTURE_2D,null),c.activeTexture(c.TEXTURE1),c.bindTexture(c.TEXTURE_2D,null),c.activeTexture(c.TEXTURE2),c.bindTexture(c.TEXTURE_2D,null)})}var Hn=class{constructor(n,e){typeof CanvasRenderingContext2D<"u"&&n instanceof CanvasRenderingContext2D||n instanceof OffscreenCanvasRenderingContext2D?(this.l=n,this.u=e):this.u=n}Na(n,e){if(n){var t=Uc(this);e=Sp(e),t.save();var i=t.canvas,s=0;for(let r of n)t.fillStyle=Cs(e.fillColor,{index:s,from:r}),t.strokeStyle=Cs(e.color,{index:s,from:r}),t.lineWidth=Cs(e.lineWidth,{index:s,from:r}),(n=new Path2D).arc(r.x*i.width,r.y*i.height,Cs(e.radius,{index:s,from:r}),0,2*Math.PI),t.fill(n),t.stroke(n),++s;t.restore()}}Ma(n,e,t){if(n&&e){var i=Uc(this);t=Sp(t),i.save();var s=i.canvas,r=0;for(let a of e){i.beginPath(),e=n[a.start];let o=n[a.end];e&&o&&(i.strokeStyle=Cs(t.color,{index:r,from:e,to:o}),i.lineWidth=Cs(t.lineWidth,{index:r,from:e,to:o}),i.moveTo(e.x*s.width,e.y*s.height),i.lineTo(o.x*s.width,o.y*s.height)),++r,i.stroke()}i.restore()}}Ja(n,e){var t=Uc(this);e=Sp(e),t.save(),t.beginPath(),t.lineWidth=Cs(e.lineWidth,{}),t.strokeStyle=Cs(e.color,{}),t.fillStyle=Cs(e.fillColor,{}),t.moveTo(n.originX,n.originY),t.lineTo(n.originX+n.width,n.originY),t.lineTo(n.originX+n.width,n.originY+n.height),t.lineTo(n.originX,n.originY+n.height),t.lineTo(n.originX,n.originY),t.stroke(),t.fill(),t.restore()}Ka(n,e,t=[0,0,0,255]){this.l?(function(i,s,r,a){var o=Xc(i);lx(i,s,c=>{hx(i,c,r,a),(c=Uc(i)).drawImage(o.canvas,0,0,c.canvas.width,c.canvas.height)})})(this,n,t,e):hx(this,n.T(),t,e)}La(n,e,t){this.l?(function(i,s,r,a){var o=Xc(i);lx(i,s,c=>{ux(i,c,r,a),(c=Uc(i)).drawImage(o.canvas,0,0,c.canvas.width,c.canvas.height)})})(this,n,e,t):ux(this,n.T(),e,t)}close(){this.h?.close(),this.h=void 0,this.i?.close(),this.i=void 0,this.o?.close(),this.o=void 0}};function ss(n,e){switch(e){case 0:return n.h.find(t=>t instanceof ImageData);case 1:return n.h.find(t=>typeof ImageBitmap<"u"&&t instanceof ImageBitmap);case 2:return n.h.find(t=>typeof WebGLTexture<"u"&&t instanceof WebGLTexture);default:throw Error(`Type is not supported: ${e}`)}}function Uy(n){var e=ss(n,0);if(!e){e=mo(n);let t=yd(n),i=new Uint8Array(n.width*n.height*4);vd(t,e,Iu(n)),e.readPixels(0,0,n.width,n.height,e.RGBA,e.UNSIGNED_BYTE,i),Vm(t),e=new ImageData(new Uint8ClampedArray(i.buffer),n.width,n.height),n.h.push(e)}return e}function Iu(n){var e=ss(n,2);if(!e){let t=mo(n);e=Pu(n);let i=ss(n,1)||Uy(n);t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,i),Oc(n)}return e}function mo(n){if(!n.canvas)throw Error("Conversion to different image formats require that a canvas is passed when initializing the image.");return n.i||(n.i=Un(n.canvas.getContext("webgl2"),"You cannot use a canvas that is already bound to a different type of rendering context.")),n.i}function yd(n){return n.l||(n.l=new sa),n.l}function Pu(n){var e=mo(n);e.viewport(0,0,n.width,n.height),e.activeTexture(e.TEXTURE0);var t=ss(n,2);return t||(t=lr(yd(n),e),n.h.push(t),n.o=!0),e.bindTexture(e.TEXTURE_2D,t),t}function Oc(n){n.i.bindTexture(n.i.TEXTURE_2D,null)}function dx(n){var e=mo(n);return sl(yd(n),e,!0,()=>(function(t,i){var s=t.canvas;if(s.width===t.width&&s.height===t.height)return i();var r=s.width,a=s.height;return s.width=t.width,s.height=t.height,t=i(),s.width=r,s.height=a,t})(n,()=>{if(e.bindFramebuffer(e.FRAMEBUFFER,null),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.drawArrays(e.TRIANGLE_FAN,0,4),!(n.canvas instanceof OffscreenCanvas))throw Error("Conversion to ImageBitmap requires that the MediaPipe Tasks is initialized with an OffscreenCanvas");return n.canvas.transferToImageBitmap()}))}Hn.prototype.close=Hn.prototype.close,Hn.prototype.drawConfidenceMask=Hn.prototype.La,Hn.prototype.drawCategoryMask=Hn.prototype.Ka,Hn.prototype.drawBoundingBox=Hn.prototype.Ja,Hn.prototype.drawConnectors=Hn.prototype.Ma,Hn.prototype.drawLandmarks=Hn.prototype.Na,Hn.lerp=function(n,e,t,i,s){return cx(i*(1-(n-e)/(t-e))+s*(1-(t-n)/(t-e)),i,s)},Hn.clamp=cx;var Sn=class{constructor(n,e,t,i,s,r,a){this.h=n,this.u=e,this.o=t,this.canvas=i,this.l=s,this.width=r,this.height=a,(this.u||this.o)&&--fx===0&&console.error("You seem to be creating MPImage instances without invoking .close(). This leaks resources.")}Ua(){return!!ss(this,0)}wa(){return!!ss(this,1)}X(){return!!ss(this,2)}Ra(){return Uy(this)}Qa(){var n=ss(this,1);return n||(Iu(this),Pu(this),n=dx(this),Oc(this),this.h.push(n),this.u=!0),n}T(){return Iu(this)}clone(){var n=[];for(let e of this.h){let t;if(e instanceof ImageData)t=new ImageData(e.data,this.width,this.height);else if(e instanceof WebGLTexture){let i=mo(this),s=yd(this);i.activeTexture(i.TEXTURE1),t=lr(s,i),i.bindTexture(i.TEXTURE_2D,t),i.texImage2D(i.TEXTURE_2D,0,i.RGBA,this.width,this.height,0,i.RGBA,i.UNSIGNED_BYTE,null),i.bindTexture(i.TEXTURE_2D,null),vd(s,i,t),sl(s,i,!1,()=>{Pu(this),i.clearColor(0,0,0,0),i.clear(i.COLOR_BUFFER_BIT),i.drawArrays(i.TRIANGLE_FAN,0,4),Oc(this)}),Vm(s),Oc(this)}else{if(!(e instanceof ImageBitmap))throw Error(`Type is not supported: ${e}`);Iu(this),Pu(this),t=dx(this),Oc(this)}n.push(t)}return new Sn(n,this.wa(),this.X(),this.canvas,this.l,this.width,this.height)}close(){this.u&&ss(this,1).close(),this.o&&mo(this).deleteTexture(ss(this,2)),fx=-1}};Sn.prototype.close=Sn.prototype.close,Sn.prototype.clone=Sn.prototype.clone,Sn.prototype.getAsWebGLTexture=Sn.prototype.T,Sn.prototype.getAsImageBitmap=Sn.prototype.Qa,Sn.prototype.getAsImageData=Sn.prototype.Ra,Sn.prototype.hasWebGLTexture=Sn.prototype.X,Sn.prototype.hasImageBitmap=Sn.prototype.wa,Sn.prototype.hasImageData=Sn.prototype.Ua;var fx=250;function Oi(...n){return n.map(([e,t])=>({start:e,end:t}))}var px,Ww=Py((px=Iy(Cy),class extends px{get pa(){return this.j}Ea(n,e,t){Be(this,e,i=>{var[s,r]=Ry(this,n,i);this.pa._addBoundTextureAsImageToStream(i,s,r,t)})}ha(n,e){ns(this,n,e),Be(this,n,t=>{this.pa._attachImageListener(t)})}ia(n,e){ir(this,n,e),Be(this,n,t=>{this.pa._attachImageVectorListener(t)})}})),Bi=class extends Ww{};async function yt(n,e,t){return Cu(n,t.canvas??(km()?void 0:document.createElement("canvas")),e,t)}function Fy(n,e,t,i){if(n.o&&i!==void 0){var s=St(n.baseOptions,qu,3);s?.h()||s?.l()?.h()?(++(s=n.o).h.U,s.i.set(i,performance.now())):(++(s=n.o).h.R,s.i.set(i,performance.now()))}if(n.ra){if(s=new ny,t?.regionOfInterest){if(!n.Da)throw Error("This task doesn't support region-of-interest.");var r=t.regionOfInterest;if(r.left>=r.right||r.top>=r.bottom)throw Error("Expected RectF with left < right and top < bottom.");if(r.left<0||r.top<0||r.right>1||r.bottom>1)throw Error("Expected RectF values to be in [0,1].");Ve(s,1,(r.left+r.right)/2),Ve(s,2,(r.top+r.bottom)/2),Ve(s,4,r.right-r.left),Ve(s,3,r.bottom-r.top)}else Ve(s,1,.5),Ve(s,2,.5),Ve(s,4,1),Ve(s,3,1);if(t?.rotationDegrees){if(t?.rotationDegrees%90!=0)throw Error("Expected rotation to be a multiple of 90\xB0.");if(Ve(s,5,-Math.PI*t.rotationDegrees/180),t?.rotationDegrees%180!=0){let[a,o]=zm(e);t=Dn(s,3)*o/a,r=Dn(s,4)*a/o,Ve(s,4,t),Ve(s,3,r)}}n.h.addProtoToStream(s.h(),"mediapipe.NormalizedRect",n.ra,i)}n.h.Ea(e,n.Ca,i??performance.now()),n.finishProcessing(i)}function ki(n,e,t){if(n.K)throw Error("Task is not initialized with image mode. 'runningMode' must be set to 'IMAGE'.");Fy(n,e,t,n.J+1)}function fs(n,e,t,i){if(!n.K)throw Error("Task is not initialized with video mode. 'runningMode' must be set to 'VIDEO'.");Fy(n,e,t,i)}function go(n,e,t,i){var s=e.data,r=e.width,a=r*(e=e.height);if((s instanceof Uint8Array||s instanceof Float32Array)&&s.length!==a)throw Error("Unsupported channel count: "+s.length/a);return n=new cn([s],t,!1,n.h.j.canvas,n.ea,r,e),i?n.clone():n}var ci=class extends ju{constructor(n,e,t,i){super(n),this.h=n,this.Ca=e,this.ra=t,this.Da=i,this.ea=new sa,this.K=!1}l(n,e=!0,t=!1,i=!1){if("runningMode"in n){var s=this.K=!!n.runningMode&&n.runningMode!=="IMAGE";et(this.baseOptions,2,s==null?s:Du(s))}if(n.canvas!==void 0&&this.h.j.canvas!==n.canvas)throw Error("You must create a new task to reset the canvas.");return super.l(n,e,t,i)}close(){this.ea.close(),super.close()}};ci.prototype.close=ci.prototype.close;var gi=class extends ci{constructor(n,e){super(new Bi(n,e),"image_in","norm_rect_in",!1),this.m={detections:[]},ke(n=this.i=new gd,0,1,e=new Yt),Ve(this.i,2,.5),Ve(this.i,3,.3)}D(){return"FaceDetector"}get baseOptions(){return St(this.i,Yt,1)}set baseOptions(n){ke(this.i,0,1,n)}A(n){return"minDetectionConfidence"in n&&Ve(this.i,2,n.minDetectionConfidence??.5),"minSuppressionThreshold"in n&&Ve(this.i,3,n.minSuppressionThreshold??.3),this.l(n)}H(n,e){return this.m={detections:[]},ki(this,n,e),this.m}I(n,e,t){return this.m={detections:[]},fs(this,n,t,e),this.m}u(){var n=new hi;$t(n,"image_in"),$t(n,"norm_rect_in"),bt(n,"detections");var e=new li;us(e,lw,this.i);var t=new jn;oi(t,2,"mediapipe.tasks.vision.face_detector.FaceDetectorGraph"),Wt(t,"IMAGE:image_in"),Wt(t,"NORM_RECT:norm_rect_in"),gt(t,"DETECTIONS:detections"),t.A(e),Mi(n,t),this.h.attachProtoVectorListener("detections",(i,s)=>{for(let r of i)i=ty(r),this.m.detections.push(Ey(i));we(this,s)}),this.h.attachEmptyPacketListener("detections",i=>{we(this,i)}),n=n.h(),this.setGraph(new Uint8Array(n),!0)}};gi.prototype.detectForVideo=gi.prototype.I,gi.prototype.detect=gi.prototype.H,gi.prototype.setOptions=gi.prototype.A,gi.createFromModelPath=async function(n,e){return yt(gi,n,{baseOptions:{modelAssetPath:e}})},gi.createFromModelBuffer=function(n,e){return yt(gi,n,{baseOptions:{modelAssetBuffer:e}})},gi.createFromOptions=function(n,e){return yt(gi,n,e)};var Wm=Oi([61,146],[146,91],[91,181],[181,84],[84,17],[17,314],[314,405],[405,321],[321,375],[375,291],[61,185],[185,40],[40,39],[39,37],[37,0],[0,267],[267,269],[269,270],[270,409],[409,291],[78,95],[95,88],[88,178],[178,87],[87,14],[14,317],[317,402],[402,318],[318,324],[324,308],[78,191],[191,80],[80,81],[81,82],[82,13],[13,312],[312,311],[311,310],[310,415],[415,308]),Xm=Oi([263,249],[249,390],[390,373],[373,374],[374,380],[380,381],[381,382],[382,362],[263,466],[466,388],[388,387],[387,386],[386,385],[385,384],[384,398],[398,362]),qm=Oi([276,283],[283,282],[282,295],[295,285],[300,293],[293,334],[334,296],[296,336]),Oy=Oi([474,475],[475,476],[476,477],[477,474]),$m=Oi([33,7],[7,163],[163,144],[144,145],[145,153],[153,154],[154,155],[155,133],[33,246],[246,161],[161,160],[160,159],[159,158],[158,157],[157,173],[173,133]),Ym=Oi([46,53],[53,52],[52,65],[65,55],[70,63],[63,105],[105,66],[66,107]),By=Oi([469,470],[470,471],[471,472],[472,469]),Km=Oi([10,338],[338,297],[297,332],[332,284],[284,251],[251,389],[389,356],[356,454],[454,323],[323,361],[361,288],[288,397],[397,365],[365,379],[379,378],[378,400],[400,377],[377,152],[152,148],[148,176],[176,149],[149,150],[150,136],[136,172],[172,58],[58,132],[132,93],[93,234],[234,127],[127,162],[162,21],[21,54],[54,103],[103,67],[67,109],[109,10]),ky=[...Wm,...Xm,...qm,...$m,...Ym,...Km],zy=Oi([127,34],[34,139],[139,127],[11,0],[0,37],[37,11],[232,231],[231,120],[120,232],[72,37],[37,39],[39,72],[128,121],[121,47],[47,128],[232,121],[121,128],[128,232],[104,69],[69,67],[67,104],[175,171],[171,148],[148,175],[118,50],[50,101],[101,118],[73,39],[39,40],[40,73],[9,151],[151,108],[108,9],[48,115],[115,131],[131,48],[194,204],[204,211],[211,194],[74,40],[40,185],[185,74],[80,42],[42,183],[183,80],[40,92],[92,186],[186,40],[230,229],[229,118],[118,230],[202,212],[212,214],[214,202],[83,18],[18,17],[17,83],[76,61],[61,146],[146,76],[160,29],[29,30],[30,160],[56,157],[157,173],[173,56],[106,204],[204,194],[194,106],[135,214],[214,192],[192,135],[203,165],[165,98],[98,203],[21,71],[71,68],[68,21],[51,45],[45,4],[4,51],[144,24],[24,23],[23,144],[77,146],[146,91],[91,77],[205,50],[50,187],[187,205],[201,200],[200,18],[18,201],[91,106],[106,182],[182,91],[90,91],[91,181],[181,90],[85,84],[84,17],[17,85],[206,203],[203,36],[36,206],[148,171],[171,140],[140,148],[92,40],[40,39],[39,92],[193,189],[189,244],[244,193],[159,158],[158,28],[28,159],[247,246],[246,161],[161,247],[236,3],[3,196],[196,236],[54,68],[68,104],[104,54],[193,168],[168,8],[8,193],[117,228],[228,31],[31,117],[189,193],[193,55],[55,189],[98,97],[97,99],[99,98],[126,47],[47,100],[100,126],[166,79],[79,218],[218,166],[155,154],[154,26],[26,155],[209,49],[49,131],[131,209],[135,136],[136,150],[150,135],[47,126],[126,217],[217,47],[223,52],[52,53],[53,223],[45,51],[51,134],[134,45],[211,170],[170,140],[140,211],[67,69],[69,108],[108,67],[43,106],[106,91],[91,43],[230,119],[119,120],[120,230],[226,130],[130,247],[247,226],[63,53],[53,52],[52,63],[238,20],[20,242],[242,238],[46,70],[70,156],[156,46],[78,62],[62,96],[96,78],[46,53],[53,63],[63,46],[143,34],[34,227],[227,143],[123,117],[117,111],[111,123],[44,125],[125,19],[19,44],[236,134],[134,51],[51,236],[216,206],[206,205],[205,216],[154,153],[153,22],[22,154],[39,37],[37,167],[167,39],[200,201],[201,208],[208,200],[36,142],[142,100],[100,36],[57,212],[212,202],[202,57],[20,60],[60,99],[99,20],[28,158],[158,157],[157,28],[35,226],[226,113],[113,35],[160,159],[159,27],[27,160],[204,202],[202,210],[210,204],[113,225],[225,46],[46,113],[43,202],[202,204],[204,43],[62,76],[76,77],[77,62],[137,123],[123,116],[116,137],[41,38],[38,72],[72,41],[203,129],[129,142],[142,203],[64,98],[98,240],[240,64],[49,102],[102,64],[64,49],[41,73],[73,74],[74,41],[212,216],[216,207],[207,212],[42,74],[74,184],[184,42],[169,170],[170,211],[211,169],[170,149],[149,176],[176,170],[105,66],[66,69],[69,105],[122,6],[6,168],[168,122],[123,147],[147,187],[187,123],[96,77],[77,90],[90,96],[65,55],[55,107],[107,65],[89,90],[90,180],[180,89],[101,100],[100,120],[120,101],[63,105],[105,104],[104,63],[93,137],[137,227],[227,93],[15,86],[86,85],[85,15],[129,102],[102,49],[49,129],[14,87],[87,86],[86,14],[55,8],[8,9],[9,55],[100,47],[47,121],[121,100],[145,23],[23,22],[22,145],[88,89],[89,179],[179,88],[6,122],[122,196],[196,6],[88,95],[95,96],[96,88],[138,172],[172,136],[136,138],[215,58],[58,172],[172,215],[115,48],[48,219],[219,115],[42,80],[80,81],[81,42],[195,3],[3,51],[51,195],[43,146],[146,61],[61,43],[171,175],[175,199],[199,171],[81,82],[82,38],[38,81],[53,46],[46,225],[225,53],[144,163],[163,110],[110,144],[52,65],[65,66],[66,52],[229,228],[228,117],[117,229],[34,127],[127,234],[234,34],[107,108],[108,69],[69,107],[109,108],[108,151],[151,109],[48,64],[64,235],[235,48],[62,78],[78,191],[191,62],[129,209],[209,126],[126,129],[111,35],[35,143],[143,111],[117,123],[123,50],[50,117],[222,65],[65,52],[52,222],[19,125],[125,141],[141,19],[221,55],[55,65],[65,221],[3,195],[195,197],[197,3],[25,7],[7,33],[33,25],[220,237],[237,44],[44,220],[70,71],[71,139],[139,70],[122,193],[193,245],[245,122],[247,130],[130,33],[33,247],[71,21],[21,162],[162,71],[170,169],[169,150],[150,170],[188,174],[174,196],[196,188],[216,186],[186,92],[92,216],[2,97],[97,167],[167,2],[141,125],[125,241],[241,141],[164,167],[167,37],[37,164],[72,38],[38,12],[12,72],[38,82],[82,13],[13,38],[63,68],[68,71],[71,63],[226,35],[35,111],[111,226],[101,50],[50,205],[205,101],[206,92],[92,165],[165,206],[209,198],[198,217],[217,209],[165,167],[167,97],[97,165],[220,115],[115,218],[218,220],[133,112],[112,243],[243,133],[239,238],[238,241],[241,239],[214,135],[135,169],[169,214],[190,173],[173,133],[133,190],[171,208],[208,32],[32,171],[125,44],[44,237],[237,125],[86,87],[87,178],[178,86],[85,86],[86,179],[179,85],[84,85],[85,180],[180,84],[83,84],[84,181],[181,83],[201,83],[83,182],[182,201],[137,93],[93,132],[132,137],[76,62],[62,183],[183,76],[61,76],[76,184],[184,61],[57,61],[61,185],[185,57],[212,57],[57,186],[186,212],[214,207],[207,187],[187,214],[34,143],[143,156],[156,34],[79,239],[239,237],[237,79],[123,137],[137,177],[177,123],[44,1],[1,4],[4,44],[201,194],[194,32],[32,201],[64,102],[102,129],[129,64],[213,215],[215,138],[138,213],[59,166],[166,219],[219,59],[242,99],[99,97],[97,242],[2,94],[94,141],[141,2],[75,59],[59,235],[235,75],[24,110],[110,228],[228,24],[25,130],[130,226],[226,25],[23,24],[24,229],[229,23],[22,23],[23,230],[230,22],[26,22],[22,231],[231,26],[112,26],[26,232],[232,112],[189,190],[190,243],[243,189],[221,56],[56,190],[190,221],[28,56],[56,221],[221,28],[27,28],[28,222],[222,27],[29,27],[27,223],[223,29],[30,29],[29,224],[224,30],[247,30],[30,225],[225,247],[238,79],[79,20],[20,238],[166,59],[59,75],[75,166],[60,75],[75,240],[240,60],[147,177],[177,215],[215,147],[20,79],[79,166],[166,20],[187,147],[147,213],[213,187],[112,233],[233,244],[244,112],[233,128],[128,245],[245,233],[128,114],[114,188],[188,128],[114,217],[217,174],[174,114],[131,115],[115,220],[220,131],[217,198],[198,236],[236,217],[198,131],[131,134],[134,198],[177,132],[132,58],[58,177],[143,35],[35,124],[124,143],[110,163],[163,7],[7,110],[228,110],[110,25],[25,228],[356,389],[389,368],[368,356],[11,302],[302,267],[267,11],[452,350],[350,349],[349,452],[302,303],[303,269],[269,302],[357,343],[343,277],[277,357],[452,453],[453,357],[357,452],[333,332],[332,297],[297,333],[175,152],[152,377],[377,175],[347,348],[348,330],[330,347],[303,304],[304,270],[270,303],[9,336],[336,337],[337,9],[278,279],[279,360],[360,278],[418,262],[262,431],[431,418],[304,408],[408,409],[409,304],[310,415],[415,407],[407,310],[270,409],[409,410],[410,270],[450,348],[348,347],[347,450],[422,430],[430,434],[434,422],[313,314],[314,17],[17,313],[306,307],[307,375],[375,306],[387,388],[388,260],[260,387],[286,414],[414,398],[398,286],[335,406],[406,418],[418,335],[364,367],[367,416],[416,364],[423,358],[358,327],[327,423],[251,284],[284,298],[298,251],[281,5],[5,4],[4,281],[373,374],[374,253],[253,373],[307,320],[320,321],[321,307],[425,427],[427,411],[411,425],[421,313],[313,18],[18,421],[321,405],[405,406],[406,321],[320,404],[404,405],[405,320],[315,16],[16,17],[17,315],[426,425],[425,266],[266,426],[377,400],[400,369],[369,377],[322,391],[391,269],[269,322],[417,465],[465,464],[464,417],[386,257],[257,258],[258,386],[466,260],[260,388],[388,466],[456,399],[399,419],[419,456],[284,332],[332,333],[333,284],[417,285],[285,8],[8,417],[346,340],[340,261],[261,346],[413,441],[441,285],[285,413],[327,460],[460,328],[328,327],[355,371],[371,329],[329,355],[392,439],[439,438],[438,392],[382,341],[341,256],[256,382],[429,420],[420,360],[360,429],[364,394],[394,379],[379,364],[277,343],[343,437],[437,277],[443,444],[444,283],[283,443],[275,440],[440,363],[363,275],[431,262],[262,369],[369,431],[297,338],[338,337],[337,297],[273,375],[375,321],[321,273],[450,451],[451,349],[349,450],[446,342],[342,467],[467,446],[293,334],[334,282],[282,293],[458,461],[461,462],[462,458],[276,353],[353,383],[383,276],[308,324],[324,325],[325,308],[276,300],[300,293],[293,276],[372,345],[345,447],[447,372],[352,345],[345,340],[340,352],[274,1],[1,19],[19,274],[456,248],[248,281],[281,456],[436,427],[427,425],[425,436],[381,256],[256,252],[252,381],[269,391],[391,393],[393,269],[200,199],[199,428],[428,200],[266,330],[330,329],[329,266],[287,273],[273,422],[422,287],[250,462],[462,328],[328,250],[258,286],[286,384],[384,258],[265,353],[353,342],[342,265],[387,259],[259,257],[257,387],[424,431],[431,430],[430,424],[342,353],[353,276],[276,342],[273,335],[335,424],[424,273],[292,325],[325,307],[307,292],[366,447],[447,345],[345,366],[271,303],[303,302],[302,271],[423,266],[266,371],[371,423],[294,455],[455,460],[460,294],[279,278],[278,294],[294,279],[271,272],[272,304],[304,271],[432,434],[434,427],[427,432],[272,407],[407,408],[408,272],[394,430],[430,431],[431,394],[395,369],[369,400],[400,395],[334,333],[333,299],[299,334],[351,417],[417,168],[168,351],[352,280],[280,411],[411,352],[325,319],[319,320],[320,325],[295,296],[296,336],[336,295],[319,403],[403,404],[404,319],[330,348],[348,349],[349,330],[293,298],[298,333],[333,293],[323,454],[454,447],[447,323],[15,16],[16,315],[315,15],[358,429],[429,279],[279,358],[14,15],[15,316],[316,14],[285,336],[336,9],[9,285],[329,349],[349,350],[350,329],[374,380],[380,252],[252,374],[318,402],[402,403],[403,318],[6,197],[197,419],[419,6],[318,319],[319,325],[325,318],[367,364],[364,365],[365,367],[435,367],[367,397],[397,435],[344,438],[438,439],[439,344],[272,271],[271,311],[311,272],[195,5],[5,281],[281,195],[273,287],[287,291],[291,273],[396,428],[428,199],[199,396],[311,271],[271,268],[268,311],[283,444],[444,445],[445,283],[373,254],[254,339],[339,373],[282,334],[334,296],[296,282],[449,347],[347,346],[346,449],[264,447],[447,454],[454,264],[336,296],[296,299],[299,336],[338,10],[10,151],[151,338],[278,439],[439,455],[455,278],[292,407],[407,415],[415,292],[358,371],[371,355],[355,358],[340,345],[345,372],[372,340],[346,347],[347,280],[280,346],[442,443],[443,282],[282,442],[19,94],[94,370],[370,19],[441,442],[442,295],[295,441],[248,419],[419,197],[197,248],[263,255],[255,359],[359,263],[440,275],[275,274],[274,440],[300,383],[383,368],[368,300],[351,412],[412,465],[465,351],[263,467],[467,466],[466,263],[301,368],[368,389],[389,301],[395,378],[378,379],[379,395],[412,351],[351,419],[419,412],[436,426],[426,322],[322,436],[2,164],[164,393],[393,2],[370,462],[462,461],[461,370],[164,0],[0,267],[267,164],[302,11],[11,12],[12,302],[268,12],[12,13],[13,268],[293,300],[300,301],[301,293],[446,261],[261,340],[340,446],[330,266],[266,425],[425,330],[426,423],[423,391],[391,426],[429,355],[355,437],[437,429],[391,327],[327,326],[326,391],[440,457],[457,438],[438,440],[341,382],[382,362],[362,341],[459,457],[457,461],[461,459],[434,430],[430,394],[394,434],[414,463],[463,362],[362,414],[396,369],[369,262],[262,396],[354,461],[461,457],[457,354],[316,403],[403,402],[402,316],[315,404],[404,403],[403,315],[314,405],[405,404],[404,314],[313,406],[406,405],[405,313],[421,418],[418,406],[406,421],[366,401],[401,361],[361,366],[306,408],[408,407],[407,306],[291,409],[409,408],[408,291],[287,410],[410,409],[409,287],[432,436],[436,410],[410,432],[434,416],[416,411],[411,434],[264,368],[368,383],[383,264],[309,438],[438,457],[457,309],[352,376],[376,401],[401,352],[274,275],[275,4],[4,274],[421,428],[428,262],[262,421],[294,327],[327,358],[358,294],[433,416],[416,367],[367,433],[289,455],[455,439],[439,289],[462,370],[370,326],[326,462],[2,326],[326,370],[370,2],[305,460],[460,455],[455,305],[254,449],[449,448],[448,254],[255,261],[261,446],[446,255],[253,450],[450,449],[449,253],[252,451],[451,450],[450,252],[256,452],[452,451],[451,256],[341,453],[453,452],[452,341],[413,464],[464,463],[463,413],[441,413],[413,414],[414,441],[258,442],[442,441],[441,258],[257,443],[443,442],[442,257],[259,444],[444,443],[443,259],[260,445],[445,444],[444,260],[467,342],[342,445],[445,467],[459,458],[458,250],[250,459],[289,392],[392,290],[290,289],[290,328],[328,460],[460,290],[376,433],[433,435],[435,376],[250,290],[290,392],[392,250],[411,416],[416,433],[433,411],[341,463],[463,464],[464,341],[453,464],[464,465],[465,453],[357,465],[465,412],[412,357],[343,412],[412,399],[399,343],[360,363],[363,440],[440,360],[437,399],[399,456],[456,437],[420,456],[456,363],[363,420],[401,435],[435,288],[288,401],[372,383],[383,353],[353,372],[339,255],[255,249],[249,339],[448,261],[261,255],[255,448],[133,243],[243,190],[190,133],[133,155],[155,112],[112,133],[33,246],[246,247],[247,33],[33,130],[130,25],[25,33],[398,384],[384,286],[286,398],[362,398],[398,414],[414,362],[362,463],[463,341],[341,362],[263,359],[359,467],[467,263],[263,249],[249,255],[255,263],[466,467],[467,260],[260,466],[75,60],[60,166],[166,75],[238,239],[239,79],[79,238],[162,127],[127,139],[139,162],[72,11],[11,37],[37,72],[121,232],[232,120],[120,121],[73,72],[72,39],[39,73],[114,128],[128,47],[47,114],[233,232],[232,128],[128,233],[103,104],[104,67],[67,103],[152,175],[175,148],[148,152],[119,118],[118,101],[101,119],[74,73],[73,40],[40,74],[107,9],[9,108],[108,107],[49,48],[48,131],[131,49],[32,194],[194,211],[211,32],[184,74],[74,185],[185,184],[191,80],[80,183],[183,191],[185,40],[40,186],[186,185],[119,230],[230,118],[118,119],[210,202],[202,214],[214,210],[84,83],[83,17],[17,84],[77,76],[76,146],[146,77],[161,160],[160,30],[30,161],[190,56],[56,173],[173,190],[182,106],[106,194],[194,182],[138,135],[135,192],[192,138],[129,203],[203,98],[98,129],[54,21],[21,68],[68,54],[5,51],[51,4],[4,5],[145,144],[144,23],[23,145],[90,77],[77,91],[91,90],[207,205],[205,187],[187,207],[83,201],[201,18],[18,83],[181,91],[91,182],[182,181],[180,90],[90,181],[181,180],[16,85],[85,17],[17,16],[205,206],[206,36],[36,205],[176,148],[148,140],[140,176],[165,92],[92,39],[39,165],[245,193],[193,244],[244,245],[27,159],[159,28],[28,27],[30,247],[247,161],[161,30],[174,236],[236,196],[196,174],[103,54],[54,104],[104,103],[55,193],[193,8],[8,55],[111,117],[117,31],[31,111],[221,189],[189,55],[55,221],[240,98],[98,99],[99,240],[142,126],[126,100],[100,142],[219,166],[166,218],[218,219],[112,155],[155,26],[26,112],[198,209],[209,131],[131,198],[169,135],[135,150],[150,169],[114,47],[47,217],[217,114],[224,223],[223,53],[53,224],[220,45],[45,134],[134,220],[32,211],[211,140],[140,32],[109,67],[67,108],[108,109],[146,43],[43,91],[91,146],[231,230],[230,120],[120,231],[113,226],[226,247],[247,113],[105,63],[63,52],[52,105],[241,238],[238,242],[242,241],[124,46],[46,156],[156,124],[95,78],[78,96],[96,95],[70,46],[46,63],[63,70],[116,143],[143,227],[227,116],[116,123],[123,111],[111,116],[1,44],[44,19],[19,1],[3,236],[236,51],[51,3],[207,216],[216,205],[205,207],[26,154],[154,22],[22,26],[165,39],[39,167],[167,165],[199,200],[200,208],[208,199],[101,36],[36,100],[100,101],[43,57],[57,202],[202,43],[242,20],[20,99],[99,242],[56,28],[28,157],[157,56],[124,35],[35,113],[113,124],[29,160],[160,27],[27,29],[211,204],[204,210],[210,211],[124,113],[113,46],[46,124],[106,43],[43,204],[204,106],[96,62],[62,77],[77,96],[227,137],[137,116],[116,227],[73,41],[41,72],[72,73],[36,203],[203,142],[142,36],[235,64],[64,240],[240,235],[48,49],[49,64],[64,48],[42,41],[41,74],[74,42],[214,212],[212,207],[207,214],[183,42],[42,184],[184,183],[210,169],[169,211],[211,210],[140,170],[170,176],[176,140],[104,105],[105,69],[69,104],[193,122],[122,168],[168,193],[50,123],[123,187],[187,50],[89,96],[96,90],[90,89],[66,65],[65,107],[107,66],[179,89],[89,180],[180,179],[119,101],[101,120],[120,119],[68,63],[63,104],[104,68],[234,93],[93,227],[227,234],[16,15],[15,85],[85,16],[209,129],[129,49],[49,209],[15,14],[14,86],[86,15],[107,55],[55,9],[9,107],[120,100],[100,121],[121,120],[153,145],[145,22],[22,153],[178,88],[88,179],[179,178],[197,6],[6,196],[196,197],[89,88],[88,96],[96,89],[135,138],[138,136],[136,135],[138,215],[215,172],[172,138],[218,115],[115,219],[219,218],[41,42],[42,81],[81,41],[5,195],[195,51],[51,5],[57,43],[43,61],[61,57],[208,171],[171,199],[199,208],[41,81],[81,38],[38,41],[224,53],[53,225],[225,224],[24,144],[144,110],[110,24],[105,52],[52,66],[66,105],[118,229],[229,117],[117,118],[227,34],[34,234],[234,227],[66,107],[107,69],[69,66],[10,109],[109,151],[151,10],[219,48],[48,235],[235,219],[183,62],[62,191],[191,183],[142,129],[129,126],[126,142],[116,111],[111,143],[143,116],[118,117],[117,50],[50,118],[223,222],[222,52],[52,223],[94,19],[19,141],[141,94],[222,221],[221,65],[65,222],[196,3],[3,197],[197,196],[45,220],[220,44],[44,45],[156,70],[70,139],[139,156],[188,122],[122,245],[245,188],[139,71],[71,162],[162,139],[149,170],[170,150],[150,149],[122,188],[188,196],[196,122],[206,216],[216,92],[92,206],[164,2],[2,167],[167,164],[242,141],[141,241],[241,242],[0,164],[164,37],[37,0],[11,72],[72,12],[12,11],[12,38],[38,13],[13,12],[70,63],[63,71],[71,70],[31,226],[226,111],[111,31],[36,101],[101,205],[205,36],[203,206],[206,165],[165,203],[126,209],[209,217],[217,126],[98,165],[165,97],[97,98],[237,220],[220,218],[218,237],[237,239],[239,241],[241,237],[210,214],[214,169],[169,210],[140,171],[171,32],[32,140],[241,125],[125,237],[237,241],[179,86],[86,178],[178,179],[180,85],[85,179],[179,180],[181,84],[84,180],[180,181],[182,83],[83,181],[181,182],[194,201],[201,182],[182,194],[177,137],[137,132],[132,177],[184,76],[76,183],[183,184],[185,61],[61,184],[184,185],[186,57],[57,185],[185,186],[216,212],[212,186],[186,216],[192,214],[214,187],[187,192],[139,34],[34,156],[156,139],[218,79],[79,237],[237,218],[147,123],[123,177],[177,147],[45,44],[44,4],[4,45],[208,201],[201,32],[32,208],[98,64],[64,129],[129,98],[192,213],[213,138],[138,192],[235,59],[59,219],[219,235],[141,242],[242,97],[97,141],[97,2],[2,141],[141,97],[240,75],[75,235],[235,240],[229,24],[24,228],[228,229],[31,25],[25,226],[226,31],[230,23],[23,229],[229,230],[231,22],[22,230],[230,231],[232,26],[26,231],[231,232],[233,112],[112,232],[232,233],[244,189],[189,243],[243,244],[189,221],[221,190],[190,189],[222,28],[28,221],[221,222],[223,27],[27,222],[222,223],[224,29],[29,223],[223,224],[225,30],[30,224],[224,225],[113,247],[247,225],[225,113],[99,60],[60,240],[240,99],[213,147],[147,215],[215,213],[60,20],[20,166],[166,60],[192,187],[187,213],[213,192],[243,112],[112,244],[244,243],[244,233],[233,245],[245,244],[245,128],[128,188],[188,245],[188,114],[114,174],[174,188],[134,131],[131,220],[220,134],[174,217],[217,236],[236,174],[236,198],[198,134],[134,236],[215,177],[177,58],[58,215],[156,143],[143,124],[124,156],[25,110],[110,7],[7,25],[31,228],[228,25],[25,31],[264,356],[356,368],[368,264],[0,11],[11,267],[267,0],[451,452],[452,349],[349,451],[267,302],[302,269],[269,267],[350,357],[357,277],[277,350],[350,452],[452,357],[357,350],[299,333],[333,297],[297,299],[396,175],[175,377],[377,396],[280,347],[347,330],[330,280],[269,303],[303,270],[270,269],[151,9],[9,337],[337,151],[344,278],[278,360],[360,344],[424,418],[418,431],[431,424],[270,304],[304,409],[409,270],[272,310],[310,407],[407,272],[322,270],[270,410],[410,322],[449,450],[450,347],[347,449],[432,422],[422,434],[434,432],[18,313],[313,17],[17,18],[291,306],[306,375],[375,291],[259,387],[387,260],[260,259],[424,335],[335,418],[418,424],[434,364],[364,416],[416,434],[391,423],[423,327],[327,391],[301,251],[251,298],[298,301],[275,281],[281,4],[4,275],[254,373],[373,253],[253,254],[375,307],[307,321],[321,375],[280,425],[425,411],[411,280],[200,421],[421,18],[18,200],[335,321],[321,406],[406,335],[321,320],[320,405],[405,321],[314,315],[315,17],[17,314],[423,426],[426,266],[266,423],[396,377],[377,369],[369,396],[270,322],[322,269],[269,270],[413,417],[417,464],[464,413],[385,386],[386,258],[258,385],[248,456],[456,419],[419,248],[298,284],[284,333],[333,298],[168,417],[417,8],[8,168],[448,346],[346,261],[261,448],[417,413],[413,285],[285,417],[326,327],[327,328],[328,326],[277,355],[355,329],[329,277],[309,392],[392,438],[438,309],[381,382],[382,256],[256,381],[279,429],[429,360],[360,279],[365,364],[364,379],[379,365],[355,277],[277,437],[437,355],[282,443],[443,283],[283,282],[281,275],[275,363],[363,281],[395,431],[431,369],[369,395],[299,297],[297,337],[337,299],[335,273],[273,321],[321,335],[348,450],[450,349],[349,348],[359,446],[446,467],[467,359],[283,293],[293,282],[282,283],[250,458],[458,462],[462,250],[300,276],[276,383],[383,300],[292,308],[308,325],[325,292],[283,276],[276,293],[293,283],[264,372],[372,447],[447,264],[346,352],[352,340],[340,346],[354,274],[274,19],[19,354],[363,456],[456,281],[281,363],[426,436],[436,425],[425,426],[380,381],[381,252],[252,380],[267,269],[269,393],[393,267],[421,200],[200,428],[428,421],[371,266],[266,329],[329,371],[432,287],[287,422],[422,432],[290,250],[250,328],[328,290],[385,258],[258,384],[384,385],[446,265],[265,342],[342,446],[386,387],[387,257],[257,386],[422,424],[424,430],[430,422],[445,342],[342,276],[276,445],[422,273],[273,424],[424,422],[306,292],[292,307],[307,306],[352,366],[366,345],[345,352],[268,271],[271,302],[302,268],[358,423],[423,371],[371,358],[327,294],[294,460],[460,327],[331,279],[279,294],[294,331],[303,271],[271,304],[304,303],[436,432],[432,427],[427,436],[304,272],[272,408],[408,304],[395,394],[394,431],[431,395],[378,395],[395,400],[400,378],[296,334],[334,299],[299,296],[6,351],[351,168],[168,6],[376,352],[352,411],[411,376],[307,325],[325,320],[320,307],[285,295],[295,336],[336,285],[320,319],[319,404],[404,320],[329,330],[330,349],[349,329],[334,293],[293,333],[333,334],[366,323],[323,447],[447,366],[316,15],[15,315],[315,316],[331,358],[358,279],[279,331],[317,14],[14,316],[316,317],[8,285],[285,9],[9,8],[277,329],[329,350],[350,277],[253,374],[374,252],[252,253],[319,318],[318,403],[403,319],[351,6],[6,419],[419,351],[324,318],[318,325],[325,324],[397,367],[367,365],[365,397],[288,435],[435,397],[397,288],[278,344],[344,439],[439,278],[310,272],[272,311],[311,310],[248,195],[195,281],[281,248],[375,273],[273,291],[291,375],[175,396],[396,199],[199,175],[312,311],[311,268],[268,312],[276,283],[283,445],[445,276],[390,373],[373,339],[339,390],[295,282],[282,296],[296,295],[448,449],[449,346],[346,448],[356,264],[264,454],[454,356],[337,336],[336,299],[299,337],[337,338],[338,151],[151,337],[294,278],[278,455],[455,294],[308,292],[292,415],[415,308],[429,358],[358,355],[355,429],[265,340],[340,372],[372,265],[352,346],[346,280],[280,352],[295,442],[442,282],[282,295],[354,19],[19,370],[370,354],[285,441],[441,295],[295,285],[195,248],[248,197],[197,195],[457,440],[440,274],[274,457],[301,300],[300,368],[368,301],[417,351],[351,465],[465,417],[251,301],[301,389],[389,251],[394,395],[395,379],[379,394],[399,412],[412,419],[419,399],[410,436],[436,322],[322,410],[326,2],[2,393],[393,326],[354,370],[370,461],[461,354],[393,164],[164,267],[267,393],[268,302],[302,12],[12,268],[312,268],[268,13],[13,312],[298,293],[293,301],[301,298],[265,446],[446,340],[340,265],[280,330],[330,425],[425,280],[322,426],[426,391],[391,322],[420,429],[429,437],[437,420],[393,391],[391,326],[326,393],[344,440],[440,438],[438,344],[458,459],[459,461],[461,458],[364,434],[434,394],[394,364],[428,396],[396,262],[262,428],[274,354],[354,457],[457,274],[317,316],[316,402],[402,317],[316,315],[315,403],[403,316],[315,314],[314,404],[404,315],[314,313],[313,405],[405,314],[313,421],[421,406],[406,313],[323,366],[366,361],[361,323],[292,306],[306,407],[407,292],[306,291],[291,408],[408,306],[291,287],[287,409],[409,291],[287,432],[432,410],[410,287],[427,434],[434,411],[411,427],[372,264],[264,383],[383,372],[459,309],[309,457],[457,459],[366,352],[352,401],[401,366],[1,274],[274,4],[4,1],[418,421],[421,262],[262,418],[331,294],[294,358],[358,331],[435,433],[433,367],[367,435],[392,289],[289,439],[439,392],[328,462],[462,326],[326,328],[94,2],[2,370],[370,94],[289,305],[305,455],[455,289],[339,254],[254,448],[448,339],[359,255],[255,446],[446,359],[254,253],[253,449],[449,254],[253,252],[252,450],[450,253],[252,256],[256,451],[451,252],[256,341],[341,452],[452,256],[414,413],[413,463],[463,414],[286,441],[441,414],[414,286],[286,258],[258,441],[441,286],[258,257],[257,442],[442,258],[257,259],[259,443],[443,257],[259,260],[260,444],[444,259],[260,467],[467,445],[445,260],[309,459],[459,250],[250,309],[305,289],[289,290],[290,305],[305,290],[290,460],[460,305],[401,376],[376,435],[435,401],[309,250],[250,392],[392,309],[376,411],[411,433],[433,376],[453,341],[341,464],[464,453],[357,453],[453,465],[465,357],[343,357],[357,412],[412,343],[437,343],[343,399],[399,437],[344,360],[360,440],[440,344],[420,437],[437,456],[456,420],[360,420],[420,363],[363,360],[361,401],[401,288],[288,361],[265,372],[372,353],[353,265],[390,339],[339,249],[249,390],[339,448],[448,255],[255,339]);function mx(n){n.m={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]}}var pt=class extends ci{constructor(n,e){super(new Bi(n,e),"image_in","norm_rect",!1),this.m={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]},this.outputFacialTransformationMatrixes=this.outputFaceBlendshapes=!1,ke(n=this.i=new ay,0,1,e=new Yt),this.C=new ry,ke(this.i,0,3,this.C),this.v=new gd,ke(this.i,0,2,this.v),cs(this.v,4,1),Ve(this.v,2,.5),Ve(this.C,2,.5),Ve(this.i,4,.5)}D(){return"FaceLandmarker"}get baseOptions(){return St(this.i,Yt,1)}set baseOptions(n){ke(this.i,0,1,n)}A(n){return"numFaces"in n&&cs(this.v,4,n.numFaces??1),"minFaceDetectionConfidence"in n&&Ve(this.v,2,n.minFaceDetectionConfidence??.5),"minTrackingConfidence"in n&&Ve(this.i,4,n.minTrackingConfidence??.5),"minFacePresenceConfidence"in n&&Ve(this.C,2,n.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in n&&(this.outputFaceBlendshapes=!!n.outputFaceBlendshapes),"outputFacialTransformationMatrixes"in n&&(this.outputFacialTransformationMatrixes=!!n.outputFacialTransformationMatrixes),this.l(n)}H(n,e){return mx(this),ki(this,n,e),this.m}I(n,e,t){return mx(this),fs(this,n,t,e),this.m}u(){var n=new hi;$t(n,"image_in"),$t(n,"norm_rect"),bt(n,"face_landmarks");var e=new li;us(e,uw,this.i);var t=new jn;oi(t,2,"mediapipe.tasks.vision.face_landmarker.FaceLandmarkerGraph"),Wt(t,"IMAGE:image_in"),Wt(t,"NORM_RECT:norm_rect"),gt(t,"NORM_LANDMARKS:face_landmarks"),t.A(e),Mi(n,t),this.h.attachProtoVectorListener("face_landmarks",(i,s)=>{for(let r of i)i=nl(r),this.m.faceLandmarks.push(il(i));we(this,s)}),this.h.attachEmptyPacketListener("face_landmarks",i=>{we(this,i)}),this.outputFaceBlendshapes&&(bt(n,"blendshapes"),gt(t,"BLENDSHAPES:blendshapes"),this.h.attachProtoVectorListener("blendshapes",(i,s)=>{if(this.outputFaceBlendshapes)for(let r of i)i=md(r),this.m.faceBlendshapes.push(Bm(i.h()??[]));we(this,s)}),this.h.attachEmptyPacketListener("blendshapes",i=>{we(this,i)})),this.outputFacialTransformationMatrixes&&(bt(n,"face_geometry"),gt(t,"FACE_GEOMETRY:face_geometry"),this.h.attachProtoVectorListener("face_geometry",(i,s)=>{if(this.outputFacialTransformationMatrixes)for(let r of i)(i=St(i=hw(r),QA,2))&&this.m.facialTransformationMatrixes.push({rows:vi(i,1)??0??0,columns:vi(i,2)??0??0,data:Wr(i,3,ri).slice()??[]});we(this,s)}),this.h.attachEmptyPacketListener("face_geometry",i=>{we(this,i)})),n=n.h(),this.setGraph(new Uint8Array(n),!0)}};pt.prototype.detectForVideo=pt.prototype.I,pt.prototype.detect=pt.prototype.H,pt.prototype.setOptions=pt.prototype.A,pt.createFromModelPath=function(n,e){return yt(pt,n,{baseOptions:{modelAssetPath:e}})},pt.createFromModelBuffer=function(n,e){return yt(pt,n,{baseOptions:{modelAssetBuffer:e}})},pt.createFromOptions=function(n,e){return yt(pt,n,e)},pt.FACE_LANDMARKS_LIPS=Wm,Vt("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_LIPS",pt.FACE_LANDMARKS_LIPS),pt.FACE_LANDMARKS_LEFT_EYE=Xm,Vt("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_LEFT_EYE",pt.FACE_LANDMARKS_LEFT_EYE),pt.FACE_LANDMARKS_LEFT_EYEBROW=qm,Vt("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_LEFT_EYEBROW",pt.FACE_LANDMARKS_LEFT_EYEBROW),pt.FACE_LANDMARKS_LEFT_IRIS=Oy,Vt("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_LEFT_IRIS",pt.FACE_LANDMARKS_LEFT_IRIS),pt.FACE_LANDMARKS_RIGHT_EYE=$m,Vt("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_RIGHT_EYE",pt.FACE_LANDMARKS_RIGHT_EYE),pt.FACE_LANDMARKS_RIGHT_EYEBROW=Ym,Vt("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_RIGHT_EYEBROW",pt.FACE_LANDMARKS_RIGHT_EYEBROW),pt.FACE_LANDMARKS_RIGHT_IRIS=By,Vt("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_RIGHT_IRIS",pt.FACE_LANDMARKS_RIGHT_IRIS),pt.FACE_LANDMARKS_FACE_OVAL=Km,Vt("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_FACE_OVAL",pt.FACE_LANDMARKS_FACE_OVAL),pt.FACE_LANDMARKS_CONTOURS=ky,Vt("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_CONTOURS",pt.FACE_LANDMARKS_CONTOURS),pt.FACE_LANDMARKS_TESSELATION=zy,Vt("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_TESSELATION",pt.FACE_LANDMARKS_TESSELATION);var jm=Oi([0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[0,17],[17,18],[18,19],[19,20]);function gx(n){n.gestures=[],n.landmarks=[],n.worldLandmarks=[],n.handedness=[]}function _x(n){return n.gestures.length===0?{gestures:[],landmarks:[],worldLandmarks:[],handedness:[],handednesses:[]}:{gestures:n.gestures,landmarks:n.landmarks,worldLandmarks:n.worldLandmarks,handedness:n.handedness,handednesses:n.handedness}}function xx(n,e=!0){var t=[];for(let s of n){var i=md(s);n=[];for(let r of i.h())i=e&&vi(r,1)!=null?vi(r,1)??0:-1,n.push({score:Dn(r,2)??0,index:i,categoryName:bn(Ht(r,3))??""??"",displayName:bn(Ht(r,4))??""??""});t.push(n)}return t}var Wn=class extends ci{constructor(n,e){super(new Bi(n,e),"image_in","norm_rect",!1),this.gestures=[],this.landmarks=[],this.worldLandmarks=[],this.handedness=[],ke(n=this.m=new ly,0,1,e=new Yt),this.v=new Dm,ke(this.m,0,2,this.v),this.G=new Nm,ke(this.v,0,3,this.G),this.C=new cy,ke(this.v,0,2,this.C),this.i=new dw,ke(this.m,0,3,this.i),Ve(this.C,2,.5),Ve(this.v,4,.5),Ve(this.G,2,.5)}D(){return"GestureRecognizer"}get baseOptions(){return St(this.m,Yt,1)}set baseOptions(n){ke(this.m,0,1,n)}A(n){if(cs(this.C,3,n.numHands??1),"minHandDetectionConfidence"in n&&Ve(this.C,2,n.minHandDetectionConfidence??.5),"minTrackingConfidence"in n&&Ve(this.v,4,n.minTrackingConfidence??.5),"minHandPresenceConfidence"in n&&Ve(this.G,2,n.minHandPresenceConfidence??.5),n.cannedGesturesClassifierOptions){var e=new to,t=e,i=zp(n.cannedGesturesClassifierOptions,St(this.i,to,3)?.l());ke(t,0,2,i),ke(this.i,0,3,e)}else n.cannedGesturesClassifierOptions===void 0&&St(this.i,to,3)?.h();return n.customGesturesClassifierOptions?(ke(t=e=new to,0,2,i=zp(n.customGesturesClassifierOptions,St(this.i,to,4)?.l())),ke(this.i,0,4,e)):n.customGesturesClassifierOptions===void 0&&St(this.i,to,4)?.h(),this.l(n)}Ya(n,e){return gx(this),ki(this,n,e),_x(this)}Za(n,e,t){return gx(this),fs(this,n,t,e),_x(this)}u(){var n=new hi;$t(n,"image_in"),$t(n,"norm_rect"),bt(n,"hand_gestures"),bt(n,"hand_landmarks"),bt(n,"world_hand_landmarks"),bt(n,"handedness");var e=new li;us(e,fw,this.m);var t=new jn;oi(t,2,"mediapipe.tasks.vision.gesture_recognizer.GestureRecognizerGraph"),Wt(t,"IMAGE:image_in"),Wt(t,"NORM_RECT:norm_rect"),gt(t,"HAND_GESTURES:hand_gestures"),gt(t,"LANDMARKS:hand_landmarks"),gt(t,"WORLD_LANDMARKS:world_hand_landmarks"),gt(t,"HANDEDNESS:handedness"),t.A(e),Mi(n,t),this.h.attachProtoVectorListener("hand_landmarks",(i,s)=>{for(let r of i)i=nl(r),this.landmarks.push(il(i));we(this,s)}),this.h.attachEmptyPacketListener("hand_landmarks",i=>{we(this,i)}),this.h.attachProtoVectorListener("world_hand_landmarks",(i,s)=>{for(let r of i)i=so(r),this.worldLandmarks.push(ro(i));we(this,s)}),this.h.attachEmptyPacketListener("world_hand_landmarks",i=>{we(this,i)}),this.h.attachProtoVectorListener("hand_gestures",(i,s)=>{this.gestures.push(...xx(i,!1)),we(this,s)}),this.h.attachEmptyPacketListener("hand_gestures",i=>{we(this,i)}),this.h.attachProtoVectorListener("handedness",(i,s)=>{this.handedness.push(...xx(i)),we(this,s)}),this.h.attachEmptyPacketListener("handedness",i=>{we(this,i)}),n=n.h(),this.setGraph(new Uint8Array(n),!0)}};function vx(n){return{landmarks:n.landmarks,worldLandmarks:n.worldLandmarks,handednesses:n.handedness,handedness:n.handedness}}Wn.prototype.recognizeForVideo=Wn.prototype.Za,Wn.prototype.recognize=Wn.prototype.Ya,Wn.prototype.setOptions=Wn.prototype.A,Wn.createFromModelPath=function(n,e){return yt(Wn,n,{baseOptions:{modelAssetPath:e}})},Wn.createFromModelBuffer=function(n,e){return yt(Wn,n,{baseOptions:{modelAssetBuffer:e}})},Wn.createFromOptions=function(n,e){return yt(Wn,n,e)},Wn.HAND_CONNECTIONS=jm,Vt("module$exports$google3$third_party$mediapipe$tasks$web$vision$gesture_recognizer$gesture_recognizer.GestureRecognizer.HAND_CONNECTIONS",Wn.HAND_CONNECTIONS);var Xn=class extends ci{constructor(n,e){super(new Bi(n,e),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.handedness=[],ke(n=this.i=new Dm,0,1,e=new Yt),this.v=new Nm,ke(this.i,0,3,this.v),this.m=new cy,ke(this.i,0,2,this.m),cs(this.m,3,1),Ve(this.m,2,.5),Ve(this.v,2,.5),Ve(this.i,4,.5)}D(){return"HandLandmarker"}get baseOptions(){return St(this.i,Yt,1)}set baseOptions(n){ke(this.i,0,1,n)}A(n){return"numHands"in n&&cs(this.m,3,n.numHands??1),"minHandDetectionConfidence"in n&&Ve(this.m,2,n.minHandDetectionConfidence??.5),"minTrackingConfidence"in n&&Ve(this.i,4,n.minTrackingConfidence??.5),"minHandPresenceConfidence"in n&&Ve(this.v,2,n.minHandPresenceConfidence??.5),this.l(n)}H(n,e){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],ki(this,n,e),vx(this)}I(n,e,t){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],fs(this,n,t,e),vx(this)}u(){var n=new hi;$t(n,"image_in"),$t(n,"norm_rect"),bt(n,"hand_landmarks"),bt(n,"world_hand_landmarks"),bt(n,"handedness");var e=new li;us(e,pw,this.i);var t=new jn;oi(t,2,"mediapipe.tasks.vision.hand_landmarker.HandLandmarkerGraph"),Wt(t,"IMAGE:image_in"),Wt(t,"NORM_RECT:norm_rect"),gt(t,"LANDMARKS:hand_landmarks"),gt(t,"WORLD_LANDMARKS:world_hand_landmarks"),gt(t,"HANDEDNESS:handedness"),t.A(e),Mi(n,t),this.h.attachProtoVectorListener("hand_landmarks",(i,s)=>{for(let r of i)i=nl(r),this.landmarks.push(il(i));we(this,s)}),this.h.attachEmptyPacketListener("hand_landmarks",i=>{we(this,i)}),this.h.attachProtoVectorListener("world_hand_landmarks",(i,s)=>{for(let r of i)i=so(r),this.worldLandmarks.push(ro(i));we(this,s)}),this.h.attachEmptyPacketListener("world_hand_landmarks",i=>{we(this,i)}),this.h.attachProtoVectorListener("handedness",(i,s)=>{var r=this.handedness,a=r.push,o=[];for(let c of i){i=md(c);let l=[];for(let h of i.h())l.push({score:Dn(h,2)??0,index:vi(h,1)??0??-1,categoryName:bn(Ht(h,3))??""??"",displayName:bn(Ht(h,4))??""??""});o.push(l)}a.call(r,...o),we(this,s)}),this.h.attachEmptyPacketListener("handedness",i=>{we(this,i)}),n=n.h(),this.setGraph(new Uint8Array(n),!0)}};Xn.prototype.detectForVideo=Xn.prototype.I,Xn.prototype.detect=Xn.prototype.H,Xn.prototype.setOptions=Xn.prototype.A,Xn.createFromModelPath=function(n,e){return yt(Xn,n,{baseOptions:{modelAssetPath:e}})},Xn.createFromModelBuffer=function(n,e){return yt(Xn,n,{baseOptions:{modelAssetBuffer:e}})},Xn.createFromOptions=function(n,e){return yt(Xn,n,e)},Xn.HAND_CONNECTIONS=jm,Vt("module$exports$google3$third_party$mediapipe$tasks$web$vision$hand_landmarker$hand_landmarker.HandLandmarker.HAND_CONNECTIONS",Xn.HAND_CONNECTIONS);var Gy=Oi([0,1],[1,2],[2,3],[3,7],[0,4],[4,5],[5,6],[6,8],[9,10],[11,12],[11,13],[13,15],[15,17],[15,19],[15,21],[17,19],[12,14],[14,16],[16,18],[16,20],[16,22],[18,20],[11,23],[12,24],[23,24],[23,25],[24,26],[25,27],[26,28],[27,29],[28,30],[29,31],[30,32],[27,31],[28,32]);function yx(n){n.i={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]}}function Sx(n){try{if(!n.G)return n.i;n.G(n.i)}finally{xd(n)}}function bu(n,e){n=nl(n),e.push(il(n))}var ut=class extends ci{constructor(n,e){super(new Bi(n,e),"input_frames_image",null,!1),this.i={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]},this.outputPoseSegmentationMasks=this.outputFaceBlendshapes=!1,ke(n=this.m=new py,0,1,e=new Yt),this.Z=new Nm,ke(this.m,0,2,this.Z),this.Ba=new mw,ke(this.m,0,3,this.Ba),this.v=new gd,ke(this.m,0,4,this.v),this.P=new ry,ke(this.m,0,5,this.P),this.C=new dy,ke(this.m,0,6,this.C),this.aa=new fy,ke(this.m,0,7,this.aa),Ve(this.v,2,.5),Ve(this.v,3,.3),Ve(this.P,2,.5),Ve(this.C,2,.5),Ve(this.C,3,.3),Ve(this.aa,2,.5),Ve(this.Z,2,.5)}D(){return"HolisticLandmarker"}get baseOptions(){return St(this.m,Yt,1)}set baseOptions(n){ke(this.m,0,1,n)}A(n){return"minFaceDetectionConfidence"in n&&Ve(this.v,2,n.minFaceDetectionConfidence??.5),"minFaceSuppressionThreshold"in n&&Ve(this.v,3,n.minFaceSuppressionThreshold??.3),"minFacePresenceConfidence"in n&&Ve(this.P,2,n.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in n&&(this.outputFaceBlendshapes=!!n.outputFaceBlendshapes),"minPoseDetectionConfidence"in n&&Ve(this.C,2,n.minPoseDetectionConfidence??.5),"minPoseSuppressionThreshold"in n&&Ve(this.C,3,n.minPoseSuppressionThreshold??.3),"minPosePresenceConfidence"in n&&Ve(this.aa,2,n.minPosePresenceConfidence??.5),"outputPoseSegmentationMasks"in n&&(this.outputPoseSegmentationMasks=!!n.outputPoseSegmentationMasks),"minHandLandmarksConfidence"in n&&Ve(this.Z,2,n.minHandLandmarksConfidence??.5),this.l(n)}H(n,e,t){var i=typeof e!="function"?e:{};return this.G=typeof e=="function"?e:t,yx(this),ki(this,n,i),Sx(this)}I(n,e,t,i){var s=typeof t!="function"?t:{};return this.G=typeof t=="function"?t:i,yx(this),fs(this,n,s,e),Sx(this)}u(){var n=new hi;$t(n,"input_frames_image"),bt(n,"pose_landmarks"),bt(n,"pose_world_landmarks"),bt(n,"face_landmarks"),bt(n,"left_hand_landmarks"),bt(n,"left_hand_world_landmarks"),bt(n,"right_hand_landmarks"),bt(n,"right_hand_world_landmarks");var e=new li,t=new L1;oi(t,1,"type.googleapis.com/mediapipe.tasks.vision.holistic_landmarker.proto.HolisticLandmarkerGraphOptions"),(function(s,r){if(r!=null)if(Array.isArray(r))et(s,2,id(r,0,Vc));else{if(!(typeof r=="string"||r instanceof rs||Qp(r)))throw Error("invalid value in Any.value field: "+r+" expected a ByteString, a base64 encoded string, a Uint8Array or a jspb array");jc(s,2,Ju(r,!1),jr())}})(t,this.m.h());var i=new jn;oi(i,2,"mediapipe.tasks.vision.holistic_landmarker.HolisticLandmarkerGraph"),Hc(i,8,L1,t),Wt(i,"IMAGE:input_frames_image"),gt(i,"POSE_LANDMARKS:pose_landmarks"),gt(i,"POSE_WORLD_LANDMARKS:pose_world_landmarks"),gt(i,"FACE_LANDMARKS:face_landmarks"),gt(i,"LEFT_HAND_LANDMARKS:left_hand_landmarks"),gt(i,"LEFT_HAND_WORLD_LANDMARKS:left_hand_world_landmarks"),gt(i,"RIGHT_HAND_LANDMARKS:right_hand_landmarks"),gt(i,"RIGHT_HAND_WORLD_LANDMARKS:right_hand_world_landmarks"),i.A(e),Mi(n,i),_d(this,n),this.h.attachProtoListener("pose_landmarks",(s,r)=>{bu(s,this.i.poseLandmarks),we(this,r)}),this.h.attachEmptyPacketListener("pose_landmarks",s=>{we(this,s)}),this.h.attachProtoListener("pose_world_landmarks",(s,r)=>{var a=this.i.poseWorldLandmarks;s=so(s),a.push(ro(s)),we(this,r)}),this.h.attachEmptyPacketListener("pose_world_landmarks",s=>{we(this,s)}),this.outputPoseSegmentationMasks&&(gt(i,"POSE_SEGMENTATION_MASK:pose_segmentation_mask"),fo(this,"pose_segmentation_mask"),this.h.ha("pose_segmentation_mask",(s,r)=>{this.i.poseSegmentationMasks=[go(this,s,!0,!this.G)],we(this,r)}),this.h.attachEmptyPacketListener("pose_segmentation_mask",s=>{this.i.poseSegmentationMasks=[],we(this,s)})),this.h.attachProtoListener("face_landmarks",(s,r)=>{bu(s,this.i.faceLandmarks),we(this,r)}),this.h.attachEmptyPacketListener("face_landmarks",s=>{we(this,s)}),this.outputFaceBlendshapes&&(bt(n,"extra_blendshapes"),gt(i,"FACE_BLENDSHAPES:extra_blendshapes"),this.h.attachProtoListener("extra_blendshapes",(s,r)=>{var a=this.i.faceBlendshapes;this.outputFaceBlendshapes&&(s=md(s),a.push(Bm(s.h()??[]))),we(this,r)}),this.h.attachEmptyPacketListener("extra_blendshapes",s=>{we(this,s)})),this.h.attachProtoListener("left_hand_landmarks",(s,r)=>{bu(s,this.i.leftHandLandmarks),we(this,r)}),this.h.attachEmptyPacketListener("left_hand_landmarks",s=>{we(this,s)}),this.h.attachProtoListener("left_hand_world_landmarks",(s,r)=>{var a=this.i.leftHandWorldLandmarks;s=so(s),a.push(ro(s)),we(this,r)}),this.h.attachEmptyPacketListener("left_hand_world_landmarks",s=>{we(this,s)}),this.h.attachProtoListener("right_hand_landmarks",(s,r)=>{bu(s,this.i.rightHandLandmarks),we(this,r)}),this.h.attachEmptyPacketListener("right_hand_landmarks",s=>{we(this,s)}),this.h.attachProtoListener("right_hand_world_landmarks",(s,r)=>{var a=this.i.rightHandWorldLandmarks;s=so(s),a.push(ro(s)),we(this,r)}),this.h.attachEmptyPacketListener("right_hand_world_landmarks",s=>{we(this,s)}),n=n.h(),this.setGraph(new Uint8Array(n),!0)}};ut.prototype.detectForVideo=ut.prototype.I,ut.prototype.detect=ut.prototype.H,ut.prototype.setOptions=ut.prototype.A,ut.createFromModelPath=function(n,e){return yt(ut,n,{baseOptions:{modelAssetPath:e}})},ut.createFromModelBuffer=function(n,e){return yt(ut,n,{baseOptions:{modelAssetBuffer:e}})},ut.createFromOptions=function(n,e){return yt(ut,n,e)},ut.HAND_CONNECTIONS=jm,Vt("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.HAND_CONNECTIONS",ut.HAND_CONNECTIONS),ut.POSE_CONNECTIONS=Gy,Vt("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.POSE_CONNECTIONS",ut.POSE_CONNECTIONS),ut.FACE_LANDMARKS_LIPS=Wm,Vt("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_LIPS",ut.FACE_LANDMARKS_LIPS),ut.FACE_LANDMARKS_LEFT_EYE=Xm,Vt("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_LEFT_EYE",ut.FACE_LANDMARKS_LEFT_EYE),ut.FACE_LANDMARKS_LEFT_EYEBROW=qm,Vt("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_LEFT_EYEBROW",ut.FACE_LANDMARKS_LEFT_EYEBROW),ut.FACE_LANDMARKS_LEFT_IRIS=Oy,Vt("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_LEFT_IRIS",ut.FACE_LANDMARKS_LEFT_IRIS),ut.FACE_LANDMARKS_RIGHT_EYE=$m,Vt("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_RIGHT_EYE",ut.FACE_LANDMARKS_RIGHT_EYE),ut.FACE_LANDMARKS_RIGHT_EYEBROW=Ym,Vt("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_RIGHT_EYEBROW",ut.FACE_LANDMARKS_RIGHT_EYEBROW),ut.FACE_LANDMARKS_RIGHT_IRIS=By,Vt("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_RIGHT_IRIS",ut.FACE_LANDMARKS_RIGHT_IRIS),ut.FACE_LANDMARKS_FACE_OVAL=Km,Vt("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_FACE_OVAL",ut.FACE_LANDMARKS_FACE_OVAL),ut.FACE_LANDMARKS_CONTOURS=ky,Vt("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_CONTOURS",ut.FACE_LANDMARKS_CONTOURS),ut.FACE_LANDMARKS_TESSELATION=zy,Vt("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_TESSELATION",ut.FACE_LANDMARKS_TESSELATION);var _i=class extends ci{constructor(n,e){super(new Bi(n,e),"input_image","norm_rect",!0),this.m={classifications:[]},ke(n=this.i=new my,0,1,e=new Yt)}D(){return"ImageClassifier"}get baseOptions(){return St(this.i,Yt,1)}set baseOptions(n){ke(this.i,0,1,n)}A(n){return ke(this.i,0,2,zp(n,St(this.i,Pm,2))),this.l(n)}Ha(n,e){return this.m={classifications:[]},ki(this,n,e),this.m}Ia(n,e,t){return this.m={classifications:[]},fs(this,n,t,e),this.m}u(){var n=new hi;$t(n,"input_image"),$t(n,"norm_rect"),bt(n,"classifications");var e=new li;us(e,gw,this.i);var t=new jn;oi(t,2,"mediapipe.tasks.vision.image_classifier.ImageClassifierGraph"),Wt(t,"IMAGE:input_image"),Wt(t,"NORM_RECT:norm_rect"),gt(t,"CLASSIFICATIONS:classifications"),t.A(e),Mi(n,t),this.h.attachProtoListener("classifications",(i,s)=>{this.m=Aw(nw(i)),we(this,s)}),this.h.attachEmptyPacketListener("classifications",i=>{we(this,i)}),n=n.h(),this.setGraph(new Uint8Array(n),!0)}};_i.prototype.classifyForVideo=_i.prototype.Ia,_i.prototype.classify=_i.prototype.Ha,_i.prototype.setOptions=_i.prototype.A,_i.createFromModelPath=function(n,e){return yt(_i,n,{baseOptions:{modelAssetPath:e}})},_i.createFromModelBuffer=function(n,e){return yt(_i,n,{baseOptions:{modelAssetBuffer:e}})},_i.createFromOptions=function(n,e){return yt(_i,n,e)};var si=class extends ci{constructor(n,e){super(new Bi(n,e),"image_in","norm_rect",!0),this.i=new gy,this.embeddings={embeddings:[]},ke(n=this.i,0,1,e=new Yt)}D(){return"ImageEmbedder"}get baseOptions(){return St(this.i,Yt,1)}set baseOptions(n){ke(this.i,0,1,n)}A(n){var e=this.i,t=St(this.i,z1,2);if(t=t?t.clone():new z1,n.l2Normalize!==void 0){var i=n.l2Normalize;et(t,1,i==null?i:Du(i))}else"l2Normalize"in n&&et(t,1);return n.quantize!==void 0?et(t,2,(i=n.quantize)==null?i:Du(i)):"quantize"in n&&et(t,2),ke(e,0,2,t),this.l(n)}Oa(n,e){return ki(this,n,e),this.embeddings}Pa(n,e,t){return fs(this,n,t,e),this.embeddings}u(){var n=new hi;$t(n,"image_in"),$t(n,"norm_rect"),bt(n,"embeddings_out");var e=new li;us(e,_w,this.i);var t=new jn;oi(t,2,"mediapipe.tasks.vision.image_embedder.ImageEmbedderGraph"),Wt(t,"IMAGE:image_in"),Wt(t,"NORM_RECT:norm_rect"),gt(t,"EMBEDDINGS:embeddings_out"),t.A(e),Mi(n,t),this.h.attachProtoListener("embeddings_out",(i,s)=>{i=aw(i),this.embeddings=(function(r){return{embeddings:na(r,rw,1).map(a=>{var o={headIndex:vi(a,3)??0??-1,headName:bn(Ht(a,4))??""??""};if(sv(a,1,Ru))a=Wr(a=Ip(a,iw,1,Ru),1,ri),o.floatEmbedding=a.slice();else{let c=new Uint8Array(0);o.quantizedEmbedding=Ip(a,sw,2,Ru)?.h()?.i()??c}return o}),timestampMs:by(Ht(r,2,void 0,Fu)??nv)}})(i),we(this,s)}),this.h.attachEmptyPacketListener("embeddings_out",i=>{we(this,i)}),n=n.h(),this.setGraph(new Uint8Array(n),!0)}};si.cosineSimilarity=function(n,e){if(n.floatEmbedding&&e.floatEmbedding)n=X1(n.floatEmbedding,e.floatEmbedding);else{if(!n.quantizedEmbedding||!e.quantizedEmbedding)throw Error("Cannot compute cosine similarity between quantized and float embeddings.");n=X1(W1(n.quantizedEmbedding),W1(e.quantizedEmbedding))}return n},si.prototype.embedForVideo=si.prototype.Pa,si.prototype.embed=si.prototype.Oa,si.prototype.setOptions=si.prototype.A,si.createFromModelPath=function(n,e){return yt(si,n,{baseOptions:{modelAssetPath:e}})},si.createFromModelBuffer=function(n,e){return yt(si,n,{baseOptions:{modelAssetBuffer:e}})},si.createFromOptions=function(n,e){return yt(si,n,e)};var jp=class{constructor(n,e,t){this.confidenceMasks=n,this.categoryMask=e,this.qualityScores=t}close(){this.confidenceMasks?.forEach(n=>{n.close()}),this.categoryMask?.close()}};function Xw(n){var e=(function(t){return na(t,jn,1)})(n.ka()).filter(t=>(bn(Ht(t,1))??"").includes("mediapipe.tasks.TensorsToSegmentationCalculator"));if(n.v=[],e.length>1)throw Error("The graph has more than one mediapipe.tasks.TensorsToSegmentationCalculator.");e.length===1&&(St(e[0],li,7)?.u()?.h()??new Map).forEach((t,i)=>{n.v[Number(i)]=bn(Ht(t,1))??""})}function Mx(n){n.categoryMask=void 0,n.confidenceMasks=void 0,n.qualityScores=void 0}function bx(n){try{let e=new jp(n.confidenceMasks,n.categoryMask,n.qualityScores);if(!n.m)return e;n.m(e)}finally{xd(n)}}jp.prototype.close=jp.prototype.close;var qn=class extends ci{constructor(n,e){super(new Bi(n,e),"image_in","norm_rect",!1),this.v=[],this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.i=new Om,this.C=new _y,ke(this.i,0,3,this.C),ke(n=this.i,0,1,e=new Yt)}D(){return"ImageSegmenter"}get baseOptions(){return St(this.i,Yt,1)}set baseOptions(n){ke(this.i,0,1,n)}A(n){return n.displayNamesLocale!==void 0?et(this.i,2,Ls(n.displayNamesLocale)):"displayNamesLocale"in n&&et(this.i,2),"outputCategoryMask"in n&&(this.outputCategoryMask=n.outputCategoryMask??!1),"outputConfidenceMasks"in n&&(this.outputConfidenceMasks=n.outputConfidenceMasks??!0),super.l(n)}M(){Xw(this)}segment(n,e,t){var i=typeof e!="function"?e:{};return this.m=typeof e=="function"?e:t,Mx(this),ki(this,n,i),bx(this)}fb(n,e,t,i){var s=typeof t!="function"?t:{};return this.m=typeof t=="function"?t:i,Mx(this),fs(this,n,s,e),bx(this)}Sa(){return this.v}u(){var n=new hi;$t(n,"image_in"),$t(n,"norm_rect");var e=new li;us(e,vy,this.i);var t=new jn;oi(t,2,"mediapipe.tasks.vision.image_segmenter.ImageSegmenterGraph"),Wt(t,"IMAGE:image_in"),Wt(t,"NORM_RECT:norm_rect"),t.A(e),Mi(n,t),_d(this,n),this.outputConfidenceMasks&&(bt(n,"confidence_masks"),gt(t,"CONFIDENCE_MASKS:confidence_masks"),fo(this,"confidence_masks"),this.h.ia("confidence_masks",(i,s)=>{this.confidenceMasks=i.map(r=>go(this,r,!0,!this.m)),we(this,s)}),this.h.attachEmptyPacketListener("confidence_masks",i=>{this.confidenceMasks=[],we(this,i)})),this.outputCategoryMask&&(bt(n,"category_mask"),gt(t,"CATEGORY_MASK:category_mask"),fo(this,"category_mask"),this.h.ha("category_mask",(i,s)=>{this.categoryMask=go(this,i,!1,!this.m),we(this,s)}),this.h.attachEmptyPacketListener("category_mask",i=>{this.categoryMask=void 0,we(this,i)})),bt(n,"quality_scores"),gt(t,"QUALITY_SCORES:quality_scores"),this.h.attachFloatVectorListener("quality_scores",(i,s)=>{this.qualityScores=i,we(this,s)}),this.h.attachEmptyPacketListener("quality_scores",i=>{this.categoryMask=void 0,we(this,i)}),n=n.h(),this.setGraph(new Uint8Array(n),!0)}};qn.prototype.getLabels=qn.prototype.Sa,qn.prototype.segmentForVideo=qn.prototype.fb,qn.prototype.segment=qn.prototype.segment,qn.prototype.setOptions=qn.prototype.A,qn.createFromModelPath=function(n,e){return yt(qn,n,{baseOptions:{modelAssetPath:e}})},qn.createFromModelBuffer=function(n,e){return yt(qn,n,{baseOptions:{modelAssetBuffer:e}})},qn.createFromOptions=function(n,e){return yt(qn,n,e)};var qw={0:0,1:1,2:2,3:3};function Mp(){return km()?void 0:document.createElement("canvas")}var $n=class extends ju{constructor(n,e){super(new kw(n,e)),this.v=new sa,this.delegate="CPU",this.i=0,this.baseOptions=new Yt,this.C=this.m=0}D(){return"InteractiveSegmenter"}get j(){return this.h.j}A(n){return this.delegate=n.baseOptions?.delegate??"CPU",super.l(n)}gb(n){if(this.i===0)throw Error("Segmenter is not initialized.");var e;if(this.m!==0&&(this.j._free(this.m),this.m=0),!(e=typeof ImageData<"u"&&n instanceof ImageData))if(typeof n!="object"||n===null)e=!1;else{e=n.data;var t=n.width,i=n.height;e=Number.isInteger(t)&&t>0&&Number.isInteger(i)&&i>0&&(e instanceof Uint8ClampedArray||e instanceof Uint8Array)}if(e)e=n.width,t=n.height,n=n.data;else{if([e,t]=zm(n),typeof OffscreenCanvas<"u")i=new OffscreenCanvas(e,t);else{if(typeof document>"u")throw Error("Canvas is not supported in this environment.");i=document.createElement("canvas")}if(i.width=e,i.height=t,!(i=i.getContext("2d")))throw Error("Canvas 2D context is not supported in this environment.");i.drawImage(n,0,0),n=i.getImageData(0,0,e,t).data}if(!n)throw Error("Unsupported image source or failed to extract image pixels.");i=(function({Xa:r,width:a,height:o}){if(a<=0||o<=0)throw Error(`Invalid image dimensions: ${a}x${o}. Dimensions must be positive.`);if(r%(a*o)!==0)throw Error(`Invalid image dimensions or pixel data length. Pixel data length ${r} is not a multiple of the number of pixels (${a*o}).`);if((r/=a*o)!==4&&r!==3&&r!==1)throw Error(`Invalid image dimensions or pixel data length. Calculated channels: ${r}. Expected 1, 3, or 4.`);return r})({Xa:n.length,width:e,height:t});var s=this.j._malloc(n.length);if(this.j.HEAPU8.set(n,s),this.m=s,!this.j._interactive_segmenter_set_image(this.i,s,e,t,i))throw Error("Failed to set image on native engine.")}segment(n){if(this.i===0)throw Error("Segmenter is not initialized.");var e=(function(h){h=h.map(({isCompleted:d,brushMode:f,point:p})=>{f=qw[f]??0,p=p.map(({x:g,y:m})=>{var M=new vw;return no(M,1,g),no(M,2,m),M});var x=new yw;return Pp(x,d),jc(x,1,Ds(f),0),Cp(x,2,p),x});var u=new Sw;return Cp(u,1,h),Mw(u)})(n);n=this.j._malloc(e.length),this.j.HEAPU8.set(e,n);var t=this.j._malloc(12),i=t+4,s=t+8,r=0,a=this.C++;try{if(this.o)if(this.delegate==="GPU"){var o=this.o;++o.h.U,o.i.set(a,performance.now())}else{var c=this.o;++c.h.R,c.i.set(a,performance.now())}if((r=this.j._interactive_segmenter_segment(this.i,n,e.length,t,i,s))===0)throw Error("Segmentation failed.");this.o?.Aa(a);let h=this.j.HEAPU32[t/4],u=this.j.HEAPU32[i/4],d=new Float32Array(this.j.HEAPU8.buffer,r,this.j.HEAPU32[s/4]/4);var l=new Float32Array(d);if(o=h*u,(l instanceof Uint8Array||l instanceof Float32Array)&&l.length!==o)throw Error("Unsupported channel count: "+l.length/o);return new cn([l],!0,!1,this.h.j.canvas??void 0,this.v,h,u)}finally{n!==0&&this.j._free(n),t!==0&&this.j._free(t),r!==0&&this.j._free(r)}}u(){this.i!==0&&(this.o?.ya(),this.j._interactive_segmenter_close(this.i),this.i=0),this.m!==0&&(this.j._free(this.m),this.m=0);var n=new qu;if(this.delegate==="GPU"){var e=new Xv;Fi(n,2,Ns,e)}else cs(e=new qA,1,4),Fi(n,1,Ns,e);if(ke(this.baseOptions,0,3,n),n=cw(this.baseOptions),e=this.j._malloc(n.length),this.j.HEAPU8.set(n,e),this.i=this.j._interactive_segmenter_create(e,n.length),this.j._free(e),this.i===0)throw Error("Failed to create native InteractiveSegmenter engine.");this.o?.za()}close(){this.i!==0&&(this.j._interactive_segmenter_close(this.i),this.i=0),this.m!==0&&(this.j._free(this.m),this.m=0),this.v.close(),super.close()}};$n.prototype.close=$n.prototype.close,$n.prototype.segment=$n.prototype.segment,$n.prototype.setImage=$n.prototype.gb,$n.prototype.setOptions=$n.prototype.A,$n.createFromModelPath=function(n,e){return Cu($n,Mp(),n,{baseOptions:{modelAssetPath:e}})},$n.createFromModelBuffer=function(n,e){return Cu($n,Mp(),n,{baseOptions:{modelAssetBuffer:e}})},$n.createFromOptions=function(n,e){var t=e.canvas??Mp();return Cu($n,t,n,e)};var Zp=class{constructor(n,e,t){this.confidenceMasks=n,this.categoryMask=e,this.qualityScores=t}close(){this.confidenceMasks?.forEach(n=>{n.close()}),this.categoryMask?.close()}};Zp.prototype.close=Zp.prototype.close;var ts=class extends ci{constructor(n,e){super(new Bi(n,e),"image_in","norm_rect_in",!1),this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.i=new Om,this.v=new _y,ke(this.i,0,3,this.v),ke(n=this.i,0,1,e=new Yt)}D(){return"InteractiveSegmenterLegacy"}get baseOptions(){return St(this.i,Yt,1)}set baseOptions(n){ke(this.i,0,1,n)}A(n){return"outputCategoryMask"in n&&(this.outputCategoryMask=n.outputCategoryMask??!1),"outputConfidenceMasks"in n&&(this.outputConfidenceMasks=n.outputConfidenceMasks??!0),super.l(n)}segment(n,e,t,i){var s=typeof t!="function"?t:{};if(this.m=typeof t=="function"?t:i,this.qualityScores=this.categoryMask=this.confidenceMasks=void 0,t=this.J+1,i=new yy,e.keypoint&&e.scribble)throw Error("Cannot provide both keypoint and scribble.");if(e.keypoint){var r=new vp;Pp(r,!0),no(r,1,e.keypoint.x),no(r,2,e.keypoint.y),Fi(i,1,kp,r)}else{if(!e.scribble)throw Error("Must provide either a keypoint or a scribble.");{let o=new bw;for(r of e.scribble)Pp(e=new vp,!0),no(e,1,r.x),no(e,2,r.y),Hc(o,1,vp,e);Fi(i,2,kp,o)}}this.h.addProtoToStream(i.h(),"mediapipe.tasks.vision.interactive_segmenter_legacy.proto.RegionOfInterest","roi_in",t),ki(this,n,s);e:{try{let o=new Zp(this.confidenceMasks,this.categoryMask,this.qualityScores);if(!this.m){var a=o;break e}this.m(o)}finally{xd(this)}a=void 0}return a}u(){var n=new hi;$t(n,"image_in"),$t(n,"roi_in"),$t(n,"norm_rect_in");var e=new li;us(e,vy,this.i);var t=new jn;oi(t,2,"mediapipe.tasks.vision.interactive_segmenter_legacy.InteractiveSegmenterLegacyGraph"),Wt(t,"IMAGE:image_in"),Wt(t,"ROI:roi_in"),Wt(t,"NORM_RECT:norm_rect_in"),t.A(e),Mi(n,t),_d(this,n),this.outputConfidenceMasks&&(bt(n,"confidence_masks"),gt(t,"CONFIDENCE_MASKS:confidence_masks"),fo(this,"confidence_masks"),this.h.ia("confidence_masks",(i,s)=>{this.confidenceMasks=i.map(r=>go(this,r,!0,!this.m)),we(this,s)}),this.h.attachEmptyPacketListener("confidence_masks",i=>{this.confidenceMasks=[],we(this,i)})),this.outputCategoryMask&&(bt(n,"category_mask"),gt(t,"CATEGORY_MASK:category_mask"),fo(this,"category_mask"),this.h.ha("category_mask",(i,s)=>{this.categoryMask=go(this,i,!1,!this.m),we(this,s)}),this.h.attachEmptyPacketListener("category_mask",i=>{this.categoryMask=void 0,we(this,i)})),bt(n,"quality_scores"),gt(t,"QUALITY_SCORES:quality_scores"),this.h.attachFloatVectorListener("quality_scores",(i,s)=>{this.qualityScores=i,we(this,s)}),this.h.attachEmptyPacketListener("quality_scores",i=>{this.categoryMask=void 0,we(this,i)}),n=n.h(),this.setGraph(new Uint8Array(n),!0)}};ts.prototype.segment=ts.prototype.segment,ts.prototype.setOptions=ts.prototype.A,ts.createFromModelPath=function(n,e){return yt(ts,n,{baseOptions:{modelAssetPath:e}})},ts.createFromModelBuffer=function(n,e){return yt(ts,n,{baseOptions:{modelAssetBuffer:e}})},ts.createFromOptions=function(n,e){return yt(ts,n,e)};var xi=class extends ci{constructor(n,e){super(new Bi(n,e),"input_frame_gpu","norm_rect",!1),this.m={detections:[]},ke(n=this.i=new Sy,0,1,e=new Yt)}D(){return"ObjectDetector"}get baseOptions(){return St(this.i,Yt,1)}set baseOptions(n){ke(this.i,0,1,n)}A(n){return n.displayNamesLocale!==void 0?et(this.i,2,Ls(n.displayNamesLocale)):"displayNamesLocale"in n&&et(this.i,2),n.maxResults!==void 0?cs(this.i,3,n.maxResults):"maxResults"in n&&et(this.i,3),n.scoreThreshold!==void 0?Ve(this.i,4,n.scoreThreshold):"scoreThreshold"in n&&et(this.i,4),n.categoryAllowlist!==void 0?Bu(this.i,5,n.categoryAllowlist):"categoryAllowlist"in n&&et(this.i,5),n.categoryDenylist!==void 0?Bu(this.i,6,n.categoryDenylist):"categoryDenylist"in n&&et(this.i,6),this.l(n)}H(n,e){return this.m={detections:[]},ki(this,n,e),this.m}I(n,e,t){return this.m={detections:[]},fs(this,n,t,e),this.m}u(){var n=new hi;$t(n,"input_frame_gpu"),$t(n,"norm_rect"),bt(n,"detections");var e=new li;us(e,Ew,this.i);var t=new jn;oi(t,2,"mediapipe.tasks.vision.ObjectDetectorGraph"),Wt(t,"IMAGE:input_frame_gpu"),Wt(t,"NORM_RECT:norm_rect"),gt(t,"DETECTIONS:detections"),t.A(e),Mi(n,t),this.h.attachProtoVectorListener("detections",(i,s)=>{for(let r of i)i=ty(r),this.m.detections.push(Ey(i));we(this,s)}),this.h.attachEmptyPacketListener("detections",i=>{we(this,i)}),n=n.h(),this.setGraph(new Uint8Array(n),!0)}};xi.prototype.detectForVideo=xi.prototype.I,xi.prototype.detect=xi.prototype.H,xi.prototype.setOptions=xi.prototype.A,xi.createFromModelPath=async function(n,e){return yt(xi,n,{baseOptions:{modelAssetPath:e}})},xi.createFromModelBuffer=function(n,e){return yt(xi,n,{baseOptions:{modelAssetBuffer:e}})},xi.createFromOptions=function(n,e){return yt(xi,n,e)};var Jp=class{constructor(n,e,t){this.landmarks=n,this.worldLandmarks=e,this.segmentationMasks=t}close(){this.segmentationMasks?.forEach(n=>{n.close()})}};function Ex(n){n.landmarks=[],n.worldLandmarks=[],n.segmentationMasks=void 0}function Tx(n){try{let e=new Jp(n.landmarks,n.worldLandmarks,n.segmentationMasks);if(!n.v)return e;n.v(e)}finally{xd(n)}}Jp.prototype.close=Jp.prototype.close;var Yn=class extends ci{constructor(n,e){super(new Bi(n,e),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.outputSegmentationMasks=!1,ke(n=this.i=new My,0,1,e=new Yt),this.C=new fy,ke(this.i,0,3,this.C),this.m=new dy,ke(this.i,0,2,this.m),cs(this.m,4,1),Ve(this.m,2,.5),Ve(this.C,2,.5),Ve(this.i,4,.5)}D(){return"PoseLandmarker"}get baseOptions(){return St(this.i,Yt,1)}set baseOptions(n){ke(this.i,0,1,n)}A(n){return"numPoses"in n&&cs(this.m,4,n.numPoses??1),"minPoseDetectionConfidence"in n&&Ve(this.m,2,n.minPoseDetectionConfidence??.5),"minTrackingConfidence"in n&&Ve(this.i,4,n.minTrackingConfidence??.5),"minPosePresenceConfidence"in n&&Ve(this.C,2,n.minPosePresenceConfidence??.5),"outputSegmentationMasks"in n&&(this.outputSegmentationMasks=n.outputSegmentationMasks??!1),this.l(n)}H(n,e,t){var i=typeof e!="function"?e:{};return this.v=typeof e=="function"?e:t,Ex(this),ki(this,n,i),Tx(this)}I(n,e,t,i){var s=typeof t!="function"?t:{};return this.v=typeof t=="function"?t:i,Ex(this),fs(this,n,s,e),Tx(this)}u(){var n=new hi;$t(n,"image_in"),$t(n,"norm_rect"),bt(n,"normalized_landmarks"),bt(n,"world_landmarks"),bt(n,"segmentation_masks");var e=new li;us(e,Tw,this.i);var t=new jn;oi(t,2,"mediapipe.tasks.vision.pose_landmarker.PoseLandmarkerGraph"),Wt(t,"IMAGE:image_in"),Wt(t,"NORM_RECT:norm_rect"),gt(t,"NORM_LANDMARKS:normalized_landmarks"),gt(t,"WORLD_LANDMARKS:world_landmarks"),t.A(e),Mi(n,t),_d(this,n),this.h.attachProtoVectorListener("normalized_landmarks",(i,s)=>{this.landmarks=[];for(let r of i)i=nl(r),this.landmarks.push(il(i));we(this,s)}),this.h.attachEmptyPacketListener("normalized_landmarks",i=>{this.landmarks=[],we(this,i)}),this.h.attachProtoVectorListener("world_landmarks",(i,s)=>{this.worldLandmarks=[];for(let r of i)i=so(r),this.worldLandmarks.push(ro(i));we(this,s)}),this.h.attachEmptyPacketListener("world_landmarks",i=>{this.worldLandmarks=[],we(this,i)}),this.outputSegmentationMasks&&(gt(t,"SEGMENTATION_MASK:segmentation_masks"),fo(this,"segmentation_masks"),this.h.ia("segmentation_masks",(i,s)=>{this.segmentationMasks=i.map(r=>go(this,r,!0,!this.v)),we(this,s)}),this.h.attachEmptyPacketListener("segmentation_masks",i=>{this.segmentationMasks=[],we(this,i)})),n=n.h(),this.setGraph(new Uint8Array(n),!0)}};Yn.prototype.detectForVideo=Yn.prototype.I,Yn.prototype.detect=Yn.prototype.H,Yn.prototype.setOptions=Yn.prototype.A,Yn.createFromModelPath=function(n,e){return yt(Yn,n,{baseOptions:{modelAssetPath:e}})},Yn.createFromModelBuffer=function(n,e){return yt(Yn,n,{baseOptions:{modelAssetBuffer:e}})},Yn.createFromOptions=function(n,e){return yt(Yn,n,e)},Yn.POSE_CONNECTIONS=Gy,Vt("module$exports$google3$third_party$mediapipe$tasks$web$vision$pose_landmarker$pose_landmarker.PoseLandmarker.POSE_CONNECTIONS",Yn.POSE_CONNECTIONS);var dt=Object.freeze({RIGHT_IRIS_CENTER:468,RIGHT_IRIS_RING:[469,470,471,472],LEFT_IRIS_CENTER:473,LEFT_IRIS_RING:[474,475,476,477],FOREHEAD:10,CHIN:152,SELLION:168,FACE_RIGHT:234,FACE_LEFT:454,NOSE_PAD_RIGHT:193,NOSE_PAD_LEFT:417}),Vy=11.7,Jm=75,Qm=11;function Hy(n,e,t){return[n.x*e,-n.y*t,-(n.z??0)*e]}var bi=(n,e)=>[n[0]-e[0],n[1]-e[1],n[2]-e[2]],Zm=(n,e)=>[n[0]+e[0],n[1]+e[1],n[2]+e[2]],rl=(n,e)=>[n[0]*e,n[1]*e,n[2]*e],ra=(n,e)=>n[0]*e[0]+n[1]*e[1]+n[2]*e[2],Wy=n=>Math.hypot(n[0],n[1],n[2]),al=(n,e)=>Wy(bi(n,e)),$w=(n,e)=>rl(Zm(n,e),.5),Sd=n=>{let e=Wy(n)||1;return[n[0]/e,n[1]/e,n[2]/e]},Yw=(n,e)=>[n[1]*e[2]-n[2]*e[1],n[2]*e[0]-n[0]*e[2],n[0]*e[1]-n[1]*e[0]];function Xy(n){let e=n[dt.RIGHT_IRIS_CENTER],t=n[dt.LEFT_IRIS_CENTER],i=Sd(bi(t,e)),s=bi(n[dt.FOREHEAD],n[dt.CHIN]),r=Sd(bi(s,rl(i,ra(s,i)))),a=Yw(i,r);return{x:i,y:r,z:a}}function Kw(n){let e=Sd(bi(n[dt.FOREHEAD],n[dt.CHIN])),t=bi(n[dt.FACE_LEFT],n[dt.FACE_RIGHT]);return Sd(bi(t,rl(e,ra(t,e))))}function qy({x:n,z:e}){let t=180/Math.PI;return{yaw:Math.atan2(e[0],e[2])*t,pitch:Math.atan2(e[1],Math.hypot(e[0],e[2]))*t,roll:Math.atan2(n[1],n[0])*t}}function $y(n){let e=al(n[dt.RIGHT_IRIS_RING[0]],n[dt.RIGHT_IRIS_RING[2]]),t=al(n[dt.LEFT_IRIS_RING[0]],n[dt.LEFT_IRIS_RING[2]]);return(e+t)/2}function Yy(n){return al(n[dt.RIGHT_IRIS_CENTER],n[dt.LEFT_IRIS_CENTER])}function Ky(n,e,t,i=Jm){return Math.hypot(e,t)/2/Math.tan(i*Math.PI/360)*n}function jy(n,e=Qm){if(!(n>0)||!(e>0))return 1;let t=Math.max(n,200);return(t+e)/t}function Zy(n,e,t,{earOffsetMm:i=10,convergence:s=1}={}){let r=n[dt.RIGHT_IRIS_CENTER],a=n[dt.LEFT_IRIS_CENTER],o=n[dt.SELLION],c=Kw(n),l=Math.abs(ra(bi(a,r),c))*t,h=l*s,u=Math.abs(ra(bi(o,r),c))*t*s,d=Math.abs(ra(bi(a,o),c))*t*s,f=al(n[dt.FACE_RIGHT],n[dt.FACE_LEFT])*t,p=al(n[dt.NOSE_PAD_RIGHT],n[dt.NOSE_PAD_LEFT])*t,x=n[dt.SELLION],g=ra(bi(x,n[dt.FACE_RIGHT]),e.z),m=ra(bi(x,n[dt.FACE_LEFT]),e.z),M=(g+m)/2*t+i;return{pd:h,nearPd:l,monoPdRight:u,monoPdLeft:d,faceWidth:f,noseBridge:p,frontToEar:M}}function Jy(n,e,t,{vertexDistanceMm:i=12,pupilAboveLensCenterMm:s=2}={}){let r=$w(n[dt.RIGHT_IRIS_CENTER],n[dt.LEFT_IRIS_CENTER]),a=Zm(r,rl(e.z,i*t));return a=Zm(a,rl(e.y,-s*t)),{position:a,basis:e,scale:t}}function jw(n){if(!n.length)return NaN;let e=[...n].sort((i,s)=>i-s),t=e.length>>1;return e.length%2?e[t]:(e[t-1]+e[t])/2}var Md=class{constructor(e=45){this.size=e,this.buf={pd:[],nearPd:[],monoPdRight:[],monoPdLeft:[],faceWidth:[],noseBridge:[],frontToEar:[]}}push(e){for(let t of Object.keys(this.buf)){if(!Number.isFinite(e[t]))continue;let i=this.buf[t];i.push(e[t]),i.length>this.size&&i.shift()}}get samples(){return this.buf.pd.length}spread(e="pd"){let t=[...this.buf[e]].sort((s,r)=>s-r);if(t.length<4)return 1/0;let i=s=>t[Math.min(t.length-1,Math.floor(s*(t.length-1)+.5))];return(i(.75)-i(.25))/2}isStable(e=45,t=.6){return this.samples>=e&&this.spread("pd")<=t}result(){let e={};for(let t of Object.keys(this.buf))e[t]=jw(this.buf[t]);return e.samples=this.samples,e.confidence=Math.min(1,this.samples/30),e}reset(){for(let e of Object.keys(this.buf))this.buf[e]=[]}},ol=class n{constructor({minCutoff:e=1,beta:t=.02,dCutoff:i=1}={}){Object.assign(this,{minCutoff:e,beta:t,dCutoff:i}),this.x=null,this.dx=0,this.t=null}static alpha(e,t){return 1/(1+1/(2*Math.PI*e)/t)}filter(e,t){if(this.x===null)return this.x=e,this.t=t,e;let i=Math.max(.001,t-this.t);this.t=t;let s=(e-this.x)/i;this.dx+=n.alpha(this.dCutoff,i)*(s-this.dx);let r=this.minCutoff+this.beta*Math.abs(this.dx);return this.x+=n.alpha(r,i)*(e-this.x),this.x}reset(){this.x=null,this.dx=0,this.t=null}},cl=class{constructor(e,t){this.f=Array.from({length:e},()=>new ol(t))}filter(e,t){return e.map((i,s)=>this.f[s].filter(i,t))}reset(){this.f.forEach(e=>e.reset())}};function eg(n,e){if(e===Bf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===$a||e===wc){let t=n.getIndex();if(t===null){let r=[],a=n.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)r.push(o);n.setIndex(r),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}let i=t.count-2,s=[];if(e===$a)for(let r=1;r<=i;r++)s.push(t.getX(0)),s.push(t.getX(r)),s.push(t.getX(r+1));else for(let r=0;r<i;r++)r%2===0?(s.push(t.getX(r)),s.push(t.getX(r+1)),s.push(t.getX(r+2))):(s.push(t.getX(r+2)),s.push(t.getX(r+1)),s.push(t.getX(r)));return s.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),n.setIndex(s),n.clearGroups(),n}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}function Qy(n){let e=new Map,t=new Map,i=n.clone();return eS(n,i,function(s,r){e.set(r,s),t.set(s,r)}),i.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,a=e.get(s),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(c){return t.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),i}function eS(n,e,t){t(n,e);for(let i=0;i<n.children.length;i++)eS(n.children[i],e.children[i],t)}var bd=class extends Ki{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new og(t)}),this.register(function(t){return new cg(t)}),this.register(function(t){return new _g(t)}),this.register(function(t){return new xg(t)}),this.register(function(t){return new vg(t)}),this.register(function(t){return new hg(t)}),this.register(function(t){return new ug(t)}),this.register(function(t){return new dg(t)}),this.register(function(t){return new fg(t)}),this.register(function(t){return new ag(t)}),this.register(function(t){return new pg(t)}),this.register(function(t){return new lg(t)}),this.register(function(t){return new gg(t)}),this.register(function(t){return new mg(t)}),this.register(function(t){return new sg(t)}),this.register(function(t){return new Ed(t,at.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Ed(t,at.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new yg(t)})}load(e,t,i,s){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let l=ws.extractUrlBase(e);a=ws.resolveURL(l,this.path)}else a=ws.extractUrlBase(e);this.manager.itemStart(e);let o=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new za(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},i,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,s){let r,a={},o={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===rS){try{a[at.KHR_BINARY_GLTF]=new Sg(e)}catch(u){s&&s(u);return}r=JSON.parse(a[at.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new Rg(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case at.KHR_MATERIALS_UNLIT:a[u]=new rg;break;case at.KHR_DRACO_MESH_COMPRESSION:a[u]=new Mg(r,this.dracoLoader);break;case at.KHR_TEXTURE_TRANSFORM:a[u]=new bg;break;case at.KHR_MESH_QUANTIZATION:a[u]=new Eg;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(i,s)}parseAsync(e,t){let i=this;return new Promise(function(s,r){i.parse(e,t,s,r)})}};function Zw(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}function nn(n,e,t){let i=n.json.materials[e];return i.extensions&&i.extensions[t]?i.extensions[t]:null}var at={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},sg=class{constructor(e){this.parser=e,this.name=at.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let i=0,s=t.length;i<s;i++){let r=t[i];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,i="light:"+e,s=t.cache.get(i);if(s)return s;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,h=new Ge(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],In);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Dr(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Nr(h),l.distance=u;break;case"spot":l=new _c(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),ps(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(i,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,i=this.parser,r=i.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return i._getNodeRef(t.cache,o,c)})}},rg=class{constructor(){this.name=at.KHR_MATERIALS_UNLIT}getMaterialType(){return Ln}extendParams(e,t,i){let s=[];e.color=new Ge(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],In),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(i.assignTexture(e,"map",r.baseColorTexture,Xt))}return Promise.all(s)}},ag=class{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=nn(this.parser,e,this.name);return i===null||i.emissiveStrength!==void 0&&(t.emissiveIntensity=i.emissiveStrength),Promise.resolve()}},og=class{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return nn(this.parser,e,this.name)!==null?zn:null}extendMaterialParams(e,t){let i=nn(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];if(i.clearcoatFactor!==void 0&&(t.clearcoat=i.clearcoatFactor),i.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",i.clearcoatTexture)),i.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=i.clearcoatRoughnessFactor),i.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",i.clearcoatRoughnessTexture)),i.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",i.clearcoatNormalTexture)),i.clearcoatNormalTexture.scale!==void 0)){let r=i.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ce(r,r)}return Promise.all(s)}},cg=class{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_DISPERSION}getMaterialType(e){return nn(this.parser,e,this.name)!==null?zn:null}extendMaterialParams(e,t){let i=nn(this.parser,e,this.name);return i===null||(t.dispersion=i.dispersion!==void 0?i.dispersion:0),Promise.resolve()}},lg=class{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return nn(this.parser,e,this.name)!==null?zn:null}extendMaterialParams(e,t){let i=nn(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];return i.iridescenceFactor!==void 0&&(t.iridescence=i.iridescenceFactor),i.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",i.iridescenceTexture)),i.iridescenceIor!==void 0&&(t.iridescenceIOR=i.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),i.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=i.iridescenceThicknessMinimum),i.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=i.iridescenceThicknessMaximum),i.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",i.iridescenceThicknessTexture)),Promise.all(s)}},hg=class{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_SHEEN}getMaterialType(e){return nn(this.parser,e,this.name)!==null?zn:null}extendMaterialParams(e,t){let i=nn(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];if(t.sheenColor=new Ge(0,0,0),t.sheenRoughness=0,t.sheen=1,i.sheenColorFactor!==void 0){let r=i.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],In)}return i.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=i.sheenRoughnessFactor),i.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",i.sheenColorTexture,Xt)),i.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",i.sheenRoughnessTexture)),Promise.all(s)}},ug=class{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return nn(this.parser,e,this.name)!==null?zn:null}extendMaterialParams(e,t){let i=nn(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];return i.transmissionFactor!==void 0&&(t.transmission=i.transmissionFactor),i.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",i.transmissionTexture)),Promise.all(s)}},dg=class{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_VOLUME}getMaterialType(e){return nn(this.parser,e,this.name)!==null?zn:null}extendMaterialParams(e,t){let i=nn(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];t.thickness=i.thicknessFactor!==void 0?i.thicknessFactor:0,i.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",i.thicknessTexture)),t.attenuationDistance=i.attenuationDistance||1/0;let r=i.attenuationColor||[1,1,1];return t.attenuationColor=new Ge().setRGB(r[0],r[1],r[2],In),Promise.all(s)}},fg=class{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_IOR}getMaterialType(e){return nn(this.parser,e,this.name)!==null?zn:null}extendMaterialParams(e,t){let i=nn(this.parser,e,this.name);return i===null||(t.ior=i.ior!==void 0?i.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},pg=class{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_SPECULAR}getMaterialType(e){return nn(this.parser,e,this.name)!==null?zn:null}extendMaterialParams(e,t){let i=nn(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];t.specularIntensity=i.specularFactor!==void 0?i.specularFactor:1,i.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",i.specularTexture));let r=i.specularColorFactor||[1,1,1];return t.specularColor=new Ge().setRGB(r[0],r[1],r[2],In),i.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",i.specularColorTexture,Xt)),Promise.all(s)}},mg=class{constructor(e){this.parser=e,this.name=at.EXT_MATERIALS_BUMP}getMaterialType(e){return nn(this.parser,e,this.name)!==null?zn:null}extendMaterialParams(e,t){let i=nn(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];return t.bumpScale=i.bumpFactor!==void 0?i.bumpFactor:1,i.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",i.bumpTexture)),Promise.all(s)}},gg=class{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return nn(this.parser,e,this.name)!==null?zn:null}extendMaterialParams(e,t){let i=nn(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];return i.anisotropyStrength!==void 0&&(t.anisotropy=i.anisotropyStrength),i.anisotropyRotation!==void 0&&(t.anisotropyRotation=i.anisotropyRotation),i.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",i.anisotropyTexture)),Promise.all(s)}},_g=class{constructor(e){this.parser=e,this.name=at.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,i=t.json,s=i.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},xg=class{constructor(e){this.parser=e,this.name=at.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],c=i.textureLoader;if(o.uri){let l=i.options.manager.getHandler(o.uri);l!==null&&(c=l)}return i.loadTextureImage(e,a.source,c)}},vg=class{constructor(e){this.parser=e,this.name=at.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],c=i.textureLoader;if(o.uri){let l=i.options.manager.getHandler(o.uri);l!==null&&(c=l)}return i.loadTextureImage(e,a.source,c)}},Ed=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){let s=i.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let c=s.byteOffset||0,l=s.byteLength||0,h=s.count,u=s.byteStride,d=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,s.mode,s.filter).then(function(f){return f.buffer}):a.ready.then(function(){let f=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(f),h,u,d,s.mode,s.filter),f})})}else return null}},yg=class{constructor(e){this.name=at.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;let s=t.meshes[i.mesh];for(let l of s.primitives)if(l.mode!==Ei.TRIANGLES&&l.mode!==Ei.TRIANGLE_STRIP&&l.mode!==Ei.TRIANGLE_FAN&&l.mode!==void 0)return null;let a=i.extensions[this.name].attributes,o=[],c={};for(let l in a)o.push(this.parser.getDependency("accessor",a[l]).then(h=>(c[l]=h,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{let h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,f=[];for(let p of u){let x=new je,g=new C,m=new Qn,M=new C(1,1,1),E=new Tr(p.geometry,p.material,d);for(let b=0;b<d;b++)c.TRANSLATION&&g.fromBufferAttribute(c.TRANSLATION,b),c.ROTATION&&m.fromBufferAttribute(c.ROTATION,b),c.SCALE&&M.fromBufferAttribute(c.SCALE,b),E.setMatrixAt(b,x.compose(g,m,M));let v=null;for(let b in c)if(b==="_COLOR_0"){let T=c[b];E.instanceColor=new Ms(T.array,T.itemSize,T.normalized)}else if(b!=="TRANSLATION"&&b!=="ROTATION"&&b!=="SCALE"){if(v===null){let R=E.geometry;v=new on,v.name=R.name;for(let y in R.attributes)v.setAttribute(y,R.attributes[y]);for(let y in R.morphAttributes)v.morphAttributes[y]=R.morphAttributes[y];R.index!==null&&v.setIndex(R.index),v.morphTargetsRelative=R.morphTargetsRelative;for(let y of R.groups)v.addGroup(y.start,y.count,y.materialIndex);R.boundingBox!==null&&(v.boundingBox=R.boundingBox.clone()),R.boundingSphere!==null&&(v.boundingSphere=R.boundingSphere.clone()),v.drawRange.start=R.drawRange.start,v.drawRange.count=R.drawRange.count,v.userData=Object.assign({},R.userData),E.geometry=v}let T=c[b];v.setAttribute(b,new Ms(T.array,T.itemSize,T.normalized))}Bt.prototype.copy.call(E,p),this.parser.assignFinalMaterial(E),f.push(E)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},rS="glTF",ll=12,tS={JSON:1313821514,BIN:5130562},Sg=class{constructor(e){this.name=at.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,ll),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==rS)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-ll,r=new DataView(e,ll),a=0;for(;a<s;){let o=r.getUint32(a,!0);a+=4;let c=r.getUint32(a,!0);if(a+=4,c===tS.JSON){let l=new Uint8Array(e,ll+a,o);this.content=i.decode(l)}else if(c===tS.BIN){let l=ll+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Mg=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=at.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let i=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(let h in a){let u=Ag[h]||h.toLowerCase();o[u]=a[h]}for(let h in e.attributes){let u=Ag[h]||h.toLowerCase();if(a[h]!==void 0){let d=i.accessors[e.attributes[h]],f=To[d.componentType];l[u]=f.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){s.decodeDracoFile(h,function(f){for(let p in f.attributes){let x=f.attributes[p],g=c[p];g!==void 0&&(x.normalized=g)}u(f)},o,l,In,d)})})}},bg=class{constructor(){this.name=at.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let i=Math.cos(e.rotation),s=Math.sin(e.rotation);e.matrix.set(e.repeat.x*i,e.repeat.y*s,e.offset.x,-e.repeat.x*s,e.repeat.y*i,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},Eg=class{constructor(){this.name=at.KHR_MESH_QUANTIZATION}},Td=class extends Yi{constructor(e,t,i,s){super(e,t,i,s)}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=i[r+a];return t}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,h=s-t,u=(i-t)/h,d=u*u,f=d*u,p=e*l,x=p-l,g=-2*f+3*d,m=f-d,M=1-g,E=m-d+u;for(let v=0;v!==o;v++){let b=a[x+v+o],T=a[x+v+c]*h,R=a[p+v+o],y=a[p+v]*h;r[v]=M*b+E*T+g*R+m*y}return r}},Jw=new Qn,Tg=class extends Td{interpolate_(e,t,i,s){let r=super.interpolate_(e,t,i,s);return Jw.fromArray(r).normalize().toArray(r),r}},Ei={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},To={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},nS={9728:Zt,9729:Jt,9984:Ah,9985:Wa,9986:Or,9987:Ni},iS={33071:fi,33648:Ta,10497:js},tg={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Ag={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},fr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Qw={CUBICSPLINE:void 0,LINEAR:Sr,STEP:yr},ng={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function eR(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new kn({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Zi})),n.DefaultMaterial}function aa(n,e,t){for(let i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function ps(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function tR(n,e,t){let i=!1,s=!1,r=!1;for(let l=0,h=e.length;l<h;l++){let u=e[l];if(u.POSITION!==void 0&&(i=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),i&&s&&r)break}if(!i&&!s&&!r)return Promise.resolve(n);let a=[],o=[],c=[];for(let l=0,h=e.length;l<h;l++){let u=e[l];if(i){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):n.attributes.position;a.push(d)}if(s){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):n.attributes.normal;o.push(d)}if(r){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):n.attributes.color;c.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){let h=l[0],u=l[1],d=l[2];return i&&(n.morphAttributes.position=h),s&&(n.morphAttributes.normal=u),r&&(n.morphAttributes.color=d),n.morphTargetsRelative=!0,n})}function nR(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,s=t.length;i<s;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function iR(n){let e,t=n.extensions&&n.extensions[at.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+ig(t.attributes):e=n.indices+":"+ig(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,s=n.targets.length;i<s;i++)e+=":"+ig(n.targets[i]);return e}function ig(n){let e="",t=Object.keys(n).sort();for(let i=0,s=t.length;i<s;i++)e+=t[i]+":"+n[t[i]]+";";return e}function wg(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function sR(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":n.search(/\.ktx2($|\?)/i)>0||n.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var rR=new je,Rg=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Zw,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,s=-1,r=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let o=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(o)===!0;let c=o.match(/Version\/(\d+)/);s=i&&c?parseInt(c[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&s<17||r&&a<98?this.textureLoader=new pc(this.options.manager):this.textureLoader=new xc(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new za(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let i=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(a){let o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:i,userData:{}};return aa(r,o,s),ps(o,s),Promise.all(i._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(let c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let a=t[s].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(i[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;let s=i.clone(),r=(a,o)=>{let c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(let[l,h]of a.children.entries())r(h,o.children[l])};return r(i,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){let s=e(t[i]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let i=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&i.push(r)}return i}getDependency(e,t){let i=e+":"+t,s=this.cache.get(i);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(i,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let i=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return i.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[at.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,a){i.load(ws.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){let s=t.byteLength||0,r=t.byteOffset||0;return i.slice(r,r+s)})}loadAccessor(e){let t=this,i=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let a=tg[s.type],o=To[s.componentType],c=s.normalized===!0,l=new o(s.count*a);return Promise.resolve(new un(l,a,c))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],c=tg[s.type],l=To[s.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=s.byteOffset||0,f=s.bufferView!==void 0?i.bufferViews[s.bufferView].byteStride:void 0,p=s.normalized===!0,x,g;if(f&&f!==u){let m=Math.floor(d/f),M="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+m+":"+s.count,E=t.cache.get(M);E||(x=new l(o,m*f,s.count*f/h),E=new Pa(x,f/h),t.cache.add(M,E)),g=new La(E,c,d%f/h,p)}else o===null?x=new l(s.count*c):x=new l(o,d,s.count*c),g=new un(x,c,p);if(s.sparse!==void 0){let m=tg.SCALAR,M=To[s.sparse.indices.componentType],E=s.sparse.indices.byteOffset||0,v=s.sparse.values.byteOffset||0,b=new M(a[1],E,s.sparse.count*m),T=new l(a[2],v,s.sparse.count*c);o!==null&&(g=new un(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let R=0,y=b.length;R<y;R++){let w=b[R];if(g.setX(w,T[R*c]),c>=2&&g.setY(w,T[R*c+1]),c>=3&&g.setZ(w,T[R*c+2]),c>=4&&g.setW(w,T[R*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=p}return g})}loadTexture(e){let t=this.json,i=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let c=i.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,i){let s=this,r=this.json,a=r.textures[e],o=r.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,i).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let d=(r.samplers||{})[a.sampler]||{};return h.magFilter=nS[d.magFilter]||Jt,h.minFilter=nS[d.minFilter]||Ni,h.wrapS=iS[d.wrapS]||js,h.wrapT=iS[d.wrapT]||js,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Zt&&h.minFilter!==Jt,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let i=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let a=s.images[e],o=self.URL||self.webkitURL,c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=i.getDependency("bufferView",a.bufferView).then(function(u){l=!0;let d=new Blob([u],{type:a.mimeType});return c=o.createObjectURL(d),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(c).then(function(u){return new Promise(function(d,f){let p=d;t.isImageBitmapLoader===!0&&(p=function(x){let g=new dn(x);g.needsUpdate=!0,d(g)}),t.load(ws.resolveURL(u,r.path),p,void 0,f)})}).then(function(u){return l===!0&&o.revokeObjectURL(c),ps(u,a),u.userData.mimeType=a.mimeType||sR(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,i,s){let r=this;return this.getDependency("texture",i.index).then(function(a){if(!a)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(a=a.clone(),a.channel=i.texCoord),r.extensions[at.KHR_TEXTURE_TRANSFORM]){let o=i.extensions!==void 0?i.extensions[at.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let c=r.associations.get(a);a=r.extensions[at.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,c)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,i=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+i.uuid,c=this.cache.get(o);c||(c=new Oa,Pn.prototype.copy.call(c,i),c.color.copy(i.color),c.map=i.map,c.sizeAttenuation=!1,this.cache.add(o,c)),i=c}else if(e.isLine){let o="LineBasicMaterial:"+i.uuid,c=this.cache.get(o);c||(c=new Fa,Pn.prototype.copy.call(c,i),c.color.copy(i.color),c.map=i.map,this.cache.add(o,c)),i=c}if(s||r||a){let o="ClonedMaterial:"+i.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=i.clone(),r&&(c.vertexColors=!0),a&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(i))),i=c}e.material=i}getMaterialType(){return kn}loadMaterial(e){let t=this,i=this.json,s=this.extensions,r=i.materials[e],a,o={},c=r.extensions||{},l=[];if(c[at.KHR_MATERIALS_UNLIT]){let u=s[at.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),l.push(u.extendParams(o,r,t))}else{let u=r.pbrMetallicRoughness||{};if(o.color=new Ge(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],In),o.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",u.baseColorTexture,Xt)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=Nn);let h=r.alphaMode||ng.OPAQUE;if(h===ng.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===ng.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Ln&&(l.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new ce(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==Ln&&(l.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Ln){let u=r.emissiveFactor;o.emissive=new Ge().setRGB(u[0],u[1],u[2],In)}return r.emissiveTexture!==void 0&&a!==Ln&&l.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,Xt)),Promise.all(l).then(function(){let u=new a(o);return r.name&&(u.name=r.name),ps(u,r),t.associations.set(u,{materials:e}),r.extensions&&aa(s,u,r),u})}createUniqueName(e){let t=Dt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,i=this.extensions,s=this.primitiveCache;function r(o){return i[at.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return sS(c,o,t)})}let a=[];for(let o=0,c=e.length;o<c;o++){let l=e[o],h=iR(l),u=s[h];if(u)a.push(u.promise);else{let d;l.extensions&&l.extensions[at.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=sS(new on,l,t),l.mode===Ei.TRIANGLE_STRIP?d=d.then(f=>eg(f,wc)):l.mode===Ei.TRIANGLE_FAN&&(d=d.then(f=>eg(f,$a))),s[h]={primitive:l,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){let t=this,i=this.json,s=this.extensions,r=i.meshes[e],a=r.primitives,o=[];for(let c=0,l=a.length;c<l;c++){let h=a[c].material===void 0?eR(this.cache):this.getDependency("material",a[c].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let f=0,p=h.length;f<p;f++){let x=h[f],g=a[f],m,M=l[f];if(g.mode===Ei.TRIANGLES||g.mode===Ei.TRIANGLE_STRIP||g.mode===Ei.TRIANGLE_FAN||g.mode===void 0){let E=r.isSkinnedMesh===!0,v=x.hasAttribute("skinIndex")&&x.hasAttribute("skinWeight");E&&v===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),m=E&&v?new qo(x,M):new ht(x,M),m.isSkinnedMesh===!0&&m.normalizeSkinWeights()}else if(g.mode===Ei.LINES)m=new Yo(x,M);else if(g.mode===Ei.LINE_STRIP)m=new Ar(x,M);else if(g.mode===Ei.LINE_LOOP)m=new Ko(x,M);else if(g.mode===Ei.POINTS)m=new jo(x,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(m.geometry.morphAttributes).length>0&&nR(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),ps(m,r),g.extensions&&aa(s,m,g),t.assignFinalMaterial(m),u.push(m)}for(let f=0,p=u.length;f<p;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&aa(s,u[0],r),u[0];let d=new an;r.extensions&&aa(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,p=u.length;f<p;f++)d.add(u[f]);return d})}loadCamera(e){let t,i=this.json.cameras[e],s=i[i.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new xn(Br.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):i.type==="orthographic"&&(t=new ji(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),ps(t,i),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],i=[];for(let s=0,r=t.joints.length;s<r;s++)i.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(s){let r=s.pop(),a=s,o=[],c=[];for(let l=0,h=a.length;l<h;l++){let u=a[l];if(u){o.push(u);let d=new je;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new $o(o,c)})}loadAnimation(e){let t=this.json,i=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],c=[],l=[],h=[];for(let u=0,d=s.channels.length;u<d;u++){let f=s.channels[u],p=s.samplers[f.sampler],x=f.target,g=x.node,m=s.parameters!==void 0?s.parameters[p.input]:p.input,M=s.parameters!==void 0?s.parameters[p.output]:p.output;x.node!==void 0&&(a.push(this.getDependency("node",g)),o.push(this.getDependency("accessor",m)),c.push(this.getDependency("accessor",M)),l.push(p),h.push(x))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],p=u[2],x=u[3],g=u[4],m=[];for(let E=0,v=d.length;E<v;E++){let b=d[E],T=f[E],R=p[E],y=x[E],w=g[E];if(b===void 0)continue;b.updateMatrix&&b.updateMatrix();let P=i._createAnimationTracks(b,T,R,y,w);if(P)for(let U=0;U<P.length;U++)m.push(P[U])}let M=new fc(r,void 0,m);return ps(M,s),M})}createNodeMesh(e){let t=this.json,i=this,s=t.nodes[e];return s.mesh===void 0?null:i.getDependency("mesh",s.mesh).then(function(r){let a=i._getNodeRef(i.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=s.weights.length;c<l;c++)o.morphTargetInfluences[c]=s.weights[c]}),a})}loadNode(e){let t=this.json,i=this,s=t.nodes[e],r=i._loadNodeShallow(e),a=[],o=s.children||[];for(let l=0,h=o.length;l<h;l++)a.push(i.getDependency("node",o[l]));let c=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),c]).then(function(l){let h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,rR)});for(let f=0,p=u.length;f<p;f++)h.add(u[f]);if(h.userData.pivot!==void 0&&u.length>0){let f=h.userData.pivot,p=u[0];h.pivot=new C().fromArray(f),h.position.x-=f[0],h.position.y-=f[1],h.position.z-=f[2],p.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,i=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let h;if(r.isBone===!0?h=new Na:l.length>1?h=new an:l.length===1?h=l[0]:h=new Bt,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=a),ps(h,r),r.extensions&&aa(i,h,r),r.matrix!==void 0){let u=new je;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!s.associations.has(h))s.associations.set(h,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let u=s.associations.get(h);s.associations.set(h,{...u})}return s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,i=this.json.scenes[e],s=this,r=new an;i.name&&(r.name=s.createUniqueName(i.name)),ps(r,i),i.extensions&&aa(t,r,i);let a=i.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(s.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let h=0,u=c.length;h<u;h++){let d=c[h];d.parent!==null?r.add(Qy(d)):r.add(d)}let l=h=>{let u=new Map;for(let[d,f]of s.associations)(d instanceof Pn||d instanceof dn)&&u.set(d,f);return h.traverse(d=>{let f=s.associations.get(d);f!=null&&u.set(d,f)}),u};return s.associations=l(r),r})}_createAnimationTracks(e,t,i,s,r){let a=[],o=e.name?e.name:e.uuid,c=[];function l(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}fr[r.path]===fr.weights?(l(e),e.isGroup&&e.children.forEach(l)):c.push(o);let h;switch(fr[r.path]){case fr.weights:h=Es;break;case fr.rotation:h=Ts;break;case fr.translation:case fr.scale:h=Js;break;default:i.itemSize===1?h=Es:h=Js;break}let u=s.interpolation!==void 0?Qw[s.interpolation]:Sr,d=this._getArrayFromAccessor(i);for(let f=0,p=c.length;f<p;f++){let x=new h(c[f]+"."+fr[r.path],t.array,d,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(x),a.push(x)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let i=wg(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*i;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){let s=this instanceof Ts?Tg:Td;return new s(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function aR(n,e,t){let i=e.attributes,s=new vn;if(i.POSITION!==void 0){let o=t.json.accessors[i.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(s.set(new C(c[0],c[1],c[2]),new C(l[0],l[1],l[2])),o.normalized){let h=wg(To[o.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new C,c=new C;for(let l=0,h=r.length;l<h;l++){let u=r[l];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],f=d.min,p=d.max;if(f!==void 0&&p!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(p[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(p[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(p[2]))),d.normalized){let x=wg(To[d.componentType]);c.multiplyScalar(x)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}n.boundingBox=s;let a=new Bn;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,n.boundingSphere=a}function sS(n,e,t){let i=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(c){n.setAttribute(o,c)})}for(let a in i){let o=Ag[a]||a.toLowerCase();o in n.attributes||s.push(r(i[a],o))}if(e.indices!==void 0&&!n.index){let a=t.getDependency("accessor",e.indices).then(function(o){n.setIndex(o)});s.push(a)}return st.workingColorSpace!==In&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${st.workingColorSpace}" not supported.`),ps(n,e),aR(n,e,t),Promise.all(s).then(function(){return e.targets!==void 0?tR(n,e.targets,t):n})}function aS(n,e,t){let i=e*t,s=p=>n[p*4+3]<64,r=new Int32Array(i),a=new Int32Array(i),o=0,c=0,l=p=>{r[p]===0&&s(p)&&(r[p]=-1,a[c++]=p)};for(let p=0;p<e;p++)l(p),l((t-1)*e+p);for(let p=0;p<t;p++)l(p*e),l(p*e+e-1);let h=p=>{for(;o<c;){let x=a[o++],g=x%e,m=M=>{r[M]===0&&s(M)&&(r[M]=p,a[c++]=M)};g>0&&m(x-1),g<e-1&&m(x+1),x>=e&&m(x-e),x<i-e&&m(x+e)}};h(-1);let u=[];for(let p=0;p<i;p++){if(r[p]!==0||!s(p))continue;let x=u.length+1;o=c=0,r[p]=x,a[c++]=p,h(x);let g=new Map,m=0;for(let M=0;M<c;M++){let E=a[M],v=E%e,b=(E-v)/e;m+=v;let T=g.get(b);T?(v<T[0]&&(T[0]=v),v>T[1]&&(T[1]=v)):g.set(b,[v,v])}u.push({area:c,cx:m/c,rows:g})}let d=i*.001,f=[[],[]];for(let p of u)p.area<d||Math.abs(p.cx-e/2)<e*.06||f[p.cx<e/2?0:1].push(p);for(let p of f){if(!p.length)continue;let x=[];for(let g of p)for(let[m,[M,E]]of g.rows)x.push([M,m],[E,m]);Cg(cS(x),e,g=>{n[g*4+3]=0})}}function oS(n,e,t,i){let r=i.x1-i.x0+1,a=i.y1-i.y0+1,o=e*t,c=new Int32Array(o),l=u=>n[u*4+3]>=200,h=(u,[d,f,p])=>Math.max(Math.abs(n[u*4]-d),Math.abs(n[u*4+1]-f),Math.abs(n[u*4+2]-p))<=26;for(let u of[0,1]){let d=new Uint8Array(o);for(let[f,p]of[[.27,.55],[.3,.5],[.25,.62],[.32,.6]]){let x=Math.round(i.x0+r*(u?1-f:f)),g=Math.round(i.y0+a*p),m=g*e+x;if(x<0||x>=e||g<0||g>=t||d[m]||!l(m))continue;let M=[n[m*4],n[m*4+1],n[m*4+2]],E=0,v=0;d[m]=1,c[v++]=m;let b=x,T=x,R=!1;for(;E<v;){let F=c[E++],L=F%e;if(L<b&&(b=L),L>T&&(T=L),T-b>r*.5){R=!0;break}let B=X=>{!d[X]&&l(X)&&h(X,M)&&(d[X]=1,c[v++]=X)};L>0&&B(F-1),L<e-1&&B(F+1),F>=e&&B(F-e),F<o-e&&B(F+e)}if(R)break;if(v<r*a*.03)continue;let y=new Map;for(let F=0;F<v;F++){let L=c[F],B=L%e,X=(L-B)/e,W=y.get(X);W?(B<W[0]&&(W[0]=B),B>W[1]&&(W[1]=B)):y.set(X,[B,B])}let w=[];for(let[F,[L,B]]of y)w.push([L,F],[B,F]);let P=cS(w),U=F=>{n[F*4]=M[0],n[F*4+1]=M[1],n[F*4+2]=M[2],n[F*4+3]=255};Cg(P,e,F=>{n[F*4+3]>0&&!(l(F)&&h(F,M))&&U(F)});let V=(M[0]+M[1]+M[2])/3;Cg(oR(P,Math.max(2,r*.012)),e,F=>{let L=(n[F*4]+n[F*4+1]+n[F*4+2])/3;n[F*4+3]>0&&L>=V-26&&U(F)});break}}}function cS(n){let e=n.slice().sort((r,a)=>r[0]-a[0]||r[1]-a[1]),t=(r,a,o)=>(a[0]-r[0])*(o[1]-r[1])-(a[1]-r[1])*(o[0]-r[0]),i=[];for(let r of e){for(;i.length>=2&&t(i[i.length-2],i[i.length-1],r)<=0;)i.pop();i.push(r)}let s=[];for(let r=e.length-1;r>=0;r--){let a=e[r];for(;s.length>=2&&t(s[s.length-2],s[s.length-1],a)<=0;)s.pop();s.push(a)}return s.pop(),i.pop(),i.concat(s)}function oR(n,e){let t=0,i=0;for(let[s,r]of n)t+=s,i+=r;return t/=n.length,i/=n.length,n.map(([s,r])=>{let a=Math.hypot(s-t,r-i)||1;return[s+(s-t)/a*e,r+(r-i)/a*e]})}function Cg(n,e,t){if(n.length<3)return;let i=1/0,s=-1/0;for(let[,r]of n)r<i&&(i=r),r>s&&(s=r);for(let r=Math.ceil(i);r<=Math.floor(s);r++){let a=1/0,o=-1/0;for(let l=0;l<n.length;l++){let[h,u]=n[l],[d,f]=n[(l+1)%n.length];if(u<=r&&f>=r||f<=r&&u>=r){let p=u===f?Math.min(h,d):h+(r-u)/(f-u)*(d-h),x=u===f?Math.max(h,d):p;p<a&&(a=p),x>o&&(o=x)}}let c=Math.min(e-1,Math.floor(o));for(let l=Math.max(0,Math.ceil(a));l<=c;l++)t(r*e+l)}}var Pg=n=>n.showTemples!==!1;function Lg(n){let e=n.lensWidth,t=n.lensHeight,i=n.bridgeWidth,s=n.frameHeight??t+5,r=n.totalWidth??2*e+i+14,a=Math.max(1,(s-t)/2),o=i/2+e/2,c=i/2+e+a,l=Math.max(c+1,r/2);return{A:e,B:t,DBL:i,frameH:s,totalW:r,rim:a,lensCenterX:o,rimOuterX:c,halfW:l,templeLength:n.templeLength??145,framePd:e+i}}function Ig(n,e,t){let i=t==="rect"?4.5:t==="cateye"?3:2.4,s=new Rr,r=72;for(let a=0;a<=r;a++){let o=a/r*Math.PI*2,c=Math.cos(o),l=Math.sin(o),h=n/2*Math.sign(c)*Math.abs(c)**(2/i),u=e/2*Math.sign(l)*Math.abs(l)**(2/i);t==="cateye"&&u>0&&(u*=1+.15*Math.abs(h)/(n/2)),a===0?s.moveTo(h,u):s.lineTo(h,u)}return s}function lS(n,e,t,i){let s=n.templeLength*.75,r=n.templeLength-s,a=1.6,o=new an,c=new ht(new mi(a,3.2,s),e);c.position.z=-s/2,o.add(c);let l=new ht(new mi(a,3,r),e),h=Br.degToRad(32);return l.position.set(0,-Math.sin(h)*r/2,-s-Math.cos(h)*r/2),l.rotation.x=-h,o.add(l),o.position.set(t*(n.halfW-a/2),i,-1.5),o.name=t<0?"temple_right":"temple_left",o}function cR(n){let e=Lg(n),t=new Ge(n.frameColor??"#1c1c1e"),i=new kn({color:t,metalness:n.metallic?.9:.25,roughness:n.metallic?.25:.45}),s=new kn({color:new Ge(n.lensTint??"#a8c0d8"),metalness:0,roughness:.05,transparent:!0,opacity:n.lensOpacity??.18,depthWrite:!1,side:Nn}),r=new an;r.name="glasses";let a=2.2,o=Ig(e.A+2*e.rim,e.B+2*e.rim,n.shape);o.holes.push(Ig(e.A,e.B,n.shape));let c=new cc(o,{depth:a,bevelEnabled:!0,bevelThickness:.4,bevelSize:.3,bevelSegments:2});c.translate(0,0,-a/2);let l=new lc(Ig(e.A+.4,e.B+.4,n.shape),1);for(let f of[-1,1]){let p=f*e.lensCenterX,x=new ht(c,i);x.position.x=p,r.add(x);let g=new ht(l,s);g.position.set(p,0,.2),g.renderOrder=2,r.add(g);let m=e.halfW-e.rimOuterX+e.rim,M=new ht(new mi(m,4,a+.8),i),E=e.B*.25;M.position.set(f*(e.halfW-m/2),E,-.4),r.add(M),Pg(n)&&r.add(lS(e,i,f,E));let v=new ht(new Pr(1.6,12,8),s.clone());v.material.opacity=.5,v.scale.set(.6,1.2,1),v.position.set(f*(e.DBL/2+.5),-e.B*.12,-5),r.add(v)}let h=e.B*.22,u=e.DBL/2+e.rim*.3,d=new wr(new C(-u,h,0),new C(0,h+3,.5),new C(u,h,0));return r.add(new ht(new hc(d,16,1.2,8,!1),i)),r.userData.layout=e,r}function lR(n,e,t,{keyWhite:i=!1,threshold:s=238,soft:r=22,alphaMin:a=24}={}){let o=e,c=t,l=-1,h=-1;for(let m=0;m<t;m++)for(let M=0;M<e;M++){let E=(m*e+M)*4;if(i){let v=Math.min(n[E],n[E+1],n[E+2]);v>=s?n[E+3]=0:v>s-r&&(n[E+3]=Math.min(n[E+3],Math.round(255*(s-v)/r)))}n[E+3]>a&&(M<o&&(o=M),M>l&&(l=M),m<c&&(c=m),m>h&&(h=m))}if(l<0)return{box:null,edgeColor:null};let u=Math.max(1,Math.round((l-o+1)*.08)),d=0,f=0,p=0,x=0;for(let m=c;m<=h;m++)for(let M of[...Array(u).keys()].flatMap(E=>[o+E,l-E])){let E=(m*e+M)*4;n[E+3]>200&&(d+=n[E],f+=n[E+1],p+=n[E+2],x++)}let g=m=>Math.round(m/Math.max(x,1)).toString(16).padStart(2,"0");return{box:{x0:o,y0:c,x1:l,y1:h},edgeColor:x?`#${g(d)}${g(f)}${g(p)}`:null}}function hR(n){for(let e=3;e<n.length;e+=28)if(n[e]<250)return!0;return!1}function uR(n){return new Promise((e,t)=>{let i=new Image;i.crossOrigin="anonymous",i.onload=()=>e(i),i.onerror=()=>t(new Error(`Could not load frame photo ${n}`)),i.src=n})}async function dR(n){let e=Lg(n),t=await uR(n.frontImageUrl),s=Math.min(1,1600/t.naturalWidth),r=Math.round(t.naturalWidth*s),a=Math.round(t.naturalHeight*s),o=document.createElement("canvas");o.width=r,o.height=a;let c=o.getContext("2d",{willReadFrequently:!0});c.drawImage(t,0,0,r,a);let l=c.getImageData(0,0,r,a),h=n.removeBackground??!hR(l.data),{box:u,edgeColor:d}=lR(l.data,r,a,{keyWhite:h});if(!u)throw new Error("Frame photo is empty after background removal");n.removePhotoTemples!==!1&&(aS(l.data,r,a),oS(l.data,r,a,u)),c.putImageData(l,0,0);let f=u.x1-u.x0+1,p=u.y1-u.y0+1,x=document.createElement("canvas");x.width=f,x.height=p,x.getContext("2d").drawImage(o,u.x0,u.y0,f,p,0,0,f,p);let g=new Jo(x);g.colorSpace=Xt,g.anisotropy=4;let m=e.totalW,M=m*(p/f),E=n.frontImageLensCenterY??.5,v=new ht(new Ir(m,M),new Ln({map:g,transparent:!0,alphaTest:.04,side:Nn}));v.position.y=(E-.5)*M,v.renderOrder=2;let b=new an;if(b.name="glasses",b.add(v),Pg(n)){let T=new kn({color:new Ge(n.frameColor??d??"#1c1c1e"),metalness:.3,roughness:.45}),R=v.position.y+M*.22;for(let y of[-1,1])b.add(lS(e,T,y,R))}return b.userData.layout=e,b.userData.source="photo",b}async function fR(n){let t=(await new bd().loadAsync(n.modelUrl)).scene,i=n.modelUnits??"auto",s=new an;s.add(t),t.updateMatrixWorld(!0);let a=new vn().setFromObject(t).getSize(new C),o=1;i==="m"?o=1e3:i==="cm"?o=10:i==="auto"&&n.totalWidth&&(o=n.totalWidth/a.x),t.scale.multiplyScalar(o),t.updateMatrixWorld(!0);let c=new vn().setFromObject(t),l=new vn,h=new C,u=8;t.traverse(p=>{if(!p.isMesh)return;let x=p.geometry.attributes.position;for(let g=0;g<x.count;g+=3)h.fromBufferAttribute(x,g).applyMatrix4(p.matrixWorld),h.z>c.max.z-u&&l.expandByPoint(h)});let d=l.isEmpty()?(c.min.y+c.max.y)/2:(l.min.y+l.max.y)/2;t.position.sub(new C((c.min.x+c.max.x)/2,d,c.max.z-1)),Pg(n)||t.traverse(p=>{/temple/i.test(p.name)&&(p.visible=!1)});let f=new an;return f.name="glasses",f.add(s),f.userData.layout=Lg(n),f}async function hS(n){if(n.modelUrl)try{let t=await fR(n);return t.userData.source="model",t}catch(t){console.warn("[eyewear_tryon] GLB failed, trying the front photo",t)}if(n.frontImageUrl)try{return await dR(n)}catch(t){console.warn("[eyewear_tryon] front photo failed, using measurements",t)}let e=cR(n);return e.userData.source="measurements",e}function hl(n){n.traverse(e=>{e.geometry&&e.geometry.dispose();let t=e.material;Array.isArray(t)?t.forEach(i=>i.dispose()):t&&t.dispose()})}var pR="1.1.1",mR={wasmBaseUrl:`https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@${pR}/wasm`,modelAssetUrl:"https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task",delegate:"GPU",mirror:!0,irisDiameterMm:Vy,cameraDiagonalFovDeg:Jm,eyeRotationMm:Qm,vertexDistanceMm:12,pupilAboveLensCenterMm:2,pantoscopicTiltDeg:8,earOffsetMm:10,maxMeasureYawDeg:12,maxMeasurePitchDeg:15,manualPdMm:0,lockMeasurements:!0,lockMinSamples:45,lockMaxPdSpreadMm:.6,debug:!1,facingMode:"user",source:"camera",wasmLoaderPath:null,wasmBinaryPath:null,modelAssetBase64Url:null},ul=null;function gR(n){return ul||(ul=(async()=>{let e=n.wasmLoaderPath&&n.wasmBinaryPath?{wasmLoaderPath:n.wasmLoaderPath,wasmBinaryPath:n.wasmBinaryPath}:await is.forVisionTasks(n.wasmBaseUrl),t=null;if(n.modelAssetBase64Url){let r=await fetch(n.modelAssetBase64Url);if(!r.ok)throw new Error(`Face model download failed (${r.status})`);let a=atob((await r.text()).trim());t=new Uint8Array(a.length);for(let o=0;o<a.length;o++)t[o]=a.charCodeAt(o)}let i=t?{modelAssetBuffer:t}:{modelAssetPath:n.modelAssetUrl},s=r=>pt.createFromOptions(e,{baseOptions:{...i,delegate:r},runningMode:"VIDEO",numFaces:1,outputFaceBlendshapes:!1,outputFacialTransformationMatrixes:!1});try{return await s(n.delegate)}catch(r){if(n.delegate==="CPU")throw r;return console.warn("[eyewear_tryon] GPU delegate failed, falling back to CPU",r),s("CPU")}})(),ul.catch(()=>{ul=null})),ul}var Ad=class{constructor(e,t,i){this.host=e,this.cfg={...mR,...t},this.emit=i,this.disposed=!1,this.faceVisible=!1,this.agg=new Md(45),this.locked=null,this.posF=new cl(3,{minCutoff:1.2,beta:.05}),this.axF=new cl(6,{minCutoff:1.5,beta:.3}),this.scaleF=new ol({minCutoff:.4,beta:0}),this.lastEmit=0,this.lastVideoTime=-1,this.glasses=null,this._buildDom(),this._buildScene(),this._start().catch(s=>this._error(s))}_buildDom(){let e=this.host,t=e.isConnected?getComputedStyle(e).position:"";["relative","absolute","fixed","sticky"].includes(t)||(e.style.position="relative"),e.style.overflow="hidden",e.style.background="#000";let i="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;";this.video=document.createElement("video"),this.video.setAttribute("playsinline",""),this.video.muted=!0,this.video.autoplay=!0,this.video.style.cssText=i,this.canvas=document.createElement("canvas"),this.canvas.style.cssText=i+"pointer-events:none;",e.append(this.video,this.canvas),this.cfg.debug&&(this.dbg=document.createElement("canvas"),this.dbg.style.cssText=i+"pointer-events:none;",e.append(this.dbg)),this._applyMirror()}_applyMirror(){let e=this.cfg.mirror?"scaleX(-1)":"none";for(let t of[this.video,this.photo,this.canvas,this.dbg])t&&(t.style.transform=e)}_buildScene(){this.renderer=new mu({canvas:this.canvas,alpha:!0,antialias:!0}),this.renderer.setPixelRatio(1),this.renderer.outputColorSpace=Xt,this.scene=new br;let e=new Za(this.renderer);this.scene.environment=e.fromScene(new xu,.04).texture,e.dispose(),this.scene.add(new mc(16777215,4473924,.6));let t=new Dr(16777215,1.2);t.position.set(.3,.6,1),this.scene.add(t),this.camera=new ji(0,1,0,-1,.1,1e5),this.camera.position.set(0,0,5e4),this.anchor=new an,this.anchor.matrixAutoUpdate=!1,this.anchor.visible=!1,this.scene.add(this.anchor),this.tilt=new an,this.tilt.rotation.x=Br.degToRad(this.cfg.pantoscopicTiltDeg),this.anchor.add(this.tilt),this.occluder=new ht(new Pr(1,32,24),new Ln({colorWrite:!1})),this.occluder.renderOrder=-1,this.anchor.add(this.occluder),this._sizeOccluder(140)}_sizeOccluder(e){let t=this.glasses?.userData.layout,i=t?t.halfW:69,s=Math.min(e/2,i-3),r=95;this.occluder.scale.set(s,115,r),this.occluder.position.set(0,-15,-r+4-this.cfg.vertexDistanceMm)}async setFrame(e){let t=await hS(e);if(this.disposed)return hl(t);this.glasses&&(this.tilt.remove(this.glasses),hl(this.glasses)),this.glasses=t,this.spec=e,this.tilt.add(t),this.dirty=!0;let i=this.agg.result().faceWidth;this._sizeOccluder(Number.isFinite(i)?i:140),this.emit({type:"frameLoaded",framePd:t.userData.layout.framePd,source:t.userData.source})}setManualPd(e){this.cfg.manualPdMm=e>0?e:0,this.remeasure()}remeasure(){this.dirty=!0,this.locked=null,this.agg.reset(),this.scaleF.reset()}setMirror(e){this.cfg.mirror=!!e,this._applyMirror()}async _start(){if(this.landmarker=await gR(this.cfg),this.disposed||(this.cfg.source==="camera"&&await this._startCamera(),this.disposed))return;this.emit({type:"ready",source:this.cfg.source});let e=()=>{this.disposed||(this._tick(),this.raf=requestAnimationFrame(e))};e()}async _startCamera(){if(!navigator.mediaDevices?.getUserMedia){let e=new Error("Camera API unavailable (page must be served over HTTPS or localhost).");throw e.name="NotSupportedError",e}if(this.stream=await navigator.mediaDevices.getUserMedia({video:{facingMode:this.cfg.facingMode,width:{ideal:1280},height:{ideal:720}},audio:!1}),this.disposed)return this._stopStream();this.video.srcObject=this.stream,await this.video.play(),this.source=this.video}setImage(e){return new Promise((t,i)=>{let s=new Image;s.decoding="async",s.onload=()=>{let r=Math.min(1,1280/Math.max(s.naturalWidth,s.naturalHeight)),a=this.photo??document.createElement("canvas");a.width=Math.max(1,Math.round(s.naturalWidth*r)),a.height=Math.max(1,Math.round(s.naturalHeight*r)),a.getContext("2d").drawImage(s,0,0,a.width,a.height),this._stopStream(),this.video.hidden=!0,a.style.cssText=this.video.style.cssText,a.isConnected||this.host.insertBefore(a,this.canvas),this.photo=a,this.source=a,this.cfg.mirror=!1,this._applyMirror(),this.remeasure(),this.faceVisible=!1,this.noFaceReported=!1,this.photoMisses=0,this.posF.reset(),this.axF.reset(),t()},s.onerror=()=>i(new Error("Could not open that image.")),s.src=e})}_resizeTo(e,t){this.canvas.width===e&&this.canvas.height===t||(this.renderer.setSize(e,t,!1),this.camera.left=0,this.camera.right=e,this.camera.top=0,this.camera.bottom=-t,this.camera.updateProjectionMatrix(),this.dbg&&(this.dbg.width=e,this.dbg.height=t))}_tick(){let e=this.source;if(!e)return;let t=e===this.video,i=t?e.videoWidth:e.width,s=t?e.videoHeight:e.height;if(!i||!s)return;if(this._resizeTo(i,s),t){if(e.currentTime===this.lastVideoTime)return;this.lastVideoTime=e.currentTime}else if(!this.dirty&&(this.locked&&this.anchor.visible||this.noFaceReported))return;this.dirty=!1;let r=performance.now(),a;try{a=this.landmarker.detectForVideo(e,r)}catch(c){return this._error(c)}let o=a.faceLandmarks?.[0];if(!o||o.length<478){this.faceVisible?this.emit({type:"faceLost"}):!t&&!this.noFaceReported&&++this.photoMisses>=5&&(this.noFaceReported=!0,this.emit({type:"faceLost",reason:"noFaceInPhoto"})),this.faceVisible=!1,this.anchor.visible=!1,this.posF.reset(),this.axF.reset(),this.renderer.render(this.scene,this.camera);return}this.faceVisible||this.emit({type:"faceFound"}),this.noFaceReported=!1,this.photoMisses=0,this.faceVisible=!0,this._update(o.map(c=>Hy(c,i,s)),r/1e3,i,s),this.renderer.render(this.scene,this.camera),this.dbg&&this._drawDebug(o,i,s)}_update(e,t,i,s){let r=Xy(e),a=qy(r),o=Yy(e),c=this.cfg.irisDiameterMm/$y(e),l=jy(Ky(c,i,s,this.cfg.cameraDiagonalFovDeg),this.cfg.eyeRotationMm),h=this.cfg.manualPdMm>0?this.cfg.manualPdMm/(o*l):c;Math.abs(a.yaw)<this.cfg.maxMeasureYawDeg&&Math.abs(a.pitch)<this.cfg.maxMeasurePitchDeg&&!this.locked&&(this.agg.push(Zy(e,r,h,{earOffsetMm:this.cfg.earOffsetMm,convergence:l})),this.cfg.lockMeasurements&&this.agg.isStable(this.cfg.lockMinSamples,this.cfg.lockMaxPdSpreadMm)&&(this.locked=this.agg.result(),this.cfg.manualPdMm>0&&(this.locked.pd=this.cfg.manualPdMm),this.lastEmit=0));let d=this.locked??this.agg.result(),f=this.cfg.manualPdMm>0?this.cfg.manualPdMm/l:d.samples>=10?d.nearPd:o*c,p=this.scaleF.filter(o/f,t),x=Jy(e,r,p,this.cfg),g=this.posF.filter(x.position,t),m=this.axF.filter([...r.x,...r.y],t),M=new C(m[0],m[1],m[2]).normalize(),E=new C(m[3],m[4],m[5]),v=E.sub(M.clone().multiplyScalar(E.dot(M))).normalize(),b=new C().crossVectors(M,v),T=new je().makeBasis(M,v,b);T.scale(new C(p,p,p)),T.setPosition(g[0],g[1],g[2]),this.anchor.matrix.copy(T),this.anchor.matrixWorldNeedsUpdate=!0,this.anchor.visible=!!this.glasses,this.frameCount=(this.frameCount??0)+1,this.frameCount%30===0&&Number.isFinite(d.faceWidth)&&this._sizeOccluder(d.faceWidth),t*1e3-this.lastEmit>200&&d.samples>0&&(this.lastEmit=t*1e3,this.emit({type:"measurements",pd:this.cfg.manualPdMm>0?this.cfg.manualPdMm:d.pd,monoPdRight:d.monoPdRight,monoPdLeft:d.monoPdLeft,pdSource:this.cfg.manualPdMm>0?"manual":"estimated",locked:!!this.locked,pdSpread:this.locked?0:this.agg.spread("pd"),faceWidth:d.faceWidth,noseBridge:d.noseBridge,frontToEar:d.frontToEar,samples:d.samples,confidence:this.locked?1:d.confidence,yaw:a.yaw,pitch:a.pitch,roll:a.roll}))}_drawDebug(e,t,i){let s=this.dbg.getContext("2d");s.clearRect(0,0,t,i);let r=[dt.RIGHT_IRIS_CENTER,dt.LEFT_IRIS_CENTER,...dt.RIGHT_IRIS_RING,...dt.LEFT_IRIS_RING,dt.FACE_RIGHT,dt.FACE_LEFT,dt.NOSE_PAD_RIGHT,dt.NOSE_PAD_LEFT,dt.SELLION];s.fillStyle="#00e5ff";for(let a of r)s.beginPath(),s.arc(e[a].x*t,e[a].y*i,3,0,Math.PI*2),s.fill()}snapshot(e="image/jpeg",t=.92){let i=this.source;if(!i)return null;let s=i.videoWidth||i.width,r=i.videoHeight||i.height;if(!s)return null;let a=document.createElement("canvas");a.width=s,a.height=r;let o=a.getContext("2d");return this.cfg.mirror&&(o.translate(s,0),o.scale(-1,1)),o.drawImage(i,0,0,s,r),this.renderer.render(this.scene,this.camera),o.drawImage(this.canvas,0,0,s,r),a.toDataURL(e,t)}_error(e){console.error("[eyewear_tryon]",e),this.emit({type:"error",message:String(e?.message??e),name:e?.name??"Error"})}_stopStream(){this.stream?.getTracks().forEach(e=>e.stop()),this.stream=null}dispose(){this.disposed=!0,cancelAnimationFrame(this.raf),this._stopStream(),this.glasses&&hl(this.glasses),hl(this.occluder),this.scene.environment?.dispose(),this.renderer.dispose(),this.host.replaceChildren()}};var Ao=new Map;function dl(n){let e=Ao.get(n);if(!e)throw new Error(`[eyewear_tryon] no session ${n}`);return e}var uS={version:"0.1.0",create(n,e,t,i){Ao.get(n)?.dispose();let s=t?JSON.parse(t):{},r=o=>{try{i?.(JSON.stringify(o))}catch(c){console.error(c)}},a=new Ad(e,s,r);Ao.set(n,a),s.frame&&a.setFrame(s.frame).catch(o=>a._error(o))},setFrame(n,e){let t=dl(n);t.setFrame(JSON.parse(e)).catch(i=>t._error(i))},setManualPd(n,e){dl(n).setManualPd(Number(e)||0)},remeasure(n){dl(n).remeasure()},setImage(n,e){let t=dl(n);return t.setImage(e).catch(i=>t._error(i))},setMirror(n,e){dl(n).setMirror(e)},snapshot(n){return Promise.resolve(Ao.get(n)?.snapshot()??null)},dispose(n){Ao.get(n)?.dispose(),Ao.delete(n)}};window.GlassesTryOn=uS;var BL=uS;})();
