import React,{useState,useContext,} from 'react'
import {Link,useHistory} from 'react-router-dom'
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import { TextField, Button } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
    root: {
     
     
    },
    
    submit: {
      marginTop:"30px",
    
     
    },
    paper: {
        margin: theme.spacing(4, 0),
        display: "flex",
        flexDirection: "column",
        
      },
  }));
const Reset = () => {
    const classes = useStyles();
    const [email,setEmail] = useState("")
    return (

<Grid container component="main" className={classes.root}>

<div className={classes.paper}>
<TextField
          label="email"
         
          variant="outlined"
                  required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          />

<Button
          variant="contained"
          color="primary"
          variant="contained"

          
          className={classes.submit}
        >
         Reset Password
        </Button>
        </div>


   
    </Grid>);
}
 
export default Reset;