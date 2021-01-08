const validate = (values) => {
  // values là các name của field và giá trị của nó
  const error = {};
  const { title, description } = values;
  if (!title) {
    error.title = "Vui lòng nhập tiêu đề"; // error.name
  } else if (title.trim() && title.trim().length < 5) {
    error.title = "Tiêu đề phải nhiều hơn 5 ký tự";
  }

  if (!description) {
    error.description = "Vui lòng nhập mô tả";
  } else if (description.trim() && description.trim().length < 5) {
    error.description = "Mô tả không được ít hơn 5 ký tự";
  }
  return error;
};

export default validate;
