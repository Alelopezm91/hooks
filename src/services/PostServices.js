import http from "./BaseServices";

export const postList = () => http.get("/posts");

export const postDetail = (id) => http.get(`/posts/${id}`);

