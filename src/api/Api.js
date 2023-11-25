import axios from "axios";

const token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbkBnbWFpbC5jb20iLCJpYXQiOjE3MDA4ODIzNzcsImV4cCI6MTcwMDk2ODc3N30.ATp3xTCWky1uilNth54BV2e4hgOXdGjjp9fZ8-qvyI4"

export const api = axios.create(
    {
        baseURL: "http://localhost:5000",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
            "Access-Control-Allow-Origin": "*"
        }
    }
);