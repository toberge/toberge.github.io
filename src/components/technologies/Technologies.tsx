import React, { useState } from "react";
import Icons from "../common/Icons";
import { withTranslation } from "react-i18next";
import {
    SwitchTransition,
    CSSTransition,
    Transition,
} from "react-transition-group";
import { technologies } from "../../data/Technologies";
import "./Technologies.scss";

const tempTech = {
    name: "Nothing",
    icon: "bash",
    description: "Something is wrong if you still see this",
};

const Technologies = withTranslation()(({ i18n }) => {
    const [index, setIndex] = useState(0);
    const [hasChanged, setHasChanged] = useState(false);

    if (!i18n) return <></>;

    const techs = technologies[i18n.language] || technologies["en"];

    const technology = techs[index] || tempTech;

    const onChange = (i: number) => () => {
        setIndex(i);
        setHasChanged(true);
    };

    return (
        <>
            <h1 id="technologies">{i18n.t("Technologies")}</h1>
            <Transition in={hasChanged} appear timeout={300}>
                {state => (
                    <div
                        id="technology-description"
                        style={{
                            opacity: ["entering", "entered"].includes(state)
                                ? "1"
                                : "0",
                        }}
                    >
                        <h2>{technology.name}</h2>
                        <p>{technology.description}</p>
                    </div>
                )}
            </Transition>
            <div className="technology-wrapper">
                <div className="technology-grid">
                    {techs.map((t, i) => (
                        <div onClick={onChange(i)} onMouseOver={onChange(i)}>
                            <Icons.Devicon language={t.icon} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
});

export default Technologies;
