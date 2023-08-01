export type Child = {
    id: number,
    name: string,
    family_id: number,
}

export const queryChildren = async (limit: number, offset: number): Promise<Child[]> => {
    return [
        {
            id: 1,
            name: "不熊",
            family_id: 1,
        }
    ]
}
