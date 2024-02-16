export interface Profile {
    userid: string,
    name: string,
    nickname: {
        type: String,
        trim: true
    },
    liked_songs: string[],
    num_liked_songs: number,
    avatar: string | { /*accepts data url or the data/contentType */
        data: Buffer,
        contentType: String
    },
}