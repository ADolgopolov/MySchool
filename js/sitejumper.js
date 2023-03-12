//
//
function Input2(promokode, whish_lvl) {
  
  var paswords = [];
  //***********************************************************************
  paswords.push({promo:"APPLICANT", level: "2nd"});
  paswords.push({promo:"EXPERIENCED", level: "3nd"});
  //***********************************************************************

  var str_promo = promokode.toString(); // отримали

  // убираєм пробели в началі і в кінці стрічки.
  str_promo = str_promo.trim(); 
  // убираєм пробели
  while( ~str_promo.indexOf("\ ") ) 
  {
    str_promo = str_promo.replace("\ ", "");
  }
  // піднімаєм до заглавних
  str_promo = str_promo.toUpperCase();

  // перевіряєм
  for (var i = 0; i < paswords.length; i++) 
  {
    if( str_promo == paswords[i].promo )
    {
      //на третій рівень потрапляють тільки промокоди зазначені як "3nd"
      if (whish_lvl == "3nd") 
      {
        if (whish_lvl == paswords[i].level)
        {
          window.location="part3/ua.html";
        }
        else
        {
          // if (confirm("Hаразі Ви можете перейти лише до \"Частини Другої.\". Перейти?")) {
          if (confirm("Сейчас Вы можете перейти только к \"Части Второй.\". Перейти?")) {
            window.location="part2/ua.html";
          }
        }
      }
      else // whish_lvl == "2nd"
      {
        //на другий рівень може потрапити будь хто із списку учнів
        window.location="part2/ua.html";
      }
    }
  }
  // введеного промо не знайдено
  document.getElementById("tel_number").value  = "";
}   
