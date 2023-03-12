///////////
/*slint browser:true */
/*global window, document, btn1, btn1, btn2, btn3, btn4, btn4, btn5, question, statusbar, statusbar2*/
// (V2)
// (V3)
// (V2,V3)
// made
// did
// done
// went
// gone
// came
// come
var DicArray = [];






DicArray.push({eng: "make", trk: "|ˈmeɪk|", ukr: "зробити, виготовляти", rus: "делать, производить", snd: "make.mp3"});
DicArray.push({eng: "made", trk: "|ˈmeɪd|", ukr: "зробити, виготовляти (V2, V3)", rus: "делать, производить (V2, V3)", snd: "made.mp3"});
DicArray.push({eng: "do", trk: "|duː|", ukr: "робити, виконувати", rus: "делать, выполнять", snd: "do.mp3"});
DicArray.push({eng: "did", trk: "|dɪd|", ukr: "робити, виконувати (V2)", rus: "делать, выполнять (V2)", snd: "did.mp3"});
DicArray.push({eng: "done", trk: "|dʌn|", ukr: "робити, виконувати (V3)", rus: "делать, выполнять (V3)", snd: "done.mp3"});
DicArray.push({eng: "go", trk: "|ɡəʊ|", ukr: "йти, їхати", rus: "идти, ехать", snd: "go.mp3"});
DicArray.push({eng: "went", trk: "|ˈwent|", ukr: "йти, їхати (V2)", rus: "идти, ехать (V2)", snd: "went.mp3"});
DicArray.push({eng: "gone", trk: "|ɡɒn|", ukr: "йти, їхати (V3)", rus: "идти, ехать (V3)", snd: "gone.mp3"});
DicArray.push({eng: "came", trk: "|keɪm|", ukr: "приходити (V2)", rus: "приходить (V2)", snd: "came.mp3"});
DicArray.push({eng: "come", trk: "|kʌm|", ukr: "приходити (V1, V3)", rus: "приходить (V1, V3)", snd: "come.mp3"});
DicArray.push({eng: "work", trk: "|ˈwɜːk|", ukr: "працювати", rus: "трудиться", snd: "work.mp3"});
DicArray.push({eng: "need", trk: "|niːd|", ukr: "мати потребу", rus: "нуждаться", snd: "need.mp3"});
DicArray.push({eng: "show", trk: "|ʃəʊ|", ukr: "показати", rus: "показывать", snd: "show.mp3"});
DicArray.push({eng: "showed", trk: "|ʃəʊd|", ukr: "показати (V2)", rus: "показывать (V2)", snd: "showed.mp3"});
DicArray.push({eng: "shown", trk: "|ʃəʊn|", ukr: "показати (V3)", rus: "показывать (V3)", snd: "shown.mp3"});
DicArray.push({eng: "watch", trk: "|wɒtʃ|", ukr: "спостерігати", rus: "наблюдать", snd: "watch.mp3"});
DicArray.push({eng: "look", trk: "|lʊk|", ukr: "подивитися", rus: "смотреть", snd: "look.mp3"});
DicArray.push({eng: "see", trk: "|ˈsiː|", ukr: "побачити", rus: "видеть", snd: "see.mp3"});
DicArray.push({eng: "saw", trk: "|ˈsɔː|", ukr: "побачити (V2)", rus: "видеть (V2)", snd: "saw.mp3"});
DicArray.push({eng: "seen", trk: "|ˈsiːn|", ukr: "побачити (V3)", rus: "видеть (V3)", snd: "seen.mp3"});
DicArray.push({eng: "listen", trk: "|ˈlɪsn|", ukr: "слухати", rus: "слушать", snd: "listen.mp3"});
DicArray.push({eng: "hear", trk: "|hɪə|", ukr: "чути", rus: "слышать", snd: "hear.mp3"});
DicArray.push({eng: "heard", trk: "|ˈhɝːd|", ukr: "чути (V2, V3)", rus: "слышать (V2, V3)", snd: "heard.mp3"});
DicArray.push({eng: "get", trk: "|ˈɡet|", ukr: "отримати", rus: "получать", snd: "get.mp3"});
DicArray.push({eng: "got", trk: "|ˈɡɒt|", ukr: "отримати (V2, V3)", rus: "получать (V2, V3)", snd: "got.mp3"});
DicArray.push({eng: "put", trk: "|ˈpʊt|", ukr: "покласти (V1, V2, V3)", rus: "положить (V1, V2, V3)", snd: "put.mp3"});
DicArray.push({eng: "take", trk: "|teɪk|", ukr: "брати", rus: "брать", snd: "take.mp3"});
DicArray.push({eng: "took", trk: "|tʊk|", ukr: "брати (V2)", rus: "брать (V2)", snd: "took.mp3"});
DicArray.push({eng: "taken", trk: "|ˈteɪkən|", ukr: "брати (V3)", rus: "брать (V3)", snd: "taken.mp3"});
DicArray.push({eng: "give", trk: "|ɡɪv|", ukr: "давати", rus: "давать", snd: "give.mp3"});
DicArray.push({eng: "gave", trk: "|ɡeɪv|", ukr: "давати (V2)", rus: "давать (V2)", snd: "gave.mp3"});
DicArray.push({eng: "given", trk: "|ˈɡɪv(ə)n|", ukr: "давати (V3)", rus: "давать (V3)", snd: "given.mp3"});
DicArray.push({eng: "love", trk: "|ˈlʌv|", ukr: "кохати", rus: "любить", snd: "love.mp3"});
DicArray.push({eng: "like", trk: "|ˈlaɪk|", ukr: "подобатися", rus: "нравиться", snd: "like.mp3"});
DicArray.push({eng: "hate", trk: "|heɪt|", ukr: "ненавидіти", rus: "ненавидеть", snd: "hate.mp3"});
DicArray.push({eng: "live", trk: "|lɪv|", ukr: "жити", rus: "жить", snd: "live.mp3"});

