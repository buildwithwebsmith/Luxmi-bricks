import { SITE_MEDIA } from "./media";

export type SiteLanguage = "en" | "hi";

export const LANGUAGE_OPTIONS = [
  { id: "en", label: "English", shortLabel: "EN" },
  { id: "hi", label: "हिंदी", shortLabel: "हिं" }
] as const;

export const COMPANY_INFO = {
  brandName: "Luxmi Brick Field",
  brandNameHi: "लक्ष्मी ब्रिक फील्ड",
  established: "2001",
  location: {
    en: "Prayagraj, Uttar Pradesh, India",
    hi: "प्रयागराज, उत्तर प्रदेश, भारत"
  },
  address: {
    en: "Banaras Road, Garapur, Jhusi, Prayagraj, Uttar Pradesh - 211013",
    hi: "बनारस रोड, गरापुर, झूंसी, प्रयागराज, उत्तर प्रदेश - 211013"
  },
  landmark: {
    en: "Near Jhusi Railway Station, Prayagraj",
    hi: "झूंसी रेलवे स्टेशन के पास, प्रयागराज"
  },
  hours: {
    en: "Monday - Saturday: 8:00 AM - 6:00 PM (Sunday Closed)",
    hi: "सोमवार - शनिवार: सुबह 8:00 बजे - शाम 6:00 बजे (रविवार बंद)"
  },
  phone: "7607633777",
  email: "luxmibrickfieldgarapur@gmail.com",
  whatsapp: "7607633777",
  whatsappLink: "https://wa.me/917607633777",
  facebook: "https://facebook.com/luxmibricks",
  instagram: "https://instagram.com/luxmibricks",
  youtube: "https://youtube.com/luxmibricks",
  linkedin: "https://linkedin.com/company/luxmibricks",
  latitude: 25.4358,
  longitude: 81.9621,
  mapEmbedUrl: "https://maps.google.com/maps?q=Banaras+Rd,+Garapur,+Jhusi,+Prayagraj,+Uttar+Pradesh+211013&output=embed",
  directionLink: "https://maps.app.goo.gl/E89TGzFJywG5aY676"
} as const;

type RealGalleryCategory = "machinery" | "kiln" | "stock" | "yard";

const REAL_GALLERY_ITEM_META: Array<{
  category: RealGalleryCategory;
  titleEn: string;
  titleHi: string;
}> = [
  { category: "machinery", titleEn: "Loader and dump trailer at the yard", titleHi: "यार्ड में लोडर और डंप ट्रॉली" },
  { category: "machinery", titleEn: "Front loader ready for site movement", titleHi: "साइट मूवमेंट के लिए तैयार लोडर" },
  { category: "machinery", titleEn: "Yard machinery with tractor trailer", titleHi: "ट्रैक्टर ट्रॉली के साथ यार्ड मशीनरी" },
  { category: "machinery", titleEn: "Loader parked beside dispatch trailer", titleHi: "डिस्पैच ट्रॉली के पास खड़ा लोडर" },
  { category: "kiln", titleEn: "Kiln chimney beside yard equipment", titleHi: "यार्ड मशीनरी के पास भट्ठे की चिमनी" },
  { category: "machinery", titleEn: "Tractor positioned near the work path", titleHi: "वर्क पथ के पास खड़ा ट्रैक्टर" },
  { category: "machinery", titleEn: "Workers preparing tractor movement", titleHi: "ट्रैक्टर मूवमेंट की तैयारी करते कर्मचारी" },
  { category: "machinery", titleEn: "Dispatch tractor at the brick field", titleHi: "ईंट भट्ठे में डिस्पैच ट्रैक्टर" },
  { category: "machinery", titleEn: "Tractor and trailer ready for hauling", titleHi: "ढुलाई के लिए तैयार ट्रैक्टर और ट्रॉली" },
  { category: "kiln", titleEn: "Tall kiln chimney at the factory", titleHi: "फैक्ट्री में ऊंची भट्ठा चिमनी" },
  { category: "yard", titleEn: "Open yard track inside the factory", titleHi: "फैक्ट्री के अंदर खुला यार्ड ट्रैक" },
  { category: "stock", titleEn: "Fresh red brick stacks in the stock area", titleHi: "स्टॉक एरिया में ताज़ी लाल ईंटों के ढेर" },
  { category: "kiln", titleEn: "Kiln chimney across the brick field", titleHi: "ईंट भट्ठे के पार दिखती चिमनी" },
  { category: "kiln", titleEn: "Factory road leading to the kiln", titleHi: "भट्ठे की ओर जाती फैक्ट्री सड़क" },
  { category: "stock", titleEn: "Branded DBF bricks near the chimney", titleHi: "चिमनी के पास ब्रांडेड DBF ईंटें" },
  { category: "stock", titleEn: "Close view of stacked DBF bricks", titleHi: "ढेरी में रखी DBF ईंटों का क्लोज़ व्यू" },
  { category: "stock", titleEn: "Stamped DBF bricks from the stock yard", titleHi: "स्टॉक यार्ड की मुहर लगी DBF ईंटें" },
  { category: "stock", titleEn: "Single DBF brick on stacked stock", titleHi: "स्टॉक के ऊपर रखी एक DBF ईंट" },
  { category: "stock", titleEn: "Product branding shot of DBF brick", titleHi: "DBF ईंट का ब्रांडिंग शॉट" },
  { category: "stock", titleEn: "Finished brick stock with kiln backdrop", titleHi: "भट्ठे की पृष्ठभूमि के साथ तैयार ईंट स्टॉक" },
  { category: "kiln", titleEn: "Kiln tower overlooking the brick rows", titleHi: "ईंटों की कतारों के ऊपर दिखती भट्ठा चिमनी" },
  { category: "yard", titleEn: "Wide yard view with chimney and trees", titleHi: "चिमनी और पेड़ों के साथ यार्ड का विस्तृत दृश्य" },
  { category: "stock", titleEn: "DBF mark detail on a finished brick", titleHi: "तैयार ईंट पर DBF निशान का क्लोज़-अप" },
  { category: "yard", titleEn: "Factory ground and chimney profile", titleHi: "फैक्ट्री ग्राउंड और चिमनी का प्रोफाइल" },
  { category: "yard", titleEn: "Panoramic yard view of Luxmi Brick Field", titleHi: "लक्ष्मी ब्रिक फील्ड का पैनोरमिक यार्ड दृश्य" }
];

const buildGalleryItems = (language: SiteLanguage) =>
  REAL_GALLERY_ITEM_META.map((item, index) => ({
    id: `g${index + 1}`,
    url: SITE_MEDIA.gallery[index]?.src ?? SITE_MEDIA.aboutImage,
    title: language === "hi" ? item.titleHi : item.titleEn,
    hindiTitle: language === "hi" ? item.titleEn : item.titleHi,
    category: item.category
  }));

