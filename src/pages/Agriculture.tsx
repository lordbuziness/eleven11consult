import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

import AgricultureHero from "../ServiceAgriculture/hero/hero";
import AgricultureBody from "../ServiceAgriculture/body/body";
import AgricultureCategories from "../ServiceAgriculture/categories/categories";
import AgricultureCTA from "../ServiceAgriculture/cta/cta";

function Agriculture() {
    return (
        <>
            <Navbar />

            <main>
                <AgricultureHero />
                <AgricultureBody />
                <AgricultureCategories />
                <AgricultureCTA />
            </main>

            <Footer />
        </>
    );
}

export default Agriculture;
