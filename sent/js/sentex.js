﻿function MyGnrator(){function k(c){return Math.floor(Math.random()*c)}function m(){n+=1;if(this.value===f[0]){q+=1;f.shift();btnBlock.removeChild(this);b.PrinterDiv.innerHTML=p.getHiddenString(f.length);if(1<n&&1==q)var c=str_mark[k(str_mark.length)];else{var d=b.StatusBar.innerHTML;do c=str_goodmark[k(str_goodmark.length)];while(c===d)}e(c);b.StatusBar.style.color="rgb(0, 150, 0)";0===f.length&&setTimeout(h,1E3,g)}else{q=0;r+=1;c=str_Need+"<button>"+f[0]+"</button> <br>";var t=b.StatusBar.innerHTML;
do d=str_bedmark[k(str_bedmark.length)];while(d===t);e(c+d);for(b.StatusBar.style.color="rgb(150, 0, 0)";btnBlock.firstChild;)btnBlock.removeChild(btnBlock.firstChild);setTimeout(a,1E3)}}function a(){for(var c,b=[],a=0;a<f.length;a++)c=document.createElement("input"),c.className="btnChar",c.type="button",c.value=f[a],c.onclick=m,b.push(c);for(;0<b.length;)c=k(b.length),btnBlock.appendChild(b[c]),b.splice(c,1)}function e(a){b.StatusBar.innerHTML=a;if(0<n){a=Math.round(d.length/l*1E4)/100;var c=1-a/
100;0==c&&(a=Math.round((l-1)/l*1E4)/100,c=1-a/100);var g=Math.round(r/n*1E4)/100;b.MasteryBarDanger.style.width=g*c+"%";b.MasteryBarSuccess.style.width=(100-g)*c+"%";b.ProgressBar.style.width=a+"%";a=b.ProgressBar;a.innerHTML=8<a.clientWidth?d.length+str_lost:""}else b.MasteryBarSuccess.style.width="0%",b.MasteryBarDanger.style.width="0%",b.ProgressBar.style.width="100%",b.MasteryBarSuccess.innerHTML="",b.MasteryBarDanger.innerHTML="",a=b.ProgressBar,a.innerHTML=8<a.clientWidth?str_WordsAmount+d.length:
""}function h(c){~c&&d.splice(g,1);e("&nbsp;");0==d.length?(document.getElementById("topheader").innerHTML=str_Rest_and_try_late,b.QuestionBtn.innerHTML=str_Fine,b.QuestionBtn.disabled=!0,b.PrinterDiv.innerHTML="",b.StatusBar.innerHTML=str_All_tsks_done,b.ProgressBar.style.width="100%",b.ProgressBar.innerHTML="",b.MarkRuler&&(b.MarkRuler.style.display="block")):(g=window.sentencesByOrder?0:k(d.length),b.QuestionBtn.innerHTML=d[g][trans],p=new HiddenLine(d[g].eng),f=p.getWordsArr(),a(),b.PrinterDiv.innerHTML=
p.getHiddenString(f.length),b.ModalAudioTeg=new Audio(sdn_store+d[g].snd))}this.QuestionBtn=document.createElement("input");this.PrinterDiv=document.createElement("input");this.StatusBar=document.createElement("input");this.ProgressBar=document.createElement("input");this.MasteryBarSuccess=document.createElement("input");this.MasteryBarDanger=document.createElement("input");this.MarkRuler=document.createElement("input");this.ModalAudioTeg=document.createElement("input");var b=this,d=[],g,n=0,r=0,
q=0,f=[],l=0,p;this.initDictionery=function(a){d=a.slice(0);l=d.length;this.ProgressBar.innerHTML=str_Words_Amount+l};this.run=function(){h(-1)};this.sound=function(){b.ModalAudioTeg.play()}}
function HiddenLine(k){var m=k.split(" ");this.getWordsArr=function(){return m.map(function(a){if(a.includes("#"))for(;a.includes("#");)a=a.replace("#","");else a=a.toLowerCase();for(;a.includes("_");)a=a.replace("_"," ");for(;a.includes(",");)a=a.replace(",","");for(;a.includes(".");)a=a.replace(".","");for(;a.includes("?");)a=a.replace("?","");for(;a.includes("!");)a=a.replace("!","");for(;a.includes(":");)a=a.replace(":","");for(;a.includes(";");)a=a.replace(";","");return a})};this.getHiddenString=
function(a){for(var e=m.map(function(a){for(;a.includes("#");)a=a.replace("#","");for(;a.includes("_");)a=a.replace("_"," ");return a}),h=e.length-1;h>=e.length-a;h--){for(var b="",d=0;d<e[h].length;d++)b=" "==e[h].charAt(d)?b+" ":b+"*";e[h]=b}return e.join(" ")}}
window.onload=function(){window.gen=new MyGnrator;gen.QuestionBtn=document.getElementById("question");gen.PrinterDiv=document.getElementById("printer");gen.StatusBar=document.getElementById("statusbar");gen.ProgressBar=document.getElementById("progressBar");gen.MasteryBarSuccess=document.getElementById("masteryBarSuccess");gen.MasteryBarDanger=document.getElementById("masteryBarDanger");gen.MarkRuler=document.getElementById("markRuler");gen.ModalAudioTeg=document.getElementById("media");gen.initDictionery(window.DicArray);
gen.run()};