
import React from 'react'
import {Button} from "@material-ui/core"

import { makeStyles } from '@material-ui/core/styles'

const useStyles=makeStyles(theme=>({
    root:{
        margin:theme.spacing(3,0,2),

    }
}))


export const PrimaryButton = ({children,props}) => {
    const classes=useStyles();
    return (
        <Button type="submit" fullWidth variant="contained" color="primary" {...props} className={classes.root}>
            {children}
        </Button>
    )
}
