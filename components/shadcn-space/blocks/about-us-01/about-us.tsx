"use client"

import React from "react";
import { cn } from "@/lib/utils";
import { LucideIcon, BookOpen, Briefcase, GraduationCap, Users, Rocket, Target, Lightbulb, Award, TrendingUp } from "lucide-react";
import { Instrument_Serif } from "next/font/google";
import { motion } from "motion/react";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";
import FlowArt, { FlowSection } from "@/components/ui/story-scroll";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"],
});

type aboutusData = {
  icon: LucideIcon;
  title: string;
  color: string;
}[];

const journeyData = [
  {
    id: 1,
    title: "Performance Marketing",
    date: "",
    content: "Learn to run high-converting paid campaigns with proper targeting, budgeting, and tracking. With mentoring from the best digital marketing agency in Kerala, gain real experience in driving ROI.",
    category: "Learning",
    icon: BookOpen,
    relatedIds: [],
    energy: 100,
  },
  {
    id: 2,
    title: "Web Development",
    date: "",
    content: "Build responsive, high-performing websites with strong structure and user experience. Learn from the best digital marketing agency in Kerala how to create sites that convert, not just look good.",
    category: "Practice",
    icon: Briefcase,
    relatedIds: [],
    energy: 90,
  },
  {
    id: 3,
    title: "Content Creation",
    date: "",
    content: "Create engaging content for social media, ads, and brand storytelling. With guidance from the best digital marketing agency in Kerala, learn what truly connects and converts.",
    category: "Guidance",
    icon: Users,
    relatedIds: [],
    energy: 75,
  },
  {
    id: 4,
    title: "SEO",
    date: "",
    content: "Gain a deep understanding of optimizing websites to rank higher in search engine results, boosting visibility and driving organic traffic. With mentoring from the best digital marketing agency in Kerala, learn real strategies that deliver measurable results.",
    category: "Output",
    icon: GraduationCap,
    relatedIds: [],
    energy: 55,
  },
  {
    id: 5,
    title: "Social Media Marketing",
    date: "",
    content: "Learn to leverage popular platforms to create impactful campaigns, build brand presence, engage your audience, and drive conversions. Get guided by experts from the best digital marketing agency in Kerala and understand what actually works in real campaigns.",
    category: "Career",
    icon: Rocket,
    relatedIds: [],
    energy: 30,
  },
  {
    id: 6,
    title: "Email Marketing",
    date: "",
    content: "Master the art of high-converting email campaigns — from compelling content to engaging design and smart automation. With mentoring from the best digital marketing agency in Kerala, learn how to create email strategies that truly perform.",
    category: "Career",
    icon: Rocket,
    relatedIds: [],
    energy: 15,
  },
];

