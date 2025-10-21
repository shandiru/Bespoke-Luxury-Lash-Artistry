"use client";
import React from "react";
import {
  CheckCircle2,
  Shield,
  Award,
  Calendar,
  Heart,
  Users,
  CircleCheckBig,
  Star,
} from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-[#F8F7F6]">
      <div className="max-w-6xl mx-auto px-4">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column - Text Content */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-[#222]">
              Meet Bespoke Luxury
              <span className="block text-primary">Your Aesthetic Nurse</span>
            </h2>

           <p className=" text-[#555] mb-6 leading-relaxed">
  Welcome to Lash Luxxe, where artistry meets precision. As the CEO and award-winning lash & brow artist, I’m passionate about enhancing natural beauty through expertly crafted designs. With years of hands-on experience, I bring a luxury touch to every set.
</p>

<p className="text-[#666] mb-8 leading-relaxed">
  Based in Blisworth, Northamptonshire, Lash Luxxe is more than a salon — it’s a serene escape. From soft wispy lashes to sculpted brows, each look is tailored to suit your style. Using only premium products, I ensure your lashes and brows remain healthy, long-lasting, and absolutely flawless.
</p>


            {/* Feature List */}
            <div className="space-y-3 mb-6">
              {[
                "Registered Nurse",
                "Aesthetic Medicine Certified",
                "5+ Years Experience",
                "Continuous Professional Development",
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-3">
                  <CircleCheckBig className="h-5 w-5 text-primary" />
                  <span className="text-[#333]">{item}</span>
                </div>
              ))}
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-2">
              <Badge icon={<Shield />} text="NMC Registered" />
              <Badge icon={<Award />} text="Aesthetic Certified" />
              <Badge icon={<Calendar />} text="Est. 2019" />
            </div>
          </div>

          {/* Right Column - Image & Cards */}
          <div className="space-y-6">
            {/* Profile Card */}
            <div className="rounded-xl border border-[#EAEAEA] shadow-sm overflow-hidden">
              <div className="relative h-64">
                <img
                  src="/professional-nurse-practitioner-headshot-in-medica.jpg"
                  alt="Bespoke Luxury - Aesthetic Nurse Practitioner"
                  className="object-cover w-full h-full"
                />
                
              </div>
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-2 gap-4">
              <InfoCard
                icon={<Award className="h-8 w-8 text-primary" />}
                title="Qualified Professional"
                text="Registered nurse with specialized training"
              />
              <InfoCard
                icon={<Heart className="h-8 w-8 text-primary" />}
                title="Personalized Care"
                text="Tailored treatments for individual needs"
              />
              <InfoCard
                icon={<Users className="h-8 w-8 text-primary" />}
                title="500+ Clients"
                text="Trusted by hundreds of satisfied clients"
              />
              <InfoCard
                icon={<CheckCircle2 className="h-8 w-8 text-primary" />}
                title="Natural Results"
                text="Subtle enhancements that look beautiful"
              />
            </div>
          </div>
        </div>

        {/* Testimonials Header */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-2 text-[#222]">
            What Our Clients Say
          </h3>
          <p className="text-[#777]">Real reviews from real clients</p>
        </div>

      {/* Testimonials */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  {[
    {
      name: "Olivia M.",
      service: "Eyelash Extensions, Brow Lamination",
      review:
        "I’ve been going to Lash Luxxe for years and Shannon is incredible at what she does. She’s so kind, detailed, and always makes you feel comfortable and beautiful every visit!",
    },
    {
      name: "Klaudia A.",
      service: "Brow Shaping, Lash Extensions",
      review:
        "Absolutely the most talented lash artist in Northampton! Shannon’s professionalism and precision are unmatched — my lashes always look flawless every single time.",
    },
    {
      name: "Claire G.",
      service: "Hybrid, Russian & Classic Lashes",
      review:
        "I’ve had so many styles done by Shannon — all perfect! She’s attentive, professional, and truly the best lash tech around. I wouldn’t trust anyone else with my lashes.",
    },
  ].map((item, i) => (
    <TestimonialCard key={i} {...item} />
  ))}
</div>

      </div>
    </section>
  );
}

/* Reusable Badge */
function Badge({ icon, text }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-md bg-primary text-white text-xs px-2 py-1">
      {icon}
      {text}
    </span>
  );
}

/* Reusable Info Card */
function InfoCard({ icon, title, text }) {
  return (
    <div className="text-center p-4 rounded-xl border border-[#EAEAEA] shadow-sm bg-white">
      <div className="mb-2 flex justify-center">{icon}</div>
      <h3 className="font-semibold text-sm mb-1 text-[#333]">{title}</h3>
      <p className="text-xs text-[#777]">{text}</p>
    </div>
  );
}

/* Reusable Testimonial Card */
function TestimonialCard({ name, service, review }) {
  return (
    <div className="rounded-xl border border-[#E5E2E1] shadow-sm bg-white/70 backdrop-blur-sm p-6 flex flex-col justify-between">
      {/* Star Rating */}
      <div className="flex mb-3 text-[#C5A67B]">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={16} fill="#C5A67B" stroke="#C5A67B" />
        ))}
      </div>

      {/* Review Text */}
      <p className="text-sm text-[#555] italic mb-4">“{review}”</p>

      {/* Footer */}
      <div className="flex items-center justify-between">
        <div>
          <p className="font-semibold text-sm text-[#333]">{name}</p>
          <p className="text-xs text-[#777]">{service}</p>
        </div>
        <span className="text-xs text-[#555] border px-2 py-0.5 rounded-md">
          Verified Client
        </span>
      </div>
    </div>
  );
}
