///////////
/*slint browser:true */
/* Wake, get up, exercise, wash, shower, bath, brush, comb, shave, put on, take off, dress, wear, breakfast, lunch, dinner, supper, meal, cook, eat, drink, hungry, thirsty, leave, return, go by bus, go by car, go by metro, go on foot, walk, go shopping, pay, buy, price, cost, clean, rest, sleep, begin, finish, end, be on time, be late, which, who, whom, that */
var DicArray = [];






DicArray.push({eng: "wake", trk: "|nəʊz|", ukr: "прокидатися", rus: "просыпаться", snd: "wake.mp3"});
DicArray.push({eng: "woke", trk: "|wəʊk|", ukr: "прокидатися (V2)", rus: "просыпаться (V2)", snd: "woke.mp3"});
DicArray.push({eng: "woken", trk: "|ˈwəʊkən|", ukr: "прокидатися (V3)", rus: "просыпаться (V3)", snd: "woken.mp3"});
DicArray.push({eng: "get up", trk: "|ˈɡet ʌp|", ukr: "вставати", rus: "вставать", snd: "get up.mp3"});
DicArray.push({eng: "exercise", trk: "|ˈɛksəsʌɪz|", ukr: "вправи", rus: "упражнение", snd: "exercise.mp3"});
DicArray.push({eng: "wash", trk: "|wɒʃ|", ukr: "мити", rus: "мыть", snd: "wash.mp3"});
DicArray.push({eng: "shower", trk: "|ˈʃaʊə|", ukr: "душ", rus: "душ", snd: "shower.mp3"});
DicArray.push({eng: "bath", trk: "|bɑːθ|", ukr: "ванна", rus: "ванна", snd: "bath.mp3"});
DicArray.push({eng: "brush", trk: "|brʌʃ|", ukr: "щітка", rus: "щетка", snd: "brush.mp3"});
DicArray.push({eng: "comb", trk: "|kəʊm|", ukr: "розчісуватися", rus: "расчесывать", snd: "comb.mp3"});
DicArray.push({eng: "shave", trk: "|ʃeɪv|", ukr: "голитись", rus: "бриться", snd: "shave.mp3"});
DicArray.push({eng: "put on", trk: "|ˈpʊt ɒn|", ukr: "одягнути", rus: "надевать", snd: "put on.mp3"});
DicArray.push({eng: "take off", trk: "|ˈteɪkɒf|", ukr: "знімати", rus: "снимать", snd: "take off.mp3"});
DicArray.push({eng: "dress", trk: "|drɛs|", ukr: "одягатися", rus: "одеваться", snd: "dress.mp3"});
DicArray.push({eng: "wear", trk: "|weə|", ukr: "носити", rus: "носить", snd: "wear.mp3"});
DicArray.push({eng: "wore", trk: "|wɔː|", ukr: "носити (V2)", rus: "носить (V2)", snd: "wore.mp3"});
DicArray.push({eng: "worn", trk: "|wɔːn|", ukr: "носити (V3)", rus: "носить (V3)", snd: "worn.mp3"});
DicArray.push({eng: "breakfast", trk: "|ˈbrɛkfəst|", ukr: "сніданок", rus: "завтрак", snd: "breakfast.mp3"});
DicArray.push({eng: "lunch", trk: "|lʌn(t)ʃ|", ukr: "обід", rus: "обед", snd: "lunch.mp3"});
DicArray.push({eng: "dinner", trk: "|ˈdɪnə|", ukr: "вечеря, обід", rus: "ужин, обед", snd: "dinner.mp3"});
DicArray.push({eng: "supper", trk: "|ˈsʌpə|", ukr: "вечеря", rus: "ужин", snd: "supper.mp3"});
DicArray.push({eng: "meal", trk: "|miːl|", ukr: "їжа", rus: "еда", snd: "meal.mp3"});
DicArray.push({eng: "cook", trk: "|kʊk|", ukr: "готувати", rus: "готовить", snd: "cook.mp3"});
DicArray.push({eng: "eat", trk: "|iːt|", ukr: "їсти", rus: "есть", snd: "eat.mp3"});
DicArray.push({eng: "ate", trk: "|et|", ukr: "їсти (V2)", rus: "есть (V2)", snd: "ate.mp3"});
DicArray.push({eng: "eaten", trk: "|ˈiːtən|", ukr: "їсти (V3)", rus: "есть (V3)", snd: "eaten.mp3"});
DicArray.push({eng: "drink", trk: "|drɪŋk|", ukr: "пити", rus: "пить", snd: "drink.mp3"});
DicArray.push({eng: "drank", trk: "|draŋk|", ukr: "пити (V2)", rus: "пить (V2)", snd: "drank.mp3"});
DicArray.push({eng: "drunk", trk: "|drʌŋk|", ukr: "пити (V3)", rus: "пить (V3)", snd: "drunk.mp3"});
DicArray.push({eng: "hungry", trk: "|ˈhʌŋɡri|", ukr: "голодний", rus: "голодный", snd: "hungry.mp3"});
DicArray.push({eng: "thirsty", trk: "|ˈθəːsti|", ukr: "спраглий", rus: "испытующий жажду", snd: "thirsty.mp3"});

