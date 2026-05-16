function TaskItem({ task, deleteTask }) {
    return (
        <li>
            {task.title} - {task.completed ? '✅': '❌'}
            <button onClick={() => deleteTask(task.id)}>Удалить</button>
        </li>
    );
}

export default TaskItem;