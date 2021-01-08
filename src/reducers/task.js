import {
  toastError,
  toastSuccess,
  toastSuccessChangeData,
} from "./../helpers/toastHelper";
import * as taskConstants from "./../constants/task";

const initialState = {
  listTask: [],
  taskEditing: null,
};

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case taskConstants.FETCH_TASK:
      return {
        ...state,
        listTask: [],
      };

    case taskConstants.FETCH_TASK_SUCCESS: {
      const { data } = action.payload;
      toastSuccess(data);
      return {
        listTask: action.payload.data,
      };
    }

    case taskConstants.FETCH_TASK_FAIL: {
      const { error } = action.payload; // do chúng ta không return liền nên phải bao bọc nó trong {}
      toastError(error);
      return {
        ...state,
        listTask: [],
      };
    }

    case taskConstants.FILTER_TASK_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        listTask: data,
      };
    }

    case taskConstants.ADD_TASK: {
      return {
        ...state,
      };
    }

    case taskConstants.ADD_TASK_SUCCESS: {
      const { data } = action.payload;
      toastSuccessChangeData("Thêm công việc thành công !");
      return {
        ...state,
        listTask: state.listTask.concat([data]),
      };
    }

    case taskConstants.ADD_TASK_FAIL: {
      const { error } = action.payload;
      toastError(error);
      return {
        ...state,
      };
    }

    case taskConstants.TASK_EDITING: {
      const { taskEditing } = action.payload;
      return {
        ...state,
        taskEditing,
      };
    }

    case taskConstants.UPDATE_TASK: {
      return {
        ...state,
      };
    }

    case taskConstants.UPDATE_TASK_SUCCESS: {
      const { data } = action.payload;
      const { listTask } = state; // lấy danh sách các task.
      const index = listTask.findIndex((item) => item.id === data.id); // tìm kiếm vị trí cần chỉnh sửa
      if (index !== -1) {
        const newList = [
          ...listTask.slice(0, index), // nghĩa là ...(listTask.slice(0, index)),
          data,
          ...listTask.slice(index + 1),
        ];
        toastSuccessChangeData("Chỉnh sửa công việc thành công !");
        return {
          ...state,
          listTask: newList,
        };
      }
      return {
        ...state,
      };
    }

    case taskConstants.UPDATE_TASK_FAIL: {
      const { error } = action.payload;
      toastError(error);
      return {
        ...state,
      };
    }

    case taskConstants.DELETE_TASK: {
      return {
        ...state,
      };
    }

    case taskConstants.DELETE_TASK_SUCCESS: {
      const { id } = action.payload;
      const { listTask } = state; // lấy danh sách các task.
      const listTaskNew = listTask.filter((item) => item.id !== id); // tìm kiếm vị trí cần chỉnh sửa
      toastSuccessChangeData("Xoá công việc thành công !");
      return {
        ...state,
        listTask: listTaskNew,
      };
    }

    case taskConstants.DELETE_TASK_FAIL: {
      const { error } = action.payload;
      toastError(error);
      return {
        ...state,
      };
    }

    default:
      return state;
  }
};

export default myReducer;
