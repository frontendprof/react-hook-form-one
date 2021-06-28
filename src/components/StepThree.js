
import React from 'react'
import Typography from '@material-ui/core/Typography'
import {useForm} from "react-hook-form"
import { MainContainer } from './MainContainer'
import { Form } from './Form'
// import { Input } from './Input'
import { PrimaryButton } from './PrimaryButton'
// import * as yup from 'yup';
// import { yupResolver } from '@hookform/resolvers/yup';
import { useHistory } from 'react-router-dom'
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import parsePhoneNumberFromString from 'libphonenumber-js'
import {FileInput} from "./FileInput"




// const schema=yup.object().shape({
//     email:yup
//     .string()
//     .email("Email should have correct format")
//     .required("Email is a required field")
// })


const StepThree = () => {
    const history=useHistory();
    const {control,handleSubmit}=useForm();



    const onSubmit=(data)=>{
        history.push("/result")
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
