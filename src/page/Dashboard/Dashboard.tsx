import React, { useId, useState } from 'react'
import { useGlobalContext } from '../../context/GlobalContext';
import { v4 as uuidv4 } from 'uuid';
import Sidebar from '../../section/Sidebar/Sidebar';
import TodoItem from '../../components/TodoItem/TodoItem';

//add toast
function Dashboard() {
    const { todos, setTodos } = useGlobalContext();
    const [rootText, setRootText] = useState('')

    const handleAddTodo = () => {
        const id = uuidv4();
        setTodos((prevTodos: any) => [
            ...prevTodos,
            {
                id,
                text: rootText,
                children: [],
            },
        ]);
        setRootText('');
    };
    const handleAddSubTodo = (parentId: number, childTodo: any) => {
        setTodos((prev: any) => {
            return prev.map((todo: any) => todo.id === parentId ? { ...todo, children: [...todo.children, childTodo] } : todo);
        });
    };

    const handleDelete = (todoId: number) => {
        setTodos((prev: any) => prev.filter((todo: any) => todo.id !== todoId));
    };

    return (
        <section className='flex flex-col min-h-screen items-center justify-center gap-10'>
            <div className='min-w-[50%]'>
                <div className='relative mb-8'>
                    <input type="text" value={rootText} onChange={(e: any) => setRootText(e.target.value)} placeholder='Enter task'
                        className="min-h-[3rem] w-full rounded-full px-4 text-base font-medium placeholder:text-ipColor border-solid border border-btnBg"
                    />
                    <button type='button' onClick={handleAddTodo}
                        className='min-h-[3rem] rounded-r-full px-6 border-r-0 absolute right-0 bg-btnBg text-white font-semibold cursor-pointer text-lg'
                    >Add</button>
                </div>
                <div className='px-4'>
                    {todos.map((todo: any) => <TodoItem key={todo.id} todo={todo} handleAddSubTodo={handleAddSubTodo} onDeleteTodo={handleDelete} />)}
                </div>
            </div>
        </section>
    )
}

export default Dashboard