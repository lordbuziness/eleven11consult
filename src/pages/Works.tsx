import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

import WorksHero from "../works/hero/hero";
import WorksIntro from "../works/intro/intro";
import FilterTab from "../works/filter-tab/filter-tab";
import ProjectGrid from "../works/project-grid/project-grid";

function WorksPage() {
    return (
        <>
            <Navbar />

            <main>
                <WorksHero />
                <WorksIntro />
                <FilterTab />
                <ProjectGrid />
            </main>

            <Footer />
        </>
    );
}

export default WorksPage;