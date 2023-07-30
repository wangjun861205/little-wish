export type Task = {
    id: number,
    name: string,
    description: string,
    is_done: boolean,
    score: number
    status: "doing" | "done" | "pending"
}
export const queryTasks = async (limit: number = 10, offset: number = 0): Promise<Task[]> => {
    return [
        {
            id: 1,
            name: "拖地",
            description: "将全家的地板拖一遍",
            is_done: false,
            score: 20,
            status: "pending"
        },
        {
            id: 2,
            name: "刷碗",
            description: "水池里的碗刷干净",
            is_done: false,
            score: 15,
            status: "pending",
        },
        {
            id: 3,
            name: "擦桌子",
            description: "将餐桌擦干净",
            is_done: false,
            score: 10,
            status: "pending",
        }
    ]
}

export const startTask = async (id: number): Promise<void | string> => {
    try {
        const res = await fetch(`/tasks/${id}/start`);
        if (res.status !== 200) {
            return res.text();
        }
    } catch (e) {
        console.error(e);
        return `出故障了`
    }
}