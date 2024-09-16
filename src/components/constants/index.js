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
  },
];
export const facialDeepCleasingSupplementary = [
  {title:"Cleansing", description:"The skin is cleansed to remove makeup, dirt, and of it."},
  {title:"Exfoliation", description:"An exfoliant is used to slough off dead skin cells, promoting a smoother complexion."},
  {title:"Steam", description:"Steam is applied to the face to open pores and soften the skin, making it easier to extract impurities."},
  {title:"Extraction", description:"The esthetician manually extracts blackheads, whiteheads, and other debris from the pores using specialized tools."},
  {title:"Hydra Face Machine", description:"Helps to remove dead skin, Blackhead and Improves Blood circulation."},
  {title:"High frequency face machine", description:"It works by generating a high frequency current that is applied to the skin via a glass electrode. The current has antibacterial properties that can help kill acne-causing bacteria on the skin. It also helps reduce inflammation."},
  {title:"Mask", description:"A mask suited to your skin type (such as clay for oily skin or hydrating for dry skin) is applied to further draw out impurities and nourish the skin."},
  {title:"LED light Therapy ", description:"It works by emitting light energy onto the skin cells, which then converts it into cellular energy."},
];
export const treatmentContraindications = [
  {
    warning: "Contraindication to the FACIAL treatments : in case of use of steroids or anticoagulants in the last 3 months, skin wounds, signs of skin infection or cancer"
  },
];
