import axios from "axios";

class AxiosService {
  constructor() {
    var instance = axios.create();
    instance.interceptors.response.use(this.handleSuccess, this.handleFail); //Vì ta xử lý dữ liệu với kết quả trả về nên dùng response
    this.instance = instance;
  }

  handleSuccess(response) {
    // chúng ta xử lý thành công và thất bại bằng interceptor
    return response;
  }

  handleFail(error) {
    return Promise.reject(error); // chúng ta xử lý thành công và thất bại bằng interceptor
  }

  get(url) {
    return this.instance.get(url);
  }

  post(url, body) {
    return this.instance.post(url, body);
  }

  put(url, body) {
    return this.instance.put(url, body);
  }

  delete(url) {
    return this.instance.delete(url);
  }
}

export default new AxiosService();
