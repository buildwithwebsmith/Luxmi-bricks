import React, { useEffect, useMemo } from "react";
import AnnouncementBar from "./components/AnnouncementBar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustStrip from "./components/TrustStrip";
import About from "./components/About";
import Products from "./components/Products";
import BrickComparison from "./components/BrickComparison";
import PriceCalculator from "./components/PriceCalculator";
import FactoryVideo from "./components/FactoryVideo";
import Gallery from "./components/Gallery";
import WhyUs from "./components/WhyUs";
import DeliveryMap from "./components/DeliveryMap";
import Testimonials from "./components/Testimonials";
import FaqSection from "./components/FaqSection";
import MapSection from "./components/MapSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import QuickEnquiryPopup from "./components/QuickEnquiryPopup";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import BackToTop from "./components/BackToTop";
import { COMPANY_INFO, getLocalizedCompanyInfo } from "./lib/constants";
import { useLanguage } from "./lib/language";

function upsertMeta(selector: string, attributes: Record<string, string>) {
  let element = document.head.querySelector(selector) as HTMLMetaElement | null;

  if (!element) {
    element = document.createElement("meta");
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element?.setAttribute(key, value);
  });
}

export default function App() {
  const { language, content } = useLanguage();
  const localizedCompany = getLocalizedCompanyInfo(language);
  const isHindi = language === "hi";

  useEffect(() => {
    document.title = content.meta.title;

    upsertMeta('meta[name="description"]', {
      name: "description",
      content: content.meta.description
    });

    upsertMeta('meta[name="keywords"]', {
      name: "keywords",
      content: content.meta.keywords
    });

    upsertMeta('meta[name="robots"]', {
      name: "robots",
      content: "index, follow"
    });

    upsertMeta('meta[property="og:title"]', {
      property: "og:title",
      content: content.meta.ogTitle
    });

    upsertMeta('meta[property="og:description"]', {
      property: "og:description",
      content: content.meta.ogDescription
    });

    upsertMeta('meta[property="og:site_name"]', {
      property: "og:site_name",
      content: COMPANY_INFO.brandName
    });

    upsertMeta('meta[property="og:type"]', {
      property: "og:type",
      content: "website"
    });

    upsertMeta('meta[property="og:locale"]', {
      property: "og:locale",
      content: content.meta.locale
    });

    upsertMeta('meta[name="twitter:card"]', {
      name: "twitter:card",
      content: "summary_large_image"
    });

    upsertMeta('meta[name="twitter:title"]', {
      name: "twitter:title",
      content: content.meta.ogTitle
    });

    upsertMeta('meta[name="twitter:description"]', {
      name: "twitter:description",
      content: content.meta.ogDescription
    });

    upsertMeta('meta[name="theme-color"]', {
      name: "theme-color",
      content: "#8B1A1A"
    });
  }, [content.meta]);

  const localBusinessSchema = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: content.seoLabels.companySchemaName,
    alternateName: COMPANY_INFO.brandNameHi,
    description: content.meta.description,
    telephone: COMPANY_INFO.phone,
    email: COMPANY_INFO.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: localizedCompany.address,
      addressLocality: isHindi ? "प्रयागराज" : "Prayagraj",
      addressRegion: isHindi ? "उत्तर प्रदेश" : "Uttar Pradesh",
      postalCode: "211013",
      addressCountry: "IN"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: COMPANY_INFO.latitude,
      longitude: COMPANY_INFO.longitude
    },
    openingHours: "Mo-Sa 08:00-18:00",
    priceRange: content.seoLabels.priceRange,
    areaServed: isHindi ? "प्रयागराज और उत्तर प्रदेश" : "Prayagraj and Uttar Pradesh",
    keywords: content.meta.keywords,
    sameAs: [
      COMPANY_INFO.facebook,
      COMPANY_INFO.instagram,
      COMPANY_INFO.youtube,
      COMPANY_INFO.linkedin
    ]
  }), [content, isHindi, localizedCompany.address]);

  return (
    <div className="relative min-h-screen bg-stone-50 text-stone-850 selection:bg-brick-primary selection:text-white" id="app-root-container">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      <AnnouncementBar />
      <Navbar />

      <main>
        <Hero />
        <TrustStrip />
        <About />
        <Products />
        <BrickComparison />
        <PriceCalculator />
        <FactoryVideo />
        <Gallery />
        <WhyUs />
        <DeliveryMap />
        <Testimonials />
        <FaqSection />
        <MapSection />
        <Contact />
      </main>

      <Footer />
      <QuickEnquiryPopup />
      <FloatingWhatsApp />
      <BackToTop />
    </div>
  );
}
