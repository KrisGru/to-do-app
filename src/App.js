import { useState } from 'react';
import React from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask'

function App() {
  const [showForm, setShowForm] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'visit doctor',
      day: '28.08.2021',
      important: true,
    },
    {
      id: 2,
      text: 'documents to school',
      day: '21.04.2021',
      important: false,
    },
    {
      id: 3,
      text: 'train ride, creativity level hard',
      day: '28.11.2021',
      important: true,
    },
  ])

// delete tasks
const deleteTask= (id) => {
  setTasks(tasks.filter(task => task.id !== id))
}

//toogle important
const toggleImportant= (id) => {
  setTasks(tasks.map(task => task.id === id ? {...task, important: !task.important } : task))
}

//Add Task
const addTask = (task) => {
  const id = task.text
  const newTask = { id, ...task }
  setTasks([ ...tasks, newTask])
}

  return (
    <div className="container">
      <Header onShowForm={()=> setShowForm(!showForm)} showForm={showForm}/>
      {showForm ? <AddTask onAdd={addTask} /> : null}
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleImportant}/>
    </div>
  );
}

export default App;
