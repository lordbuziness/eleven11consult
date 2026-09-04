import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

import ServicesHero from "../Services/hero/hero";
import ServicesIntro from "../Services/intro/intro";
import ServiceList from "../Services/service-list/service-list";

function Services() {
    return (
        <>
            <Navbar />

            <main>
                <ServicesHero />
                <ServicesIntro />
                <ServiceList />
            </main>

            <Footer />
        </>
    );
}

export default Services;