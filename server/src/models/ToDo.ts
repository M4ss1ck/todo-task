import { Model } from "objection";

export default class TODO extends Model {
    id!: number
    status!: "pending" | "done";
    task!: string
    static tableName = 'todos';
}