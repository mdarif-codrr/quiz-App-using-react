const chemistry = [
    {
      question: 'पानी का रासायनिक सूत्र क्या है?',
      options: ['H₂O', 'CO₂', 'NaCl', 'O₂'],
      answer: 'H₂O',
    },
    {
      question: 'हाइड्रोजन गैस किसके द्वारा जलाया जाता है?',
      options: ['लौह', 'ऑक्सीजन', 'नाइट्रोजन', 'कार्बन'],
      answer: 'ऑक्सीजन',
    },
    {
      question:
        'रासायनिक प्रतिक्रियाओं में उत्पन्न ऊर्जा का रूप कौन सा हो सकता है?',
      options: ['प्रकाश', 'ध्वनि', 'ताप', 'सभी'],
      answer: 'सभी',
    },
    {
      question: 'धातु के कनेक्शन से बनने वाले यौगिक को क्या कहते हैं?',
      options: ['धातु ऑक्साइड', 'धातु क्लोराइड', 'धातु सल्फेट', 'लवण'],
      answer: 'लवण',
    },
    {
      question: 'आयरन सल्फेट (FeSO₄) में कौन सा अणु होता है?',
      options: ['लोहे का अणु', 'सल्फर का अणु', 'सल्फेट का अणु', 'सभी अणु'],
      answer: 'सभी अणु',
    },
    {
      question: 'रासायनिक परिवर्तन और भौतिक परिवर्तन में अंतर क्या है?',
      options: [
        'रासायनिक परिवर्तन में नई चीज बनती है',
        'भौतिक परिवर्तन में कोई नई चीज नहीं बनती',
        'दोनों में कोई परिवर्तन नहीं होता',
        'दोनों एक जैसे होते हैं',
      ],
      answer: 'रासायनिक परिवर्तन में नई चीज बनती है',
    },
    {
      question: 'प्राकृतिक गैस का मुख्य घटक क्या होता है?',
      options: ['मिथेन', ' एथिलीन', 'प्रोपिन', 'ब्यूटेन'],
      answer: 'मिथेन',
    },
    {
      question: 'पानी में घुलने वाली गैस का उदाहरण क्या है?',
      options: ['ऑक्सीजन', 'नाइट्रोजन', 'कार्बन डाइऑक्साइड', 'हाइड्रोजन'],
      answer: 'कार्बन डाइऑक्साइड',
    },
    {
      question: 'किस रासायनिक पदार्थ से अम्लीय वर्षा होती है?',
      options: [
        ' सल्फर डाइऑक्साइड',
        'कार्बन डाइऑक्साइड',
        'नाइट्रोजन',
        ' अमोनिया',
      ],
      answer: 'सल्फर डाइऑक्साइड',
    },
    {
      question: 'नमक और पानी का मिश्रण किस प्रकार का मिश्रण है?',
      options: [' होमोजीनियस', 'हेटेरोजीनियस', 'जेली', 'सभी'],
      answer: 'होमोजीनियस',
    },
    {
      question:
        'पानी में घुलने के बाद सोडियम क्लोराइड किस प्रकार का यौगिक बनाता है?',
      options: ['बेस', 'अम्ल', 'न्यूट्रल', 'दोनों A और B'],
      answer: 'न्यूट्रल',
    },
    {
      question: 'तांबा किसका रासायनिक तत्व है?',
      options: ['Fe', 'Cu', 'Na', ' K'],
      answer: 'Cu',
    },
    {
      question: 'चॉकलेट में क्या होता है?',
      options: ['मिश्रण', 'यौगिक', 'रासायनिक पदार्थ', 'कोई नहीं'],
      answer: 'मिश्रण',
    },
    {
      question: 'हाइड्रोक्लोरिक अम्ल किसके द्वारा निर्मित होता है?',
      options: [
        'नमक और पानी',
        'सल्फर डाइऑक्साइड और पानी',
        ' हाइड्रोजन और क्लोरीन',
        'पानी और आक्सीजन',
      ],
      answer: 'हाइड्रोजन और क्लोरीन',
    },
    {
      question: 'द्रव्यमान की संरचना किस पर आधारित होती है?',
      options: ['परमाणु', 'अणु', 'न्यूक्लियस', 'इलेक्ट्रॉन'],
      answer: 'परमाणु',
    },
    {
      question: 'अम्ल का pH मान क्या होता है?',
      options: ['7', '1-6', '8-14', '0'],
      answer: '1-6',
    },
    {
      question: 'पानी का pH मान क्या होता है?',
      options: ['1', '3', '7', '10'],
      answer: '7',
    },
    {
      question: 'किसी रासायनिक तत्व का आकार क्या कहलाता है?',
      options: ['परमाणु', 'अणु', 'नाभिक', 'इलेक्ट्रॉन'],
      answer: 'परमाणु',
    },
    {
      question: 'पानी में घुली हुई हवा की पहचान किससे होती है?',
      options: [
        'गैस का अवशोषण',
        'ठंडा होने पर पानी का जमना',
        'पिघलना',
        'सभी उपर्युक्त',
      ],
      answer: 'सभी उपर्युक्त',
    },
    {
      question: 'गैस की गति में परिवर्तन किसके कारण होता है?',
      options: ['गैस का तापमान', 'गैस का दबाव', 'गैस का घनत्व', 'सभी उपर्युक्त'],
      answer: 'सभी उपर्युक्त',
    },
    {
      question:
        'रासायनिक संयोग से नए यौगिक को बनाने की प्रक्रिया को क्या कहते हैं?',
      options: ['विलयन', ' संश्लेषण', 'प्रतिक्रिया', 'संयोजन'],
      answer: 'संश्लेषण',
    },
    {
      question: 'अमोनिया गैस किसमें घुलती है?',
      options: ['पानी', 'तेल', 'शक्कर', 'अक्सीजन'],
      answer: 'पानी',
    },
    {
      question: 'कौन सा तत्व पोटैशियम का परमाणु नंबर 19 है?',
      options: ['रजत', 'सोडियम', 'पोटेशियम', 'कैल्शियम'],
      answer: 'पोटेशियम',
    },
    {
      question: 'पानी का उत्थान किस प्रक्रिया द्वारा होता है?',
      options: ['आसवन', 'आसवन और संक्षेपण', 'प्रवाहित करना', 'कोई नहीं'],
      answer: 'आसवन और संक्षेपण',
    },
    {
      question: 'रासायनिक गुणों को किस रूप में व्यक्त किया जाता है?',
      options: [' आयन', 'अणु', 'कण', 'संयोजक'],
      answer: 'अणु',
    },
  ]

  export default chemistry