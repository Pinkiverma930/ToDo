import { asyncSaveData } from "../../utils/asyncStorage";
import { Add_to_do } from "../reducer/TodoSlicer";
import Store from "../Store";

const {dispatch} = Store;

export function addItem(data)
{
    asyncSaveData("key",data)
    dispatch(Add_to_do(data));
}