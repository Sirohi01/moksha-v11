"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Elements";
import { Users, ShieldCheck, Mail, Phone, FileText, Award, Briefcase, GraduationCap, ArrowLeft } from "lucide-react";
import Button from "@/components/ui/Button";

export default function ApplyToBoardPage() {
    const [submitted, setSubmitted] = useState(false);
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        location: "",
        expertise: "",
        experience: "",
        education: "",
        motivation: "",
        availability: "",
        references: ""
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        // Backend API call would go here
    };

    if (submitted) {
        return (
            <main className="min-h-screen bg-stone-50 flex items-center justify-center py-20">
                <Container>
                    <div className="max-w-2xl mx-auto bg-white rounded-[3rem] p-12 md:p-20 text-center border-4 border-[#7ab800] shadow-2xl">
                        <div className="w-24 h-24 rounded-full bg-[#7ab800] flex items-center justify-center mx-auto mb-8">
                            <ShieldCheck className="text-white" size={48} />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-stone-900 mb-6 leading-none">APPLICATION RECEIVED!</h2>
                        <p className="text-stone-600 font-medium text-lg leading-relaxed mb-8">
                            Thank you for your interest in joining our Advisory Board. Our team will review your application 
                            and contact you within 7-10 business days for the next steps.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <Link href="/board">
                                <Button className="bg-stone-900 text-white px-10 py-5 font-black uppercase tracking-widest">
                                    BACK TO BOARD
                                </Button>
                            </Link>
                            <button 
                                onClick={() => setSubmitted(false)} 
                                className="bg-white border-2 border-stone-200 text-stone-900 px-10 py-5 rounded-full font-black uppercase tracking-widest text-[12px] hover:border-[#7ab800] transition-all"
                            >
                                SUBMIT ANOTHER APPLICATION
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
                    <Link href="/board" className="inline-flex items-center gap-2 text-stone-400 hover:text-[#7ab800] transition-colors mb-8 font-black text-xs uppercase tracking-widest">
                        <ArrowLeft size={16} /> BACK TO BOARD
                    </Link>
                    <div className="max-w-3xl">
                        <div className="inline-block px-4 py-1.5 rounded-full bg-[#7ab800]/10 border border-[#7ab800]/20 mb-6">
                            <p className="text-[#7ab800] font-black text-[10px] uppercase tracking-[0.4em] leading-none">JOIN OUR LEADERSHIP</p>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.85] mb-8">APPLY TO <span className="text-[#7ab800]">ADVISORY BOARD</span></h1>
                        <p className="text-stone-400 text-lg md:text-xl font-medium leading-relaxed">
                            We are looking for passionate experts in law, medicine, spirituality, and social work 
                            to help us scale our mission to 100+ cities across India.
                        </p>
                    </div>
                </Container>
            </section>

            {/* Form Section */}
            <section className="py-20">
                <Container>
                    <div className="max-w-5xl mx-auto">
                        <div className="grid lg:grid-cols-3 gap-12">
                            {/* Left Side - Requirements */}
                            <div className="lg:col-span-1">
                                <div className="sticky top-8 space-y-8">
                                    <div>
                                        <h2 className="text-2xl font-black uppercase tracking-tighter text-stone-900 mb-6 leading-none">WE ARE <span className="text-[#7ab800]">LOOKING FOR</span></h2>
                                        <div className="space-y-4">
                                            {[
                                                { icon: Award, title: "Expertise", desc: "10+ years in relevant field" },
                                                { icon: Users, title: "Leadership", desc: "Proven track record" },
                                                { icon: ShieldCheck, title: "Integrity", desc: "Ethical & transparent" },
                                                { icon: Briefcase, title: "Commitment", desc: "4-6 hours per month" }
                                            ].map((item, i) => (
                                                <div key={i} className="flex gap-4 p-4 bg-white rounded-xl border border-stone-100">
                                                    <div className="w-10 h-10 rounded-lg bg-[#7ab800]/10 flex items-center justify-center shrink-0">
                                                        <item.icon className="text-[#7ab800]" size={20} />
                                                    </div>
                                                    <div>
                                                        <h3 className="font-black text-xs uppercase tracking-tight text-stone-900 mb-1">{item.title}</h3>
                                                        <p className="text-stone-500 text-xs leading-relaxed">{item.desc}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="p-6 bg-amber-50 border-2 border-amber-200 rounded-2xl">
                                        <p className="text-amber-800 text-sm font-medium leading-relaxed">
                                            <strong className="font-black">Note:</strong> Board positions are voluntary and unpaid. 
                                            We seek individuals driven by mission, not compensation.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Right Side - Form */}
                            <div className="lg:col-span-2 bg-white rounded-[3rem] p-8 md:p-12 border-2 border-stone-100 shadow-xl">
                                <h2 className="text-2xl font-black uppercase tracking-tighter text-stone-900 mb-8 leading-none">APPLICATION <span className="text-[#7ab800]">FORM</span></h2>
                                
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {/* Personal Information */}
                                    <div className="space-y-6">
                                        <h3 className="text-sm font-black uppercase tracking-widest text-stone-400 border-b border-stone-100 pb-2">PERSONAL INFORMATION</h3>
                                        
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

                                        <div className="grid md:grid-cols-2 gap-6">
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
                                        </div>

                                        <div>
                                            <label className="block text-stone-700 font-black text-[10px] uppercase tracking-widest mb-2">CURRENT LOCATION *</label>
                                            <input
                                                type="text"
                                                required
                                                value={form.location}
                                                onChange={(e) => setForm({ ...form, location: e.target.value })}
                                                className="w-full px-6 py-4 rounded-xl border-2 border-stone-200 focus:border-[#7ab800] focus:ring-4 focus:ring-[#7ab800]/10 outline-none transition-all font-medium"
                                                placeholder="City, State"
                                            />
                                        </div>
                                    </div>

                                    {/* Professional Background */}
                                    <div className="space-y-6 pt-6">
                                        <h3 className="text-sm font-black uppercase tracking-widest text-stone-400 border-b border-stone-100 pb-2">PROFESSIONAL BACKGROUND</h3>
                                        
                                        <div>
                                            <label className="block text-stone-700 font-black text-[10px] uppercase tracking-widest mb-2">AREA OF EXPERTISE *</label>
                                            <select
                                                required
                                                value={form.expertise}
                                                onChange={(e) => setForm({ ...form, expertise: e.target.value })}
                                                className="w-full px-6 py-4 rounded-xl border-2 border-stone-200 focus:border-[#7ab800] focus:ring-4 focus:ring-[#7ab800]/10 outline-none transition-all font-medium"
                                            >
                                                <option value="">Select your expertise</option>
                                                <option value="legal">Legal & Compliance</option>
                                                <option value="medical">Medical & Healthcare</option>
                                                <option value="spiritual">Spiritual & Religious</option>
                                                <option value="operations">Operations & Logistics</option>
                                                <option value="finance">Finance & Accounting</option>
                                                <option value="social">Social Work & NGO</option>
                                                <option value="technology">Technology & IT</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label className="block text-stone-700 font-black text-[10px] uppercase tracking-widest mb-2">YEARS OF EXPERIENCE *</label>
                                            <input
                                                type="text"
                                                required
                                                value={form.experience}
                                                onChange={(e) => setForm({ ...form, experience: e.target.value })}
                                                className="w-full px-6 py-4 rounded-xl border-2 border-stone-200 focus:border-[#7ab800] focus:ring-4 focus:ring-[#7ab800]/10 outline-none transition-all font-medium"
                                                placeholder="e.g., 15 years"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-stone-700 font-black text-[10px] uppercase tracking-widest mb-2">EDUCATION & QUALIFICATIONS *</label>
                                            <textarea
                                                required
                                                value={form.education}
                                                onChange={(e) => setForm({ ...form, education: e.target.value })}
                                                rows={3}
                                                className="w-full px-6 py-4 rounded-xl border-2 border-stone-200 focus:border-[#7ab800] focus:ring-4 focus:ring-[#7ab800]/10 outline-none transition-all font-medium resize-none"
                                                placeholder="List your degrees, certifications, and relevant qualifications"
                                            />
                                        </div>
                                    </div>

                                    {/* Motivation & Commitment */}
                                    <div className="space-y-6 pt-6">
                                        <h3 className="text-sm font-black uppercase tracking-widest text-stone-400 border-b border-stone-100 pb-2">MOTIVATION & COMMITMENT</h3>
                                        
                                        <div>
                                            <label className="block text-stone-700 font-black text-[10px] uppercase tracking-widest mb-2">WHY DO YOU WANT TO JOIN? *</label>
                                            <textarea
                                                required
                                                value={form.motivation}
                                                onChange={(e) => setForm({ ...form, motivation: e.target.value })}
                                                rows={5}
                                                className="w-full px-6 py-4 rounded-xl border-2 border-stone-200 focus:border-[#7ab800] focus:ring-4 focus:ring-[#7ab800]/10 outline-none transition-all font-medium resize-none"
                                                placeholder="Tell us about your motivation to join Moksha Seva's advisory board and how you can contribute to our mission..."
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-stone-700 font-black text-[10px] uppercase tracking-widest mb-2">TIME AVAILABILITY *</label>
                                            <input
                                                type="text"
                                                required
                                                value={form.availability}
                                                onChange={(e) => setForm({ ...form, availability: e.target.value })}
                                                className="w-full px-6 py-4 rounded-xl border-2 border-stone-200 focus:border-[#7ab800] focus:ring-4 focus:ring-[#7ab800]/10 outline-none transition-all font-medium"
                                                placeholder="e.g., 4-6 hours per month"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-stone-700 font-black text-[10px] uppercase tracking-widest mb-2">REFERENCES (OPTIONAL)</label>
                                            <textarea
                                                value={form.references}
                                                onChange={(e) => setForm({ ...form, references: e.target.value })}
                                                rows={3}
                                                className="w-full px-6 py-4 rounded-xl border-2 border-stone-200 focus:border-[#7ab800] focus:ring-4 focus:ring-[#7ab800]/10 outline-none transition-all font-medium resize-none"
                                                placeholder="Names and contact details of 2-3 professional references"
                                            />
                                        </div>
                                    </div>

                                    <Button
                                        type="submit"
                                        className="w-full bg-[#7ab800] hover:bg-[#5b8a00] text-white py-5 font-black uppercase tracking-widest shadow-xl mt-8"
                                    >
                                        SUBMIT APPLICATION
                                    </Button>

                                    <p className="text-stone-400 text-[10px] text-center uppercase tracking-widest leading-relaxed">
                                        Your application will be reviewed by our selection committee within 7-10 business days.
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
