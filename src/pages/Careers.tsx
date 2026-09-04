import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

import CareersHero from "../Careers/hero/hero";
import CareersBody from "../Careers/body/body";
import RoleList from "../Careers/role-list/role-list";
import ApplicationCTA from "../Careers/application-cta/application-cta";

function CareersPage() {
    return (
        <>
            <Navbar />

            <main>
                <CareersHero />
                <CareersBody />
                <RoleList />
                <ApplicationCTA />
            </main>

            <Footer />
        </>
    );
}

export default CareersPage;