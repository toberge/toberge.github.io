import React, { useEffect, useState } from "react";
import Icons from "../common/Icons";
import { useTranslation } from "react-i18next";
import { technologies, Technology } from "../../data/Technologies";
import "./Technologies.scss";

// TODO fix whatever issues cause this whole mess to be necessary
const tempTech = {
    name: "Nothing",
    icon: "bash",
    description: "Something is wrong if you still see this",
};

function Technologies() {
    const [index, setIndex] = useState(0);
    const [techs, setTechs] = useState<Technology[]>([]);
    const { t, i18n } = useTranslation();

    useEffect(() => {
        setTechs(technologies[i18n.language] || technologies["en"]);
    }, [i18n.language]);

    const technology = techs[index] || tempTech;

    return (
        <>
            <h1 id="technologies">{t("Technologies")}</h1>
            <h2 id="technology-name">{technology.name}</h2>
            <p id="technology-description">{technology.description}</p>
            <div className="technology-wrapper">
                <div className="technology-grid">
                    {techs.map((t, i) => (
                        <div onClick={() => setIndex(i)}>
                            <Icons.Devicon language={t.icon} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Technologies;
