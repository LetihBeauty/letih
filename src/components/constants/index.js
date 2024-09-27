import BtnGreen from "/home/victor/code/victorfonsecass/letih/src/components/BtnGreen.js";
import BtnWhite from "/home/victor/code/victorfonsecass/letih/src/components/BtnWhite.js";

export const ourMission =
  "Providing personalized esthetics services that focus on detoxifying the skin and body to promote overall health and wellbeing.";

export const ourVision =
  "To be the leading provider of esthetics services that promote detoxification, rejuvenation, and overall wellness."

export const warmerApproach =
  "We believe in treating the whole person, focusing on mental and bodily well-being with a lot of attention and affection."

export const qualityService =
  "We provide individualized treatments that address each client's unique needs and concerns, ensuring that they leave feeling refreshed, revitalized, and rejuvenated. Our brand offers quality services."

export const transparencyAndHonesty =
  "We prioritize education transparency and honesty: empowering our clients to make informed decisions about what services and how it works, based on the science of the techniques of each service with the expectation of each client."

export const behindTheScenes =
  "My name is Leticia Martins. I was born in Brazil in 1993, in a small town in the south of the country. I come from the countryside and was raised with a simple life full of love and innocence. In Brazil in the year 2011 my journey as an Esthetician started, over 10 years of experience and studies in the field of beauty. In the United States of America, also certified and licensed as Master Esthetician and completed several other professional master’s courses in the field. My goal in this career is always seeking new techniques, equipment and advancements for my clients, so everyone can leave my space extremely satisfied. Working as an Master Esthetician is one of my dreams that came true and I live it everyday. Are you ready to elevate your natural beauty? Make you appointment today."

// Array contendo os dados para cada seção "About Us"
export const aboutUsSections = [
  {
    imgSrc: 'images/home-about-us-women.webp',
    altText: 'women with leaf in her hair',
    title: 'You deserve it!',
    description: "Lorem ipsum dolor sit amet consectetur. Sed nulla aliquet posuere ut. Turpis in malesuada tempus dignissim venenatis. Vivamus vitae eget tempor non eu sed massa velit. Et potenti nulla tellus praesent euismod commodo pretium. Et potenti nulla tellus praesent euismod commodo pretium. Et potenti nulla tellus praesent euismod commodo pretium. Et potenti nulla tellus praesent euismod commodo pretium. Et potenti nulla tellus praesent euismod commodo pretium.",
    isButtonVisible: false,
    containerClass: 'about-us-top',
    imgClass: 'about-us-img-left', // Classe para a imagem
    textClass: 'about-us-top-right', // Classe para o texto
    h5Style: 'special-style',
  },
  {
    imgSrc: 'images/home-about-us-bed.webp',
    altText: 'women with leaf in her hair',
    title: 'You deserve it!',
    description: "Lorem ipsum dolor sit amet consectetur. Sed nulla aliquet posuere ut. Turpis in malesuada tempus dignissim venenatis. Vivamus vitae eget tempor non eu sed massa velit. Et potenti nulla tellus praesent euismod commodo pretium. Et potenti nulla tellus praesent euismod commodo pretium. Et potenti nulla tellus praesent euismod commodo pretium. Et potenti nulla tellus praesent euismod commodo pretium.",
    isButtonVisible: true,
    containerClass: 'about-us-bottom',
    textClass: 'about-us-bottom-left',
    h5Style: 'special-style',
  },
];

