
import React from 'react'
import Typography from '@material-ui/core/Typography'
import {useForm} from "react-hook-form"
import { MainContainer } from './MainContainer'
import { Form } from './Form'
import { Input } from './Input'
import { PrimaryButton } from './PrimaryButton'
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useHistory } from 'react-router-dom'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import parsePhoneNumberFromString from 'libphonenumber-js'
import { useData } from '../DataContext'





const schema=yup.object().shape({
    email:yup
    .string()
    .email("Email should have correct format")
    .required("Email is a required field")
})

const normalizePhoneNumber=value=>{
    const phoneNumber=parsePhoneNumberFromString(value)
    if(!phoneNumber){
        return value
    }
    return(
        phoneNumber.formatInternational()
    )
}

const StepTwo = () => {
    const history=useHistory();
    const {data,setValues}=useData()
    const {register,handleSubmit,errors,watch }=useForm({
        defaultValues:{email:data.email,hasPhone:data.hasPhone,phoneNumber:data.phoneNumber},
        mode:"onBlur",
        resolver:yupResolver(schema)
    });

    const hasPhone=watch("hasPhone")

    const onSubmit=(data)=>{
        history.push("/step3")
        setValues(data)
    }
    return (
        <MainContainer>
            <Typography component="h2" variant="h5">😀 Step 2</Typography>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Input 
                    ref={register}
                    id="email"
                    type="email"
                    label="Email"
                    name="email"
                    required
                    error={!!errors.email}
                    helperText={errors?.email?.message}
                />

                <FormControlLabel 
                    control={
                        <Checkbox 
                        defaultValue={data.hasPhone}
                        defaultChecked={data.hasPhone}
                        name="hasPhone" 
                        inputRef={register} 
                        color="primary" />
                    }
                    label="Do you have a phone?"
                />
                {
                    hasPhone&&(
                        <Input 
                            ref={register}
                            id="phoneNumber"
                            type="tel"
                            label="Phone Number"
                            name="phoneNumber"
                            onChange={event=>{
                                event.target.value=normalizePhoneNumber(event.target.value)
                            }}
                        />
                    )
                }



                <PrimaryButton>Next</PrimaryButton>
            </Form>

        </MainContainer>
    )
}

export default StepTwo
