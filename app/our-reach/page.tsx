"use client";
import React, { useState } from "react";
import { Container } from "@/components/ui/Elements";
import { MapPin, LayoutGrid, Globe, ShieldCheck, Mail, Phone, ChevronRight, X, Building, Users as UsersIcon } from "lucide-react";
import Button from "@/components/ui/Button";

export default function OurReachPage() {
    const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
    const [showExpansionForm, setShowExpansionForm] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        city: "",
        state: "",
        organization: "",
        message: ""
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        // Backend API call would go here
    };

    const closeForm = () => {
        setShowExpansionForm(false);
        setSubmitted(false);
        setForm({
            name: "",
            email: "",
            phone: "",
            city: "",
            state: "",
            organization: "",
            message: ""
        });
    };

    const regions = [
        { name: "North India", cities: ["Delhi", "Lucknow", "Ghaziabad", "Kanpur", "Varanasi"], density: "High Response Hub", stats: "1,200+ Served" },
        { name: "South India", cities: ["Bangalore", "Chennai", "Hyderabad", "Kochi", "Mysore"], density: "Tier 1 Center", stats: "800+ Served" },
        { name: "West India", cities: ["Mumbai", "Pune", "Ahmedabad", "Nashik", "Surat"], density: "State Command Center", stats: "1,500+ Served" },
        { name: "East India", cities: ["Kolkata", "Patna", "Ranchi", "Bhubaneswar", "Guwahati"], density: "Growing Hub", stats: "400+ Served" },
        { name: "Central India", cities: ["Bhopal", "Indore", "Nagpur", "Jabalpur", "Raipur"], density: "Response Center", stats: "600+ Served" },
    ];

    return (
        <main className="min-h-screen bg-stone-50">
            {/* Hero Section */}
            <section className="bg-stone-900 text-white py-12 md:py-20 lg:py-24 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />
                <Container>
                    <div className="max-w-3xl">
                        <div className="inline-block px-4 py-1.5 rounded-full bg-[#7ab800]/10 border border-[#7ab800]/20 mb-6">
                            <p className="text-[#7ab800] font-black text-[10px] uppercase tracking-[0.4em] leading-none">OUR SERVICE NETWORK</p>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.85] mb-8">OUR GLOBAL <span className="text-[#7ab800]">REACH</span></h1>
                        <p className="text-stone-400 text-lg md:text-xl font-medium leading-relaxed">
                            Moksha Seva operates across 38+ major cities in India, with a dedicated
                            Force of 400+ Saathis ready to respond to any call for dignity.
                        </p>
                    </div>
                </Container>
            </section>

            {/* Reach List */}
            <section className="py-20">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {regions.map((region, i) => (
                            <div key={i} className="bg-white p-8 rounded-[3rem] border border-stone-100 shadow-sm hover:translate-y-[-4px] transition-all group overflow-hidden relative">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#7ab800]/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl group-hover:bg-[#7ab800]/10 transition-colors" />

                                <div className="w-12 h-12 rounded-2xl bg-stone-50 flex items-center justify-center mb-10 group-hover:bg-[#7ab800]/10 transition-colors">
                                    <MapPin className="text-[#7ab800]" size={24} />
                                </div>
                                <h3 className="text-2xl font-black uppercase tracking-tighter mb-1 text-stone-800 leading-none">{region.name}</h3>
                                <p className="text-[#7ab800] font-black text-[10px] uppercase tracking-widest mb-6">{region.density}</p>
                                <p className="text-stone-400 font-bold text-[9px] uppercase tracking-widest mb-10 leading-none">ACTIVE SERVICE CITIES:</p>
                                <div className="flex flex-wrap gap-2 mb-10 pb-8 border-b border-stone-50">
                                    {region.cities.map((city, idx) => (
                                        <span key={idx} className="bg-stone-50 px-4 py-2 rounded-full text-stone-700 font-black text-[10px] uppercase tracking-widest hover:bg-[#7ab800] hover:text-white transition-all">
                                            {city}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center justify-between">
                                    <div className="flex flex-col">
                                        <p className="font-black text-2xl tracking-tighter text-stone-800 leading-none mb-1">{region.stats}</p>
                                        <p className="text-stone-400 font-black text-[9px] uppercase tracking-widest">Permanent Impact</p>
                                    </div>
                                    <button 
                                        onClick={() => setSelectedRegion(region.name)}
                                        className="w-12 h-12 rounded-full bg-stone-50 flex items-center justify-center hover:bg-[#7ab800] hover:text-white transition-all text-[#7ab800]"
                                    >
                                        <ChevronRight size={24} />
                                    </button>
                                </div>
                            </div>
                        ))}

                        {/* New City Request */}
                        <div className="bg-stone-900 p-8 rounded-[3.5rem] shadow-xl text-white flex flex-col justify-center items-center text-center overflow-hidden relative">
                            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#7ab800]/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl opacity-50" />
                            <div className="w-20 h-20 rounded-full bg-[#7ab800] flex items-center justify-center mb-8 shadow-[0_20px_40px_rgba(122,184,0,0.3)] border border-white/20">
                                <Globe size={32} className="text-white" />
                            </div>
                            <h3 className="text-2xl font-black uppercase tracking-tighter mb-4 leading-none text-white">WANT US IN YOUR CITY?</h3>
                            <p className="text-stone-400 font-medium text-sm leading-relaxed mb-8">
                                Help us expand the &apos;Force of Dignity&apos; to your city. We provide infrastructure, training, and legal support.
                            </p>
                            <Button 
                                onClick={() => setShowExpansionForm(true)}
                                className="w-full bg-white text-stone-900 font-black py-4 hover:shadow-[0_20px_40px_rgba(255,255,255,0.2)]"
                            >
                                REQUEST EXPANSION
                            </Button>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Network Stats */}
            <section className="py-20 border-t border-stone-200 bg-white">
                <Container>
                    <div className="max-w-4xl mx-auto text-center mb-16 px-4">
                        <h4 className="text-[#7ab800] font-black text-[11px] uppercase tracking-[0.4em] mb-4">TOTAL SERVICE REACH</h4>
                        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-stone-800 leading-none">THE LARGEST RESPONSE <span className="text-[#7ab800]">FORGOTTEN</span> NETWORK IN INDIA</h2>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="text-center p-8 bg-stone-50 rounded-3xl border border-stone-100 shadow-inner">
                            <p className="text-[#7ab800] text-3xl md:text-5xl font-black uppercase tracking-tighter mb-2">38+</p>
                            <p className="text-stone-400 text-[10px] font-black uppercase tracking-widest">Active Cities</p>
                        </div>
                        <div className="text-center p-8 bg-stone-50 rounded-3xl border border-stone-100 shadow-inner">
                            <p className="text-[#7ab800] text-3xl md:text-5xl font-black uppercase tracking-tighter mb-2">400+</p>
                            <p className="text-stone-400 text-[10px] font-black uppercase tracking-widest">Saathi Force</p>
                        </div>
                        <div className="text-center p-8 bg-stone-50 rounded-3xl border border-stone-100 shadow-inner">
                            <p className="text-[#7ab800] text-3xl md:text-5xl font-black uppercase tracking-tighter mb-2">8,500+</p>
                            <p className="text-stone-400 text-[10px] font-black uppercase tracking-widest">Total Services</p>
                        </div>
                        <div className="text-center p-8 bg-stone-50 rounded-3xl border border-stone-100 shadow-inner">
                            <p className="text-[#7ab800] text-3xl md:text-5xl font-black uppercase tracking-tighter mb-2">24/7</p>
                            <p className="text-stone-400 text-[10px] font-black uppercase tracking-widest">Response Units</p>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Region Details Modal */}
            {selectedRegion && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[2000] flex items-center justify-center p-4" onClick={() => setSelectedRegion(null)}>
                    <div className="bg-white rounded-[3rem] max-w-2xl w-full shadow-2xl relative" onClick={(e) => e.stopPropagation()}>
                        <button
                            onClick={() => setSelectedRegion(null)}
                            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-stone-100 hover:bg-stone-200 flex items-center justify-center transition-all z-20 shadow-lg"
                        >
                            <X size={20} className="text-stone-600" />
                        </button>

                        <div className="p-12">
                            <div className="inline-block px-4 py-1.5 rounded-full bg-[#7ab800]/10 border border-[#7ab800]/20 mb-4">
                                <p className="text-[#7ab800] font-black text-[10px] uppercase tracking-[0.4em] leading-none">REGIONAL HUB</p>
                            </div>
                            <h2 className="text-3xl font-black uppercase tracking-tighter text-stone-900 mb-6 leading-none">{selectedRegion}</h2>
                            
                            <div className="space-y-6">
                                <div className="p-6 bg-stone-50 rounded-2xl">
                                    <p className="text-stone-600 font-medium leading-relaxed">
                                        Our {selectedRegion} operations serve as a critical hub in our national network, 
                                        providing 24/7 dignified cremation services across multiple cities. Each region 
                                        is supported by dedicated volunteers, ambulance units, and partnerships with 
                                        local authorities.
                                    </p>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="p-6 bg-white border-2 border-stone-100 rounded-2xl">
                                        <MapPin className="text-[#7ab800] mb-3" size={24} />
                                        <p className="text-2xl font-black text-stone-900 mb-1">
                                            {regions.find(r => r.name === selectedRegion)?.cities.length}+
                                        </p>
                                        <p className="text-stone-400 text-xs font-black uppercase tracking-widest">Active Cities</p>
                                    </div>
                                    <div className="p-6 bg-white border-2 border-stone-100 rounded-2xl">
                                        <UsersIcon className="text-[#7ab800] mb-3" size={24} />
                                        <p className="text-2xl font-black text-stone-900 mb-1">
                                            {regions.find(r => r.name === selectedRegion)?.stats}
                                        </p>
                                        <p className="text-stone-400 text-xs font-black uppercase tracking-widest">Total Services</p>
                                    </div>
                                </div>

                                <Button 
                                    onClick={() => {
                                        setSelectedRegion(null);
                                        setShowExpansionForm(true);
                                    }}
                                    className="w-full bg-[#7ab800] text-white py-4 font-black uppercase tracking-widest"
                                >
                                    REQUEST EXPANSION IN THIS REGION
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Expansion Request Form Modal */}
            {showExpansionForm && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[2000] flex items-center justify-center p-4" onClick={closeForm}>
                    <div className="bg-white rounded-[3rem] max-w-2xl w-full max-h-[85vh] shadow-2xl relative flex flex-col" onClick={(e) => e.stopPropagation()}>
                        <button
                            onClick={closeForm}
                            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-stone-100 hover:bg-stone-200 flex items-center justify-center transition-all z-20 shadow-lg"
                        >
                            <X size={20} className="text-stone-600" />
                        </button>

                        <div className="overflow-y-auto flex-1 custom-scrollbar">
                            {submitted ? (
                                <div className="p-12 md:p-16 text-center">
                                    <div className="w-24 h-24 rounded-full bg-[#7ab800] flex items-center justify-center mx-auto mb-8">
                                        <ShieldCheck className="text-white" size={48} />
                                    </div>
                                    <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-stone-900 mb-6 leading-none">REQUEST RECEIVED!</h2>
                                    <p className="text-stone-600 font-medium text-lg leading-relaxed mb-8">
                                        Thank you for your interest in bringing Moksha Seva to your city. Our expansion team 
                                        will review your request and contact you within 5-7 business days.
                                    </p>
                                    <div className="flex flex-wrap gap-4 justify-center">
                                        <Button onClick={closeForm} className="bg-stone-900 text-white px-10 py-5 font-black uppercase tracking-widest">
                                            CLOSE
                                        </Button>
                                    </div>
                                </div>
                            ) : (
                                <div className="p-8 md:p-12">
                                    <div className="mb-8">
                                        <div className="inline-block px-4 py-1.5 rounded-full bg-[#7ab800]/10 border border-[#7ab800]/20 mb-4">
                                            <p className="text-[#7ab800] font-black text-[10px] uppercase tracking-[0.4em] leading-none">EXPANSION REQUEST</p>
                                        </div>
                                        <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-stone-900 mb-4 leading-none">
                                            BRING MOKSHA SEVA<br />
                                            <span className="text-[#7ab800]">TO YOUR CITY</span>
                                        </h2>
                                        <p className="text-stone-500 font-medium leading-relaxed">
                                            Help us expand our mission of dignity. We&apos;ll work with local partners, volunteers, 
                                            and authorities to establish operations in your city.
                                        </p>
                                    </div>

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

                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-stone-700 font-black text-[10px] uppercase tracking-widest mb-2">CITY NAME *</label>
                                                <input
                                                    type="text"
                                                    required
                                                    value={form.city}
                                                    onChange={(e) => setForm({ ...form, city: e.target.value })}
                                                    className="w-full px-6 py-4 rounded-xl border-2 border-stone-200 focus:border-[#7ab800] focus:ring-4 focus:ring-[#7ab800]/10 outline-none transition-all font-medium"
                                                    placeholder="Enter city name"
                                                />
                                            </div>

                                            <div>
                                                <label className="block text-stone-700 font-black text-[10px] uppercase tracking-widest mb-2">STATE *</label>
                                                <input
                                                    type="text"
                                                    required
                                                    value={form.state}
                                                    onChange={(e) => setForm({ ...form, state: e.target.value })}
                                                    className="w-full px-6 py-4 rounded-xl border-2 border-stone-200 focus:border-[#7ab800] focus:ring-4 focus:ring-[#7ab800]/10 outline-none transition-all font-medium"
                                                    placeholder="Enter state"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-stone-700 font-black text-[10px] uppercase tracking-widest mb-2">ORGANIZATION (OPTIONAL)</label>
                                            <input
                                                type="text"
                                                value={form.organization}
                                                onChange={(e) => setForm({ ...form, organization: e.target.value })}
                                                className="w-full px-6 py-4 rounded-xl border-2 border-stone-200 focus:border-[#7ab800] focus:ring-4 focus:ring-[#7ab800]/10 outline-none transition-all font-medium"
                                                placeholder="NGO, Trust, or Community Group"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-stone-700 font-black text-[10px] uppercase tracking-widest mb-2">WHY YOUR CITY NEEDS US? *</label>
                                            <textarea
                                                required
                                                value={form.message}
                                                onChange={(e) => setForm({ ...form, message: e.target.value })}
                                                rows={4}
                                                className="w-full px-6 py-4 rounded-xl border-2 border-stone-200 focus:border-[#7ab800] focus:ring-4 focus:ring-[#7ab800]/10 outline-none transition-all font-medium resize-none"
                                                placeholder="Tell us about the need for dignified cremation services in your city..."
                                            />
                                        </div>

                                        <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6">
                                            <p className="text-blue-800 text-sm font-medium leading-relaxed">
                                                <strong className="font-black">What we provide:</strong> Training for volunteers, 
                                                ambulance coordination, legal support, and ongoing operational guidance. 
                                                All services remain 100% free for beneficiaries.
                                            </p>
                                        </div>

                                        <Button
                                            type="submit"
                                            className="w-full bg-[#7ab800] hover:bg-[#5b8a00] text-white py-5 font-black uppercase tracking-widest shadow-xl"
                                        >
                                            SUBMIT EXPANSION REQUEST
                                        </Button>

                                        <p className="text-stone-400 text-[10px] text-center uppercase tracking-widest leading-relaxed">
                                            Our expansion team will review your request and contact you within 5-7 business days.
                                        </p>
                                    </form>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}

            {/* Custom Scrollbar Styles */}
            <style jsx global>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 8px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                    margin: 1.5rem 0;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #d6d3d1;
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: #a8a29e;
                }
            `}</style>
        </main>
    );
}
