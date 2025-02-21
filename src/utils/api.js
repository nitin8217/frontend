import axios from "axios";

const API_URL = "http://localhost:5000/bfhl";

export const fetchData = async (data) => {
    try {
        const response = await axios.post(API_URL, data);
        return response.data;
    } catch (error) {
        return { is_success: false, message: "API Error" };
    }
};
