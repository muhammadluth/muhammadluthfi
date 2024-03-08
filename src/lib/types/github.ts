export interface GitHubConfigData {
    id: number;
    username: string | undefined;
    token: string | undefined;
    endpoint: string;
    type: string;
    is_active: boolean;
}