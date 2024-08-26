import { createSlice } from "@reduxjs/toolkit";

function alreadyExist(newItem) {
    let items = JSON.parse(localStorage.getItem("todo")) || []
    for (let i = 0; i < items.length; i++) {
        if (newItem.toDo === items[i].toDo)
            return true;
    }
    return false

}

const taskSlice = createSlice({
    name: "to do list",
    initialState: JSON.parse(localStorage.getItem("todo")) || [],
    reducers: {
        add(state, action) {

            if (!alreadyExist(action.payload)) {
                state.push(action.payload)
                // console.log(action.payload)
                localStorage.setItem("todo", JSON.stringify(state))
            }





        },
        check(state, action) {
            state[action.payload.index].taskComplete = action.payload.status;
            localStorage.setItem("todo", JSON.stringify(state))
            console.log(state[action.payload.index].taskComplete)

           
           
        },
        deleteTask(state,action)
        {
            state=state.filter((item)=>item.toDo!==action.payload);
            localStorage.setItem("todo", JSON.stringify(state))
            return state
        }
    }
})

export const { add, check,deleteTask } = taskSlice.actions;

export default taskSlice.reducer