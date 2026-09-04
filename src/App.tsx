
import { BrowserRouter, Routes, Route } from "react-router-dom";

import CareersPage from "./pages/Careers";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQs from "./pages/FAQs";
import OurProcessPage from "./pages/OurProcess";
import WorksPage from "./pages/Works";
import Insights from "./pages/Insights";

import Agriculture from "./pages/Agriculture";
import Construction from "./pages/Construction";
import Energy from "./pages/Energy";
import MediaCommunications from "./pages/MediaCommunications";
import Services from "./pages/Services";
import Technology from "./pages/Technology";
import Training from "./pages/Training";
import ScrollToTop from "./components/ScrollToTop";


function App() {
    return (
        <BrowserRouter>
        <ScrollToTop />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/faqs" element={<FAQs />} />
                <Route path="/insights" element={<Insights />} />
                <Route path="/process" element={<OurProcessPage />} />
                <Route path="/career" element={<CareersPage />} />
                <Route path="/works" element={<WorksPage />} />

                <Route path="/services" element={<Services />} />
                <Route
                    path="/services/media"
                    element={<MediaCommunications />}
                />
                <Route
                    path="/services/technology"
                    element={<Technology />}
                />
                <Route path="/services/energy" element={<Energy />} />
                <Route
                    path="/services/agriculture"
                    element={<Agriculture />}
                />
                <Route
                    path="/services/construction"
                    element={<Construction />}
                />
                <Route path="/services/training" element={<Training />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;

