(self.webpackChunk=self.webpackChunk||[]).push([[940],{6443:()=>{var e=null;function t(){document.querySelector(".request-top").classList.toggle("open-request"),document.querySelector(".request-content").classList.toggle("open-request-content"),setTimeout((()=>{document.querySelector(".request-top").style.display="none"}),300)}window.requestprod=t=>{document.querySelector(".request-top").style.display="flex",document.querySelector(".request-top").classList.toggle("open-request"),setTimeout((()=>{document.querySelector(".request-content").classList.toggle("open-request-content")}),1),e=t},window.handleclose=()=>{t()};const o=t=>{console.log("sending mail");const o={email:t,product:e};fetch("/api/email/emails",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)}).then().catch((e=>{console.error("Error:",e)}))};window.onsub=e=>{var n;e.preventDefault(),n=document.getElementById("email").value,console.log(n),o(n),t()}}},0,[[6443,666]]]);