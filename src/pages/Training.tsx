import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

import TrainingHero from "../ServiceTraining/hero/hero";
import TrainingBody from "../ServiceTraining/body/body";
import TrainingCategories from "../ServiceTraining/categories/categories";
import TrainingCTA from "../ServiceTraining/cta/cta";

function Training() {
    return (
        <>
            <Navbar />

            <main>
                <TrainingHero />
                <TrainingBody />
                <TrainingCategories />
                <TrainingCTA />
            </main>

            <Footer />
        </>
    );
}

export default Training;