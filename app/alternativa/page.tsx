"use client";

import { useEffect, useState } from "react";
import type { Language } from "../menu-data";
import { featuredMenuPhotos } from "../menu-images";

const phone = "603269541";
const whatsapp = "https://wa.me/34603269541?text=Hola%2C%20quiero%20hacer%20una%20reserva%20en%20Gabi%20Bar%20Restaurante%20Vic.";

const copy = {
  es: {
    nav: ["La casa", "Sabores", "Encuéntranos"], reserve: "RESERVAR MESA", heroLine: "SABOR COLOMBIANO", heroTitle: "GABI BAR", heroSub: "COCINA COLOMBIANA · VIC", heroButton: "DESCUBRE LA CARTA", arrow: "DESLIZA PARA DESCUBRIR", homeEyebrow: "UNA MESA PARA TODOS", homeTitle: "Un pedacito de Colombia en Vic.", homeText: "Sabores colombianos, platos para compartir y una mesa lista para recibirte. Ven con hambre y disfruta de la comida a tu ritmo.", feature: "SABOR SIN PRISA", featureText: "Un lugar para reunirse, brindar y volver a los sabores que se sienten como casa.", foodEyebrow: "HECHO PARA COMPARTIR", foodTitle: "Nuestros sabores", foodText: "Antojitos, platos generosos y bebidas para acompañar. Encuentra toda la carta aquí.", menu: "VER LA CARTA COMPLETA", placeEyebrow: "ESTAMOS EN VIC", addressTitle: "Ven a vernos.", address: "Carrer Nou, 7 · 08500 Vic, Barcelona", directions: "CÓMO LLEGAR", phoneLabel: "RESERVAS Y CONSULTAS", call: "LLAMAR AL RESTAURANTE", contactEyebrow: "TU MESA TE ESPERA", contactTitle: "Nos vemos en Gabi.", contactText: "Llama o escríbenos para reservar. Estaremos encantados de recibirte.", contactButton: "RESERVAR POR WHATSAPP", footer: "Sabor colombiano, aquí en Vic." },
  ca: {
    nav: ["La casa", "Sabors", "Troba'ns"], reserve: "RESERVAR TAULA", heroLine: "SABOR COLOMBIÀ", heroTitle: "GABI BAR", heroSub: "CUINA COLOMBIANA · VIC", heroButton: "DESCOBREIX LA CARTA", arrow: "LLISCA PER DESCOBRIR", homeEyebrow: "UNA TAULA PER A TOTHOM", homeTitle: "Un trosset de Colòmbia a Vic.", homeText: "Sabors colombians, plats per compartir i una taula a punt per rebre't. Vine amb gana i gaudeix del menjar al teu ritme.", feature: "SABOR SENSE PRESSA", featureText: "Un lloc per reunir-se, brindar i tornar als sabors que fan sentir-se com a casa.", foodEyebrow: "FET PER COMPARTIR", foodTitle: "Els nostres sabors", foodText: "Mossegades, plats generosos i begudes per acompanyar. Troba tota la carta aquí.", menu: "VEURE LA CARTA COMPLETA", placeEyebrow: "SOM A VIC", addressTitle: "Vine a veure'ns.", address: "Carrer Nou, 7 · 08500 Vic, Barcelona", directions: "COM ARRIBAR-HI", phoneLabel: "RESERVES I CONSULTES", call: "TRUCA AL RESTAURANT", contactEyebrow: "LA TEVA TAULA T'ESPERA", contactTitle: "Ens veiem a Gabi.", contactText: "Truca'ns o escriu-nos per reservar. Ens farà molta il·lusió rebre't.", contactButton: "RESERVAR PER WHATSAPP", footer: "Sabor colombià, aquí a Vic." },
  en: {
    nav: ["Our place", "Flavours", "Find us"], reserve: "BOOK A TABLE", heroLine: "COLOMBIAN FLAVOUR", heroTitle: "GABI BAR", heroSub: "COLOMBIAN KITCHEN · VIC", heroButton: "EXPLORE THE MENU", arrow: "SCROLL TO DISCOVER", homeEyebrow: "A TABLE FOR EVERYONE", homeTitle: "A little piece of Colombia in Vic.", homeText: "Colombian flavours, generous plates to share and a table ready to welcome you. Bring your appetite and enjoy the food at your own pace.", feature: "GOOD FOOD, NO RUSH", featureText: "A place to get together, raise a glass and return to the flavours that feel like home.", foodEyebrow: "MADE FOR SHARING", foodTitle: "A taste of Gabi", foodText: "Colombian favourites, generous plates and drinks to match. Explore the full menu here.", menu: "VIEW THE FULL MENU", placeEyebrow: "FIND US IN VIC", addressTitle: "Come say hello.", address: "Carrer Nou, 7 · 08500 Vic, Barcelona", directions: "GET DIRECTIONS", phoneLabel: "RESERVATIONS & ENQUIRIES", call: "CALL THE RESTAURANT", contactEyebrow: "YOUR TABLE IS WAITING", contactTitle: "See you at Gabi.", contactText: "Call or message us to book a table. We look forward to welcoming you.", contactButton: "BOOK ON WHATSAPP", footer: "Colombian flavour, right here in Vic." },
} as const;