DicArray.push({eng: "leave", trk: "|liːv|", ukr: "залишати", rus: "оставлять", snd: "leave.mp3"});
DicArray.push({eng: "left", trk: "|left|", ukr: "залишати (V2, V3)", rus: "оставлять (V2, V3)", snd: "left.mp3"});
DicArray.push({eng: "return", trk: "|rɪˈtəːn|", ukr: "повернутися", rus: "возвращаться", snd: "return.mp3"});
DicArray.push({eng: "go by bus", trk: "|ɡəʊ baɪ bʌs|", ukr: "їхати автобусом", rus: "ехать автобусом", snd: "go by bus.mp3"});
DicArray.push({eng: "go by car", trk: "|ɡəʊ baɪ kɑː|", ukr: "їхати на машині", rus: "ехать на машине", snd: "go by car.mp3"});
DicArray.push({eng: "go by metro", trk: "|ɡəʊ baɪ ˈmɛtrəʊ|", ukr: "їхати на метро", rus: "ехать на метро", snd: "go by metro.mp3"});
DicArray.push({eng: "go on foot", trk: "|ɡəʊ ɒn fʊt|", ukr: "йти пішки", rus: "идти пешком", snd: "go on foot.mp3"});
DicArray.push({eng: "walk", trk: "|wɔːk|", ukr: "гуляти пішки", rus: "гулять пешком", snd: "walk.mp3"});
DicArray.push({eng: "go shopping", trk: "|ɡəʊ ˈʃɑːpɪŋ| ", ukr: "відправитися за покупками", rus: "отправляться за покупками", snd: "go shopping.mp3"});
DicArray.push({eng: "pay", trk: "|peɪ|", ukr: "платити", rus: "платить", snd: "pay.mp3"});
DicArray.push({eng: "paid", trk: "|peɪd|", ukr: "платити (V2, V3)", rus: "платить (V2, V3)", snd: "paid.mp3"});
DicArray.push({eng: "buy", trk: "|baɪ|", ukr: "купити", rus: "купить", snd: "buy.mp3"});
DicArray.push({eng: "bought", trk: "|bɔːt|", ukr: "купити (V2, V3)", rus: "купить (V2, V3)", snd: "bought.mp3"});
DicArray.push({eng: "price", trk: "|prʌɪs|", ukr: "ціна", rus: "цена", snd: "price.mp3"});
DicArray.push({eng: "cost", trk: "|kɒst|", ukr: "коштувати (V1, V2, V3)", rus: "стоить (V1, V2, V3)", snd: "cost.mp3"});
DicArray.push({eng: "clean", trk: "|kliːn|", ukr: "чистий", rus: "чистый", snd: "clean.mp3"});
DicArray.push({eng: "rest", trk: "|rest|", ukr: "відпочинок", rus: "отдых", snd: "rest.mp3"});
DicArray.push({eng: "sleep", trk: "|sliːp|", ukr: "спати", rus: "спать", snd: "sleep.mp3"});
DicArray.push({eng: "slept", trk: "|slɛpt|", ukr: "спати (V2, V3)", rus: "спать (V2, V3)", snd: "slept.mp3"});
DicArray.push({eng: "begin", trk: "|bɪˈɡɪn|", ukr: "почати", rus: "начинать", snd: "begin.mp3"});
DicArray.push({eng: "began", trk: "|bɪˈɡan|", ukr: "почати (V2)", rus: "начинать (V2)", snd: "began.mp3"});
DicArray.push({eng: "begun", trk: "|bɪˈɡʌn|", ukr: "почати (V3)", rus: "начинать (V3)", snd: "begun.mp3"});
DicArray.push({eng: "finish", trk: "|ˈfɪnɪʃ|", ukr: "закінчити", rus: "заканчивать", snd: "finish.mp3"});
DicArray.push({eng: "end", trk: "|end|", ukr: "кінець", rus: "конец", snd: "end.mp3"});
DicArray.push({eng: "be on time", trk: "|bi ɒn ˈtaɪm|", ukr: "бути вчасно", rus: "быть вовремя", snd: "be on time.mp3"});
DicArray.push({eng: "be late", trk: "|bi leɪt|", ukr: "спізнитися", rus: "опоздать", snd: "be late.mp3"});
DicArray.push({eng: "which", trk: "|wɪtʃ|", ukr: "котрий", rus: "который", snd: "which.mp3"});
DicArray.push({eng: "who", trk: "|huː|", ukr: "хто", rus: "кто", snd: "who.mp3"});
DicArray.push({eng: "whom", trk: "|huːm|", ukr: "кого", rus: "кого", snd: "whom.mp3"});
DicArray.push({eng: "that", trk: "|ðæt|", ukr: "той, який", rus: "тот, который", snd: "that.mp3"});