export const SITE_CONTENT = {
  en: {
    meta: {
      htmlLang: "en",
      locale: "en_IN",
      title: "Luxmi Brick Field | Brick Manufacturer in Prayagraj for Red Clay and Fly Ash Bricks",
      description:
        "Luxmi Brick Field is a trusted brick manufacturer in Prayagraj supplying red clay bricks, fly ash bricks, wire cut bricks, exposed face bricks, and bulk construction materials across Uttar Pradesh.",
      keywords:
        "brick manufacturer Prayagraj, red clay bricks Prayagraj, fly ash bricks Uttar Pradesh, bulk brick supplier, wire cut bricks, exposed face bricks, cladding tiles, Jhusi brick field, construction materials Prayagraj",
      ogTitle: "Luxmi Brick Field | Brick Manufacturer in Prayagraj",
      ogDescription:
        "Order red clay bricks, fly ash bricks, wire cut bricks, and bulk building materials from Luxmi Brick Field in Jhusi, Prayagraj."
    },
    navLinks: [
      { name: "Home", href: "#home" },
      { name: "About", href: "#about" },
      { name: "Products", href: "#products" },
      { name: "Compare", href: "#comparison" },
      { name: "Calculator", href: "#calculator" },
      { name: "Gallery", href: "#gallery" },
      { name: "Why Us", href: "#why-us" },
      { name: "Reviews", href: "#testimonials" },
      { name: "Contact", href: "#contact" }
    ],
    announcement: {
      badge: "Offer",
      message:
        "Bulk brick supply offer: order 10,000+ bricks and get free delivery across Prayagraj.",
      cta: "Call Now",
      dismissAria: "Dismiss offer announcement"
    },
    hero: {
      pill: `Established ${COMPANY_INFO.established} • Jhusi, Prayagraj`,
      titleLead: "Brick Manufacturer in Prayagraj for",
      titleAccent: "Red Clay and Fly Ash Bricks",
      description:
        "Luxmi Brick Field supplies strong red clay bricks, fly ash bricks, wire cut bricks, and bulk construction materials for homes, warehouses, boundary walls, and commercial projects across Uttar Pradesh.",
      primaryCta: "View Brick Products",
      secondaryCta: "Estimate Brick Cost",
      scrollHint: "Scroll to Explore"
    },
    trustStrip: {
      badges: [
        "Prayagraj Brick Manufacturer",
        "Red Clay Bricks",
        "Fly Ash Bricks",
        "Bulk Supply Across UP",
        "800+ Builder Orders",
        "Jhusi Railway Access",
        "GST Billing Available"
      ]
    },
    about: {
      eyebrow: "About Luxmi Brick Field",
      title: "Trusted Brick Manufacturer in Prayagraj Since 2001",
      body: [
        "Luxmi Brick Field is a long-established brick manufacturer in Jhusi, Prayagraj serving residential, commercial, and infrastructure projects with dependable brick supply and consistent quality.",
        "We manufacture red clay bricks, fly ash bricks, wire cut bricks, and architectural facing products using selected soil, controlled kiln processing, and reliable dispatch planning for bulk construction orders."
      ],
      highlights: [
        {
          title: "Construction-grade strength",
          description: "Every dispatch is checked for shape, finish, and practical construction performance."
        },
        {
          title: "Fast access from Jhusi",
          description: "Our location near Jhusi Railway Station helps support efficient loading and truck movement."
        }
      ],
      stats: [
        { value: 25, label: "Years of Experience", suffix: "+" },
        { value: 150, label: "Lakh Bricks Supplied", suffix: "+" },
        { value: 800, label: "Satisfied Builders", suffix: "+" },
        { value: 10, label: "Districts Served", suffix: "+" }
      ],
      qualitySealLabel: "Kiln-Selected Clay",
      qualitySealValue: "Ganga-Yamuna alluvial soil"
    },
    products: {
      eyebrow: "Brick Products",
      title: "Red Clay, Fly Ash, Wire Cut, and Premium Brick Products",
      description:
        "Explore our construction-ready brick range for foundations, walls, elevations, cladding, and bulk project supply.",
      enquireCta: "Request Quote",
      items: [
        {
          id: "red-clay",
          name: "Red Clay Bricks",
          description:
            "Traditional kiln-fired red clay bricks for foundations, load-bearing walls, boundary walls, and general construction work.",
          iconName: "Brick",
          features: ["Natural clay base", "Strong load-bearing use", "Reliable site performance"],
          imageUrl: SITE_MEDIA.products.redClay
        },
        {
          id: "fly-ash",
          name: "Fly Ash Bricks",
          description:
            "Uniform fly ash bricks designed for cleaner alignment, reduced plaster use, and efficient multi-storey construction.",
          iconName: "Cpu",
          features: ["Even shape and size", "Lower plaster use", "Good moisture control"],
          imageUrl: SITE_MEDIA.products.flyAsh
        },
        {
          id: "exposed-face",
          name: "Exposed Face Bricks",
          description:
            "Architectural facing bricks for premium elevations, feature walls, facades, and natural exterior finishes.",
          iconName: "Layers",
          features: ["Premium visual finish", "No heavy plaster required", "Ideal for facades"],
          imageUrl: SITE_MEDIA.products.exposedFace
        },
        {
          id: "wire-cut",
          name: "Wire Cut Bricks",
          description:
            "Machine-made wire cut bricks with sharper edges, consistent sizing, and cleaner wall alignment for modern construction.",
          iconName: "Split",
          features: ["Sharp clean edges", "Uniform dimensions", "Better masonry finish"],
          imageUrl: SITE_MEDIA.products.wireCut
        },
        {
          id: "hollow-bricks",
          name: "Hollow Bricks",
          description:
            "Lightweight hollow bricks for partition walls, thermal performance, and reduced structural load in selected applications.",
          iconName: "Box",
          features: ["Lighter wall system", "Useful for partitions", "Better thermal insulation"],
          imageUrl: SITE_MEDIA.products.hollowBricks
        },
        {
          id: "cladding-tiles",
          name: "Cladding Tiles",
          description:
            "Brick-finish cladding tiles for interior and exterior walls where you want a premium masonry look without full brick depth.",
          iconName: "Grid",
          features: ["Space-saving profile", "Easy wall application", "Interior and exterior use"],
          imageUrl: SITE_MEDIA.products.claddingTiles
        }
      ]
    },
    comparison: {
      eyebrow: "Brick Comparison",
      title: "Red Clay vs Fly Ash Brick Comparison for Construction Projects",
      description:
        "Compare strength, water absorption, plaster requirements, and price range before choosing the right brick type.",
      mobileHint: "Swipe horizontally to view the full comparison",
      headers: {
        feature: "Construction Factor",
        redClay: "Red Clay Bricks",
        flyAsh: "Fly Ash Bricks",
        flyAshBadge: "Eco Choice",
        exposedFace: "Exposed Face Bricks"
      },
      rows: [
        {
          feature: "Compressive strength",
          redClay: "High (Class-I, 10-15 N/mm²)",
          flyAsh: "Very high (> 15 N/mm²)",
          exposedFace: "High with premium finish"
        },
        {
          feature: "Water absorption",
          redClay: "Medium (12% - 15%)",
          flyAsh: "Low (< 10%)",
          exposedFace: "Very low (< 8%)"
        },
        {
          feature: "Environmental profile",
          redClay: "Traditional clay based",
          flyAsh: "Better use of recycled fly ash",
          exposedFace: "Moderate with architectural value"
        },
        {
          feature: "Plaster requirement",
          redClay: "Usually required",
          flyAsh: "Optional in many cases",
          exposedFace: "Not required for display finish"
        },
        {
          feature: "Estimated price range",
          redClay: "₹6.00 - ₹8.00 / brick",
          flyAsh: "₹7.00 - ₹9.00 / brick",
          exposedFace: "₹12.00 - ₹18.00 / brick"
        },
        {
          feature: "Best use",
          redClay: "Foundations, houses, boundary walls",
          flyAsh: "RCC frames, warehouses, multi-storey walls",
          exposedFace: "Facades, feature walls, premium projects"
        }
      ],
      footerNote: "Bulk orders above 10,000 bricks may qualify for better project pricing.",
      footerCta: "Try the price calculator"
    },
    calculator: {
      eyebrow: "Brick Price Calculator",
      title: "Estimate Brick Quantity and Bulk Price in Seconds",
      description:
        "Use the brick calculator to estimate quantity, pricing, and bulk savings for your construction project.",
      configureTitle: "Project Inputs",
      modeLabel: "Calculation Mode",
      quantityMode: "Brick Quantity",
      areaMode: "Wall Area",
      areaLabel: "Wall area (sq. ft.)",
      areaFormula: "Formula: area × 10",
      quantityLabel: "Number of bricks required",
      quantityHint: "Suggested minimum: 1,000",
      productLabel: "Select brick product",
      volumeLabel: "Order size class",
      tiers: {
        low: { label: "Small", range: "Below 1,000" },
        medium: { label: "Standard", range: "1,000 - 10,000" },
        bulk: { label: "Bulk", range: "10,000+" }
      },
      note:
        "This calculator shows an estimate. Final pricing can vary based on delivery distance, project size, loading needs, and brick type.",
      outputTitle: "Estimated Material Cost",
      estimateTag: "Estimate",
      bricksCountLabel: "Brick count",
      selectedTypeLabel: "Selected product",
      totalPriceLabel: "Estimated total price",
      freightHint: "Freight and site delivery charges are additional",
      savingsLabel: "Estimated bulk savings",
      unlockHint: "Order 10,000+ bricks to unlock bulk project pricing.",
      cta: "Request a Custom Quote"
    },
    factoryVideo: {
      eyebrow: "Factory Video",
      title: "See Our Brick Factory and Kiln in Action",
      description:
        "Take a quick look at how soil is prepared, shaped, fired, and moved through the brick production process.",
      badge: "Local Factory Footage",
      playHint: "Play the uploaded Luxmi Bricks factory video",
      length: "Recorded at Luxmi Brick Field",
      developerNoteTitle: "Video Note:",
      developerNote:
        "This section now plays the uploaded Luxmi Bricks.mp4 directly from the local assets folder."
    },
    gallery: {
      eyebrow: "Real Site Gallery",
      title: "Real Factory, Machinery, Brick Stock, and Yard Photos",
      description:
        "All images below are actual photos from Luxmi Brick Field, grouped into machinery, kiln views, brick stock, and yard scenes.",
      filters: [
        { label: "All", value: "all" },
        { label: "Machinery", value: "machinery" },
        { label: "Kiln & Chimney", value: "kiln" },
        { label: "Brick Stock", value: "stock" },
        { label: "Yard Views", value: "yard" }
      ],
      categoryLabels: {
        all: "All",
        machinery: "Machinery",
        kiln: "Kiln",
        stock: "Brick Stock",
        yard: "Yard"
      },
      loadingLabel: "Loading image...",
      loadMoreCta: "Load More Images",
      lightboxHint: "Use the left and right arrow keys to navigate",
      items: buildGalleryItems("en")
    },
    whyUs: {
      eyebrow: "Why Builders Choose Us",
      title: "Reliable Brick Supply for Construction Projects in Uttar Pradesh",
      description:
        "Builders choose Luxmi Brick Field for strong products, direct pricing, dependable delivery, and long local experience.",
      features: [
        {
          title: "Reliable construction quality",
          description: "Our brick supply is selected for strength, finish, and practical performance on active construction sites.",
          iconName: "ShieldCheck"
        },
        {
          title: "Fast district-level supply",
          description: "We support regular brick dispatch for projects across Prayagraj and surrounding districts.",
          iconName: "Truck"
        },
        {
          title: "Bulk pricing for projects",
          description: "Factory-direct project pricing is available for larger construction orders and repeat builder requirements.",
          iconName: "Award"
        },
        {
          title: "Practical manufacturing process",
          description: "We use organized production and material handling to maintain consistency in output and dispatch.",
          iconName: "Leaf"
        },
        {
          title: "25+ years of local trust",
          description: "Since 2001, we have supplied bricks to homes, commercial work, and local construction projects.",
          iconName: "Calendar"
        },
        {
          title: "Better shape and finish",
          description: "Cleaner brick sizing helps improve masonry alignment and reduce avoidable finishing issues.",
          iconName: "Cpu"
        }
      ]
    },
    delivery: {
      eyebrow: "Brick Delivery Network",
      title: "Bulk Brick Delivery Across Prayagraj and Key UP Districts",
      description:
        "From our Jhusi brick field, we support bulk truck dispatch for builders, contractors, and project sites across multiple districts.",
      stats: [
        { value: "10+", label: "Districts served" },
        { value: "24-48", label: "Hours for dispatch" }
      ],
      cta: "Ask about delivery to your site",
      gridTitle: "Active delivery coverage",
      footerLead: "Loading support available:",
      footerText: "Our transport team coordinates basic unloading support at standard construction sites.",
      cities: [
        "Prayagraj",
        "Varanasi",
        "Lucknow",
        "Kanpur",
        "Ayodhya",
        "Mirzapur",
        "Jaunpur",
        "Kaushambi",
        "Pratapgarh",
        "Sultanpur"
      ]
    },
    testimonials: {
      eyebrow: "Builder Reviews",
      title: "What Builders and Contractors Say",
      items: [
        {
          name: "Anil Kumar Mishra",
          company: "Mishra Buildcon, Prayagraj",
          city: "Prayagraj",
          rating: 5,
          quote:
            "Luxmi Brick Field supported our commercial project in Jhusi with dependable red clay brick supply, good sizing, and timely delivery."
        },
        {
          name: "Er. Ramesh Chandra Gupta",
          company: "Gupta & Sons Infra",
          city: "Varanasi",
          rating: 5,
          quote:
            "The fly ash brick quality was clean and consistent, and the bulk order reached our site on time without unnecessary follow-up."
        },
        {
          name: "Architect Shalini Singh",
          company: "Heritage Spaces Studio",
          city: "Lucknow",
          rating: 5,
          quote:
            "We used exposed face bricks for a premium farmhouse project, and the natural finish looked excellent without heavy plaster treatment."
        },
        {
          name: "Tripathi Developers",
          company: "Purvanchal Housing Co.",
          city: "Mirzapur",
          rating: 5,
          quote:
            "Their service is straightforward, the billing is clear, and the brick quality has been better than several local alternatives we tried before."
        }
      ],
      previousAria: "Previous review",
      nextAria: "Next review",
      slideAriaPrefix: "Review slide"
    },
    faqs: {
      eyebrow: "Brick Supply FAQs",
      title: "Frequently Asked Questions About Bricks, Delivery, and Quotes",
      description:
        "Get quick answers about minimum order quantity, delivery timing, factory visits, GST billing, and payment options.",
      items: [
        {
          question: "What is the minimum order quantity for delivery?",
          answer:
            "Our standard truck delivery order in Prayagraj usually starts at 5,000 bricks. Smaller self-pickup orders can be discussed directly at the yard."
        },
        {
          question: "Do you supply bricks outside Prayagraj?",
          answer:
            "Yes. We regularly dispatch brick loads to nearby districts such as Varanasi, Lucknow, Jaunpur, Mirzapur, Kaushambi, Ayodhya, and Sultanpur."
        },
        {
          question: "What is the difference between red clay and fly ash bricks?",
          answer:
            "Red clay bricks are traditional kiln-fired bricks preferred for many load-bearing uses, while fly ash bricks offer more uniform sizing and can help reduce plaster consumption."
        },
        {
          question: "How long does bulk brick dispatch take?",
          answer:
            "For regular stock, dispatch can usually begin within 24 to 48 hours after order confirmation. Special sizes may take longer."
        },
        {
          question: "Can I visit the brick field before placing a bulk order?",
          answer:
            "Yes. Engineers, contractors, architects, and project teams are welcome to visit our facility at Garapur, Jhusi, Prayagraj."
        },
        {
          question: "Do you provide GST invoices?",
          answer:
            "Yes. We provide GST billing and standard dispatch documentation with commercial brick supply orders."
        },
        {
          question: "Which payment methods do you accept?",
          answer:
            "We accept RTGS, NEFT, UPI, business cheque, and standard cash payment at the factory office where applicable."
        },
        {
          question: "Are these bricks suitable for construction use?",
          answer:
            "Yes. Our product range is intended for practical construction use, with options suited to foundations, walls, facades, and general project requirements."
        }
      ],
      footerText: "Need help with a specific site requirement or custom order?",
      footerCta: "Talk to us directly"
    },
    map: {
      eyebrow: "Factory Location",
      title: "Visit Our Brick Factory in Jhusi, Prayagraj",
      officeTitle: "Luxmi Brick Field Office",
      locationLabel: "Factory address",
      landmarkLabel: "Landmark",
      callLabel: "Call our team",
      emailLabel: "Email",
      hoursLabel: "Working hours",
      whatsappCta: "WhatsApp Chat",
      directionsCta: "Get Directions"
    },
    contact: {
      eyebrow: "Brick Quote Request",
      title: "Request a Brick Price Quote in Prayagraj",
      description:
        "Share your site requirement and our team will respond with a practical quote for brick type, quantity, and delivery planning.",
      formTitle: "Direct Enquiry Form",
      routedNote: "Every enquiry from this form goes directly to our email desk.",
      fields: {
        name: "Full Name",
        phone: "Phone Number",
        email: "Email Address",
        city: "Delivery City / District",
        product: "Select Brick Product",
        message: "Quantity, site details, and delivery schedule"
      },
      placeholders: {
        name: "Example: Alok Tripathi",
        phone: "Example: 7607633777",
        email: "Example: alok@gmail.com",
        city: "Example: Prayagraj",
        message: "Share the brick quantity, project type, site location, and expected delivery schedule."
      },
      loadingText: "Sending your enquiry...",
      submitCta: "Send Enquiry",
      successTitle: "Enquiry submitted successfully",
      successSubmitted:
        "Your enquiry for {product} has been sent to {email}. Our team will review your requirement and contact you shortly.",
      successFallback:
        "We could not send the enquiry automatically, so your mail app was opened with the request addressed to {email}. Please send the draft email to complete the enquiry.",
      resetCta: "Send Another Enquiry",
      sideTitle: "Office and Dispatch Contact",
      yardLabel: "Brick field yard",
      hotlineLabel: "Direct hotline",
      emailDeskLabel: "Email desk",
      channelsLabel: "Official channels"
    },
    footer: {
      establishedLabel: "Established",
      blurb:
        "Luxmi Brick Field supplies red clay bricks, fly ash bricks, wire cut bricks, and bulk construction materials for builders across Prayagraj and nearby districts.",
      mottoLabel: "Motto",
      mottoText: "Strong bricks. Timely delivery.",
      linksTitle: "Quick Links",
      mapTitle: "Location Map",
      directionsCta: "Open GPS Directions",
      officeTitle: "Brick Field Office",
      whatsappTitle: "WhatsApp Support",
      whatsappBody: "Start a direct chat with our dispatch team for brick rates, stock, and delivery queries.",
      whatsappCta: "Start Chat",
      copyright:
        "All rights reserved. Brick supply, project pricing, and dispatch support from Prayagraj."
    },
    quickEnquiry: {
      title: "Get a quick brick quote",
      subtitle: "Send your requirement by email and start a WhatsApp chat for faster follow-up.",
      fields: {
        name: "Your Name",
        phone: "WhatsApp Number",
        email: "Email Address (Optional)",
        product: "Brick Product",
        quantity: "Quantity"
      },
      placeholders: {
        name: "Example: Shailesh Tripathi",
        phone: "7607633777",
        email: "yourname@email.com"
      },
      quantityOptions: [
        "Below 1,000",
        "1,000 - 5,000",
        "5,000 - 10,000",
        "10,000 - 25,000",
        "25,000+ (Bulk)"
      ],
      note:
        "This quick quote request goes to our email desk. For faster discussion, you can also start a WhatsApp chat.",
      whatsappCta: "Start WhatsApp Chat",
      loadingText: "Sending quote request...",
      submitCta: "Send Quote Request",
      successTitle: "Quote request ready",
      successSubmitted: "Your quick quote request for {product} has been sent to {email}.",
      successFallback:
        "We could not send the request automatically, so your mail app was opened with the request addressed to {email}.",
      closeCta: "Close",
      nameError: "Please enter your name.",
      phoneError: "Please enter a valid 10-digit mobile number."
    },
    floatingWhatsApp: {
      tooltip: "Chat on WhatsApp",
      aria: "Open WhatsApp support chat"
    },
    backToTop: {
      aria: "Scroll back to top"
    },
    seoLabels: {
      companySchemaName: "Luxmi Brick Field",
      priceRange: "₹₹"
    }
  },
  hi: {
    meta: {
      htmlLang: "hi",
      locale: "hi_IN",
      title: "Luxmi Brick Field | प्रयागराज में लाल मिट्टी और फ्लाई ऐश ईंटों का निर्माता",
      description:
        "Luxmi Brick Field प्रयागराज का भरोसेमंद ईंट निर्माता है, जो लाल मिट्टी की ईंटें, फ्लाई ऐश ईंटें, वायर कट ईंटें और थोक निर्माण सामग्री सप्लाई करता है।",
      keywords:
        "प्रयागराज ईंट निर्माता, लाल मिट्टी की ईंटें, फ्लाई ऐश ईंटें, थोक ईंट सप्लायर, वायर कट ईंटें, झूंसी भट्ठा, उत्तर प्रदेश निर्माण सामग्री, ब्रिक फील्ड प्रयागराज",
      ogTitle: "Luxmi Brick Field | प्रयागराज का भरोसेमंद ईंट निर्माता",
      ogDescription:
        "लाल मिट्टी की ईंटें, फ्लाई ऐश ईंटें, वायर कट ईंटें और थोक निर्माण सामग्री के लिए Luxmi Brick Field से संपर्क करें।"
    },
    navLinks: [
      { name: "होम", href: "#home" },
      { name: "परिचय", href: "#about" },
      { name: "उत्पाद", href: "#products" },
      { name: "तुलना", href: "#comparison" },
      { name: "कैलकुलेटर", href: "#calculator" },
      { name: "गैलरी", href: "#gallery" },
      { name: "खासियत", href: "#why-us" },
      { name: "समीक्षाएं", href: "#testimonials" },
      { name: "संपर्क", href: "#contact" }
    ],
    announcement: {
      badge: "ऑफर",
      message:
        "थोक ईंट सप्लाई ऑफर: 10,000+ ईंटों का ऑर्डर करें और प्रयागराज में मुफ्त डिलीवरी पाएं।",
      cta: "अभी कॉल करें",
      dismissAria: "ऑफर बंद करें"
    },
    hero: {
      pill: `स्थापना ${COMPANY_INFO.established} • झूंसी, प्रयागराज`,
      titleLead: "प्रयागराज में",
      titleAccent: "लाल मिट्टी और फ्लाई ऐश ईंटों का भरोसेमंद निर्माता",
      description:
        "Luxmi Brick Field घर, बाउंड्री वॉल, गोदाम, कमर्शियल बिल्डिंग और अन्य निर्माण कार्यों के लिए लाल मिट्टी की ईंटें, फ्लाई ऐश ईंटें, वायर कट ईंटें और थोक निर्माण सामग्री सप्लाई करता है।",
      primaryCta: "उत्पाद देखें",
      secondaryCta: "कीमत का अनुमान",
      scrollHint: "नीचे देखें"
    },
    trustStrip: {
      badges: [
        "प्रयागराज का ईंट निर्माता",
        "लाल मिट्टी की ईंटें",
        "फ्लाई ऐश ईंटें",
        "उत्तर प्रदेश में थोक सप्लाई",
        "800+ बिल्डर ऑर्डर",
        "झूंसी रेलवे एक्सेस",
        "GST बिल उपलब्ध"
      ]
    },
    about: {
      eyebrow: "Luxmi Brick Field के बारे में",
      title: "साल 2001 से प्रयागराज का भरोसेमंद ईंट निर्माता",
      body: [
        "Luxmi Brick Field झूंसी, प्रयागराज में स्थित एक स्थापित ईंट निर्माता है, जो आवासीय, कमर्शियल और इंफ्रास्ट्रक्चर प्रोजेक्ट के लिए भरोसेमंद सप्लाई देता है।",
        "हम लाल मिट्टी की ईंटें, फ्लाई ऐश ईंटें, वायर कट ईंटें और एलिवेशन वॉल के लिए प्रीमियम फेसिंग प्रोडक्ट तैयार करते हैं, ताकि बिल्डर्स को मजबूत और उपयोगी निर्माण सामग्री एक ही जगह मिले।"
      ],
      highlights: [
        {
          title: "निर्माण के लिए भरोसेमंद गुणवत्ता",
          description: "हर डिस्पैच से पहले आकार, फिनिश और उपयोगिता पर ध्यान दिया जाता है।"
        },
        {
          title: "झूंसी से तेज डिस्पैच",
          description: "झूंसी रेलवे स्टेशन के पास की लोकेशन लोडिंग और ट्रक मूवमेंट को आसान बनाती है।"
        }
      ],
      stats: [
        { value: 25, label: "वर्षों का अनुभव", suffix: "+" },
        { value: 150, label: "लाख ईंटें सप्लाई", suffix: "+" },
        { value: 800, label: "संतुष्ट बिल्डर्स", suffix: "+" },
        { value: 10, label: "कवर किए गए जिले", suffix: "+" }
      ],
      qualitySealLabel: "चुनी हुई भट्ठा मिट्टी",
      qualitySealValue: "गंगा-यमुना की उपजाऊ मिट्टी"
    },
    products: {
      eyebrow: "ईंट उत्पाद",
      title: "लाल मिट्टी, फ्लाई ऐश, वायर कट और प्रीमियम ईंट उत्पाद",
      description:
        "नींव, दीवार, एलिवेशन, क्लैडिंग और थोक प्रोजेक्ट सप्लाई के लिए हमारे निर्माण-उपयोगी उत्पाद देखें।",
      enquireCta: "कोटेशन लें",
      items: [
        {
          id: "red-clay",
          name: "लाल मिट्टी की ईंटें",
          description:
            "पारंपरिक भट्ठे में पकाई गई मजबूत ईंटें, जो नींव, लोड-बेयरिंग दीवार, बाउंड्री वॉल और सामान्य निर्माण कार्य में उपयोगी हैं।",
          iconName: "Brick",
          features: ["प्राकृतिक मिट्टी", "मजबूत उपयोग", "साइट पर भरोसेमंद प्रदर्शन"],
          imageUrl: SITE_MEDIA.products.redClay
        },
        {
          id: "fly-ash",
          name: "फ्लाई ऐश ईंटें",
          description:
            "एकसमान आकार वाली फ्लाई ऐश ईंटें, जो साफ लाइनिंग, कम प्लास्टर और मल्टी-स्टोरी निर्माण में उपयोगी रहती हैं।",
          iconName: "Cpu",
          features: ["समान आकार", "कम प्लास्टर", "बेहतर नमी नियंत्रण"],
          imageUrl: SITE_MEDIA.products.flyAsh
        },
        {
          id: "exposed-face",
          name: "एक्सपोज्ड फेस ईंटें",
          description:
            "प्रीमियम एलिवेशन, फीचर वॉल और बाहरी फसाड के लिए उपयोगी फेसिंग ईंटें, जो बिना भारी प्लास्टर के भी अच्छी दिखती हैं।",
          iconName: "Layers",
          features: ["प्रीमियम फिनिश", "कम प्लास्टर", "फसाड के लिए उपयोगी"],
          imageUrl: SITE_MEDIA.products.exposedFace
        },
        {
          id: "wire-cut",
          name: "वायर कट ईंटें",
          description:
            "मशीन से बनी सटीक आकार की ईंटें, जिनके किनारे साफ होते हैं और आधुनिक निर्माण में बेहतर फिनिश मिलती है।",
          iconName: "Split",
          features: ["साफ किनारे", "समान आकार", "बेहतर मैसनरी फिनिश"],
          imageUrl: SITE_MEDIA.products.wireCut
        },
        {
          id: "hollow-bricks",
          name: "होलो ईंटें",
          description:
            "हल्के वजन की ईंटें, जो पार्टिशन वॉल, थर्मल प्रदर्शन और कुछ विशेष निर्माण उपयोग में मददगार होती हैं।",
          iconName: "Box",
          features: ["हल्की दीवार", "पार्टिशन उपयोग", "बेहतर थर्मल इंसुलेशन"],
          imageUrl: SITE_MEDIA.products.hollowBricks
        },
        {
          id: "cladding-tiles",
          name: "क्लैडिंग टाइल्स",
          description:
            "ईंट जैसा प्रीमियम लुक देने वाली क्लैडिंग टाइल्स, जिन्हें इंटीरियर और एक्सटीरियर दोनों में इस्तेमाल किया जा सकता है।",
          iconName: "Grid",
          features: ["कम जगह घेरती हैं", "आसान इंस्टॉलेशन", "अंदर और बाहर दोनों के लिए"],
          imageUrl: SITE_MEDIA.products.claddingTiles
        }
      ]
    },
    comparison: {
      eyebrow: "ईंट तुलना",
      title: "निर्माण के लिए सही ईंट चुनने की आसान तुलना",
      description:
        "मजबूती, पानी अवशोषण, प्लास्टर जरूरत और कीमत की तुलना करके अपनी साइट के लिए सही विकल्प चुनें।",
      mobileHint: "पूरी तुलना देखने के लिए दाएं-बाएं खिसकाएं",
      headers: {
        feature: "तुलना बिंदु",
        redClay: "लाल मिट्टी की ईंटें",
        flyAsh: "फ्लाई ऐश ईंटें",
        flyAshBadge: "ईको विकल्प",
        exposedFace: "एक्सपोज्ड फेस ईंटें"
      },
      rows: [
        {
          feature: "दबाव सहन क्षमता",
          redClay: "उच्च (क्लास-I, 10-15 N/mm²)",
          flyAsh: "बहुत उच्च (> 15 N/mm²)",
          exposedFace: "उच्च और बेहतर फिनिश"
        },
        {
          feature: "पानी अवशोषण",
          redClay: "मध्यम (12% - 15%)",
          flyAsh: "कम (< 10%)",
          exposedFace: "बहुत कम (< 8%)"
        },
        {
          feature: "पर्यावरण प्रोफाइल",
          redClay: "पारंपरिक मिट्टी आधारित",
          flyAsh: "रीसाइकल्ड फ्लाई ऐश का बेहतर उपयोग",
          exposedFace: "मध्यम, पर बेहतर लुक"
        },
        {
          feature: "प्लास्टर की जरूरत",
          redClay: "अक्सर जरूरी",
          flyAsh: "कई मामलों में वैकल्पिक",
          exposedFace: "डिस्प्ले फिनिश में जरूरी नहीं"
        },
        {
          feature: "अनुमानित कीमत",
          redClay: "₹6.00 - ₹8.00 / ईंट",
          flyAsh: "₹7.00 - ₹9.00 / ईंट",
          exposedFace: "₹12.00 - ₹18.00 / ईंट"
        },
        {
          feature: "उपयुक्त उपयोग",
          redClay: "नींव, घर, बाउंड्री वॉल",
          flyAsh: "RCC फ्रेम, गोदाम, मल्टी-स्टोरी दीवारें",
          exposedFace: "फसाड, फीचर वॉल, प्रीमियम प्रोजेक्ट"
        }
      ],
      footerNote: "10,000 से अधिक ईंटों के ऑर्डर पर बेहतर प्रोजेक्ट रेट मिल सकते हैं।",
      footerCta: "कैलकुलेटर में देखें"
    },
    calculator: {
      eyebrow: "ईंट कीमत कैलकुलेटर",
      title: "सेकंडों में ईंटों की मात्रा और अनुमानित कीमत देखें",
      description:
        "निर्माण प्रोजेक्ट के लिए ईंटों की जरूरत, अनुमानित कीमत और थोक बचत जानने के लिए इस कैलकुलेटर का उपयोग करें।",
      configureTitle: "प्रोजेक्ट इनपुट",
      modeLabel: "गणना का तरीका",
      quantityMode: "कुल ईंटें",
      areaMode: "दीवार क्षेत्रफल",
      areaLabel: "दीवार का क्षेत्रफल (वर्ग फुट)",
      areaFormula: "फॉर्मूला: क्षेत्रफल × 10",
      quantityLabel: "जरूरी ईंटों की संख्या",
      quantityHint: "सुझाव: 1,000 से अधिक",
      productLabel: "ईंट उत्पाद चुनें",
      volumeLabel: "ऑर्डर की श्रेणी",
      tiers: {
        low: { label: "छोटा", range: "1,000 से कम" },
        medium: { label: "मानक", range: "1,000 - 10,000" },
        bulk: { label: "थोक", range: "10,000+" }
      },
      note:
        "यह कैलकुलेटर अनुमान दिखाता है। अंतिम कीमत डिलीवरी दूरी, मात्रा, साइट की जरूरत और उत्पाद के अनुसार बदल सकती है।",
      outputTitle: "अनुमानित सामग्री लागत",
      estimateTag: "अनुमान",
      bricksCountLabel: "ईंटों की संख्या",
      selectedTypeLabel: "चुना गया उत्पाद",
      totalPriceLabel: "कुल अनुमानित कीमत",
      freightHint: "ढुलाई और साइट डिलीवरी अलग से होगी",
      savingsLabel: "अनुमानित थोक बचत",
      unlockHint: "10,000+ ईंटों के ऑर्डर पर थोक रेट मिल सकते हैं।",
      cta: "कस्टम कोटेशन लें"
    },
    factoryVideo: {
      eyebrow: "फैक्ट्री वीडियो",
      title: "हमारी फैक्ट्री और भट्ठे का काम देखें",
      description:
        "देखें कि मिट्टी कैसे तैयार होती है, आकार लेती है, भट्ठे में पकती है और डिस्पैच के लिए आगे बढ़ती है।",
      badge: "लोकल फैक्ट्री फुटेज",
      playHint: "अपलोड किया गया Luxmi Bricks फैक्ट्री वीडियो चलाएँ",
      length: "Luxmi Brick Field की रिकॉर्डिंग",
      developerNoteTitle: "वीडियो नोट:",
      developerNote:
        "यह सेक्शन अब लोकल assets फोल्डर में रखे गए Luxmi Bricks.mp4 वीडियो को सीधे चलाता है।"
    },
    gallery: {
      eyebrow: "वास्तविक साइट गैलरी",
      title: "फैक्ट्री, मशीनरी, ईंट स्टॉक और यार्ड की वास्तविक तस्वीरें",
      description:
        "नीचे दी गई सभी तस्वीरें Luxmi Brick Field की वास्तविक फोटो हैं। इन्हें मशीनरी, भट्ठा, ईंट स्टॉक और यार्ड व्यू के अनुसार समूहित किया गया है।",
      filters: [
        { label: "सभी", value: "all" },
        { label: "मशीनरी", value: "machinery" },
        { label: "भट्ठा और चिमनी", value: "kiln" },
        { label: "ईंट स्टॉक", value: "stock" },
        { label: "यार्ड व्यू", value: "yard" }
      ],
      categoryLabels: {
        all: "सभी",
        machinery: "मशीनरी",
        kiln: "भट्ठा",
        stock: "ईंट स्टॉक",
        yard: "यार्ड"
      },
      loadingLabel: "तस्वीर लोड हो रही है...",
      loadMoreCta: "और तस्वीरें देखें",
      lightboxHint: "नेविगेट करने के लिए कीबोर्ड के बाएं और दाएं बटन दबाएं",
      items: buildGalleryItems("hi")
    },
    whyUs: {
      eyebrow: "बिल्डर्स हमें क्यों चुनते हैं",
      title: "उत्तर प्रदेश के निर्माण प्रोजेक्ट के लिए भरोसेमंद ईंट सप्लाई",
      description:
        "बिल्डर्स Luxmi Brick Field को मजबूत उत्पाद, फैक्ट्री रेट, भरोसेमंद डिलीवरी और लंबे स्थानीय अनुभव के लिए चुनते हैं।",
      features: [
        {
          title: "निर्माण के लिए भरोसेमंद गुणवत्ता",
          description: "हमारी ईंट सप्लाई साइट उपयोग, फिनिश और काम की मजबूती को ध्यान में रखकर चुनी जाती है।",
          iconName: "ShieldCheck"
        },
        {
          title: "तेज जिला-स्तरीय सप्लाई",
          description: "प्रयागराज और आसपास के जिलों में नियमित ईंट डिस्पैच के लिए हमारी सप्लाई व्यवस्था सक्रिय रहती है।",
          iconName: "Truck"
        },
        {
          title: "थोक प्रोजेक्ट रेट",
          description: "बड़े निर्माण ऑर्डर और रेगुलर बिल्डर जरूरत के लिए फैक्ट्री-डायरेक्ट रेट उपलब्ध हैं।",
          iconName: "Award"
        },
        {
          title: "व्यवस्थित निर्माण प्रक्रिया",
          description: "उत्पादन और सामग्री प्रबंधन की संगठित प्रक्रिया से आउटपुट में स्थिरता बनाए रखी जाती है।",
          iconName: "Leaf"
        },
        {
          title: "25+ वर्षों का स्थानीय भरोसा",
          description: "साल 2001 से हम घर, कमर्शियल साइट और स्थानीय निर्माण कार्यों को ईंट सप्लाई कर रहे हैं।",
          iconName: "Calendar"
        },
        {
          title: "बेहतर आकार और फिनिश",
          description: "एकसमान आकार की ईंटें मैसनरी लाइनिंग और फिनिशिंग काम को आसान बनाती हैं।",
          iconName: "Cpu"
        }
      ]
    },
    delivery: {
      eyebrow: "ईंट डिलीवरी नेटवर्क",
      title: "प्रयागराज और उत्तर प्रदेश के कई जिलों में थोक ईंट सप्लाई",
      description:
        "झूंसी स्थित हमारे ब्रिक फील्ड से बिल्डर्स, कॉन्ट्रैक्टर और साइट प्रोजेक्ट के लिए ट्रक द्वारा थोक सप्लाई की जाती है।",
      stats: [
        { value: "10+", label: "सेवा वाले जिले" },
        { value: "24-48", label: "घंटे में डिस्पैच" }
      ],
      cta: "अपनी साइट के लिए डिलीवरी पूछें",
      gridTitle: "सक्रिय डिलीवरी क्षेत्र",
      footerLead: "लोडिंग सहायता उपलब्ध:",
      footerText: "हमारी ट्रांसपोर्ट टीम सामान्य निर्माण साइट पर बेसिक उताराई समन्वय में मदद करती है।",
      cities: [
        "प्रयागराज",
        "वाराणसी",
        "लखनऊ",
        "कानपुर",
        "अयोध्या",
        "मिर्जापुर",
        "जौनपुर",
        "कौशांबी",
        "प्रतापगढ़",
        "सुल्तानपुर"
      ]
    },
    testimonials: {
      eyebrow: "बिल्डर समीक्षा",
      title: "बिल्डर्स और कॉन्ट्रैक्टर क्या कहते हैं",
      items: [
        {
          name: "अनिल कुमार मिश्रा",
          company: "मिश्रा बिल्डकॉन, प्रयागराज",
          city: "प्रयागराज",
          rating: 5,
          quote:
            "झूंसी के हमारे कमर्शियल प्रोजेक्ट के लिए Luxmi Brick Field ने समय पर और भरोसेमंद लाल ईंट सप्लाई दी।"
        },
        {
          name: "ई. रमेश चंद्र गुप्ता",
          company: "गुप्ता एंड सन्स इंफ्रा",
          city: "वाराणसी",
          rating: 5,
          quote:
            "फ्लाई ऐश ईंटों की क्वालिटी साफ और एकसमान थी, और थोक ऑर्डर साइट तक समय पर पहुंच गया।"
        },
        {
          name: "आर्किटेक्ट शालिनी सिंह",
          company: "हेरिटेज स्पेसेस स्टूडियो",
          city: "लखनऊ",
          rating: 5,
          quote:
            "हमने प्रीमियम फार्महाउस प्रोजेक्ट के लिए एक्सपोज्ड फेस ईंटें लीं और उनकी नेचुरल फिनिश बहुत अच्छी लगी।"
        },
        {
          name: "त्रिपाठी डेवलपर्स",
          company: "पूर्वांचल हाउसिंग कंपनी",
          city: "मिर्जापुर",
          rating: 5,
          quote:
            "इनकी सर्विस सीधी, बिलिंग साफ और ईंटों की गुणवत्ता कई स्थानीय विकल्पों से बेहतर रही।"
        }
      ],
      previousAria: "पिछली समीक्षा",
      nextAria: "अगली समीक्षा",
      slideAriaPrefix: "समीक्षा स्लाइड"
    },
    faqs: {
      eyebrow: "ईंट सप्लाई FAQ",
      title: "ईंट, डिलीवरी और कोटेशन से जुड़े सामान्य सवाल",
      description:
        "न्यूनतम ऑर्डर, डिलीवरी समय, फैक्ट्री विजिट, GST बिल और भुगतान विकल्प के बारे में तुरंत जानकारी पाएं।",
      items: [
        {
          question: "डिलीवरी के लिए न्यूनतम ऑर्डर कितना है?",
          answer:
            "प्रयागराज में ट्रक डिलीवरी के लिए सामान्य ऑर्डर 5,000 ईंटों से शुरू होता है। इससे कम मात्रा के लिए स्वयं पिकअप की बात की जा सकती है।"
        },
        {
          question: "क्या आप प्रयागराज के बाहर भी सप्लाई करते हैं?",
          answer:
            "हाँ। हम वाराणसी, लखनऊ, जौनपुर, मिर्जापुर, कौशांबी, अयोध्या और सुल्तानपुर जैसे जिलों में नियमित सप्लाई भेजते हैं।"
        },
        {
          question: "लाल मिट्टी और फ्लाई ऐश ईंटों में क्या अंतर है?",
          answer:
            "लाल मिट्टी की ईंटें पारंपरिक भट्ठे में पकाई जाती हैं और कई लोड-बेयरिंग उपयोग में पसंद की जाती हैं, जबकि फ्लाई ऐश ईंटें अधिक एकसमान आकार देती हैं और प्लास्टर की खपत घटा सकती हैं।"
        },
        {
          question: "थोक डिस्पैच में कितना समय लगता है?",
          answer:
            "रेगुलर स्टॉक के लिए ऑर्डर कन्फर्म होने के 24 से 48 घंटे के भीतर डिस्पैच शुरू हो सकता है। स्पेशल साइज में अधिक समय लग सकता है।"
        },
        {
          question: "क्या ऑर्डर से पहले फैक्ट्री देखी जा सकती है?",
          answer:
            "हाँ। इंजीनियर, कॉन्ट्रैक्टर, आर्किटेक्ट और साइट टीम हमारे गरापुर, झूंसी, प्रयागराज स्थित परिसर का दौरा कर सकती है।"
        },
        {
          question: "क्या आप GST बिल देते हैं?",
          answer:
            "हाँ। कमर्शियल सप्लाई ऑर्डर के साथ GST बिल और सामान्य डिस्पैच दस्तावेज उपलब्ध कराए जाते हैं।"
        },
        {
          question: "आप कौन-कौन से भुगतान माध्यम लेते हैं?",
          answer:
            "हम RTGS, NEFT, UPI, व्यवसायिक चेक और आवश्यकतानुसार फैक्ट्री कार्यालय में मानक भुगतान स्वीकार करते हैं।"
        },
        {
          question: "क्या ये ईंटें निर्माण कार्य के लिए उपयोगी हैं?",
          answer:
            "हाँ। हमारे उत्पाद नींव, दीवार, फसाड और सामान्य निर्माण जरूरत के लिए उपयोगी विकल्प प्रदान करते हैं।"
        }
      ],
      footerText: "किसी खास साइट जरूरत या कस्टम ऑर्डर के लिए मदद चाहिए?",
      footerCta: "हमसे सीधे बात करें"
    },
    map: {
      eyebrow: "फैक्ट्री लोकेशन",
      title: "झूंसी, प्रयागराज स्थित हमारी फैक्ट्री पर आएं",
      officeTitle: "Luxmi Brick Field कार्यालय",
      locationLabel: "फैक्ट्री पता",
      landmarkLabel: "लैंडमार्क",
      callLabel: "टीम से बात करें",
      emailLabel: "ईमेल",
      hoursLabel: "कार्य समय",
      whatsappCta: "व्हाट्सऐप चैट",
      directionsCta: "दिशा देखें"
    },
    contact: {
      eyebrow: "ईंट कोटेशन अनुरोध",
      title: "प्रयागराज में ईंट कीमत का कोटेशन मांगें",
      description:
        "अपनी साइट की जरूरत साझा करें और हमारी टीम ईंट प्रकार, मात्रा और डिलीवरी योजना के अनुसार उचित कोटेशन भेजेगी।",
      formTitle: "सीधी पूछताछ फॉर्म",
      routedNote: "इस फॉर्म की हर जानकारी सीधे हमारे ईमेल डेस्क पर जाती है।",
      fields: {
        name: "पूरा नाम",
        phone: "मोबाइल नंबर",
        email: "ईमेल पता",
        city: "डिलीवरी शहर / जिला",
        product: "ईंट उत्पाद चुनें",
        message: "मात्रा, साइट विवरण और डिलीवरी समय"
      },
      placeholders: {
        name: "उदाहरण: आलोक त्रिपाठी",
        phone: "उदाहरण: 7607633777",
        email: "उदाहरण: alok@gmail.com",
        city: "उदाहरण: प्रयागराज",
        message: "ईंटों की मात्रा, प्रोजेक्ट का प्रकार, साइट लोकेशन और अपेक्षित डिलीवरी समय लिखें।"
      },
      loadingText: "पूछताछ भेजी जा रही है...",
      submitCta: "पूछताछ भेजें",
      successTitle: "पूछताछ सफलतापूर्वक भेजी गई",
      successSubmitted:
        "{product} के लिए आपकी पूछताछ {email} पर भेज दी गई है। हमारी टीम जल्दी ही आपसे संपर्क करेगी।",
      successFallback:
        "पूछताछ स्वतः नहीं भेजी जा सकी, इसलिए {email} के लिए आपका मेल ऐप खोल दिया गया है। कृपया ड्राफ्ट ईमेल भेजकर प्रक्रिया पूरी करें।",
      resetCta: "नई पूछताछ भेजें",
      sideTitle: "कार्यालय और डिस्पैच संपर्क",
      yardLabel: "ब्रिक फील्ड यार्ड",
      hotlineLabel: "सीधा संपर्क",
      emailDeskLabel: "ईमेल डेस्क",
      channelsLabel: "आधिकारिक चैनल"
    },
    footer: {
      establishedLabel: "स्थापना",
      blurb:
        "Luxmi Brick Field प्रयागराज और आसपास के जिलों में लाल मिट्टी की ईंटें, फ्लाई ऐश ईंटें, वायर कट ईंटें और थोक निर्माण सामग्री सप्लाई करता है।",
      mottoLabel: "हमारा संकल्प",
      mottoText: "मजबूत ईंटें। समय पर डिलीवरी।",
      linksTitle: "क्विक लिंक",
      mapTitle: "लोकेशन मैप",
      directionsCta: "GPS दिशा खोलें",
      officeTitle: "ब्रिक फील्ड कार्यालय",
      whatsappTitle: "व्हाट्सऐप सहायता",
      whatsappBody: "ईंट रेट, स्टॉक और डिलीवरी पूछताछ के लिए हमारी डिस्पैच टीम से सीधे चैट शुरू करें।",
      whatsappCta: "चैट शुरू करें",
      copyright:
        "सर्वाधिकार सुरक्षित। प्रयागराज से ईंट सप्लाई, प्रोजेक्ट रेट और डिस्पैच सहयोग।"
    },
    quickEnquiry: {
      title: "जल्दी ईंट कोटेशन पाएं",
      subtitle: "अपनी जरूरत ईमेल से भेजें और तेज फॉलो-अप के लिए व्हाट्सऐप चैट शुरू करें।",
      fields: {
        name: "आपका नाम",
        phone: "व्हाट्सऐप नंबर",
        email: "ईमेल पता (वैकल्पिक)",
        product: "ईंट उत्पाद",
        quantity: "मात्रा"
      },
      placeholders: {
        name: "उदाहरण: शैलेश त्रिपाठी",
        phone: "7607633777",
        email: "yourname@email.com"
      },
      quantityOptions: [
        "1,000 से कम",
        "1,000 - 5,000",
        "5,000 - 10,000",
        "10,000 - 25,000",
        "25,000+ (थोक)"
      ],
      note:
        "यह त्वरित कोटेशन अनुरोध हमारे ईमेल डेस्क पर जाएगा। तेज बातचीत के लिए आप व्हाट्सऐप चैट भी शुरू कर सकते हैं।",
      whatsappCta: "व्हाट्सऐप चैट शुरू करें",
      loadingText: "कोटेशन अनुरोध भेजा जा रहा है...",
      submitCta: "कोटेशन अनुरोध भेजें",
      successTitle: "कोटेशन अनुरोध तैयार है",
      successSubmitted: "{product} के लिए आपका त्वरित अनुरोध {email} पर भेज दिया गया है।",
      successFallback:
        "अनुरोध स्वतः नहीं भेजा जा सका, इसलिए {email} के लिए आपका मेल ऐप खोल दिया गया है।",
      closeCta: "बंद करें",
      nameError: "कृपया अपना नाम भरें।",
      phoneError: "कृपया सही 10 अंकों का मोबाइल नंबर भरें।"
    },
    floatingWhatsApp: {
      tooltip: "व्हाट्सऐप चैट",
      aria: "व्हाट्सऐप सहायता चैट खोलें"
    },
    backToTop: {
      aria: "पेज के ऊपर जाएं"
    },
    seoLabels: {
      companySchemaName: "Luxmi Brick Field",
      priceRange: "₹₹"
    }
  }
} as const;

export type SiteContent = (typeof SITE_CONTENT)[SiteLanguage];

export function getLocalizedCompanyInfo(language: SiteLanguage) {
  return {
    brandName: COMPANY_INFO.brandName,
    brandNameHi: COMPANY_INFO.brandNameHi,
    location: COMPANY_INFO.location[language],
    address: COMPANY_INFO.address[language],
    landmark: COMPANY_INFO.landmark[language],
    hours: COMPANY_INFO.hours[language]
  };
}
