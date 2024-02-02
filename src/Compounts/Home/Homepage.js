
import React from 'react';
import { useSelector } from 'react-redux';
import TaskList from './TaskList';

const HomePage = () => {
  const tasks = useSelector(state => state.tasks);

  return (
    <div>
      <h1>Homepage</h1>
      <TaskList tasks={tasks} />
    </div>
  );
};

export default HomePage;

