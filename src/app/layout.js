import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Navbar from "@/components/layout/Navbar";
import FooterSection from "@/components/sections/FooterSection";
import "@/styles/animations.css";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-syne",
  subsets: ["latin"],
});

export const metadata = {
  title: "Zylxy Technologies — IT Services & Digital Training, Bangalore",
  description:
    "Building scalable software, AI solutions and digital platforms for growing businesses.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${plusJakartaSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#050e21]">
        <AnnouncementBar />
        <Navbar />
        {children}
        <FooterSection />
      </body>
    </html>
  );
}
