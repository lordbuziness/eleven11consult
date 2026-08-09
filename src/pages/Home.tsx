import Contact from "../components/Contact/Contact";
import CTA from "../components/CTA/CTA";
import FinalCTA from "../components/FinalCTA/FinalCTA";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Insights from "../components/Insights/Insights";
import Navbar from "../components/Navbar/Navbar";
import Partners from "../components/Partners/Partners";
import Process from "../components/Process/Process";
import Sectors from "../components/Sectors/Sectors";
import ServicesIntro from "../components/ServicesIntro/ServicesIntro";
import Stats from "../components/Stats/Stats";
import Team from "../components/Team/Team";
import BackToTop from "../components/BackToTop/BackToTop";
import ScrollReveal from "../components/ScrollReveal/ScrollReveal";

function Home() {
  return (
    <>
      <ScrollReveal>
      <Navbar />
      </ScrollReveal>
      <ScrollReveal>
      <Hero />
      </ScrollReveal>
      <ScrollReveal>
      <ServicesIntro />
      </ScrollReveal>
      <ScrollReveal>
      <Stats />
      </ScrollReveal>
      <ScrollReveal>
      <Sectors />
      </ScrollReveal>
      <ScrollReveal>
      <CTA />
      </ScrollReveal>
      <ScrollReveal>
      <Process />
      </ScrollReveal>
      <ScrollReveal>
      <Team/>
      </ScrollReveal>
      <ScrollReveal>
      <Partners/>  
      </ScrollReveal>
      <Insights/> 
      <ScrollReveal>
      <FinalCTA/>
      </ScrollReveal>
      <ScrollReveal>
      <Contact />
      </ScrollReveal>
      <ScrollReveal>
      <Footer />
      </ScrollReveal>
      <ScrollReveal>
      <BackToTop />
    </ScrollReveal>
</>    
  );
}


export default Home;