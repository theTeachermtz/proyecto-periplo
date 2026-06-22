/* ============================================================
 * periplo-curriculum.js — Fuente única del plan de estudio
 * ------------------------------------------------------------
 * Expone window.PERIPLO_CURRICULUM con las palabras EXACTAS del
 * currículo (grammar / verbs / nouns / adjectives / key_structs)
 * por nivel (basic / advanced / pro).
 *
 * Mismo patrón que periplo-ai.js y periplo-taxonomy.js: se carga
 * con <script src> y los dashboards lo consumen. Un cambio en las
 * palabras del plan se hace UNA sola vez aquí.
 *
 * Origen de los datos: el diccionario `T` de dashboard-match.html.
 * (match.html y dashboard-stp.html aún tienen su copia inline;
 *  pueden migrarse a este módulo en un refactor posterior.)
 * ============================================================ */
(function () {
  const CURRICULUM = {
    basic: {
      label: 'Basic',
      grammar: [
        { id: 'Modal Verbs', title: 'Modal Verbs', words: ["can","could","should","must","may","might","would","shall","will","ought to","be able to","have to"] },
        { id: 'Present Simple', title: 'Present Simple', words: ["do","does","don't","doesn't","always","never","usually","often","sometimes","every day","rarely","seldom"] },
        { id: 'Present Continuous', title: 'Present Continuous', words: ["am","is","are","now","right now","at the moment","currently","still","look!","listen!","today","this week"] },
        { id: 'Future (Going to)', title: 'Future (Going to)', words: ["going to","tomorrow","next week","soon","later","tonight","plan","intend","future","gonna","next month","this weekend"] }
      ],
      verbs: [
        { id: 'Pack 1: Daily Routine', title: 'Pack 1: Daily Routine', words: ["wake up","shower","prepare","take","pick up","get","start","work","help","send","attend","drive","fill up","review","sell","upload","download","leave","make","do","visit","walk","own","feed","go","see","sleep","bring","buy","lend"] },
        { id: 'Pack 2: Home & Communication', title: 'Pack 2: Home & Communication', words: ["get in","get out","agree","dance","arrive","practice","say","tell","speak","talk","rest","close","write","read","call","answer","wait for","meet","check","find","look for","eat","drink","cook","clean","wash","turn on","turn off","use","brush"] },
        { id: 'Pack 3: Travel & Adventure', title: 'Pack 3: Travel & Adventure', words: ["travel","pack","depart","tour","navigate","explore","board","land","take off","swim","book","check in","check out","stay","move","return","come","guide","wander","escape","survive","accommodate","cancel","camp","ride","fly","hike","sail","climb","cross"] },
        { id: 'Pack 4: Feelings & Reactions', title: 'Pack 4: Feelings & Reactions', words: ["feel","want","need","love","hate","prefer","hope","enjoy","miss","care","celebrate","complain","cry","laugh","smile","relax","worry","panic","plan","dream","decide","expect","wonder","imagine","choose","fear","trust","regret","remember","forget"] },
        { id: 'Pack 5: Action & Strategy', title: 'Pack 5: Action & Strategy', words: ["complete","report","solve","suggest","warn","accomplish","compare","park","carry","pay","push","pull","show","save","raise","go down","increase","reduce","reach","pass","throw","catch","jump","run","hide","stand","change","improve","fix","develop"] },
        { id: 'Pack 6: Social & Relationships', title: 'Pack 6: Social & Relationships', words: ["invite","accept","refuse","offer","advise","encourage","support","recommend","promise","introduce","greet","forgive","praise","criticize","appreciate","thank","blame","ignore","respect","admire","apologize","congratulate","comfort","defend","argue","teach","protect","allow","join","share"] },
        { id: 'Pack 7: Science & Lab', title: 'Pack 7: Science & Lab', words: ["describe","identify","realize","recognize","suppose","guess","measure","weigh","fill","empty","burn","freeze","melt","mix","connect","observe","test","analyze","prove","discover","invent","calculate","dissolve","contain","heat","cool","think","believe","know","grow"] },
        { id: 'Pack 8: Corporate & Economy', title: 'Pack 8: Corporate & Economy', words: ["hire","fire","earn","spend","invest","owe","promote","retire","resign","operate","produce","manufacture","distribute","store","export","import","inspect","negotiate","persuade","convince","represent","regulate","govern","vote","resolve","cooperate","compete","win","beat","gain"] },
        { id: 'Pack 9: Hospital & Health', title: 'Pack 9: Hospital & Health', words: ["cure","heal","suffer","bleed","recover","examine","diagnose","prescribe","treat","hurt","ache","cough","sneeze","breathe","faint","vomit","swell","itch","exercise","stretch","inject","scan","monitor","swallow","bandage","stitch","infect","vaccinate","sanitize","relapse"] }
      ],
      nouns: [
        { id: 'Pack 1: Modern Nomad', title: 'Pack 1: Modern Nomad', words: ["laptop","charger","smartphone","earbuds","power bank","screen","keyboard","password","network","signal","wallet","keys","backpack","sunglasses","umbrella","ticket","passport","id","cash","coin","receipt","bottle","tissue","notebook","pen","cord","adapter","headphones","map","badge"] },
        { id: 'Pack 2: Hungry Traveler', title: 'Pack 2: Hungry Traveler', words: ["meal","breakfast","lunch","dinner","snack","dessert","recipe","ingredient","flavor","slice","bowl","plate","fork","knife","spoon","napkin","glass","mug","pan","pot","stove","fridge","grocery","bill","tip","menu","chef","portion","counter","leftover"] },
        { id: 'Pack 3: Travel & Places', title: 'Pack 3: Travel & Places', words: ["beach","mountain","forest","river","lake","field","park","trail","hill","waterfall","island","cave","desert","road","airport","station","hotel","hostel","street","square","bridge","market","museum","restaurant","café","harbor","tower","stadium","pool","campsite"] },
        { id: 'Pack 4: Emotions & Mind', title: 'Pack 4: Emotions & Mind', words: ["party","trip","vacation","festival","concert","wedding","birthday","holiday","date","reunion","ceremony","surprise","plan","goal","dream","future","weekend","morning","evening","summer","winter","feeling","mood","fear","hope","stress","excitement","worry","anxiety","decision"] },
        { id: 'Pack 5: Weekend Getaway', title: 'Pack 5: Weekend Getaway', words: ["outfit","shirt","pants","jacket","coat","dress","skirt","shoes","boots","sneakers","hat","cap","belt","fabric","size","pocket","zipper","button","luggage","suitcase","towel","swimsuit","hotel","hostel","destination","journey","trail","market","reservation","souvenir"] },
        { id: 'Pack 6: People & Society', title: 'Pack 6: People & Society', words: ["friend","neighbor","stranger","partner","colleague","boss","classmate","roommate","cousin","sibling","parent","child","guest","host","teammate","rival","mentor","member","leader","couple","relative","companion","crowd","team","group","family","society","community","generation","acquaintance"] },
        { id: 'Pack 7: Science & Lab', title: 'Pack 7: Science & Lab', words: ["research","data","evidence","information","knowledge","energy","technology","electricity","oxygen","water","matter","heat","light","gravity","experiment","scientist","theory","result","sample","discovery","species","laboratory","microscope","hypothesis","formula","molecule","cell","atom","element","device"] },
        { id: 'Pack 8: Money & Power', title: 'Pack 8: Money & Power', words: ["revenue","profit","loss","budget","contract","merger","partnership","stock","market","currency","tax","investment","debt","asset","strategy","policy","board","shareholder","quarter","forecast","inflation","loan","dividend","headquarters","department","transaction","account","wage","brand","penalty"] },
        { id: 'Pack 9: Body & Health', title: 'Pack 9: Body & Health', words: ["symptom","diagnosis","treatment","prescription","dose","surgery","wound","injury","infection","fever","allergy","vaccine","hospital","clinic","emergency","ambulance","shelter","signal","bandage","pulse","organ","blood","lung","heart","bone","muscle","nerve","scar","ration","recovery"] }
      ],
      adjectives: [
        { id: 'Pack 1: Personality & Looks', title: 'Pack 1: Personality & Looks', words: ["tall","short","young","old","beautiful","ugly","strong","weak","smart","stupid","friendly","mean","funny","serious","lazy","hardworking","shy","outgoing","polite","rude","brave","scared","careful","careless","honest"] },
        { id: 'Pack 2: Feelings & State', title: 'Pack 2: Feelings & State', words: ["happy","sad","angry","calm","tired","energetic","hungry","full","thirsty","quenched","sick","healthy","nervous","relaxed","confused","sure","proud","ashamed","lonely","loved","upset","glad","grateful","ungrateful","jealous"] },
        { id: 'Pack 3: Places & Vibes', title: 'Pack 3: Places & Vibes', words: ["big","small","clean","dirty","safe","dangerous","quiet","noisy","crowded","empty","cheap","expensive","near","far","open","closed","public","private","modern","traditional","bright","dark","warm","cold","cozy"] },
        { id: 'Pack 4: The -ed/-ing Trap', title: 'Pack 4: The -ed/-ing Trap', words: ["bored","boring","interested","interesting","excited","exciting","confused","confusing","surprised","surprising","frightened","frightening","annoyed","annoying","exhausted","exhausting","amazed","amazing","relaxed","relaxing","disappointed","disappointing","worried","worrying","overwhelmed"] },
        { id: 'Pack 5: Opinions & Taste', title: 'Pack 5: Opinions & Taste', words: ["good","bad","great","terrible","delicious","disgusting","easy","difficult","right","wrong","true","false","important","useless","fair","unfair","weird","normal","useful","pointless","perfect","flawed","awesome","awful","favorite"] }
      ],
      key_structs: [
        { id: 'WH Questions', title: 'WH Questions', words: ["What","Where","When","Who","Why","Which","How","What time","How often","How much","How many","How long"] },
        { id: 'FANBOYS & Correlative', title: 'FANBOYS & Correlative', words: ["for","and","nor","but","or","yet","so","not only","either","neither"] },
        { id: 'Subordinating Conj.', title: 'Subordinating Conj.', words: ["because","although","if","since","while","unless","after","before","that's why"] },
        { id: 'Prep. Time', title: 'Prep. Time', words: ["in","on","at","before","after","during","for","since","until"] },
        { id: 'Prep. Place', title: 'Prep. Place', words: ["in","on","at","under","over","between","behind","in front of","next to","beside","above","below"] },
        { id: 'Prep. Movement & Other', title: 'Prep. Movement & Other', words: ["to","into","across","through","along","past","out of","up","down","with","about","by","from","of","as","like","against","ahead"] },
        { id: 'Possessive & Object Pron.', title: 'Possessive & Object Pron.', words: ["my","your","his","her","its","our","their","me","you","him","us","them"] },
        { id: 'Quantifiers', title: 'Quantifiers', words: ["some","any","much","many","a lot of","a few","a little","several","enough","half","all","most"] },
        { id: 'Frequency Adverbs', title: 'Frequency Adverbs', words: ["always","usually","normally","often","sometimes","occasionally","never","every once in a while","once a","twice a","every","rarely"] }
      ]
    },
    advanced: {
      label: 'Advanced',
      grammar: [
        { id: 'Past Simple', title: 'Past Simple', words: ["did","didn't","was","were","yesterday","last week","ago","went","saw","had","became","thought"] },
        { id: 'Second Conditional', title: 'Second Conditional', words: ["if I were","would","could","might","imaginary","unlikely","I wish","what if","suppose","in that case","hypothetical","unreal"] },
        { id: 'Past Continuous', title: 'Past Continuous', words: ["was","were","wasn't","weren't","while","when","at that time","all day","still","during","happening","in the middle of"] },
        { id: 'Past Future Intention', title: 'Past Future Intention', words: ["was going to","were going to","was about to","planned to","intended to","expected to","supposed to","hoped to","meant to","was planning","wasn't going to","were about to"] }
      ],
      verbs: [
        { id: 'Irregular A-F', title: 'Irregular A-F', words: ["be/was/been","become/became","begin/began","bite/bit","blow/blew","break/broke","bring/brought","build/built","buy/bought","catch/caught","choose/chose","come/came","cost/cost","cut/cut","dig/dug","do/did/done","draw/drew","dream/dreamt","drink/drank","drive/drove","eat/ate","fall/fell","feed/fed","feel/felt","fight/fought","find/found","fly/flew","forget/forgot","forgive/forgave","freeze/froze"] },
        { id: 'Irregular G-M', title: 'Irregular G-M', words: ["get/got","give/gave","go/went","grow/grew","hang/hung","have/had","hear/heard","hide/hid","hit/hit","hold/held","hurt/hurt","keep/kept","know/knew","lay/laid","lead/led","learn/learnt","leave/left","lend/lent","let/let","lie/lay","light/lit","lose/lost","make/made","mean/meant","meet/met","pay/paid","put/put","read/read","ride/rode","ring/rang"] },
        { id: 'Irregular R-S', title: 'Irregular R-S', words: ["rise/rose","run/ran","say/said","see/saw","sell/sold","send/sent","set/set","shake/shook","shine/shone","shoot/shot","show/showed","shut/shut","sing/sang","sit/sat","sleep/slept","speak/spoke","spend/spent","stand/stood","steal/stole","stick/stuck","strike/struck","swim/swam","swing/swung","take/took","teach/taught","tear/tore","tell/told","think/thought","throw/threw","understand/understood"] },
        { id: 'Irregular T-W', title: 'Irregular T-W', words: ["wake/woke","wear/wore","win/won","write/wrote","bet/bet","bind/bound","broadcast/broadcast","burst/burst","cast/cast","cling/clung","creep/crept","deal/dealt","dive/dove","flee/fled","fling/flung","forbid/forbade","grind/ground","kneel/knelt","lean/leant","leap/leapt","overcome/overcame","rid/rid","seek/sought","sew/sewed","shed/shed","shrink/shrank","sow/sowed","spin/spun","split/split","spread/spread"] },
        { id: 'Regular /t/ Sound', title: 'Regular /t/ Sound', words: ["asked","cooked","crossed","danced","developed","discussed","dressed","dropped","finished","fixed","helped","hoped","increased","kissed","laughed","liked","looked","missed","mixed","noticed","parked","passed","picked","practiced","pushed","reached","relaxed","stopped","walked","washed"] },
        { id: 'Regular /d/ Sound', title: 'Regular /d/ Sound', words: ["answered","arrived","called","changed","cleaned","closed","complained","delivered","described","enjoyed","explained","followed","imagined","improved","learned","listened","lived","loved","moved","offered","opened","ordered","planned","played","prepared","remembered","returned","showed","traveled","used"] },
        { id: 'Regular /ɪd/ Sound', title: 'Regular /ɪd/ Sound', words: ["accepted","admitted","attended","avoided","collected","completed","connected","created","decided","demanded","depended","divided","ended","expected","exported","granted","heated","insisted","invited","landed","needed","painted","planted","pointed","printed","protected","rented","reported","started","visited"] }
      ],
      nouns: [
        { id: 'Pack 1: Success & Failure', title: 'Pack 1: Success & Failure', words: ["achievement","setback","milestone","breakthrough","resilience","ambition","recognition","downfall","reputation","momentum","obstacle","legacy","persistence","comeback","sacrifice","credibility","rivalry","burnout","accolade","determination","plateau","underdog","pinnacle","turning point","adversity"] },
        { id: 'Pack 2: Truth & Lies', title: 'Pack 2: Truth & Lies', words: ["deception","sincerity","integrity","allegation","distortion","cover-up","transparency","manipulation","fabrication","whistleblower","propaganda","rumor","disclosure","accountability","misinformation","betrayal","illusion","half-truth","bias","agenda","facade","confession","disinformation","trust","denial"] },
        { id: 'Pack 3: Media & Entertainment', title: 'Pack 3: Media & Entertainment', words: ["streaming","algorithm","franchise","narrative","celebrity","audience","platform","ratings","sequel","influencer","tabloid","premiere","screenplay","genre","portrayal","coverage","blockbuster","controversy","brand","critic","format","fandom","spotlight","debut","backlash"] },
        { id: 'Pack 4: Regrets & Turning Points', title: 'Pack 4: Regrets & Turning Points', words: ["regret","crossroads","opportunity","consequence","reflection","hindsight","burden","aftermath","closure","decision","realization","loss","redemption","path","reconciliation","second chance","watershed","dilemma","longing","nostalgia","resolution","wound","what-if","pivotal moment","estrangement"] },
        { id: 'Pack 5: Attraction & Identity', title: 'Pack 5: Attraction & Identity', words: ["attraction","obsession","personality","deal breaker","chemistry","phase","habit","preference","identity","pattern","connection","type","vibe","compatibility","instinct","spark","desire","vulnerability","boundary","attachment","impression","gut feeling","red flag","comfort zone","shift"] },
        { id: 'Pack 6: Ambition & Competition', title: 'Pack 6: Ambition & Competition', words: ["benchmark","leverage","disruption","dominance","merit","hustle","contender","prestige","pursuit","edge","incentive","outsider","summit","turnaround","quota","promotion","negotiation","shortlist","runner-up","pitfall","competitor","headhunter","stakeholder","pipeline","coercion"] },
        { id: 'Pack 7: Mystery & Crime', title: 'Pack 7: Mystery & Crime', words: ["suspect","testimony","alibi","motive","forensics","jurisdiction","verdict","perpetrator","witness","accomplice","surveillance","conspiracy","evidence","interrogation","corruption","breach","detective","clue","informant","prosecution","extortion","loophole","misconduct","threat","disparity"] },
        { id: 'Pack 8: Systems & Society', title: 'Pack 8: Systems & Society', words: ["institution","hierarchy","bureaucracy","inequality","legislation","oversight","mechanism","reform","coalition","authority","compliance","regime","legitimacy","policy","marginalization","framework","census","subsidy","constituency","ideology","norm","privilege","governance","mobilization"] }
      ],
      adjectives: [
        { id: 'Short Comparatives', title: 'Short Comparatives', words: ["taller","shorter","bigger","smaller","older","younger","faster","slower","cheaper","stronger","weaker","smarter","harder","softer","thinner","thicker","darker","brighter","wider","narrower","deeper","higher","lower","cleaner","dirtier"] },
        { id: 'Long Comparatives', title: 'Long Comparatives', words: ["more beautiful","more dangerous","more expensive","more important","more interesting","more difficult","more comfortable","more popular","more powerful","more traditional","more intelligent","more creative","more successful","more professional","more convenient","more efficient","more effective","more significant","more complicated","more challenging","more impressive","more reasonable","more reliable","more sensitive","more generous"] },
        { id: 'Irregular Comparatives', title: 'Irregular Comparatives', words: ["better","worse","farther","further","less","more","elder","older","latter","former","upper","lower","inner","outer","better than","worse than","the best","the worst","the least","the most","as good as","as bad as","not as good","not as bad","the farthest"] },
        { id: 'Superlatives', title: 'Superlatives', words: ["the tallest","the shortest","the biggest","the smallest","the fastest","the slowest","the cheapest","the most expensive","the most beautiful","the most dangerous","the most important","the most interesting","the best","the worst","the farthest","the least","the most","the oldest","the youngest","the strongest","the smartest","the hardest","the easiest","the richest","the poorest"] }
      ],
      key_structs: [
        { id: 'Used to / Use to', title: 'Used to / Use to', words: ["used to","didn't use to","did you use to","I used to live","she used to work","they used to play","we didn't use to","he used to be","it used to cost","never used to","always used to","used to believe"] },
        { id: 'Comparative Rules', title: 'Comparative Rules', words: ["than","more...than","less...than","as...as","not as...as","the more...the more","much more","a lot better","far worse","slightly bigger","a bit cheaper","way more expensive"] },
        { id: 'Superlative Rules', title: 'Superlative Rules', words: ["the most","the least","the -est","one of the best","by far the worst","the second largest","the third most","ever","of all","in the world","I've ever seen","the fastest growing"] },
        { id: 'Idiomatic Expressions', title: 'Idiomatic Expressions', words: ["break the ice","hit the road","call it a day","piece of cake","once in a blue moon","under the weather","on the same page","the last straw","cut corners","go the extra mile","sleep on it","a blessing in disguise"] },
        { id: 'Possessive Nouns', title: 'Possessive Nouns', words: ["John's car","my mother's house","the dog's bone","children's toys","the boss's office","ladies' room","men's clothing","someone's phone","everybody's favorite","nobody's fault","each other's","one another's"] },
        { id: 'Relative Clauses', title: 'Relative Clauses', words: ["who","which","that","where","when","whose","whom","the man who","the book which","the place where","the reason why","the person whose"] },
        { id: 'Modals of Possibility', title: 'Modals of Possibility', words: ["might","could","may","might have","could have","may have","can't have","must have","should have","would have","might not","could not have"] },
        { id: 'Passive Voice', title: 'Passive Voice', words: ["is made","was built","are sold","were found","has been done","had been sent","will be finished","being repaired","been discovered","get paid","got fired","being used"] }
      ]
    },
    pro: {
      label: 'Pro',
      grammar: [
        { id: 'Present/Past Perfect', title: 'Present/Past Perfect', words: ["have done","has been","had finished","haven't seen","hasn't arrived","had already left","have you ever","has she been","had they known","just","already","yet"] },
        { id: 'Perfect Continuous', title: 'Perfect Continuous', words: ["have been working","has been living","had been waiting","have been studying","has been raining","had been trying","how long have you been","she's been cooking","they'd been playing","since morning","for hours","all day long"] },
        { id: 'Third Conditional', title: 'Third Conditional', words: ["if I had known","would have gone","could have been","might have said","wouldn't have happened","if she had studied","he would have passed","they could have won","if we had left","would not have missed","should have told","if it had rained"] },
        { id: 'Mixed Conditionals', title: 'Mixed Conditionals', words: ["if I had studied, I would be","if she were braver, she would have","if they had saved, they would own","if he weren't lazy, he would have finished","if I spoke French, I would have gotten","if we had met earlier, we would be","if you had listened, you wouldn't be","if it weren't so far, I would have visited","if she had accepted, she would be","if I were you, I would have said","if they weren't busy, they would have come","if he had trained, he would be"] }
      ],
      verbs: [
        { id: 'Phrasal Verbs 2', title: 'Phrasal Verbs 2', words: ["look into","come across","turn down","put off","bring up","carry out","break down","figure out","give up","hold on","keep up","let down","make up","pick out","point out","rule out","set up","show off","sort out","stand out","take over","turn out","work out","back up","blow up","call off","check out","come up with","cut down","drop off"] },
        { id: 'Idiomatic Expressions', title: 'Idiomatic Expressions', words: ["bite the bullet","burn bridges","cost an arm and a leg","get cold feet","hit the nail on the head","in the same boat","jump the gun","keep your chin up","let the cat out of the bag","miss the boat","no pain no gain","pull someone's leg","ring a bell","spill the beans","the ball is in your court","throw in the towel","under the radar","wrap your head around","you can say that again","beat around the bush","break a leg","cry over spilled milk","every cloud has a silver lining","get out of hand","go back to the drawing board","kill two birds with one stone","once in a lifetime","play it by ear","sit tight","take it with a grain of salt"] },
        { id: 'Sayings & Proverbs', title: 'Sayings & Proverbs', words: ["actions speak louder than words","better late than never","don't judge a book by its cover","easy come, easy go","fortune favors the bold","great minds think alike","honesty is the best policy","ignorance is bliss","knowledge is power","laughter is the best medicine","money can't buy happiness","no news is good news","out of sight, out of mind","practice makes perfect","Rome wasn't built in a day","silence is golden","the early bird catches the worm","time is money","two wrongs don't make a right","what goes around comes around","where there's a will there's a way","you reap what you sow","curiosity killed the cat","every dog has its day","haste makes waste","if it ain't broke don't fix it","the grass is always greener","there's no place like home","when in Rome do as the Romans","you can't have your cake and eat it too"] },
        { id: 'Advanced Collocations', title: 'Advanced Collocations', words: ["make a decision","take responsibility","pay attention","catch someone's eye","do someone a favor","give someone a hand","have a go","keep a promise","lose your temper","make an effort","raise awareness","reach a conclusion","run a risk","set a goal","take advantage","break a habit","come to terms","draw a conclusion","face the consequences","gain experience","hold a grudge","keep track","make progress","take into account","catch a glimpse","do justice","give priority","have an impact","make sense","take for granted"] }
      ],
      nouns: [
        { id: 'Pack 1: Law & Politics', title: 'Pack 1: Law & Politics', words: ["trial","court","judge","jury","lawyer","lawsuit","verdict","sentence","crime","suspect","witness","evidence","right","citizenship","election","campaign","candidate","debate","policy","bill","law","treaty","reform","authority","boundary"] },
        { id: 'Pack 2: Finance & Econ.', title: 'Pack 2: Finance & Econ.', words: ["economy","market","stock","share","asset","liability","investment","investor","profit","loss","revenue","expense","budget","deficit","debt","loan","mortgage","interest","inflation","currency","exchange","trade","poverty","wealth","crisis"] },
        { id: 'Pack 3: Collective Nouns', title: 'Pack 3: Collective Nouns', words: ["flock","herd","swarm","pack","school","pride","colony","troop","bunch","bundle","batch","set","pile","stack","array","cluster","series","sequence","range","panel","board","committee","crew","gang","mob"] },
        { id: 'Pack 4: Uncountables', title: 'Pack 4: Uncountables', words: ["advice","furniture","luggage","baggage","equipment","information","knowledge","research","progress","homework","housework","evidence","damage","trash","garbage","jewelry","poetry","scenery","machinery","software","hardware","lightning","luck","weather","accommodation"] },
        { id: 'Pack 5: Formal & Academic', title: 'Pack 5: Formal & Academic', words: ["hypothesis","thesis","methodology","framework","approach","paradigm","bias","scope","criterion","phenomenon","validity","aspect","perspective","core","proportion","emphasis","implication","notion","context","discourse","phase","transition","hierarchy","principle","parameter"] }
      ],
      adjectives: [
        { id: 'Formal Register Adj.', title: 'Formal Register Adj.', words: ["adequate","comprehensive","crucial","feasible","legitimate","mandatory","negligible","pertinent","provisional","subsequent","substantial","unprecedented","viable","ambiguous","concise","coherent","compelling","detrimental","elaborate","explicit","inherent","profound","relevant","rigorous","sufficient"] },
        { id: 'Nuance & Tone Adj.', title: 'Nuance & Tone Adj.', words: ["allegedly","presumably","seemingly","arguably","essentially","fundamentally","predominantly","virtually","inevitably","inherently","marginally","moderately","overwhelmingly","partially","primarily","significantly","substantially","thoroughly","ultimately","utterly","barely","merely","scarcely","somewhat","vaguely"] }
      ],
      key_structs: [
        { id: 'Inversion', title: 'Inversion', words: ["never have I","rarely does she","seldom do we","not only did he","hardly had they","no sooner had I","little did I know","under no circumstances","only then did","at no point","in no way","on no account"] },
        { id: 'Cleft Sentences', title: 'Cleft Sentences', words: ["it was X who","it is Y that","what I need is","what she said was","the thing that","the reason why","the place where","the person who","all I want is","what matters is","the way in which","it's not that"] },
        { id: 'Participle Clauses', title: 'Participle Clauses', words: ["having finished","being tired","not knowing","having been told","seen from above","written in English","left alone","given the chance","compared to","based on","considering that","judging by"] },
        { id: 'Wish & Regret', title: 'Wish & Regret', words: ["I wish I had","if only I could","I wish I were","if only they hadn't","I wish you would","I regret not","I should have","I shouldn't have","if only I knew","I wish it were","if only we had","I regret saying"] },
        { id: 'Double Comparatives', title: 'Double Comparatives', words: ["the more the better","the sooner the better","the harder you work the more you earn","the less you worry the happier you are","the bigger the risk the bigger the reward","the more I learn the less I know","the older I get the wiser I become","the faster you run the more tired you get","the cheaper it is the worse the quality","more and more","less and less","better and better"] }
      ]
    }
  };

  // Helper: junta los packs de un grupo de vocab (verbs + nouns + adjectives) de un nivel.
  function getVocabPacks(level) {
    const lvl = CURRICULUM[level];
    if (!lvl) return [];
    return [
      ...(lvl.verbs || []).map(p => ({ ...p, kind: 'verbs' })),
      ...(lvl.nouns || []).map(p => ({ ...p, kind: 'nouns' })),
      ...(lvl.adjectives || []).map(p => ({ ...p, kind: 'adjectives' }))
    ];
  }

  window.PERIPLO_CURRICULUM = {
    CURRICULUM,
    LEVELS: ['basic', 'advanced', 'pro'],
    LEVEL_LABELS: { basic: 'Basic', advanced: 'Advanced', pro: 'Pro' },
    getVocabPacks
  };
})();
