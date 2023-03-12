///////////
/*slint browser:true */
/*global window, document, btn1, btn1, btn2, btn3, btn4, btn4, btn5, question, statusbar, statusbar2*/
var DicArray = [];






DicArray.push({eng: "occupation", ukr: "професія", rus: "профессия", trk: "|ɒkjʊˈpeɪʃ(ə)n|"});
DicArray.push({eng: "work", ukr: "робота", rus: "работа", trk: "|ˈwɜːk|"});
DicArray.push({eng: "job", ukr: "праця", rus: "труд", trk: "|dʒɒb|"});
DicArray.push({eng: "company", ukr: "компанія", rus: "компания", trk: "|ˈkʌmp(ə)ni|"});
DicArray.push({eng: "organization", ukr: "організація", rus: "организация", trk: "|ɔːɡ(ə)nʌɪˈzeɪʃ(ə)n|"});
DicArray.push({eng: "owner", ukr: "власник", rus: "владелец", trk: "|ˈəʊnə|"});
DicArray.push({eng: "property", ukr: "власність", rus: "собственность", trk: "|ˈprɒpəti|"});
DicArray.push({eng: "employee", ukr: "працівник", rus: "работник", trk: "|ɛmplɔɪˈiː|"});
DicArray.push({eng: "staff", ukr: "персонал", rus: "персонал", trk: "|stɑːf|"});
DicArray.push({eng: "secretary", ukr: "секретар", rus: "секретарь", trk: "|ˈsɛkrɪt(ə)ri|"});
DicArray.push({eng: "accountant", ukr: "бухгалтер", rus: "бухгалтер", trk: "|əˈkaʊnt(ə)nt|"});
DicArray.push({eng: "doctor", ukr: "лікар", rus: "доктор", trk: "|ˈdɒktə|"});
DicArray.push({eng: "engineer", ukr: "інженер", rus: "инженер", trk: "|ɛndʒɪˈnɪə|"});
DicArray.push({eng: "politician", ukr: "політик", rus: "политик", trk: "|pɒlɪˈtɪʃ(ə)n|"});
DicArray.push({eng: "lawyer", ukr: "юрист", rus: "юрист", trk: "|ˈlɔːjə|"});
DicArray.push({eng: "law", ukr: "закон", rus: "закон", trk: "|lɔː|"});
DicArray.push({eng: "military", ukr: "військовий", rus: "военный", trk: "|ˈmɪlɪt(ə)ri|"});
DicArray.push({eng: "science", ukr: "наука", rus: "наука", trk: "|ˈsʌɪəns|"});
DicArray.push({eng: "art", ukr: "мистецтво", rus: "искусство", trk: "|ɑːt|"});
DicArray.push({eng: "literature", ukr: "література", rus: "литература", trk: "|ˈlɪt(ə)rətʃə|"});
DicArray.push({eng: "media", ukr: "ЗМІ", rus: "СМИ", trk: "|ˈmiːdɪə|"});
DicArray.push({eng: "musician", ukr: "музикант", rus: "музыкант", trk: "|mjuːˈzɪʃ(ə)n|"});
DicArray.push({eng: "composer", ukr: "композитор", rus: "композитор", trk: "|kəmˈpəʊzə|"});
DicArray.push({eng: "song", ukr: "пісня", rus: "песня", trk: "|sɒŋ|"});
DicArray.push({eng: "singer", ukr: "співак", rus: "певец", trk: "|ˈsɪŋə|"});
DicArray.push({eng: "movie", ukr: "кіно", rus: "кино", trk: "|ˈmuːvi|"});
DicArray.push({eng: "film", ukr: "фільм", rus: "фильм", trk: "|fɪlm|"});
DicArray.push({eng: "soap", ukr: "мило", rus: "мыло", trk: "|səʊp|"});
DicArray.push({eng: "opera", ukr: "опера", rus: "опера", trk: "|ˈɒp(ə)rə|"});
DicArray.push({eng: "actor", ukr: "актор", rus: "актер", trk: "|ˈaktə|"});
DicArray.push({eng: "actress", ukr: "актриса", rus: "актриса", trk: "|ˈaktrəs|"});
DicArray.push({eng: "director", ukr: "режисер", rus: "режиссер", trk: "|dɪˈrɛktə|"});
DicArray.push({eng: "painter", ukr: "художник", rus: "художник", trk: "|ˈpeɪntə|"});
DicArray.push({eng: "painting", ukr: "живопис", rus: "живопись", trk: "|ˈpeɪntɪŋ|"});
DicArray.push({eng: "sculptor", ukr: "скульптор", rus: "скульптор", trk: "|ˈskʌlptə|"});
DicArray.push({eng: "sculpture", ukr: "скульптура", rus: "скульптура", trk: "|ˈskʌlptʃə|"});
DicArray.push({eng: "architect", ukr: "архітектор", rus: "архитектор", trk: "|ˈɑːkɪtɛkt|"});
DicArray.push({eng: "architecture", ukr: "архітектура", rus: "архитектура", trk: "|ˈɑːkɪtɛktʃə|"});
DicArray.push({eng: "writer", ukr: "письменник", rus: "писатель", trk: "|ˈrʌɪtə|"});
DicArray.push({eng: "poet", ukr: "поет", rus: "поэт", trk: "|ˈpəʊɪt|"});
DicArray.push({eng: "novel", ukr: "роман", rus: "роман", trk: "|ˈnɑːvl|"});
DicArray.push({eng: "story", ukr: "оповідання", rus: "рассказ", trk: "|ˈstɔːri|"});
DicArray.push({eng: "newspaper", ukr: "газета", rus: "газета", trk: "|ˈnjuːzpeɪpə|"});
DicArray.push({eng: "magazine", ukr: "журнал", rus: "журнал", trk: "|maɡəˈziːn|"});
DicArray.push({eng: "news", ukr: "новини", rus: "новости", trk: "|njuːz|"});
DicArray.push({eng: "journalist", ukr: "журналіст", rus: "журналист", trk: "|ˈdʒəːn(ə)lɪst|"});
DicArray.push({eng: "talented", ukr: "талановитий", rus: "талантливый", trk: "|ˈtaləntɪd|"});
DicArray.push({eng: "genius", ukr: "геній", rus: "гений", trk: "|ˈdʒiːnɪəs|"});
DicArray.push({eng: "favourite", ukr: "улюблений", rus: "любимый", trk: "|ˈfeɪv(ə)rɪt|"});
DicArray.push({eng: "popular", ukr: "популярний", rus: "популярный", trk: "|ˈpɒpjʊlə|"});
DicArray.push({eng: "proud", ukr: "гордий", rus: "гордый", trk: "|praʊd|"});
DicArray.push({eng: "typical", ukr: "типовий", rus: "типичный", trk: "|ˈtɪpɪk(ə)l|"});
DicArray.push({eng: "busy", ukr: "зайнятий", rus: "занятой", trk: "|ˈbɪzi|"});
DicArray.push({eng: "free", ukr: "вільний", rus: "свободный", trk: "|friː|"});
DicArray.push({eng: "tired", ukr: "втомлений", rus: "уставший", trk: "|tʌɪəd|"});
DicArray.push({eng: "responsible", ukr: "відповідальний", rus: "ответственный", trk: "|rɪˈspɒnsɪb(ə)l|"});
DicArray.push({eng: "responsibility", ukr: "відповідальність", rus: "ответственность", trk: "|rɪˌspɒnsɪˈbɪlɪti|"});
DicArray.push({eng: "good", ukr: "хороший", rus: "хороший", trk: "|ɡʊd|"});