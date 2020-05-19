import React, {Component, Fragment} from 'react';
import classes from './App.module.css';

import Header from '../components/Header';
import Footer from '../components/Footer';
import TaskAdder from './components/TaskAdder';
import TaskList from './components/TaskList';
import TaskClearer from './components/TaskClearer';

const App = () => {
  return (
    <Fragment>
      <Header />

      <main className={classes.container}>
        <TaskAdder />
        <TaskList />
        <TaskClearer />
      </main>
      
      <Footer />
    </Fragment>
  );
};

export default App;