import { GitConfigData } from "@/lib/types/git"

export interface ContributionsData {
    id: number,
    type: 'GITHUB' | 'GITLAB';
    account: GitConfigData,
    contribution: any
}