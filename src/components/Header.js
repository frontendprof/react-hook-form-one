
import React from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles=makeStyles(theme=>({
    root:{
        margin:theme.spacing(3,0,2),
        textAlign:"center",
        fontSize:"40px",
        color:"orangered",
        textShadow:"1px 1px darkmagenta",
        fontFamily:"Permanent Marker"

    }
}))

const Header = () => {
    const classes=useStyles();
    return (
        <div>
           <Typography component="h1" variant="h5" className={classes.root}>
                REact Hook Form Learning
           </Typography>
        </div>
    )
}

export default Header
