import { Del_to_do } from "../reducer/TodoSlicer";
import Store from "../Store";
import { asyncRemoveData } from "../../utils/asyncStorage";
const { dispatch,getState } = Store;

export function remove(key, id) {
  const todo = getState((state) => state.todo);
  const filterData = todo.todo.filter((item) => item.id !== id);
  dispatch(Del_to_do(id));
 asyncRemoveData(key, id);
}

