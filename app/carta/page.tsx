"use client";

import { useEffect, useState } from "react";
import { menu, type Language } from "../menu-data";
import { menuPhoto } from "../menu-images";

const phone = "603269541";
const whatsapp = "https://wa.me/34603269541?text=Hola%2C%20quiero%20hacer%20una%20reserva%20en%20Gabi%20Bar%20Restaurante%20Vic.";

const labels = {
  es: { menu: "La carta", intro: "Sabores colombianos para disfrutar a tu ritmo.", note: "Precios en euros · Pregunta por alérgenos", home: "Inicio", about: "Nuestra casa", contact: "Encuéntranos", reserve: "Reservar mesa", call: "Llamar", share: "Platos con sabor a casa, perfectos para compartir.", footer: "¿Se te ha antojado algo?", category: ["Comidas rápidas", "Picadas", "Antojitos colombianos", "Bebidas", "Cervezas", "Cócteles"] },
  ca: { menu: "La carta", intro: "Sabors colombians per gaudir al teu ritme.", note: "Preus en euros · Consulta els al·lèrgens", home: "Inici", about: "La nostra casa", contact: "Troba'ns", reserve: "Reservar taula", call: "Trucar", share: "Plats amb gust de casa, perfectes per compartir.", footer: "Ja et ve de gust alguna cosa?", category: ["Menjar ràpid", "Picades", "Mossegades colombianes", "Begudes", "Cerveses", "Còctels"] },
  en: { menu: "The menu", intro: "Colombian flavours, made to enjoy at your own pace.", note: "Prices in euros · Ask us about allergens", home: "Home", about: "Our place", contact: "Find us", reserve: "Book a table", call: "Call", share: "Comforting Colombian plates, made for sharing.", footer: "Craving something?", category: ["Quick bites", "Sharing platters", "Colombian favourites", "Drinks", "Beer", "Cocktails"] },
} as const;

const translatedTag = (tag: string, language: Language) => {
  if (tag === "Incluye bebida") return { es: "Incluye bebida", ca: "Inclou beguda", en: "Drink included" }[language];
  if (tag === "Para compartir") return { es: "Para compartir", ca: "Per compartir", en: "Made for sharing" }[language];
  return { es: "De la casa", ca: "De la casa", en: "House favourite" }[language];
};

