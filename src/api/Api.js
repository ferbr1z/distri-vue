import axios from "axios";

const token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbkBtYWlsLmNvbSIsImlhdCI6MTcwMTE4MTg1MiwiZXhwIjoxNzAxMjY4MjUyfQ.plxEoZ1m-nbJT24qG6nTmPVyB36uoF_P8kQ7d-wbtm0"

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