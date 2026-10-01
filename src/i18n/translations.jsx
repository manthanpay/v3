export const LANGUAGES = [
  { code: "en", label: "English" },
  { code: "hi", label: "हिन्दी" },
  { code: "bn", label: "বাংলা" },
  { code: "mr", label: "मराठी" },
  { code: "te", label: "తెలుగు" },
  { code: "ta", label: "தமிழ்" },
  { code: "gu", label: "ગુજરાતી" },
  { code: "kn", label: "ಕನ್ನಡ" },
  { code: "ml", label: "മലയാളം" },
  { code: "pa", label: "ਪੰਜਾਬੀ" },
  { code: "or", label: "ଓଡ଼ିଆ" },
];

/*
 * English is the source of truth.
 * Every other language is deep-merged with English so a missing translation
 * never shows a translation key such as "hero.title" on the website.
 */
const en = {
  nav: {
    services: "Services",
    why: "Why Manthan Pay",
    network: "Our Network",
    academy: "AEPS Academy",
    partner: "Partner",
    login: "Partner Login",
    getStarted: "Get Started",
  },

  hero: {
    badge: "BHARAT · TRUSTED COUNTERS",
    title: "Modern finance.",
    titleAccent: "Built for Bharat.",
    description:
      "Empowering retailers with trusted digital financial services for every neighbourhood.",
    primary: "Become a Partner",
    secondary: "Explore Services",
    watchTutorial: "Watch AEPS Tutorial",
  },

  heroSlides: {
    slide1: {
      eyebrow: "DIGITAL SEVA · HAR GAON TAK",
      title: "Technology for a",
      titleAccent: "Stronger Bharat.",
      copy: "Bring secure assisted banking and everyday digital services closer to customers — through the retailers they already trust.",
      stat: "Retail-first",
      statCopy: "Built around the local counter",
    },
    slide2: {
      eyebrow: "INCLUSION · OPPORTUNITY · GROWTH",
      title: "Put more",
      titleAccent: "digital power",
      copy: "Help customers pay bills, recharge, transfer money and access assisted services without leaving their neighbourhood.",
      stat: "One platform",
      statCopy: "Multiple everyday services",
    },
    slide3: {
      eyebrow: "BHARAT · TRUSTED COUNTERS",
      title: "Modern finance,",
      titleAccent: "human connection.",
      copy: "A modern fintech experience for the people who keep India moving — retailers, distributors and local communities.",
      stat: "Partner-led",
      statCopy: "Designed for scale across India",
    },
  },

  heroTrust: {
    secure: "Secure workflows",
    retailer: "Retailer-first",
    bharat: "Bharat-focused",
  },

  heroPanel: {
    experience: "PLATFORM EXPERIENCE",
    explore: "Explore the platform",
  },

  serviceRail: {
    core: "CORE",
    services: "Services",
    viewAll: "View all",
  },

  trust: {
    secure: {
      title: "Secure by design",
      description: "Layered controls & validation",
    },
    fast: {
      title: "Fast service flows",
      description: "Built for busy retail counters",
    },
    support: {
      title: "Human support",
      description: "Help when partners need it",
    },
    scale: {
      title: "Made to scale",
      description: "From one outlet to a network",
    },
  },

  manifesto: {
    eyebrow: "THE MANTHAN PAY IDEA",
    title: "Finance becomes powerful when it becomes",
    titleAccent: "accessible.",
    description:
      "We are building a digital layer for the people who already sit at the heart of their communities — the neighbourhood retailer.",
    points: {
      partner: "One partner experience",
      workflow: "Clear service workflows",
      validation: "Validation before transaction",
      bharat: "Designed for Bharat",
    },
    button: "Build your digital service point",
    floatingTitle: "Every counter can do more.",
    floatingDescription: "Banking · Bills · Recharge · More",
  },

  tutorial: {
    badge: "AEPS ACADEMY",
    videoTitle: "Understand AEPS in a few minutes.",
    videoDescription: "Watch the Manthan Pay tutorial",
    eyebrow: "LEARN · EXPLAIN · SERVE",
    title: "Don't just list AEPS.",
    titleAccent: "Show people how it works.",
    description:
      "A dedicated tutorial makes the service easier to understand for partners and customers. The experience is designed around simple language, visual steps and a clear path to activation.",
    steps: {
      customer: {
        title: "Customer arrives",
        description: "Choose the required banking service.",
      },
      verify: {
        title: "Verify the request",
        description: "Validate customer and transaction inputs.",
      },
      complete: {
        title: "Complete securely",
        description: "Use the approved AEPS provider/device flow.",
      },
    },
    button: "Play AEPS tutorial",
  },

  network: {
    eyebrow: "OUR GROWING FOOTPRINT",
    title: "From one local counter to a",
    titleAccent: "growing Bharat.",
    description:
      "Show the network story visually. The state list below is presentation data and should be connected to verified live coverage before production publication.",
    featuredStates: "featured states",
    andGrowing: "and growing",
    growingAcross: "Growing across regions",
    view: "Network view",
    manualUpdate: "Updated manually until API is connected",
    stillGrowing: "Still growing",
    expansion:
      "New territories can be activated as partner and provider coverage expands.",
  },

  regions: {
    all: "All",
    north: "North",
    west: "West",
    central: "Central",
    east: "East",
    south: "South",
  },

  campaign: {
    eyebrow: "DESIGNED FOR REAL LIFE",
    title: "Three moments.",
    titleAccent: "One platform.",
    card1: {
      eyebrow: "RETAILER GROWTH",
      title: "Turn your counter into a digital growth engine.",
      button: "Become a partner",
    },
    card2: {
      eyebrow: "TRUSTED COMMUNITY",
      title: "Technology that still feels personal.",
      button: "Meet the story",
    },
    card3: {
      eyebrow: "NETWORK · BHARAT",
      title: "Connect local service points to a bigger digital network.",
      button: "Explore our footprint",
    },
  },

  stories: {
    previous: "Previous story",
    next: "Next story",
    story1: {
      kicker: "REAL PEOPLE · REAL COUNTERS",
      title: "Digital finance should feel closer to home.",
      copy: "A familiar retailer can turn a routine visit into access to banking, payments and everyday digital services.",
    },
    story2: {
      kicker: "RURAL COMMERCE · PARTNER GROWTH",
      title: "Give every local shop more reasons to grow.",
      copy: "One platform can help a retailer serve more customer needs while building a stronger digital business.",
    },
    story3: {
      kicker: "TRUST · SIMPLICITY",
      title: "Technology works best when people understand it.",
      copy: "Clear flows, simple interfaces and human support make digital services easier to deliver every day.",
    },
  },

  howItWorks: {
    eyebrow: "HOW IT WORKS",
    title: "Simple for the partner.",
    titleAccent: "Clear for the customer.",
    description:
      "A production architecture should keep the experience simple at the surface while validation, authentication, provider routing and ledgering happen underneath.",
    onboard: {
      title: "Onboard",
      description:
        "Capture partner details with clear validation and a guided registration flow.",
    },
    activate: {
      title: "Activate",
      description:
        "Enable services based on KYC, provider approval and operational configuration.",
    },
    transact: {
      title: "Transact",
      description:
        "Select a service, validate inputs, review the transaction and confirm securely.",
    },
    reconcile: {
      title: "Reconcile",
      description:
        "Keep receipts, status, commissions and transaction history in one operational view.",
    },
  },

  testimonials: {
    eyebrow: "PARTNER VOICES",
    title: "Built to make partners",
    titleAccent: "feel confident.",
    items: {
      ramesh: {
        name: "Ramesh Kumar",
        role: "Retail Partner · Haryana",
        quote:
          "“The idea is simple — customers come to my shop, and I can help them with much more than one payment.”",
      },
      sanjay: {
        name: "Sanjay Verma",
        role: "Digital Seva Partner · Uttar Pradesh",
        quote:
          "“The interface feels like a modern banking product, but the workflow is made for a busy retail counter.”",
      },
      neha: {
        name: "Neha Sharma",
        role: "Partner · Rajasthan",
        quote:
          "“Having services together makes it easier to explain what we can offer and easier for customers to return.”",
      },
    },
  },

  faq: {
    eyebrow: "QUESTIONS, ANSWERED",
    title: "Everything you need to know",
    titleAccent: "before you start.",
    description:
      "Production launch should connect these experiences to your approved policies, provider contracts, KYC requirements and backend APIs.",
    button: "Talk to the partner team",
    q1: {
      question: "What services can a Manthan Pay partner offer?",
      answer:
        "The platform is structured around assisted banking, money transfer, BBPS bill payments, mobile and DTH recharge, utility collections, insurance, PAN services and other partner-enabled products. Actual availability depends on activation, provider and compliance requirements.",
    },
    q2: {
      question: "How does AEPS work?",
      answer:
        "AEPS is an Aadhaar-enabled assisted banking model. In a production integration, an authorised retail point uses the supported device and provider flow for services such as cash withdrawal, balance enquiry and mini statement, subject to eligibility and provider controls.",
    },
    q3: {
      question: "Can a retailer use multiple services from one login?",
      answer:
        "Yes. The partner experience is designed around a unified workspace so a retailer can move between enabled services without maintaining separate customer workflows.",
    },
    q4: {
      question: "Is the website connected to live banking APIs?",
      answer:
        "This project is a production-oriented frontend and functional demo architecture. Live AEPS, BBPS, DMT, recharge, KYC and settlement calls should be connected through your approved backend/provider integrations before launch.",
    },
  },

  partnerCta: {
    eyebrow: "READY TO GROW WITH MANTHAN PAY?",
    title: "Make your shop the place where digital finance feels",
    titleAccent: "closer.",
    description:
      "Start with the partner experience today. Connect your production APIs, service configurations and settlement workflows when you're ready to go live.",
    becomePartner: "Become a Partner",
    login: "Partner Login",
    orbit: {
      secure: { title: "Secure", description: "Validation-first" },
      grow: { title: "Grow", description: "More services" },
      serve: { title: "Serve", description: "More customers" },
    },
  },

  // These are retained because other components can use the original keys.
  services: {
    eyebrow: "ONE PLATFORM",
    title: "Everything your customers need.",
    description:
      "A complete digital financial services ecosystem for retailers and their customers.",
  },
  aeps: {
    eyebrow: "AEPS ACADEMY",
    title: "Understand AEPS in minutes.",
    description:
      "Learn how assisted banking works and how retailers can serve customers through AEPS.",
    watch: "Watch Tutorial",
  },
  partner: {
    title: "Build your digital service business with Manthan Pay.",
    button: "Become a Partner",
  },
  footer: {
    services: "Services",
    company: "Company",
    support: "Support",
    copyright: "© 2026 Manthan Pay. All rights reserved.",
  },
};

