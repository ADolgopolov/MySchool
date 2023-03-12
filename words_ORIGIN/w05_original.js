///////////
/*slint browser:true */
/*global window, document, btn1, btn1, btn2, btn3, btn4, btn4, btn5, question, statusbar, statusbar2*/
var DicArray = [];





//Якості
DicArray.push({eng: "situated", ukr: "розташований", rus: "расположенный", trk: "|ˈsɪtjueɪtɪd|"});
DicArray.push({eng: "located", ukr: "розташований", rus: "расположенный", trk: "|ləʊˈkeɪtɪd|"});
DicArray.push({eng: "where", ukr: "де, куди", rus: "где, куда", trk: "|wɛː|"});
DicArray.push({eng: "ocean", ukr: "океан", rus: "океан", trk: "|ˈəʊʃ(ə)n|"});
DicArray.push({eng: "sea", ukr: "море", rus: "море", trk: "|siː|"});
DicArray.push({eng: "lake", ukr: "озеро", rus: "озеро", trk: "|leɪk|"});
DicArray.push({eng: "river", ukr: "річка", rus: "река", trk: "|ˈrɪvə|"});
DicArray.push({eng: "island", ukr: "острів", rus: "остров", trk: "|ˈʌɪlənd|"});
DicArray.push({eng: "mountain", ukr: "гора", rus: "гора", trk: "|ˈmaʊntɪn|"});
DicArray.push({eng: "hill", ukr: "пагорб", rus: "холм", trk: "|hɪl|"});
DicArray.push({eng: "country", ukr: "країна", rus: "страна", trk: "|ˈkʌntri|"});
DicArray.push({eng: "border", ukr: "кордон", rus: "граница", trk: "|ˈbɔːdə|"});
DicArray.push({eng: "citizen", ukr: "громадянин", rus: "гражданин", trk: "|ˈsɪtɪz(ə)n|"});
DicArray.push({eng: "foreign", ukr: "іноземний", rus: "иностранный", trk: "|ˈfɒrɪn|"});
DicArray.push({eng: "city", ukr: "місто", rus: "город", trk: "|ˈsɪti|"});
DicArray.push({eng: "town", ukr: "містечко", rus: "городок", trk: "|taʊn|"});
DicArray.push({eng: "countryside", ukr: "сільська місцевість", rus: "сельская местность", trk: "|ˈkʌntrɪ sʌɪd|"});
DicArray.push({eng: "village", ukr: "село", rus: "деревня", trk: "|ˈvɪlɪdʒ|"});
DicArray.push({eng: "capital", ukr: "столиця", rus: "столица", trk: "|ˈkapɪt(ə)l|"});
DicArray.push({eng: "district", ukr: "район", rus: "район", trk: "|ˈdɪstrɪkt|"});
DicArray.push({eng: "centre", ukr: "центр", rus: "центр", trk: "|ˈsɛntə|"});
DicArray.push({eng: "street", ukr: "вулиця", rus: "улица", trk: "|striːt|"});
DicArray.push({eng: "square", ukr: "площа", rus: "площадь", trk: "|skwɛː|"});
DicArray.push({eng: "bridge", ukr: "міст", rus: "мост", trk: "|brɪdʒ|"});
DicArray.push({eng: "museum", ukr: "музей", rus: "музей", trk: "|mjuːˈzɪəm|"});
DicArray.push({eng: "palace", ukr: "палац", rus: "дворец", trk: "|ˈpalɪs|"});
DicArray.push({eng: "theatre", ukr: "театр", rus: "театр", trk: "|ˈθɪətə|"});
DicArray.push({eng: "monument", ukr: "пам'ятник", rus: "памятник", trk: "|ˈmɒnjʊm(ə)nt|"});
DicArray.push({eng: "library", ukr: "бібліотека", rus: "библиотека", trk: "|ˈlʌɪbrəri|"});
DicArray.push({eng: "hotel", ukr: "готель", rus: "отель", trk: "|həʊˈtɛl|"});//animall
DicArray.push({eng: "sky", ukr: "небо", rus: "небо", trk: "|skaɪ|"});
DicArray.push({eng: "sun", ukr: "сонце", rus: "солнце", trk: "|sʌn|"});
DicArray.push({eng: "farm", ukr: "ферма", rus: "ферма", trk: "|fɑːm|"});
DicArray.push({eng: "garden", ukr: "сад", rus: "сад", trk: "|ˈɡɑːd(ə)n|"});
DicArray.push({eng: "plant", ukr: "рослина", rus: "растение", trk: "|plɑːnt|"});
DicArray.push({eng: "tree", ukr: "дерево", rus: "дерево", trk: "|triː|"});
DicArray.push({eng: "leaf", ukr: "листок", rus: "лист", trk: "|liːf|"});
DicArray.push({eng: "leaves", ukr: "листя", rus: "листва", trk: "|liːvz|"});
DicArray.push({eng: "flower", ukr: "квітка", rus: "цветок", trk: "|ˈflaʊə|"});
DicArray.push({eng: "moon", ukr: "місяць", rus: "луна", trk: "|muːn|"});
DicArray.push({eng: "star", ukr: "зірка", rus: "звезда", trk: "|stɑː|"});
DicArray.push({eng: "forest", ukr: "ліс", rus: "лес", trk: "|ˈfɒrɪst|"});
DicArray.push({eng: "field", ukr: "поле", rus: "поле", trk: "|fiːld|"});
DicArray.push({eng: "road", ukr: "дорога", rus: "дорога", trk: "|rəʊd|"});
DicArray.push({eng: "grass", ukr: "трава", rus: "трава", trk: "|ɡrɑːs|"});
DicArray.push({eng: "ground", ukr: "земля", rus: "земля", trk: "|ɡraʊnd|"});// house p.49
DicArray.push({eng: "house", ukr: "будинок", rus: "дом", trk: "|haʊs|"});
DicArray.push({eng: "building", ukr: "будівля", rus: "здание", trk: "|ˈbɪldɪŋ|"});
DicArray.push({eng: "balcony", ukr: "балкон", rus: "балкон", trk: "|ˈbalkəni|"});
DicArray.push({eng: "wall", ukr: "стіна", rus: "стена", trk: "|wɔːl|"});
DicArray.push({eng: "door", ukr: "двері", rus: "дверь", trk: "|dɔː|"});
DicArray.push({eng: "roof", ukr: "дах", rus: "крыша", trk: "|ruːf|"});
DicArray.push({eng: "staircase", ukr: "сходи", rus: "лестница", trk: "|ˈstɛːkeɪs|"});
DicArray.push({eng: "window", ukr: "вікно", rus: "окно", trk: "|ˈwɪndəʊ|"});