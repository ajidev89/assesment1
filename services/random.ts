import axios from "@/config/api";
import { catchAxiosError } from "@/services/response";

export const randomUser = async () => {
    try {
        const response = await axios.get("/api?results=5");
        return response.data.results;
    } catch (error) {
        catchAxiosError(error);
        throw error;
    }
};
