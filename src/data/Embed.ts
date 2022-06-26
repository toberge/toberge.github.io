export interface Embed {
    type: string; // "image" | "youtube" | "shadertoy"
    url: string;
    altText?: string;
}
