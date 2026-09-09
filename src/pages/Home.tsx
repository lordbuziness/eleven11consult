
import CTA from "../components/CTA/CTA";
import FinalCTA from "../components/FinalCTA/FinalCTA";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Homeabout from "../components/Homeabout/Homeabout";
import Insights from "../components/Insights/Insights";
import Navbar from "../components/Navbar/Navbar";
import Homework from "../components/Homework/Homework";
import Partners from "../components/Partners/Partners";
import Process from "../components/Process/Process";
import Sectors from "../components/Sectors/Sectors";
import ServicesIntro from "../components/ServicesIntro/ServicesIntro";
import Stats from "../components/Stats/Stats";
import Team from "../components/Team/Team";
import Testimonials from "../components/testemonials/testemonials";
import BackToTop from "../components/BackToTop/BackToTop";
import ScrollReveal from "../components/ScrollReveal/ScrollReveal";

function Home() {
    return (
        <>
            <Navbar />

            <ScrollReveal>
                <Hero />
            </ScrollReveal>

            <ScrollReveal>
                <ServicesIntro />
            </ScrollReveal>

            <ScrollReveal>
                <Homeabout />
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
                <Team />
            </ScrollReveal>

            <ScrollReveal>
                <Homework />
            </ScrollReveal>

            <ScrollReveal>
                <Partners />
            </ScrollReveal>

            <ScrollReveal>
                <Insights />
            </ScrollReveal>
            <ScrollReveal>
                <Testimonials />
            </ScrollReveal>

            <ScrollReveal>
                <FinalCTA />
            </ScrollReveal>

            <ScrollReveal>
                <Footer />
            </ScrollReveal>

            <BackToTop />
        </>
    );
}

export default Home;

