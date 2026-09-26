import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "La carta | Gabi Bar Restaurante Vic",
  description:
    "Descubre los platos colombianos, antojitos, bebidas y cócteles de Gabi Bar Restaurante Vic.",
};

export default function MenuLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
