import React from 'react'

function CounterIcon({ count }: { count: number }) {
    return (
        <article className='w-4 h-4 flex justify-center items-center'>
            <span className='text-sm text-gray-500'>{count}</span>
        </article>
    )
}

export default CounterIcon