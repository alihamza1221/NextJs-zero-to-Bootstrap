(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[999],{77761:function(e,t,s){Promise.resolve().then(s.bind(s,80411))},80411:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return l}});var n=s(57437),a=s(53780),r=s(38472),o=s(23580);let i=["Hey there! I've been pondering a few tech-related questions and figured you'd be the perfect person to ask. Firstly, I'm curious about the latest trends in machine learning algorithms—are there any groundbreaking developments you've come across recently that you find particularly fascinating?","I'm also interested in learning more about the latest advancements in artificial intelligence. Are there any new AI technologies that you're excited about or that you think have the potential to revolutionize the field?","Lastly, I'd love to hear your thoughts on the future of data science. What do you think are the most important trends shaping the industry, and how do you see the field evolving in the coming years?"];function l(e){let{params:{username:t}}=e,s=async e=>{if(console.log(e),!e)return o.Am.error("Message cannot be empty");try{let s=await r.Z.post("/api/sendMessages",{content:e,username:t});console.log(s),s.data.success?o.Am.success("Message Sent Successfully"):s.data&&o.Am.error(s.data.message)}catch(e){console.log(e),o.Am.error(e.message)}};return(0,n.jsxs)("div",{className:"flex flex-col items-center justify-center h-screen w-full bg-gray-50 container",children:[(0,n.jsxs)(a.Typography,{variant:"h3",children:["Send Messages to ",t]}),(0,n.jsx)(a.Typography,{variant:"h5",className:"m-4",children:"Suggested Messages"}),(0,n.jsx)("div",{className:"preSuggestedMessages w-1/2 h-full flex flex-col bg-white rounded-md shadow-md p-6 m-4 gap-2",children:i.map((e,t)=>(0,n.jsx)("div",{onClick:()=>s(e),className:"message bg-gray-100 p-3 mb-3  rounded-lg cursor-pointer",children:e},t))})]})}}},function(e){e.O(0,[590,580,472,255,971,23,744],function(){return e(e.s=77761)}),_N_E=e.O()}]);