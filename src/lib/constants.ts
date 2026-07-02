export const COMPANY_INFO = {
  name: "LUXMI BRICK FIELD",
  hindiName: "लक्ष्मी भट्ठा",
  tagline: "Quality Bricks from the Heart of Prayagraj",
  hindiTagline: "गुणवत्तापूर्ण ईंटें, समय पर डिलीवरी",
  established: "2001",
  location: "Prayagraj, Uttar Pradesh, India",
  address: "Banaras Road, Garapur, Jhusi, Prayagraj, Uttar Pradesh – 211013",
  landmark: "Near Jhusi Railway Station, Prayagraj",
  phone: "+91 76076 33777",
  email: "shubhammahapure1010@gmail.com",
  whatsapp: "+91 76076 33777",
  whatsappLink: "https://wa.me/917607633777",
  hours: "Monday - Saturday: 8:00 AM - 6:00 PM (Closed on Sundays)",
  facebook: "https://facebook.com/luxmibricks",
  instagram: "https://instagram.com/luxmibricks",
  youtube: "https://youtube.com/luxmibricks",
  linkedin: "https://linkedin.com/company/luxmibricks",
  latitude: 25.4358,
  longitude: 81.9621,
  mapEmbedUrl: "https://maps.google.com/maps?q=Banaras+Rd,+Garapur,+Jhusi,+Prayagraj,+Uttar+Pradesh+211013&output=embed",
  directionLink: "https://maps.app.goo.gl/E89TGzFJywG5aY676"
};

export const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Products", href: "#products" },
  { name: "Compare", href: "#comparison" },
  { name: "Calculator", href: "#calculator" },
  { name: "Gallery", href: "#gallery" },
  { name: "Why Us", href: "#why-us" },
  { name: "Reviews", href: "#testimonials" },
  { name: "Contact", href: "#contact" }
];

export interface Product {
  id: string;
  name: string;
  description: string;
  iconName: string;
  features: string[];
  imageUrl: string;
}

export const PRODUCTS: Product[] = [
  {
    id: "red-clay",
    name: "Red Clay Bricks",
    description: "Premium sun-dried & fire-kiln baked traditional clay bricks offering high load-bearing capacity and unmatched durability for foundational grids. Formed with fertile alluvial soil from the Ganga-Yamuna planes.",
    iconName: "Brick",
    features: ["100% Organic Soil", "High Crushing Strength", "Low Salt Efflorescence"],
    imageUrl: "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "fly-ash",
    name: "Fly Ash Bricks",
    description: "Highly uniform, eco-friendly concrete substitutes manufactured using high-grade recycled power plant ash. Economical, lightweight, and perfect clean corners.",
    iconName: "Cpu",
    features: ["Lightweight & Flat Alignment", "Reduces Plaster Work by 15%", "Superior Moisture Blockage"],
    imageUrl: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "exposed-face",
    name: "Exposed Face Bricks",
    description: "Visually striking natural-finish terracotta bricks. No plastering required; ideal for elegant internal accent walls and striking external facades.",
    iconName: "Layers",
    features: ["Rustic Terracotta Texture", "No Plaster or Paint Needed", "Felt Weather Resistant"],
    imageUrl: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "wire-cut",
    name: "Wire Cut Bricks",
    description: "Mechanically extruded and exactingly cut using high-tensile steel lines, delivering perfect 90-degree dimensions, sharp edges, and outstanding solid density.",
    iconName: "Split",
    features: ["Sharp Non-Chipped Edges", "Extruded Dense Structure", "Highly Uniform Layout"],
    imageUrl: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "hollow-bricks",
    name: "Hollow Bricks",
    description: "Engineered with central air chambers to provide superior heat insulation, acoustic control, and up to 60% reduction in dead weight on high rise foundations.",
    iconName: "Box",
    features: ["Thermal Home Insulation", "Ideal for Partition Walls", "Accelerated Wall Construction"],
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "cladding-tiles",
    name: "Cladding Tiles",
    description: "Sleek, thin clay skins that preserve the premium rustic beauty of solid brick masonry while remaining extremely easy and light to mount on existing reinforced walls.",
    iconName: "Grid",
    features: ["Slim Space-Saving Profile", "Glue-Adhesive Friendly Setup", "Exteriors & Interiors"],
    imageUrl: "https://images.unsplash.com/photo-1615876234886-fd9a39faa97f?auto=format&fit=crop&q=80&w=600"
  }
];

