import React, { useEffect, useState } from "react";
import "./App.scss";
import { initTranslations } from "./data/Translations";
import i18next from "i18next";
const Navbar = React.lazy(() => import("./components/navbar/Navbar"));
const AboutMe = React.lazy(() => import("./components/aboutme/AboutMe"));
const Technologies = React.lazy(
    () => import("./components/technologies/Technologies"),
);
const Projects = React.lazy(() => import("./components/projects/Projects"));
const Work = React.lazy(() => import("./components/timeline/Work"));
const Education = React.lazy(() => import("./components/timeline/Education"));
const Music = React.lazy(() => import("./components/music/Music"));

function App() {
    const [language, setLanguage] = useState("en");

    useEffect(() => {
        initTranslations().then(() => console.log("Ready to go."));
    }, []);

    useEffect(() => {
        (async () => {
            await i18next.changeLanguage(language);
        })();
    }, [language]);

    return (
        <div className="App">
            <header>
                <h1>Tore Bergebakken</h1>
                <React.Suspense fallback={<></>}>
                    <Navbar setLanguage={setLanguage} />
                </React.Suspense>
            </header>
            <main>
                <React.Suspense fallback={<h1>Loading...</h1>}>
                    <AboutMe />
                    {/* <Technologies /> */}
                    <Projects />
                    <Work />
                    <Education />
                    <Music />
                </React.Suspense>
            </main>
        </div>
    );
}

export default App;
