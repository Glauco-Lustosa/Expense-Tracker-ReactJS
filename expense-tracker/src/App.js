import logo from './logo.svg';
import './App.css';
import useStyles from './styles';
import React from 'react'
import Details from './components/Details/Details'
import Main from './components/Main/Main'
import { Grid } from '@material-ui/core'
function App() {
  const classes = useStyles()
  return (
    <div className="App">
      <Grid
        container
        spacing={0}
        alignItems='center'
        justifyContent='center'
        style={{ height: '100vh' }}
        classename={classes.grid}
      >
        <Grid item xs={12} sm={4}>
          <Details title='Income'></Details>
        </Grid>

        <Grid item xs={12} sm={3}>
          <Main></Main>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Details title='Expense'></Details>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
