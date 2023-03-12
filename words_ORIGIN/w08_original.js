///////////
/*slint browser:true */
/*global window, document, btn1, btn1, btn2, btn3, btn4, btn4, btn5, question, statusbar, statusbar2*/
var DicArray = [];






DicArray.push({eng: "sunny", ukr: "сонячно", rus: "солнечно ", trk: "|ˈsʌni|"});
DicArray.push({eng: "windy", ukr: "вітряний", rus: "ветреный", trk: "|ˈwɪndi|"});
DicArray.push({eng: "cool", ukr: "прохолодний", rus: "прохладный", trk: "|kuːl|"});
DicArray.push({eng: "raining", ukr: "дощить", rus: "дождит", trk: "|ˈreɪnɪŋ|"});
DicArray.push({eng: "rainy", ukr: "дощовий", rus: "дождливый", trk: "|ˈreɪni|"});
DicArray.push({eng: "cloudy", ukr: "хмарно", rus: "облачно", trk: "|ˈklaʊdi|"});
DicArray.push({eng: "stuffy", ukr: "задушливий", rus: "душный", trk: "|ˈstʌfi|"});
DicArray.push({eng: "cold", ukr: "холодний", rus: "холодный", trk: "|kəʊld|"});
DicArray.push({eng: "snowing", ukr: "іде сніг", rus: "идет снег", trk: "|ˈsnəʊɪŋ|"});
DicArray.push({eng: "weather", ukr: "погода", rus: "погода", trk: "|ˈwɛðə|"});
DicArray.push({eng: "nasty", ukr: "неприємний", rus: "неприятный", trk: "|ˈnɑːsti|"});
DicArray.push({eng: "some", ukr: "дещо", rus: "некий", trk: "|sʌm|"});
DicArray.push({eng: "any", ukr: "будь-який", rus: "какой-угодно", trk: "|ˈeni|"});
DicArray.push({eng: "no", ukr: "ні, ніякий", rus: "нет, никакой", trk: "|nəʊ|"});
DicArray.push({eng: "none", ukr: "ніхто, ніщо", rus: "никто, ничто", trk: "|nʌn|"});
DicArray.push({eng: "all", ukr: "все", rus: "все", trk: "|ɔːl|"});
DicArray.push({eng: "whole", ukr: "цілий", rus: "целый", trk: "|həʊl|"});
DicArray.push({eng: "most", ukr: "більшість", rus: "большинство", trk: "|məʊst|"});
DicArray.push({eng: "each", ukr: "кожен", rus: "каждый", trk: "|iːtʃ|"});
DicArray.push({eng: "every", ukr: "кожен", rus: "каждый", trk: "|ˈɛvri|"});
DicArray.push({eng: "same", ukr: "той же", rus: "тот же", trk: "|seɪm|"});
DicArray.push({eng: "other", ukr: "інший", rus: "другой", trk: "|ˈʌðə|"});
DicArray.push({eng: "rest", ukr: "решта", rus: "остальное", trk: "|rest|"});
DicArray.push({eng: "own", ukr: "власний", rus: "собственный", trk: "|əʊn|"});
DicArray.push({eng: "one", ukr: "якийсь", rus: "этот же", trk: "|wʌn|"});
DicArray.push({eng: "both", ukr: "обидва", rus: "оба", trk: "|bəʊθ|"});
DicArray.push({eng: "neither", ukr: "ніхто, ніщо", rus: "никто, ништо", trk: "|ˈnʌɪðə|"});
DicArray.push({eng: "either", ukr: "один з двох", rus: "любой из двух ", trk: "|ˈʌɪðə|"});
DicArray.push({eng: "somebody", ukr: "хтось", rus: "кто-то", trk: "|ˈsʌmbədi|"});
DicArray.push({eng: "someone", ukr: "хтось", rus: "кто-то", trk: "|ˈsʌmwʌn|"});
DicArray.push({eng: "anybody", ukr: "хто завгодно", rus: "кто угодно", trk: "|ˈɛnɪbɒdi|"});
DicArray.push({eng: "anyone", ukr: "хто завгодно", rus: "кто угодно", trk: "|ˈɛnɪwʌn|"});
DicArray.push({eng: "everybody", ukr: "кожен", rus: "каждый", trk: "|ˈɛvrɪbɒdi|"});
DicArray.push({eng: "everyone", ukr: "кожен", rus: "каждый", trk: "|ˈɛvrɪwʌn|"});
DicArray.push({eng: "nobody", ukr: "ніхто", rus: "никто", trk: "|ˈnəʊbədi|"});
DicArray.push({eng: "something", ukr: "щось", rus: "что-то", trk: "|ˈsʌmθɪŋ|"});
DicArray.push({eng: "anything", ukr: "що завгодно", rus: "что угодно", trk: "|ˈɛnɪθɪŋ|"});
DicArray.push({eng: "everything", ukr: "все", rus: "все ", trk: "|ˈɛvrɪθɪŋ|"});
DicArray.push({eng: "nothing", ukr: "нічого", rus: "ничто", trk: "|ˈnʌθɪŋ|"});
DicArray.push({eng: "somewhere", ukr: "десь", rus: "где-то", trk: "|ˈsʌmwɛː|"});
DicArray.push({eng: "anywhere", ukr: "де завгодно", rus: "где угодно", trk: "|ˈɛnɪwɛː|"});
DicArray.push({eng: "everywhere", ukr: "скрізь", rus: "везде", trk: "|ˈɛvrɪwɛː|"});
DicArray.push({eng: "nowhere", ukr: "ніде", rus: "нигде", trk: "|ˈnəʊwɛː|"});