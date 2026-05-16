import { useEffect, useState } from 'react';
import TaskItem from './TaskItem';

function TaskList({tasks, deleteTask}) {


     return (
        <ul className='main'>
            {tasks.map((task) => (
                <TaskItem
                key={task.id}
                task={task}
                deleteTask={deleteTask}
                />              
            ))}
        </ul>
    );
}

export default TaskList;