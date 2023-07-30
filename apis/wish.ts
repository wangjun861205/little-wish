export type Wish = {
    id: number,
    description: string,
    required_score: number,
    status: "unevaluated" | "unfulfilled" | "fulfilled"
    created_at: string,
}

export const queryWishes = async (limit: number = 10, offset: number = 0): Promise<Wish[]> => {
    return [
        {
            id: 1,
            description: "买玩具",
            required_score: 0,
            status: "unevaluated",
            created_at: "2023-07-30 14:08:00.000000+08:00"
        },
        {
            id: 2,
            description: "看电影",
            required_score: 0,
            status: "unevaluated",
            created_at: "2023-07-30 14:08:00.000000+08:00"
        },
        {
            id: 2,
            description: "吃雪糕",
            required_score: 2,
            status: "unfulfilled",
            created_at: "2023-07-30 14:08:00.000000+08:00"
        }
    ]
}