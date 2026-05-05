"use client";
import Services from "@/components/shadcn-space/blocks/services-02/services";
import { coursesData } from "@/lib/data";

const coursesFormatted = coursesData.map((course) => ({
  heading: course.title,
  descp: course.description,
  image: "https://images.shadcnspace.com/assets/services/services-1.png", // Using placeholder
}));

export default function CoursesSection() {
  return <Services data={coursesFormatted} />;
}
