import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

import InsightsHero from "../Insights/hero/hero";
import InsightsIntro from "../Insights/intro/intro";
import FeaturedArticles from "../Insights/featured/featured";
import ArticleList from "../Insights/article-list/article-list";
import NewsletterSub from "../Insights/newslettersub/newslettersub";

function Insights() {
    return (
        <>
            <Navbar />

            <main>
                <InsightsHero />
                <InsightsIntro />
                <FeaturedArticles />
                <ArticleList />
                <NewsletterSub />
            </main>

            <Footer />
        </>
    );
}

export default Insights;