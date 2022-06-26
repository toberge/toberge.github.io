import { useState } from "react";
import { withTranslation } from "react-i18next";
import { Project, projects } from "../../data/Projects";
import Icons from "../common/Icons";
import "./Projects.scss";
import { EmbedBox } from "../shared/Embed";
import { i18n } from "i18next";

interface Props {
    project: Project;
    i18n: i18n;
}

export function ProjectItem({
    project: { name, date, description, embed, githubURL, paperURL, demoURL },
    i18n,
}: Props) {
    return (
        <li className="project">
            <div className="text">
                <h2>
                    <span className={"time"}>{date}</span> —{" "}
                    <span className={"title"}>{name}</span>
                </h2>
                {description && <p>{description}</p>}
            </div>
            {embed && <EmbedBox embed={embed} />}
            <div className="links">
                {githubURL && (
                    <a
                        className="button"
                        href={githubURL}
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        <Icons.GitHub />
                        {" " + i18n.t("Code")}
                    </a>
                )}
                {paperURL && (
                    <a
                        className="button"
                        href={paperURL}
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        <Icons.Paper />
                        {" " + i18n.t("Paper")}
                    </a>
                )}
                {demoURL && (
                    <a
                        className="button"
                        href={demoURL}
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        <Icons.Demo />
                        {" " + i18n.t("Demo")}
                    </a>
                )}
            </div>
        </li>
    );
}

const Projects = withTranslation()(({ i18n }) => {
    const [showAll, setShowAll] = useState(false);

    if (!i18n) return <></>;

    return (
        <>
            <h1 id="projects" style={{ marginBottom: 0 }}>
                {i18n.t("Projects")}
            </h1>
            <ul className="project-area">
                {(projects[i18n.language] || projects["en"])
                    .slice(0, showAll ? undefined : 3)
                    .map(p => (
                        <ProjectItem project={p} i18n={i18n} />
                    ))}
                {!showAll &&
                    (projects[i18n.language] || projects["en"]).length > 3 && (
                        <li>
                            <button
                                className="button"
                                onClick={() => setShowAll(true)}
                            >
                                {i18n.t("Show All")}
                            </button>
                        </li>
                    )}
            </ul>
        </>
    );
});

export default Projects;
