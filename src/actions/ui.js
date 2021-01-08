import * as types from "./../constants/ui";

export const showLoading = () => {
  return {
    type: types.SHOW_LOADING,
  };
};

export const hideLoading = () => {
  return {
    type: types.HIDE_LOADING,
  };
};

export const showSidebar = () => {
  return {
    type: types.SHOW_SIDEBAR,
  };
};

export const hideSidebar = () => {
  return {
    type: types.HIDE_SIDEBAR,
  };
};
