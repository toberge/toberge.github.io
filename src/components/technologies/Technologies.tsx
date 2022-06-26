import { useState } from "react";
import Icons from "../common/Icons";
import { useTranslation } from "react-i18next";
import { technologies } from "../../data/Technologies";
import "./Technologies.scss";

const tempTech = {
    name: "Nothing",
    icon: "bash",
    description: "Something is wrong if you still see this",
};

const Technologies = () => {
    const { t, i18n } = useTranslation();
    const [index, setIndex] = useState(0);

    const techs = technologies[i18n.language] || technologies["en"];
    const technology = techs[index] || tempTech;

    return (
        <>
            <h1 id="technologies">{t("Technologies")}</h1>
            <h2 id="technology-name">{technology.name}</h2>
            <p id="technology-description">{technology.description}</p>
            <div className="technology-wrapper">
                <div className="technology-grid">
                    {techs.map((t, i) => (
                        <div
                            onClick={() => setIndex(i)}
                            onMouseOver={() => setIndex(i)}
                        >
                            <Icons.Devicon language={t.icon} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Technologies;
