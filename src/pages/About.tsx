import AboutHero from "../aboutcomponents/Hero/Hero";
import OurStory from "../aboutcomponents/OurStory/OurStory";
import Philosophy from "../aboutcomponents/Philosophy/Philosophy";
import MissionStatement from "../aboutcomponents/MissionStatement/MissionStatement";
import Stats from "../aboutcomponents/Stats/Stats";
import CTA from "../components/CTA/CTA";
import BackToTop from "../components/BackToTop/BackToTop"
import Footer from "../components/Footer/Footer";
import ScrollReveal from "../components/ScrollReveal/ScrollReveal";

function About() {
    return (
        <>
            <ScrollReveal>
            <AboutHero />
            </ScrollReveal>
            <ScrollReveal>
            <OurStory />
            </ScrollReveal>
            <ScrollReveal>
            <Philosophy />
            </ScrollReveal>
            <ScrollReveal>
            <MissionStatement />
           </ScrollReveal>
             <ScrollReveal>
              <Stats />
              </ScrollReveal>
              <ScrollReveal>
              <CTA/>
              </ScrollReveal>
              <ScrollReveal>
              <BackToTop />
              </ScrollReveal>
              <ScrollReveal>
              <Footer />
              </ScrollReveal>
        </>
    );
}

export default About;