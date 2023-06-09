import React, { useState } from "react";
import {
    BaseTodoProps,
    TodoProps,
    useGlobalContext,
} from "../../context/GlobalContext";
import { v4 as uuidv4 } from "uuid";
import TodoItem from "../../components/TodoItem";
import {
    findOneUnChecked,
    updateAllSubTodoIsChecked,
    updateSpecificSubTodoIsChecked,
} from "../../utils/general";
import Navbar from "../../components/Navbar";

//add toast
function Dashboard() {
    const { todos, setTodos } = useGlobalContext();
    const [rootText, setRootText] = useState("");

    // adds todo entry to list of todos
    const handleAddTodo = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const id = uuidv4();
        const entry: TodoProps = {
            id,
            text: rootText,
            isChecked: false,
            children: [],
        };
        setTodos((prev: TodoProps[]) => [
            ...prev,
            {
                ...entry,
            },
        ]);
        setRootText("");
    };

    // adds subtodo to its root todo
    const handleAddSubTodo = (parentId: string, childTodo: BaseTodoProps) => {
        setTodos((prev: TodoProps[]) => {
            return prev.map((todo: TodoProps) =>
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

    // remove todo and subtodo depending on id passed
    const handleDelete = (todoId: string, subTodoId?: string) => {
        if (subTodoId) {
            setTodos((prev: TodoProps[]) =>
                prev.map((todo: TodoProps) => {
                    if (todo.id === todoId) {
                        const updateSubTodo = todo.children.filter(
                            (subTodo: BaseTodoProps) => subTodo.id !== subTodoId
                        );
                        return {
                            ...todo,
                            children: updateSubTodo,
                            isChecked: !findOneUnChecked(updateSubTodo),
                        };
                    } else {
                        return todo;
                    }
                })
            );
        } else {
            setTodos((prev: TodoProps[]) => prev.filter((todo: TodoProps) => todo.id !== todoId));
        }
    };

    // manages check functionality, whether subtask or root task is checked
    const updateIsChecked = (
        flag: string,
        parentId: string,
        childId?: string
    ) => {
        if (flag === "parent") {
            setTodos((prev: TodoProps[]) => {
                const updatedTodos = prev.map((todo: TodoProps) =>
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
            setTodos((prev: TodoProps[]) => {
                const updatedTodos = prev.map((todo: TodoProps) => {
                    if (todo.id === parentId) {
                        const updatedChildren = updateSpecificSubTodoIsChecked(
                            childId,
                            todo.children
                        );
                        return {
                            ...todo,
                            isChecked: !findOneUnChecked(updatedChildren),
                            children: updatedChildren,
                        };
                    } else {
                        return todo;
                    }
                });
                return updatedTodos;
            });
        }
    };
    return (
        <section className="flex flex-col min-h-screen items-center justify-start gap-10">
            <Navbar />

            {/* UI for Root Todo Input Box */}
            <div className="w-[100%] px-4 sm:w-[70vw] sm:px-0 md:w-[50vw] lg:w-[40vw]">
                <form onSubmit={handleAddTodo}>
                    <div className="relative mb-8">
                        <input
                            type="text"
                            value={rootText}
                            onChange={(e: any) => setRootText(e.target.value)}
                            placeholder="Enter task"
                            className="min-h-[3rem] w-full rounded-full px-4 text-base font-medium placeholder:text-ipColor border-solid border border-btnBg"
                            required
                            pattern=".*"
                        />
                        <button
                            type="submit"
                            className="min-h-[3rem] rounded-r-full px-6 border-r-0 absolute right-0 bg-btnBg text-white font-semibold cursor-pointer text-lg"
                        >
                            Add
                        </button>
                    </div>
                </form>

                {/* List all Root Todo */}
                <div className="px-4 max-h-[70vh] overflow-x-auto">
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
