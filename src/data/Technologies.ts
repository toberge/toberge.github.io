import en from "./en/technologies.json";
import no from "./no/technologies.json";

export interface Technology {
    name: string;
    icon: string;
    description: string;
}

export const technologies: Record<string, Technology[]> = {
    en,
    no,
};
