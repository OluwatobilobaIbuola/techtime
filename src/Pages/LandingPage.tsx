import Hero from "../components/LandingPageSections/Hero";
import FAQ from "../components/LandingPageSections/FAQ";
import Partners from "../components/LandingPageSections/Partners";
import Courses from "../components/LandingPageSections/Courses";
import CoursesByCategory from "../components/LandingPageSections/CoursesByCategory";
import Testimonials from "../components/LandingPageSections/Testimonials";
import CTA from "../components/LandingPageSections/CTA";
import Features from "../components/LandingPageSections/Features";
import HelmetSEO from "../components/HelmetSEO/index";

export default function LandingPage() {
  return (
    <>
      <HelmetSEO
        title={`Tech Time | Home`}
        content={`Tech Time is a platform that provides high quality video, audio and live classes.`}
        href={`/`}
      />
      <Hero />
      <Partners />
      <Courses />
      <Features />
      <CoursesByCategory />
      <Testimonials />
      <CTA />
      <FAQ />
    </>
  );
}
