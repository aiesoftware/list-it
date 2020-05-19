import React, {Component} from 'react';
import classes from './Header.module.css';

const Header = () => {
  return (
    <header className={classes.container}>
      <h1>List-it</h1>
    </header>
  )
};

export default Header;