const plates = [
  { image: featuredMenuPhotos.salchiford, title: "Salchiford", price: "10 / 15 / 20 €", text: { es: "Patatas, chicharrón, carne desmechada, queso y maicitos.", ca: "Patates, cotna cruixent, carn esfilagarsada, formatge i blat de moro.", en: "Fries, crispy pork, shredded beef, cheese and corn." } },
  { image: featuredMenuPhotos.picada, title: "Picada", price: "20 / 30 €", text: { es: "Una mezcla generosa de carnes, patacón, yuca y arepa.", ca: "Una barreja generosa de carns, patacó, iuca i arepa.", en: "A generous mix of meats, patacón, yuca and arepa." } },
  { image: featuredMenuPhotos.antojitos, title: "Antojitos", price: "Desde 2 €", text: { es: "Empanadas, arepas y bocados colombianos para compartir.", ca: "Empanades, arepes i mossegades colombianes per compartir.", en: "Empanadas, arepas and Colombian bites made for sharing." } },
];

export default function AlternativeHome() {
  const [language, setLanguage] = useState<Language>("es");
  const t = copy[language];

  useEffect(() => {
    document.documentElement.lang = language;
    const nodes = document.querySelectorAll<HTMLElement>(".alt-reveal");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
      nodes.forEach((node) => node.classList.add("alt-visible"));
      return;
    }
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add("alt-visible"); observer.unobserve(entry.target); }
    }), { threshold: 0.15 });
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [language]);

  return <main className="alt-site">
    <header className="alt-header">
      <a className="alt-brand" href="#inicio" aria-label="Gabi Bar, inicio"><span className="alt-mark">G</span><span>GABI<br/>BAR</span></a>
      <nav aria-label="Navegación"><a href="#casa">{t.nav[0]}</a><a href="#sabores">{t.nav[1]}</a><a href="#visitanos">{t.nav[2]}</a><a className="alt-nav-menu" href="/carta">{language === "en" ? "Menu" : "Carta"}</a></nav>
      <div className="alt-header-actions"><div className="alt-language"><button onClick={() => setLanguage("es")} aria-pressed={language === "es"}>ESP</button><span>|</span><button onClick={() => setLanguage("ca")} aria-pressed={language === "ca"}>CAT</button><span>|</span><button onClick={() => setLanguage("en")} aria-pressed={language === "en"}>ENG</button></div><a className="alt-reserve-link" href={whatsapp} target="_blank" rel="noreferrer">{t.reserve}</a></div>
    </header>

    <section className="alt-hero" id="inicio"><div className="alt-hero-shade"/><div className="alt-hero-grain"/><div className="alt-hero-copy"><p className="alt-overline">{t.heroLine}</p><h1>{t.heroTitle}</h1><p className="alt-hero-sub">{t.heroSub}</p><a className="alt-red-button" href="/carta">{t.heroButton}</a></div><a className="alt-scroll" href="#casa"><span>↓</span>{t.arrow}</a><div className="alt-hero-side">VIC · BARCELONA · COLOMBIA</div></section>

    <section className="alt-about" id="casa"><div className="alt-section-label alt-reveal"><span>01</span>{t.homeEyebrow}</div><div className="alt-about-grid"><div className="alt-about-copy alt-reveal"><h2>{t.homeTitle}</h2><p>{t.homeText}</p><a className="alt-text-link" href="#visitanos">{t.nav[2]} <span>↗</span></a></div><div className="alt-about-photo alt-reveal"><span className="alt-photo-caption">GABI BAR RESTAURANTE · VIC</span></div></div></section>

    <section className="alt-feature"><div className="alt-feature-photo alt-reveal"><span>✳</span></div><div className="alt-feature-copy alt-reveal"><span className="alt-section-count">02 / GABI BAR</span><h2>{t.feature}</h2><p>{t.featureText}</p><div className="alt-tricolor"><i/><i/><i/></div></div></section>

    <section className="alt-food" id="sabores"><div className="alt-food-heading alt-reveal"><div><span className="alt-section-count">03 / GABI BAR</span><h2>{t.foodTitle}</h2></div><p>{t.foodText}</p></div><div className="alt-plate-grid">{plates.map((plate, index) => <article className={`alt-plate alt-reveal alt-plate-${index + 1}`} key={plate.title}><div className="alt-plate-art"><img src={plate.image} alt="" loading="lazy"/><i>✦</i></div><div className="alt-plate-copy"><div><h3>{plate.title}</h3><strong>{plate.price}</strong></div><p>{plate.text[language]}</p></div></article>)}</div><a className="alt-red-button alt-menu-button" href="/carta">{t.menu}<span>↗</span></a></section>

    <section className="alt-location" id="visitanos"><div className="alt-location-photo"/><div className="alt-location-card alt-reveal"><span className="alt-section-count">04 / VIC, CATALUNYA</span><p className="alt-overline">{t.placeEyebrow}</p><h2>{t.addressTitle}</h2><p className="alt-address">{t.address}</p><a className="alt-red-button" href="https://maps.google.com/?q=Carrer+Nou+7+08500+Vic+Barcelona" target="_blank" rel="noreferrer">{t.directions}<span>↗</span></a><hr/><span className="alt-section-count">{t.phoneLabel}</span><a className="alt-phone" href={`tel:${phone}`}>603 269 541</a></div></section>

    <section className="alt-contact"><span className="alt-contact-symbol">✳</span><p className="alt-overline">{t.contactEyebrow}</p><h2>{t.contactTitle}</h2><p>{t.contactText}</p><a className="alt-red-button" href={whatsapp} target="_blank" rel="noreferrer">{t.contactButton}<span>↗</span></a></section>

    <footer className="alt-footer"><a className="alt-brand" href="#inicio"><span className="alt-mark">G</span><span>GABI<br/>BAR</span></a><p>{t.footer}</p><div className="alt-footer-end"><a href="/carta">{t.menu}</a><small>© {new Date().getFullYear()} Gabi Bar Restaurante Vic</small></div></footer>
  </main>;
}
