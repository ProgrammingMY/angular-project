export interface IUser {
    id: string;
    name: string;
}

export type ITask = {
    id: string;
    userId: string;
    title: string;
    description: string;
    date: string;
}