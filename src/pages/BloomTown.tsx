
import BloomTownBackground from "../bloomtown_pages_components/BloomTownBackground/BloomTownBackground";
import About from "../bloomtown_pages_components/sections/About/About";
import Hero from "../bloomtown_pages_components/sections/Hero/Hero";
import MonthlyBloomSessions from "../bloomtown_pages_components/sections/MonthlyBloomSessions/MonthlyBloomSessions";
import Mentors from "../bloomtown_pages_components/sections/Mentors/Mentors";
import SummerCamp from "../bloomtown_pages_components/sections/SummerCamp/SummerCamp";
import TalentGallery from "../bloomtown_pages_components/sections/TalentGallery/TalentGallery";
import Bloompartner from "../bloomtown_pages_components/sections/Bloompartners/Bloompartners";
import AgeDistricts from "../bloomtown_pages_components/sections/AgeDistricts/AgeDistricts";
import BloomFest from "../bloomtown_pages_components/sections/BloomFest/BloomFest";
import BloomAIHub from "../bloomtown_pages_components/sections/BloomAIHub/BloomAIHub";
import BloomtownFooter from "../bloomtown_pages_components/sections/BloomtownFooter/BloomtownFooter";
import BloomTownBackToTop from "../bloomtown_pages_components/sections/BloomTownBackToTop/BloomTownBackToTop";



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
            <AgeDistricts/>
            <BloomFest/>
            <BloomAIHub/>
            <BloomTownBackToTop/>
            <BloomtownFooter/>
            
            
        </main>

        </>
    );
}



export default BloomTown;