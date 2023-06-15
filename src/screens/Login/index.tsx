import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginFormSchema } from './schema';

import BackgroundCarPng from '../../assets/images/backgroundCar.png';
import LogoPng from '../../assets/icons/logo.png';
import {
    ContainerHome,
    ContainerImage,
    ContainerFormLogin,
    FormLogin,
    ContainerInputs,
    ContainerButtons,
} from './styles';
import { ButtonPrimary } from '../../components/Button';
import { useDispatch } from 'react-redux';
import { setUser } from '../../store/modules/user/reducer';

type TLoginFormInputs = z.infer<typeof loginFormSchema>

export const Login = () => {
    //Hook react hourter dom
    const navigate = useNavigate();
    const dispatch = useDispatch();

    //React Hook Form
    const { 
        register, 
        handleSubmit, 
        formState: { isSubmitting, errors, isValid } 
    } = useForm<TLoginFormInputs>({
        resolver: zodResolver(loginFormSchema)
    });


    const submitLogin = (data: TLoginFormInputs) => {
        if (isValid) {
            dispatch(setUser({
                name: "Gabriel Lennon",
                imageUser: "https://github.com/gabriellennon.png",
                emailUser: "gabriellennon7@gmail.com"
            }))
            localStorage.setItem('@userInfo', JSON.stringify({ emailUser: data.email}))
            navigate('/')
        }
    }

    return (
        <ContainerHome >    
            <ContainerImage >
                <img src={BackgroundCarPng} alt="" />
            </ContainerImage>
            <ContainerFormLogin>
                <img src={LogoPng} alt="" />
                <FormLogin onSubmit={handleSubmit(submitLogin)}>
                    <ContainerInputs>
                        <label>E-mail</label>
                        <input 
                            type="text" 
                            {...register('email')}
                        />
                        {errors.email && <p>{errors.email?.message}</p>}
                    </ContainerInputs>
                    <ContainerInputs>
                        <label>Senha</label>
                        <input 
                            type="password" 
                            {...register('password')}
                        />
                        {errors.password &&  <p>{errors.password?.message}</p>}
                    </ContainerInputs>
                    <ContainerButtons>
                        <ButtonPrimary type="submit" title='Entrar' disabled={isSubmitting} />
                        <p>Primeira vez aqui? <a>Clique aqui</a></p>
                    </ContainerButtons>
                </FormLogin>
            </ContainerFormLogin>
        </ContainerHome>
    )
}