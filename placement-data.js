// placement-data.js — fuente única del placement (BANK + FLEET + ENTRY).
// Generado desde placement-test.html. Lo consumen placement-test.html y dashboard-pt.html.
// No editar a mano el contenido de las preguntas: usar dashboard-pt.html.
window.PERIPLO_PLACEMENT = (function () {
const BANK = {
  topics: [
    {
      id: 'modal_verbs', level: 'B1', week: 1, grammar: 'Modal Verbs',
      skills_source: 'oficial',
      questions: [
        { id:'modal_F1', skill:'Significado correcto', tier:'facil', tool:'multipleChoice', auto:true, L1:false, q:'I have my laptop and a good signal, so I ___ work from anywhere.', options:['can','must','should','might'], answer:'can' },
        { id:'modal_F2', skill:'Estructura Negativa', tier:'facil', tool:'trueFalse', auto:true, L1:false, q:'"You mustn\'t take photos here" means it is NOT allowed.', answer:true },
        { id:'modal_F3', skill:'Significado correcto', tier:'facil', tool:'matching', auto:true, L1:false, q:'Match each modal with its function.', pairs:[{left:'Can',right:'Ability / permission'},{left:'Must',right:'Obligation'},{left:'Should',right:'Advice'},{left:'Might',right:'Possibility'},{left:'Will',right:'Future'}] },
        { id:'modal_F4', skill:'Identifica al escuchar', tier:'facil', tool:'audioQuestion', auto:true, L1:false, audioText:'You should charge your power bank before you leave.', q:'What is the speaker doing?', options:['Giving advice','Giving an order','Asking permission','Making a prediction'], answer:'Giving advice' },
        { id:'modal_M1', skill:'Significado correcto', tier:'medio', tool:'fillBlank', auto:true, L1:false, q:'I\'m not sure about my plans. I ___ visit my family this weekend.', hint:'posibilidad (no es seguro)', answer:'might' },
        { id:'modal_M2', skill:'Estructura Interrogativa', tier:'medio', tool:'unscramble', auto:true, L1:false, tokens:['Where','can','I','buy','a','ticket','?'], answer:'Where can I buy a ticket?' },
        { id:'modal_M3', skill:'Aplica estructura fluida', tier:'medio', tool:'dialogueFill', auto:true, L1:false, context:['A: I can\'t find my passport!','B: ___'], options:['You should look in your backpack.','You must look in your backpack.','You might look in your backpack.','You will look in your backpack.'], answer:'You should look in your backpack.' },
        { id:'modal_M4', skill:'Estructura Negativa', tier:'medio', tool:'fillBlank', auto:true, L1:false, q:'There is no signal here, so I ___ send the email.', hint:'no puedo (negativo de can)', answer:"can't", accept:['cannot','can not'] },
        { id:'modal_D1', skill:"Omisión del 'to'", tier:'dificil', tool:'multipleResponse', auto:true, L1:true, q:'Select ALL the grammatically correct sentences.', options:['I can help you tomorrow.','I can to help you tomorrow.','She won\'t buy a new charger.','He should drives carefully.'], answers:['I can help you tomorrow.','She won\'t buy a new charger.'] },
        { id:'modal_D2', skill:"Omisión del 'to'", tier:'dificil', tool:'spotError', auto:true, L1:true, q:'You should to charge your power bank.', errorWord:'to', answer:'You should charge your power bank.' },
        { id:'modal_D3', skill:'Estructura Interrogativa', tier:'dificil', tool:'errorCorrection', auto:true, L1:true, q:'Where I can buy a ticket?', answer:'Where can I buy a ticket?' },
        { id:'modal_D4', skill:'Estructura Negativa', tier:'dificil', tool:'errorCorrection', auto:true, L1:true, q:'You don\'t should buy that adapter.', answer:'You shouldn\'t buy that adapter.' }
      ]
    },
    {
      id: 'present_simple', level: 'B1', week: 2, grammar: 'Present Simple',
      skills_source: 'oficial',
      questions: [
        { id:'psimple_F1', skill:"Regla de la 's'", tier:'facil', tool:'multipleChoice', auto:true, L1:false, q:'My sister ___ breakfast every morning.', options:['cooks','is cooking','cook','is cook'], answer:'cooks' },
        { id:'psimple_F2', skill:"Negación don't/doesn't", tier:'facil', tool:'trueFalse', auto:true, L1:false, q:'"She doesn\'t eat dessert" is the correct negative form.', answer:true },
        { id:'psimple_F3', skill:'Identifica al escuchar', tier:'facil', tool:'audioQuestion', auto:true, L1:false, audioText:'He always washes the plates after dinner.', q:'How often does he wash the plates?', options:['Always','Never','Sometimes','Once'], answer:'Always' },
        { id:'psimple_F4', skill:"Regla de la 's'", tier:'facil', tool:'categorySort', auto:true, L1:false, q:"Sort each subject by the verb form it needs.", pool:['He','She','My chef','They','We','You'], buckets:[{label:'reads the menu',correct:['He','She','My chef']},{label:'read the menu',correct:['They','We','You']}] },
        { id:'psimple_M1', skill:'Auxiliar Do/Does', tier:'medio', tool:'fillBlank', auto:true, L1:false, q:'___ your brother cook dinner on weekends?', hint:'auxiliar para 3ra persona', answer:'Does' },
        { id:'psimple_M2', skill:"Regla de la 's'", tier:'medio', tool:'wordForm', auto:true, L1:false, q:'My mom ___ the dishes after lunch. (wash)', options:['washs','washes','wash','washing'], answer:'washes' },
        { id:'psimple_M3', skill:'WH Questions', tier:'medio', tool:'unscramble', auto:true, L1:false, tokens:['What','time','does','she','eat','lunch','?'], answer:'What time does she eat lunch?' },
        { id:'psimple_M4', skill:'Aplica estructura fluida', tier:'medio', tool:'dialogueFill', auto:true, L1:false, context:['A: Does your brother wash the plates?','B: ___'], options:['No, he doesn\'t. I wash them.','No, he don\'t. I washes them.','No, he isn\'t. I washing them.','No, he no wash. I wash them.'], answer:"No, he doesn't. I wash them." },
        { id:'psimple_D1', skill:"Regla de la 's'", tier:'dificil', tool:'multipleResponse', auto:true, L1:true, q:'Select ALL the grammatically correct sentences.', options:['She cooks dinner every night.','He don\'t eat breakfast.','They read the menu carefully.','My friend speak with the chef.'], answers:['She cooks dinner every night.','They read the menu carefully.'] },
        { id:'psimple_D2', skill:"Regla de la 's'", tier:'dificil', tool:'spotError', auto:true, L1:true, q:'My father cook dinner every Sunday.', errorWord:'cook', answer:'My father cooks dinner every Sunday.' },
        { id:'psimple_D3', skill:'Auxiliar Do/Does', tier:'dificil', tool:'errorCorrection', auto:true, L1:true, q:'Where your sister eat lunch?', answer:'Where does your sister eat lunch?' },
        { id:'psimple_D4', skill:"Negación don't/doesn't", tier:'dificil', tool:'errorCorrection', auto:true, L1:true, q:'He no eat dessert.', answer:"He doesn't eat dessert." }
      ]
    },
    {
      id: 'present_continuous', level: 'B1', week: 3, grammar: 'Present Continuous',
      skills_source: 'oficial',
      questions: [
        { id:'pcont_F1', skill:'Verbo To Be', tier:'facil', tool:'multipleChoice', auto:true, L1:false, q:'Look! The boss ___ talking to a client right now.', options:['is','are','am','does'], answer:'is' },
        { id:'pcont_F2', skill:'Reglas deletreo', tier:'facil', tool:'trueFalse', auto:true, L1:false, q:"The -ing form of 'write' is 'writing' (we drop the final e).", answer:true },
        { id:'pcont_F3', skill:'Identifica al escuchar', tier:'facil', tool:'audioQuestion', auto:true, L1:false, audioText:'She is preparing the presentation right now.', q:'When is she preparing it?', options:['Now','Yesterday','Every day','Never'], answer:'Now' },
        { id:'pcont_F4', skill:'Sufijo -ing', tier:'facil', tool:'matching', auto:true, L1:false, q:'Match each base verb with its -ing form.', pairs:[{left:'come',right:'coming'},{left:'stay',right:'staying'},{left:'fix',right:'fixing'},{left:'travel',right:'traveling'}] },
        { id:'pcont_M1', skill:'Verbo To Be', tier:'medio', tool:'fillBlank', auto:true, L1:false, q:"We ___ having a meeting at the office right now.", hint:"to be para 'we'", answer:'are' },
        { id:'pcont_M2', skill:'WH Questions', tier:'medio', tool:'unscramble', auto:true, L1:false, tokens:['Why','is','the','employee','leaving','early','?'], answer:'Why is the employee leaving early?' },
        { id:'pcont_M3', skill:'Reglas deletreo', tier:'medio', tool:'wordForm', auto:true, L1:false, q:'He is ___ the report now. (write)', options:['writeing','writing','writting','writes'], answer:'writing' },
        { id:'pcont_M4', skill:'Aplica estructura fluida', tier:'medio', tool:'dialogueFill', auto:true, L1:false, context:['A: Where is your boss?','B: ___'], options:['He is having a meeting.','He having a meeting.','He is have a meeting.','He have a meeting.'], answer:'He is having a meeting.' },
        { id:'pcont_D1', skill:'Contraste vs Simple', tier:'dificil', tool:'multipleResponse', auto:true, L1:true, q:'Select ALL the grammatically correct sentences.', options:['She is finishing the report now.','She finishing the report now.','I work at the office every day.','I am work at the office every day.'], answers:['She is finishing the report now.','I work at the office every day.'] },
        { id:'pcont_D2', skill:'Verbo To Be', tier:'dificil', tool:'errorCorrection', auto:true, L1:true, q:'The employees working overtime today.', answer:'The employees are working overtime today.' },
        { id:'pcont_D3', skill:'Contraste vs Simple', tier:'dificil', tool:'errorCorrection', auto:true, L1:true, q:'She is knowing the answer.', answer:'She knows the answer.' },
        { id:'pcont_D4', skill:'Reglas deletreo', tier:'dificil', tool:'spotError', auto:true, L1:true, q:'He is writeing a long report.', errorWord:'writeing', answer:'He is writing a long report.' }
      ]
    },
    {
      id: 'going_to', level: 'B1', week: 4, grammar: "Future 'Going to'",
      skills_source: 'oficial',
      questions: [
        { id:'goingto_F1', skill:"Inclusión To Be", tier:'facil', tool:'multipleChoice', auto:true, L1:false, q:'I ___ going to take the subway downtown.', options:['am','is','are','do'], answer:'am' },
        { id:'goingto_F2', skill:'Contraste vs Will', tier:'facil', tool:'trueFalse', auto:true, L1:false, q:"We use 'going to' for plans we decided before now.", answer:true },
        { id:'goingto_F3', skill:'Identifica al escuchar', tier:'facil', tool:'audioQuestion', auto:true, L1:false, audioText:'They are going to build a new bridge downtown.', q:'What are they going to build?', options:['A bridge','A subway','A station','A highway'], answer:'A bridge' },
        { id:'goingto_F4', skill:"Partícula 'to'", tier:'facil', tool:'oddOneOut', auto:true, L1:false, q:'Which sentence is INCORRECT?', options:["I'm going to celebrate.","She's going to deliver it.","We're going to sign it.","He's going celebrate."], answer:"He's going celebrate." },
        { id:'goingto_M1', skill:"Inclusión To Be", tier:'medio', tool:'fillBlank', auto:true, L1:false, q:"The passengers ___ going to wait for the next flight.", hint:"to be para 'passengers'", answer:'are' },
        { id:'goingto_M2', skill:'WH Questions', tier:'medio', tool:'unscramble', auto:true, L1:false, tokens:['What','are','you','going','to','order','?'], answer:'What are you going to order?' },
        { id:'goingto_M3', skill:'Negación', tier:'medio', tool:'fillBlank', auto:true, L1:false, q:"There's too much traffic. We ___ going to arrive on time.", hint:"negativo de 'are'", answer:"aren't", accept:['are not'] },
        { id:'goingto_M4', skill:'Contraste vs Will', tier:'medio', tool:'dialogueFill', auto:true, L1:false, context:['A: The phone is ringing!','B: ___'], options:["I'll answer it.","I'm going to answer it.","I answer it.","I answering it."], answer:"I'll answer it." },
        { id:'goingto_D1', skill:"Partícula 'to'", tier:'dificil', tool:'multipleResponse', auto:true, L1:true, q:'Select ALL the grammatically correct sentences.', options:['She is going to celebrate.','She going to celebrate.','They are going to sign the contract.','They are going sign the contract.'], answers:['She is going to celebrate.','They are going to sign the contract.'] },
        { id:'goingto_D2', skill:"Inclusión To Be", tier:'dificil', tool:'errorCorrection', auto:true, L1:true, q:'I going to learn English this year.', answer:'I am going to learn English this year.' },
        { id:'goingto_D3', skill:"Partícula 'to'", tier:'dificil', tool:'errorCorrection', auto:true, L1:true, q:'He is going celebrate his promotion.', answer:'He is going to celebrate his promotion.' },
        { id:'goingto_D4', skill:"Partícula 'to'", tier:'dificil', tool:'spotError', auto:true, L1:true, q:'She is going to buys a ticket.', errorWord:'buys', answer:'She is going to buy a ticket.' }
      ]
    },
    {
      id: 'prepositions', level: 'B2', week: 1, grammar: 'Prepositions',
      skills_source: 'propuesto',
      questions: [
        { id:'prep_F1', skill:'in/on/at (lugar)', tier:'facil', tool:'multipleChoice', auto:true, L1:false, q:'Your boots are ___ the suitcase.', options:['in','on','at','to'], answer:'in' },
        { id:'prep_F2', skill:'in/on/at (tiempo)', tier:'facil', tool:'multipleChoice', auto:true, L1:false, q:'The market opens ___ 9 a.m.', options:['at','in','on','to'], answer:'at' },
        { id:'prep_F3', skill:'in/on/at (lugar)', tier:'facil', tool:'audioQuestion', auto:true, L1:false, audioText:'I left my hat on the bed at the hotel.', q:'Where is the hat?', options:['On the bed','In the suitcase','At the market','Under the chair'], answer:'On the bed' },
        { id:'prep_F4', skill:'in/on/at (tiempo)', tier:'facil', tool:'categorySort', auto:true, L1:false, q:'Sort each time expression into IN, ON or AT.', pool:['July','Monday','night','the morning','my birthday','noon'], buckets:[{label:'IN',correct:['July','the morning']},{label:'ON',correct:['Monday','my birthday']},{label:'AT',correct:['night','noon']}] },
        { id:'prep_M1', skill:'Prep. de movimiento', tier:'medio', tool:'fillBlank', auto:true, L1:false, q:'We walked ___ the market to find a souvenir.', hint:'a través de', answer:'through' },
        { id:'prep_M2', skill:'in/on/at (lugar)', tier:'medio', tool:'fillBlank', auto:true, L1:false, q:"Put your phone ___ your pocket so you don't lose it.", hint:'dentro de', answer:'in' },
        { id:'prep_M3', skill:'in/on/at (lugar)', tier:'medio', tool:'unscramble', auto:true, L1:false, tokens:['Where','is','the','nearest','hotel','?'], answer:'Where is the nearest hotel?' },
        { id:'prep_M4', skill:'Prep. de movimiento', tier:'medio', tool:'contextMatch', auto:true, L1:false, q:'Match each situation with the correct phrase.', pairs:[{situation:'Algo está dentro de la maleta',phrase:'in the suitcase'},{situation:'Algo está sobre la mesa',phrase:'on the table'},{situation:'El destino de un viaje',phrase:'to the beach'},{situation:'Pasar a través de un túnel',phrase:'through the tunnel'}] },
        { id:'prep_D1', skill:'Omisión/exceso de prep', tier:'dificil', tool:'errorCorrection', auto:true, L1:true, q:'It depends of the weather.', answer:'It depends on the weather.' },
        { id:'prep_D2', skill:'in/on/at (lugar)', tier:'dificil', tool:'errorCorrection', auto:true, L1:true, q:'My jacket is in the chair.', answer:'My jacket is on the chair.' },
        { id:'prep_D3', skill:'Omisión/exceso de prep', tier:'dificil', tool:'spotError', auto:true, L1:true, q:'We arrived to the hotel at night.', errorWord:'to', answer:'We arrived at the hotel at night.' },
        { id:'prep_D4', skill:'Omisión/exceso de prep', tier:'dificil', tool:'multipleResponse', auto:true, L1:true, q:'Select ALL the grammatically correct sentences.', options:['She is good at sports.','She is good in sports.',"I'm interested in art.","I'm interested on art."], answers:['She is good at sports.',"I'm interested in art."] }
      ]
    },
    {
      id: 'object_pronouns', level: 'B2', week: 2, grammar: 'Object Pronouns',
      skills_source: 'propuesto',
      questions: [
        { id:'objpron_F1', skill:'It para cosas', tier:'facil', tool:'multipleChoice', auto:true, L1:false, q:'My friend loves this song. Listen to ___.', options:['it','its','he','she'], answer:'it' },
        { id:'objpron_F2', skill:'Objeto vs Sujeto', tier:'facil', tool:'multipleChoice', auto:true, L1:false, q:"I don't know your sister. Please introduce ___ to me.", options:['her','she','hers','him'], answer:'her' },
        { id:'objpron_F3', skill:'Identifica al escuchar', tier:'facil', tool:'audioQuestion', auto:true, L1:false, audioText:'Can you help us with the project?', q:'Who needs help?', options:['The speakers (us)','Only me','Them','Him'], answer:'The speakers (us)' },
        { id:'objpron_F4', skill:'Objeto vs Sujeto', tier:'facil', tool:'matching', auto:true, L1:false, q:'Match each subject pronoun with its object form.', pairs:[{left:'I',right:'me'},{left:'he',right:'him'},{left:'she',right:'her'},{left:'we',right:'us'},{left:'they',right:'them'}] },
        { id:'objpron_M1', skill:'It para cosas', tier:'medio', tool:'fillBlank', auto:true, L1:false, q:'I really like this idea. Tell me more about ___.', hint:'objeto, es una cosa', answer:'it' },
        { id:'objpron_M2', skill:'Posición del objeto', tier:'medio', tool:'unscramble', auto:true, L1:false, tokens:['I','call','her','every','day'], answer:'I call her every day.' },
        { id:'objpron_M3', skill:'Objeto vs Sujeto', tier:'medio', tool:'fillBlank', auto:true, L1:false, q:'They invited my brother and ___ to the meeting.', hint:'objeto, no sujeto', answer:'me' },
        { id:'objpron_M4', skill:'Aplica estructura fluida', tier:'medio', tool:'dialogueFill', auto:true, L1:false, context:['A: Do you know Mr. López?','B: ___'], options:['Yes, I know him.','Yes, I know he.','Yes, I know his.','Yes, I him know.'], answer:'Yes, I know him.' },
        { id:'objpron_D1', skill:'Posición del objeto', tier:'dificil', tool:'errorCorrection', auto:true, L1:true, q:'I it want now.', answer:'I want it now.' },
        { id:'objpron_D2', skill:'Objeto vs Sujeto', tier:'dificil', tool:'errorCorrection', auto:true, L1:true, q:'Give the book to I.', answer:'Give the book to me.' },
        { id:'objpron_D3', skill:'It para cosas', tier:'dificil', tool:'spotError', auto:true, L1:true, q:'I have a new phone. Do you like she?', errorWord:'she', answer:'I have a new phone. Do you like it?' },
        { id:'objpron_D4', skill:'Pronombre redundante', tier:'dificil', tool:'multipleResponse', auto:true, L1:true, q:'Select ALL the grammatically correct sentences.', options:['My parents love me.','My parents they love me.','She understands us.','She she understands us.'], answers:['My parents love me.','She understands us.'] }
      ]
    },
    {
      id: 'quantifiers', level: 'B2', week: 3, grammar: 'Quantifiers + There is/are',
      skills_source: 'propuesto',
      questions: [
        { id:'quant_F1', skill:'Much vs Many', tier:'facil', tool:'multipleChoice', auto:true, L1:false, q:'How ___ people came to the protest?', options:['many','much','a little','any'], answer:'many' },
        { id:'quant_F2', skill:'Some vs Any', tier:'facil', tool:'multipleChoice', auto:true, L1:false, q:"There isn't ___ evidence yet.", options:['any','some','many','a few'], answer:'any' },
        { id:'quant_F3', skill:'Identifica al escuchar', tier:'facil', tool:'audioQuestion', auto:true, L1:false, audioText:'There are many volunteers in the campaign.', q:'How many volunteers are there?', options:['Many','A few','None','Only one'], answer:'Many' },
        { id:'quant_F4', skill:'There is vs There are', tier:'facil', tool:'trueFalse', auto:true, L1:false, q:'"There is three results" is correct.', answer:false },
        { id:'quant_M1', skill:'Some vs Any', tier:'medio', tool:'fillBlank', auto:true, L1:false, q:'We have ___ data, but we need more.', hint:'afirmativo', answer:'some' },
        { id:'quant_M2', skill:'There is vs There are', tier:'medio', tool:'fillBlank', auto:true, L1:false, q:'___ a new theory about the experiment.', hint:'singular: there + be', answer:'There is', accept:["There's"] },
        { id:'quant_M3', skill:'Contable vs No contable', tier:'medio', tool:'categorySort', auto:true, L1:false, q:'Sort each noun into COUNTABLE or UNCOUNTABLE.', pool:['event','data','species','research','survey','evidence'], buckets:[{label:'COUNTABLE',correct:['event','species','survey']},{label:'UNCOUNTABLE',correct:['data','research','evidence']}] },
        { id:'quant_M4', skill:'Aplica estructura fluida', tier:'medio', tool:'dialogueFill', auto:true, L1:false, context:['A: Is there any research on this topic?','B: ___'], options:['Yes, there is some.','Yes, there is any.','Yes, there are some.','Yes, it has some.'], answer:'Yes, there is some.' },
        { id:'quant_D1', skill:'Much vs Many', tier:'dificil', tool:'errorCorrection', auto:true, L1:true, q:'There are too much problems in the community.', answer:'There are too many problems in the community.' },
        { id:'quant_D2', skill:'There is vs There are', tier:'dificil', tool:'errorCorrection', auto:true, L1:true, q:'Have many people at the event.', answer:'There are many people at the event.' },
        { id:'quant_D3', skill:'Some vs Any', tier:'dificil', tool:'spotError', auto:true, L1:true, q:"I don't have some money for the campaign.", errorWord:'some', answer:"I don't have any money for the campaign." },
        { id:'quant_D4', skill:'Contable vs No contable', tier:'dificil', tool:'multipleResponse', auto:true, L1:true, q:'Select ALL the grammatically correct sentences.', options:['She has a few ideas.','She has a few research.','There is a little evidence.','There are a little evidence.'], answers:['She has a few ideas.','There is a little evidence.'] }
      ]
    },
    {
      id: 'possessive_pronouns', level: 'B2', week: 4, grammar: 'Possessive Pronouns',
      skills_source: 'propuesto',
      questions: [
        { id:'poss_F1', skill:'Adjetivo vs Pronombre', tier:'facil', tool:'multipleChoice', auto:true, L1:false, q:'This budget is ___, not yours.', options:['mine','my','me',"mine's"], answer:'mine' },
        { id:'poss_F2', skill:'his/her concordancia', tier:'facil', tool:'multipleChoice', auto:true, L1:false, q:'Sarah signed ___ contract this morning.', options:['her','his','hers','its'], answer:'her' },
        { id:'poss_F3', skill:'Identifica al escuchar', tier:'facil', tool:'audioQuestion', auto:true, L1:false, audioText:'This account is theirs, not ours.', q:'Whose account is it?', options:['Theirs','Ours','Mine','His'], answer:'Theirs' },
        { id:'poss_F4', skill:'Adjetivo vs Pronombre', tier:'facil', tool:'matching', auto:true, L1:false, q:'Match each possessive adjective with its possessive pronoun.', pairs:[{left:'my',right:'mine'},{left:'your',right:'yours'},{left:'her',right:'hers'},{left:'our',right:'ours'},{left:'their',right:'theirs'}] },
        { id:'poss_M1', skill:'Sin sustantivo después', tier:'medio', tool:'fillBlank', auto:true, L1:false, q:'My salary is high, but ___ is higher. (you)', hint:'pronombre posesivo, sin sustantivo', answer:'yours' },
        { id:'poss_M2', skill:'his/her concordancia', tier:'medio', tool:'fillBlank', auto:true, L1:false, q:'John forgot ___ password at the office.', hint:'John es hombre', answer:'his' },
        { id:'poss_M3', skill:'Sin sustantivo después', tier:'medio', tool:'unscramble', auto:true, L1:false, tokens:['This','brand','is','ours'], answer:'This brand is ours.' },
        { id:'poss_M4', skill:'Aplica estructura fluida', tier:'medio', tool:'dialogueFill', auto:true, L1:false, context:['A: Whose strategy won the deal?','B: ___'], options:['Ours did.','Our did.','Us did.',"Ours' did."], answer:'Ours did.' },
        { id:'poss_D1', skill:'Adjetivo vs Pronombre', tier:'dificil', tool:'errorCorrection', auto:true, L1:true, q:'This account is my, not yours.', answer:'This account is mine, not yours.' },
        { id:'poss_D2', skill:'his/her concordancia', tier:'dificil', tool:'errorCorrection', auto:true, L1:true, q:'Mary forgot his wallet at the bank.', answer:'Mary forgot her wallet at the bank.' },
        { id:'poss_D3', skill:'Sin sustantivo después', tier:'dificil', tool:'spotError', auto:true, L1:true, q:'That budget is hers budget.', errorWord:'budget', answer:'That budget is hers.' },
        { id:'poss_D4', skill:'Adjetivo vs Pronombre', tier:'dificil', tool:'multipleResponse', auto:true, L1:true, q:'Select ALL the grammatically correct sentences.', options:['The profit is theirs.','The profit is their.','These assets are ours.','These assets are our.'], answers:['The profit is theirs.','These assets are ours.'] }
      ]
    },
    {
      id: 'past_simple', level: 'A1', week: 1, grammar: 'Past Simple',
      skills_source: 'propuesto',
      questions: [
        { id:'psimp_F1', skill:'Forma regular -ed', tier:'facil', tool:'multipleChoice', auto:true, L1:false, q:'Last year she ___ a major milestone.', options:['reached','reach','reaches','reaching'], answer:'reached' },
        { id:'psimp_F2', skill:'Auxiliar Did (interrogativo)', tier:'facil', tool:'trueFalse', auto:true, L1:false, q:'"Did he achieved his goal?" is correct.', answer:false },
        { id:'psimp_F3', skill:'Identifica al escuchar', tier:'facil', tool:'audioQuestion', auto:true, L1:false, audioText:'He finally reached his goal after years of setbacks.', q:'When did he reach his goal?', options:['In the past','Right now','Tomorrow','Never'], answer:'In the past' },
        { id:'psimp_M1', skill:'Forma regular -ed', tier:'medio', tool:'fillBlank', auto:true, L1:false, q:'After many obstacles, the underdog ___ (finish) the race.', hint:'pasado regular', answer:'finished' },
        { id:'psimp_M2', skill:'-ed deletreo', tier:'medio', tool:'fillBlank', auto:true, L1:false, q:'She ___ hard for her breakthrough. (study → ?)', hint:'y→ied', answer:'studied' },
        { id:'psimp_M3', skill:'Auxiliar Did (interrogativo)', tier:'medio', tool:'unscramble', auto:true, L1:false, tokens:['When','did','she','start','her','comeback','?'], answer:'When did she start her comeback?' },
        { id:'psimp_M4', skill:'Aplica estructura fluida', tier:'medio', tool:'dialogueFill', auto:true, L1:false, context:['A: Did he reach his goal?','B: ___'], options:['Yes, he did. He worked hard.','Yes, he did worked hard.','Yes, he reached. He work hard.','Yes, he was. He worked hard.'], answer:'Yes, he did. He worked hard.' },
        { id:'psimp_D1', skill:"Negación didn't + base", tier:'dificil', tool:'multipleResponse', auto:true, L1:true, q:'Select ALL the grammatically correct sentences.', options:["She didn't finish the project.","She didn't finished the project.",'He started late but recovered.','He start late but recovered.'], answers:["She didn't finish the project.",'He started late but recovered.'] },
        { id:'psimp_D2', skill:'Auxiliar Did (interrogativo)', tier:'dificil', tool:'spotError', auto:true, L1:true, q:'Did she achieved her ambition?', errorWord:'achieved', answer:'Did she achieve her ambition?' },
        { id:'psimp_D3', skill:"Negación didn't + base", tier:'dificil', tool:'errorCorrection', auto:true, L1:true, q:'He no finished the project on time.', answer:"He didn't finish the project on time." },
        { id:'psimp_D4', skill:'Auxiliar Did (interrogativo)', tier:'dificil', tool:'errorCorrection', auto:true, L1:true, q:'Why she failed the first time?', answer:'Why did she fail the first time?' }
      ]
    },
    {
      id: 'second_conditional', level: 'A1', week: 2, grammar: 'Second Conditional',
      skills_source: 'propuesto',
      questions: [
        { id:'scond_F1', skill:'would + base', tier:'facil', tool:'multipleChoice', auto:true, L1:false, q:'If I knew the truth, I ___ you.', options:['would tell','will tell','would told','would to tell'], answer:'would tell' },
        { id:'scond_F2', skill:'Were para todas las personas', tier:'facil', tool:'trueFalse', auto:true, L1:false, q:"In the second conditional, 'If I were you' uses 'were' for all persons.", answer:true },
        { id:'scond_F3', skill:'Identifica al escuchar', tier:'facil', tool:'audioQuestion', auto:true, L1:false, audioText:'If she told the truth, everyone would trust her.', q:'Is this a real or an imaginary situation?', options:['Imaginary','Real / happening now','Past fact','Future fact'], answer:'Imaginary' },
        { id:'scond_M1', skill:'If + past simple', tier:'medio', tool:'fillBlank', auto:true, L1:false, q:'If he ___ (know) about the betrayal, he would be furious.', hint:'pasado simple en la cláusula if', answer:'knew' },
        { id:'scond_M2', skill:'Were para todas las personas', tier:'medio', tool:'unscramble', auto:true, L1:false, tokens:['If','I','were','you','I','would','confess'], answer:'If I were you, I would confess.' },
        { id:'scond_M3', skill:'would + base', tier:'medio', tool:'fillBlank', auto:true, L1:false, q:'If they trusted us, we ___ (share) everything.', hint:'would + verbo base', answer:'would share' },
        { id:'scond_M4', skill:'Aplica estructura fluida', tier:'medio', tool:'dialogueFill', auto:true, L1:false, context:['A: What would you do if you found a cover-up?','B: ___'], options:['I would report it.','I will report it.','I would reported it.','I would to report it.'], answer:'I would report it.' },
        { id:'scond_D1', skill:"No 'would' en la cláusula if", tier:'dificil', tool:'multipleResponse', auto:true, L1:true, q:'Select ALL the grammatically correct sentences.', options:['If I had money, I would travel.','If I would have money, I would travel.','If she were honest, I\'d trust her.','If she would be honest, I\'d trust her.'], answers:['If I had money, I would travel.','If she were honest, I\'d trust her.'] },
        { id:'scond_D2', skill:"No 'would' en la cláusula if", tier:'dificil', tool:'errorCorrection', auto:true, L1:true, q:'If I would know the truth, I would tell you.', answer:'If I knew the truth, I would tell you.' },
        { id:'scond_D3', skill:'Were para todas las personas', tier:'dificil', tool:'errorCorrection', auto:true, L1:true, q:'If I was a whistleblower, I would expose them.', answer:'If I were a whistleblower, I would expose them.' },
        { id:'scond_D4', skill:'would + base', tier:'dificil', tool:'spotError', auto:true, L1:true, q:'If they trusted me, I would told them everything.', errorWord:'told', answer:'If they trusted me, I would tell them everything.' }
      ]
    },
    {
      id: 'past_continuous', level: 'A1', week: 3, grammar: 'Past Continuous',
      skills_source: 'propuesto',
      questions: [
        { id:'pcont2_F1', skill:'Was/Were + -ing', tier:'facil', tool:'multipleChoice', auto:true, L1:false, q:'At 9 PM, millions ___ watching the premiere.', options:['were','was','are','is'], answer:'were' },
        { id:'pcont2_F2', skill:'Contraste vs Past Simple', tier:'facil', tool:'trueFalse', auto:true, L1:false, q:'Past continuous describes an action in progress in the past.', answer:true },
        { id:'pcont2_F3', skill:'Identifica al escuchar', tier:'facil', tool:'audioQuestion', auto:true, L1:false, audioText:'The audience was leaving when the celebrity arrived.', q:'What was the audience doing when the celebrity arrived?', options:['Leaving','Arriving','Watching','Clapping'], answer:'Leaving' },
        { id:'pcont2_M1', skill:'Was/Were + -ing', tier:'medio', tool:'fillBlank', auto:true, L1:false, q:'While the critic ___ (write) the review, the news broke.', hint:'was + verbo-ing', answer:'was writing' },
        { id:'pcont2_M2', skill:'Contraste vs Past Simple', tier:'medio', tool:'unscramble', auto:true, L1:false, tokens:['What','were','you','watching','when','it','happened','?'], answer:'What were you watching when it happened?' },
        { id:'pcont2_M3', skill:'-ing deletreo', tier:'medio', tool:'fillBlank', auto:true, L1:false, q:'The influencer was ___ live. (stream → ?)', hint:'stream + ming', answer:'streaming' },
        { id:'pcont2_M4', skill:'Aplica estructura fluida', tier:'medio', tool:'dialogueFill', auto:true, L1:false, context:['A: What were you doing when the sequel was released?','B: ___'], options:['I was waiting in line.','I waiting in line.','I was wait in line.','I waited all the time.'], answer:'I was waiting in line.' },
        { id:'pcont2_D1', skill:'Contraste vs Past Simple', tier:'dificil', tool:'multipleResponse', auto:true, L1:true, q:'Select ALL the grammatically correct sentences.', options:['I was watching TV when she called.','I watching TV when she called.','While they were filming, it started to rain.','While they filming, it started to rain.'], answers:['I was watching TV when she called.','While they were filming, it started to rain.'] },
        { id:'pcont2_D2', skill:'Was/Were + -ing', tier:'dificil', tool:'errorCorrection', auto:true, L1:true, q:'The fans waiting outside all night.', answer:'The fans were waiting outside all night.' },
        { id:'pcont2_D3', skill:'Concordancia was/were', tier:'dificil', tool:'errorCorrection', auto:true, L1:true, q:'The critics was writing their reviews.', answer:'The critics were writing their reviews.' },
        { id:'pcont2_D4', skill:'-ing deletreo', tier:'dificil', tool:'spotError', auto:true, L1:true, q:'She was writeing a review of the blockbuster.', errorWord:'writeing', answer:'She was writing a review of the blockbuster.' }
      ]
    },
    {
      id: 'was_were_going_to', level: 'A1', week: 4, grammar: 'Was/Were Going To',
      skills_source: 'propuesto',
      questions: [
        { id:'wgt_F1', skill:'Was/Were going to + base', tier:'facil', tool:'multipleChoice', auto:true, L1:false, q:'I ___ going to take that opportunity, but I hesitated.', options:['was','were','am','did'], answer:'was' },
        { id:'wgt_F2', skill:'Plan no cumplido', tier:'facil', tool:'trueFalse', auto:true, L1:false, q:"'I was going to call, but I didn't' describes a plan that did NOT happen.", answer:true },
        { id:'wgt_F3', skill:'Identifica al escuchar', tier:'facil', tool:'audioQuestion', auto:true, L1:false, audioText:'She was going to apologize, but she changed her mind.', q:'Did she apologize?', options:['No','Yes','Maybe','Later'], answer:'No' },
        { id:'wgt_M1', skill:'Was/Were going to + base', tier:'medio', tool:'fillBlank', auto:true, L1:false, q:'We were going to ___ (make) a decision, but we reached a crossroads.', hint:'going to + verbo base', answer:'make' },
        { id:'wgt_M2', skill:'Was/Were going to + base', tier:'medio', tool:'unscramble', auto:true, L1:false, tokens:['What','were','you','going','to','do','?'], answer:'What were you going to do?' },
        { id:'wgt_M3', skill:'Negación', tier:'medio', tool:'fillBlank', auto:true, L1:false, q:"He ___ going to take the risk after all.", hint:"wasn't / was not", answer:"wasn't", accept:['was not'] },
        { id:'wgt_M4', skill:'Aplica estructura fluida', tier:'medio', tool:'dialogueFill', auto:true, L1:false, context:["A: Weren't you going to move abroad?",'B: ___'], options:['I was, but I had second thoughts.','I was going move, but no.','I were going to, but no.','I going to, but no.'], answer:'I was, but I had second thoughts.' },
        { id:'wgt_D1', skill:'Was/Were going to + base', tier:'dificil', tool:'multipleResponse', auto:true, L1:true, q:'Select ALL the grammatically correct sentences.', options:['She was going to leave.','She was going to left.','They were going to invest.','They was going to invest.'], answers:['She was going to leave.','They were going to invest.'] },
        { id:'wgt_D2', skill:'Was/Were going to + base', tier:'dificil', tool:'errorCorrection', auto:true, L1:true, q:'I was going to called you last night.', answer:'I was going to call you last night.' },
        { id:'wgt_D3', skill:'Concordancia was/were', tier:'dificil', tool:'errorCorrection', auto:true, L1:true, q:'We going to take that path, but we changed our minds.', answer:'We were going to take that path, but we changed our minds.' },
        { id:'wgt_D4', skill:'Concordancia was/were', tier:'dificil', tool:'spotError', auto:true, L1:true, q:'They was going to reconcile, but it was too late.', errorWord:'was', answer:'They were going to reconcile, but it was too late.' }
      ]
    },
    {
      id: 'used_to', level: 'A2', week: 1, grammar: 'Used To',
      skills_source: 'propuesto',
      questions: [
        { id:'usedto_F1', skill:'Used to + base', tier:'facil', tool:'multipleChoice', auto:true, L1:false, q:'I ___ fall for the wrong type of person.', options:['used to','use to','used to falling','would to'], answer:'used to' },
        { id:'usedto_F2', skill:'Contraste hábito pasado vs presente', tier:'facil', tool:'trueFalse', auto:true, L1:false, q:"'I used to smoke' means it was a past habit that has stopped.", answer:true },
        { id:'usedto_F3', skill:'Identifica al escuchar', tier:'facil', tool:'audioQuestion', auto:true, L1:false, audioText:'She used to be very guarded, but now she opens up easily.', q:'How is she now?', options:['Open','Guarded','Shy','The same'], answer:'Open' },
        { id:'usedto_F4', skill:'Used to + base (oddOneOut)', tier:'facil', tool:'oddOneOut', auto:true, L1:false, q:'Which sentence is INCORRECT?', options:['I used to play.','He used to live here.',"She didn't use to care.",'They used to playing.'], answer:'They used to playing.' },
        { id:'usedto_M1', skill:'Used to + base', tier:'medio', tool:'fillBlank', auto:true, L1:false, q:'He ___ (have) a different type, but his preferences changed.', hint:'used to + verbo base', answer:'used to have' },
        { id:'usedto_M2', skill:'Interrogación Did...use to', tier:'medio', tool:'unscramble', auto:true, L1:false, tokens:['Did','you','use','to','trust','people','?'], answer:'Did you use to trust people?' },
        { id:'usedto_M3', skill:"Negación didn't use to", tier:'medio', tool:'fillBlank', auto:true, L1:false, q:"I ___ use to believe in chemistry.", hint:"didn't / did not", answer:"didn't", accept:['did not'] },
        { id:'usedto_M4', skill:'Aplica estructura fluida', tier:'medio', tool:'dialogueFill', auto:true, L1:false, context:['A: Did you use to be different?','B: ___'], options:['Yes, I used to be more spontaneous.','Yes, I use to be more spontaneous.','Yes, I used to being spontaneous.','Yes, I was used to be spontaneous.'], answer:'Yes, I used to be more spontaneous.' },
        { id:'usedto_D1', skill:"Negación didn't use to (sin -d)", tier:'dificil', tool:'multipleResponse', auto:true, L1:true, q:'Select ALL the grammatically correct sentences.', options:["I didn't use to care.","I didn't used to care.",'Did you use to live here?','Did you used to live here?'], answers:["I didn't use to care.",'Did you use to live here?'] },
        { id:'usedto_D2', skill:"Negación didn't use to (sin -d)", tier:'dificil', tool:'errorCorrection', auto:true, L1:true, q:"I didn't used to like him.", answer:"I didn't use to like him." },
        { id:'usedto_D3', skill:'Used to + base', tier:'dificil', tool:'errorCorrection', auto:true, L1:true, q:'She used to falling for unavailable people.', answer:'She used to fall for unavailable people.' },
        { id:'usedto_D4', skill:'Interrogación Did...use to', tier:'dificil', tool:'spotError', auto:true, L1:true, q:'Did he used to be so charming?', errorWord:'used', answer:'Did he use to be so charming?' }
      ]
    },
    {
      id: 'comparatives_superlatives', level: 'A2', week: 2, grammar: 'Comparatives & Superlatives',
      skills_source: 'propuesto',
      questions: [
        { id:'comp_F1', skill:'Comparativo -er vs more', tier:'facil', tool:'multipleChoice', auto:true, L1:false, q:'This contender is ___ than the others.', options:['stronger','more strong','strongest','more stronger'], answer:'stronger' },
        { id:'comp_F2', skill:'Superlativo the + -est/most', tier:'facil', tool:'multipleChoice', auto:true, L1:false, q:'She is ___ competitor in the league.', options:['the most ruthless','most ruthless','the ruthlessest','more ruthless'], answer:'the most ruthless' },
        { id:'comp_F3', skill:'Identifica al escuchar', tier:'facil', tool:'audioQuestion', auto:true, L1:false, audioText:'Their strategy was better than ours, but ours was the cheapest.', q:'Whose strategy was cheaper?', options:['Ours','Theirs','Both','Neither'], answer:'Ours' },
        { id:'comp_M1', skill:'Comparativo -er vs more', tier:'medio', tool:'fillBlank', auto:true, L1:false, q:"This year's benchmark is ___ (high) than last year's.", hint:'comparativo de adjetivo corto', answer:'higher' },
        { id:'comp_M2', skill:'Superlativo the + -est/most', tier:'medio', tool:'fillBlank', auto:true, L1:false, q:'It was the ___ negotiation of her career. (tough)', hint:'the + adj + est', answer:'toughest' },
        { id:'comp_M3', skill:"Than (no 'that')", tier:'medio', tool:'unscramble', auto:true, L1:false, tokens:['This','deal','is','better','than','the','last','one'], answer:'This deal is better than the last one.' },
        { id:'comp_M4', skill:'Aplica estructura fluida', tier:'medio', tool:'dialogueFill', auto:true, L1:false, context:['A: Who is the best contender?','B: ___'], options:['She is the most strategic of all.','She is most strategic of all.','She is the strategicest.','She is more strategic that all.'], answer:'She is the most strategic of all.' },
        { id:'comp_D1', skill:'Irregulares / doble comparativo', tier:'dificil', tool:'multipleResponse', auto:true, L1:true, q:'Select ALL the grammatically correct sentences.', options:['He is more ambitious than me.','He is more ambitiouser than me.','This is the hardest pursuit.','This is the most hardest pursuit.'], answers:['He is more ambitious than me.','This is the hardest pursuit.'] },
        { id:'comp_D2', skill:"Than (no 'that')", tier:'dificil', tool:'errorCorrection', auto:true, L1:true, q:'This promotion is more important that the last one.', answer:'This promotion is more important than the last one.' },
        { id:'comp_D3', skill:'Irregulares / doble comparativo', tier:'dificil', tool:'errorCorrection', auto:true, L1:true, q:'She is more smarter than her competitor.', answer:'She is smarter than her competitor.' },
        { id:'comp_D4', skill:'Superlativo the + -est/most', tier:'dificil', tool:'spotError', auto:true, L1:true, q:'He is the most strongest contender in the room.', errorWord:'most', answer:'He is the strongest contender in the room.' }
      ]
    },
    {
      id: 'relative_clauses', level: 'A2', week: 3, grammar: 'Relative Clauses + Modals of Possibility',
      skills_source: 'propuesto',
      questions: [
        { id:'rel_F1', skill:'Who / Which / That', tier:'facil', tool:'multipleChoice', auto:true, L1:false, q:'The suspect ___ disappeared is still missing.', options:['who','which','whose','what'], answer:'who' },
        { id:'rel_F2', skill:'Modales de posibilidad', tier:'facil', tool:'multipleChoice', auto:true, L1:false, q:'The motive is unclear. The killer ___ be someone close.', options:['might','must to','can to','would'], answer:'might' },
        { id:'rel_F3', skill:'Identifica al escuchar', tier:'facil', tool:'audioQuestion', auto:true, L1:false, audioText:'The witness who saw everything could be lying.', q:'What is true about the witness?', options:['Saw everything','Saw nothing','Is the suspect','Left town'], answer:'Saw everything' },
        { id:'rel_M1', skill:'Who / Which / That', tier:'medio', tool:'fillBlank', auto:true, L1:false, q:'The evidence ___ they found changed the verdict.', hint:'para una cosa', answer:'that', accept:['which'] },
        { id:'rel_M2', skill:'Modales de posibilidad', tier:'medio', tool:'unscramble', auto:true, L1:false, tokens:['The','accomplice','could','still','be','nearby'], answer:'The accomplice could still be nearby.' },
        { id:'rel_M3', skill:'Whose', tier:'medio', tool:'fillBlank', auto:true, L1:false, q:'The detective ___ theory was correct solved the case.', hint:'posesión', answer:'whose' },
        { id:'rel_M4', skill:'Aplica estructura fluida', tier:'medio', tool:'dialogueFill', auto:true, L1:false, context:['A: Who is the suspect?','B: ___'], options:['The man who left the clue.','The man which left the clue.','The man who he left the clue.','The man whose left the clue.'], answer:'The man who left the clue.' },
        { id:'rel_D1', skill:'Pronombre relativo sin redundancia', tier:'dificil', tool:'multipleResponse', auto:true, L1:true, q:'Select ALL the grammatically correct sentences.', options:['The witness who testified lied.','The witness who he testified lied.','He must be the culprit.','He must to be the culprit.'], answers:['The witness who testified lied.','He must be the culprit.'] },
        { id:'rel_D2', skill:'Pronombre relativo sin redundancia', tier:'dificil', tool:'errorCorrection', auto:true, L1:true, q:'The man who he committed the crime escaped.', answer:'The man who committed the crime escaped.' },
        { id:'rel_D3', skill:'Modales de posibilidad', tier:'dificil', tool:'errorCorrection', auto:true, L1:true, q:'The suspect could to be innocent.', answer:'The suspect could be innocent.' },
        { id:'rel_D4', skill:'Who / Which / That', tier:'dificil', tool:'spotError', auto:true, L1:true, q:'The detective which solved the case retired.', errorWord:'which', answer:'The detective who solved the case retired.' }
      ]
    },
    {
      id: 'present_perfect_continuous', level: 'A2', week: 4, grammar: 'Present Perfect Continuous (+ still / yet / already / not anymore)',
      skills_source: 'propuesto',
      questions: [
        { id:'ppc_F1', skill:'Have/has been + -ing', tier:'facil', tool:'multipleChoice', auto:true, L1:false, q:'The institution ___ been reforming its policies.', options:['has','have','is','had'], answer:'has' },
        { id:'ppc_F2', skill:'For vs Since', tier:'facil', tool:'multipleChoice', auto:true, L1:false, q:'They have been protesting ___ 2020.', options:['since','for','from','during'], answer:'since' },
        { id:'ppc_F3', skill:'Identifica al escuchar', tier:'facil', tool:'audioQuestion', auto:true, L1:false, audioText:'Activists have been fighting inequality for decades.', q:'How long have they been fighting?', options:['For decades','Since yesterday','For a day','They stopped'], answer:'For decades' },
        { id:'ppc_F4', skill:'For vs Since', tier:'facil', tool:'categorySort', auto:true, L1:false, q:'Sort each time expression into FOR or SINCE.', pool:['three years','2010','a long time','Monday','decades','January'], buckets:[{label:'FOR',correct:['three years','a long time','decades']},{label:'SINCE',correct:['2010','Monday','January']}] },
        { id:'ppc_F5', skill:'still/yet/already/not anymore', tier:'facil', tool:'multipleChoice', auto:true, L1:false, q:"I've ___ finished the report, so I'm free now.", options:['already','yet','still','ever'], answer:'already' },
        { id:'ppc_M1', skill:'Concordancia have/has', tier:'medio', tool:'fillBlank', auto:true, L1:false, q:"The government ___ been ignoring the reform.", hint:"singular → has", answer:'has' },
        { id:'ppc_M2', skill:'Have/has been + -ing', tier:'medio', tool:'unscramble', auto:true, L1:false, tokens:['How','long','have','you','been','working','here','?'], answer:'How long have you been working here?' },
        { id:'ppc_M3', skill:'For vs Since', tier:'medio', tool:'fillBlank', auto:true, L1:false, q:'She has been studying governance ___ five years.', hint:'duración → for/since', answer:'for' },
        { id:'ppc_M4', skill:'Aplica estructura fluida', tier:'medio', tool:'dialogueFill', auto:true, L1:false, context:['A: What have you been up to?','B: ___'], options:["I've been working on a project.",'I been working on a project.',"I've been work on a project.",'I working on a project.'], answer:"I've been working on a project." },
        { id:'ppc_M5', skill:'still/yet/already/not anymore', tier:'medio', tool:'fillBlank', auto:true, L1:false, q:"I haven't seen the final results ___.", hint:'todavía no (negativo, va al final)', answer:'yet' },
        { id:'ppc_D1', skill:'Concordancia have/has', tier:'dificil', tool:'multipleResponse', auto:true, L1:true, q:'Select ALL the grammatically correct sentences.', options:['He has been studying for hours.','He has been study for hours.','They have been waiting since noon.','They has been waiting since noon.'], answers:['He has been studying for hours.','They have been waiting since noon.'] },
        { id:'ppc_D2', skill:'For vs Since', tier:'dificil', tool:'errorCorrection', auto:true, L1:true, q:'I have been living here since five years.', answer:'I have been living here for five years.' },
        { id:'ppc_D3', skill:'Have/has been + -ing', tier:'dificil', tool:'errorCorrection', auto:true, L1:true, q:'She has been work all day.', answer:'She has been working all day.' },
        { id:'ppc_D4', skill:'Concordancia have/has', tier:'dificil', tool:'spotError', auto:true, L1:true, q:'The authorities has been ignoring the problem.', errorWord:'has', answer:'The authorities have been ignoring the problem.' },
        { id:'ppc_D5', skill:'still/yet/already/not anymore', tier:'dificil', tool:'errorCorrection', auto:true, L1:true, q:"I haven't done it already.", answer:"I haven't done it yet." }
      ]
    },
    {
      id: 'present_perfect_past_perfect', level: 'P1', week: 1, grammar: 'Present Perfect + Past Perfect',
      skills_source: 'propuesto',
      questions: [
        { id:'ppp_F1', skill:'Present Perfect (have/has + participio)', tier:'facil', tool:'multipleChoice', auto:true, L1:false, q:'The government ___ passed three new laws this year.', options:['has','have','had','did'], answer:'has' },
        { id:'ppp_F2', skill:'Past Perfect (had + participio)', tier:'facil', tool:'multipleChoice', auto:true, L1:false, q:'By the time the scandal broke, the minister ___ already resigned.', options:['had','has','have','was'], answer:'had' },
        { id:'ppp_F3', skill:'Identifica al escuchar', tier:'facil', tool:'audioQuestion', auto:true, L1:false, audioText:'They have reformed the policy, but the damage had already been done.', q:'Which happened first?', options:['The damage','The reform','Both at once','Neither'], answer:'The damage' },
        { id:'ppp_F4', skill:'Participio correcto (irregulares)', tier:'facil', tool:'matching', auto:true, L1:false, q:'Match each verb with its past participle.', pairs:[{left:'go',right:'gone'},{left:'see',right:'seen'},{left:'write',right:'written'},{left:'take',right:'taken'}] },
        { id:'ppp_M1', skill:'Present Perfect (have/has + participio)', tier:'medio', tool:'fillBlank', auto:true, L1:false, q:'Parliament ___ (vote) on the bill three times this month.', hint:'present perfect: has + participio', answer:'has voted' },
        { id:'ppp_M2', skill:'Past Perfect (had + participio)', tier:'medio', tool:'fillBlank', auto:true, L1:false, q:'Before the election, the party ___ (promise) a major reform.', hint:'past perfect: had + participio', answer:'had promised' },
        { id:'ppp_M3', skill:'Contraste PP vs Past Perfect (orden temporal)', tier:'medio', tool:'unscramble', auto:true, L1:false, tokens:['She','had','already','left','when','I','arrived'], answer:'She had already left when I arrived.' },
        { id:'ppp_M4', skill:'Aplica estructura fluida', tier:'medio', tool:'dialogueFill', auto:true, L1:false, context:['A: Has the law passed?','B: ___'], options:['Yes, it has. They voted last week.','Yes, it has passed yesterday.','Yes, it had pass.','Yes, it has pass.'], answer:'Yes, it has. They voted last week.' },
        { id:'ppp_D1', skill:'Participio correcto (irregulares)', tier:'dificil', tool:'multipleResponse', auto:true, L1:true, q:'Select ALL the grammatically correct sentences.', options:['He has resigned.','He has resign.','They had already voted before noon.','They have voted yesterday.'], answers:['He has resigned.','They had already voted before noon.'] },
        { id:'ppp_D2', skill:'Participio correcto (irregulares)', tier:'dificil', tool:'spotError', auto:true, L1:true, q:'The president has went to the summit.', errorWord:'went', answer:'The president has gone to the summit.' },
        { id:'ppp_D3', skill:'Contraste PP vs Past Perfect (orden temporal)', tier:'dificil', tool:'errorCorrection', auto:true, L1:true, q:'I have seen the minister yesterday.', answer:'I saw the minister yesterday.' },
        { id:'ppp_D4', skill:'Past Perfect (had + participio)', tier:'dificil', tool:'errorCorrection', auto:true, L1:true, q:'When the police arrived, the suspect already escaped.', answer:'When the police arrived, the suspect had already escaped.' }
      ]
    },
    {
      id: 'third_mixed_conditionals', level: 'P1', week: 2, grammar: 'Third Conditional + Mixed Conditionals',
      skills_source: 'propuesto',
      questions: [
        { id:'tmc_F1', skill:'If + had + participio, would have + participio', tier:'facil', tool:'multipleChoice', auto:true, L1:false, q:"If the bank had regulated itself, the crash ___.", options:['wouldn\'t have happened','wouldn\'t happen','won\'t happen','didn\'t happen'], answer:'wouldn\'t have happened' },
        { id:'tmc_F2', skill:'If + had + participio, would have + participio', tier:'facil', tool:'trueFalse', auto:true, L1:false, q:'The third conditional talks about imaginary situations in the PAST.', answer:true },
        { id:'tmc_F3', skill:'Identifica al escuchar', tier:'facil', tool:'audioQuestion', auto:true, L1:false, audioText:'If I had invested earlier, I would be retired now.', q:'Did the person invest early?', options:['No','Yes','Maybe','Last year'], answer:'No' },
        { id:'tmc_F4', skill:'Mixed (condición pasada → resultado presente)', tier:'facil', tool:'matching', auto:true, L1:false, q:"Match each 'if' clause with its result.", pairs:[{left:'If they had saved more,',right:'they wouldn\'t have gone bankrupt.'},{left:'If I hadn\'t taken the loan,',right:'I wouldn\'t be in debt now.'},{left:'If she had studied finance,',right:'she would be richer today.'}] },
        { id:'tmc_M1', skill:'If + had + participio, would have + participio', tier:'medio', tool:'fillBlank', auto:true, L1:false, q:'If he ___ (invest) in stocks, he would have made a profit.', hint:'if + had + participio', answer:'had invested' },
        { id:'tmc_M2', skill:'would have + participio (no "would of")', tier:'medio', tool:'fillBlank', auto:true, L1:false, q:'If they had cut costs, they ___ (avoid) bankruptcy.', hint:'would have + participio', answer:'would have avoided' },
        { id:'tmc_M3', skill:'Mixed (condición pasada → resultado presente)', tier:'medio', tool:'unscramble', auto:true, L1:false, tokens:['If','I','had','studied','finance','I','would','be','richer','now'], answer:'If I had studied finance, I would be richer now.' },
        { id:'tmc_M4', skill:'Aplica estructura fluida', tier:'medio', tool:'dialogueFill', auto:true, L1:false, context:['A: Why are you broke?','B: ___'], options:['If I had saved, I wouldn\'t be broke now.','If I would save, I wouldn\'t be broke.','If I saved, I won\'t be broke.','If I have saved, I am not broke.'], answer:'If I had saved, I wouldn\'t be broke now.' },
        { id:'tmc_D1', skill:'No "would" en la cláusula if', tier:'dificil', tool:'multipleResponse', auto:true, L1:true, q:'Select ALL the grammatically correct sentences.', options:['If I had known, I would have sold.','If I would have known, I would have sold.','If she had invested, she\'d be rich now.','If she would have invested, she\'d be rich.'], answers:['If I had known, I would have sold.','If she had invested, she\'d be rich now.'] },
        { id:'tmc_D2', skill:'No "would" en la cláusula if', tier:'dificil', tool:'errorCorrection', auto:true, L1:true, q:'If I would have had money, I would have invested.', answer:'If I had had money, I would have invested.' },
        { id:'tmc_D3', skill:'would have + participio (no "would of")', tier:'dificil', tool:'errorCorrection', auto:true, L1:true, q:'I would of bought the stock earlier.', answer:'I would have bought the stock earlier.' },
        { id:'tmc_D4', skill:'would have + participio (no "would of")', tier:'dificil', tool:'spotError', auto:true, L1:true, q:'If they had not defaulted, they would not lost everything.', errorWord:'lost', answer:'If they had not defaulted, they would not have lost everything.' }
      ]
    },
    {
      id: 'passive_voice', level: 'P1', week: 3, grammar: 'Passive Voice',
      skills_source: 'propuesto',
      questions: [
        { id:'pv_F1', skill:'be + participio', tier:'facil', tool:'multipleChoice', auto:true, L1:false, q:'Penicillin ___ discovered by accident.', options:['was','did','has','were'], answer:'was' },
        { id:'pv_F2', skill:'be + participio', tier:'facil', tool:'trueFalse', auto:true, L1:false, q:"The passive voice uses 'be' + past participle.", answer:true },
        { id:'pv_F3', skill:'Identifica al escuchar', tier:'facil', tool:'audioQuestion', auto:true, L1:false, audioText:'The experiment was conducted by a team in Geneva.', q:'Who conducted the experiment?', options:['A team in Geneva','Nobody','The speaker','A machine'], answer:'A team in Geneva' },
        { id:'pv_F4', skill:'be + participio', tier:'facil', tool:'categorySort', auto:true, L1:false, q:'Sort each sentence into ACTIVE or PASSIVE.', pool:['Scientists made it','It was made','She wrote the paper','The paper was written'], buckets:[{label:'ACTIVE',correct:['Scientists made it','She wrote the paper']},{label:'PASSIVE',correct:['It was made','The paper was written']}] },
        { id:'pv_M1', skill:'Tiempos de la pasiva (was/is/has been + participio)', tier:'medio', tool:'fillBlank', auto:true, L1:false, q:'The data ___ (collect) over five years.', hint:'pasiva en pasado: was/were + participio', answer:'was collected' },
        { id:'pv_M2', skill:'Participio correcto', tier:'medio', tool:'wordForm', auto:true, L1:false, q:'The conclusion was ___ from the data. (draw)', options:['drawn','drew','drawed','draw'], answer:'drawn' },
        { id:'pv_M3', skill:'by + agente', tier:'medio', tool:'unscramble', auto:true, L1:false, tokens:['The','discovery','was','made','by','accident'], answer:'The discovery was made by accident.' },
        { id:'pv_M4', skill:'Aplica estructura fluida', tier:'medio', tool:'dialogueFill', auto:true, L1:false, context:['A: Who wrote this study?','B: ___'], options:['It was written by Dr. Lee.','It was wrote by Dr. Lee.','It wrote by Dr. Lee.','It is write by Dr. Lee.'], answer:'It was written by Dr. Lee.' },
        { id:'pv_D1', skill:'Tiempos de la pasiva (was/is/has been + participio)', tier:'dificil', tool:'multipleResponse', auto:true, L1:true, q:'Select ALL the grammatically correct sentences.', options:['The medicine was tested on animals.','The medicine was test on animals.','The results have been published.','The results have been publish.'], answers:['The medicine was tested on animals.','The results have been published.'] },
        { id:'pv_D2', skill:'Participio correcto', tier:'dificil', tool:'errorCorrection', auto:true, L1:true, q:'The element was discover in 1898.', answer:'The element was discovered in 1898.' },
        { id:'pv_D3', skill:'be + participio', tier:'dificil', tool:'errorCorrection', auto:true, L1:true, q:'The experiment did by a team of scientists.', answer:'The experiment was done by a team of scientists.' },
        { id:'pv_D4', skill:'be + participio', tier:'dificil', tool:'spotError', auto:true, L1:true, q:'The data were collect by the lab.', errorWord:'collect', answer:'The data were collected by the lab.' }
      ]
    },
    {
      id: 'past_conditionals_modals', level: 'P1', week: 4, grammar: 'Past Conditionals (Should/Could/Would Have)',
      skills_source: 'propuesto',
      questions: [
        { id:'pcm_F1', skill:'should have + participio', tier:'facil', tool:'multipleChoice', auto:true, L1:false, q:'I ___ studied harder for that exam.', options:['should have','should of','should had','should have to'], answer:'should have' },
        { id:'pcm_F2', skill:'should have + participio', tier:'facil', tool:'trueFalse', auto:true, L1:false, q:'"You should have called" criticizes a past action that did NOT happen.', answer:true },
        { id:'pcm_F3', skill:'Identifica al escuchar', tier:'facil', tool:'audioQuestion', auto:true, L1:false, audioText:'She could have left earlier, but she didn\'t.', q:'Did she leave earlier?', options:['No','Yes','Maybe','Later'], answer:'No' },
        { id:'pcm_F4', skill:'could have + participio', tier:'facil', tool:'matching', auto:true, L1:false, q:'Match each modal with its meaning.', pairs:[{left:'should have',right:'arrepentimiento / crítica'},{left:'could have',right:'posibilidad pasada no realizada'},{left:'would have',right:'resultado hipotético pasado'}] },
        { id:'pcm_M1', skill:'could have + participio', tier:'medio', tool:'fillBlank', auto:true, L1:false, q:'They ___ (prevent) it, but they ignored the warnings.', hint:'could have + participio', answer:'could have prevented' },
        { id:'pcm_M2', skill:'should have + participio', tier:'medio', tool:'fillBlank', auto:true, L1:false, q:'He regrets it now. He ___ (act) sooner.', hint:'should have + participio', answer:'should have acted' },
        { id:'pcm_M3', skill:'would have + participio', tier:'medio', tool:'unscramble', auto:true, L1:false, tokens:['Things','would','have','been','different','if','I','had','known'], answer:'Things would have been different if I had known.' },
        { id:'pcm_M4', skill:'Aplica estructura fluida', tier:'medio', tool:'dialogueFill', auto:true, L1:false, context:['A: Why didn\'t you warn her?','B: ___'], options:['I should have, but I didn\'t.','I should had, but I didn\'t.','I should of, but I didn\'t.','I should have to, but I didn\'t.'], answer:'I should have, but I didn\'t.' },
        { id:'pcm_D1', skill:'No "would of" / "should of"', tier:'dificil', tool:'multipleResponse', auto:true, L1:true, q:'Select ALL the grammatically correct sentences.', options:['You should have told me.','You should of told me.','He could have known better.','He could have knew better.'], answers:['You should have told me.','He could have known better.'] },
        { id:'pcm_D2', skill:'No "would of" / "should of"', tier:'dificil', tool:'errorCorrection', auto:true, L1:true, q:'You should of asked for help.', answer:'You should have asked for help.' },
        { id:'pcm_D3', skill:'could have + participio', tier:'dificil', tool:'errorCorrection', auto:true, L1:true, q:'She could have went, but she stayed.', answer:'She could have gone, but she stayed.' },
        { id:'pcm_D4', skill:'would have + participio', tier:'dificil', tool:'spotError', auto:true, L1:true, q:'I would have call you, but I lost your number.', errorWord:'call', answer:'I would have called you, but I lost your number.' }
      ]
    },
    {
      id: 'reported_speech', level: 'P2', week: 1, grammar: 'Reported Speech',
      skills_source: 'propuesto',
      questions: [
        { id:'rs_F1', skill:'Backshift de tiempos', tier:'facil', tool:'multipleChoice', auto:true, L1:false, q:'Direct: "I am tired."  Reported: She said she ___ tired.', options:['was','is','has','will be'], answer:'was' },
        { id:'rs_F2', skill:'say vs tell', tier:'facil', tool:'multipleChoice', auto:true, L1:false, q:'He ___ me that he would review it.', options:['told','said','say','says'], answer:'told' },
        { id:'rs_F3', skill:'Identifica al escuchar', tier:'facil', tool:'audioQuestion', auto:true, L1:false, audioText:'The scientist claimed that the data had been manipulated.', q:'What did the scientist claim?', options:['The data was manipulated','The data was correct','He manipulated it himself','Nothing'], answer:'The data was manipulated' },
        { id:'rs_F4', skill:'Backshift de tiempos', tier:'facil', tool:'matching', auto:true, L1:false, q:'Match each direct quote with its reported form.', pairs:[{left:'"I am busy"',right:'He said he was busy.'},{left:'"I will call"',right:'She said she would call.'},{left:'"I can help"',right:'He said he could help.'}] },
        { id:'rs_M1', skill:'Backshift de tiempos', tier:'medio', tool:'fillBlank', auto:true, L1:false, q:'Direct: "I work here."  Reported: She said she ___ there.', hint:'backshift: present → past', answer:'worked' },
        { id:'rs_M2', skill:'Reported questions (sin inversión)', tier:'medio', tool:'unscramble', auto:true, L1:false, tokens:['He','asked','where','I','was','going'], answer:'He asked where I was going.' },
        { id:'rs_M3', skill:'say vs tell', tier:'medio', tool:'fillBlank', auto:true, L1:false, q:'She ___ that the project was delayed.', hint:'sin objeto directo → say', answer:'said' },
        { id:'rs_M4', skill:'Aplica estructura fluida', tier:'medio', tool:'dialogueFill', auto:true, L1:false, context:['A: What did she say?','B: ___'], options:['She said she had finished.','She said she has finished.','She told she had finished.','She said me she finished.'], answer:'She said she had finished.' },
        { id:'rs_D1', skill:'Reported questions (sin inversión)', tier:'dificil', tool:'multipleResponse', auto:true, L1:true, q:'Select ALL the grammatically correct sentences.', options:['He told me he was leaving.','He said me he was leaving.','She asked what time it was.','She asked what time was it.'], answers:['He told me he was leaving.','She asked what time it was.'] },
        { id:'rs_D2', skill:'say vs tell', tier:'dificil', tool:'errorCorrection', auto:true, L1:true, q:'She said me that she was busy.', answer:'She told me that she was busy.' },
        { id:'rs_D3', skill:'Reported questions (sin inversión)', tier:'dificil', tool:'errorCorrection', auto:true, L1:true, q:'He asked me where was the office.', answer:'He asked me where the office was.' },
        { id:'rs_D4', skill:'Backshift de tiempos', tier:'dificil', tool:'spotError', auto:true, L1:true, q:'She said that she is tired.', errorWord:'is', answer:'She said that she was tired.' }
      ]
    },
    {
      id: 'gerunds_infinitives', level: 'P2', week: 2, grammar: 'Gerunds & Infinitives',
      skills_source: 'propuesto',
      questions: [
        { id:'gi_F1', skill:'Gerundio después de preposición', tier:'facil', tool:'multipleChoice', auto:true, L1:false, q:'I\'m interested in ___ more about it.', options:['learning','learn','to learn','learned'], answer:'learning' },
        { id:'gi_F2', skill:'Verbo + gerundio vs verbo + infinitivo', tier:'facil', tool:'multipleChoice', auto:true, L1:false, q:'She decided ___ the offer.', options:['to accept','accepting','accept','accepted'], answer:'to accept' },
        { id:'gi_F3', skill:'Identifica al escuchar', tier:'facil', tool:'audioQuestion', auto:true, L1:false, audioText:'He enjoys working under pressure, but he wants to slow down.', q:'What does he enjoy?', options:['Working under pressure','Slowing down','Quitting','Resting'], answer:'Working under pressure' },
        { id:'gi_F4', skill:'Verbo + gerundio vs verbo + infinitivo', tier:'facil', tool:'categorySort', auto:true, L1:false, q:'Sort each verb by what follows it.', pool:['enjoy','want','avoid','decide','consider','hope'], buckets:[{label:'+ gerundio (-ing)',correct:['enjoy','avoid','consider']},{label:'+ infinitivo (to)',correct:['want','decide','hope']}] },
        { id:'gi_M1', skill:'Gerundio como sujeto', tier:'medio', tool:'fillBlank', auto:true, L1:false, q:'___ (do) hard things builds character.', hint:'gerundio como sujeto', answer:'Doing' },
        { id:'gi_M2', skill:'Gerundio después de preposición', tier:'medio', tool:'fillBlank', auto:true, L1:false, q:'I\'m used to ___ (work) late.', hint:'después de preposición → gerundio', answer:'working' },
        { id:'gi_M3', skill:'to + base (infinitivo)', tier:'medio', tool:'unscramble', auto:true, L1:false, tokens:['I','decided','to','quit','my','job'], answer:'I decided to quit my job.' },
        { id:'gi_M4', skill:'Aplica estructura fluida', tier:'medio', tool:'dialogueFill', auto:true, L1:false, context:['A: Have you thought about it?','B: ___'], options:['Yes, I\'m considering quitting.','Yes, I\'m considering to quit.','Yes, I consider to quit.','Yes, I considering quit.'], answer:'Yes, I\'m considering quitting.' },
        { id:'gi_D1', skill:'Verbo + gerundio vs verbo + infinitivo', tier:'dificil', tool:'multipleResponse', auto:true, L1:true, q:'Select ALL the grammatically correct sentences.', options:['I enjoy reading.','I enjoy to read.','She wants to leave.','She wants leaving.'], answers:['I enjoy reading.','She wants to leave.'] },
        { id:'gi_D2', skill:'Verbo + gerundio vs verbo + infinitivo', tier:'dificil', tool:'errorCorrection', auto:true, L1:true, q:'I enjoy to read every night.', answer:'I enjoy reading every night.' },
        { id:'gi_D3', skill:'Gerundio después de preposición', tier:'dificil', tool:'errorCorrection', auto:true, L1:true, q:'This tool is for to clean the screen.', answer:'This tool is for cleaning the screen.' },
        { id:'gi_D4', skill:'Gerundio después de preposición', tier:'dificil', tool:'spotError', auto:true, L1:true, q:'I look forward to meet you.', errorWord:'meet', answer:'I look forward to meeting you.' }
      ]
    }
  ],
  discrimination_set_pro: {
    questions: [
      { id:'pro_disc_1', skill:'PP vs Past Simple', tier:'medio', tool:'multipleChoice', auto:true, L1:true, q:"Choose the correct sentence (with 'yesterday').", options:['I have seen him yesterday.','I saw him yesterday.','I had saw him yesterday.','I have saw him yesterday.'], answer:'I saw him yesterday.' },
      { id:'pro_disc_2', skill:'2nd vs 3rd conditional', tier:'dificil', tool:'multipleChoice', auto:true, L1:true, q:'Choose the PAST imaginary sentence.', options:['If I had money, I would buy it.','If I had had money, I would have bought it.','If I have money, I buy it.','If I would have money, I buy it.'], answer:'If I had had money, I would have bought it.' },
      { id:'pro_disc_3', skill:'Activa vs Pasiva', tier:'medio', tool:'multipleChoice', auto:true, L1:true, q:'Choose the correct passive sentence.', options:['The cake was eaten.','The cake was eat.','The cake ate.','The cake has eat.'], answer:'The cake was eaten.' },
      { id:'pro_disc_4', skill:'Gerundio vs Infinitivo', tier:'medio', tool:'multipleChoice', auto:true, L1:true, q:'Choose the correct sentence.', options:['I enjoy to swim.','I enjoy swimming.','I want swimming.','I avoid to swim.'], answer:'I enjoy swimming.' },
      { id:'pro_disc_5', skill:'Reported question (sin inversión)', tier:'dificil', tool:'errorCorrection', auto:true, L1:true, q:'He asked me where did I live.', answer:'He asked me where I lived.' },
      { id:'pro_disc_6', skill:'should/would have (no "of")', tier:'dificil', tool:'multipleResponse', auto:true, L1:true, q:'Select ALL the grammatically correct sentences.', options:['You should have called.','You should of called.','It would have worked.','It would of worked.'], answers:['You should have called.','It would have worked.'] },
      { id:'pro_disc_7', skill:'PP vs PPC', tier:'dificil', tool:'multipleChoice', auto:true, L1:true, q:'Choose the correct sentence for an action still in progress.', options:['I have been working here for years.','I have worked here since I work.','I am work here for years.','I working here for years.'], answer:'I have been working here for years.' },
      { id:'pro_disc_8', skill:'Participio (Present Perfect)', tier:'dificil', tool:'spotError', auto:true, L1:true, q:'She has wrote three reports this week.', errorWord:'wrote', answer:'She has written three reports this week.' }
    ]
  },
  discrimination_set_advanced: {
    questions: [
      { id:'adv_disc_1', skill:'Past Continuous vs Simple', tier:'medio', tool:'multipleChoice', auto:true, L1:true, q:'Choose the correct sentence.', options:['I was watch TV when she called.','I was watching TV when she called.','I watched TV when she was call.','I watching TV when she called.'], answer:'I was watching TV when she called.' },
      { id:'adv_disc_2', skill:'Present Perfect vs Past Simple', tier:'medio', tool:'multipleChoice', auto:true, L1:true, q:"Choose the correct sentence (with 'yesterday').", options:['I have seen him yesterday.','I saw him yesterday.','I have saw him yesterday.','I did saw him yesterday.'], answer:'I saw him yesterday.' },
      { id:'adv_disc_3', skill:'Used to (hábito pasado)', tier:'medio', tool:'multipleChoice', auto:true, L1:true, q:'Choose the correct sentence for a past habit no longer true.', options:['I used to live in Paris.','I use to live in Paris.','I was living in Paris always.','I am used to live in Paris.'], answer:'I used to live in Paris.' },
      { id:'adv_disc_4', skill:'Second Conditional (imaginario)', tier:'dificil', tool:'multipleChoice', auto:true, L1:true, q:'Choose the correct imaginary (unreal) sentence.', options:['If I have time, I help you.','If I had time, I would help you.','If I will have time, I would help.','If I would have time, I help.'], answer:'If I had time, I would help you.' },
      { id:'adv_disc_5', skill:'Was going to + base', tier:'dificil', tool:'errorCorrection', auto:true, L1:true, q:'I was going to called you, but I forgot.', answer:'I was going to call you, but I forgot.' },
      { id:'adv_disc_6', skill:'PPC vs Present Perfect simple', tier:'dificil', tool:'multipleResponse', auto:true, L1:true, q:'Select ALL the grammatically correct sentences.', options:['I have been waiting for an hour.','I have waiting for an hour.','I have finished my work.','I have been finished my work.'], answers:['I have been waiting for an hour.','I have finished my work.'] },
      { id:'adv_disc_7', skill:'Present Perfect + since', tier:'dificil', tool:'multipleChoice', auto:true, L1:true, q:"Choose the correct sentence with 'since 2010'.", options:['I work here since 2010.','I have worked here since 2010.','I worked here since 2010.','I am working here since 2010.'], answer:'I have worked here since 2010.' },
      { id:'adv_disc_8', skill:'Comparativo doble', tier:'dificil', tool:'spotError', auto:true, L1:true, q:'She is more taller than her competitor.', errorWord:'more', answer:'She is taller than her competitor.' }
    ]
  },
  discrimination_set: {
    questions: [
      { id:'disc_1', skill:'Modal vs Do/Does vs To Be', tier:'medio', tool:'multipleChoice', auto:true, L1:true, q:'Choose the correct question.', options:['Does she can swim?','Can she swim?','Is she can swim?','Do she swims?'], answer:'Can she swim?' },
      { id:'disc_2', skill:'To Be vs Do/Does', tier:'medio', tool:'multipleChoice', auto:true, L1:true, q:'Choose the correct question.', options:['Are you like pizza?','Do you like pizza?','Does you like pizza?','You like pizza?'], answer:'Do you like pizza?' },
      { id:'disc_3', skill:'Present Simple vs To Be', tier:'medio', tool:'multipleChoice', auto:true, L1:true, q:'Choose the correct sentence.', options:['He is work at the office.','He works at the office.','He working at the office.','He do work at the office.'], answer:'He works at the office.' },
      { id:'disc_4', skill:'Negación: Modal vs Do/Does vs To Be', tier:'dificil', tool:'multipleChoice', auto:true, L1:true, q:'Pick the correct negative.', options:["She doesn't can drive.","She can't drive.","She don't can drive.","She isn't drive."], answer:"She can't drive." },
      { id:'disc_5', skill:'To Be vs Do/Does', tier:'dificil', tool:'errorCorrection', auto:true, L1:true, q:'Does he is your boss?', answer:'Is he your boss?' },
      { id:'disc_6', skill:'Present Simple vs Present Continuous', tier:'dificil', tool:'multipleResponse', auto:true, L1:true, q:'Select ALL the grammatically correct sentences.', options:['I am studying now.','I study now.','I study every day.','I am study every day.'], answers:['I am studying now.','I study every day.'] },
      { id:'disc_7', skill:'Present Continuous: orden y to be', tier:'dificil', tool:'multipleChoice', auto:true, L1:true, q:'Choose the correct question.', options:['What you are doing?','What are you doing?','What do you doing?','What you doing?'], answer:'What are you doing?' },
      { id:'disc_8', skill:'To Be vs Do/Does', tier:'dificil', tool:'errorCorrection', auto:true, L1:true, q:'Do you are happy with the result?', answer:'Are you happy with the result?' }
    ]
  },
  // wired but not rendered in Exam 1
  exam2_productive: { questions: [] }
};

const FLEET = [
  { id:'b1',  label:'Modal Verbs',                 level:'B1', module:'B1 Foundation', week:1, topics:['modal_verbs'] },
  { id:'b2',  label:'Present Simple vs Continuous', level:'B1', module:'B1 Foundation', week:3, topics:['present_simple','present_continuous'] },
  { id:'b3',  label:'B1 + B2 (énfasis B2)',        level:'B2', module:'B2 Structures', week:2, topics:['going_to','prepositions','object_pronouns','quantifiers','possessive_pronouns'] },
  { id:'b4',  label:'B1 + B2 · 2.0',               level:'B2', module:'B2 Structures', week:4, topics:[], needsContent:true },  // fase 3 (vocab duro)
  { id:'b5',  label:'Puente B2 → A1',              level:'A1', module:'A1 Foundation', week:1, topics:[], needsContent:true },  // fase 3 (puente)
  { id:'b6',  label:'Todo A1',                     level:'A1', module:'A1 Foundation', week:4, topics:['past_simple','second_conditional','past_continuous','was_were_going_to'] },
  { id:'b7',  label:'A1 + A2',                     level:'A2', module:'A2 Structures', week:2, topics:['used_to','comparatives_superlatives','relative_clauses','present_perfect_continuous','past_simple','second_conditional'] },
  { id:'b8',  label:'A2 + Perfect Tenses',         level:'A2', module:'A2 Structures', week:4, topics:['used_to','comparatives_superlatives','relative_clauses','present_perfect_continuous','present_perfect_past_perfect'] },
  { id:'b9',  label:'Todo P1',                     level:'P1', module:'P1 Structures', week:2, topics:['present_perfect_past_perfect','third_mixed_conditionals','passive_voice','past_conditionals_modals'] },
  { id:'b10', label:'Todo P2',                     level:'P2', module:'P2 Structures', week:2, topics:['reported_speech','gerunds_infinitives'] },
];

  const ENTRY = [0, 2, 5, 6]; // "casi nada"→b1 · "hoteles"→b3 · "entiendo"→b6 · "confianza"→b7

  return { BANK, FLEET, ENTRY };
})();