const hi = {
  nav: {
    services: "सेवाएँ",
    why: "Manthan Pay क्यों",
    network: "हमारा नेटवर्क",
    academy: "AEPS अकादमी",
    partner: "पार्टनर",
    login: "पार्टनर लॉगिन",
    getStarted: "शुरू करें",
  },
  hero: {
    badge: "भारत · भरोसेमंद काउंटर",
    title: "आधुनिक वित्त।",
    titleAccent: "भारत के लिए बनाया गया।",
    description:
      "हर मोहल्ले में भरोसेमंद डिजिटल वित्तीय सेवाओं के साथ रिटेलर्स को सशक्त बनाना।",
    primary: "पार्टनर बनें",
    secondary: "सेवाएँ देखें",
    watchTutorial: "AEPS ट्यूटोरियल देखें",
  },
  heroSlides: {
    slide1: {
      eyebrow: "डिजिटल सेवा · हर गाँव तक",
      title: "मजबूत भारत के लिए",
      titleAccent: "तकनीक।",
      copy: "भरोसेमंद रिटेलर्स के माध्यम से सुरक्षित सहायक बैंकिंग और रोज़मर्रा की डिजिटल सेवाओं को ग्राहकों के और करीब लाएँ।",
      stat: "रिटेलर-फर्स्ट",
      statCopy: "स्थानीय काउंटर के लिए बनाया गया",
    },
    slide2: {
      eyebrow: "समावेशन · अवसर · विकास",
      title: "और अधिक",
      titleAccent: "डिजिटल शक्ति",
      copy: "ग्राहकों को अपने मोहल्ले से बाहर जाए बिना बिल भुगतान, रिचार्ज, मनी ट्रांसफर और सहायक सेवाएँ उपलब्ध कराएँ।",
      stat: "एक प्लेटफॉर्म",
      statCopy: "कई रोज़मर्रा की सेवाएँ",
    },
    slide3: {
      eyebrow: "भारत · भरोसेमंद काउंटर",
      title: "आधुनिक वित्त,",
      titleAccent: "मानवीय जुड़ाव।",
      copy: "रिटेलर्स, वितरकों और स्थानीय समुदायों के लिए आधुनिक fintech अनुभव।",
      stat: "पार्टनर-आधारित",
      statCopy: "पूरे भारत में विस्तार के लिए तैयार",
    },
  },
  heroTrust: {
    secure: "सुरक्षित वर्कफ़्लो",
    retailer: "रिटेलर-फर्स्ट",
    bharat: "भारत-केंद्रित",
  },
  heroPanel: { experience: "प्लेटफॉर्म अनुभव", explore: "प्लेटफॉर्म देखें" },
  serviceRail: { core: "मुख्य", services: "सेवाएँ", viewAll: "सभी देखें" },
  trust: {
    secure: {
      title: "सुरक्षा के साथ डिज़ाइन",
      description: "स्तरीय नियंत्रण और वैलिडेशन",
    },
    fast: {
      title: "तेज़ सेवा प्रवाह",
      description: "व्यस्त रिटेल काउंटर के लिए बनाया गया",
    },
    support: { title: "मानवीय सहायता", description: "पार्टनर को जरूरत पर मदद" },
    scale: {
      title: "विस्तार के लिए तैयार",
      description: "एक आउटलेट से पूरे नेटवर्क तक",
    },
  },
  manifesto: {
    eyebrow: "मंथन पे का विचार",
    title: "वित्त तब शक्तिशाली बनता है जब वह",
    titleAccent: "सुलभ हो।",
    description:
      "हम उन लोगों के लिए डिजिटल लेयर बना रहे हैं जो अपने समुदायों के केंद्र में हैं — स्थानीय रिटेलर।",
    points: {
      partner: "एक पार्टनर अनुभव",
      workflow: "स्पष्ट सेवा वर्कफ़्लो",
      validation: "लेनदेन से पहले वैलिडेशन",
      bharat: "भारत के लिए डिज़ाइन किया गया",
    },
    button: "अपना डिजिटल सेवा केंद्र बनाएं",
    floatingTitle: "हर काउंटर और अधिक कर सकता है।",
    floatingDescription: "बैंकिंग · बिल · रिचार्ज · और अधिक",
  },
  tutorial: {
    badge: "AEPS अकादमी",
    videoTitle: "कुछ मिनटों में AEPS समझें।",
    videoDescription: "मंथन पे ट्यूटोरियल देखें",
    eyebrow: "सीखें · समझाएँ · सेवा दें",
    title: "सिर्फ AEPS सूचीबद्ध न करें।",
    titleAccent: "दिखाएँ कि यह कैसे काम करता है।",
    description:
      "सरल भाषा, दृश्य चरणों और सक्रियण के स्पष्ट रास्ते से AEPS को समझना आसान बनाएं।",
    steps: {
      customer: {
        title: "ग्राहक आता है",
        description: "आवश्यक बैंकिंग सेवा चुनें।",
      },
      verify: {
        title: "अनुरोध सत्यापित करें",
        description: "ग्राहक और लेनदेन इनपुट सत्यापित करें।",
      },
      complete: {
        title: "सुरक्षित रूप से पूरा करें",
        description: "स्वीकृत AEPS प्रदाता/डिवाइस फ्लो का उपयोग करें।",
      },
    },
    button: "AEPS ट्यूटोरियल चलाएँ",
  },
  network: {
    eyebrow: "हमारा बढ़ता नेटवर्क",
    title: "एक स्थानीय काउंटर से",
    titleAccent: "बढ़ते भारत तक।",
    description:
      "नेटवर्क कहानी को दृश्य रूप से दिखाएँ। प्रोडक्शन में राज्य कवरेज को सत्यापित लाइव डेटा से जोड़ें।",
    featuredStates: "प्रमुख राज्य",
    andGrowing: "और बढ़ रहा है",
    growingAcross: "क्षेत्रों में विस्तार",
    view: "नेटवर्क दृश्य",
    manualUpdate: "API कनेक्ट होने तक मैन्युअली अपडेट",
    stillGrowing: "अभी भी बढ़ रहा है",
    expansion: "कवरेज बढ़ने के साथ नए क्षेत्र सक्रिय किए जा सकते हैं।",
  },
  regions: {
    all: "सभी",
    north: "उत्तर",
    west: "पश्चिम",
    central: "मध्य",
    east: "पूर्व",
    south: "दक्षिण",
  },
  campaign: {
    eyebrow: "वास्तविक जीवन के लिए डिज़ाइन",
    title: "तीन पल।",
    titleAccent: "एक प्लेटफॉर्म।",
    card1: {
      eyebrow: "रिटेलर विकास",
      title: "अपने काउंटर को डिजिटल विकास इंजन बनाएं।",
      button: "पार्टनर बनें",
    },
    card2: {
      eyebrow: "विश्वसनीय समुदाय",
      title: "ऐसी तकनीक जो व्यक्तिगत लगे।",
      button: "कहानी देखें",
    },
    card3: {
      eyebrow: "नेटवर्क · भारत",
      title: "स्थानीय सेवा केंद्रों को बड़े डिजिटल नेटवर्क से जोड़ें।",
      button: "हमारा नेटवर्क देखें",
    },
  },
  stories: {
    previous: "पिछली कहानी",
    next: "अगली कहानी",
    story1: {
      kicker: "वास्तविक लोग · वास्तविक काउंटर",
      title: "डिजिटल वित्त घर के और करीब महसूस होना चाहिए।",
      copy: "एक परिचित रिटेलर बैंकिंग, भुगतान और रोज़मर्रा की डिजिटल सेवाओं तक पहुंच दे सकता है।",
    },
    story2: {
      kicker: "ग्रामीण वाणिज्य · पार्टनर विकास",
      title: "हर स्थानीय दुकान को बढ़ने के और कारण दें।",
      copy: "एक प्लेटफॉर्म रिटेलर को अधिक ग्राहक जरूरतें पूरी करने में मदद करता है।",
    },
    story3: {
      kicker: "विश्वास · सरलता",
      title: "तकनीक तब बेहतर काम करती है जब लोग उसे समझते हैं।",
      copy: "स्पष्ट फ्लो, सरल इंटरफेस और मानवीय सहायता सेवाएँ आसान बनाते हैं।",
    },
  },
  howItWorks: {
    eyebrow: "यह कैसे काम करता है",
    title: "पार्टनर के लिए सरल।",
    titleAccent: "ग्राहक के लिए स्पष्ट।",
    description:
      "सतह पर अनुभव सरल रखें, जबकि वैलिडेशन, ऑथेंटिकेशन, प्रोवाइडर रूटिंग और लेजरिंग अंदर होती है।",
    onboard: {
      title: "ऑनबोर्ड",
      description: "वैलिडेशन के साथ पार्टनर विवरण दर्ज करें।",
    },
    activate: {
      title: "सक्रिय करें",
      description: "KYC और प्रदाता स्वीकृति के आधार पर सेवाएँ सक्षम करें।",
    },
    transact: {
      title: "लेनदेन करें",
      description:
        "सेवा चुनें, इनपुट सत्यापित करें और सुरक्षित रूप से पुष्टि करें।",
    },
    reconcile: {
      title: "रिकन्साइल करें",
      description: "रसीद, स्थिति, कमीशन और इतिहास एक जगह रखें।",
    },
  },
  testimonials: {
    eyebrow: "पार्टनर की आवाज़",
    title: "पार्टनर्स को",
    titleAccent: "आत्मविश्वास देने के लिए बनाया गया।",
    items: {
      ramesh: {
        name: "रमेश कुमार",
        role: "रिटेल पार्टनर · हरियाणा",
        quote:
          "“विचार सरल है — ग्राहक मेरी दुकान पर आते हैं और मैं उन्हें कई सेवाएँ दे सकता हूँ।”",
      },
      sanjay: {
        name: "संजय वर्मा",
        role: "डिजिटल सेवा पार्टनर · उत्तर प्रदेश",
        quote:
          "“इंटरफेस आधुनिक बैंकिंग उत्पाद जैसा लगता है, लेकिन वर्कफ़्लो व्यस्त रिटेल काउंटर के लिए है।”",
      },
      neha: {
        name: "नेहा शर्मा",
        role: "पार्टनर · राजस्थान",
        quote: "“सेवाओं को एक साथ रखना ग्राहकों को समझाना आसान बनाता है।”",
      },
    },
  },
  faq: {
    eyebrow: "सवालों के जवाब",
    title: "शुरू करने से पहले",
    titleAccent: "सब कुछ जानें।",
    description:
      "प्रोडक्शन लॉन्च से पहले इन्हें आपकी नीतियों, प्रदाता अनुबंधों, KYC और बैकएंड APIs से जोड़ना चाहिए।",
    button: "पार्टनर टीम से बात करें",
    q1: {
      question: "मंथन पे पार्टनर कौन-कौन सी सेवाएँ दे सकता है?",
      answer:
        "प्लेटफॉर्म सहायक बैंकिंग, मनी ट्रांसफर, BBPS, रिचार्ज, इंश्योरेंस, PAN और अन्य पार्टनर-सक्षम सेवाओं के लिए बनाया गया है। उपलब्धता एक्टिवेशन और अनुपालन पर निर्भर करती है।",
    },
    q2: {
      question: "AEPS कैसे काम करता है?",
      answer:
        "AEPS आधार-सक्षम सहायक बैंकिंग मॉडल है जिसमें समर्थित डिवाइस और प्रदाता फ्लो का उपयोग किया जाता है।",
    },
    q3: {
      question: "क्या रिटेलर एक लॉगिन से कई सेवाएँ उपयोग कर सकता है?",
      answer: "हाँ। पार्टनर अनुभव एक यूनिफाइड वर्कस्पेस पर आधारित है।",
    },
    q4: {
      question: "क्या वेबसाइट लाइव बैंकिंग APIs से जुड़ी है?",
      answer:
        "यह प्रोडक्शन-ओरिएंटेड फ्रंटएंड और फंक्शनल डेमो है। लाइव APIs को स्वीकृत बैकएंड इंटीग्रेशन से जोड़ना होगा।",
    },
  },
  partnerCta: {
    eyebrow: "मंथन पे के साथ बढ़ने के लिए तैयार?",
    title: "अपनी दुकान को वह जगह बनाएं जहाँ डिजिटल वित्त",
    titleAccent: "और करीब महसूस हो।",
    description:
      "आज पार्टनर अनुभव से शुरुआत करें और लाइव होने पर अपने प्रोडक्शन APIs व सेटलमेंट वर्कफ़्लो जोड़ें।",
    becomePartner: "पार्टनर बनें",
    login: "पार्टनर लॉगिन",
    orbit: {
      secure: { title: "सुरक्षित", description: "वैलिडेशन-फर्स्ट" },
      grow: { title: "बढ़ें", description: "अधिक सेवाएँ" },
      serve: { title: "सेवा दें", description: "अधिक ग्राहक" },
    },
  },
  services: {
    eyebrow: "एक प्लेटफॉर्म",
    title: "आपके ग्राहकों की हर जरूरत।",
    description:
      "रिटेलर्स और उनके ग्राहकों के लिए संपूर्ण डिजिटल वित्तीय सेवा इकोसिस्टम।",
  },
  aeps: {
    eyebrow: "AEPS अकादमी",
    title: "कुछ ही मिनटों में AEPS समझें।",
    description:
      "जानें कि AEPS के माध्यम से रिटेलर्स अपने ग्राहकों को बैंकिंग सेवाएँ कैसे दे सकते हैं।",
    watch: "ट्यूटोरियल देखें",
  },
  partner: {
    title: "Manthan Pay के साथ अपना डिजिटल सेवा व्यवसाय बनाएं।",
    button: "पार्टनर बनें",
  },
  footer: {
    services: "सेवाएँ",
    company: "कंपनी",
    support: "सहायता",
    copyright: "© 2026 Manthan Pay. सर्वाधिकार सुरक्षित।",
  },
};

