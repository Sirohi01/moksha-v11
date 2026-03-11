import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SocialFloating from "@/components/layout/SocialFloating";
import EmergencyFloating from "@/components/layout/EmergencyFloating";
import ChatBot from "@/components/layout/ChatBot";

export const metadata: Metadata = {
  title: {
    default: "Moksha Seva — Dignity in Departure",
    template: "%s | Moksha Seva",
  },
  description:
    "Moksha Seva provides dignified cremation services for unclaimed bodies, homeless individuals, and poor families across India. Transparency, compassion, and service.",
  keywords: ["cremation", "unclaimed bodies", "humanitarian", "NGO", "India", "dignity"],
  openGraph: {
    title: "Moksha Seva — Dignity in Departure",
    description: "Providing dignified cremation services for unclaimed bodies and poor families.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen flex flex-col bg-cream-100">
        <Navbar />
        <main className="flex-1" id="main-content">
          {children}
        </main>
        <SocialFloating />
        <EmergencyFloating />
        <ChatBot />
        <Footer />
      </body>
    </html>
  );
}
