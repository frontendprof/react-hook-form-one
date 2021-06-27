
import React from 'react'
import {Controller} from "react-hook-form"
import Paper from '@material-ui/core/Paper';
import {List,ListItem,ListItemIcon,ListItemText} from '@material-ui/core';
import InsertDriveFileOutlinedIcon from '@material-ui/icons/InsertDriveFileOutlined';
import CloudUploadOutlinedIcon from '@material-ui/icons/CloudUploadOutlined';
import Dropzone from 'react-dropzone'



export const FileInput = ({control,name}) => {
    return (
        <Controller
            control={control}
            name={name}
            defaultValue={[]}
            render={({onChange,onBlur,value})=>(
                <>
                    <Dropzone onDrop={onChange}>
                        {
                            ({getRootProps,getInputProps})=>(
                            <Paper variant="outlined" {...getRootProps()}>
                                <CloudUploadOutlinedIcon />
                                <input name={name} onBlue={onBlur} {...getInputProps()}/>
                                <p>Drag and drop files here, or click to select files</p>
                            </Paper>)
                        }
                    </Dropzone>

                    <List>
                        {value.map((f,ind)=>(
                            <ListItem key={ind}>
                                <ListItemIcon>
                                    <InsertDriveFileOutlinedIcon />
                                </ListItemIcon>
                                <ListItemText primary={f.name} secondary={f.size}/>
                            </ListItem>
                        ))}
                    </List>
                </>
            )}
        />
    )
}
