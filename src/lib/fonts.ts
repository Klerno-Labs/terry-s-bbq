import { Rye, Roboto, Permanent_Marker } from "next/font/google";

export const rye = Rye({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-rye",
  display: "swap",
});

export const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
});

export const permanentMarker = Permanent_Marker({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-marker",
  display: "swap",
});