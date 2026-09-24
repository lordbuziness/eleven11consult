import type { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import "./LegalPage.css";

interface LegalPageProps {
    title: string;
    children: ReactNode;
}

function LegalPage({ title, children }: LegalPageProps) {
    const navigate = useNavigate();

    return (
        <main className="legal-page">
            <div className="legal-page__container">

                <button
                    type="button"
                    className="legal-page__back"
                    onClick={() => navigate(-1)}
                >
                    &larr; Back
                </button>

                <header className="legal-page__header">
                    <span>ELEVEN11 CONSULT</span>
                    <h1>{title}</h1>
                </header>

                <article className="legal-page__content">
                    {children}
                </article>

            </div>
        </main>
    );
}

export default LegalPage;
