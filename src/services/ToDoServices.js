import http from "./BaseServices";

export const todoList = () => http.get("/todos");

export const todoDetail = (id) => http.get(`/todos/${id}`);