const AboutUs = ({
  aboutusData,
}: {
  aboutusData: aboutusData;
}) => {
  return (
    <>
      {/* Intro Section */}
      <section className="lg:py-20 sm:py-12 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-16">
          <div className="flex flex-col items-center justify-center gap-8 md:gap-12">
            {/* Main Heading */}
            <motion.div
              initial={{ y: -40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="flex flex-col items-center justify-center gap-6"
            >
              <h2 className="text-[clamp(2.5rem,8vw,8rem)] font-bold text-foreground text-center tracking-tight leading-[0.9]">
                Don't Just Learn — Start Doing
              </h2>
              <p className="text-[clamp(1rem,2.5vw,1.75rem)] text-center text-muted-foreground max-w-3xl font-normal leading-relaxed">
                Learn from the Best Digital Marketing Academy in Kerala
              </p>
            </motion.div>

            {/* Subheading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="text-center max-w-4xl"
            >
              <p className="text-[clamp(0.95rem,1.5vw,1.25rem)] text-foreground leading-relaxed">
                Most courses only teach theory.
              </p>
              <p className="text-[clamp(0.95rem,1.5vw,1.25rem)] text-foreground leading-relaxed mt-2">
                We go beyond — powered by insights and strategies used by the best digital marketing academy in Kerala, helping you build real, job-ready skills.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story Scroll Section */}
      <FlowArt aria-label="Learn by Doing">
        <FlowSection 
          aria-label="Real Execution" 
          style={{ backgroundColor: '#3b82f6', color: '#fff' }}
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em]">01 — Real Execution</p>
          <hr className="my-[2vw] border-none border-t border-white/40 opacity-100" />
          <div className="flex items-center gap-6">
            <Target className="w-16 h-16 sm:w-20 sm:h-20 text-white/90" />
            <h3 className="text-[clamp(2.5rem,8vw,8rem)] font-bold leading-[0.9] tracking-tight">
              Work On<br />Real Tasks
            </h3>
          </div>
          <hr className="my-[2vw] border-none border-t border-white/40 opacity-100" />
          <p className="mt-auto max-w-[50ch] text-[clamp(1rem,2.5vw,1.75rem)] font-normal leading-relaxed">
            You don't just watch tutorials — you work on real tasks. Gain hands-on experience that prepares you for actual job roles from day one.
          </p>
        </FlowSection>

        <FlowSection 
          aria-label="Deep Understanding" 
          style={{ backgroundColor: '#8b5cf6', color: '#fff' }}
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em]">02 — Deep Understanding</p>
          <hr className="my-[2vw] border-none border-t border-white/40" />
          <div className="flex items-center gap-6">
            <Lightbulb className="w-16 h-16 sm:w-20 sm:h-20 text-white/90" />
            <h3 className="text-[clamp(2.5rem,8vw,8rem)] font-bold leading-[0.9] tracking-tight">
              Professional<br />Environment
            </h3>
          </div>
          <hr className="my-[2vw] border-none border-t border-white/40" />
          <p className="max-w-[50ch] text-[clamp(1rem,2.5vw,1.75rem)] font-normal leading-relaxed">
            Understand how work happens in a professional environment. At the best digital marketing academy in Kerala, you learn strategies, workflows, and decision-making — not just tools.
          </p>
        </FlowSection>

        <FlowSection 
          aria-label="Tangible Portfolio" 
          style={{ backgroundColor: '#10b981', color: '#fff' }}
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em]">03 — Tangible Portfolio</p>
          <hr className="my-[2vw] border-none border-t border-white/40" />
          <div className="flex items-center gap-6">
            <Award className="w-16 h-16 sm:w-20 sm:h-20 text-white/90" />
            <h3 className="text-[clamp(2.5rem,8vw,8rem)] font-bold leading-[0.9] tracking-tight">
              Real<br />Projects
            </h3>
          </div>
          <hr className="my-[2vw] border-none border-t border-white/40" />
          <p className="max-w-[50ch] text-[clamp(1rem,2.5vw,1.75rem)] font-normal leading-relaxed">
            Build a portfolio with real projects and results. With guidance from the best digital marketing academy in Kerala, showcase what you've done — not just certificates.
          </p>
        </FlowSection>

        <FlowSection 
          aria-label="Unstoppable Confidence" 
          style={{ backgroundColor: '#f97316', color: '#fff' }}
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em]">04 — Unstoppable Confidence</p>
          <hr className="my-[2vw] border-none border-t border-white/40" />
          <div className="flex items-center gap-6">
            <TrendingUp className="w-16 h-16 sm:w-20 sm:h-20 text-white/90" />
            <h3 className="text-[clamp(2.5rem,8vw,8rem)] font-bold leading-[0.9] tracking-tight">
              Interview<br />Ready
            </h3>
          </div>
          <hr className="my-[2vw] border-none border-t border-white/40" />
          <p className="mt-auto max-w-[50ch] text-[clamp(1rem,2.5vw,1.75rem)] font-normal leading-relaxed">
            Walk into interviews with confidence. Because at the best digital marketing academy in Kerala, you've already done the work, not just learned about it.
          </p>
        </FlowSection>
      </FlowArt>

      {/* Your Journey Section */}
      <section className="lg:py-20 sm:py-12 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="w-full flex flex-col gap-6"
          >
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2">
              <div>
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                  Your Journey
                </span>
                <h3 className={cn("mt-1.5 text-3xl sm:text-4xl font-normal leading-tight", instrumentSerif.className)}>
                  From zero to career-ready
                </h3>
              </div>
              <p className="text-sm text-muted-foreground max-w-xs sm:text-right leading-relaxed">
                What You'll Learn in This Course
              </p>
            </div>
            <RadialOrbitalTimeline timelineData={journeyData} />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
