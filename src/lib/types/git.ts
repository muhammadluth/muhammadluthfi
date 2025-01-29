export interface GitConfigData {
    id: number;
    username: string | undefined;
    token: string | undefined;
    endpoint: string;
    type: string;
    is_active: boolean;
}