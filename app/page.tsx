"use client";
import Link from "next/link";
import Image from "next/image";
import {
  Flame, Users, Heart, FileText, Star, Shield, Play,
  HandHeart, Globe, ArrowRight, Cross, HelpingHand,
  Activity, Scale, Building2, ShieldCheck, Handshake
} from "lucide-react";
import Button from "@/components/ui/Button";
import { Container } from "@/components/ui/Elements";
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

// Optimized Hero Slides - Sorted for Hindu Sacred Rituals and Dignified Departure
const heroSlides = [
  "/gallery/image1.png",
  "/gallery/image2.png",
  "/gallery/image3.png",
  "/gallery/image4.png",
  "/gallery/image5.png",
  "/gallery/image6.png",
];

const programmes = [
  { title: "LAST RIDE", icon: Flame, color: "text-orange-600", dot: "bg-orange-50", desc: "Providing dignified transportation and final rites for unclaimed souls." },
  { title: "DESTITUTE CARE", icon: Heart, color: "text-rose-600", dot: "bg-rose-50", desc: "Supporting poor families with logistical and financial aid during loss." },
  { title: "ADVOCACY", icon: Users, color: "text-blue-600", dot: "bg-blue-50", desc: "Sensitizing communities about the right to a dignified departure." },
  { title: "DOCUMENTATION", icon: FileText, color: "text-slate-600", dot: "bg-slate-50", desc: "Ensuring legal compliance and proper record-keeping for every case." },
  { title: "GRASSROOTS", icon: HelpingHand, color: "text-[#20b2aa]", dot: "bg-teal-50", desc: "Empowering local volunteers and partners in 38+ cities." },
  { title: "EMERGENCY", icon: Cross, color: "text-red-600", dot: "bg-red-50", desc: "Responding to mass tragedies and natural disasters with swiftness." },
];

const sdgs = [
  { n: "01", t: "FINAL DIGNITY", c: "bg-orange-600", i: Heart },
  { n: "02", t: "SACRED RITES", c: "bg-[#f4c430]", i: Flame },
  { n: "03", t: "RESTORING HUMANITY", c: "bg-sky-700", i: Users },
  { n: "04", t: "LEGAL SANCTITY", i: ShieldCheck, c: "bg-stone-700" },
  { n: "05", t: "MISSION UNITY", c: "bg-indigo-600", i: Handshake },
];

const testimonialSlides = [
  { quote: "Moksha Seva provided a dignified farewell when we had no one else to turn to.", author: "Rajesh K., Beneficiary" },
  { quote: "Their dedication to the sacred rites of unclaimed souls is truly divine work.", author: "Pritam S., Local Partner" },
  { quote: "A world-class organization that treats every human being with ultimate respect.", author: "Anita D., Volunteer" },
];

const govPartners = [
  { name: "MCG", label: "MUNICIPAL CORPORATION" },
  { name: "UP GOVT", label: "DEPARTMENT OF HEALTH" },
  { name: "DELHI POLICE", label: "INSTITUTIONAL PARTNER" },
  { name: "NRHM", label: "NATIONAL HEALTH MISSION" },
];

const campaigns = [
  { t: "KASHI GHAT MISSION", d: "Revitalizing the final rites facilities at the sacred Manikarnika Ghat.", targeted: "₹5,00,000", raised: "₹3,20,000", p: "64%", img: "/gallery/image1.png" },
  { t: "NEW ANTIM YATRA VAN", d: "Aiding the purchase of a specialized mobile unit for the Delhi-NCR hub.", targeted: "₹12,00,000", raised: "₹7,80,000", p: "65%", img: "/gallery/hero_moksha_1.png" },
  { t: "SACRED OIL FUND", d: "Ensuring a steady supply of traditional oils and materials for unclaimed rites.", targeted: "₹1,00,000", raised: "₹85,000", p: "85%", img: "/gallery/gallery_peaceful_departure_1772861335733.png" },
];

const timeline = [
  { year: "2018", event: "Mission started in a single city with 1 volunteer.", icon: Star, desc: "A humble beginning focused on the unclaimed souls of a single city hub." },
  { year: "2020", event: "Reached the milestone of 500+ dignified cremations.", icon: Heart, desc: "Establishing ourselves as a beacon of hope for the destitute during times of loss." },
  { year: "2023", event: "Expanded to 30+ cities across Northern India.", icon: Globe, desc: "Scaling our specialized mobile units to serve a wider humanitarian landscape." },
  { year: "2026", event: "Operating in 38 cities with 400+ active volunteers.", icon: Users, desc: "A national force for terminal dignity, powered by thousands of supporters." },
];

