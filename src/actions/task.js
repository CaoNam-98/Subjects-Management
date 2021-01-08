// eslint-disable-next-line import/no-cycle
import * as taskApis from "./../apis/task";
import * as taskConstants from "./../constants/task";
// eslint-disable-next-line import/no-cycle
import { STATUSES } from "./../constants";

export const fetchListTask = (params = {}) => {
  return {
    type: taskConstants.FETCH_TASK,
    payload: {
      params,
    },
  };
};

export const fetchListTaskSuccess = (data) => {
  return {
    type: taskConstants.FETCH_TASK_SUCCESS,
    payload: {
      data,
    },
  };
};

export const fetchListTaskFailed = (error) => {
  return {
    type: taskConstants.FETCH_TASK_FAIL,
    payload: {
      error,
    },
  };
};

export const fetchListTaskRequest = () => {
  return (dispatch) => {
    dispatch(fetchListTask());
    taskApis
      .getList()
      .then((res) => {
        dispatch(fetchListTaskSuccess(res.data));
      })
      .catch((error) => {
        dispatch(fetchListTaskFailed(error));
      });
  };
};

export const filterTask = (keyword) => {
  return {
    type: taskConstants.FILTER_TASK,
    payload: {
      keyword,
    },
  };
};

export const filterTaskSuccess = (data) => {
  return {
    type: taskConstants.FILTER_TASK_SUCCESS,
    payload: {
      data,
    },
  };
};

export const addTask = (title, description) => {
  return {
    type: taskConstants.ADD_TASK,
    payload: {
      title,
      description,
    },
  };
};

export const addTaskSuccess = (data) => {
  return {
    type: taskConstants.ADD_TASK_SUCCESS,
    payload: {
      data,
    },
  };
};

export const addTaskFailed = (error) => {
  return {
    type: taskConstants.ADD_TASK_FAIL,
    payload: {
      error,
    },
  };
};

export const taskEditing = (taskEditing) => {
  return {
    type: taskConstants.TASK_EDITING,
    payload: {
      taskEditing,
    },
  };
};

export const updateTask = (title, description, status = STATUSES[0].value) => {
  return {
    type: taskConstants.UPDATE_TASK,
    payload: {
      title,
      description,
      status,
    },
  };
};

export const updateTaskSuccess = (data) => {
  return {
    type: taskConstants.UPDATE_TASK_SUCCESS,
    payload: {
      data,
    },
  };
};

export const updateTaskFailed = (error) => {
  return {
    type: taskConstants.UPDATE_TASK_FAIL,
    payload: {
      error,
    },
  };
};

export const deleteTask = (id) => {
  return {
    type: taskConstants.DELETE_TASK,
    payload: {
      id,
    },
  };
};

export const deleteTaskSuccess = (id) => {
  return {
    type: taskConstants.DELETE_TASK_SUCCESS,
    payload: {
      id,
    },
  };
};

export const deleteTaskFailed = (error) => {
  return {
    type: taskConstants.DELETE_TASK_FAIL,
    payload: {
      error,
    },
  };
};
