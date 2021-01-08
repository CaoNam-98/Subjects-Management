import { toast } from "react-toastify";

// Khi gọi API mà có lỗi xảy ra thì thông báo lỗi với react-toastify
export const toastError = (error) => {
  let message = null;
  if (typeof error === "object" && error.message) {
    ({ message } = error); // tạo biến var {error} = error.mesage thì không cần () còn gán thì phải có ()
  }
  if (message !== null && typeof message !== "undefined" && message !== "") {
    toast.error(message);
  }
};

export const toastSuccess = (data) => {
  if (data.length > 0) {
    toast.success("Connect API Success !");
  }
};

export const toastSuccessChangeData = (message) => {
  if (message !== null && typeof message !== "undefined" && message !== "") {
    toast.success(message);
  }
};
