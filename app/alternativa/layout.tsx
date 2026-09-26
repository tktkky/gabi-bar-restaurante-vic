import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gabi Bar Restaurante Vic | Versión alternativa",
  description: "Una versión alternativa de Gabi Bar Restaurante Vic con cocina colombiana en Vic.",
};

export default function AlternativeLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
