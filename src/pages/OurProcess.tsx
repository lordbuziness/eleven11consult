import ProcessHero from "../Process/hero/hero";
import ProcessIntro from "../Process/intro/intro";
import ProcessSteps from "../Process/process/process";
import ProcessCTA from "../Process/cta/cta";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

function OurProcessPage() {
    return (
        <>
            <Navbar />

            <main>
                <ProcessHero />
                <ProcessIntro />
                <ProcessSteps />
                <ProcessCTA />
            </main>

            <Footer />
        </>
    );
}

export default OurProcessPage;