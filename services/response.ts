import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const catchAxiosError = (error: any) => {
    if (error.response?.data?.message) {
        return toast.error(error.response.data.message);
    }

    if (error.response?.data?.errors) {
        for (let key in error.response.data.errors) {
            toast.error(error.response.data.errors[key][0]);
        }
    }
};

export const catchAxiosSuccess = (res: any) => {
    if (res?.data?.message) {
        toast.success(res.data.message);
    } else if (res?.message) {
        toast.success(res.message);
    }
};
