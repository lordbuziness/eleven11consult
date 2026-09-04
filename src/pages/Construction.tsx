import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

import ConstructionHero from "../ServiceConstruction/hero/hero";
import ConstructionBody from "../ServiceConstruction/body/body";
import ConstructionCategories from "../ServiceConstruction/categories/categories";
import ConstructionCTA from "../ServiceConstruction/cta/cta";

function Construction() {
    return (
        <>
            <Navbar />

            <main>
                <ConstructionHero />
                <ConstructionBody />
                <ConstructionCategories />
                <ConstructionCTA />
            </main>

            <Footer />
        </>
    );
}

export default Construction;