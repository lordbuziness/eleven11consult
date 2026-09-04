import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

import EnergyHero from "../ServiceEnergy/hero/hero";
import EnergyBody from "../ServiceEnergy/body/body";
import EnergyCategories from "../ServiceEnergy/categories/categories";
import EnergyCTA from "../ServiceEnergy/cta/cta";

function Energy() {
    return (
        <>
            <Navbar />

            <main>
                <EnergyHero />
                <EnergyBody />
                <EnergyCategories />
                <EnergyCTA />
            </main>

            <Footer />
        </>
    );
}

export default Energy;