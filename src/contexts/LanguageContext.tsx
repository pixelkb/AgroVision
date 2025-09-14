import React, { createContext, useContext, useState, ReactNode } from 'react';

interface LanguageContextType {
  language: 'en' | 'hi';
  setLanguage: (lang: 'en' | 'hi') => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.upload': 'Upload Image',
    'nav.problem': 'Problem Statement',
    'nav.logout': 'Logout',
    'nav.login': 'Login',
    'nav.signup': 'Sign Up',
    
    // Authentication
    'auth.signup.title': 'Create Account',
    'auth.signup.subtitle': 'Join thousands of farmers using AI for crop health',
    'auth.login.title': 'Welcome Back',
    'auth.login.subtitle': 'Sign in to continue monitoring your crops',
    'auth.name': 'Full Name',
    'auth.email': 'Email Address',
    'auth.phone': 'Phone Number',
    'auth.password': 'Password',
    'auth.language': 'Preferred Language',
    'auth.english': 'English',
    'auth.hindi': 'हिंदी',
    'auth.signup.button': 'Create Account',
    'auth.login.button': 'Sign In',
    'auth.signup.link': "Don't have an account? Sign up",
    'auth.login.link': 'Already have an account? Sign in',
    
    // Home page
    'home.title': 'AI-Powered Plant Health Detection',
    'home.subtitle': 'Protect your crops with instant disease and nutrient deficiency diagnosis',
    'home.cta': 'Start Diagnosis',
    'home.stat.title': 'Critical Agricultural Challenge',
    'home.stat.description': 'of global food production is lost annually due to plant diseases and nutrient deficiencies',
    'home.stat.source': 'Source: Food and Agriculture Organization (FAO)',
    'home.howit.title': 'How It Works',
    'home.howit.step1.title': 'Upload Image',
    'home.howit.step1.desc': 'Capture or upload a photo of the affected plant leaf',
    'home.howit.step2.title': 'AI Analysis',
    'home.howit.step2.desc': 'Our advanced AI analyzes the image for diseases and deficiencies',
    'home.howit.step3.title': 'Get Treatment',
    'home.howit.step3.desc': 'Receive instant diagnosis and treatment recommendations',
    
    // Upload page
    'upload.title': 'Upload Plant Image',
    'upload.subtitle': 'Get instant AI-powered diagnosis of your plant health',
    'upload.dragdrop': 'Drag and drop your plant image here, or',
    'upload.browse': 'browse files',
    'upload.camera': 'Take Photo',
    'upload.supported': 'Supported: JPG, PNG, WebP (max 5MB)',
    'upload.analyze': 'Analyze Image',
    'upload.analyzing': 'Analyzing...',
    'upload.results.title': 'Diagnosis Results',
    'upload.results.disease': 'Detected Disease',
    'upload.results.confidence': 'Confidence',
    'upload.results.treatment': 'Recommended Treatment',
    'upload.results.retry': 'Upload Another Image',
    
    // Problem Statement page
    'problem.title': 'Agricultural Challenges',
    'problem.subtitle': 'Understanding the critical need for AI-powered plant health monitoring',
    'problem.intro': 'Agriculture faces significant losses due to late or inaccurate detection of plant diseases and nutrient deficiencies, with the FAO estimating that 20–40% of global food production is lost annually.',
    'problem.section1.title': 'The Scale of the Problem',
    'problem.section1.content': 'In countries like India, over 35% of crop yield is destroyed every year by pests and diseases. Farmers in developing regions largely depend on manual inspection, which is not only subjective and error-prone but also requires expert knowledge that is often inaccessible.',
    'problem.section2.title': 'Nutrient Deficiency Impact',
    'problem.section2.content': 'Nutrient deficiencies such as nitrogen (N), phosphorus (P), potassium (K), calcium (Ca), and iron (Fe) further limit crop growth, leading to reduced productivity and threatening food security.',
    'problem.section3.title': 'Traditional Methods Limitations',
    'problem.section3.content': 'Traditional diagnostic methods, such as laboratory-based soil or tissue analysis, are expensive, time-consuming, and impractical for small-scale farmers.',
    'problem.section4.title': 'AI-Powered Solution',
    'problem.section4.content': 'Recent advances in deep learning and computer vision have shown great promise in overcoming these limitations. Studies demonstrate that models like CNN, DenseNet, MobileNet, and InceptionResNet can classify plant diseases and nutrient deficiencies with accuracies exceeding 90%, often outperforming human experts.',
    'problem.conclusion': 'This project proposes the development of a GenAI-based plant health monitoring system that leverages plant leaf image datasets and state-of-the-art deep learning models. The system will be deployed as a lightweight web and mobile application, enabling farmers to diagnose plant diseases and nutrient deficiencies in real time by simply capturing leaf images with their device.',
    
