import {
  fork,
  take,
  call,
  put,
  delay,
  takeLatest,
  //select,
  takeEvery,
  select,
} from "redux-saga/effects";
import * as taskTypes from "./../constants/task";
import { getList, addTask, taskEdit, taskDelete } from "./../apis/task";
import { STATUS_CODE } from "./../constants/index";
import {
  fetchListTaskSuccess,
  fetchListTaskFailed,
  //filterTaskSuccess,
  addTaskSuccess,
  addTaskFailed,
  fetchListTask,
  updateTaskFailed,
  //addTaskSuccess,
  //addTaskFailed,
  updateTaskSuccess,
  deleteTaskSuccess,
  deleteTaskFailed,
} from "./../actions/task";
import { showLoading, hideLoading } from "./../actions/ui";
import { hideModal } from "./../actions/modal";

/*
B1: Thực thi action fetch task
B2: Gọi API
B2.1: Hiển thị thanh tiến trình (loading...)
B3: Kiểm tra status_code
  - Nếu thành công
  - Nếu thất bại
B4: Tắt loading
B5: Thực thi các công việc tiếp theo
*/

function* watchFetchListTaskAction() {
  while (true) {
    const action = yield take(taskTypes.FETCH_TASK); // nó sẽ chờ cho action fetch_task được dispatch thì mới thực thi câu lệnh phía dưới
    // action sẽ chứa giá trị trả về của action FETCH_TASK gồm type và payload
    yield put(showLoading()); // gọi tới action showloading
    // --- blocking --- //
    const { params } = action.payload;
    const resp = yield call(getList, params);
    //---blocking---//
    const { status, data } = resp;
    if (status === STATUS_CODE.SUCCESS) {
      // dispatch action fetch list task success
      yield put(fetchListTaskSuccess(data));
    } else {
      // dispatch action fetch list task fail
      yield put(fetchListTaskFailed(data));
    }
    yield delay(1000); // cho thanh loading hiển thị thêm 10000ms
    yield put(hideLoading());
  }
}

//http://localhost:3000/task?q=learning : cái này quan trọng ?q=learning
function* filterTaskSaga({ payload }) {
  // {payload} chỉ lấy giá trị thuộc tính payload mà thôi, payload thì lấy cả {} trả về trong return gồm type và payload của action
  yield delay(500); // phải chờ 0.5 giây mới thực thi câu lệnh dưới để nhập hết tất cả chữ cần tìm kiếm
  const { keyword } = payload;
  yield put(
    fetchListTask({
      q: keyword,
    }),
  );
  // const list = yield select((state) => state.task.listTask);
  // const filterTask = list.filter((task) =>
  //   task.title.trim().toLowerCase().includes(keyword.trim().toLowerCase()),
  // );
  // yield put(filterTaskSuccess(filterTask));
}

function* addTaskSaga({ payload }) {
  // là giá trị payload ở trong action ADD_TASK
  const { title, description } = payload;
  yield put(showLoading());
  const resp = yield call(addTask, {
    // call(function, đối số cho hàm)
    title,
    description,
    status: Math.floor(Math.random() * 3 + 0), // (max-min+1)+ min
  });
  const { data, status } = resp;
  if (status === STATUS_CODE.CREATED) {
    yield put(addTaskSuccess(data));
  } else {
    yield put(addTaskFailed(data));
  }
  yield put(hideModal());
  yield delay(1000);
  yield put(hideLoading());
}

function* editTaskSaga({ payload }) {
  const { title, description } = payload;
  const status = parseInt(payload.status, 10);
  yield put(showLoading());
  const idTaskEditing = yield select((state) => state.task.taskEditing.id);
  const resp = yield call(
    taskEdit,
    { title, description, status },
    idTaskEditing,
  );
  const { data } = resp;
  const statusSuccess = resp.status;
  if (statusSuccess === STATUS_CODE.SUCCESS) {
    yield put(updateTaskSuccess(data));
  } else {
    yield put(updateTaskFailed(data));
  }
  yield put(hideModal());
  yield delay(1000);
  yield put(hideLoading());
}

function* deleteTaskSaga({ payload }) {
  const { id } = payload;
  yield put(showLoading());
  const resp = yield call(taskDelete, id);
  const statusSuccess = resp.status;
  if (statusSuccess === STATUS_CODE.SUCCESS) {
    yield put(deleteTaskSuccess(id));
  } else {
    yield put(deleteTaskFailed(resp.data));
  }
  yield put(hideModal());
  yield delay(1000);
  yield put(hideLoading());
}

function* rootSaga() {
  yield fork(watchFetchListTaskAction);
  yield takeLatest(taskTypes.FILTER_TASK, filterTaskSaga); // khi action có types: FILTER_TASK được gọi thì dữ liệu truyền vào cho filterTaskSaga là payload của action đó
  yield takeEvery(taskTypes.ADD_TASK, addTaskSaga);
  yield takeLatest(taskTypes.UPDATE_TASK, editTaskSaga);
  yield takeLatest(taskTypes.DELETE_TASK, deleteTaskSaga);
}

export default rootSaga;