DicArray.push({eng: "life", trk: "|laɪf|", ukr: "життя", rus: "жизнь", snd: "life.mp3"});
DicArray.push({eng: "think", trk: "|θɪŋk|", ukr: "думати", rus: "думать", snd: "think.mp3"});
DicArray.push({eng: "thought", trk: "θɔːt", ukr: "думати (V2, V3)", rus: "думать (V2, V3)", snd: "thought.mp3"});
DicArray.push({eng: "believe", trk: "|bɪˈliːv|", ukr: "вірити", rus: "верить", snd: "believe.mp3"});
DicArray.push({eng: "belief", trk: "|bɪˈliːf|", ukr: "віра, довіра", rus: "вера, доверие", snd: "belief.mp3"});
DicArray.push({eng: "suppose", trk: "|səˈpəʊz|", ukr: "припускати", rus: "предполагать", snd: "suppose.mp3"});
DicArray.push({eng: "supposition", trk: "|ˌsʌpəˈzɪʃ(ə)n|", ukr: "припущення", rus: "предположение ", snd: "supposition.mp3"});
DicArray.push({eng: "know", trk: "|nəʊ|", ukr: "знати", rus: "знать", snd: "know.mp3"});
DicArray.push({eng: "knew", trk: "|njuː|", ukr: "знати (V2)", rus: "знать (V2)", snd: "knew.mp3"});
DicArray.push({eng: "known", trk: "|nəʊn|", ukr: "знати (V3)", rus: "знать (V3)", snd: "known.mp3"});
DicArray.push({eng: "learn", trk: "|ləːn|", ukr: "вчитися", rus: "учиться", snd: "learn.mp3"});
DicArray.push({eng: "explain", trk: "|ɪkˈspleɪn|", ukr: "пояснити", rus: "объяснять", snd: "explain.mp3"});
DicArray.push({eng: "explanation", trk: "|ɛkspləˈneɪʃ(ə)n|", ukr: "пояснення", rus: "объяснение", snd: "explanation.mp3"});
DicArray.push({eng: "understand", trk: "|ʌndəˈstand|", ukr: "зрозуміти", rus: "понимать", snd: "understand.mp3"});
DicArray.push({eng: "understood", trk: "|ʌndəˈstʊd|", ukr: "зрозуміти (V2, V3)", rus: "понимать (V2, V3)", snd: "understood.mp3"});
DicArray.push({eng: "remember", trk: "|rɪˈmɛmbə|", ukr: "запам'ятати", rus: "помнить", snd: "remember.mp3"});
DicArray.push({eng: "forget", trk: "|fəˈɡɛt|", ukr: "забувати", rus: "забывать", snd: "forget.mp3"});
DicArray.push({eng: "forgot", trk: "|fəˈɡɒt|", ukr: "забувати (V2)", rus: "забывать (V2)", snd: "forgot.mp3"});
DicArray.push({eng: "forgotten", trk: "|fəˈɡɒtn|", ukr: "забувати (V3)", rus: "забывать (V3)", snd: "forgotten.mp3"});
DicArray.push({eng: "feel", trk: "|fiːl|", ukr: "відчувати", rus: "чувствовать", snd: "feel.mp3"});
DicArray.push({eng: "felt", trk: "|felt|", ukr: "відчувати (V2, V3)", rus: "чувствовать (V2, V3)", snd: "felt.mp3"});
DicArray.push({eng: "write", trk: "|rʌɪt|", ukr: "писати", rus: "писать", snd: "write.mp3"});
DicArray.push({eng: "wrote", trk: "|rəʊt|", ukr: "писати (V2)", rus: "писать (V2)", snd: "wrote.mp3"});
DicArray.push({eng: "written", trk: "|ˈrɪtn|", ukr: "писати (V3)", rus: "писать (V3)", snd: "written.mp3"});
DicArray.push({eng: "read", trk: "|riːd|", ukr: "читати (V1, V2, V3)", rus: "читать (V1, V2, V3)", snd: "read.mp3"});
DicArray.push({eng: "talk", trk: "|ˈtɔːk|", ukr: "говорити", rus: "разговаривать", snd: "talk.mp3"});
DicArray.push({eng: "told", trk: "|təʊld|", ukr: "розказувати (V2, V3)", rus: "рассказывать (V2, V3)", snd: "told.mp3"});
DicArray.push({eng: "tell", trk: "|tel|", ukr: "розказувати", rus: "рассказывать", snd: "tell.mp3"});
DicArray.push({eng: "say", trk: "|ˈseɪ|", ukr: "сказати", rus: "сказать", snd: "say.mp3"});
DicArray.push({eng: "said", trk: "|ˈsed|", ukr: "сказати (V2, V3)", rus: "сказать (V2, V3)", snd: "said.mp3"});
DicArray.push({eng: "speak", trk: "|spiːk|", ukr: "вимовляти", rus: "говорить", snd: "speak.mp3"});
DicArray.push({eng: "spoke", trk: "|spəʊk|", ukr: "вимовляти (V2)", rus: "говорить (V2)", snd: "spoke.mp3"});
DicArray.push({eng: "spoken", trk: "|ˈspəʊk(ə)n|", ukr: "вимовляти (V3)", rus: "говорить (V3)", snd: "spoken.mp3"});
DicArray.push({eng: "speech", trk: "|spiːtʃ|", ukr: "промова", rus: "речь", snd: "speech.mp3"});
DicArray.push({eng: "question", trk: "|ˈkwɛstʃ(ə)n|", ukr: "питання", rus: "вопрос", snd: "question.mp3"});
DicArray.push({eng: "ask", trk: "|ɑːsk|", ukr: "питати", rus: "спрашивать", snd: "ask.mp3"});
DicArray.push({eng: "answer", trk: "|ˈɑːnsə|", ukr: "відповісти", rus: "отвечать", snd: "answer.mp3"});
DicArray.push({eng: "call", trk: "|kɔːl|", ukr: "викликати", rus: "звать, звонить", snd: "call.mp3"});
