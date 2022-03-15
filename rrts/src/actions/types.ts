import { FetchTodoActions, DeleteTodoAction } from "./todos";

export enum ActionTypes {
    fetchTodos,
    deleteTodo
}

export type Action = FetchTodoActions | DeleteTodoAction;