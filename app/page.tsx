import Hero from "@/components/shadcn-space/blocks/hero-01/hero";
import Header from "@/components/shadcn-space/blocks/hero-01/header";
import type { NavigationSection } from "@/components/shadcn-space/blocks/hero-01/header";
import AboutAndStats01 from "@/components/shadcn-space/blocks/about-us-01/index";
import Feature01 from "@/components/shadcn-space/blocks/feature-01/index";
import Team from "@/components/shadcn-space/blocks/team-01/team";
import Testimonial from "@/components/shadcn-space/blocks/testimonial-02/testimonial";
import CoursesSection from "@/components/entrain/courses-section";
import CTA from "@/components/shadcn-space/blocks/cta-01/cta";
import FAQ from "@/components/shadcn-space/blocks/faq-01/faq";
import ContactInfo from "@/components/shadcn-space/blocks/contact-01/contact-info";
import ContactForm from "@/components/shadcn-space/blocks/contact-01/contact-form";
import Blog from "@/components/shadcn-space/blocks/blog-01/blog";
import Footer from "@/components/shadcn-space/blocks/footer-01/footer";

const avatarList = [
  { image: "https://images.shadcnspace.com/assets/profiles/user-1.jpg" },
  { image: "https://images.shadcnspace.com/assets/profiles/user-2.jpg" },
  { image: "https://images.shadcnspace.com/assets/profiles/user-3.jpg" },
  { image: "https://images.shadcnspace.com/assets/profiles/user-4.jpg" },
];

const navigationData: NavigationSection[] = [
  {
    title: "Home",
    href: "#",
    isActive: true,
  },
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Courses",
    href: "#courses",
  },
  {
    title: "Mentors",
    href: "#mentors",
  },
  {
    title: "Testimonials",
    href: "#testimonials",
  },
  {
    title: "Contact",
    href: "#contact",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header navigationData={navigationData} />
      <Hero avatarList={avatarList} />
      <div id="about">
        <AboutAndStats01 />
      </div>
      <Feature01 />
      {/* <div id="mentors">
        <Team />
      </div> */}
      <div id="courses">
        <CoursesSection />
      </div>
      <CTA />
      <FAQ />
      {/* <div id="testimonials">
        <Testimonial />
      </div> */}
      <Blog />
      <section id="contact" className="bg-background py-10 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-16">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