export interface GalleryItem {
  id: string;
  url: string;
  title: string;
  category: "all" | "factory" | "products" | "projects" | "delivery";
  hindiTitle?: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    url: "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&q=80&w=1200",
    title: "High Temperature Firing Tunnel Kiln",
    hindiTitle: "उच्च तापमान फायरिंग ईंट भट्ठा",
    category: "factory"
  },
  {
    id: "g2",
    url: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=1200",
    title: "Fresh Baked Class-I Red Bricks Ready for Sort",
    hindiTitle: "प्रथम श्रेणी लाल ईंटें सॉर्टिंग के लिए तैयार",
    category: "products"
  },
  {
    id: "g3",
    url: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1200",
    title: "Exposed Face Facade - Corporate Block",
    hindiTitle: "एक्सपोज्ड फेस ईंट डिजाइन - कॉर्पोरेट ब्लॉक",
    category: "projects"
  },
  {
    id: "g4",
    url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200",
    title: "Residential Structural Framework",
    hindiTitle: "आवासीय भवन संरचना",
    category: "projects"
  },
  {
    id: "g5",
    url: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1200",
    title: "Rustic Living Room Cladding Display",
    hindiTitle: "लिविंग रूम क्लैडिंग डिजाइन",
    category: "projects"
  },
  {
    id: "g6",
    url: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=1200",
    title: "Heavy Dump Trucks Readying for Prayagraj Dispatch",
    hindiTitle: "प्रयागराज डिस्पैच के लिए डंपर ट्रक",
    category: "delivery"
  },
  {
    id: "g7",
    url: "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?auto=format&fit=crop&q=80&w=1200",
    title: "Architectural Exterior Facade Styling",
    hindiTitle: "वास्तुकला बाहरी मुखौटा स्टाइलिंग",
    category: "projects"
  },
  {
    id: "g8",
    url: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=1200",
    title: "Automated Material Soil Mixer & Molding",
    hindiTitle: "स्वचालित मिट्टी मिक्सर और मोल्डिंग",
    category: "factory"
  },
  {
    id: "g9",
    url: "https://images.unsplash.com/photo-1595841696660-1e8c037b514d?auto=format&fit=crop&q=80&w=1200",
    title: "Logistical Pile Stacking Yards",
    hindiTitle: "लॉजिस्टिक पाईल स्टैकिंग यार्ड",
    category: "delivery"
  },
  {
    id: "g10",
    url: "https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?auto=format&fit=crop&q=80&w=1200",
    title: "Strict Mechanical Quality Sizing & Lab Calibrator",
    hindiTitle: "यांत्रिक गुणवत्ता एवं प्रयोगशाला अंशांकन",
    category: "factory"
  }
];

export const WHY_US_FEATURES = [
  {
    title: "ISI Certified Class-I Quality",
    description: "Our bricks exceed Bureau of Indian Standards expectations. Highly tested against heavy crushing pressures and low water soaking ratios.",
    iconName: "ShieldCheck"
  },
  {
    title: "Swift Multi-District Transit",
    description: "Equipped with dedicated heavy loader trucks, supplying Prayagraj division and Purvanchal areas on tight commercial timelines.",
    iconName: "Truck"
  },
  {
    title: "Competitive Bulk Pricing",
    description: "Factory-direct rates starting from ₹6 per brick. We offer substantial discounts for developer projects, warehouses, and infra works.",
    iconName: "Award"
  },
  {
    title: "Eco-Friendly Operations",
    description: "Proudly supporting local sustainability. High-yield fly ash recycling systems and modern low-carbon chimneys minimize regional emissions.",
    iconName: "Leaf"
  },
  {
    title: "25+ Years Local Trust",
    description: "A prominent industrial fixture in Prayagraj since 2001. Supplying material for foundational bridges, housing, and government complexes.",
    iconName: "Calendar"
  },
  {
    title: "Perfect Dimensional Sizing",
    description: "Using standard mechanized soil molds ensuring very uniform block faces, minimizing mortar consumption by up to 15-20%.",
    iconName: "Cpu"
  }
];

export const TESTIMONIALS = [
  {
    name: "Anil Kumar Mishra",
    company: "Mishra Buildcon Prayagraj",
    city: "Prayagraj",
    rating: 5,
    quote: "Luxmi Brick Field has been our structural partner for major commercial complexes in Jhusi. Their Class-A Red Clay bricks possess amazing dimensional uniformity. Plus, their location near the railway station speeds up logistics considerably."
  },
  {
    name: "Er. Ramesh Chandra Gupta",
    company: "Gupta & Sons Infra",
    city: "Varanasi",
    rating: 5,
    quote: "Exceptional Fly Ash blocks! Extremely durable with crisp, clean edges. They delivered over 2,00,000 bricks to our multi-story apartment block in Varanasi ahead of schedule. Highly recommend their bulk factory deals."
  },
  {
    name: "Architect Shalini Singh",
    company: "Heritage Spaces Studio",
    city: "Lucknow",
    rating: 5,
    quote: "We ordered their Exposed Face Terracotta blocks for a luxury farm-villa close to Ayodhya. The natural shade and high resistance to efflorescence meant we left the bricks unplastered. They look exceptionally stunning."
  },
  {
    name: "Tripathi Developers",
    company: "Purvanchal Housing Co.",
    city: "Mirzapur",
    rating: 5,
    quote: "We have bought material from multiple local bhattas over 15 years, but Luxmi is by far the most professional. Transparent pricing, official GST invoices, and very high crushing strengths. Zero efflorescent patches."
  }
];

