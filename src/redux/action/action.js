import { storeData } from "../../utils/utils";
import { Add_to_do } from "../reducer/TodoSlicer";
import Store from "../Store";
const {dispatch} = Store;
export function AddTodo(data)
{
    storeData('listData',data);
    dispatch(Add_to_do(data));
}
