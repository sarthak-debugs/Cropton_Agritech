/* ==========================================================================
   Cropton Agritech — Main JavaScript Application
   ========================================================================== */

// Master Products Dataset (All 20 Products - Audited Image Paths)
const productsData = [
  {
    id: 1, nameEn: "Achuk", nameHi: "अचूक", category: "pest",
    categoryNameEn: "Bio-Insecticide", categoryNameHi: "बायो-इन्सेक्टिसाइड",
    image: "assets/images/achuk.png",
    descEn: "Advanced bio-insecticide and miticide for control of thrips, mites, and whitefly.", descHi: "थ्रिप्स, माइट्स और व्हाइटफ्लाई नियंत्रण के लिए उन्नत बायो-इन्सेक्टिसाइड।",
    targetsEn: "Thrips, Mites, Whitefly", targetsHi: "थ्रिप्स, माइट्स, व्हाइटफ्लाई",
    cropsEn: "Cotton, Chilli, Tomato, Brinjal & All Crops", cropsHi: "कपास, मिर्च, टमाटर, बैंगन और सभी फसलें",
    dosageEn: "25–30 ml per pump", dosageHi: "25–30 मिली प्रति पंप", packing: "25ml, 50ml, 100ml, 250ml, 500ml, 1L, 5L"
  },
  {
    id: 2, nameEn: "Rebel", nameHi: "रिबेल", category: "pest",
    categoryNameEn: "Bio-Insecticide", categoryNameHi: "बायो-इन्सेक्टिसाइड",
    image: "assets/images/rebel.png",
    descEn: "Prepared from natural ingredients to effectively manage sucking pests while supporting overall crop growth.", descHi: "प्राकृतिक अवयवों से निर्मित, जो फसल वृद्धि के साथ कीटों पर प्रभावी नियंत्रण देता है।",
    targetsEn: "Thrips, Mites, Whitefly", targetsHi: "थ्रिप्स, माइट्स, व्हाइटफ्लाई",
    cropsEn: "Cotton, Chilli, Tomato, Brinjal & All Crops", cropsHi: "कपास, मिर्च, टमाटर, बैंगन और सभी फसलें",
    dosageEn: "25–30 ml per pump", dosageHi: "25–30 मिली प्रति पंप", packing: "250ml, 500ml, 1L"
  },
  {
    id: 3, nameEn: "Punch", nameHi: "पंच", category: "growth",
    categoryNameEn: "Growth Promoter", categoryNameHi: "ग्रोथ प्रमोटर",
    image: "assets/images/punch.png",
    descEn: "NPK-rich promoter for early root establishment, foliage greenery, and disease resistance.", descHi: "NPK युक्त प्रमोटर जो शुरुआती जड़ों के विकास, हरियाली और रोग प्रतिरोधक क्षमता में सहायक है।",
    targetsEn: "Root Growth & Greenery", targetsHi: "जड़ विकास एवं हरियाली",
    cropsEn: "Paddy, Maize, Pulses, Okra & All Crops", cropsHi: "धान, कपास, मक्का, दलहन, भिंडी और सभी फसलें",
    dosageEn: "50–70 ml per 15-20L water", dosageHi: "50–70 मिली प्रति 15-20L पानी", packing: "500ml, 1L, 5L"
  },
  {
    id: 4, nameEn: "Vardhan", nameHi: "वर्धन", category: "growth",
    categoryNameEn: "Fruit Setting Formula", categoryNameHi: "फ्रूट सेटिंग फार्मूला",
    image: "assets/images/vardhan.png",
    descEn: "Strengthens flower-to-fruit transition, prevents flower drop, and ensures uniform fruit size.", descHi: "फूल से फल बनने की प्रक्रिया को मजबूत करता है, फूल झड़ने से रोकता है और फल का आकार समान बनाता है।",
    targetsEn: "Fruit Setting, Drop Reduction, Increase <br>&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp;size & Reduce Rottening of vegetable ", targetsHi:"फल धारण, झड़ने से बचाव, आकार में वृद्धि एवं सब्जियों<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; को सड़ने से बचाव " ,
    cropsEn: "All Crops", cropsHi: "सभी फसलें",
    dosageEn:"1st: 1.5ml/L, 2nd: 1ml/L, 3rd: 0.5ml/L<br><span class='dosage-point'>&nbsp;&nbsp&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp&nbsp;• 1L per acre in Drip</span>" , dosageHi:"पहला: 1.5ml/L, दूसरा: 1ml/L, तीसरा: 0.5ml/L<br><span class='dosage-point'>&nbsp;&nbsp&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp;&nbsp;•ड्रिप द्वारा 1 लीटर प्रति एकड़</span>" , packing: "250ml, 500ml, 1L, 5L"
  },
  {
    id: 5, nameEn: "Tejas+", nameHi: "तेजस+", category: "growth",
    categoryNameEn: "Fruit Setting Booster", categoryNameHi: "फ्रूट सेटिंग बूस्टर",
    image: "assets/images/tejas+.png",
    descEn: "Special formula designed to boost healthy fruit development and enhance market quality.", descHi: "स्वस्थ फल विकास को बढ़ावा देने और गुणवत्ता में सुधार के लिए विशेष सूत्र।",
    targetsEn: "Fruit Setting", targetsHi: "फ्रूट सेटिंग",
    cropsEn: "All Crops", cropsHi: "सभी फसलें",
    dosageEn: "1.5ml/L → 1ml/L → 0.5ml/L across 3 sprays", dosageHi: "1.5ml/L → 1ml/L → 0.5ml/L (3 छिड़काव)", packing: "250ml"
  },
  {
    id: 6, nameEn: "Garuda", nameHi: "गरुडा", category: "growth",
    categoryNameEn: "Biostimulant", categoryNameHi: "बायोस्टिमुलेंट",
    image: "assets/images/garuda.png",
    descEn: "Mixed biostimulant formulation strengthening fruit formation and crop resilience.", descHi: "मिश्रित बायोस्टिमुलेंट फॉर्मूला जो फल बनने की क्षमता और फसल की ताकत को बढ़ाता है।",
    targetsEn: "Flower & Fruit Setting", targetsHi: "फूल और फल विकास",
    cropsEn: "All Crops", cropsHi: "सभी फसलें",
    dosageEn: "1.5 ml/L → 1 ml/L → 0.5 ml/L", dosageHi: "1.5 मिली/लीटर → 1 मिली/लीटर → 0.5 मिली/लीटर", packing: "250ml, 500ml"
  },
  {
    id: 7, nameEn: "Copek", nameHi: "कोपेक", category: "growth",
    categoryNameEn: "Plant Growth Promoter", categoryNameHi: "प्लांट ग्रोथ प्रमोटर",
    image: "assets/images/copek.png",
    descEn: "Fasal Ki Jaan — Supports root strength, new shoots, leaf shine, and nutrient uptake.", descHi: "फसल की जान — जड़ों की मजबूती, नई कोपलों, पत्तियों की चमक और पोषण अवशोषण में सहायक।",
    targetsEn: "New Shoot Growth & Vigour", targetsHi: "नई कोपलों और पौधों का विकास",
    cropsEn: "Cotton, Chilli, Paddy, Onion & All Crops", cropsHi: "कपास, मिर्च, धान, प्याज, टमाटर और सभी फसलें",
    dosageEn: "20–30 ml per pump", dosageHi: "20–30 मिली प्रति पंप", packing: "25ml, 50ml, 100ml, 250ml, 500ml, 1L"
  },
  {
    id: 8, nameEn: "Hymn Gold", nameHi: "हिम गोल्ड", category: "pest",
    categoryNameEn: "Bio-Formula", categoryNameHi: "बायो-फार्मूला",
    image: "assets/images/hymn_gold.png",
    descEn: "Advanced seaweed extract formula for controlling caterpillars, thrips, and mites.", descHi: "इल्ली, थ्रिप्स और माइट्स के नियंत्रण के लिए समुद्री शैवाल निष्कर्षण आधारित उन्नत फॉर्मूला।",
    targetsEn: "Caterpillar, Thrips, Mites,  Fruit Fly", targetsHi: "इल्ली, थ्रिप्स, माइट्स, फल मक्खी",
    cropsEn: "Chilli, Brinjal, Okra, Cotton & All Crops", cropsHi: "मिर्च, बैंगन, भिंडी, कपास,  और सभी फसलें",
    dosageEn: "30 ml per pump", dosageHi: "30 मिली प्रति पंप", packing: "250ml, 500ml"
  },
  {
    id: 9, nameEn: "Tejas", nameHi: "तेजस", category: "pest",
    categoryNameEn: "Bio-Formula", categoryNameHi: "बायो-फार्मूला",
    image: "assets/images/tejas.png",
    descEn: "Effective pest management formula against sucking insects and caterpillars.", descHi: "रस चूसक कीटों और इल्लियों के खिलाफ प्रभावी कीट प्रबंधन फॉर्मूला।",
    targetsEn: "Caterpillar, Thrips, Mites, White fly, Mahu, &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Jassid", targetsHi: "इल्ली, थ्रिप्स, माइट्स, सफेद मक्खी, माहू, जैसिड",
    cropsEn: "Chilli, Tomato, Vegetables & All Crops", cropsHi: "मिर्च, टमाटर, सब्जियां और सभी फसलें",
    dosageEn: "30 ml per pump", dosageHi: "30  मिली प्रति पंप", packing: "250ml"
  },
  {
    id: 10, nameEn: "Humicrop", nameHi: "हुमिक्रोप", category: "soil",
    categoryNameEn: "Soil Conditioner", categoryNameHi: "सॉइल कंडीशनर",
    image: "assets/images/humicrop.png",
    descEn: "Potassium Humate organic soil conditioner. Enhances moisture retention and soil fertility.", descHi: "पोटेशियम ह्यूमेट जैविक सॉइल कंडीशनर। नमी धारण और मिट्टी की उर्वरता में सुधार करता है।",
    targetsEn: "Soil Fertility & Rooting", targetsHi: "मिट्टी की उर्वरता एवं जड़ विकास",
    cropsEn: "All Crops", cropsHi: "सभी फसलें",
    dosageEn: "1 kg per acre", dosageHi: "1 किलो ग्राम प्रति एकड़", packing: "500g"
  },
  {
    id: 11, nameEn: "Quantum", nameHi: "क्वांटम", category: "soil",
    categoryNameEn: "Soil Conditioner", categoryNameHi: "सॉइल कंडीशनर",
    image: "assets/images/quantum.png",
    descEn: "Humic-acid formulation improving soil structure and root nutrient absorption.", descHi: "मिट्टी की संरचना और जड़ों द्वारा पोषक तत्वों के अवशोषण में सुधार करने वाला फॉर्मूला।",
    targetsEn: "Soil Conditioning", targetsHi: "मृदा सुधार",
    cropsEn: "All Crops", cropsHi: "सभी फसलें",
    dosageEn: "500 g per acre", dosageHi: "500 ग्राम प्रति एकड़", packing: "250g"
  },
  {
    id: 12, nameEn: "Root Growth", nameHi: "रूट ग्रोथ", category: "growth",
    categoryNameEn: "Root & Bio Booster", categoryNameHi: "रूट एवं बायो बूस्टर",
    image: "assets/images/rooth_growth.png",
    descEn: "Deep root system development booster paired with broad pest resistance.", descHi: "गहरी जड़ों के विकास को बढ़ावा देने वाला और कीटों के प्रति रक्षा प्रदान करने वाला उत्पाद।",
    targetsEn: "Root System & Health", targetsHi: "जड़ प्रणाली और स्वास्थ्य",
    cropsEn: "All Crops", cropsHi: "सभी फसलें",
    dosageEn: "100-120 ml per 15-20L water", dosageHi: "100-120 ml प्रति 15-20L पानी", packing: "500ml, 1L"
  },
  {
    id: 13, nameEn: "K-Hume", nameHi: "के ह्यूम", category: "soil",
    categoryNameEn: "Biostimulant", categoryNameHi: "बायोस्टिमुलेंट",
    image: "assets/images/k_hyumn.png",
    descEn: "Humic and Fulvic acid derivatives supporting healthy crop growth and pest defense.", descHi: "ह्यूमिक और फुलविक एसिड उत्पाद जो फसल विकास और कीट रक्षा में सहायक हैं।",
    targetsEn: "Soil & Root Enhancement", targetsHi: "मिट्टी और जड़ सुधार",
    cropsEn: "All Crops", cropsHi: "सभी फसलें",
    dosageEn: "100–120 ml per Litre water", dosageHi: " 100-120 ml प्रति 15-20L पानी", packing: "250ml, 500ml, 1L"
  },
  {
    id: 14, nameEn: "Black Boost", nameHi: "ब्लैक बूस्ट", category: "soil",
    categoryNameEn: "Humic Acid 18%", categoryNameHi: "ह्यूमिक एसिड 18%",
    image: "assets/images/black_boost.png",
    descEn: "18% Humic Acid formulation driving strong foliage, disease defense, and crop vitality.", descHi: "18% ह्यूमिक एसिड फॉर्मूला जो पत्तियों की मजबूती और फसल की जीवन शक्ति बढ़ाता है।",
    targetsEn: "Foliage & Yield Boost", targetsHi: "पत्तियों और उपज में वृद्धि",
    cropsEn: "All Crops", cropsHi: "सभी फसलें",
    dosageEn: "100-120 ml per Litre water", dosageHi: "100-120 ml प्रति 15-20L पानी", packing: "1L"
  },
  {
    id: 15, nameEn: "Sapot", nameHi: "सपोट", category: "growth",
    categoryNameEn: "Natural Bio-Booster", categoryNameHi: "नेचुरल बायो-बूस्टर",
    image: "assets/images/sapot.png",
    descEn: "Advanced plant booster delivering energy, deep greenness, and nutrient absorption.", descHi: "पौधों को ऊर्जा, गहरा हरा रंग और बेहतर पोषण प्रदान करने वाला एडवांस प्लांट बूस्टर।",
    targetsEn: "Plant Energy & Quality", targetsHi: "पौधों की ऊर्जा एवं गुणवत्ता",
    cropsEn: "Vegetables, Fruits, Grains & All crops", cropsHi: "सब्जियां, फल, अनाज और सभी फसलें",
    dosageEn: "10 pumps", dosageHi: "10 पंप", packing: "250g"
  },
  {
    id: 16, nameEn: "Dimond — Plant Booster", nameHi: "डीमोंड — प्लांट बूस्टर", category: "fungi",
    categoryNameEn: "Natural Fungicide", categoryNameHi: "नेचुरल फंगीसाइड",
    image: "assets/images/dimond.png",
    descEn: "Bio-fungicide for controlling powdery mildew, downy mildew, blight, and leaf spot.", descHi: "पाउडरी मिल्ड्यू, डाउनी मिल्ड्यू, ब्लाइट और लीफ स्पॉट को नियंत्रित करने के लिए प्राकृतिक फंगीसाइड।",
    targetsEn: "Mildew, Blight, Leaf Spot", targetsHi: "मिल्ड्यू, ब्लाइट, पत्ती धब्बा",
    cropsEn: "Vegetables, Fruits, Grains & All Crops", cropsHi: "सब्जियां, फल, अनाज और सभी फसलें",
    dosageEn: "250g/acre drip OR 2g/L spray", dosageHi: "250 ग्राम/एकड़ ड्रिप या 2 ग्राम/ली छिड़काव", packing: "250g"
  },
  
  {
    id: 17, nameEn: "Current", nameHi: "करंट", category: "pest",
    categoryNameEn: "Bio-Insecticide", categoryNameHi: "बायो-इन्सेक्टिसाइड",
    image: "assets/images/current.png",
    descEn: "Power-packed larva controller. Rapidly stops early stage leaf-eating caterpillars.", descHi: "शक्तिशाली इल्ली नियंत्रक। शुरुआती अवस्था में पत्तियां खाने वाले लार्वा को तुरंत रोकता है।",
    targetsEn: "Larvae / Leaf Eating Caterpillars", targetsHi: "इल्ली / लार्वा",
    cropsEn: "All Crops", cropsHi: "सभी फसलें",
    dosageEn: "25-30 ml per 15-20L pump", dosageHi: "15-20 लीटर के पंप के लिए 25-30 ml", packing: "250ml, 500ml"
  },
  {
    id: 18, nameEn: "Roman", nameHi: "रोमन", category: "pest",
    categoryNameEn: "Bio-Insecticide", categoryNameHi: "बायो-इन्सेक्टिसाइड",
    image: "assets/images/roman.png",
    descEn: "Targeted early-stage larva protection against devastating crop damage.", descHi: "फसल के नुकसान को बचाने के लिए शुरुआती अवस्था में इल्ली पर प्रभावी नियंत्रण।",
    targetsEn: "Larvae & Caterpillars", targetsHi: "इल्ली एवं लार्वा",
    cropsEn: "All Crops", cropsHi: "सभी फसलें",
    dosageEn: "25 ml per pump", dosageHi: "25 मिली प्रति पंप", packing: "25ml"
  },
  {
    id: 19, nameEn: "Morren", nameHi: "मोरेन", category: "pest",
    categoryNameEn: "Bio-Insecticide", categoryNameHi: "बायो-इन्सेक्टिसाइड",
    image: "assets/images/moren.png",
    descEn: "Seaweed extract based biostimulant with high action against leaf-damaging larvae.", descHi: "पत्तियों को नुकसान पहुंचाने वाली इल्ली पर तेज़ असर वाला सी-वीड एक्सट्रैक्ट फॉर्मूला।",
    targetsEn: "Larvae", targetsHi: "इल्ली",
    cropsEn: "All Crops", cropsHi: "सभी फसलें",
    dosageEn: "25-30 ml per  15-20L pump", dosageHi: "15-20 लीटर के पंप के लिए 25-30 ml", packing: "100ml, 250ml, 500ml, 1L"
  },
  {
    id: 20, nameEn: "Alicon", nameHi: "अलिकों", category: "growth",
    categoryNameEn: "Silicone Super Spreader", categoryNameHi: "सिलिकॉन सुपर स्प्रेडर",
    image: "assets/images/Alicon.png",
    descEn: "Silicone super spreader maximizing spray coverage, rainfastness, and chemical uptake.", descHi: "सिलिकॉन-आधारित सुपर स्प्रेडर जो स्प्रे का फैलाव, बारिश से सुरक्षा और अवशोषण बढ़ाता है।",
    targetsEn: "Spreading & Rain Protection", targetsHi: "फैलाव और बारिश से सुरक्षा",
    cropsEn: "All Crops", cropsHi: "सभी फसलें",
    dosageEn: "5–10 ml per pump", dosageHi: "5–10 मिली प्रति पंप", packing: "50ml, 100ml, 250ml, 500ml, 1L"
  }
];

