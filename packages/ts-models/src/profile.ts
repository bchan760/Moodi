export interface Profile {
    userid: string;
    name: string;
    nickname?: string;
    liked_songs: string[];
    num_liked_songs: number;
    avatar?: string;
}