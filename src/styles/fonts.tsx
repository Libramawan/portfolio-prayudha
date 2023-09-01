import { Playfair_Display, Montserrat, Roboto_Slab } from "next/font/google";

export const playfair_display = Playfair_Display({
  subsets: ["latin"],
  style: ["italic"],
  variable: "--font-playfair-display",
});

export const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const roboto_slab = Roboto_Slab({
  subsets: ["latin"],
  variable: "--font-roboto-slab",
});
