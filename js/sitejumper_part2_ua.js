//
//
function Input2(promokode, whish_lvl) {
  
  var paswords = [];
  //***********************************************************************
  paswords.push({promo:"APPLICANT", level: "2nd"});
  paswords.push({promo:"EXPERIENCED", level: "3nd"});
  //***********************************************************************
  var isPromoVrong = true;
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
      if (whish_lvl == "3nd" && whish_lvl == paswords[i].level) 
      {
    	window.location="../../part3/ua.html";
      document.getElementById("tel_number").value  = "";
      isPromoVrong = false;
      }
      else {}
    }
  }
  // введеного промо не знайдено
  if(isPromoVrong){
    document.getElementById("tel_number").value  = "Помилка ввода.";
  }
}   