// Core UI translations for the remaining supported Indian languages.
const bn = {
  nav: {
    services: "পরিষেবা",
    why: "কেন Manthan Pay",
    network: "আমাদের নেটওয়ার্ক",
    academy: "AEPS একাডেমি",
    partner: "পার্টনার",
    login: "পার্টনার লগইন",
    getStarted: "শুরু করুন",
  },
  hero: {
    badge: "ভারত · বিশ্বস্ত কাউন্টার",
    title: "আধুনিক আর্থিক পরিষেবা।",
    titleAccent: "ভারতের জন্য তৈরি।",
    description:
      "প্রতিটি এলাকার রিটেলারদের বিশ্বস্ত ডিজিটাল আর্থিক পরিষেবা দিয়ে ক্ষমতায়ন করা।",
    primary: "পার্টনার হন",
    secondary: "পরিষেবা দেখুন",
    watchTutorial: "AEPS টিউটোরিয়াল দেখুন",
  },
  serviceRail: { core: "মূল", services: "পরিষেবা", viewAll: "সব দেখুন" },
  regions: {
    all: "সব",
    north: "উত্তর",
    west: "পশ্চিম",
    central: "মধ্য",
    east: "পূর্ব",
    south: "দক্ষিণ",
  },
  network: {
    eyebrow: "আমাদের ক্রমবর্ধমান নেটওয়ার্ক",
    title: "স্থানীয় কাউন্টার থেকে",
    titleAccent: "বর্ধমান ভারত পর্যন্ত।",
    featuredStates: "প্রধান রাজ্য",
    andGrowing: "এবং বাড়ছে",
    growingAcross: "বিভিন্ন অঞ্চলে বাড়ছে",
    view: "নেটওয়ার্ক দেখুন",
    manualUpdate: "API সংযুক্ত না হওয়া পর্যন্ত ম্যানুয়ালি আপডেট",
    stillGrowing: "এখনও বাড়ছে",
    expansion: "কভারেজ বাড়ার সঙ্গে নতুন অঞ্চল সক্রিয় করা যাবে",
  },
  tutorial: {
    badge: "AEPS একাডেমি",
    videoTitle: "কয়েক মিনিটে AEPS বুঝুন।",
    videoDescription: "Manthan Pay টিউটোরিয়াল দেখুন",
    eyebrow: "শিখুন · ব্যাখ্যা করুন · সেবা দিন",
    title: "শুধু AEPS তালিকাভুক্ত করবেন না।",
    titleAccent: "এটি কীভাবে কাজ করে দেখান।",
    button: "AEPS টিউটোরিয়াল চালান",
  },
  partnerCta: {
    eyebrow: "MANTHAN PAY-এর সঙ্গে বাড়তে প্রস্তুত?",
    title: "আপনার দোকানকে এমন জায়গা বানান যেখানে ডিজিটাল অর্থব্যবস্থা",
    titleAccent: "আরও কাছে অনুভূত হয়।",
    becomePartner: "পার্টনার হন",
    login: "পার্টনার লগইন",
    orbit: {
      secure: { title: "নিরাপদ", description: "ভ্যালিডেশন-ফার্স্ট" },
      grow: { title: "বাড়ুন", description: "আরও পরিষেবা" },
      serve: { title: "সেবা দিন", description: "আরও গ্রাহক" },
    },
  },
  footer: {
    services: "পরিষেবা",
    company: "কোম্পানি",
    support: "সহায়তা",
    copyright: "© 2026 Manthan Pay. সর্বস্বত্ব সংরক্ষিত।",
  },
};
const mr = {
  nav: {
    services: "सेवा",
    why: "Manthan Pay का उद्देश",
    network: "आमचे नेटवर्क",
    academy: "AEPS अकादमी",
    partner: "भागीदार",
    login: "भागीदार लॉगिन",
    getStarted: "सुरू करा",
  },
  hero: {
    badge: "भारत · विश्वासार्ह काउंटर",
    title: "आधुनिक वित्त.",
    titleAccent: "भारतासाठी तयार.",
    description:
      "प्रत्येक परिसरातील रिटेलर्सना विश्वासार्ह डिजिटल वित्तीय सेवा देऊन सक्षम करणे.",
    primary: "भागीदार बना",
    secondary: "सेवा पहा",
    watchTutorial: "AEPS ट्यूटोरियल पहा",
  },
  serviceRail: { core: "मुख्य", services: "सेवा", viewAll: "सर्व पहा" },
  regions: {
    all: "सर्व",
    north: "उत्तर",
    west: "पश्चिम",
    central: "मध्य",
    east: "पूर्व",
    south: "दक्षिण",
  },
  network: {
    eyebrow: "आमचा वाढता नेटवर्क",
    title: "स्थानिक काउंटरपासून",
    titleAccent: "वाढत्या भारतापर्यंत.",
    featuredStates: "प्रमुख राज्ये",
    andGrowing: "आणि वाढत आहे",
    growingAcross: "प्रदेशांमध्ये वाढ",
    view: "नेटवर्क दृश्य",
    manualUpdate: "API जोडले जाईपर्यंत मॅन्युअल अपडेट",
    stillGrowing: "अजून वाढत आहे",
    expansion: "कव्हरेज वाढल्यावर नवीन प्रदेश सक्रिय करता येतील",
  },
  tutorial: {
    badge: "AEPS अकादमी",
    videoTitle: "काही मिनिटांत AEPS समजून घ्या.",
    videoDescription: "Manthan Pay ट्यूटोरियल पहा",
    eyebrow: "शिका · समजवा · सेवा द्या",
    title: "फक्त AEPSची यादी देऊ नका.",
    titleAccent: "ते कसे काम करते ते दाखवा.",
    button: "AEPS ट्यूटोरियल चालवा",
  },
  partnerCta: {
    eyebrow: "MANTHAN PAY सोबत वाढण्यास तयार?",
    title: "तुमचे दुकान असे ठिकाण बनवा जिथे डिजिटल वित्त",
    titleAccent: "अधिक जवळचे वाटेल.",
    becomePartner: "भागीदार बना",
    login: "भागीदार लॉगिन",
    orbit: {
      secure: { title: "सुरक्षित", description: "व्हॅलिडेशन-फर्स्ट" },
      grow: { title: "वाढा", description: "अधिक सेवा" },
      serve: { title: "सेवा द्या", description: "अधिक ग्राहक" },
    },
  },
  footer: {
    services: "सेवा",
    company: "कंपनी",
    support: "मदत",
    copyright: "© 2026 Manthan Pay. सर्व हक्क राखीव.",
  },
};
const te = {
  nav: {
    services: "సేవలు",
    why: "Manthan Pay ఎందుకు",
    network: "మా నెట్‌వర్క్",
    academy: "AEPS అకాడమీ",
    partner: "పార్ట్నర్",
    login: "పార్ట్నర్ లాగిన్",
    getStarted: "ప్రారంభించండి",
  },
  hero: {
    badge: "భారత్ · విశ్వసనీయ కౌంటర్లు",
    title: "ఆధునిక ఆర్థిక సేవలు.",
    titleAccent: "భారత్ కోసం నిర్మితం.",
    description:
      "ప్రతి ప్రాంతంలోని రిటైలర్లకు విశ్వసనీయ డిజిటల్ ఆర్థిక సేవలను అందించడం.",
    primary: "పార్ట్నర్ అవ్వండి",
    secondary: "సేవలను చూడండి",
    watchTutorial: "AEPS ట్యుటోరియల్ చూడండి",
  },
  serviceRail: { core: "ప్రధాన", services: "సేవలు", viewAll: "అన్నీ చూడండి" },
  regions: {
    all: "అన్నీ",
    north: "ఉత్తరం",
    west: "పడమర",
    central: "మధ్య",
    east: "తూర్పు",
    south: "దక్షిణం",
  },
  network: {
    eyebrow: "మా పెరుగుతున్న నెట్‌వర్క్",
    title: "స్థానిక కౌంటర్ నుండి",
    titleAccent: "పెరుగుతున్న భారత్ వరకు.",
    featuredStates: "ప్రధాన రాష్ట్రాలు",
    andGrowing: "మరియు పెరుగుతోంది",
    growingAcross: "ప్రాంతాల్లో విస్తరణ",
    view: "నెట్‌వర్క్ వీక్షణ",
    manualUpdate: "API కనెక్ట్ అయ్యే వరకు మాన్యువల్ అప్‌డేట్",
    stillGrowing: "ఇంకా పెరుగుతోంది",
    expansion: "కవరేజ్ పెరిగే కొద్దీ కొత్త ప్రాంతాలను ప్రారంభించవచ్చు",
  },
  tutorial: {
    badge: "AEPS అకాడమీ",
    videoTitle: "కొన్ని నిమిషాల్లో AEPS అర్థం చేసుకోండి.",
    videoDescription: "Manthan Pay ట్యుటోరియల్ చూడండి",
    eyebrow: "నేర్చుకోండి · వివరించండి · సేవ చేయండి",
    title: "AEPSను కేవలం జాబితా చేయకండి.",
    titleAccent: "అది ఎలా పనిచేస్తుందో చూపండి.",
    button: "AEPS ట్యుటోరియల్ ప్లే చేయండి",
  },
  partnerCta: {
    eyebrow: "MANTHAN PAYతో ఎదగడానికి సిద్ధమా?",
    title: "మీ దుకాణాన్ని డిజిటల్ ఫైనాన్స్",
    titleAccent: "మరింత దగ్గరగా అనిపించే ప్రదేశంగా మార్చండి.",
    becomePartner: "పార్ట్నర్ అవ్వండి",
    login: "పార్ట్నర్ లాగిన్",
    orbit: {
      secure: { title: "సురక్షితం", description: "వాలిడేషన్-ఫస్ట్" },
      grow: { title: "ఎదగండి", description: "మరిన్ని సేవలు" },
      serve: { title: "సేవ చేయండి", description: "మరిన్ని కస్టమర్లు" },
    },
  },
  footer: {
    services: "సేవలు",
    company: "కంపెనీ",
    support: "సహాయం",
    copyright: "© 2026 Manthan Pay. అన్ని హక్కులు రిజర్వ్ చేయబడ్డాయి.",
  },
};
const ta = {
  nav: {
    services: "சேவைகள்",
    why: "Manthan Pay ஏன்",
    network: "எங்கள் நெட்வொர்க்",
    academy: "AEPS அகாடமி",
    partner: "கூட்டாளர்",
    login: "கூட்டாளர் உள்நுழைவு",
    getStarted: "தொடங்குங்கள்",
  },
  hero: {
    badge: "பாரத் · நம்பகமான கவுண்டர்கள்",
    title: "நவீன நிதி.",
    titleAccent: "பாரத்திற்காக உருவாக்கப்பட்டது.",
    description:
      "ஒவ்வொரு பகுதியிலும் உள்ள சில்லறை விற்பனையாளர்களுக்கு நம்பகமான டிஜிட்டல் நிதிச் சேவைகளை வழங்குதல்.",
    primary: "கூட்டாளராகுங்கள்",
    secondary: "சேவைகளைப் பார்க்கவும்",
    watchTutorial: "AEPS பயிற்சியைப் பார்க்கவும்",
  },
  serviceRail: {
    core: "முக்கியம்",
    services: "சேவைகள்",
    viewAll: "அனைத்தையும் பார்க்கவும்",
  },
  regions: {
    all: "அனைத்தும்",
    north: "வடக்கு",
    west: "மேற்கு",
    central: "மத்திய",
    east: "கிழக்கு",
    south: "தெற்கு",
  },
  network: {
    eyebrow: "எங்கள் வளர்ந்து வரும் நெட்வொர்க்",
    title: "உள்ளூர் கவுண்டரிலிருந்து",
    titleAccent: "வளரும் பாரத் வரை.",
    featuredStates: "முக்கிய மாநிலங்கள்",
    andGrowing: "மேலும் வளர்கிறது",
    growingAcross: "பிராந்தியங்களில் வளர்ச்சி",
    view: "நெட்வொர்க் காட்சி",
    manualUpdate: "API இணையும் வரை கைமுறை புதுப்பிப்பு",
    stillGrowing: "இன்னும் வளர்கிறது",
    expansion: "கவரேஜ் அதிகரிக்கும்போது புதிய பகுதிகளை செயல்படுத்தலாம்",
  },
  tutorial: {
    badge: "AEPS அகாடமி",
    videoTitle: "சில நிமிடங்களில் AEPS-ஐ புரிந்துகொள்ளுங்கள்.",
    videoDescription: "Manthan Pay பயிற்சியைப் பார்க்கவும்",
    eyebrow: "கற்றுக்கொள் · விளக்கு · சேவை செய்",
    title: "AEPS-ஐ பட்டியலிடுவது மட்டும் போதாது.",
    titleAccent: "அது எப்படி வேலை செய்கிறது என்பதை காட்டுங்கள்.",
    button: "AEPS பயிற்சியை இயக்கவும்",
  },
  partnerCta: {
    eyebrow: "MANTHAN PAY உடன் வளர தயாரா?",
    title: "உங்கள் கடையை டிஜிட்டல் நிதி",
    titleAccent: "மேலும் நெருக்கமாக உணரப்படும் இடமாக மாற்றுங்கள்.",
    becomePartner: "கூட்டாளராகுங்கள்",
    login: "கூட்டாளர் உள்நுழைவு",
    orbit: {
      secure: { title: "பாதுகாப்பானது", description: "வாலிடேஷன்-முதல்" },
      grow: { title: "வளருங்கள்", description: "மேலும் சேவைகள்" },
      serve: {
        title: "சேவை செய்யுங்கள்",
        description: "மேலும் வாடிக்கையாளர்கள்",
      },
    },
  },
  footer: {
    services: "சேவைகள்",
    company: "நிறுவனம்",
    support: "ஆதரவு",
    copyright: "© 2026 Manthan Pay. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.",
  },
};
const gu = {
  nav: {
    services: "સેવાઓ",
    why: "Manthan Pay શા માટે",
    network: "અમારું નેટવર્ક",
    academy: "AEPS અકાદમી",
    partner: "પાર્ટનર",
    login: "પાર્ટનર લૉગિન",
    getStarted: "શરૂ કરો",
  },
  hero: {
    badge: "ભારત · વિશ્વસનીય કાઉન્ટર્સ",
    title: "આધુનિક નાણાં.",
    titleAccent: "ભારત માટે બનાવેલું.",
    description:
      "દરેક વિસ્તારમાં રિટેલર્સને વિશ્વસનીય ડિજિટલ નાણાકીય સેવાઓથી સશક્ત બનાવવું.",
    primary: "પાર્ટનર બનો",
    secondary: "સેવાઓ જુઓ",
    watchTutorial: "AEPS ટ્યુટોરિયલ જુઓ",
  },
  serviceRail: { core: "મુખ્ય", services: "સેવાઓ", viewAll: "બધું જુઓ" },
  regions: {
    all: "બધા",
    north: "ઉત્તર",
    west: "પશ્ચિમ",
    central: "મધ્ય",
    east: "પૂર્વ",
    south: "દક્ષિણ",
  },
  network: {
    eyebrow: "અમારું વધતું નેટવર્ક",
    title: "સ્થાનિક કાઉન્ટરથી",
    titleAccent: "વધતા ભારત સુધી.",
    featuredStates: "મુખ્ય રાજ્યો",
    andGrowing: "અને વધી રહ્યું છે",
    growingAcross: "પ્રદેશોમાં વિસ્તરણ",
    view: "નેટવર્ક દૃશ્ય",
    manualUpdate: "API જોડાય ત્યાં સુધી મેન્યુઅલ અપડેટ",
    stillGrowing: "હજુ વધી રહ્યું છે",
    expansion: "કવરેજ વધે તેમ નવા વિસ્તારો સક્રિય કરી શકાય છે",
  },
  tutorial: {
    badge: "AEPS અકાદમી",
    videoTitle: "થોડી જ મિનિટોમાં AEPS સમજો.",
    videoDescription: "Manthan Pay ટ્યુટોરિયલ જુઓ",
    eyebrow: "શીખો · સમજાવો · સેવા આપો",
    title: "ફક્ત AEPSની યાદી ન બનાવો.",
    titleAccent: "તે કેવી રીતે કામ કરે છે તે બતાવો.",
    button: "AEPS ટ્યુટોરિયલ ચલાવો",
  },
  partnerCta: {
    eyebrow: "MANTHAN PAY સાથે વધવા તૈયાર છો?",
    title: "તમારી દુકાનને એવું સ્થળ બનાવો જ્યાં ડિજિટલ નાણાં",
    titleAccent: "વધુ નજીક લાગે.",
    becomePartner: "પાર્ટનર બનો",
    login: "પાર્ટનર લૉગિન",
    orbit: {
      secure: { title: "સુરક્ષિત", description: "વેલિડેશન-ફર્સ્ટ" },
      grow: { title: "વધો", description: "વધુ સેવાઓ" },
      serve: { title: "સેવા આપો", description: "વધુ ગ્રાહકો" },
    },
  },
  footer: {
    services: "સેવાઓ",
    company: "કંપની",
    support: "સહાય",
    copyright: "© 2026 Manthan Pay. બધા અધિકારો સુરક્ષિત.",
  },
};
const kn = {
  nav: {
    services: "ಸೇವೆಗಳು",
    why: "Manthan Pay ಏಕೆ",
    network: "ನಮ್ಮ ನೆಟ್‌ವರ್ಕ್",
    academy: "AEPS ಅಕಾಡೆಮಿ",
    partner: "ಪಾರ್ಟ್ನರ್",
    login: "ಪಾರ್ಟ್ನರ್ ಲಾಗಿನ್",
    getStarted: "ಪ್ರಾರಂಭಿಸಿ",
  },
  hero: {
    badge: "ಭಾರತ · ವಿಶ್ವಾಸಾರ್ಹ ಕೌಂಟರ್‌ಗಳು",
    title: "ಆಧುನಿಕ ಹಣಕಾಸು.",
    titleAccent: "ಭಾರತಕ್ಕಾಗಿ ನಿರ್ಮಿಸಲಾಗಿದೆ.",
    description:
      "ಪ್ರತಿ ಪ್ರದೇಶದ ರಿಟೇಲರ್‌ಗಳಿಗೆ ವಿಶ್ವಾಸಾರ್ಹ ಡಿಜಿಟಲ್ ಹಣಕಾಸು ಸೇವೆಗಳನ್ನು ಒದಗಿಸುವುದು.",
    primary: "ಪಾರ್ಟ್ನರ್ ಆಗಿ",
    secondary: "ಸೇವೆಗಳನ್ನು ನೋಡಿ",
    watchTutorial: "AEPS ಟ್ಯುಟೋರಿಯಲ್ ನೋಡಿ",
  },
  serviceRail: {
    core: "ಮುಖ್ಯ",
    services: "ಸೇವೆಗಳು",
    viewAll: "ಎಲ್ಲವನ್ನೂ ನೋಡಿ",
  },
  regions: {
    all: "ಎಲ್ಲಾ",
    north: "ಉತ್ತರ",
    west: "ಪಶ್ಚಿಮ",
    central: "ಮಧ್ಯ",
    east: "ಪೂರ್ವ",
    south: "ದಕ್ಷಿಣ",
  },
  network: {
    eyebrow: "ನಮ್ಮ ಬೆಳೆಯುತ್ತಿರುವ ನೆಟ್‌ವರ್ಕ್",
    title: "ಸ್ಥಳೀಯ ಕೌಂಟರ್‌ನಿಂದ",
    titleAccent: "ಬೆಳೆಯುತ್ತಿರುವ ಭಾರತವರೆಗೆ.",
    featuredStates: "ಪ್ರಮುಖ ರಾಜ್ಯಗಳು",
    andGrowing: "ಮತ್ತು ಬೆಳೆಯುತ್ತಿದೆ",
    growingAcross: "ಪ್ರದೇಶಗಳಲ್ಲಿ ಬೆಳವಣಿಗೆ",
    view: "ನೆಟ್‌ವರ್ಕ್ ವೀಕ್ಷಣೆ",
    manualUpdate: "API ಸಂಪರ್ಕವಾಗುವವರೆಗೆ ಕೈಯಾರೆ ಅಪ್‌ಡೇಟ್",
    stillGrowing: "ಇನ್ನೂ ಬೆಳೆಯುತ್ತಿದೆ",
    expansion: "ಕವರೇಜ್ ಹೆಚ್ಚಾದಂತೆ ಹೊಸ ಪ್ರದೇಶಗಳನ್ನು ಸಕ್ರಿಯಗೊಳಿಸಬಹುದು",
  },
  tutorial: {
    badge: "AEPS ಅಕಾಡೆಮಿ",
    videoTitle: "ಕೆಲವೇ ನಿಮಿಷಗಳಲ್ಲಿ AEPS ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.",
    videoDescription: "Manthan Pay ಟ್ಯುಟೋರಿಯಲ್ ನೋಡಿ",
    eyebrow: "ಕಲಿ · ವಿವರಿಸಿ · ಸೇವೆ ನೀಡಿ",
    title: "AEPS ಅನ್ನು ಪಟ್ಟಿ ಮಾಡುವುದು ಮಾತ್ರ ಬೇಡ.",
    titleAccent: "ಅದು ಹೇಗೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ ತೋರಿಸಿ.",
    button: "AEPS ಟ್ಯುಟೋರಿಯಲ್ ಪ್ಲೇ ಮಾಡಿ",
  },
  partnerCta: {
    eyebrow: "MANTHAN PAY ಜೊತೆ ಬೆಳೆಯಲು ಸಿದ್ಧವೇ?",
    title: "ನಿಮ್ಮ ಅಂಗಡಿಯನ್ನು ಡಿಜಿಟಲ್ ಹಣಕಾಸು",
    titleAccent: "ಹೆಚ್ಚು ಹತ್ತಿರವಾಗುವ ಸ್ಥಳವನ್ನಾಗಿ ಮಾಡಿ.",
    becomePartner: "ಪಾರ್ಟ್ನರ್ ಆಗಿ",
    login: "ಪಾರ್ಟ್ನರ್ ಲಾಗಿನ್",
    orbit: {
      secure: { title: "ಸುರಕ್ಷಿತ", description: "ವ್ಯಾಲಿಡೇಶನ್-ಫಸ್ಟ್" },
      grow: { title: "ಬೆಳೆಯಿರಿ", description: "ಹೆಚ್ಚಿನ ಸೇವೆಗಳು" },
      serve: { title: "ಸೇವೆ ನೀಡಿ", description: "ಹೆಚ್ಚಿನ ಗ್ರಾಹಕರು" },
    },
  },
  footer: {
    services: "ಸೇವೆಗಳು",
    company: "ಕಂಪನಿ",
    support: "ಬೆಂಬಲ",
    copyright: "© 2026 Manthan Pay. ಎಲ್ಲಾ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.",
  },
};
const ml = {
  nav: {
    services: "സേവനങ്ങൾ",
    why: "Manthan Pay എന്തുകൊണ്ട്",
    network: "ഞങ്ങളുടെ നെറ്റ്‌വർക്ക്",
    academy: "AEPS അക്കാദമി",
    partner: "പാർട്ണർ",
    login: "പാർട്ണർ ലോഗിൻ",
    getStarted: "ആരംഭിക്കുക",
  },
  hero: {
    badge: "ഭാരത് · വിശ്വസനീയ കൗണ്ടറുകൾ",
    title: "ആധുനിക ധനകാര്യം.",
    titleAccent: "ഭാരത്തിനായി നിർമ്മിച്ചത്.",
    description:
      "ഓരോ പ്രദേശത്തുമുള്ള റീട്ടെയിലർമാർക്ക് വിശ്വസനീയമായ ഡിജിറ്റൽ ധനകാര്യ സേവനങ്ങൾ നൽകുന്നു.",
    primary: "പാർട്ണർ ആകുക",
    secondary: "സേവനങ്ങൾ കാണുക",
    watchTutorial: "AEPS ട്യൂട്ടോറിയൽ കാണുക",
  },
  serviceRail: {
    core: "പ്രധാന",
    services: "സേവനങ്ങൾ",
    viewAll: "എല്ലാം കാണുക",
  },
  regions: {
    all: "എല്ലാം",
    north: "വടക്ക്",
    west: "പടിഞ്ഞാറ്",
    central: "മധ്യം",
    east: "കിഴക്ക്",
    south: "തെക്ക്",
  },
  network: {
    eyebrow: "ഞങ്ങളുടെ വളരുന്ന നെറ്റ്‌വർക്ക്",
    title: "പ്രാദേശിക കൗണ്ടറിൽ നിന്ന്",
    titleAccent: "വളരുന്ന ഭാരതത്തിലേക്ക്.",
    featuredStates: "പ്രധാന സംസ്ഥാനങ്ങൾ",
    andGrowing: "വളരുന്നു",
    growingAcross: "പ്രദേശങ്ങളിലുടനീളം വളർച്ച",
    view: "നെറ്റ്‌വർക്ക് കാഴ്ച",
    manualUpdate: "API കണക്റ്റ് ചെയ്യുന്നതുവരെ മാനുവൽ അപ്‌ഡേറ്റ്",
    stillGrowing: "ഇനിയും വളരുന്നു",
    expansion: "കവറേജ് വർധിക്കുമ്പോൾ പുതിയ പ്രദേശങ്ങൾ സജീവമാക്കാം",
  },
  tutorial: {
    badge: "AEPS അക്കാദമി",
    videoTitle: "കുറച്ച് മിനിറ്റുകളിൽ AEPS മനസ്സിലാക്കാം.",
    videoDescription: "Manthan Pay ട്യൂട്ടോറിയൽ കാണുക",
    eyebrow: "പഠിക്കുക · വിശദീകരിക്കുക · സേവിക്കുക",
    title: "AEPS പട്ടികപ്പെടുത്തുക മാത്രം ചെയ്യരുത്.",
    titleAccent: "അത് എങ്ങനെ പ്രവർത്തിക്കുന്നു എന്ന് കാണിക്കുക.",
    button: "AEPS ട്യൂട്ടോറിയൽ പ്ലേ ചെയ്യുക",
  },
  partnerCta: {
    eyebrow: "MANTHAN PAY-യോടൊപ്പം വളരാൻ തയ്യാറാണോ?",
    title: "നിങ്ങളുടെ കടയെ ഡിജിറ്റൽ ധനകാര്യം",
    titleAccent: "കൂടുതൽ അടുത്തതായി തോന്നുന്ന ഇടമാക്കുക.",
    becomePartner: "പാർട്ണർ ആകുക",
    login: "പാർട്ണർ ലോഗിൻ",
    orbit: {
      secure: { title: "സുരക്ഷിതം", description: "വാലിഡേഷൻ-ഫസ്റ്റ്" },
      grow: { title: "വളരുക", description: "കൂടുതൽ സേവനങ്ങൾ" },
      serve: { title: "സേവിക്കുക", description: "കൂടുതൽ ഉപഭോക്താക്കൾ" },
    },
  },
  footer: {
    services: "സേവനങ്ങൾ",
    company: "കമ്പനി",
    support: "പിന്തുണ",
    copyright: "© 2026 Manthan Pay. എല്ലാ അവകാശങ്ങളും സംരക്ഷിച്ചിരിക്കുന്നു.",
  },
};
const pa = {
  nav: {
    services: "ਸੇਵਾਵਾਂ",
    why: "Manthan Pay ਕਿਉਂ",
    network: "ਸਾਡਾ ਨੈੱਟਵਰਕ",
    academy: "AEPS ਅਕੈਡਮੀ",
    partner: "ਪਾਰਟਨਰ",
    login: "ਪਾਰਟਨਰ ਲੌਗਇਨ",
    getStarted: "ਸ਼ੁਰੂ ਕਰੋ",
  },
  hero: {
    badge: "ਭਾਰਤ · ਭਰੋਸੇਯੋਗ ਕਾਊਂਟਰ",
    title: "ਆਧੁਨਿਕ ਵਿੱਤ।",
    titleAccent: "ਭਾਰਤ ਲਈ ਬਣਾਇਆ।",
    description:
      "ਹਰ ਇਲਾਕੇ ਦੇ ਰਿਟੇਲਰਾਂ ਨੂੰ ਭਰੋਸੇਯੋਗ ਡਿਜ਼ਿਟਲ ਵਿੱਤੀ ਸੇਵਾਵਾਂ ਨਾਲ ਸਸ਼ਕਤ ਕਰਨਾ।",
    primary: "ਪਾਰਟਨਰ ਬਣੋ",
    secondary: "ਸੇਵਾਵਾਂ ਵੇਖੋ",
    watchTutorial: "AEPS ਟਿਊਟੋਰਿਅਲ ਵੇਖੋ",
  },
  serviceRail: { core: "ਮੁੱਖ", services: "ਸੇਵਾਵਾਂ", viewAll: "ਸਭ ਵੇਖੋ" },
  regions: {
    all: "ਸਾਰੇ",
    north: "ਉੱਤਰ",
    west: "ਪੱਛਮ",
    central: "ਕੇਂਦਰ",
    east: "ਪੂਰਬ",
    south: "ਦੱਖਣ",
  },
  network: {
    eyebrow: "ਸਾਡਾ ਵਧਦਾ ਨੈੱਟਵਰਕ",
    title: "ਸਥਾਨਕ ਕਾਊਂਟਰ ਤੋਂ",
    titleAccent: "ਵਧਦੇ ਭਾਰਤ ਤੱਕ।",
    featuredStates: "ਮੁੱਖ ਰਾਜ",
    andGrowing: "ਅਤੇ ਵਧ ਰਿਹਾ ਹੈ",
    growingAcross: "ਖੇਤਰਾਂ ਵਿੱਚ ਵਾਧਾ",
    view: "ਨੈੱਟਵਰਕ ਦ੍ਰਿਸ਼",
    manualUpdate: "API ਜੁੜਨ ਤੱਕ ਮੈਨੁਅਲ ਅੱਪਡੇਟ",
    stillGrowing: "ਅਜੇ ਵੀ ਵਧ ਰਿਹਾ ਹੈ",
    expansion: "ਕਵਰੇਜ ਵਧਣ ਨਾਲ ਨਵੇਂ ਖੇਤਰ ਸਰਗਰਮ ਕੀਤੇ ਜਾ ਸਕਦੇ ਹਨ",
  },
  tutorial: {
    badge: "AEPS ਅਕੈਡਮੀ",
    videoTitle: "ਕੁਝ ਮਿੰਟਾਂ ਵਿੱਚ AEPS ਸਮਝੋ।",
    videoDescription: "Manthan Pay ਟਿਊਟੋਰਿਅਲ ਵੇਖੋ",
    eyebrow: "ਸਿੱਖੋ · ਸਮਝਾਓ · ਸੇਵਾ ਦਿਓ",
    title: "ਸਿਰਫ਼ AEPS ਦੀ ਸੂਚੀ ਨਾ ਦਿਓ।",
    titleAccent: "ਦਿਖਾਓ ਕਿ ਇਹ ਕਿਵੇਂ ਕੰਮ ਕਰਦਾ ਹੈ।",
    button: "AEPS ਟਿਊਟੋਰਿਅਲ ਚਲਾਓ",
  },
  partnerCta: {
    eyebrow: "MANTHAN PAY ਨਾਲ ਵਧਣ ਲਈ ਤਿਆਰ?",
    title: "ਆਪਣੀ ਦੁਕਾਨ ਨੂੰ ਉਹ ਥਾਂ ਬਣਾਓ ਜਿੱਥੇ ਡਿਜ਼ਿਟਲ ਵਿੱਤ",
    titleAccent: "ਹੋਰ ਨੇੜੇ ਮਹਿਸੂਸ ਹੋਵੇ।",
    becomePartner: "ਪਾਰਟਨਰ ਬਣੋ",
    login: "ਪਾਰਟਨਰ ਲੌਗਇਨ",
    orbit: {
      secure: { title: "ਸੁਰੱਖਿਅਤ", description: "ਵੈਲਿਡੇਸ਼ਨ-ਫਰਸਟ" },
      grow: { title: "ਵਧੋ", description: "ਹੋਰ ਸੇਵਾਵਾਂ" },
      serve: { title: "ਸੇਵਾ ਦਿਓ", description: "ਹੋਰ ਗਾਹਕ" },
    },
  },
  footer: {
    services: "ਸੇਵਾਵਾਂ",
    company: "ਕੰਪਨੀ",
    support: "ਸਹਾਇਤਾ",
    copyright: "© 2026 Manthan Pay. ਸਾਰੇ ਹੱਕ ਰਾਖਵੇਂ ਹਨ।",
  },
};
const or = {
  nav: {
    services: "ସେବା",
    why: "Manthan Pay କାହିଁକି",
    network: "ଆମ ନେଟୱର୍କ",
    academy: "AEPS ଏକାଡେମୀ",
    partner: "ପାର୍ଟନର",
    login: "ପାର୍ଟନର ଲଗଇନ୍",
    getStarted: "ଆରମ୍ଭ କରନ୍ତୁ",
  },
  hero: {
    badge: "ଭାରତ · ବିଶ୍ୱସନୀୟ କାଉଣ୍ଟର",
    title: "ଆଧୁନିକ ଅର୍ଥବ୍ୟବସ୍ଥା।",
    titleAccent: "ଭାରତ ପାଇଁ ନିର୍ମିତ।",
    description:
      "ପ୍ରତ୍ୟେକ ଅଞ୍ଚଳର ରିଟେଲରମାନଙ୍କୁ ବିଶ୍ୱସନୀୟ ଡିଜିଟାଲ ଆର୍ଥିକ ସେବା ଦେଇ ସଶକ୍ତ କରିବା।",
    primary: "ପାର୍ଟନର ହୁଅନ୍ତୁ",
    secondary: "ସେବା ଦେଖନ୍ତୁ",
    watchTutorial: "AEPS ଟ୍ୟୁଟୋରିଆଲ ଦେଖନ୍ତୁ",
  },
  serviceRail: { core: "ମୁଖ୍ୟ", services: "ସେବା", viewAll: "ସବୁ ଦେଖନ୍ତୁ" },
  regions: {
    all: "ସମସ୍ତ",
    north: "ଉତ୍ତର",
    west: "ପଶ୍ଚିମ",
    central: "ମଧ୍ୟ",
    east: "ପୂର୍ବ",
    south: "ଦକ୍ଷିଣ",
  },
  network: {
    eyebrow: "ଆମ ବଢୁଥିବା ନେଟୱର୍କ",
    title: "ସ୍ଥାନୀୟ କାଉଣ୍ଟରରୁ",
    titleAccent: "ବଢୁଥିବା ଭାରତ ପର୍ଯ୍ୟନ୍ତ।",
    featuredStates: "ପ୍ରମୁଖ ରାଜ୍ୟ",
    andGrowing: "ଏବଂ ବଢୁଛି",
    growingAcross: "ଅଞ୍ଚଳଗୁଡ଼ିକରେ ବିସ୍ତାର",
    view: "ନେଟୱର୍କ ଦୃଶ୍ୟ",
    manualUpdate: "API ଯୋଡ଼ାଯିବା ପର୍ଯ୍ୟନ୍ତ ମାନୁଆଲ ଅପଡେଟ",
    stillGrowing: "ଏବେ ମଧ୍ୟ ବଢୁଛି",
    expansion: "କଭରେଜ ବଢିଲେ ନୂଆ ଅଞ୍ଚଳ ସକ୍ରିୟ କରାଯାଇପାରିବ",
  },
  tutorial: {
    badge: "AEPS ଏକାଡେମୀ",
    videoTitle: "କିଛି ମିନିଟରେ AEPS ବୁଝନ୍ତୁ।",
    videoDescription: "Manthan Pay ଟ୍ୟୁଟୋରିଆଲ ଦେଖନ୍ତୁ",
    eyebrow: "ଶିଖନ୍ତୁ · ବୁଝାନ୍ତୁ · ସେବା ଦିଅନ୍ତୁ",
    title: "କେବଳ AEPS ତାଲିକାଭୁକ୍ତ କରନ୍ତୁ ନାହିଁ।",
    titleAccent: "ଏହା କିପରି କାମ କରେ ଦେଖାନ୍ତୁ।",
    button: "AEPS ଟ୍ୟୁଟୋରିଆଲ ଚଲାନ୍ତୁ",
  },
  partnerCta: {
    eyebrow: "MANTHAN PAY ସହିତ ବଢିବାକୁ ପ୍ରସ୍ତୁତ?",
    title: "ଆପଣଙ୍କ ଦୋକାନକୁ ଏପରି ସ୍ଥାନ କରନ୍ତୁ ଯେଉଁଠାରେ ଡିଜିଟାଲ ଅର୍ଥବ୍ୟବସ୍ଥା",
    titleAccent: "ଅଧିକ ନିକଟ ଲାଗେ।",
    becomePartner: "ପାର୍ଟନର ହୁଅନ୍ତୁ",
    login: "ପାର୍ଟନର ଲଗଇନ୍",
    orbit: {
      secure: { title: "ସୁରକ୍ଷିତ", description: "ଭାଲିଡେସନ-ଫର୍ଷ୍ଟ" },
      grow: { title: "ବଢନ୍ତୁ", description: "ଅଧିକ ସେବା" },
      serve: { title: "ସେବା ଦିଅନ୍ତୁ", description: "ଅଧିକ ଗ୍ରାହକ" },
    },
  },
  footer: {
    services: "ସେବା",
    company: "କମ୍ପାନୀ",
    support: "ସହାୟତା",
    copyright: "© 2026 Manthan Pay. ସମସ୍ତ ଅଧିକାର ସଂରକ୍ଷିତ।",
  },
};

const deepMerge = (base, overrides) => {
  const result = { ...base };

  Object.entries(overrides || {}).forEach(([key, value]) => {
    if (
      value &&
      typeof value === "object" &&
      !Array.isArray(value) &&
      base?.[key] &&
      typeof base[key] === "object" &&
      !Array.isArray(base[key])
    ) {
      result[key] = deepMerge(base[key], value);
    } else {
      result[key] = value;
    }
  });

  return result;
};

export const translations = {
  en,
  hi: deepMerge(en, hi),
  bn: deepMerge(en, bn),
  mr: deepMerge(en, mr),
  te: deepMerge(en, te),
  ta: deepMerge(en, ta),
  gu: deepMerge(en, gu),
  kn: deepMerge(en, kn),
  ml: deepMerge(en, ml),
  pa: deepMerge(en, pa),
  or: deepMerge(en, or),
};
