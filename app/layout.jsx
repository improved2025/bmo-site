import "./globals.css";
import localFont from "next/font/local";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SiteMotion from "@/components/SiteMotion";

const archivo = localFont({
  src: "./fonts/Archivo.ttf",
  variable: "--font-archivo",
  display: "swap",
});
const archivoBlack = localFont({
  src: "./fonts/ArchivoBlack.ttf",
  weight: "400",
  variable: "--font-archivo-black",
  display: "swap",
});

export const metadata = {
  title: "BMO LLC — General Contractors | MD, DC & VA",
  description:
    "BMO LLC is a family-owned general contracting firm building whole home renovations, additions, kitchens, bathrooms, and basements across Maryland, DC, and Virginia.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${archivo.variable} ${archivoBlack.variable}`}>
      <body>
        <SiteMotion />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