    // Common
    'common.loading': 'Loading...',
    'common.error': 'An error occurred',
    'common.success': 'Success',
    'common.cancel': 'Cancel',
    'common.continue': 'Continue',
  },
  hi: {
    // Navigation
    'nav.home': 'होम',
    'nav.upload': 'छवि अपलोड करें',
    'nav.problem': 'समस्या विवरण',
    'nav.logout': 'लॉगआउट',
    'nav.login': 'लॉगिन',
    'nav.signup': 'साइन अप',
    
    // Authentication
    'auth.signup.title': 'खाता बनाएं',
    'auth.signup.subtitle': 'फसल स्वास्थ्य के लिए AI का उपयोग करने वाले हजारों किसानों से जुड़ें',
    'auth.login.title': 'वापस आपका स्वागत है',
    'auth.login.subtitle': 'अपनी फसलों की निगरानी जारी रखने के लिए साइन इन करें',
    'auth.name': 'पूरा नाम',
    'auth.email': 'ईमेल पता',
    'auth.phone': 'फोन नंबर',
    'auth.password': 'पासवर्ड',
    'auth.language': 'पसंदीदा भाषा',
    'auth.english': 'English',
    'auth.hindi': 'हिंदी',
    'auth.signup.button': 'खाता बनाएं',
    'auth.login.button': 'साइन इन करें',
    'auth.signup.link': 'खाता नहीं है? साइन अप करें',
    'auth.login.link': 'पहले से खाता है? साइन इन करें',
    
    // Home page
    'home.title': 'AI-संचालित पौधे स्वास्थ्य निदान',
    'home.subtitle': 'तत्काल रोग और पोषक तत्व की कमी निदान के साथ अपनी फसलों की सुरक्षा करें',
    'home.cta': 'निदान शुरू करें',
    'home.stat.title': 'महत्वपूर्ण कृषि चुनौती',
    'home.stat.description': 'वैश्विक खाद्य उत्पादन का हिस्सा पौधों की बीमारियों और पोषक तत्वों की कमी के कारण हर साल नष्ट हो जाता है',
    'home.stat.source': 'स्रोत: खाद्य और कृषि संगठन (FAO)',
    'home.howit.title': 'यह कैसे काम करता है',
    'home.howit.step1.title': 'छवि अपलोड करें',
    'home.howit.step1.desc': 'प्रभावित पौधे की पत्ती की तस्वीर लें या अपलोड करें',
    'home.howit.step2.title': 'AI विश्लेषण',
    'home.howit.step2.desc': 'हमारा उन्नत AI रोगों और कमियों के लिए छवि का विश्लेषण करता है',
    'home.howit.step3.title': 'इलाज प्राप्त करें',
    'home.howit.step3.desc': 'तत्काल निदान और उपचार की सिफारिशें प्राप्त करें',
    
    // Upload page
    'upload.title': 'पौधे की छवि अपलोड करें',
    'upload.subtitle': 'अपने पौधे के स्वास्थ्य का तत्काल AI-संचालित निदान प्राप्त करें',
    'upload.dragdrop': 'अपने पौधे की छवि यहाँ ड्रैग और ड्रॉप करें, या',
    'upload.browse': 'फाइलें ब्राउज़ करें',
    'upload.camera': 'फोटो लें',
    'upload.supported': 'समर्थित: JPG, PNG, WebP (अधिकतम 5MB)',
    'upload.analyze': 'छवि का विश्लेषण करें',
    'upload.analyzing': 'विश्लेषण कर रहे हैं...',
    'upload.results.title': 'निदान परिणाम',
    'upload.results.disease': 'पहचानी गई बीमारी',
    'upload.results.confidence': 'विश्वास',
    'upload.results.treatment': 'अनुशंसित उपचार',
    'upload.results.retry': 'दूसरी छवि अपलोड करें',
    
    // Problem Statement page
    'problem.title': 'कृषि चुनौतियां',
    'problem.subtitle': 'AI-संचालित पौधे स्वास्थ्य निगरानी की महत्वपूर्ण आवश्यकता को समझना',
    'problem.intro': 'पौधों की बीमारियों और पोषक तत्वों की कमी की देर से या गलत पहचान के कारण कृषि को महत्वपूर्ण नुकसान होते हैं, FAO का अनुमान है कि वैश्विक खाद्य उत्पादन का 20-40% हर साल नष्ट हो जाता है।',
    'problem.section1.title': 'समस्या का पैमाना',
    'problem.section1.content': 'भारत जैसे देशों में, हर साल 35% से अधिक फसल की पैदावार कीटों और बीमारियों से नष्ट हो जाती है। विकासशील क्षेत्रों के किसान बड़े पैमाने पर मैनुअल निरीक्षण पर निर्भर करते हैं, जो न केवल व्यक्तिपरक और त्रुटि-प्रवण है बल्कि विशेषज्ञ ज्ञान की आवश्यकता होती है जो अक्सर पहुंच से बाहर होती है।',
    'problem.section2.title': 'पोषक तत्व की कमी का प्रभाव',
    'problem.section2.content': 'नाइट्रोजन (N), फास्फोरस (P), पोटेशियम (K), कैल्शियम (Ca), और आयरन (Fe) जैसे पोषक तत्वों की कमी फसल की वृद्धि को और सीमित करती है, जिससे उत्पादकता में कमी आती है और खाद्य सुरक्षा को खतरा होता है।',
    'problem.section3.title': 'पारंपरिक विधियों की सीमाएं',
    'problem.section3.content': 'पारंपरिक निदान विधियां, जैसे कि प्रयोगशाला-आधारित मिट्टी या ऊतक विश्लेषण, महंगे, समय लगाने वाले और छोटे पैमाने के किसानों के लिए अव्यावहारिक हैं।',
    'problem.section4.title': 'AI-संचालित समाधान',
    'problem.section4.content': 'गहन शिक्षा और कंप्यूटर दृष्टि में हाल की प्रगति ने इन सीमाओं को पार करने में बहुत आशाजनक संभावनाएं दिखाई हैं। अध्ययन दिखाते हैं कि CNN, DenseNet, MobileNet, और InceptionResNet जैसे मॉडल 90% से अधिक सटीकता के साथ पौधों की बीमारियों और पोषक तत्वों की कमी को वर्गीकृत कर सकते हैं, अक्सर मानव विशेषज्ञों से बेहतर प्रदर्शन करते हैं।',
    'problem.conclusion': 'यह परियोजना एक GenAI-आधारित पौधे स्वास्थ्य निगरानी प्रणाली के विकास का प्रस्ताव करती है जो पौधे की पत्ती छवि डेटासेट और अत्याधुनिक गहन शिक्षा मॉडल का लाभ उठाती है। प्रणाली को एक हल्के वेब और मोबाइल एप्लिकेशन के रूप में तैनात किया जाएगा, जो किसानों को केवल अपने डिवाइस के साथ पत्ती की छवियों को कैप्चर करके वास्तविक समय में पौधों की बीमारियों और पोषक तत्वों की कमी का निदान करने में सक्षम बनाएगा।',
    
    // Common
    'common.loading': 'लोड हो रहा है...',
    'common.error': 'एक त्रुटि हुई',
    'common.success': 'सफलता',
    'common.cancel': 'रद्द करें',
    'common.continue': 'जारी रखें',
  }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<'en' | 'hi'>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}