import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import RecycleBinIcon from '../../assets/RecycleBinIcon';
import PlusRoundLineIcon from '../../assets/PlusRoundLineIcon';
import LineAngleRightIcon from '../../assets/LineAngleRightIcon';


interface TodoItemProps {
    todo: any;
    handleAddSubTodo: (parentId: number, childTodo: any) => void;
    onDeleteTodo: (todoId: number) => void;
}
function TodoItem({ handleAddSubTodo, onDeleteTodo, todo }: TodoItemProps) {
    const [subTask, setSubTask] = useState('');
    const [expand, setExpand] = useState(false);
    const [showSubInput, setShowSubInput] = useState(false);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSubTask(e.target.value);
    }
    const handleDelete = () => {
        onDeleteTodo(todo.id);
    }
    const createSubTodo = () => {
        const id = uuidv4();
        handleAddSubTodo(todo.id, { id, text: subTask });
        setShowSubInput(false);
        setSubTask("");
    }
    return (
        <article className='my-2 py-2 px-3 shadow-md rounded-md bg-white'>
            <div className='flex flex-row gap-4 justify-between'>
                <div className='flex gap-3 items-center'>
                    {todo.children.length > 0 && <button type='button' onClick={() => {
                        setExpand(prev => !prev);
                    }}>
                        <LineAngleRightIcon fontWeight={700} fontSize={"0.85rem"} />
                    </button>}
                    <p>{todo.text}</p>
                </div>
                <div className='flex gap-4 items-center'>
                    <button type='button' onClick={() => {
                        setExpand(true);
                        setShowSubInput(true);
                    }}>
                        <PlusRoundLineIcon fontWeight={700} />
                    </button>
                    <button type='button' onClick={handleDelete}>
                        <RecycleBinIcon />
                    </button>
                </div>
            </div>
            <div className={`${expand ? "mt-3" : "h-0 overflow-x-hidden"} pl-8 w-full flex flex-col`}>
                <div className=''>
                    {
                        todo.children.map((childTodo: any) => {
                            return <p key={childTodo.id}>{childTodo.text}</p>
                        })
                    }
                </div>
                {showSubInput && <div className='w-full flex items-center'>
                    <input type="text" value={subTask} onChange={handleChange} placeholder='add sub task'
                        className="min-h-[2rem] px-4 text-sm font-medium placeholder:text-ipColor border-b-2 border-solid  w-full" />
                    <button onClick={createSubTodo} className='min-h-[2rem] bg-btnBg px-4 text-sm text-white rounded-r-md'>Add</button>
                </div>}
            </div>

        </article>
    )
}

export default TodoItem