// Array de objetos de serviço
export const services = [
  {
    imgSrc: "images/service-01.webp",
    title: "Deep Facial",
    description: "Lorem ipsum dolor sit amet consectetur. Sed nulla aliquet posuere ut. Turpis in malesuada tempus dignissim venenatis. Vivamus vitae eget tempor non eu sed massa velit. Et potenti nulla tellus praesent euismod commodo pretium. Vivamus vitae eget tempor non eu sed massa velit. Et potenti nulla tellus praesent euismod commodo pretium.",
    btnComponent: <BtnWhite>Learn More</BtnWhite>,
    containerClass: "green-services",
    contentClass: "green-right",
    h5Style: "special-title-white"
  },
  {
    imgSrc: "images/service-02.webp",
    title: "Body Detox",
    description: "Lorem ipsum dolor sit amet consectetur. Sed nulla aliquet posuere ut. Turpis in malesuada tempus dignissim venenatis. Vivamus vitae eget tempor non eu sed massa velit. Et potenti nulla tellus praesent euismod commodo pretium. Vivamus vitae eget tempor non eu sed massa velit. Et potenti nulla tellus praesent euismod commodo pretium.",
    btnComponent: <BtnGreen>Learn More</BtnGreen>,
    containerClass: "white-services",
    contentClass: "white-left",
    h5Style: "special-title-green",
  },
  {
    imgSrc: "images/service-03.webp",
    title: "Ultraformer III",
    description: "Lorem ipsum dolor sit amet consectetur. Sed nulla aliquet posuere ut. Turpis in malesuada tempus dignissim venenatis. Vivamus vitae eget tempor non eu sed massa velit. Et potenti nulla tellus praesent euismod commodo pretium. Vivamus vitae eget tempor non eu sed massa velit. Et potenti nulla tellus praesent euismod commodo pretium.",
    btnComponent: <BtnWhite>Learn More</BtnWhite>,
    containerClass: "green-services",
    contentClass: "green-right",
    h5Style: "special-title-white"
  },
  {
    imgSrc: "images/service-04.webp",
    title: "Belly Reducing",
    description: "Lorem ipsum dolor sit amet consectetur. Sed nulla aliquet posuere ut. Turpis in malesuada tempus dignissim venenatis. Vivamus vitae eget tempor non eu sed massa velit. Et potenti nulla tellus praesent euismod commodo pretium. Vivamus vitae eget tempor non eu sed massa velit. Et potenti nulla tellus praesent euismod commodo pretium.",
    btnComponent: <BtnGreen>Learn More</BtnGreen>,
    containerClass: "white-services",
    contentClass: "white-left",
    h5Style: "special-title-green",
  },
  {
    imgSrc: "images/service-05.webp",
    title: "RF Microneedling",
    description: "Lorem ipsum dolor sit amet consectetur. Sed nulla aliquet posuere ut. Turpis in malesuada tempus dignissim venenatis. Vivamus vitae eget tempor non eu sed massa velit. Et potenti nulla tellus praesent euismod commodo pretium. Vivamus vitae eget tempor non eu sed massa velit. Et potenti nulla tellus praesent euismod commodo pretium.",
    btnComponent: <BtnWhite>Learn More</BtnWhite>,
    containerClass: "green-services",
    contentClass: "green-right",
    h5Style: "special-title-white"
  },
  {
    imgSrc: "images/service-06.webp",
    title: "Skin Care Routine",
    description: "Lorem ipsum dolor sit amet consectetur. Sed nulla aliquet posuere ut. Turpis in malesuada tempus dignissim venenatis. Vivamus vitae eget tempor non eu sed massa velit. Et potenti nulla tellus praesent euismod commodo pretium. Vivamus vitae eget tempor non eu sed massa velit. Et potenti nulla tellus praesent euismod commodo pretium.",
    btnComponent: <BtnGreen>Learn More</BtnGreen>,
    containerClass: "white-services",
    contentClass: "white-left",
    h5Style: "special-title-green",
  },
  {
    imgSrc: "images/service-07.webp",
    title: "Glow Facial",
    description: "Lorem ipsum dolor sit amet consectetur. Sed nulla aliquet posuere ut. Turpis in malesuada tempus dignissim venenatis. Vivamus vitae eget tempor non eu sed massa velit. Et potenti nulla tellus praesent euismod commodo pretium. Vivamus vitae eget tempor non eu sed massa velit. Et potenti nulla tellus praesent euismod commodon pretium.",
    btnComponent: <BtnWhite>Learn More</BtnWhite>,
    containerClass: "green-services",
    contentClass: "green-right",
    h5Style: "special-title-white"
  },
];
export const advantages = [
  {
    imgSrc: "images/icon_history.svg",
    altText: "Icon of history",
    title: "Flexibility",
    description: "Our commitment is to provide an unparalleled quality of service to our clients, setting new industry standards.",
  },
  {
    imgSrc: "images/icon_page_search.svg",
    altText: "Icon of page search",
    title: "Transparency",
    description: "Our commitment is to provide an unparalleled quality of service to our clients, setting new industry standards.",
  },
  {
    imgSrc: "images/icon_data_quality.svg",
    altText: "Icon of data quality",
    title: "Quality",
    description: "Our commitment is to provide an unparalleled quality of service to our clients, setting new industry standards.",
  },
  {
    imgSrc: "images/icon_spa.svg",
    altText: "Icon of spa",
    title: "Promoting Wellness",
    description: "Our commitment is to provide an unparalleled quality of service to our clients, setting new industry standards.",
  },
];
export const facialDeepCleasing = [
  {
    title:  "1 - Deep Cleasing Facial",
    whatIs: "What is a Deep Cleansing Facial?",
    whatIsDescription: "Our Deep Cleansing Facial is designed to thoroughly cleanse the skin and help issues like clogged pores, blackheads, and impurities.",
    benefits: "What are the benefits?",
    benefitsDescription: "The benefits are preventing acne breakouts, improving overall skin texture, appearance and maintaining healthy skin. " ,
    benefitsRecommendations: "Typically recommended every 8-10 weeks, depending on your skin's needs and concerns.",
    timeDescription: "1 hour and 30 minutes.",
    priceDescription: "$145",
    btnComponent: <BtnGreen>Book Now</BtnGreen>,
    imgSrc:'images/home-about-us-bed.webp',
    facialDeepCleasingSupplementary: [
      {id:"1", title: "Cleansing:", description: "The skin is cleansed to remove makeup, dirt, and oil." },
      {id:"2", title: "Exfoliation:", description: "An exfoliant is used to slough off dead skin cells, promoting a smoother complexion" },
      {id:"3", title: "Steam:", description: "Steam is applied to the face to open pores and soften the skin, making it easier to extract impurities." },
      {id:"4", title: "Extraction:", description: "The esthetician manually extracts blackheads, whiteheads, and other debris from the pores using specialized tools." },
      {id:"5", title: "Hydra Face Machine:", description: "Helps to remove dead skin, blackheads, and improves blood circulation." },
      {id:"6", title: "High frequency face machine:", description: "It works by generating a high frequency current that is applied to the skin via a glass electrode. The current has antibacterial properties that can help kill acne-causing bacteria on the skin. It also helps reduce inflammation." },
      {id:"7", title: "Mask:", description: "A mask suited to your skin type (such as clay for oily skin or hydrating for dry skin) is applied to further draw out impurities and nourish the skin." },
      {id:"8", title: "LED light Therapy:", description: "It works by emitting light energy onto the skin cells, which then converts it into cellular energy." },
    ]
  },
];

