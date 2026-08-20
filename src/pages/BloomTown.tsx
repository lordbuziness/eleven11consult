
import BloomTownBackground from "../bloomtown_pages_components/BloomTownBackground/BloomTownBackground";
import Hero from "../bloomtown_pages_components/sections/Hero/Hero";
import BloomtownFooter from "../bloomtown_pages_components/sections/BloomtownFooter/BloomtownFooter";
import BloomTownBackToTop from "../bloomtown_pages_components/sections/BloomTownBackToTop/BloomTownBackToTop";
import BloomTownExperience from "../bloomtown_pages_components/sections/BloomTownExperience/BloomTownExperience";
import BloomTownFAQ from "../bloomtown_pages_components/sections/BloomTownFAQ/BloomTownFAQ";
import BloomTownMoments from "../bloomtown_pages_components/sections/BloomTownMoments/BloomTownMoments";
import BloomOClock from "../bloomtown_pages_components/sections/BloomOClock/BloomOClock";

function BloomTown() {
    return (
        <>
        <BloomTownBackground />
        
        
        <main className="bloomtown-page">
            <Hero/>
            <BloomTownExperience/>
            <BloomTownMoments/>
            <BloomTownFAQ/>
            <BloomOClock/>
            <BloomTownBackToTop/>
            <BloomtownFooter/>
            
            
        </main>

        </>
    );
}



export default BloomTown;