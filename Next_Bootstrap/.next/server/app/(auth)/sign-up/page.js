(()=>{var e={};e.id=431,e.ids=[431],e.modules={67096:e=>{"use strict";e.exports=require("bcrypt")},11185:e=>{"use strict";e.exports=require("mongoose")},47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},39491:e=>{"use strict";e.exports=require("assert")},14300:e=>{"use strict";e.exports=require("buffer")},6113:e=>{"use strict";e.exports=require("crypto")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},22037:e=>{"use strict";e.exports=require("os")},71017:e=>{"use strict";e.exports=require("path")},63477:e=>{"use strict";e.exports=require("querystring")},12781:e=>{"use strict";e.exports=require("stream")},76224:e=>{"use strict";e.exports=require("tty")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},22587:(e,s,t)=>{"use strict";t.r(s),t.d(s,{GlobalError:()=>o.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>d,routeModule:()=>m,tree:()=>c}),t(84181),t(35866),t(85724);var r=t(23191),i=t(88716),a=t(37922),o=t.n(a),n=t(95231),l={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>n[e]);t.d(s,l);let c=["",{children:["(auth)",{children:["sign-up",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,84181)),"C:\\Users\\aliha\\Desktop\\Nextjs\\NextJs-zero-to-Bootstrap\\Next_Bootstrap\\app\\(auth)\\sign-up\\page.tsx"]}]},{}]},{"not-found":[()=>Promise.resolve().then(t.t.bind(t,35866,23)),"next/dist/client/components/not-found-error"]}]},{layout:[()=>Promise.resolve().then(t.bind(t,85724)),"C:\\Users\\aliha\\Desktop\\Nextjs\\NextJs-zero-to-Bootstrap\\Next_Bootstrap\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,35866,23)),"next/dist/client/components/not-found-error"]}],d=["C:\\Users\\aliha\\Desktop\\Nextjs\\NextJs-zero-to-Bootstrap\\Next_Bootstrap\\app\\(auth)\\sign-up\\page.tsx"],u="/(auth)/sign-up/page",p={require:t,loadChunk:()=>Promise.resolve()},m=new r.AppPageRouteModule({definition:{kind:i.x.APP_PAGE,page:"/(auth)/sign-up/page",pathname:"/sign-up",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},66300:(e,s,t)=>{Promise.resolve().then(t.bind(t,96311))},17828:(e,s,t)=>{Promise.resolve().then(t.bind(t,2246)),Promise.resolve().then(t.bind(t,29394))},80860:(e,s,t)=>{Promise.resolve().then(t.t.bind(t,12994,23)),Promise.resolve().then(t.t.bind(t,96114,23)),Promise.resolve().then(t.t.bind(t,9727,23)),Promise.resolve().then(t.t.bind(t,79671,23)),Promise.resolve().then(t.t.bind(t,41868,23)),Promise.resolve().then(t.t.bind(t,84759,23))},96311:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>x});var r=t(10326),i=t(44099),a=t(17577),o=t(35047),n=t(74723),l=t(92585),c=t(8059),d=t(74064),u=t(90434),p=t(29394),m=t(9007);function x(){let[e,s]=(0,a.useState)(""),[t,x]=(0,a.useState)(!0),[g,h]=(0,a.useState)(!1),f=(0,o.useRouter)();(0,c.Sf)(s,500);let{register:b,handleSubmit:v,reset:w,watch:j,getValues:y,setValue:N,formState:q,control:P}=(0,n.cI)({defaultValues:{username:"",email:"",password:""},mode:"onBlur",resolver:(0,d.F)(l.B)}),{errors:_,isLoading:S,isDirty:B,isValid:A}=q,k=async e=>{h(!0),console.log(e),A&&B||p.Am.info("Please fill the form correctly");try{let s=await i.Z.post("/api/sign-up",e);s.data.success?f.replace(`/verify/${e.username}`):s.data&&p.Am.info(s.data.message),p.Am.success("Registration Successful")}catch(e){console.log(e.response?.data.message),p.Am.error(e.response?.data.message)}finally{h(!1),w()}};return S||g?r.jsx("div",{className:"flex w-full h-screen justify-center items-center ",children:r.jsx(m.j,{})}):r.jsx("div",{className:"w-[89%] mx-auto h-screen flex justify-center items-center",children:(0,r.jsxs)("form",{className:"bg-slate-50 min-h-[30rem] flex md:max-w-md 2xl:max-w-xl max-h-[40rem] w-full p-5  justify-center items-center border-2 rounded-sm border-slate-50 shadow-md flex-col",onSubmit:v(k),children:[r.jsx("h1",{className:"text-center text-3xl font-bold my-3",children:"Register"}),(0,r.jsxs)("div",{className:"form-field w-[85%] p-3",children:[r.jsx("label",{htmlFor:"username",className:"inline-block text-xs text-slate-700",children:"Username"}),r.jsx("input",{type:"text",id:"username",...b("username"),className:"input-form-field"}),(0,r.jsxs)("p",{className:`${t?"text-black":"text-red-500"} text-xs`,children:[" ",t?r.jsx("span",{children:"username available"}):_.username?.message||y("username")&&"Username is not available"]})]}),(0,r.jsxs)("div",{className:"form-field w-[85%] p-3",children:[r.jsx("label",{htmlFor:"email",className:"inline-block text-xs text-slate-700",children:"Email"}),r.jsx("input",{type:"text",id:"email",...b("email"),className:"input-form-field"}),r.jsx("p",{className:`${_.email?"text-red-500":"text-white"} text-xs`,children:_.email?_.email?.message:"Email is Valid"})]}),(0,r.jsxs)("div",{className:"form-field w-[85%] p-3",children:[r.jsx("label",{htmlFor:"password",className:"inline-block text-xs text-slate-700",children:"Password"}),r.jsx("input",{type:"password",id:"password",...b("password"),className:"input-form-field"}),r.jsx("p",{className:`${_.password?"text-red-500":"text-white"} text-xs`,children:_.password?_.password?.message:"Password is valid"})]}),r.jsx("div",{className:"block w-3/4 text-center",children:r.jsx("hr",{className:"mx-auto w-3/4 border-slate-200 border-b-[1px]"})}),r.jsx("button",{type:"submit",className:"border box-border rounded-sm  px-6 bg-blue-600 hover:bg-blue-700 cursor-pointer p-3 mt-5 text-white font-bold text-sm active:border-black",children:"Submit"}),(0,r.jsxs)("span",{className:"w-[85%] p-3  block text-start text-slate-600 mt-1",children:["Already have an account?",(0,r.jsxs)(u.default,{className:"underline hover:cursor-pointer text-blue-600",href:"/sign-in",children:[" ","SignIn"]})]})]})})}},9007:(e,s,t)=>{"use strict";t.d(s,{j:()=>a});var r=t(10326),i=t(79740);function a(){return r.jsx("div",{className:"flex gap-8",children:r.jsx(i.Spinner,{color:"blue"})})}},2246:(e,s,t)=>{"use strict";t.d(s,{default:()=>a});var r=t(10326),i=t(77109);function a({children:e,session:s}){return r.jsx(i.SessionProvider,{session:s,children:e})}},92585:(e,s,t)=>{"use strict";t.d(s,{$:()=>i,B:()=>a});var r=t(27256);let i=r.z.string().min(3,{message:"Username must be at least 3 characters long"}).max(20,{message:"Username must be at most 20 characters long"}),a=r.z.object({username:i,email:r.z.string().email(),password:r.z.string().min(6,{message:"Password must be at least 6 characters long"})})},84181:(e,s,t)=>{"use strict";t.r(s),t.d(s,{$$typeof:()=>o,__esModule:()=>a,default:()=>n});var r=t(68570);let i=(0,r.createProxy)(String.raw`C:\Users\aliha\Desktop\Nextjs\NextJs-zero-to-Bootstrap\Next_Bootstrap\app\(auth)\sign-up\page.tsx`),{__esModule:a,$$typeof:o}=i;i.default;let n=(0,r.createProxy)(String.raw`C:\Users\aliha\Desktop\Nextjs\NextJs-zero-to-Bootstrap\Next_Bootstrap\app\(auth)\sign-up\page.tsx#default`)},26386:(e,s,t)=>{"use strict";t.d(s,{N:()=>l});var r=t(45256),i=t(93227),a=t(53797),o=t(67096),n=t.n(o);let l={providers:[(0,a.Z)({id:"credentials",name:"Credentials",credentials:{email:{label:"Email",type:"text",placeholder:"johnDoe@gmail.com"},password:{label:"Password",type:"password"}},async authorize(e){await (0,r.Z)();let{email:s}=e.identifier;try{let t=await i.Z.findOne({$or:[{email:s},{username:e.identifier}]});if(console.log(t),t){if(!t.isVerified)throw Error("User is not verified")}else throw Error("User does't exist");if(!await n().compare(e.password,t.password))throw Error("Password is incorrect");return t}catch(e){throw console.log(e.message),Error(e)}}})],callbacks:{jwt:async({token:e,user:s,trigger:t,session:r})=>(s&&(e._id=s._id?.toString(),e.isVerified=s.isVerified,e.username=s.username,e.isAcceptingMessages=s.isAcceptingMessages,e.email=s.email),"update"===t&&(console.log("triggered",r),r?.isAcceptingMessages!==void 0&&(console.log("session defined"),e.isAcceptingMessages=r.isAcceptingMessages)),e),session:async({session:e,token:s})=>(e.user._id=s._id,e.user.isVerified=s.isVerified,e.user.username=s.username,e.user.isAcceptingMessages=s.isAcceptingMessages,e)},session:{strategy:"jwt"},secret:process.env.NEXTAUTH_SECRET}},85724:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>h,metadata:()=>g});var r=t(19510),i=t(77366),a=t.n(i),o=t(26386);t(67272);var n=t(68570);let l=(0,n.createProxy)(String.raw`C:\Users\aliha\Desktop\Nextjs\NextJs-zero-to-Bootstrap\Next_Bootstrap\context\AuthProvider.tsx`),{__esModule:c,$$typeof:d}=l;l.default;let u=(0,n.createProxy)(String.raw`C:\Users\aliha\Desktop\Nextjs\NextJs-zero-to-Bootstrap\Next_Bootstrap\context\AuthProvider.tsx#default`);var p=t(45609);t(71159);var m=t(96557);function x(){return r.jsx(m.Ix,{})}t(97001);let g={title:"Next.js 0 to Bootstrap",description:"Learn Next.js and Bootstrap your own Sass Projects Let's build our own ideas."};async function h({children:e}){let s=await (0,p.getServerSession)(o.N);return r.jsx(u,{session:s,children:r.jsx("html",{lang:"en",children:(0,r.jsxs)("body",{className:` ${a().className}`,children:[e,r.jsx(x,{})]})})})}},45256:(e,s,t)=>{"use strict";t.d(s,{Z:()=>o});var r=t(11185),i=t.n(r);let a={};async function o(){if(a.isConnected)return console.log("using existing connection"),!0;try{let e=await i().connect(process.env.MONGODB_URI||"");return a.isConnected=e.connections[0].readyState,console.log("new connection: "+a.isConnected),1==a.isConnected||Error("DB connection failed")}catch(e){return console.log(e),!1}}},93227:(e,s,t)=>{"use strict";t.d(s,{Z:()=>n});var r=t(11185),i=t.n(r);let a=new r.Schema({content:{type:String,required:[!0,"Pleas add some content!"]},createdAt:{type:Date,required:!0,default:Date.now}}),o=new r.Schema({email:{type:String,required:[!0,"Pleas add some content!"],unique:!0,trim:!0,lowercase:!0,match:[/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,"Please fill a valid email address"]},username:{type:String,required:!0,trim:!0,minlength:2},password:{type:String,required:[!0,"username can't be empty"],trim:!0,minlength:2},verificationCode:{type:String,required:[!0,"verification code is required"]},verificationCodeExpiration:{type:Date,required:[!0,"verification code expiry is required"]},isVerified:{type:Boolean,default:!1,required:!0},isAcceptingMessages:{type:Boolean,default:!0},messages:[a]}),n=i().models.User||i().model("User",o)},67272:()=>{}};var s=require("../../../webpack-runtime.js");s.C(e);var t=e=>s(s.s=e),r=s.X(0,[948,857,432,99,740,914,59],()=>t(22587));module.exports=r})();