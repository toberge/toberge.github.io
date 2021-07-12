import React from "react";
import { Embed } from "../../data/Embed";
import Icons from "../common/Icons";

interface Props {
    title: string;
    subtitle?: string;
    date: string;
    description?: string;
    embed?: Embed;
    githubURL?: string;
    demoURL?: string;
}

export function TimelineItem({
    title,
    subtitle,
    date,
    description,
    embed,
    githubURL,
    demoURL,
}: Props) {
    return (
        <li className="timeline">
            <div className="text">
                <h2>
                    <span className={"time"}>{date}</span> —{" "}
                    <span className={"title"}>{title}</span>
                </h2>
                {subtitle && <h3>{subtitle}</h3>}
                {description && <p>{description}</p>}
            </div>
            {embed &&
                (embed.type === "image" ? (
                    <img
                        className="embed"
                        src={embed.url}
                        alt={embed.altText}
                    />
                ) : (
                    embed.type === "youtube" && (
                        <p className="embed">video here</p>
                    )
                ))}
            <div className="links">
                {githubURL && (
                    <a
                        className="button"
                        href={githubURL}
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        <Icons.GitHub /> Code
                    </a>
                )}
                {demoURL && (
                    <a
                        className="button"
                        href={demoURL}
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        <Icons.Demo /> Demo
                    </a>
                )}
            </div>
        </li>
    );
}