export default function MenuPage() {
  const [language, setLanguage] = useState<Language>("es");
  const [activeCategory, setActiveCategory] = useState("rapidas");
  const t = labels[language];

  useEffect(() => {
    document.documentElement.lang = language;
    const cards = document.querySelectorAll<HTMLElement>(".menu-dish-card");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
      cards.forEach((card) => card.classList.add("is-visible"));
      return;
    }
    cards.forEach((card) => card.classList.add("scroll-reveal"));
    const revealObserver = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add("is-visible"); revealObserver.unobserve(entry.target); }
    }), { threshold: 0.14 });
    cards.forEach((card) => revealObserver.observe(card));

    const categoryObserver = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) setActiveCategory(entry.target.id);
    }), { rootMargin: "-24% 0px -68% 0px" });
    menu.forEach((group) => {
      const section = document.getElementById(group.id);
      if (section) categoryObserver.observe(section);
    });
    return () => { revealObserver.disconnect(); categoryObserver.disconnect(); };
  }, [language]);

  const jumpTo = (id: string) => {
    setActiveCategory(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return <main className="menu-page">
    <header className="site-header">
      <a className="brand" href="/" aria-label="Gabi Bar Restaurante Vic, inicio"><span className="brand-mark">G</span><span className="brand-name">GABI <i>BAR RESTAURANTE VIC</i></span></a>
      <nav className="desktop-nav" aria-label="Navegación principal"><a href="/">{t.home}</a><a href="/#nosotros">{t.about}</a><a href="/#visitanos">{t.contact}</a></nav>
      <div className="header-right"><div className="language-switch" aria-label="Idioma"><button onClick={() => setLanguage("es")} aria-pressed={language === "es"}>ES</button><button onClick={() => setLanguage("ca")} aria-pressed={language === "ca"}>CA</button><button onClick={() => setLanguage("en")} aria-pressed={language === "en"}>EN</button></div><a className="button button-small" href={whatsapp} target="_blank" rel="noreferrer">{t.reserve} <span>↗</span></a></div>
    </header>

    <section className="menu-page-intro">
      <div className="menu-intro-glow" aria-hidden="true"/><div className="menu-intro-copy"><p className="eyebrow"><span className="flag-dots"><i/><i/><i/></span> GABI BAR RESTAURANTE VIC</p><h1>{t.menu}<span>.</span></h1><p>{t.intro}</p></div>
      <div className="menu-intro-art" aria-hidden="true"><span className="menu-art-ring">✳</span><img className="menu-art-photo" src={menuPhoto("antojitos", "Arepa rellena")} alt=""/><span className="menu-art-spark">✦</span><span className="menu-art-ribbon">SABOR<br/>COLOMBIANO</span></div>
      <a className="menu-phone-chip" href={`tel:${phone}`}>☎ &nbsp;603 269 541</a>
    </section>

    <section className="menu-section menu-page-section" id="carta">
      <div className="menu-intro"><div><p className="eyebrow"><span className="eyebrow-dash"/> SABORES QUE SE QUEDAN</p><h2>{t.menu}<span className="title-period">.</span></h2><p>{t.share}</p></div><div className="menu-note"><span>✳</span>{t.note}</div></div>
      <div className="menu-layout">
        <aside className="category-rail" aria-label={t.menu}>{menu.map((group, index) => <button className={activeCategory === group.id ? "category active" : "category"} key={group.id} onClick={() => jumpTo(group.id)}><span className="category-index">0{index + 1}</span><span>{t.category[index]}</span><span className="category-icon">{group.icon}</span></button>)}<div className="rail-flourish">BUEN PROVECHO <span>✳</span></div></aside>
        <div className="menu-content">{menu.map((group, index) => <section id={group.id} className="menu-group" key={group.id}>
          <div className="group-heading"><div><span className="group-index">0{index + 1} <i>/</i> 0{menu.length}</span><h3>{t.category[index]}</h3></div><span className="group-icon">{group.icon}</span></div>
          <div className={`dish-grid ${group.items.length < 3 ? "compact-grid" : ""}`}>{group.items.map((item, itemIndex) => <article className="dish-card menu-dish-card" key={item.name} style={{ "--delay": `${(itemIndex % 4) * 70}ms` } as React.CSSProperties}>
            <div className={`dish-art art-${(index + itemIndex) % 5}`} aria-hidden="true"><img className="food-photo" src={menuPhoto(group.id, item.name)} alt="" loading="lazy"/><i className="food-spark">✦</i></div>
            <div className="dish-info">{item.tag && <span className="dish-tag">{translatedTag(item.tag, language)}</span>}<div className="dish-heading"><h4>{item.name}</h4><span className="dish-price">{item.price}</span></div><p>{item[language]}</p></div>
          </article>)}</div>
        </section>)}</div>
      </div>
    </section>

    <section className="menu-page-cta"><span className="cta-spark" aria-hidden="true">✳</span><p>{t.footer}</p><div><a className="button button-dark" href={whatsapp} target="_blank" rel="noreferrer">{t.reserve}<span>↗</span></a><a className="menu-call-link" href={`tel:${phone}`}>{t.call} · 603 269 541</a></div></section>
    <footer className="site-footer"><a className="brand footer-brand" href="/"><span className="brand-mark">G</span><span className="brand-name">GABI <i>BAR RESTAURANTE VIC</i></span></a><p>Sabor colombiano en el corazón de Vic.</p><a className="back-top" href="#carta">↑ <span>ARRIBA</span></a><small>© {new Date().getFullYear()} Gabi Bar Restaurante Vic</small></footer>
    <a className="mobile-booking" href={whatsapp} target="_blank" rel="noreferrer">{t.reserve} <span>↗</span></a>
  </main>;
}
