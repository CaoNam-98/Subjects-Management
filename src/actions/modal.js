import * as types from "./../constants/modal";

export const showModal = () => {
  return {
    type: types.SHOW_MODAL,
  };
};

export const hideModal = () => {
  return {
    type: types.HIDE_MODAL,
  };
};

export const changeModalTitle = (title) => ({
  // nếu return về nhiều hơn 1 cái thì phải có dấu () bao bọc bên ngoài
  type: types.CHANGE_MODAL_TITLE,
  payload: {
    title,
  },
});

export const changeModalContent = (component) => {
  return {
    type: types.CHANGE_MODAL_CONTENT,
    payload: {
      component,
    },
  };
};
