import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gabi Bar Restaurante Vic | Sabor colombiano en Vic",
  description:
    "Descubre la carta colombiana de Gabi Bar Restaurante Vic, en Carrer Nou 7. Consulta el menú, reserva mesa por WhatsApp o llámanos.",
  openGraph: {
    title: "Gabi Bar Restaurante Vic | Sabor colombiano en Vic",
    description: "Comida colombiana en Vic. Consulta la carta y reserva mesa.",
    locale: "es_ES",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
