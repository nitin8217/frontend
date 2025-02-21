import axios from "axios";

const API_URL = "https://backend-1-fdv1.onrender.com/bfhl";

export const fetchData = async (data) => {
    try {
        const response = await axios.post(API_URL, data);
        return response.data;
    } catch (error) {
        return { is_success: false, message: "API Error" };
    }
};
