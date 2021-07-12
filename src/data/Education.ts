import en from "./en/education.json";
import no from "./no/education.json";

export interface Education {
    school: string;
    program: string;
    date: string;
    description?: string;
}

export const education: Record<string, Education[]> = {
    en,
    no,
};
