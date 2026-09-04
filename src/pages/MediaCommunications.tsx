import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

import MediaHero from "../ServiceMedia/hero/hero";
import MediaBody from "../ServiceMedia/body/body";
import MediaCategories from "../ServiceMedia/categories/categories";
import MediaCTA from "../ServiceMedia/cta/cta";

function Media() {
    return (
        <>
            <Navbar />

            <main>
                <MediaHero />
                <MediaBody />
                <MediaCategories />
                <MediaCTA />
            </main>

            <Footer />
        </>
    );
}

export default Media;