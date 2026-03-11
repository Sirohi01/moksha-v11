"use client";
import {
    Facebook,
    Twitter,
    Instagram,
    Youtube,
    Linkedin,
    MessageCircle,
    ExternalLink,
    Camera
} from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

const socialLinks = [
    {
        name: "Facebook",
        icon: Facebook,
        url: process.env.NEXT_PUBLIC_SOCIAL_FACEBOOK || "https://facebook.com/mokshaseva",
        color: "hover:bg-blue-600",
    },
    {
        name: "X (Twitter)",
        icon: Twitter,
        url: process.env.NEXT_PUBLIC_SOCIAL_TWITTER || "https://x.com/mokshaseva",
        color: "hover:bg-black",
    },
    {
        name: "Instagram",
        icon: Instagram,
        url: process.env.NEXT_PUBLIC_SOCIAL_INSTAGRAM || "https://instagram.com/mokshaseva",
        color: "hover:bg-pink-600",
    },
    {
        name: "YouTube",
        icon: Youtube,
        url: process.env.NEXT_PUBLIC_SOCIAL_YOUTUBE || "https://youtube.com/@mokshaseva",
        color: "hover:bg-red-600",
    },
    {
        name: "LinkedIn",
        icon: Linkedin,
        url: process.env.NEXT_PUBLIC_SOCIAL_LINKEDIN || "https://linkedin.com/company/mokshaseva",
        color: "hover:bg-blue-700",
    },
];

export default function SocialFloating() {
    const whatsappNumber = process.env.NEXT_PUBLIC_SOCIAL_WHATSAPP?.replace(/\D/g, "") || "919773992516";
    const whatsappUrl = `https://wa.me/${whatsappNumber}`;

    return (
        <>
            {/* --- Left Side: WhatsApp Button --- */}
            <div className="fixed bottom-6 left-6 z-[1100] group">
                <div className="absolute -inset-2 bg-green-500/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
                <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-xl hover:shadow-green-500/40 transition-all duration-300 hover:scale-110 active:scale-95"
                    aria-label="Contact us on WhatsApp"
                >
                    <MessageCircle className="w-6 h-6 fill-white" strokeWidth={2} />

                    {/* Tooltip */}
                    <div className="absolute left-full ml-3 px-3 py-1.5 bg-stone-900/95 backdrop-blur-sm text-white text-xs font-bold rounded-xl opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none whitespace-nowrap border border-white/10 uppercase tracking-widest shadow-xl">
                        Chat on WhatsApp
                    </div>
                </a>
            </div>

            {/* --- Right Side: Social Media Sidebar --- */}
            <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
            {/* Gallery Button */}
                <Link
                    href="/gallery"
                    className="group relative flex items-center justify-center w-11 h-11 bg-[#f4c430] text-white rounded-xl shadow-lg border border-[#f4c430] transition-all duration-300 hover:-translate-x-1.5 hover:bg-[#eab308] hover:shadow-[#f4c430]/20"
                    aria-label="View Image Gallery"
                >
                    <Camera className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />

                    {/* Tooltip */}
                    <div className="absolute right-full mr-3 px-3 py-1.5 bg-stone-900/90 backdrop-blur-sm text-white text-xs font-semibold rounded-lg opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none whitespace-nowrap border border-white/10 uppercase tracking-widest">
                        GALLERY
                    </div>
                </Link>

                <div className="h-px bg-stone-200 mx-2" />
                                {socialLinks.map((social) => (
                    <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                            "group relative flex items-center justify-center w-11 h-11 bg-white/80 backdrop-blur-md border border-stone-200 text-stone-600 rounded-xl shadow-sm transition-all duration-300 hover:-translate-x-1.5 hover:text-white",
                            social.color
                        )}
                        aria-label={`Follow us on ${social.name}`}
                    >
                        <social.icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />

                        {/* Tooltip */}
                        <div className="absolute right-full mr-3 px-3 py-1.5 bg-stone-900/90 backdrop-blur-sm text-white text-xs font-medium rounded-lg opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none whitespace-nowrap border border-white/10 uppercase tracking-widest">
                            {social.name}
                        </div>
                    </a>
                ))}
            </div>
        </>
    );
}
