///////////
/*slint browser:true */
/*global window, document, btn1, btn1, btn2, btn3, btn4, btn4, btn5, question, statusbar, statusbar2*/
var DicArray = [];






DicArray.push({eng: "room", ukr: "кімната", rus: "комната", trk: "|ruːm|"});
DicArray.push({eng: "floor", ukr: "підлога", rus: "пол", trk: "|flɔː|"});
DicArray.push({eng: "corner", ukr: "кут", rus: "угол", trk: "|ˈkɔːnə|"});
DicArray.push({eng: "ceiling", ukr: "стеля", rus: "потолок", trk: "|ˈsiːlɪŋ|"});
DicArray.push({eng: "nursery", ukr: "дитяча кімната", rus: "детская комната", trk: "|ˈnəːs(ə)ri|"});
DicArray.push({eng: "curtain", ukr: "занавіска", rus: "занавеска", trk: "|ˈkəːt(ə)n|"});
DicArray.push({eng: "bathroom", ukr: "ванна", rus: "ванная", trk: "|ˈbɑːθruːm|"});
DicArray.push({eng: "washing machine", ukr: "пральна машина", rus: "стиральная машина", trk: "|ˈwɒʃɪŋ|"});
DicArray.push({eng: "kitchen", ukr: "кухня", rus: "кухня", trk: "|ˈkɪtʃɪn|"});
DicArray.push({eng: "table", ukr: "стіл", rus: "стол", trk: "|ˈteɪbl|"});
DicArray.push({eng: "refrigerator", ukr: "холодильник", rus: "холодильник", trk: "|rɪˈfrɪdʒəreɪtə|"});
DicArray.push({eng: "stove", ukr: "плита", rus: "плита", trk: "|stəʊv|"});
DicArray.push({eng: "bedroom", ukr: "спальня", rus: "спальня ", trk: "|ˈbɛdruːm|"});
DicArray.push({eng: "furniture", ukr: "меблі", rus: "мебель", trk: "|ˈfəːnɪtʃə|"});
DicArray.push({eng: "bed", ukr: "ліжко", rus: "кровать", trk: "|bed|"});
DicArray.push({eng: "wardrobe", ukr: "гардероб", rus: "гардероб", trk: "|ˈwɔːdrəʊb|"});
DicArray.push({eng: "study", ukr: "кабінет", rus: "кабинет", trk: "|ˈstʌdi|"});
DicArray.push({eng: "bookcase", ukr: "книжкова шафа", rus: "книжный шкаф", trk: "|ˈbʊkkeɪs|"});
DicArray.push({eng: "shelf", ukr: "полиця", rus: "полка", trk: "|ʃɛlf|"});
DicArray.push({eng: "shelves", ukr: "полиці", rus: "полки", trk: "|ʃɛlvz|"});
DicArray.push({eng: "desk", ukr: "стіл", rus: "стол", trk: "|desk|"});
DicArray.push({eng: "chair", ukr: "стілець", rus: "стул", trk: "|tʃɛː|"});
DicArray.push({eng: "living-room", ukr: "вітальня", rus: "гостинная", trk: "|ˈlɪvɪŋ ruːm|"});
DicArray.push({eng: "cupboard", ukr: "буфет", rus: "буфет", trk: "|ˈkʌbəd|"});
DicArray.push({eng: "fireplace", ukr: "камін", rus: "камин", trk: "|ˈfʌɪəpleɪs|"});
DicArray.push({eng: "armchair", ukr: "крісло", rus: "кресло", trk: "|ˈɑːmtʃeə(r)|"});
DicArray.push({eng: "sofa", ukr: "диван", rus: "диван", trk: "|ˈsəʊfə|"});
DicArray.push({eng: "recorder", ukr: "магнитофон", rus: "магнитофон", trk: "|rɪˈkɔːdə|"});
DicArray.push({eng: "carpet", ukr: "килим", rus: "ковер", trk: "|ˈkɑːpɪt|"});
DicArray.push({eng: "educated", ukr: "освічений", rus: "образованный", trk: "|ˈɛdjʊkeɪtɪd|"});
DicArray.push({eng: "knowledge", ukr: "знання", rus: "знание", trk: "|ˈnɒlɪdʒ|"});
DicArray.push({eng: "school", ukr: "школа", rus: "школа", trk: "|skuːl|"});
DicArray.push({eng: "schoolboy", ukr: "школяр", rus: "школьник", trk: "|ˈskuːlbɔɪ|"});
DicArray.push({eng: "schoolgirl", ukr: "школярка", rus: "школьница", trk: "|ˈskuːlɡəːl|"});
DicArray.push({eng: "university", ukr: "університет", rus: "университет", trk: "|juːnɪˈvəːsɪti|"});
DicArray.push({eng: "pupil", ukr: "учень", rus: "ученик", trk: "|ˈpjuːpɪl|"});
DicArray.push({eng: "lesson", ukr: "урок", rus: "урок", trk: "|ˈlɛs(ə)n|"});
DicArray.push({eng: "class", ukr: "клас", rus: "класс", trk: "|klɑːs|"});
DicArray.push({eng: "lecture", ukr: "лекція", rus: "лекция", trk: "|ˈlɛktʃə|"});
DicArray.push({eng: "teacher", ukr: "вчитель", rus: "учитель", trk: "|ˈtiːtʃə|"});
DicArray.push({eng: "subject", ukr: "предмет", rus: "предмет", trk: "|ˈsʌbdʒɪkt|"});