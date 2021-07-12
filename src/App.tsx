import React, { useEffect, useState } from "react";
import "./App.scss";
import { AboutMe } from "./components/aboutme/AboutMe";
import { initTranslations } from "./data/Translations";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/timeline/Projects";
import Work from "./components/timeline/Work";
import Education from "./components/timeline/Education";
import i18next from "i18next";
import Technologies from "./components/technologies/Technologies";

function App() {
    const [language, setLanguage] = useState("en");

    useEffect(() => {
        initTranslations().then(() => console.log("Ready to go."));
    }, []);

    useEffect(() => {
        i18next.changeLanguage(language);
    }, [language]);

    return (
        <div className="App">
            <header>
                <h1>Tore Bergebakken</h1>
                <Navbar setLanguage={setLanguage} />
            </header>
            <main>
                <AboutMe />
                <Technologies />
                <Projects />
                <Work />
                <Education />
            </main>
        </div>
    );
}

export default App;
