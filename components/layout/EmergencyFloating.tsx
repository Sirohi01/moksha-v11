"use client";
import React, { useState } from "react";
import { Megaphone, Phone, X, ShieldAlert } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function EmergencyFloating() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed bottom-6 right-6 z-[1100] flex flex-col items-end gap-4">
            {/* Expanded Menu */}
            <div className={cn(
                "flex flex-col items-end gap-3 mb-2 transition-all duration-300 origin-bottom scale-95 opacity-0 pointer-events-none",
                isOpen && "scale-100 opacity-100 pointer-events-auto shadow-2xl"
            )}>
                {/* Call Helpline */}
                <a
                    href="tel:+911800123456"
                    className="group flex items-center gap-3 bg-white border border-stone-200 p-2 rounded-2xl shadow-xl hover:bg-stone-50 transition-all hover:-translate-x-2"
                >
                    <span className="px-3 text-[10px] font-black uppercase tracking-widest text-stone-600">24/7 HELPLINE</span>
                    <div className="w-12 h-12 rounded-xl bg-[#1c1917] flex items-center justify-center text-white">
                        <Phone size={20} />
                    </div>
                </a>

                {/* Report a Body */}
                <Link
                    href="/report"
                    onClick={() => setIsOpen(false)}
                    className="group flex items-center gap-3 bg-white border border-stone-200 p-2 rounded-2xl shadow-xl hover:bg-stone-50 transition-all hover:-translate-x-2"
                >
                    <span className="px-3 text-[10px] font-black uppercase tracking-widest text-red-600">REPORT NOW</span>
                    <div className="w-12 h-12 rounded-xl bg-red-600 flex items-center justify-center text-white">
                        <Megaphone size={22} className="group-hover:rotate-12 transition-transform" />
                    </div>
                </Link>
            </div>

            {/* Main SOS Toggle */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={cn(
                    "w-14 h-14 rounded-3xl flex items-center justify-center shadow-xl transition-all duration-500 relative group overflow-hidden border-2",
                    isOpen
                        ? "bg-white text-stone-900 border-stone-200 rotate-90"
                        : "bg-stone-950 text-white hover:bg-red-600 border-red-600/20 hover:border-red-600 shadow-red-600/20"
                )}
                aria-label="Emergency Actions"
            >
                {/* Pulsing Aura */}
                {!isOpen && (
                    <div className="absolute inset-0 bg-red-600/30 rounded-full animate-ping pointer-events-none" />
                )}

                {isOpen ? (
                    <X size={24} className="transition-transform duration-500" />
                ) : (
                    <div className="flex flex-col items-center justify-center">
                        <ShieldAlert size={24} className="group-hover:scale-110 transition-transform" />
                        <span className="text-[7px] font-black uppercase tracking-tight mt-0.5">SOS</span>
                    </div>
                )}
            </button>
        </div>
    );
}
