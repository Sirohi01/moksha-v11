import { Container } from "@/components/ui/Elements";
import { TrendingUp, Users, MapPin, Heart, Calendar, Award } from "lucide-react";

export default function Impact() {
  const impactStats = [
    { icon: Heart, number: "2,840+", label: "Sacred Rites Completed", color: "text-red-500" },
    { icon: MapPin, number: "38+", label: "Cities Actively Served", color: "text-blue-500" },
    { icon: Users, number: "400+", label: "Trained Volunteers", color: "text-[#20b2aa]" },
    { icon: Calendar, number: "8+", label: "Years of Service", color: "text-orange-500" },
    { icon: Award, number: "100%", label: "Legal Compliance", color: "text-green-500" },
    { icon: TrendingUp, number: "24/7", label: "Emergency Response", color: "text-purple-500" }
  ];

  const yearlyData = [
    { year: "2018", rites: 45, cities: 1, volunteers: 5 },
    { year: "2019", rites: 180, cities: 3, volunteers: 25 },
    { year: "2020", rites: 520, cities: 8, volunteers: 60 },
    { year: "2021", rites: 890, cities: 15, volunteers: 120 },
    { year: "2022", rites: 1240, cities: 22, volunteers: 200 },
    { year: "2023", rites: 1680, cities: 30, volunteers: 300 },
    { year: "2024", rites: 2150, cities: 35, volunteers: 380 },
    { year: "2025", rites: 2840, cities: 38, volunteers: 400 }
  ];

  const testimonials = [
    {
      quote: "Moksha Seva gave my father the dignified farewell he deserved when we had nowhere else to turn.",
      author: "Priya Sharma, Delhi",
      role: "Beneficiary Family"
    },
    {
      quote: "Working with Moksha Seva has been the most fulfilling experience of my life. Every soul matters.",
      author: "Rajesh Kumar, Volunteer",
      role: "5 Years of Service"
    },
    {
      quote: "Their transparency and dedication to traditional rites is unmatched in humanitarian work.",
      author: "Dr. Anita Verma",
      role: "Social Worker"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#1e3a8a] to-[#20b2aa]">
        <Container>
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6">
              Our <span className="text-[#f4c430]">Impact</span>
            </h1>
            <p className="text-xl md:text-2xl font-medium max-w-3xl mx-auto leading-relaxed">
              Measuring the difference we make in ensuring dignity for every soul&apos;s final journey
            </p>
          </div>
        </Container>
      </section>

      {/* Impact Statistics */}
      <section className="py-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {impactStats.map((stat, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl border border-stone-100 hover:shadow-xl transition-all duration-500 group text-center">
                <div className={`w-16 h-16 rounded-xl bg-stone-50 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform ${stat.color}`}>
                  <stat.icon className="w-8 h-8" />
                </div>
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

      {/* Growth Timeline */}
      <section className="py-16 bg-stone-50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-stone-900 mb-4">
              Our Growth Journey
            </h2>
            <div className="w-20 h-1 bg-[#f4c430] mx-auto"></div>
          </div>

          <div className="overflow-x-auto">
            <div className="min-w-full">
              <div className="grid grid-cols-8 gap-4 mb-8">
                {yearlyData.map((data, index) => (
                  <div key={index} className="text-center">
                    <div className="bg-white p-4 rounded-xl border border-stone-200 hover:shadow-lg transition-all">
                      <div className="text-lg font-black text-[#f4c430] mb-2">{data.year}</div>
                      <div className="space-y-1 text-xs">
                        <div className="font-bold text-stone-900">{data.rites} Rites</div>
                        <div className="text-stone-600">{data.cities} Cities</div>
                        <div className="text-stone-600">{data.volunteers} Volunteers</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-stone-900 mb-4">
              Voices of Impact
            </h2>
            <div className="w-20 h-1 bg-[#f4c430] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl border border-stone-100 hover:shadow-xl transition-all duration-500">
                <div className="text-[#f4c430] text-4xl mb-4">&quot;</div>
                <p className="text-stone-700 italic mb-6 leading-relaxed">
                  {testimonial.quote}
                </p>
                <div className="border-t border-stone-100 pt-4">
                  <div className="font-black text-stone-900 uppercase tracking-widest text-sm">
                    {testimonial.author}
                  </div>
                  <div className="text-stone-500 text-xs uppercase tracking-widest mt-1">
                    {testimonial.role}
                  </div>
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
              Be Part of Our Impact
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Every contribution, every volunteer hour, every shared story amplifies our impact in serving humanity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/volunteer" 
                className="bg-[#f4c430] hover:bg-[#eab308] text-black px-8 py-4 rounded-lg font-black uppercase tracking-widest transition-all"
              >
                Join Our Mission
              </a>
              <a 
                href="/donate" 
                className="border-2 border-white text-white hover:bg-white hover:text-[#20b2aa] px-8 py-4 rounded-lg font-black uppercase tracking-widest transition-all"
              >
                Support Our Work
              </a>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}