function Input2(e,d){var b=[];b.push({promo:"APPLICANT",level:"2nd"});b.push({promo:"EXPERIENCED",level:"3nd"});
var a=e.toString();for(a=a.trim();~a.indexOf(" ");)a=a.replace(" ","");a=a.toUpperCase();
for(var c=0;c<b.length;c++)a==b[c].promo&&("3nd"==d?d==b[c].level?window.location="../part3/ru.html":confirm('\u0421\u0435\u0439\u0447\u0430\u0441 \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u0435\u0440\u0435\u0439\u0442\u0438 \u0442\u043e\u043b\u044c\u043a\u043e \u043a "\u0427\u0430\u0441\u0442\u0438 \u0412\u0442\u043e\u0440\u043e\u0439.". \u041f\u0435\u0440\u0435\u0439\u0442\u0438?')&&
(window.location="../part2/ru.html"):window.location="../part2/ru.html");document.getElementById("tel_number").value=""};