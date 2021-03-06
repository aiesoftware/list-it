import React, {Component, Fragment} from 'react';
import classes from './App.module.css';

import Header from '../components/Header';
import Footer from '../components/Footer';
import TaskAdder from './components/TaskAdder';
import ToggleableTaskList from './components/ToggleableTaskList';
import TaskClearer from './components/TaskClearer';

const App = () => {
  return (
    <Fragment>
      <main className={classes.container}>
        <TaskAdder />
        <ToggleableTaskList />
        <TaskClearer />
      </main>
      
      <Footer />
    </Fragment>
  );
};

export default App;