export const facialDermaplaning = [
  {
    title:  "2- Deep Cleansing Facial + Dermaplaning",
    whatIs: "What is a Deep Cleansing Facial + Dermaplaning ?",
    whatIsDescription: "Combining a Deep Cleansing Facial with Dermaplaning offers comprehensive skincare, targeting surface issues like dullness and texture, as well as deeper concerns like clogged pores and aging. It's ideal for immediate and long-term skin improvement.",
    benefits: "What are the benefits?",
    benefitsDescription: "Combining deep cleansing with dermaplaning removes dead skin cells, dirt, oil, and peach fuzz, resulting in smoother, brighter skin and unclogged pores. This process also enhances product absorption, allowing skincare treatments to penetrate more effectively. The smooth surface left by dermaplaning ensures flawless makeup application and provides an immediate boost in skin texture and radiance." ,
    benefitsRecommendations: "Typically recommended every 8-10 weeks, depending on your skin's needs and concerns.",
    timeDescription: "1 hour and 30 minutes.",
    priceDescription: "$145",
    btnComponent: <BtnGreen>Book Now</BtnGreen>,
    imgSrc:'images/home-about-us-bed.webp',
    facialDermaplaningSupplementary: [
      {id:"1", title: "Cleansing:", description: "The skin is cleansed to remove makeup, dirt, and oil." },
      {id:"2", title: "Exfoliation:", description: "An exfoliant is used to slough off dead skin cells, promoting a smoother complexion." },
      {id:"3", title: "Steam:", description: "Steam is applied to the face to open pores and soften the skin, making it easier to extract impurities." },
      {id:"4", title: "Extraction:", description: "The esthetician manually extracts blackheads, whiteheads, and other debris from the pores using specialized tools." },
      {id:"5", title: "Hydra Face Machine:", description: "Helps to remove dead skin, Blackhead and Improves Blood circulation." },
      {id:"6", title: "Dermaplaning:", description: "Uses a sterile scalpel to gently shave away dead skin cells and peach fuzz." },
      {id:"7", title: "High frequency face machine:", description: "Applies a high-frequency current via a glass electrode to kill acne-causing bacteria and reduce inflammation." },
      {id:"8", title: "Mask:", description: "A mask tailored to your skin type is applied to remove impurities and nourish the skin." },
      {id:"9", title: "LED light Therapy:", description: "Emits light energy that converts into cellular energy for skin benefits." },
    ]
  },
];
export const facialGlowFacial = [
  {
    title:  "3 - Glow Facial",
    whatIs: "What is a Deep Cleansing Facial?",
    whatIsDescription: "Combining a Facial, Dermaplaning, and vitamin C microneedling rejuvenates the skin, addressing dullness, uneven texture, pigmentation, and aging for a brighter, youthful complexion.",
    benefits: "What are the benefits for the skin?",
    benefitsDescription: "This treatment enhances vitamin C absorption through Dermaplaning and microneedling, allowing deeper penetration for brighter, more even skin tone. The combination boosts collagen production, reduces fine lines, and improves skin texture, leaving the complexion smoother and rejuvenated.Vitamin C also provides powerful antioxidant protection, guarding against environmental damage and premature aging. It hydrates the skin, enhances moisture retention, and refines the skin's texture, resulting in a radiant and youthful appearance." ,
    benefitsRecommendations: "Typically recommended every 8-10 weeks, depending on your skin's needs and concerns.",
    timeDescription: "2 hours.",
    priceDescription: "$180",
    btnComponent: <BtnGreen>Book Now</BtnGreen>,
    imgSrc:'images/home-about-us-bed.webp',
    facialGlowSupplementary: [
      {id:"1", title: "Cleansing:", description: "The skin is cleansed to remove makeup, dirt, and oil." },
      {id:"2", title: "Exfoliation:", description: "An exfoliant is used to slough off dead skin cells, promoting a smoother complexion." },
      {id:"3", title: "Steam:", description: "Steam is applied to the face to open pores and soften the skin, making it easier to extract impurities." },
      {id:"4", title: "Hydra Face Machine:", description: " Helps to remove dead skin, Blackhead and Improves Blood circulation." },
      {id:"5", title: "Dermaplaning:", description: "Uses a sterile scalpel to gently shave away dead skin cells and peach fuzz." },
      {id:"6", title: "Vitamin C Infusion with Dr Pen Device:", description: " Microneedling with Dr. Pen creates micro channels that allow vitamin C serum to penetrate deeply, boosting its absorption and effectiveness." },
      {id:"7", title: "Mask:", description: "A mask suited to your skin type (such as clay for oily skin or hydrating for dry skin) is applied to further draw out impurities and nourish the skin." },
      {id:"8", title: "High frequency face machine:", description: "Applies a high-frequency current via a glass electrode to kill acne-causing bacteria and reduce inflammation." },
      {id:"9", title: "LED light Therapy:", description: "It works by emitting light energy onto the skin cells, which then converts it into cellular energy. " },
    ]
  },
];
export const serviceUltraformer = [
  {
    title:  "HIFU – High Intensity Focused Ultrasound (Ultraformer III)",
    whatIsDescription: " HIFU (High-Intensity Focused Ultrasound) lifts the skin by targeting the deep muscle layer, crucial for preventing sagging. It's effective for skin lifting, tightening, and improving lines, wrinkles, pores, and skin tone.",
    benefits: "What does the treatment do?",
    benefitsDescription: "The HIFU uses dermal micro-heating for a multi-layered lifting, tightening and rejuvenation effect. It promotes maximum collagen production meaning smoother, plumper, more youthful skin!" ,
    benefitsRecommendations: "Typically recommended every 8-10 weeks, depending on your skin's needs and concerns.",
    btnComponent: <BtnGreen>Book Now</BtnGreen>,
    imgSrc:'images/home-about-us-bed.webp',
    HIFUTreatmentInfo: [
      {id:"1", title:"How many sessions of treatments is recommended?", description: "One treatment a year is often enough for most people between 30 to 40 years old. However, you may require a second one to achieve your dream results. Follow up treatments usually require an interval of 6 months in between treatment times. The results can last up to a year to six months so you may decide to have a follow up treatment when the results start to wear off." },
      {id:"2", title:"Which areas does HIFU treat?", description: "Full Face, necks, eyelids, chins, jawlines, brows, and regions experiencing wrinkling or sagging. HIFU  provides lifting, skin tightening, wrinkle reduction, pore improvement, V-line forming. Jowl line enhancement, cheek lifting, skin tone improvement, and overall laxity improvement." },
      {title:"What are the benefits of HIFU?"}
    ],
    serviceUltraformerSupplementary: [
      {id:"1", title: "Improves skin texture and tone:", description: "Stimulates the production of collagen and elastin, which helps to improve the texture and tone of the skin, giving it a younger and healthier appearance." },
      {id:"2", title: "Reduction of fine lines and wrinkles:", description: "The treatment can help reduce the appearance of fine lines and wrinkles. especially around the eyes, mouth and forehead." },
      {id:"3", title: "Decreased skin sagging:", description: "The treatment can help improve skin firmness especially in areas such as the face and neck." },
      {id:"4", title: "No Significant Recovery Time:", description: "As the treatment is non-invasive. there is no significant recovery time allowing patients to resume their daily activities immediately after treatment." },
      {id:"5", title: "Gradual and lasting results:", description: "Treatment results usually appear gradually over time and can last for several months." },
    ]
  },
];
export const serviceMicroneedling = [
  {
    title:  "RF Microneedling ",
    whatIsDescription: "Radiofrequency microneedling (commonly called RF microneedling) is a noninvasive skin rejuvenation treatment that enhances the collagen-boosting benefits of microneedling with the heat of radiofrequency energy.",
    benefits: "What does the treatment do?",
    benefitsDescription: "In experienced hands, this potent combination can effectively treat a range of concerns, including:" ,
    benefitsItems: [
        "Uneven skin texture",
        "Large pores",
        "Fine lines and wrinkles",
        "Skin laxity",
        "Acne scars ( depending on level of the damage on the skin).",
    ],
    benefitsRecommendations: "The frequency of the procedure can be every 30 days or every 3 months, depending on the client's concerns and the overall health of their skin.",
    timeDescription: "$250 - Single Session",
    priceDescription: "$585 - Package with 3 session, every 30 days",
    btnComponent: <BtnGreen>Book Now</BtnGreen>,
    imgSrc:'images/home-about-us-bed.webp',
    microneedlingInfo: [
      {id:"1", includes:"The most common treatment areas include the face, neck, and decolletage.", howItWorks: "RF microneedling works by creating controlled microdamage from both the ultra-fine needles and heat. This stimulates the body's natural wound-healing response, kick-starting the biological processes that create new collagen and elastin.", observation:"Aging and environmental damage (particularly sun damage) break down these essential structural proteins, and the rate of replacement slows over time. Procedures like RF microneedling can slow and even temporarily reverse this process, helping skin look and even act younger. However, this isn't a risk-free procedure."},
    ]
  },
];
export const prices = [
  {id:"1", title:"I - Upper Eye", time:"Time: 45min", includes:"Includes: Eyes area + Fox Eye + Glabella", price: "$180" },
  {id:"2", title:"II - Full Face", time:"Time: 2h", includes:"Includes:  Eyes area + FoxEye + Glabella + Cheeks + Double Chin", price: "$450" },
  {id:"3", title:"III - Cheeks + Double Chin", time:"Time: 1h", price: "$320" },
  {id:"4", title:"IV - Decollete", time:"Time: 45min", price: "$180" },
  {id:"5", title:"V - Full face + Neck + Decollete", time:"Time: 2h 15min", price: "$600" },
];
export const warnings = [
  { warningDeepCleasing: "Contraindication to the FACIAL treatments : in case of use of steroids or anticoagulants in the last 3 months, skin wounds, signs of skin infection or cancer."},
  { warningUltraformer: [
    {
      id:"1",
      title:"CONTRAINDICATION TO THE FACIAL TREATMENTS:",
      items:[
        "ACUTE INFECTIONS",
        "HEART FAILURE",
        "HYPERTENSION",
        "DECOMPENSATED DIABETES",
        "PHLEBITIS",
        "THROMBOSIS",
        "THROMBOPHLEBITIS",
        "UNTREATED SKIN CONDITIONS",
        "CANCER",
        "BRONCHIAL ASTHMA AND ASTHMATIC BRONCHITIS",
        "HYPERTHYROIDISM",
        "IMMUNOSUPPRESSION",
        "RENAL FAILURE DEPENDENT ON DIURETICS OR DIALYSIS.",
      ],
    }]
  },
];
