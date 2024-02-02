import React from 'react';
import Task from './Task';

const TaskList = ({ tasks }) => {
  return (
    <div>
      <h2>To Do</h2>
      {tasks.filter(task => task.status === 'TO DO').map(task => (
        <Task key={task.id} task={task} />
      ))}
      <h2>In Progress</h2>
      {tasks.filter(task => task.status === 'IN PROGRESS').map(task => (
        <Task key={task.id} task={task} />
      ))}
      <h2>Completed</h2>
      {tasks.filter(task => task.status === 'COMPLETED').map(task => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;