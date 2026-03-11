"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Elements";
import { Heart, ShieldCheck, Mail, Phone, ChevronRight, FileText, User, Building, Download } from "lucide-react";
import Button from "@/components/ui/Button";

export default function RequestInfoPage() {
    const [submitted, setSubmitted] = useState(false);
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        organization: "",
        interest: "",
        message: ""
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <main className="min-h-screen bg-stone-50 flex items-center justify-center py-20">
                <Container>
                    <div className="max-w-2xl mx-auto bg-white rounded-[3rem] p-12 md:p-20 text-center border-4 border-[#7ab800] shadow-2xl">
                        <div className="w-24 h-24 rounded-full bg-[#7ab800] flex items-center justify-center mx-auto mb-8">
                            <ShieldCheck className="text-white" size={48} />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-stone-900 mb-6 leading-none">REQUEST RECEIVED!</h2>
                        <p className="text-stone-600 font-medium text-lg leading-relaxed mb-8">
                            Thank you for your interest in Legacy Giving. Our team will send you the complete information pack within 24 hours.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <Link href="/legacy-giving">
                                <Button className="bg-stone-900 text-white px-10 py-5 font-black uppercase tracking-widest">BACK TO LEGACY GIVING</Button>
                            </Link>
                            <button onClick={() => setSubmitted(false)} className="bg-white border-2 border-stone-200 text-stone-900 px-10 py-5 rounded-full font-black uppercase tracking-widest text-[12px] hover:border-[#7ab800] transition-all">
                                SUBMIT ANOTHER REQUEST
                            </button>
                        </div>
                    </div>
                </Container>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-stone-50">
            {/* Hero Section */}
            <section className="bg-stone-900 text-white py-24 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />
                <Container>
                    <div className="max-w-3xl">
                        <div className="inline-block px-4 py-1.5 rounded-full bg-[#7ab800]/10 border border-[#7ab800]/20 mb-6">
                            <p className="text-[#7ab800] font-black text-[10px] uppercase tracking-[0.4em] leading-none">LEGACY INFORMATION</p>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.85] mb-8">REQUEST <span className="text-[#7ab800]">INFO PACK</span></h1>
                        <p className="text-stone-400 text-lg md:text-xl font-medium leading-relaxed">
                            Get detailed information about our Legacy Giving programs, including legal documentation, 
                            tax benefits, and how your contribution will create lasting impact.
                        </p>
                    </div>
                </Container>
            </section>

            {/* Form Section */}
            <section className="py-20">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-12">
                            {/* Left Side - Info */}
                            <div>
                                <h2 className="text-3xl font-black uppercase tracking-tighter text-stone-900 mb-8 leading-none">WHAT YOU&apos;LL <span className="text-[#7ab800]">RECEIVE</span></h2>
                                <div className="space-y-6">
                                    {[
                                        { icon: FileText, title: "Complete Legacy Guide", desc: "40-page comprehensive guide on all legacy giving options" },
                                        { icon: ShieldCheck, title: "Legal Templates", desc: "Sample will clauses and bequest language reviewed by lawyers" },
                                        { icon: Download, title: "Tax Benefits Document", desc: "Detailed breakdown of 80G exemptions and estate planning" },
                                        { icon: Heart, title: "Impact Stories", desc: "Real stories of how legacy gifts have transformed lives" }
                                    ].map((item, i) => (
                                        <div key={i} className="flex gap-4 p-6 bg-white rounded-2xl border border-stone-100 hover:border-[#7ab800]/30 transition-all">
                                            <div className="w-12 h-12 rounded-xl bg-[#7ab800]/10 flex items-center justify-center shrink-0">
                                                <item.icon className="text-[#7ab800]" size={24} />
                                            </div>
                                            <div>
                                                <h3 className="font-black text-sm uppercase tracking-tight text-stone-900 mb-1">{item.title}</h3>
                                                <p className="text-stone-500 text-xs leading-relaxed">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-12 p-8 bg-[#7ab800] rounded-[2rem] text-white">
                                    <h3 className="font-black text-xl uppercase tracking-tighter mb-4">NEED TO TALK?</h3>
                                    <p className="text-white/80 text-sm mb-6 leading-relaxed">Our Legacy Giving team is available for confidential consultations.</p>
                                    <div className="space-y-3">
                                        <a href="tel:+911800123456" className="flex items-center gap-3 text-white hover:text-stone-900 transition-colors">
                                            <Phone size={16} />
                                            <span className="font-bold text-sm">1800-123-456</span>
                                        </a>
                                        <a href="mailto:legacy@mokshaseva.org" className="flex items-center gap-3 text-white hover:text-stone-900 transition-colors">
                                            <Mail size={16} />
                                            <span className="font-bold text-sm">legacy@mokshaseva.org</span>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Right Side - Form */}
                            <div className="bg-white rounded-[3rem] p-8 md:p-12 border-2 border-stone-100 shadow-xl">
                                <h2 className="text-2xl font-black uppercase tracking-tighter text-stone-900 mb-8 leading-none">FILL YOUR <span className="text-[#7ab800]">DETAILS</span></h2>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label className="block text-stone-700 font-black text-[10px] uppercase tracking-widest mb-2">FULL NAME *</label>
                                        <input
                                            type="text"
                                            required
                                            value={form.name}
                                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                                            className="w-full px-6 py-4 rounded-xl border-2 border-stone-200 focus:border-[#7ab800] focus:ring-4 focus:ring-[#7ab800]/10 outline-none transition-all font-medium"
                                            placeholder="Enter your full name"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-stone-700 font-black text-[10px] uppercase tracking-widest mb-2">EMAIL ADDRESS *</label>
                                        <input
                                            type="email"
                                            required
                                            value={form.email}
                                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                                            className="w-full px-6 py-4 rounded-xl border-2 border-stone-200 focus:border-[#7ab800] focus:ring-4 focus:ring-[#7ab800]/10 outline-none transition-all font-medium"
                                            placeholder="your.email@example.com"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-stone-700 font-black text-[10px] uppercase tracking-widest mb-2">PHONE NUMBER *</label>
                                        <input
                                            type="tel"
                                            required
                                            value={form.phone}
                                            onChange={(e) => setForm({ ...form, phone: e.target.value })}
                                            className="w-full px-6 py-4 rounded-xl border-2 border-stone-200 focus:border-[#7ab800] focus:ring-4 focus:ring-[#7ab800]/10 outline-none transition-all font-medium"
                                            placeholder="+91 98765 43210"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-stone-700 font-black text-[10px] uppercase tracking-widest mb-2">ORGANIZATION (OPTIONAL)</label>
                                        <input
                                            type="text"
                                            value={form.organization}
                                            onChange={(e) => setForm({ ...form, organization: e.target.value })}
                                            className="w-full px-6 py-4 rounded-xl border-2 border-stone-200 focus:border-[#7ab800] focus:ring-4 focus:ring-[#7ab800]/10 outline-none transition-all font-medium"
                                            placeholder="Company or Trust name"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-stone-700 font-black text-[10px] uppercase tracking-widest mb-2">AREA OF INTEREST *</label>
                                        <select
                                            required
                                            value={form.interest}
                                            onChange={(e) => setForm({ ...form, interest: e.target.value })}
                                            className="w-full px-6 py-4 rounded-xl border-2 border-stone-200 focus:border-[#7ab800] focus:ring-4 focus:ring-[#7ab800]/10 outline-none transition-all font-medium"
                                        >
                                            <option value="">Select an option</option>
                                            <option value="will">Legacy in Wills</option>
                                            <option value="endowment">Endowment Giving</option>
                                            <option value="family">Family Legacy Fund</option>
                                            <option value="property">Property Bequest</option>
                                            <option value="general">General Information</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-stone-700 font-black text-[10px] uppercase tracking-widest mb-2">MESSAGE (OPTIONAL)</label>
                                        <textarea
                                            value={form.message}
                                            onChange={(e) => setForm({ ...form, message: e.target.value })}
                                            rows={4}
                                            className="w-full px-6 py-4 rounded-xl border-2 border-stone-200 focus:border-[#7ab800] focus:ring-4 focus:ring-[#7ab800]/10 outline-none transition-all font-medium resize-none"
                                            placeholder="Any specific questions or requirements..."
                                        />
                                    </div>

                                    <Button
                                        type="submit"
                                        className="w-full bg-[#7ab800] hover:bg-[#5b8a00] text-white py-5 font-black uppercase tracking-widest shadow-xl"
                                    >
                                        REQUEST INFO PACK
                                    </Button>

                                    <p className="text-stone-400 text-[10px] text-center uppercase tracking-widest leading-relaxed">
                                        Your information is confidential and will never be shared with third parties.
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </main>
    );
}
