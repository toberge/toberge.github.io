import { Embed } from "../../data/Embed";

interface Props {
    title: string;
    subtitle?: string;
    date: string;
    description?: string;
    embed?: Embed;
    githubURL?: string;
    demoURL?: string;
}

export function TimelineItem({ title, subtitle, date, description }: Props) {
    return (
        <li className="timeline">
            <h2>
                <span className={"time"}>{date}</span> —{" "}
                <span className={"title"}>{title}</span>
            </h2>
            {subtitle && <h3>{subtitle}</h3>}
            {description && <p>{description}</p>}
        </li>
    );
}
