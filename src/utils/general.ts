import { BaseTodoProps } from "../context/GlobalContext";

// updates all subTask when root task is checked
export const updateAllSubTodoIsChecked = (isParentChecked:boolean,subTodo:BaseTodoProps[]) => {
    return subTodo.map((item:BaseTodoProps) => ({...item, isChecked: !isParentChecked}));
}

// update specific subtask
export const updateSpecificSubTodoIsChecked = (id:string, subTodo:BaseTodoProps[]) => {
    return subTodo.map((item:BaseTodoProps) => item.id === id ? ({...item, isChecked: !item.isChecked}):item);
}

//checks whether there is atleast one subtask that is unchecked
export const findOneUnChecked = (subTodo:BaseTodoProps[]) => {
    return subTodo.some((todo:BaseTodoProps) => todo.isChecked !== true);
}