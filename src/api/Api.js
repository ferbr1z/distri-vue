import axios from "axios";

const token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbkBtYWlsLmNvbSIsImlhdCI6MTcwMDk0MTcxNCwiZXhwIjoxNzAxMDI4MTE0fQ.n7PglSdLMilEIVYzBVnKEVRTJsiohsf0xLQapW3RMqE"

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