import { Container } from "@/components/ui/Elements";
import { Heart, Shield, Users, Clock, Award, CheckCircle } from "lucide-react";

export default function WhyMokshaSeva() {
  const reasons = [
    {
      icon: Heart,
      title: "COMPASSIONATE CARE",
      description: "Every soul deserves dignity in their final journey. We treat each case with utmost respect and traditional Hindu rites.",
      color: "text-red-500"
    },
    {
      icon: Shield,
      title: "TRUSTED LEGACY",
      description: "8+ years of dedicated service with 100% transparency and government partnerships across 38+ cities.",
      color: "text-blue-500"
    },
    {
      icon: Users,
      title: "COMMUNITY DRIVEN",
      description: "400+ trained volunteers and local partnerships ensure we're always ready to serve when needed most.",
      color: "text-[#20b2aa]"
    },
    {
      icon: Clock,
      title: "24/7 AVAILABILITY",
      description: "Our helpline and emergency response team operates round the clock, ensuring no soul is left unclaimed.",
      color: "text-orange-500"
    },
    {
      icon: Award,
      title: "RECOGNIZED EXCELLENCE",
      description: "Featured in national media and recognized by government bodies for our humanitarian service.",
      color: "text-purple-500"
    },
    {
      icon: CheckCircle,
      title: "COMPLETE COMPLIANCE",
      description: "All services follow legal protocols with proper documentation and 80G tax-exempt donations.",
      color: "text-green-500"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-[#1e3a8a] to-[#20b2aa]">
        <Container>
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6">
              Why Choose <span className="text-[#f4c430]">Moksha Seva</span>
            </h1>
            <p className="text-xl md:text-2xl font-medium max-w-3xl mx-auto leading-relaxed">
              When dignity matters most, trust the organization that has served with compassion for over 8 years
            </p>
          </div>
        </Container>
      </section>

      {/* Main Reasons */}
      <section className="py-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl border border-stone-100 hover:shadow-xl transition-all duration-500 group">
                <div className={`w-16 h-16 rounded-xl bg-stone-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${reason.color}`}>
                  <reason.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-black uppercase tracking-tighter mb-4 text-stone-900">
                  {reason.title}
                </h3>
                <p className="text-stone-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-stone-50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-stone-900 mb-4">
              Our Impact Speaks
            </h2>
            <div className="w-20 h-1 bg-[#f4c430] mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "2,840+", label: "Sacred Rites Completed" },
              { number: "38+", label: "Cities Served" },
              { number: "400+", label: "Active Volunteers" },
              { number: "100%", label: "Legal Compliance" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-black text-[#f4c430] mb-2">
                  {stat.number}
                </div>
                <div className="text-sm font-bold uppercase tracking-widest text-stone-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-[#20b2aa]">
        <Container>
          <div className="text-center text-white">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-6">
              Join Our Sacred Mission
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Be part of a movement that ensures every soul receives the dignity they deserve in their final journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/volunteer" 
                className="bg-[#f4c430] hover:bg-[#eab308] text-black px-8 py-4 rounded-lg font-black uppercase tracking-widest transition-all"
              >
                Become a Volunteer
              </a>
              <a 
                href="/donate" 
                className="border-2 border-white text-white hover:bg-white hover:text-[#20b2aa] px-8 py-4 rounded-lg font-black uppercase tracking-widest transition-all"
              >
                Support Our Cause
              </a>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}