// App State
let currentLang = 'en'; 
let activeFilter = 'all';
let searchQuery = '';

// DOM Elements
document.addEventListener("DOMContentLoaded", () => {
  const productsGrid = document.getElementById("products-grid");
  const searchInput = document.getElementById("product-search");
  const filterBtns = document.querySelectorAll(".filter-btn");
  const langToggleBtn = document.getElementById("lang-toggle");
  const langText = document.getElementById("lang-text");
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");
  const contactForm = document.getElementById("contact-form");
  const header = document.getElementById("header");
  
  // Set current year
  document.getElementById("year").textContent = new Date().getFullYear();

  // Trigger Hero Initial Stagger Animations
  setTimeout(() => {
    const staggerElem = document.querySelector('.hero-stagger');
    const heroVisual = document.querySelector('.fade-left-hero');
    const trustStrip = document.querySelector('.hero-trust-strip');
    if(staggerElem) staggerElem.classList.add('active');
    if(heroVisual) heroVisual.classList.add('active');
    if(trustStrip) trustStrip.classList.add('active');
  }, 100);

  // Scroll Actions (Navbar & Animations)
  const handleScroll = () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  };
  window.addEventListener("scroll", handleScroll);

  // Intersection Observer for Reveal Animations
  const revealElements = document.querySelectorAll('.reveal');
  const revealOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target); // Only animate once
      }
    });
  }, revealOptions);
  
  revealElements.forEach(el => revealObserver.observe(el));

  // Initial Render
  renderProducts();

  // Mobile Menu Toggle
  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });

  // Close Mobile Menu on Nav Link Click
  document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
      document.querySelectorAll(".nav-link").forEach(l => l.classList.remove("active"));
      link.classList.add("active");
    });
  });

  // Language Switcher Toggle
  langToggleBtn.addEventListener("click", () => {
    currentLang = currentLang === 'en' ? 'hi' : 'en';
    langText.textContent = currentLang === 'en' ? 'हिंदी' : 'English';
    updateLanguageDOM();
    renderProducts();
  });

  // Filter Buttons Handler
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeFilter = btn.dataset.filter;
      renderProducts();
    });
  });

  // Search Input Handler
  searchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value.toLowerCase().trim();
    renderProducts();
  });

  // Product Selection "Inquire Now" Delegation
  productsGrid.addEventListener("click", (e) => {
    const btn = e.target.closest('.btn-inquire');
    if(btn) {
      const prodEn = btn.getAttribute('data-product-en');
      const prodHi = btn.getAttribute('data-product-hi');
      
      const productFieldContainer = document.getElementById('product-field-container');
      const productInput = document.getElementById('form-selected-product');
      
      productFieldContainer.style.display = 'block';
      productInput.setAttribute('data-val-en', prodEn);
      productInput.setAttribute('data-val-hi', prodHi);
      productInput.value = currentLang === 'en' ? prodEn : prodHi;
      
      // Smooth scroll to contact
      document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
      
      // Highlight effect on form
      setTimeout(() => {
        productInput.focus();
      }, 600);
    }
  });

  // Contact Form Submission
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("form-name").value;
    const phone = document.getElementById("form-phone").value;
    const crop = document.getElementById("form-crop").value;
    const message = document.getElementById("form-message").value;
    const product = document.getElementById("form-selected-product").value;

    let waMessage = `Hello Cropton Agritech,%0A%0AMy Name: ${encodeURIComponent(name)}%0APhone: ${encodeURIComponent(phone)}`;
    
    if (product) {
      waMessage += `%0AProduct of Interest: ${encodeURIComponent(product)}`;
    }
    
    waMessage += `%0ACrop/State: ${encodeURIComponent(crop)}%0AMessage: ${encodeURIComponent(message)}`;
    
    window.open(`https://wa.me/919201489132?text=${waMessage}`, '_blank');
  });

  // Render Products Function
  function renderProducts() {
    productsGrid.innerHTML = '';

    const filtered = productsData.filter(item => {
      const matchesFilter = activeFilter === 'all' || item.category === activeFilter;
      const matchesSearch = 
        item.nameEn.toLowerCase().includes(searchQuery) ||
        item.nameHi.includes(searchQuery) ||
        item.cropsEn.toLowerCase().includes(searchQuery) ||
        item.targetsEn.toLowerCase().includes(searchQuery);

      return matchesFilter && matchesSearch;
    });

    if (filtered.length === 0) {
      productsGrid.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 60px; color: var(--text-muted);">
          <i class="fa-solid fa-seedling" style="font-size: 3rem; margin-bottom: 16px; display: block; color: var(--border-dark);"></i>
          <p style="font-size: 1.1rem;">${currentLang === 'en' ? 'No products found matching your search.' : 'आपकी खोज से मेल खाने वाले कोई उत्पाद नहीं मिले।'}</p>
        </div>
      `;
      return;
    }

    filtered.forEach((p, index) => {
      const card = document.createElement("div");
      card.className = "product-card reveal scale-in";
      card.style.transitionDelay = `${(index % 4) * 0.1}s`;

      const name = currentLang === 'en' ? p.nameEn : p.nameHi;
      const categoryName = currentLang === 'en' ? p.categoryNameEn : p.categoryNameHi;
      const desc = currentLang === 'en' ? p.descEn : p.descHi;
      const targets = currentLang === 'en' ? p.targetsEn : p.targetsHi;
      const crops = currentLang === 'en' ? p.cropsEn : p.cropsHi;
      const dosage = currentLang === 'en' ? p.dosageEn : p.dosageHi;

      card.innerHTML = `
        <div class="product-img-wrapper">
          <img src="${p.image}" alt="${p.nameEn}">
        </div>
        <div class="product-body">
          <span class="product-category-badge">${categoryName}</span>
          <h3 class="product-title">${name}</h3>
          <p class="product-desc">${desc}</p>
          
          <div class="product-meta">
            <div><strong>${currentLang === 'en' ? 'Target:' : 'लक्ष्य:'}</strong> ${targets}</div>
            <div><strong>${currentLang === 'en' ? 'Crops:' : 'फसलें:'}</strong> ${crops}</div>
            <div><strong>${currentLang === 'en' ? 'Dosage:' : 'मात्रा:'}</strong> ${dosage}</div>
            <div><strong>${currentLang === 'en' ? 'Packing:' : 'पैकिंग:'}</strong> ${p.packing}</div>
          </div>

          <button type="button" class="btn btn-primary-alt btn-sm btn-block btn-inquire" data-product-en="${p.nameEn}" data-product-hi="${p.nameHi}">
            <i class="fa-solid fa-arrow-down"></i>
            <span>${currentLang === 'en' ? 'Inquire Now' : 'अभी पूछताछ करें'}</span>
          </button>
        </div>
      `;

      productsGrid.appendChild(card);
      revealObserver.observe(card);
    });
  }

  // DOM Language Updater
function updateLanguageDOM() {

  // General data attributes
  document.querySelectorAll("[data-en]").forEach(elem => {

    if (elem.tagName === 'INPUT' && elem.placeholder) {
      return;
    }

    if (currentLang === 'en') {
      elem.textContent = elem.getAttribute("data-en");
    } else {
      elem.textContent = elem.getAttribute("data-hi");
    }

  });


  // Placeholders
  const searchElem =
    document.getElementById("product-search");

  if (searchElem) {

    searchElem.placeholder =
      currentLang === 'en'
        ? searchElem.getAttribute("data-en-ph")
        : searchElem.getAttribute("data-hi-ph");

  }


  // Selected Product Form Input
  const productInput =
    document.getElementById("form-selected-product");

  if (
    productInput &&
    productInput.getAttribute("data-val-en")
  ) {

    productInput.value =
      currentLang === 'en'
        ? productInput.getAttribute("data-val-en")
        : productInput.getAttribute("data-val-hi");

  }

} // <-- CLOSE updateLanguageDOM()


// ============================================================
// HERO PRODUCT ROTATION
// ============================================================

const heroRotationProducts = [

  {
    name: "ACHUK",
    src: "assets/images/achuk.png"
  },

  {
    name: "REBEL",
    src: "assets/images/rebel.png"
  },

  {
    name: "PUNCH",
    src: "assets/images/punch.png"
  },

  {
    name: "VARDHAN",
    src: "assets/images/vardhan.png"
  },

  {
    name: "TEJAS+",
    src: "assets/images/tejas+.png"
  },

  {
    name: "GARUDA",
    src: "assets/images/garuda.png"
  },

  {
    name: "COPEK",
    src: "assets/images/copek.png"
  },

  {
    name: "HYMN GOLD",
    src: "assets/images/hymn_gold.png"
  },

  {
    name: "TEJAS",
    src: "assets/images/tejas.png"
  },

  {
    name: "HUMICROP",
    src: "assets/images/humicrop.png"
  },

  {
    name: "QUANTUM",
    src: "assets/images/quantum.png"
  },

  {
    name: "ROOT GROWTH",
    src: "assets/images/rooth_growth.png"
  },

  {
    name: "K-HUME",
    src: "assets/images/k_hyumn.png"
  },

  {
    name: "BLACK BOOST",
    src: "assets/images/black_boost.png"
  },

  {
    name: "DIMOND",
    src: "assets/images/dimond.png"
  },

  {
    name: "SAPOT",
    src: "assets/images/sapot.png"
  },

  {
    name: "CURRENT",
    src: "assets/images/current.png"
  },

  {
    name: "ROMAN",
    src: "assets/images/roman.png"
  },

  {
    name: "MORREN",
    src: "assets/images/moren.png"
  },

  {
    name: "ALICON",
    src: "assets/images/Alicon.png"
  }

];


let currentHeroIndex = 0;


const heroImg =
  document.getElementById("hero-rotating-img");

const heroLabel =
  document.getElementById("hero-rotating-label");


if (heroImg && heroLabel) {

  setInterval(() => {

    // Fade OUT
    heroImg.classList.add("fade-exit");
    heroLabel.classList.add("fade-exit");


    setTimeout(() => {

      // Move to next product
      currentHeroIndex =
        (currentHeroIndex + 1) %
        heroRotationProducts.length;


      const nextProduct =
        heroRotationProducts[currentHeroIndex];


      // Change image
      heroImg.src =
        nextProduct.src;

      heroImg.alt =
        nextProduct.name;


      // Change product name
      heroLabel.textContent =
        nextProduct.name;


      // Force browser to register new state
      void heroImg.offsetWidth;
      void heroLabel.offsetWidth;


      // Fade IN
      heroImg.classList.remove("fade-exit");
      heroLabel.classList.remove("fade-exit");


    }, 600);

  }, 3500);

}

});