import { PropsWithChildren } from "react";

import "./Timeline.scss";

export function Timeline({
    children,
    withEmbeds,
}: PropsWithChildren<{ withEmbeds?: boolean }>) {
    return (
        <ul className={`timeline ${withEmbeds ? "timeline-with-embeds" : ""}`}>
            {children}
        </ul>
    );
}
