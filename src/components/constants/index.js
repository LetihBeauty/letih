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
    textClass: 'about-us-top-right',
    h5Style: 'special-style',
  },
  {
    imgSrc: 'images/home-about-us-bed.webp',
    altText: 'women with leaf in her hair',
    title: 'You deserve it!',
    description: "Lorem ipsum dolor sit amet consectetur. Sed nulla aliquet posuere ut. Turpis in malesuada tempus dignissim venenatis. Vivamus vitae eget tempor non eu sed massa velit. Et potenti nulla tellus praesent euismod commodo pretium. Et potenti nulla tellus praesent euismod commodo pretium. Et potenti nulla tellus praesent euismod commodo pretium. Et potenti nulla tellus praesent euismod commodo pretium.",
    isButtonVisible: true,
    containerClass: 'about-us-button',
    textClass: 'about-us-button-left',
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
