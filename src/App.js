import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Button } from '@mui/material';
import { makeStyles } from '@mui/styles'; // Correct import

const useStyles = makeStyles((theme) => ({
  button: {
    color: "white",
    backgroundColor: theme.palette.primary.main // Updated for MUI's theme usage
  }
}));

function App() {
  const classes = useStyles();
  return (
    <>
      <Button className={classes.button}>Button</Button>
    </>
  );
}

export default App;
