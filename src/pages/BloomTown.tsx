
import BloomTownBackground from "../bloomtown_pages_components/BloomTownBackground/BloomTownBackground";
import About from "../bloomtown_pages_components/sections/About/About";
import Hero from "../bloomtown_pages_components/sections/Hero/Hero";
import Footer from "../components/Footer/Footer";
import BackToTop from "../components/BackToTop/BackToTop";
import MonthlyBloomSessions from "../bloomtown_pages_components/sections/MonthlyBloomSessions/MonthlyBloomSessions";
import Mentors from "../bloomtown_pages_components/sections/Mentors/Mentors";
import SummerCamp from "../bloomtown_pages_components/sections/SummerCamp";
import TalentGallery from "../bloomtown_pages_components/sections/TalentGallery/TalentGallery";
import Bloompartner from "../bloomtown_pages_components/sections/Bloompartners/Bloompartners";
function BloomTown() {
    return (
        <>
        <BloomTownBackground />
        
        
        <main className="bloomtown-page">
            <Hero/>
            <About/>
            <MonthlyBloomSessions/>
            <SummerCamp/>
            <Mentors/>
            <TalentGallery/>
            <Bloompartner/>
            <Footer/>
            <BackToTop/>
            
        </main>

        </>
    );
}



export default BloomTown;