const mediaLogos = ["TIMES OF INDIA", "DAINIK BHASKAR", "AAJ TAK", "NDTV", "HINDUSTAN TIMES"];

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
  };

  useEffect(() => {
    startTimer();
    const tTimer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonialSlides.length);
    }, 6000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      clearInterval(tTimer);
    };
  }, []);

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* ── HERO (HINDU RITUALS & SACRED DEPARTURE) ── */}
      <section className="relative h-[60vh] md:h-[75vh] lg:h-[85vh] w-full overflow-hidden bg-black border-b-[8px] border-[#f4c430]">
        {heroSlides.map((src, idx) => (
          <div
            key={src}
            className={cn(
              "absolute inset-0 transition-all duration-[2000ms] ease-in-out",
              idx === currentSlide ? "opacity-100 scale-100 z-10" : "opacity-0 scale-105 z-0"
            )}
          >
            <Image
              src={src}
              alt="Moksha Seva Sacred Mission"
              fill
              className="object-cover"
              style={{ imageRendering: 'auto', WebkitBackfaceVisibility: 'hidden', backfaceVisibility: 'hidden' }}
              priority={idx === 0}
            />
          </div>
        ))}

        {/* Dynamic Progress Indicator (Smile Style) */}
        <div className="absolute bottom-0 left-0 right-0 z-20 h-2 flex bg-black/10">
          {heroSlides.map((_, idx) => (
            <div key={idx} className="flex-1 h-full overflow-hidden bg-white/10">
              <div
                className={cn(
                  "h-full bg-[#f4c430] transition-all duration-[5000ms] ease-linear",
                  idx === currentSlide ? "w-full" : "w-0"
                )}
              />
            </div>
          ))}
        </div>

        {/* Floating Indicator Dots */}
        <div className="absolute bottom-6 right-6 z-30 flex gap-2">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setCurrentSlide(idx);
                startTimer();
              }}
              className={cn(
                "h-2 rounded-full transition-all duration-500",
                idx === currentSlide ? "w-12 bg-[#f4c430]" : "w-2 bg-white/30 hover:bg-white"
              )}
            />
          ))}
        </div>
      </section>

      {/* ── ACTION BANNER ── */}
      <div className="bg-[#20b2aa] py-6 shadow-2xl relative z-40 border-b border-[#0d9488]">
        <Container className="flex flex-col md:flex-row items-center justify-between gap-6">
          <h2 className="text-white font-black text-2xl md:text-3xl uppercase tracking-tighter leading-none italic drop-shadow-md">
            DIGNITY IN DEPARTURE • SACRED RITES FOR ALL
          </h2>
          <div className="flex gap-4">
            <Link href="/report">
              <Button variant="secondary" className="px-10 py-4 text-sm font-black shadow-lg hover:scale-105 transition-transform">
                REPORT A CASE
              </Button>
            </Link>
            <Link href="/donate">
              <Button variant="white" className="px-10 py-4 text-sm font-black shadow-lg hover:scale-105 transition-transform">
                DONATE NOW
              </Button>
            </Link>
          </div>
        </Container>
      </div>

      {/* ── PROGRAMMES (COMPACT) ── */}
      <section className="py-12 bg-white">
        <Container>
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-stone-900 leading-none">OUR PROGRAMMES</h2>
            <div className="w-10 h-1 bg-[#f4c430] mx-auto mt-2" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {programmes.map((p) => (
              <div key={p.title} className="bg-stone-50/50 p-6 rounded-[1.5rem] border border-stone-100 hover:border-[#20b2aa]/40 hover:bg-white hover:shadow-xl transition-all duration-500 group flex flex-col items-center text-center">
                <div className={cn("w-14 h-14 shrink-0 rounded-xl flex items-center justify-center p-4 mb-4 transition-transform group-hover:scale-110 shadow-sm", p.dot)}>
                  <p.icon className={cn("w-full h-full", p.color)} />
                </div>
                <h3 className={cn("text-lg font-black uppercase tracking-tighter mb-2", p.color)}>{p.title}</h3>
                <p className="text-stone-500 font-medium leading-relaxed tracking-tighter text-sm">{p.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── IMPACT & REACH ── */}
      <section className="py-10 bg-[#1e3a8a] shadow-[inset_0_4px_20px_rgba(0,0,0,0.1)]">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { val: "2,840+", lab: "SACRED RITES COMPLETE" },
              { val: "38+", lab: "CITIES ACTIVE REACH" },
              { val: "420+", lab: "MISSION VOLUNTEERS" },
              { val: "100%", lab: "LEGAL DIGNITY" },
            ].map((stat) => (
              <div key={stat.lab} className="text-center text-white p-2">
                <p className="text-3xl md:text-5xl font-black tracking-tighter mb-0.5">{stat.val}</p>
                <p className="text-[9px] md:text-[10px] font-black uppercase tracking-widest opacity-90">{stat.lab}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── WHERE WE SERVE (CITY HUBS) ── */}
      <section className="py-12 bg-white">
        <Container>
          <div className="flex flex-col md:flex-row items-end justify-between mb-8 gap-6">
            <div className="max-w-xl">
              <p className="text-[#f4c430] font-black text-[10px] uppercase tracking-[0.4em] mb-2">OUR LOGISTICAL SCALE</p>
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-stone-900 leading-none">WHERE WE SERVE</h2>
            </div>
            <div className="flex items-center gap-2 text-stone-400 font-black text-[10px] uppercase tracking-widest">
              <span>38+ CITIES</span>
              <div className="w-10 h-px bg-stone-200" />
              <span>NORTHERN BHARAT</span>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {["KASHI", "HARIDWAR", "PRAYAGRAJ", "RISHIKESH", "DELHI-NCR", "AYODHYA", "MATHURA", "LUCKNOW", "PATNA", "UJJAIN", "GAYA", "AGRA"].map((city) => (
              <div key={city} className="bg-stone-50 border border-stone-100 p-4 rounded-2xl flex flex-col items-center justify-center group hover:bg-[#20b2aa] hover:border-[#20b2aa] transition-all duration-500 cursor-default">
                <p className="text-stone-800 font-black text-[11px] group-hover:text-white transition-colors uppercase">{city}</p>
                <div className="w-4 h-0.5 bg-stone-200 mt-2 group-hover:bg-white/40 transition-all group-hover:w-8" />
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── MISSION GOALS (SACRED PILLARS) ── */}
      <section className="py-12 bg-stone-50 border-y border-stone-100">
        <Container>
          <div className="text-center mb-8">
            <p className="text-[#f4c430] font-black text-[10px] uppercase tracking-[0.4em] mb-2 leading-none">CORE MISSION</p>
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-stone-900 leading-none">MISSION PILLARS</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {sdgs.map((s) => (
              <div key={s.n} className="group relative cursor-default">
                <div className={cn("aspect-square clip-path-hexagon flex flex-col items-center justify-center p-4 text-center transition-all duration-500 hover:-translate-y-1 shadow-md hover:shadow-xl", s.c)}>
                  <s.i className="text-white/60 w-8 h-8 mb-2 group-hover:text-white transition-all" />
                  <p className="text-white font-black text-[9px] leading-tight uppercase tracking-tighter">{s.t}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── STORIES IN MOTION (CAROUSEL) ── */}
      <section className="py-12 bg-white overflow-hidden">
        <Container>
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-stone-900 leading-none border-b-4 border-[#f4c430] inline-block pb-1">STORIES IN MOTION</h2>
          </div>

          <div className="relative group/carousel">
            <div className="flex gap-4 overflow-x-auto pb-8 scrollbar-hide px-4 -mx-4">
              {[
                { img: "/gallery/image1.png", t: "SACRED KASHI RITES" },
                { img: "/gallery/image2.png", t: "MISSION PRAYAGRAJ" },
                { img: "/gallery/image3.png", t: "FINAL JOURNEY" },
                { img: "/gallery/image4.png", t: "AMBULANCE SERVICE" },
                { img: "/gallery/image5.png", t: "DIGNIFIED FAREWELL" },
              ].map((story, i) => (
                <div key={i} className="relative min-w-[280px] md:min-w-[400px] aspect-[16/10] rounded-[2rem] overflow-hidden group shadow-lg">
                  <Image src={story.img} alt={story.t} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/10 transition-all">
                    <div className="w-16 h-16 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center group-hover:bg-[#f4c430] transition-all">
                      <Play className="text-white fill-white ml-1" size={24} />
                    </div>
                  </div>
                  <div className="absolute bottom-5 left-6">
                    <p className="text-white font-black uppercase text-[10px] tracking-widest">{story.t}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* Indicator for scrolling hint */}
            <div className="absolute top-1/2 -right-4 -translate-y-1/2 w-12 h-12 bg-white shadow-2xl rounded-full hidden md:flex items-center justify-center text-stone-400 group-hover/carousel:-right-6 transition-all border border-stone-100 italic">
              <ChevronRight size={24} className="animate-pulse" />
            </div>
          </div>
        </Container>
      </section>

      {/* ── JOIN THE MISSION (CINEMATIC FULL-WIDTH) ── */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-stone-950">
        <div className="absolute inset-0 z-0">
          <Image
            src="/gallery/image4.png"
            alt="Join the Mission"
            fill
            className="object-cover grayscale-[20%] opacity-60"
          />
          {/* Sophisticated gradient: Dark on left for text, transparent on right for image visibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/60 to-transparent" />
        </div>

        <Container className="relative z-10">
          <div className="max-w-xl">
            <div className="inline-block px-4 py-1.5 rounded-full bg-[#20b2aa]/10 border border-[#20b2aa]/20 mb-6 backdrop-blur-md">
              <p className="text-[#20b2aa] font-black text-[10px] uppercase tracking-[0.4em] leading-none">MISSION SAATHI PORTAL</p>
            </div>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white leading-[0.85] mb-8">STAND WITH US <br />IN THE <span className="text-[#f4c430]">FINAL JOURNEY</span></h2>
            <p className="text-white/80 font-medium text-lg mb-10 leading-snug drop-shadow-lg">Whether you have an hour a week or a lifetime to give, your presence can bring dignity to a soul forgotten by the world. Join our specialized hubs in 38+ cities.</p>

            <div className="flex flex-wrap gap-5">
              <Link href="/volunteer">
                <Button variant="primary" className="px-12 py-5 text-sm font-black shadow-[0_20px_40px_rgba(244,196,48,0.3)] hover:-translate-y-1 transition-all">JOIN OUR FORCE</Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="px-12 py-5 text-sm font-black text-white border-white/40 hover:bg-white/10 transition-all backdrop-blur-sm">VIEW OPPORTUNITIES</Button>
              </Link>
            </div>

            <div className="mt-12 flex gap-10 border-t border-white/10 pt-10">
              <div className="flex flex-col">
                <p className="text-white font-black text-2xl tracking-tighter leading-none mb-1">400+</p>
                <p className="text-stone-400 font-black text-[9px] uppercase tracking-widest leading-none">ON-GROUND SATHIS</p>
              </div>
              <div className="flex flex-col">
                <p className="text-white font-black text-2xl tracking-tighter leading-none mb-1">24/7</p>
                <p className="text-stone-400 font-black text-[9px] uppercase tracking-widest leading-none">MISSION SUPPORT</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── URGENT CAMPAIGNS ── */}
      <section className="py-14 bg-white">
        <Container>
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-stone-900 leading-none">URGENT CAMPAIGNS</h2>
            <p className="text-[#f4c430] font-bold text-xs mt-2 italic uppercase tracking-widest leading-none">Directly Support a Mission</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {campaigns.map((c) => (
              <div key={c.t} className="flex flex-col group p-2">
                <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden mb-6 shadow-2xl transition-transform group-hover:-translate-y-2 duration-500">
                  <Image src={c.img} alt={c.t} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/10 to-transparent flex flex-col justify-end p-8">
                    <h4 className="text-white font-black text-2xl leading-[0.9] uppercase tracking-tighter mb-4">{c.t}</h4>
                    <div className="bg-white/10 backdrop-blur-md rounded-full h-1.5 w-full mb-4">
                      <div className="bg-[#f4c430] h-full rounded-full" style={{ width: c.p }} />
                    </div>
                    <div className="flex justify-between text-white font-black text-[10px] uppercase tracking-widest mb-4">
                      <span>RAISED: {c.raised}</span>
                      <span>{c.p} COMPLETE</span>
                    </div>
                    <Link href="/donate" className="text-white text-[10px] font-black uppercase tracking-widest bg-[#f4c430] px-4 py-2.5 rounded-full w-fit hover:bg-white hover:text-[#f4c430] transition-all">
                      DONATE NOW
                    </Link>
                  </div>
                </div>
                <p className="text-stone-500 text-sm font-bold leading-tight px-2 mb-4 line-clamp-2 uppercase tracking-tighter">{c.d}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── IN MEMORIAM (LEGACY GIVING) ── */}
      <section className="py-14 bg-stone-50">
        <Container>
          <div className="bg-white rounded-[3rem] p-8 md:p-14 border border-stone-100 shadow-2xl flex flex-col md:flex-row items-center gap-12 border-t-8 border-t-[#20b2aa]">
            <div className="w-full md:w-1/3 aspect-square rounded-[2rem] overflow-hidden rotate-2 shadow-2xl grayscale hover:rotate-0 hover:grayscale-0 transition-all duration-700 relative">
              <Image src="/gallery/image6.png" alt="Legacy" fill className="object-cover" />
            </div>
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-stone-900 leading-none mb-4">LEAVE A LEGACY <br /><span className="text-[#f4c430]">IN THEIR HONOR</span></h2>
              <p className="text-stone-500 font-medium text-lg leading-snug mb-8">Donate a &apos;Sacred Kit&apos; in memory of your loved ones. We will perform the rites in their name as a direct tribute to their life.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-stone-50 border border-stone-100 italic">
                  <Star className="text-orange-500 shrink-0" size={24} />
                  <p className="text-[10px] font-black uppercase tracking-widest leading-none">Named Tributes</p>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-stone-50 border border-stone-100 italic">
                  <FileText className="text-blue-500 shrink-0" size={24} />
                  <p className="text-[10px] font-black uppercase tracking-widest leading-none">Digital Certificates</p>
                </div>
              </div>
              <Link href="/donate">
                <Button variant="secondary" className="px-12 py-5 font-black uppercase tracking-tighter shadow-xl">CREATE A TRIBUTE</Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* ── OUR SACRED JOURNEY (COMPACT HORIZONTAL) ── */}
      <section className="py-12 bg-stone-950 border-y border-stone-800">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="shrink-0 text-center md:text-left">
              <p className="text-[#f4c430] font-black text-[10px] uppercase tracking-[0.4em] mb-2 leading-none">THE CHRONICLE</p>
              <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-white leading-none">OUR SACRED<br className="hidden md:block" /> JOURNEY</h2>
            </div>

            <div className="flex flex-wrap md:flex-nowrap items-start gap-8 md:gap-12">
              {timeline.map((item, i) => (
                <div key={i} className="flex flex-col items-center md:items-start max-w-[160px] group">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-[#f4c430]/20 flex items-center justify-center border border-[#f4c430]/50 group-hover:bg-[#f4c430] transition-all">
                      <item.icon size={14} className="text-[#f4c430] group-hover:text-white transition-colors" />
                    </div>
                    <p className="text-white font-black text-xl tracking-tighter leading-none">{item.year}</p>
                  </div>
                  <p className="text-stone-500 font-bold uppercase text-[10px] leading-tight tracking-wider">{item.event}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ── TRANSPARENCY (NEW) ── */}
      <section className="py-14 bg-white border-y border-stone-100">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-black uppercase tracking-tighter text-stone-900 leading-[0.85] mb-6">TRANSPARENCY <br /><span className="text-[#20b2aa]">IS OUR SANCTITY</span></h2>
              <p className="text-stone-500 font-medium text-lg leading-snug mb-8 max-w-md">Every rupee donated to Moksha Seva is a sacred trust. We maintain 100% visibility on all our mission operational costs and final rites expenditures.</p>
              <div className="space-y-4">
                {[
                  { l: "Direct Mission Costs", p: "82%" },
                  { l: "Service Maintenance", p: "12%" },
                  { l: "Administrative Support", p: "6%" },
                ].map((stat) => (
                  <div key={stat.l}>
                    <div className="flex justify-between font-black uppercase text-[10px] tracking-widest mb-1.5 transform translate-y-0.5">
                      <span>{stat.l}</span>
                      <span>{stat.p}</span>
                    </div>
                    <div className="bg-stone-100 h-1.5 w-full rounded-full overflow-hidden">
                      <div className="bg-[#20b2aa] h-full rounded-full" style={{ width: stat.p }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-stone-50 p-10 rounded-[3rem] border border-stone-100 rotate-1 shadow-2xl">
              <h3 className="text-xl font-black uppercase tracking-tighter mb-4 text-stone-900">YOUR TRUST MATTERS</h3>
              <p className="text-stone-500 font-medium mb-6">We are committed to the values of absolute accountability as established by our founding charter.</p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-white rounded-2xl shadow-sm border border-stone-100">
                  <p className="text-[#f4c430] font-black text-2xl tracking-tighter">80G</p>
                  <p className="text-[8px] font-black uppercase tracking-widest text-stone-400">TAX EXEMPT READY</p>
                </div>
                <div className="p-4 bg-white rounded-2xl shadow-sm border border-stone-100">
                  <p className="text-orange-600 font-black text-2xl tracking-tighter">100%</p>
                  <p className="text-[8px] font-black uppercase tracking-widest text-stone-400">MISSION FOCUSED</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── MEDIA RECOGNITION (NEW) ── */}
      <section className="py-10 bg-white">
        <Container>
          <p className="text-center text-stone-400 font-black text-[10px] uppercase tracking-[0.4em] mb-8">IN NATIONAL MEDIA</p>
          <div className="flex flex-wrap items-center justify-center gap-10 md:gap-20 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-1000">
            {mediaLogos.map((logo) => (
              <div key={logo} className="text-xl md:text-2xl font-black uppercase tracking-tighter text-stone-900 border-x border-stone-900/10 px-4">{logo}</div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── VOICES OF CHANGE (TESTIMONIALS) ── */}
      <section className="py-14 bg-stone-900">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-6">
              <p className="text-[#f4c430] font-black text-[10px] uppercase tracking-widest mb-2">WHISPERED VOICES</p>
              <div className="relative">
                {testimonialSlides.map((t, i) => (
                  <div key={i} className={cn("transition-all duration-1000", i === currentTestimonial ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 absolute inset-0")}>
                    <p className="text-white text-xl md:text-3xl font-black italic tracking-tighter leading-tight mb-6">&quot;{t.quote}&quot;</p>
                    <p className="text-stone-400 font-bold uppercase text-xs tracking-widest">— {t.author}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center gap-2 mt-10">
              {testimonialSlides.map((_, i) => (
                <div key={i} className={cn("h-1 rounded-full transition-all duration-500", i === currentTestimonial ? "w-8 bg-[#f4c430]" : "w-2 bg-white/20")} />
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ── GOVERNMENT PARTNERS ── */}
      <section className="py-12 bg-stone-50">
        <Container>
          <div className="text-center mb-10">
            <h2 className="text-xl md:text-2xl font-black uppercase tracking-tighter text-stone-400 leading-none underline decoration-stone-200 decoration-1 underline-offset-[10px]">GOVERNMENT & INSTITUTIONAL PARTNERS</h2>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-10 md:gap-20 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-1000">
            {govPartners.map((gp) => (
              <div key={gp.name} className="flex flex-col items-center">
                <div className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-stone-900 border-b-2 border-stone-900 pb-1">{gp.name}</div>
                <p className="text-[8px] font-black uppercase tracking-widest mt-2 text-stone-500">{gp.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── SACRED KNOWLEDGE (FAQ) ── */}
      <section className="py-14 bg-white border-y border-stone-100">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-stone-900 border-b-4 border-[#f4c430] inline-block pb-1">FREQUENT QUESTIONS</h2>
            </div>
            <div className="space-y-4">
              {[
                { q: "HOW ARE CASES REPORTED?", a: "Our 24/7 mission helpline receives calls from police departments, hospitals, and kind-hearted citizens." },
                { q: "ARE TRADITIONAL RITES FOLLOWED?", a: "Yes. Every 'Antyesti' is performed strictly according to sacred Hindu traditions by our staff priests." },
                { q: "IS THE DONATION TAX-EXEMPT?", a: "Yes, Moksha Seva is a registered entity and all donations are 80G tax-exempted according to regulations." },
              ].map((faq, i) => (
                <div key={i} className="p-6 rounded-2xl bg-stone-50 border border-stone-100 hover:border-[#20b2aa]/20 hover:bg-white transition-all group cursor-default">
                  <p className="font-black text-sm uppercase tracking-tighter text-stone-900 mb-2 group-hover:text-[#20b2aa] transition-colors">{faq.q}</p>
                  <p className="text-stone-500 text-sm font-medium leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ── FOOTER BAR ── */}
      <div className="bg-[#1c1917] py-10">
        <Container className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-4">
            <div>
              <p className="text-white font-black uppercase tracking-tighter text-xl leading-none">Moksha Seva</p>
              <p className="text-stone-500 font-bold uppercase tracking-widest text-[8px] mt-1.5 italic">Official Mission for Terminal Dignity © 2026</p>
            </div>
          </div>
          <div className="flex gap-4">
            <Link href="/donate">
              <Button variant="primary" className="px-10 py-4 font-black uppercase tracking-tighter text-sm shadow-[0_10px_30px_rgba(244,196,48,0.3)]">SEND DONATION</Button>
            </Link>
          </div>
        </Container>
      </div>

      <style jsx global>{`
        .clip-path-hexagon {
          clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
        }
      `}</style>
    </div>
  );
}

function ChevronRight({ size = 16, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}
