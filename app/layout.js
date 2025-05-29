import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";



const outfit = Outfit({ subsets: ["latin"], weight: ["300", "400", "500"] });

export const metadata = {
  title: "ResQ-connect",
  description: "Roadside Assistance",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <head>
      </head>
      <body className={`${outfit.className}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
