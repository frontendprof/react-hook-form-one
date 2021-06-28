
import React from 'react'
import Typography from '@material-ui/core/Typography'
import { MainContainer } from './MainContainer'
import { useData } from '../DataContext'
import {Link} from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {List,ListItem,ListItemIcon,ListItemText} from '@material-ui/core';
import InsertDriveFileOutlinedIcon from '@material-ui/icons/InsertDriveFileOutlined';

const useStyles=makeStyles({
    root:{
        marginBottom:"30px"
    },
    table:{
        marginBottom:"30px"
    }
})


const Result = () => {
    const classes=useStyles()
    const {data}=useData()
    const entries=Object.entries(data).filter(entry=>entry[0]!=="files")
    const {files}=data;
    return (
        <MainContainer>
            <Typography component="h2" variant="h5">😀 Form Values</Typography>
            <TableContainer component={Paper} className={classes.root}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>

                            <TableCell>
                                Field
                            </TableCell>

                            <TableCell align="right">
                                Value
                            </TableCell>

                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {entries.map(entry=>(
                            <TableRow key={entry[0]}>

                                <TableCell>
                                    {entry[0]}
                                </TableCell>

                                <TableCell align="right">
                                    {entry[1].toString()}
                                </TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            {files &&(
                <>
                <Typography component="h2" variant="h5">📁 Files</Typography>
                <List>
                    {
                        files.map((f,ind)=>(
                            <ListItem key={ind}>
                                <ListItemIcon>
                                    <InsertDriveFileOutlinedIcon />
                                </ListItemIcon>
                                <ListItemText primary={f.name} secondary={f.size}/>
                            </ListItem>
                        ))
                    }
                </List>
                </>
            )}
            <Link to="/">Start Over</Link>

    </MainContainer>
    )
}

export default Result