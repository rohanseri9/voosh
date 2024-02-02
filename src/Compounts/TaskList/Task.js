import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask } from './taskActions';

const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  return (
    <div>
      <span>{task.title}</span>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Task;