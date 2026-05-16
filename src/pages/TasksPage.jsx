import TaskList from "../components/TaskList";

function TasksPage({ tasks, deleteTask }) {
    return (
        <div className="app">
            <h2>Список задач</h2>
            <TaskList tasks={tasks} deleteTask={deleteTask}/>
        </div>
    );
}

export default TasksPage;
