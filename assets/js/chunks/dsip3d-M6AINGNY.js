var mc="170",ji={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Qi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Zu=0,Jc=1,Ju=2;var au=1,$u=2,ei=3,wi=0,en=1,En=2,Si=0,Is=1,$c=2,Kc=3,jc=4,Ku=5,Gi=100,ju=101,Qu=102,td=103,ed=104,nd=200,id=201,sd=202,rd=203,qo=204,Yo=205,ad=206,od=207,ld=208,cd=209,hd=210,ud=211,dd=212,fd=213,pd=214,Zo=0,Jo=1,$o=2,Os=3,Ko=4,jo=5,Qo=6,tl=7,ou=0,md=1,gd=2,bi=0,_d=1,xd=2,yd=3,vd=4,Md=5,Sd=6,bd=7;var lu=300,Fs=301,Bs=302,el=303,nl=304,Ya=306,il=1e3,Xi=1001,sl=1002,ln=1003,wd=1004;var Nr=1005;var Wn=1006,uo=1007;var qi=1008;var oi=1009,cu=1010,hu=1011,xr=1012,gc=1013,Yi=1014,ii=1015,Ar=1016,_c=1017,xc=1018,zs=1020,uu=35902,du=1021,fu=1022,Bn=1023,pu=1024,mu=1025,Ls=1026,ks=1027,Za=1028,yc=1029,gu=1030,vc=1031;var Mc=1033,ua=33776,da=33777,fa=33778,pa=33779,rl=35840,al=35841,ol=35842,ll=35843,cl=36196,hl=37492,ul=37496,dl=37808,fl=37809,pl=37810,ml=37811,gl=37812,_l=37813,xl=37814,yl=37815,vl=37816,Ml=37817,Sl=37818,bl=37819,wl=37820,El=37821,ma=36492,Tl=36494,Al=36495,_u=36283,Cl=36284,Rl=36285,Pl=36286;var ga=2300,Il=2301,fo=2302,Qc=2400,th=2401,eh=2402;var Ed=3200,Td=3201;var xu=0,Ad=1,Mi="",tn="srgb",Js="srgb-linear",Ja="linear",Me="srgb";var ds=7680;var nh=519,Cd=512,Rd=513,Pd=514,yu=515,Id=516,Ld=517,Dd=518,Ud=519,Ll=35044;var ih="300 es",si=2e3,_a=2001,li=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},je=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],sh=1234567,Ds=Math.PI/180,yr=180/Math.PI;function ri(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(je[i&255]+je[i>>8&255]+je[i>>16&255]+je[i>>24&255]+"-"+je[t&255]+je[t>>8&255]+"-"+je[t>>16&15|64]+je[t>>24&255]+"-"+je[e&63|128]+je[e>>8&255]+"-"+je[e>>16&255]+je[e>>24&255]+je[n&255]+je[n>>8&255]+je[n>>16&255]+je[n>>24&255]).toLowerCase()}function Fe(i,t,e){return Math.max(t,Math.min(e,i))}function Sc(i,t){return(i%t+t)%t}function Nd(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Od(i,t,e){return i!==t?(e-i)/(t-i):0}function pr(i,t,e){return(1-e)*i+e*t}function Fd(i,t,e,n){return pr(i,t,1-Math.exp(-e*n))}function Bd(i,t=1){return t-Math.abs(Sc(i,t*2)-t)}function zd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function kd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Vd(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Hd(i,t){return i+Math.random()*(t-i)}function Gd(i){return i*(.5-Math.random())}function Wd(i){i!==void 0&&(sh=i);let t=sh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Xd(i){return i*Ds}function qd(i){return i*yr}function Yd(i){return(i&i-1)===0&&i!==0}function Zd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Jd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function $d(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),d=r((t-n)/2),f=a((t-n)/2),p=r((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(o*h,l*d,l*f,o*c);break;case"YZY":i.set(l*f,o*h,l*d,o*c);break;case"ZXZ":i.set(l*d,l*f,o*h,o*c);break;case"XZX":i.set(o*h,l*g,l*p,o*c);break;case"YXY":i.set(l*p,o*h,l*g,o*c);break;case"ZYZ":i.set(l*g,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Fn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function _e(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var $a={DEG2RAD:Ds,RAD2DEG:yr,generateUUID:ri,clamp:Fe,euclideanModulo:Sc,mapLinear:Nd,inverseLerp:Od,lerp:pr,damp:Fd,pingpong:Bd,smoothstep:zd,smootherstep:kd,randInt:Vd,randFloat:Hd,randFloatSpread:Gd,seededRandom:Wd,degToRad:Xd,radToDeg:qd,isPowerOfTwo:Yd,ceilPowerOfTwo:Zd,floorPowerOfTwo:Jd,setQuaternionFromProperEuler:$d,normalize:_e,denormalize:Fn},lt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Fe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Kt=class i{constructor(t,e,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],f=n[2],p=n[5],g=n[8],x=s[0],m=s[3],u=s[6],T=s[1],E=s[4],M=s[7],D=s[2],C=s[5],R=s[8];return r[0]=a*x+o*T+l*D,r[3]=a*m+o*E+l*C,r[6]=a*u+o*M+l*R,r[1]=c*x+h*T+d*D,r[4]=c*m+h*E+d*C,r[7]=c*u+h*M+d*R,r[2]=f*x+p*T+g*D,r[5]=f*m+p*E+g*C,r[8]=f*u+p*M+g*R,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*a-o*c,f=o*l-h*r,p=c*r-a*l,g=e*d+n*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=d*x,t[1]=(s*c-h*n)*x,t[2]=(o*n-s*a)*x,t[3]=f*x,t[4]=(h*e-s*l)*x,t[5]=(s*r-o*e)*x,t[6]=p*x,t[7]=(n*l-c*e)*x,t[8]=(a*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(po.makeScale(t,e)),this}rotate(t){return this.premultiply(po.makeRotation(-t)),this}translate(t,e){return this.premultiply(po.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},po=new Kt;function vu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function vr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Kd(){let i=vr("canvas");return i.style.display="block",i}var rh={};function dr(i){i in rh||(rh[i]=!0,console.warn(i))}function jd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Qd(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function tf(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var ue={enabled:!0,workingColorSpace:Js,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Me&&(i.r=ai(i.r),i.g=ai(i.g),i.b=ai(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Me&&(i.r=Us(i.r),i.g=Us(i.g),i.b=Us(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Mi?Ja:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function ai(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Us(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ah=[.64,.33,.3,.6,.15,.06],oh=[.2126,.7152,.0722],lh=[.3127,.329],ch=new Kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),hh=new Kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ue.define({[Js]:{primaries:ah,whitePoint:lh,transfer:Ja,toXYZ:ch,fromXYZ:hh,luminanceCoefficients:oh,workingColorSpaceConfig:{unpackColorSpace:tn},outputColorSpaceConfig:{drawingBufferColorSpace:tn}},[tn]:{primaries:ah,whitePoint:lh,transfer:Me,toXYZ:ch,fromXYZ:hh,luminanceCoefficients:oh,outputColorSpaceConfig:{drawingBufferColorSpace:tn}}});var fs,Dl=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{fs===void 0&&(fs=vr("canvas")),fs.width=t.width,fs.height=t.height;let n=fs.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=fs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=vr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ai(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ai(e[n]/255)*255):e[n]=ai(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},ef=0,xa=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ef++}),this.uuid=ri(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(mo(s[a].image)):r.push(mo(s[a]))}else r=mo(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function mo(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?Dl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var nf=0,cn=class i extends li{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Xi,s=Xi,r=Wn,a=qi,o=Bn,l=oi,c=i.DEFAULT_ANISOTROPY,h=Mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:nf++}),this.uuid=ri(),this.name="",this.source=new xa(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new lt(0,0),this.repeat=new lt(1,1),this.center=new lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==lu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case il:t.x=t.x-Math.floor(t.x);break;case Xi:t.x=t.x<0?0:1;break;case sl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case il:t.y=t.y-Math.floor(t.y);break;case Xi:t.y=t.y<0?0:1;break;case sl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};cn.DEFAULT_IMAGE=null;cn.DEFAULT_MAPPING=lu;cn.DEFAULT_ANISOTROPY=1;var Se=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],d=l[8],f=l[1],p=l[5],g=l[9],x=l[2],m=l[6],u=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let E=(c+1)/2,M=(p+1)/2,D=(u+1)/2,C=(h+f)/4,R=(d+x)/4,N=(g+m)/4;return E>M&&E>D?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=C/n,r=R/n):M>D?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=C/s,r=N/s):D<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(D),n=R/r,s=N/r),this.set(n,s,r,e),this}let T=Math.sqrt((m-g)*(m-g)+(d-x)*(d-x)+(f-h)*(f-h));return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(d-x)/T,this.z=(f-h)/T,this.w=Math.acos((c+p+u-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ul=class extends li{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Se(0,0,t,e),this.scissorTest=!1,this.viewport=new Se(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Wn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new cn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new xa(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ci=class extends Ul{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},ya=class extends cn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ln,this.minFilter=ln,this.wrapR=Xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Nl=class extends cn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ln,this.minFilter=ln,this.wrapR=Xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var zn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],f=r[a+0],p=r[a+1],g=r[a+2],x=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(o===1){t[e+0]=f,t[e+1]=p,t[e+2]=g,t[e+3]=x;return}if(d!==x||l!==f||c!==p||h!==g){let m=1-o,u=l*f+c*p+h*g+d*x,T=u>=0?1:-1,E=1-u*u;if(E>Number.EPSILON){let D=Math.sqrt(E),C=Math.atan2(D,u*T);m=Math.sin(m*C)/D,o=Math.sin(o*C)/D}let M=o*T;if(l=l*m+f*M,c=c*m+p*M,h=h*m+g*M,d=d*m+x*M,m===1-o){let D=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=D,c*=D,h*=D,d*=D}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[a],f=r[a+1],p=r[a+2],g=r[a+3];return t[e]=o*g+h*d+l*p-c*f,t[e+1]=l*g+h*f+c*d-o*p,t[e+2]=c*g+h*p+o*f-l*d,t[e+3]=h*g-o*d-l*f-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),d=o(r/2),f=l(n/2),p=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=f*h*d+c*p*g,this._y=c*p*d-f*h*g,this._z=c*h*g+f*p*d,this._w=c*h*d-f*p*g;break;case"YXZ":this._x=f*h*d+c*p*g,this._y=c*p*d-f*h*g,this._z=c*h*g-f*p*d,this._w=c*h*d+f*p*g;break;case"ZXY":this._x=f*h*d-c*p*g,this._y=c*p*d+f*h*g,this._z=c*h*g+f*p*d,this._w=c*h*d-f*p*g;break;case"ZYX":this._x=f*h*d-c*p*g,this._y=c*p*d+f*h*g,this._z=c*h*g-f*p*d,this._w=c*h*d+f*p*g;break;case"YZX":this._x=f*h*d+c*p*g,this._y=c*p*d+f*h*g,this._z=c*h*g-f*p*d,this._w=c*h*d-f*p*g;break;case"XZY":this._x=f*h*d-c*p*g,this._y=c*p*d-f*h*g,this._z=c*h*g+f*p*d,this._w=c*h*d+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],d=e[10],f=n+o+d;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>d){let p=2*Math.sqrt(1+n-o-d);this._w=(h-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>d){let p=2*Math.sqrt(1+o-n-d);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+d-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Fe(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=a*d+this._w*f,this._x=n*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},A=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(uh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(uh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),d=2*(r*n-a*e);return this.x=e+l*c+a*d-o*h,this.y=n+l*h+o*c-r*d,this.z=s+l*d+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return go.copy(this).projectOnVector(t),this.sub(go)}reflect(t){return this.sub(go.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Fe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},go=new A,uh=new zn,Tn=class{constructor(t=new A(1/0,1/0,1/0),e=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Dn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Dn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Dn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Dn):Dn.fromBufferAttribute(r,a),Dn.applyMatrix4(t.matrixWorld),this.expandByPoint(Dn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Or.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Or.copy(n.boundingBox)),Or.applyMatrix4(t.matrixWorld),this.union(Or)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Dn),Dn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(rr),Fr.subVectors(this.max,rr),ps.subVectors(t.a,rr),ms.subVectors(t.b,rr),gs.subVectors(t.c,rr),mi.subVectors(ms,ps),gi.subVectors(gs,ms),Oi.subVectors(ps,gs);let e=[0,-mi.z,mi.y,0,-gi.z,gi.y,0,-Oi.z,Oi.y,mi.z,0,-mi.x,gi.z,0,-gi.x,Oi.z,0,-Oi.x,-mi.y,mi.x,0,-gi.y,gi.x,0,-Oi.y,Oi.x,0];return!_o(e,ps,ms,gs,Fr)||(e=[1,0,0,0,1,0,0,0,1],!_o(e,ps,ms,gs,Fr))?!1:(Br.crossVectors(mi,gi),e=[Br.x,Br.y,Br.z],_o(e,ps,ms,gs,Fr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Dn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Dn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:($n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),$n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),$n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),$n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),$n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),$n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),$n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),$n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints($n),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},$n=[new A,new A,new A,new A,new A,new A,new A,new A],Dn=new A,Or=new Tn,ps=new A,ms=new A,gs=new A,mi=new A,gi=new A,Oi=new A,rr=new A,Fr=new A,Br=new A,Fi=new A;function _o(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Fi.fromArray(i,r);let o=s.x*Math.abs(Fi.x)+s.y*Math.abs(Fi.y)+s.z*Math.abs(Fi.z),l=t.dot(Fi),c=e.dot(Fi),h=n.dot(Fi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var sf=new Tn,ar=new A,xo=new A,hi=class{constructor(t=new A,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):sf.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ar.subVectors(t,this.center);let e=ar.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ar,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(xo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ar.copy(t.center).add(xo)),this.expandByPoint(ar.copy(t.center).sub(xo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Kn=new A,yo=new A,zr=new A,_i=new A,vo=new A,kr=new A,Mo=new A,Vs=class{constructor(t=new A,e=new A(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Kn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Kn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Kn.copy(this.origin).addScaledVector(this.direction,e),Kn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){yo.copy(t).add(e).multiplyScalar(.5),zr.copy(e).sub(t).normalize(),_i.copy(this.origin).sub(yo);let r=t.distanceTo(e)*.5,a=-this.direction.dot(zr),o=_i.dot(this.direction),l=-_i.dot(zr),c=_i.lengthSq(),h=Math.abs(1-a*a),d,f,p,g;if(h>0)if(d=a*l-o,f=a*o-l,g=r*h,d>=0)if(f>=-g)if(f<=g){let x=1/h;d*=x,f*=x,p=d*(d+a*f+2*o)+f*(a*d+f+2*l)+c}else f=r,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*l)+c;else f<=-g?(d=Math.max(0,-(-a*r+o)),f=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+f*(f+2*l)+c):f<=g?(d=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(d=Math.max(0,-(a*r+o)),f=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+f*(f+2*l)+c);else f=a>0?-r:r,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(yo).addScaledVector(zr,f),p}intersectSphere(t,e){Kn.subVectors(t.center,this.origin);let n=Kn.dot(this.direction),s=Kn.dot(Kn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-f.z)*d,l=(t.max.z-f.z)*d):(o=(t.max.z-f.z)*d,l=(t.min.z-f.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Kn)!==null}intersectTriangle(t,e,n,s,r){vo.subVectors(e,t),kr.subVectors(n,t),Mo.crossVectors(vo,kr);let a=this.direction.dot(Mo),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;_i.subVectors(this.origin,t);let l=o*this.direction.dot(kr.crossVectors(_i,kr));if(l<0)return null;let c=o*this.direction.dot(vo.cross(_i));if(c<0||l+c>a)return null;let h=-o*_i.dot(Mo);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ae=class i{constructor(t,e,n,s,r,a,o,l,c,h,d,f,p,g,x,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,d,f,p,g,x,m)}set(t,e,n,s,r,a,o,l,c,h,d,f,p,g,x,m){let u=this.elements;return u[0]=t,u[4]=e,u[8]=n,u[12]=s,u[1]=r,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=h,u[10]=d,u[14]=f,u[3]=p,u[7]=g,u[11]=x,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/_s.setFromMatrixColumn(t,0).length(),r=1/_s.setFromMatrixColumn(t,1).length(),a=1/_s.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let f=a*h,p=a*d,g=o*h,x=o*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=p+g*c,e[5]=f-x*c,e[9]=-o*l,e[2]=x-f*c,e[6]=g+p*c,e[10]=a*l}else if(t.order==="YXZ"){let f=l*h,p=l*d,g=c*h,x=c*d;e[0]=f+x*o,e[4]=g*o-p,e[8]=a*c,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=p*o-g,e[6]=x+f*o,e[10]=a*l}else if(t.order==="ZXY"){let f=l*h,p=l*d,g=c*h,x=c*d;e[0]=f-x*o,e[4]=-a*d,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*h,e[9]=x-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let f=a*h,p=a*d,g=o*h,x=o*d;e[0]=l*h,e[4]=g*c-p,e[8]=f*c+x,e[1]=l*d,e[5]=x*c+f,e[9]=p*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let f=a*l,p=a*c,g=o*l,x=o*c;e[0]=l*h,e[4]=x-f*d,e[8]=g*d+p,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=p*d+g,e[10]=f-x*d}else if(t.order==="XZY"){let f=a*l,p=a*c,g=o*l,x=o*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=f*d+x,e[5]=a*h,e[9]=p*d-g,e[2]=g*d-p,e[6]=o*h,e[10]=x*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(rf,t,af)}lookAt(t,e,n){let s=this.elements;return xn.subVectors(t,e),xn.lengthSq()===0&&(xn.z=1),xn.normalize(),xi.crossVectors(n,xn),xi.lengthSq()===0&&(Math.abs(n.z)===1?xn.x+=1e-4:xn.z+=1e-4,xn.normalize(),xi.crossVectors(n,xn)),xi.normalize(),Vr.crossVectors(xn,xi),s[0]=xi.x,s[4]=Vr.x,s[8]=xn.x,s[1]=xi.y,s[5]=Vr.y,s[9]=xn.y,s[2]=xi.z,s[6]=Vr.z,s[10]=xn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],f=n[9],p=n[13],g=n[2],x=n[6],m=n[10],u=n[14],T=n[3],E=n[7],M=n[11],D=n[15],C=s[0],R=s[4],N=s[8],S=s[12],v=s[1],P=s[5],G=s[9],B=s[13],q=s[2],tt=s[6],Y=s[10],rt=s[14],X=s[3],ft=s[7],xt=s[11],Pt=s[15];return r[0]=a*C+o*v+l*q+c*X,r[4]=a*R+o*P+l*tt+c*ft,r[8]=a*N+o*G+l*Y+c*xt,r[12]=a*S+o*B+l*rt+c*Pt,r[1]=h*C+d*v+f*q+p*X,r[5]=h*R+d*P+f*tt+p*ft,r[9]=h*N+d*G+f*Y+p*xt,r[13]=h*S+d*B+f*rt+p*Pt,r[2]=g*C+x*v+m*q+u*X,r[6]=g*R+x*P+m*tt+u*ft,r[10]=g*N+x*G+m*Y+u*xt,r[14]=g*S+x*B+m*rt+u*Pt,r[3]=T*C+E*v+M*q+D*X,r[7]=T*R+E*P+M*tt+D*ft,r[11]=T*N+E*G+M*Y+D*xt,r[15]=T*S+E*B+M*rt+D*Pt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],f=t[10],p=t[14],g=t[3],x=t[7],m=t[11],u=t[15];return g*(+r*l*d-s*c*d-r*o*f+n*c*f+s*o*p-n*l*p)+x*(+e*l*p-e*c*f+r*a*f-s*a*p+s*c*h-r*l*h)+m*(+e*c*d-e*o*p-r*a*d+n*a*p+r*o*h-n*c*h)+u*(-s*o*h-e*l*d+e*o*f+s*a*d-n*a*f+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],f=t[10],p=t[11],g=t[12],x=t[13],m=t[14],u=t[15],T=d*m*c-x*f*c+x*l*p-o*m*p-d*l*u+o*f*u,E=g*f*c-h*m*c-g*l*p+a*m*p+h*l*u-a*f*u,M=h*x*c-g*d*c+g*o*p-a*x*p-h*o*u+a*d*u,D=g*d*l-h*x*l-g*o*f+a*x*f+h*o*m-a*d*m,C=e*T+n*E+s*M+r*D;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/C;return t[0]=T*R,t[1]=(x*f*r-d*m*r-x*s*p+n*m*p+d*s*u-n*f*u)*R,t[2]=(o*m*r-x*l*r+x*s*c-n*m*c-o*s*u+n*l*u)*R,t[3]=(d*l*r-o*f*r-d*s*c+n*f*c+o*s*p-n*l*p)*R,t[4]=E*R,t[5]=(h*m*r-g*f*r+g*s*p-e*m*p-h*s*u+e*f*u)*R,t[6]=(g*l*r-a*m*r-g*s*c+e*m*c+a*s*u-e*l*u)*R,t[7]=(a*f*r-h*l*r+h*s*c-e*f*c-a*s*p+e*l*p)*R,t[8]=M*R,t[9]=(g*d*r-h*x*r-g*n*p+e*x*p+h*n*u-e*d*u)*R,t[10]=(a*x*r-g*o*r+g*n*c-e*x*c-a*n*u+e*o*u)*R,t[11]=(h*o*r-a*d*r-h*n*c+e*d*c+a*n*p-e*o*p)*R,t[12]=D*R,t[13]=(h*x*s-g*d*s+g*n*f-e*x*f-h*n*m+e*d*m)*R,t[14]=(g*o*s-a*x*s-g*n*l+e*x*l+a*n*m-e*o*m)*R,t[15]=(a*d*s-h*o*s+h*n*l-e*d*l-a*n*f+e*o*f)*R,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,d=o+o,f=r*c,p=r*h,g=r*d,x=a*h,m=a*d,u=o*d,T=l*c,E=l*h,M=l*d,D=n.x,C=n.y,R=n.z;return s[0]=(1-(x+u))*D,s[1]=(p+M)*D,s[2]=(g-E)*D,s[3]=0,s[4]=(p-M)*C,s[5]=(1-(f+u))*C,s[6]=(m+T)*C,s[7]=0,s[8]=(g+E)*R,s[9]=(m-T)*R,s[10]=(1-(f+x))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=_s.set(s[0],s[1],s[2]).length(),a=_s.set(s[4],s[5],s[6]).length(),o=_s.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Un.copy(this);let c=1/r,h=1/a,d=1/o;return Un.elements[0]*=c,Un.elements[1]*=c,Un.elements[2]*=c,Un.elements[4]*=h,Un.elements[5]*=h,Un.elements[6]*=h,Un.elements[8]*=d,Un.elements[9]*=d,Un.elements[10]*=d,e.setFromRotationMatrix(Un),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=si){let l=this.elements,c=2*r/(e-t),h=2*r/(n-s),d=(e+t)/(e-t),f=(n+s)/(n-s),p,g;if(o===si)p=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===_a)p=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=si){let l=this.elements,c=1/(e-t),h=1/(n-s),d=1/(a-r),f=(e+t)*c,p=(n+s)*h,g,x;if(o===si)g=(a+r)*d,x=-2*d;else if(o===_a)g=r*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},_s=new A,Un=new Ae,rf=new A(0,0,0),af=new A(1,1,1),xi=new A,Vr=new A,xn=new A,dh=new Ae,fh=new zn,ui=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],f=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Fe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Fe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Fe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Fe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Fe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Fe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return dh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(dh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return fh.setFromEuler(this),this.setFromQuaternion(fh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ui.DEFAULT_ORDER="XYZ";var Mr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},of=0,ph=new A,xs=new zn,jn=new Ae,Hr=new A,or=new A,lf=new A,cf=new zn,mh=new A(1,0,0),gh=new A(0,1,0),_h=new A(0,0,1),xh={type:"added"},hf={type:"removed"},ys={type:"childadded",child:null},So={type:"childremoved",child:null},Ne=class i extends li{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:of++}),this.uuid=ri(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new A,e=new ui,n=new zn,s=new A(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ae},normalMatrix:{value:new Kt}}),this.matrix=new Ae,this.matrixWorld=new Ae,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Mr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return xs.setFromAxisAngle(t,e),this.quaternion.multiply(xs),this}rotateOnWorldAxis(t,e){return xs.setFromAxisAngle(t,e),this.quaternion.premultiply(xs),this}rotateX(t){return this.rotateOnAxis(mh,t)}rotateY(t){return this.rotateOnAxis(gh,t)}rotateZ(t){return this.rotateOnAxis(_h,t)}translateOnAxis(t,e){return ph.copy(t).applyQuaternion(this.quaternion),this.position.add(ph.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(mh,t)}translateY(t){return this.translateOnAxis(gh,t)}translateZ(t){return this.translateOnAxis(_h,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(jn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Hr.copy(t):Hr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),or.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?jn.lookAt(or,Hr,this.up):jn.lookAt(Hr,or,this.up),this.quaternion.setFromRotationMatrix(jn),s&&(jn.extractRotation(s.matrixWorld),xs.setFromRotationMatrix(jn),this.quaternion.premultiply(xs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(xh),ys.child=t,this.dispatchEvent(ys),ys.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(hf),So.child=t,this.dispatchEvent(So),So.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),jn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),jn.multiply(t.parent.matrixWorld)),t.applyMatrix4(jn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(xh),ys.child=t,this.dispatchEvent(ys),ys.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(or,t,lf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(or,cf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),d=a(t.shapes),f=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Ne.DEFAULT_UP=new A(0,1,0);Ne.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ne.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Nn=new A,Qn=new A,bo=new A,ti=new A,vs=new A,Ms=new A,yh=new A,wo=new A,Eo=new A,To=new A,Ao=new Se,Co=new Se,Ro=new Se,ni=class i{constructor(t=new A,e=new A,n=new A){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Nn.subVectors(t,e),s.cross(Nn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Nn.subVectors(s,e),Qn.subVectors(n,e),bo.subVectors(t,e);let a=Nn.dot(Nn),o=Nn.dot(Qn),l=Nn.dot(bo),c=Qn.dot(Qn),h=Qn.dot(bo),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let f=1/d,p=(c*l-o*h)*f,g=(a*h-o*l)*f;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,ti)===null?!1:ti.x>=0&&ti.y>=0&&ti.x+ti.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,ti)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ti.x),l.addScaledVector(a,ti.y),l.addScaledVector(o,ti.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Ao.setScalar(0),Co.setScalar(0),Ro.setScalar(0),Ao.fromBufferAttribute(t,e),Co.fromBufferAttribute(t,n),Ro.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Ao,r.x),a.addScaledVector(Co,r.y),a.addScaledVector(Ro,r.z),a}static isFrontFacing(t,e,n,s){return Nn.subVectors(n,e),Qn.subVectors(t,e),Nn.cross(Qn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Nn.subVectors(this.c,this.b),Qn.subVectors(this.a,this.b),Nn.cross(Qn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;vs.subVectors(s,n),Ms.subVectors(r,n),wo.subVectors(t,n);let l=vs.dot(wo),c=Ms.dot(wo);if(l<=0&&c<=0)return e.copy(n);Eo.subVectors(t,s);let h=vs.dot(Eo),d=Ms.dot(Eo);if(h>=0&&d<=h)return e.copy(s);let f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(vs,a);To.subVectors(t,r);let p=vs.dot(To),g=Ms.dot(To);if(g>=0&&p<=g)return e.copy(r);let x=p*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(Ms,o);let m=h*g-p*d;if(m<=0&&d-h>=0&&p-g>=0)return yh.subVectors(r,s),o=(d-h)/(d-h+(p-g)),e.copy(s).addScaledVector(yh,o);let u=1/(m+x+f);return a=x*u,o=f*u,e.copy(n).addScaledVector(vs,a).addScaledVector(Ms,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Mu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yi={h:0,s:0,l:0},Gr={h:0,s:0,l:0};function Po(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Lt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=tn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ue.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=ue.workingColorSpace){return this.r=t,this.g=e,this.b=n,ue.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=ue.workingColorSpace){if(t=Sc(t,1),e=Fe(e,0,1),n=Fe(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Po(a,r,t+1/3),this.g=Po(a,r,t),this.b=Po(a,r,t-1/3)}return ue.toWorkingColorSpace(this,s),this}setStyle(t,e=tn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=tn){let n=Mu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ai(t.r),this.g=ai(t.g),this.b=ai(t.b),this}copyLinearToSRGB(t){return this.r=Us(t.r),this.g=Us(t.g),this.b=Us(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=tn){return ue.fromWorkingColorSpace(Qe.copy(this),t),Math.round(Fe(Qe.r*255,0,255))*65536+Math.round(Fe(Qe.g*255,0,255))*256+Math.round(Fe(Qe.b*255,0,255))}getHexString(t=tn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ue.workingColorSpace){ue.fromWorkingColorSpace(Qe.copy(this),e);let n=Qe.r,s=Qe.g,r=Qe.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ue.workingColorSpace){return ue.fromWorkingColorSpace(Qe.copy(this),e),t.r=Qe.r,t.g=Qe.g,t.b=Qe.b,t}getStyle(t=tn){ue.fromWorkingColorSpace(Qe.copy(this),t);let e=Qe.r,n=Qe.g,s=Qe.b;return t!==tn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(yi),this.setHSL(yi.h+t,yi.s+e,yi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(yi),t.getHSL(Gr);let n=pr(yi.h,Gr.h,e),s=pr(yi.s,Gr.s,e),r=pr(yi.l,Gr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Qe=new Lt;Lt.NAMES=Mu;var uf=0,Ei=class extends li{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:uf++}),this.uuid=ri(),this.name="",this.blending=Is,this.side=wi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qo,this.blendDst=Yo,this.blendEquation=Gi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Lt(0,0,0),this.blendAlpha=0,this.depthFunc=Os,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=nh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ds,this.stencilZFail=ds,this.stencilZPass=ds,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Is&&(n.blending=this.blending),this.side!==wi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==qo&&(n.blendSrc=this.blendSrc),this.blendDst!==Yo&&(n.blendDst=this.blendDst),this.blendEquation!==Gi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Os&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==nh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ds&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ds&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ds&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Le=class extends Ei{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ui,this.combine=ou,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Oe=new A,Wr=new lt,Mn=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ll,this.updateRanges=[],this.gpuType=ii,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Wr.fromBufferAttribute(this,e),Wr.applyMatrix3(t),this.setXY(e,Wr.x,Wr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.applyMatrix3(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.applyMatrix4(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.applyNormalMatrix(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.transformDirection(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Fn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=_e(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Fn(e,this.array)),e}setX(t,e){return this.normalized&&(e=_e(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Fn(e,this.array)),e}setY(t,e){return this.normalized&&(e=_e(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Fn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=_e(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Fn(e,this.array)),e}setW(t,e){return this.normalized&&(e=_e(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=_e(e,this.array),n=_e(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=_e(e,this.array),n=_e(n,this.array),s=_e(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=_e(e,this.array),n=_e(n,this.array),s=_e(s,this.array),r=_e(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ll&&(t.usage=this.usage),t}};var va=class extends Mn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Ma=class extends Mn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var xe=class extends Mn{constructor(t,e,n){super(new Float32Array(t),e,n)}},df=0,wn=new Ae,Io=new Ne,Ss=new A,yn=new Tn,lr=new Tn,Ye=new A,nn=class i extends li{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:df++}),this.uuid=ri(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(vu(t)?Ma:va)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Kt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return wn.makeRotationFromQuaternion(t),this.applyMatrix4(wn),this}rotateX(t){return wn.makeRotationX(t),this.applyMatrix4(wn),this}rotateY(t){return wn.makeRotationY(t),this.applyMatrix4(wn),this}rotateZ(t){return wn.makeRotationZ(t),this.applyMatrix4(wn),this}translate(t,e,n){return wn.makeTranslation(t,e,n),this.applyMatrix4(wn),this}scale(t,e,n){return wn.makeScale(t,e,n),this.applyMatrix4(wn),this}lookAt(t){return Io.lookAt(t),Io.updateMatrix(),this.applyMatrix4(Io.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ss).negate(),this.translate(Ss.x,Ss.y,Ss.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new xe(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Tn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];yn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ye.addVectors(this.boundingBox.min,yn.min),this.boundingBox.expandByPoint(Ye),Ye.addVectors(this.boundingBox.max,yn.max),this.boundingBox.expandByPoint(Ye)):(this.boundingBox.expandByPoint(yn.min),this.boundingBox.expandByPoint(yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new A,1/0);return}if(t){let n=this.boundingSphere.center;if(yn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];lr.setFromBufferAttribute(o),this.morphTargetsRelative?(Ye.addVectors(yn.min,lr.min),yn.expandByPoint(Ye),Ye.addVectors(yn.max,lr.max),yn.expandByPoint(Ye)):(yn.expandByPoint(lr.min),yn.expandByPoint(lr.max))}yn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Ye.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ye));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ye.fromBufferAttribute(o,c),l&&(Ss.fromBufferAttribute(t,c),Ye.add(Ss)),s=Math.max(s,n.distanceToSquared(Ye))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Mn(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let N=0;N<n.count;N++)o[N]=new A,l[N]=new A;let c=new A,h=new A,d=new A,f=new lt,p=new lt,g=new lt,x=new A,m=new A;function u(N,S,v){c.fromBufferAttribute(n,N),h.fromBufferAttribute(n,S),d.fromBufferAttribute(n,v),f.fromBufferAttribute(r,N),p.fromBufferAttribute(r,S),g.fromBufferAttribute(r,v),h.sub(c),d.sub(c),p.sub(f),g.sub(f);let P=1/(p.x*g.y-g.x*p.y);isFinite(P)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(P),m.copy(d).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(P),o[N].add(x),o[S].add(x),o[v].add(x),l[N].add(m),l[S].add(m),l[v].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let N=0,S=T.length;N<S;++N){let v=T[N],P=v.start,G=v.count;for(let B=P,q=P+G;B<q;B+=3)u(t.getX(B+0),t.getX(B+1),t.getX(B+2))}let E=new A,M=new A,D=new A,C=new A;function R(N){D.fromBufferAttribute(s,N),C.copy(D);let S=o[N];E.copy(S),E.sub(D.multiplyScalar(D.dot(S))).normalize(),M.crossVectors(C,S);let P=M.dot(l[N])<0?-1:1;a.setXYZW(N,E.x,E.y,E.z,P)}for(let N=0,S=T.length;N<S;++N){let v=T[N],P=v.start,G=v.count;for(let B=P,q=P+G;B<q;B+=3)R(t.getX(B+0)),R(t.getX(B+1)),R(t.getX(B+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Mn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let s=new A,r=new A,a=new A,o=new A,l=new A,c=new A,h=new A,d=new A;if(t)for(let f=0,p=t.count;f<p;f+=3){let g=t.getX(f+0),x=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,m),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=e.count;f<p;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ye.fromBufferAttribute(t,e),Ye.normalize(),t.setXYZ(e,Ye.x,Ye.y,Ye.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,d=o.normalized,f=new c.constructor(l.length*h),p=0,g=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?p=l[x]*o.data.stride+o.offset:p=l[x]*h;for(let u=0;u<h;u++)f[g++]=c[p++]}return new Mn(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){let f=c[h],p=t(f,n);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){let p=c[d];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let f=0,p=d.length;f<p;f++)h.push(d[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},vh=new Ae,Bi=new Vs,Xr=new hi,Mh=new A,qr=new A,Yr=new A,Zr=new A,Lo=new A,Jr=new A,Sh=new A,$r=new A,le=class extends Ne{constructor(t=new nn,e=new Le){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Jr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],d=r[l];h!==0&&(Lo.fromBufferAttribute(d,t),a?Jr.addScaledVector(Lo,h):Jr.addScaledVector(Lo.sub(e),h))}e.add(Jr)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Xr.copy(n.boundingSphere),Xr.applyMatrix4(r),Bi.copy(t.ray).recast(t.near),!(Xr.containsPoint(Bi.origin)===!1&&(Bi.intersectSphere(Xr,Mh)===null||Bi.origin.distanceToSquared(Mh)>(t.far-t.near)**2))&&(vh.copy(r).invert(),Bi.copy(t.ray).applyMatrix4(vh),!(n.boundingBox!==null&&Bi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Bi)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=f.length;g<x;g++){let m=f[g],u=a[m.materialIndex],T=Math.max(m.start,p.start),E=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let M=T,D=E;M<D;M+=3){let C=o.getX(M),R=o.getX(M+1),N=o.getX(M+2);s=Kr(this,u,t,n,c,h,d,C,R,N),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let m=g,u=x;m<u;m+=3){let T=o.getX(m),E=o.getX(m+1),M=o.getX(m+2);s=Kr(this,a,t,n,c,h,d,T,E,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=f.length;g<x;g++){let m=f[g],u=a[m.materialIndex],T=Math.max(m.start,p.start),E=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let M=T,D=E;M<D;M+=3){let C=M,R=M+1,N=M+2;s=Kr(this,u,t,n,c,h,d,C,R,N),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=g,u=x;m<u;m+=3){let T=m,E=m+1,M=m+2;s=Kr(this,a,t,n,c,h,d,T,E,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function ff(i,t,e,n,s,r,a,o){let l;if(t.side===en?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===wi,o),l===null)return null;$r.copy(o),$r.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo($r);return c<e.near||c>e.far?null:{distance:c,point:$r.clone(),object:i}}function Kr(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,qr),i.getVertexPosition(l,Yr),i.getVertexPosition(c,Zr);let h=ff(i,t,e,n,qr,Yr,Zr,Sh);if(h){let d=new A;ni.getBarycoord(Sh,qr,Yr,Zr,d),s&&(h.uv=ni.getInterpolatedAttribute(s,o,l,c,d,new lt)),r&&(h.uv1=ni.getInterpolatedAttribute(r,o,l,c,d,new lt)),a&&(h.normal=ni.getInterpolatedAttribute(a,o,l,c,d,new A),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new A,materialIndex:0};ni.getNormal(qr,Yr,Zr,f.normal),h.face=f,h.barycoord=d}return h}var Zt=class i extends nn{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],d=[],f=0,p=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new xe(c,3)),this.setAttribute("normal",new xe(h,3)),this.setAttribute("uv",new xe(d,2));function g(x,m,u,T,E,M,D,C,R,N,S){let v=M/R,P=D/N,G=M/2,B=D/2,q=C/2,tt=R+1,Y=N+1,rt=0,X=0,ft=new A;for(let xt=0;xt<Y;xt++){let Pt=xt*P-B;for(let te=0;te<tt;te++){let me=te*v-G;ft[x]=me*T,ft[m]=Pt*E,ft[u]=q,c.push(ft.x,ft.y,ft.z),ft[x]=0,ft[m]=0,ft[u]=C>0?1:-1,h.push(ft.x,ft.y,ft.z),d.push(te/R),d.push(1-xt/N),rt+=1}}for(let xt=0;xt<N;xt++)for(let Pt=0;Pt<R;Pt++){let te=f+Pt+tt*xt,me=f+Pt+tt*(xt+1),$=f+(Pt+1)+tt*(xt+1),at=f+(Pt+1)+tt*xt;l.push(te,me,at),l.push(me,$,at),X+=6}o.addGroup(p,X,S),p+=X,f+=rt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Hs(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function an(i){let t={};for(let e=0;e<i.length;e++){let n=Hs(i[e]);for(let s in n)t[s]=n[s]}return t}function pf(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Su(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ue.workingColorSpace}var Ka={clone:Hs,merge:an},mf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,mn=class extends Ei{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mf,this.fragmentShader=gf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Hs(t.uniforms),this.uniformsGroups=pf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Sa=class extends Ne{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ae,this.projectionMatrix=new Ae,this.projectionMatrixInverse=new Ae,this.coordinateSystem=si}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},vi=new A,bh=new lt,wh=new lt,vn=class extends Sa{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=yr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ds*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return yr*2*Math.atan(Math.tan(Ds*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){vi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(vi.x,vi.y).multiplyScalar(-t/vi.z),vi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(vi.x,vi.y).multiplyScalar(-t/vi.z)}getViewSize(t,e){return this.getViewBounds(t,bh,wh),e.subVectors(wh,bh)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ds*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},bs=-90,ws=1,Ol=class extends Ne{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new vn(bs,ws,t,e);s.layers=this.layers,this.add(s);let r=new vn(bs,ws,t,e);r.layers=this.layers,this.add(r);let a=new vn(bs,ws,t,e);a.layers=this.layers,this.add(a);let o=new vn(bs,ws,t,e);o.layers=this.layers,this.add(o);let l=new vn(bs,ws,t,e);l.layers=this.layers,this.add(l);let c=new vn(bs,ws,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===si)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===_a)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(d,f,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},ba=class extends cn{constructor(t,e,n,s,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Fs,super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Fl=class extends ci{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new ba(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Wn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Zt(5,5,5),r=new mn({name:"CubemapFromEquirect",uniforms:Hs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:en,blending:Si});r.uniforms.tEquirect.value=e;let a=new le(s,r),o=e.minFilter;return e.minFilter===qi&&(e.minFilter=Wn),new Ol(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},Do=new A,_f=new A,xf=new Kt,On=class{constructor(t=new A(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Do.subVectors(n,e).cross(_f.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Do),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||xf.getNormalMatrix(t),s=this.coplanarPoint(Do).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},zi=new hi,jr=new A,Sr=class{constructor(t=new On,e=new On,n=new On,s=new On,r=new On,a=new On){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=si){let n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],d=s[6],f=s[7],p=s[8],g=s[9],x=s[10],m=s[11],u=s[12],T=s[13],E=s[14],M=s[15];if(n[0].setComponents(l-r,f-c,m-p,M-u).normalize(),n[1].setComponents(l+r,f+c,m+p,M+u).normalize(),n[2].setComponents(l+a,f+h,m+g,M+T).normalize(),n[3].setComponents(l-a,f-h,m-g,M-T).normalize(),n[4].setComponents(l-o,f-d,m-x,M-E).normalize(),e===si)n[5].setComponents(l+o,f+d,m+x,M+E).normalize();else if(e===_a)n[5].setComponents(o,d,x,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),zi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),zi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(zi)}intersectsSprite(t){return zi.center.set(0,0,0),zi.radius=.7071067811865476,zi.applyMatrix4(t.matrixWorld),this.intersectsSphere(zi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(jr.x=s.normal.x>0?t.max.x:t.min.x,jr.y=s.normal.y>0?t.max.y:t.min.y,jr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(jr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function bu(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function yf(i){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,d=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){let h=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,h);else{d.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<d.length;p++){let g=d[f],x=d[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,d[f]=x)}d.length=f+1;for(let p=0,g=d.length;p<g;p++){let x=d[p];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Xn=class i extends nn{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,d=t/o,f=e/l,p=[],g=[],x=[],m=[];for(let u=0;u<h;u++){let T=u*f-a;for(let E=0;E<c;E++){let M=E*d-r;g.push(M,-T,0),x.push(0,0,1),m.push(E/o),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let T=0;T<o;T++){let E=T+c*u,M=T+c*(u+1),D=T+1+c*(u+1),C=T+1+c*u;p.push(E,M,C),p.push(M,D,C)}this.setIndex(p),this.setAttribute("position",new xe(g,3)),this.setAttribute("normal",new xe(x,3)),this.setAttribute("uv",new xe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},vf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Mf=`#ifdef USE_ALPHAHASH
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
#endif`,Sf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,bf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ef=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Tf=`#ifdef USE_AOMAP
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
#endif`,Af=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Cf=`#ifdef USE_BATCHING
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
#endif`,Rf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Pf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,If=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Lf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Df=`#ifdef USE_IRIDESCENCE
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
#endif`,Uf=`#ifdef USE_BUMPMAP
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
#endif`,Nf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Of=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ff=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Bf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,kf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Vf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Hf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Gf=`#define PI 3.141592653589793
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
} // validated`,Wf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Xf=`vec3 transformedNormal = objectNormal;
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
#endif`,qf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Yf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Zf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Jf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$f="gl_FragColor = linearToOutputTexel( gl_FragColor );",Kf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,jf=`#ifdef USE_ENVMAP
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
#endif`,Qf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,tp=`#ifdef USE_ENVMAP
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
#endif`,ep=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,np=`#ifdef USE_ENVMAP
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
#endif`,ip=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,sp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,rp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ap=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,op=`#ifdef USE_GRADIENTMAP
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
}`,lp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,cp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,up=`uniform bool receiveShadow;
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
#endif`,dp=`#ifdef USE_ENVMAP
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
#endif`,fp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,pp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,mp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,gp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_p=`PhysicalMaterial material;
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
#endif`,xp=`struct PhysicalMaterial {
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
}`,yp=`
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
#endif`,vp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Mp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Sp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ep=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Tp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ap=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Cp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Rp=`#if defined( USE_POINTS_UV )
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
#endif`,Pp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ip=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Lp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Dp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Up=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Np=`#ifdef USE_MORPHTARGETS
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
#endif`,Op=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Bp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,zp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Hp=`#ifdef USE_NORMALMAP
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
#endif`,Gp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Wp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Xp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Yp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Zp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Jp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$p=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Kp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,jp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Qp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,tm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,em=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,nm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,im=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,sm=`float getShadowMask() {
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
}`,rm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,am=`#ifdef USE_SKINNING
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
#endif`,om=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,lm=`#ifdef USE_SKINNING
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
#endif`,cm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,um=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,dm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,fm=`#ifdef USE_TRANSMISSION
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
#endif`,pm=`#ifdef USE_TRANSMISSION
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
#endif`,mm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_m=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,ym=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vm=`uniform sampler2D t2D;
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
}`,Mm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,bm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Em=`#include <common>
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
}`,Tm=`#if DEPTH_PACKING == 3200
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
}`,Am=`#define DISTANCE
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
}`,Cm=`#define DISTANCE
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
}`,Rm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Pm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Im=`uniform float scale;
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
}`,Lm=`uniform vec3 diffuse;
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
}`,Dm=`#include <common>
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
}`,Um=`uniform vec3 diffuse;
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
}`,Nm=`#define LAMBERT
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
}`,Om=`#define LAMBERT
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
}`,Fm=`#define MATCAP
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
}`,Bm=`#define MATCAP
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
}`,zm=`#define NORMAL
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
}`,km=`#define NORMAL
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
}`,Vm=`#define PHONG
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
}`,Hm=`#define PHONG
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
}`,Gm=`#define STANDARD
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
}`,Wm=`#define STANDARD
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
}`,Xm=`#define TOON
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
}`,qm=`#define TOON
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
}`,Ym=`uniform float size;
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
}`,Zm=`uniform vec3 diffuse;
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
}`,Jm=`#include <common>
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
}`,$m=`uniform vec3 color;
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
}`,Km=`uniform float rotation;
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
}`,jm=`uniform vec3 diffuse;
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
}`,Qt={alphahash_fragment:vf,alphahash_pars_fragment:Mf,alphamap_fragment:Sf,alphamap_pars_fragment:bf,alphatest_fragment:wf,alphatest_pars_fragment:Ef,aomap_fragment:Tf,aomap_pars_fragment:Af,batching_pars_vertex:Cf,batching_vertex:Rf,begin_vertex:Pf,beginnormal_vertex:If,bsdfs:Lf,iridescence_fragment:Df,bumpmap_pars_fragment:Uf,clipping_planes_fragment:Nf,clipping_planes_pars_fragment:Of,clipping_planes_pars_vertex:Ff,clipping_planes_vertex:Bf,color_fragment:zf,color_pars_fragment:kf,color_pars_vertex:Vf,color_vertex:Hf,common:Gf,cube_uv_reflection_fragment:Wf,defaultnormal_vertex:Xf,displacementmap_pars_vertex:qf,displacementmap_vertex:Yf,emissivemap_fragment:Zf,emissivemap_pars_fragment:Jf,colorspace_fragment:$f,colorspace_pars_fragment:Kf,envmap_fragment:jf,envmap_common_pars_fragment:Qf,envmap_pars_fragment:tp,envmap_pars_vertex:ep,envmap_physical_pars_fragment:dp,envmap_vertex:np,fog_vertex:ip,fog_pars_vertex:sp,fog_fragment:rp,fog_pars_fragment:ap,gradientmap_pars_fragment:op,lightmap_pars_fragment:lp,lights_lambert_fragment:cp,lights_lambert_pars_fragment:hp,lights_pars_begin:up,lights_toon_fragment:fp,lights_toon_pars_fragment:pp,lights_phong_fragment:mp,lights_phong_pars_fragment:gp,lights_physical_fragment:_p,lights_physical_pars_fragment:xp,lights_fragment_begin:yp,lights_fragment_maps:vp,lights_fragment_end:Mp,logdepthbuf_fragment:Sp,logdepthbuf_pars_fragment:bp,logdepthbuf_pars_vertex:wp,logdepthbuf_vertex:Ep,map_fragment:Tp,map_pars_fragment:Ap,map_particle_fragment:Cp,map_particle_pars_fragment:Rp,metalnessmap_fragment:Pp,metalnessmap_pars_fragment:Ip,morphinstance_vertex:Lp,morphcolor_vertex:Dp,morphnormal_vertex:Up,morphtarget_pars_vertex:Np,morphtarget_vertex:Op,normal_fragment_begin:Fp,normal_fragment_maps:Bp,normal_pars_fragment:zp,normal_pars_vertex:kp,normal_vertex:Vp,normalmap_pars_fragment:Hp,clearcoat_normal_fragment_begin:Gp,clearcoat_normal_fragment_maps:Wp,clearcoat_pars_fragment:Xp,iridescence_pars_fragment:qp,opaque_fragment:Yp,packing:Zp,premultiplied_alpha_fragment:Jp,project_vertex:$p,dithering_fragment:Kp,dithering_pars_fragment:jp,roughnessmap_fragment:Qp,roughnessmap_pars_fragment:tm,shadowmap_pars_fragment:em,shadowmap_pars_vertex:nm,shadowmap_vertex:im,shadowmask_pars_fragment:sm,skinbase_vertex:rm,skinning_pars_vertex:am,skinning_vertex:om,skinnormal_vertex:lm,specularmap_fragment:cm,specularmap_pars_fragment:hm,tonemapping_fragment:um,tonemapping_pars_fragment:dm,transmission_fragment:fm,transmission_pars_fragment:pm,uv_pars_fragment:mm,uv_pars_vertex:gm,uv_vertex:_m,worldpos_vertex:xm,background_vert:ym,background_frag:vm,backgroundCube_vert:Mm,backgroundCube_frag:Sm,cube_vert:bm,cube_frag:wm,depth_vert:Em,depth_frag:Tm,distanceRGBA_vert:Am,distanceRGBA_frag:Cm,equirect_vert:Rm,equirect_frag:Pm,linedashed_vert:Im,linedashed_frag:Lm,meshbasic_vert:Dm,meshbasic_frag:Um,meshlambert_vert:Nm,meshlambert_frag:Om,meshmatcap_vert:Fm,meshmatcap_frag:Bm,meshnormal_vert:zm,meshnormal_frag:km,meshphong_vert:Vm,meshphong_frag:Hm,meshphysical_vert:Gm,meshphysical_frag:Wm,meshtoon_vert:Xm,meshtoon_frag:qm,points_vert:Ym,points_frag:Zm,shadow_vert:Jm,shadow_frag:$m,sprite_vert:Km,sprite_frag:jm},ht={common:{diffuse:{value:new Lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Kt}},envmap:{envMap:{value:null},envMapRotation:{value:new Kt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Kt},normalScale:{value:new lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0},uvTransform:{value:new Kt}},sprite:{diffuse:{value:new Lt(16777215)},opacity:{value:1},center:{value:new lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}}},on={basic:{uniforms:an([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.fog]),vertexShader:Qt.meshbasic_vert,fragmentShader:Qt.meshbasic_frag},lambert:{uniforms:an([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new Lt(0)}}]),vertexShader:Qt.meshlambert_vert,fragmentShader:Qt.meshlambert_frag},phong:{uniforms:an([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new Lt(0)},specular:{value:new Lt(1118481)},shininess:{value:30}}]),vertexShader:Qt.meshphong_vert,fragmentShader:Qt.meshphong_frag},standard:{uniforms:an([ht.common,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.roughnessmap,ht.metalnessmap,ht.fog,ht.lights,{emissive:{value:new Lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag},toon:{uniforms:an([ht.common,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.gradientmap,ht.fog,ht.lights,{emissive:{value:new Lt(0)}}]),vertexShader:Qt.meshtoon_vert,fragmentShader:Qt.meshtoon_frag},matcap:{uniforms:an([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,{matcap:{value:null}}]),vertexShader:Qt.meshmatcap_vert,fragmentShader:Qt.meshmatcap_frag},points:{uniforms:an([ht.points,ht.fog]),vertexShader:Qt.points_vert,fragmentShader:Qt.points_frag},dashed:{uniforms:an([ht.common,ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qt.linedashed_vert,fragmentShader:Qt.linedashed_frag},depth:{uniforms:an([ht.common,ht.displacementmap]),vertexShader:Qt.depth_vert,fragmentShader:Qt.depth_frag},normal:{uniforms:an([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,{opacity:{value:1}}]),vertexShader:Qt.meshnormal_vert,fragmentShader:Qt.meshnormal_frag},sprite:{uniforms:an([ht.sprite,ht.fog]),vertexShader:Qt.sprite_vert,fragmentShader:Qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qt.background_vert,fragmentShader:Qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Kt}},vertexShader:Qt.backgroundCube_vert,fragmentShader:Qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qt.cube_vert,fragmentShader:Qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qt.equirect_vert,fragmentShader:Qt.equirect_frag},distanceRGBA:{uniforms:an([ht.common,ht.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qt.distanceRGBA_vert,fragmentShader:Qt.distanceRGBA_frag},shadow:{uniforms:an([ht.lights,ht.fog,{color:{value:new Lt(0)},opacity:{value:1}}]),vertexShader:Qt.shadow_vert,fragmentShader:Qt.shadow_frag}};on.physical={uniforms:an([on.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Kt},clearcoatNormalScale:{value:new lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Kt},sheen:{value:0},sheenColor:{value:new Lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Kt},transmissionSamplerSize:{value:new lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Kt},attenuationDistance:{value:0},attenuationColor:{value:new Lt(0)},specularColor:{value:new Lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Kt},anisotropyVector:{value:new lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Kt}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag};var Qr={r:0,b:0,g:0},ki=new ui,Qm=new Ae;function tg(i,t,e,n,s,r,a){let o=new Lt(0),l=r===!0?0:1,c,h,d=null,f=0,p=null;function g(T){let E=T.isScene===!0?T.background:null;return E&&E.isTexture&&(E=(T.backgroundBlurriness>0?e:t).get(E)),E}function x(T){let E=!1,M=g(T);M===null?u(o,l):M&&M.isColor&&(u(M,1),E=!0);let D=i.xr.getEnvironmentBlendMode();D==="additive"?n.buffers.color.setClear(0,0,0,1,a):D==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(T,E){let M=g(E);M&&(M.isCubeTexture||M.mapping===Ya)?(h===void 0&&(h=new le(new Zt(1,1,1),new mn({name:"BackgroundCubeMaterial",uniforms:Hs(on.backgroundCube.uniforms),vertexShader:on.backgroundCube.vertexShader,fragmentShader:on.backgroundCube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(D,C,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ki.copy(E.backgroundRotation),ki.x*=-1,ki.y*=-1,ki.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(ki.y*=-1,ki.z*=-1),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Qm.makeRotationFromEuler(ki)),h.material.toneMapped=ue.getTransfer(M.colorSpace)!==Me,(d!==M||f!==M.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,d=M,f=M.version,p=i.toneMapping),h.layers.enableAll(),T.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new le(new Xn(2,2),new mn({name:"BackgroundMaterial",uniforms:Hs(on.background.uniforms),vertexShader:on.background.vertexShader,fragmentShader:on.background.fragmentShader,side:wi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=ue.getTransfer(M.colorSpace)!==Me,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(d!==M||f!==M.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,d=M,f=M.version,p=i.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function u(T,E){T.getRGB(Qr,Su(i)),n.buffers.color.setClear(Qr.r,Qr.g,Qr.b,E,a)}return{getClearColor:function(){return o},setClearColor:function(T,E=1){o.set(T),l=E,u(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,u(o,l)},render:x,addToRenderList:m}}function eg(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,a=!1;function o(v,P,G,B,q){let tt=!1,Y=d(B,G,P);r!==Y&&(r=Y,c(r.object)),tt=p(v,B,G,q),tt&&g(v,B,G,q),q!==null&&t.update(q,i.ELEMENT_ARRAY_BUFFER),(tt||a)&&(a=!1,M(v,P,G,B),q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function l(){return i.createVertexArray()}function c(v){return i.bindVertexArray(v)}function h(v){return i.deleteVertexArray(v)}function d(v,P,G){let B=G.wireframe===!0,q=n[v.id];q===void 0&&(q={},n[v.id]=q);let tt=q[P.id];tt===void 0&&(tt={},q[P.id]=tt);let Y=tt[B];return Y===void 0&&(Y=f(l()),tt[B]=Y),Y}function f(v){let P=[],G=[],B=[];for(let q=0;q<e;q++)P[q]=0,G[q]=0,B[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:G,attributeDivisors:B,object:v,attributes:{},index:null}}function p(v,P,G,B){let q=r.attributes,tt=P.attributes,Y=0,rt=G.getAttributes();for(let X in rt)if(rt[X].location>=0){let xt=q[X],Pt=tt[X];if(Pt===void 0&&(X==="instanceMatrix"&&v.instanceMatrix&&(Pt=v.instanceMatrix),X==="instanceColor"&&v.instanceColor&&(Pt=v.instanceColor)),xt===void 0||xt.attribute!==Pt||Pt&&xt.data!==Pt.data)return!0;Y++}return r.attributesNum!==Y||r.index!==B}function g(v,P,G,B){let q={},tt=P.attributes,Y=0,rt=G.getAttributes();for(let X in rt)if(rt[X].location>=0){let xt=tt[X];xt===void 0&&(X==="instanceMatrix"&&v.instanceMatrix&&(xt=v.instanceMatrix),X==="instanceColor"&&v.instanceColor&&(xt=v.instanceColor));let Pt={};Pt.attribute=xt,xt&&xt.data&&(Pt.data=xt.data),q[X]=Pt,Y++}r.attributes=q,r.attributesNum=Y,r.index=B}function x(){let v=r.newAttributes;for(let P=0,G=v.length;P<G;P++)v[P]=0}function m(v){u(v,0)}function u(v,P){let G=r.newAttributes,B=r.enabledAttributes,q=r.attributeDivisors;G[v]=1,B[v]===0&&(i.enableVertexAttribArray(v),B[v]=1),q[v]!==P&&(i.vertexAttribDivisor(v,P),q[v]=P)}function T(){let v=r.newAttributes,P=r.enabledAttributes;for(let G=0,B=P.length;G<B;G++)P[G]!==v[G]&&(i.disableVertexAttribArray(G),P[G]=0)}function E(v,P,G,B,q,tt,Y){Y===!0?i.vertexAttribIPointer(v,P,G,q,tt):i.vertexAttribPointer(v,P,G,B,q,tt)}function M(v,P,G,B){x();let q=B.attributes,tt=G.getAttributes(),Y=P.defaultAttributeValues;for(let rt in tt){let X=tt[rt];if(X.location>=0){let ft=q[rt];if(ft===void 0&&(rt==="instanceMatrix"&&v.instanceMatrix&&(ft=v.instanceMatrix),rt==="instanceColor"&&v.instanceColor&&(ft=v.instanceColor)),ft!==void 0){let xt=ft.normalized,Pt=ft.itemSize,te=t.get(ft);if(te===void 0)continue;let me=te.buffer,$=te.type,at=te.bytesPerElement,wt=$===i.INT||$===i.UNSIGNED_INT||ft.gpuType===gc;if(ft.isInterleavedBufferAttribute){let ct=ft.data,zt=ct.stride,Wt=ft.offset;if(ct.isInstancedInterleavedBuffer){for(let jt=0;jt<X.locationSize;jt++)u(X.location+jt,ct.meshPerAttribute);v.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let jt=0;jt<X.locationSize;jt++)m(X.location+jt);i.bindBuffer(i.ARRAY_BUFFER,me);for(let jt=0;jt<X.locationSize;jt++)E(X.location+jt,Pt/X.locationSize,$,xt,zt*at,(Wt+Pt/X.locationSize*jt)*at,wt)}else{if(ft.isInstancedBufferAttribute){for(let ct=0;ct<X.locationSize;ct++)u(X.location+ct,ft.meshPerAttribute);v.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let ct=0;ct<X.locationSize;ct++)m(X.location+ct);i.bindBuffer(i.ARRAY_BUFFER,me);for(let ct=0;ct<X.locationSize;ct++)E(X.location+ct,Pt/X.locationSize,$,xt,Pt*at,Pt/X.locationSize*ct*at,wt)}}else if(Y!==void 0){let xt=Y[rt];if(xt!==void 0)switch(xt.length){case 2:i.vertexAttrib2fv(X.location,xt);break;case 3:i.vertexAttrib3fv(X.location,xt);break;case 4:i.vertexAttrib4fv(X.location,xt);break;default:i.vertexAttrib1fv(X.location,xt)}}}}T()}function D(){N();for(let v in n){let P=n[v];for(let G in P){let B=P[G];for(let q in B)h(B[q].object),delete B[q];delete P[G]}delete n[v]}}function C(v){if(n[v.id]===void 0)return;let P=n[v.id];for(let G in P){let B=P[G];for(let q in B)h(B[q].object),delete B[q];delete P[G]}delete n[v.id]}function R(v){for(let P in n){let G=n[P];if(G[v.id]===void 0)continue;let B=G[v.id];for(let q in B)h(B[q].object),delete B[q];delete G[v.id]}}function N(){S(),a=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:N,resetDefaultState:S,dispose:D,releaseStatesOfGeometry:C,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:m,disableUnusedAttributes:T}}function ng(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,d){d!==0&&(i.drawArraysInstanced(n,c,h,d),e.update(h,n,d))}function o(c,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,d);let p=0;for(let g=0;g<d;g++)p+=h[g];e.update(p,n,1)}function l(c,h,d,f){if(d===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)a(c[g],h[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,d);let g=0;for(let x=0;x<d;x++)g+=h[x]*f[x];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function ig(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let R=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==Bn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){let N=R===Ar&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==oi&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==ii&&!N)}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),T=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),D=g>0,C=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:T,maxVaryings:E,maxFragmentUniforms:M,vertexTextures:D,maxSamples:C}}function sg(i){let t=this,e=null,n=0,s=!1,r=!1,a=new On,o=new Kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let p=d.length!==0||f||n!==0||s;return s=f,n=d.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){e=h(d,f,0)},this.setState=function(d,f,p){let g=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,u=i.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let T=r?0:n,E=T*4,M=u.clippingState||null;l.value=M,M=h(g,f,E,p);for(let D=0;D!==E;++D)M[D]=e[D];u.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,f,p,g){let x=d!==null?d.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let u=p+x*4,T=f.matrixWorldInverse;o.getNormalMatrix(T),(m===null||m.length<u)&&(m=new Float32Array(u));for(let E=0,M=p;E!==x;++E,M+=4)a.copy(d[E]).applyMatrix4(T,o),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function rg(i){let t=new WeakMap;function e(a,o){return o===el?a.mapping=Fs:o===nl&&(a.mapping=Bs),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===el||o===nl)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Fl(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Gs=class extends Sa{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Ps=4,Eh=[.125,.215,.35,.446,.526,.582],Wi=20,Uo=new Gs,Th=new Lt,No=null,Oo=0,Fo=0,Bo=!1,Hi=(1+Math.sqrt(5))/2,Es=1/Hi,Ah=[new A(-Hi,Es,0),new A(Hi,Es,0),new A(-Es,0,Hi),new A(Es,0,Hi),new A(0,Hi,-Es),new A(0,Hi,Es),new A(-1,1,-1),new A(1,1,-1),new A(-1,1,1),new A(1,1,1)],wa=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){No=this._renderer.getRenderTarget(),Oo=this._renderer.getActiveCubeFace(),Fo=this._renderer.getActiveMipmapLevel(),Bo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ph(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(No,Oo,Fo),this._renderer.xr.enabled=Bo,t.scissorTest=!1,ta(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Fs||t.mapping===Bs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),No=this._renderer.getRenderTarget(),Oo=this._renderer.getActiveCubeFace(),Fo=this._renderer.getActiveMipmapLevel(),Bo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Wn,minFilter:Wn,generateMipmaps:!1,type:Ar,format:Bn,colorSpace:Js,depthBuffer:!1},s=Ch(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ch(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ag(r)),this._blurMaterial=og(r,t,e)}return s}_compileMaterial(t){let e=new le(this._lodPlanes[0],t);this._renderer.compile(e,Uo)}_sceneToCubeUV(t,e,n,s){let o=new vn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(Th),h.toneMapping=bi,h.autoClear=!1;let p=new Le({name:"PMREM.Background",side:en,depthWrite:!1,depthTest:!1}),g=new le(new Zt,p),x=!1,m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,x=!0):(p.color.copy(Th),x=!0);for(let u=0;u<6;u++){let T=u%3;T===0?(o.up.set(0,l[u],0),o.lookAt(c[u],0,0)):T===1?(o.up.set(0,0,l[u]),o.lookAt(0,c[u],0)):(o.up.set(0,l[u],0),o.lookAt(0,0,c[u]));let E=this._cubeSize;ta(s,T*E,u>2?E:0,E,E),h.setRenderTarget(s),x&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=d,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Fs||t.mapping===Bs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ph()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rh());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new le(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;ta(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Uo)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Ah[(s-r-1)%Ah.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new le(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Wi-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):Wi;m>Wi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Wi}`);let u=[],T=0;for(let R=0;R<Wi;++R){let N=R/x,S=Math.exp(-N*N/2);u.push(S),R===0?T+=S:R<m&&(T+=2*S)}for(let R=0;R<u.length;R++)u[R]=u[R]/T;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=u,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:E}=this;f.dTheta.value=g,f.mipInt.value=E-n;let M=this._sizeLods[s],D=3*M*(s>E-Ps?s-E+Ps:0),C=4*(this._cubeSize-M);ta(e,D,C,3*M,2*M),l.setRenderTarget(e),l.render(d,Uo)}};function ag(i){let t=[],e=[],n=[],s=i,r=i-Ps+1+Eh.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let l=1/o;a>i-Ps?l=Eh[a-i+Ps-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,d=1+c,f=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,g=6,x=3,m=2,u=1,T=new Float32Array(x*g*p),E=new Float32Array(m*g*p),M=new Float32Array(u*g*p);for(let C=0;C<p;C++){let R=C%3*2/3-1,N=C>2?0:-1,S=[R,N,0,R+2/3,N,0,R+2/3,N+1,0,R,N,0,R+2/3,N+1,0,R,N+1,0];T.set(S,x*g*C),E.set(f,m*g*C);let v=[C,C,C,C,C,C];M.set(v,u*g*C)}let D=new nn;D.setAttribute("position",new Mn(T,x)),D.setAttribute("uv",new Mn(E,m)),D.setAttribute("faceIndex",new Mn(M,u)),t.push(D),s>Ps&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Ch(i,t,e){let n=new ci(i,t,e);return n.texture.mapping=Ya,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ta(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function og(i,t,e){let n=new Float32Array(Wi),s=new A(0,1,0);return new mn({name:"SphericalGaussianBlur",defines:{n:Wi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:bc(),fragmentShader:`

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
		`,blending:Si,depthTest:!1,depthWrite:!1})}function Rh(){return new mn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bc(),fragmentShader:`

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
		`,blending:Si,depthTest:!1,depthWrite:!1})}function Ph(){return new mn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Si,depthTest:!1,depthWrite:!1})}function bc(){return`

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
	`}function lg(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===el||l===nl,h=l===Fs||l===Bs;if(c||h){let d=t.get(o),f=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new wa(i)),d=c?e.fromEquirectangular(o,d):e.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{let p=o.image;return c&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new wa(i)),d=c?e.fromEquirectangular(o):e.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function cg(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&dr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function hg(i,t,e,n){let s={},r=new WeakMap;function a(d){let f=d.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);for(let g in f.morphAttributes){let x=f.morphAttributes[g];for(let m=0,u=x.length;m<u;m++)t.remove(x[m])}f.removeEventListener("dispose",a),delete s[f.id];let p=r.get(f);p&&(t.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(d,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function l(d){let f=d.attributes;for(let g in f)t.update(f[g],i.ARRAY_BUFFER);let p=d.morphAttributes;for(let g in p){let x=p[g];for(let m=0,u=x.length;m<u;m++)t.update(x[m],i.ARRAY_BUFFER)}}function c(d){let f=[],p=d.index,g=d.attributes.position,x=0;if(p!==null){let T=p.array;x=p.version;for(let E=0,M=T.length;E<M;E+=3){let D=T[E+0],C=T[E+1],R=T[E+2];f.push(D,C,C,R,R,D)}}else if(g!==void 0){let T=g.array;x=g.version;for(let E=0,M=T.length/3-1;E<M;E+=3){let D=E+0,C=E+1,R=E+2;f.push(D,C,C,R,R,D)}}else return;let m=new(vu(f)?Ma:va)(f,1);m.version=x;let u=r.get(d);u&&t.remove(u),r.set(d,m)}function h(d){let f=r.get(d);if(f){let p=d.index;p!==null&&f.version<p.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function ug(i,t,e){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,p){i.drawElements(n,p,r,f*a),e.update(p,n,1)}function c(f,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,f*a,g),e.update(p,n,g))}function h(f,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,g);let m=0;for(let u=0;u<g;u++)m+=p[u];e.update(m,n,1)}function d(f,p,g,x){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<f.length;u++)c(f[u]/a,p[u],x[u]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,x,0,g);let u=0;for(let T=0;T<g;T++)u+=p[T]*x[T];e.update(u,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function dg(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function fg(i,t,e){let n=new WeakMap,s=new Se;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,f=n.get(o);if(f===void 0||f.count!==d){let S=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",S)};f!==void 0&&f.texture.dispose();let p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],u=o.morphAttributes.normal||[],T=o.morphAttributes.color||[],E=0;p===!0&&(E=1),g===!0&&(E=2),x===!0&&(E=3);let M=o.attributes.position.count*E,D=1;M>t.maxTextureSize&&(D=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let C=new Float32Array(M*D*4*d),R=new ya(C,M,D,d);R.type=ii,R.needsUpdate=!0;let N=E*4;for(let v=0;v<d;v++){let P=m[v],G=u[v],B=T[v],q=M*D*4*v;for(let tt=0;tt<P.count;tt++){let Y=tt*N;p===!0&&(s.fromBufferAttribute(P,tt),C[q+Y+0]=s.x,C[q+Y+1]=s.y,C[q+Y+2]=s.z,C[q+Y+3]=0),g===!0&&(s.fromBufferAttribute(G,tt),C[q+Y+4]=s.x,C[q+Y+5]=s.y,C[q+Y+6]=s.z,C[q+Y+7]=0),x===!0&&(s.fromBufferAttribute(B,tt),C[q+Y+8]=s.x,C[q+Y+9]=s.y,C[q+Y+10]=s.z,C[q+Y+11]=B.itemSize===4?s.w:1)}}f={count:d,texture:R,size:new lt(M,D)},n.set(o,f),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let p=0;for(let x=0;x<c.length;x++)p+=c[x];let g=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function pg(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,d=t.get(l,h);if(s.get(d)!==c&&(t.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return d}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}var Ea=class extends cn{constructor(t,e,n,s,r,a,o,l,c,h=Ls){if(h!==Ls&&h!==ks)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ls&&(n=Yi),n===void 0&&h===ks&&(n=zs),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:ln,this.minFilter=l!==void 0?l:ln,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},wu=new cn,Ih=new Ea(1,1),Eu=new ya,Tu=new Nl,Au=new ba,Lh=[],Dh=[],Uh=new Float32Array(16),Nh=new Float32Array(9),Oh=new Float32Array(4);function $s(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Lh[s];if(r===void 0&&(r=new Float32Array(s),Lh[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Ve(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function He(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ja(i,t){let e=Dh[t];e===void 0&&(e=new Int32Array(t),Dh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function mg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function gg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;i.uniform2fv(this.addr,t),He(e,t)}}function _g(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ve(e,t))return;i.uniform3fv(this.addr,t),He(e,t)}}function xg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;i.uniform4fv(this.addr,t),He(e,t)}}function yg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ve(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),He(e,t)}else{if(Ve(e,n))return;Oh.set(n),i.uniformMatrix2fv(this.addr,!1,Oh),He(e,n)}}function vg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ve(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),He(e,t)}else{if(Ve(e,n))return;Nh.set(n),i.uniformMatrix3fv(this.addr,!1,Nh),He(e,n)}}function Mg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ve(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),He(e,t)}else{if(Ve(e,n))return;Uh.set(n),i.uniformMatrix4fv(this.addr,!1,Uh),He(e,n)}}function Sg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function bg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;i.uniform2iv(this.addr,t),He(e,t)}}function wg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ve(e,t))return;i.uniform3iv(this.addr,t),He(e,t)}}function Eg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;i.uniform4iv(this.addr,t),He(e,t)}}function Tg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Ag(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;i.uniform2uiv(this.addr,t),He(e,t)}}function Cg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ve(e,t))return;i.uniform3uiv(this.addr,t),He(e,t)}}function Rg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;i.uniform4uiv(this.addr,t),He(e,t)}}function Pg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Ih.compareFunction=yu,r=Ih):r=wu,e.setTexture2D(t||r,s)}function Ig(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Tu,s)}function Lg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Au,s)}function Dg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Eu,s)}function Ug(i){switch(i){case 5126:return mg;case 35664:return gg;case 35665:return _g;case 35666:return xg;case 35674:return yg;case 35675:return vg;case 35676:return Mg;case 5124:case 35670:return Sg;case 35667:case 35671:return bg;case 35668:case 35672:return wg;case 35669:case 35673:return Eg;case 5125:return Tg;case 36294:return Ag;case 36295:return Cg;case 36296:return Rg;case 35678:case 36198:case 36298:case 36306:case 35682:return Pg;case 35679:case 36299:case 36307:return Ig;case 35680:case 36300:case 36308:case 36293:return Lg;case 36289:case 36303:case 36311:case 36292:return Dg}}function Ng(i,t){i.uniform1fv(this.addr,t)}function Og(i,t){let e=$s(t,this.size,2);i.uniform2fv(this.addr,e)}function Fg(i,t){let e=$s(t,this.size,3);i.uniform3fv(this.addr,e)}function Bg(i,t){let e=$s(t,this.size,4);i.uniform4fv(this.addr,e)}function zg(i,t){let e=$s(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function kg(i,t){let e=$s(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Vg(i,t){let e=$s(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Hg(i,t){i.uniform1iv(this.addr,t)}function Gg(i,t){i.uniform2iv(this.addr,t)}function Wg(i,t){i.uniform3iv(this.addr,t)}function Xg(i,t){i.uniform4iv(this.addr,t)}function qg(i,t){i.uniform1uiv(this.addr,t)}function Yg(i,t){i.uniform2uiv(this.addr,t)}function Zg(i,t){i.uniform3uiv(this.addr,t)}function Jg(i,t){i.uniform4uiv(this.addr,t)}function $g(i,t,e){let n=this.cache,s=t.length,r=ja(e,s);Ve(n,r)||(i.uniform1iv(this.addr,r),He(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||wu,r[a])}function Kg(i,t,e){let n=this.cache,s=t.length,r=ja(e,s);Ve(n,r)||(i.uniform1iv(this.addr,r),He(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Tu,r[a])}function jg(i,t,e){let n=this.cache,s=t.length,r=ja(e,s);Ve(n,r)||(i.uniform1iv(this.addr,r),He(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Au,r[a])}function Qg(i,t,e){let n=this.cache,s=t.length,r=ja(e,s);Ve(n,r)||(i.uniform1iv(this.addr,r),He(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Eu,r[a])}function t0(i){switch(i){case 5126:return Ng;case 35664:return Og;case 35665:return Fg;case 35666:return Bg;case 35674:return zg;case 35675:return kg;case 35676:return Vg;case 5124:case 35670:return Hg;case 35667:case 35671:return Gg;case 35668:case 35672:return Wg;case 35669:case 35673:return Xg;case 5125:return qg;case 36294:return Yg;case 36295:return Zg;case 36296:return Jg;case 35678:case 36198:case 36298:case 36306:case 35682:return $g;case 35679:case 36299:case 36307:return Kg;case 35680:case 36300:case 36308:case 36293:return jg;case 36289:case 36303:case 36311:case 36292:return Qg}}var Bl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Ug(e.type)}},zl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=t0(e.type)}},kl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},zo=/(\w+)(\])?(\[|\.)?/g;function Fh(i,t){i.seq.push(t),i.map[t.id]=t}function e0(i,t,e){let n=i.name,s=n.length;for(zo.lastIndex=0;;){let r=zo.exec(n),a=zo.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Fh(e,c===void 0?new Bl(o,i,t):new zl(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new kl(o),Fh(e,d)),e=d}}}var Ns=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);e0(r,a,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Bh(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var n0=37297,i0=0;function s0(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var zh=new Kt;function r0(i){ue._getMatrix(zh,ue.workingColorSpace,i);let t=`mat3( ${zh.elements.map(e=>e.toFixed(4))} )`;switch(ue.getTransfer(i)){case Ja:return[t,"LinearTransferOETF"];case Me:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function kh(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+s0(i.getShaderSource(t),a)}else return s}function a0(i,t){let e=r0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function o0(i,t){let e;switch(t){case _d:e="Linear";break;case xd:e="Reinhard";break;case yd:e="Cineon";break;case vd:e="ACESFilmic";break;case Sd:e="AgX";break;case bd:e="Neutral";break;case Md:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var ea=new A;function l0(){ue.getLuminanceCoefficients(ea);let i=ea.x.toFixed(4),t=ea.y.toFixed(4),e=ea.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function c0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fr).join(`
`)}function h0(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function u0(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function fr(i){return i!==""}function Vh(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Hh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var d0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vl(i){return i.replace(d0,p0)}var f0=new Map;function p0(i,t){let e=Qt[t];if(e===void 0){let n=f0.get(t);if(n!==void 0)e=Qt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Vl(e)}var m0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gh(i){return i.replace(m0,g0)}function g0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Wh(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function _0(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===au?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===$u?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ei&&(t="SHADOWMAP_TYPE_VSM"),t}function x0(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Fs:case Bs:t="ENVMAP_TYPE_CUBE";break;case Ya:t="ENVMAP_TYPE_CUBE_UV";break}return t}function y0(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Bs:t="ENVMAP_MODE_REFRACTION";break}return t}function v0(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ou:t="ENVMAP_BLENDING_MULTIPLY";break;case md:t="ENVMAP_BLENDING_MIX";break;case gd:t="ENVMAP_BLENDING_ADD";break}return t}function M0(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function S0(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=_0(e),c=x0(e),h=y0(e),d=v0(e),f=M0(e),p=c0(e),g=h0(r),x=s.createProgram(),m,u,T=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(fr).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(fr).join(`
`),u.length>0&&(u+=`
`)):(m=[Wh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fr).join(`
`),u=[Wh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==bi?"#define TONE_MAPPING":"",e.toneMapping!==bi?Qt.tonemapping_pars_fragment:"",e.toneMapping!==bi?o0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Qt.colorspace_pars_fragment,a0("linearToOutputTexel",e.outputColorSpace),l0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(fr).join(`
`)),a=Vl(a),a=Vh(a,e),a=Hh(a,e),o=Vl(o),o=Vh(o,e),o=Hh(o,e),a=Gh(a),o=Gh(o),e.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",e.glslVersion===ih?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ih?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);let E=T+m+a,M=T+u+o,D=Bh(s,s.VERTEX_SHADER,E),C=Bh(s,s.FRAGMENT_SHADER,M);s.attachShader(x,D),s.attachShader(x,C),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function R(P){if(i.debug.checkShaderErrors){let G=s.getProgramInfoLog(x).trim(),B=s.getShaderInfoLog(D).trim(),q=s.getShaderInfoLog(C).trim(),tt=!0,Y=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(tt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,D,C);else{let rt=kh(s,D,"vertex"),X=kh(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+G+`
`+rt+`
`+X)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(B===""||q==="")&&(Y=!1);Y&&(P.diagnostics={runnable:tt,programLog:G,vertexShader:{log:B,prefix:m},fragmentShader:{log:q,prefix:u}})}s.deleteShader(D),s.deleteShader(C),N=new Ns(s,x),S=u0(s,x)}let N;this.getUniforms=function(){return N===void 0&&R(this),N};let S;this.getAttributes=function(){return S===void 0&&R(this),S};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(x,n0)),v},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=i0++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=D,this.fragmentShader=C,this}var b0=0,Hl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Gl(t),e.set(t,n)),n}},Gl=class{constructor(t){this.id=b0++,this.code=t,this.usedTimes=0}};function w0(i,t,e,n,s,r,a){let o=new Mr,l=new Hl,c=new Set,h=[],d=s.logarithmicDepthBuffer,f=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,v,P,G,B){let q=G.fog,tt=B.geometry,Y=S.isMeshStandardMaterial?G.environment:null,rt=(S.isMeshStandardMaterial?e:t).get(S.envMap||Y),X=rt&&rt.mapping===Ya?rt.image.height:null,ft=g[S.type];S.precision!==null&&(p=s.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));let xt=tt.morphAttributes.position||tt.morphAttributes.normal||tt.morphAttributes.color,Pt=xt!==void 0?xt.length:0,te=0;tt.morphAttributes.position!==void 0&&(te=1),tt.morphAttributes.normal!==void 0&&(te=2),tt.morphAttributes.color!==void 0&&(te=3);let me,$,at,wt;if(ft){let $t=on[ft];me=$t.vertexShader,$=$t.fragmentShader}else me=S.vertexShader,$=S.fragmentShader,l.update(S),at=l.getVertexShaderID(S),wt=l.getFragmentShaderID(S);let ct=i.getRenderTarget(),zt=i.state.buffers.depth.getReversed(),Wt=B.isInstancedMesh===!0,jt=B.isBatchedMesh===!0,bt=!!S.map,kt=!!S.matcap,Re=!!rt,O=!!S.aoMap,sn=!!S.lightMap,ee=!!S.bumpMap,ne=!!S.normalMap,Dt=!!S.displacementMap,se=!!S.emissiveMap,Nt=!!S.metalnessMap,w=!!S.roughnessMap,_=S.anisotropy>0,z=S.clearcoat>0,K=S.dispersion>0,et=S.iridescence>0,J=S.sheen>0,Rt=S.transmission>0,pt=_&&!!S.anisotropyMap,yt=z&&!!S.clearcoatMap,re=z&&!!S.clearcoatNormalMap,it=z&&!!S.clearcoatRoughnessMap,vt=et&&!!S.iridescenceMap,Ft=et&&!!S.iridescenceThicknessMap,Vt=J&&!!S.sheenColorMap,St=J&&!!S.sheenRoughnessMap,Jt=!!S.specularMap,Xt=!!S.specularColorMap,pe=!!S.specularIntensityMap,I=Rt&&!!S.transmissionMap,mt=Rt&&!!S.thicknessMap,W=!!S.gradientMap,j=!!S.alphaMap,dt=S.alphaTest>0,ut=!!S.alphaHash,qt=!!S.extensions,Ce=bi;S.toneMapped&&(ct===null||ct.isXRRenderTarget===!0)&&(Ce=i.toneMapping);let De={shaderID:ft,shaderType:S.type,shaderName:S.name,vertexShader:me,fragmentShader:$,defines:S.defines,customVertexShaderID:at,customFragmentShaderID:wt,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:jt,batchingColor:jt&&B._colorsTexture!==null,instancing:Wt,instancingColor:Wt&&B.instanceColor!==null,instancingMorph:Wt&&B.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ct===null?i.outputColorSpace:ct.isXRRenderTarget===!0?ct.texture.colorSpace:Js,alphaToCoverage:!!S.alphaToCoverage,map:bt,matcap:kt,envMap:Re,envMapMode:Re&&rt.mapping,envMapCubeUVHeight:X,aoMap:O,lightMap:sn,bumpMap:ee,normalMap:ne,displacementMap:f&&Dt,emissiveMap:se,normalMapObjectSpace:ne&&S.normalMapType===Ad,normalMapTangentSpace:ne&&S.normalMapType===xu,metalnessMap:Nt,roughnessMap:w,anisotropy:_,anisotropyMap:pt,clearcoat:z,clearcoatMap:yt,clearcoatNormalMap:re,clearcoatRoughnessMap:it,dispersion:K,iridescence:et,iridescenceMap:vt,iridescenceThicknessMap:Ft,sheen:J,sheenColorMap:Vt,sheenRoughnessMap:St,specularMap:Jt,specularColorMap:Xt,specularIntensityMap:pe,transmission:Rt,transmissionMap:I,thicknessMap:mt,gradientMap:W,opaque:S.transparent===!1&&S.blending===Is&&S.alphaToCoverage===!1,alphaMap:j,alphaTest:dt,alphaHash:ut,combine:S.combine,mapUv:bt&&x(S.map.channel),aoMapUv:O&&x(S.aoMap.channel),lightMapUv:sn&&x(S.lightMap.channel),bumpMapUv:ee&&x(S.bumpMap.channel),normalMapUv:ne&&x(S.normalMap.channel),displacementMapUv:Dt&&x(S.displacementMap.channel),emissiveMapUv:se&&x(S.emissiveMap.channel),metalnessMapUv:Nt&&x(S.metalnessMap.channel),roughnessMapUv:w&&x(S.roughnessMap.channel),anisotropyMapUv:pt&&x(S.anisotropyMap.channel),clearcoatMapUv:yt&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:re&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:it&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:vt&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ft&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:Vt&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:St&&x(S.sheenRoughnessMap.channel),specularMapUv:Jt&&x(S.specularMap.channel),specularColorMapUv:Xt&&x(S.specularColorMap.channel),specularIntensityMapUv:pe&&x(S.specularIntensityMap.channel),transmissionMapUv:I&&x(S.transmissionMap.channel),thicknessMapUv:mt&&x(S.thicknessMap.channel),alphaMapUv:j&&x(S.alphaMap.channel),vertexTangents:!!tt.attributes.tangent&&(ne||_),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!tt.attributes.color&&tt.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!tt.attributes.uv&&(bt||j),fog:!!q,useFog:S.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:zt,skinning:B.isSkinnedMesh===!0,morphTargets:tt.morphAttributes.position!==void 0,morphNormals:tt.morphAttributes.normal!==void 0,morphColors:tt.morphAttributes.color!==void 0,morphTargetsCount:Pt,morphTextureStride:te,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ce,decodeVideoTexture:bt&&S.map.isVideoTexture===!0&&ue.getTransfer(S.map.colorSpace)===Me,decodeVideoTextureEmissive:se&&S.emissiveMap.isVideoTexture===!0&&ue.getTransfer(S.emissiveMap.colorSpace)===Me,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===En,flipSided:S.side===en,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:qt&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(qt&&S.extensions.multiDraw===!0||jt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return De.vertexUv1s=c.has(1),De.vertexUv2s=c.has(2),De.vertexUv3s=c.has(3),c.clear(),De}function u(S){let v=[];if(S.shaderID?v.push(S.shaderID):(v.push(S.customVertexShaderID),v.push(S.customFragmentShaderID)),S.defines!==void 0)for(let P in S.defines)v.push(P),v.push(S.defines[P]);return S.isRawShaderMaterial===!1&&(T(v,S),E(v,S),v.push(i.outputColorSpace)),v.push(S.customProgramCacheKey),v.join()}function T(S,v){S.push(v.precision),S.push(v.outputColorSpace),S.push(v.envMapMode),S.push(v.envMapCubeUVHeight),S.push(v.mapUv),S.push(v.alphaMapUv),S.push(v.lightMapUv),S.push(v.aoMapUv),S.push(v.bumpMapUv),S.push(v.normalMapUv),S.push(v.displacementMapUv),S.push(v.emissiveMapUv),S.push(v.metalnessMapUv),S.push(v.roughnessMapUv),S.push(v.anisotropyMapUv),S.push(v.clearcoatMapUv),S.push(v.clearcoatNormalMapUv),S.push(v.clearcoatRoughnessMapUv),S.push(v.iridescenceMapUv),S.push(v.iridescenceThicknessMapUv),S.push(v.sheenColorMapUv),S.push(v.sheenRoughnessMapUv),S.push(v.specularMapUv),S.push(v.specularColorMapUv),S.push(v.specularIntensityMapUv),S.push(v.transmissionMapUv),S.push(v.thicknessMapUv),S.push(v.combine),S.push(v.fogExp2),S.push(v.sizeAttenuation),S.push(v.morphTargetsCount),S.push(v.morphAttributeCount),S.push(v.numDirLights),S.push(v.numPointLights),S.push(v.numSpotLights),S.push(v.numSpotLightMaps),S.push(v.numHemiLights),S.push(v.numRectAreaLights),S.push(v.numDirLightShadows),S.push(v.numPointLightShadows),S.push(v.numSpotLightShadows),S.push(v.numSpotLightShadowsWithMaps),S.push(v.numLightProbes),S.push(v.shadowMapType),S.push(v.toneMapping),S.push(v.numClippingPlanes),S.push(v.numClipIntersection),S.push(v.depthPacking)}function E(S,v){o.disableAll(),v.supportsVertexTextures&&o.enable(0),v.instancing&&o.enable(1),v.instancingColor&&o.enable(2),v.instancingMorph&&o.enable(3),v.matcap&&o.enable(4),v.envMap&&o.enable(5),v.normalMapObjectSpace&&o.enable(6),v.normalMapTangentSpace&&o.enable(7),v.clearcoat&&o.enable(8),v.iridescence&&o.enable(9),v.alphaTest&&o.enable(10),v.vertexColors&&o.enable(11),v.vertexAlphas&&o.enable(12),v.vertexUv1s&&o.enable(13),v.vertexUv2s&&o.enable(14),v.vertexUv3s&&o.enable(15),v.vertexTangents&&o.enable(16),v.anisotropy&&o.enable(17),v.alphaHash&&o.enable(18),v.batching&&o.enable(19),v.dispersion&&o.enable(20),v.batchingColor&&o.enable(21),S.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.reverseDepthBuffer&&o.enable(4),v.skinning&&o.enable(5),v.morphTargets&&o.enable(6),v.morphNormals&&o.enable(7),v.morphColors&&o.enable(8),v.premultipliedAlpha&&o.enable(9),v.shadowMapEnabled&&o.enable(10),v.doubleSided&&o.enable(11),v.flipSided&&o.enable(12),v.useDepthPacking&&o.enable(13),v.dithering&&o.enable(14),v.transmission&&o.enable(15),v.sheen&&o.enable(16),v.opaque&&o.enable(17),v.pointsUvs&&o.enable(18),v.decodeVideoTexture&&o.enable(19),v.decodeVideoTextureEmissive&&o.enable(20),v.alphaToCoverage&&o.enable(21),S.push(o.mask)}function M(S){let v=g[S.type],P;if(v){let G=on[v];P=Ka.clone(G.uniforms)}else P=S.uniforms;return P}function D(S,v){let P;for(let G=0,B=h.length;G<B;G++){let q=h[G];if(q.cacheKey===v){P=q,++P.usedTimes;break}}return P===void 0&&(P=new S0(i,v,S,r),h.push(P)),P}function C(S){if(--S.usedTimes===0){let v=h.indexOf(S);h[v]=h[h.length-1],h.pop(),S.destroy()}}function R(S){l.remove(S)}function N(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:M,acquireProgram:D,releaseProgram:C,releaseShaderCache:R,programs:h,dispose:N}}function E0(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function T0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Xh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function qh(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(d,f,p,g,x,m){let u=i[t];return u===void 0?(u={id:d.id,object:d,geometry:f,material:p,groupOrder:g,renderOrder:d.renderOrder,z:x,group:m},i[t]=u):(u.id=d.id,u.object=d,u.geometry=f,u.material=p,u.groupOrder=g,u.renderOrder=d.renderOrder,u.z=x,u.group=m),t++,u}function o(d,f,p,g,x,m){let u=a(d,f,p,g,x,m);p.transmission>0?n.push(u):p.transparent===!0?s.push(u):e.push(u)}function l(d,f,p,g,x,m){let u=a(d,f,p,g,x,m);p.transmission>0?n.unshift(u):p.transparent===!0?s.unshift(u):e.unshift(u)}function c(d,f){e.length>1&&e.sort(d||T0),n.length>1&&n.sort(f||Xh),s.length>1&&s.sort(f||Xh)}function h(){for(let d=t,f=i.length;d<f;d++){let p=i[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function A0(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new qh,i.set(n,[a])):s>=r.length?(a=new qh,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function C0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new A,color:new Lt};break;case"SpotLight":e={position:new A,direction:new A,color:new Lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new A,color:new Lt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new A,skyColor:new Lt,groundColor:new Lt};break;case"RectAreaLight":e={color:new Lt,position:new A,halfWidth:new A,halfHeight:new A};break}return i[t.id]=e,e}}}function R0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var P0=0;function I0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function L0(i){let t=new C0,e=R0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new A);let s=new A,r=new Ae,a=new Ae;function o(c){let h=0,d=0,f=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let p=0,g=0,x=0,m=0,u=0,T=0,E=0,M=0,D=0,C=0,R=0;c.sort(I0);for(let S=0,v=c.length;S<v;S++){let P=c[S],G=P.color,B=P.intensity,q=P.distance,tt=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=G.r*B,d+=G.g*B,f+=G.b*B;else if(P.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(P.sh.coefficients[Y],B);R++}else if(P.isDirectionalLight){let Y=t.get(P);if(Y.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let rt=P.shadow,X=e.get(P);X.shadowIntensity=rt.intensity,X.shadowBias=rt.bias,X.shadowNormalBias=rt.normalBias,X.shadowRadius=rt.radius,X.shadowMapSize=rt.mapSize,n.directionalShadow[p]=X,n.directionalShadowMap[p]=tt,n.directionalShadowMatrix[p]=P.shadow.matrix,T++}n.directional[p]=Y,p++}else if(P.isSpotLight){let Y=t.get(P);Y.position.setFromMatrixPosition(P.matrixWorld),Y.color.copy(G).multiplyScalar(B),Y.distance=q,Y.coneCos=Math.cos(P.angle),Y.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),Y.decay=P.decay,n.spot[x]=Y;let rt=P.shadow;if(P.map&&(n.spotLightMap[D]=P.map,D++,rt.updateMatrices(P),P.castShadow&&C++),n.spotLightMatrix[x]=rt.matrix,P.castShadow){let X=e.get(P);X.shadowIntensity=rt.intensity,X.shadowBias=rt.bias,X.shadowNormalBias=rt.normalBias,X.shadowRadius=rt.radius,X.shadowMapSize=rt.mapSize,n.spotShadow[x]=X,n.spotShadowMap[x]=tt,M++}x++}else if(P.isRectAreaLight){let Y=t.get(P);Y.color.copy(G).multiplyScalar(B),Y.halfWidth.set(P.width*.5,0,0),Y.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=Y,m++}else if(P.isPointLight){let Y=t.get(P);if(Y.color.copy(P.color).multiplyScalar(P.intensity),Y.distance=P.distance,Y.decay=P.decay,P.castShadow){let rt=P.shadow,X=e.get(P);X.shadowIntensity=rt.intensity,X.shadowBias=rt.bias,X.shadowNormalBias=rt.normalBias,X.shadowRadius=rt.radius,X.shadowMapSize=rt.mapSize,X.shadowCameraNear=rt.camera.near,X.shadowCameraFar=rt.camera.far,n.pointShadow[g]=X,n.pointShadowMap[g]=tt,n.pointShadowMatrix[g]=P.shadow.matrix,E++}n.point[g]=Y,g++}else if(P.isHemisphereLight){let Y=t.get(P);Y.skyColor.copy(P.color).multiplyScalar(B),Y.groundColor.copy(P.groundColor).multiplyScalar(B),n.hemi[u]=Y,u++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ht.LTC_FLOAT_1,n.rectAreaLTC2=ht.LTC_FLOAT_2):(n.rectAreaLTC1=ht.LTC_HALF_1,n.rectAreaLTC2=ht.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=f;let N=n.hash;(N.directionalLength!==p||N.pointLength!==g||N.spotLength!==x||N.rectAreaLength!==m||N.hemiLength!==u||N.numDirectionalShadows!==T||N.numPointShadows!==E||N.numSpotShadows!==M||N.numSpotMaps!==D||N.numLightProbes!==R)&&(n.directional.length=p,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=u,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=M+D-C,n.spotLightMap.length=D,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=R,N.directionalLength=p,N.pointLength=g,N.spotLength=x,N.rectAreaLength=m,N.hemiLength=u,N.numDirectionalShadows=T,N.numPointShadows=E,N.numSpotShadows=M,N.numSpotMaps=D,N.numLightProbes=R,n.version=P0++)}function l(c,h){let d=0,f=0,p=0,g=0,x=0,m=h.matrixWorldInverse;for(let u=0,T=c.length;u<T;u++){let E=c[u];if(E.isDirectionalLight){let M=n.directional[d];M.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),d++}else if(E.isSpotLight){let M=n.spot[p];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),p++}else if(E.isRectAreaLight){let M=n.rectArea[g];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(m),a.identity(),r.copy(E.matrixWorld),r.premultiply(m),a.extractRotation(r),M.halfWidth.set(E.width*.5,0,0),M.halfHeight.set(0,E.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),g++}else if(E.isPointLight){let M=n.point[f];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(m),f++}else if(E.isHemisphereLight){let M=n.hemi[x];M.direction.setFromMatrixPosition(E.matrixWorld),M.direction.transformDirection(m),x++}}}return{setup:o,setupView:l,state:n}}function Yh(i){let t=new L0(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function D0(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Yh(i),t.set(s,[o])):r>=a.length?(o=new Yh(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var Wl=class extends Ei{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Ed,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Xl=class extends Ei{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},U0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,N0=`uniform sampler2D shadow_pass;
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
}`;function O0(i,t,e){let n=new Sr,s=new lt,r=new lt,a=new Se,o=new Wl({depthPacking:Td}),l=new Xl,c={},h=e.maxTextureSize,d={[wi]:en,[en]:wi,[En]:En},f=new mn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new lt},radius:{value:4}},vertexShader:U0,fragmentShader:N0}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let g=new nn;g.setAttribute("position",new Mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new le(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=au;let u=this.type;this.render=function(C,R,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;let S=i.getRenderTarget(),v=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),G=i.state;G.setBlending(Si),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);let B=u!==ei&&this.type===ei,q=u===ei&&this.type!==ei;for(let tt=0,Y=C.length;tt<Y;tt++){let rt=C[tt],X=rt.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",rt,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);let ft=X.getFrameExtents();if(s.multiply(ft),r.copy(X.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ft.x),s.x=r.x*ft.x,X.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ft.y),s.y=r.y*ft.y,X.mapSize.y=r.y)),X.map===null||B===!0||q===!0){let Pt=this.type!==ei?{minFilter:ln,magFilter:ln}:{};X.map!==null&&X.map.dispose(),X.map=new ci(s.x,s.y,Pt),X.map.texture.name=rt.name+".shadowMap",X.camera.updateProjectionMatrix()}i.setRenderTarget(X.map),i.clear();let xt=X.getViewportCount();for(let Pt=0;Pt<xt;Pt++){let te=X.getViewport(Pt);a.set(r.x*te.x,r.y*te.y,r.x*te.z,r.y*te.w),G.viewport(a),X.updateMatrices(rt,Pt),n=X.getFrustum(),M(R,N,X.camera,rt,this.type)}X.isPointLightShadow!==!0&&this.type===ei&&T(X,N),X.needsUpdate=!1}u=this.type,m.needsUpdate=!1,i.setRenderTarget(S,v,P)};function T(C,R){let N=t.update(x);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new ci(s.x,s.y)),f.uniforms.shadow_pass.value=C.map.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(R,null,N,f,x,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(R,null,N,p,x,null)}function E(C,R,N,S){let v=null,P=N.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(P!==void 0)v=P;else if(v=N.isPointLight===!0?l:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){let G=v.uuid,B=R.uuid,q=c[G];q===void 0&&(q={},c[G]=q);let tt=q[B];tt===void 0&&(tt=v.clone(),q[B]=tt,R.addEventListener("dispose",D)),v=tt}if(v.visible=R.visible,v.wireframe=R.wireframe,S===ei?v.side=R.shadowSide!==null?R.shadowSide:R.side:v.side=R.shadowSide!==null?R.shadowSide:d[R.side],v.alphaMap=R.alphaMap,v.alphaTest=R.alphaTest,v.map=R.map,v.clipShadows=R.clipShadows,v.clippingPlanes=R.clippingPlanes,v.clipIntersection=R.clipIntersection,v.displacementMap=R.displacementMap,v.displacementScale=R.displacementScale,v.displacementBias=R.displacementBias,v.wireframeLinewidth=R.wireframeLinewidth,v.linewidth=R.linewidth,N.isPointLight===!0&&v.isMeshDistanceMaterial===!0){let G=i.properties.get(v);G.light=N}return v}function M(C,R,N,S,v){if(C.visible===!1)return;if(C.layers.test(R.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&v===ei)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,C.matrixWorld);let B=t.update(C),q=C.material;if(Array.isArray(q)){let tt=B.groups;for(let Y=0,rt=tt.length;Y<rt;Y++){let X=tt[Y],ft=q[X.materialIndex];if(ft&&ft.visible){let xt=E(C,ft,S,v);C.onBeforeShadow(i,C,R,N,B,xt,X),i.renderBufferDirect(N,null,B,xt,C,X),C.onAfterShadow(i,C,R,N,B,xt,X)}}}else if(q.visible){let tt=E(C,q,S,v);C.onBeforeShadow(i,C,R,N,B,tt,null),i.renderBufferDirect(N,null,B,tt,C,null),C.onAfterShadow(i,C,R,N,B,tt,null)}}let G=C.children;for(let B=0,q=G.length;B<q;B++)M(G[B],R,N,S,v)}function D(C){C.target.removeEventListener("dispose",D);for(let N in c){let S=c[N],v=C.target.uuid;v in S&&(S[v].dispose(),delete S[v])}}}var F0={[Zo]:Jo,[$o]:Qo,[Ko]:tl,[Os]:jo,[Jo]:Zo,[Qo]:$o,[tl]:Ko,[jo]:Os};function B0(i,t){function e(){let I=!1,mt=new Se,W=null,j=new Se(0,0,0,0);return{setMask:function(dt){W!==dt&&!I&&(i.colorMask(dt,dt,dt,dt),W=dt)},setLocked:function(dt){I=dt},setClear:function(dt,ut,qt,Ce,De){De===!0&&(dt*=Ce,ut*=Ce,qt*=Ce),mt.set(dt,ut,qt,Ce),j.equals(mt)===!1&&(i.clearColor(dt,ut,qt,Ce),j.copy(mt))},reset:function(){I=!1,W=null,j.set(-1,0,0,0)}}}function n(){let I=!1,mt=!1,W=null,j=null,dt=null;return{setReversed:function(ut){if(mt!==ut){let qt=t.get("EXT_clip_control");mt?qt.clipControlEXT(qt.LOWER_LEFT_EXT,qt.ZERO_TO_ONE_EXT):qt.clipControlEXT(qt.LOWER_LEFT_EXT,qt.NEGATIVE_ONE_TO_ONE_EXT);let Ce=dt;dt=null,this.setClear(Ce)}mt=ut},getReversed:function(){return mt},setTest:function(ut){ut?ct(i.DEPTH_TEST):zt(i.DEPTH_TEST)},setMask:function(ut){W!==ut&&!I&&(i.depthMask(ut),W=ut)},setFunc:function(ut){if(mt&&(ut=F0[ut]),j!==ut){switch(ut){case Zo:i.depthFunc(i.NEVER);break;case Jo:i.depthFunc(i.ALWAYS);break;case $o:i.depthFunc(i.LESS);break;case Os:i.depthFunc(i.LEQUAL);break;case Ko:i.depthFunc(i.EQUAL);break;case jo:i.depthFunc(i.GEQUAL);break;case Qo:i.depthFunc(i.GREATER);break;case tl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}j=ut}},setLocked:function(ut){I=ut},setClear:function(ut){dt!==ut&&(mt&&(ut=1-ut),i.clearDepth(ut),dt=ut)},reset:function(){I=!1,W=null,j=null,dt=null,mt=!1}}}function s(){let I=!1,mt=null,W=null,j=null,dt=null,ut=null,qt=null,Ce=null,De=null;return{setTest:function($t){I||($t?ct(i.STENCIL_TEST):zt(i.STENCIL_TEST))},setMask:function($t){mt!==$t&&!I&&(i.stencilMask($t),mt=$t)},setFunc:function($t,hn,Xe){(W!==$t||j!==hn||dt!==Xe)&&(i.stencilFunc($t,hn,Xe),W=$t,j=hn,dt=Xe)},setOp:function($t,hn,Xe){(ut!==$t||qt!==hn||Ce!==Xe)&&(i.stencilOp($t,hn,Xe),ut=$t,qt=hn,Ce=Xe)},setLocked:function($t){I=$t},setClear:function($t){De!==$t&&(i.clearStencil($t),De=$t)},reset:function(){I=!1,mt=null,W=null,j=null,dt=null,ut=null,qt=null,Ce=null,De=null}}}let r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap,h={},d={},f=new WeakMap,p=[],g=null,x=!1,m=null,u=null,T=null,E=null,M=null,D=null,C=null,R=new Lt(0,0,0),N=0,S=!1,v=null,P=null,G=null,B=null,q=null,tt=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Y=!1,rt=0,X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(rt=parseFloat(/^WebGL (\d)/.exec(X)[1]),Y=rt>=1):X.indexOf("OpenGL ES")!==-1&&(rt=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),Y=rt>=2);let ft=null,xt={},Pt=i.getParameter(i.SCISSOR_BOX),te=i.getParameter(i.VIEWPORT),me=new Se().fromArray(Pt),$=new Se().fromArray(te);function at(I,mt,W,j){let dt=new Uint8Array(4),ut=i.createTexture();i.bindTexture(I,ut),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let qt=0;qt<W;qt++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(mt,0,i.RGBA,1,1,j,0,i.RGBA,i.UNSIGNED_BYTE,dt):i.texImage2D(mt+qt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,dt);return ut}let wt={};wt[i.TEXTURE_2D]=at(i.TEXTURE_2D,i.TEXTURE_2D,1),wt[i.TEXTURE_CUBE_MAP]=at(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),wt[i.TEXTURE_2D_ARRAY]=at(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),wt[i.TEXTURE_3D]=at(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ct(i.DEPTH_TEST),a.setFunc(Os),ee(!1),ne(Jc),ct(i.CULL_FACE),O(Si);function ct(I){h[I]!==!0&&(i.enable(I),h[I]=!0)}function zt(I){h[I]!==!1&&(i.disable(I),h[I]=!1)}function Wt(I,mt){return d[I]!==mt?(i.bindFramebuffer(I,mt),d[I]=mt,I===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=mt),I===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=mt),!0):!1}function jt(I,mt){let W=p,j=!1;if(I){W=f.get(mt),W===void 0&&(W=[],f.set(mt,W));let dt=I.textures;if(W.length!==dt.length||W[0]!==i.COLOR_ATTACHMENT0){for(let ut=0,qt=dt.length;ut<qt;ut++)W[ut]=i.COLOR_ATTACHMENT0+ut;W.length=dt.length,j=!0}}else W[0]!==i.BACK&&(W[0]=i.BACK,j=!0);j&&i.drawBuffers(W)}function bt(I){return g!==I?(i.useProgram(I),g=I,!0):!1}let kt={[Gi]:i.FUNC_ADD,[ju]:i.FUNC_SUBTRACT,[Qu]:i.FUNC_REVERSE_SUBTRACT};kt[td]=i.MIN,kt[ed]=i.MAX;let Re={[nd]:i.ZERO,[id]:i.ONE,[sd]:i.SRC_COLOR,[qo]:i.SRC_ALPHA,[hd]:i.SRC_ALPHA_SATURATE,[ld]:i.DST_COLOR,[ad]:i.DST_ALPHA,[rd]:i.ONE_MINUS_SRC_COLOR,[Yo]:i.ONE_MINUS_SRC_ALPHA,[cd]:i.ONE_MINUS_DST_COLOR,[od]:i.ONE_MINUS_DST_ALPHA,[ud]:i.CONSTANT_COLOR,[dd]:i.ONE_MINUS_CONSTANT_COLOR,[fd]:i.CONSTANT_ALPHA,[pd]:i.ONE_MINUS_CONSTANT_ALPHA};function O(I,mt,W,j,dt,ut,qt,Ce,De,$t){if(I===Si){x===!0&&(zt(i.BLEND),x=!1);return}if(x===!1&&(ct(i.BLEND),x=!0),I!==Ku){if(I!==m||$t!==S){if((u!==Gi||M!==Gi)&&(i.blendEquation(i.FUNC_ADD),u=Gi,M=Gi),$t)switch(I){case Is:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case $c:i.blendFunc(i.ONE,i.ONE);break;case Kc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case jc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Is:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case $c:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Kc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case jc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}T=null,E=null,D=null,C=null,R.set(0,0,0),N=0,m=I,S=$t}return}dt=dt||mt,ut=ut||W,qt=qt||j,(mt!==u||dt!==M)&&(i.blendEquationSeparate(kt[mt],kt[dt]),u=mt,M=dt),(W!==T||j!==E||ut!==D||qt!==C)&&(i.blendFuncSeparate(Re[W],Re[j],Re[ut],Re[qt]),T=W,E=j,D=ut,C=qt),(Ce.equals(R)===!1||De!==N)&&(i.blendColor(Ce.r,Ce.g,Ce.b,De),R.copy(Ce),N=De),m=I,S=!1}function sn(I,mt){I.side===En?zt(i.CULL_FACE):ct(i.CULL_FACE);let W=I.side===en;mt&&(W=!W),ee(W),I.blending===Is&&I.transparent===!1?O(Si):O(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),r.setMask(I.colorWrite);let j=I.stencilWrite;o.setTest(j),j&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),se(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ct(i.SAMPLE_ALPHA_TO_COVERAGE):zt(i.SAMPLE_ALPHA_TO_COVERAGE)}function ee(I){v!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),v=I)}function ne(I){I!==Zu?(ct(i.CULL_FACE),I!==P&&(I===Jc?i.cullFace(i.BACK):I===Ju?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):zt(i.CULL_FACE),P=I}function Dt(I){I!==G&&(Y&&i.lineWidth(I),G=I)}function se(I,mt,W){I?(ct(i.POLYGON_OFFSET_FILL),(B!==mt||q!==W)&&(i.polygonOffset(mt,W),B=mt,q=W)):zt(i.POLYGON_OFFSET_FILL)}function Nt(I){I?ct(i.SCISSOR_TEST):zt(i.SCISSOR_TEST)}function w(I){I===void 0&&(I=i.TEXTURE0+tt-1),ft!==I&&(i.activeTexture(I),ft=I)}function _(I,mt,W){W===void 0&&(ft===null?W=i.TEXTURE0+tt-1:W=ft);let j=xt[W];j===void 0&&(j={type:void 0,texture:void 0},xt[W]=j),(j.type!==I||j.texture!==mt)&&(ft!==W&&(i.activeTexture(W),ft=W),i.bindTexture(I,mt||wt[I]),j.type=I,j.texture=mt)}function z(){let I=xt[ft];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function K(){try{i.compressedTexImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function et(){try{i.compressedTexImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function J(){try{i.texSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Rt(){try{i.texSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function pt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function yt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function re(){try{i.texStorage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function it(){try{i.texStorage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function vt(){try{i.texImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ft(){try{i.texImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Vt(I){me.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),me.copy(I))}function St(I){$.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),$.copy(I))}function Jt(I,mt){let W=c.get(mt);W===void 0&&(W=new WeakMap,c.set(mt,W));let j=W.get(I);j===void 0&&(j=i.getUniformBlockIndex(mt,I.name),W.set(I,j))}function Xt(I,mt){let j=c.get(mt).get(I);l.get(mt)!==j&&(i.uniformBlockBinding(mt,j,I.__bindingPointIndex),l.set(mt,j))}function pe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ft=null,xt={},d={},f=new WeakMap,p=[],g=null,x=!1,m=null,u=null,T=null,E=null,M=null,D=null,C=null,R=new Lt(0,0,0),N=0,S=!1,v=null,P=null,G=null,B=null,q=null,me.set(0,0,i.canvas.width,i.canvas.height),$.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ct,disable:zt,bindFramebuffer:Wt,drawBuffers:jt,useProgram:bt,setBlending:O,setMaterial:sn,setFlipSided:ee,setCullFace:ne,setLineWidth:Dt,setPolygonOffset:se,setScissorTest:Nt,activeTexture:w,bindTexture:_,unbindTexture:z,compressedTexImage2D:K,compressedTexImage3D:et,texImage2D:vt,texImage3D:Ft,updateUBOMapping:Jt,uniformBlockBinding:Xt,texStorage2D:re,texStorage3D:it,texSubImage2D:J,texSubImage3D:Rt,compressedTexSubImage2D:pt,compressedTexSubImage3D:yt,scissor:Vt,viewport:St,reset:pe}}function Zh(i,t,e,n){let s=z0(n);switch(e){case du:return i*t;case pu:return i*t;case mu:return i*t*2;case Za:return i*t/s.components*s.byteLength;case yc:return i*t/s.components*s.byteLength;case gu:return i*t*2/s.components*s.byteLength;case vc:return i*t*2/s.components*s.byteLength;case fu:return i*t*3/s.components*s.byteLength;case Bn:return i*t*4/s.components*s.byteLength;case Mc:return i*t*4/s.components*s.byteLength;case ua:case da:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case fa:case pa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case al:case ll:return Math.max(i,16)*Math.max(t,8)/4;case rl:case ol:return Math.max(i,8)*Math.max(t,8)/2;case cl:case hl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ul:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case dl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case fl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case pl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ml:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case gl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case _l:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case xl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case yl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case vl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ml:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Sl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case bl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case wl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case El:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case ma:case Tl:case Al:return Math.ceil(i/4)*Math.ceil(t/4)*16;case _u:case Cl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Rl:case Pl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function z0(i){switch(i){case oi:case cu:return{byteLength:1,components:1};case xr:case hu:case Ar:return{byteLength:2,components:1};case _c:case xc:return{byteLength:2,components:4};case Yi:case gc:case ii:return{byteLength:4,components:1};case uu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function k0(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new lt,h=new WeakMap,d,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,_){return p?new OffscreenCanvas(w,_):vr("canvas")}function x(w,_,z){let K=1,et=Nt(w);if((et.width>z||et.height>z)&&(K=z/Math.max(et.width,et.height)),K<1)if(typeof HTMLImageElement!="undefined"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&w instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&w instanceof ImageBitmap||typeof VideoFrame!="undefined"&&w instanceof VideoFrame){let J=Math.floor(K*et.width),Rt=Math.floor(K*et.height);d===void 0&&(d=g(J,Rt));let pt=_?g(J,Rt):d;return pt.width=J,pt.height=Rt,pt.getContext("2d").drawImage(w,0,0,J,Rt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+J+"x"+Rt+")."),pt}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),w;return w}function m(w){return w.generateMipmaps}function u(w){i.generateMipmap(w)}function T(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(w,_,z,K,et=!1){if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let J=_;if(_===i.RED&&(z===i.FLOAT&&(J=i.R32F),z===i.HALF_FLOAT&&(J=i.R16F),z===i.UNSIGNED_BYTE&&(J=i.R8)),_===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(J=i.R8UI),z===i.UNSIGNED_SHORT&&(J=i.R16UI),z===i.UNSIGNED_INT&&(J=i.R32UI),z===i.BYTE&&(J=i.R8I),z===i.SHORT&&(J=i.R16I),z===i.INT&&(J=i.R32I)),_===i.RG&&(z===i.FLOAT&&(J=i.RG32F),z===i.HALF_FLOAT&&(J=i.RG16F),z===i.UNSIGNED_BYTE&&(J=i.RG8)),_===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(J=i.RG8UI),z===i.UNSIGNED_SHORT&&(J=i.RG16UI),z===i.UNSIGNED_INT&&(J=i.RG32UI),z===i.BYTE&&(J=i.RG8I),z===i.SHORT&&(J=i.RG16I),z===i.INT&&(J=i.RG32I)),_===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(J=i.RGB8UI),z===i.UNSIGNED_SHORT&&(J=i.RGB16UI),z===i.UNSIGNED_INT&&(J=i.RGB32UI),z===i.BYTE&&(J=i.RGB8I),z===i.SHORT&&(J=i.RGB16I),z===i.INT&&(J=i.RGB32I)),_===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),z===i.UNSIGNED_INT&&(J=i.RGBA32UI),z===i.BYTE&&(J=i.RGBA8I),z===i.SHORT&&(J=i.RGBA16I),z===i.INT&&(J=i.RGBA32I)),_===i.RGB&&z===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),_===i.RGBA){let Rt=et?Ja:ue.getTransfer(K);z===i.FLOAT&&(J=i.RGBA32F),z===i.HALF_FLOAT&&(J=i.RGBA16F),z===i.UNSIGNED_BYTE&&(J=Rt===Me?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function M(w,_){let z;return w?_===null||_===Yi||_===zs?z=i.DEPTH24_STENCIL8:_===ii?z=i.DEPTH32F_STENCIL8:_===xr&&(z=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Yi||_===zs?z=i.DEPTH_COMPONENT24:_===ii?z=i.DEPTH_COMPONENT32F:_===xr&&(z=i.DEPTH_COMPONENT16),z}function D(w,_){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==ln&&w.minFilter!==Wn?Math.log2(Math.max(_.width,_.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?_.mipmaps.length:1}function C(w){let _=w.target;_.removeEventListener("dispose",C),N(_),_.isVideoTexture&&h.delete(_)}function R(w){let _=w.target;_.removeEventListener("dispose",R),v(_)}function N(w){let _=n.get(w);if(_.__webglInit===void 0)return;let z=w.source,K=f.get(z);if(K){let et=K[_.__cacheKey];et.usedTimes--,et.usedTimes===0&&S(w),Object.keys(K).length===0&&f.delete(z)}n.remove(w)}function S(w){let _=n.get(w);i.deleteTexture(_.__webglTexture);let z=w.source,K=f.get(z);delete K[_.__cacheKey],a.memory.textures--}function v(w){let _=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(_.__webglFramebuffer[K]))for(let et=0;et<_.__webglFramebuffer[K].length;et++)i.deleteFramebuffer(_.__webglFramebuffer[K][et]);else i.deleteFramebuffer(_.__webglFramebuffer[K]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[K])}else{if(Array.isArray(_.__webglFramebuffer))for(let K=0;K<_.__webglFramebuffer.length;K++)i.deleteFramebuffer(_.__webglFramebuffer[K]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let K=0;K<_.__webglColorRenderbuffer.length;K++)_.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[K]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let z=w.textures;for(let K=0,et=z.length;K<et;K++){let J=n.get(z[K]);J.__webglTexture&&(i.deleteTexture(J.__webglTexture),a.memory.textures--),n.remove(z[K])}n.remove(w)}let P=0;function G(){P=0}function B(){let w=P;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),P+=1,w}function q(w){let _=[];return _.push(w.wrapS),_.push(w.wrapT),_.push(w.wrapR||0),_.push(w.magFilter),_.push(w.minFilter),_.push(w.anisotropy),_.push(w.internalFormat),_.push(w.format),_.push(w.type),_.push(w.generateMipmaps),_.push(w.premultiplyAlpha),_.push(w.flipY),_.push(w.unpackAlignment),_.push(w.colorSpace),_.join()}function tt(w,_){let z=n.get(w);if(w.isVideoTexture&&Dt(w),w.isRenderTargetTexture===!1&&w.version>0&&z.__version!==w.version){let K=w.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(z,w,_);return}}e.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+_)}function Y(w,_){let z=n.get(w);if(w.version>0&&z.__version!==w.version){$(z,w,_);return}e.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+_)}function rt(w,_){let z=n.get(w);if(w.version>0&&z.__version!==w.version){$(z,w,_);return}e.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+_)}function X(w,_){let z=n.get(w);if(w.version>0&&z.__version!==w.version){at(z,w,_);return}e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+_)}let ft={[il]:i.REPEAT,[Xi]:i.CLAMP_TO_EDGE,[sl]:i.MIRRORED_REPEAT},xt={[ln]:i.NEAREST,[wd]:i.NEAREST_MIPMAP_NEAREST,[Nr]:i.NEAREST_MIPMAP_LINEAR,[Wn]:i.LINEAR,[uo]:i.LINEAR_MIPMAP_NEAREST,[qi]:i.LINEAR_MIPMAP_LINEAR},Pt={[Cd]:i.NEVER,[Ud]:i.ALWAYS,[Rd]:i.LESS,[yu]:i.LEQUAL,[Pd]:i.EQUAL,[Dd]:i.GEQUAL,[Id]:i.GREATER,[Ld]:i.NOTEQUAL};function te(w,_){if(_.type===ii&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===Wn||_.magFilter===uo||_.magFilter===Nr||_.magFilter===qi||_.minFilter===Wn||_.minFilter===uo||_.minFilter===Nr||_.minFilter===qi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,ft[_.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,ft[_.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,ft[_.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,xt[_.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,xt[_.minFilter]),_.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,Pt[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===ln||_.minFilter!==Nr&&_.minFilter!==qi||_.type===ii&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let z=t.get("EXT_texture_filter_anisotropic");i.texParameterf(w,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function me(w,_){let z=!1;w.__webglInit===void 0&&(w.__webglInit=!0,_.addEventListener("dispose",C));let K=_.source,et=f.get(K);et===void 0&&(et={},f.set(K,et));let J=q(_);if(J!==w.__cacheKey){et[J]===void 0&&(et[J]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,z=!0),et[J].usedTimes++;let Rt=et[w.__cacheKey];Rt!==void 0&&(et[w.__cacheKey].usedTimes--,Rt.usedTimes===0&&S(_)),w.__cacheKey=J,w.__webglTexture=et[J].texture}return z}function $(w,_,z){let K=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(K=i.TEXTURE_3D);let et=me(w,_),J=_.source;e.bindTexture(K,w.__webglTexture,i.TEXTURE0+z);let Rt=n.get(J);if(J.version!==Rt.__version||et===!0){e.activeTexture(i.TEXTURE0+z);let pt=ue.getPrimaries(ue.workingColorSpace),yt=_.colorSpace===Mi?null:ue.getPrimaries(_.colorSpace),re=_.colorSpace===Mi||pt===yt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);let it=x(_.image,!1,s.maxTextureSize);it=se(_,it);let vt=r.convert(_.format,_.colorSpace),Ft=r.convert(_.type),Vt=E(_.internalFormat,vt,Ft,_.colorSpace,_.isVideoTexture);te(K,_);let St,Jt=_.mipmaps,Xt=_.isVideoTexture!==!0,pe=Rt.__version===void 0||et===!0,I=J.dataReady,mt=D(_,it);if(_.isDepthTexture)Vt=M(_.format===ks,_.type),pe&&(Xt?e.texStorage2D(i.TEXTURE_2D,1,Vt,it.width,it.height):e.texImage2D(i.TEXTURE_2D,0,Vt,it.width,it.height,0,vt,Ft,null));else if(_.isDataTexture)if(Jt.length>0){Xt&&pe&&e.texStorage2D(i.TEXTURE_2D,mt,Vt,Jt[0].width,Jt[0].height);for(let W=0,j=Jt.length;W<j;W++)St=Jt[W],Xt?I&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,St.width,St.height,vt,Ft,St.data):e.texImage2D(i.TEXTURE_2D,W,Vt,St.width,St.height,0,vt,Ft,St.data);_.generateMipmaps=!1}else Xt?(pe&&e.texStorage2D(i.TEXTURE_2D,mt,Vt,it.width,it.height),I&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,it.width,it.height,vt,Ft,it.data)):e.texImage2D(i.TEXTURE_2D,0,Vt,it.width,it.height,0,vt,Ft,it.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Xt&&pe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,mt,Vt,Jt[0].width,Jt[0].height,it.depth);for(let W=0,j=Jt.length;W<j;W++)if(St=Jt[W],_.format!==Bn)if(vt!==null)if(Xt){if(I)if(_.layerUpdates.size>0){let dt=Zh(St.width,St.height,_.format,_.type);for(let ut of _.layerUpdates){let qt=St.data.subarray(ut*dt/St.data.BYTES_PER_ELEMENT,(ut+1)*dt/St.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,ut,St.width,St.height,1,vt,qt)}_.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,St.width,St.height,it.depth,vt,St.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,W,Vt,St.width,St.height,it.depth,0,St.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Xt?I&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,St.width,St.height,it.depth,vt,Ft,St.data):e.texImage3D(i.TEXTURE_2D_ARRAY,W,Vt,St.width,St.height,it.depth,0,vt,Ft,St.data)}else{Xt&&pe&&e.texStorage2D(i.TEXTURE_2D,mt,Vt,Jt[0].width,Jt[0].height);for(let W=0,j=Jt.length;W<j;W++)St=Jt[W],_.format!==Bn?vt!==null?Xt?I&&e.compressedTexSubImage2D(i.TEXTURE_2D,W,0,0,St.width,St.height,vt,St.data):e.compressedTexImage2D(i.TEXTURE_2D,W,Vt,St.width,St.height,0,St.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xt?I&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,St.width,St.height,vt,Ft,St.data):e.texImage2D(i.TEXTURE_2D,W,Vt,St.width,St.height,0,vt,Ft,St.data)}else if(_.isDataArrayTexture)if(Xt){if(pe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,mt,Vt,it.width,it.height,it.depth),I)if(_.layerUpdates.size>0){let W=Zh(it.width,it.height,_.format,_.type);for(let j of _.layerUpdates){let dt=it.data.subarray(j*W/it.data.BYTES_PER_ELEMENT,(j+1)*W/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,j,it.width,it.height,1,vt,Ft,dt)}_.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,vt,Ft,it.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Vt,it.width,it.height,it.depth,0,vt,Ft,it.data);else if(_.isData3DTexture)Xt?(pe&&e.texStorage3D(i.TEXTURE_3D,mt,Vt,it.width,it.height,it.depth),I&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,vt,Ft,it.data)):e.texImage3D(i.TEXTURE_3D,0,Vt,it.width,it.height,it.depth,0,vt,Ft,it.data);else if(_.isFramebufferTexture){if(pe)if(Xt)e.texStorage2D(i.TEXTURE_2D,mt,Vt,it.width,it.height);else{let W=it.width,j=it.height;for(let dt=0;dt<mt;dt++)e.texImage2D(i.TEXTURE_2D,dt,Vt,W,j,0,vt,Ft,null),W>>=1,j>>=1}}else if(Jt.length>0){if(Xt&&pe){let W=Nt(Jt[0]);e.texStorage2D(i.TEXTURE_2D,mt,Vt,W.width,W.height)}for(let W=0,j=Jt.length;W<j;W++)St=Jt[W],Xt?I&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,vt,Ft,St):e.texImage2D(i.TEXTURE_2D,W,Vt,vt,Ft,St);_.generateMipmaps=!1}else if(Xt){if(pe){let W=Nt(it);e.texStorage2D(i.TEXTURE_2D,mt,Vt,W.width,W.height)}I&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,vt,Ft,it)}else e.texImage2D(i.TEXTURE_2D,0,Vt,vt,Ft,it);m(_)&&u(K),Rt.__version=J.version,_.onUpdate&&_.onUpdate(_)}w.__version=_.version}function at(w,_,z){if(_.image.length!==6)return;let K=me(w,_),et=_.source;e.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+z);let J=n.get(et);if(et.version!==J.__version||K===!0){e.activeTexture(i.TEXTURE0+z);let Rt=ue.getPrimaries(ue.workingColorSpace),pt=_.colorSpace===Mi?null:ue.getPrimaries(_.colorSpace),yt=_.colorSpace===Mi||Rt===pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt);let re=_.isCompressedTexture||_.image[0].isCompressedTexture,it=_.image[0]&&_.image[0].isDataTexture,vt=[];for(let j=0;j<6;j++)!re&&!it?vt[j]=x(_.image[j],!0,s.maxCubemapSize):vt[j]=it?_.image[j].image:_.image[j],vt[j]=se(_,vt[j]);let Ft=vt[0],Vt=r.convert(_.format,_.colorSpace),St=r.convert(_.type),Jt=E(_.internalFormat,Vt,St,_.colorSpace),Xt=_.isVideoTexture!==!0,pe=J.__version===void 0||K===!0,I=et.dataReady,mt=D(_,Ft);te(i.TEXTURE_CUBE_MAP,_);let W;if(re){Xt&&pe&&e.texStorage2D(i.TEXTURE_CUBE_MAP,mt,Jt,Ft.width,Ft.height);for(let j=0;j<6;j++){W=vt[j].mipmaps;for(let dt=0;dt<W.length;dt++){let ut=W[dt];_.format!==Bn?Vt!==null?Xt?I&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,dt,0,0,ut.width,ut.height,Vt,ut.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,dt,Jt,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,dt,0,0,ut.width,ut.height,Vt,St,ut.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,dt,Jt,ut.width,ut.height,0,Vt,St,ut.data)}}}else{if(W=_.mipmaps,Xt&&pe){W.length>0&&mt++;let j=Nt(vt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,mt,Jt,j.width,j.height)}for(let j=0;j<6;j++)if(it){Xt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,vt[j].width,vt[j].height,Vt,St,vt[j].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Jt,vt[j].width,vt[j].height,0,Vt,St,vt[j].data);for(let dt=0;dt<W.length;dt++){let qt=W[dt].image[j].image;Xt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,dt+1,0,0,qt.width,qt.height,Vt,St,qt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,dt+1,Jt,qt.width,qt.height,0,Vt,St,qt.data)}}else{Xt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Vt,St,vt[j]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Jt,Vt,St,vt[j]);for(let dt=0;dt<W.length;dt++){let ut=W[dt];Xt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,dt+1,0,0,Vt,St,ut.image[j]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,dt+1,Jt,Vt,St,ut.image[j])}}}m(_)&&u(i.TEXTURE_CUBE_MAP),J.__version=et.version,_.onUpdate&&_.onUpdate(_)}w.__version=_.version}function wt(w,_,z,K,et,J){let Rt=r.convert(z.format,z.colorSpace),pt=r.convert(z.type),yt=E(z.internalFormat,Rt,pt,z.colorSpace),re=n.get(_),it=n.get(z);if(it.__renderTarget=_,!re.__hasExternalTextures){let vt=Math.max(1,_.width>>J),Ft=Math.max(1,_.height>>J);et===i.TEXTURE_3D||et===i.TEXTURE_2D_ARRAY?e.texImage3D(et,J,yt,vt,Ft,_.depth,0,Rt,pt,null):e.texImage2D(et,J,yt,vt,Ft,0,Rt,pt,null)}e.bindFramebuffer(i.FRAMEBUFFER,w),ne(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,et,it.__webglTexture,0,ee(_)):(et===i.TEXTURE_2D||et>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,et,it.__webglTexture,J),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ct(w,_,z){if(i.bindRenderbuffer(i.RENDERBUFFER,w),_.depthBuffer){let K=_.depthTexture,et=K&&K.isDepthTexture?K.type:null,J=M(_.stencilBuffer,et),Rt=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pt=ee(_);ne(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,pt,J,_.width,_.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,pt,J,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,J,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Rt,i.RENDERBUFFER,w)}else{let K=_.textures;for(let et=0;et<K.length;et++){let J=K[et],Rt=r.convert(J.format,J.colorSpace),pt=r.convert(J.type),yt=E(J.internalFormat,Rt,pt,J.colorSpace),re=ee(_);z&&ne(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,re,yt,_.width,_.height):ne(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,re,yt,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,yt,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function zt(w,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,w),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let K=n.get(_.depthTexture);K.__renderTarget=_,(!K.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),tt(_.depthTexture,0);let et=K.__webglTexture,J=ee(_);if(_.depthTexture.format===Ls)ne(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0);else if(_.depthTexture.format===ks)ne(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function Wt(w){let _=n.get(w),z=w.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==w.depthTexture){let K=w.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),K){let et=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,K.removeEventListener("dispose",et)};K.addEventListener("dispose",et),_.__depthDisposeCallback=et}_.__boundDepthTexture=K}if(w.depthTexture&&!_.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");zt(_.__webglFramebuffer,w)}else if(z){_.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[K]),_.__webglDepthbuffer[K]===void 0)_.__webglDepthbuffer[K]=i.createRenderbuffer(),ct(_.__webglDepthbuffer[K],w,!1);else{let et=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=_.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,J)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),ct(_.__webglDepthbuffer,w,!1);else{let K=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,et=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,et),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,et)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function jt(w,_,z){let K=n.get(w);_!==void 0&&wt(K.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&Wt(w)}function bt(w){let _=w.texture,z=n.get(w),K=n.get(_);w.addEventListener("dispose",R);let et=w.textures,J=w.isWebGLCubeRenderTarget===!0,Rt=et.length>1;if(Rt||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=_.version,a.memory.textures++),J){z.__webglFramebuffer=[];for(let pt=0;pt<6;pt++)if(_.mipmaps&&_.mipmaps.length>0){z.__webglFramebuffer[pt]=[];for(let yt=0;yt<_.mipmaps.length;yt++)z.__webglFramebuffer[pt][yt]=i.createFramebuffer()}else z.__webglFramebuffer[pt]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){z.__webglFramebuffer=[];for(let pt=0;pt<_.mipmaps.length;pt++)z.__webglFramebuffer[pt]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(Rt)for(let pt=0,yt=et.length;pt<yt;pt++){let re=n.get(et[pt]);re.__webglTexture===void 0&&(re.__webglTexture=i.createTexture(),a.memory.textures++)}if(w.samples>0&&ne(w)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let pt=0;pt<et.length;pt++){let yt=et[pt];z.__webglColorRenderbuffer[pt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[pt]);let re=r.convert(yt.format,yt.colorSpace),it=r.convert(yt.type),vt=E(yt.internalFormat,re,it,yt.colorSpace,w.isXRRenderTarget===!0),Ft=ee(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ft,vt,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.RENDERBUFFER,z.__webglColorRenderbuffer[pt])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),ct(z.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(J){e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),te(i.TEXTURE_CUBE_MAP,_);for(let pt=0;pt<6;pt++)if(_.mipmaps&&_.mipmaps.length>0)for(let yt=0;yt<_.mipmaps.length;yt++)wt(z.__webglFramebuffer[pt][yt],w,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,yt);else wt(z.__webglFramebuffer[pt],w,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0);m(_)&&u(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Rt){for(let pt=0,yt=et.length;pt<yt;pt++){let re=et[pt],it=n.get(re);e.bindTexture(i.TEXTURE_2D,it.__webglTexture),te(i.TEXTURE_2D,re),wt(z.__webglFramebuffer,w,re,i.COLOR_ATTACHMENT0+pt,i.TEXTURE_2D,0),m(re)&&u(i.TEXTURE_2D)}e.unbindTexture()}else{let pt=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(pt=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(pt,K.__webglTexture),te(pt,_),_.mipmaps&&_.mipmaps.length>0)for(let yt=0;yt<_.mipmaps.length;yt++)wt(z.__webglFramebuffer[yt],w,_,i.COLOR_ATTACHMENT0,pt,yt);else wt(z.__webglFramebuffer,w,_,i.COLOR_ATTACHMENT0,pt,0);m(_)&&u(pt),e.unbindTexture()}w.depthBuffer&&Wt(w)}function kt(w){let _=w.textures;for(let z=0,K=_.length;z<K;z++){let et=_[z];if(m(et)){let J=T(w),Rt=n.get(et).__webglTexture;e.bindTexture(J,Rt),u(J),e.unbindTexture()}}}let Re=[],O=[];function sn(w){if(w.samples>0){if(ne(w)===!1){let _=w.textures,z=w.width,K=w.height,et=i.COLOR_BUFFER_BIT,J=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Rt=n.get(w),pt=_.length>1;if(pt)for(let yt=0;yt<_.length;yt++)e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Rt.__webglFramebuffer);for(let yt=0;yt<_.length;yt++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(et|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(et|=i.STENCIL_BUFFER_BIT)),pt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Rt.__webglColorRenderbuffer[yt]);let re=n.get(_[yt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,re,0)}i.blitFramebuffer(0,0,z,K,0,0,z,K,et,i.NEAREST),l===!0&&(Re.length=0,O.length=0,Re.push(i.COLOR_ATTACHMENT0+yt),w.depthBuffer&&w.resolveDepthBuffer===!1&&(Re.push(J),O.push(J),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,O)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Re))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),pt)for(let yt=0;yt<_.length;yt++){e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.RENDERBUFFER,Rt.__webglColorRenderbuffer[yt]);let re=n.get(_[yt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.TEXTURE_2D,re,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){let _=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function ee(w){return Math.min(s.maxSamples,w.samples)}function ne(w){let _=n.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Dt(w){let _=a.render.frame;h.get(w)!==_&&(h.set(w,_),w.update())}function se(w,_){let z=w.colorSpace,K=w.format,et=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||z!==Js&&z!==Mi&&(ue.getTransfer(z)===Me?(K!==Bn||et!==oi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),_}function Nt(w){return typeof HTMLImageElement!="undefined"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame!="undefined"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=G,this.setTexture2D=tt,this.setTexture2DArray=Y,this.setTexture3D=rt,this.setTextureCube=X,this.rebindTextures=jt,this.setupRenderTarget=bt,this.updateRenderTargetMipmap=kt,this.updateMultisampleRenderTarget=sn,this.setupDepthRenderbuffer=Wt,this.setupFrameBufferTexture=wt,this.useMultisampledRTT=ne}function V0(i,t){function e(n,s=Mi){let r,a=ue.getTransfer(s);if(n===oi)return i.UNSIGNED_BYTE;if(n===_c)return i.UNSIGNED_SHORT_4_4_4_4;if(n===xc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===uu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===cu)return i.BYTE;if(n===hu)return i.SHORT;if(n===xr)return i.UNSIGNED_SHORT;if(n===gc)return i.INT;if(n===Yi)return i.UNSIGNED_INT;if(n===ii)return i.FLOAT;if(n===Ar)return i.HALF_FLOAT;if(n===du)return i.ALPHA;if(n===fu)return i.RGB;if(n===Bn)return i.RGBA;if(n===pu)return i.LUMINANCE;if(n===mu)return i.LUMINANCE_ALPHA;if(n===Ls)return i.DEPTH_COMPONENT;if(n===ks)return i.DEPTH_STENCIL;if(n===Za)return i.RED;if(n===yc)return i.RED_INTEGER;if(n===gu)return i.RG;if(n===vc)return i.RG_INTEGER;if(n===Mc)return i.RGBA_INTEGER;if(n===ua||n===da||n===fa||n===pa)if(a===Me)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ua)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===da)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===fa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===pa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ua)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===da)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===fa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===pa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===rl||n===al||n===ol||n===ll)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===rl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===al)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ol)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ll)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===cl||n===hl||n===ul)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===cl||n===hl)return a===Me?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ul)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===dl||n===fl||n===pl||n===ml||n===gl||n===_l||n===xl||n===yl||n===vl||n===Ml||n===Sl||n===bl||n===wl||n===El)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===dl)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===fl)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===pl)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ml)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===gl)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===_l)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===xl)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===yl)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===vl)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ml)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Sl)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===bl)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===wl)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===El)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ma||n===Tl||n===Al)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===ma)return a===Me?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Tl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Al)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===_u||n===Cl||n===Rl||n===Pl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ma)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Cl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Rl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Pl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===zs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var ql=class extends vn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Te=class extends Ne{constructor(){super(),this.isGroup=!0,this.type="Group"}},H0={type:"move"},mr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Te,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Te,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Te,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,n),u=this._getHandJoint(c,x);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(H0)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Te;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},G0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,W0=`
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

}`,Yl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new cn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new mn({vertexShader:G0,fragmentShader:W0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new le(new Xn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Zl=class extends li{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,f=null,p=null,g=null,x=new Yl,m=e.getContextAttributes(),u=null,T=null,E=[],M=[],D=new lt,C=null,R=new vn;R.viewport=new Se;let N=new vn;N.viewport=new Se;let S=[R,N],v=new ql,P=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let at=E[$];return at===void 0&&(at=new mr,E[$]=at),at.getTargetRaySpace()},this.getControllerGrip=function($){let at=E[$];return at===void 0&&(at=new mr,E[$]=at),at.getGripSpace()},this.getHand=function($){let at=E[$];return at===void 0&&(at=new mr,E[$]=at),at.getHandSpace()};function B($){let at=M.indexOf($.inputSource);if(at===-1)return;let wt=E[at];wt!==void 0&&(wt.update($.inputSource,$.frame,c||a),wt.dispatchEvent({type:$.type,data:$.inputSource}))}function q(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",tt);for(let $=0;$<E.length;$++){let at=M[$];at!==null&&(M[$]=null,E[$].disconnect(at))}P=null,G=null,x.reset(),t.setRenderTarget(u),p=null,f=null,d=null,s=null,T=null,me.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(u=t.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",q),s.addEventListener("inputsourceschange",tt),m.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(D),s.renderState.layers===void 0){let at={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,at),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),T=new ci(p.framebufferWidth,p.framebufferHeight,{format:Bn,type:oi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let at=null,wt=null,ct=null;m.depth&&(ct=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,at=m.stencil?ks:Ls,wt=m.stencil?zs:Yi);let zt={colorFormat:e.RGBA8,depthFormat:ct,scaleFactor:r};d=new XRWebGLBinding(s,e),f=d.createProjectionLayer(zt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),T=new ci(f.textureWidth,f.textureHeight,{format:Bn,type:oi,depthTexture:new Ea(f.textureWidth,f.textureHeight,wt,void 0,void 0,void 0,void 0,void 0,void 0,at),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),me.setContext(s),me.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function tt($){for(let at=0;at<$.removed.length;at++){let wt=$.removed[at],ct=M.indexOf(wt);ct>=0&&(M[ct]=null,E[ct].disconnect(wt))}for(let at=0;at<$.added.length;at++){let wt=$.added[at],ct=M.indexOf(wt);if(ct===-1){for(let Wt=0;Wt<E.length;Wt++)if(Wt>=M.length){M.push(wt),ct=Wt;break}else if(M[Wt]===null){M[Wt]=wt,ct=Wt;break}if(ct===-1)break}let zt=E[ct];zt&&zt.connect(wt)}}let Y=new A,rt=new A;function X($,at,wt){Y.setFromMatrixPosition(at.matrixWorld),rt.setFromMatrixPosition(wt.matrixWorld);let ct=Y.distanceTo(rt),zt=at.projectionMatrix.elements,Wt=wt.projectionMatrix.elements,jt=zt[14]/(zt[10]-1),bt=zt[14]/(zt[10]+1),kt=(zt[9]+1)/zt[5],Re=(zt[9]-1)/zt[5],O=(zt[8]-1)/zt[0],sn=(Wt[8]+1)/Wt[0],ee=jt*O,ne=jt*sn,Dt=ct/(-O+sn),se=Dt*-O;if(at.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(se),$.translateZ(Dt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),zt[10]===-1)$.projectionMatrix.copy(at.projectionMatrix),$.projectionMatrixInverse.copy(at.projectionMatrixInverse);else{let Nt=jt+Dt,w=bt+Dt,_=ee-se,z=ne+(ct-se),K=kt*bt/w*Nt,et=Re*bt/w*Nt;$.projectionMatrix.makePerspective(_,z,K,et,Nt,w),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function ft($,at){at===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(at.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let at=$.near,wt=$.far;x.texture!==null&&(x.depthNear>0&&(at=x.depthNear),x.depthFar>0&&(wt=x.depthFar)),v.near=N.near=R.near=at,v.far=N.far=R.far=wt,(P!==v.near||G!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),P=v.near,G=v.far),R.layers.mask=$.layers.mask|2,N.layers.mask=$.layers.mask|4,v.layers.mask=R.layers.mask|N.layers.mask;let ct=$.parent,zt=v.cameras;ft(v,ct);for(let Wt=0;Wt<zt.length;Wt++)ft(zt[Wt],ct);zt.length===2?X(v,R,N):v.projectionMatrix.copy(R.projectionMatrix),xt($,v,ct)};function xt($,at,wt){wt===null?$.matrix.copy(at.matrixWorld):($.matrix.copy(wt.matrixWorld),$.matrix.invert(),$.matrix.multiply(at.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(at.projectionMatrix),$.projectionMatrixInverse.copy(at.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=yr*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function($){l=$,f!==null&&(f.fixedFoveation=$),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=$)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(v)};let Pt=null;function te($,at){if(h=at.getViewerPose(c||a),g=at,h!==null){let wt=h.views;p!==null&&(t.setRenderTargetFramebuffer(T,p.framebuffer),t.setRenderTarget(T));let ct=!1;wt.length!==v.cameras.length&&(v.cameras.length=0,ct=!0);for(let Wt=0;Wt<wt.length;Wt++){let jt=wt[Wt],bt=null;if(p!==null)bt=p.getViewport(jt);else{let Re=d.getViewSubImage(f,jt);bt=Re.viewport,Wt===0&&(t.setRenderTargetTextures(T,Re.colorTexture,f.ignoreDepthValues?void 0:Re.depthStencilTexture),t.setRenderTarget(T))}let kt=S[Wt];kt===void 0&&(kt=new vn,kt.layers.enable(Wt),kt.viewport=new Se,S[Wt]=kt),kt.matrix.fromArray(jt.transform.matrix),kt.matrix.decompose(kt.position,kt.quaternion,kt.scale),kt.projectionMatrix.fromArray(jt.projectionMatrix),kt.projectionMatrixInverse.copy(kt.projectionMatrix).invert(),kt.viewport.set(bt.x,bt.y,bt.width,bt.height),Wt===0&&(v.matrix.copy(kt.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),ct===!0&&v.cameras.push(kt)}let zt=s.enabledFeatures;if(zt&&zt.includes("depth-sensing")){let Wt=d.getDepthInformation(wt[0]);Wt&&Wt.isValid&&Wt.texture&&x.init(t,Wt,s.renderState)}}for(let wt=0;wt<E.length;wt++){let ct=M[wt],zt=E[wt];ct!==null&&zt!==void 0&&zt.update(ct,at,c||a)}Pt&&Pt($,at),at.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:at}),g=null}let me=new bu;me.setAnimationLoop(te),this.setAnimationLoop=function($){Pt=$},this.dispose=function(){}}},Vi=new ui,X0=new Ae;function q0(i,t){function e(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function n(m,u){u.color.getRGB(m.fogColor.value,Su(i)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function s(m,u,T,E,M){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(m,u):u.isMeshToonMaterial?(r(m,u),d(m,u)):u.isMeshPhongMaterial?(r(m,u),h(m,u)):u.isMeshStandardMaterial?(r(m,u),f(m,u),u.isMeshPhysicalMaterial&&p(m,u,M)):u.isMeshMatcapMaterial?(r(m,u),g(m,u)):u.isMeshDepthMaterial?r(m,u):u.isMeshDistanceMaterial?(r(m,u),x(m,u)):u.isMeshNormalMaterial?r(m,u):u.isLineBasicMaterial?(a(m,u),u.isLineDashedMaterial&&o(m,u)):u.isPointsMaterial?l(m,u,T,E):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,e(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,e(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===en&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,e(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===en&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,e(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,e(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,e(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);let T=t.get(u),E=T.envMap,M=T.envMapRotation;E&&(m.envMap.value=E,Vi.copy(M),Vi.x*=-1,Vi.y*=-1,Vi.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Vi.y*=-1,Vi.z*=-1),m.envMapRotation.value.setFromMatrix4(X0.makeRotationFromEuler(Vi)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,e(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,e(u.aoMap,m.aoMapTransform))}function a(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,e(u.map,m.mapTransform))}function o(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,T,E){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*T,m.scale.value=E*.5,u.map&&(m.map.value=u.map,e(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,e(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function h(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function d(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function f(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,e(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,e(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,T){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,e(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,e(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,e(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,e(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,e(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===en&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,e(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,e(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,e(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,e(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,e(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,e(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,e(u.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,u){u.matcap&&(m.matcap.value=u.matcap)}function x(m,u){let T=t.get(u).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Y0(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,E){let M=E.program;n.uniformBlockBinding(T,M)}function c(T,E){let M=s[T.id];M===void 0&&(g(T),M=h(T),s[T.id]=M,T.addEventListener("dispose",m));let D=E.program;n.updateUBOMapping(T,D);let C=t.render.frame;r[T.id]!==C&&(f(T),r[T.id]=C)}function h(T){let E=d();T.__bindingPointIndex=E;let M=i.createBuffer(),D=T.__size,C=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,D,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,M),M}function d(){for(let T=0;T<o;T++)if(a.indexOf(T)===-1)return a.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(T){let E=s[T.id],M=T.uniforms,D=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let C=0,R=M.length;C<R;C++){let N=Array.isArray(M[C])?M[C]:[M[C]];for(let S=0,v=N.length;S<v;S++){let P=N[S];if(p(P,C,S,D)===!0){let G=P.__offset,B=Array.isArray(P.value)?P.value:[P.value],q=0;for(let tt=0;tt<B.length;tt++){let Y=B[tt],rt=x(Y);typeof Y=="number"||typeof Y=="boolean"?(P.__data[0]=Y,i.bufferSubData(i.UNIFORM_BUFFER,G+q,P.__data)):Y.isMatrix3?(P.__data[0]=Y.elements[0],P.__data[1]=Y.elements[1],P.__data[2]=Y.elements[2],P.__data[3]=0,P.__data[4]=Y.elements[3],P.__data[5]=Y.elements[4],P.__data[6]=Y.elements[5],P.__data[7]=0,P.__data[8]=Y.elements[6],P.__data[9]=Y.elements[7],P.__data[10]=Y.elements[8],P.__data[11]=0):(Y.toArray(P.__data,q),q+=rt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,G,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(T,E,M,D){let C=T.value,R=E+"_"+M;if(D[R]===void 0)return typeof C=="number"||typeof C=="boolean"?D[R]=C:D[R]=C.clone(),!0;{let N=D[R];if(typeof C=="number"||typeof C=="boolean"){if(N!==C)return D[R]=C,!0}else if(N.equals(C)===!1)return N.copy(C),!0}return!1}function g(T){let E=T.uniforms,M=0,D=16;for(let R=0,N=E.length;R<N;R++){let S=Array.isArray(E[R])?E[R]:[E[R]];for(let v=0,P=S.length;v<P;v++){let G=S[v],B=Array.isArray(G.value)?G.value:[G.value];for(let q=0,tt=B.length;q<tt;q++){let Y=B[q],rt=x(Y),X=M%D,ft=X%rt.boundary,xt=X+ft;M+=ft,xt!==0&&D-xt<rt.storage&&(M+=D-xt),G.__data=new Float32Array(rt.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=M,M+=rt.storage}}}let C=M%D;return C>0&&(M+=D-C),T.__size=M,T.__cache={},this}function x(T){let E={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(E.boundary=4,E.storage=4):T.isVector2?(E.boundary=8,E.storage=8):T.isVector3||T.isColor?(E.boundary=16,E.storage=12):T.isVector4?(E.boundary=16,E.storage=16):T.isMatrix3?(E.boundary=48,E.storage=48):T.isMatrix4?(E.boundary=64,E.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),E}function m(T){let E=T.target;E.removeEventListener("dispose",m);let M=a.indexOf(E.__bindingPointIndex);a.splice(M,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function u(){for(let T in s)i.deleteBuffer(s[T]);a=[],s={},r={}}return{bind:l,update:c,dispose:u}}var Ta=class{constructor(t={}){let{canvas:e=Kd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let g=new Uint32Array(4),x=new Int32Array(4),m=null,u=null,T=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=tn,this.toneMapping=bi,this.toneMappingExposure=1;let M=this,D=!1,C=0,R=0,N=null,S=-1,v=null,P=new Se,G=new Se,B=null,q=new Lt(0),tt=0,Y=e.width,rt=e.height,X=1,ft=null,xt=null,Pt=new Se(0,0,Y,rt),te=new Se(0,0,Y,rt),me=!1,$=new Sr,at=!1,wt=!1,ct=new Ae,zt=new Ae,Wt=new A,jt=new Se,bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},kt=!1;function Re(){return N===null?X:1}let O=n;function sn(y,L){return e.getContext(y,L)}try{let y={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${mc}`),e.addEventListener("webglcontextlost",j,!1),e.addEventListener("webglcontextrestored",dt,!1),e.addEventListener("webglcontextcreationerror",ut,!1),O===null){let L="webgl2";if(O=sn(L,y),O===null)throw sn(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let ee,ne,Dt,se,Nt,w,_,z,K,et,J,Rt,pt,yt,re,it,vt,Ft,Vt,St,Jt,Xt,pe,I;function mt(){ee=new cg(O),ee.init(),Xt=new V0(O,ee),ne=new ig(O,ee,t,Xt),Dt=new B0(O,ee),ne.reverseDepthBuffer&&f&&Dt.buffers.depth.setReversed(!0),se=new dg(O),Nt=new E0,w=new k0(O,ee,Dt,Nt,ne,Xt,se),_=new rg(M),z=new lg(M),K=new yf(O),pe=new eg(O,K),et=new hg(O,K,se,pe),J=new pg(O,et,K,se),Vt=new fg(O,ne,w),it=new sg(Nt),Rt=new w0(M,_,z,ee,ne,pe,it),pt=new q0(M,Nt),yt=new A0,re=new D0(ee),Ft=new tg(M,_,z,Dt,J,p,l),vt=new O0(M,J,ne),I=new Y0(O,se,ne,Dt),St=new ng(O,ee,se),Jt=new ug(O,ee,se),se.programs=Rt.programs,M.capabilities=ne,M.extensions=ee,M.properties=Nt,M.renderLists=yt,M.shadowMap=vt,M.state=Dt,M.info=se}mt();let W=new Zl(M,O);this.xr=W,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let y=ee.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=ee.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(y){y!==void 0&&(X=y,this.setSize(Y,rt,!1))},this.getSize=function(y){return y.set(Y,rt)},this.setSize=function(y,L,V=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=y,rt=L,e.width=Math.floor(y*X),e.height=Math.floor(L*X),V===!0&&(e.style.width=y+"px",e.style.height=L+"px"),this.setViewport(0,0,y,L)},this.getDrawingBufferSize=function(y){return y.set(Y*X,rt*X).floor()},this.setDrawingBufferSize=function(y,L,V){Y=y,rt=L,X=V,e.width=Math.floor(y*V),e.height=Math.floor(L*V),this.setViewport(0,0,y,L)},this.getCurrentViewport=function(y){return y.copy(P)},this.getViewport=function(y){return y.copy(Pt)},this.setViewport=function(y,L,V,H){y.isVector4?Pt.set(y.x,y.y,y.z,y.w):Pt.set(y,L,V,H),Dt.viewport(P.copy(Pt).multiplyScalar(X).round())},this.getScissor=function(y){return y.copy(te)},this.setScissor=function(y,L,V,H){y.isVector4?te.set(y.x,y.y,y.z,y.w):te.set(y,L,V,H),Dt.scissor(G.copy(te).multiplyScalar(X).round())},this.getScissorTest=function(){return me},this.setScissorTest=function(y){Dt.setScissorTest(me=y)},this.setOpaqueSort=function(y){ft=y},this.setTransparentSort=function(y){xt=y},this.getClearColor=function(y){return y.copy(Ft.getClearColor())},this.setClearColor=function(){Ft.setClearColor.apply(Ft,arguments)},this.getClearAlpha=function(){return Ft.getClearAlpha()},this.setClearAlpha=function(){Ft.setClearAlpha.apply(Ft,arguments)},this.clear=function(y=!0,L=!0,V=!0){let H=0;if(y){let U=!1;if(N!==null){let st=N.texture.format;U=st===Mc||st===vc||st===yc}if(U){let st=N.texture.type,_t=st===oi||st===Yi||st===xr||st===zs||st===_c||st===xc,Et=Ft.getClearColor(),At=Ft.getClearAlpha(),Ht=Et.r,Yt=Et.g,Tt=Et.b;_t?(g[0]=Ht,g[1]=Yt,g[2]=Tt,g[3]=At,O.clearBufferuiv(O.COLOR,0,g)):(x[0]=Ht,x[1]=Yt,x[2]=Tt,x[3]=At,O.clearBufferiv(O.COLOR,0,x))}else H|=O.COLOR_BUFFER_BIT}L&&(H|=O.DEPTH_BUFFER_BIT),V&&(H|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",j,!1),e.removeEventListener("webglcontextrestored",dt,!1),e.removeEventListener("webglcontextcreationerror",ut,!1),yt.dispose(),re.dispose(),Nt.dispose(),_.dispose(),z.dispose(),J.dispose(),pe.dispose(),I.dispose(),Rt.dispose(),W.dispose(),W.removeEventListener("sessionstart",Pi),W.removeEventListener("sessionend",Qs),Pn.stop()};function j(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function dt(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;let y=se.autoReset,L=vt.enabled,V=vt.autoUpdate,H=vt.needsUpdate,U=vt.type;mt(),se.autoReset=y,vt.enabled=L,vt.autoUpdate=V,vt.needsUpdate=H,vt.type=U}function ut(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function qt(y){let L=y.target;L.removeEventListener("dispose",qt),Ce(L)}function Ce(y){De(y),Nt.remove(y)}function De(y){let L=Nt.get(y).programs;L!==void 0&&(L.forEach(function(V){Rt.releaseProgram(V)}),y.isShaderMaterial&&Rt.releaseShaderCache(y))}this.renderBufferDirect=function(y,L,V,H,U,st){L===null&&(L=bt);let _t=U.isMesh&&U.matrixWorld.determinant()<0,Et=er(y,L,V,H,U);Dt.setMaterial(H,_t);let At=V.index,Ht=1;if(H.wireframe===!0){if(At=et.getWireframeAttribute(V),At===void 0)return;Ht=2}let Yt=V.drawRange,Tt=V.attributes.position,ce=Yt.start*Ht,ge=(Yt.start+Yt.count)*Ht;st!==null&&(ce=Math.max(ce,st.start*Ht),ge=Math.min(ge,(st.start+st.count)*Ht)),At!==null?(ce=Math.max(ce,0),ge=Math.min(ge,At.count)):Tt!=null&&(ce=Math.max(ce,0),ge=Math.min(ge,Tt.count));let ye=ge-ce;if(ye<0||ye===1/0)return;pe.setup(U,H,Et,V,At);let qe,de=St;if(At!==null&&(qe=K.get(At),de=Jt,de.setIndex(qe)),U.isMesh)H.wireframe===!0?(Dt.setLineWidth(H.wireframeLinewidth*Re()),de.setMode(O.LINES)):de.setMode(O.TRIANGLES);else if(U.isLine){let Ct=H.linewidth;Ct===void 0&&(Ct=1),Dt.setLineWidth(Ct*Re()),U.isLineSegments?de.setMode(O.LINES):U.isLineLoop?de.setMode(O.LINE_LOOP):de.setMode(O.LINE_STRIP)}else U.isPoints?de.setMode(O.POINTS):U.isSprite&&de.setMode(O.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)de.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(ee.get("WEBGL_multi_draw"))de.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{let Ct=U._multiDrawStarts,Sn=U._multiDrawCounts,he=U._multiDrawCount,un=At?K.get(At).bytesPerElement:1,bn=Nt.get(H).currentProgram.getUniforms();for(let Be=0;Be<he;Be++)bn.setValue(O,"_gl_DrawID",Be),de.render(Ct[Be]/un,Sn[Be])}else if(U.isInstancedMesh)de.renderInstances(ce,ye,U.count);else if(V.isInstancedBufferGeometry){let Ct=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Sn=Math.min(V.instanceCount,Ct);de.renderInstances(ce,ye,Sn)}else de.render(ce,ye)};function $t(y,L,V){y.transparent===!0&&y.side===En&&y.forceSinglePass===!1?(y.side=en,y.needsUpdate=!0,Li(y,L,V),y.side=wi,y.needsUpdate=!0,Li(y,L,V),y.side=En):Li(y,L,V)}this.compile=function(y,L,V=null){V===null&&(V=y),u=re.get(V),u.init(L),E.push(u),V.traverseVisible(function(U){U.isLight&&U.layers.test(L.layers)&&(u.pushLight(U),U.castShadow&&u.pushShadow(U))}),y!==V&&y.traverseVisible(function(U){U.isLight&&U.layers.test(L.layers)&&(u.pushLight(U),U.castShadow&&u.pushShadow(U))}),u.setupLights();let H=new Set;return y.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;let st=U.material;if(st)if(Array.isArray(st))for(let _t=0;_t<st.length;_t++){let Et=st[_t];$t(Et,V,U),H.add(Et)}else $t(st,V,U),H.add(st)}),E.pop(),u=null,H},this.compileAsync=function(y,L,V=null){let H=this.compile(y,L,V);return new Promise(U=>{function st(){if(H.forEach(function(_t){Nt.get(_t).currentProgram.isReady()&&H.delete(_t)}),H.size===0){U(y);return}setTimeout(st,10)}ee.get("KHR_parallel_shader_compile")!==null?st():setTimeout(st,10)})};let hn=null;function Xe(y){hn&&hn(y)}function Pi(){Pn.stop()}function Qs(){Pn.start()}let Pn=new bu;Pn.setAnimationLoop(Xe),typeof self!="undefined"&&Pn.setContext(self),this.setAnimationLoop=function(y){hn=y,W.setAnimationLoop(y),y===null?Pn.stop():Pn.start()},W.addEventListener("sessionstart",Pi),W.addEventListener("sessionend",Qs),this.render=function(y,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(L),L=W.getCamera()),y.isScene===!0&&y.onBeforeRender(M,y,L,N),u=re.get(y,E.length),u.init(L),E.push(u),zt.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),$.setFromProjectionMatrix(zt),wt=this.localClippingEnabled,at=it.init(this.clippingPlanes,wt),m=yt.get(y,T.length),m.init(),T.push(m),W.enabled===!0&&W.isPresenting===!0){let st=M.xr.getDepthSensingMesh();st!==null&&Ii(st,L,-1/0,M.sortObjects)}Ii(y,L,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(ft,xt),kt=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,kt&&Ft.addToRenderList(m,y),this.info.render.frame++,at===!0&&it.beginShadows();let V=u.state.shadowsArray;vt.render(V,y,L),at===!0&&it.endShadows(),this.info.autoReset===!0&&this.info.reset();let H=m.opaque,U=m.transmissive;if(u.setupLights(),L.isArrayCamera){let st=L.cameras;if(U.length>0)for(let _t=0,Et=st.length;_t<Et;_t++){let At=st[_t];ss(H,U,y,At)}kt&&Ft.render(y);for(let _t=0,Et=st.length;_t<Et;_t++){let At=st[_t];is(m,y,At,At.viewport)}}else U.length>0&&ss(H,U,y,L),kt&&Ft.render(y),is(m,y,L);N!==null&&(w.updateMultisampleRenderTarget(N),w.updateRenderTargetMipmap(N)),y.isScene===!0&&y.onAfterRender(M,y,L),pe.resetDefaultState(),S=-1,v=null,E.pop(),E.length>0?(u=E[E.length-1],at===!0&&it.setGlobalState(M.clippingPlanes,u.state.camera)):u=null,T.pop(),T.length>0?m=T[T.length-1]:m=null};function Ii(y,L,V,H){if(y.visible===!1)return;if(y.layers.test(L.layers)){if(y.isGroup)V=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(L);else if(y.isLight)u.pushLight(y),y.castShadow&&u.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||$.intersectsSprite(y)){H&&jt.setFromMatrixPosition(y.matrixWorld).applyMatrix4(zt);let _t=J.update(y),Et=y.material;Et.visible&&m.push(y,_t,Et,V,jt.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||$.intersectsObject(y))){let _t=J.update(y),Et=y.material;if(H&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),jt.copy(y.boundingSphere.center)):(_t.boundingSphere===null&&_t.computeBoundingSphere(),jt.copy(_t.boundingSphere.center)),jt.applyMatrix4(y.matrixWorld).applyMatrix4(zt)),Array.isArray(Et)){let At=_t.groups;for(let Ht=0,Yt=At.length;Ht<Yt;Ht++){let Tt=At[Ht],ce=Et[Tt.materialIndex];ce&&ce.visible&&m.push(y,_t,ce,V,jt.z,Tt)}}else Et.visible&&m.push(y,_t,Et,V,jt.z,null)}}let st=y.children;for(let _t=0,Et=st.length;_t<Et;_t++)Ii(st[_t],L,V,H)}function is(y,L,V,H){let U=y.opaque,st=y.transmissive,_t=y.transparent;u.setupLightsView(V),at===!0&&it.setGlobalState(M.clippingPlanes,V),H&&Dt.viewport(P.copy(H)),U.length>0&&rs(U,L,V),st.length>0&&rs(st,L,V),_t.length>0&&rs(_t,L,V),Dt.buffers.depth.setTest(!0),Dt.buffers.depth.setMask(!0),Dt.buffers.color.setMask(!0),Dt.setPolygonOffset(!1)}function ss(y,L,V,H){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[H.id]===void 0&&(u.state.transmissionRenderTarget[H.id]=new ci(1,1,{generateMipmaps:!0,type:ee.has("EXT_color_buffer_half_float")||ee.has("EXT_color_buffer_float")?Ar:oi,minFilter:qi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ue.workingColorSpace}));let st=u.state.transmissionRenderTarget[H.id],_t=H.viewport||P;st.setSize(_t.z,_t.w);let Et=M.getRenderTarget();M.setRenderTarget(st),M.getClearColor(q),tt=M.getClearAlpha(),tt<1&&M.setClearColor(16777215,.5),M.clear(),kt&&Ft.render(V);let At=M.toneMapping;M.toneMapping=bi;let Ht=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),u.setupLightsView(H),at===!0&&it.setGlobalState(M.clippingPlanes,H),rs(y,V,H),w.updateMultisampleRenderTarget(st),w.updateRenderTargetMipmap(st),ee.has("WEBGL_multisampled_render_to_texture")===!1){let Yt=!1;for(let Tt=0,ce=L.length;Tt<ce;Tt++){let ge=L[Tt],ye=ge.object,qe=ge.geometry,de=ge.material,Ct=ge.group;if(de.side===En&&ye.layers.test(H.layers)){let Sn=de.side;de.side=en,de.needsUpdate=!0,Pr(ye,V,H,qe,de,Ct),de.side=Sn,de.needsUpdate=!0,Yt=!0}}Yt===!0&&(w.updateMultisampleRenderTarget(st),w.updateRenderTargetMipmap(st))}M.setRenderTarget(Et),M.setClearColor(q,tt),Ht!==void 0&&(H.viewport=Ht),M.toneMapping=At}function rs(y,L,V){let H=L.isScene===!0?L.overrideMaterial:null;for(let U=0,st=y.length;U<st;U++){let _t=y[U],Et=_t.object,At=_t.geometry,Ht=H===null?_t.material:H,Yt=_t.group;Et.layers.test(V.layers)&&Pr(Et,L,V,At,Ht,Yt)}}function Pr(y,L,V,H,U,st){y.onBeforeRender(M,L,V,H,U,st),y.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),U.onBeforeRender(M,L,V,H,y,st),U.transparent===!0&&U.side===En&&U.forceSinglePass===!1?(U.side=en,U.needsUpdate=!0,M.renderBufferDirect(V,L,H,U,y,st),U.side=wi,U.needsUpdate=!0,M.renderBufferDirect(V,L,H,U,y,st),U.side=En):M.renderBufferDirect(V,L,H,U,y,st),y.onAfterRender(M,L,V,H,U,st)}function Li(y,L,V){L.isScene!==!0&&(L=bt);let H=Nt.get(y),U=u.state.lights,st=u.state.shadowsArray,_t=U.state.version,Et=Rt.getParameters(y,U.state,st,L,V),At=Rt.getProgramCacheKey(Et),Ht=H.programs;H.environment=y.isMeshStandardMaterial?L.environment:null,H.fog=L.fog,H.envMap=(y.isMeshStandardMaterial?z:_).get(y.envMap||H.environment),H.envMapRotation=H.environment!==null&&y.envMap===null?L.environmentRotation:y.envMapRotation,Ht===void 0&&(y.addEventListener("dispose",qt),Ht=new Map,H.programs=Ht);let Yt=Ht.get(At);if(Yt!==void 0){if(H.currentProgram===Yt&&H.lightsStateVersion===_t)return tr(y,Et),Yt}else Et.uniforms=Rt.getUniforms(y),y.onBeforeCompile(Et,M),Yt=Rt.acquireProgram(Et,At),Ht.set(At,Yt),H.uniforms=Et.uniforms;let Tt=H.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Tt.clippingPlanes=it.uniform),tr(y,Et),H.needsLights=nr(y),H.lightsStateVersion=_t,H.needsLights&&(Tt.ambientLightColor.value=U.state.ambient,Tt.lightProbe.value=U.state.probe,Tt.directionalLights.value=U.state.directional,Tt.directionalLightShadows.value=U.state.directionalShadow,Tt.spotLights.value=U.state.spot,Tt.spotLightShadows.value=U.state.spotShadow,Tt.rectAreaLights.value=U.state.rectArea,Tt.ltc_1.value=U.state.rectAreaLTC1,Tt.ltc_2.value=U.state.rectAreaLTC2,Tt.pointLights.value=U.state.point,Tt.pointLightShadows.value=U.state.pointShadow,Tt.hemisphereLights.value=U.state.hemi,Tt.directionalShadowMap.value=U.state.directionalShadowMap,Tt.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Tt.spotShadowMap.value=U.state.spotShadowMap,Tt.spotLightMatrix.value=U.state.spotLightMatrix,Tt.spotLightMap.value=U.state.spotLightMap,Tt.pointShadowMap.value=U.state.pointShadowMap,Tt.pointShadowMatrix.value=U.state.pointShadowMatrix),H.currentProgram=Yt,H.uniformsList=null,Yt}function as(y){if(y.uniformsList===null){let L=y.currentProgram.getUniforms();y.uniformsList=Ns.seqWithValue(L.seq,y.uniforms)}return y.uniformsList}function tr(y,L){let V=Nt.get(y);V.outputColorSpace=L.outputColorSpace,V.batching=L.batching,V.batchingColor=L.batchingColor,V.instancing=L.instancing,V.instancingColor=L.instancingColor,V.instancingMorph=L.instancingMorph,V.skinning=L.skinning,V.morphTargets=L.morphTargets,V.morphNormals=L.morphNormals,V.morphColors=L.morphColors,V.morphTargetsCount=L.morphTargetsCount,V.numClippingPlanes=L.numClippingPlanes,V.numIntersection=L.numClipIntersection,V.vertexAlphas=L.vertexAlphas,V.vertexTangents=L.vertexTangents,V.toneMapping=L.toneMapping}function er(y,L,V,H,U){L.isScene!==!0&&(L=bt),w.resetTextureUnits();let st=L.fog,_t=H.isMeshStandardMaterial?L.environment:null,Et=N===null?M.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:Js,At=(H.isMeshStandardMaterial?z:_).get(H.envMap||_t),Ht=H.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Yt=!!V.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Tt=!!V.morphAttributes.position,ce=!!V.morphAttributes.normal,ge=!!V.morphAttributes.color,ye=bi;H.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(ye=M.toneMapping);let qe=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,de=qe!==void 0?qe.length:0,Ct=Nt.get(H),Sn=u.state.lights;if(at===!0&&(wt===!0||y!==v)){let fn=y===v&&H.id===S;it.setState(H,y,fn)}let he=!1;H.version===Ct.__version?(Ct.needsLights&&Ct.lightsStateVersion!==Sn.state.version||Ct.outputColorSpace!==Et||U.isBatchedMesh&&Ct.batching===!1||!U.isBatchedMesh&&Ct.batching===!0||U.isBatchedMesh&&Ct.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Ct.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Ct.instancing===!1||!U.isInstancedMesh&&Ct.instancing===!0||U.isSkinnedMesh&&Ct.skinning===!1||!U.isSkinnedMesh&&Ct.skinning===!0||U.isInstancedMesh&&Ct.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Ct.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Ct.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Ct.instancingMorph===!1&&U.morphTexture!==null||Ct.envMap!==At||H.fog===!0&&Ct.fog!==st||Ct.numClippingPlanes!==void 0&&(Ct.numClippingPlanes!==it.numPlanes||Ct.numIntersection!==it.numIntersection)||Ct.vertexAlphas!==Ht||Ct.vertexTangents!==Yt||Ct.morphTargets!==Tt||Ct.morphNormals!==ce||Ct.morphColors!==ge||Ct.toneMapping!==ye||Ct.morphTargetsCount!==de)&&(he=!0):(he=!0,Ct.__version=H.version);let un=Ct.currentProgram;he===!0&&(un=Li(H,L,U));let bn=!1,Be=!1,di=!1,ae=un.getUniforms(),ze=Ct.uniforms;if(Dt.useProgram(un.program)&&(bn=!0,Be=!0,di=!0),H.id!==S&&(S=H.id,Be=!0),bn||v!==y){Dt.buffers.depth.getReversed()?(ct.copy(y.projectionMatrix),Qd(ct),tf(ct),ae.setValue(O,"projectionMatrix",ct)):ae.setValue(O,"projectionMatrix",y.projectionMatrix),ae.setValue(O,"viewMatrix",y.matrixWorldInverse);let Vn=ae.map.cameraPosition;Vn!==void 0&&Vn.setValue(O,Wt.setFromMatrixPosition(y.matrixWorld)),ne.logarithmicDepthBuffer&&ae.setValue(O,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&ae.setValue(O,"isOrthographic",y.isOrthographicCamera===!0),v!==y&&(v=y,Be=!0,di=!0)}if(U.isSkinnedMesh){ae.setOptional(O,U,"bindMatrix"),ae.setOptional(O,U,"bindMatrixInverse");let fn=U.skeleton;fn&&(fn.boneTexture===null&&fn.computeBoneTexture(),ae.setValue(O,"boneTexture",fn.boneTexture,w))}U.isBatchedMesh&&(ae.setOptional(O,U,"batchingTexture"),ae.setValue(O,"batchingTexture",U._matricesTexture,w),ae.setOptional(O,U,"batchingIdTexture"),ae.setValue(O,"batchingIdTexture",U._indirectTexture,w),ae.setOptional(O,U,"batchingColorTexture"),U._colorsTexture!==null&&ae.setValue(O,"batchingColorTexture",U._colorsTexture,w));let dn=V.morphAttributes;if((dn.position!==void 0||dn.normal!==void 0||dn.color!==void 0)&&Vt.update(U,V,un),(Be||Ct.receiveShadow!==U.receiveShadow)&&(Ct.receiveShadow=U.receiveShadow,ae.setValue(O,"receiveShadow",U.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(ze.envMap.value=At,ze.flipEnvMap.value=At.isCubeTexture&&At.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&L.environment!==null&&(ze.envMapIntensity.value=L.environmentIntensity),Be&&(ae.setValue(O,"toneMappingExposure",M.toneMappingExposure),Ct.needsLights&&Di(ze,di),st&&H.fog===!0&&pt.refreshFogUniforms(ze,st),pt.refreshMaterialUniforms(ze,H,X,rt,u.state.transmissionRenderTarget[y.id]),Ns.upload(O,as(Ct),ze,w)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Ns.upload(O,as(Ct),ze,w),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&ae.setValue(O,"center",U.center),ae.setValue(O,"modelViewMatrix",U.modelViewMatrix),ae.setValue(O,"normalMatrix",U.normalMatrix),ae.setValue(O,"modelMatrix",U.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){let fn=H.uniformsGroups;for(let Vn=0,Hn=fn.length;Vn<Hn;Vn++){let ke=fn[Vn];I.update(ke,un),I.bind(ke,un)}}return un}function Di(y,L){y.ambientLightColor.needsUpdate=L,y.lightProbe.needsUpdate=L,y.directionalLights.needsUpdate=L,y.directionalLightShadows.needsUpdate=L,y.pointLights.needsUpdate=L,y.pointLightShadows.needsUpdate=L,y.spotLights.needsUpdate=L,y.spotLightShadows.needsUpdate=L,y.rectAreaLights.needsUpdate=L,y.hemisphereLights.needsUpdate=L}function nr(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(y,L,V){Nt.get(y.texture).__webglTexture=L,Nt.get(y.depthTexture).__webglTexture=V;let H=Nt.get(y);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=V===void 0,H.__autoAllocateDepthBuffer||ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(y,L){let V=Nt.get(y);V.__webglFramebuffer=L,V.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(y,L=0,V=0){N=y,C=L,R=V;let H=!0,U=null,st=!1,_t=!1;if(y){let At=Nt.get(y);if(At.__useDefaultFramebuffer!==void 0)Dt.bindFramebuffer(O.FRAMEBUFFER,null),H=!1;else if(At.__webglFramebuffer===void 0)w.setupRenderTarget(y);else if(At.__hasExternalTextures)w.rebindTextures(y,Nt.get(y.texture).__webglTexture,Nt.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){let Tt=y.depthTexture;if(At.__boundDepthTexture!==Tt){if(Tt!==null&&Nt.has(Tt)&&(y.width!==Tt.image.width||y.height!==Tt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(y)}}let Ht=y.texture;(Ht.isData3DTexture||Ht.isDataArrayTexture||Ht.isCompressedArrayTexture)&&(_t=!0);let Yt=Nt.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Yt[L])?U=Yt[L][V]:U=Yt[L],st=!0):y.samples>0&&w.useMultisampledRTT(y)===!1?U=Nt.get(y).__webglMultisampledFramebuffer:Array.isArray(Yt)?U=Yt[V]:U=Yt,P.copy(y.viewport),G.copy(y.scissor),B=y.scissorTest}else P.copy(Pt).multiplyScalar(X).floor(),G.copy(te).multiplyScalar(X).floor(),B=me;if(Dt.bindFramebuffer(O.FRAMEBUFFER,U)&&H&&Dt.drawBuffers(y,U),Dt.viewport(P),Dt.scissor(G),Dt.setScissorTest(B),st){let At=Nt.get(y.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+L,At.__webglTexture,V)}else if(_t){let At=Nt.get(y.texture),Ht=L||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,At.__webglTexture,V||0,Ht)}S=-1},this.readRenderTargetPixels=function(y,L,V,H,U,st,_t){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Et=Nt.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&_t!==void 0&&(Et=Et[_t]),Et){Dt.bindFramebuffer(O.FRAMEBUFFER,Et);try{let At=y.texture,Ht=At.format,Yt=At.type;if(!ne.textureFormatReadable(Ht)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ne.textureTypeReadable(Yt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=y.width-H&&V>=0&&V<=y.height-U&&O.readPixels(L,V,H,U,Xt.convert(Ht),Xt.convert(Yt),st)}finally{let At=N!==null?Nt.get(N).__webglFramebuffer:null;Dt.bindFramebuffer(O.FRAMEBUFFER,At)}}},this.readRenderTargetPixelsAsync=async function(y,L,V,H,U,st,_t){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Et=Nt.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&_t!==void 0&&(Et=Et[_t]),Et){let At=y.texture,Ht=At.format,Yt=At.type;if(!ne.textureFormatReadable(Ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ne.textureTypeReadable(Yt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(L>=0&&L<=y.width-H&&V>=0&&V<=y.height-U){Dt.bindFramebuffer(O.FRAMEBUFFER,Et);let Tt=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Tt),O.bufferData(O.PIXEL_PACK_BUFFER,st.byteLength,O.STREAM_READ),O.readPixels(L,V,H,U,Xt.convert(Ht),Xt.convert(Yt),0);let ce=N!==null?Nt.get(N).__webglFramebuffer:null;Dt.bindFramebuffer(O.FRAMEBUFFER,ce);let ge=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await jd(O,ge,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Tt),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,st),O.deleteBuffer(Tt),O.deleteSync(ge),st}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(y,L=null,V=0){y.isTexture!==!0&&(dr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),L=arguments[0]||null,y=arguments[1]);let H=Math.pow(2,-V),U=Math.floor(y.image.width*H),st=Math.floor(y.image.height*H),_t=L!==null?L.x:0,Et=L!==null?L.y:0;w.setTexture2D(y,0),O.copyTexSubImage2D(O.TEXTURE_2D,V,0,0,_t,Et,U,st),Dt.unbindTexture()},this.copyTextureToTexture=function(y,L,V=null,H=null,U=0){y.isTexture!==!0&&(dr("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,y=arguments[1],L=arguments[2],U=arguments[3]||0,V=null);let st,_t,Et,At,Ht,Yt,Tt,ce,ge,ye=y.isCompressedTexture?y.mipmaps[U]:y.image;V!==null?(st=V.max.x-V.min.x,_t=V.max.y-V.min.y,Et=V.isBox3?V.max.z-V.min.z:1,At=V.min.x,Ht=V.min.y,Yt=V.isBox3?V.min.z:0):(st=ye.width,_t=ye.height,Et=ye.depth||1,At=0,Ht=0,Yt=0),H!==null?(Tt=H.x,ce=H.y,ge=H.z):(Tt=0,ce=0,ge=0);let qe=Xt.convert(L.format),de=Xt.convert(L.type),Ct;L.isData3DTexture?(w.setTexture3D(L,0),Ct=O.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(w.setTexture2DArray(L,0),Ct=O.TEXTURE_2D_ARRAY):(w.setTexture2D(L,0),Ct=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,L.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,L.unpackAlignment);let Sn=O.getParameter(O.UNPACK_ROW_LENGTH),he=O.getParameter(O.UNPACK_IMAGE_HEIGHT),un=O.getParameter(O.UNPACK_SKIP_PIXELS),bn=O.getParameter(O.UNPACK_SKIP_ROWS),Be=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,ye.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ye.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,At),O.pixelStorei(O.UNPACK_SKIP_ROWS,Ht),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Yt);let di=y.isDataArrayTexture||y.isData3DTexture,ae=L.isDataArrayTexture||L.isData3DTexture;if(y.isRenderTargetTexture||y.isDepthTexture){let ze=Nt.get(y),dn=Nt.get(L),fn=Nt.get(ze.__renderTarget),Vn=Nt.get(dn.__renderTarget);Dt.bindFramebuffer(O.READ_FRAMEBUFFER,fn.__webglFramebuffer),Dt.bindFramebuffer(O.DRAW_FRAMEBUFFER,Vn.__webglFramebuffer);for(let Hn=0;Hn<Et;Hn++)di&&O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Nt.get(y).__webglTexture,U,Yt+Hn),y.isDepthTexture?(ae&&O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Nt.get(L).__webglTexture,U,ge+Hn),O.blitFramebuffer(At,Ht,st,_t,Tt,ce,st,_t,O.DEPTH_BUFFER_BIT,O.NEAREST)):ae?O.copyTexSubImage3D(Ct,U,Tt,ce,ge+Hn,At,Ht,st,_t):O.copyTexSubImage2D(Ct,U,Tt,ce,ge+Hn,At,Ht,st,_t);Dt.bindFramebuffer(O.READ_FRAMEBUFFER,null),Dt.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else ae?y.isDataTexture||y.isData3DTexture?O.texSubImage3D(Ct,U,Tt,ce,ge,st,_t,Et,qe,de,ye.data):L.isCompressedArrayTexture?O.compressedTexSubImage3D(Ct,U,Tt,ce,ge,st,_t,Et,qe,ye.data):O.texSubImage3D(Ct,U,Tt,ce,ge,st,_t,Et,qe,de,ye):y.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,U,Tt,ce,st,_t,qe,de,ye.data):y.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,U,Tt,ce,ye.width,ye.height,qe,ye.data):O.texSubImage2D(O.TEXTURE_2D,U,Tt,ce,st,_t,qe,de,ye);O.pixelStorei(O.UNPACK_ROW_LENGTH,Sn),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,he),O.pixelStorei(O.UNPACK_SKIP_PIXELS,un),O.pixelStorei(O.UNPACK_SKIP_ROWS,bn),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Be),U===0&&L.generateMipmaps&&O.generateMipmap(Ct),Dt.unbindTexture()},this.copyTextureToTexture3D=function(y,L,V=null,H=null,U=0){return y.isTexture!==!0&&(dr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,H=arguments[1]||null,y=arguments[2],L=arguments[3],U=arguments[4]||0),dr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(y,L,V,H,U)},this.initRenderTarget=function(y){Nt.get(y).__webglFramebuffer===void 0&&w.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?w.setTextureCube(y,0):y.isData3DTexture?w.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?w.setTexture2DArray(y,0):w.setTexture2D(y,0),Dt.unbindTexture()},this.resetState=function(){C=0,R=0,N=null,Dt.reset(),pe.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=ue._getDrawingBufferColorSpace(t),e.unpackColorSpace=ue._getUnpackColorSpace()}};var Aa=class extends Ne{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ui,this.environmentIntensity=1,this.environmentRotation=new ui,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Ca=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ll,this.updateRanges=[],this.version=0,this.uuid=ri()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ri()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ri()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},rn=new A,An=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)rn.fromBufferAttribute(this,e),rn.applyMatrix4(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)rn.fromBufferAttribute(this,e),rn.applyNormalMatrix(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)rn.fromBufferAttribute(this,e),rn.transformDirection(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Fn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=_e(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=_e(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=_e(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=_e(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=_e(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Fn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Fn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Fn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Fn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=_e(e,this.array),n=_e(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=_e(e,this.array),n=_e(n,this.array),s=_e(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=_e(e,this.array),n=_e(n,this.array),s=_e(s,this.array),r=_e(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Mn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Zi=class extends Ei{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Lt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Ts,cr=new A,As=new A,Cs=new A,Rs=new lt,hr=new lt,Cu=new Ae,na=new A,ur=new A,ia=new A,Jh=new lt,ko=new lt,$h=new lt,Ws=class extends Ne{constructor(t=new Zi){if(super(),this.isSprite=!0,this.type="Sprite",Ts===void 0){Ts=new nn;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ca(e,5);Ts.setIndex([0,1,2,0,2,3]),Ts.setAttribute("position",new An(n,3,0,!1)),Ts.setAttribute("uv",new An(n,2,3,!1))}this.geometry=Ts,this.material=t,this.center=new lt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),As.setFromMatrixScale(this.matrixWorld),Cu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Cs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&As.multiplyScalar(-Cs.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;sa(na.set(-.5,-.5,0),Cs,a,As,s,r),sa(ur.set(.5,-.5,0),Cs,a,As,s,r),sa(ia.set(.5,.5,0),Cs,a,As,s,r),Jh.set(0,0),ko.set(1,0),$h.set(1,1);let o=t.ray.intersectTriangle(na,ur,ia,!1,cr);if(o===null&&(sa(ur.set(-.5,.5,0),Cs,a,As,s,r),ko.set(0,1),o=t.ray.intersectTriangle(na,ia,ur,!1,cr),o===null))return;let l=t.ray.origin.distanceTo(cr);l<t.near||l>t.far||e.push({distance:l,point:cr.clone(),uv:ni.getInterpolation(cr,na,ur,ia,Jh,ko,$h,new lt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function sa(i,t,e,n,s,r){Rs.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(hr.x=r*Rs.x-s*Rs.y,hr.y=s*Rs.x+r*Rs.y):hr.copy(Rs),i.copy(t),i.x+=hr.x,i.y+=hr.y,i.applyMatrix4(Cu)}var Ra=class extends cn{constructor(t=null,e=1,n=1,s,r,a,o,l,c=ln,h=ln,d,f){super(null,a,o,l,c,h,s,r,d,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Pa=class extends cn{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Cn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],f=n[s+1]-h,p=(a-h)/f;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new lt:new A);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new A,s=[],r=[],a=[],o=new A,l=new Ae;for(let p=0;p<=t;p++){let g=p/t;s[p]=this.getTangentAt(g,new A)}r[0]=new A,a[0]=new A;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(Fe(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,g))}a[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(Fe(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(p=-p);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],p*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},br=class extends Cn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new lt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=l-this.aX,p=c-this.aY;l=f*h-p*d+this.aX,c=f*d+p*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Jl=class extends br{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function wc(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,d){let f=(a-r)/c-(o-r)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+d)+(l-o)/d;f*=h,p*=h,s(a,o,f,p)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var ra=new A,Vo=new wc,Ho=new wc,Go=new wc,Xs=class extends Cn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new A){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(ra.subVectors(s[0],s[1]).add(s[0]),c=ra);let d=s[o%r],f=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(ra.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=ra),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(d),p),x=Math.pow(d.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(h),p);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),Vo.initNonuniformCatmullRom(c.x,d.x,f.x,h.x,g,x,m),Ho.initNonuniformCatmullRom(c.y,d.y,f.y,h.y,g,x,m),Go.initNonuniformCatmullRom(c.z,d.z,f.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(Vo.initCatmullRom(c.x,d.x,f.x,h.x,this.tension),Ho.initCatmullRom(c.y,d.y,f.y,h.y,this.tension),Go.initCatmullRom(c.z,d.z,f.z,h.z,this.tension));return n.set(Vo.calc(l),Ho.calc(l),Go.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new A().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Kh(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function Z0(i,t){let e=1-i;return e*e*t}function J0(i,t){return 2*(1-i)*i*t}function $0(i,t){return i*i*t}function gr(i,t,e,n){return Z0(i,t)+J0(i,e)+$0(i,n)}function K0(i,t){let e=1-i;return e*e*e*t}function j0(i,t){let e=1-i;return 3*e*e*i*t}function Q0(i,t){return 3*(1-i)*i*i*t}function t_(i,t){return i*i*i*t}function _r(i,t,e,n,s){return K0(i,t)+j0(i,e)+Q0(i,n)+t_(i,s)}var Ia=class extends Cn{constructor(t=new lt,e=new lt,n=new lt,s=new lt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new lt){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(_r(t,s.x,r.x,a.x,o.x),_r(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},$l=class extends Cn{constructor(t=new A,e=new A,n=new A,s=new A){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new A){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(_r(t,s.x,r.x,a.x,o.x),_r(t,s.y,r.y,a.y,o.y),_r(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},La=class extends Cn{constructor(t=new lt,e=new lt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new lt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new lt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Kl=class extends Cn{constructor(t=new A,e=new A){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new A){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new A){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Da=class extends Cn{constructor(t=new lt,e=new lt,n=new lt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new lt){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(gr(t,s.x,r.x,a.x),gr(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},jl=class extends Cn{constructor(t=new A,e=new A,n=new A){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new A){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(gr(t,s.x,r.x,a.x),gr(t,s.y,r.y,a.y),gr(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ua=class extends Cn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new lt){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return n.set(Kh(o,l.x,c.x,h.x,d.x),Kh(o,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new lt().fromArray(s))}return this}},jh=Object.freeze({__proto__:null,ArcCurve:Jl,CatmullRomCurve3:Xs,CubicBezierCurve:Ia,CubicBezierCurve3:$l,EllipseCurve:br,LineCurve:La,LineCurve3:Kl,QuadraticBezierCurve:Da,QuadraticBezierCurve3:jl,SplineCurve:Ua}),Ql=class extends Cn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new jh[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new jh[s.type]().fromJSON(s))}return this}},tc=class extends Ql{constructor(t){super(),this.type="Path",this.currentPoint=new lt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new La(this.currentPoint.clone(),new lt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Da(this.currentPoint.clone(),new lt(t,e),new lt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new Ia(this.currentPoint.clone(),new lt(t,e),new lt(n,s),new lt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Ua(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){let c=new br(t,e,n,s,r,a,o,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},ec=class i extends nn{constructor(t=[new lt(0,-.5),new lt(.5,0),new lt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Fe(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/e,d=new A,f=new lt,p=new A,g=new A,x=new A,m=0,u=0;for(let T=0;T<=t.length-1;T++)switch(T){case 0:m=t[T+1].x-t[T].x,u=t[T+1].y-t[T].y,p.x=u*1,p.y=-m,p.z=u*0,x.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case t.length-1:l.push(x.x,x.y,x.z);break;default:m=t[T+1].x-t[T].x,u=t[T+1].y-t[T].y,p.x=u*1,p.y=-m,p.z=u*0,g.copy(p),p.x+=x.x,p.y+=x.y,p.z+=x.z,p.normalize(),l.push(p.x,p.y,p.z),x.copy(g)}for(let T=0;T<=e;T++){let E=n+T*h*s,M=Math.sin(E),D=Math.cos(E);for(let C=0;C<=t.length-1;C++){d.x=t[C].x*M,d.y=t[C].y,d.z=t[C].x*D,a.push(d.x,d.y,d.z),f.x=T/e,f.y=C/(t.length-1),o.push(f.x,f.y);let R=l[3*C+0]*M,N=l[3*C+1],S=l[3*C+0]*D;c.push(R,N,S)}}for(let T=0;T<e;T++)for(let E=0;E<t.length-1;E++){let M=E+T*t.length,D=M,C=M+t.length,R=M+t.length+1,N=M+1;r.push(D,C,N),r.push(R,N,C)}this.setIndex(r),this.setAttribute("position",new xe(a,3)),this.setAttribute("uv",new xe(o,2)),this.setAttribute("normal",new xe(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}},qs=class i extends ec{constructor(t=1,e=1,n=4,s=8){let r=new tc;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new i(t.radius,t.length,t.capSegments,t.radialSegments)}},Ti=class i extends nn{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new A,h=new lt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,f=3;d<=e;d++,f+=3){let p=n+d/e*s;c.x=t*Math.cos(p),c.y=t*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[f]/t+1)/2,h.y=(a[f+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new xe(a,3)),this.setAttribute("normal",new xe(o,3)),this.setAttribute("uv",new xe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Ge=class i extends nn{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],f=[],p=[],g=0,x=[],m=n/2,u=0;T(),a===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new xe(d,3)),this.setAttribute("normal",new xe(f,3)),this.setAttribute("uv",new xe(p,2));function T(){let M=new A,D=new A,C=0,R=(e-t)/n;for(let N=0;N<=r;N++){let S=[],v=N/r,P=v*(e-t)+t;for(let G=0;G<=s;G++){let B=G/s,q=B*l+o,tt=Math.sin(q),Y=Math.cos(q);D.x=P*tt,D.y=-v*n+m,D.z=P*Y,d.push(D.x,D.y,D.z),M.set(tt,R,Y).normalize(),f.push(M.x,M.y,M.z),p.push(B,1-v),S.push(g++)}x.push(S)}for(let N=0;N<s;N++)for(let S=0;S<r;S++){let v=x[S][N],P=x[S+1][N],G=x[S+1][N+1],B=x[S][N+1];(t>0||S!==0)&&(h.push(v,P,B),C+=3),(e>0||S!==r-1)&&(h.push(P,G,B),C+=3)}c.addGroup(u,C,0),u+=C}function E(M){let D=g,C=new lt,R=new A,N=0,S=M===!0?t:e,v=M===!0?1:-1;for(let G=1;G<=s;G++)d.push(0,m*v,0),f.push(0,v,0),p.push(.5,.5),g++;let P=g;for(let G=0;G<=s;G++){let q=G/s*l+o,tt=Math.cos(q),Y=Math.sin(q);R.x=S*Y,R.y=m*v,R.z=S*tt,d.push(R.x,R.y,R.z),f.push(0,v,0),C.x=tt*.5+.5,C.y=Y*.5*v+.5,p.push(C.x,C.y),g++}for(let G=0;G<s;G++){let B=D+G,q=P+G;M===!0?h.push(q,q+1,B):h.push(q+1,q,B),N+=3}c.addGroup(u,N,M===!0?1:2),u+=N}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ys=class i extends Ge{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var aa=new A,oa=new A,Wo=new A,la=new ni,wr=class extends nn{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let s=Math.pow(10,4),r=Math.cos(Ds*e),a=t.getIndex(),o=t.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],d=new Array(3),f={},p=[];for(let g=0;g<l;g+=3){a?(c[0]=a.getX(g),c[1]=a.getX(g+1),c[2]=a.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);let{a:x,b:m,c:u}=la;if(x.fromBufferAttribute(o,c[0]),m.fromBufferAttribute(o,c[1]),u.fromBufferAttribute(o,c[2]),la.getNormal(Wo),d[0]=`${Math.round(x.x*s)},${Math.round(x.y*s)},${Math.round(x.z*s)}`,d[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,d[2]=`${Math.round(u.x*s)},${Math.round(u.y*s)},${Math.round(u.z*s)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let T=0;T<3;T++){let E=(T+1)%3,M=d[T],D=d[E],C=la[h[T]],R=la[h[E]],N=`${M}_${D}`,S=`${D}_${M}`;S in f&&f[S]?(Wo.dot(f[S].normal)<=r&&(p.push(C.x,C.y,C.z),p.push(R.x,R.y,R.z)),f[S]=null):N in f||(f[N]={index0:c[T],index1:c[E],normal:Wo.clone()})}}for(let g in f)if(f[g]){let{index0:x,index1:m}=f[g];aa.fromBufferAttribute(o,x),oa.fromBufferAttribute(o,m),p.push(aa.x,aa.y,aa.z),p.push(oa.x,oa.y,oa.z)}this.setAttribute("position",new xe(p,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};var Na=class i extends nn{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],c=[],h=[],d=t,f=(e-t)/s,p=new A,g=new lt;for(let x=0;x<=s;x++){for(let m=0;m<=n;m++){let u=r+m/n*a;p.x=d*Math.cos(u),p.y=d*Math.sin(u),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/e+1)/2,g.y=(p.y/e+1)/2,h.push(g.x,g.y)}d+=f}for(let x=0;x<s;x++){let m=x*(n+1);for(let u=0;u<n;u++){let T=u+m,E=T,M=T+n+1,D=T+n+2,C=T+1;o.push(E,M,C),o.push(M,D,C)}}this.setIndex(o),this.setAttribute("position",new xe(l,3)),this.setAttribute("normal",new xe(c,3)),this.setAttribute("uv",new xe(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var Ai=class i extends nn{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],d=new A,f=new A,p=[],g=[],x=[],m=[];for(let u=0;u<=n;u++){let T=[],E=u/n,M=0;u===0&&a===0?M=.5/e:u===n&&l===Math.PI&&(M=-.5/e);for(let D=0;D<=e;D++){let C=D/e;d.x=-t*Math.cos(s+C*r)*Math.sin(a+E*o),d.y=t*Math.cos(a+E*o),d.z=t*Math.sin(s+C*r)*Math.sin(a+E*o),g.push(d.x,d.y,d.z),f.copy(d).normalize(),x.push(f.x,f.y,f.z),m.push(C+M,1-E),T.push(c++)}h.push(T)}for(let u=0;u<n;u++)for(let T=0;T<e;T++){let E=h[u][T+1],M=h[u][T],D=h[u+1][T],C=h[u+1][T+1];(u!==0||a>0)&&p.push(E,M,C),(u!==n-1||l<Math.PI)&&p.push(M,D,C)}this.setIndex(p),this.setAttribute("position",new xe(g,3)),this.setAttribute("normal",new xe(x,3)),this.setAttribute("uv",new xe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Oa=class extends nn{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){let e=[],n=new Set,s=new A,r=new A;if(t.index!==null){let a=t.attributes.position,o=t.index,l=t.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let d=l[c],f=d.start,p=d.count;for(let g=f,x=f+p;g<x;g+=3)for(let m=0;m<3;m++){let u=o.getX(g+m),T=o.getX(g+(m+1)%3);s.fromBufferAttribute(a,u),r.fromBufferAttribute(a,T),Qh(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}}else{let a=t.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){let h=3*o+c,d=3*o+(c+1)%3;s.fromBufferAttribute(a,h),r.fromBufferAttribute(a,d),Qh(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new xe(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};function Qh(i,t,e){let n=`${i.x},${i.y},${i.z}-${t.x},${t.y},${t.z}`,s=`${t.x},${t.y},${t.z}-${i.x},${i.y},${i.z}`;return e.has(n)===!0||e.has(s)===!0?!1:(e.add(n),e.add(s),!0)}var Fa=class extends Ei{static get type(){return"MeshToonMaterial"}constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.color=new Lt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xu,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};function ca(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function e_(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Zs=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},nc=class extends Zs{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Qc,endingEnd:Qc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case th:r=t,o=2*e-n;break;case eh:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case th:a=t,l=2*n-e;break;case eh:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(n-e)/(s-e),x=g*g,m=x*g,u=-f*m+2*f*x-f*g,T=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*g+1,E=(-1-p)*m+(1.5+p)*x+.5*g,M=p*m-p*x;for(let D=0;D!==o;++D)r[D]=u*a[h+D]+T*a[c+D]+E*a[l+D]+M*a[d+D];return r}},ic=class extends Zs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),d=1-h;for(let f=0;f!==o;++f)r[f]=a[c+f]*d+a[l+f]*h;return r}},sc=class extends Zs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},kn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ca(e,this.TimeBufferType),this.values=ca(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ca(t.times,Array),values:ca(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new sc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ic(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new nc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case ga:e=this.InterpolantFactoryMethodDiscrete;break;case Il:e=this.InterpolantFactoryMethodLinear;break;case fo:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ga;case this.InterpolantFactoryMethodLinear:return Il;case this.InterpolantFactoryMethodSmooth:return fo}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&e_(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===fo,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let d=o*n,f=d-n,p=d+n;for(let g=0;g!==n;++g){let x=e[d+g];if(x!==e[f+g]||x!==e[p+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let d=o*n,f=a*n;for(let p=0;p!==n;++p)e[f+p]=e[d+p]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};kn.prototype.TimeBufferType=Float32Array;kn.prototype.ValueBufferType=Float32Array;kn.prototype.DefaultInterpolation=Il;var Ji=class extends kn{constructor(t,e,n){super(t,e,n)}};Ji.prototype.ValueTypeName="bool";Ji.prototype.ValueBufferType=Array;Ji.prototype.DefaultInterpolation=ga;Ji.prototype.InterpolantFactoryMethodLinear=void 0;Ji.prototype.InterpolantFactoryMethodSmooth=void 0;var rc=class extends kn{};rc.prototype.ValueTypeName="color";var ac=class extends kn{};ac.prototype.ValueTypeName="number";var oc=class extends Zs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)zn.slerpFlat(r,0,a,c-o,a,c,l);return r}},Ba=class extends kn{InterpolantFactoryMethodLinear(t){return new oc(this.times,this.values,this.getValueSize(),t)}};Ba.prototype.ValueTypeName="quaternion";Ba.prototype.InterpolantFactoryMethodSmooth=void 0;var $i=class extends kn{constructor(t,e,n){super(t,e,n)}};$i.prototype.ValueTypeName="string";$i.prototype.ValueBufferType=Array;$i.prototype.DefaultInterpolation=ga;$i.prototype.InterpolantFactoryMethodLinear=void 0;$i.prototype.InterpolantFactoryMethodSmooth=void 0;var lc=class extends kn{};lc.prototype.ValueTypeName="vector";var tu={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},cc=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=c.length;d<f;d+=2){let p=c[d],g=c[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}},n_=new cc,Er=class{constructor(t){this.manager=t!==void 0?t:n_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Er.DEFAULT_MATERIAL_NAME="__DEFAULT";var hc=class extends Er{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,a=tu.get(t);if(a!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0),a;let o=vr("img");function l(){h(),tu.add(t,this),e&&e(this),r.manager.itemEnd(t)}function c(d){h(),s&&s(d),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(t),o.src=t,o}};var za=class extends Er{constructor(t){super(t)}load(t,e,n,s){let r=new cn,a=new hc(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}},ka=class extends Ne{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Lt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Va=class extends ka{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ne.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Lt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Xo=new Ae,eu=new A,nu=new A,uc=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new lt(512,512),this.map=null,this.mapPass=null,this.matrix=new Ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Sr,this._frameExtents=new lt(1,1),this._viewportCount=1,this._viewports=[new Se(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;eu.setFromMatrixPosition(t.matrixWorld),e.position.copy(eu),nu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(nu),e.updateMatrixWorld(),Xo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Xo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var dc=class extends uc{constructor(){super(new Gs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ha=class extends ka{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ne.DEFAULT_UP),this.updateMatrix(),this.target=new Ne,this.shadow=new dc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Ga=class extends nn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var Ec="\\[\\]\\.:\\/",i_=new RegExp("["+Ec+"]","g"),Tc="[^"+Ec+"]",s_="[^"+Ec.replace("\\.","")+"]",r_=/((?:WC+[\/:])*)/.source.replace("WC",Tc),a_=/(WCOD+)?/.source.replace("WCOD",s_),o_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Tc),l_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Tc),c_=new RegExp("^"+r_+a_+o_+l_+"$"),h_=["material","materials","bones","map"],fc=class{constructor(t,e,n){let s=n||Ie.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ie=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(i_,"")}static parseTrackName(t){let e=c_.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);h_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ie.Composite=fc;Ie.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ie.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ie.prototype.GetterByBindingType=[Ie.prototype._getValue_direct,Ie.prototype._getValue_array,Ie.prototype._getValue_arrayElement,Ie.prototype._getValue_toArray];Ie.prototype.SetterByBindingTypeAndVersioning=[[Ie.prototype._setValue_direct,Ie.prototype._setValue_direct_setNeedsUpdate,Ie.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ie.prototype._setValue_array,Ie.prototype._setValue_array_setNeedsUpdate,Ie.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ie.prototype._setValue_arrayElement,Ie.prototype._setValue_arrayElement_setNeedsUpdate,Ie.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ie.prototype._setValue_fromArray,Ie.prototype._setValue_fromArray_setNeedsUpdate,Ie.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var I_=new Float32Array(1);var Ki=class extends Ca{constructor(t,e,n=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){let e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){let e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}};var iu=new Ae,Wa=class{constructor(t,e,n=0,s=1/0){this.ray=new Vs(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Mr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return iu.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(iu),this}intersectObject(t,e=!0,n=[]){return pc(t,this,n,e),n.sort(su),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)pc(t[s],this,n,e);return n.sort(su),n}};function su(i,t){return i.distance-t.distance}function pc(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)pc(r[a],t,e,!0)}}var Tr=class{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Fe(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var ru=new A,ha=new A,Xa=class{constructor(t=new A,e=new A){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){ru.subVectors(t,this.start),ha.subVectors(this.end,this.start);let n=ha.dot(ha),r=ha.dot(ru)/n;return e&&(r=Fe(r,0,1)),r}closestPointToPoint(t,e,n){let s=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(s).add(this.start)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};var qa=class extends li{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}};typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:mc}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=mc);var Ru={type:"change"},Cc={type:"start"},Iu={type:"end"},Qa=new Vs,Pu=new On,u_=Math.cos(70*$a.DEG2RAD),We=new A,gn=2*Math.PI,be={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ac=1e-6,to=class extends qa{constructor(t,e=null){super(t,e),this.state=be.NONE,this.enabled=!0,this.target=new A,this.cursor=new A,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ji.ROTATE,MIDDLE:ji.DOLLY,RIGHT:ji.PAN},this.touches={ONE:Qi.ROTATE,TWO:Qi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new A,this._lastQuaternion=new zn,this._lastTargetPosition=new A,this._quat=new zn().setFromUnitVectors(t.up,new A(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Tr,this._sphericalDelta=new Tr,this._scale=1,this._panOffset=new A,this._rotateStart=new lt,this._rotateEnd=new lt,this._rotateDelta=new lt,this._panStart=new lt,this._panEnd=new lt,this._panDelta=new lt,this._dollyStart=new lt,this._dollyEnd=new lt,this._dollyDelta=new lt,this._dollyDirection=new A,this._mouse=new lt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=f_.bind(this),this._onPointerDown=d_.bind(this),this._onPointerUp=p_.bind(this),this._onContextMenu=M_.bind(this),this._onMouseWheel=__.bind(this),this._onKeyDown=x_.bind(this),this._onTouchStart=y_.bind(this),this._onTouchMove=v_.bind(this),this._onMouseDown=m_.bind(this),this._onMouseMove=g_.bind(this),this._interceptControlDown=S_.bind(this),this._interceptControlUp=b_.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Ru),this.update(),this.state=be.NONE}update(t=null){let e=this.object.position;We.copy(e).sub(this.target),We.applyQuaternion(this._quat),this._spherical.setFromVector3(We),this.autoRotate&&this.state===be.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=gn:n>Math.PI&&(n-=gn),s<-Math.PI?s+=gn:s>Math.PI&&(s-=gn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(We.setFromSpherical(this._spherical),We.applyQuaternion(this._quatInverse),e.copy(this.target).add(We),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=We.length();a=this._clampDistance(o*this._scale);let l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let o=new A(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new A(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=We.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Qa.origin.copy(this.object.position),Qa.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Qa.direction))<u_?this.object.lookAt(this.target):(Pu.setFromNormalAndCoplanarPoint(this.object.up,this.target),Qa.intersectPlane(Pu,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Ac||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ac||this._lastTargetPosition.distanceToSquared(this.target)>Ac?(this.dispatchEvent(Ru),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?gn/60*this.autoRotateSpeed*t:gn/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){We.setFromMatrixColumn(e,0),We.multiplyScalar(-t),this._panOffset.add(We)}_panUp(t,e){this.screenSpacePanning===!0?We.setFromMatrixColumn(e,1):(We.setFromMatrixColumn(e,0),We.crossVectors(this.object.up,We)),We.multiplyScalar(t),this._panOffset.add(We)}_pan(t,e){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;We.copy(s).sub(this.target);let r=We.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(gn*this._rotateDelta.x/e.clientHeight),this._rotateUp(gn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(gn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-gn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(gn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-gn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(gn*this._rotateDelta.x/e.clientHeight),this._rotateUp(gn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new lt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function d_(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function f_(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function p_(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Iu),this.state=be.NONE;break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function m_(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case ji.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=be.DOLLY;break;case ji.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=be.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=be.ROTATE}break;case ji.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=be.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=be.PAN}break;default:this.state=be.NONE}this.state!==be.NONE&&this.dispatchEvent(Cc)}function g_(i){switch(this.state){case be.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case be.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case be.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function __(i){this.enabled===!1||this.enableZoom===!1||this.state!==be.NONE||(i.preventDefault(),this.dispatchEvent(Cc),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Iu))}function x_(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function y_(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Qi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=be.TOUCH_ROTATE;break;case Qi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=be.TOUCH_PAN;break;default:this.state=be.NONE}break;case 2:switch(this.touches.TWO){case Qi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=be.TOUCH_DOLLY_PAN;break;case Qi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=be.TOUCH_DOLLY_ROTATE;break;default:this.state=be.NONE}break;default:this.state=be.NONE}this.state!==be.NONE&&this.dispatchEvent(Cc)}function v_(i){switch(this._trackPointer(i),this.state){case be.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case be.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case be.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case be.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=be.NONE}}function M_(i){this.enabled!==!1&&i.preventDefault()}function S_(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function b_(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Lu=new Tn,eo=new A,Ci=class extends Ga{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";let t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],e=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new xe(t,3)),this.setAttribute("uv",new xe(e,2))}applyMatrix4(t){let e=this.attributes.instanceStart,n=this.attributes.instanceEnd;return e!==void 0&&(e.applyMatrix4(t),n.applyMatrix4(t),e.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new Ki(e,6,1);return this.setAttribute("instanceStart",new An(n,3,0)),this.setAttribute("instanceEnd",new An(n,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new Ki(e,6,1);return this.setAttribute("instanceColorStart",new An(n,3,0)),this.setAttribute("instanceColorEnd",new An(n,3,3)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new Oa(t.geometry)),this}fromLineSegments(t){let e=t.geometry;return this.setPositions(e.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Tn);let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;t!==void 0&&e!==void 0&&(this.boundingBox.setFromBufferAttribute(t),Lu.setFromBufferAttribute(e),this.boundingBox.union(Lu))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hi),this.boundingBox===null&&this.computeBoundingBox();let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;if(t!==void 0&&e!==void 0){let n=this.boundingSphere.center;this.boundingBox.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)eo.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(eo)),eo.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(eo));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(t){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(t)}};ht.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new lt(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};on.line={uniforms:Ka.merge([ht.common,ht.fog,ht.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			float alpha = opacity;

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};var Ks=class extends mn{static get type(){return"LineMaterial"}constructor(t){super({uniforms:Ka.clone(on.line.uniforms),vertexShader:on.line.vertexShader,fragmentShader:on.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(t)}get color(){return this.uniforms.diffuse.value}set color(t){this.uniforms.diffuse.value=t}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(t){t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(t){this.uniforms.linewidth&&(this.uniforms.linewidth.value=t)}get dashed(){return"USE_DASH"in this.defines}set dashed(t){t===!0!==this.dashed&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(t){this.uniforms.dashScale.value=t}get dashSize(){return this.uniforms.dashSize.value}set dashSize(t){this.uniforms.dashSize.value=t}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(t){this.uniforms.dashOffset.value=t}get gapSize(){return this.uniforms.gapSize.value}set gapSize(t){this.uniforms.gapSize.value=t}get opacity(){return this.uniforms.opacity.value}set opacity(t){this.uniforms&&(this.uniforms.opacity.value=t)}get resolution(){return this.uniforms.resolution.value}set resolution(t){this.uniforms.resolution.value.copy(t)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(t){this.defines&&(t===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),t===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}};var Rc=new Se,Du=new A,Uu=new A,Je=new Se,$e=new Se,qn=new Se,Pc=new A,Ic=new Ae,Ke=new Xa,Nu=new A,no=new Tn,io=new hi,Yn=new Se,Zn,ts;function Ou(i,t,e){return Yn.set(0,0,-t,1).applyMatrix4(i.projectionMatrix),Yn.multiplyScalar(1/Yn.w),Yn.x=ts/e.width,Yn.y=ts/e.height,Yn.applyMatrix4(i.projectionMatrixInverse),Yn.multiplyScalar(1/Yn.w),Math.abs(Math.max(Yn.x,Yn.y))}function w_(i,t){let e=i.matrixWorld,n=i.geometry,s=n.attributes.instanceStart,r=n.attributes.instanceEnd,a=Math.min(n.instanceCount,s.count);for(let o=0,l=a;o<l;o++){Ke.start.fromBufferAttribute(s,o),Ke.end.fromBufferAttribute(r,o),Ke.applyMatrix4(e);let c=new A,h=new A;Zn.distanceSqToSegment(Ke.start,Ke.end,h,c),h.distanceTo(c)<ts*.5&&t.push({point:h,pointOnLine:c,distance:Zn.origin.distanceTo(h),object:i,face:null,faceIndex:o,uv:null,uv1:null})}}function E_(i,t,e){let n=t.projectionMatrix,r=i.material.resolution,a=i.matrixWorld,o=i.geometry,l=o.attributes.instanceStart,c=o.attributes.instanceEnd,h=Math.min(o.instanceCount,l.count),d=-t.near;Zn.at(1,qn),qn.w=1,qn.applyMatrix4(t.matrixWorldInverse),qn.applyMatrix4(n),qn.multiplyScalar(1/qn.w),qn.x*=r.x/2,qn.y*=r.y/2,qn.z=0,Pc.copy(qn),Ic.multiplyMatrices(t.matrixWorldInverse,a);for(let f=0,p=h;f<p;f++){if(Je.fromBufferAttribute(l,f),$e.fromBufferAttribute(c,f),Je.w=1,$e.w=1,Je.applyMatrix4(Ic),$e.applyMatrix4(Ic),Je.z>d&&$e.z>d)continue;if(Je.z>d){let E=Je.z-$e.z,M=(Je.z-d)/E;Je.lerp($e,M)}else if($e.z>d){let E=$e.z-Je.z,M=($e.z-d)/E;$e.lerp(Je,M)}Je.applyMatrix4(n),$e.applyMatrix4(n),Je.multiplyScalar(1/Je.w),$e.multiplyScalar(1/$e.w),Je.x*=r.x/2,Je.y*=r.y/2,$e.x*=r.x/2,$e.y*=r.y/2,Ke.start.copy(Je),Ke.start.z=0,Ke.end.copy($e),Ke.end.z=0;let x=Ke.closestPointToPointParameter(Pc,!0);Ke.at(x,Nu);let m=$a.lerp(Je.z,$e.z,x),u=m>=-1&&m<=1,T=Pc.distanceTo(Nu)<ts*.5;if(u&&T){Ke.start.fromBufferAttribute(l,f),Ke.end.fromBufferAttribute(c,f),Ke.start.applyMatrix4(a),Ke.end.applyMatrix4(a);let E=new A,M=new A;Zn.distanceSqToSegment(Ke.start,Ke.end,M,E),e.push({point:M,pointOnLine:E,distance:Zn.origin.distanceTo(M),object:i,face:null,faceIndex:f,uv:null,uv1:null})}}}var js=class extends le{constructor(t=new Ci,e=new Ks({color:Math.random()*16777215})){super(t,e),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let t=this.geometry,e=t.attributes.instanceStart,n=t.attributes.instanceEnd,s=new Float32Array(2*e.count);for(let a=0,o=0,l=e.count;a<l;a++,o+=2)Du.fromBufferAttribute(e,a),Uu.fromBufferAttribute(n,a),s[o]=o===0?0:s[o-1],s[o+1]=s[o]+Du.distanceTo(Uu);let r=new Ki(s,2,1);return t.setAttribute("instanceDistanceStart",new An(r,1,0)),t.setAttribute("instanceDistanceEnd",new An(r,1,1)),this}raycast(t,e){let n=this.material.worldUnits,s=t.camera;s===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');let r=t.params.Line2!==void 0&&t.params.Line2.threshold||0;Zn=t.ray;let a=this.matrixWorld,o=this.geometry,l=this.material;ts=l.linewidth+r,o.boundingSphere===null&&o.computeBoundingSphere(),io.copy(o.boundingSphere).applyMatrix4(a);let c;if(n)c=ts*.5;else{let d=Math.max(s.near,io.distanceToPoint(Zn.origin));c=Ou(s,d,l.resolution)}if(io.radius+=c,Zn.intersectsSphere(io)===!1)return;o.boundingBox===null&&o.computeBoundingBox(),no.copy(o.boundingBox).applyMatrix4(a);let h;if(n)h=ts*.5;else{let d=Math.max(s.near,no.distanceToPoint(Zn.origin));h=Ou(s,d,l.resolution)}no.expandByScalar(h),Zn.intersectsBox(no)!==!1&&(n?w_(this,e):E_(this,s,e))}onBeforeRender(t){let e=this.material.uniforms;e&&e.resolution&&(t.getViewport(Rc),this.material.uniforms.resolution.value.set(Rc.z,Rc.w))}};var Oc="#262b33",gt={ground:"#f4f5f7",road:"#e3e6eb",lot:"#f8f9fb",mark:"#ffffff",concrete:"#dcdfe4",metal:"#d5d9df",metalDark:"#aeb4bd",housing:"#3b4048",cabinet:"#d8dce2",cabinetIn:"#454b54",pcb:"#3f9d58",battery:"#c3c8d0",dome:"#f3f4f6",glass:"#2b3038",red:"#e5483d",amber:"#f6c21c",green:"#27a55a",cloud:"#c3def5",cloudInk:"#3f6fa3",brand:"#2446a6",alert:"#d92d20"},It=new A(4.4,.5,4.4),Rn=7.4,so=new A(1,1.02,1.5).normalize(),ro=new A(1.9,3,-.5);function T_(){let i=new Ra(new Uint8Array([172,222,255]),3,1,Za);return i.minFilter=i.magFilter=ln,i.needsUpdate=!0,i}var A_=T_(),Lc=new Map;function ao(i,t={}){let e=i+JSON.stringify(t);return Lc.has(e)||Lc.set(e,new Fa({color:i,gradientMap:A_,...t})),Lc.get(e)}var Dc=new Map;function Nc(i,t=Oc){let e=i+t;return Dc.has(e)||Dc.set(e,new mn({uniforms:{t:{value:i},c:{value:new Lt(t)}},vertexShader:"uniform float t; void main(){ gl_Position = projectionMatrix * modelViewMatrix * vec4(position + normal * t, 1.0); }",fragmentShader:"uniform vec3 c; void main(){ gl_FragColor = vec4(c, 1.0); }",side:en})),Dc.get(e)}var Fu=[];function Rr(i=1.6,t=Oc){let e=new Ks({color:new Lt(t).getHex(),linewidth:i});return e.userData.w=i,Fu.push(e),e}var Bu=Rr(1.7),es=Rr(1.1,"#9aa1ab");function Ut(i,t,{hull:e=0,edges:n=!0,lines:s=Bu,angle:r=30,mat:a}={}){let o=new Te,l=new le(i,a||ao(t));if(o.add(l),e&&o.add(new le(i,Nc(e))),n){let c=new Ci().fromEdgesGeometry(new wr(i,r));o.add(new js(c,s))}return o.userData.mesh=l,o}var Uc=new Map;function ns(i){return Uc.has(i)||Uc.set(i,new Le({color:i})),Uc.get(i)}function C_(i){let t=i;return()=>(t=t*16807%2147483647)/2147483647}function Mt(i,t,e,n){return i.position.set(t,e,n),i}function Cr(i,t,e,n,s=.02){let r=new le(new Ti(n,24),new Le({color:"#1f2530",transparent:!0,opacity:.07,depthWrite:!1}));return r.rotation.x=-Math.PI/2,r.position.set(t,s,e),i.add(r),r}function Ri(i,t,e){let n=document.createElement("canvas");n.width=i,n.height=t,e(n.getContext("2d"),i,t);let s=new Pa(n);return s.colorSpace=tn,s.anisotropy=4,s}var R_=()=>Ri(640,230,(i,t,e)=>{let n=i.createLinearGradient(0,0,t,0);n.addColorStop(0,"#2e5aa8"),n.addColorStop(.55,"#3a9aa8"),n.addColorStop(1,"#f4d9a0"),i.fillStyle=n,i.fillRect(0,0,t,e),i.fillStyle="#ffffff",i.font='800 34px "Plus Jakarta Sans", system-ui, sans-serif',i.fillText("CIUDAD QUE",28,62),i.fillText("SE CUIDA",28,102),i.globalAlpha=.85,i.font='600 18px "Plus Jakarta Sans", system-ui, sans-serif',i.fillText("Su publicidad aqu\xED",28,142),i.fillText("Escanee el c\xF3digo QR",28,166),i.globalAlpha=1,i.fillStyle="#f08a3c",i.beginPath(),i.roundRect?i.roundRect(28,184,150,28,14):i.rect(28,184,150,28),i.fill(),i.fillStyle="#20314f",i.beginPath(),i.roundRect?i.roundRect(430,34,96,170,14):i.rect(430,34,96,170),i.fill(),i.fillStyle="#9fd3e6",i.fillRect(440,50,76,132),i.fillStyle="#ffffff";for(let s=0;s<4;s++)i.fillRect(450,62+s*28,56,14);i.fillStyle="#e07a3f",i.beginPath(),i.arc(580,70,16,0,7),i.fill(),i.fillStyle="#2e5aa8",i.fillRect(566,90,28,70),i.fillStyle="#2b3a55",i.fillRect(568,160,10,44),i.fillRect(582,160,10,44)}),P_=()=>Ri(64,32,(i,t,e)=>{i.fillStyle="#2f343c",i.fillRect(0,0,t,e)});async function J_(i,t,{parts:e,onSelect:n}){if(document.fonts&&document.fonts.ready)try{await document.fonts.ready}catch{}let s=new Ta({antialias:!0,alpha:!0,powerPreference:"low-power"});s.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),s.outputColorSpace=tn,s.setClearColor(0,0),i.prepend(s.domElement);let r=new Aa,a=new Gs(-10,10,10,-10,.1,400),o=new to(a,s.domElement);o.enableDamping=!0,o.dampingFactor=.1,o.enablePan=!1,o.minZoom=.8,o.maxZoom=2.6,o.minPolarAngle=.72,o.maxPolarAngle=1.2;let l=Math.atan2(so.x,so.z);o.minAzimuthAngle=l-.7,o.maxAzimuthAngle=l+.7,o.target.copy(ro),a.position.copy(ro).addScaledVector(so,60);let c=new Va("#ffffff","#cfd4dc",1.55);r.add(c);let h=new Ha("#ffffff",1.25);h.position.set(-6,14,10),r.add(h);let d=new Te;r.add(d);let f=new le(new Xn(120,120),new Le({color:gt.road}));f.rotation.x=-Math.PI/2,d.add(f);let p=22,g=3.6;for(let b of[-1,1])for(let F of[-1,1]){let k=Ut(new Zt(p,.14,p),gt.lot,{lines:es,mat:ns(gt.lot)});Mt(k,b*(g+p/2),.07,F*(g+p/2)),d.add(k)}let x=new Zt(1.6,.02,.16);for(let b=-20;b<=20;b+=3.2){if(Math.abs(b)<5.5)continue;d.add(Mt(Ut(x,gt.mark,{lines:es,mat:ns(gt.mark)}),b,.02,0));let F=Ut(x,gt.mark,{lines:es,mat:ns(gt.mark)});F.rotation.y=Math.PI/2,d.add(Mt(F,0,.02,b))}let m=new Zt(.34,.02,1.9);for(let b=-2.7;b<=2.8;b+=.62)for(let F of[-1,1]){d.add(Mt(Ut(m,gt.mark,{lines:es,mat:ns(gt.mark)}),b,.02,F*4.7));let k=Ut(m,gt.mark,{lines:es,mat:ns(gt.mark)});k.rotation.y=Math.PI/2,d.add(Mt(k,F*4.7,.02,b))}let u=new Te;r.add(u);let T={},E=(b,F,k,Z,ot)=>{let nt=new Ne;return nt.position.set(k,Z,ot),F.add(nt),T[b]=nt,nt},M={},D=(b,F)=>(F.traverse(k=>{k.userData.part=b}),(M[b]=M[b]||[]).push(F),F),C={},R=(b,F,k,Z,ot,nt,Ot=nt)=>{let Bt=new Ne;Bt.position.set(k,Z,ot),F.add(Bt),(C[b]=C[b]||[]).push({t:Bt,w:nt,h:Ot})},N=Ut(new Zt(3.4,.36,2.4),gt.concrete);Mt(N,It.x+1,.14+.18,It.z+.55),u.add(N),Cr(u,It.x+1,It.z+.8,2.2,.15);let S=Ut(new Ge(.22,.24,8.1,28),gt.metal,{hull:.05});Mt(S,It.x,It.y+4.05,It.z),u.add(D("poste",S)),u.add(D("poste",Mt(Ut(new Ge(.25,.25,.12,28),gt.metalDark,{hull:.04}),It.x,It.y+8.12,It.z)));let v=Ut(new Ge(.15,.17,8.4,24),gt.metal,{hull:.045});v.rotation.z=Math.PI/2,Mt(v,It.x-4,Rn,It.z),u.add(D("poste",v)),u.add(D("poste",Mt(Ut(new Ge(.19,.19,.14,24),gt.metal,{hull:.04}),It.x-8.2,Rn,It.z)));let P=Ut(new Zt(.62,.62,.62),gt.metalDark);Mt(P,It.x,Rn,It.z),u.add(D("poste",P)),[-.9,-3.3].forEach(b=>{let F=Ut(new Ge(.2,.2,.22,20),gt.metalDark,{hull:.03});F.rotation.z=Math.PI/2,Mt(F,It.x+b,Rn,It.z),u.add(D("poste",F))}),E("poste",u,It.x,It.y+7.9,It.z),R("poste",u,It.x,Rn,It.z,1.9);let G=new Te;u.add(G);let B=new A(It.x-3.1,Rn-1.18,It.z+.05);G.add(Mt(Ut(new Zt(4.4,1.7,.26),"#30353d"),B.x,B.y,B.z));let q=R_(),tt=P_(),Y=new Le({map:q}),rt=new le(new Xn(4.16,1.48),Y);Mt(rt,B.x,B.y,B.z+.135),G.add(rt),[-1.5,1.5].forEach(b=>G.add(Mt(Ut(new Ge(.035,.035,.38,8),gt.metalDark,{hull:.02}),B.x+b,Rn-.24,B.z))),E("pantalla",G,B.x,B.y-.85,B.z+.15),D("pantalla",G),R("pantalla",G,B.x,B.y,B.z+.2,6.2,3.2);let X=[];function ft(b,F,k,Z,ot=1){let nt=new Te;Mt(nt,F,k,Z),nt.scale.setScalar(ot),b.add(nt),nt.add(Ut(new Zt(.66,1.78,.5),gt.housing));let Ot=[gt.red,gt.amber,gt.green].map((Bt,oe)=>{let we=new Lt(Bt).lerp(new Lt("#3b4048"),.86),Pe=new Le({color:we.clone()});Pe.userData={on:new Lt(Bt),off:we};let ie=new le(new Ti(.22,28),Pe);Mt(ie,0,.55-oe*.55,.255),nt.add(ie);let Ue=Ut(new Ge(.27,.27,.22,24,1,!0,0,Math.PI),gt.housing,{hull:0,edges:!0});return Ue.rotation.x=Math.PI/2,Ue.rotation.y=Math.PI,Mt(Ue,0,.6-oe*.55,.36),nt.add(Ue),Pe});return X.push(Ot),nt}let xt=ft(u,It.x-6.6,Rn-1.12,It.z+.02);u.add(Mt(Ut(new Ge(.04,.04,.22,8),gt.metalDark,{hull:.02}),It.x-6.6,Rn-.2,It.z)),E("semaforo",xt,0,-.95,.3),D("semaforo",xt),R("semaforo",xt,0,0,.3,1.8,3);function Pt(b,F,k){let Z=new Te;u.add(Z),Z.add(Mt(Ut(new Zt(.7,.12,.7),gt.concrete),b,.2,F)),Z.add(Mt(Ut(new Ge(.14,.16,6,22),gt.metal,{hull:.04}),b,3.2,F));let ot=Ut(new Ge(.1,.11,4.2,18),gt.metal,{hull:.035});ot.rotation.z=Math.PI/2,Mt(ot,b+k*2.1,5.8,F),Z.add(ot);let nt=D("semaforo",ft(Z,b+k*3.6,5.2,F+.02,.72));return R("semaforo",nt,0,0,.3,1.35,2.2),Cr(Z,b,F,.6,.15),Z}Pt(-4.4,-4.4,1);let te=Pt(4.4,-4.4,-1);function me(b,F,k,Z,ot){let nt=new Te;Mt(nt,F,k,Z),b.add(nt);let Ot=Ut(new Ge(.13,.13,.62,18),gt.dome,{hull:.025});Ot.rotation.x=Math.PI/2,Mt(Ot,0,0,.2),nt.add(Ot);let Bt=Ut(new Zt(.32,.05,.7),gt.metal);Mt(Bt,0,.16,.22),nt.add(Bt);let oe=new le(new Ti(.09,18),new Le({color:gt.glass}));Mt(oe,0,0,.515),nt.add(oe);let we=Ut(new Zt(.1,.3,.1),gt.metalDark);return Mt(we,0,-.1,-.12),nt.add(we),nt.lookAt(ot),nt}let $=D("bala",me(u,-4.15,3.9,-4.15,new A(2,0,3))),at=D("bala",me(te,4.15,3.9,-4.15,new A(-2,0,3)));R("bala",$,0,0,.2,1.5),R("bala",at,0,0,.2,1.5),E("bala",at,0,.05,.35);let wt=Ut(new Zt(.14,.14,1.1),gt.metalDark);wt.rotation.y=-Math.PI/4,Mt(wt,It.x-.39,It.y+4.62,It.z+.39),u.add(D("ptz",wt));let ct=new Te;Mt(ct,It.x-.78,It.y+4.2,It.z+.78),u.add(ct),ct.add(Mt(Ut(new Ge(.4,.44,.46,26),gt.dome,{hull:.035}),0,.14,0));let zt=Ut(new Ai(.41,26,14,0,Math.PI*2,Math.PI/2,Math.PI/2),gt.glass,{hull:.035,edges:!1});ct.add(zt);let Wt=new Ne;ct.add(Wt),E("ptz",ct,0,-.15,.2),D("ptz",ct),R("ptz",ct,0,0,0,2);let jt=Ut(new Zt(.7,.85,.42),gt.cabinet);Mt(jt,It.x+.42,It.y+4.45,It.z+.28),u.add(D("poste",jt)),[.12,.26].forEach(b=>u.add(D("poste",Mt(Ut(new Ge(.035,.035,3.7,8),"#8b929c",{hull:.018}),It.x+.3+b,It.y+2.2,It.z+.34))));let bt=new A(It.x+1.55,It.y+1.1,It.z+.75),kt=new Te;u.add(kt),kt.add(Mt(Ut(new Zt(1.5,2.2,.85),gt.cabinet),bt.x,bt.y,bt.z)),kt.add(Mt(new le(new Xn(1.36,2.06),ao(gt.cabinetIn)),bt.x,bt.y,bt.z+.43));let Re=Ut(new Zt(1.2,.7,.04),gt.pcb);Mt(Re,bt.x,bt.y+.58,bt.z+.45),kt.add(Re),[[-.35,.68],[.05,.52],[.34,.72],[-.1,.8]].forEach(([b,F])=>kt.add(Mt(Ut(new Zt(.2,.16,.06),"#1f2a24"),bt.x+b,bt.y+F,bt.z+.49)));let O=new le(new Ti(.035,12),new Le({color:gt.green}));Mt(O,bt.x+.5,bt.y+.85,bt.z+.48),kt.add(O),kt.add(Mt(Ut(new Zt(1.26,.05,.3),gt.metalDark),bt.x,bt.y+.12,bt.z+.3));let sn=[];for(let b=0;b<3;b++)for(let F=0;F<2;F++){let k=ao(gt.battery,{emissive:new Lt("#000000")}).clone();sn.push(k);let Z=Ut(new Zt(.56,.28,.3),gt.battery,{mat:k});Mt(Z,bt.x-.3+F*.6,bt.y-.25-b*.32,bt.z+.3),kt.add(Z)}let ee=new Te;Mt(ee,bt.x+.75,bt.y,bt.z+.43),kt.add(ee);let ne=Ut(new Zt(1.5,2.16,.05),gt.cabinet);Mt(ne,-.75,0,.03),ee.add(ne);for(let b=0;b<6;b++)ne.add(Mt(Ut(new Zt(.5,.03,.02),"#b7bdc6",{lines:es}),-.2,.7-b*.12,.035));ee.rotation.y=1.95;for(let b=0;b<7;b++)kt.add(Mt(Ut(new Zt(.02,.03,.5),"#b7bdc6",{lines:es}),bt.x-.76,bt.y+.6-b*.12,bt.z));E("caja",kt,bt.x+.1,bt.y+.4,bt.z+.5),D("caja",kt),R("caja",kt,bt.x+.3,bt.y,bt.z+.3,3.8,4);let Dt=new A(12.4,5,1.5),se=new Te;Mt(se,Dt.x,Dt.y,Dt.z),se.scale.setScalar(1.3),r.add(se),[[0,0,0,.95],[-.95,-.2,.1,.72],[.95,-.25,.05,.7],[.3,.55,-.1,.72],[-.45,.45,0,.6]].forEach(([b,F,k,Z])=>{let ot=new Ai(Z,22,16);se.add(Mt(new le(ot,ao(gt.cloud)),b,F,k)),se.add(Mt(new le(ot,Nc(.06,gt.cloudInk)),b,F,k))});let Nt=Ri(256,256,(b,F)=>{b.fillStyle="#ffffff",b.strokeStyle=gt.cloudInk,b.lineWidth=10,b.beginPath(),b.arc(F/2,F/2,F/2-8,0,Math.PI*2),b.fill(),b.stroke()}),w=new Ws(new Zi({map:Nt,depthTest:!1,depthWrite:!1,transparent:!0}));w.scale.set(1.45,1.45,1),w.position.set(0,.08,0),w.renderOrder=4,se.add(w);let _=new za().load(new URL("images/logo-192.webp",document.baseURI).href);_.colorSpace=tn,_.anisotropy=4;let z=new Ws(new Zi({map:_,depthTest:!1,depthWrite:!1,transparent:!0}));z.scale.set(.96,1,1),z.position.set(0,.08,0),z.renderOrder=5,se.add(z),D("nube",se),E("nube",se,0,1.25,0),R("nube",se,0,.1,0,6.4,4.4);function K(b,F,k){let Z=new le(new Ys(.16,.42,14),new Le({color:k}));Z.position.copy(b),Z.lookAt(b.clone().add(b.clone().sub(F))),Z.rotateX(Math.PI/2),r.add(Z)}function et(b,F=Oc,k=!1){let Z=new Xs(b.map(Bt=>new A(...Bt)),!1,"catmullrom",.05),ot=Z.getPoints(40),nt=[];for(let Bt=0;Bt<ot.length-1;Bt++)nt.push(ot[Bt].x,ot[Bt].y,ot[Bt].z,ot[Bt+1].x,ot[Bt+1].y,ot[Bt+1].z);let Ot=new Ci;return Ot.setPositions(nt),r.add(new js(Ot,Rr(1.8,F))),K(ot[ot.length-1],ot[ot.length-3],F),k&&K(ot[0],ot[2],F),Z}let J=et([[bt.x+.95,.62,bt.z+.25],[8.9,.6,5.5],[10.7,1.8,3.8],[11.5,3.55,2.45]],"#33485f",!0),Rt=Ri(64,128,(b,F,k)=>{let Z=b.createLinearGradient(0,0,0,k);Z.addColorStop(0,"rgba(255,244,214,0.85)"),Z.addColorStop(1,"rgba(255,244,214,0)"),b.fillStyle=Z,b.beginPath(),b.moveTo(F*.36,0),b.lineTo(F*.64,0),b.lineTo(F*.97,k),b.lineTo(F*.03,k),b.closePath(),b.fill()}),pt=[],yt=new Le({color:"#fff3c4"});function re(b,F,k,Z=.55){[-Z,Z].forEach(Ot=>b.add(Mt(new le(new Zt(.3,.14,.04),yt),Ot,k,F+.02)));let ot=new Le({map:Rt,transparent:!0,depthWrite:!1,opacity:0}),nt=new le(new Xn(2.6,4.6),ot);nt.rotation.x=-Math.PI/2,Mt(nt,0,.05,F+2.35),b.add(nt),pt.push(ot)}function it(b,F,k,Z=.3,ot=.22){F.forEach(nt=>k.forEach(Ot=>{let Bt=Ut(new Ge(Z,Z,ot,16),"#3b4048",{hull:.02});Bt.rotation.z=Math.PI/2,b.add(Mt(Bt,nt,Z,Ot))}))}function vt(b){let F=new Te;return F.add(Mt(Ut(new Zt(1.7,.55,3.4),b),0,.55,0)),F.add(Mt(Ut(new Zt(1.45,.5,1.8),"#e9eef5"),0,1.05,-.15)),it(F,[-.8,.8],[1.1,-1.1]),re(F,1.7,.62),Cr(F,0,0,1.6,.02),r.add(F),F}function Ft(){let b=new Te,F="#f7f8fa";b.add(Mt(Ut(new Zt(1.8,1.45,2.7),F),0,1.05,-.5)),b.add(Mt(Ut(new Zt(1.72,.95,1.25),F),0,.8,1.45)),b.add(Mt(Ut(new Zt(1.5,.42,.05),"#2b3038"),0,1.08,2.09)),b.add(Mt(Ut(new Zt(1.84,.18,2.74),gt.alert),0,.78,-.5)),b.add(Mt(Ut(new Zt(.9,.04,.26),gt.alert),0,1.79,-.6)),b.add(Mt(Ut(new Zt(.26,.04,.9),gt.alert),0,1.79,-.6));let k=new Le({color:gt.alert}),Z=new Le({color:"#3a6fe0"});return b.add(Mt(Ut(new Zt(.55,.18,.28),gt.alert,{mat:k}),-.32,1.86,.62)),b.add(Mt(Ut(new Zt(.55,.18,.28),"#3a6fe0",{mat:Z}),.32,1.86,.62)),it(b,[-.82,.82],[1.25,-1.2],.34,.24),re(b,2.07,.62,.58),Cr(b,0,.2,2.2,.02),b.userData.flash=[k,Z],r.add(b),b}function Vt(){let b=new Te;return b.add(Mt(Ut(new Zt(.2,.3,1.3),"#3b4a60"),0,.6,0)),b.add(Mt(Ut(new Zt(.34,.24,.55),"#5d6b80"),0,.82,.22)),b.add(Mt(Ut(new Zt(.3,.1,.55),"#2b3038"),0,.8,-.3)),b.add(Mt(Ut(new Zt(.72,.05,.05),"#2b3038"),0,1.02,.55)),[.62,-.62].forEach(F=>{let k=Ut(new Ge(.32,.32,.12,16),"#2b3038",{hull:.02});k.rotation.z=Math.PI/2,b.add(Mt(k,0,.32,F))}),b.add(Mt(new le(new Zt(.14,.1,.04),yt),0,.86,.8)),r.add(b),b}let St=[{g:vt("#a9c7ea"),axis:"z",dir:-1,lane:1.6,p:16,v:4,speed:4.2},{g:vt("#dfe4ec"),axis:"x",dir:1,lane:-1.6,p:-14,v:4,speed:3.8}],Jt={torso:new qs(.19,.36,4,10),head:new Ai(.15,14,10),arm:new qs(.06,.5,3,8).translate(0,-.31,0),leg:new qs(.085,.63,3,8).translate(0,-.4,0)},Xt=["#e6b98f","#c99a6e","#a87a55","#f0c9a5"];function pe(b,{pants:F="#3b4a60",skin:k=Xt[0],parent:Z=r}={}){let ot=new Te;Z.add(ot);let nt=new Te;ot.add(nt);let Ot=(Ue,_n,Gn,us,Jn)=>{let Q=Ut(Ue,_n,{hull:.025,edges:!1});return Mt(Q,us,Jn,0),Gn.add(Q),Q},Bt=(Ue,_n)=>{let Gn=new Te;return Mt(Gn,Ue,_n,0),nt.add(Gn),Gn},oe=Bt(-.1,.8),we=Bt(.1,.8),Pe=Bt(-.27,1.43),ie=Bt(.27,1.43);return Ot(Jt.leg,F,oe,0,0),Ot(Jt.leg,F,we,0,0),Ot(Jt.arm,b,Pe,0,0),Ot(Jt.arm,b,ie,0,0),Ot(Jt.torso,b,nt,0,1.16).scale.set(1,1,.78),Ot(Jt.head,k,nt,0,1.7),Cr(ot,0,0,.42,.16),{pivot:ot,body:nt,hipL:oe,hipR:we,shL:Pe,shR:ie,phase:0,fallen:0}}function I(b,F,k=0){let Z=b.fallDir||-1,ot=Math.sin(b.phase)*.6*F;b.hipL.rotation.x=ot,b.hipR.rotation.x=-ot,b.shL.rotation.x=-ot*.8,b.shR.rotation.x=ot*.8,b.shL.rotation.z=-(.08+k*1),b.shR.rotation.z=.08+k*1,b.body.rotation.x=Z*k*Math.PI/2*.97,b.body.position.y=k*.2+F*Math.abs(Math.cos(b.phase))*.035}function mt(b){b.hipL.rotation.x=b.hipR.rotation.x=-1.4,b.shL.rotation.x=b.shR.rotation.x=-1.05,b.shL.rotation.z=-.12,b.shR.rotation.z=.12,b.body.rotation.x=.12,b.body.position.y=.02}let W=(b,F)=>Math.abs(b)>g&&Math.abs(F)>g?.14:0,j=[{...pe("#f08a4b"),path:[[-4.4,5],[-4.4,8.6]],s:.1,dirSign:1,speed:.12},{...pe("#5b8def",{skin:Xt[2]}),path:[[-9,4.5],[-5.4,4.5]],s:.4,dirSign:1,speed:.1}],dt=j[0],ut={car:vt("#dfe4ec"),moto:Vt(),amb:Ft(),rider:pe("#46546a",{pants:"#2c3a4f",skin:"#f7f8fa"})};[ut.car,ut.moto,ut.amb,ut.rider.pivot].forEach(b=>{b.visible=!1}),ut.rider.fallDir=1;let qt=new Le({color:"#ffd166",transparent:!0}),Ce=Array.from({length:12},(b,F)=>{let k=new le(new Ai(.07,6,4),qt);k.visible=!1,r.add(k);let Z=F/12*Math.PI*2;return k.userData.v=new A(Math.cos(Z)*(1.4+F%3*.5),2.2+F%4*.5,Math.sin(Z)*(1.4+F%2*.6)),k}),De=new Te;De.visible=!1,r.add(De);let $t=new A(-1.2,0,4.2),hn=["#5b8def","#8fb3e8","#b9c1cd","#6f7d92","#dfe4ec","#f0a36b","#2446a6","#9aa9bd"],Xe=C_(11),Pi=[];for(;Pi.length<26;){let b=Xe()*Math.PI*2,F=Math.sqrt(Xe())*2.25,k=new A($t.x+Math.cos(b)*F,0,$t.z+Math.sin(b)*F);(Pi.every(Z=>Z.distanceTo(k)>.58)||Xe()<.002)&&Pi.push(k)}let Qs=Pi.map((b,F)=>{let k=pe(hn[F%hn.length],{pants:["#3b4a60","#5d6b80","#2c3a4f"][F%3],skin:Xt[F%4],parent:De}),Z=Math.PI*(.35+Xe()*1.3),ot=3.4+Xe()*3.2;k.home=new A($t.x+Math.cos(Z)*ot,0,$t.z+Math.sin(Z)*ot*.8);let nt=Z+(Xe()-.5)*.7,Ot=5.6+Xe()*2.8;return k.out=new A($t.x+Math.cos(nt)*Ot,0,$t.z+Math.sin(nt)*Ot*.8),k.dense=b,k.phase=Xe()*6,k.face=Math.atan2(b.x-k.home.x,b.z-k.home.z),k}),Pn=new Le({color:gt.brand,transparent:!0,opacity:.1,depthWrite:!1}),Ii=new le(new Ti(2.7,48),Pn);Ii.rotation.x=-Math.PI/2,Ii.position.set($t.x,.06,$t.z),De.add(Ii);let is=new Le({color:gt.brand,transparent:!0,opacity:.5,depthWrite:!1}),ss=new le(new Na(2.6,2.76,64),is);ss.rotation.x=-Math.PI/2,ss.position.set($t.x,.07,$t.z),De.add(ss);let rs=Ri(640,230,(b,F,k)=>{b.fillStyle=gt.alert,b.fillRect(0,0,F,k),b.fillStyle="#ffffff",b.font='800 46px "Plus Jakarta Sans", system-ui, sans-serif',b.fillText("ESQUINA LLENA",34,96),b.font='700 32px "Plus Jakarta Sans", system-ui, sans-serif',b.fillText("Use otra ruta",34,152),b.lineWidth=16,b.strokeStyle="#ffffff",b.lineCap="round",b.lineJoin="round",b.beginPath(),b.moveTo(468,118),b.lineTo(592,118),b.moveTo(546,72),b.lineTo(592,118),b.lineTo(546,164),b.stroke()}),Pr=Ri(128,128,(b,F)=>{let k=F/2,Z=b.createRadialGradient(k,k,0,k,k,k);Z.addColorStop(0,"rgba(214,228,255,0.8)"),Z.addColorStop(1,"rgba(214,228,255,0)"),b.fillStyle=Z,b.fillRect(0,0,F,F)}),Li=new Le({map:Pr,transparent:!0,depthWrite:!1,opacity:0}),as=new le(new Xn(7.5,5),Li);as.rotation.x=-Math.PI/2,as.position.set(B.x,.06,B.z+3),r.add(as);let tr=[];function er(b,F,k){let Z=b.distanceTo(F),ot=new Ys(k,Z,24,1,!0);ot.translate(0,-Z/2,0),ot.rotateX(-Math.PI/2);let nt=new le(ot,new Le({color:"#9db8ff",transparent:!0,opacity:0,side:En,depthWrite:!1}));nt.position.copy(b),nt.lookAt(F),nt.visible=!1,r.add(nt),tr.push(nt)}er(new A(It.x-.78,It.y+4.1,It.z+.78),new A(.5,0,1.5),1.9),er(new A(-4.15,3.9,-4.15),new A(1,0,1.8),1.5),er(new A(4.15,3.9,-4.15),new A(-1,0,1.8),1.5);let Di=new Te;Di.visible=!1,r.add(Di);let nr=new Ys(1.4,6,28,1,!0);nr.translate(0,-3,0),nr.rotateX(-Math.PI/2);let y=new le(nr,new Le({color:gt.alert,transparent:!0,opacity:.13,side:En,depthWrite:!1}));Di.add(y);let L=new js(new Ci().fromEdgesGeometry(new wr(new Zt(2.1,.8,1))),Rr(2.2,gt.alert));Di.add(L);let V=new Ne;r.add(V);let H=new Ai(.09,10,8);function U(b,F,k,Z){let ot=new Le({color:F,transparent:!0,opacity:0}),nt=Array.from({length:k},(Ot,Bt)=>{let oe=new le(H,ot);return oe.userData.t=Bt/k,r.add(oe),oe});return{curve:b,dots:nt,m:ot,speed:Z,target:0}}let st=U(J,gt.brand,7,.22),_t=new Xs([new A(bt.x-.2,bt.y+1.1,bt.z),new A(It.x+.34,It.y+2.5,It.z+.34),new A(It.x+.34,Rn-.2,It.z+.3),new A(It.x-3.5,Rn+.22,It.z+.2),new A(It.x-6.6,Rn+.22,It.z+.2)]),Et=U(_t,gt.amber,12,.2),At=[st,Et],Ht=Ri(256,256,(b,F)=>{let k=F/2,Z=b.createRadialGradient(k,k,0,k,k,k);Z.addColorStop(0,"rgba(36,70,166,0)"),Z.addColorStop(.5,"rgba(36,70,166,0.05)"),Z.addColorStop(.72,"rgba(36,70,166,0.4)"),Z.addColorStop(1,"rgba(36,70,166,0)"),b.fillStyle=Z,b.fillRect(0,0,F,F)}),Yt=Ri(256,256,(b,F)=>{b.strokeStyle="#2446a6",b.lineWidth=6,b.beginPath(),b.arc(F/2,F/2,F/2-5,0,Math.PI*2),b.stroke()}),Tt=[];Object.entries(C).forEach(([b,F])=>F.forEach(({t:k,w:Z,h:ot})=>{let nt=(Ot,Bt)=>{let oe=new Ws(new Zi({map:Ot,transparent:!0,depthTest:!1,depthWrite:!1,opacity:0}));return oe.renderOrder=Bt,oe.visible=!1,r.add(oe),oe};Tt.push({id:b,t:k,w:Z,h:ot,glow:nt(Ht,8),ring:nt(Yt,9)})}));let ce=Rr(2.3,gt.brand);function ge(b,F){(M[b]||[]).forEach(k=>k.traverse(Z=>{Z.isLineSegments2&&(Z.material===Bu||Z.userData.inkMat)?F?(Z.userData.inkMat=Z.userData.inkMat||Z.material,Z.material=ce):Z.userData.inkMat&&(Z.material=Z.userData.inkMat):Z.isMesh&&Z.material.uniforms&&Z.material.uniforms.c&&(F?(Z.userData.inkMat=Z.userData.inkMat||Z.material,Z.material=Nc(Z.userData.inkMat.uniforms.t.value,gt.brand)):Z.userData.inkMat&&(Z.material=Z.userData.inkMat))}))}let ye=0,qe=new A;function de(b){let F=(b-ye)/1e3,k=ke?1:Math.min(1,F/.35),Z=1-Math.pow(1-k,3);Tt.forEach(ot=>{let nt=ot.id===os;if(ot.glow.visible=nt,ot.ring.visible=nt&&!ke&&F<2.2,!nt)return;ot.t.getWorldPosition(qe),ot.glow.position.copy(qe),ot.ring.position.copy(qe);let Ot=ke?1:.8+.2*Math.sin(F*2.4);if(ot.glow.material.opacity=Z*Ot,ot.glow.scale.set(ot.w*(.8+.2*Z),ot.h*(.8+.2*Z),1),ot.ring.visible){let Bt=F%1.1/1.1,oe=.55+.6*Bt;ot.ring.scale.set(ot.w*oe,ot.h*oe,1),ot.ring.material.opacity=.85*(1-Bt)}})}let Ct=new Wa,Sn=new lt,he=[];r.traverse(b=>{b.isMesh&&!b.isLineSegments2&&b.userData.part&&he.push(b)});function un(b){let F=s.domElement.getBoundingClientRect();Sn.set((b.clientX-F.left)/F.width*2-1,-((b.clientY-F.top)/F.height)*2+1),Ct.setFromCamera(Sn,a);let k=Ct.intersectObjects(he,!1)[0];return k?k.object.userData.part:null}let bn=null;s.domElement.addEventListener("pointerdown",b=>{bn={x:b.clientX,y:b.clientY,t:performance.now()}}),s.domElement.addEventListener("pointerup",b=>{if(!bn||Math.hypot(b.clientX-bn.x,b.clientY-bn.y)>6||performance.now()-bn.t>500)return;let F=un(b);F&&(n(F),Dr.highlight(F))}),s.domElement.addEventListener("pointermove",b=>{b.pointerType!=="mouse"||b.buttons||(s.domElement.style.cursor=un(b)?"pointer":"")}),t.innerHTML="";let Be=document.createElementNS("http://www.w3.org/2000/svg","svg");Be.setAttribute("class","pointer-events-none absolute inset-0 h-full w-full"),Be.innerHTML='<defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#262b33"/></marker><marker id="arrow-alert" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#d92d20"/></marker></defs>',t.appendChild(Be);let di=e.map(b=>{let F=document.createElement("button");F.type="button",F.className="callout",F.dataset.part=b.id,F.setAttribute("aria-pressed","false"),F.innerHTML=`<span class="callout-n">${b.n}</span><span class="callout-t">${b.label}</span>`,F.addEventListener("click",()=>{n(b.id),Dr.highlight(b.id)}),t.appendChild(F);let k=document.createElementNS("http://www.w3.org/2000/svg","polyline");return k.setAttribute("fill","none"),k.setAttribute("stroke","#262b33"),k.setAttribute("stroke-width","1.6"),k.setAttribute("marker-end","url(#arrow)"),Be.appendChild(k),{...b,el:F,line:k}}),ae=document.createElement("div");ae.className="callout callout-alert",ae.innerHTML='<span class="callout-t">Persona en el suelo. Aviso enviado</span>',ae.style.display="none",t.appendChild(ae);let ze=document.createElementNS("http://www.w3.org/2000/svg","polyline");ze.setAttribute("fill","none"),ze.setAttribute("stroke","#d92d20"),ze.setAttribute("stroke-width","1.8"),ze.setAttribute("marker-end","url(#arrow-alert)"),Be.appendChild(ze);let dn=document.createElement("div");dn.className="batt",dn.style.display="none",dn.innerHTML='<span class="ms batt-i">battery_full</span><span><span class="batt-t">Bater\xEDa del poste</span><span class="batt-v">100 %</span><span class="batt-s">Quedan 5 h 00 min</span></span>',t.appendChild(dn);let fn=dn.querySelector(".batt-i"),Vn=dn.querySelector(".batt-v"),Hn=dn.querySelector(".batt-s"),ke=window.matchMedia("(prefers-reduced-motion: reduce)").matches,zu={choque:11,multitud:7},Fc="normal",os=null,Ir=!1,Bc=0,Ui=0,ir=0,oo=!1,fi=0,sr=100,lo="",zc="",kc=new lt;function Vc(){let b=i.clientWidth,F=i.clientHeight;if(!b||!F)return;s.setSize(b,F,!1);let k=b/F,Z=Math.max(14.5,20.5/k);a.left=-Z*k/2,a.right=Z*k/2,a.top=Z/2,a.bottom=-Z/2,a.updateProjectionMatrix(),s.getDrawingBufferSize(kc);let ot=s.getPixelRatio();Fu.forEach(nt=>{nt.resolution.copy(kc),nt.linewidth=nt.userData.w*ot})}new ResizeObserver(Vc).observe(i),Vc();let Lr=new A;function Hc(b){return b.getWorldPosition(Lr),Lr.project(a),[(Lr.x*.5+.5)*i.clientWidth,(-Lr.y*.5+.5)*i.clientHeight]}function ku(b){let F=b%14;return F<6?{ns:2,ew:0}:F<7.5?{ns:1,ew:0}:F<12.5?{ns:0,ew:2}:{ns:0,ew:1}}let ls=b=>Math.max(0,Math.min(1,b)),Gc=b=>b<.5?4*b*b*b:1-Math.pow(-2*b+2,3)/2,cs={road:new Lt(gt.road),lot:new Lt(gt.lot),mark:new Lt(gt.mark),sky:new Lt("#ffffff"),soil:new Lt("#cfd4dc"),sun:new Lt("#ffffff")},hs={road:new Lt("#26314a"),lot:new Lt("#313d57"),mark:new Lt("#76839b"),sky:new Lt("#8497c9"),soil:new Lt("#232c42"),sun:new Lt("#9db1e3")},Wc=-1;function Vu(b){Math.abs(b-Wc)<.002||(Wc=b,f.material.color.lerpColors(cs.road,hs.road,b),ns(gt.lot).color.lerpColors(cs.lot,hs.lot,b),ns(gt.mark).color.lerpColors(cs.mark,hs.mark,b),c.color.lerpColors(cs.sky,hs.sky,b),c.groundColor.lerpColors(cs.soil,hs.soil,b),c.intensity=1.55-.65*b,h.color.lerpColors(cs.sun,hs.sun,b),h.intensity=1.25-.95*b)}let In=3;function Hu(b,F){let{car:k,moto:Z,amb:ot,rider:nt}=ut,Ot=ir;if(k.visible=Z.visible=nt.pivot.visible=b,ot.visible=b&&Ot>=4.5,Ce.forEach(ie=>{ie.visible=!1}),!b)return;let Bt=Ot<In?0:.25*Math.sin(Math.PI*ls((Ot-In)/.45));k.position.set(Ot<In?-20+5.13*Ot:-4.6-Bt,0,1.2),k.rotation.y=Math.PI/2;let oe=-19.8+7*Ot,we=0,Pe=0;if(Ot>=In){let ie=ls((Ot-In)/.7);oe=1.2+1.7*(1-(1-ie)*(1-ie)),we=1.45*ls((Ot-In)/.35),Pe=.7*ie}if(Z.position.set(-2.6,.14*Math.sin(we),oe),Z.rotation.set(0,Pe,we),Ot<In)nt.pivot.position.set(-2.6,.02,oe-.25),nt.pivot.rotation.y=0,nt.fallen=0,mt(nt);else{let ie=ls((Ot-In)/.6);nt.pivot.position.set(-2.6+.3*ie,.9*Math.sin(Math.PI*ie)*(1-.3*ie),.95+2.65*ie),nt.pivot.rotation.y=.2*ie,nt.fallen=ie,I(nt,0,ie)}if(Ot>=In&&Ot<In+.8){let ie=Ot-In;qt.opacity=1-ie/.8,Ce.forEach(Ue=>{let _n=Ue.userData.v;Ue.visible=!0,Ue.position.set(-2.75+_n.x*ie,.7+_n.y*ie-4.9*ie*ie,1.2+_n.z*ie)})}if(ot.visible){let ie=1-Math.pow(1-ls((Ot-4.5)/4.6),3);ot.position.set(30-29.1*ie,0,1.6),ot.rotation.y=-Math.PI/2;let Ue=ke||Math.floor(F/170)%2===0;ot.userData.flash[0].color.set(Ue?gt.alert:"#5a2420"),ot.userData.flash[1].color.set(Ue?"#23305a":"#3a6fe0")}}function Gu(b,F){if(De.visible=b,!b)return;let k=ir;Qs.forEach((nt,Ot)=>{let Bt,oe,we,Pe;k<5?(Bt=nt.home,oe=nt.dense,we=Gc(k/5),Pe=!0):k<9.5?(Bt=nt.dense,oe=nt.dense,we=1,Pe=!1):(Bt=nt.dense,oe=nt.out,we=Gc(ls((k-9.5)/6)),Pe=k<15.5);let ie=Bt.x+(oe.x-Bt.x)*we,Ue=Bt.z+(oe.z-Bt.z)*we,_n=k>=5&&k<9.5?.05:0;nt.pivot.position.set(ie+_n*Math.sin(k*3+Ot),W(ie,Ue),Ue+_n*Math.cos(k*2.6+Ot*1.7)),Pe&&(nt.face=Math.atan2(oe.x-Bt.x,oe.z-Bt.z),nt.phase+=F*6),nt.pivot.rotation.y=nt.face,I(nt,Pe&&!ke?1:0,0)});let Z=k<5?k/5:k<9.5?1:Math.max(0,1-(k-9.5)/3.5),ot=k>=4.6&&k<12;Pn.color.set(ot?gt.alert:gt.brand),is.color.set(ot?gt.alert:gt.brand),Pn.opacity=.05+.17*Z,is.opacity=.3+.6*Z}let Xc={choque:{ptz:[120,30],semaforo:[-90,-30]},multitud:{ptz:[120,30],pantalla:[150,-20]}},Wu={emergencia:[40,-100],choque:[30,-70],multitud:[-170,-30]},Xu={apagon:["caja","semaforo","pantalla"],emergencia:["ptz","nube"],choque:["ptz","semaforo","nube"],multitud:["ptz","pantalla","nube"]},qc=new A,Ni=new A,co=performance.now();function Yc(b){if(!Ir)return;let F=ke?0:Math.max(0,Math.min(.1,(b-co)/1e3));co=b,Bc+=F,ir+=F;let k=Fc,Z=ir;fi=ke?oo?1:0:fi+((oo?1:0)-fi)*Math.min(1,F*2.5),Vu(fi),Ui=ke?k==="apagon"?1:0:Ui+((k==="apagon"?1:0)-Ui)*Math.min(1,F*3);let ot=k==="multitud"&&Z>=5.5&&Z<13;Y.map=Ui>.5?tt:ot?rs:q;let nt=Ui*(ke?.45:.35+.2*Math.sin(b/300));sn.forEach(Q=>Q.emissive.setRGB(nt*.95,nt*.78,nt*.1)),O.material.color.set(ke||Math.sin(b/200)>0?gt.green:"#1f6b3a"),k==="apagon"&&(sr=Math.max(25,sr-F*(100/150))),pt.forEach(Q=>{Q.opacity=fi*.6}),Li.opacity=fi*(1-Ui)*.55,tr.forEach(Q=>{Q.visible=fi>.02,Q.material.opacity=fi*.1});let Ot=k==="choque"&&Z>=4.2&&Z<11.5?{ns:0,ew:2}:ku(Bc);X.forEach(Q=>Q.forEach((Gt,Ee)=>Gt.color.copy(2-Ee===Ot.ns?Gt.userData.on:Gt.userData.off)));let Bt=k==="normal"||k==="apagon"||k==="emergencia";St.forEach(Q=>{if(Q.g.visible=Bt,!Bt)return;let Gt=(Q.axis==="z"?Ot.ns:Ot.ew)===2,Ee=-6.2-Q.p*Q.dir,fe=!Gt&&Ee>0&&Ee<1.4;Q.v+=((fe?0:Q.speed)-Q.v)*Math.min(1,F*3),Q.p+=Q.v*Q.dir*F,Q.p*Q.dir>32&&(Q.p=-Q.dir*32),Q.axis==="x"?(Q.g.position.set(Q.p,0,Q.lane),Q.g.rotation.y=Q.dir>0?Math.PI/2:-Math.PI/2):(Q.g.position.set(Q.lane,0,Q.p),Q.g.rotation.y=Q.dir>0?0:Math.PI)});let oe=k==="emergencia";j.forEach((Q,Gt)=>{Q.pivot.visible=k!=="multitud",Gt===0&&oe&&Q.s>.5&&(Q.fallen=Math.min(1,Q.fallen+F*1.8)),oe||(Q.fallen=ke?0:Math.max(0,Q.fallen-F*2));let Ee=Q.fallen===0;Ee&&(Q.s+=Q.speed*F*Q.dirSign,Q.s>1&&(Q.s=1,Q.dirSign=-1),Q.s<0&&(Q.s=0,Q.dirSign=1),Q.phase+=F*4.5);let[fe,ve]=Q.path;Q.pivot.position.set(fe[0]+(ve[0]-fe[0])*Q.s,.14,fe[1]+(ve[1]-fe[1])*Q.s),Q.pivot.rotation.y=Math.atan2((ve[0]-fe[0])*Q.dirSign,(ve[1]-fe[1])*Q.dirSign),I(Q,Ee&&!ke?1:0,Q.fallen)}),Hu(k==="choque",b),Gu(k==="multitud",F);let we="",Pe=null,ie=!1;if(oe&&(Pe=dt.fallen>0?dt:null,Ni.copy(dt.pivot.position),ie=!0,dt.fallen>=1&&(we="Persona en el suelo. Aviso enviado")),k==="choque"&&Z>=3.6&&(Pe=ut.rider,Ni.copy(Pe.pivot.position),ie=!0,we=Z<9.4?"Choque detectado. Ambulancia en camino":"Ambulancia en el lugar"),k==="multitud"&&Z>=5.5&&Z<12&&(Ni.copy($t),ie=!0,we="Esquina llena. Protecci\xF3n Civil avisada"),Di.visible=ie,ie&&(ct.getWorldPosition(qc),y.position.copy(qc),y.lookAt(Ni.x,.3,Ni.z)),L.visible=!!Pe&&Pe.fallen>.6,L.visible){let Q=Pe.pivot.rotation.y,Gt=Pe.pivot.position,Ee=Pe.fallDir||-1;L.position.set(Gt.x+Ee*.9*Math.sin(Q),.55,Gt.z+Ee*.9*Math.cos(Q)),L.rotation.y=Q+Math.PI/2}V.position.set(Ni.x,k==="multitud"?2.2:1.2,Ni.z),st.target=1,st.m.color.set(we?gt.alert:gt.brand),Et.target=Ui>.5?1:0,At.forEach(Q=>{Q.m.opacity=ke?Q.target*.95:Q.m.opacity+(Q.target*.95-Q.m.opacity)*Math.min(1,F*3),Q.dots.forEach(Gt=>{Gt.userData.t=(Gt.userData.t+F*Q.speed)%1,Gt.position.copy(Q.curve.getPointAt(Gt.userData.t)),Gt.visible=Q.m.opacity>.03})}),de(b),o.update(),s.render(r,a);let Ue=i.clientWidth,_n=i.clientHeight,Gn=Ue<640,us=Math.max(.62,Math.min(1.15,Ue/1e3)),Jn=[];di.forEach(Q=>{let[Gt,Ee]=Hc(T[Q.id]),fe=k==="normal"||Q.id===os||(Xu[k]||[]).includes(Q.id);if(Q.el.style.display=fe?"":"none",Q.line.style.display=fe&&!Gn?"":"none",!fe)return;if(Gn){Q.el.classList.add("is-compact"),Q.el.style.transform=`translate(${Gt}px, ${Ee}px) translate(-50%, -50%)`;return}Q.el.classList.remove("is-compact");let ve=Q.el.offsetWidth,Ln=Q.el.offsetHeight,pn=Xc[k]&&Xc[k][Q.id]||Q.offset,Ze=Gt+pn[0]*us,pi=Ee+pn[1]*us,Ur=pn[0]<0?Ze-ve:pn[0]>0?Ze:Ze-ve/2;Jn.push({l:Q,ax:Gt,ay:Ee,left:Ur,top:pi-Ln/2,bw:ve,bh:Ln})});for(let Q=0;Q<6;Q++){for(let Gt=0;Gt<Jn.length;Gt++)for(let Ee=Gt+1;Ee<Jn.length;Ee++){let fe=Jn[Gt],ve=Jn[Ee],Ln=Math.min(fe.left+fe.bw,ve.left+ve.bw)-Math.max(fe.left,ve.left),pn=Math.min(fe.top+fe.bh,ve.top+ve.bh)-Math.max(fe.top,ve.top);if(Ln>-8&&pn>-8){let Ze=(pn+8)/2;fe.top<=ve.top?(fe.top-=Ze,ve.top+=Ze):(fe.top+=Ze,ve.top-=Ze)}}Jn.forEach(Gt=>{Gt.left=Math.max(6,Math.min(Ue-Gt.bw-6,Gt.left)),Gt.top=Math.max(6,Math.min(_n-Gt.bh-6,Gt.top))})}if(Jn.forEach(({l:Q,ax:Gt,ay:Ee,left:fe,top:ve,bw:Ln,bh:pn})=>{Q.el.style.transform=`translate(${fe}px, ${ve}px)`;let Ze,pi;Gt>fe+Ln?(Ze=fe+Ln+3,pi=ve+pn/2):Gt<fe?(Ze=fe-3,pi=ve+pn/2):(Ze=Gt,pi=Ee<ve?ve-3:ve+pn+3);let Ur=Math.hypot(Gt-Ze,Ee-pi)||1,qu=Gt-(Gt-Ze)/Ur*5,Yu=Ee-(Ee-pi)/Ur*5;Q.line.setAttribute("points",`${Ze},${pi} ${qu},${Yu}`)}),we){zc!==we&&(ae.firstChild.textContent=we,zc=we);let[Q,Gt]=Hc(V);ae.style.display="";let Ee=ae.offsetWidth,fe=ae.offsetHeight,ve=Wu[k]||[40,-100],Ln=Math.max(6,Math.min(Ue-Ee-6,Q+(Gn?0:ve[0]*us)-Ee/2)),pn=Math.max(6,Math.min(_n-fe-6,Gt+(Gn?-56:ve[1]*us)-fe));ae.style.transform=`translate(${Ln}px, ${pn}px)`;let Ze=Math.max(Ln+12,Math.min(Ln+Ee-12,Q));ze.style.display="",ze.setAttribute("points",`${Ze},${pn+fe+3} ${Q},${Gt-6}`)}else ae.style.display="none",ze.style.display="none";if(dn.style.display=k==="apagon"?"":"none",k==="apagon"){let Q=Math.round(sr);if(lo!==String(Q)){lo=String(Q);let Gt=Math.round(sr/100*300);Vn.textContent=`${Q} %`,Hn.textContent=`Quedan ${Math.floor(Gt/60)} h ${String(Gt%60).padStart(2,"0")} min`,fn.textContent=Q>=95?"battery_full":`battery_${Math.max(1,Math.ceil(Q/100*6))}_bar`}}requestAnimationFrame(Yc)}function ho(){Ir||(Ir=!0,co=performance.now(),requestAnimationFrame(Yc))}function Zc(){Ir=!1}new IntersectionObserver(b=>{b[0].isIntersecting&&!document.hidden?ho():Zc()},{threshold:.02}).observe(i),document.addEventListener("visibilitychange",()=>{document.hidden?Zc():i.getBoundingClientRect().bottom>0&&ho()});let Dr={setMode(b){Fc=b,ir=ke&&zu[b]||0,b==="emergencia"&&(dt.s=ke?.6:.3,dt.dirSign=1,dt.fallen=ke?1:0),b==="apagon"&&(sr=100,lo=""),Qs.forEach(F=>{F.face=Math.atan2(F.dense.x-F.home.x,F.dense.z-F.home.z)})},setNight(b){oo=!!b},highlight(b){os&&os!==b&&ge(os,!1),os=b,b&&(ge(b,!0),ye=performance.now()),di.forEach(F=>F.el.setAttribute("aria-pressed",String(F.id===b)))},focus(b){Dr.highlight(b)},reset(){o.target.copy(ro),a.position.copy(ro).addScaledVector(so,60),a.zoom=1,a.updateProjectionMatrix()},setAutoRotate(){}};return ho(),Dr}export{J_ as createViewer};
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
