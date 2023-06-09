export const updateAllSubTodoIsChecked = (isParentChecked:boolean,subTodo:any) => {
    return subTodo.map((item:any) => ({...item, isChecked: !isParentChecked}));
}
export const updateSpecificSubTodoIsChecked = (id:number, subTodo:any) => {
    return subTodo.map((item:any) => item.id === id ? ({...item, isChecked: !item.isChecked}):item);
}