export type Language = "es" | "ca" | "en";
export type MenuItem = { name: string; price: string; es: string; ca: string; en: string; tag?: string };
export type MenuGroup = { id: string; es: string; ca: string; en: string; icon: string; items: MenuItem[] };


export const menu: MenuGroup[] = [
  { id: "rapidas", es: "Comidas rápidas", ca: "Menjar ràpid", en: "Quick bites", icon: "✳", items: [
    { name: "Salchiford", price: "10 / 15 / 20 €", es: "Salchicha, patatas, batavia, chicharrón, carne desmechada, queso, maicitos y salsas.", ca: "Salsitxa, patates, batàvia, cotna cruixent, carn esfilagarsada, formatge, blat de moro i salses.", en: "Sausage, fries, lettuce, crispy pork, shredded beef, cheese, corn and sauces.", tag: "De la casa" },
    { name: "Pepapig", price: "10 / 15 / 20 €", es: "Salchicha, patatas, batavia, queso madurito, maicitos, beicon y salsas.", ca: "Salsitxa, patates, batàvia, formatge madur, blat de moro, bacó i salses.", en: "Sausage, fries, lettuce, mature cheese, corn, bacon and sauces." },
    { name: "Salchi dulce", price: "10 / 15 / 20 €", es: "Salchicha, patatas, batavia, carne caramelizada, maicitos, queso y salsas.", ca: "Salsitxa, patates, batàvia, carn caramel·litzada, blat de moro, formatge i salses.", en: "Sausage, fries, lettuce, caramelised beef, corn, cheese and sauces." },
    { name: "Salchi costilla", price: "10 / 15 / 20 €", es: "Salchicha, patatas, batavia, costilla BBQ, queso y salsas.", ca: "Salsitxa, patates, batàvia, costella BBQ, formatge i salses.", en: "Sausage, fries, lettuce, BBQ ribs, cheese and sauces." },
    { name: "Hamburguesa de res", price: "11 €", es: "Carne de res, cebolla caramelizada, tomate, beicon, queso, batavia, salsas, patatas y bebida.", ca: "Vedella, ceba caramel·litzada, tomàquet, bacó, formatge, batàvia, salses, patates i beguda.", en: "Beef, caramelised onion, tomato, bacon, cheese, lettuce, sauces, fries and a drink.", tag: "Incluye bebida" },
    { name: "Hamburguesa de pollo", price: "11 €", es: "Pollo, batavia, tomate, cebolla, beicon caramelizado, patatas, salsas y bebida.", ca: "Pollastre, batàvia, tomàquet, ceba, bacó caramel·litzat, patates, salses i beguda.", en: "Chicken, lettuce, tomato, onion, caramelised bacon, fries, sauces and a drink.", tag: "Incluye bebida" },
    { name: "Costilla BBQ con patatas", price: "10 €", es: "Costilla BBQ con patatas fritas.", ca: "Costella BBQ amb patates fregides.", en: "BBQ ribs with fries.", tag: "Incluye bebida" },
    { name: "Lasaña de maduro", price: "10 €", es: "Lasaña preparada con plátano maduro.", ca: "Lasanya preparada amb plàtan madur.", en: "Lasagne made with ripe plantain.", tag: "Incluye bebida" },
    { name: "Maduro fantasía", price: "9 €", es: "Carne desmechada, queso, chicharrón, maicitos, batavia y salsas.", ca: "Carn esfilagarsada, formatge, cotna cruixent, blat de moro, batàvia i salses.", en: "Shredded beef, cheese, crispy pork, corn, lettuce and sauces." },
    { name: "Patacón relleno", price: "9 €", es: "Carne desmechada, queso, batavia, maicitos, salsas y chicharrón.", ca: "Carn esfilagarsada, formatge, batàvia, blat de moro, salses i cotna cruixent.", en: "Shredded beef, cheese, lettuce, corn, sauces and crispy pork." },
    { name: "Bofe", price: "8 €", es: "Bofe preparado al estilo de la casa.", ca: "Bofe preparat a l'estil de la casa.", en: "Lung, prepared house style." },
  ]},
  { id: "picadas", es: "Picadas", ca: "Picades", en: "Sharing platters", icon: "◉", items: [
    { name: "Picada", price: "20 / 30 €", es: "Patatas, chicharrón, pechuga, res, cerdo, chorizo, bofe, alitas, maduro, patacón, yuca y arepa.", ca: "Patates, cotna cruixent, pit de pollastre, vedella, porc, xoriço, bofe, aletes, plàtan madur, patacó, iuca i arepa.", en: "Fries, crispy pork, chicken breast, beef, pork, chorizo, lung, wings, ripe plantain, patacón, yuca and arepa.", tag: "Para compartir" },
  ]},
  { id: "antojitos", es: "Antojitos colombianos", ca: "Mossegades colombianes", en: "Colombian favourites", icon: "✺", items: [
    { name: "Chicharrón", price: "7 €", es: "Con patacón, yuca y arepa.", ca: "Amb patacó, iuca i arepa.", en: "With patacón, yuca and arepa." },
    { name: "Empanadas", price: "2 €", es: "Empanada colombiana.", ca: "Empanada colombiana.", en: "Colombian-style empanada." },
    { name: "Papa rellena", price: "3 €", es: "Patata rellena al estilo colombiano.", ca: "Patata farcida a l'estil colombià.", en: "Colombian-style stuffed potato." },
    { name: "Aborrajado", price: "3 €", es: "Plátano maduro con queso, rebozado y dorado.", ca: "Plàtan madur amb formatge, arrebossat i daurat.", en: "Ripe plantain with cheese, battered and golden." },
    { name: "Marranitas", price: "3 €", es: "Bocados de plátano con chicharrón.", ca: "Mossegades de plàtan amb cotna cruixent.", en: "Plantain bites with crispy pork." },
    { name: "Arepa rellena", price: "5 €", es: "Arepa colombiana rellena.", ca: "Arepa colombiana farcida.", en: "Stuffed Colombian arepa." },
    { name: "Arepa de huevo", price: "3 €", es: "Arepa rellena de huevo.", ca: "Arepa farcida d'ou.", en: "Arepa filled with egg." },
    { name: "Chorizo con arepa y yuca", price: "5 €", es: "Chorizo acompañado de arepa y yuca.", ca: "Xoriço acompanyat d'arepa i iuca.", en: "Chorizo served with arepa and yuca." },
  ]},
  { id: "bebidas", es: "Bebidas", ca: "Begudes", en: "Drinks", icon: "◌", items: [
    { name: "Jugos naturales", price: "3,50 €", es: "Mango, maracuyá, mora, lulo, guanábana, coco o piña.", ca: "Mango, maracujà, móra, lulo, guaiaba, coco o pinya.", en: "Mango, passion fruit, blackberry, lulo, soursop, coconut or pineapple." },
    { name: "Zumo de naranja", price: "3 €", es: "Zumo de naranja.", ca: "Suc de taronja.", en: "Orange juice." },
    { name: "Coca-Cola", price: "2,50 €", es: "Coca-Cola.", ca: "Coca-Cola.", en: "Coca-Cola." },
    { name: "Coca-Cola Zero · Fanta · Nestea · Aquarius · Agua grande", price: "2 €", es: "Coca-Cola Zero, Fanta naranja o limón, Nestea, Aquarius o agua grande.", ca: "Coca-Cola Zero, Fanta de taronja o llimona, Nestea, Aquarius o aigua gran.", en: "Coca-Cola Zero, orange or lemon Fanta, Nestea, Aquarius or large water." },
    { name: "Pony Malta", price: "2,50 €", es: "Bebida de malta colombiana.", ca: "Beguda de malt colombiana.", en: "Colombian malt drink." },
    { name: "Vichy", price: "2,50 €", es: "Agua con gas.", ca: "Aigua amb gas.", en: "Sparkling water." },
    { name: "Agua pequeña", price: "1,50 €", es: "Agua mineral.", ca: "Aigua mineral.", en: "Still water." },
  ]},
  { id: "cervezas", es: "Cervezas", ca: "Cerveses", en: "Beer", icon: "⌁", items: [
    { name: "Estrella · Heineken · Corona · Clarita · Voll-Damm · Budweiser · Desperados", price: "2,50 €", es: "Cervezas.", ca: "Cerveses.", en: "Beers." },
    { name: "Estrella de caña · Turia de caña", price: "2,30 €", es: "Caña.", ca: "Canya.", en: "Draft beer." },
  ]},
  { id: "cocteles", es: "Cócteles", ca: "Còctels", en: "Cocktails", icon: "✧", items: [
    { name: "Mojito · Piña Colada · Maracuyá Sour · Gin Tonic · Cuba Libre · Daiquirí de fresa · Michelada", price: "7 €", es: "Elige tu cóctel favorito.", ca: "Tria el teu còctel preferit.", en: "Choose your favourite cocktail." },
  ]},
];

