
import React from 'react'
import Typography from '@material-ui/core/Typography'
import {useForm} from "react-hook-form"
import { MainContainer } from './MainContainer'
import { Form } from './Form'
import { PrimaryButton } from './PrimaryButton'
import { useHistory } from 'react-router-dom'
import {FileInput} from "./FileInput"
import { useData } from '../DataContext'



const StepThree = () => {
    const history=useHistory();
    const {data,setValues}=useData()
    const {control,handleSubmit}=useForm({
        defaultValues:{
            files:data.files
        }
    });



    const onSubmit=(data)=>{
        history.push("/result")
        setValues(data)
    }
    return (
        <MainContainer>
            <Typography component="h2" variant="h5">😀 Step 3</Typography>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <FileInput name="files" control={control}/>


                <PrimaryButton>Next</PrimaryButton>
            </Form>

        </MainContainer>
    )
}

export default StepThree
