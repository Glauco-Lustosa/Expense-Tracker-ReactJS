import logo from './logo.svg';
import './App.css';
import React from 'react'
import Details from './components/Details/Details'
import { Grid } from '@material-ui/core'
function App() {
  return (
    <div className="App">
      <Grid
        container
        spacing={0}
        alignItems='center'
        justify='center'
        style={{ height: '100vh' }}
      >
        <Grid item xs={12} sm={4}>
        <Details></Details>
        </Grid>

        <Grid item xs={12} sm={4}>
        <Details></Details>
        </Grid>

        <Grid item xs={12} sm={4}>
        <Details></Details>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
