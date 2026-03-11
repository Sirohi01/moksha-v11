"use client";
import { Container } from "@/components/ui/Elements";
import Image from "next/image";
import { useState, useEffect } from "react";
import { X, Maximize2, Camera, MapPin, Calendar, Heart, Download, Share2 } from "lucide-react";

const galleryImages = [
    {
        src: "/gallery/gallery_cremation_ceremony_1772861295131.png",
        title: "Dignified Farewell Ceremony",
        category: "Services",
        location: "Nigambodh Ghat, Delhi",
        date: "Jan 2024",
        height: 400,
    },
    {
        src: "/gallery/gallery_volunteer_service_1772861316550.png",
        title: "Compassionate Volunteers",
        category: "Team",
        location: "Community Center, Delhi",
        date: "Feb 2024",
        height: 280,
    },
    {
        src: "/gallery/gallery_peaceful_departure_1772861335733.png",
        title: "Serene Landscapes of Peace",
        category: "Spirituality",
        location: "Yamuna Bank",
        date: "Mar 2024",
        height: 350,
    },
    {
        src: "/gallery/gallery_ambulance_unit_1772862517482.png",
        title: "Moksha Seva Mobile Unit",
        category: "Infrastructure",
        location: "Service Station",
        date: "Feb 2024",
        height: 320,
    },
    {
        src: "/gallery/gallery_community_support_1772861359875.png",
        title: "Community of Support",
        category: "Community",
        location: "Ghaziabad Hub",
        date: "Mar 2024",
        height: 250,
    },
    {
        src: "/gallery/gallery_volunteer_meeting_1772862633347.png",
        title: "The Heart of Service",
        category: "Team",
        location: "Ghaziabad Office",
        date: "Dec 2023",
        height: 380,
    },
    {
        src: "/gallery/gallery_memorial_site_1772862535416.png",
        title: "Sacred Memorial Space",
        category: "Spirituality",
        location: "Memorial Park",
        date: "Jan 2024",
        height: 300,
    },
    {
        src: "/gallery/hero_ambulance.png",
        title: "Emergency Response Vehicle",
        category: "Infrastructure",
        location: "Delhi NCR",
        date: "Nov 2023",
        height: 260,
    },
    {
        src: "/gallery/hero_mission_1.png",
        title: "Our Mission in Action",
        category: "Services",
        location: "Multiple Cities",
        date: "2023",
        height: 420,
    },
    {
        src: "/gallery/hero_moksha_1.png",
        title: "Moksha Seva Team",
        category: "Team",
        location: "Head Office",
        date: "Oct 2023",
        height: 290,
    },
    {
        src: "/gallery/image1.png",
        title: "Serving with Dignity",
        category: "Services",
        location: "Varanasi",
        date: "Sep 2023",
        height: 340,
    },
    {
        src: "/gallery/image2.png",
        title: "Community Outreach",
        category: "Community",
        location: "Mumbai",
        date: "Aug 2023",
        height: 310,
    },
    {
        src: "/gallery/image3.png",
        title: "Volunteer Training",
        category: "Team",
        location: "Bangalore",
        date: "Jul 2023",
        height: 270,
    },
    {
        src: "/gallery/image4.png",
        title: "Sacred Rituals",
        category: "Spirituality",
        location: "Haridwar",
        date: "Jun 2023",
        height: 390,
    },
    {
        src: "/gallery/image5.png",
        title: "Support Network",
        category: "Community",
        location: "Pune",
        date: "May 2023",
        height: 330,
    },
    {
        src: "/gallery/image6.png",
        title: "Compassionate Care",
        category: "Services",
        location: "Kolkata",
        date: "Apr 2023",
        height: 360,
    },
];

const categories = ["All", "Services", "Team", "Community", "Spirituality", "Infrastructure"];

