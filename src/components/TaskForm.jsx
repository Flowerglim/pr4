import { useState } from 'react';

function TaskForm({ addTask }) {
    const [text, setText] = useState('');

    function handleSubmit(e) {
    e.preventDefault();
    addTask(text);
    setText('');
    }


    return (
        <form className='mysubmitbutton' onSubmit={handleSubmit}>
            <input 
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Введите задачу"
            />
            <button type="submit">Добавить</button>
        </form>
    );
}

export default TaskForm;