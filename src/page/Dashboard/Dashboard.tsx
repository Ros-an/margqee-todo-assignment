import React, { useId, useState } from "react";
import { useGlobalContext } from "../../context/GlobalContext";
import { v4 as uuidv4 } from "uuid";
import Sidebar from "../../section/Sidebar/Sidebar";
import TodoItem from "../../components/TodoItem/TodoItem";
import {
    updateAllSubTodoIsChecked,
    updateSpecificSubTodoIsChecked,
} from "../../utils/general";

//add toast
function Dashboard() {
    const { todos, setTodos } = useGlobalContext();
    const [rootText, setRootText] = useState("");

    const handleAddTodo = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const id = uuidv4();
        setTodos((prevTodos: any) => [
            ...prevTodos,
            {
                id,
                text: rootText,
                isChecked: false,
                children: [],
            },
        ]);
        setRootText("");
    };
    const handleAddSubTodo = (parentId: number, childTodo: any) => {
        setTodos((prev: any) => {
            return prev.map((todo: any) =>
                todo.id === parentId
                    ? {
                        ...todo,
                        isChecked: false,
                        children: [...todo.children, childTodo],
                    }
                    : todo
            );
        });
    };

    const handleDelete = (todoId: number) => {
        setTodos((prev: any) => prev.filter((todo: any) => todo.id !== todoId));
    };

    const updateIsChecked = (
        flag: string,
        parentId: number,
        childId?: number
    ) => {
        if (flag === "parent") {
            setTodos((prev: any) => {
                const updatedTodos = prev.map((todo: any) =>
                    todo.id === parentId
                        ? {
                            ...todo,
                            isChecked: !todo.isChecked,
                            children: updateAllSubTodoIsChecked(
                                todo.isChecked,
                                todo.children
                            ),
                        }
                        : todo
                );
                return updatedTodos;
            });
        }
        if (flag === "child" && childId) {
            setTodos((prev: any) => {
                const updatedTodos = prev.map((todo: any) =>
                    todo.id === parentId
                        ? {
                            ...todo,
                            children: updateSpecificSubTodoIsChecked(
                                childId,
                                todo.children
                            ),
                        }
                        : todo
                );
                return updatedTodos;
            });
        }
    };
    return (
        <section className="flex flex-col min-h-screen items-center justify-start gap-10">
            <div className="w-[100%] sm:w-[70vw] md:w-[60vw] lg:w-[50vw]">
                <form onSubmit={handleAddTodo}>
                    <div className="relative mb-8">
                        <input
                            type="text"
                            value={rootText}
                            onChange={(e: any) => setRootText(e.target.value)}
                            placeholder="Enter task"
                            className="min-h-[3rem] w-full rounded-full px-4 text-base font-medium placeholder:text-ipColor border-solid border border-btnBg"
                        />
                        <button
                            type="submit"
                            className="min-h-[3rem] rounded-r-full px-6 border-r-0 absolute right-0 bg-btnBg text-white font-semibold cursor-pointer text-lg"
                        >
                            Add
                        </button>
                    </div>
                </form>
                <div className="px-4">
                    {todos.map((todo: any) => (
                        <TodoItem
                            key={todo.id}
                            todo={todo}
                            handleAddSubTodo={handleAddSubTodo}
                            onDeleteTodo={handleDelete}
                            handleIsChecked={updateIsChecked}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Dashboard;