export default function GalleryPage() {
    const [selectedImg, setSelectedImg] = useState<null | typeof galleryImages[0]>(null);
    const [activeCategory, setActiveCategory] = useState("All");
    const [filteredImages, setFilteredImages] = useState(galleryImages);

    useEffect(() => {
        if (activeCategory === "All") {
            setFilteredImages(galleryImages);
        } else {
            setFilteredImages(galleryImages.filter(img => img.category === activeCategory));
        }
    }, [activeCategory]);

    return (
        <div className="min-h-screen bg-stone-50">
            {/* Unique Hero Section - Photo Collage Style */}
            <section className="relative h-[80vh] overflow-hidden bg-stone-900">
                {/* Animated Background Grid */}
                <div className="absolute inset-0">
                    <div className="grid grid-cols-6 md:grid-cols-8 lg:grid-cols-12 h-full gap-1">
                        {[
                            "/gallery/image1.png", "/gallery/image2.png", "/gallery/image3.png", 
                            "/gallery/image4.png", "/gallery/image5.png", "/gallery/image6.png",
                            "/gallery/gallery_cremation_ceremony_1772861295131.png",
                            "/gallery/gallery_volunteer_service_1772861316550.png",
                            "/gallery/gallery_peaceful_departure_1772861335733.png",
                            "/gallery/gallery_ambulance_unit_1772862517482.png",
                            "/gallery/gallery_community_support_1772861359875.png",
                            "/gallery/gallery_volunteer_meeting_1772862633347.png",
                            "/gallery/gallery_memorial_site_1772862535416.png",
                            "/gallery/hero_ambulance.png", "/gallery/hero_mission_1.png",
                            "/gallery/hero_moksha_1.png"
                        ].map((src, idx) => (
                            <div 
                                key={idx} 
                                className="relative overflow-hidden opacity-20 hover:opacity-40 transition-all duration-1000"
                                style={{ 
                                    animationDelay: `${idx * 0.1}s`,
                                    animation: `fadeInUp 2s ease-out forwards`
                                }}
                            >
                                <Image
                                    src={src}
                                    alt=""
                                    fill
                                    className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-b from-stone-900/60 via-stone-900/80 to-stone-900/95" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#1e3a8a]/30 via-transparent to-[#20b2aa]/30" />

                {/* Floating Elements */}
                <div className="absolute top-20 left-10 w-2 h-2 bg-[#f4c430] rounded-full animate-pulse" />
                <div className="absolute top-40 right-20 w-3 h-3 bg-[#20b2aa] rounded-full animate-bounce" style={{ animationDelay: '1s' }} />
                <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-[#f4c430] rounded-full animate-ping" style={{ animationDelay: '2s' }} />
                <div className="absolute bottom-60 right-10 w-2.5 h-2.5 bg-[#20b2aa] rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />

                {/* Main Content */}
                <div className="relative z-10 h-full flex items-center justify-center">
                    <Container>
                        <div className="text-center text-white">
                            {/* Animated Badge */}
                            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-8 group hover:bg-white/20 transition-all duration-500">
                                <div className="relative">
                                    <Camera className="w-5 h-5 text-[#f4c430] group-hover:rotate-12 transition-transform duration-500" />
                                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#20b2aa] rounded-full animate-ping" />
                                </div>
                                <span className="text-white text-sm font-black tracking-[0.3em] uppercase">
                                    Visual Journey
                                </span>
                                <div className="w-8 h-px bg-gradient-to-r from-[#f4c430] to-[#20b2aa]" />
                            </div>

                            {/* Main Title with Animation */}
                            <div className="mb-8">
                                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.8] mb-4">
                                    <span className="inline-block animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
                                        Moments
                                    </span>
                                    <br />
                                    <span className="inline-block animate-fadeInUp text-[#f4c430]" style={{ animationDelay: '0.4s' }}>
                                        of
                                    </span>
                                    <span className="inline-block animate-fadeInUp text-[#20b2aa] ml-4" style={{ animationDelay: '0.6s' }}>
                                        Grace
                                    </span>
                                </h1>
                            </div>

                            {/* Subtitle */}
                            <p className="text-xl md:text-2xl font-medium max-w-3xl mx-auto leading-relaxed opacity-90 mb-12 animate-fadeInUp" style={{ animationDelay: '0.8s' }}>
                                Every frame captures the essence of compassion, dignity, and the sacred bond between humanity and service
                            </p>

                            {/* Stats Counter */}
                            <div className="flex flex-wrap justify-center gap-8 animate-fadeInUp" style={{ animationDelay: '1s' }}>
                                {[
                                    { number: "2,840+", label: "Moments Captured" },
                                    { number: "16", label: "Photo Categories" },
                                    { number: "38+", label: "Cities Documented" },
                                    { number: "400+", label: "Stories Told" }
                                ].map((stat, idx) => (
                                    <div key={idx} className="text-center group">
                                        <div className="text-2xl md:text-3xl font-black text-[#f4c430] mb-1 group-hover:scale-110 transition-transform">
                                            {stat.number}
                                        </div>
                                        <div className="text-xs font-medium uppercase tracking-widest text-white/70">
                                            {stat.label}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Container>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                    <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-[#f4c430] rounded-full mt-2 animate-pulse" />
                    </div>
                </div>

                {/* Decorative Corner Elements */}
                <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-[#f4c430]/30" />
                <div className="absolute top-0 right-0 w-32 h-32 border-r-2 border-t-2 border-[#20b2aa]/30" />
                <div className="absolute bottom-0 left-0 w-32 h-32 border-l-2 border-b-2 border-[#20b2aa]/30" />
                <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-[#f4c430]/30" />
            </section>

            <style jsx>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animate-fadeInUp {
                    opacity: 0;
                    animation: fadeInUp 1s ease-out forwards;
                }
            `}</style>

            {/* Filter Tabs */}
            <section className="py-8 bg-white border-b border-stone-200 sticky top-0 z-40 backdrop-blur-sm bg-white/95">
                <Container>
                    <div className="flex flex-wrap justify-center gap-2">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-6 py-2 rounded-full text-sm font-black uppercase tracking-widest transition-all duration-300 ${
                                    activeCategory === category
                                        ? "bg-[#f4c430] text-white shadow-lg"
                                        : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Pinterest-style Masonry Gallery */}
            <section id="gallery-section" className="py-12">
                <Container>
                    <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
                        {filteredImages.map((image, idx) => (
                            <div
                                key={idx}
                                className="break-inside-avoid group cursor-pointer"
                                onClick={() => setSelectedImg(image)}
                            >
                                <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                                    <div className="relative overflow-hidden">
                                        <div style={{ height: `${image.height}px` }} className="relative">
                                            <Image
                                                src={image.src}
                                                alt={image.title}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                            />
                                            
                                            {/* Overlay on hover */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                            
                                            {/* Category Badge */}
                                            <div className="absolute top-3 left-3">
                                                <span className="bg-[#20b2aa] text-white px-2 py-1 rounded-lg text-xs font-black uppercase tracking-widest">
                                                    {image.category}
                                                </span>
                                            </div>

                                            {/* Hover Actions */}
                                            <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                                <button className="w-8 h-8 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-[#f4c430] transition-colors">
                                                    <Heart className="w-4 h-4" />
                                                </button>
                                                <button className="w-8 h-8 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-[#f4c430] transition-colors">
                                                    <Share2 className="w-4 h-4" />
                                                </button>
                                            </div>

                                            {/* Expand Icon */}
                                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                                                <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/30">
                                                    <Maximize2 className="w-5 h-5" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Card Content */}
                                    <div className="p-4">
                                        <h3 className="font-black text-stone-900 text-sm uppercase tracking-tighter leading-tight mb-2">
                                            {image.title}
                                        </h3>
                                        <div className="flex items-center justify-between text-xs text-stone-500">
                                            <span className="flex items-center gap-1">
                                                <MapPin className="w-3 h-3" />
                                                {image.location}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Calendar className="w-3 h-3" />
                                                {image.date}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Load More Button */}
                    <div className="text-center mt-12">
                        <button className="bg-[#f4c430] hover:bg-[#eab308] text-white px-8 py-3 rounded-full font-black uppercase tracking-widest text-sm transition-all shadow-lg hover:shadow-xl">
                            Load More Images
                        </button>
                    </div>
                </Container>
            </section>

            {/* Enhanced Lightbox Modal */}
            {selectedImg && (
                <div
                    className="fixed inset-0 z-[100] bg-stone-950/95 backdrop-blur-xl flex items-center justify-center p-4 transition-all duration-500"
                    onClick={() => setSelectedImg(null)}
                >
                    {/* Close Button */}
                    <button
                        className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-10 w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center"
                        onClick={() => setSelectedImg(null)}
                    >
                        <X className="w-5 h-5" />
                    </button>

                    {/* Action Buttons */}
                    <div className="absolute top-6 left-6 flex gap-3 z-10">
                        <button className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-[#f4c430] transition-colors">
                            <Heart className="w-5 h-5" />
                        </button>
                        <button className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-[#f4c430] transition-colors">
                            <Download className="w-5 h-5" />
                        </button>
                        <button className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-[#f4c430] transition-colors">
                            <Share2 className="w-5 h-5" />
                        </button>
                    </div>

                    <div
                        className="relative w-full h-full max-w-5xl max-h-[90vh] overflow-hidden rounded-2xl shadow-2xl border border-white/10"
                        onClick={e => e.stopPropagation()}
                    >
                        <Image
                            src={selectedImg.src}
                            alt={selectedImg.title}
                            fill
                            className="object-contain bg-stone-900"
                        />
                        
                        {/* Image Info Overlay */}
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-stone-950 via-stone-950/90 to-transparent p-8">
                            <div className="flex items-start justify-between">
                                <div>
                                    <span className="text-[#f4c430] text-xs font-black tracking-widest uppercase mb-2 block">
                                        {selectedImg.category}
                                    </span>
                                    <h2 className="text-white font-black text-2xl md:text-3xl uppercase tracking-tighter mb-3">
                                        {selectedImg.title}
                                    </h2>
                                    <div className="flex gap-6 text-white/60 text-sm font-medium">
                                        <span className="flex items-center gap-2">
                                            <MapPin className="w-4 h-4 text-[#f4c430]/70" />
                                            {selectedImg.location}
                                        </span>
                                        <span className="flex items-center gap-2">
                                            <Calendar className="w-4 h-4 text-[#f4c430]/70" />
                                            {selectedImg.date}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
