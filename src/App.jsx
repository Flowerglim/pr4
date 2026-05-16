import { useEffect, useState } from 'react';
import {Routes, Route} from 'react-router-dom';
import TaskPage from './pages/TasksPage';
import AboutPage from './pages/AboutPage';
import './App.css';

import Header from './components/Header';
import TaskList from './components/TaskList';
import Catalog from './components/Catalog';
import MyButton from './components/Button';
import logo from './assets/images/MIREA_Gerb_Colour.jpg';
import Footer from './components/Footer';
import TaskForm from './components/TaskForm';

function App() {

  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(res => res.json())
    .then(data => {
      setTasks(data);
      setLoading(false);
    });
  }, []);

  const addTask = (text) => {
    setTasks([...tasks, { id: Date.now(), title: text }]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="app">
      <Header/>

      <Routes>
        <Route path="/" element={
        <>
      <img className='card-image' src={logo} alt="Логотип приложения" width={100} />
      <TaskForm addTask={addTask} />

      {loading ? <p>Загрузка...</p> : (
        <TaskList tasks={tasks} deleteTask={deleteTask}/>
      )}     
      <Catalog />
      <MyButton />
      </>
        } />
        <Route path="/about" element={<AboutPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;