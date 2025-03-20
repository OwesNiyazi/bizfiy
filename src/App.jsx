import { useEffect, lazy, Suspense } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar";
import HeroContent from "./pages/HeroContent";
// import Testimonial from "./pages/Testimonial";
import AOS from "aos";
import "aos/dist/aos.css";
import Circle from "./canvas/Circle";
import StarryBackground from "./canvas/StarryBackground";
import DotCursor from "./canvas/DotCursor";
// import ProjectEstimateCompo from "./pages/ProjectEstimateCompo";

// Lazy load components
const AgencyHero = lazy(() => import("./pages/AgencyHero.jsx"));
const Process = lazy(() => import("./pages/Process.jsx"));
const ServicesSection = lazy(() => import("./pages/ServicesSection"));
const Projects = lazy(() => import("./pages/Projects"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const Footer = lazy(() => import("./pages/Footer"));
const AboutUs = lazy(() => import("./pages/AboutUs.jsx"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsAndConditions = lazy(() => import("./pages/TermsAndConditions"));

// Loading component
const LoadingSpinner = () => (
  <div className="flex justify-center items-center min-h-screen bg-[#01111f]">
    <div className="flex flex-col items-center gap-4">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      <p className="text-blue-500">Loading...</p>
    </div>
  </div>
);

// Main Home component
const Home = () => (
  <div id="home" className="relative h-full w-full overflow-hidden bg-[#01111f]">
    <DotCursor />
    <div id="hero" className="relative z-10 h-screen">
      <StarryBackground className="absolute inset-0 z-[-2]" />
      <Circle />
      <HeroContent />
    </div>
    <Suspense fallback={<LoadingSpinner />}>
      <div id="agency" className="mt-20">
        <AgencyHero />
      </div>
      <div id="process">
        <Process />
      </div>
      <div id="services">
        <ServicesSection />
      </div>
      {/* <div id="testimonials">
        <Testimonial />
      </div> */}
      <div id='projects'>
        <Projects/>
      </div>
      {/* <div id='project Estimation'>
        <ProjectEstimateCompo/>
      </div> */}
      <div id="contact">
        <ContactPage />
      </div>
    </Suspense>
  </div>
);

// Page wrapper component to ensure consistent styling
const PageWrapper = ({ children }) => (
  <div className="min-h-screen bg-[#01111f] text-white py-20">
    {children}
  </div>
);

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in",
      once: false,
    });
  }, []);

  return (
    <Router>
      <div className="relative w-full overflow-hidden bg-[#01111f]">
        <Navbar className="z-10" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route 
            path="/about" 
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <PageWrapper>
                  <AboutUs />
                </PageWrapper>
              </Suspense>
            } 
          />
          <Route 
            path="/privacy-policy" 
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <PageWrapper>
                  <PrivacyPolicy />
                </PageWrapper>
              </Suspense>
            } 
          />
          <Route 
            path="/terms-and-conditions" 
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <PageWrapper>
                  <TermsAndConditions />
                </PageWrapper>
              </Suspense>
            } 
          />
        </Routes>
        <Suspense fallback={<div className="bg-[#01111f] h-20" />}>
          <Footer />
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
