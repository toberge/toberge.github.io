import React from "react";
import { Education } from "../../data/Education";

interface Props {
    education: Education;
}

export function EducationItem({
    education: { school, program, date, description },
}: Props) {
    return (
        <li className="timeline">
            <h2>
                <span className={"time"}>{date}</span> —{" "}
                <span className={"title"}>{school}</span>
            </h2>
            <h3>{program}</h3>
            {description && <p>{description}</p>}
        </li>
    );
}
