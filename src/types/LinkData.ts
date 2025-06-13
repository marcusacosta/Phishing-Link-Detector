import type { PhishingFlags } from "../utils/phishingHeuristics";

export interface LinkData {
    url: string;
    flags: PhishingFlags
}