export const STATS_COUNTERS = [
  { value: 25, label: "Years Experience", suffix: "+" },
  { value: 15, label: "Bricks Supplied", suffix: "M+ " },
  { value: 800, label: "Happy Builders", suffix: "+" },
  { value: 10, label: "Districts Covered", suffix: "+" }
];

export const DELIVERY_CITIES = [
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
];

export const BRICK_COMPARISON = [
  {
    feature: "Crushing Strength",
    redClay: "High (Class-I)",
    flyAsh: "Very High (Controlled)",
    exposedFace: "High (Aesthetic Rating)"
  },
  {
    feature: "Water Absorption",
    redClay: "Medium (12-15%)",
    flyAsh: "Low (< 10%)",
    exposedFace: "Low (< 8%)"
  },
  {
    feature: "Eco Friendliness",
    redClay: "Moderate (Organic Soil)",
    flyAsh: "Excellent (Eco Recycled) ✅",
    exposedFace: "Good (Terracotta Blend)"
  },
  {
    feature: "Plaster Required?",
    redClay: "Yes (Recommended)",
    flyAsh: "Optional (Clean Flat Face)",
    exposedFace: "No (Designed to display)"
  },
  {
    feature: "Avg. Price Range",
    redClay: "₹6.00 - ₹8.00 / Brick",
    flyAsh: "₹7.00 - ₹9.00 / Brick",
    exposedFace: "₹12.00 - ₹18.00 / Brick"
  },
  {
    feature: "Ideal Application",
    redClay: "Load-bearing load brickworks",
    flyAsh: "Framed RCC multi-storey structural fill",
    exposedFace: "External facades & internal partitions"
  }
];

export const FAQS = [
  {
    question: "What is the minimum order quantity (MOQ) for delivery?",
    answer: "Our standard minimum order quantity for truck deliveries within Prayagraj is 5,000 bricks. For smaller self-loaded pick-up requests, customers can directly visit our physical bhatta near Jhusi, Prayagraj."
  },
  {
    question: "Do you deliver to districts outside Prayagraj?",
    answer: "Yes, we regularly dispatch cargo carriers to surrounding Purvanchal districts including Varanasi, Lucknow, Jaunpur, Mirzapur, Pratapgarh, Kaushambi, Ayodhya, and Sultanpur."
  },
  {
    question: "What is the key difference between Red Clay and Fly Ash bricks?",
    answer: "Red Clay bricks are traditional kiln-fired blocks made from fertile river soils, excellent for core load load-bearing structures. Fly Ash bricks are eco-friendly industrial ash-concrete formulations that offer supreme sizing consistency, lowering mortar plaster usage by up to 15-20%."
  },
  {
    question: "How long does a bulk delivery dispatch take?",
    answer: "For standard stocks, deliveries dispatch within 24 to 48 hours of order confirmation and advance release. Custom-sized clay mold requests require additional lead time based on dry-time and kiln schedule cycles."
  },
  {
    question: "Can I inspect the factory or bhatta before placing my commercial order?",
    answer: "Absolutely! We encourage engineers, architects, and site supervisors to visit our headquarters at Banaras Road, Garapur, Jhusi, Prayagraj for a complete layout tour and to witness our crushing strength lab tests."
  },
  {
    question: "Do you provide proper commercial GST invoices?",
    answer: "Yes, Luxmi Brick Field is a fully registered tax-paying corporate manufacturer. Every delivery dispatch is accompanied by an electronic transit E-Way bill and a valid 12% standard GST invoice."
  },
  {
    question: "What secure payment methods do you accept?",
    answer: "We support direct RTGS/NEFT bank transfers, UPI payments, business checks, and cash collections at our factory register counter."
  },
  {
    question: "Are your bricks certified by national standards?",
    answer: "Yes, our Class-I structural Red Clay and Fly Ash bricks are manufactured under Bureau of Indian Standards (BIS) parameters, matching premium compressive strengths."
  }
];
