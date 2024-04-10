import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todo :[],
};

const Todoslicer = createSlice({
    name : 'todoSlicer',
    initialState,
    reducers :
    {
        Add_to_do : (state=initialState,action)=>
        {
            state.todo=(action.payload);
            console.log(state);
           
        },
        Del_to_do :(state,action)=>
        {
            state.todo = state.todo.filter(todo=>todo.id!=action.payload)
        },
    }
});

export const {Add_to_do,Del_to_do} = Todoslicer.actions;
export default  Todoslicer.reducer;

