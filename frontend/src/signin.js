import React from 'react';
import LoginButton from './components/LoginButton';


import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      height: '100vh',
    },
    image: {
        //https://source.unsplash.com/random
        //https://ffwallpaper.com/wallup/nutrition/nutrition-12.jpg
      backgroundImage: 'url(https://ffwallpaper.com/wallup/nutrition/nutrition-12.jpg)',
      backgroundRepeat: 'no-repeat',
      backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    paper: {
      margin: theme.spacing(8, 4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    button: {
        alignItems: 'center'
       
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

const Signin = () => {
    const classes = useStyles();
    
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}  >
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          
        </div>
        <div className={classes.paper}>
            <h1>Welcome to FoodBook</h1> 
            <p>A website helps you calculate calories</p>
        </div>

        <div className={classes.paper}>
            
            <LoginButton />
            
        </div>
        
      </Grid>
      
    </Grid>
  );
};

export default Signin;