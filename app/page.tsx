"use client";

import { useEffect, useState } from "react";
import type { Language } from "./menu-data";

const phone = "603269541";
const whatsapp = "https://wa.me/34603269541?text=Hola%2C%20quiero%20hacer%20una%20reserva%20en%20Gabi%20Bar%20Restaurante%20Vic.";
const words = {
  es: { navMenu: "La carta", navStory: "Nuestra casa", navVisit: "Encuéntranos", book: "Reservar mesa", heroKicker: "UN PEDACITO DE COLOMBIA EN VIC", heroTitle: "Sabor que\nte hace volver.", heroBody: "Recetas colombianas, platos para compartir y ese sabor de casa. Ven con hambre, nosotros ponemos lo demás.", menuTitle: "La carta", menuLead: "Hecho para disfrutar sin prisa. ¿Qué se te antoja hoy?", note: "Precios en euros · Pregunta por alérgenos", storyEyebrow: "SABOR CON RAÍCES", storyTitle: "De Colombia,\ncon mucho cariño.", storyText: "Comida para compartir, sabores que despiertan recuerdos y una mesa siempre lista para recibirte. Así nos gusta sentirnos en Gabi Bar Restaurante Vic.", visit: "Ven a vernos", address: "Carrer Nou, 7 · 08500 Vic, Barcelona", hours: "Consulta el horario por teléfono", call: "Llámanos", directions: "Cómo llegar", reserveText: "¿Ya tienes hambre?", reserveSub: "Llama o escríbenos para reservar tu mesa.", footer: "Sabor colombiano en el corazón de Vic." },
  ca: { navMenu: "La carta", navStory: "La nostra casa", navVisit: "Troba'ns", book: "Reservar taula", heroKicker: "UN TROSSET DE COLÒMBIA A VIC", heroTitle: "Un sabor que\net fa tornar.", heroBody: "Receptes colombianes, plats per compartir i aquell gust de casa. Vine amb gana, nosaltres ens encarreguem de la resta.", menuTitle: "La carta", menuLead: "Fet per gaudir-ne sense pressa. Què et ve de gust avui?", note: "Preus en euros · Consulta els al·lèrgens", storyEyebrow: "SABOR AMB ARRELS", storyTitle: "De Colòmbia,\namb molta estima.", storyText: "Menjar per compartir, sabors que desperten records i una taula sempre a punt per rebre't. Així ens agrada sentir-nos a Gabi Bar Restaurante Vic.", visit: "Vine a veure'ns", address: "Carrer Nou, 7 · 08500 Vic, Barcelona", hours: "Consulta l'horari per telèfon", call: "Truca'ns", directions: "Com arribar-hi", reserveText: "Ja tens gana?", reserveSub: "Truca'ns o escriu-nos per reservar taula.", footer: "Sabor colombià al cor de Vic." },
  en: { navMenu: "Menu", navStory: "Our place", navVisit: "Find us", book: "Book a table", heroKicker: "A LITTLE TASTE OF COLOMBIA IN VIC", heroTitle: "Flavours\nworth coming back for.", heroBody: "Colombian recipes, plates made for sharing and that taste of home. Bring your appetite; we’ll take care of the rest.", menuTitle: "The menu", menuLead: "Made to be enjoyed slowly. What are you craving today?", note: "Prices in euros · Ask us about allergens", storyEyebrow: "ROOTED IN FLAVOUR", storyTitle: "From Colombia,\nwith lots of love.", storyText: "Food to share, flavours that bring back memories and a table always ready to welcome you. That’s how we like it at Gabi Bar Restaurante Vic.", visit: "Come say hello", address: "Carrer Nou, 7 · 08500 Vic, Barcelona", hours: "Call to check opening hours", call: "Call us", directions: "Get directions", reserveText: "Feeling hungry?", reserveSub: "Call or message us to book your table.", footer: "Colombian flavour in the heart of Vic." },
} as const;

