import React, {Fragment} from 'react';
import classes from './TaskAdder.module.css';

import TextInput from '../../../../components/TextInput';
import Button from '../../../../components/Button';

const TaskAdder = () => {
  return (
    <Fragment>
      <div className={classes.container}>
        <TextInput 
          placeholder="new task"
        />

        <Button 
          size="full"
          type="primary"
        >
          Add task
        </Button>
      </div>
    </Fragment>
  );
};

export default TaskAdder;