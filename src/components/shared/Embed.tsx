import { Embed } from "../../data/Embed";

export const EmbedBox = ({ embed }: { embed: Embed }) => {
    switch (embed.type) {
        case "image":
            return (
                <img className="embed" src={embed.url} alt={embed.altText} />
            );
        case "youtube":
            return <p className="embed">video here</p>;
        case "shadertoy":
            return (
                <iframe
                    className="embed shadertoy"
                    width="100%"
                    height="100%"
                    style={{ marginBottom: "20%" }}
                    frameBorder="0"
                    src={`${embed.url}${
                        embed.url.includes("?") ? "&" : "?"
                    }gui=true&paused=true&muted=false`}
                    allowFullScreen
                ></iframe>
            );
        case "soundcloud":
            return (
                <iframe
                    className="embed soundcloud"
                    width="100%"
                    scrolling="no"
                    frameBorder="no"
                    src={`${embed.url}&color=%23ff5500&auto_play=false&hide_related=true&show_comments=true&show_user=true&show_reposts=false&show_teaser=true`}
                ></iframe>
            );
        default:
            return <></>;
    }
};