export default function Home() {
  const [language, setLanguage] = useState<Language>("es");
  const t = words[language];

  useEffect(() => {
    document.documentElement.lang = language;
    const targets = document.querySelectorAll<HTMLElement>(".story-copy, .visit-card");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
      targets.forEach((target) => target.classList.add("is-visible"));
      return;
    }
    targets.forEach((target) => target.classList.add("reveal"));
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); }
    }), { threshold: 0.12 });
    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);



  return <main>
    <header className="site-header">
      <a className="brand" href="#inicio" aria-label="Gabi Bar Restaurante Vic, inicio"><span className="brand-mark">G</span><span className="brand-name">GABI <i>BAR RESTAURANTE VIC</i></span></a>
      <nav className="desktop-nav" aria-label="Navegación principal"><a href="/carta">{t.navMenu}</a><a href="#nosotros">{t.navStory}</a><a href="#visitanos">{t.navVisit}</a></nav>
      <div className="header-right"><div className="language-switch" aria-label="Idioma"><button onClick={() => setLanguage("es")} aria-pressed={language === "es"}>ES</button><button onClick={() => setLanguage("ca")} aria-pressed={language === "ca"}>CA</button><button onClick={() => setLanguage("en")} aria-pressed={language === "en"}>EN</button></div><a className="button button-small" href={whatsapp} target="_blank" rel="noreferrer">{t.book} <span>↗</span></a></div>
    </header>

    <section className="hero" id="inicio">
      <div className="hero-glow glow-one"/><div className="hero-glow glow-two"/>
      <div className="hero-copy">
        <p className="eyebrow"><span className="flag-dots"><i/><i/><i/></span>{t.heroKicker}</p>
        <h1>{t.heroTitle}</h1>
        <p className="hero-description">{t.heroBody}</p>
        <div className="hero-actions"><a className="button button-dark" href="/carta">{t.menuTitle}<span>↗</span></a><a className="phone-link" href={`tel:${phone}`}>☎ &nbsp;{phone}</a></div>
        <div className="hero-caption"><span className="caption-star">✳</span><span>COCINA COLOMBIANA <b>·</b> VIC, CATALUNYA</span></div>
      </div>
      <div className="hero-visual" aria-label="Plato colombiano para compartir">
        <div className="photo-frame hero-photo"><div className="photo-wash"/><span className="photo-stamp">SABOR<br/>DE CASA</span></div>
        <div className="floating-note"><span className="note-sparkle">✦</span><div><small>HECHO PARA</small><strong>compartir</strong></div></div>
        <div className="hero-side-label">COLOMBIA <span>✳</span> VIC</div>
      </div>
      <a href="/carta" className="scroll-cue" aria-label="Ver la carta"><span>↓</span></a>
    </section>

    <section className="story-section" id="nosotros"><div className="story-photo-wrap"><div className="photo-frame story-photo"><div className="photo-wash"/><span className="story-seal">BUENO<br/>CON<br/>GANAS</span></div><span className="photo-annotation">UN LUGAR PARA REUNIRSE · DESDE VIC CON AMOR</span></div><div className="story-copy"><p className="eyebrow"><span className="flag-dots"><i/><i/><i/></span>{t.storyEyebrow}</p><h2>{t.storyTitle}</h2><p>{t.storyText}</p><a className="underlined-link" href={whatsapp} target="_blank" rel="noreferrer">{t.book}<span>↗</span></a><div className="story-ornament">✳</div></div></section>

    <section className="visit-section" id="visitanos"><div className="visit-top"><div><p className="eyebrow"><span className="eyebrow-dash"/>{t.visit}</p><h2>Gabi Bar<br/><em>Restaurante Vic</em></h2></div><div className="visit-aside">{t.reserveText}<br/><span>{t.reserveSub}</span></div></div><div className="visit-grid"><div className="visit-card visit-address"><span className="visit-number">01 / VIC</span><div className="visit-icon">⌖</div><h3>{t.navVisit}</h3><p>{t.address}</p><a href="https://maps.google.com/?q=Carrer+Nou+7+08500+Vic+Barcelona" target="_blank" rel="noreferrer">{t.directions} <span>↗</span></a></div><div className="visit-card visit-contact"><span className="visit-number">02 / CONTACTO</span><div className="visit-icon">✆</div><h3>{t.call}</h3><p className="contact-phone">603 269 541</p><span className="hours-note">{t.hours}</span><a href={`tel:${phone}`}>{t.call} <span>↗</span></a></div><div className="visit-card visit-booking"><span className="visit-number">03 / RESERVAS</span><div className="visit-icon">✳</div><h3>{t.book}</h3><p>{t.reserveSub}</p><a href={whatsapp} target="_blank" rel="noreferrer">WhatsApp <span>↗</span></a></div></div></section>

    <footer className="site-footer"><a className="brand footer-brand" href="#inicio"><span className="brand-mark">G</span><span className="brand-name">GABI <i>BAR RESTAURANTE VIC</i></span></a><p>{t.footer}</p><a className="back-top" href="#inicio">↑ <span>ARRIBA</span></a><small>© {new Date().getFullYear()} Gabi Bar Restaurante Vic</small></footer>
    <a className="mobile-booking" href={whatsapp} target="_blank" rel="noreferrer">{t.book} <span>↗</span></a>
  </main>;
}
