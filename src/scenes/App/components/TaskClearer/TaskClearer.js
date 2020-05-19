import React, {Component} from 'react';
import classes from './TaskClearer.module.css';

import Button from '../../../../components/Button';

const TaskClearer = () => {
  return (
    <Button
      size="full"
      type="secondary"
    >
      Clear tasks
    </Button>
  )
};

export default TaskClearer;