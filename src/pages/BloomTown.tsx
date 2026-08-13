
import BloomTownBackground from "../bloomtown_pages_components/BloomTownBackground/BloomTownBackground";
import About from "../bloomtown_pages_components/sections/About/About";
import Hero from "../bloomtown_pages_components/sections/Hero/Hero";
import Footer from "../components/Footer/Footer";
import BackToTop from "../components/BackToTop/BackToTop";

function BloomTown() {
    return (
        <>
        <BloomTownBackground />
        
        
        <main className="bloomtown-page">
            <Hero/>
            <About/>
            <Footer/>
            <BackToTop/>
        </main>

        </>
    );
}



export default BloomTown;