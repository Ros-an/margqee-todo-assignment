import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import RecycleBinIcon from "../../assets/RecycleBinIcon";
import PlusRoundLineIcon from "../../assets/PlusRoundLineIcon";
import LineAngleRightIcon from "../../assets/LineAngleRightIcon";
import MemoPencilIcon from "../../assets/PencilIcon";
import MemoEllipseShapeLineIcon from "../../assets/EllipseShapeLineIcon";
import MemoGreenCheckmarkLineIcon from "../../assets/GreenCheckmarkLineIcon";
import MemoTriangleBottomArrowIcon from "../../assets/TriangleBottomArrowIcon";

interface TodoItemProps {
    todo: any;
    handleAddSubTodo: (parentId: number, childTodo: any) => void;
    onDeleteTodo: (todoId: number) => void;
    handleIsChecked: (
        flag: "parent" | "child",
        parentId: number,
        childId?: number
    ) => void;
}
function TodoItem({
    handleAddSubTodo,
    onDeleteTodo,
    handleIsChecked,
    todo,
}: TodoItemProps) {
    const [subTask, setSubTask] = useState("");
    const [expand, setExpand] = useState(false);
    // const [showSubInput, setShowSubInput] = useState(false);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSubTask(e.target.value);
    };
    const handleDelete = () => {
        onDeleteTodo(todo.id);
    };
    const createSubTodo = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const id = uuidv4();
        handleAddSubTodo(todo.id, { id, text: subTask, isChecked: false });
        // setShowSubInput(false);
        setSubTask("");
    };
    // console.log("todo", todo);
    return (
        <article className="my-2 py-2 px-3 shadow-md rounded-md bg-white">
            <div className="flex flex-row gap-4 justify-between">
                <div className="flex gap-3 items-center">
                    <div className="flex gap-2 items-center">
                        <button
                            type="button"
                            onClick={() => handleIsChecked("parent", todo.id)}
                        >
                            {todo.isChecked ? (
                                <MemoGreenCheckmarkLineIcon />
                            ) : (
                                <MemoEllipseShapeLineIcon />
                            )}
                        </button>
                        <p className={`${todo.isChecked ? "line-through" : ""}`} style={{ overflowWrap: "anywhere" }}>
                            {todo.text}
                        </p>
                    </div>
                </div>
                <div className="flex gap-4 items-center">
                    {(expand || todo.children.length > 0) && (
                        <button
                            type="button"
                            onClick={() => {
                                setExpand((prev) => !prev);
                            }}
                        >
                            <MemoTriangleBottomArrowIcon fontWeight={700} fontSize={"0.85rem"} className={`transition delay-50 ${expand ? "" : "rotate-[-90deg]"}`} />
                        </button>
                    )}
                    {todo.children.length === 0 && !expand && (<button
                        type="button"
                        onClick={() => {
                            setExpand(true);
                            // setShowSubInput(true);
                        }}
                    >
                        <PlusRoundLineIcon fontWeight={700} />
                    </button>)}
                    <button type="button" onClick={() => undefined}>
                        <MemoPencilIcon />
                    </button>
                    <button type="button" onClick={handleDelete}>
                        <RecycleBinIcon />
                    </button>
                </div>
            </div>
            <div
                className={`${expand ? "mt-3" : "h-0 overflow-x-hidden"
                    } pl-5 w-full flex flex-col`}
            >
                <div className="">
                    {todo.children.map((childTodo: any) => {
                        return (
                            <div key={childTodo.id} className="flex gap-2 items-center py-1">
                                <button
                                    type="button"
                                    onClick={() =>
                                        handleIsChecked("child", todo.id, childTodo.id)
                                    }
                                >
                                    {childTodo.isChecked ? (
                                        <MemoGreenCheckmarkLineIcon fontSize={"0.8rem"} />
                                    ) : (
                                        <MemoEllipseShapeLineIcon fontSize={"0.8rem"} />
                                    )}
                                </button>
                                <p className={`${childTodo.isChecked ? "line-through" : ""}`} style={{ overflowWrap: "anywhere" }}>
                                    {childTodo.text}
                                </p>
                            </div>
                        );
                    })}
                </div>
                <div className="w-full flex items-center">
                    <form onSubmit={createSubTodo} className="w-full">
                        <input
                            type="text"
                            value={subTask}
                            onChange={handleChange}
                            placeholder="Add sub task..."
                            className="min-h-[2rem] px-2 text-sm font-medium placeholder:text-ipColor w-full bg-gray-100 rounded-md"
                        />
                    </form>
                    {/* <button onClick={createSubTodo} className='min-h-[2rem] bg-btnBg px-4 text-sm text-white rounded-r-md'>Add</button> */}
                </div>
            </div>
        </article>
    );
}

export default TodoItem;
