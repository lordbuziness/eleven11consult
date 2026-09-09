import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

import TechnologyHero from "../ServiceTechnology/hero/hero";
import TechnologyBody from "../ServiceTechnology/body/body";
import Technologywhychoose from "../ServiceTechnology/whychoose/whychoose";
import TechnologyCategories from "../ServiceTechnology/categories/categories";
import TechnologyCTA from "../ServiceTechnology/cta/cta";

function Technology() {
    return (
        <>
            <Navbar />

            <main>
                <TechnologyHero />
                <TechnologyBody />
                <Technologywhychoose />
                <TechnologyCategories />
                <TechnologyCTA />
            </main>

            <Footer />
        </>
    );
}

export default Technology;