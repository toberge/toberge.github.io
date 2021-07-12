import en from "./en/work.json";
import no from "./no/work.json";

export interface Work {
    title: string;
    position?: string;
    date: string;
    description?: string;
}

export const workExperience: Record<string, Work[]> = {
    en,
    no,
};
